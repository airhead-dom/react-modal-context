
import createModalStore from "./components/createModalStore";
import { ModalProvider } from './components/modalContext';
import ContentPage from './components/ContentPage'
import './App.css';

function App() {
  return (
    <ModalProvider value={createModalStore()}>
      <div className="app">
          <ContentPage />
      </div>
    </ModalProvider>
  );
}

export default App;
