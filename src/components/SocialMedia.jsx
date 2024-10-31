import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from '@mui/material';

const SocialMedia = () => {
    return (
        <Box className="footerr" textAlign="center" mt={4}>
            <Box className="social-media" mb={2}>
                <Link href="mailto:starkarvind1@gmail.com"><i className='bx bxl-gmail'></i></Link>
                <Link href="https://www.linkedin.com/in/arvind-sharma-3884a2205/" target="_blank" rel="noopener noreferrer"><i className='bx bxl-linkedin-square'></i></Link>
                <Link href="https://github.com/monk0707" target="_blank" rel="noopener noreferrer"><i className='bx bxl-github'></i></Link>
                <Link href="https://www.instagram.com/arvind_mvrx/" target="_blank" rel="noopener noreferrer"><i className='bx bxl-instagram'></i></Link>
            </Box>
            <Typography variant="body2">
                COPYRIGHT &copy; 2024 KESHAV GIRASE | ALL RIGHTS RESERVED.
            </Typography>
        </Box>
    );
};

export default SocialMedia;
