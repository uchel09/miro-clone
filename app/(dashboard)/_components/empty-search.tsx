import Image from "next/image";

export const EmptySearch = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <Image
        alt="empty-search"
        src="/noSearchBoard.svg"
        width={300}
        height={300}
      />
      <h2 className="text-2xl font-bold mt-6">No board found </h2>
      <p className="text-muted-foreground text-sm mt-2">
        Try searching for something else
      </p>
    </div>
  );
};
