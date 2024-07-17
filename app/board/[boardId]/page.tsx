import { Canvas } from "./_components/canvas";
import { Room } from "@/components/room";
import { CanvasLoading } from "./_components/canvas-loading";

interface BoardIdProps {
  params: {
    boardId: string;
  };
}

const BoardIdPage = ({ params }: BoardIdProps) => {
  return (
    <Room roomId={params.boardId} fallback={<CanvasLoading />}>
      <Canvas boardId={params.boardId} />
    </Room>
  );
};

export default BoardIdPage;
