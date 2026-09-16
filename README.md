# 🏥 Hospital Management System

A full-stack Hospital Management System developed using **Java, Spring Boot, Spring Data JPA, Hibernate, MySQL, HTML, CSS, and JavaScript**.

The system provides REST APIs and a web-based dashboard for managing patients, doctors, and appointments.

---

## 📌 Project Overview

The Hospital Management System is designed to simplify basic hospital record management through a centralized web application.

The application provides modules for:

- 👤 Patient Management
- 👨‍⚕️ Doctor Management
- 📅 Appointment Management
- 📊 Dashboard
- 🔐 User Authentication and Access Control
- 🗄️ MySQL Database Integration

The backend is developed using Spring Boot and exposes RESTful APIs that communicate with a MySQL database through Spring Data JPA and Hibernate.

The frontend provides a simple and responsive dashboard for interacting with the backend APIs.

---

## ✨ Features

### 👤 Patient Management

The Patient Management module allows authorized users to:

- Add new patients
- View patient records
- Search patients
- Update patient information
- Delete patient records

Patient information includes:

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

The Doctor Management module allows users to manage doctor information.

Features include:

- Add doctors
- View doctors
- Update doctor information
- Delete doctors

Doctor information includes:

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

Features include:

- Create appointments
- View appointments
- Update appointments
- Delete appointments
- View appointments by patient
- View appointments by doctor
- View appointments by status

Appointment information includes:

- Appointment ID
- Patient
- Doctor
- Appointment Date and Time
- Reason for Visit
- Appointment Status
- Notes

---

### 📊 Dashboard

The web dashboard displays:

- Total Patients
- Total Doctors
- Total Appointments
- Quick Actions
- System Status

The dashboard retrieves the data dynamically from the Spring Boot REST APIs.

---

### 🔐 Authentication and Access Control

The project includes Spring Security for protecting modification operations.

The intended access model is:

| Operation | Access |
|-----------|--------|
| View Patients | Public |
| View Doctors | Public |
| View Appointments | Public |
| Add Patient | Authorized User |
| Update Patient | Authorized User |
| Delete Patient | Authorized User |
| Add Doctor | Authorized User |
| Update Doctor | Authorized User |
| Delete Doctor | Authorized User |
| Add Appointment | Authorized User |
| Update Appointment | Authorized User |
| Delete Appointment | Authorized User |

Spring Security is used to restrict POST, PUT, and DELETE operations.

---

# 🛠️ Technologies Used

## Backend

- Java 17
- Spring Boot 3.3.4
- Spring Web
- Spring Data JPA
- Hibernate ORM
- Spring Security
- Maven

## Database

- MySQL

## Frontend

- HTML5
- CSS3
- JavaScript
- Fetch API

## Development Tools

- IntelliJ IDEA
- MySQL Workbench
- Postman
- Git
- GitHub

---

# 🏗️ System Architecture

```mermaid
flowchart TD

    A[🌐 Web Browser<br/>HTML / CSS / JavaScript]
    
    B[🔐 Spring Security]
    
    C[🚀 Spring Boot<br/>REST APIs]
    
    D[👤 Patient Services]
    E[👨‍⚕️ Doctor Services]
    F[📅 Appointment Services]
    
    G[📦 Spring Data JPA]
    
    H[⚙️ Hibernate ORM]
    
    I[(🗄️ MySQL<br/>HospitalDb)]

    A -->|HTTP Requests| B
    B --> C

    C --> D
    C --> E
    C --> F

    D --> G
    E --> G
    F --> G

    G --> H
    H --> I
---

##👩‍💻 Author

**Rashmi Kumari**

### Java Internship Project

---
