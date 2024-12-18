import React from 'react'
import { FormContainer, Input, Button } from './styles'

function Form() {
    return(
        <FormContainer>
            <Input 
            value='Enter a task'
            type='text'
            role='input'
            />
            <Button type='submit' onclick='#'>Add</Button>
        </FormContainer>
    )
}

export default Form