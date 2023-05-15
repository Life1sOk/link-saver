import { memo, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../App/store/hooks";
import { usersDataStore } from "../../App/store/slices/user.slice";
import { useGetUserProfileQuery } from "../../App/store/api/user";

// Blocks
import TopicsBlock from "../../blocks/topics/topics.block";
import InfoBlock from "../../blocks/info/info.block";

// Components
import TopicMain from "../../components/topic-main/topic-main.component";
import User from "../../components/user/user.components";

// Style
import { NavigationStyle } from "./navigation.style";

const NavigationSection = memo(() => {
  const dispatch = useAppDispatch();

  const userId = useAppSelector((state) => state.user.session.user_id);
  const { email, username } = useAppSelector((state) => state.user.profile);

  const { data } = useGetUserProfileQuery(userId);

  useEffect(() => {
    if (data) dispatch(usersDataStore(data));
  }, [data, dispatch]);

  return (
    <NavigationStyle>
      <User username={username} email={email} />
      <TopicMain />
      <TopicsBlock />
      <InfoBlock />
    </NavigationStyle>
  );
});

export default NavigationSection;
