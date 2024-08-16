import React from 'react';
import Typography from '@mui/material/Typography';
import UpdateIcon from '@mui/icons-material/Update';

export const Logo = () => {
    return (
        <Typography
            variant="h3"
            sx={{
                color: 'primary',
                fontWeight: '900',
                display: 'flex',
                alignItems: 'center', 
                justifyContent: 'center',
            }}
            component="h1"
        >
            <UpdateIcon color="secondary" sx={{ fontSize: 'inherit', marginRight: '8px' }} /> 
            JusCash
        </Typography>
    );
};
