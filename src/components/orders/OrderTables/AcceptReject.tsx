import { FC } from "react";

import { OrderReturnRow } from "../OrderReturnRow";
import { ITableColumn } from "../../shared/Table";
import { StrongTypedTable } from "../../shared/Table";
import { OrderListings } from "../../../models/OrdersModel";
import { IOrderRowColumn } from "../OrderReturnRow/OrderReturnRow.types";
import { mockOrderLisgings } from "../../../mockData/mockOrdersData";

// details table columns define.
const tableColumns: ITableColumn<OrderListings>[] = [
  {
    key: "id",
    name: "Order",
  },
  {
    key: "image",
    name: "Product Image",
    className: "pl-2",
  },
  {
    key: "name",
    name: "Product Name",
  },
  {
    key: "wholesale",
    name: "Wholesale",
  },
  {
    key: "total",
    name: "Total Orders",
  },
  {
    key: "status",
    name: "Order Status",
  },
  {
    key: "actions",
    name: "Actions",
  },
];

// get render data with class name and listings value.
const getRenderData = ({ ...props }: OrderListings) => {
  const { id, imageUrl, name, wholesale, total, status } = props;

  return [
    {
      classes: "w-6 text-messenger font-bold text-sm",
      value: id,
    },
    {
      classes: "h-20 w-20 object-contain pt-6",
      value: imageUrl,
      type: "img",
    },
    {
      classes: "text-messenger font-bold",
      value: name,
    },
    {
      tdClass: "w-2/12",
      classes: "w-5 text-primary01 font-bold",
      value: `$${wholesale}.00`,
    },
    {
      tdClass: "w-40",
      classes: "w-full text-grey80 border-2 border-grey80 rounded-xxs py-2 px-14 font-bold",
      value: `${total}`,
    },
    {
      classes: "w-full text-secondary00 border-2 border-secondary00 rounded-xxs py-2 px-8 font-bold",
      value: status,
    },
  ];
};

// Strong typed table define.
const Table = StrongTypedTable<OrderListings>();

// render row: for orders-by-listing and return-accept/reject.
const renderRow = (item: OrderListings) => {
  // get render data.
  const renderData: IOrderRowColumn[] = getRenderData(item);

  return <OrderReturnRow renderData={renderData} striped />;
};

// get key ITableProps define.
const getKey = (item: OrderListings) => item.id;

// without any props.
interface Props {}

// Accept / Reject table component.
export const AcceptReject: FC<Props> = () => (
  <Table
    onRenderRow={renderRow}
    getKey={getKey}
    columns={tableColumns}
    itemsPerPage={5}
    items={mockOrderLisgings}
    pageButtonNumber={5}
  />
);
