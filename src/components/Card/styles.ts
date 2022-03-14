import styled from "styled-components";

export const CardWrapper = styled.div`
  background: var(--shape);
  padding: 1.5rem 2rem;
  border-radius: 0.25rem;
  color: var(--text-title);

  &.background-green {
    color: #fff;
    background: var(--green);
  }
`;

export const CardHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardBody = styled.div`
  font-size: 2rem;
  margin-top: 1rem;
  font-weight: 500;
  line-height: 3rem;
`;
