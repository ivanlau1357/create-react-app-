import React from 'react'
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { options } from '../reducers/poll'
import { Doughnut } from 'react-chartjs-2';

interface IHighLightPollProps {
    id: string,
    title: string,
    publishedDate: string,
    answer: {
        type: 'Single' | 'Multi',
        options: options[],
    },
    voteInfo?: {
        [key: string]: string;
    }
    handleOnVoteClick?: (id: string, label: string) => void
}

interface ColorMap {
    [keys: string] : string
}

const Container = styled.div`
    width: 700px;
    margin: 10px;
    padding: 10px;
`

const useStyles = makeStyles({
    root: {
      minWidth: 250,
      background: '#BEBEBE',
    },
    details: {
        display: 'inline-block',
        flexDirection: 'column',
    },
    chart: {
        display: 'inline-flex',
        flexDirection: 'column',
        width: '20%',
    },
    button: {
        padding: 10
    }
  });

export const HighLightedPoll: React.FC<IHighLightPollProps> = ({
    id,
    title,
    publishedDate,
    answer,
    voteInfo,
    handleOnVoteClick,
}) => {
    const classes = useStyles();
    const randomColor = () => {
        const o = Math.round 
        const r = Math.random
        const s = 255;
        return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
    };
    const date = new Date(parseInt(publishedDate, 10));
    const totalVoteCount = Object.values(voteInfo || {}).reduce((acc, value) => acc + parseInt(value, 10), 0) 
    const colorMap: ColorMap = answer?.options.reduce((acc, option) => {
        const { label } = option
        return {
            ...acc,
            [label]: randomColor(),
        }
    }, {})


    const chartColor = Object.keys(voteInfo || {}).map((key) => colorMap[key])
     
    const chartData = {
        labels: Object.keys(voteInfo || {}),
        datasets: [
          {
            label: '# of Votes',
            data: Object.values(voteInfo || {}),
            backgroundColor: chartColor,
            borderColor: chartColor,
            borderWidth: 1,
          },
        ],
    };
    
    return (
        <Container>
            <Card className={classes.root}>
                <div className={classes.details}>
                    <CardHeader
                        title={`Today's Poll`}
                    />
                    <CardContent>
                        <Typography>
                            {title}
                        </Typography>
                        <Typography>
                            {`published At: ${date.toISOString().slice(0,10)}`}
                        </Typography>

                        {answer?.options?.map((option) => {
                            const { label } = option
                            return (
                                <Typography className={classes.button}>
                                    <Button 
                                        style={{background: colorMap[label]}}
                                        onClick={() => {
                                            if(handleOnVoteClick) {
                                                handleOnVoteClick(id, label)
                                            }
                                        }}
                                        size="small">
                                        {label}
                                    </Button>
                                </Typography>
                            )
                        })}

                        <Typography>
                            {`Total number of values recorded: ${totalVoteCount || 0}`}
                        </Typography>
                    </CardContent>
                </div>
                <div className={classes.chart}>
                    <Doughnut type={'doughnut'} data={chartData} />
                </div>
            </Card>
        </Container>
    );
};