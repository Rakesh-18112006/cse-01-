import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footnote from "./Footnote";

const arrays = [
  ['MOHITHA', 'MAALASA', 'MITHILESH', 'VENKAT', 'PARINEETHA', 'JAHNAVI'],
  ['JAHNAVI', 'MOHITHA', 'MAALASA', 'MITHILESH', 'VENKAT', 'PARNEETHA'],
  ['PARINEETHA', 'JAHNAVI', 'MOHITHA', 'MAALASA', 'MITHILESH', 'VENKAT'],
  ['MAALASA', 'PARINEETHA', 'MITHILESH', 'VENKAT', 'JAHNAVI', 'MOHITHA'],
  ['MOHITHA', 'MAALASA', 'PARINEETHA', 'MITHILESH', 'VENKAT', 'JAHNAVI'],
  ['JAHNAVI', 'MOHITHA', 'MAALASA', 'PARNEETHA', 'MITHILESH', 'VENKAT'],
  ['PARINEETHA', 'JAHNAVI', 'MITHILESH', 'VENKAT', 'MOHITHA', 'MAALASA'],
  ['MAALASA', 'PARINEETHA', 'JAHNAVI', 'MITHILESH', 'VENKAT', 'MOHITHA'],
  ['MOHITHA', 'MAALASA', 'PARINEETHA', 'JAHNAVI', 'MITHILESH', 'VENKAT'],
  ['JAHNAVI', 'MOHITHA', 'MITHILESH', 'VENKAT', 'MAALASA', 'PARINEETHA']
];

const publicHolidays = [
  "2024-08-15", // Example Public Holiday
  "2024-12-25", // Christmas
  // Add more public holidays here
];

const isPublicHoliday = (date) => {
  return publicHolidays.includes(date.toISOString().split("T")[0]);
};

const generateAssignments = (startDate, arrays) => {
  const assignments = {};
  let arrayIndex = 0;
  let currentDate = new Date(startDate);

  while (arrayIndex < arrays.length) {
    const dayOfWeek = currentDate.getDay();

    if (dayOfWeek !== 0 && dayOfWeek !== 6 && !isPublicHoliday(currentDate)) {
      const dateString = currentDate.toISOString().split("T")[0];
      assignments[dateString] = arrays[arrayIndex];

      arrayIndex++;
    }

    currentDate.setDate(currentDate.getDate() + 1);
  }

  return assignments;
};

const startDate = "2024-08-19";
const assignments = generateAssignments(startDate, arrays);

const DisplayAssignment = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0];
    setCurrentDate(formattedDate);
    console.log("current date is:",formattedDate);
    console.log("Assignments:", assignments);
  }, []);

  return (
    <div style={styles.container}>
      <Navbar />

      <h1 style={styles.heading}>Today's Row Rotation</h1>

      {currentDate && assignments[currentDate] ? (
        <div style={styles.assignmentBox}>
          <p style={styles.dateText}>Today's date: {currentDate}</p>
          <p style={styles.assignedRows}>
            Assigned Rows: {assignments[currentDate].join(", ")}
          </p>
        </div>
      ) : (
        <p style={styles.noAssignment}>No Row Rotation for today.</p>
      )}

      <Footnote />
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Arial', sans-serif",
    backgroundColor: '#f4f4f9',
    padding: '20px',
    minHeight: '100vh',
  },
  heading: {
    fontSize: '36px',
    textAlign: 'center',
    marginBottom: '20px',
    marginTop: '6%',
    color: '#333',
  },
  assignmentBox: {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    margin: '0 auto',
    textAlign: 'center',
  },
  dateText: {
    fontSize: '18px',
    marginBottom: '10px',
    color: '#555',
  },
  assignedRows: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#007bff',
  },
  noAssignment: {
    textAlign: 'center',
    color: '#d9534f',
    fontSize: '20px',
    fontWeight: 'bold',
  },
};

export default DisplayAssignment;