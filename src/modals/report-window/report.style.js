import styled from "styled-components";

export const ReportWindowWrapper = styled.div`
position: fixed;
top: 0;
bottom: 0;
left: 0;
right: 0;
width: 100%;
z-index: 9999;
display: flex;
align-items: center;
justify-content: center;
background-color: rgba(0, 0, 0, 0.25);
animation-name: appear;
animation-duration: 300ms;
`;

export const ReportWindowStyle = styled.div`
width: 100%;
max-width: 550px;
background: white;
position: relative;
margin: 0 20px;
max-height: calc(100vh - 40px);
text-align: left;
display: flex;
flex-direction: column;
overflow: hidden;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
-webkit-animation-name: animatetop;
-webkit-animation-duration: 0.4s;
animation-name: slide-in;
animation-duration: 0.5s;
`;

export const Message = styled.article`
  font-size: 22px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 7px;
`;
