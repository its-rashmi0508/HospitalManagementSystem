# 🏥 Hospital Management System

A **web-based Hospital Management System** developed using **Java Servlet, JSP, JDBC, MySQL, Bootstrap, Maven, and Apache Tomcat**. The system is designed to simplify and manage common hospital operations such as patient registration, doctor management, and appointment scheduling through an easy-to-use web interface.

This project was developed as part of my **Java Internship Project** to demonstrate the practical implementation of Java web technologies and database connectivity.

---

## 📌 Features

The Hospital Management System provides the following features:

### 👤 Patient Management

* Add new patients to the system
* Register patient details through a user-friendly form
* Store patient information securely in the MySQL database

### 👨‍⚕️ Doctor Management

* Add and manage doctor information
* Maintain doctor details and specialization

### 📅 Appointment Management

* Schedule appointments between patients and doctors
* Manage appointment-related information

### 🗄️ Database Connectivity

* Connects the Java web application with a MySQL database
* Uses JDBC for performing database operations

### 📊 Responsive Dashboard

* Clean and responsive user interface
* Developed using Bootstrap 5
* Provides easy navigation between different modules

---

## 🛠️ Technologies Used

| Technology           | Purpose                                        |
| -------------------- | ---------------------------------------------- |
| **Java**             | Core programming language                      |
| **JSP**              | Creating dynamic web pages                     |
| **Servlet**          | Handling client requests and application logic |
| **JDBC**             | Connecting Java application with MySQL         |
| **MySQL**            | Database management                            |
| **Bootstrap 5**      | Responsive and attractive user interface       |
| **Apache Tomcat 10** | Web application server                         |
| **Maven**            | Project dependency and build management        |

---

## 📂 Project Structure

```text
HospitalManagementSystem
│
├── src/
│   └── main/
│       ├── java/
│       │   └── Java source files
│       │
│       └── webapp/
│           ├── JSP pages
│           ├── CSS / Bootstrap files
│           └── WEB-INF/
│
├── pom.xml
├── database.sql
├── README.md
└── screenshots/
```

---

## ⚙️ How to Run the Project

Follow the steps below to run the Hospital Management System on your local machine.

### 1. Clone or Download the Project

Download the project from GitHub or clone the repository to your local system.

### 2. Install Required Software

Make sure the following software is installed:

* Java JDK
* MySQL Server
* Apache Tomcat 10
* Maven
* IDE such as IntelliJ IDEA or Eclipse

### 3. Set Up the Database

1. Open **MySQL Workbench**.
2. Create a database for the project.
3. Open and execute the `database.sql` file provided in the project.

### 4. Configure Database Credentials

Open the `DBConnection.java` file and configure your MySQL credentials:

```java
String url = "jdbc:mysql://localhost:3306/your_database_name";
String username = "root";
String password = "your_password";
```

Update the database name, username, and password according to your MySQL configuration.

### 5. Build the Project

Use Maven to build the project:

```bash
mvn clean package
```

This will generate the `.war` file for deployment.

### 6. Deploy on Apache Tomcat

1. Copy the generated WAR file to the `webapps` folder of Apache Tomcat.
2. Start the Tomcat server.
3. Open the application in your browser.

---

## 🌐 Application URL

Once the application is deployed successfully, open:

`http://localhost:9090/HospitalManagementSystem`

> **Note:** The port number may be different depending on your Apache Tomcat configuration.

---

## 📸 Screenshots

Screenshots of the application can be added to the `screenshots` folder.

Example:

```text
screenshots/
├── dashboard.png
├── add_patient.png
├── doctor_management.png
└── appointment_management.png
```

You can display screenshots in the README using:

```markdown
![Dashboard](screenshots/dashboard.png)
```

---

## 🔮 Future Enhancements

The following features can be added in future versions:

* View, edit, and delete patient records
* Advanced doctor management
* Complete appointment scheduling system
* Search and filter functionality
* Patient medical history
* Billing and payment management
* User authentication and role-based access
* Improved dashboard statistics

---

## 🎯 Learning Outcomes

Through this project, I gained practical experience in:

* Java Web Application Development
* Java Servlets and JSP
* JDBC and MySQL Database Connectivity
* CRUD Operations
* Maven Project Management
* Apache Tomcat Deployment
* Responsive Web Design using Bootstrap

---

## 👩‍💻 Author

**Rashmi Kumari**

### Java Internship Project

---

⭐ If you found this project useful, consider giving it a star on GitHub!
