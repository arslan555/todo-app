import React from 'react';
import { Box, Typography } from '@mui/material';

const TodoLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: 400, mx: 'auto', p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Todo App
      </Typography>
      {children}
    </Box>
  );
};

export default TodoLayout;