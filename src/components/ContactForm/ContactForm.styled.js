import styled from 'styled-components';

export const Form = styled.form`
  margin-bottom: 30px;
  border: 1px solid #000000;
  border-radius: 4px;
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 18px;
`;

export const Input = styled.input`
  width: 200px;
  min-height: 20px;
  border: 1px solid #c4c4c4;
  border-radius: 3px;
`;

export const SubmitButton = styled.button`
  margin-top: 10px;
  border: 1px solid #c4c4c4;
  border-radius: 4px;
  cursor: pointer;
  background-color: transparent;
  width: 120px;
  padding-top: 5px;
  padding-bottom: 5px;
`;
