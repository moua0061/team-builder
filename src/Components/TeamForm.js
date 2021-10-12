import React from 'react'

export default function TeamForm(props){
    const { values, update, submit } = props

    const onChange = event => {
        const value = event.target.value;
    }

    const onSubmit = event => {
        event.preventDefault();
        submit();
    }

    return (
        <form className='form container'>
            <label>Name
                <input 
                    onChange={event => {
                        debugger
                    }}
                    type='text'
                    name='name'
                    maxLength='100'
                    placeholder='enter your name'
                />
            </label>

            <label>Email 
                <input 
                onChange={event => {
                    debugger
                }}
                type='email'
                name='email'
                placeholder='enter your email'
                />
            </label>

            <label>Role
                <select name='role' onChange={event => {
                    debugger
                }}>
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
