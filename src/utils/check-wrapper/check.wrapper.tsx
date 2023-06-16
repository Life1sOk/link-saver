import { CheckWrapperStyle } from "./check.style";

interface ICheck {
  children: JSX.Element;
  isCheck: boolean;
}

const CheckWrapper = ({ children, isCheck }: ICheck) => {
  return <CheckWrapperStyle isCheck={isCheck}>{children}</CheckWrapperStyle>;
};

export default CheckWrapper;
