import { Injectable } from '@angular/core';
import { ApiUrls } from './api-urls';
import { Observable } from 'rxjs';
import { Contract } from '../types/contract';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContractsApiService {
	private apiUrl: string = ApiUrls.base + ApiUrls.users;
	
	constructor(
		private http: HttpClient
	) { 

	}

	getContracts(): Observable<Contract[]> {
		return this.http.get<Contract[]>(this.apiUrl);
	}
	
	getContractById(id: number): Observable<Contract> {
		const url = this.apiUrl + `/${ApiUrls.contracts.segments.single}/${id}`;
		return this.http.get<Contract>(url);
	}
		
	getContractsByUserId(userId: number): Observable<Contract[]> {
		const url = this.apiUrl + `/${ApiUrls.contracts.segments.byUser}/${userId}`;
		return this.http.get<Contract[]>(url);
	}
}
