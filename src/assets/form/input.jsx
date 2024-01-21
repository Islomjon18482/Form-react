import React from 'react'
import "./input.css"
import { useState } from 'react'

export default function Input(props) {
  return (
    <>
        <label>
            <span>{props.text} <span>*</span></span>
            <input onChange={props.onChange} value={props.value} type="text" placeholder={props.placeholder}/>
        </label>
    </>
  )
}
