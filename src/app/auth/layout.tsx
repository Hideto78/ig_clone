import { FC, PropsWithChildren } from "react";
import AuthFooter from "./footer";
import Image from "next/image";

const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="mx-auto flex flex-col items-center justify-between min-h-screen">
      <article className="flex flex-row justify-center py-8">
        <div className="justify-end relative w-[468px] hidden lg:flex">
          <Image
            src="/images/auth/background.png"
            alt="background"
            width={468}
            height={634}
            className="absolute top-0 right-0 w-[468px] h-[634px]"
          />
          <Image
            src="/images/auth/image-1.png"
            alt="image-1"
            width={250}
            height={538}
            className="absolute top-[30px] right-[60px]"
          />
        </div>
        <div className="lg:w-[468px]">{children}</div>
      </article>
      <AuthFooter />
    </main>
  );
};

export default AuthLayout;
