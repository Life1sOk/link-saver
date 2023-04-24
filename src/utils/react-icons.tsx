import { HiOutlinePencilAlt } from "react-icons/hi";
import { AiFillFolderAdd, AiFillFileAdd } from "react-icons/ai";
import { BiDotsVertical } from "react-icons/bi";
import { BsArrowBarLeft } from "react-icons/bs";
import {
  TbFileImport,
  TbPencil,
  TbTrash,
  TbCheck,
  TbHome2,
} from "react-icons/tb";

export const icons = {
  link: <HiOutlinePencilAlt />,
  topicAdd: <AiFillFolderAdd />,
  dots: <BiDotsVertical />,
  arrowLeft: <BsArrowBarLeft />,
  activateForAdd: <AiFillFileAdd />,

  home: <TbHome2 />,
  topicOpen: <TbFileImport />,
  delete: <TbTrash />,
  pen: <TbPencil />,
  check: <TbCheck />,
};
