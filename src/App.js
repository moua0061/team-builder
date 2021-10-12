import React, { useState, useEffect } from 'react'
import './App.css';
import TeamForm from './Components/TeamForm';


const initialFormValues = {
  username: '',
  email: '',
  role: '', //dropdown option
}


export default function App() {

  const [teamMembers, setTeamMembers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);






  return (
    <div className="App">
      <h1>Hello Team Members! </h1>
          <TeamForm />
    </div>
  )
}


