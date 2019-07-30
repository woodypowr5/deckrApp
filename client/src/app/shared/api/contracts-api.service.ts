import { Injectable } from '@angular/core';
import { ApiUrls } from './api-urls';
import { Observable } from 'rxjs';
import { Contract, ContractSerializer, ContractsSerializer } from '../types/contract';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContractsApiService {
	private apiUrl: string = ApiUrls.base + ApiUrls.contracts.base;
	private contractSerializer = new ContractSerializer();
	private contractsSerializer = new ContractsSerializer();
	
	constructor(
		private http: HttpClient
	) { 

	}

	getContracts(): Observable<Contract[]> {
		return this.http.get<Contract[]>(this.apiUrl).pipe(map(data => this.contractsSerializer.fromJson(data)));
	}
	
	getContractById(id: number): Observable<Contract> {
		const url = this.apiUrl + `/${ApiUrls.contracts.segments.single}/${id}`;
		return this.http.get<Contract>(url);
	}
		
	getContractsByUserId(userId: number): Observable<Contract[]> {
		const url = this.apiUrl + `/${ApiUrls.contracts.segments.byUser}/${userId}`;
		return this.http.get<Contract[]>(url).pipe(map(data => this.contractsSerializer.fromJson(data)));
	}
}
