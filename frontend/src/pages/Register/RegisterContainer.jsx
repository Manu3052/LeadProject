import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { RegisterComponent } from './RegisterComponent';
import { useState } from 'react';
import { useController } from "react-hook-form";


export const RegisterContainer = () =>{
  const defaultValues ={
    userName: '',
    userEmail: '',
    password: '',
    userPasswordConfirmation: '',
  }   

    //State
    const [userData, setUserData] = useState('')

  const validationSchema = yup.object({
    userName: yup.string().required("É necessário preencher esse campo"),
    userEmail: yup.string().required("É necessário preencher esse campo"),
    password: yup.string().required("É necessário preencher esse campo"),
    userPasswordConfirmation: yup.string().required('É necessário preencher esse campo').oneOf([yup.ref('password')], 'As senhas devem ser iguais').matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 'Sua senha deve conter um caractere especial, um caratere  númerico, uma letra'),
  });

  const resolver = yupResolver(validationSchema);

  const methods = useForm({
    // mode: 'onBlur',
    // criteriaMode: 'all',
    defaultValues,
    // resolver,
  });


  const handleSubmit = async (data) =>{
    console.log('entrou')
    console.log(data)
    try {
        localStorage.setItem("userRegister", data)
        setUserData(data)
    } catch (error) {
        
    }
  }
  return (
    <RegisterComponent methods={methods} onSubmit={methods.handleSubmit(handleSubmit)}/>
  )
}