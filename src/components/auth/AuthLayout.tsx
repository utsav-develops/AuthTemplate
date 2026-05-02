import { ReactNode } from "react";
import { Logo } from "../ui/logo";
import { useNavigate } from "react-router";

//animated ui
import { GravityStarsBackground } from "../animated-ui/gravity-stars";
import { AnimatedThemeToggler } from "../animated-ui/theme-toggler";

export default function AuthLayout({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="top-5 left-10 fixed z-50 items-center flex justify-center">
        <div
          className="w-8 h-8 mr-3 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <Logo />
        </div>
        <span className="text-xl font-bold tracking-tight">AppName</span>
      </div>
      <div className="top-5 right-10 fixed z-50 items-center flex justify-center">
        <AnimatedThemeToggler />
      </div>
      <div className="max-w-md w-full px-4 z-10">{children}</div>
      <div className="z-0 fixed w-full h-screen">
        <GravityStarsBackground />
      </div>
    </div>
  );
}
