import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core';


export default function Footer() {
    return (
      <div>
        <Box style={{display: 'flex', justifyContent:'center', paddingTop:'3rem', color: '#949494'}} >
           <p>Welcome to use this app</p>
        </Box>
      </div>
    )
}