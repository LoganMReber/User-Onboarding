import React from 'react';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const UserForm = props => {
    return(
        <Formik 
            className='userForm'
            initialValues={{Username:"",Email:"",Password:"",tos:false}}
            validationSchema={
                Yup.object().shape({
                    Username: Yup.string()
                        .min(6, 'Your username must be at least 6 characters.')
                        .required('Username is required.'),
                    Email: Yup.string()
                        .email('Not a valid e-mail address.')
                        .required('Email is required.'),
                    Password: Yup.string()
                        .min(8, 'Your password must be at least 8 characters.')
                        .required('Password is required.'),
                    tos: Yup.boolean()
                        .oneOf([true],'You must accept the terms of service.')
                })
            }
            onSubmit={(values) => {
                axios.post('https://reqres.in/api/users',values)
                    .then(res=>{props.addUser(res.data)})
                    .catch(err=>console.log(err));
                }
            }
        >
        { 
            ({values,errors,touched}) => (
                <Form className='userForm'>
                    <label>
                        Name:
                        <Field type='text' name='Username' placeholder="username"/>
                        {touched.Username && errors.Username ? <div> {errors.Username}</div> : <div>&nbsp;</div>}
                    </label>
                    <label>
                        Email:
                        <Field type='email' name='Email' placeholder="johndoe@email.com"/>
                        {touched.Email && errors.Email ? <div> {errors.Email}</div> : <div>&nbsp;</div>}
                    </label>
                    <label>
                        Password:
                        <Field type='password' name='Password' placeholder="Password" />
                        {touched.Password && errors.Password ? <div> {errors.Password}</div> : <div>&nbsp;</div>}
                    </label>
                    <label>
                        <Field type='checkbox' name='tos' checked={values.tos}/>
                        I agree to the <a href="#!">Terms of Service</a>.
                        {touched.tos && errors.tos ? <div>{errors.tos}</div> : <div>&nbsp;</div>}
                    </label>
                    <input className='submitBtn' type='submit' name='Submit'/>
                </Form>
            )
        }
        </Formik>
    );
}
export default UserForm;