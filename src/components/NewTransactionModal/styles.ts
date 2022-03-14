import styled from "styled-components";
import { darken, transparentize } from 'polished';

export const FormWrapper = styled.form`
  h2 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    color: var(--text-title);
  }

  input {
    width: 100%;
    height: 4rem;
    font-size: 1rem;
    padding: 1.5rem;
    font-weight: 400;
    background: #e7e9ee;
    border-radius: .25rem;
    border: 1px solid #d7d7d7;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    border: 0;
    width: 100%;
    color: #FFF;
    height: 4rem;
    font-size: 1rem;
    font-weight: 600;
    padding: 0 1.5rem;
    margin-top: 1.5rem;
    border-radius: .25rem;
    background: var(--green);

    transition: filter 0.5s;

    &:hover {
      filter: brightness(.8)
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  gap: .5rem;
  display: grid;
  margin: 1rem 0;
  grid-template-columns: 1fr 1fr;
`;

export const RadioTypeBox = styled.button<{ isActive: boolean, activeColor: string }>`
  height: 4rem;
  display: flex;
  align-items: center;
  border-radius: .25rem;
  justify-content: center;
  border: 1px solid #d7d7d7;
  transition: border-color .4s;
  background: ${(props) => props.isActive ?
    transparentize(.8, props.activeColor) : 'transparent'
  };

  &:hover {
    border-color: ${darken(0.1, '#d7d7d7')}
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    font-size: 1rem;
    margin-left: 1rem;
    display: inline-block;
    color: var(--text-title);
  }
`;