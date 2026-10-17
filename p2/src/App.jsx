
import React from 'react';

const student = {
  name: 'Parashuram',
  rollNo: '123',
  branch: 'CSE'
};

const StudentCard = ({ student }) => {
  const studentDetails = { ...student };
  const message = `Student Name: ${studentDetails.name}`;

  return (
    <div>
      <h2>{message}</h2>
      <p>Roll Number: {studentDetails.rollNo}</p>
      <p>Branch: {studentDetails.branch}</p>
    </div>
  );
};

function App() {
  return (
    <div>
      <StudentCard student={student} />
    </div>
  );
}

export default App;
