package com.hospital;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.*;

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;

@WebServlet("/addPatient")
public class AddPatientServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request,
                          HttpServletResponse response)
            throws ServletException, IOException {

        try {

            String patientName =
                    request.getParameter("patientName");

            int age =
                    Integer.parseInt(request.getParameter("age"));

            String gender =
                    request.getParameter("gender");

            String bloodGroup =
                    request.getParameter("bloodGroup");

            String phone =
                    request.getParameter("phone");

            String email =
                    request.getParameter("email");

            String address =
                    request.getParameter("address");

            String disease =
                    request.getParameter("disease");

            String doctorAssigned =
                    request.getParameter("doctorAssigned");

            String admissionDate =
                    request.getParameter("admissionDate");

            String dischargeDate =
                    request.getParameter("dischargeDate");

            String roomNo =
                    request.getParameter("roomNo");

            String status =
                    request.getParameter("status");

            Connection con =
                    DBConnection.getConnection();

            String sql =
                    "INSERT INTO patient " +
                            "(patient_name, age, gender, blood_group, phone, email, address, disease, doctor_assigned, admission_date, discharge_date, room_no, status) " +
                            "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

            PreparedStatement ps =
                    con.prepareStatement(sql);

            ps.setString(1, patientName);
            ps.setInt(2, age);
            ps.setString(3, gender);
            ps.setString(4, bloodGroup);
            ps.setString(5, phone);
            ps.setString(6, email);
            ps.setString(7, address);
            ps.setString(8, disease);
            ps.setString(9, doctorAssigned);
            ps.setString(10, admissionDate);
            ps.setString(11, dischargeDate);
            ps.setInt(12, Integer.parseInt(roomNo));
            ps.setString(13, status);

            ps.executeUpdate();

            response.sendRedirect("patient-form.jsp");

        }
        catch (Exception e) {
            e.printStackTrace();
        }
    }
}