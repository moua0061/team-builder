import React from 'react'

export default function TeamForm(props){
    const { values, update, submit } = props

    const onChange = event => {
        const name = event.target.name;
        const value = event.target.values;
        update (name, value);
    }

    const onSubmit = event => {
        event.preventDefault();
        submit();
    }

    return (
        <form className='form container'>
            <label>Name
                <input 
                    value={values.name}
                    onChange={onChange}
                    type='text'
                    name='name'
                    maxLength='100'
                    placeholder='enter your name'
                />
            </label>

            <label>Email 
                <input 
                value={values.email}
                onChange={onChange}
                type='email'
                name='email'
                placeholder='enter your email'
                />
            </label>

            <label>Role
                <select name='role' value={values.role} onChange={onChange}>
                    <option value=''>Select a role</option>
                    <option value=''>Backend Engineer</option>
                    <option value=''>Frontend Engineer</option>
                    <option value=''>UI/UX Designer</option>
                    <option value=''>Full-Stack Engineer</option>
                    <option value=''>Other</option>
                </select>
            </label>
            <button>Submit</button>
        </form>

)}
