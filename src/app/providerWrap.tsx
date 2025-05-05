"use client";
import { store } from "@/store/store";
import { Provider } from "react-redux";
import AuthProvider from "./AuthProvider";

const ProviderWrap = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <AuthProvider>{children}</AuthProvider>
    </Provider>
  );
};

export default ProviderWrap;
