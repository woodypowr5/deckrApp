import { Injectable } from '@angular/core';
import { ApiUrls } from './api-urls';
import { Observable } from 'rxjs';
import { Training } from '../types/training.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrainingsApiService {
	private apiUrl: string = ApiUrls.base + ApiUrls.trainings;
	
	constructor(
		private http: HttpClient
	) { 

	}

	getTrainings(): Observable<Training[]> {
		return this.http.get<Training[]>(this.apiUrl);
	}
	
	getTrainingById(id: number): Observable<Training> {
		const url = this.apiUrl + `/${ApiUrls.trainings.segments.single}/${id}`;
		return this.http.get<Training>(url);
	}
		
	getTrainingsByUserId(userId: number): Observable<Training[]> {
		const url = this.apiUrl + `/${ApiUrls.trainings.segments.byUser}/${userId}`;
		return this.http.get<Training[]>(url);
	}
}
