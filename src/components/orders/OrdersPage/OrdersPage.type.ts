import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";

export interface IOrdersProps {
  styles?: IStyleFunctionOrObject<IOrdersStyleProps, IOrdersStyles>;
}

export interface IOrdersStyleProps {}

export interface IOrdersStyles {
  root?: IStyle;
  // content: IStyle;
}
