import React, { useEffect, useState } from "react";
import "../App.css";

function Registration() {
  const [field, setField] = useState({
    firstName: "",
    lastName: "",
    email: "",
    PhoneNo: "",
  });

  const [submited,setSubmitted]=useState(false)
  const [validate,setValidate]=useState(false)

useEffect(()=>{
  setValidate(false)
},[field])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    field.firstName != "" &&
    field.lastName != "" &&
    field.email != "" &&
    field.PhoneNo != ""
      ?(setValidate(true))
      : null;
  };

  return (
    <div>
      
      <form onSubmit={handleSubmit}>
      <h1>Registration Form</h1>
      <div id="successBox">
        {submited && validate ? <div id="successMsg">Registration Successful!</div> : null}
      </div>
        <input
          type="text"
          placeholder="firstname"
          value={field.firstName}
          onChange={(e) => setField({ ...field, firstName: e.target.value })}
        />
        {submited && !field.firstName ? <div>First Name Required</div> : null}
        <input
          type="text"
          placeholder="lastname"
          value={field.lastName}
          onChange={(e) => setField({ ...field, lastName: e.target.value })}
        />
           {submited && !field.lastName ? <div>Last Name Required</div> : null}
        <input
          type="email"
          placeholder="email"
          value={field.email}
          onChange={(e) => setField({ ...field, email: e.target.value })}
        />

{submited && !field.email ? <div>email Required</div> : null}
        <input
          type="number"
          placeholder="phone number"
          value={field.PhoneNo}
          onChange={(e) => setField({ ...field, PhoneNo: e.target.value })}
        />
           {submited && !field.PhoneNo ? <div>phone number Required</div> : null}

        <button id="submit-btn" type="submit">
          Register Now
        </button>
      </form>
    </div>
  );
}

export default Registration;
