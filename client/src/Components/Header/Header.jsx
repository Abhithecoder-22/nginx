import { useState } from 'react';

import { AppBar, Toolbar, Box, Typography, IconButton, Drawer, List, styled, ListItem } from '@mui/material';
import { Menu } from '@mui/icons-material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from 'react-router-dom';
// import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

//components
import CustomButtons from './CustomButtons';
import Search from './Search';

const StyledHeader = styled(AppBar)`
    background: #2874f0;
    height: 55px;
    text-decoration:none;
`;

const Component = styled(Link)`
    margin-left: 3%;
    line-height: 0;
    color: #FFFFFF;
    text-decoration: none;
    &:hover {
        text-decoration: none;
    }
   
`;

const SubHeading = styled(Typography)`
    font-size: 10px;
    font-style: italic;
`

const PlusImage = styled('img')({
    width: 10,
    height: 10,
    marginLeft: 4
})

const MenuButton = styled(IconButton)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    }
}));

const CustomButtonWrapper = styled('span')(({ theme }) => ({ 
    margin: '0 5% 0 auto', 
    [theme.breakpoints.down('sm')]: {
        display: 'none'
    }
}));

const Header = () => {
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }

    const list = () => (
        <Box style={{ width: 250 }} onClick={handleClose}>
            <List>
                <listItem button>
                    <CustomButtons />
                </listItem>
            </List>
        </Box>
    );


    return (
        <StyledHeader position="fixed">
            <Toolbar style={{ minHeight: 55 }}>
                <MenuButton
                    color="inherit"
                    onClick={handleOpen}
                >
                    <Menu />
                </MenuButton>

                <Drawer open={open} onClose={handleClose}>
                    {list()}
                </Drawer>

                <Component to='/'>
               
                    {/* <img src={logoURL} style={{ width: 75 }} alt='nofound'/> */}
                    <ListItem>
                        <Link to='/' style={{ textDecoration:'none', color:'inherit'}}>Rv Technology</Link>
                    </ListItem>
                    {/* <Box component="span" style={{ display: 'flex' }}>
                        <SubHeading>Explore&nbsp;
                            <Box component="span" style={{color:'#FFE500'}}>
                                Plus
                            </Box>
                        </SubHeading>
                        <PlusImage src={subURL} />
                    </Box> */}
                </Component>
                <Search />
                <CustomButtonWrapper>
                    <CustomButtons />
                   
                </CustomButtonWrapper>
                <IconButton style={{gap:'10px'}}>
                <WhatsAppIcon fontSize='large'/>
                <WhatsAppIcon fontSize='large'/>
                <WhatsAppIcon fontSize='large'/>
                <WhatsAppIcon fontSize='large'/>
                </IconButton>
            </Toolbar>
        </StyledHeader>
    )
}

export default Header;