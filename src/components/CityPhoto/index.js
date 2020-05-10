import React from 'react';
import {
    Card,
    CardMedia,
    Typography,
    CardContent
} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';


export default function CityPhoto({ photo, recommendation }) {
    const useStyles = makeStyles({
        root: {
            maxWidth: 460,
            maxHeight: 250,
            marginTop: 40,
            display: 'flex',
        },
        cover: {
            width: 280,
        },
        content: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around'
        }
    });

    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.cover}
                component="img"
                image={photo} />
            <CardContent className={classes.content}>
                <Typography
                    component="h2"
                    variant="subtitle1">
                    <b>Recommendation:</b>
                </Typography>
                <Typography
                    component="p"
                    variant="body2"
                >
                    {recommendation}
                </Typography>
            </CardContent>
        </Card>
    )
}