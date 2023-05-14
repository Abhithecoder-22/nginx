// import {  Grid, styled } from '@mui/material';

// const ImageURL = [
//     'https://rukminim1.flixcart.com/flap/960/960/image/2f30db9425df5cec.jpg?q=50',
//     'https://rukminim1.flixcart.com/flap/960/960/image/084789479074d2b2.jpg',
//     'https://rukminim1.flixcart.com/flap/960/960/image/1ce0c4c1fb501b45.jpg?q=50'
// ];

// const Wrapper = styled(Grid)`
//     display: flex;
//     margin-top: 20px;
//     justify-content: space-between;
// `;

// const Image = styled('img')(({ theme }) => ({ 
//     display: 'flex',
//     marginTop: 20,
//     justifyContent: 'space-between',
//     width: '100%',
//     [theme.breakpoints.down('md')]: {
//         objectFit: 'cover',
//         height: 120
//     }
// }));

// const MidSection = () => {
//     const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
//     return (
//         <>
//             <Wrapper lg={12} sm={12} md={12} xs={12} container>
//                 {
//                     ImageURL.map(image => (
//                         <Grid item lg={4} md={4} sm={12} xs={12}>
//                             <img src={image} style={{ width: '100%' }} />
//                         </Grid>
//                     ))
//                 }
//             </Wrapper>
//             <Image src={url} />
//         </>
//     )
// }

// export default MidSection;




// import * as React from 'react';
// import { experimentalStyled as styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Unstable_Grid2';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(2),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

// export default function ResponsiveGrid() {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
//         {Array.from(Array(9)).map((_, index) => (
//           <Grid xs={2} sm={4} md={4} key={index}>
//             <Item>xs=2</Item>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// }


import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import image from '../images/search.webp'
import {useNavigate} from 'react-router-dom';
import { Box } from '@mui/material';
import Services from '../../pages/Blog';
const cards = [
  {
    title: 'Web Developement & Designning',
    description: 'Description for lizard 1',
    image: '../images/img.png',
    route:'/webdesign',
  },
  {
    title: 'Artificial Intelligence & More',
    description: 'Description for lizard 2',
    image: '../images/web.webp',
    route:'/ai',
  },
  {
    title: 'Facebook & Insta Marketing',
    description: 'Description for lizard 2',
    image: '../images/face.png',
    route:'/meta',
  },
  {
    title: 'Google Advertisement ',
    description: 'Description for lizard 2',
    image: '../images/web.webp',
    route:'/googleads',
  },
  {
    title: 'Logo Designning & Branding',
    description: 'Description for lizard 2',
    image: './images/img.png',
    route:'/logodesign',
  },
  {
    title: 'Web Hosting & Many More',
    description: 'Description for lizard 2',
    image: '../images/web.webp',
    route:'/chatmeta',
  },
  // add more cards here
];

const cardStyles = {
  flexBasis: '30%',
  margin: '0.8rem',
  transition: "transform 0.15s ease-in-out",
"&:hover": { 
  transform: "scale(1.05)", 
  cursor: "pointer",
  boxShadow: "0px 0px 10px rgba(0,0,0,0.3)" 
},
  '@media (max-width: 600px)': {
    flexBasis: '100%',
  }
};

const containerStyles = {
  backgroundColor: 'black',
};

export default function NavBar() {
 let navigate=useNavigate();
 const routeChange = (route) => {
  navigate(route);
};

  return (
    <div style={containerStyles}>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '5%', top: '10%' }}>
        {/* <Typography>About Y</Typography> */}
        {/* <Boxaabou>This os a mpersand</Boxaabou> */}
        {cards.map((card, index) => (
          <Card key={index} sx={cardStyles}>
            <CardMedia component="img" alt="green iguana" height="240" style={{ padding: '10px', borderRadius: '10px' }} image={image} />
            <CardContent>
              <Typography gutterBottom variant="h4" textAlign={'center'} fontWeight={'700'} component="div">
                {card.title}
              </Typography>
              {/* <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography> */}

            </CardContent>
            <CardActions>
              {/* <Button variant='contained' size="small">Share</Button> */}
              <Button variant='contained' onClick={() => routeChange(card.route)} size="small">Learn More</Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
}
