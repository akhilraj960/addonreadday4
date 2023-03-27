import React from 'react'

import {Typography, Button, FormControl, InputLabel,Input } from '@mui/material';
const Todo = () => {
  return (
    <>
      <Typography mt={5}>
        <FormControl gap={2}>
          <InputLabel htmlFor="my-input">Email address</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
          <Button mt={3} variant="outlined">Submit</Button>
        </FormControl>
      </Typography>
    </>
  )
}

export default Todo
