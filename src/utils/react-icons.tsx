import { FaLayerGroup } from "react-icons/fa";
import { BiDotsVertical } from "react-icons/bi";
import { BsArrowBarLeft } from "react-icons/bs";
import { GiHole } from "react-icons/gi";
import {
  TbPencil,
  TbTrash,
  TbCheck,
  TbHome2,
  TbLink,
  TbQuestionCircle,
  TbTimelineEventExclamation,
  TbLogout,
  TbColorPicker,
  TbBookmark,
  TbArrowBigRightLines,
  TbFolder,
  TbRobot,
  TbCubeSend,
  TbFriends,
  TbBox,
  TbSearch,
  TbArchive,
} from "react-icons/tb";

import {
  MdFileDownloadDone,
  MdOutlineErrorOutline,
  MdOutlineAirlineSeatReclineNormal,
  MdOutlineSettingsBackupRestore,
} from "react-icons/md";
import { FcProcess } from "react-icons/fc";

export const icons = {
  dots: <BiDotsVertical />,
  arrowLeft: <BsArrowBarLeft />,

  link: <TbLink />,
  group: <FaLayerGroup />,
  home: <TbHome2 />,
  topicOpen: <TbFolder />,
  delete: <TbTrash />,
  pen: <TbPencil />,
  check: <TbCheck />,
  question: <TbQuestionCircle />,
  exclamation: <TbTimelineEventExclamation />,
  logout: <TbLogout />,
  themePick: <TbColorPicker />,
  marker: <TbBookmark />,
  transition: <TbArrowBigRightLines />,
  robot: <TbRobot />,
  send: <TbCubeSend />,
  friends: <TbFriends />,
  box: <TbBox />,
  hole: <GiHole />,
  search: <TbSearch />,

  archive: <TbArchive />,
  restore: <MdOutlineSettingsBackupRestore />,

  done: <MdFileDownloadDone />,
  process: <FcProcess />,
  error: <MdOutlineErrorOutline />,
  default: <MdOutlineAirlineSeatReclineNormal />,
};
