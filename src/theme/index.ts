import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({


    typography:{

        h1:{
        fontFamily: "'Montserrat', sans-serif",
        },
        h2:{
            fontFamily: "'Arial', sans-serif",
            }    
    },
    palette: {
        primary:{
            main: '#C68888',
            
          },
          secondary:{
            main: '#949494',
            
          },


    },
    overrides: {
        MuiButton: {
            root: {
                borderRadius: '500rem',
                fontWeight: 'bold',
                fontSize: 15,
                padding: `13px 26px`,
                minWidth: 118,
            },
            contained: {
                color: '#fff',
            },
            containedPrimary: {
                color: '#fff',
            },
            outlinedPrimary: {
                color: '#CB9998',
                borderColor: '#CB9998',
                borderWidth: 2,
                '&:hover': {
                    borderWidth: 2,
                },
                '&:focus': {
                    borderWidth: 2,
                },
            },
        },
    }
});

export default theme;