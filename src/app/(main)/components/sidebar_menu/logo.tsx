import React, { FC } from "react";
import IconLogo from "@/assets/icon-logo.svg";
import TextLogo from "@/assets/text-logo.svg";

const Logo: FC = () => {
  return (
    <>
      <TextLogo className="h-7 my-10 mx-3 hidden lg:block" />
      <IconLogo className="h-6 my-10 mx-3 lg:hidden" />
    </>
  );
};

export default Logo;
