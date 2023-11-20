import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { Link } from "lucide-react";
import { FC, SVGProps } from "react";

type Props = {
  label: string;
  href: string;
  icon: FC<SVGProps<HTMLOrSVGElement> & { title?: string | undefined }>;
};

const LinkItem: FC<Props> = ({ href, icon: Icon, label }) => {
  return (
    <DropdownMenuItem asChild className="rounded-lg">
      <Link
        href={href}
        className="m-1 h-[50px] px-4 rounded-lg hover:bg-accent hover:text-accent-foreground active:text-gray-400 flex flex-row gap-4"
      >
        <Icon className="w-4 h-4"></Icon>
        {label}
      </Link>
    </DropdownMenuItem>
  );
};

export default LinkItem;