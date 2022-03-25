import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";

export interface IOrderReturnRowProps {
  styles?: IStyleFunctionOrObject<IOrderReturnRowStyleProps, IOrderReturnRowStyles>;
  renderData: IOrderRowColumn[];
  striped?: boolean;
}

export interface IOrderReturnRowStyleProps {
  striped: boolean;
}

export interface IOrderReturnRowStyles {
  root?: IStyle;
  action?: IStyle;
}

export interface IOrderRowColumn {
  classes?: string;
  value?: string;
  type?: string;
  tdClass?: string;
}
