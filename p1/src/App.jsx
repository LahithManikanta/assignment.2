import "./App.css";

const student = {
  name: "Shiva Shanker",
  rollNo: "23",
  department: "Computer Science",
  year: "3rd Year",
};

// Arrow function and object destructuring
const StudentInfo = ({ name, rollNo, department, year }) => {
  return (
    <div className="student-card">
      <h1>Student Information</h1>

      <p>{`Name: ${name}`}</p>
      <p>{`Roll Number: ${rollNo}`}</p>
      <p>{`Department: ${department}`}</p>
      <p>{`Year: ${year}`}</p>
    </div>
  );
};

function App() {
  // Spread operator
  const studentDetails = { ...student };

  return (
    <div className="container">
      <StudentInfo {...studentDetails} />
    </div>
  );
}

export default App;