import React, { FC } from "react";
import MoreIcon from "@/assets/icons/more.svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const MoreItem: FC = () => {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="mt-auto w-full p-3 flex flex-row rounded-md gap-4 hover:bg-accent hover:text-accent-foreground group active:text-gray-400">
            <MoreIcon className="w-6 h-6 transition-all group-active:scale-90 group-hover:scale-110" />
            <span className="hidden lg:block">More</span>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
  
          <DropdownMenuItem>
            <span>Team</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  };

  export default MoreItem;