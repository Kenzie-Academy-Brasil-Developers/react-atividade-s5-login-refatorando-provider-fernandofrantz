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

  img {
    width: 30%;

    margin-bottom: 20px;

    min-width: 100px;
    max-width: 300px;
  }
`;

export const Button = styled.button`
  margin: 0px;

  width: 40%;
  height: 12%;

  max-width: 300px;
  min-width: 100px;

  background-color: rgba(50, 205, 50, 0.8);

  border: none;
  border-radius: 10px;

  :hover {
    background-color: rgba(50, 205, 50, 0.9);
  }
`;
