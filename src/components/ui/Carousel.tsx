import React from 'react';
import Carousel from 'nuka-carousel';
import { makeStyles } from '@material-ui/core/styles';
import { NoSsr } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    dot: {
        height: 25,
        width: 25,
        background: '#949494',
        borderRadius: 50,

        '&.isCurrent': {background:'#C68888!important'},
        '&:hover':{background:'#C68888'}
    },

    dots: {
        display: 'flex',
        flexDirection: 'row',
    }
}));

export default function () {
   
    const classes = useStyles();
    return (
        <NoSsr>
            <Carousel
                renderBottomCenterControls={(props) => {
                    console.log(props.currentSlide);
                    let asiat = [];
                    for (let i = 0; i < props.slideCount; i++) { 
                        const isCurrent = props.currentSlide === i ? 'isCurrent' : ''
                        const className = `${isCurrent}  ${classes.dot} `
                        asiat.push(<div key={i} onClick={() => props.goToSlide(i)}
                        className={className}></div>)
                    }
                    return (
                        <div className={classes.dots}>
                            {asiat}
                        </div>
                    )
                }}
            >
                <img style={{maxWidth:'100%', height:'100%'}} src="https://images.unsplash.com/photo-1587613725874-d9a1e8e23f6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=656&q=80"/>
                <img src="https://images.unsplash.com/photo-1587613989342-7e21016caff3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"/>
                <img src="https://images.unsplash.com/photo-1542546068979-b6affb46ea8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"/>
                <img src="https://images.unsplash.com/photo-1536148935331-408321065b18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80" />
            </Carousel>
        </NoSsr>
    );
}

