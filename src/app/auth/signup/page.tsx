import { NextPage } from "next";
import LogoSVG from "@/assets/text-logo.svg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";
import Link from "next/link";

const LoginPage: NextPage = () => {
  return (
    <div className="flex flex-col gap-3 w-[350px]">
      <div className="border flex flex-col items-center px-10">
        <LogoSVG className="my-10 w-44" />
        <div className="w-full flex flex-col gap-2">
          <Button size="sm">
            <GithubIcon className="w-4 h-4 mr-2" />
            Sign up with github
          </Button>
          <div className="flex flex-row items-center gap-4 mt-4">
            <div className="h-px w-full flex-1 bg-gray-400" />
            <p className="flex-none text-sm">OR</p>
            <div className="h-px w-full flex-1 bg-gray-400" />
          </div>
          <Input
            type="email"
            className="placeholder:text-xs"
            placeholder="Mobile number or Email"
          />
          <Input className="placeholder:text-xs" placeholder="Fullname" />
          <Input className="placeholder:text-xs" placeholder="Username" />
          <Input
            type="password"
            placeholder="Password"
            className="placeholder:text-xs"
          />
          <Button className="mt-2 mb-10" size="sm">
            Sign up
          </Button>
        </div>
      </div>
      <div className="border inline-flex items-center py-2 justify-center">
        Have an account?{" "}
        <Button variant="link" className="px-2" asChild>
          <Link href="/auth/login">Log in</Link>
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
