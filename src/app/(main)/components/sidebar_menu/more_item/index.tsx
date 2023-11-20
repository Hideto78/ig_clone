"use client";
import React, { FC, useState } from "react";
import MoreIcon from "@/assets/icons/more.svg";
import SettingsIcon from "@/assets/icons/setting.svg";
import ActivityIcon from "@/assets/icons/activity.svg";
import SavedIcon from "@/assets/icons/saved.svg";
import ThemeIcon from "@/assets/icons/theme.svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronLeft } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import LinkItem from "./link-item";

const MoreItem: FC = () => {
  const [switched, setswitched] = useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="mt-auto w-full p-3 flex flex-row rounded-md gap-4 hover:bg-accent hover:text-accent-foreground group active:text-gray-400">
            <MoreIcon className="w-6 h-6 transition-all group-active:scale-90 group-hover:scale-110" />
            <span className="hidden lg:block">More</span>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-62 rounded-lg">
          {switched ? (
            <>
              <DropdownMenuItem
                className="mr-1 rounded-lg hover:bg-accent hover:text-accent-foreground text-base font-medium active:text-gray-400 p-4 pl-4 flex flex-row gap-4"
                onSelect={(e) => {
                  e.preventDefault();
                  setswitched(false);
                }}
              >
                <ChevronLeft className="w-4 h-4 stroke-gray-300" />
                Switch appearance
                <ThemeIcon className="w-5 h-5"></ThemeIcon>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="m-1 rounded-lg hover:bg-accent hover:text-accent-foreground active:text-gray-400 p-4 pl-4 flex flex-row gap-4 justify-between">
                Dark mode
                <Switch />
              </DropdownMenuItem>
            </>
          ) : (
            <>
              <LinkItem
                href="/settings"
                icon={SettingsIcon}
                label="Settings"
              />
              <LinkItem
                href="/activity"
                icon={ActivityIcon}
                label="Your activity"
              />
              <LinkItem href="/saved" icon={SavedIcon} label="Saved" />
              <DropdownMenuItem
                className="m-1 rounded-lg hover:bg-accent hover:text-accent-foreground active:text-gray-400 p-4 flex flex-row gap-4 justify-between"
                onSelect={(e) => {
                  e.preventDefault();
                  setswitched(true);
                }}
              >
                <ThemeIcon className="w-5 h-5" />
                Switch appearance
              </DropdownMenuItem>
              <DropdownMenuSeparator className="h-1" />
              <DropdownMenuItem className="m-1 h-[50px] px-4 rounded-lg hover:bg-accent hover:text-accent-foreground active:text-gray-400">
                Log out
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default MoreItem;
