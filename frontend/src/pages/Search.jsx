import React, { useState } from "react";
import {
  Box,
  TextField,
  IconButton,
  Container,
  Paper,
  Typography,
  CircularProgress,
  Fade,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { fetchUrl } from "../services/api";
import { SearchResult } from "../components/SearchResult.jsx";

export const Search = () => {
  const [query, setQuery] = useState("");
  const [url, setUrl] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetchUrl(query);
      setUrl(response.data);
    } catch (error) {
      setError("An error occurred while searching. Please try again.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container 
      maxWidth="md" 
      sx={{ 
        mt: { xs: 4, md: 8 }, 
        mb: 4,
        px: { xs: 2, sm: 3 },
      }}
    >
      <Box sx={{ 
        textAlign: "center", 
        mb: 4,
        maxWidth: "800px",
        mx: "auto"
      }}>
        
        <Typography variant="subtitle1" color="text.secondary">
          Find what you're looking for across the web
        </Typography>
      </Box>

      <Box sx={{ 
        maxWidth: "800px",
        // mx: "auto",
        mb: 4
      }}>
        <form onSubmit={handleSubmit}>
          <Paper
            elevation={4}
            sx={{
              display: "flex",
              alignItems: "center",
              borderRadius: "50px",
              px: 3,
              py: 1,
              width: "100%",
              border: "1px solid",
              borderColor: "divider",
              "&:hover": {
                boxShadow: "0px 4px 12px rgba(25, 118, 210, 0.2)",
              },
              transition: "all 0.3s ease",
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
                  sx: { 
                    fontSize: { xs: "1rem", md: "1.2rem" },
                    pl: 2,
                  },
                }}
              />
            </Box>
            <IconButton 
              type="submit" 
              sx={{ 
                ml: 2,
                backgroundColor: "primary.main",
                color: "white",
                "&:hover": {
                  backgroundColor: "primary.dark",
                },
                width: 48,
                height: 48,
              }}
              disabled={isLoading}
            >
              {isLoading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                <SearchIcon sx={{ fontSize: 26 }} />
              )}
            </IconButton>
          </Paper>
        </form>

        {error && (
          <Fade in={!!error}>
            <Typography 
              color="error" 
              sx={{ 
                mt: 2,
                textAlign: "center",
                p: 2,
                backgroundColor: "error.light",
                borderRadius: 2,
              }}
            >
              {error}
            </Typography>
          </Fade>
        )}
      </Box>

      <Box sx={{ 
        maxWidth: "1000px",
        mx: "auto"
      }}>
        <SearchResult url={url} isLoading={isLoading} />
      </Box>
    </Container>
  );
};