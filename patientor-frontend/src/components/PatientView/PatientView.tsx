import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Patient, Gender } from "../../types";
import { Male, Female, Transgender } from '@mui/icons-material';

interface Props {
  fetchPatient: (id: string) => Promise<Patient>;
}

const PatientView = ({ fetchPatient }: Props) => {
  const { id } = useParams<{ id: string }>();
  const [patient, setPatient] = useState<Patient | null>(null);

  useEffect(() => {
    const fetchPatientData = async () => {
      try {
        if (!id) {
          throw new Error("id is missing");
        }
        const patientData = await fetchPatient(id);
        setPatient(patientData);
      } catch (e) {
        return e;
      }
    };
    
    fetchPatientData();
    }, [fetchPatient, id]);

    const renderGenderIcon = (gender: Gender) => {
      switch (gender) {
        case Gender.Male:
          return <Male />;
        case Gender.Female:
          return <Female />;
        case Gender.Other:
          return <Transgender />;
        default:
          return null;
      }
    };
  
    return (
      <div>
        <h2>
          {patient?.name} {patient && renderGenderIcon(patient.gender)}
        </h2>
        <p>ssn: {patient?.ssn}</p>
        <p>occupation: {patient?.occupation}</p>
      </div>
    );
  };

export default PatientView;