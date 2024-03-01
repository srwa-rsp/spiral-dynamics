import Navbar from "../components/Navbar";
import { ReactNode } from "react";
interface Props {
  children?: ReactNode;
}

export const MainLayout = ({ children }: Props) => {
  return (
    <div className="h-full min-h-[100dvh] flex flex-col overflow-hidden">
      <Navbar></Navbar>
      <main className="h-full overflow-x-hidden flex gap-10">
        {children}
      </main>
    </div>
  );
};
