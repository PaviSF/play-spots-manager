//export * from '@actions/auth/forgotPassword/forgotPassword'
import * as login from "@actions/auth/login/userLogin";
import * as register from "@actions/auth/register/register";

const Auth = {
  ...login,
  ...register,
};

export default Auth;
