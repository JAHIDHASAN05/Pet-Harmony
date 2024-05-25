'use client'

import { usePathname, useRouter } from "next/navigation";
import React, { ReactNode } from "react";
import { isLoggedIn } from "./auth.service";

const PrivateRoute = ({ children }:{children:ReactNode}) => {
  const router = useRouter();

  const pathName = usePathname();

  const isLoggedInUser = isLoggedIn();


  if (!isLoggedInUser) {
    router.push("/login");
    localStorage.setItem("redirectAfterLoginPath", pathName);
  }
  else{
      return <>{children}</>;
    }
    
return <div className="min-h-screen"></div>;
};

export default PrivateRoute;
