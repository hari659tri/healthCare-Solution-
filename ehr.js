const PatientList = ({ patients, onPatientClick }) => (
  <div className="patient-list">
    <h2>Patient List</h2>
    <ul>
      {patients.map(patient => (
        <li key={patient.id} onClick={() => onPatientClick(patient)}>
          {patient.name}
        </li>
      ))}
    </ul>
  </div>
);

const PatientDetails = ({ patient }) => (
  <div className="patient-details">
    <h2>{patient.name}</h2>
    <p><strong>Date of Birth:</strong> {patient.dob}</p>
    <p><strong>Gender:</strong> {patient.gender}</p>
    <p><strong>Contact Number:</strong> {patient.contactNumber}</p>
    <p><strong>Allergies:</strong> {patient.allergies.length ? patient.allergies.join(", ") : "None"}</p>
    <p><strong>Diagnosis:</strong> {patient.diagnosis}</p>
    <p><strong>Medications:</strong> {patient.medications.length ? patient.medications.join(", ") : "None"}</p>
    <p><strong>Notes:</strong> {patient.notes}</p>
  </div>
);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      patients: [
        { id: 1, name: "John Doe", dob: "1980-01-15", gender: "Male", contactNumber: "123-456-7890", allergies: ["Penicillin"], diagnosis: "Fever", medications: ["Paracetamol"], notes: "Rest advised" },
        { id: 2, name: "Jane Smith", dob: "1992-05-20", gender: "Female", contactNumber: "987-654-3210", allergies: [], diagnosis: "Hypertension", medications: ["Lisinopril"], notes: "Monitor blood pressure regularly" },
        { id: 3, name: "Bob Johnson", dob: "1975-11-30", gender: "Male", contactNumber: "555-123-4567", allergies: ["Sulfa"], diagnosis: "Arthritis", medications: ["Ibuprofen"], notes: "Physical therapy recommended" },
        { id: 4, name: "Shyam", dob: "1975-11-20", gender: "Male", contactNumber: "505-128-4967", allergies: ["Maleria"], diagnosis: "Arthritis", medications: ["Ibuprofen"], notes: "Physical therapy recommended" },
        { id: 5, name: "Johnson", dob: "1979-11-03", gender: "Male", contactNumber: "455-423-4567", allergies: ["TV"], diagnosis: "Arthritis", medications: ["Ibuprofen"], notes: "Physical therapy recommended" },
      ],

      selectedPatient: null
    };
  }

  handlePatientClick = (patient) => {
    this.setState({ selectedPatient: patient });
  };

  render() {
    return (
      <div className="container">
        <h1>Electronic Health Records</h1>
        <PatientList patients={this.state.patients} onPatientClick={this.handlePatientClick} />
        {this.state.selectedPatient && <PatientDetails patient={this.state.selectedPatient} />}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
