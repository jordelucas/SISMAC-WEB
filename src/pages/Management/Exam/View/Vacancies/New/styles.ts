import styled from 'styled-components';

interface FormGroupProps {
  gridArea: string;
}
// DT -> Data
// VG -> Quantidade de vagas
// VZ -> Espaço em branco';

export const Form = styled.form`
  margin: 2.5rem;

  > button {
    margin-top: 2rem;
  }
`;

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media(min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    grid-template-areas:
      'DT VG LC'
      'NV NV BT';
  }
`;

export const FormGroup = styled.div<FormGroupProps>`
  display: flex;
  flex-direction: column;

  grid-area: ${props => props.gridArea};

  position: relative;
`