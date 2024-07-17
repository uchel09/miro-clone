"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { api } from "@/convex/_generated/api";
import { useOrganization } from "@clerk/nextjs";
import { useApiMutation } from "@/hooks/use-api-mutation";

export const EmptyBoard = () => {
  const router = useRouter()
  const { organization } = useOrganization();
  const { mutate, pending } = useApiMutation(api.board.create);

  const onClick = () => {
    if (!organization) return;

    mutate({
      orgId: organization.id,
      title: "untitled",
    }).then((id) => {
      toast.success("Board Created");
      router.push(`/board/${id}`)
    }).catch(()=> toast.error("Failed to create board"))
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <Image
        alt="No-Board-At-All"
        src="/noBoard.svg"
        width={300}
        height={300}
      />
      <h2 className="text-2xl font-bold mt-6">No Board At All</h2>
      <p className="text-muted-foreground text-sm mt-2">
        {" "}
        Create Your First Board
      </p>
      <div className="mt-6">
        <Button disabled={pending} onClick={onClick} size="lg">
          {" "}
          Create Board
        </Button>
      </div>
    </div>
  );
};
