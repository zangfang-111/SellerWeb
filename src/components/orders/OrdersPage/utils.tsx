import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDay, faCalendarWeek } from "@fortawesome/free-solid-svg-icons";

import { ISelectOption } from "../../shared/Select";
import { AllOrders, OrderByListings, AcceptReject } from "../OrderTables";

// date select options
export const dateOptions: ISelectOption[] = [
  {
    value: "7d",
    display: (
      <div>
        <FontAwesomeIcon icon={faCalendarDay} className="mr-2" /> 7 days
      </div>
    ),
  },
  {
    value: "2w",
    display: (
      <div>
        <FontAwesomeIcon icon={faCalendarWeek} className="mr-2" /> 2 weeks
      </div>
    ),
  },
];

// product type select options
export const productTypeOptions: ISelectOption[] = [
  {
    value: "all",
    display: (
      <div>
        <FontAwesomeIcon icon={faCalendarDay} className="mr-2" /> All Product Type
      </div>
    ),
  },
  {
    value: "a",
    display: (
      <div>
        <FontAwesomeIcon icon={faCalendarDay} className="mr-2" /> Product Type A
      </div>
    ),
  },
];

// tabs define as: "All Orders", "Orders By Listings", "Return Accept / Reject".
export const orderTabs = [
  {
    key: "AllOrders",
    label: "All Orders",
  },
  {
    key: "OrderByListings",
    label: "Orders By Listings",
  },
  {
    key: "AcceptReject",
    label: "Return Accept / Reject",
  },
];

// render table array define.
export const renderTables = [
  {
    key: "AllOrders",
    component: AllOrders,
  },
  {
    key: "OrderByListings",
    component: OrderByListings,
  },
  {
    key: "AcceptReject",
    component: AcceptReject,
  },
];
