import React, { FC, SVGProps } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type Route = {
  label: string;
  icon: FC<SVGProps<HTMLOrSVGElement> & { title?: string | undefined }>;
  activeIcon: FC<SVGProps<HTMLOrSVGElement> & { title?: string | undefined }>;
  href: string;
};

const NavItem: FC<Route> = ({
  href,
  icon: Icon,
  activeIcon: ActiveIcon,
  label,
}) => {
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
        {active ? (
          <ActiveIcon className="w-6 h-6 group-active:scale-90 group-hover:scale-110 group-active:stroke-gray-400"></ActiveIcon>
        ) : (
          <Icon className="w-6 h-6 group-active:scale-90 group-hover:scale-110 group-active:stroke-gray-400" />
        )}
        <span className="hidden lg:block">{label}</span>
      </Link>
    </li>
  );
};

export default NavItem;
