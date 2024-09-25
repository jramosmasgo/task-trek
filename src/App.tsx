import '@/styles/main.scss';
import { useState } from 'react';
import UserRouter from './routers/user.router';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={isDarkTheme ? 'dark-theme' : 'light-theme'}>
      <UserRouter />
    </div>
  )
}

export default App
