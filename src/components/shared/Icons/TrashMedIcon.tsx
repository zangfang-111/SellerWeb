import IconProps from "./IconProps";
import IconWrapper from "./IconWrapper";

export default function TrashMedIcon({ ...wrapperProps }: IconProps): React.ReactElement {
  return (
    <IconWrapper viewBox={"0 0 24 24"} width={24} height={24} {...wrapperProps}>
      <path d="M13.8377 0C15.129 0 16.2754 0.82629 16.6838 2.05132L17.333 4H23C23.5523 4 24 4.44772 24 5C24 5.55228 23.5523 6 23 6H21.8L20.2701 21.2985C20.1168 22.8321 18.8263 24 17.285 24H6.71496C5.17371 24 3.88321 22.8321 3.72985 21.2985L2.2 6H1C0.447715 6 0 5.55228 0 5C0 4.44772 0.447715 4 1 4H6.666L7.31623 2.05132C7.72457 0.82629 8.87099 0 10.1623 0H13.8377ZM19.789 6H4.21L5.71993 21.0995C5.76711 21.5714 6.13727 21.9394 6.59802 21.9932L6.71496 22H17.285C17.7593 22 18.1623 21.6683 18.2617 21.2152L18.2801 21.0995L19.789 6ZM12 8C12.5523 8 13 8.44772 13 9V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V9C11 8.44772 11.4477 8 12 8ZM16 8C16.5523 8 17 8.44772 17 9V19C17 19.5523 16.5523 20 16 20C15.4477 20 15 19.5523 15 19V9C15 8.44772 15.4477 8 16 8ZM8 8C8.55228 8 9 8.44772 9 9V19C9 19.5523 8.55228 20 8 20C7.44772 20 7 19.5523 7 19V9C7 8.44772 7.44772 8 8 8ZM13.8377 2H10.1623C9.77098 2 9.41959 2.22763 9.25667 2.57581L9.21359 2.68377L8.774 4H15.225L14.7864 2.68377C14.6627 2.31255 14.3356 2.05118 13.9538 2.00672L13.8377 2Z" />
    </IconWrapper>
  );
}
