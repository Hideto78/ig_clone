"use client";
import CreateIcon from "@/assets/icons/create.svg";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Separator } from "@/components/ui/separator";
import { XIcon } from "lucide-react";
import { FC, useState } from "react";
import Dropzone from "./dropzone";

const CreateItem: FC = () => {
  const [selectedFile, setSelectedFile] = useState<File>();
  return (
    <AlertDialog>
      <AlertDialogTrigger className="w-full p-3 my-1 flex flex-row rounded-md gap-4 hover:bg-accent hover:text-accent-foreground group active:text-gray-400">
        <CreateIcon className="w-6 h-6 group-active:scale-90 group-hover:scale-110 group-active:stroke-gray-400"></CreateIcon>
        <span className="hidden lg:block">Create</span>
      </AlertDialogTrigger>
      <AlertDialogContent className="p-0 xl:max-w-xl lg:max-w-lg md:max-w-md sm:rounded-xl">
        <AlertDialogCancel className="absolute top-1 right-1 w-8 h-8 p-0 rounded-full">
          <XIcon className="w-4 h-4" />
        </AlertDialogCancel>
        <AlertDialogHeader className="items-center">
          <AlertDialogTitle className="text-base mt-2">
            Create new post
          </AlertDialogTitle>
          <Separator />
          <div className="flex text-black items-center gap-4 w-full aspect-square justify-center">
            {selectedFile ? <img src={URL.createObjectURL(selectedFile)} alt="test" /> : <Dropzone onChange={setSelectedFile} />}
          </div>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CreateItem;
