import * as React from 'react';
import { styled } from '@mui/material/styles';

const StyledLink = styled('a')({
    textDecoration: 'none', 
    color: "#2898BA",       
    '&:hover': {
        color: '#0C1E45',
    },
});

export const LinkComponent = ({ text, href}) => {
    return (
        <StyledLink href={href}>
            {text}
        </StyledLink>
    );
};
