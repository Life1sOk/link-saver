import styled from "styled-components";

export const LogInPageStyle = styled.div`
  display: flex; 
  background-color: black;
  flex-direction: column; 
  align-items: center; 
  justify-content: center; 
  height: 100vh;
`;

export const Title = styled.h1`
  color: white;
`;

export const LoginField  = styled.input`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border: 1px solid #ccc;
border-radius: 5px;
background-color: #f2f2f2;
placeholder: "Login";
`;

export const PasswordField  = styled.input`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border: 1px solid #ccc;
border-radius: 5px;
background-color: #f2f2f2;
placeholder: "Password";
`;

export const FancyButton = styled.button`
display: inline-block;
padding: 10px 20px;
margin: 10px;
border: none;
border-radius: 5px;
background-color: green;
cursor: pointer;
& h2 {
  color:white
}
`;

export const ButtonLine = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
padding: 10px 20px;
margin: 10px;
`