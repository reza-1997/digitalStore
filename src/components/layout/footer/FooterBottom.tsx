
import { Box, Container, Grid, Typography } from '@mui/material';

import type { FooterDict } from '@/src/types';

import SocialLinks from './SocialLinks';

interface FooterBottomProps {
    dict: FooterDict['social'];
    isRtl: boolean;
}

const FooterBottom = ({ dict, isRtl }: FooterBottomProps) => {

    return (
        <Box
            sx={{
                backgroundColor: "background.paper",
                py: 4,
                px: 3,
            }}
        >
            <Container maxWidth="xl">
                <Grid
                    container
                    spacing={2}
                    sx={{
                        alignItems: "center",
                        justifyContent: "space-between"
                    }}
                >
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography
                            variant="body2"
                            sx={{
                                color: 'text.secondary',
                                mb: 2,
                                fontWeight: 600,
                                textAlign: isRtl ? 'right' : 'left',
                            }}
                        >
                            {dict.followUs}
                        </Typography>

                        <SocialLinks isRtl={isRtl} />
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography
                            variant="body2"
                            sx={{
                                color: 'text.secondary',
                                textAlign: isRtl ? 'right' : 'left',
                            }}
                        >
                            {dict.copyright}
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}


export default FooterBottom;
