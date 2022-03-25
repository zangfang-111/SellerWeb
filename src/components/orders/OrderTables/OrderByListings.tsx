import { FC } from "react";

import { OrderListingsRow } from "../OrderListingsRow";
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
    key: "retail",
    name: "Retail Price",
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
    key: "returned",
    name: "Returned",
  },
  {
    key: "delivered",
    name: "Delivered",
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
  const { id, imageUrl, name, retailPrice, wholesale, total, returned, delivered, status } = props;

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
      tdClass: "w-24",
      classes: "w-5 text-grey60 line-through",
      value: `$${retailPrice}.00`,
    },
    {
      classes: "w-5 text-primary01 font-bold",
      value: `$${wholesale}.00`,
    },
    {
      tdClass: "w-24",
      classes: "text-grey80 border-2 border-grey80 rounded-xxs py-2 px-5 font-bold",
      value: `${total}`,
    },
    {
      tdClass: "w-24",
      classes: "text-primary01 border-2 border-primary01 rounded-xxs py-2 px-6 font-bold",
      value: `${returned}`,
    },
    {
      classes: "text-whatsapp border-2 border-whatsapp rounded-xxs py-2 px-5 font-bold",
      value: `${delivered}`,
    },
    {
      classes: "w-8 text-secondary00 border-2 border-secondary00 rounded-xxs py-2 px-6 font-bold",
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

  return <OrderListingsRow renderData={renderData} />;
};

// get key ITableProps define.
const getKey = (item: OrderListings) => item.id;

// without any props.
interface Props {}

// Orders by listings table component.
export const OrderByListings: FC<Props> = () => (
  <Table
    onRenderRow={renderRow}
    getKey={getKey}
    columns={tableColumns}
    itemsPerPage={5}
    items={mockOrderLisgings}
    pageButtonNumber={5}
  />
);
