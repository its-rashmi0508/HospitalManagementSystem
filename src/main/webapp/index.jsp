<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet"
     href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <meta charset="UTF-8">
    <title>Hospital Management System</title>

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

    <style>
        body{
            background-color:#f4f6f9;
        }

        .navbar{
            background:#0d6efd;
        }

        .card{
            transition:0.3s;
            border:none;
            border-radius:15px;
        }

        .card:hover{
            transform:translateY(-5px);
            box-shadow:0 8px 20px rgba(0,0,0,0.2);
        }

        .dashboard-title{
            text-align:center;
            margin:30px 0;
            font-weight:bold;
        }
    </style>
</head>
<body>

<nav class="navbar navbar-dark">
    <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">
            Hospital Management System
        </span>
    </div>
</nav>

<div class="container">

    <h2 class="dashboard-title">
        Welcome, Rashmi
    </h2>

    <div class="row">

        <!-- Patient Card -->
        <div class="col-md-4 mb-4">
            <div class="card text-center p-4">
                <h3><i class="bi bi-person-lines-fill"></i> Patients</h3>
                <p>Manage patient records</p>
                <a href="#" class="btn btn-primary">
                    Open
                </a>
            </div>
        </div>

        <!-- Doctor Card -->
        <div class="col-md-4 mb-4">
            <div class="card text-center p-4">
                <h3><i class="bi bi-heart-pulse-fill"></i> Doctors</h3>
                <p>Manage doctor details</p>
                <a href="#" class="btn btn-success">
                    Open
                </a>
            </div>
        </div>

        <!-- Appointment Card -->
        <div class="col-md-4 mb-4">
            <div class="card text-center p-4">
                <h3><i class="bi bi-calendar-check-fill"></i> Appointments</h3>
                <p>Manage appointments</p>
                <a href="#" class="btn btn-warning">
                    Open
                </a>
            </div>
        </div>

    </div>

</div>

</body>
</html>