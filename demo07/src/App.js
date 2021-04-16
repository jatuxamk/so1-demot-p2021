import { useState, useEffect } from 'react'; 
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Tehtavalista from './components/Tehtavalista';
import UusiTehtava from './components/UusiTehtava';
import Otsikko from './components/Otsikko';
import PoistaTehtava from './components/PoistaTehtava';

function App() {

  const [tehtavat, setTehtavat] = useState([]);

  const tallennaTiedot = () => {

    localStorage.setItem("tehtavalista", JSON.stringify(tehtavat));

  }

  const avaaTehtavalista = () => {

      if (localStorage.getItem("tehtavalista")) {

        setTehtavat(JSON.parse(localStorage.getItem("tehtavalista")));

      } else {

        setTehtavat([]);

      }    

  }

  useEffect(() => {

    avaaTehtavalista();

  }, []);

  useEffect(() => {

    tallennaTiedot();

  }, [tehtavat]);

  return (
    <Router>

      <Otsikko>Demo 7: Tietojen tallentaminen</Otsikko>    

      <Route path="/" exact>
        <Tehtavalista setTehtavat={setTehtavat} tehtavat={tehtavat} tallennaTiedot={tallennaTiedot}/>
      </Route>

      <Route path="/uusi">
        <UusiTehtava setTehtavat={setTehtavat} tehtavat={tehtavat}/>
      </Route>

      <Route path="/poista/:id">
        <PoistaTehtava setTehtavat={setTehtavat} tehtavat={tehtavat}/>
      </Route>

    </Router>
  );
}

export default App;
