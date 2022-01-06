import React from 'react'
import './App.css'

export default function LoadingIndicator() {
    return (
        <div className='loading-container'>
            <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
    )
}
