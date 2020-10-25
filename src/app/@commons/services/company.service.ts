import { Injectable, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Company } from '../model/company';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export const COMPANY_URL: InjectionToken<string> = new InjectionToken<string>('Companies url');

@Injectable({
  providedIn: 'root',
  deps: [HttpClient, COMPANY_URL],
  useFactory: (httpClient: HttpClient, company_urls: string) => new CompanyService(httpClient, company_urls),
})
export class CompanyService {
  public companies$ = new BehaviorSubject<Company[]>([]);
  public companies = [];
  public selectedCompany$ = new BehaviorSubject<Company>(null);
  public selectedCompany: Company;
  private readonly baseUrl;
  private headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient,
              private url: string) {
    this.baseUrl = url;
    this.companies$.subscribe(companies => {
      if (companies == null) {
        return;
      }
      this.companies = companies;
      if (!this.selectedCompany && companies.length > 0) {
        this.setSelectedCompany(companies[0]);
      }
    });
  }

  setSelectedCompany(company: Company) {
    this.selectedCompany = company;
    this.selectedCompany$.next(this.selectedCompany);
  }

  getCompanies(userId: string): Observable<any> {
    const url = `${this.baseUrl}/company?user_id=${userId}`;
    return this.http.get(url, {headers: this.headers}).pipe(
      tap(data => {
        this.companies$.next(data.companies);
      }),
    );
  }

  updateCompanyList(userId: string): void {
    this.getCompanies(userId).subscribe(data => {
    });
  }

  updateCompany(company: Company, userId: string): Observable<any> {
    const url = `${this.baseUrl}/company?user_id=${userId}`;
    return this.http.put(url, company, {headers: this.headers}).pipe(
      tap(() => {
        this.updateCompanyList(userId);
      }),
    );
  }

  insertCompany(company: Company, userId: string): Observable<any> {
    const url = `${this.baseUrl}/company?user_id=${userId}`;
    return this.http.put(url, company, {headers: this.headers}).pipe(
      tap(() => {
        this.updateCompanyList(userId);
      }),
    );
  }

  deleteCompany(company: Company, userId: string): Observable<any> {
    const url = `${this.baseUrl}/company/${company.id}?user_id=${userId}`;
    return this.http.delete(url, {headers: this.headers}).pipe(
      tap(() => {
        this.updateCompanyList(userId);
      }),
    );
  }

}
