import NavigationSection from "../../sections/navigation/navigation.section";
import GroupsSection from "../../sections/groups/groups.section";
import GenericsSection from "../../sections/generics/generics.section";

import { MainLayout, Wrapper } from "./main.style";

const MainPage = () => {
  return (
    <MainLayout>
      <NavigationSection />
      <Wrapper>
        <GenericsSection />
        <GroupsSection />
      </Wrapper>
    </MainLayout>
  );
};

export default MainPage;
