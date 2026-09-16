# 🏥 Hospital Management System

A full-stack **Hospital Management System** developed using **Java, Spring Boot, Spring Data JPA, Hibernate, MySQL, HTML, CSS, and JavaScript**.

The application provides RESTful APIs and a web-based dashboard for managing **patients, doctors, and appointments**, with **Spring Security-based access control** for modification operations.

---

## 📌 Project Overview

The Hospital Management System is designed to provide a centralized platform for managing basic hospital records.

The application follows a layered architecture where the frontend communicates with Spring Boot REST APIs. The backend handles business logic, authentication, validation, and database operations using Spring Data JPA and Hibernate.

### Main Modules

- 👤 Patient Management
- 👨‍⚕️ Doctor Management
- 📅 Appointment Management
- 📊 Dashboard
- 🔐 Authentication & Access Control
- 🗄️ MySQL Database Integration

---

## ✨ Features

### 👤 Patient Management

The Patient module provides complete CRUD functionality for patient records.

#### Operations

- ➕ Add Patient
- 📋 View All Patients
- 🔍 Search Patient by Last Name
- ✏️ Update Patient
- 🗑️ Delete Patient
- 🔎 View Patient by ID

#### Patient Information

- Patient ID
- First Name
- Last Name
- Date of Birth
- Gender
- Email
- Phone Number
- Address
- Blood Group

---

### 👨‍⚕️ Doctor Management

The Doctor module provides CRUD functionality for managing doctor records.

#### Operations

- ➕ Add Doctor
- 📋 View All Doctors
- 🔎 View Doctor by ID
- ✏️ Update Doctor
- 🗑️ Delete Doctor

#### Doctor Information

- Doctor ID
- First Name
- Last Name
- Specialization
- Email
- Phone Number
- Department
- Years of Experience

---

### 📅 Appointment Management

The Appointment module manages appointments between patients and doctors.

#### Operations

- ➕ Create Appointment
- 📋 View All Appointments
- 🔎 View Appointment by ID
- ✏️ Update Appointment
- 🗑️ Delete Appointment
- 👤 View Appointments by Patient
- 👨‍⚕️ View Appointments by Doctor
- 📌 View Appointments by Status

#### Appointment Information

- Appointment ID
- Patient
- Doctor
- Appointment Date & Time
- Reason for Visit
- Appointment Status
- Notes

---

## 📊 Dashboard

The web dashboard provides an overview of the hospital system.

### Dashboard Features

- 👤 Total Patients
- 👨‍⚕️ Total Doctors
- 📅 Total Appointments
- ⚡ Quick Actions
- 🟢 Backend API Status
- 🟢 MySQL Database Status
- 🟢 Spring Boot Server Status

The dashboard retrieves information dynamically from the Spring Boot REST APIs using the JavaScript **Fetch API**.

---

# 🔐 Authentication & Access Control

The application uses **Spring Security** to control access to hospital data.

### Access Model

| Operation | Access |
|---|---|
| View Patients | Public |
| View Doctors | Public |
| View Appointments | Public |
| Add Patient | ADMIN |
| Update Patient | ADMIN |
| Delete Patient | ADMIN |
| Add Doctor | ADMIN |
| Update Doctor | ADMIN |
| Delete Doctor | ADMIN |
| Add Appointment | ADMIN |
| Update Appointment | ADMIN |
| Delete Appointment | ADMIN |

### Security Implementation

- Spring Security
- Form-based login
- Role-based authorization
- ADMIN role
- GET requests are available for viewing data
- POST, PUT and DELETE operations require ADMIN authorization
- CSRF configuration for REST API usage

> **Note:** The project uses an in-memory ADMIN user for development/demo purposes. Production applications should use securely stored credentials and a persistent user-management system.

---

# 🛠️ Technologies Used

## Backend

- **Java 17**
- **Spring Boot 3.3.4**
- Spring Web
- Spring Data JPA
- Hibernate ORM
- Spring Security
- Jakarta Validation
- Maven
- Lombok

## Database

- **MySQL**
- MySQL Workbench

## Frontend

- HTML5
- CSS3
- JavaScript
- Fetch API

## Testing & Development Tools

- IntelliJ IDEA
- Postman
- Git
- GitHub

---

