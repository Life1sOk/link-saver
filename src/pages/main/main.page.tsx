import NavigationSection from "../../sections/navigation/navigation.section";
import GroupsSection from "../../sections/groups/groups.section";
import GenericsSection from "../../sections/generics/generics.section";

import ProcessModal from "../../modals/process/process.modal";
import { MainLayout } from "./main.style";

const MainPage = () => {
  return (
    <MainLayout>
      <ProcessModal />
      <NavigationSection />
      <GroupsSection />
      <GenericsSection />
    </MainLayout>
  );
};

export default MainPage;
