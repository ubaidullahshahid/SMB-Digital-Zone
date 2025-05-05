"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "@/store/store";
import { ComponentType, JSX } from "react";
import { RootState } from "@/store/store";

function UnProtectedRoute<P extends JSX.IntrinsicAttributes>(
  WrappedComponent: ComponentType<P>
) {
  const ComponentWithAuth = (props: P) => {
    const router = useRouter();
    const { user, userLoading } = useSelector(
      (state: RootState) => state.currentUser
    );

    useEffect(() => {
      if (user?.email) {
        router.push("/");
      }
    }, [user, router]);

    if (user?.email || userLoading) {
      return (
        <div className="h-screen flex justify-center items-center">
          Loading...
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };

  return ComponentWithAuth;
}

export default UnProtectedRoute;
