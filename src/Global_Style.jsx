import { createGlobalStyle } from 'styled-components';

const Global_Style = createGlobalStyle`
    body{
        background-color: ${props=> props.theme.bg_image};
        background-image: ${props=> props.theme.bg_body_image};
    }
`;

export default Global_Style