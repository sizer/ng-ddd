// DomainEntities
export interface Applicant {
  id: number;
  name: PersonalName;
  status: RecruitingStatus;
  selectionLogs: Array<Selection>;
}

export interface Selection {
  id: number;
  applicantId: number;
  interviewer: Employee;
  comment: string;
}

export interface Employee {
  id: number;
  name: PersonalName;
  role: EmployeeRole;
}

// ValueObjects
export type RecruitingStatus =
  | 'PAPER SELECTION'
  | 'NEED INTERVIEW'
  | 'OFFERING'
  | 'ACCEPTED';

export type EmployeeRole = 'HR' | 'RECRUITOR';

export interface PersonalName {
  firstName: string;
  lastName: string;
}
