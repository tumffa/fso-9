import patients from '../../data/patients';
import { CensoredPatient } from '../types';

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

export default {
  getCensoredPatients
};