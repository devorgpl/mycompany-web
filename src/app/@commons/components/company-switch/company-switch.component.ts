import { Component, Input, OnInit } from '@angular/core';
import { Company } from '../../model/company';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'mc-company-switch',
  templateUrl: './company-switch.component.html',
  styleUrls: ['./company-switch.component.scss'],
})
export class CompanySwitchComponent implements OnInit {

  companies: Company[];
  selectedCompany: Company;

  constructor(
    private companyService: CompanyService,
  ) {
  }

  _userId: string;

  @Input()
  set userId(userId: string) {
    this._userId = userId;
    if (userId) {
      this.fetchCompanies(userId);
    }
  }

  ngOnInit(): void {
    this.fetchCompanies(this._userId);
  }

  selectedChange(id: string) {
    this.companyService.companies.filter((company) => company.id === id)
      .forEach((company) => this.companyService.setSelectedCompany(company));
  }

  private fetchCompanies(userId: string) {
    this.companyService.selectedCompany$.subscribe((company => {
      this.selectedCompany = company;
    }));
    this.companyService.companies$.subscribe((companies => {
      this.companies = companies;
    }));
    this.companyService.updateCompanyList(userId);

  }
}
