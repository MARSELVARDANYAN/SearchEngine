import React from 'react';
import { Box, Card, CardContent, Typography, Link } from '@mui/material';

export const SearchResult = ({ url }) => {
    return (
        <Box sx={{ my: 2 }}>
            <Card elevation={3} sx={{ borderRadius: 3, p: 2 }}>
                <CardContent>
                    <Typography variant="h6" sx={{ mb: 1 }}>
                        Search result:
                    </Typography>
                    {url ? (
                        <Link 
                            href={url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            underline="hover"
                            color="primary"
                            sx={{ fontSize: '2rem', wordBreak: 'break-word' }}
                        >
                            {url}
                        </Link>
                    ) : (
                        <Typography variant="body1" color="text.secondary">
                            Nothing found
                        </Typography>
                    )}
                </CardContent>
            </Card>
        </Box>
    );
};
