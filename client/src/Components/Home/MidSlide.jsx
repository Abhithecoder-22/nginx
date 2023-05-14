// import { Box, styled } from '@mui/material';

// import Slide from './Slide';

// const Component = styled(Box)`
//     display: flex;
// `

// const LeftComponent = styled(Box)(({ theme}) => ({
//     width: '83%',
//     [theme.breakpoints.down('md')]: {
//         width: '100%'
//     }
// }))

// const RightComponent = styled(Box)(({ theme}) => ({
//     marginTop: 10,
//     background: '#FFFFFF',
//     width: '17%',
//     marginLeft: 10,
//     padding: 5,
//     textAlign: 'center',
//     [theme.breakpoints.down('md')]: {
//         display: 'none'
//     }
// }));

// const MidSlide = ({ products }) => {
//     const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';

//     return (
//         <Component>
//             <LeftComponent>
//                 <Slide
//                     data={products}
//                     title='Deals of the Day'
//                     timer={true}
//                     multi={true}
//                 />
//             </LeftComponent>
//             <RightComponent>
//                 <img src={adURL} style={{width: 217}} alt='notimg'/>
//             </RightComponent>
//         </Component>
//     )
// }

// export default MidSlide;

import * as React from "react";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import  axios  from "axios";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    display: "flex",
    marginTop: "10%",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(4),
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
  },
  formInput: {
    marginBottom: theme.spacing(2),
  },
  submitButton: {
    marginTop: theme.spacing(2),
  },
}));

export default function ProposalForm() {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [error , setError]= useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !company || !message) {
      setError(true);
      return;
    }

    axios.post("https://backend.rvtechmail.com:8000/contact", {
      FullName: name,
      Email: email,
      Phone: phone,
      companyName: company,
      YourMessage: message,
    })
    .then((response) => {
      alert("Form Submitted Successfully");
      setName("");
      setEmail("");
      setPhone("");
      setCompany("");
      setMessage("");
    })
    .catch((error) => {
      console.log("not submited",error);
    });
  };



  return (
    <Container maxWidth="sm">
      {/* <Typography variant="h3" align="center" gutterBottom marginTop={"20%"}>
        Get Proposal
      </Typography> */}
      <form className={classes.formContainer} onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => {
            setName(e.target.value);
          }}
          label="Name"
          name="name"
          type="name"
          variant="outlined"
          fullWidth
          className={classes.formInput}
        />
        <TextField
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          label="Email"
          name="email"
          variant="outlined"
          fullWidth
          className={classes.formInput}
        />
        <TextField
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          label="Phone"
          name="phone"
          variant="outlined"
          fullWidth
          className={classes.formInput}
        />
        <TextField
        
          onChange={(e) => {
            setCompany(e.target.value);
          }}
          label="Company Name"
          name="company"
          variant="outlined"
          fullWidth
          className={classes.formInput}
        />
        <TextField
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          label="Message"
          name="message"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          className={classes.formInput}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          onClick={handleSubmit}
          className={classes.submitButton}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}
