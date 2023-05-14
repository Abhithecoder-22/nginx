

// import { Typography, Box, styled } from '@mui/material'; 

// import { navData } from '../../constant/data';

// const Component = styled(Box)(({ theme }) => ({
//     display: 'flex',
//     justifyContent: 'space-between',
//     margin: '200px 130px 0 130px !important',
//     overflowX: 'overlay',
//     [theme.breakpoints.down('lg')]: {
//         margin: '0px !important'
//     }
// }))

// const Container = styled(Box)`
//     padding: 12px 8px;
//     text-align: center
// `

// const Text = styled(Typography)`
//     font-size: 14px;
//     font-weight: 600;
//     font-family: inherit;
// `;

// const NavBar = () => {
//     return (
//         <Component>
//             {
//                 navData.map(temp => (
//                     <Container>
//                         <img src={temp.url} style={{  width: 64 }} alt='notfound'/>
//                         <Text>{temp.text}</Text>
//                     </Container>
//                 ))
//             }
//         </Component>
//     )
// }

// export default NavBar;




import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import image from '../images/search.webp'
const cards = [
  {
    title: 'Web Developement & Designning',
    description: 'Description for lizard 1',
    image: '../images/img.png',
  },
  {
    title: 'Artificial Intelligence & More',
    description: 'Description for lizard 2',
    image: '../images/web.webp',
  },
  {
    title: 'Facebook & Insta Marketing',
    description: 'Description for lizard 2',
    image: '../images/face.png',
  },
  {
    title: 'Google Advertisement ',
    description: 'Description for lizard 2',
    image: '../images/web.webp',
  },
  {
    title: 'Logo Designning & Branding',
    description: 'Description for lizard 2',
    image: './images/img.png',
  },
  {
    title: 'Web Hosting & Many More',
    description: 'Description for lizard 2',
    image: '../images/web.webp',
  },
  // add more cards here
];

const cardStyles = {
  flexBasis: '30%',
  margin: '0.8rem',
  transition: "transform 0.15s ease-in-out",
  "&:hover": { transform: "scale3d(1.08, 1.08, 1)" },
  '@media (max-width: 600px)': {
    flexBasis: '100%',
  }
};

const containerStyles = {
  backgroundColor: 'black',
};

export default function NavBar() {
  return (
    <div style={containerStyles}>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '5%', top: '10%' }}>
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
              <Button variant='contained' size="small">Learn More</Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
}
