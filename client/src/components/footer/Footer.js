import styled from 'styled-components';

const Footer = () => {

    return <FooterContainer>
        <span>Mariyana Yotova &copy; 2022</span>
    </FooterContainer>

};

const FooterContainer = styled.div`

    display: flex;
    padding: 10px;
    border-top: 1px groove #fff;
    margin-top: auto;
    align-items: center;
    justify-content: center;
    font-size: 12px;

`

export default Footer;