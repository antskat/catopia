import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [authToken, setAuthToken] = useState(null);

  useEffect(() => {
    // При ініціалізації компонента читаємо дані з localStorage
    const storedLoginStatus = localStorage.getItem('isLogin');
    const storedAuthToken = localStorage.getItem('authToken');

    if (storedLoginStatus) {
      setIsLogin(JSON.parse(storedLoginStatus));
    }

    if (storedAuthToken) {
      setAuthToken(storedAuthToken);
    }
  }, []);

  const setLoginStatus = (status) => {
    setIsLogin(status);
    // Зберігаємо дані у localStorage при кожній зміні стану
    localStorage.setItem('isLogin', JSON.stringify(status));
  };

  return (
    <AuthContext.Provider value={{ isLogin, setLoginStatus, authToken, setAuthToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
