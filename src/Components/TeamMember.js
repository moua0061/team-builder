import React from 'react'

export default function TeamMember(){
    const { details } = props

    return (
        <div className='teammember container'>
            <h2>{details.name}</h2>
            <p>Email: {details.email}</p>
            <p>Role: {details.role}</p>
        </div>


    )
}