import styled from "styled-components";

export const GroupStyle = styled.div<{ isActive: boolean }>`
  position: relative;
  z-index: ${({ isActive }) => (isActive ? "9" : "0")};

  width: 100%;
  height: fit-content;
  background-color: white;
  border-radius: 5px;

  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);

  display: flex;
  flex-direction: column;
`;

export const GroupHeader = styled.div`
  position: relative;

  width: 100%;
  border-radius: 5px 5px 0 0;
  color: white;

  background: rgb(255, 78, 58);
  background: linear-gradient(
    171deg,
    rgba(255, 78, 58, 1) 0%,
    rgba(255, 116, 99, 1) 49%,
    rgba(255, 141, 141, 1) 100%
  );
`;

export const GroupHeaderTop = styled.div`
  padding: 7px;
  padding-bottom: 3px;

  display: flex;
  align-items: center;
`;

export const LinksPlace = styled.div`
  width: 100%;
  padding: 10px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const ActionsLine = styled.div`
  width: 100%;
  height: fit-content;

  padding: 0 3px 3px 3px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
