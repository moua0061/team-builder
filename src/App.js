import React, { useState } from 'react'
import './App.css';
import TeamForm from './Components/TeamForm';


const initialFormValues = {
  name: '',
  email: '',
  role: '', //dropdown option
}


export default function App() {

  const [teamMembers, setTeamMembers] = useState([]);
  const [errorText, setErrorText] = useState('');

  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues=({...formValues, [inputName]: inputValue });
  }

  const submitForm = () => {
    const newTeamMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }
    if (!newTeamMember.name || !newTeamMember.email || !newTeamMember.role){
      setErrorText('Must enter all fields!');
      return;
    }
  }





  return (
    <div className="App">
      <h1>Hello Team Members! </h1>
          <TeamForm />
    </div>
  )
}


