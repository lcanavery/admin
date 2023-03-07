// ==============================|| THEME CONFIG  ||============================== //
import { variants } from "./constants/variants";

const config = {
  defaultPath: "/venta",
  apiKey: "f0a7346f87d8d3f0e47a0894804ad42f97e0acc998818f7264ef7c0b379535fd",
  fontFamily: `'Public Sans', sans-serif`,
  i18n: "es",
  miniDrawer: false,
  container: true,
  mode: "light",
  presetColor: "default",
  themeDirection: "ltr",
  sessionExpire: 3600000,
  sessionExpireAlert: 3590000,
  apiBase: {
    online: "http://localhost:3009/api/",
    //  online: "http://157.230.3.203:2000/api/",
  },
  forbiddenPath: "/not-authorized",
};

export let VARIANT = "colorin";

//  = variants.TERSUAVE; //"industria"; // 'tersuave' || 'industria' || 'colorin'
export default config;
export const drawerWidth = 260;
export const drawerWidthMin = 70;
export const twitterColor = "#ff0000";
export const facebookColor = "#3b5998";
export const linkedInColor = "#0e76a8";
