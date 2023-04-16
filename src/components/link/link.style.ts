import styled from "styled-components";

export const LinkStyle = styled.div`
  width: 100%;
  color: yellow;
  overflow: hidden;

  display: flex;
  align-items: center;
  gap: 12px;
`;

export const LinkTitle = styled.a`
  width: 100%;

  font-size: 22px;

  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.75) inset;
  -webkit-box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.75) inset;
  -moz-box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.75) inset;
`;

export const IconWrapper = styled.div<{ status?: number }>`
  & svg {
    width: 25px;
    height: 25px;

    color: ${({ status }) => (status ? "rgb(0, 222, 0)" : null)};
  }

  &:hover {
    cursor: pointer;
  }
`;
