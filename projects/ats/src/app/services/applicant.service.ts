import { Injectable } from '@angular/core';
import { Applicant, applicantsFactory } from 'projects/domain/src';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {
  constructor() {}

  public findAllApplicants(): Observable<Array<Applicant>> {
    return of(applicantsFactory(21));
  }
}
