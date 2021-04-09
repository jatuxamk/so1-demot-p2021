import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    otsikko : {
            fontSize: 22
    },
    alaotsikko : {
            marginTop : 10,
            fontSize: 18
    },
    kappale : {
        marginTop : 10,
        fontSize: 14
}                 
});

function Aloitus() {

    const tyylit = useStyles();

    return (
            <Container>

                <Typography className={tyylit.otsikko}>
                    Demo 5: React reititys (react-router) 
                </Typography>

                <Typography className={tyylit.alaotsikko}>
                    Aloitusnäkymä
                </Typography>

                <Typography className={tyylit.kappale}>
                    Tämä on demo Reactin reitityksestä. Nyt olemme aloitusnäkymässä. Vaihda infonäkymään ylälaidan valikosta.
                </Typography>

            </Container>
           );

}

export default Aloitus;