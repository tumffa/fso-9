import { z } from 'zod';
import { Gender, NewPatient } from './types';

export const newPatientSchema = z.object({
  name: z.string(),
  dateOfBirth: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid date format",
  }),
  ssn: z.string(),
  gender: z.nativeEnum(Gender),
  occupation: z.string()
});

export const toNewPatient = (object: unknown): NewPatient => {
  return newPatientSchema.parse(object);
};