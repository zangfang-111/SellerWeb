import faker from "faker";
import { OrderDetails, OrderListings } from "../models/OrdersModel";

// order listings mock data define.
export const mockOrderLisgings: OrderListings[] = [];

faker.seed(1);
for (let i = 0; i < 20; i++) {
  mockOrderLisgings.push({
    id: `#010${i}`,
    imageUrl: faker.image.image(),
    name: faker.commerce.productName(),
    retailPrice: Number(faker.commerce.price(50, 100)),
    wholesale: Number(faker.commerce.price(50, 100)),
    total: 50,
    returned: 5,
    delivered: 15,
    status: "In progress",
  });
}

// all orders mock data define.
export const mockOrderDetails: OrderDetails[] = [];

faker.seed(1);
for (let i = 0; i < 20; i++) {
  mockOrderDetails.push({
    id: `#010${i}`,
    imageUrl: faker.image.image(),
    name: faker.commerce.productName(),
    retailPrice: 72.0,
    wholesale: 54.0,
    discount: "30% OFF",
    paymentStatus: "Accepted Listings",
    deliveryStatus: "Unfulfilled",
    asiNumber: faker.random.words(),
    skUnit: faker.random.words(),
    quantity: faker.datatype.number(1000),
    orderDate: faker.date.recent().toISOString(),
    shipment: faker.date.recent().toISOString(),
    deliveryDate: faker.date.soon().toISOString(),
    onlineStor: faker.random.words(),
    address: faker.random.words(),
  });
}
