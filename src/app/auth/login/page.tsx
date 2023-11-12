import { NextPage } from "next";
import LogoSVG from "@/assets/logo.svg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";
import Link from "next/link";

const LoginPage: NextPage = () => {
  return (
    <div className="flex flex-col gap-3 w-screen sm:w-[350px]">
      <div className="sm:border flex flex-col items-center px-4 sm:px-10">
        <LogoSVG className="my-10 w-44" />
        <div className="w-full flex flex-col gap-2">
          <Input
            type="email"
            className="placeholder:text-xs"
            placeholder="Phone number, username, or email"
          />
          <Input
            type="password"
            placeholder="Password"
            className="placeholder:text-xs"
          />
          <Button className="mt-2" size="sm">
            Log in
          </Button>
          <div className="flex flex-row items-center gap-4 mt-4">
            <div className="h-px w-full flex-1 bg-gray-400" />
            <p className="flex-none text-sm">OR</p>
            <div className="h-px w-full flex-1 bg-gray-400" />
          </div>
          <Button variant="link" size="sm">
            <GithubIcon className="w-4 h-4 mr-2" />
            Log in with github
          </Button>
          <Button className="text-xs mb-2 font-normal" variant="link" size="sm">
            Forget password?
          </Button>
        </div>
      </div>
      <div className="sm:border inline-flex flex-wrap items-center py-2 justify-center">
        Don&apos;t have an account?{" "}
        <Button variant="link" className="px-2" asChild>
          <Link href="/auth/signup">Sign up</Link>
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
