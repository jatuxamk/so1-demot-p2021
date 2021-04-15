import { Typography } from '@material-ui/core';

function Otsikko(props) {

    return (
            (props.tyyli === "pieni")
            ? <Typography style={{
                fontSize : 18,
                marginBottom : 10
              }}
              >{props.children}</Typography>
            : <Typography style={{
                fontSize : 22,
                marginBottom : 10
              }}
              >{props.children}</Typography>
            
    );

}

export default Otsikko;