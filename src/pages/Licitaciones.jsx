import React, { useEffect, useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Box, Typography
} from '@mui/material';

function Licitaciones() {
  const [licitaciones, setLicitaciones] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filtros
  const [codigo, setCodigo] = useState('');
  const [nombre, setNombre] = useState('');
  const [estado, setEstado] = useState('');
  const [fecha, setFecha] = useState('');

  useEffect(() => {
    fetch('/api/ipss/api/mercadoPublico/resultado.json')
      .then(res => res.json())
      .then(data => {
        setLicitaciones(data.Listado || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "40vh" }}>
        <Typography variant="h6" sx={{ color: "#222" }}>Cargando...</Typography>
      </Box>
    );
  }

  const licitacionesFiltradas = licitaciones.filter(l =>
    l.CodigoExterno.toLowerCase().includes(codigo.toLowerCase()) &&
    l.Nombre.toLowerCase().includes(nombre.toLowerCase()) &&
    l.CodigoEstado.toString().toLowerCase().includes(estado.toLowerCase()) &&
    l.FechaCierre.toLowerCase().includes(fecha.toLowerCase())
  );

  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "100vh",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        px: { xs: 0, sm: 2, md: 0 },
        mt: { xs: 2, md: 6 },
        mb: { xs: 2, md: 6 },
        overflowX: "hidden"
      }}
    >
      <Typography
        variant="h5"
        sx={{
          color: "#222",
          mb: 2,
          fontSize: { xs: "1.1rem", sm: "1.5rem" },
          width: "100%",
          textAlign: "center"
        }}
      >
        Listado de Licitaciones
      </Typography>
      <Box sx={{ width: "100%", maxWidth: "1200px" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
            mb: 2,
            width: "100%",
            justifyContent: "center",
          }}
        >
          <TextField
            label="Filtrar por código"
            variant="outlined"
            size="small"
            value={codigo}
            onChange={e => setCodigo(e.target.value)}
            sx={{ width: { xs: "100%", sm: 150 } }}
          />
          <TextField
            label="Filtrar por nombre"
            variant="outlined"
            size="small"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
            sx={{ width: { xs: "100%", sm: 250 } }}
          />
          <TextField
            label="Filtrar por estado"
            variant="outlined"
            size="small"
            value={estado}
            onChange={e => setEstado(e.target.value)}
            sx={{ width: { xs: "100%", sm: 120 } }}
          />
          <TextField
            label="Filtrar por fecha de cierre"
            variant="outlined"
            size="small"
            value={fecha}
            onChange={e => setFecha(e.target.value)}
            sx={{ width: { xs: "100%", sm: 160 } }}
          />
        </Box>
        <Typography
          sx={{
            color: "#222",
            mb: 1,
            fontSize: { xs: "0.95rem", sm: "1rem" },
            textAlign: "center",
            width: "100%"
          }}
        >
          Total: {licitacionesFiltradas.length}
        </Typography>
        <Box sx={{ width: "100%", overflowX: "auto" }}>
          <TableContainer
            component={Paper}
            sx={{
              maxHeight: 600,
              minWidth: 350,
              width: "100%",
              boxSizing: "border-box",
              overflowX: "auto"
            }}
          >
            <Table stickyHeader size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ background: "#fff", color: "#222", textTransform: "lowercase", fontWeight: "normal", fontSize: { xs: "0.85rem", sm: "1rem" }, px: { xs: 1, sm: 2 } }}>Codigo</TableCell>
                  <TableCell sx={{ background: "#fff", color: "#222", textTransform: "lowercase", fontWeight: "normal", fontSize: { xs: "0.85rem", sm: "1rem" }, px: { xs: 1, sm: 2 } }}>Nombre</TableCell>
                  <TableCell sx={{ background: "#fff", color: "#222", textTransform: "lowercase", fontWeight: "normal", fontSize: { xs: "0.85rem", sm: "1rem" }, px: { xs: 1, sm: 2 } }}>Estado</TableCell>
                  <TableCell sx={{ background: "#fff", color: "#222", textTransform: "lowercase", fontWeight: "normal", fontSize: { xs: "0.85rem", sm: "1rem" }, px: { xs: 1, sm: 2 } }}>Fecha de Cierre</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {licitacionesFiltradas.map((licitacion, idx) => (
                  <TableRow key={idx} sx={{ background: idx % 2 === 0 ? "#fff" : "#e0e7ef" }}>
                    <TableCell sx={{ color: "#222", fontSize: { xs: "0.85rem", sm: "1rem" }, px: { xs: 1, sm: 2 } }}>{licitacion.CodigoExterno}</TableCell>
                    <TableCell sx={{ color: "#222", fontSize: { xs: "0.85rem", sm: "1rem" }, px: { xs: 1, sm: 2 } }}>{licitacion.Nombre}</TableCell>
                    <TableCell sx={{ color: "#222", fontSize: { xs: "0.85rem", sm: "1rem" }, px: { xs: 1, sm: 2 } }}>{licitacion.CodigoEstado}</TableCell>
                    <TableCell sx={{ color: "#222", fontSize: { xs: "0.85rem", sm: "1rem" }, px: { xs: 1, sm: 2 } }}>{licitacion.FechaCierre}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
}

export default Licitaciones;