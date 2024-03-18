/* eslint-disable @typescript-eslint/no-explicit-any */
import { css, CSSProp } from 'styled-components';
import theme from '../theme';

const { breakpoints } = theme;

export const media = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label as keyof typeof breakpoints] = (
    literals: TemplateStringsArray,
    ...placeholders: any[]
  ) =>
    css`
      @media screen and (min-width: ${breakpoints[
          label as keyof typeof breakpoints
        ]}px) {
        ${css(literals, ...placeholders)};
      }
    `;
  return acc;
}, {} as Record<keyof typeof breakpoints, (l: TemplateStringsArray, ...p: any[]) => CSSProp>);
