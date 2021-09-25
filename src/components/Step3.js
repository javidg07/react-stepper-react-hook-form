
import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { useData } from './DataContext'
import { FileInput } from './FileInput'
import { Form } from './Form'
import { MainContainer } from './MainContainer'
import { PrimaryButton } from './PrimaryButton'

export const Step3 = () => {
    const history = useHistory();
    const {data, setValues} =useData()
    const {control,handleSubmit}= useForm({
        defaultValues:{
            files: data.files
        }
    })
    const onSubmit =(data)=>{
        history.push('/result')
        setValues(data)
    }
    return (
        <MainContainer>
              <h2>Step 3</h2>
            <Form onSubmit={handleSubmit(onSubmit)}>
             <FileInput name="files" control={control}></FileInput>
             <PrimaryButton>Next</PrimaryButton>
            </Form>
        </MainContainer>
    )
}
export default Step3