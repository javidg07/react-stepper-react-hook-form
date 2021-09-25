import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router'
import { Form } from './Form';
import { Input } from './Input';
import { MainContainer } from './MainContainer';
import { PrimaryButton } from './PrimaryButton';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers';
import { useData } from './DataContext';

const schema = yup.object().shape({
    firstName:yup.string().matches(/^([^0-9]*)$/,"First Name should not contain numbers").required("First Name is required"),
    lastName:yup.string().matches(/^([^0-9]*)$/,"Last Name should not contain numbers").required("Last Name is required")

})

 const Step1 = () => {
     const {setValues,data} = useData();
const { register,handleSubmit,errors} = useForm({
    defaultValues:{firstName:data.firstName,lastName:data.lastName},
    mode :"onBlur",
    resolver:yupResolver(schema)
}
);
const history =useHistory();
 const onSubmit=(data)=>{
history.push('/step2');
setValues(data)
 }
    return (
        <MainContainer>
          <h2>Step 1</h2>
          <Form onSubmit={handleSubmit(onSubmit)}>
              <Input  ref={register} type="text" name="firstName" label="First Name" error={!!errors.firstName} helperText={errors?.firstName?.message}/>
              <Input  ref={register}type="text" name="lastName" label="Last Name" error={!!errors.lastName} helperText={errors?.lastName?.message} />
              <PrimaryButton>next</PrimaryButton>
          </Form>
        </MainContainer>
    )
}
export default Step1
