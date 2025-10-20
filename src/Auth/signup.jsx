import { ErrorMessage, Field, Formik , Form} from 'formik'
// import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from "yup"


export default function Signup() {

// const [error, setError] = useState("")

const validationSchema = Yup.object({
    name : Yup.string()
    .min(3, "You name must be at least minimum of 3 characters")
    .max(30, "Your name mustb not exceed 30 characters")
    .required("The name fileld cannot be empty"),

    email : Yup.string()
    .required("Email cannot be empty")
    .email("Your email is invalid"),

     address : Yup.string()
    .required("Address cannot be empty"),


    phoneNo : Yup.string()
    .required("Please Enter Phone number")
    .matches(/^\d{11}$/, "Phone number must be exactly 11 digits"),

    password: Yup.string()
    .required("Password cannot be empty")
    .min(8, "Password must be between 8 and 12 characters")
    .max(12, "Password must be between 8 and 12 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,12}$/,
      "Password must include at least one uppercase, lowercase, number, and at least one special character"
    ),

     confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], "Passwords do not match")
      .required("This field cannot be empty"),

})

const navigate = useNavigate()

const handleSubmit = (values, actions) => {
      console.log(values)
      localStorage.setItem("LoginData", JSON.stringify(values));
      actions.resetForm()
      navigate("/signin")
}


  return (
    <>
      <div className='gap-8 px-8 lg:px-34 md:px-30 items-center flex justify-center pt-30'>
        <div className='shadow-md px-10 py-10 mb-20 w-100 rounded-xl'>

        <h1 className='font-bold text-xl'>Create an Account</h1>

        <Formik 
        initialValues={{name:"", email: "", phoneNo : "", address: "", password : "", confirmPassword : ""}} 
        validationSchema={validationSchema}
        onSubmit={handleSubmit} >

        <Form >

        <Field name="name" type="text" placeholder="Enter Your name"/>
        <ErrorMessage component="p" name='name' className='text-red-500 font-semibold' />

        <Field name="email" type="email" placeholder="Enter Your Email Address"/>
        <ErrorMessage component="p" name='email' className='text-red-500 font-semibold' />

        <Field name="password" type="password" placeholder="Set a Password"/>
        <ErrorMessage component="p" name='password' className='text-red-500 font-semibold' />


        <Field name="confirmPassword" type="password" placeholder="Confirm Password"/>
        <ErrorMessage component="p" name='confirmPassword' className='text-red-500 font-semibold' />


        <Field  name="phoneNo"
  type="text"
  inputMode="numeric"
  pattern="[0-9]*" placeholder="Enter Your Phone number"/>
        <ErrorMessage component="p" name='phoneNo' className='text-red-500 font-semibold' />


        <Field name="address" type="text" placeholder="Enter Shipping Address"/>
        <ErrorMessage component="p" name='address' className='text-red-500 font-semibold' />

       <button type='submit' className='bg-purpla text-white w-full mt-10 py-4 rounded-xl font-bold'>Sign up</button>

       <div className='flex row justify-center items-center mt-6'>
        <h6 className='text-black font-semibold'>Already have an account?</h6>
        <Link to="/signin" className='text-purpla'>Sign in</Link>
       </div>


        </Form>


        </Formik>

        </div>
      </div>
    </>
  )
}
