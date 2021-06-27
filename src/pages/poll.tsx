import React, {useEffect} from 'react';
import { HighLightedPoll } from '../components/HighLightedPoll';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPolls, votePoll } from '../actions/polls'
import { Store } from '../store';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

// eslint-disable-next-line no-empty-pattern
const PollsPage = ({

}) => {
    const pollReducer = useSelector<Store, Store['pollReducer']>((state) => state.pollReducer)
    const dispatch = useDispatch();
    const highLightedPoll = pollReducer?.polls?.[0]
    const handleOnVoteClick = (id: string, label: string) => {
        dispatch(votePoll({
            id,
            label,
        }))
    }

    useEffect(() => {
        dispatch(getAllPolls())
    }, [dispatch])

    return (
        <>
            <Container maxWidth="md">
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={3}
                >
                    {pollReducer?.polls?.map((poll) => {
                        return (
                            <HighLightedPoll 
                                id={poll?._id} 
                                title={poll?.title} 
                                publishedDate={poll?.publishedDate}
                                answer={poll?.answer}
                                voteInfo={poll?.voteInfo}
                                handleOnVoteClick={handleOnVoteClick}                      
                            />
                        )
                    })}
                    {/* {highLightedPoll && (
                        <HighLightedPoll 
                            id={highLightedPoll._id} 
                            title={highLightedPoll.title} 
                            publishedDate={highLightedPoll.publishedDate}
                            answer={highLightedPoll.answer}
                            voteInfo={highLightedPoll.voteInfo}                        
                        />
                    )} */}

                </Grid>
                <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="center"

                >
                </Grid>
            </Container>
        </>
    );
}

export default PollsPage;