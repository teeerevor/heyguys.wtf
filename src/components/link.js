import styled, { css } from 'styled-components';
import { Text } from 'rebass';

export const linkTextUnderline = css`
    background-image: linear-gradient(to right, #fbab7e 75%, transparent 75%);
    background-position: 0 1.08em;
    background-repeat: repeat-x;
    background-size: 8px 2px;
    text-shadow: 2px 2px white, 2px -2px white, -2px 2px white, -2px -2px white;
`;

const Link = styled(Text)`
    text-decoration: none;
    cursor: pointer;

    &:hover {
        ${linkTextUnderline}
    }
`;
export default Link;

export const BodyLink = styled(Link).attrs({ as: 'a', color: 'hitPink' })``;
