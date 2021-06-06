import React, { useEffect, useCallback } from 'react'
import { StockTicket } from '../components/StockTicket';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStockPrice } from '../actions/stock';
import { Store } from '../store';
import { StockNameMap } from '../constants/stock'

// eslint-disable-next-line no-empty-pattern
const StockPage = ({
    
}) => {
    const stockReducer = useSelector<Store, Store['stockReducer']>((state) => state?.stockReducer);
    const dispatch = useDispatch();

    const fetchStock = useCallback(() => {
        console.log('11111111111')
        const payload = Object.keys(StockNameMap);
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
                    justify="flex-start"
                    alignItems="center"

                >
                    {stockReducer?.stocks?.map((stock) => {
                        return (
                            <StockTicket 
                                name={StockNameMap[stock.name || ""]}
                                price={stock.price || "Not found"} 
                                volume={stock.volume || "-"} 
                                change={stock.change || ""}
                            />
                        );
                    })}       
                </Grid>
            </Container>
        </>
    );
}

export default StockPage;