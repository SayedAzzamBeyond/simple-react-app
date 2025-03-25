// import './App.css'
import Item from './Item';
const students = [
  { id: 1, name: 'Tam', isPacked: true },
  { id: 2, name: 'Trung', isPacked: true },
  { id: 3, name: 'Hieu', isPacked: false },
];
function App() {
  return (
    <>
      <ul>
        {students.map((student) => <Item key={student.id} id={student.id} name={student.name} isPacked={student.isPacked}></Item>)}
      </ul>
    </>
  )
}

export default App


