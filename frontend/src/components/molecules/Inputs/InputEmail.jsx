import TextField from '@mui/material/TextField';
import React from 'react';
import { useController } from 'react-hook-form';

import FormErrors from '../form/FormError';

export const InputEmail = ({ name, label, placeholder, required='true' }) => {
  const { field, fieldState } = useController({ name });

  return (
    <>
      <TextField
        required={required}
        type="email"
        name={name}
        label={label}
        variant="outlined"
        error={Boolean(fieldState.error)}
        placeholder={placeholder}
        onChange={field.onChange}
        onBlur={field.onBlur}
        value={field.value}
        fullWidth
      />
      <FormErrors errors={fieldState.error} />
    </>
  );
};

