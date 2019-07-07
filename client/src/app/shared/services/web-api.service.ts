import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Fixtures } from '../data/fixtures';
import { Contract } from '../types/contract';


@Injectable({
  providedIn: 'root'
})
export class WebApiService implements InMemoryDbService {
	createDb() {
		return {
			contracts: Fixtures.contracts,
			trainings: Fixtures.trainings,
			securityGroups: Fixtures.securityGroups,
			approvedGroupNumbers: Fixtures.approvedSecurityGroups
		};
	}
	constructor() { }

	genId(contracts: Contract[]): number {
		return contracts.length > 0 ? Math.max(...contracts.map(contract => contract.id)) + 1 : 11;
	}
}
