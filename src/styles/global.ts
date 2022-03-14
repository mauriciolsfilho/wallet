import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  /* Colors */
  :root {
    --red: #e52e4d;
    --blue: #5429cc;
    --shape: #ffffff;
    --green: #33CC95;
    --text-body: #969cb3;
    --background: #F0F2F5;
    --blue-light: #6933ff;
    --text-title: #363f5f;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93,75%; //15px
    }
    @media (max-width: 720px) {
      font-size: 87,5%; //14px
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .modal-custom-overlay {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.8);
  }

  .modal-custom-content {
    width: 100%;
    padding: 3rem;
    max-width: 576px;
    position: relative;
    border-radius: .25rem;
    background: var(--background);
  }

  .modal-custom-close {
    border: 0;
    top: 1.5rem;
    right: 1.5rem;
    position: absolute;
    background: transparent;
    transition: filter 0.5s;

    &:hover {
      filter: brightness(.5);
    }
  }
`