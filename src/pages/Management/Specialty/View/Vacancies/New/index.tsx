import React, { FormEvent, useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';

import api from '../../../../../../services/api';

import Content from '../../../../../../components/Layout/Content';
import Wrapper from '../../../../../../components/Layout/Wrapper';
import BackButton from '../../../../../../components/BackButton';
import Title from '../../../../../../components/Title';
import { Button } from '../../../../../../components/Button';
import Input from '../../../../../../components/Input';

import { 
  Form, 
  FormGroup, 
  Grid
} from './styles';
import { SpecialtyProps } from '../../../../../../Models/Specialty';

interface LocationState {
  id: {
    pathname: string;
  };
}

const NewVacanciesSpecialty: React.FC = () => {
  const { state: specialtyId } = useLocation<LocationState>();
  
  const [nomeEspecialidade, setNomeEspecialidade] = useState('')
  const [data, setData] = useState('')
  const [vagas, setVagas] = useState('')
  const [especialista, setEspecialista] = useState('')
  const [local, setLocal] = useState('')

  const { id } = specialtyId || { id: { pathname: "/" } };

  useEffect(() => {
    api.get<SpecialtyProps>(
      `consultas/${id}`
    ).then((response) => {
      const { 
        nome: specialtyNome,
       } = response.data;

       setNomeEspecialidade(specialtyNome)
    }) 
  }, [id])

  function handleCreateVacancy(e: FormEvent) {
    e.preventDefault();

    const vacancyDate = data.split('-').join('/')

    api.post('vagasConsultas', {
      nomeEspecialista: especialista,
      dataConsulta: vacancyDate,
      quantidade: vagas,
      local,
      consulta_id: id,
    }).then(() => {
      alert('Cadastro realizado com sucesso!')
      clearStates();
    }).catch(() => {
      alert('Erro no cadastro!')
    })
  }

  function clearStates(){
    setData('')
    setVagas('')
    setEspecialista('')
    setLocal('')
  }

  return (
    <Content>
      <Wrapper>
        <>
          <BackButton link={{
            pathname: `/management/specialty/${id}`,
            state: {
              id,
            }
          }}/>
          <Title text={`Novas vagas - ${nomeEspecialidade}`} />

          <Form onSubmit={handleCreateVacancy}>
            <Grid>
              <FormGroup gridArea='DT'>
                <Input 
                  type="date"
                  label="Data" 
                  identifier="data"
                  value={data}
                  onChange={setData}
                  disabled={false}/>
              </FormGroup>
              <FormGroup gridArea='VG'>
                <Input 
                  type="number"
                  label="Quantidade de vagas"
                  identifier="vagas"
                  value={vagas}
                  onChange={setVagas}
                  disabled={false}/>
              </FormGroup>
              <FormGroup gridArea='ES'>
                <Input 
                  type="text"
                  label="Especialista"
                  identifier="especialista"
                  value={especialista}
                  onChange={setEspecialista}
                  disabled={false}/>
              </FormGroup>
              <FormGroup gridArea='LC'>
                <Input 
                  type="text"
                  label="Local"
                  identifier="local"
                  value={local}
                  onChange={setLocal}
                  disabled={false}/>
              </FormGroup>
            </Grid>

            <Button type="submit">Salvar</Button>
          </Form>
        </>
      </Wrapper>
    </Content>
  );
}

export default NewVacanciesSpecialty;