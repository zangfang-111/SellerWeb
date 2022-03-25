import { classNamesFunction, styled } from "@fluentui/utilities";
import classnames from "classnames";
import React from "react";
import { getStyles } from "./TableRow.styles";
import { ITableRowProps, ITableRowStyleProps, ITableRowStyles } from "./TableRow.types";

const getClassNames = classNamesFunction<ITableRowStyleProps, ITableRowStyles>();

const TableRowBase = ({ styles, item, columns, striped = false }: ITableRowProps) => {
  const classNames = getClassNames(styles, { striped });
  return (
    <tr className={classNames.root}>
      {columns.map((column) => {
        const { onRender, bodyClassName, className, fieldName, key, minimum } = column;
        return (
          <td
            key={key}
            className={classnames(
              "bold text-grey80 text-sm py-8",
              bodyClassName,
              className,
              minimum && classNames.minimumColumn
            )}
          >
            {/* @ts-ignore: Generic component, type is ensured by outside */}
            {onRender ? onRender(item) : item[fieldName]}
          </td>
        );
      })}
    </tr>
  );
};

export const TableRow = styled<ITableRowProps, ITableRowStyleProps, ITableRowStyles>(TableRowBase, getStyles);
