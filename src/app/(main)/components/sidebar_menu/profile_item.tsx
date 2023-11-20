import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type Props = {};

const ProfileItem: FC<Props> = () => {
  const pathname = usePathname();
  const active = pathname === "/profile";

  return (
    <Link
      href="/profile"
      className={cn(
        "w-full my-1 p-3 flex flex-row rounded-md gap-4 hover:bg-accent hover:text-accent-foreground group active:text-gray-400",
        {
          "font-bold": active,
        }
      )}
    >
      <Image
        width={100}
        height={100}
        alt="profile"
        src="/images/profile.jpg"
        className={cn(
          "w-6 h-6 rounded-full transition-all group-active:scale-90 group-hover:scale-110",
          active ? "ring-2 ring-black" : ""
        )}
      />
      <span className="hidden lg:block">Profile</span>
    </Link>
  );
};

export default ProfileItem;