# 🏗️ System Architecture

<img width="1536" height="1024" alt="system-architecture" src="https://github.com/user-attachments/assets/dbf8b53c-7304-4a57-89f1-281c5517b80d" />

The application follows a layered architecture:

```text
                    ┌─────────────────────────┐
                    │      Web Browser        │
                    │   HTML / CSS / JS       │
                    └────────────┬────────────┘
                                 │
                           HTTP Requests
                                 │
                                 ▼
                    ┌─────────────────────────┐
                    │    Spring Security      │
                    │ Authentication & RBAC   │
                    └────────────┬────────────┘
                                 │
                                 ▼
                    ┌─────────────────────────┐
                    │      Spring Boot        │
                    │       REST APIs         │
                    └────────────┬────────────┘
                                 │
                 ┌───────────────┼───────────────┐
                 │               │               │
                 ▼               ▼               ▼
          ┌────────────┐  ┌────────────┐  ┌────────────┐
          │  Patient   │  │  Doctor    │  │ Appointment│
          │  Service   │  │  Service   │  │  Service   │
          └─────┬──────┘  └─────┬──────┘  └─────┬──────┘
                │                │               │
                └────────────────┼───────────────┘
                                 ▼
                    ┌─────────────────────────┐
                    │    Spring Data JPA      │
                    └────────────┬────────────┘
                                 ▼
                    ┌─────────────────────────┐
                    │      Hibernate ORM      │
                    └────────────┬────────────┘
                                 ▼
                    ┌─────────────────────────┐
                    │         MySQL            │
                    │       HospitalDb         │
                    └─────────────────────────┘
```

### Architecture Components

**Frontend**

HTML, CSS and JavaScript provide the browser-based user interface.

**Spring Security**

Handles authentication and authorization. Only authorized users can perform data modification operations.

**Spring Boot**

Provides the REST API layer and handles HTTP requests.

**Service Layer**

Contains the business logic for patients, doctors and appointments.

**Spring Data JPA**

Provides repository-based database access.

**Hibernate**

Acts as the JPA implementation and handles Object-Relational Mapping (ORM).

**MySQL**

Stores patient, doctor and appointment information in the `HospitalDb` database.

---

# 🔌 REST API Endpoints

Base URL:

```text
http://localhost:8082/api
```

---

## 👤 Patient APIs

### Get All Patients

```http
GET /api/patients
```

Returns all registered patients.

### Get Patient by ID

```http
GET /api/patients/{id}
```

Example:

```http
GET /api/patients/2
```

### Search Patient by Last Name

```http
GET /api/patients/search?lastName={lastName}
```

Example:

```http
GET /api/patients/search?lastName=Kumari
```

### Create Patient

```http
POST /api/patients
```

Example request body:

```json
{
  "firstName": "Rashmi",
  "lastName": "Kumari",
  "address": "Bengaluru, Karnataka",
  "bloodGroup": "B+",
  "dateOfBirth": "2004-01-01",
  "email": "rashmi@example.com",
  "gender": "Female",
  "phoneNumber": "6204281336"
}
```

### Update Patient

```http
PUT /api/patients/{id}
```

Example:

```http
PUT /api/patients/2
```

### Delete Patient

```http
DELETE /api/patients/{id}
```

Example:

```http
DELETE /api/patients/2
```

---

# 👨‍⚕️ Doctor APIs

### Get All Doctors

```http
GET /api/doctors
```

### Get Doctor by ID

```http
GET /api/doctors/{id}
```

Example:

```http
GET /api/doctors/3
```

### Create Doctor

```http
POST /api/doctors
```

Example request body:

```json
{
  "firstName": "Neha",
  "lastName": "Gupta",
  "specialization": "Cardiology",
  "email": "neha.gupta@example.com",
  "phoneNumber": "9876543210",
  "department": "Cardiology",
  "yearsOfExperience": 8
}
```

### Update Doctor

```http
PUT /api/doctors/{id}
```

Example:

```http
PUT /api/doctors/3
```

### Delete Doctor

```http
DELETE /api/doctors/{id}
```

Example:

```http
DELETE /api/doctors/3
```

---

# 📅 Appointment APIs

### Get All Appointments

```http
GET /api/appointments
```

### Get Appointment by ID

