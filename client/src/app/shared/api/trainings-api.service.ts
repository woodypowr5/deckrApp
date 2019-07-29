import { Injectable } from '@angular/core';
import { ApiUrls } from './api-urls';
import { Observable } from 'rxjs';
import { Training, TrainingSerializer, TrainingsSerializer } from '../types/training.interface';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TrainingsApiService {
	private apiUrl: string = ApiUrls.base + ApiUrls.trainings.base;
	private trainingSerializer = new TrainingSerializer();
	private trainingsSerializer = new TrainingsSerializer();
	
	constructor(
		private http: HttpClient
	) { 

	}

	getTrainings(): Observable<Training[]> {
		return this.http.get<Training[]>(this.apiUrl).pipe(map(data => this.trainingsSerializer.fromJson(data)));
	}
	
	getTrainingById(id: number): Observable<Training> {
		const url = this.apiUrl + `/${ApiUrls.trainings.segments.single}/${id}`;
		return this.http.get<Training>(url).pipe(map(data => this.trainingSerializer.fromJson(data)));
	}
		
	getTrainingsByUserId(userId: number): Observable<Training[]> {
		const url = this.apiUrl + `/${ApiUrls.trainings.segments.byUser}/${userId}`;
		return this.http.get<Training[]>(url);
	}
}
