import { useState } from 'react'; 
import './App.css';

function App() {

  const [tehtavat, setTehtavat] = useState([
                                            {
                                              nimi : "Siivoa",
                                              suoritettu : false
                                            },
                                            {
                                              nimi : "Käy kaupassa",
                                              suoritettu : true
                                            },
                                            {
                                              nimi : "Ulkoiluta koiraa",
                                              suoritettu : false
                                            }
                                          ]);

  const lisaaTehtava = (uusiTehtava) => {

    let tehtavaApu = {
                        nimi : uusiTehtava,
                        suoritettu : false
                     }

    setTehtavat([...tehtavat, tehtavaApu]);

  }

  const suoritettu = (indeksi) => {

    let tehtavatApu = [...tehtavat];

    tehtavatApu[indeksi].suoritettu = !tehtavatApu[indeksi].suoritettu;

    setTehtavat([...tehtavatApu]);

  } 

  return (
    <div>

      <h1>Demo 2: React-perusteita (2)</h1>

      <h2>Tehtävälista</h2>

      <input 
        type="text"
        placeholder="Kirjoita tehtävä ja paina Enter..."
        onKeyPress={(e) => {
                            if (e.key === "Enter") {
                              lisaaTehtava(e.target.value);
                            }
                        }}
      />

      <ul>
        {tehtavat.map((tehtava, idx) => { 
          return (
                  <li 
                    key={idx}
                    onClick={ () => {
                              suoritettu(idx);
                            }}
                  >
                    { (tehtava.suoritettu)
                      ? <del>{tehtava.nimi}</del> 
                      : tehtava.nimi
                    }
                  </li>
                 )
        })}
      </ul>

      <p>Klikkaa tehtävää merkitäksesi sen suorituksi.</p>

    </div>
  );
}

export default App;
