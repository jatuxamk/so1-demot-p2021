import { Button, TextField } from '@material-ui/core';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Otsikko from './Otsikko';
import { MuiPickersUtilsProvider, DateTimePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { fi } from 'date-fns/locale';
import { v4 as uuid } from 'uuid';

function UusiTehtava(props) {

    const [uusiTehtavanimi, setUusiTehtavanimi] = useState();
    const [pvmAika, setPvmAika] = useState(new Date());
    const history = useHistory();

    const lisaaTehtava = () => {

        let tehtavaApu = {
                            id : uuid(),
                            nimi : uusiTehtavanimi,
                            deadline : pvmAika.getTime(),
                            suoritettu : false
                         }
    
        props.setTehtavat([...props.tehtavat, tehtavaApu]);

        history.push("/");
    
    }

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={fi}>
            <Otsikko tyyli="pieni">Lisää uusi tehtävä</Otsikko>

            <TextField 
                variant="outlined"
                fullWidth
                placeholder="Kirjoita tehtävä..."
                style={{marginBottom : 10}}
                onChange={(e) => {
                                    setUusiTehtavanimi(e.target.value);                                    
                                }}
            />


            <DateTimePicker 
                label="Suoritettava viimeistään"
                inputVariant="outlined"
                fullWidth
                format="d.M.y HH:mm"
                ampm={false}
                cancelLabel="Peruuta"
                value={pvmAika}
                onChange={setPvmAika}
                style={{marginBottom : 10}}
            />


            <Button
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                onClick={lisaaTehtava}
                style={{marginTop : 10}}
            >
                Tallenna
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

        </MuiPickersUtilsProvider>
    )

}

export default UusiTehtava;