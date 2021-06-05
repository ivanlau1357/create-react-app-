import React, { useEffect, useCallback } from 'react'
import { StockTicket } from '../components/StockTicket';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStockPrice } from '../actions/stock';
import { Store } from '../store';

// eslint-disable-next-line no-empty-pattern
const StockPage = ({
    
}) => {
    const stockReducer = useSelector<Store, Store['stockReducer']>((state) => state?.stockReducer);
    const dispatch = useDispatch();

    const fetchStock = useCallback(() => {
        console.log('11111111111')
        const payload = ['bitcoin', 'ether', 'litecoin', 'monero', 'ripple', 'dogecoin', 'dash', 'maidsafeecoin', 'lisk', 'storjconX']
        dispatch(fetchStockPrice(payload))
    },[dispatch])
    
    useEffect(() => {
        console.log('initalizing interval');
        fetchStock();
        const interval = setInterval(() => {
            fetchStock();
        }, 5000)
        
        return () => {
            console.log('clearing interval');
            clearInterval(interval);
        }
    }, [fetchStock])
    
    return (
        <>
            <Container maxWidth="md">
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    {stockReducer?.stocks?.map((stock) => {
                        console.log('123456', stock);
                        return <StockTicket name={stock.name || ""} price={stock.price || ""} volume={stock.volume || ""} change={stock.change || ""}/>
                    })}       
                    {/* <StockTicket name={"Name"} price={"123.567979"} volume={"1234"} change={"1234"}/>
                    <StockTicket name={"Name"} price={"123"} volume={"1234"} change={"1234"}/>
                    <StockTicket name={"Name"} price={"123"} volume={"1234"} change={"1234"}/>
                    <StockTicket name={"Name"} price={"123"} volume={"1234"} change={"-1234"}/>
                    <StockTicket name={"Name"} price={"123"} volume={"1234"} change={"1234"}/> */}
                </Grid>
            </Container>
        </>
    );
}

export default StockPage;