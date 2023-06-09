import styled from "styled-components";

export const AuthWrapper = styled.div`
  padding: 22px 55px;
  background-color: rgba(255, 255, 255, 0.3);
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 3px;

  display: flex;
  flex-direction: column;
  gap: 11px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

export const AuthTitle = styled.h2`
  margin-bottom: 13px;
`;

export const Message = styled.h3<{ type?: string }>`
  line-height: 27px;
  color: ${({ type }) =>
    type === "verify" ? "rgba(40, 167, 69, 1)" : "rgba(220, 53, 69, 0.8)"};
`;

export const IconWrapper = styled.div<{ type?: string }>`
  width: 100px;
  height: 100px;
  color: ${({ type }) =>
    type === "verify" ? "rgba(40, 167, 69, 1)" : "rgba(220, 53, 69, 0.8)"};

  & > svg {
    width: 100%;
    height: 100%;
  }
`;

export const Logs = styled.span`
  line-height: 19px;

  font-size: var(--font-basic);
  font-weight: var(--font-weight-normal);

  & .anchor {
    text-decoration: underline;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.modals.active};
    }
  }

  & .reset {
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.modals.active};
    }
  }
`;

export const ButtonShadow = styled.div<{ isActive: boolean }>`
  opacity: ${({ isActive }) => (isActive ? "1" : ".5")};
`;
