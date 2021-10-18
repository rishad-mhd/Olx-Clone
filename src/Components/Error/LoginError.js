import React from 'react'
import './LoginError.css'

function LoginError(props) {
    return (
        <div>
            <p className='error'>{props.value}</p>
        </div>
    )
}

export default LoginError
