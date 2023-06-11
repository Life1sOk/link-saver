import { IShortLink } from '../interfaces/link';

import { DragDropStyle } from './drag-drop.style';

interface IDrop {
  data?: IShortLink;
  group_index?: number;
  group_id: number;
  children: string | JSX.Element | JSX.Element[];
}

const Drop = ({ group_id, data, group_index, children }: IDrop) => {
  const onDragOver = (event: React.SyntheticEvent) => {
    event.preventDefault();
  };
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    const droppedData = JSON.parse(event.dataTransfer.getData('text/plain'));
    onDropHandler(droppedData);
  };

  const onDropHandler = (droppedData: IShortLink) => {
    console.log(group_id, droppedData, group_index, 'started group');
  };


  return (
    <DragDropStyle onDragOver={onDragOver} onDrop={handleDrop}>
      {children}
    </DragDropStyle>
  );
};

export default Drop;
