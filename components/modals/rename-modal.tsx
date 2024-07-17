"use client";

import { FormEventHandler, useEffect, useState } from "react";
import { useRenameModal } from "@/store/use-rename-modal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogClose,
  DialogFooter,
  DialogTitle,
} from "../ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

export const RenameModal = () => {
  const { mutate, pending } = useApiMutation(api.board.update);
  const { isOpen, onClose, initialValue } = useRenameModal();
  const [title, setTitle] = useState(initialValue.title);

  useEffect(() => {
    setTitle(initialValue.title);
  }, [initialValue.title]);

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    mutate({
      id: initialValue.id,
      title,
    })
      .then(() => {
        toast.success("Board Renamed");
        onClose();
      })
      .catch(() => {
        toast.error("Failed to rename Board");
      });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Board Title</DialogTitle>
        </DialogHeader>
        <DialogDescription>Enter a new Title for this Board</DialogDescription>
        <form onSubmit={onSubmit} className="space-y-4">
          <Input
            required
            maxLength={60}
            value={title}
            disabled={pending}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Board Title"
          />

          <DialogFooter>
            <DialogClose>
              <Button variant="outline" type="button">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" disabled={pending}>
              Save
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
