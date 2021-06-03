import React from 'react'
import { StockTicket } from '../components/StockTicket';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

// eslint-disable-next-line no-empty-pattern
const StockPage = ({
    
}) => {
    return (
        <>
            <Container maxWidth="md">
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <StockTicket name={"Name"} price={"123.567979"} volume={"1234"} change={"1234"}/>
                    <StockTicket name={"Name"} price={"123"} volume={"1234"} change={"1234"}/>
                    <StockTicket name={"Name"} price={"123"} volume={"1234"} change={"1234"}/>
                    <StockTicket name={"Name"} price={"123"} volume={"1234"} change={"-1234"}/>
                    <StockTicket name={"Name"} price={"123"} volume={"1234"} change={"1234"}/>
                </Grid>
            </Container>
        </>
    );
}

export default StockPage;