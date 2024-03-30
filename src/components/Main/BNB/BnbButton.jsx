import PropTypes from 'prop-types';
import styled from 'styled-components';
import { css } from 'styled-components';

const BnbButton = ({ variant = 'home', status, ...props }) => {
  const { children } = props;
  return (
    <div>
      <S.Button variant={variant} status={status} {...props}>
        {children}
      </S.Button>
    </div>
  );
};

//propTypes를 정해줍니다.
BnbButton.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
  status: PropTypes.bool,
};

export default BnbButton;

const S = {
  Button: styled.button`
    outline: none;
    border: none;
    padding: 40px 20px;
    background-color: black;
    width: 100%;
    color: white;
    background-color: ${({ theme }) => theme.color.black};
    ${({ theme }) => theme.font.FONT20};
    ${({ variant }) => buttonVariantMap[variant]}
  `,
};

const buttonVariantMap = {
  home: css`
    ${({ status }) =>
      status &&
      css`
        color: ${({ theme }) => theme.color.black};
        background-color: ${({ theme }) => theme.color.white};
      `}
    &:hover {
      color: ${({ theme }) => theme.color.black};
      background-color: ${({ theme }) => theme.color.white};
    }
  `,
  ce: css`
    ${({ status }) =>
      status &&
      css`
        background-color: ${({ theme }) => theme.color.CE};
      `}
    &:hover {
      background-color: ${({ theme }) => theme.color.CE};
    }
  `,

  carone: css`
    ${({ status }) =>
      status &&
      css`
        background-color: ${({ theme }) => theme.color.CARONE};
      `}
    &:hover {
      background-color: ${({ theme }) => theme.color.CARONE};
    }
  `,

  sg: css`
    ${({ status }) =>
      status &&
      css`
        background-color: ${({ theme }) => theme.color.SG};
      `}
    &:hover {
      background-color: ${({ theme }) => theme.color.SG};
    }
  `,

  total: css`
    ${({ status }) =>
      status &&
      css`
        background-color: ${({ theme }) => theme.color.TOTAL};
      `}
    &:hover {
      background-color: ${({ theme }) => theme.color.TOTAL};
    }
  `,

  si: css`
    ${({ status }) =>
      status &&
      css`
        background-color: ${({ theme }) => theme.color.SI};
      `}
    &:hover {
      background-color: ${({ theme }) => theme.color.SI};
    }
  `,
};
