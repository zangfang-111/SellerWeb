import { classNamesFunction, styled } from "@fluentui/utilities";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkSquareAlt, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import { getStyles } from "./OrderReturnRow.styles";
import { IOrderReturnRowProps, IOrderReturnRowStyleProps, IOrderReturnRowStyles } from "./OrderReturnRow.types";

// get class names.
const getClassNames = classNamesFunction<IOrderReturnRowStyleProps, IOrderReturnRowStyles>();

/**
 * Orders general row component: for listing and return.
 *
 * @param {*} styles
 * @param {Object} item
 * @param {Boolean} striped
 *
 * @returns {Component}
 *
 */
const OrderReturnRowBase = ({ styles, renderData, striped = false }: IOrderReturnRowProps) => {
  // get class names
  const classNames = getClassNames(styles, { striped });

  return (
    <tr className={classNames.root}>
      {renderData.map((r) => (
        <td key={r.value} className={r.tdClass}>
          {r.type === "img" ? (
            <img src={r.value} className={r.classes} alt="Product image" />
          ) : (
            <span className={r.classes}>{r.value}</span>
          )}
        </td>
      ))}
      <td className="w-16">
        <span className={classNames.action}>
          <FontAwesomeIcon icon={faExternalLinkSquareAlt} className="mr-2" />
          <FontAwesomeIcon icon={faChevronRight} className="mr-2" />
        </span>
      </td>
    </tr>
  );
};

export const OrderReturnRow = styled<IOrderReturnRowProps, IOrderReturnRowStyleProps, IOrderReturnRowStyles>(
  OrderReturnRowBase,
  getStyles
);
