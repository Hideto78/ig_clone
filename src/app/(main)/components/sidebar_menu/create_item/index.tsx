import React, { FC, useState } from "react";
import CreateIcon from "@/assets/icons/create.svg";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import DragIcon from "@/assets/icons/drag_item.svg";


const CreateItem: FC = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger className="w-full p-3 my-1 flex flex-row rounded-md gap-4 hover:bg-accent hover:text-accent-foreground group active:text-gray-400">
        <CreateIcon className="w-6 h-6 group-active:scale-90 group-hover:scale-110 group-active:stroke-gray-400"></CreateIcon>
        <span className="hidden lg:block">Create</span>
      </AlertDialogTrigger>
      <AlertDialogContent className="p-0">
        <AlertDialogHeader className="items-center">
          <AlertDialogTitle className="text-base mt-2">
            Create new post
          </AlertDialogTitle>
          <Separator/>
          <AlertDialogDescription className="flex flex-col text-black items-center gap-4 py-40">
            <DragIcon className="w-24 h-18"/>
            <span className="text-lg">Drag photos and videos here</span>
            <AlertDialogAction>Select from computer</AlertDialogAction>
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CreateItem;
