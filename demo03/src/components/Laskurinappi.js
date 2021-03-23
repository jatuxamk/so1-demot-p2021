import {useState} from 'react';

function Laskurinappi(props) {

    const [laskuri, setLaskuri] = useState(0);

    return (
            <button
                style={{
                        width : "460px",
                        padding: "20px",
                        marginBottom: "5px"
                       }}
                onClick={() => {
                        setLaskuri(laskuri + 1);
                        props.lisaaYhteissummaan();
                        }}
            >{props.children} ({laskuri})</button>
    );
}

export default Laskurinappi;