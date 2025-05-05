"use client";

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import AuthLayout from "@/components/authLayout";
import Input from "@/components/UI/input";
import { loginValidate } from "@/validations/authValidation";
import { AuthPayload } from "@/types/authPayload";
import dynamic from "next/dynamic";
import Link from "next/link";
import { loginUser } from "@/API/auth/loginUser";
import { useSelector } from "@/store/store";
import UnProtectedRoute from "../AuthenticRouting/unprotected";
const AuthButton = dynamic(() => import("@/components/UI/authButton"), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

const linkStyle =
  "text-end hover:text-white transition-all duration-300 text-[#FFFFFF80] font-[400] text-[12px]";
const errorStyle = "text-red-500 text-[10px] mt-2";
const initialValues: AuthPayload = { email: "", password: "" };

const SigninPage = () => {
  const { user, authLoading } = useSelector((state) => state.currentUser);

  const handleSubmit = async (values: AuthPayload) => {
    await loginUser(values);
  };

  return (
    <AuthLayout>
      <div className="bg-transparent rounded-xl w-full max-w-[312px] z-1">
        <div className="w-full flex justify-center mb-[75px] 2xl:mb-[150px]">
          <img src="/images/logo.png" alt="logo" />
        </div>
        <div className="flex flex-col  justify-center">
          <h2 className="text-white text-[27px] font-[700]">
            Welcome Back, 👋
          </h2>
          <p className="text-white opacity-[50%] mt-[9px] font-[500] text-[15px]">
            Sign in to your dashboard & start tracking your analytics.
          </p>
          <Formik
            initialValues={initialValues}
            validate={loginValidate}
            onSubmit={(values) => handleSubmit(values)}
          >
            <Form className="mt-[30px] flex flex-col gap-y-[18px]">
              <div>
                <Field
                  name="email"
                  label="Email"
                  as={Input}
                  type="email"
                  placeholder="Example@gmail.com"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className={errorStyle}
                />
              </div>
              <div>
                <Field
                  name="password"
                  label="Password"
                  as={Input}
                  type="password"
                  placeholder="At least 8 characters"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className={errorStyle}
                />
              </div>
              <div className="flex flex-col items-end gap-y-1">
                {" "}
                <Link href="#" className={linkStyle}>
                  Forgot Password?
                </Link>
                <Link href="/signup" className={linkStyle}>
                  You don't have an account? Click here
                </Link>
              </div>
              <AuthButton type="submit" disabled={authLoading}>
                {authLoading ? "loading..." : "Sign in"}
              </AuthButton>
            </Form>
          </Formik>
        </div>
      </div>
    </AuthLayout>
  );
};

export default UnProtectedRoute(SigninPage);
