import { useState, useEffect } from 'react';
import { Button, Checkbox, Container, FormControlLabel, TextField, Typography } from '@material-ui/core'; 
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  tekstikentta : {
                  marginTop : 10,
                  marginBottom : 10
                 }
});

function App() {

  const tyylit = useStyles();

  const [tiedotOk, setTiedotOk] = useState(false);
  const [nimi, setNimi] = useState("");
  const [email, setEmail] = useState("");
  const [ehdot, setEhdot] = useState(false);

  useEffect(() => {

    if (nimi && email && ehdot) {
      setTiedotOk(true);
    }

  }, [nimi, email, ehdot])

  return (
    <Container>

      <Typography variant="h5">Demo 4: Material-UI -komponentit</Typography>

      <Typography
        style={{
                fontSize : 18,
                marginTop : 10
              }}
      >Uutiskirjeen tilaus</Typography>


      <TextField 
        variant="outlined"
        label="Nimi"
        placeholder="Etunimi Sukunimi"
        fullWidth={true}
        className={tyylit.tekstikentta}
        onChange={ (e) => { setNimi(e.target.value) } }
      />
     
      <TextField 
        variant="outlined"
        label="Sähköposti"
        placeholder=""
        fullWidth={true}
        className={tyylit.tekstikentta}
        onChange={ (e) => { setEmail(e.target.value) } }
      />

      <FormControlLabel 
        control={<Checkbox  
                  onChange={ (e) => { setEhdot(e.target.checked) } }
                />}
        label="Hyväksyn käyttöehdot"
      />

      <Button
        variant="contained"
        color="primary"
        fullWidth={true}
        size="large"
        disabled={!tiedotOk}
        onClick={ () => { alert("Kiitos tilauksestasi!") } }
      >Tilaa uutiskirje</Button>


    </Container>
  );
}

export default App;
