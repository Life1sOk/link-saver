import { useDispatch } from 'react-redux';
import { DragDropStyle } from './drag-drop.style';
import { addLink } from '../../App/store/slices/link.slice';


interface IDrag {
  link_id?: number;
  data?: any;
  children: string | JSX.Element | JSX.Element[];
}

const Drag = ({ link_id, children }: IDrag) => {
  const dispatch = useDispatch();

  const onDragStart = (event: React.SyntheticEvent) => {
    const linkTitle = ''; 
    const linkUrl = ''; 

    const linkData = {
      link_title: linkTitle,
      link_url: linkUrl,
    };

    dispatch(addLink(linkData));
  };

  return (
    <DragDropStyle onDragStart={onDragStart} draggable>
      {children}
    </DragDropStyle>
  );
};

export default Drag;