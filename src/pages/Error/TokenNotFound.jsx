import { Grid, Paper } from "@mui/material"
import { LinkComponent } from "../../components/molecules/links/LinkComponent"


export const TokenNotFound = () =>{
    return(
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            style={{ minHeight: '100vh' }}
        >
            <Paper
                sx={{
                    padding: '20px',
                    margin: 'auto',
                    borderRadius: '8px',
                    boxShadow: 3,
                    background: 'default',
                }}
            >
                <Grid
                    container
                    spacing={2}
                    alignItems="center"
                >
                    <LinkComponent href="/" text="Ocorreu um erro. Por favor, faça login novamente!"/>
                </Grid>
            </Paper>
        </Grid>
    )
}