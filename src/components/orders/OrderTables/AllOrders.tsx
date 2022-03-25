import { FC } from "react";

import { ITableColumn } from "../../shared/Table";
import { OrderDetailsRow } from "../OrderDetailsRow";
import { StrongTypedTable } from "../../shared/Table";
import { OrderDetails } from "../../../models/OrdersModel";
import { mockOrderDetails } from "../../../mockData/mockOrdersData";

// details table columns define.
const tableColumns: ITableColumn<OrderDetails>[] = [
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
    key: "paymentStatus",
    name: "Payment Status",
  },
  {
    key: "deliveryStatus",
    name: "Delivery Status",
  },
  {
    key: "actions",
    name: "Actions",
  },
];

// Strong typed table define.
const Table = StrongTypedTable<OrderDetails>();

// render details row: for all-orders page.
const renderRow = (item: OrderDetails) => <OrderDetailsRow item={item} striped />;

// get key ITableProps define.
const getKey = (item: OrderDetails) => item.id;

// without any props.
interface Props {}

// All orders table component.
export const AllOrders: FC<Props> = () => (
  <Table
    onRenderRow={renderRow}
    getKey={getKey}
    columns={tableColumns}
    itemsPerPage={4}
    items={mockOrderDetails}
    pageButtonNumber={5}
  />
);
