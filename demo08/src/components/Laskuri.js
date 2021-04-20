import { Button, FormControl, makeStyles, MenuItem, Select, TextField, Typography } from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles({
    otsikko : {
        marginTop : 10,
        marginBottom : 20,
        fontSize : 18
    },
    syote : {
        marginBottom : 10
    },
    tulos : {
        marginTop : 10
    }

});

function Laskuri(props) {

    const [muunnettavaSumma, setMuunnettavaSumma] = useState();
    const [kohdevaluutta, setKohdevaluutta] = useState("USD")

    const [tulosteksti, setTulosteksti] = useState("");

    const tyylit = useStyles();

    const laskeMuunnos = () => {

        if (isNaN(muunnettavaSumma)) {

            setTulosteksti("Syötä ainoastaan numeroita, kiitos.")

        } else {

            let tulos = muunnettavaSumma * props.valuutat[kohdevaluutta];

            setTulosteksti(`${muunnettavaSumma} EUR = ${tulos.toFixed(2)} ${kohdevaluutta}`);

        }


    }    

    return (
            <>
                <Typography 
                    className={tyylit.otsikko}
                >Valuuttalaskuri</Typography>


                <TextField 
                    variant="outlined"
                    label="Anna muunnettava summa (euro)"
                    fullWidth
                    className={tyylit.syote}
                    onChange={(e) => { setMuunnettavaSumma(e.target.value) }}
                />

                <FormControl
                    variant="outlined"
                    fullWidth
                    className={tyylit.syote}
                >

                    <Select
                        value={kohdevaluutta}
                        displayEmpty
                        onChange={ (e) => { setKohdevaluutta(e.target.value) } }
                    >
                        {Object.keys(props.valuutat).sort().map((valuutta) => {
                            return <MenuItem value={valuutta}>{valuutta} ({props.valuutat[valuutta]})</MenuItem>                            
                        })}
                    </Select>
                </FormControl>

                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    size="large"
                    onClick={laskeMuunnos}
                >
                    Laske muunnos
                </Button>

                <Typography className={tyylit.tulos}>{tulosteksti}</Typography>

            </>
           )

}

export default Laskuri;