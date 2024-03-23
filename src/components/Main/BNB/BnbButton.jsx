import PropTypes from 'prop-types';
import styled from 'styled-components';
import { css } from 'styled-components';

//TODO : 버튼 맵핑
//TODO : 버튼 컴포넌트 관리

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
        background-color: ${({ theme }) => theme.color.ce};
      `}
    &:hover {
      background-color: ${({ theme }) => theme.color.ce};
    }
  `,

  carone: css`
    ${({ status }) =>
      status &&
      css`
        background-color: ${({ theme }) => theme.color.carone};
      `}
    &:hover {
      background-color: ${({ theme }) => theme.color.carone};
    }
  `,

  sg: css`
    ${({ status }) =>
      status &&
      css`
        background-color: ${({ theme }) => theme.color.sg};
      `}
    &:hover {
      background-color: ${({ theme }) => theme.color.sg};
    }
  `,

  total: css`
    ${({ status }) =>
      status &&
      css`
        background-color: ${({ theme }) => theme.color.total};
      `}
    &:hover {
      background-color: ${({ theme }) => theme.color.total};
    }
  `,

  si: css`
    ${({ status }) =>
      status &&
      css`
        background-color: ${({ theme }) => theme.color.si};
      `}
    &:hover {
      background-color: ${({ theme }) => theme.color.si};
    }
  `,
};
