import { v4 as uuidv4 } from 'uuid';
import patients from '../../data/patients';
import { Patient } from '../types';
import { CensoredPatient } from '../types';
import { NewPatient } from '../types';
import { Gender } from '../types';

const getCensoredPatients = (): CensoredPatient[] => {
  return patients.map((
    { id, name, dateOfBirth, gender, occupation}) => ({
      id, 
      name,
      dateOfBirth,
      gender: gender as Gender,
      occupation,
    }));
};

const addPatient = (patient: NewPatient): Patient => {
  const newPatient = {
    id: uuidv4(),
    ...patient,
    entries: []
  };
  patients.push(newPatient);
  return newPatient;
};

const getPatient = (id: string): Patient | undefined => {
  const patient = patients.find(patient => patient.id === id);
  if (patient) {
    return { ...patient, gender: patient.gender as Gender };
  }
  return undefined;
};

export default {
  getCensoredPatients,
  addPatient,
  getPatient
};