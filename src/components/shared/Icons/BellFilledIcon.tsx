import IconProps from "./IconProps";
import IconWrapper from "./IconWrapper";

export default function BellFilledIcon({ ...wrapperProps }: IconProps): React.ReactElement {
  return (
    <IconWrapper viewBox={"0 0 22 24"} width={22} height={24} {...wrapperProps}>
      <path d="M7.04086 20C7.04086 22.2091 8.81331 24 10.9997 24C13.1862 24 14.9586 22.2091 14.9586 20H20.02C20.2574 20 20.4928 19.9569 20.7151 19.8727C21.7387 19.4848 22.2573 18.332 21.8734 17.2978L19.0231 9.61798C18.0868 7.09508 16.0674 5.2079 13.6186 4.41483C13.8421 3.99334 13.9689 3.51163 13.9689 3C13.9689 1.34315 12.6396 0 10.9997 0C9.35991 0 8.03058 1.34315 8.03058 3C8.03058 3.51163 8.15734 3.99334 8.38189 4.41343C5.93211 5.2079 3.9127 7.09508 2.97634 9.61798L0.126033 17.2978C0.042691 17.5223 0 17.7602 0 18C0 19.1046 0.886224 20 1.97944 20H7.04086Z" />
    </IconWrapper>
  );
}
