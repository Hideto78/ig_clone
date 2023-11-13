"use client";

import React, { FC } from "react";
import NavItem from "./navItem";
import ProfileItem from "./profileItem";
import MoreItem from "./moreItem";
import LogoSVG from "@/assets/logo.svg";
import HomeIcon from "@/assets/icons/home.svg";
import SearchIcon from "@/assets/icons/search.svg";
import ExploreIcon from "@/assets/icons/explore.svg";
import ReelsIcon from "@/assets/icons/reels.svg";
import MessagesIcon from "@/assets/icons/messages.svg";
import NotificationsIcon from "@/assets/icons/notifications.svg";
import CreateIcon from "@/assets/icons/create.svg";

type Props = {};

const NavigationMenu: FC<Props> = () => {
  return (
    <aside className="fixed bottom-0 right-0 left-0 flex-none w-full h-12 sm:relative sm:h-screen sm:w-20 lg:w-60 border-t sm:border-t-0 sm:border-r">
      <nav className="h-full px-3 pb-6 flex flex-col items-start justify-between">
        <LogoSVG className="h-7 my-10 mx-3" />
        <ul className="w-full flex flex-col gap-2">
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
          <ProfileItem />
        </ul>
        <MoreItem />
      </nav>
    </aside>
  );
};

export default NavigationMenu;
