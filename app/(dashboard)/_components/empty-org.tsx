import Image from "next/image";
import { CreateOrganization } from "@clerk/nextjs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export const EmptyOrg = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image
        src="/board-dashboard.svg"
        alt="dashboard-icon"
        width={300}
        height={300}
      />
      <h2 className="text-2xl font-bold mt-6">Welcome To Board</h2>

      <p className="text-muted-foreground text-sm mt-2">
        Create an organization to get started{" "}
      </p>

      <div className="mt-6">
        <Dialog>
          <DialogTrigger asChild>
            <Button size="lg">Create an Organization</Button>
          </DialogTrigger>
          <DialogContent className="  border-none max-w-[480px]">
            <CreateOrganization />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};
