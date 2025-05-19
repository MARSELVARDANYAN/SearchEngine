import { 
  Box, 
  Card, 
  Typography, 
  Fade,
  Skeleton,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import PublicIcon from "@mui/icons-material/Public";

export const SearchResult = ({ url, isLoading }) => {
    return (
        <Box>
            {isLoading ? (
                <Box>
                    {[...Array(3)].map((_, index) => (
                        <Skeleton 
                            key={index}
                            variant="rectangular" 
                            height={120} 
                            sx={{ 
                                borderRadius: 2, 
                                mb: 2,
                                animation: "pulse 1.5s ease-in-out infinite",
                            }} 
                        />
                    ))}
                </Box>
            ) : url.length ? (
                <List sx={{ width: "100%" }}>
                    {url.map((ur, index) => (
                        <Fade in={true} key={ur}>
                            <Card 
                                elevation={0}
                                sx={{ 
                                    borderRadius: 2, 
                                    mb: 2,
                                    border: "1px solid",
                                    borderColor: "divider",
                                    "&:hover": {
                                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                                    },
                                    transition: "all 0.2s ease",
                                    width: "100%",
                                }}
                            >
                                <ListItem 
                                    component="a"
                                    href={ur}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{
                                        "&:hover": {
                                            backgroundColor: "action.hover",
                                        },
                                        borderRadius: 2,
                                        p: 3,
                                    }}
                                >
                                    <ListItemAvatar>
                                        <Avatar sx={{ 
                                            bgcolor: "primary.main",
                                            width: 40,
                                            height: 40
                                        }}>
                                            <PublicIcon fontSize="small" />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={
                                            <Typography 
                                                variant="subtitle1" 
                                                component="div"
                                                color="primary"
                                                sx={{ 
                                                    fontWeight: 500,
                                                }}
                                            >
                                                Result {index + 1}
                                            </Typography>
                                        }
                                        secondary={
                                            <Typography
                                                variant="body2"
                                                color="text.primary"
                                                sx={{
                                                    wordBreak: "break-word",
                                                    mt: 0.5,
                                                }}
                                            >
                                                {ur}
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                            </Card>
                        </Fade>
                    ))}
                </List>
            ) : (
                <Box 
                    sx={{ 
                        textAlign: "center", 
                        p: 4,
                        border: "1px dashed",
                        borderColor: "divider",
                        borderRadius: 2,
                        backgroundColor: "background.paper",
                    }}
                >
                    <SearchIcon sx={{ 
                        fontSize: 60, 
                        color: "text.disabled", 
                        mb: 2,
                        opacity: 0.6
                    }} />
                    <Typography variant="h6" color="text.secondary" gutterBottom>
                        No results found
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Try different keywords or check your spelling
                    </Typography>
                </Box>
            )}
        </Box>
    );
};