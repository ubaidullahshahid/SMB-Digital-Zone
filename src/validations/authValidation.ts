import { AuthPayload } from "@/types/authPayload";
import * as Joi from "joi";

const registerValidationSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.empty": "Email is required",
      "string.email": "Enter a valid email",
    }),
  password: Joi.string().min(8).required().messages({
    "string.empty": "Password is required",
    "string.min": "Password must be at least 8 characters",
  }),
});

export const registerValidate = (values: AuthPayload) => {
  const result = registerValidationSchema.validate(values, {
    abortEarly: false,
  });
  const errors: Record<string, string> = {};
  if (result.error) {
    result.error.details.forEach((detail) => {
      if (detail.path[0]) errors[detail.path[0]] = detail.message;
    });
  }
  return errors;
};
const loginValidationSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.empty": "Email is required",
      "string.email": "Enter a valid email",
    }),
  password: Joi.string().min(8).required().messages({
    "string.empty": "Password is required",
    "string.min": "Password must be at least 8 characters",
  }),
});

export const loginValidate = (values: AuthPayload) => {
  const result = loginValidationSchema.validate(values, { abortEarly: false });
  const errors: Record<string, string> = {};
  if (result.error) {
    result.error.details.forEach((detail) => {
      if (detail.path[0]) errors[detail.path[0]] = detail.message;
    });
  }
  return errors;
};
