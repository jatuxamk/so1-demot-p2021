import { useState } from 'react'; 
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Tehtavalista from './components/Tehtavalista';
import UusiTehtava from './components/UusiTehtava';
import Otsikko from './components/Otsikko';
import PoistaTehtava from './components/PoistaTehtava';

function App() {

  const [tehtavat, setTehtavat] = useState([
                                            {
                                              nimi : "Siivoa",
                                              deadline : new Date(),
                                              suoritettu : false
                                            },
                                            {
                                              nimi : "Käy kaupassa",
                                              deadline : new Date(),
                                              suoritettu : true
                                            },
                                            {
                                              nimi : "Ulkoiluta koiraa",                                              
                                              deadline : new Date(),
                                              suoritettu : false
                                            }
                                          ]);


  return (
    <Router>

      <Otsikko>Demo 6: Reititysparametrit ja päivämäärien käsittely</Otsikko>    

      <Route path="/" exact>
        <Tehtavalista setTehtavat={setTehtavat} tehtavat={tehtavat}/>
      </Route>

      <Route path="/uusi">
        <UusiTehtava setTehtavat={setTehtavat} tehtavat={tehtavat}/>
      </Route>

      <Route path="/poista/:indeksi">
        <PoistaTehtava setTehtavat={setTehtavat} tehtavat={tehtavat}/>
      </Route>

    </Router>
  );
}

export default App;
