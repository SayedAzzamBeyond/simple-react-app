// import './App.css'
import { useState } from 'react';
import Item from './Item';

export default function ArrayState() {
  const [students,setStudents] = useState([
    { id: 1, name: 'Tam' },
    { id: 2, name: 'Trung' },
    { id: 3, name: 'Hieu' },
  ]);
  const [isDescending,setIsDescending] = useState(false);

  const sortTable = (e) =>{
    setStudents([...students].reverse());
  }
  return (
    <>
    <input type="checkbox" onChange={sortTable}  id="" /> mark for descending
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {students.map(student => (
          <tr key={student.id}>
            <td>{student.id}</td>
            <td>{student.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  )
}


