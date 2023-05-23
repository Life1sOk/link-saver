import { memo, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../App/store/hooks";
import { usersDataStore } from "../../App/store/slices/user.slice";
import { useGetUserProfileQuery } from "../../App/store/api/user";

// Blocks
import TopicsBlock from "../../blocks/topics/topics.block";
import SettingsBlock from "../../blocks/settings/settings.block";
import InfoBlock from "../../blocks/hole/hole.block";

// Components
import TopicMain from "../../components/topic-main/topic-main.component";
import User from "../../shared/user/user.components";

// Style
import { NavigationStyle, UserWrapper } from "./navigation.style";

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
      <UserWrapper>
        <User username={username} email={email} />
      </UserWrapper>
      <TopicMain />
      <TopicsBlock />
      <SettingsBlock />
      {/* <InfoBlock /> */}
    </NavigationStyle>
  );
});

export default NavigationSection;
