
// 'use client'
// import Link from 'next/link'
// import { useState } from "react";
// import { useFormik } from "formik";
// import type { NextPage } from "next";
// import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
// import "bootstrap/dist/css/bootstrap.min.css";


// const Home: NextPage = ({ params }) => {
//   const [submitted, setSubmitted] = useState(false);
  const [initialValue, setValue] = useState({
    user_type: "",
    email: "",
    name: "",
  });

 const formik = useFormik({
    initialValues: initialValue,

    onSubmit: async (values) => {
      const data = await fetch(
        `https://nitvcrmapi.truestreamz.com/api/v1/user/${params.id}/detail`,
        {
          method: "GET",
          body: JSON.stringify(values),
          headers: {
            "content-type": "application/json",
          },
        }
      );
      const res = await data.json();
      console.log(res.data)
    },

  })

//   return (
//     <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
//         <label htmlFor = "register " className = 'form-label font-bold '>Update User</label>
//       <div>
//       </div>

//       <form className="w-50 " onSubmit={formik.handleSubmit}>
//         <select name="user_type"
//          className="mb-3 form-control" onChange = {formik.handleChange}>
//           <option>--select you role--</option>
//           <option value = "Admin">admin</option>
//           <option value = "Subadmin">sub admin</option>
//         </select>
//         <div className="mb-3">
//           <label htmlFor="name" className="form-label">
//             Name
//           </label>
//           <input
//             type="text"
//             name="name"
//             className="form-control"
//             placeholder=""
//             value={formik.values.name}
//             onChange={(newVal) => {
//               formik.setFieldValue('name',newVal.target.value)
//               console.log(newVal.target.value);
//             }}
//             onBlur={formik.handleBlur}
//           />
//           {formik.errors.name && (
//             <div className="text-danger">{formik.errors.name}</div>
//           )}
//         </div>

//         <div className="mb-3">
//           <label htmlFor="email" className="form-label">
//             Email
//           </label>

//           <input
//             type="email"
//             name="email"
//             className="form-control"
//             placeholder=""
//             value={formik.values.email}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//           />
//           {formik.errors.email && (
//             <div className="text-danger">{formik.errors.email}</div>
//           )}
//         </div>
        
//         <button type="submit" className="btn btn-primary">
//         Update < LoginRoundedIcon/>
//         </button><br></br>

          
//       </form>
//     </div>
//   );
// }; 

// export default Home;

