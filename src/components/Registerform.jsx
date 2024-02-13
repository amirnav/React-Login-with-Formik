import React from 'react';
import { ErrorMessage, FastField, Field, Form, Formik, useFormik } from 'formik'
import * as Yup from 'yup'

const initialValues={
    name: '',
    email: '',
    password: '',
}

const onSubmit= values=>{
    console.log(values);
}

const validate=values=>{
    let errors={}
    if (!values.name){
        errors.name="لطفا نام کاربری را وارد نمائید"
    }
    if(!values.email){
        errors.email="لطفا آدرس ایمیل را وارد نمائید"}
        else if(!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(values.email )){
            errors.email="لطفا قالب ایمیل را وارد نمائید : aaa@example.bbb" 
    }
        if (!values.password){
        errors.password="لطفا گذرواژه را وارد نمائید"
    }   
    return errors        
}

const validationSchema=Yup.object({
    name:Yup.string().required("لطفا نام کاربری را وارد نمائید"),
    email:Yup.string().required('لطفا قالب ایمیل را صحیح وارد نمائید : aaa@example.bbb'),
    password:Yup.string().required('لطفا گذرواژه را وارد نمائید').min(8,'حداقل 8 کاراکتر انتخاب نمائید')
})

const Registerform = () => {
    // const formik = useFormik({
    //     initialValues,
    //     // validate,
    //     onSubmit,
    //     validationSchema        
    // })

    return (
       <Formik
       initialValues={initialValues}
       validationSchema={validationSchema}
       onSubmit={onSubmit}
       >
         <div className='auth_container container-fluid d-flex justify-content-center align-items-center w-100 h-100-vh p-0'>
            <div className="row w-100 justify-content-center align-items-center">
                <div className='auth_box col-11 col-md-8 col-lg-6 col-xl-4 py-4 px-3'>
                    <Form> 
                        <h1 className='text-center'>
                            <i className='fas fa-user-plus text-primary'></i>
                        </h1>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">نام</label>
                            <FastField type="text" className="form-control" id="name" name='name'
                            />
                           <ErrorMessage name='name'/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">ایمیل</label>
                            <FastField type="email" className="form-control" id="email" name='email'
                            />
                            <ErrorMessage name='email'/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">رمز عبور</label>
                            <FastField type="password" className="form-control" id="password" name='password'
                            />
                           <ErrorMessage name='password'/>
                           </div>
                        <div className='text-center w-100'>
                            <button type="submit" className="btn btn-primary">ثبت نام</button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
       </Formik>
    );
}

export default Registerform;
