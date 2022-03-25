import { classNamesFunction, styled } from "@fluentui/utilities";
import { faDownload, faEllipsisV, faFilter, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useAutoControlled } from "../../hooks/useAutoControlled";
import { Tab } from "./Tab";
import { getStyles } from "./TableToolbar.styles";
import { ITableToolbarProps, ITableToolbarStyleProps, ITableToolbarStyles } from "./TableToolbar.types";

const getClassNames = classNamesFunction<ITableToolbarStyleProps, ITableToolbarStyles>();

const TableToolbarBase = ({ styles, tabs, onTabChange, activeTabKey }: ITableToolbarProps) => {
  const classNames = getClassNames(styles);
  const [activeTab, onTabKeyChange] = useAutoControlled({ value: activeTabKey, onChange: onTabChange });
  return (
    <div className={classNames.root}>
      <div className="flex space-x-8">
        {tabs.map((tab) => (
          <Tab tab={tab} onClick={onTabKeyChange} active={tab.key === activeTab} key={tab.key} />
        ))}
      </div>
      <div className="ml-auto flex-grow-0 text-grey80 space-x-4">
        <FontAwesomeIcon icon={faSearch} />
        <FontAwesomeIcon icon={faFilter} />
        <FontAwesomeIcon icon={faDownload} />
        <FontAwesomeIcon icon={faEllipsisV} />
      </div>
    </div>
  );
};

export const TableToolbar = styled<ITableToolbarProps, ITableToolbarStyleProps, ITableToolbarStyles>(
  TableToolbarBase,
  getStyles
);
