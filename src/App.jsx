// import './App.css'
import { useState } from 'react';
import Item from './Item';
const students = [
  { id: 1, name: 'Tam', isPacked: true },
  { id: 2, name: 'Trung', isPacked: true },
  { id: 3, name: 'Hieu', isPacked: false },
];
function App() {
  const [student,setStudent] = useState({
    firstName: 'Tam',
    lastName: 'Nguyen',
    age: 18,
  });
  

  const handleInputChange = (value,target) =>{
    setStudent({...student,[target]: value});
  }
  const handleForm = (e) =>{
    e.preventDefault();
    console.log(student);
  }
  return (
    <>
    <form action="" onSubmit={handleForm}>
      <input type="text" value={student.firstName}  onChange={(e) =>  handleInputChange(e.target.value,'firstName')} />
      <input type="text" value={student.lastName}  onChange={(e) =>  handleInputChange(e.target.value,'lastName')} />
      <input type="number" value={student.age}  onChange={(e) =>  handleInputChange(e.target.value,'age')} />
      <input type="submit" />
    </form>

    </>
  )
}

export default App


