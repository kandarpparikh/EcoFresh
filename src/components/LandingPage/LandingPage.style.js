import styled from 'styled-components';

const MainContent = styled.div``;
const HeaderWrapper = styled.div`
    height: 58px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
`;
const FooterWrapper = styled.div`
    height: 148px;
    background-color: #1D3124;
`;
const PageWrapper = styled.div`
    font-family: 'Segoe UI';
`;

const  BottomContainer = styled.div`
    position: relative;
    top: 58px;
`;

const Row = styled.div`
    display: flex;
    height: 240px;
    margin: 48px;
`;

const Column = styled.div`
    width: 50%;
    margin: 8px;
    padding: 16px;
    &.text {
        margin: auto;
    }
`;

const Image = styled.img`
    object-fit: cover;
`;

export { MainContent, HeaderWrapper, FooterWrapper, PageWrapper, BottomContainer, Row, Column, Image }; 