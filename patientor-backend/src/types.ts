export type Diagnosis = {
  code: string;
  name: string;
  latin?: string;
};

export type Patient = {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: string;
  occupation: string;
};

export enum Gender {
  Other = 'other',
  Male = 'male',
  Female = 'female',
};

export type NewPatient = Omit<Patient, 'id'>;

export type CensoredPatient = Omit<Patient, 'ssn'>;