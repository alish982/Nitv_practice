// import React from "react";

// const page = async () => {
//   const data = await fetch("https://nitvcrmapi.truestreamz.com/api/v1/user", {
//     method : "POST",
//     body: JSON.stringify({
//       id : 1,
//       email : "alishacharya@gmail.com",
//       password: "alish232",
//     }),
//     headers: {
//       'Content-type': 'application/json'
//     }
// })
//   const res = await data.json()

//   return (
//     <div className="form">
//       <label>choose a role</label>
//       <select>
//         <option value = "admin">admin</option>
//         <option value = "subadmin">sub admin</option>
//       </select><br></br>

//       Email* <input type="email"
//       onChange = {handleChange()}
//       value = {this.state.name}
//       placeholder="Enter your email"
//       />
//       <br></br>

//       password* <input type="password"
//       onChange = {handleChange()}
//       value = {this.state.password}
//       placeholder="password"
//       /><br></br>

//       <button onSubmit = {handleSubmit()} >submit</button>
//     </div>
//   );
// };

// export default page;
// 'use client';
// import React from "react";
// import { Component } from "react";

// class New extends Component{
//     constructor(){
//         super()
//         this.state = {
//             name : "",
//             email : "",
//             password: "",
//             admin : ""
//         }
//         this.handleChange = this.handleChange.bind(this)
//     }

//     handleChange(event: any){
//         const { name, value, email, password, admin } = event.target
//         this.setState({
//             [name] : value
//         })
//     }

//     handleSubmit(){
//       const page = async () => {
//           const data = await fetch("https://nitvcrmapi.truestreamz.com/api/v1/user", {
//             method : "POST",
//             body: JSON.stringify({
//               id : 1,
//               email : {this.state.email},
//               password: {this.state.password},
//               name: {this.state.name}
//             }),
//             headers: {
//               'Content-type': 'application/json'
//             }
//         })
//           const res = await data.json()
//     }
//   }

//     render(){
//         return(
//           <div className="form">
//       <label>choose a role</label>
//       <select name = "admin" onChange ={this.handleChange}>
//         <option value = "admin">admin</option>
//         <option value = "subadmin">sub admin</option>
//       </select><br></br>

//       Email* <input type="email"
//       onChange = {this.handleChange}
//       name = "email"
//       placeholder="Enter your email"
//       />
//       <br></br>

//       Name* <input type="text"
//       onChange = {this.handleChange}
//       name = "name"
//       placeholder="Enter your name"
//       />
//       <br></br>

//       password* <input type="password"
//       onChange = {this.handleChange}
//       placeholder="password"
//       name = "password"
//       /><br></br>

//       <button onSubmit = {this.handleSubmit} >submit</button>
//     </div>
//   )};
// };

// 'use client';
// import { FormEvent } from 'react'

// export default function Page() {
//   async function onSubmit(event: FormEvent<HTMLFormElement>) {
//     event.preventDefault()

//     const formData = new FormData(event.currentTarget)
//     const response = await fetch('https://nitvcrmapi.truestreamz.com/api/v1/user', {
//       method: 'POST',
//       body: formData,
//     })

//     const data = await response.json()

//   }

//   return (
//     <form className = "p-5" onSubmit={onSubmit}>
//       <input className = "bg-slate-600 inline-block rounded border-spacing-1 " type="text" name="name" placeholder="enter your name"/><br></br>
//       <input className = "bg-slate-600 inline-block rounded" type="email" name="email" placeholder = "enter your email" /><br></br>
//       <input className = "bg-slate-600 inline-block rounded"type="password" name="password" placeholder = "password"/><br></br>

//       <button className = "bg-neutral-700 text-sm inline-block"type="submit">Submit</button>
//     </form>
//   )
// }

//

'use client'

import { useState } from "react";
import Link from 'next/link';
import { useFormik } from "formik";
import type { NextPage } from "next";
import * as yup from "yup";

import "bootstrap/dist/css/bootstrap.min.css";

const Home: NextPage = () => {
  const [message, setMessage] = useState(""); // This will be used to show a message if the submission is successful
  const [submitted, setSubmitted] = useState(false);
 // const [err, setErr] = useState({})
  const [initialValue, setValue] = useState({
    user_type: "",
    email: "",
    name: "",
    password: "",
  });

  const formik = useFormik({
    initialValues: initialValue,

    onSubmit: async (values) => {
      const data = await fetch(
        "https://nitvcrmapi.truestreamz.com/api/v1/user",
        {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "content-type": "application/json",
          },
        }
      );

      const res = await data.json();
      console.log(res);
      

      setMessage("form submitted",);
      setSubmitted(true);
    },
    validationSchema: yup.object({
      name: yup.string().trim().required("Name is required"),
      email: yup
        .string()
        .email("Must be a valid email")
        .required("Email is required"),
      password: yup
        .string()
        .trim()
        .required("please enter the password")
        .min(6, "your password must be 6 character long"),
    }),
  });

  return (
    <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
        <label htmlFor = "register " className = 'form-label font-bold '>Register</label>
      <div hidden={!submitted} className="alert alert-primary" role="alert">
        {message}
      </div>

      <form className="w-50 " onSubmit={formik.handleSubmit}>
        <select name="user_type"
         className="mb-3 form-control" onChange = {formik.handleChange}>
          <option>--select you role--</option>
          <option value = "Admin">admin</option>
          <option value = "Subadmin">sub admin</option>
        </select>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder=""
            value={formik.values.name}
            onChange={(newVal) => {
              formik.setFieldValue('name',newVal.target.value)
              console.log(newVal.target.value);
            }}
            onBlur={formik.handleBlur}
          />
          <label htmlFor="password" className="form-label">
            password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder=""
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.name && (
            <div className="text-danger">{formik.errors.name}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>

          <input
            type="email"
            name="email"
            className="form-control"
            placeholder=""
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email && (
            <div className="text-danger">{formik.errors.email}</div>
          )}
        </div>
        
        <button type="submit" className="btn btn-primary">
        Register
        </button><br></br><br></br>
        Already have an account? <Link href ="/pages" className = "btn btn-primary ">Click here to Login</Link>
          
      </form>
    </div>
  );
};

export default Home;
