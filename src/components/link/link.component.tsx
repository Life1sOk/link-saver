import { ILinkGeneric } from "../../interfaces/link";
import { icons } from "../../utils/react-icons";

import { LinkStyle, LinkTitle, IconWrapper } from "./link.style";

/*
Example how to get icon from url;
1) https://s2.googleusercontent.com/s2/favicons?domain=www.stackoverflow.com
2) https://s2.googleusercontent.com/s2/favicons?domain_url=https://www.stackoverflow.com
*/

const Link = ({ data, type, arrowActionHandler }: ILinkGeneric) => {
  const arrowAction = () => {
    if (arrowActionHandler) arrowActionHandler(data.id);
  };

  return (
    <LinkStyle>
      {type === "transferGroup" ? (
        <IconWrapper onClick={arrowAction}>{icons.arrowLeft}</IconWrapper>
      ) : (
        <IconWrapper>{icons.link}</IconWrapper>
      )}
      <LinkTitle href={data.link_url} target="_blank">
        {data.link_title}
      </LinkTitle>
      {type === "transferGeneric" ? (
        <IconWrapper onClick={arrowAction}>{icons.arrowRight}</IconWrapper>
      ) : null}
    </LinkStyle>
  );
};

export default Link;
