import styled from "styled-components";

export const UserWrapper = styled.div`
  width: 80%;
  height: fit-content;
`;

export const WrapperWrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
`;

export const Actions = styled.div<{ type: string }>`
  /* "Accept" | "Invite" | "Cancel" | "Delete" */
  width: 100%;
  height: 100%;

  border-radius: 5px;
  border: 1px solid
    ${({ type }) =>
      type === "Accept"
        ? "rgba(0,255,0)"
        : type === "Invite"
        ? "#f7b84f"
        : "rgba(255,0,0, .5)"};
  color: ${({ type }) =>
    type === "Accept"
      ? "rgba(0,255,0)"
      : type === "Invite"
      ? "#f7b84f"
      : "rgba(255,0,0, .5)"};

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    color: white;
    background-color: ${({ type }) =>
      type === "Accept"
        ? "rgba(102,255,102)"
        : type === "Invite"
        ? "#e3cf91"
        : "rgba(255,102,102)"};
  }
`;

export const StatusWrapper = styled.div`
  width: 20%;
  height: 100%;
  padding: 4px;

  font-size: var(--font-small);
  font-weight: var(--font-weight-main);
  color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 7px;
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
