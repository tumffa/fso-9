import express from 'express';
import patientsService from '../services/patientService';

const patientsRouter = express.Router();

patientsRouter.get('/', (_req, res) => {
  res.send(patientsService.getCensoredPatients());
});

export default patientsRouter;