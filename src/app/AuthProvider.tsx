import { fetchCurrentUser } from "@/API/user/getCurrentUser";
import { setUserLoading } from "@/store/slices/currentUserSlice";
import { useSelector, useDispatch } from "@/store/store";
import React, { useEffect, useState } from "react";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { user, userLoading } = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const token = storedToken ? JSON.parse(storedToken) : null;
    if (token) {
      const getCurrentUser = async () => {
        await fetchCurrentUser(token);
      };
      getCurrentUser();
    } else {
      dispatch(setUserLoading(false));
    }
  }, [dispatch]);

  if (userLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        Loading...{" "}
      </div>
    );
  }
  return <>{children}</>;
};

export default AuthProvider;
