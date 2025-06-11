import { Box, Typography, Card, CardContent, CardMedia, Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";

const InfoCards = () => (
  <Grid container spacing={2} justifyContent="center">
    <Grid item xs={12} sm={4}>
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
        <CardMedia
          component="img"
          height="220"
          image="/src/assets/licitaciones.png"
          alt="Pieza única"
          sx={{ objectFit: 'contain', objectPosition: 'center', display: 'block', mx: 'auto', my: 2 }}
        />
        <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
          <Typography gutterBottom variant="h6" component="div">
            Licitaciones
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Explora nuestras licitaciones 
          </Typography>
        </CardContent>
        <Box sx={{ p: 2, pt: 0, width: '100%' }}>
          <Button
            component={Link}
            to="/licitaciones"
            variant="contained"
            color="primary"
            sx={{
              width: { xs: '100%', sm: 'auto' },
              fontSize: { xs: '0.95rem', sm: '1rem' }
            }}
          >
            Ver Licitaciones
          </Button>
        </Box>
      </Card>
    </Grid>
  </Grid>
);

export default InfoCards;