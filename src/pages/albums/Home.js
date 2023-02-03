//Feb 2nd, 2023 gonna start hero page today
import React from 'react';
import { Box, Typography } from '@mui/material';
import heroimg from '../albums/images/me/DSC00680.jpg';
import { borderRadius } from '@mui/system';
import styled from "styled-components";
import Button from '@mui/material/Button';


const handleClickScroll = () => {
    const element = document.getElementById('album');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

//layout here
const HeroImg = styled.div`
  width: 80%;
  display: flex;
  justify-content: flex-end;

  & > img {
    display: block;
    border-radius: 30rem;
    width: clamp(1px, 100%, 450px);
    border: 3px solid #999a9a57;
    padding: 0.5rem;
  }

  @media (max-width: 993px) {
    display: block;
  }
`;


export default function Home() {
    return(

        <Box>

        <Typography
        variant='h4'
        sx = 
        {{
            pt: '10%',
            pl: 'auto',
            // margin: '1%',
            // padding: 'right'
        }}
        >
        Hi, I'm Jimmy

        </Typography>

        <Typography
        variant='h1'
        sx = 
        {{
            margin: 'auto'
        }}
        >
            AKA PIXBYHUYNH
        </Typography>

        <Typography
        variant='subject1'
        sx = 
        {{
            margin: 'auto',
            width: '100%'
        }}
        >
            I am a passionate photographer with a keen eye for capturing moments in time. I have a strong 
            understanding of lighting, composition, and technical aspects of photography, and use this knowledge
             to bring out the beauty in every subject I shoot. Whether I am taking photos of people, landscapes,
              or still life, I aim to tell a story through my images and create art that evokes emotion. I am constantly 
              learning and experimenting with new techniques, and am always striving to improve my craft. My ultimate goal 
              is to use my talent to bring joy to others and to preserve memories that will last a lifetime.
        </Typography>
        
            <HeroImg>
                <img
              src={`${heroimg}?w=248&fit=crop&auto=format`}
              srcSet={`${heroimg}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={'me'}
              loading="lazy"
              className='Hero'
            />
            </HeroImg>

            <Button
       variant="outlined"
    //    onClick={handleClickScroll}
    href = '/albums'
       disableElevation
       sx = {{
        margin: 'auto',
        width: '40%',
        padding: '1%'
       }}
       >Return to Home
       </Button>


        </Box>

    );

}