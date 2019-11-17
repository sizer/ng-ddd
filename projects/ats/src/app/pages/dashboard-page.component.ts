import { Component, OnInit } from '@angular/core';
import { Applicant, applicantsFactory } from 'projects/domain/src';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.sass']
})
export class DashboardPageComponent implements OnInit {
  public applicants: Array<Applicant> = [];

  constructor() {}

  ngOnInit() {
    this.applicants = applicantsFactory(21);
  }
}
