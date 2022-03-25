import IconProps from "./IconProps";

const WrongProductIcon: React.FC<IconProps> = ({ fill, width, height, className }) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.0341 2.7999L13.4347 1.1999H3.36588L1.76644 2.7999H15.0341ZM0.53193 2.90345L2.91788 0.517502C2.99228 0.442302 3.09388 0.399902 3.20028 0.399902H13.6003C13.7067 0.399902 13.8083 0.442302 13.8835 0.516702L16.2835 2.9167C16.3636 2.99684 16.4026 3.10272 16.4004 3.2079V6.3999C16.4004 6.6207 16.2212 6.7999 16.0004 6.7999H15.6004V8.0479C15.6004 8.2687 15.4212 8.4479 15.2004 8.4479C14.9796 8.4479 14.8004 8.2687 14.8004 8.0479V6.7999H2.00039V15.1999C2.00039 15.4199 2.18039 15.5999 2.40039 15.5999H8.00039C8.22119 15.5999 8.40039 15.7791 8.40039 15.9999C8.40039 16.2207 8.22119 16.3999 8.00039 16.3999H2.40039C1.73879 16.3999 1.20039 15.8615 1.20039 15.1999V6.7999H0.800391C0.579591 6.7999 0.400391 6.6207 0.400391 6.3999V3.1999C0.400391 3.08239 0.451152 2.97665 0.53193 2.90345ZM15.6004 5.9999H15.201L15.2004 5.9999H1.60039L1.59977 5.9999H1.20039V3.5999H15.6004V5.9999ZM9.20039 14.3999C9.20039 17.2671 11.5332 19.5999 14.4004 19.5999C17.2676 19.5999 19.6004 17.2671 19.6004 14.3999C19.6004 11.5327 17.2676 9.1999 14.4004 9.1999C11.5332 9.1999 9.20039 11.5327 9.20039 14.3999ZM10.0004 14.3999C10.0004 11.9743 11.9748 9.9999 14.4004 9.9999C15.4697 9.9999 16.4513 10.3836 17.2148 11.0205L11.021 17.2143C10.3841 16.4508 10.0004 15.4692 10.0004 14.3999ZM11.5867 17.7798C12.35 18.4164 13.3314 18.7999 14.4004 18.7999C16.826 18.7999 18.8004 16.8255 18.8004 14.3999C18.8004 13.3309 18.4169 12.3495 17.7803 11.5862L11.5867 17.7798ZM6.40039 9.19991H10.4004C10.6212 9.19991 10.8004 9.02071 10.8004 8.7999C10.8004 8.5791 10.6212 8.3999 10.4004 8.3999H6.40039C6.17959 8.3999 6.00039 8.5791 6.00039 8.7999C6.00039 9.02071 6.17959 9.19991 6.40039 9.19991Z"
      fill={fill}
    />
  </svg>
);

export default WrongProductIcon;
