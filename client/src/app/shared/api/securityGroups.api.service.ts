import { Injectable } from '@angular/core';
import { ApiUrls } from './api-urls';
import { Observable } from 'rxjs';
import { SecurityGroup } from '../types/security-group.class';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SecurityGroupsApiService {
	private apiUrl: string = ApiUrls.base + ApiUrls.securityGroups;
	
	constructor(
		private http: HttpClient
	) { 

	}

	getSecurityGroups(): Observable<SecurityGroup[]> {
		return this.http.get<SecurityGroup[]>(this.apiUrl);
	}
	
	getSecurityGroupById(userId: number): Observable<SecurityGroup> {
		const url = this.apiUrl + `/${ApiUrls.securityGroups.segments.single}/${id}`;
		return this.http.get<SecurityGroup>(url);
	}

	getSecurityGroupsByUserId(userId: number): Observable<SecurityGroup[]> {
		const url = this.apiUrl + `/${ApiUrls.securityGroups.segments.byUser}/${userId}`;
		return this.http.get<SecurityGroup[]>(url);
	}
}
