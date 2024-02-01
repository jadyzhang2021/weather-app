import DataContextProvider from "./store/DataContext";
import Header from "./components/Header";

function App() {
  return (
    <DataContextProvider>
      <Header />
    </DataContextProvider>
  );
}

export default App;
