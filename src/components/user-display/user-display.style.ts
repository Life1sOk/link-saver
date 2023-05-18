import styled from "styled-components";

export const UserWrapper = styled.div`
  width: 75%;
  height: fit-content;
`;

export const WrapperWrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
`;

export const Actions = styled.div<{ type: string }>`
  /* "Accept" | "Invite" | "Fuck off" | "Cancel" | "Delete" */
  width: 100%;
  height: 100%;

  border-radius: 5px;
  background-color: ${({ type }) =>
    type === "Accept"
      ? "rgba(0,255,0)"
      : type === "Invite"
      ? "#f7b84f"
      : "rgba(255,0,0)"};

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    background-color: ${({ type }) =>
      type === "Accept"
        ? "rgba(102,255,102)"
        : type === "Invite"
        ? "#e3cf91"
        : "rgba(255,102,102)"};
  }
`;

export const StatusWrapper = styled.div`
  width: 25%;
  height: 100%;
  padding: 4px;

  font-size: 13px;
  font-weight: 600;
  color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

export const Status = styled.div<{ status: string }>`
  width: 100%;
  height: 100%;

  border-radius: 5px;
  color: ${({ status }) => (status === "Friend" ? "rgba(0,155,0)" : "#f7b84f")};

  display: flex;
  align-items: center;
  justify-content: center;
`;
