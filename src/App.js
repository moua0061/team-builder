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
    setTeamMembers(teamMembers.concat(newTeamMember))
    setFormValues(initialFormValues)
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
        teamMembers.map((member, index) => {
          return (
            <TeamMember key={index} member={member} />
          )
        })
      }
    </div>
  )
}


