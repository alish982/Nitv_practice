import React from 'react'
import * as yup from "yup";

export const Validation = () => {
     yup.object({
        name: yup
        .string()
        .trim()
        .required("Name is required"),
        email: yup
          .string()
          .email("Must be a valid email")
          .required("Email is required"),
        password: yup
          .string()
          .trim()
          .required("please enter the password")
          .min(6, "your password must be 6 character long"),
      })
}
