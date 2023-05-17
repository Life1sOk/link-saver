import styled from "styled-components";

import { ButtonStyle } from "../../components/button/button.style";

export const FriendsModalStyle = styled.div`
  width: 320px;
  height: 510px;

  background-color: ${({ theme }) => theme.modals.background};
  border-radius: 4px;

  padding: 5px;

  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Buttons = styled.div`
  width: 100%;

  padding: 0 10px 10px 0;

  display: flex;
  justify-content: end;
`;

export const Changer = styled.div`
  width: 100%;
  display: flex;
`;

export const Picked = styled(ButtonStyle)`
  border: 1px solid ${({ picked }: { picked: boolean }) => (picked ? "red" : "initial")};
`;
