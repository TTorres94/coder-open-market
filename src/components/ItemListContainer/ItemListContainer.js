import React from 'react'
import './ItemListcontainer.css'

export default function ItemListContainer({greeting}) {
    return (
        <div className = 'main'>
            <h1>{greeting}</h1>
        </div>
    )
}
