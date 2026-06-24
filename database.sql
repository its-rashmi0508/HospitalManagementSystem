CREATE DATABASE hospital_db;
USE hospital_db;

CREATE TABLE patient (
    patient_id INT PRIMARY KEY AUTO_INCREMENT,
    patient_name VARCHAR(100) NOT NULL,
    age INT NOT NULL,
    gender VARCHAR(10),
    blood_group VARCHAR(5),
    phone VARCHAR(15),
    email VARCHAR(100),
    address VARCHAR(255),
    disease VARCHAR(100),
    doctor_assigned VARCHAR(100),
    admission_date DATE,
    discharge_date DATE,
    room_no INT,
    status VARCHAR(20)
);

CREATE TABLE doctor (
    doctor_id INT PRIMARY KEY AUTO_INCREMENT,
    doctor_name VARCHAR(100),
    specialization VARCHAR(100),
    phone VARCHAR(15),
    email VARCHAR(100),
    experience INT
);