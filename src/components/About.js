import React, { useState } from 'react';

const About = () => {
  const [name, setName] = useState("");
  const [email,setEmail] = useState("")
  const [message,setMessage] = useState("")

  const handleSubmit = (event) =>
  {
    event.preventDefault();
    
  }

  return (
    <>
    <p>Contact me </p>
    <form onSubmit={handleSubmit}  className="p-4 mt-6  h-80 flex flex-col max-w-sm mx-auto border">
      <label>Name</label>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        className=" border p-1 rounded-md  w-full mb-2"
        placeholder="Enter your name"
      />
     <label>Email</label>
      <input
      type = "email"
      value = {email}
      onChange = {(e)=>setEmail(e.target.value)}
      className = "border p-1 rounded-md  w-full mb-2"
      placeholder='Enter your password'
      />
       <label>Textarea</label>
      <textarea
      value = {message}
      onChange = {(e) => setMessage(e.target.value)}
      className = "border  rounded-md  w-full mb-4 p-2 min-h-32 resize-none"
      placeholder='Enter your message'
      />

<button 
  type="submit" 
  className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md w-full hover:bg-blue-600 transition-all"
>
  Submit
</button>
    </form>
    </>
  );
};

export default About;
