import { v4 as uuidv4 } from 'uuid';
import patients from '../../data/patients';
import { Patient } from '../types';
import { CensoredPatient } from '../types';
import { NewPatient } from '../types';

const getCensoredPatients = (): CensoredPatient[] => {
  return patients.map((
    { id, name, dateOfBirth, gender, occupation }) => ({
      id, 
      name,
      dateOfBirth,
      gender,
      occupation
    }));
};

const addPatient = (patient: NewPatient): Patient => {
  const newPatient = {
    id: uuidv4(),
    ...patient
  };
  patients.push(newPatient);
  return newPatient;
};

export default {
  getCensoredPatients,
  addPatient
};