import { Grid} from "@mui/material";
import { FormProvider } from 'react-hook-form';
import { Paper } from '@mui/material';
import { InputPassword } from "../../components/molecules/Inputs/InputPassword";
import { Logo } from "../../components/atoms/logo/Logo";
import { ButtonRegisterComponent } from "../../components/molecules/buttons/ButtonRegisterComponent";
import { LinkComponent } from "../../components/molecules/links/LinkComponent";
import { InputText } from "../../components/molecules/Inputs/InputText";
import { InputEmail } from "../../components/molecules/Inputs/InputEmail";

export const RegisterComponent = ({ methods, onSubmit }) => {
    return (
        <>
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
                        <FormProvider {...methods}>
                            <Grid
                                    component="form"
                                    container
                                    spacing={2}
                                    alignItems="center"
                                    onSubmit={onSubmit}
                                >
                                    <Grid item xs={12}>
                                        <InputText
                                            id="userName"
                                            fullWidth
                                            name="userName"
                                            label="Seu nome completo"
                                            required
                                            variant="outlined"
                                            color="blue"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <InputEmail
                                            id="userEmail"
                                            fullWidth
                                            name="userEmail"
                                            label="E-mail"
                                            required={true}
                                            variant="outlined"
                                            color="blue"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <InputPassword id="password" name="password" label="Senha" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <InputPassword
                                            name="userPasswordConfirmation"
                                            label="Confirme sua senha"
                                        />
                                    </Grid>
                                    <Grid item xs={12}  style={{ textAlign: 'right', marginBottom: "10px" }}>
                                        <LinkComponent text="Já possui uma conta?Fazer o login" href="/"/>
                                    </Grid>
                                    <Grid item xs={12} style={{ textAlign: 'center' }}>
                                        <ButtonRegisterComponent color="secondary" text="Criar Conta"/>
                                    </Grid>
                            </Grid>
                        </FormProvider>
                    </Paper>
                </Grid>
            </Grid> 
        </>
    );
};
