import express, { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import patientsService from '../services/patientService';
import { newPatientSchema } from '../utils';
import { NewPatient, Patient } from '../types';

const patientsRouter = express.Router();

const newPatientParser = (req: Request, _res: Response, next: NextFunction) => {
  try {
    newPatientSchema.parse(req.body);
    next();
  } catch (error: unknown) {
    next(error);
  }
};

const errorMiddleware = (error: unknown, _req: Request, res: Response, next: NextFunction) => { 
  if (error instanceof ZodError) {
    res.status(400).send({ error: error.issues });
  } else {
    next(error);
  }
};

patientsRouter.get('/', (_req, res) => {
  res.send(patientsService.getCensoredPatients());
});

patientsRouter.get('/:id', (req, res) => {
  const patient = patientsService.getPatient(req.params.id);
  if (patient) {
    res.send(patient);
  } else {
    res.status(404).send({ error: 'no patient found for given id' });
  }
});

patientsRouter.post('/', newPatientParser, (req: Request<unknown, unknown, NewPatient>, res: Response<Patient>) => {
  const { name, dateOfBirth, ssn, gender, occupation } = req.body;
  const newPatient = patientsService.addPatient({
    name,
    dateOfBirth,
    ssn,
    gender,
    occupation,
    entries: []
  });
  res.json(newPatient);
});

patientsRouter.use(errorMiddleware);

export default patientsRouter;