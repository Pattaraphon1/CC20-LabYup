import * as Yup from 'yup';

export const signupSchema = Yup.object({
    username: Yup.string().matches(/^[a-zA-Z0-9_]{5,12}$/, 'Username must be at 5-12').required('Username is required'),

    nickname: Yup.string().min(3,({path, value})=> `${path} must be at least 3 now have ${value.length}` )
    .max(10,({path, value})=> `${path} must be at most 10 now have ${value.length}` )
    .required('Nickname is required'),

    password: Yup.string()
    .min(6,({path, value})=> `${path} must be at least 6 now have ${value.length}` )
    .required('Password is required'),

    confirm: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required'),

    age: Yup.number().min(10, 'Age must be at least 10')
    .typeError('Age must be required'),
    
    tel: Yup.string()
    .matches(/^\d{10}$/, 'Phone number must be 10 digits'),

    terms: Yup.boolean()
    .oneOf([true], 'Terms and Conditions must be accepted')
  }) 