import { icons } from "../../../utils/react-icons";

import { NoteStyle, NoteLine, NoteIcon } from "./note.style";

const Note = ({ type }: { type: "groups" | "links" }) => {
  return (
    <NoteStyle>
      <NoteLine>
        Deleted {type} will be stored here for <strong>4 days (96 hours)</strong>! To
        restore, click <NoteIcon>{icons.restore}</NoteIcon>
      </NoteLine>
      <NoteLine>
        After restoring the group, it will appear in the{" "}
        {type === "groups" && <strong>currently active topic</strong>}
        {type === "links" && <strong>generic links section</strong>}.
      </NoteLine>
    </NoteStyle>
  );
};

export default Note;