```http
GET /api/appointments/{id}
```

Example:

```http
GET /api/appointments/1
```

### Create Appointment

```http
POST /api/appointments?patientId={patientId}&doctorId={doctorId}
```

Example:

```http
POST /api/appointments?patientId=2&doctorId=3
```

Example request body:

```json
{
  "patient": {
    "id": 2
  },
  "doctor": {
    "id": 3
  },
  "appointmentDateTime": "2026-09-20T10:30:00",
  "reasonForVisit": "Regular checkup",
  "status": "SCHEDULED",
  "notes": "Patient requested morning appointment"
}
```

### Update Appointment

```http
PUT /api/appointments/{id}
```

Example:

```http
PUT /api/appointments/1
```

Example request body:

```json
{
  "patient": {
    "id": 2
  },
  "doctor": {
    "id": 3
  },
  "appointmentDateTime": "2026-09-21T11:00:00",
  "reasonForVisit": "Follow-up consultation",
  "status": "SCHEDULED",
  "notes": "Updated appointment time"
}
```

### Delete Appointment

```http
DELETE /api/appointments/{id}
```

Example:

```http
DELETE /api/appointments/1
```

### Get Appointments by Patient

```http
GET /api/appointments/patient/{patientId}
```

Example:

```http
GET /api/appointments/patient/2
```

### Get Appointments by Doctor

```http
GET /api/appointments/doctor/{doctorId}
```

Example:

```http
GET /api/appointments/doctor/3
```

### Get Appointments by Status

```http
GET /api/appointments/status/{status}
```

Example:

```http
GET /api/appointments/status/SCHEDULED
```

---

# 🗄️ Database

The application uses MySQL as the relational database.

### Database Name

```text
HospitalDb
```

### Main Tables

```text
HospitalDb
│
├── patients
├── doctors
└── appointments
```

### Relationships

```text
Patient
   │
   │
   └──────────< Appointment >────────── Doctor
```

An appointment connects a patient with a doctor.

---

# 📁 Project Structure

```text
hospital-management-system/
│
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/
│   │   │       └── hospital/
│   │   │           └── hms/
│   │   │               │
│   │   │               ├── config/
│   │   │               │   └── SecurityConfig.java
│   │   │               │
│   │   │               ├── controller/
│   │   │               │   ├── PatientController.java
│   │   │               │   ├── DoctorController.java
│   │   │               │   └── AppointmentController.java
│   │   │               │
│   │   │               ├── model/
│   │   │               │   ├── Patient.java
│   │   │               │   ├── Doctor.java
│   │   │               │   ├── Appointment.java
│   │   │               │   └── AppointmentStatus.java
│   │   │               │
│   │   │               ├── repository/
│   │   │               │   ├── PatientRepository.java
│   │   │               │   ├── DoctorRepository.java
│   │   │               │   └── AppointmentRepository.java
│   │   │               │
│   │   │               ├── service/
│   │   │               │   ├── PatientService.java
│   │   │               │   ├── DoctorService.java
│   │   │               │   └── AppointmentService.java
│   │   │               │
│   │   │               └── HospitalManagementSystemApplication.java
│   │   │
│   │   └── resources/
│   │       │
│   │       ├── static/
│   │       │   ├── index.html
│   │       │   ├── login.html
│   │       │   ├── style.css
│   │       │   └── script.js
│   │       │
│   │       ├── application.properties
│   │       └── application-test.properties
│   │
│   └── test/
│       └── java/
│           └── com/
│               └── hospital/
│                   └── hms/
│                       └── HospitalManagementSystemApplicationTests.java
│
├── screenshots/
│   ├── system-architecture.png
│   ├── dashboard.png
│   ├── login.png
│   ├── patients.png
│   ├── doctors.png
│   ├── appointments.png
│   └── postman-api-tests.png
│
├── .gitignore
├── pom.xml
└── README.md
```

---

# 🚀 How to Run the Project

## 1️⃣ Clone the Repository

```bash
git clone <YOUR-GITHUB-REPOSITORY-URL>
```

Navigate into the project:

```bash
cd hospital-management-system
```

---

## 2️⃣ Configure MySQL

Open MySQL Workbench and create the database:

```sql
CREATE DATABASE HospitalDb;
```

