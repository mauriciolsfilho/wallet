import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      text-align: left;
      font-weight: 400;
      padding: 1rem 2rem;
      line-height: 1.5rem;
      color: var(--text-body);
    }

    td {
      border: 0;
      padding: 1rem 2rem;
      border-radius: 0.25rem;
      color: var(--text-body);
      background: var(--shape);

      &:first-child {
        color: var(--text-title);
      }

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }
    }
  }
`;
