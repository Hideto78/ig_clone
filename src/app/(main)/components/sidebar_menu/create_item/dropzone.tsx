import React, { FC, createRef } from "react";
import { useDropzone, DropzoneRef } from "react-dropzone";
import DragIcon from "@/assets/icons/drag_item.svg";
import { Button } from "@/components/ui/button";

type Props = {
  onChange?: (file: File) => void;
};

const Dropzone: FC<Props> = ({ onChange }) => {
  const { getRootProps, getInputProps, open } = useDropzone({
    noClick: true,
    noKeyboard: true,
    onDropAccepted: (files) => {
      if (files && files.length > 0) onChange?.(files[0]);
    },
  });

  return (
    <div
      {...getRootProps({
        className: "container dropzone flex flex-col justify-center items-center gap-3 w-full h-full",
      })}
    >
      <input {...getInputProps()} />
      <DragIcon className="w-24 h-18" />
      <span className="text-lg">Drag photos and videos here</span>
      <Button onClick={open}>Select from computer</Button>
    </div>
  );
};

export default Dropzone;
