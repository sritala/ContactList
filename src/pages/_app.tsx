import React from 'react';
import App from 'next/app';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../theme';
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';

class TestApp extends App<{}> {
    componentDidMount() {
      // Remove the server-side injected CSS.
      const jssStyles = document.querySelector('#jss-server-side');
      jssStyles?.parentElement?.removeChild(jssStyles);
    }
  
    render() {
      const { Component, pageProps } = this.props;
  
      return (
        <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Header />
            <Component {...pageProps} />
            <Footer/>
        </ThemeProvider>
      );
    }
  }
  
  export default TestApp;