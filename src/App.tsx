import React, { ReactElement } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { SellerHeader } from "./components/shared/SellerHeader";
import { LeftSidebar } from "./components/shared/LeftSidebar";
import { getListing, getRegisterWizard, getOrders } from "./routes";
import { RegisterWizard } from "./components/RegisterWizard";
import { Orders } from "./components/orders/OrdersPage";
import { ListingPage } from "./components/listing/ListingPage";

function App(): ReactElement {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <SellerHeader />
          <div className="bg-background flex flex-1">
            <div className="w-64">
              <LeftSidebar />
            </div>
            <div className="flex-grow">
              <Switch>
                <Route path={getOrders()}>
                  <Orders />
                </Route>
                <Route path={getListing()}>
                  <ListingPage />
                </Route>
                <Route path={getRegisterWizard()}>
                  <RegisterWizard />
                </Route>
                <Route>Default route TBD</Route>
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
