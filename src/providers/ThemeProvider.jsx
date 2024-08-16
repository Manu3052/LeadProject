import { ThemeProvider as MUIThemeProvider, createTheme } from '@mui/material/styles';

const ThemeProvider = ({ children }) => {
    const theme = createTheme({
        palette: {
            primary: {main:'#0C1E45' },
            secondary: {main:'#27C05A'},
            white: {main: '#fff'},
            blue: {main: '#2898BA'},
            success: {
                main: '#1fa824',
            },
            warning: {
                main: '#ffce22',
            },
            error: {
                main: '#d81212',
            },
        }
    });
    return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>;
}

export default ThemeProvider;