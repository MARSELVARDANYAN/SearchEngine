import React, { useState } from 'react';
import {
  Box,
  TextField,
  IconButton,
  Container,
  Paper,
  Button
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { fetchUrl } from '../services/api';
import {SearchResult} from '../components/SearchResult.jsx';

export const Search = () => {
  const [query, setQuery] = useState('');
  const [url, setUrl] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;


        fetchUrl(query)
            .then((response) => {
                const data = response.data;
                
                setUrl(data);
            })
            .catch((error) => {
                console.log("heloooo");
                console.error(error);
            });
  };

  return (
    <Container maxWidth="md" sx={{ mt: 15 }}>
      <form onSubmit={handleSubmit}>
        <Paper
          elevation={6}
          sx={{
            display: 'flex',
            alignItems: 'center',
            borderRadius: '50px',
            px: 3,
            py: 1,
            width: '100%',
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <TextField
              fullWidth
              variant="standard"
              placeholder="Enter your search term..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              InputProps={{
                disableUnderline: true,
                sx: { fontSize: '1.6rem', pl: 2 },
              }}
            />
          </Box>
          <IconButton type="submit" sx={{ ml: 2 }}>
            <SearchIcon sx={{ fontSize: 30 }} />
          </IconButton>
        </Paper>
        
      </form>

      { <SearchResult url={url} />}
    </Container>
  );
};
