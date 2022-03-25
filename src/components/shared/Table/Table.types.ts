import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";
import { ReactNode } from "react";

export interface ITableProps<T = unknown> {
  styles?: IStyleFunctionOrObject<ITableStyleProps, ITableStyles>;
  columns: ITableColumn<T>[];
  items: T[];
  getKey: (item: T) => string | number;
  striped?: boolean;
  onRenderRow?: (item: T) => ReactNode;
  itemsPerPage?: number;
  pageButtonNumber?: number;
}

export interface ITableStyleProps {}

export interface ITableStyles {
  root?: IStyle;
  table: IStyle;
}

export interface ITableColumn<T = unknown> {
  key: string;
  name: string;
  fieldName?: keyof T;
  /**
   * className add to body and head
   */
  className?: string;
  /**
   * className only add to body
   */
  bodyClassName?: string;
  onRender?: (item: T) => ReactNode;
  /**
   * If true, the column is as narrow as possible
   * @default false
   */
  minimum?: boolean;
}
