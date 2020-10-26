import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { User } from '../../../@commons/model/user';
import { Company } from '../../../@commons/model/company';
import { CompanyService } from '../../../@commons/services/company.service';
import { AuthService } from '../../../kcauth/services/auth.service';

@Component({
  selector: 'mc-panel-company',
  templateUrl: './panel-company.component.html',
  styleUrls: ['./panel-company.component.scss'],
})
export class PanelCompanyComponent implements OnInit {
  companies: Company[];
  source: LocalDataSource = new LocalDataSource();
  user: User;

  settings = {
    mode: 'internal',
    confirmSave: true,
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      name: {
        title: 'Name',
        type: 'string',
        filter: false,
      },
      address: {
        title: 'Address',
        type: 'string',
        filter: false,
      },
      taxId: {
        title: 'TaxID',
        type: 'string',
        filter: false,
      },
    },
  };

  constructor(
    private companiesService: CompanyService,
    private authService: AuthService,
  ) {
  }

  ngOnInit(): void {
    this.source.onUpdated().subscribe(data => {
    });
    this.authService.userObservable$.subscribe((user) => {
      this.user = user;
      if (user) {
        this.loadCompanies(user.id);
      }
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm(`Are you sure you want to delete "${event.data.name}"?`)) {
      this.companiesService.deleteCompany(event.data, this.user.id).subscribe(result => {
          event.confirm.resolve();
        },
        error => {
          event.confirm.reject();
        });
    } else {
      event.confirm.reject();
    }
  }

  onEditConfirm(event: any) {
    this.companiesService.updateCompany(event.newData, this.user.id).subscribe(result => {
        event.confirm.resolve();
      },
      error => {
        event.confirm.reject();
      });
  }

  onCreateConfirm(event: any) {
    this.companiesService.insertCompany(event.newData, this.user.id).subscribe(result => {
        event.newData.id = result;
        event.confirm.resolve(event.newData);
      },
      error => {
        event.confirm.reject();
      });
  }

  private loadCompanies(userId: string) {
    this.companiesService.getCompanies(userId).subscribe(data => {
      this.companies = data.companies;
      this.source.load(data.companies);
    });
  }
}
