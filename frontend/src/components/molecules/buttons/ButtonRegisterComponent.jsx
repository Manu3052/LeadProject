import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const CustomizedButton = styled(Button)(({ theme }) => ({
    color: '#ffff',
    backgroundColor: '#27C05A',
    '&:hover': {
        backgroundColor: '#0C1E45', 
    },
}));

export const ButtonRegisterComponent = ({ text = "Text", variant = 'outlined', onClick, startIcon = '', color = "primary", type = '' }) => {
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
