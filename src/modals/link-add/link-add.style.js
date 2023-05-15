import styled from "styled-components";

export const LinkAddStyle = styled.dialog`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 100%;
  max-width: 666px;
  height: 100%;
  max-height: 411px;

  padding: 10px;
  background-color: white;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormWrapper = styled.form`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 22px;
`;

export const TitleBlock = styled.h3`
  font-size: 21px;
  margin-bottom: 22px;
`;

export const LeftSide = styled.div`
  width: 50%;
  height: 100%;

  padding: 25px;

  border-right: 1px solid ${({ theme }) => theme.border};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const GifBlock = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LinkButtons = styled.div`
  width: 100%;
  margin-top: 22px;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 11px;
`;
