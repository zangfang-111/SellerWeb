import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";
import { OrderDetails } from "../../../models/OrdersModel";

export interface IOrderDetailsRowProps {
  styles?: IStyleFunctionOrObject<IOrderDetailsRowStyleProps, IOrderDetailsRowStyles>;
  item: OrderDetails;
  striped?: boolean;
}

export interface IOrderDetailsRowStyleProps {
  striped: boolean;
}

export interface IOrderDetailsRowStyles {
  root?: IStyle;
  btnPayment?: IStyle;
  btnDelivery?: IStyle;
  discount?: IStyle;
  productImg?: IStyle;
}
