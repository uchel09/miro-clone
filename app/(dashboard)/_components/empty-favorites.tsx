import Image from "next/image";

export const EmptyFavorites = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <Image
        alt="empty-favorites"
        src="/nofavorites.svg"
        width={300}
        height={300}
      />
      <h2 className="text-2xl font-bold mt-6">No Favorite Board </h2>
      <p className="text-muted-foreground text-sm mt-2">
        Try Favoriting a board
      </p>
    </div>
  );
};
