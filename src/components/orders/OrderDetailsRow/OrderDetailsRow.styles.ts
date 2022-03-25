import tw from "twin.macro";
import { IOrderDetailsRowStyleProps, IOrderDetailsRowStyles } from "./OrderDetailsRow.types";

// unused placeholder props must starts with _ because of eslint rule, change it when used
export function getStyles({ striped }: IOrderDetailsRowStyleProps): IOrderDetailsRowStyles {
  return {
    root: [
      striped && {
        ":nth-of-type(4n-1)": tw`bg-background`,
        ":nth-of-type(4n)": tw`bg-background`,
      },
    ],
    btnPayment: tw`w-full text-white rounded-xxs px-5 bg-whatsapp`,
    btnDelivery: tw`w-full text-white rounded-xxs px-5 bg-inner00`,
    discount: tw`w-5 text-secondary00 bg-secondary01 px-2 rounded ml-2.5 font-bold`,
    productImg: tw`h-20 w-20 object-contain pt-6`,
  };
}
