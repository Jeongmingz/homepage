"use client";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    font-family: var(--font-noto-sans-kr), sans-serif;
  }

  :root[data-theme="dark"] {
    color-scheme: dark;
  }
  
  :root[data-theme="light"] {
    color-scheme: light;
  }


  * {
    padding: 0;
    margin: 0;
  }

  html, body {
    font-size: 16px;
    font-family: var(--font-noto-sans-kr), sans-serif;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background};
  }

  html, body, .md-editor, .md-editor-preview, .md-editor-container{
    font-family: var(--font-noto-sans-kr), sans-serif;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  }

  .custom-editor {
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  }
  .md-editor-preview-wrapper {
    padding: 0;
  }

  .md-editor-copy-button{
    display: none;
  }

  main, section{
    max-width: 1500px;
    /* 예시: 해상도에 따라 max-width를 조절 */
    @media (max-width: 1200px) {
      max-width: 1100px;
    }

    @media (max-width: 1024px) {
      max-width: 900px;
    }

    @media (max-width: 768px) {
      max-width: 600px;
    }

    @media (max-width: 500px) {
      max-width: 100%;
    }
  }
  main {
    flex: 1;
    margin: 0 auto;
    margin-top: 64px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding: 0 20px;
  }

  h1 {
    color: ${({ theme }) => theme.colors.text};
    font-size: 5.25rem;
    margin: 0;
    font-weight: 1000;

    @media (max-width: 1024px) {
      font-size: 4.25rem;
      margin: 0;
      font-weight: 900;
    }

    @media (max-width: 768px) {
      font-size: 3.25rem;
      margin: 0;
      font-weight: 800;
    }

    @media (max-width: 500px) {
      font-size: 4.25rem;
      margin: 0;
      font-weight: 700;
    }

  }

  section {
    flex: 1;
    width: 100%;
    
  }

  footer {
    height: 80px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.surface};
    border-top: 1px solid ${({ theme }) => theme.colors.border};
  }


  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.875rem;
    color: ${({ theme }) => theme.colors.text};
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.text};
  }

  p {
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  a {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    text-decoration: underline;

    }
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text};
    &:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }


`;

export default GlobalStyle;
