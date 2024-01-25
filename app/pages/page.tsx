'use client'

import { useState } from "react";
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import { useFormik } from "formik";
import type { NextPage } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { red } from '@mui/material/colors';


const Home: NextPage = () => {
  const [message, setMessage] = useState(""); // This will be used to show a message if the submission is successful
  const [submitted, setSubmitted] = useState(false);
  const [initialValue, setValue] = useState({
    username: "",
    password: "",

  });
  const router = useRouter()

  const formik = useFormik({
    initialValues: initialValue,

    onSubmit: async (values) => {
      let formData = new FormData()
       formData.append("username", values.username)
       formData.append("password", values.password)
      //console.log(formData)
      //console.log(values)
      const data = await fetch(
        "https://nitvcrmapi.truestreamz.com/api/v1/user/login",
        {
          method: "POST",
          body: formData,
          
        }
      )
      
      router.push('/Component')

      const res = await data.json();
      //console.log(res);
    
      localStorage.setItem("token_ho_yo", res.access_token)
      

      setMessage(" ");
      setSubmitted(true);

    },
  });

  return (
    <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
        <label htmlFor = "register " className = 'form-label font-bold '>Login</label>
      <div hidden={!submitted} className="alert alert-primary" role="alert">
        {message}
      </div>

      <form className="w-50 " onSubmit={formik.handleSubmit}>
        <div className="mb-3">
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Email or Username
          </label>

          <input
            type="username"
            name="username"
            className="form-control"
            placeholder=""
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.username && (
            <div className="text-danger">{formik.errors.username}</div>
          )}
        </div>

          <label htmlFor="password" className="form-label">
            password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            value = {formik.values.password}
            placeholder=""
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login <LoginRoundedIcon />
        </button><br></br><br></br>
        <Link href ="/" className = "btn btn-primary"><ArrowBackRoundedIcon sx={{ color: red[500] }} />Back to Register</Link>

      </form>
</div>

  );
};

export default Home;