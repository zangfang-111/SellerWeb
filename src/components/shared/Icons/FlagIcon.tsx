import IconProps from "./IconProps";
import IconWrapper from "./IconWrapper";

export default function FlagIcon({ ...wrapperProps }: IconProps): React.ReactElement {
  return (
    <IconWrapper viewBox={"0 0 21 24"} width={21} height={24} {...wrapperProps}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.986106 0H1.4339C1.97852 0 2.42001 0.441485 2.42001 0.986105V23.0139C2.42001 23.5585 1.97852 24 1.4339 24H0.986106C0.441485 24 0 23.5585 0 23.0139V0.986105C0 0.441485 0.441485 0 0.986106 0ZM19.8507 3.05835C19.9968 2.92669 20.2087 2.89835 20.3843 2.98689C20.557 3.08163 20.6535 3.27284 20.6272 3.46804C20.5891 3.86819 19.6411 13.2862 13.8865 13.2862C12.7892 13.2534 11.7146 12.9664 10.7471 12.4478C9.86176 11.9959 8.88286 11.7577 7.88884 11.7523C6.36234 11.7851 4.88652 12.3059 3.67764 13.2386C3.55903 13.3433 3.39622 13.3823 3.24307 13.3427C2.98838 13.2768 2.83529 13.0169 2.90115 12.7622C2.92254 12.5452 2.91648 11.4734 2.90939 10.2184C2.90543 9.51719 2.90115 8.75877 2.90115 8.06033C2.86186 3.51619 2.85857 3.13595 3.04522 2.97218C3.06227 2.95723 3.08089 2.94408 3.10122 2.92973C6.56927 0.466846 9.53711 0.462082 12.5574 3.03929C13.9484 4.24453 15.0679 4.77808 16.2207 4.77808C17.3736 4.77808 18.5597 4.21595 19.8507 3.05835Z"
      />
    </IconWrapper>
  );
}
