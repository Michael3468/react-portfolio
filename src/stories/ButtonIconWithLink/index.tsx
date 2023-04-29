/* eslint-disable react/jsx-props-no-spreading */
import React, { FC } from 'react';
import './styles.css';

type Props = {
  buttonText: string;
  link?: string | null;
  img?: string | null;
  altText?: string;
  border?: number;
  borderType?:
    | 'none'
    | 'hidden'
    | 'dotted'
    | 'dashed'
    | 'solid'
    | 'double'
    | 'groove'
    | 'ridge'
    | 'inset'
    | 'outset';
  borderColor?: string;
  borderRadius?: number;
  buttonWidth?: number;
  buttonHeight?: number;
  imgWidth?: number;
  imgHeight?: number;
  fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  fontSize?: number;
  fontColor?: string;
  backgroundColor?: string;
  boxShadowColor?: string;
  boxShadowBlurRadius?: number;
  boxShadowSpreadRadius?: number;
  boxShadowX?: number;
  boxShadowY?: number;
  style?: React.CSSProperties;
  imgStyle?: React.CSSProperties;
  buttonTextStyle?: React.CSSProperties;
};

const ButtonIconWithLink: FC<Props> = ({
  buttonText,
  altText,
  link,
  img,
  border,
  borderType,
  borderColor,
  borderRadius,
  buttonWidth,
  buttonHeight,
  imgWidth,
  imgHeight,
  fontWeight,
  fontSize,
  fontColor,
  backgroundColor,
  boxShadowColor,
  boxShadowBlurRadius,
  boxShadowSpreadRadius,
  boxShadowX,
  boxShadowY,
  style,
  imgStyle,
  buttonTextStyle,
}) => (
  <a
    className="btn-outline"
    style={{
      border: `${border && `${border}px ${borderType} ${borderColor}`}`,
      borderRadius: `${borderRadius}px`,
      width: `${buttonWidth}px`,
      height: `${buttonHeight}px`,
      background: `${backgroundColor}`,
      boxShadow: `${boxShadowColor} ${boxShadowX}px ${boxShadowY}px ${boxShadowBlurRadius}px ${boxShadowSpreadRadius}px`,
      ...style,
    }}
    href={link ?? undefined}
    {...(link && { target: '_blank', rel: 'noreferrer' })}
  >
    {img && (
      <img
        src={img}
        width={imgWidth}
        height={imgHeight}
        alt={altText ?? undefined}
        style={{ ...imgStyle }}
      />
    )}
    <span
      style={{
        fontWeight: `${fontWeight}`,
        fontSize: `${fontSize}px`,
        color: `${fontColor}`,
        ...buttonTextStyle,
      }}
    >
      {buttonText}
    </span>
  </a>
);

ButtonIconWithLink.defaultProps = {
  link: null,
  img: null,
  altText: '',
  border: 2,
  borderType: 'solid',
  borderColor: 'black',
  borderRadius: 5,
  buttonWidth: 190,
  buttonHeight: 40,
  imgWidth: 26,
  imgHeight: 26,
  fontWeight: 700,
  fontSize: 14,
  fontColor: 'black',
  backgroundColor: 'white',
  boxShadowColor: 'black',
  boxShadowBlurRadius: 5,
  boxShadowSpreadRadius: 2,
  boxShadowX: 0,
  boxShadowY: 0,
  style: {},
  imgStyle: {},
  buttonTextStyle: {},
};

export default ButtonIconWithLink;
