import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export const LoginContainer = () =>{
/* Validation */
  const validationSchema = yup.object({
    initialDate: yup.date().required(fieldRequired),
  });

  const resolver = yupResolver(validationSchema);

  const methods = useForm({
    mode: 'onBlur',
    criteriaMode: 'all',
    defaultValues,
    resolver,
  });
}