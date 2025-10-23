import React from 'react'
import { ErrorMessage, Field, Formik , Form} from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from "yup"

export default function SignIn() {

  const validationSchema = Yup.object({
    
      email : Yup.string()
      .required("Email cannot be empty")
      .email("Your email is invalid"),
  

      password: Yup.string()
      .required("Password cannot be empty")
      .min(8, "Password must be between 8 and 12 characters")
      .max(12, "Password must be between 8 and 12 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,12}$/,
        "Password must include at least one uppercase, lowercase, number, and at least one special character"
      ),
  
     
  
  })
  
  const navigate = useNavigate()

  const handleSubmit = (values, actions) => {
        console.log(values)
        const storedData =JSON.parse(localStorage.getItem("LoginData"))

        if(!storedData){
          alert("User is not registered")
        }
        if(storedData.email === values.email && storedData.password === values.password){

         localStorage.setItem("currentUser", JSON.stringify(storedData));

          actions.resetForm()

        navigate("/shop")

        }
        else{
          alert("invalid login credentials")
        }


        }


      
  return (
    <>
       <div className='gap-8 px-8 lg:px-34 md:px-30 items-center flex justify-center pt-30'>
              <div className='shadow-md px-10 py-10 mb-20 w-100 rounded-xl'>
      
              <h1 className='font-bold text-xl'>Sign in </h1>
      
              <Formik 
              initialValues={{email: "", password : ""}} 
              validationSchema={validationSchema}
              onSubmit={handleSubmit} >
      
              <Form >
      
      
      
              <Field name="email" type="email" placeholder="Enter Your Email Address"/>
              <ErrorMessage component="p" name='email' className='text-red-500 font-semibold' />
      
              <Field name="password" type="password" placeholder="Enter Your Password"/>
              <ErrorMessage component="p" name='password' className='text-red-500 font-semibold' />
      
      
      
      
             <button type='submit' className='bg-purpla text-white w-full mt-10 py-4 rounded-xl font-bold'>Sign in</button>
      
             <div className='flex row justify-center items-center mt-6'>
              <h6 className='text-black font-semibold'>Don't have an account?</h6>
              <Link to="/signup" className='text-purpla'>Sign Up</Link>
             </div>
      
      
              </Form>
      
      
              </Formik>
      
              </div>
            </div>
    </>
  )
}
