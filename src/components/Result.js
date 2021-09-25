import { ListItemIcon,Table, TableBody, TableRow ,ListItemText, TableCell, TableContainer, TableHead } from '@material-ui/core';

import InsertDriveFile from '@material-ui/icons/InsertDriveFile';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'
import React from 'react'
import { Link } from 'react-router-dom';
import { useData } from './DataContext';
import { MainContainer } from './MainContainer';
import { PrimaryButton } from './PrimaryButton';
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
    root: {
      marginBottom: "30px",
    },
    table: {
      marginBottom: "30px",
    },
    list:{
        display: "flex",
        flexDirection:"column",
        alignItems:"center",
        gap:".5rem",
        overflowY:"auto",
        maxHeight:"200px"
        
    }
  });
export const Result = () => {
    const styles = useStyles();
    const {data} = useData();
    const entries = Object.entries(data).filter(entry=> entry[0] !=="files")
    const {files} =data;
   
    return (
        <MainContainer>
            <h2>Form Values</h2>
            <TableContainer className={styles.root} >
                <Table className={styles.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Field</TableCell>
                            <TableCell align="right">Value</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {entries.map((val)=>(
                            <TableRow key ={val[0]}>
                                <TableCell>{val[0]}</TableCell>
                                <TableCell align="right">{val[1].toString()}</TableCell>
                             </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {files && (
                <>
             <h3>Files</h3>
             <List className={styles.list}>
                 {files.map((f,indx)=>(
                    <ListItem key={indx} >
                        <ListItemIcon>
                         <InsertDriveFile/>
                        </ListItemIcon>
                        <ListItemText primary={f.name} secondary={f.size} />

                    </ListItem>
                 ))}
             </List>
                </>

            )}
            <PrimaryButton>Submit</PrimaryButton>
            <Link to="/">start Over</Link>
        </MainContainer>
    )
}
export default Result;