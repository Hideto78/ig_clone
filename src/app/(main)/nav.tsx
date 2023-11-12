"use client";

import React, { FC, SVGProps } from "react";
import LogoSVG from "@/assets/logo.svg";
import HomeIcon from "@/assets/icons/home.svg";
import SearchIcon from "@/assets/icons/search.svg";
import ExploreIcon from "@/assets/icons/explore.svg";
import ReelsIcon from "@/assets/icons/reels.svg";
import MessagesIcon from "@/assets/icons/messages.svg";
import NotificationsIcon from "@/assets/icons/notifications.svg";
import CreateIcon from "@/assets/icons/create.svg";
import MoreIcon from "@/assets/icons/more.svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type Props = {};

type Route = {
  label: string;
  icon: FC<SVGProps<HTMLOrSVGElement> & { title?: string | undefined }>;
  href: string;
};

type ProfileRoute = {
  label: string;
  src: string;
  href: string;
};

const NavigationMenu: FC<Props> = () => {
  return (
    <aside className="fixed bottom-0 right-0 left-0 flex-none w-full h-12 sm:relative sm:h-screen sm:w-20 lg:w-60 border-t sm:border-t-0 sm:border-r">
      <nav className="h-full px-3 pb-6 flex flex-col items-start justify-between">
        <LogoSVG className="h-7 my-10 mx-3" />
        <ul className="flex flex-col gap-2">
          <NavItem key="/" label="Home" icon={HomeIcon} href="/" />
          <NavItem
            key="/search"
            label="Search"
            icon={SearchIcon}
            href="/search"
          />
          <NavItem
            key="/explore"
            label="Explore"
            icon={ExploreIcon}
            href="/explore"
          />
          <NavItem key="/reels" label="Reels" icon={ReelsIcon} href="/reels" />
          <NavItem
            key="/messages"
            label="Messages"
            icon={MessagesIcon}
            href="/messages"
          />
          <NavItem
            key="/notifications"
            label="Notifications"
            icon={NotificationsIcon}
            href="/notifications"
          />
          <NavItem
            key="/create"
            label="Create"
            icon={CreateIcon}
            href="/create"
          />
          <ProfileItem
            key="/profile"
            label="Profile"
            src="/images/profile.jpg"
            href="/profile"
          />
        </ul>
        <MoreItem />
      </nav>
    </aside>
  );
};

const NavItem: FC<Route> = ({ href, icon: Icon, label }) => {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <li key={href}>
      <Link
        href={href}
        className={cn(
          "p-3 flex flex-row rounded-md gap-4 hover:bg-accent hover:text-accent-foreground group active:text-gray-400",
          {
            "font-bold": active,
          }
        )}
      >
        <Icon
          className={cn(
            "w-6 h-6 transition-all group-active:scale-90 group-hover:scale-110",
            active
              ? "text-inherit"
              : "text-transparent stroke-2 stroke-black group-active:stroke-gray-400"
          )}
        />
        <span className="hidden lg:block">{label}</span>
      </Link>
    </li>
  );
};

const ProfileItem: FC<ProfileRoute> = ({ href, src, label }) => {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <li key={href}>
      <Link
        href={href}
        className={cn(
          "p-3 flex flex-row rounded-md gap-4 hover:bg-accent hover:text-accent-foreground group active:text-gray-400",
          {
            "font-bold": active,
          }
        )}
      >
        <Image
          src={src}
          alt="profile"
          width={100}
          height={100}
          className={cn(
            "w-6 h-6 rounded-full transition-all group-active:scale-90 group-hover:scale-110",
            active ? "ring-2 ring-black" : ""
          )}
        />
        <span className="hidden lg:block">{label}</span>
      </Link>
    </li>
  );
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

export default NavigationMenu;
