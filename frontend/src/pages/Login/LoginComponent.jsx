import { Grid} from "@mui/material";
import { FormProvider } from 'react-hook-form';
import { Paper } from '@mui/material';
import TextField from '@mui/material/TextField';
import { InputPassword } from "../../components/molecules/Inputs/InputPassword";
import { Logo } from "../../components/atoms/logo/Logo";
import { ButtonRegisterComponent } from "../../components/molecules/buttons/ButtonRegisterComponent";
import { LinkComponent } from "../../components/molecules/links/LinkComponent";

export const LoginComponent = ({ methods, handleFormSubmit }) => {
    return (
        <>
            <FormProvider {...methods}>
                <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    style={{ minHeight: '100vh' }}
                >
                    <Grid item xs={12} sm={8} md={4}>
                        <Paper
                            sx={{
                                padding: '20px',
                                margin: 'auto',
                                borderRadius: '8px',
                                boxShadow: 3,
                                background: 'default',
                            }}
                        >
                            <Grid item xs={12} style={{ textAlign: 'center', marginBottom: '60px' }}>
                                <Logo/>
                            </Grid>
                            <Grid
                                component="form"
                                container
                                spacing={2}
                                alignItems="center"
                                onSubmit={handleFormSubmit}
                            >
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        id="userEmail"
                                        label="E-mail"
                                        required
                                        variant="outlined"
                                        color="blue"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <InputPassword id="userPassword" label="Senha" />
                                </Grid>
                                <Grid item xs={12}  style={{ textAlign: 'right', marginBottom: "10px" }}>
                                    <LinkComponent text="Não possui uma conta?Faça o cadastro" href="/cadastro"/>
                                </Grid>
                                <Grid item xs={12} style={{ textAlign: 'center' }}>
                                    <ButtonRegisterComponent color="secondary" text="Entrar" type="form"/>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </FormProvider>
        </>
    );
};
