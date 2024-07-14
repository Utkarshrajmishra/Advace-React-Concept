import './App.css'
import Fetch from './Fetch'
import { QueryClient, QueryClientProvider } from 'react-query'

function App() {
  const queryClient= new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Fetch />
    </QueryClientProvider>
  );
}

export default App
