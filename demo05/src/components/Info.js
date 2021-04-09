import { Button, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';

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
    },
    nappi : {
        marginTop : 10,
    }                       
});

function Info() {

    const tyylit = useStyles();
    const history = useHistory();

    const vahvistaSiirto = () => {

        if (window.confirm("Vahvista siirtyminen aloitukseen?")) {
            history.push("/");            
        } 

    }

    return (
            <Container>

                <Typography className={tyylit.otsikko}>
                    Demo 5: React reititys (react-router) 
                </Typography>

                <Typography className={tyylit.alaotsikko}>
                    Infonäkymä
                </Typography>

                <Typography className={tyylit.kappale}>
                    Tämä on demo Reactin reitityksestä. Nyt olemme infonäkymässä.
                </Typography>

                <Button
                    component={Link}
                    to="/"
                    className={tyylit.nappi}
                    variant="contained"
                    color="primary"
                >
                    Palaa aloitusnäkymään
                </Button>

                <Button
                    className={tyylit.nappi}
                    variant="contained"
                    color="primary"
                    onClick={vahvistaSiirto}
                >
                    Palaa aloitusnäkymään (vahvistuksella)
                </Button>

            </Container>
           );

}

export default Info;