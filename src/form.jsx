import React from "react";
import {useState} from "react"

const Form = ( )=>{
const [name, setName]   = useState("");
const [email, setEmail]   = useState("");
const [age, setAge]   = useState("");

const handleSubmit =(e)=>{
 e.preventdefault()
  if(name && email && age )
 
    window.alert("Voila, you did it ${name}! Your age is ${email} and your email is ${age}.")
  else
    window.alert("Please fill proper info")
    
}
  
  return (
    <>
      <form onSubmit ={handleSubmit} >
       <label>
         Name
       </label>
       <input type="text" minLength={4} onChange = {(e)=>setName(e.target.value)}/ >
       <label>
         Email
       </label>
       <input type="email" minLength={4} onChange = {(e)=>setName(e.target.value)}/ >
       <label>
         Age
       </label>
       <input type="number"  onChange = {(e)=>{
      if(e.target.value >=18)setName(e.target.value)
    } }/ >
      <input type="submit"></input>
      
     </form>
    </>
  )
}

export default Form