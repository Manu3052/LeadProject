import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { RegisterComponent } from './RegisterComponent';
import { useState } from 'react';

export const RegisterContainer = () =>{
  const [message, setMessage] = useState('')
  const [displayMessage, setDisplayMessage] = useState(false)

  const defaultValues ={
    userName: '',
    userEmail: '',
    password: '',
    userPasswordConfirmation: '',
  }   

  const validationSchema = yup.object({
    userName: yup.string().required("É necessário preencher esse campo"),
    userEmail: yup.string().required("É necessário preencher esse campo"),
    password: yup.string().required("É necessário preencher esse campo").matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 'Sua senha deve ter no mínimo 8 digitos, conter um caractere especial, um caratere  númerico, uma letra'),
    userPasswordConfirmation: yup.string().required('É necessário preencher esse campo').oneOf([yup.ref('password')], 'As senhas devem ser iguais'),
  });

  const resolver = yupResolver(validationSchema);

  const methods = useForm({
    mode: 'onBlur',
    criteriaMode: 'all',
    defaultValues,
    resolver,
  });

  const handleSubmit = (data) =>{
    try {
      setDisplayMessage(false)
      let userName = document.querySelector('#userName')
      let userEmail = document.querySelector('#userEmail')
      let password = document.querySelector('#password')
      let userList = JSON.parse(localStorage.getItem('userList') || '[]')
      userList.push(
        {
            userName: userName.value,
            userEmail: userEmail.value,
            password: password.value,
          }
        )

        localStorage.setItem("userList", JSON.stringify(userList))
        setDisplayMessage(true)
        setMessage("Você foi cadastrado com sucesso!")
    } catch (error) {
      setDisplayMessage(false)
      setMessage("Ocorreu um erro ao cadastrar usuário.")
    }
  }
  return (
    <RegisterComponent methods={methods} onSubmit={methods.handleSubmit(handleSubmit)}/>
  )
}