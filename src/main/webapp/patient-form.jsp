<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Add Patient</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet">
</head>

<body style="background-color:#f4f6f9;">

<div class="container mt-5">

    <div class="card shadow p-4">

        <h2 class="text-center mb-4">
            Add Patient
        </h2>

        <form action="addPatient" method="post">

            <div class="row">

                <div class="col-md-6 mb-3">
                    <label>Patient Name</label>
                    <input type="text" name="patientName"
                           class="form-control" required>
                </div>

                <div class="col-md-3 mb-3">
                    <label>Age</label>
                    <input type="number" name="age"
                           class="form-control" required>
                </div>

                <div class="col-md-3 mb-3">
                    <label>Gender</label>
                    <select name="gender"
                            class="form-control">
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </select>
                </div>

                <div class="col-md-3 mb-3">
                    <label>Blood Group</label>
                    <input type="text" name="bloodGroup"
                           class="form-control">
                </div>

                <div class="col-md-3 mb-3">
                    <label>Phone</label>
                    <input type="text" name="phone"
                           class="form-control">
                </div>

                <div class="col-md-6 mb-3">
                    <label>Email</label>
                    <input type="email" name="email"
                           class="form-control">
                </div>

                <div class="col-md-12 mb-3">
                    <label>Address</label>
                    <textarea name="address"
                              class="form-control"></textarea>
                </div>

                <div class="col-md-6 mb-3">
                    <label>Disease</label>
                    <input type="text" name="disease"
                           class="form-control">
                </div>

                <div class="col-md-6 mb-3">
                    <label>Doctor Assigned</label>
                    <select name="doctorAssigned"
                            class="form-control">

                        <option>Dr. Amit Sharma</option>
                        <option>Dr. Priya Singh</option>
                        <option>Dr. Rajesh Kumar</option>
                        <option>Dr. Neha Gupta</option>
                        <option>Dr. Vikram Verma</option>

                    </select>
                </div>

                <div class="col-md-6 mb-3">
                    <label>Admission Date</label>
                    <input type="date"
                           name="admissionDate"
                           class="form-control">
                </div>

                <div class="col-md-6 mb-3">
                    <label>Discharge Date</label>
                    <input type="date"
                           name="dischargeDate"
                           class="form-control">
                </div>

                <div class="col-md-6 mb-3">
                    <label>Room Number</label>
                    <input type="number"
                           name="roomNo"
                           class="form-control">
                </div>

                <div class="col-md-6 mb-3">
                    <label>Status</label>

                    <select name="status"
                            class="form-control">

                        <option>Admitted</option>
                        <option>Discharged</option>

                    </select>
                </div>

            </div>

            <button type="submit"
                    class="btn btn-primary">
                Save Patient
            </button>

        </form>

    </div>

</div>

</body>
</html>