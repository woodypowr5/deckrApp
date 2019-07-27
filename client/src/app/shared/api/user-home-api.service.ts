import { Injectable } from '@angular/core';
import { ApiUrls } from './api-urls';
import { Observable } from 'rxjs';
import { Training } from '../types/training.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserHomeApiService {
	private apiUrl: string = ApiUrls.base + ApiUrls.userHome;
	
	constructor(
		private http: HttpClient
	) { 

	}

	getTrainingProgress(userId: number): Observable<number> {
		const url = this.apiUrl + `/${ApiUrls.userHome.segments.trainingsProgress}/${userId}`;
		return this.http.get<number>(url);
	}

	getContractsProgress(userId: number): Observable<number> {
		const url = this.apiUrl + `/${ApiUrls.userHome.segments.contractsProgress}/${userId}`;
		return this.http.get<number>(url);
	}

	getSecurityGroupsProgress(userId: number): Observable<number> {
		const url = this.apiUrl + `/${ApiUrls.userHome.segments.securityGroupsProgress}/${userId}`;
		return this.http.get<number>(url);
	}
}
