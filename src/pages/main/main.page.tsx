import { useRef, useState, memo, useMemo } from "react";

import NavigationSection from "../../sections/navigation/navigation.section";
import GroupsSection from "../../sections/groups/groups.section";
import GenericsSection from "../../sections/generics/generics.section";
import ModalsSection from "../../sections/modals/modals.section";

import ActionSection from "../../sections/action/action.section";

import ProcessModal from "../../modals/process/process.modal";
import { MainLayout, MainWrapper, BorderResize } from "./main.style";

const MainPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [startPoint, setStartPoint] = useState({ mouseX: 0, sectionWidth: 0 });
  const [defaultGroup, setDefaultGroup] = useState(299);
  const [groupRepoc, setGroupRepoc] = useState(299);

  // --  Groups re-render in memo -- //
  const [clmCount, setClmCount] = useState(1);

  const groupsRef = useRef<HTMLDivElement>(null);
  const currentWidth = groupsRef.current?.clientWidth!;

  if (currentWidth < 611 && clmCount !== 1) setClmCount(1);
  if (currentWidth > 611 && currentWidth < 968 && clmCount !== 2) setClmCount(2);
  if (currentWidth > 968 && clmCount !== 3) setClmCount(3);
  // ------------------------------- //

  // Starter point;
  const startAnimation = (event: any) => {
    setStartPoint({
      mouseX: event.clientX,
      sectionWidth: event.target.parentElement.offsetWidth,
    });
  };

  // End
  const endAnimation = () => {
    if (startPoint.mouseX > 0) {
      setStartPoint({ mouseX: 0, sectionWidth: 0 });
      setDefaultGroup(groupRepoc);
    }
  };

  // Mouse movement in main section
  const mouseMoveHandler = (event: any) => {
    if (startPoint.mouseX > 0 && startPoint.sectionWidth > 0) {
      let resize = defaultGroup + (event.clientX - startPoint.mouseX) * -1;
      let maxResize = startPoint.sectionWidth - 343;

      if (resize >= 299 && resize < maxResize) {
        setGroupRepoc(resize);
      }
    }
  };

  return (
    <MainLayout onMouseUp={endAnimation}>
      <ProcessModal />
      <NavigationSection />
      <MainWrapper>
        <ActionSection />
        <div
          ref={containerRef}
          className="main-container"
          onMouseMove={mouseMoveHandler}
          style={{
            gridTemplateColumns: `minmax(331px, 1fr) 8px ${groupRepoc}px`,
            transition: "none",
          }}
        >
          <GroupsSection ref={groupsRef} clmCount={clmCount} />
          {useMemo(
            () => (
              <BorderResize onMouseDown={startAnimation} />
            ),
            []
          )}
          <GenericsSection />
        </div>
      </MainWrapper>
      <ModalsSection />
    </MainLayout>
  );
};

export default MainPage;
