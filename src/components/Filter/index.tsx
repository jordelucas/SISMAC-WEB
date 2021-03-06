import React, { useState } from 'react';
import api from '../../services/api';

import { 
  Container,
  Search,
  ArrowDropDownIcon,
  CloseIcon,
  DropdownFilter,
  Option,
  ButtonSearch,
  SearchIcon } from './styles';

interface FilterProps {
  patientsFiltered: Function;
  selectedOptionInFilter?: Function;
  options: OptionsProps;
}

interface OptionsProps {
  cpf: boolean;
  sus: boolean;
  nome: boolean;
}

const Filter: React.FC<FilterProps> = ({ patientsFiltered, options, selectedOptionInFilter }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState('')
  const [textFilter, setTextFilter] = useState('');

  function openDropdown() {
    setIsOpen(prevState => !prevState)
  }

  function addFilter (value: string) {
    setSelectedOption(value)
    setIsOpen(prevState => !prevState)
    setTextFilter('')
  }

  async function handleFilter() {
    let data;
    switch (selectedOption){
      case 'Nome': 
        data = await filterByNome()
        break;
      case 'CPF': 
        data = await filterByCPF()
        break;
      case 'SUS': 
        data = await filterBySUS()
        break
    }

    if (selectedOptionInFilter) {
      selectedOptionInFilter(selectedOption)
    }
    patientsFiltered(data)
  }

  async function filterByNome(){
    const response = await api.get('pacientes', {
      params: {
        nome: textFilter
      }
    })

    return response.data;
  }

  async function filterByCPF(){
    const response = await api.get('pacientes', {
      params: {
        cpf: textFilter
      }
    })

    let result = [];
    result.push(response.data);

    return result;
  }

  async function filterBySUS(){
    const response = await api.get('pacientes', {
      params: {
        nsus: textFilter
      }
    })

    let result = [];
    result.push(response.data);

    return result;
  }
  
  return (
    <Container>
      <Search>
        {selectedOption === '' && 
          <button onClick={openDropdown}>
            Pesquisar por <ArrowDropDownIcon />
          </button>
        }

        {selectedOption !== '' &&
          <button>
            {selectedOption} <CloseIcon onClick={() => addFilter('')} />
          </button>
        }
        
        <DropdownFilter isOpen={isOpen}>
          {options.nome && (
            <Option onClick={() => addFilter("Nome")}>Nome</Option>
          )}
          {options.cpf && (
            <Option onClick={() => addFilter("CPF")}>CPF</Option>
          )}
          {options.sus && (
            <Option onClick={() => addFilter("SUS")}>SUS</Option>
          )}
        </DropdownFilter>
      </Search>

      {selectedOption !== '' &&
        <>
          <input 
            type="text" 
            name="search" 
            id="search" 
            value={textFilter} 
            onChange={(e) => {
              setTextFilter(e.target.value)
            }}/>
          <ButtonSearch onClick={handleFilter}><SearchIcon/></ButtonSearch>
        </>
      }
    </Container>
  );
}

export default Filter;