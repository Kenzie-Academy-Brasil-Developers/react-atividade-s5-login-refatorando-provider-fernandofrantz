import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url("https://www.btgpactualdigital.com/wp-content/uploads/2021/02/investimento-em-fundo-imobili%C3%A1rio-1.jpg");
  background-position: center;
  background-size: cover;
`;

export const Form = styled.form`
  width: 60%;
  height: 40%;

  padding: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: rgba(169, 169, 169, 0.8);

  border-radius: 20px;
`;

export const Input = styled.input`
  width: 70%;
  height: 12%;

  margin: 0px 0px 20px 0px;
  padding: 0px 10px 0px 10px;

  max-width: 275px;

  border: none;
  border-radius: 5px;

  :hover {
    border: black 2px solid;
  }
`;

export const Button = styled.button`
  margin: 0px;

  width: 80%;
  height: 12%;

  max-width: 300px;

  background-color: rgba(50, 205, 50, 0.8);

  border: none;
  border-radius: 10px;

  :hover {
    background-color: rgba(50, 205, 50, 0.9);
  }
`;
