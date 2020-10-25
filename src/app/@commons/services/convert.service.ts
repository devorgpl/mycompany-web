import { Injectable, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Convert } from '../model/convert';

export const CONVERT_URL: InjectionToken<string> = new InjectionToken<string>('Convert url');

@Injectable({
  providedIn: 'root',
  deps: [HttpClient, CONVERT_URL],
  useFactory: (httpClient: HttpClient, convert_url: string) => new ConvertService(httpClient, convert_url),
})
export class ConvertService {
  private readonly baseUrl: string;
  private headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient, base_url) {
    this.baseUrl = base_url;
  }

  getInvoices(companyId: string, userId: string): Observable<Convert[]> {
    const url = `${this.baseUrl}/convert?company_id=${companyId}&user_id=${userId}`;
    return this.http.get<Convert[]>(url, {headers: this.headers});
  }

  createFromFile(formData: FormData, userId: string) {
    const url = `${this.baseUrl}/convert?user_id=${userId}`;
    return this.http.post<any>(url, formData);

  }

  executeParse(id: string, userId: string): Observable<number> {
    const url = `${this.baseUrl}/convert/${id}/parse?user_id=${userId}`;
    return this.http.get<number>(url, {headers: this.headers});
  }

  executeGenerate(id: string, userId: string) {
    const url = `${this.baseUrl}/convert/${id}/generate?user_id=${userId}`;
    return this.http.get<number>(url, {headers: this.headers});
  }

  generateDownloadUrl(id: string, role: string, userId: string): string {
    return `${this.baseUrl}/convert/${id}/download/${role}?user_id=${userId}`;
  }
}
