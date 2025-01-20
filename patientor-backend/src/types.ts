export type Diagnosis = {
  code: string;
  name: string;
  latin?: string;
};

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface Entry {
};

export interface Patient {
  id: string;
  name: string;
  ssn: string;
  occupation: string;
  gender: Gender;
  dateOfBirth: string;
  entries: Entry[];
};

export enum Gender {
  Other = 'other',
  Male = 'male',
  Female = 'female',
};

export type NewPatient = Omit<Patient, 'id'>;

export type CensoredPatient = Omit<Patient, 'ssn' | 'entries'>;