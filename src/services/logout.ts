// import { useNavigate } from "react-router-dom";
import { alertActions } from "../components/component/alertActions";

export const doLogoutplatform = () => {
  //   const nav = useNavigate();
  localStorage.removeItem("account");
  localStorage.removeItem("token");
  localStorage.removeItem("paid");

  alertActions.success("Logout successful");
  window.location.href = "/";
  //   nav("/", { replace: true });
};
