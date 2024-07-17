import { InfoSkeleton } from "./info";
import Image from "next/image";
import { ParticipantsSkeleton } from "./participants";
import { ToolbarSkeleton } from "./toolbar";
export const CanvasLoading = () => {
  return (
    <main className="h-full w-full relative  bg-neutral-100 touch-none flex items-center justify-center">
      <Image
        width={50}
        height={50}
        alt="canvas-loader"
        src="/DoubleRing.svg"
        className="rounded-full bg-none text-muted-foreground"
      />
      <InfoSkeleton />
      <ParticipantsSkeleton />
      <ToolbarSkeleton />
    </main>
  );
};
