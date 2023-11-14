import React, { FC, SVGProps } from "react";
import Link from "next/link";
import MoreIcon from "@/assets/icons/more.svg";
import SettingsIcon from "@/assets/icons/setting.svg";
import ActivityIcon from "@/assets/icons/activity.svg";
import SavedIcon from "@/assets/icons/saved.svg";
import ThemeIcon from "@/assets/icons/theme.svg";
import ReportIcon from "@/assets/icons/report.svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Ghost } from "lucide-react";

type Route = {
  label: string;
  icon: FC<SVGProps<HTMLOrSVGElement> & { title?: string | undefined }>;
  href: string;
};

type ButtonRoute = {
  label: string;
  icon: FC<SVGProps<HTMLOrSVGElement> & { title?: string | undefined }>;
};

const MoreItem: FC = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="mt-auto w-full p-3 flex flex-row rounded-md gap-4 hover:bg-accent hover:text-accent-foreground group active:text-gray-400">
          <MoreIcon className="w-6 h-6 transition-all group-active:scale-90 group-hover:scale-110" />
          <span className="hidden lg:block">More</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="absolute bottom-14 w-60 rounded-lg">
        <DropMenuItem href="/settings" icon={SettingsIcon} label="Settings" />
        <DropMenuItem
          href="/activity"
          icon={ActivityIcon}
          label="Your activity"
        />
        <DropMenuItem href="/saved" icon={SavedIcon} label="Saved" />
        <DropMenuButtonItem label="Switch appearance" icon={ThemeIcon} />
        <DropMenuButtonItem label="Report a problem" icon={ReportIcon} />
        <DropdownMenuSeparator className="h-1" />
        <DropdownMenuItem className="m-1 rounded-lg hover:bg-accent hover:text-accent-foreground active:text-gray-400">
          <button className="w-full p-3 flex rounded-md justify-start">
            Switch accounts
          </button>
        </DropdownMenuItem>
        {/* <DropMenuButtonItem label="Switch accounts"/> */}
        <DropdownMenuSeparator />
        <DropdownMenuItem className="m-1 rounded-lg hover:bg-accent hover:text-accent-foreground active:text-gray-400">
          <button className="w-full p-3 flex rounded-md justify-start">
            Log out
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const DropMenuItem: FC<Route> = ({ href, icon: Icon, label }) => {
  return (
    <DropdownMenuItem className="m-1 rounded-lg hover:bg-accent hover:text-accent-foreground active:text-gray-400">
      <Link href={href} className="w-full p-3 flex flex-row rounded-md gap-4">
        <Icon className="w-5 h-5"></Icon>
        {label}
      </Link>
    </DropdownMenuItem>
  );
};

const DropMenuButtonItem: FC<ButtonRoute> = ({ icon: Icon, label }) => {
  return (
    <DropdownMenuItem className="m-1 rounded-lg hover:bg-accent hover:text-accent-foreground active:text-gray-400">
      <button className="w-full p-3 flex flex-row rounded-md gap-4 justify-start">
        {Icon && <Icon className="w-5 h-5"></Icon>}
        {label}
      </button>
    </DropdownMenuItem>
  );
};

export default MoreItem;
