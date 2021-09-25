import React from 'react'
import { makeStyles } from '@material-ui/core'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles((theme)=>({
    root:{
       display: "flex",
       flexDirection:"column",
       alignItems:"center",
       marginTop:theme.spacing(4)

    }
}))

export const MainContainer = ({children,...props}) => {
    const styles = useStyles();
    return (
       <Container className={styles.root} component="main" maxWidth="xs" {...props}>
       {children}
       </Container>
    )
}
