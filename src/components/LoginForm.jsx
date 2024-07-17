import {useForm} from "react-hook-form"
import {apiGetUserProfie, apiLogin} from "../services/auth";
import { useState } from 'react' 

const LoginForm = () => {
     const [isSubmittinng, setIsSubmitting] = useState();

     console.log(isSubmittinng)


    const {
        register,
        handleSubmit,
        formState: {errors}, 
      } = useForm();

      const onSubmit = async (data) => {
          console.log(data);
          //isSubmitting = true
          setIsSubmitting(true);
          try {
            const res = await apiLogin({
              email: data.email,
              password: data.password,
    
            })
            console.log("Response", res.data);
            setIsSubmitting(false);


            console.log("Respond: ", res.data);
          } catch (error) {
            console.log(error)
            
          } finally {
            setIsSubmitting(false);
          }


          
      return (
        <div>LogIn</div>
       
      )
    }


export default LoginForm 

