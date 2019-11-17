import { Employee, Applicant, Selection } from '../models/ats';
import { arrayFactory, idFactory, nameFactory } from './common';

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
    ...args
  };
};

const selectionsFacotry = (size: number = 0) =>
  arrayFactory(selectionFactory, size);

const applicantFactory = (args: object = {}): Applicant => {
  return {
    id: idFactory(),
    name: nameFactory(),
    status: 'PAPER SELECTION',
    selectionLogs: selectionsFacotry(2),
    ...args
  };
};

export const applicantsFactory = (size: number = 0) =>
  arrayFactory(applicantFactory, size);
