import styled from 'styled-components';
import { Flex, Text } from 'rebass';
import { linkTextUnderline } from './link';

export const CopyText = styled(Text).attrs({
    mr: 2,
    px: 2,
    py: 1,
    bg: '#fbab7e',
    fontSize: '10px',
    fontWeight: 600,
    color: 'white',
})`
    letter-spacing: 0.7px;
    border-radius: 20px;
    position: absolute;
    opacity: 0;
    transition: all 0.2s ease-in 0.1s;
    left: -25px;
    top: 6px;
`;

export const SuggestionText = styled(Text)``;
export const Suggestion = styled(Flex).attrs({
    alignItems: 'center',
})`
    position: relative;
    display: inline-flex;
    transition: all 0.2s ease-in;
    &:hover {
        padding-left: 52px;
        cursor: pointer;
        ${SuggestionText} {
            ${linkTextUnderline}
        }
        ${CopyText} {
            opacity: 1;
            transform: translateX(20px);
        }
    }
`;
