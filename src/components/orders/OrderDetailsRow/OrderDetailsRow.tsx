import dayjs from "dayjs";
import { classNamesFunction, styled } from "@fluentui/utilities";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkSquareAlt, faEllipsisV } from "@fortawesome/free-solid-svg-icons";

import { getStyles } from "./OrderDetailsRow.styles";
import { IPopoverMenuProps, PopoverMenu } from "../../shared/PopoverMenu";
import { IOrderDetailsRowProps, IOrderDetailsRowStyleProps, IOrderDetailsRowStyles } from "./OrderDetailsRow.types";

// get class names.
const getClassNames = classNamesFunction<IOrderDetailsRowStyleProps, IOrderDetailsRowStyles>();

// popover menu items.
const popoverMenuItems = [
  {
    itemKey: "pause",
    label: "Pause Listings",
  },
  {
    itemKey: "open",
    label: "Open Product Details",
  },
  {
    itemKey: "cancel",
    label: "Cancel Orders",
  },
  {
    itemKey: "return",
    label: "Return  Payment",
  },
  {
    itemKey: "delete",
    label: "Delete Listing",
  },
];

// popper options.
const popperOptions: IPopoverMenuProps["popperOptions"] = {
  placement: "bottom-start",
};

/**
 * Order details row component.
 *
 * @param {*} styles
 * @param {Object} item
 * @param {Boolean} striped
 *
 * @returns
 *
 */
const OrderDetailsRowBase = ({ styles, item, striped = false }: IOrderDetailsRowProps) => {
  const classNames = getClassNames(styles, { striped });

  const {
    id,
    imageUrl,
    name,
    retailPrice,
    wholesale,
    discount,
    paymentStatus,
    deliveryStatus,
    asiNumber,
    skUnit,
    quantity,
    orderDate,
    shipment,
    deliveryDate,
    onlineStor,
    address,
  } = item;

  // date format define.
  const dateFormat = "MMM D, YYYY hh:mm:a";

  // formated date: orderDate, shipment, deliveryDate.
  const fOrderDate = dayjs(orderDate).format(dateFormat);
  const fShipment = dayjs(shipment).format(dateFormat);
  const fDeliveryDate = dayjs(deliveryDate).format(dateFormat);

  return (
    <>
      <tr className={classNames.root}>
        <td>
          <span className="w-6 text-messenger font-bold text-sm">{id}</span>
        </td>
        <td>
          <img src={imageUrl} className={classNames.productImg} alt="Product image" />
        </td>
        <td>
          <span className="text-messenger font-bold">{name}</span>
        </td>
        <td>
          <span className="w-5 text-grey60 line-through">${retailPrice}.00</span>
        </td>
        <td>
          <span className="w-5 text-primary01 font-bold">${wholesale}.00</span>
          <span className={classNames.discount}>{discount}</span>
        </td>
        <td className="w-40">
          <span className={classNames.btnPayment}>{paymentStatus}</span>
        </td>
        <td className="pl-4">
          <span className={classNames.btnDelivery}>{deliveryStatus}</span>
        </td>
        <td className="w-16">
          <span className="text-grey80 flex justify-between items-center">
            <FontAwesomeIcon icon={faExternalLinkSquareAlt} className="mr-2" />
            <PopoverMenu
              referenceNode={<FontAwesomeIcon icon={faEllipsisV} />}
              items={popoverMenuItems}
              popperOptions={popperOptions}
            />
          </span>
        </td>
      </tr>
      <tr className={classNames.root}>
        <td colSpan={2} />
        <td colSpan={1} className="align-top">
          <p className="text-grey80">
            ASIN: <span className="text-black font-bold">{asiNumber}</span>
          </p>
          <p className="text-grey80">
            SKU: <span className="text-black font-bold">{skUnit}</span>
          </p>
          <p className="text-grey80">
            QTY: <span className="text-black font-bold">{quantity}</span>
          </p>
        </td>
        <td colSpan={2} className="align-top">
          <p className="text-grey80 flex justify-between w-64">
            Order Date <span className="text-black font-bold">: {fOrderDate}</span>
          </p>
          <p className="text-grey80 flex justify-between w-64">
            Shipment <span className="text-black font-bold">: {fShipment}</span>
          </p>
          <p className="text-grey80 flex justify-between w-64">
            Delivery <span className="text-black font-bold">: {fDeliveryDate}</span>
          </p>
        </td>
        <td colSpan={3} className="align-top">
          <div className="bg-grey10 rounded-xxs p-2 mb-1">
            <span className="w-5 text-grey80">
              <span className="text-grey80 font-bold">Online Stor: </span>
              {onlineStor}
            </span>
          </div>
          <div className="bg-grey10 rounded-xxs p-2">
            <span className="w-5 text-grey80">
              <p className="text-grey80 font-bold">Address: </p>
              {address}
            </span>
          </div>
        </td>
      </tr>
    </>
  );
};

export const OrderDetailsRow = styled<IOrderDetailsRowProps, IOrderDetailsRowStyleProps, IOrderDetailsRowStyles>(
  OrderDetailsRowBase,
  getStyles
);
