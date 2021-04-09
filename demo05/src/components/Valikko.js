import { AppBar, CssBaseline, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Valikko() {

    const [naytaValikko, setNaytaValikko] = useState(false);

    return (
            <CssBaseline>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            edge="start"
                            onClick={() => { setNaytaValikko(true) }}
                        >
                            <MenuIcon/>
                        </IconButton>

                        <Drawer
                            open={naytaValikko}
                            onClose={ () => { setNaytaValikko(false) }}
                        >
                            <List style={{
                                            width : 220,
                                            marginTop : 50
                                        }}
                                onClick={ () => setNaytaValikko(false) }
                            >
                                <ListItem button component={Link} to="/"> 
                                    <ListItemIcon>
                                        <HomeIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="Aloitus"/>
                                </ListItem>
                                <ListItem button component={Link} to="/info"> 
                                    <ListItemIcon>
                                        <InfoIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="Info"/>
                                </ListItem>
                            </List>

                        </Drawer>
                    </Toolbar>
                </AppBar>
            </CssBaseline>
    );

}

export default Valikko;