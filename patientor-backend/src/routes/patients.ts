import express from 'express';
import patientsService from '../services/patientService';

const patientsRouter = express.Router();

patientsRouter.get('/', (_req, res) => {
  res.send(patientsService.getCensoredPatients());
});

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
patientsRouter.post('/', (req, res) => {
  const { name, dateOfBirth, ssn, gender, occupation } = req.body;
  const newPatient = patientsService.addPatient({
    name,
    dateOfBirth,
    ssn,
    gender,
    occupation
  });
  res.json(newPatient);
});

export default patientsRouter;