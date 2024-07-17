import { Skeleton } from "@/components/ui/skeleton";
import { ToolButton } from "./tool-button";
import {
  Circle,
  MousePointer2,
  Pencil,
  Redo2,
  Square,
  StickyNote,
  Type,
  Undo2,
} from "lucide-react";

type CanvasState = any;

interface ToolBarProps {
  canvasState: CanvasState;
  setCanvasState: (newState: CanvasState) => void;
  undo: () => void;
  redo: () => void;
  canUndo: boolean;
  canRedo: boolean;
}

export const Toolbar = ({
  canvasState,
  setCanvasState,
  undo,
  redo,
  canUndo,
  canRedo,
}: ToolBarProps) => {
  return (
    <div className="absolute  top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4">
      {/* too/l */}
      <div className="bg-white  rounded-md p-1.5 flex gap-y-1 flex-col items-center shadow-md">
        <ToolButton
          label="Select"
          icon={MousePointer2}
          onClick={() => {}}
          isActive={false}
        />
        <ToolButton
          label="Text"
          icon={Type}
          onClick={() => {}}
          isActive={false}
        />
        <ToolButton
          label="Sticky Note"
          icon={StickyNote}
          onClick={() => {}}
          isActive={false}
        />
        <ToolButton
          label="Rectangle"
          icon={Square}
          onClick={() => {}}
          isActive={false}
        />
        <ToolButton
          label="Ellipse"
          icon={Circle}
          onClick={() => {}}
          isActive={false}
        />
        <ToolButton
          label="Pencil"
          icon={Pencil}
          onClick={() => {}}
          isActive={false}
        />
      </div>
      {/* too/l */}
      {/* undo/redo */}
      <div className="bg-white rounded-md  p-1.5 flex flex-col items-center shadow-md">
        <ToolButton
          label="Undo"
          icon={Undo2}
          onClick={() => {}}
          isDisabled={true}
        />
        <ToolButton
          label="Redo"
          icon={Redo2}
          onClick={() => {}}
          isDisabled={true}
        />
      </div>
      {/* undo/redo */}
    </div>
  );
};

export const ToolbarSkeleton = () => {
  return (
    <div className="absolute bg-white shadow-md rounded-md  top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4 w-[56px] h-[360px]">
      <Skeleton className="h-full w-full bg-muted-400" />
    </div>
  );
};
