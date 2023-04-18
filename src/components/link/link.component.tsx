import { IShortLink } from "../../interfaces/link";
import { LinkStyle, LinkTitle } from "./link.style";

/*
Example how to get icon from url;
1) https://s2.googleusercontent.com/s2/favicons?domain=www.stackoverflow.com
2) https://s2.googleusercontent.com/s2/favicons?domain_url=https://www.stackoverflow.com
*/

const Link = ({ data }: { data: IShortLink }) => {
  return (
    <LinkStyle>
      <LinkTitle href={data.link_url} target="_blank">
        {data.link_title}
      </LinkTitle>
    </LinkStyle>
  );
};

export default Link;
