import { Injectable } from '@angular/core';
import { ApiUrls } from './api-urls';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ModulesApiService {
	private apiUrl: string = ApiUrls.base + ApiUrls.modules.base;
	
	constructor(
		private http: HttpClient
	) { 

	}

	getModules(): Observable<string[]> {
		return this.http.get<string[]>(this.apiUrl);
	}
}
