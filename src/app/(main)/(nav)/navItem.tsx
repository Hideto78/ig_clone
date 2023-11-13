import React, { FC, SVGProps } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type Route = {
    label: string;
    icon: FC<SVGProps<HTMLOrSVGElement> & { title?: string | undefined }>;
    href: string;
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

export default NavItem;
