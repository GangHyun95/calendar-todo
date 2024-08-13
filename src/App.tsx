import './App.css';
import { DateProvider } from './context/DateContext';
import Calendar from './components/Calendar/Calendar';

function App() {
  return (
    <DateProvider>
      <Calendar/>
    </DateProvider>
  );
}

export default App;
