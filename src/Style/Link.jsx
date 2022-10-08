import styled from "styled-components";

const Link = ({ className, children }) => (
    <a className={className}>
        {children}
    </a>
);

export const StyledLink = styled(Link)`
    color: palevioletred;
    font-weight: bold;
`;