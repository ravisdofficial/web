import styled from "styled-components";
import Bkg1 from '/src/assets/home/Maskgroup2.png';
import Bkg2 from '/src/assets/home/Maskgroup.png';

export const VibezSectionContainer = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px 0;
    background-color: #F2EFEC;

    ::before{
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-image: url(${Bkg1}) , url(${Bkg2});
        background-repeat: no-repeat, no-repeat;
        background-position: left top, right bottom; 
        background-size: 250px, 480px;
    }
    `
export const VibezHeader = styled.h2`
    font-size: 48px;
    text-transform: uppercase;
    margin-bottom: 40px;

    @media (max-width: 768px) {
        font-size: 32px;
        text-align: center;
    }
    `
export const Vibezcard = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: baseline;

@media (max-width: 768px) {
    flex-direction: column;
}
`