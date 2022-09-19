import { Navbar } from './components/Navbar';
import { Parrafo } from './components/Parrafo';
import { OtroProvider } from './context/OtroProvider';
import ThemeProvider from './context/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <OtroProvider>
        <Navbar />
      </OtroProvider>
      <Parrafo />
    </ThemeProvider>
  );
}

export default App;
