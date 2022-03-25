import IconProps from "./IconProps";
import IconWrapper from "./IconWrapper";

export default function CreditcardFilledIcon({ ...wrapperProps }: IconProps): React.ReactElement {
  return (
    <IconWrapper viewBox={"0 0 24 16"} width={24} height={16} {...wrapperProps}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 3.24069V3.4442C24 3.75544 23.7478 4.00779 23.4368 4.00779H0.563233C0.252187 4.00779 0 3.75544 0 3.4442V3.24069C0 1.45089 1.44995 0 3.23859 0H20.7614C22.5501 0 24 1.45089 24 3.24069ZM0 12.7593V6.54404C0 6.23279 0.252187 5.98044 0.563233 5.98044H23.4368C23.7478 5.98044 24 6.23279 24 6.54404V12.7593C24 14.5491 22.5501 16 20.7614 16H3.23859C1.44995 16 0 14.5491 0 12.7593ZM4.49023 10.4892H5.99219C6.53655 10.4892 6.97784 10.0477 6.97784 9.50293C6.97784 8.95821 6.53655 8.51663 5.99219 8.51663H4.49023C3.94587 8.51663 3.50457 8.95821 3.50457 9.50293C3.50457 10.0477 3.94587 10.4892 4.49023 10.4892Z"
      />
    </IconWrapper>
  );
}
