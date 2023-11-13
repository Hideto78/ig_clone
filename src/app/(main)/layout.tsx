import { FC, PropsWithChildren } from "react";
import NavigationMenu from "./(nav)/navigationMenu";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex fkex-c sm:flex-row">
      <NavigationMenu />
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default MainLayout;
