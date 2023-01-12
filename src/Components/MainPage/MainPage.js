//import React, { useState } from 'react'
import { MainContainer, Form, Input } from './styles'
import { useForm } from '../../hook/useForm'

function MainPage() {

  const { form, onChange, clear} = useForm({
    nome:"",
    idade:"",
    email:"", 
    endereco:"",
    cep:"", 
    profissao:""
  })

  // const [nome, setNome] = useState("")
  // const [idade, setIdade] = useState("")
  // const [email, setEmail] = useState("")

  // const onChangeNome = (event) => {
  //   setNome(event.target.value)
  // }

  // const onChangeIdade = (event) => {
  //   setIdade(event.target.value)
  // }

  // const onChangeEmail = (event) => {
  //   setEmail(event.target.value)
  // }

  const handleClick = (event) => {
    event.preventDefault()

    console.log(form);

    clear()

    //console.log(`nome: ${nome}, idade: ${idade}, e-mail: ${email} `)
  }

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>

      <Form onSubmit={handleClick}>
        <label htmlFor="nome">Nome:</label>
        <Input 
          id="nome"
          type={form.nome}
          name='nome'
          value={form.nome}
          onChange={onChange}
        />

        <label htmlFor="idade">Idade:</label>
        <Input 
          id="idade"
          type={form.idade}
          name='idade'
          value={form.idade}
          onChange={onChange}
        />

        <label htmlFor="email">E-mail:</label>
        <Input 
          id="email"
          type={form.email}
          name='email'
          value={form.email}
          onChange={onChange}
        />
        
        <label htmlFor="endereco">Endereço:</label>
        <Input 
          id="endereco"
          type={form.endereco}
          name='endereco'
          value={form.endereco}
          onChange={onChange}
        />
        
        <label htmlFor="cep">CEP:</label>
        <Input 
          id="cep"
          type={form.cep}
          name='cep'
          value={form.cep}
          onChange={onChange}
        />

        <label htmlFor="profissao">Profissão:</label>
        <Input 
          id="profissao"
          name='profissao'
          value={form.profissao}
          onChange={onChange}
          required
        />

      <button type="submit">Enviar dados</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage
