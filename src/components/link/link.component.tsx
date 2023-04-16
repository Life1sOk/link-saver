import { icons } from "../../utils/react-icons";

import { useChangeLinkStatusMutation } from "../../App/store/api/links";

import { ILinkGeneric } from "../../interfaces/link";
import { LinkStyle, LinkTitle, IconWrapper } from "./link.style";

/*
Example how to get icon from url;
1) https://s2.googleusercontent.com/s2/favicons?domain=www.stackoverflow.com
2) https://s2.googleusercontent.com/s2/favicons?domain_url=https://www.stackoverflow.com
*/

const Link = ({ data, arrowActionHandler, isActive }: ILinkGeneric) => {
  const [changeLinkStatus] = useChangeLinkStatusMutation();

  const changeStatusHandler = () => {
    if (data.status === "1") changeLinkStatus({ id: data.id, status: 0 });
    if (data.status === "0") changeLinkStatus({ id: data.id, status: 1 });
  };

  const arrowAction = () => {
    if (arrowActionHandler) arrowActionHandler(data.id);
  };

  return (
    <LinkStyle>
      {isActive ? (
        <IconWrapper onClick={arrowAction}>{icons.arrowLeft}</IconWrapper>
      ) : (
        <IconWrapper status={Number(data.status)} onClick={changeStatusHandler}>
          {icons.link}
        </IconWrapper>
      )}
      <LinkTitle href={data.link_url} target="_blank">
        {data.link_title}
      </LinkTitle>
    </LinkStyle>
  );
};

export default Link;
