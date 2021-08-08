import React from 'react'
import './Card.css'

export default function Card(props) {
    const classes = 'card ' + props.className; //'card ' mein space dena jruri hai yha bki      classes add hoti hai
    return (
        <div className={classes}>
            {/* children is a reserved keyword that returns jsx wrapped in this component */}
            {props.children}  
        </div>
    )
}
