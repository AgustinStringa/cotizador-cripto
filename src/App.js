import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import styled from '@emotion/styled';

const H1 = styled.h1`
text-transform: uppercase;
color: #fff;
font-size: 4rem;
margin-top: 3rem;
@media (min-width: 992px){
  margin-top: 0;
}
&::after{
  content: '';
  width: 40%;
  height: 10px;
  border-radius: 5px;

  background-color: rgb(104, 104, 212);
  display: block;
}
`
function App() {
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    if (formData) {
      console.log('simulando consulta con valores elegidos por el usuario');
    } else {
      console.log('nothing\'s happen');
    }

  }, [formData])
  return (
    <div className="container">
      <div className="image"></div>
      <div>
        <H1>Cotiza criptomonedas al instante</H1>
        <Form setFormData={setFormData}></Form>
      </div>
    </div>
  );
}

export default App;
