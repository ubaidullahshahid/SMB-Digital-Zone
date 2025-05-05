"use client";

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import AuthLayout from "@/components/authLayout";
import Input from "@/components/UI/input";
import { registerValidate } from "@/validations/authValidation";
import { AuthPayload } from "@/types/authPayload";
import dynamic from "next/dynamic";
import Link from "next/link";
import { registerUser } from "@/API/auth/registerUser";
import { useSelector } from "@/store/store";
import UnProtectedRoute from "../AuthenticRouting/unprotected";
const AuthButton = dynamic(() => import("@/components/UI/authButton"), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

const errorStyle = "text-red-500 text-[10px] mt-2";
const initialValues: AuthPayload = { email: "", password: "" };
const SignupPage = () => {
  const { authLoading } = useSelector((state) => state.currentUser);
  const handleSubmit = async (data: AuthPayload) => {
    await registerUser(data);
  };
  return (
    <AuthLayout>
      <div className="bg-transparent rounded-xl w-full max-w-[312px] z-1">
        <div className="w-full flex justify-center mb-[75px] 2xl:mb-[150px]">
          <img src="/images/logo.png" alt="logo" />
        </div>
        <div className="flex flex-col  justify-center">
          <h2 className="text-white text-[27px] font-[700]">
            Create an Account!
          </h2>
          <p className="text-white opacity-[50%] mt-[9px] font-[500] text-[15px]">
            Create a new account here.
          </p>
          <Formik
            initialValues={initialValues}
            validate={registerValidate}
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
              <Link
                href="/signin"
                className="text-end text-[#FFFFFF80] hover:text-white transition-all duration-300 font-[400] text-[12px]"
              >
                You already have an account? Click here
              </Link>
              <AuthButton type="submit" disabled={authLoading}>
                {authLoading ? "loading..." : "Sign up"}
              </AuthButton>
            </Form>
          </Formik>
        </div>
      </div>
    </AuthLayout>
  );
};

export default UnProtectedRoute(SignupPage);
