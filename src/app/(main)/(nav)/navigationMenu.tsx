"use client";

import React, { FC } from "react";
import NavItem from "./navItem";
import ProfileItem from "./profileItem";
import MoreItem from "./moreItem";
import LogoSVG from "@/assets/logo.svg";
import Logo from "@/assets/logo-2.svg";
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
import CreateIcon from "@/assets/icons/create.svg";

type Props = {};

const NavigationMenu: FC<Props> = () => {
  return (
    <aside className="fixed bottom-0 right-0 left-0 flex-none w-full h-12 sm:relative sm:h-screen sm:w-20 lg:w-60 border-t sm:border-t-0 sm:border-r">
      <nav className="h-full px-3 pb-6 flex flex-row sm:flex-col items-start justify-between">
        <LogoSVG className="h-7 my-10 mx-3 hidden lg:block" />
        <Logo className="h-6 my-10 mx-3 lg:hidden" />
        <ul className="w-full flex flex-row sm:flex-col gap-2">
          <NavItem key="/" label="Home" icon={HomeIcon} activeIcon={HomeActiveIcon} href="/" />
          <NavItem
            key="/search"
            label="Search"
            icon={SearchIcon}
            activeIcon={SearchActiveIcon}
            href="/search"
          />
          <NavItem
            key="/explore"
            label="Explore"
            icon={ExploreIcon}
            activeIcon={ExploreActiveIcon}
            href="/explore"
          />
          <NavItem key="/reels" label="Reels" icon={ReelsIcon} activeIcon={ReelsActiveIcon} href="/reels" />
          <NavItem
            key="/messages"
            label="Messages"
            icon={MessagesIcon}
            activeIcon={MessagesActiveIcon}
            href="/messages"
          />
          <NavItem
            key="/notifications"
            label="Notifications"
            icon={NotificationsIcon}
            activeIcon={NotificationsActiveIcon}
            href="/notifications"
          />
          <NavItem
            key="/create"
            label="Create"
            icon={CreateIcon}
            activeIcon={CreateIcon}
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
