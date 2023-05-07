import { FrontBlockerStyle } from "./front-blocker.style";

const FrontBlocker = ({ isBlocked }: { isBlocked: boolean }) => {
  return <FrontBlockerStyle isBlocked={isBlocked} />;
};

export default FrontBlocker;
