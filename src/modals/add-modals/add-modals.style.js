import styled from "styled-components";

export const AddModalStyle = styled.div`
  width: 333px;
  height: fit-content;
  padding: 30px 40px;
  background-color: white;
  border-radius: 7px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
`;

export const FormWrapper = styled.form`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

export const ModalHeader = styled.div`
  display: flex;
  gap: 5px;
`;

export const TitleBlock = styled.h3`
  font-size: 20px;
  margin-bottom: 22px;
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  margin-top: 14px;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 18px;
`;
