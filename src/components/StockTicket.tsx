import React from 'react'
import styled from 'styled-components';

interface IStockTicketProps {
    price: string;
    volume: string;
    change: string;
    name: string;
}

const Container = styled.div`
    width: 200px;
    height: 100px;
    margin: 10px;
    padding: 10px;
    border: 1px groove grey;
    border-radius: 5px;
`

const TitleWrapper = styled.div`
    font-family: sans-serif;
    font-size: 20px;
    font-weight: bold;
    padding-top: 5px;
` 
const PriceWrapper = styled.div`
    color: #facb2d;
    font-weight: bold;
    padding-bottom:5px;
`

const ExtraInfoWrapper = styled.div`
    display: flex;
`

const VolumeWrapper = styled.div`
    width:50%
`

const ChangeWrapper = styled.div`
    width:50%
`

const VolumeTitle = styled.div`
    font-size: 15px;
    font-weight: bold;
    color: #5e6063;
`

const Volume = styled.div`
    font-size: 13px;
    color: #5e6063;
`
const ChamgeTitle = styled.div`
    font-size: 15px;
    font-weight: bold;
    color: #5e6063;
`

const Change = styled.div`
    font-size: 13px;
    color: ${props => props.theme.color};

`
export const StockTicket: React.FC<IStockTicketProps> = ({
    price,
    volume,
    change,
    name,
}) => {
    return (
        <Container>
            <TitleWrapper>
                {name}
            </TitleWrapper>
            <PriceWrapper>
                ${price}
            </PriceWrapper>
            <ExtraInfoWrapper>
                <VolumeWrapper>
                    <VolumeTitle> volume: </VolumeTitle>
                    <Volume> {volume} </Volume>
                </VolumeWrapper>
                <ChangeWrapper>
                    <ChamgeTitle> change: </ChamgeTitle>
                    <Change theme={{color: change.match(/-/g)? 'red' : 'green'}}> {change} </Change>
                </ChangeWrapper>
            </ExtraInfoWrapper>
        </Container>
    );
};