import React from 'react';
import { useFormik } from 'formik'
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
    const formik = useFormik({
        initialValues,
        // validate,
        onSubmit,
        validationSchema
        
    })
    return (
        <div className='auth_container container-fluid d-flex justify-content-center align-items-center w-100 h-100-vh p-0'>
            <div className="row w-100 justify-content-center align-items-center">
                <div className='auth_box col-11 col-md-8 col-lg-6 col-xl-4 py-4 px-3'>
                    <form onSubmit={formik.handleSubmit}> 
                        <h1 className='text-center'>
                            <i className='fas fa-user-plus text-primary'></i>
                        </h1>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">نام</label>
                            <input type="text" className="form-control" id="name" name='name'
                            {...formik.getFieldProps('name')}
                            />
                            {formik.errors.name && formik.touched.name  ? <small className='d-block text-center text-danger'>{formik.errors.name}</small>:null}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">ایمیل</label>
                            <input type="email" className="form-control" id="email" name='email'
                            {...formik.getFieldProps('email')}
                            />
                            {formik.errors.email && formik.touched.email? <small className='d-block text-center text-danger'>{formik.errors.email}</small>:null}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">رمز عبور</label>
                            <input type="password" className="form-control" id="password" name='password'
                            {...formik.getFieldProps('password')}
                            />
                            {formik.errors.password && formik.touched.password ? <small className='d-block text-center text-danger'>{formik.errors.password}</small>:null}
                        </div>
                        <div className='text-center w-100'>
                            <button type="submit" className="btn btn-primary">ثبت نام</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Registerform;
