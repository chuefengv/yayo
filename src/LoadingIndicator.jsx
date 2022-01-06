import React from 'react'
import './App.css'

export default function LoadingIndicator() {
    return (
        <div className='loading-container'>
            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
    )
}
