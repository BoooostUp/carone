import styled from 'styled-components';
import { css } from 'styled-components';
import { media } from '../../../styles/utils/mediaQuery';

const BnbButton = ({ variant = 'home', status, ...props }) => {
  const { children } = props;
  return (
    <div>
      <S.Button $variant={variant} $status={status} {...props}>
        {children}
      </S.Button>
    </div>
  );
};
export default BnbButton;

const S = {
  Button: styled.button`
    padding: 1.5rem 1.5rem;
    width: 100%;
    color: rgb(255, 255, 255);
    background-color: ${({ theme }) => theme.color.black};
    ${({ theme }) => theme.font.FONT16};
    ${({ $variant }) => buttonVariantMap[$variant]};
    ${media.desktop`
      padding: 2rem 2rem;
      ${({ theme }) => theme.font.FONT20};
    `}
  `,
};

const buttonVariantMap = {
  home: css`
    ${({ $status }) =>
      $status &&
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
    ${({ $status }) =>
      $status &&
      css`
        background-color: ${({ theme }) => theme.color.CE};
      `}
    &:hover {
      background-color: ${({ theme }) => theme.color.CE};
    }
  `,

  carone: css`
    ${({ $status }) =>
      $status &&
      css`
        background-color: ${({ theme }) => theme.color.CARONE};
      `}
    &:hover {
      background-color: ${({ theme }) => theme.color.CARONE};
    }
  `,

  sg: css`
    ${({ $status }) =>
      $status &&
      css`
        background-color: ${({ theme }) => theme.color.SG};
      `}
    &:hover {
      background-color: ${({ theme }) => theme.color.SG};
    }
  `,

  total: css`
    ${({ $status }) =>
      $status &&
      css`
        background-color: ${({ theme }) => theme.color.TOTAL};
      `}
    &:hover {
      background-color: ${({ theme }) => theme.color.TOTAL};
    }
  `,

  si: css`
    ${({ $status }) =>
      $status &&
      css`
        background-color: ${({ theme }) => theme.color.SI};
      `}
    &:hover {
      background-color: ${({ theme }) => theme.color.SI};
    }
  `,
};
