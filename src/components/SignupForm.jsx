import { useRef, useState } from "react"
import { yupToFormErrors } from "../utils/yupToFormErrors"
import { signupSchema } from "../schemas/signupschema"

export default function SignupForm() {
 const style = {
      divInput: "flex gap-2",
      input: "border-1 rounded-lg text-center border-gray-300 p-1 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500",
      textError: "text-red-500 text-medium"
    }
  
    const [form, setForm] = useState({
      username: '',
      nickname: '',
      password: '',
      confirm: '',
      age: '',
      tel: '',
      terms: ''
    })
  
    const refs = {
      username: useRef(null),
      nickname: useRef(null),
      password: useRef(null),
      confirm: useRef(null),
      age: useRef(null),
      tel: useRef(null),
      terms: useRef(null)
    }

    const [error, setError] = useState({})
  
    const handlechange = (e) => {
      if (e.target.type === 'checkbox') {
        setForm({ ...form, [e.target.name]: e.target.checked })
      } else {
      setForm({...form, [e.target.name]: e.target.value })
      }
    }
  
  
    const handleSubmit = async (e) => {
      e.preventDefault()
      try {
        await signupSchema.validate(form, { abortEarly: false })
        setError({})
        alert('Form submitted successfully', form)

      } catch (err) {
        const errorObj = yupToFormErrors(err,refs);
        setError(errorObj)
    }
    }
  
 
    return (
      <div className='flex flex-col items-center justify-center h-screen'>
        <p className='text-2xl font-bold pb-10'>CC 20 Signup Form</p>
        <form className='space-y-2' onSubmit={handleSubmit}>
          <div className={style.divInput}>
            <label>Username</label>
            <input className={style.input} 
            type="text" 
            name='username' 
            placeholder='Enter username..'
            value={form.username}
            onChange={handlechange}
            ref={refs.username}
            />
            <p className={style.textError}>{error.username}</p>
          </div>
         
          <div className={style.divInput}>
            <label>Nickname</label>
            <input className={style.input} 
            type="nickname"
            name='nickname' 
            placeholder='Enter Nickname..' 
            value={form.nickname}
            onChange={handlechange}
            ref={refs.nickname}
            />
            <p className={style.textError}>{error.nickname}</p>
          </div>
  
          <div className={style.divInput}>
            <label>Password</label>
            <input className={style.input} 
            type="password" 
            name='password'
            placeholder='Enter Password..'
            value={form.password}
            onChange={handlechange}
            ref={refs.password}
            />
            <p className={style.textError}>{error.password}</p>
          </div>

          <div className={style.divInput}>
            <label>Confirm Password</label>
            <input className={style.input} 
            type="password" 
            name='confirm'
            placeholder='Enter Comfirm Password..'
            value={form.confirm}
            onChange={handlechange}
            ref={refs.confirm}
            />
            <p className={style.textError}>{error.confirm}</p>
          </div>
  
          <div className={style.divInput}>
            <label>Age</label>
            <input className={style.input} 
            type="number" 
            name='age'
            placeholder='Enter your Age'
            value={form.age}
            onChange={handlechange}
            ref={refs.age}
            />
            <p className={style.textError}>{error.age}</p>
          </div>

          <div className={style.divInput}>
            <label>Telephone</label>
            <input className={style.input} 
            type="tel" 
            name='tel'
            placeholder='Enter phone number'
            value={form.tel}
            onChange={handlechange}
            ref={refs.tel}
            />
            <p className={style.textError}>{error.tel}</p>
          </div>

          <div className={style.divInput}>
            <label>Terms</label>
            <input className={style.input} 
            type="checkbox" 
            name='terms'
            value={form.terms}
            onChange={handlechange}
            ref={refs.terms}
            />
            <p className={style.textError}>{error.terms}</p>
          </div>


          <button className='border p-2 rounded-lg hover:bg-gray-100' type="submit">สมัครสมาชิก</button>
        </form>
      </div>
    )
   
 }