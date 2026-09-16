/* =========================================
API BASE URL
========================================= */

const API_BASE_URL = "http://localhost:8082/api";


/* =========================================
SECTION NAVIGATION
========================================= */

function showSection(sectionName) {

const sections = document.querySelectorAll(".section");

sections.forEach(section => {
section.classList.add("hidden");
});

const selectedSection = document.getElementById(sectionName);

if (selectedSection) {
selectedSection.classList.remove("hidden");
}


// Update active sidebar menu

const menuItems = document.querySelectorAll(".menu li");

menuItems.forEach(item => {
item.classList.remove("active");
});

menuItems.forEach(item => {

if (item.getAttribute("onclick") === `showSection('${sectionName}')`) {
item.classList.add("active");
}

});

}


/* =========================================
LOAD PATIENTS
========================================= */

async function loadPatients() {

const container = document.getElementById("patientList");

container.innerHTML = "<p>Loading patients...</p>";

try {

const response = await fetch(`${API_BASE_URL}/patients`);

if (!response.ok) {
throw new Error("Failed to load patients");
}

const patients = await response.json();

container.innerHTML = "";

if (patients.length === 0) {

container.innerHTML = `
<div class="data-item">
    <p>No patients found.</p>
</div>
`;

return;
}


patients.forEach(patient => {

const div = document.createElement("div");

div.className = "data-item";

div.innerHTML = `
<strong>
    ${patient.firstName} ${patient.lastName}
</strong>

<p>
    📧 ${patient.email || "N/A"}
</p>

<p>
    📞 ${patient.phoneNumber || "N/A"}
</p>

<p>
    🩸 Blood Group: ${patient.bloodGroup || "N/A"}
</p>

<p>
    ⚧ Gender: ${patient.gender || "N/A"}
</p>
`;

container.appendChild(div);

});


// Update dashboard count

document.getElementById("patientCount").textContent = patients.length;

}

catch (error) {

console.error(error);

container.innerHTML = `
<div class="data-item">
    <p>❌ Unable to load patients.</p>
    <p>Make sure Spring Boot is running on port 8082.</p>
</div>
`;

}

}


/* =========================================
LOAD DOCTORS
========================================= */

async function loadDoctors() {

const container = document.getElementById("doctorList");

container.innerHTML = "<p>Loading doctors...</p>";

try {

const response = await fetch(`${API_BASE_URL}/doctors`);

if (!response.ok) {
throw new Error("Failed to load doctors");
}

const doctors = await response.json();

container.innerHTML = "";

if (doctors.length === 0) {

container.innerHTML = `
<div class="data-item">
    <p>No doctors found.</p>
</div>
`;

return;
}


doctors.forEach(doctor => {

const div = document.createElement("div");

div.className = "data-item";

div.innerHTML = `
<strong>
    Dr. ${doctor.firstName} ${doctor.lastName}
</strong>

<p>
    🩺 Specialization:
    ${doctor.specialization || "N/A"}
</p>

<p>
    🏥 Department:
    ${doctor.department || "N/A"}
</p>

<p>
    📧 ${doctor.email || "N/A"}
</p>

<p>
    📞 ${doctor.phoneNumber || "N/A"}
</p>

<p>
    💼 Experience:
    ${doctor.yearsOfExperience || 0} years
</p>
`;

container.appendChild(div);

});


// Update dashboard count

document.getElementById("doctorCount").textContent = doctors.length;

}

catch (error) {

console.error(error);

container.innerHTML = `
<div class="data-item">
    <p>❌ Unable to load doctors.</p>
    <p>Make sure Spring Boot is running on port 8082.</p>
</div>
`;

}

}


/* =========================================
LOAD APPOINTMENTS
========================================= */

async function loadAppointments() {

const container = document.getElementById("appointmentList");

container.innerHTML = "<p>Loading appointments...</p>";

try {

const response = await fetch(`${API_BASE_URL}/appointments`);

if (!response.ok) {
throw new Error("Failed to load appointments");
}

const appointments = await response.json();

container.innerHTML = "";

if (appointments.length === 0) {

container.innerHTML = `
<div class="data-item">
    <p>No appointments found.</p>
</div>
`;

return;
}


appointments.forEach(appointment => {

const div = document.createElement("div");

div.className = "data-item";

const patient = appointment.patient
? `${appointment.patient.firstName} ${appointment.patient.lastName}`
: "N/A";

const doctor = appointment.doctor
? `Dr. ${appointment.doctor.firstName} ${appointment.doctor.lastName}`
: "N/A";


div.innerHTML = `

<strong>
    📅 Appointment #${appointment.id}
</strong>

<p>
    👤 Patient:
    ${patient}
</p>

<p>
    👨‍⚕️ Doctor:
    ${doctor}
</p>

<p>
    🕐 Date & Time:
    ${appointment.appointmentDateTime || "N/A"}
</p>

<p>
    📝 Reason:
    ${appointment.reasonForVisit || "N/A"}
</p>

<p>
    📌 Status:
    ${appointment.status || "N/A"}
</p>

<p>
    📋 Notes:
    ${appointment.notes || "N/A"}
</p>

`;

container.appendChild(div);

});


// Update dashboard count

document.getElementById("appointmentCount").textContent =
appointments.length;

}

catch (error) {

console.error(error);

container.innerHTML = `
<div class="data-item">
    <p>❌ Unable to load appointments.</p>
    <p>Make sure Spring Boot is running on port 8082.</p>
</div>
`;

}

}


/* =========================================
LOAD DASHBOARD COUNTS
========================================= */

async function loadDashboardCounts() {

try {

const patientsResponse =
await fetch(`${API_BASE_URL}/patients`);

const doctorsResponse =
await fetch(`${API_BASE_URL}/doctors`);

const appointmentsResponse =
await fetch(`${API_BASE_URL}/appointments`);


const patients =
await patientsResponse.json();

const doctors =
await doctorsResponse.json();

const appointments =
await appointmentsResponse.json();


document.getElementById("patientCount").textContent =
patients.length;

document.getElementById("doctorCount").textContent =
doctors.length;

document.getElementById("appointmentCount").textContent =
appointments.length;

}

catch (error) {

console.error(
"Could not load dashboard data:",
error
);

}

}


/* =========================================
PAGE LOAD
========================================= */

document.addEventListener("DOMContentLoaded", function () {

console.log("🏥 Hospital Management System loaded!");

loadDashboardCounts();

});