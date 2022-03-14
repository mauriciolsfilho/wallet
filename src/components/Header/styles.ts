import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
`

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1120px;

  padding: 2rem 1rem 8rem;
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    border: 0;
    color: #fff;
    height: 3rem;
    padding: 0 2rem;
    font-size: 1rem;
    border-radius: .25rem;
    background: var(--blue-light);

    transition: filter .8s;

    &:hover {
      filter: brightness(0.9)
    }
  }
`;

export const Logo = styled.div`
  display: inline-flex;

  h2 {
    margin-left: 1rem;
    margin-top: .25rem;
    color: var(--shape);
  }
`;