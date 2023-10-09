import login from "@actions/auth/login/userLogin";
import register from "@actions/auth/register/register";

const Auth = {
  ...login,
  ...register,
};

export default Auth;
