import CreateIcon from "@/assets/icons/create.svg";
import DragIcon from "@/assets/icons/drag_item.svg";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { XIcon } from "lucide-react";
import { FC, useRef, createRef } from "react";
import Dropzone from "react-dropzone";

const CreateItem: FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  const dropzoneRef = createRef<HTMLInputElement>();
  const openDialog = () => {
    // Note that the ref is set async,
    // so it might be null at some point
    if (dropzoneRef.current) {
      dropzoneRef.current.open();
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger className="w-full p-3 my-1 flex flex-row rounded-md gap-4 hover:bg-accent hover:text-accent-foreground group active:text-gray-400">
        <CreateIcon className="w-6 h-6 group-active:scale-90 group-hover:scale-110 group-active:stroke-gray-400"></CreateIcon>
        <span className="hidden lg:block">Create</span>
      </AlertDialogTrigger>
      <AlertDialogContent className="p-0 xl:max-w-4xl sm:rounded-xl">
        <AlertDialogCancel className="absolute top-1 right-1 w-8 h-8 p-0 rounded-full">
          <XIcon className="w-4 h-4" />
        </AlertDialogCancel>
        <AlertDialogHeader className="items-center">
          <AlertDialogTitle className="text-base mt-2">
            Create new post
          </AlertDialogTitle>
          <Separator />
          <div className="flex flex-col text-black items-center gap-4 w-full aspect-square justify-center">
            <DragIcon className="w-24 h-18" />
            <span className="text-lg">Drag photos and videos here</span>
            <Dropzone ref={dropzoneRef} noClick noKeyboard>
              {({ getRootProps, getInputProps, acceptedFiles }) => {
                return (
                  <div className="container">
                    <div {...getRootProps({ className: "dropzone" })}>
                      <input {...getInputProps()} />
                      <p>Drag and drop some files here</p>
                      <button type="button" onClick={openDialog}>
                        Open File Dialog
                      </button>
                    </div>
                    <aside>
                      <h4>Files</h4>
                      <ul>
                        {acceptedFiles.map((file) => (
                          <li key={file.path}>
                            {file.path} - {file.size} bytes
                          </li>
                        ))}
                      </ul>
                    </aside>
                  </div>
                );
              }}
            </Dropzone>
            <Button>Select from computer</Button>
          </div>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CreateItem;