Update the database credentials in:

```text
src/main/resources/application.properties
```

Example:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/HospitalDb?useSSL=false&allowPublicKeyRetrieval=true&serverTimezone=UTC
spring.datasource.username=root
spring.datasource.password=YOUR_MYSQL_PASSWORD

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true

server.port=8082
```

> Do not upload your real MySQL password to GitHub.

---

## 3️⃣ Build the Project

Using IntelliJ IDEA:

1. Open the project.
2. Open the Maven panel.
3. Run **clean**.
4. Run **install**.
5. Run `HospitalManagementSystemApplication`.

---

## 4️⃣ Start the Application

The Spring Boot application runs on:

```text
http://localhost:8082
```

Open the web application in your browser:

```text
http://localhost:8082
```

---

# 🔑 Login

The application uses Spring Security for authentication.

### Development Credentials

```text
Username: admin
Password: admin123
Role: ADMIN
```

The ADMIN user can:

- Add patients
- Update patients
- Delete patients
- Add doctors
- Update doctors
- Delete doctors
- Add appointments
- Update appointments
- Delete appointments

Normal users can access GET APIs according to the configured security rules.

> The credentials are intended only for local development/demo use.

---

# 🧪 API Testing with Postman

The REST APIs were tested using **Postman**.

### Patient API Testing

- POST Patient
- GET All Patients
- GET Patient by ID
- Search Patient
- PUT Patient
- DELETE Patient

### Doctor API Testing

- POST Doctor
- GET All Doctors
- GET Doctor by ID
- PUT Doctor
- DELETE Doctor

### Appointment API Testing

- POST Appointment
- GET All Appointments
- GET Appointment by ID
- GET Appointments by Patient
- GET Appointments by Doctor
- GET Appointments by Status
- PUT Appointment
- DELETE Appointment

---


# 🔄 Application Workflow

```text
User
 │
 ▼
Web Browser
 │
 │ HTTP Request
 ▼
Spring Security
 │
 ├── Authentication
 └── Authorization
 │
 ▼
Spring Boot REST Controller
 │
 ▼
Service Layer
 │
 ▼
Spring Data JPA
 │
 ▼
Hibernate ORM
 │
 ▼
MySQL Database
 │
 ▼
JSON Response
 │
 ▼
Web Browser
```

---

# 📚 Key Concepts Implemented

This project demonstrates practical implementation of:

- Object-Oriented Programming with Java
- RESTful Web Services
- Spring Boot
- Spring MVC
- Dependency Injection
- Spring Data JPA
- Hibernate ORM
- Entity Relationships
- MySQL Database Integration
- CRUD Operations
- Request Validation
- Exception Handling
- Spring Security
- Role-Based Access Control
- HTTP Methods
- JSON Request/Response
- JavaScript Fetch API
- Frontend-Backend Integration
- Postman API Testing
- Maven Project Management
- Git and GitHub

---

# 📌 HTTP Methods Used

| Method | Purpose |
|---|---|
| GET | Retrieve data |
| POST | Create new records |
| PUT | Update existing records |
| DELETE | Delete records |

---

# 🎯 Project Objectives

The main objectives of this project are:

1. Build a practical full-stack Java application.
2. Develop RESTful APIs using Spring Boot.
3. Implement CRUD operations using Spring Data JPA.
4. Integrate Hibernate ORM with MySQL.
5. Build a browser-based frontend using HTML, CSS and JavaScript.
6. Implement authentication and role-based access control using Spring Security.
7. Connect frontend components with backend REST APIs.
8. Test APIs using Postman.
9. Practice database relationships between patients, doctors and appointments.

---

# 🔮 Future Enhancements

Possible future improvements include:

- 👥 Persistent user registration and login
- 🔑 Database-based authentication
- 👨‍💼 Admin and Staff roles
- 🔒 Password encryption using BCrypt
- 📧 Email notifications for appointments
- 📱 Mobile-responsive improvements
- 📊 Advanced dashboard analytics
- 🔍 Advanced patient search and filtering
- 📄 PDF report generation
- 🏥 Hospital staff management
- 💊 Prescription management
- 💰 Billing and payment management

---

# 👩‍💻 Author

**Rashmi Kumari**

### Java Full-Stack / Spring Boot Project

---
