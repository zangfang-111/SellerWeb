import tw from "twin.macro";
import { IOrderListingsRowStyleProps, IOrderListingsRowStyles } from "./OrderListingsRow.types";

// unused placeholder props must starts with _ because of eslint rule, change it when used
export function getStyles({ striped }: IOrderListingsRowStyleProps): IOrderListingsRowStyles {
  return {
    root: [
      striped && {
        ":nth-of-type(2n)": tw`bg-background`,
      },
    ],
    action: tw`text-grey80 flex justify-between`,
  };
}
