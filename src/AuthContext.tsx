import { useLocation, useNavigate } from "react-router-dom";
import services from "./services/api";
import config from "./config";
import menuItems from "./menu-items";
import _ from "lodash";
const AuthContext = ({ token, children, role, menu }: any) => {
  const location = useLocation();
  const ableRoutes = _.flatten(menuItems.items.map((a) => a.children));
  const navigate = useNavigate();
  if (token == null) {
    if (location.pathname !== "/" && location.pathname !== "/auth") {
      navigate("/");
      return null;
    } else {
      return children;
    }
  } else {
    services.setToken(token);

    if (
      location.pathname !== "/" &&
      // location.pathname !== "/auth" &&
      location.pathname !== config.forbiddenPath &&
      menu.length > 0 &&
      !ableRoutes.some((a) => {
        return (
          location.pathname.startsWith(a.url.split("?")[0]) &&
          // a.admitedRoles.includes(role)
          menu.includes(a.optionId)
        );
      })
    ) {
      navigate(config.forbiddenPath);
      return null;
    } else return children;
  }
};

export default AuthContext;
