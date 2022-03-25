import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";

export interface IOrderListingsRowProps {
  styles?: IStyleFunctionOrObject<IOrderListingsRowStyleProps, IOrderListingsRowStyles>;
  renderData: IOrderRowColumn[];
  striped?: boolean;
}

export interface IOrderListingsRowStyleProps {
  striped: boolean;
}

export interface IOrderListingsRowStyles {
  root?: IStyle;
  action?: IStyle;
}

export interface IOrderRowColumn {
  classes?: string;
  value?: string;
  type?: string;
  tdClass?: string;
}
