"use client";

import React, { FC } from "react";
import NavItem from "./nav_item";
import ProfileItem from "./profile_item";
import CreateItem from "./create_item";
import MoreItem from "./more_item";
import HomeIcon from "@/assets/icons/home.svg";
import HomeActiveIcon from "@/assets/icons/home-active.svg";
import SearchIcon from "@/assets/icons/search.svg";
import SearchActiveIcon from "@/assets/icons/search-active.svg";
import ExploreIcon from "@/assets/icons/explore.svg";
import ExploreActiveIcon from "@/assets/icons/explore-active.svg";
import ReelsIcon from "@/assets/icons/reels.svg";
import ReelsActiveIcon from "@/assets/icons/reels-active.svg";
import MessagesIcon from "@/assets/icons/messages.svg";
import MessagesActiveIcon from "@/assets/icons/messages-active.svg";
import NotificationsIcon from "@/assets/icons/notifications.svg";
import NotificationsActiveIcon from "@/assets/icons/notifications-active.svg";
import Logo from "./logo";

type Props = {};

const SidebarMenu: FC<Props> = () => {
  return (
    <aside className="fixed bottom-0 right-0 left-0 flex-none w-full h-12 sm:relative sm:h-screen sm:w-20 lg:w-60 border-t sm:border-t-0 sm:border-r">
      <nav className="h-full px-3 pb-6 flex flex-row sm:flex-col items-start justify-between">
        <Logo />
        <ul className="w-full flex flex-row sm:flex-col gap-2">
          <NavItem
            href="/"
            label="Home"
            icon={HomeIcon}
            activeIcon={HomeActiveIcon}
          />
          <NavItem
            href="/search"
            label="Search"
            icon={SearchIcon}
            activeIcon={SearchActiveIcon}
          />
          <NavItem
            href="/explore"
            label="Explore"
            icon={ExploreIcon}
            activeIcon={ExploreActiveIcon}
          />
          <NavItem
            href="/reels"
            label="Reels"
            icon={ReelsIcon}
            activeIcon={ReelsActiveIcon}
          />
          <NavItem
            href="/messages"
            label="Messages"
            icon={MessagesIcon}
            activeIcon={MessagesActiveIcon}
          />
          <NavItem
            href="/notifications"
            label="Notifications"
            icon={NotificationsIcon}
            activeIcon={NotificationsActiveIcon}
          />
        </ul>
        <CreateItem />
        <ProfileItem />
        <MoreItem />
      </nav>
    </aside>
  );
};

export default SidebarMenu;
