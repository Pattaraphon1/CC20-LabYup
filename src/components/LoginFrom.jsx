import { useState } from "react"
import { loginSchema } from "../schemas/loginschema"
import { yupToFormErrors } from "../utils/yupToFormErrors"

export default function LoginForm() {
 const style = {
     divInput: "flex gap-2",
     input: "border-1 rounded-lg text-center border-gray-300 p-1 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500",
     textError: "text-red-500 text-medium"
   }
 
   const [form, setForm] = useState({
     email: '',
     password: '',
     day: '',
     age: ''
   })
 
   const [error, setError] = useState({})
 
   const handlechange = (e) => {
     setForm({...form, [e.target.name]: e.target.value })
   }
 
 
   const handleSubmit = async (e) => {
     e.preventDefault()
     try {
       await loginSchema.validate(form, { abortEarly: false })
       setError({})
       alert('Form submitted successfully', form)
     } catch (err) {
       
       const errorObj = yupToFormErrors(err);
 
       setError(errorObj)
   }
   }
 
 
   return (
     <div className='flex flex-col items-center justify-center h-screen'>
       <p className='text-2xl font-bold pb-10'>CC 20</p>
       <form className='space-y-2' onSubmit={handleSubmit}>
         <div className={style.divInput}>
           <label>อีเมลล์</label>
           <input className={style.input} 
           type="text" 
           name='email' 
           placeholder='Enter your Email'
           value={form.email}
           onChange={handlechange}
           />
           <p className={style.textError}>{error.email}</p>
         </div>
        
         <div className={style.divInput}>
           <label>รหัสผ่าน</label>
           <input className={style.input} 
           type="password"
           name='password' 
           placeholder='Enter your Password' 
           value={form.password}
           onChange={handlechange}
           />
           <p className={style.textError}>{error.password}</p>
         </div>
 
         <div className={style.divInput}>
           <label>Day</label>
           <input className={style.input} 
           type="number" 
           name='day'
           placeholder='Enter your Day'
           value={form.day}
           onChange={handlechange}
           />
           <p className={style.textError}>{error.day}</p>
         </div>
 
         <div className={style.divInput}>
           <label>Age</label>
           <input className={style.input} 
           type="number" 
           name='age'
           placeholder='Enter your Age'
           value={form.age}
           onChange={handlechange}
           />
           <p className={style.textError}>{error.age}</p>
         </div>
         <button className='border p-2 rounded-lg hover:bg-gray-100' type="submit">สมัครสมาชิก</button>
       </form>
     </div>
   )
  
}