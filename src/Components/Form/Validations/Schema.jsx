import * as Yup from 'yup';

export const text = Yup.string().required('This Field is Required');
export const email = Yup.string().email().required('This Field is Required');
export const password = Yup.string().min(8).required('This Field is Required');
export const confirm = Yup.string().required('This Field is Required').oneOf([Yup.ref('password'), null], 'Passwords must match');