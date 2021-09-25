import {FormControlLabel } from '@material-ui/core'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router'
import { useData } from './DataContext'
import { Form } from './Form'
import { Input } from './Input'
import { MainContainer } from './MainContainer'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers'
import Checkbox from "@material-ui/core/Checkbox";
import { PrimaryButton } from './PrimaryButton'
import {parsePhoneNumberFromString} from 'libphonenumber-js'

const normalizePhNum = (value)=>{
    const phoneNumber = parsePhoneNumberFromString(value);
    if(!phoneNumber){
       return value 
    }
    else{
        return phoneNumber.formatInternational(value)
    }
   
}

const schema = yup.object().shape({
    email:yup.string().email("Email should be correct format").required("Email is required"),
    // lastName:yup.string().matches(/^([^0-9]*)$/,"Last Name should not contain numbers").required("Last Name is required")
})

const Step2 = () => {
    const {data,setValues} = useData();
    const history = useHistory();
    const {register,errors,handleSubmit,watch} = useForm({
        defaultValues:{
            email:data.email,
            hasPhone:data.hasPhone,
            phoneNumber:data.phoneNumber
        },
        mode:"onBlur",
        resolver:yupResolver(schema)
    });
    const hasPhone = watch("hasPhone")
    const onSubmit =(data)=>{
       history.push("/step3");
       setValues(data);
    }
    return (
        <MainContainer>
            <h2>Step 2</h2>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input ref={register} type="email" label="email" name="email" required error={!!errors.email} helperText={errors?.email?.message}/>

                <FormControlLabel control={<Checkbox defaultValue ={data.hasPhone} defaultChecked={data.hasPhone} color="primary" inputRef={register} name="hasPhone"/>} label="Do u have Phone" />
                {hasPhone &&  <Input ref={register} type="tel" id="phoneNumber" label="phoneNumber" name="phoneNumber" onChange={(e)=>{e.target.value = normalizePhNum(e.target.value)}} /> }
                <PrimaryButton>Next</PrimaryButton>
        </Form>
           
        </MainContainer>
    )
}

export default Step2
