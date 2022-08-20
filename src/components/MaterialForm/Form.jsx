import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'

export default function Form() {
  return (
    <div style={{ backgroundColor: 'white', display: 'flex' }}>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
          width: '250px',
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            required
            id="outlined-required"
            label="Name"
            defaultValue=""
          />
          <TextField required id="outlined-required" label="Email" />
          <TextField required id="outlined-required" label="Password" />
        </div>
        <Button type="submit" variant="contained" color="inherit">
          register
        </Button>
      </Box>

      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
          width: '250px',
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField required id="outlined-required" label="Email" />
          <TextField required id="outlined-required" label="Password" />
        </div>
        <Button type="submit" variant="contained" color="inherit">
          Login
        </Button>
      </Box>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
          width: '250px',
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField required id="outlined-required" label="name" />
          <TextField required id="outlined-required" label="phone" />
        </div>
        <Button type="submit" variant="contained" color="inherit">
         add Contact
        </Button>
      </Box>
    </div>
  );
}
