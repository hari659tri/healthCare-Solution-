const PatientList = ({ patients, onPatientConnect, onPatientMessage, onPatientChat }) => (
    <div className="patient-list">
      <h2>Our Doctors</h2>
      <table>
        <thead>
          <tr>
            <th>Doctor</th>
            <th>Doctor Name</th>
            <th>Patent Actions</th>
          </tr>
        </thead>
        <tbody>
          {patients.map(patient => (
            <tr key={patient.id}>
              <td>
                <img src={`dc${patient.id}.jpg`} alt={`Doctor ${patient.name}`} />
              </td>
              <td>{patient.name}</td>
              <td>
                <button onClick={() => onPatientConnect(patient)}>Connect</button>
                <button onClick={() => onPatientMessage(patient)}>Chat</button>
                <button onClick={() => onPatientChat(patient)}>Emergency Call</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  
  class DoctorConnection extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isConnected: false,
      };
    }
  
    handleConnect = () => {
      this.setState({ isConnected: true });
      alert('Connected to the patient!');
    };
  
    handleDisconnect = () => {
      this.setState({ isConnected: false });
      alert('Disconnected from the patient.');
    };
  
    render() {
      return (
        <div className="doctor-connection">
          {this.state.isConnected ? (
            <div>
              <p>You are connected to the patient.</p>
              <button onClick={this.handleDisconnect}>Disconnect</button>
            </div>
          ) : (
            <div>
              <p>Connect to a patient to start the consultation.</p>
              <button onClick={this.handleConnect}>Connect</button>
            </div>
          )}
        </div>
      );
    }
  }
  
  class App extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        patients: [
          { id: 1, name: "John Doe" },
          { id: 2, name: "Jane Smith" },
          { id: 3, name: "Dr. James Johnson" }, // New doctor
        { id: 4, name: "Dr. Emily Williams" }, // New doctor
          // Add more patient data as needed
        ],
        selectedPatient: null
      };
    }
  
    handlePatientConnect = (patient) => {
      this.setState({ selectedPatient: patient });
    };
  
    handlePatientMessage = (patient) => {
      alert(`Sending a message to ${patient.name}`);
    };
  
    handlePatientChat = (patient) => {
      alert(`Initiating Emergency Call with ${patient.name}`);
    };
  
    render() {
      return (
        <div className="container">
          <h1>Digital Health Platform</h1>
          <PatientList
            patients={this.state.patients}
            onPatientConnect={this.handlePatientConnect}
            onPatientMessage={this.handlePatientMessage}
            onPatientChat={this.handlePatientChat}
          />
          {this.state.selectedPatient && <DoctorConnection />}
        </div>
      );
    }
  }
  
  ReactDOM.render(<App />, document.getElementById('root'));
  