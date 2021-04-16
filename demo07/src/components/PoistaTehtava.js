import { Button, Typography } from '@material-ui/core';
import { Link, useHistory, useParams } from 'react-router-dom';
import Otsikko from './Otsikko';

function PoistaTehtava(props) {

    const history = useHistory();
    const { id } = useParams();

    const poistaTehtava = () => {

        let tehtavatApu = props.tehtavat.filter((tehtava) => {
            return (tehtava.id !== id);            
        });        

        props.setTehtavat([...tehtavatApu]);

        history.push("/");
    
    }

    return (
        <>
            <Otsikko tyyli="pieni">Poista tehtävä</Otsikko>

            <Typography>Haluatko varmasti poistaa tehtävän "{props.tehtavat.filter((tehtava) => {
                                                                return (tehtava.id === id);
                                                            })[0].nimi}"?</Typography>

            <Button
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                onClick={poistaTehtava}
                style={{marginTop : 10}}
            >
                Poista tehtävä
            </Button>

            <Button
                component={Link}
                to="/"
                variant="contained"
                color="default"
                fullWidth
                size="large"
                style={{marginTop : 10}}
            >
                Peruuta
            </Button>

        </>
    )

}

export default PoistaTehtava;