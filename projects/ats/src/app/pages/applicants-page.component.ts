import { Component, OnInit } from '@angular/core';
import { Applicant } from 'projects/domain/src';
import { ApplicantService } from '../services/applicant.service';

@Component({
  selector: 'app-applicants-page',
  templateUrl: './applicants-page.component.html',
  styleUrls: ['./applicants-page.component.sass']
})
export class ApplicantsPageComponent implements OnInit {
  public applicants: Array<Applicant> = [];

  constructor(private applicantService: ApplicantService) {}

  ngOnInit() {
    this.applicantService.findAllApplicants().subscribe(applicants => {
      this.applicants = applicants;
    });
  }
}
