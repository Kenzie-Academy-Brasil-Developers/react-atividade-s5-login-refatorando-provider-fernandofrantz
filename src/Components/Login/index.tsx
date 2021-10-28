import axios from "axios";
import { useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { AuthContext } from "../../Providers/Auth";
import { useHistory } from "react-router";
import { Button, Container, Form, Input } from "./styles";

interface UserData {
  email: string;
  password: string;
}

export const Login = () => {
  const { authToken, signIn } = useContext(AuthContext);
  const history = useHistory();
  const formSchema = yup.object().shape({
    email: yup
      .string()
      .required("email required")
      .email("must be a valid e-mail"),
    password: yup
      .string()
      .required("password required")
      .min(5, "at least 5 characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({ resolver: yupResolver(formSchema) });

  const handleForm = (data: UserData) => {
    signIn(data);
  };

  if (authToken !== "") {
    history.push("/dashboard");
  }

  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit(handleForm)}>
          <Input type="text" placeholder="email" {...register("email")} />
          <Input
            type="password"
            placeholder="password"
            {...register("password")}
          />
          <Button type="submit">submit</Button>
        </Form>
      </Container>
    </>
  );
};
