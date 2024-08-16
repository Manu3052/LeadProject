import FormHelperText from '@mui/material/FormHelperText';

const FormErrors = ({ errors }) => {
  if (!errors) return null;

  if (errors.types !== undefined) {
    return (
      <FormHelperText error>
        {Object.values(errors.types)
          .map((error) => error)
          .join('. ')}
      </FormHelperText>
    );
  }

  return <FormHelperText error>{errors.message}</FormHelperText>;
};

export default FormErrors;
