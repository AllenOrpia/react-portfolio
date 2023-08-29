import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from 'react';
import {useForm} from 'react-hook-form'
import axios from 'axios'
 
export default function Contact() {

    const {
        register,
        getValues,
        handleSubmit,
        formState: { errors },
      } = useForm({
        mode: 'onSubmit'
      });

    const onSubmit = async (data) => {
          const updatedData = {
            name: getValues("name"),
            email: getValues("email"),
            message: getValues('message')
          };
          try {
            const res = await axios.post("https://getform.io/f/9c0f36be-fc76-4cb6-958e-9c97ba5f72e9", updatedData, { headers:  { 'Content-Type': 'application/json' } })
            alert('Message sent successfully!')
            console.log(res)

          } catch(err) {
            console.log(err)
          }
    };

    // const onSubmit = async (data) => {
    //     const requestOptions = {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(data)
    //     };
    
    //     const response = await fetch(["https://getform.io/f/9c0f36be-fc76-4cb6-958e-9c97ba5f72e9"], requestOptions);
    //     const jsonData = await response.data.json();
    
    //     console.log(jsonData);
    //     alert('Message Sent!')
       
    

    // }

    const handleErrors = (errors) => {};

    const formOptions = {
        name: { required: 'Name cannot be blank'},
        email: { required: 'Email cannot be blank', pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "invalid email address"
          }},
        message: { required: 'Please leave a message'}
    }
    // const [formData,setFormData] = useState({
    //     name: '',
    //     email: '',
    //     message: ''
    // })

    // const handleForm = (e) => {
    //     const fieldName = e.target.name;
    //     const value = e.target.value;

    //     setFormData(currData => {
    //         currData[fieldName] = value;
    //         return {...currData}
    //     })
    // }

    return (
        <div className="p-10 grid grid-cols-1 lg:grid-cols-2">
            <div className=''>
                <h3 className='text-3xl py-2 font-medium'>Contact</h3>
                <p className='text-xl py-2'>Fill out the form to get in touch or email me directly with your preferred method of choice at</p>
                <span className='text-xl text-blue-500 mb-3'>Email: allenorpia17@gmail.com</span>
            </div>
            <form 
                className="shadow-lg p-10 rounded-xl my-10 dark:shadow-blue-500 flex flex-col w-full gap-5"
                onSubmit={handleSubmit(onSubmit, handleErrors)}
                >
                    
                        <span className='text-red-500'>
                            {errors?.name && errors.name.message}
                        </span>
                        <input 
                            type="text" 
                            name="name" 
                            placeholder='Enter your name'
                            className="p-2 bg-transparent border-2 rounded-md focus:outline-none" 
                            {...register('name', formOptions.name)}
                        />
                    
                    
                        <span className='text-red-500'>
                            {errors?.email && errors.email.message}
                        </span>
                        <input 
                            type="text" 
                            name="email" 
                            placeholder= 'Enter your email'
                            className="p-2 bg-transparent border-2 rounded-md focus:outline-none" 
                            {...register('email', formOptions.email)}
                            />

                                            
                        <span className='text-red-500'>
                            {errors?.message && errors.message.message}
                        </span>
                        <textarea 
                            name="message" 
                            placeholder='Leave a message' 
                            rows="10"
                            className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
                            {...register('message', formOptions.message)}
                        >
                        </textarea>

                    
                <button 
                type='submit'
                className="flex justify-center group px-3 py-3 my-2   bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl cursor-pointer duration-300 w-1/2 self-center hover:-translate-x-1 hover:-translate-y-1">Send
                <span className='group-hover:translate-x-5 duration-500 ml-1'>
                    <ArrowForwardIcon />
                  </span>
                </button>
            </form>

        </div>
    )
}