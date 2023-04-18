import { icons } from "../../utils/react-icons";

import { useChangeLinkStatusMutation } from "../../App/store/api/links";

import { IShortLink } from "../../interfaces/link";
import { LinkStyle, LinkTitle, IconWrapper } from "./link.style";

/*
Example how to get icon from url;
1) https://s2.googleusercontent.com/s2/favicons?domain=www.stackoverflow.com
2) https://s2.googleusercontent.com/s2/favicons?domain_url=https://www.stackoverflow.com
*/

const Link = ({ data }: { data: IShortLink }) => {
  const [changeLinkStatus] = useChangeLinkStatusMutation();

  const changeStatusHandler = () => {
    if (data.status === "1") changeLinkStatus({ id: data.id, status: 0 });
    if (data.status === "0") changeLinkStatus({ id: data.id, status: 1 });
  };

  return (
    <LinkStyle>
      <IconWrapper status={Number(data.status)} onClick={changeStatusHandler}>
        {icons.link}
      </IconWrapper>
      <LinkTitle href={data.link_url} target="_blank">
        {data.link_title}
      </LinkTitle>
    </LinkStyle>
  );
};

export default Link;
