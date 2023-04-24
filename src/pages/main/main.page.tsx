import NavigationSection from "../../sections/navigation/navigation.section";
import GroupsSection from "../../sections/groups/groups.section";
import GenericsSection from "../../sections/generics/generics.section";

import ActionSection from "../../sections/action/action.section";

import ProcessModal from "../../modals/process/process.modal";
import { MainLayout, MainWrapper, MainContainer } from "./main.style";

const MainPage = () => {
  return (
    <MainLayout>
      <ProcessModal />
      <NavigationSection />
      <MainWrapper>
        <ActionSection />
        <MainContainer>
          <GroupsSection />
          <GenericsSection />
        </MainContainer>
      </MainWrapper>
    </MainLayout>
  );
};

export default MainPage;
