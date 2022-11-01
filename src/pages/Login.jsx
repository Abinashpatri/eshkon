import styled from "styled-components";
import {mobile} from "../responsive";
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <Link to='/dashboard'> <LinkTo>Dashboard</LinkTo> </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url("https://i0.wp.com/www.worth.com/wp-content/uploads/2020/04/shutterstock_499192885.jpg?fit=1259%2C648&ssl=1")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 45%;
  padding: 20px;
  border-radius: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  border-radius: 10px;
  border: none;
  outline: none;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #0C2B3C;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  border-radius: 10px;
  align-self: center;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
`;

const LinkTo = styled.p`
  text-align: center;
  text-decoration: none;
  color: black;
`

