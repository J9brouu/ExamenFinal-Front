import { Box, Typography } from "@mui/material";

const Home = () => {
    return (
        <Box id="inicio" sx={{ px: { xs: 1, sm: 2, md: 4 }, py: { xs: 2, sm: 3 } }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1, fontSize: { xs: '1.3rem', sm: '1.7rem', md: '2.1rem' } }} gutterBottom>
                ¡Bienvenidos a LicitaSeguro!
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 1, fontSize: { xs: '0.95rem', sm: '1.05rem', md: '1.15rem' } }} paragraph>
                Tu aliado en la gestión de licitaciones. Aquí encontrarás una amplia variedad de oportunidades para participar en proyectos y mejorar tus habilidades.
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 3, fontSize: { xs: '0.95rem', sm: '1.05rem', md: '1.15rem' } }} paragraph>
                Explora nuestras licitaciones y descubre cómo puedes contribuir a proyectos emocionantes y desafiantes.
            </Typography>
         
            
        </Box>
    );
};

export default Home;