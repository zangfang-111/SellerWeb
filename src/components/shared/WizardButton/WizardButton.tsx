import { classNamesFunction, styled } from "@fluentui/utilities";
import { faLongArrowAltLeft, faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { CustomButton } from "../CustomButton";
import { getStyles } from "./WizardButton.styles";
import {
  IWizardButtonProps,
  IWizardButtonStyleProps,
  IWizardButtonStyles,
  WizardButtonType,
} from "./WizardButton.types";

const getClassNames = classNamesFunction<IWizardButtonStyleProps, IWizardButtonStyles>();

const WizardButtonBase = ({ styles, buttonType, ...restProps }: IWizardButtonProps) => {
  const classNames = getClassNames(styles, { buttonType });
  return (
    <CustomButton
      rounded
      label={buttonType === WizardButtonType.Back ? "Back" : "Next"}
      iconLeft={buttonType === WizardButtonType.Back}
      icon={
        <FontAwesomeIcon
          icon={buttonType === WizardButtonType.Back ? faLongArrowAltLeft : faLongArrowAltRight}
          className="text-grey80"
        />
      }
      styles={classNames.subComponentStyles.button}
      {...restProps}
    />
  );
};

export const WizardButton = styled<IWizardButtonProps, IWizardButtonStyleProps, IWizardButtonStyles>(
  WizardButtonBase,
  getStyles
);
