import styled from "styled-components";

export const AreYouSureWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 22px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AreYouSureStyle = styled.div`
  padding: 22px;
  border-radius: 12px;
  background-color: grey;
`;

export const Message = styled.article`
  font-size: 22px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 7px;
`;