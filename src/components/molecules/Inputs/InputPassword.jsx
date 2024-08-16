import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useController } from 'react-hook-form';
import FormErrors from '../form/FormError';

export const InputPassword = ({id, name, label, color="blue", required='true'}) => {
    const [showPassword, setShowPassword] = useState(false);
    const { field, fieldState } = useController({ name });

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <><TextField
            id={id}
            name={name}
            value={field.value}
            label={label}
            type={showPassword ? 'text' : 'password'}
            variant="outlined"
            required={required}
            error={Boolean(fieldState.error)}
            color={color}
            fullWidth={true}
            onChange={field.onChange}
            onBlur={field.onBlur}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                )
            }} /><FormErrors errors={fieldState.error} /></>
    );
};
