import { Backdrop, CircularProgress, Container, Typography} from '@material-ui/core';
import { useState, useEffect } from 'react';
import Laskuri from './components/Laskuri';

function App() {

  const [data, setData] = useState({
                                      valuuttakurssit : [],
                                      virhe : "",
                                      tiedotHaettu : false
                                    })


  const haeTiedot = async () => {

    try {

      const yhteys = await fetch("https://api.ratesapi.io/api/latest");
      const tiedot = await yhteys.json();    
  
      setData({
                ...data, 
                valuuttakurssit : tiedot.rates,
                tiedotHaettu : true
              });

    } catch (e) {

      setData({
                ...data, 
                virhe : "Ei yhteyttä palvelimeen. Yritä uudelleen hetken kuluttua.",
                tiedotHaettu : true
              })

    }

  }

  useEffect(() => {

    haeTiedot();

  }, []);

  return (
    <Container>

      <Typography variant="h5">Demo 8: Ulkoisten tietojen käyttö</Typography>

      {(data.virhe) 
      ? <Typography color="error">{data.virhe}</Typography>
      : (data.tiedotHaettu) 
        ? <Laskuri valuutat={data.valuuttakurssit}/>
        : <Backdrop open={true}>
            <CircularProgress color="inherit" />  
          </Backdrop>       
      } 

    </Container>
  );
}

export default App;
