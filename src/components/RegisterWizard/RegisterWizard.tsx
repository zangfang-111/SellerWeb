import { useParams, Redirect } from "react-router-dom";
import { Login } from "./Login";
import { Signup } from "./Signup";
import { SellerType } from "./SellerType";
import { Billing } from "./Billing";
import { Store } from "./Store";
import { getRegisterWizardLogin } from "../../routes";

export const RegisterWizard = (): JSX.Element => {
  const { step } = useParams<{ step: "login" | "signup" | "billing" | "store" | "seller-type" }>();

  switch (step) {
    case "signup":
      return <Signup />;
    case "login":
      return <Login />;
    case "seller-type":
      return <SellerType />;
    case "billing":
      return <Billing />;
    case "store":
      return <Store />;
    default:
      return <Redirect to={getRegisterWizardLogin()} />;
  }
};
