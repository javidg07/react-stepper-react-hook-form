import React from 'react'
 import { makeStyles } from '@material-ui/core/styles'
 import  Button  from '@material-ui/core/Button'
 const useStyles = makeStyles((theme)=>({
 root:{
    margin:theme.spacing(3,0,2)

 }
 }))
export const PrimaryButton = ({children,...props}) => {
    const styles = useStyles();
    return (
        <Button  {...props} type="submit" className={styles.root} fullWidth  variant ="contained" color="primary">
            {children}
        </Button>
    )
}
