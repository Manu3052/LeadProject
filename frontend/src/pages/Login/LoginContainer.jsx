import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { LoginComponent } from './LoginComponent';

export const LoginContainer = () =>{
  const [message, setMessage] = useState('')
  const [displayMessage, setDisplayMessage] = useState(false)

  const defaultValues ={
    userEmail: '',
    password: '',
  }   

  const validationSchema = yup.object({
    userEmail: yup.string().required("É necessário preencher esse campo"),
    password: yup.string().required("É necessário preencher esse campo"),
  });

  const resolver = yupResolver(validationSchema);

  const methods = useForm({
    mode: 'onBlur',
    criteriaMode: 'all',
    defaultValues,
    resolver,
  });

  const handleSubmit = () =>{
    try {
      setDisplayMessage(false)
      let userEmail = document.querySelector('#userEmail')
      let password = document.querySelector('#password')
      var userRegistered = {
        email:'',
        password:''
      }
      var userList = []
      userList = JSON.parse(localStorage.getItem('userList'))
      userList.forEach((item) => {
        if(userEmail.value === item.userEmail && password.value === item.password){
          userRegistered = {
            email: item.userEmail,
            password: item.password
          }
        }
        if (userRegistered.email === userEmail.value && userRegistered.password === password.value){
          let token = "JWT" + Math.random().toString(16).substring(2)
          localStorage.setItem('token', token)
        } else {
          setDisplayMessage(true)
          setMessage("Senha ou email incorretos.")
        }
      });

      setDisplayMessage(true)
      setMessage("Você está logado!")
    } catch (error) {
      setDisplayMessage(true)
      setMessage("Ocorreu um erro ao logar.")
    }
  }
  return ( <LoginComponent methods={methods} onSubmit={methods.handleSubmit(handleSubmit)} message={message} displayMessage={displayMessage}/>)
}