"use client";
import { useState, useEffect } from "react"
import axios from 'axios';
import { access_token } from '../../localStorage'
import { useFormik } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";



function Page({ params }) {
  // const [plan, setPlan] = useState([]) //{'plan' : 'h'}
  const [initialValue, setInitialValue] = useState({
    user_type: "" ,
    email: "",
    name: "",
    password: "",
  });

  const test_it = async () => {
      const response = await axios.get(`https://nitvcrmapi.truestreamz.com/api/v1/user/${params.id}/detail`, {
          method: "GET",
        headers: {
          'Authorization': `Bearer ${access_token}`,
        }})
        console.log(response.data.data)
      setInitialValue(response.data.data)     
  }
 
 const formik = useFormik({
    
    initialValues: initialValue,

    onSubmit: async (values) => {
      const data = await axios.put(
        `https://nitvcrmapi.truestreamz.com/api/v1/user/${params.id}`, values, 
        { 
          headers : {
          'Authorization': `Bearer ${access_token}`,
          }
        }
      );
      console.log(data.data)
    },

  });
      
  useEffect(() => {
     test_it()
  },[])

    return (
      <>
       <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
        <label htmlFor = "register " className = 'form-label font-bold '>Update User</label>
           <div>
             </div>
                <form className="w-50 " onSubmit={formik.handleSubmit}>
                    <select name="user_type"
                            className="mb-3 form-control"
                            value = {initialValue.user_type}
                            //onChange = {formik.handleChange}
                            onChange={(newVal) => {
                            console.log(newVal.target.value)
                            formik.setFieldValue('user_type',newVal.target.value)
                            setValue((currVal) => {
                            currVal.user_type = newVal.target.value
                              return currVal
                             })
                             console.log(newVal.target.value);
                            }}
                            >
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
            value={initialValue.name}
            onChange={(newVal) => {
              console.log(newVal.target.value)
              formik.setFieldValue('name',newVal.target.value)
              setValue((currVal) => {
                currVal.name = newVal.target.value
                return currVal
              })
              console.log(newVal.target.value);
            }}
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
            value={initialValue.email}
            //onChange={formik.handleChange}
            onChange={(newVal) => {
              console.log(newVal.target.value)
              formik.setFieldValue('email',newVal.target.value)
              setValue((currVal) => {
                currVal.email = newVal.target.value
                return currVal
                console.log(formik.setFieldValue)
              })
              console.log(values.fields[0])
              //console.log(newVal.target.value);
            }}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email && (
            <div className="text-danger">{formik.errors.email}</div>
          )}
        </div>
        
        <button type="submit" className="btn btn-primary">
        Update 
        </button><br></br>
       
          
      </form>
    </div>
      </>
    )
    
  }

  export default Page