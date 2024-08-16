import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const CustomizedButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText('#2898BA'),
    backgroundColor: '#2898BA',
    '&:hover': {
        backgroundColor: '#0C1E45', 
    },
}));

export const ButtonComponent = ({ text = "Text", variant = 'outlined', onClick, startIcon = '', color = "primary", type = '' }) => {
    return (
        <CustomizedButton
            variant={variant}
            onClick={onClick}
            startIcon={startIcon}
            color={color} 
            type={type}
        >
            {text}
        </CustomizedButton>
    );
};
