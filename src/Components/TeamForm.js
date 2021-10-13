import React from 'react'

export default function TeamForm(props){
    const { values, update, submit } = props

    const onChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        update (name, value);
    }

    const onSubmit = event => {
        event.preventDefault();
        submit();
    }

    return (
        <form className='form container' onSubmit={onSubmit}>
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
                    <option value='backend'>Backend Engineer</option>
                    <option value='frontend'>Frontend Engineer</option>
                    <option value='designer'>UI/UX Designer</option>
                    <option value='fullstack'>Full-Stack Engineer</option>
                    <option value='other'>Other</option>
                </select>
            </label>
            <button>Submit</button>
        </form>
    )
}
