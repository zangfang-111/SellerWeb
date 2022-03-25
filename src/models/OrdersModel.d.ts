// order by listings data model.
export interface OrderListings {
  id: string;
  imageUrl: string;
  name: string;
  retailPrice: number;
  wholesale: number;
  total: number;
  returned: number;
  delivered: number;
  status: string;
}

// all orders data model.
export interface OrderDetails {
  id: string;
  imageUrl: string;
  name: string;
  retailPrice: number;
  wholesale: number;
  discount: string;
  paymentStatus: string;
  deliveryStatus: string;
  asiNumber: string;
  skUnit: string;
  quantity: number;
  orderDate: string;
  shipment: string;
  deliveryDate: string;
  onlineStor: string;
  address: string;
}
