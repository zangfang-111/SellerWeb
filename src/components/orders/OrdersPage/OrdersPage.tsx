import { useState } from "react";
import { styled, classNamesFunction } from "@fluentui/utilities";

import { getStyles } from "./OrdersPage.styles";
import { IOrdersProps, IOrdersStyleProps, IOrdersStyles } from "./OrdersPage.type";

import { Field } from "../../shared/Field";
import { ISelectOption, Select } from "../../shared/Select";
import { TableToolbar } from "../../shared/Table/TableToolbar";

import { dateOptions, productTypeOptions, orderTabs, renderTables } from "./utils";

// get class names.
const getClassNames = classNamesFunction<IOrdersStyleProps, IOrdersStyles>();

/**
 * Order base component.
 *
 * @param {*} styles
 * @returns {Component}
 *
 */
const OrdersBase = ({ styles }: IOrdersProps) => {
  const classNames = getClassNames(styles);
  const [activeTabKey, onTabChange] = useState("AllOrders");
  const [selectedDateOption, setSelectedDateOption] = useState<ISelectOption>(dateOptions[0]);
  const [selectedTypeOption, setSelectedTypeOption] = useState<ISelectOption>(productTypeOptions[0]);

  return (
    <div className={classNames.root}>
      <div className="relative">
        <div className="text-grey80 text-2xl font-semibold pt-3">Orders</div>
      </div>
      <div className="mt-3">
        <div className="space-x-3 flex">
          <div className="w-46">
            <Field label="Date" materialStyleLabel={false}>
              <Select
                options={dateOptions}
                selectedOption={selectedDateOption}
                onSelectedOptionChange={setSelectedDateOption}
              />
            </Field>
          </div>
          <div className="w-46">
            <Field label="Product" materialStyleLabel={false}>
              <Select
                options={productTypeOptions}
                selectedOption={selectedTypeOption}
                onSelectedOptionChange={setSelectedTypeOption}
              />
            </Field>
          </div>
        </div>
      </div>
      <div className="mt-3 bg-white">
        <TableToolbar tabs={orderTabs} activeTabKey={activeTabKey} onTabChange={onTabChange} />
        <div className="p-4 pt-0">{renderTables.map((r) => r.key === activeTabKey && <r.component key={r.key} />)}</div>
      </div>
    </div>
  );
};

export const Orders = styled<IOrdersProps, IOrdersStyleProps, IOrdersStyles>(OrdersBase, getStyles);
