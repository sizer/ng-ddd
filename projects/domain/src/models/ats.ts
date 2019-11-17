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
  process: SelectionProcess;
  comment: string;
}

export interface Employee {
  id: number;
  name: PersonalName;
  role: EmployeeRole;
}

// ValueObjects
export type RecruitingStatus =
  | 'NEW'
  | 'PAPER SELECTION'
  | 'NEED INTERVIEW'
  | 'OFFERING'
  | 'ACCEPTED';

export type SelectionProcess = 'INTERVIEW';

export type EmployeeRole = 'HR' | 'RECRUITOR';

export interface PersonalName {
  firstName: string;
  lastName: string;
}

type modelFactory<T> = (args?: object) => T;

// Utilities
const arrayFactory = <T>(
  factory: modelFactory<T>,
  size: number = 0
): Array<T> => [...Array(size)].map((_, i) => i + 1).map(_ => factory());

const randomPick = <T>(array: Array<T>): T =>
  array[Math.floor(array.length * Math.random())];

// ValueFactories
const idFactory = (): number => Math.floor(Math.random() * 6) + 1;
const nameFactory = (): PersonalName =>
  randomPick([
    { firstName: 'foo', lastName: 'hoge' },
    { firstName: 'bar', lastName: 'fuga' }
  ]);

// EntityFactories
const employeeFactory = (args: object = {}): Employee => {
  return {
    id: idFactory(),
    name: nameFactory(),
    role: 'RECRUITOR',
    ...args
  };
};

const selectionFactory = (args: object = {}): Selection => {
  return {
    id: idFactory(),
    applicantId: idFactory(),
    comment: '',
    interviewer: employeeFactory(),
    process: 'INTERVIEW',
    ...args
  };
};

const selectionsFacotry = (size: number = 0) =>
  arrayFactory(selectionFactory, size);

const applicantFactory = (args: object = {}): Applicant => {
  return {
    id: idFactory(),
    name: nameFactory(),
    status: 'NEW',
    selectionLogs: selectionsFacotry(2),
    ...args
  };
};

export const applicantsFactory = (size: number = 0) =>
  arrayFactory(applicantFactory, size);
