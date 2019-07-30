import { Injectable } from '@angular/core';
import { ApiUrls } from './api-urls';
import { Observable } from 'rxjs';
import { SecurityGroup, SecurityGroupSerializer, SecurityGroupsSerializer } from '../types/security-group.class';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SecurityGroupsApiService {
	private apiUrl: string = ApiUrls.base + ApiUrls.securityGroups.base;
	private securityGroupSerializer = new SecurityGroupSerializer();
	private securityGroupsSerializer = new SecurityGroupsSerializer();

	constructor(
		private http: HttpClient
	) { 

	}

	getSecurityGroups(): Observable<SecurityGroup[]> {
		return this.http.get<SecurityGroup[]>(this.apiUrl).pipe(map(data => this.securityGroupsSerializer.fromJson(data)));
	}
	
	getSecurityGroupById(id: number): Observable<SecurityGroup> {
		const url = this.apiUrl + `/${ApiUrls.securityGroups.segments.single}/${id}`;
		return this.http.get<SecurityGroup>(url).pipe(map(data => this.securityGroupSerializer.fromJson(data)));;
	}

	getSecurityGroupsByUserId(userId: number): Observable<SecurityGroup[]> {
		const url = this.apiUrl + `/${ApiUrls.securityGroups.segments.byUser}/${userId}`;
		return this.http.get<SecurityGroup[]>(url).pipe(map(data => this.securityGroupsSerializer.fromJson(data)));;
	}
}
