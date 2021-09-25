import TextField from '@material-ui/core/TextField'
import React,{forwardRef} from 'react'

//2 differnt ags so no curly bracs to destruct
export const Input = forwardRef((props,ref) => {
    return (
        <TextField  variant="outlined" margin="normal" inputRef={ref} fullWidth {...props} />
            
       
    )
})
