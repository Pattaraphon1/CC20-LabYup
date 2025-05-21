import * as Yup from 'yup';

export const loginSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string()
    .min(6,({path, value})=> `${path} must be at least 6 now have ${value.length}` )
    .required('Password is required'),
    day: Yup.number().min(1, 'Day must be at least 1')
    .max(31, 'Day must be at most 31')
    .typeError('Day must be required'),
    age: Yup.number().min(10, 'Age must be at least 1')
    .typeError('Age must be required')
    
  }) 