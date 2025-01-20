import { z } from 'zod';
import { Gender, NewPatient, Entry } from './types';

export const newPatientSchema = z.object({
  name: z.string(),
  dateOfBirth: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid date format",
  }),
  ssn: z.string(),
  gender: z.nativeEnum(Gender),
  occupation: z.string(),
  entries: z.array(z.object({
    type: z.enum(['Hospital', 'OccupationalHealthcare']),
  })).optional(),
});

export const toNewPatient = (object: unknown): NewPatient => {
  const parsedPatient = newPatientSchema.parse(object);
  return {
    ...parsedPatient,
    entries: (parsedPatient.entries || []) as Entry[]
  };
};