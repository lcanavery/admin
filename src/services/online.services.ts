import { AxiosInstance } from "axios";
import { UserLogin, UserSignIn } from "../types/Auth.types";
import config, { VARIANT } from "../config";
import { variants } from "../constants/variants";
const onlineServices = (instance: AxiosInstance) => {
  // const login = (user: UserLogin) => instance.post("/auth/login", user);
  const login = (user: UserLogin) => {
    let variantToSend;
    switch (VARIANT) {
      case variants.COLORIN:
        variantToSend = 2;
        break;
      case variants.INDUSTRIA:
        variantToSend = 3;
        break;
      case variants.TERSUAVE:
        variantToSend = 4;
        break;
    }
    return instance.post(`/auth/login/?variant=${variantToSend}`, user);
  };
  const refreshToken = () =>
    instance.put("/auth/refresh").then((r) => r.data.result);
  const signIn = (user: UserSignIn) => instance.post("/account/signin", user);
  const resetPass = (usu_mail: string) => {
    // instance.defaults.headers.common["x-api-key"] = config.apiKey;
    return instance.patch(
      "/account/password-recovery",
      { usu_mail },
      { headers: { ["x-api-key"]: config.apiKey } }
    );
  };
  const changePass = (new_pass: string) =>
    instance.post("/account/changePass", { new_pass });
  return {
    login,
    signIn,
    resetPass,
    changePass,
    refreshToken,
  };
};
export default onlineServices;
