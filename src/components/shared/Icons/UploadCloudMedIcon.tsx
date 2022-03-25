import IconProps from "./IconProps";
import IconWrapper from "./IconWrapper";

export default function UploadCloudMedIcon({ ...wrapperProps }: IconProps): React.ReactElement {
  return (
    <IconWrapper viewBox={"0 0 24 18"} width={24} height={18} {...wrapperProps}>
      <path d="M12 8C12.28 8 12.5331 8.11507 12.7146 8.3005L15.5497 11.1355C15.9403 11.5261 15.9403 12.1592 15.5497 12.5497C15.1592 12.9403 14.5261 12.9403 14.1355 12.5497L12.9991 11.413L13 17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17L10.9991 11.364L9.81421 12.5497C9.42369 12.9403 8.79052 12.9403 8.4 12.5497C8.00948 12.1592 8.00948 11.5261 8.4 11.1355L11.2284 8.30711C11.3794 8.15614 11.5666 8.06353 11.7621 8.02929C11.8379 8.00991 11.9178 8 12 8ZM11 0C13.9607 0 16.5457 1.60827 17.9291 3.99884L18 4C21.3137 4 24 6.68629 24 10C24 13.2384 21.4344 15.8776 18.2249 15.9959L18 16H16.898C16.433 15.9483 16.0613 15.5816 16.0069 15.1178L16 15C16 14.4872 16.386 14.0645 16.8834 14.0067L17 14L17.9632 14.0003L18.1513 13.9972C20.295 13.9182 22 12.1531 22 10C22 7.8578 20.316 6.10892 18.1698 6.00465L16.7649 5.98007L16.198 5.00058C15.1314 3.15736 13.1676 2 11 2C7.7616 2 5.12243 4.56558 5.00384 7.74153L4.99968 7.96408L5.03032 9.66959L3.49964 10.0626C2.62477 10.2872 2 11.0819 2 12C2 13.0544 2.81588 13.9182 3.85072 13.9945L3.99998 14H7.101C7.56688 14.0516 7.93869 14.4184 7.99313 14.8822L8 15C8 15.5128 7.61396 15.9355 7.11662 15.9933L7 16H4C1.79086 16 0 14.2091 0 12C0 10.1353 1.27588 8.5687 3.00225 8.12544L3 8C3 3.58172 6.58172 0 11 0Z" />
    </IconWrapper>
  );
}