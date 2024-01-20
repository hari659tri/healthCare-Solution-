document.addEventListener('DOMContentLoaded', function () {
    const appointmentForm = document.getElementById('appointment-form');
    const recordsList = document.getElementById('recordsList');
    const startVirtualConsultationBtn = document.getElementById('startVirtualConsultation');
    const submitHealthMonitoringBtn = document.getElementById('submitHealthMonitoring');
    const getHealthEducationBtn = document.getElementById('getHealthEducation');
    const educationResourcesList = document.getElementById('educationResources');

    appointmentForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const patientName = document.getElementById('patientName').value;
        const appointmentDate = document.getElementById('appointmentDate').value;

        // Assume there's an API endpoint for submitting appointments
        // You need to replace this with your actual backend logic
        fetch('/api/bookAppointment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ patientName, appointmentDate }),
        })
        .then(response => response.json())
        .then(data => {
            // Assume the API returns the updated list of medical records
            // You need to replace this with your actual backend logic
            displayMedicalRecords(data.medicalRecords);
        })
        .catch(error => console.error('Error:', error));
    });

    startVirtualConsultationBtn.addEventListener('click', function () {
        // Add logic for starting virtual consultation (e.g., integrating with video call APIs)
        alert('Starting Virtual Consultation...');
    });

    submitHealthMonitoringBtn.addEventListener('click', function () {
        // Add logic for submitting health monitoring data
        alert('Health Data Submitted');
    });

    getHealthEducationBtn.addEventListener('click', function () {
        // Assume there's an API endpoint for getting health education resources
        // You need to replace this with your actual backend logic
        fetch('/api/healthEducation', {
            method: 'GET',
        })
        .then(response => response.json())
        .then(data => {
            displayEducationResources(data.educationResources);
        })
        .catch(error => console.error('Error:', error));
    });

    function displayMedicalRecords(records) {
        recordsList.innerHTML = '';
        records.forEach(record => {
            const listItem = document.createElement('li');
            listItem.textContent = `Patient: ${record.patientName}, Date: ${record.appointmentDate}`;
            recordsList.appendChild(listItem);
        });
    }

    function displayEducationResources(resources) {
        educationResourcesList.innerHTML = '';
        resources.forEach(resource => {
            const listItem = document.createElement('li');
            listItem.textContent = resource;
            educationResourcesList.appendChild(listItem);
        });
    }
});
