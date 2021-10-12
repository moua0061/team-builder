import React, { useState } from 'react'
import './App.css';
import TeamForm from './Components/TeamForm';
import TeamMember from './Components/TeamMember'


const initialFormValues = {
  name: '',
  email: '',
  role: '', //dropdown option
}


export default function App() {

  const [teamMembers, setTeamMembers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
  }

  const submitForm = () => {
    const newTeamMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }
  }

  return (
    <div className="App">
      <h1>Hello Team Members! </h1>
          <TeamForm 
          values={formValues}
          update={updateForm}
          submit={submitForm}
          />

      {
        teamMembers.map(member => {
          return (
            <TeamMember key={member.id} details={member} />
          )
        })
      }
    </div>
  )
}


