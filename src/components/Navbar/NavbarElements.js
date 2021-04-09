import styled from 'styled-components';

export const Nav = styled.nav`
    background: red;
    height: 80px;
    display: flex;
    justify-content: center;
    font-weight: 700;
`
export const NavItem = styled.div`
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    color: #fff;

    p {
        transform: translate(-175%, 100%);
        font-weight: bold;
    }
`;