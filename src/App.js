import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import './App.css';
import Hero from './components/Hero';
import Products from './components/Products';
import Footer from './components/Footer'
import {productData} from './components/Products/items'
import { GlobalStyle } from './globalStyle';
import themeObject from './util/themes/Themes';


function App() {
  const theme = createMuiTheme(themeObject)
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Hero/>
        <Products heading="Menu" data={productData}/>
        <Footer/>
      </ThemeProvider>
    </div>
  );
}

export default App;
