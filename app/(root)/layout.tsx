import { ReactNode } from "react";
import {FloatingNav} from "@/components/ui/FloatingNavbar";
import {navItems} from "@/data";

const Layout = async ({ children }: { children: ReactNode }) => {


  return (
    <main >
      <div >
        <FloatingNav navItems={navItems}/>
        <div>{children}</div>
      </div>
    </main>
  );
};

export default Layout;