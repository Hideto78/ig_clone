import { FC, PropsWithChildren } from "react";
import SidebarMenu from "./components/sidebar_menu";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex fkex-c sm:flex-row">
      <SidebarMenu />
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default MainLayout;
