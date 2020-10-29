import { Component, OnInit } from '@angular/core';
import { Convert } from '../../../@commons/model/convert';
import { Company } from '../../../@commons/model/company';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CompanyService } from '../../../@commons/services/company.service';
import { ConvertService } from '../../../@commons/services/convert.service';
import { AuthService } from '../../../kcauth/services/auth.service';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../../../@commons/model/user';

@Component({
  selector: 'mc-panel-convert',
  templateUrl: './panel-convert.component.html',
  styleUrls: ['./panel-convert.component.scss'],
})
export class PanelConvertComponent implements OnInit {
  converts: Convert[];
  uploadForm: FormGroup;
  company: Company;
  _user: User;

  constructor(
    private convertService: ConvertService,
    private formBuilder: FormBuilder,
    private companyService: CompanyService,
    private authService: AuthService,
  ) {

  }

  ngOnInit(): void {
    this.uploadForm = this.formBuilder.group({
      profile: [''],
    });
    combineLatest([this.companyService.selectedCompany$, this.authService.userObservable$]).pipe(
      map((data) => {
        return {selCompany: data[0], user: data[1]};
      }),
    ).subscribe(result => {
      if (result.selCompany && result.user) {
        this._user = result.user;
        this.company = result.selCompany;
        this.updateCompanies();
      }
    });
  }

  updateCompanies() {
    if (!this.company) {
      return;
    }
    this.convertService.getInvoices(this.company.id, this._user.id).subscribe(list => {
      this.converts = list;
    });
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('profile').setValue(file);
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('document_file', this.uploadForm.get('profile').value);
    formData.append('company_id', this.companyService.selectedCompany.id);
    this.convertService.createFromFile(formData, this._user.id).subscribe(
      (res) => {
        this.updateCompanies();
      },
      (err) => {
      },
    );
  }

  executeParse(id: string) {
    this.convertService.executeParse(id, this._user.id).subscribe((ret) => {
      this.updateCompanies();
    });
  }

  executeGenerate(id: string) {
    this.convertService.executeGenerate(id, this._user.id).subscribe((ret) => {
      this.updateCompanies();
    });
  }

  executeDownload(id: string, role: string) {
    window.location.href = this.convertService.generateDownloadUrl(id, role, this._user.id);
  }
}
