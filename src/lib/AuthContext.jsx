import { createContext, useContext } from 'react';

// Stub auth context for local-only app with no Base44
const AuthContext = createContext({
  isLoadingAuth: false,
  isLoadingPublicSettings: false,
  authError: null,
  navigateToLogin: () => {},
  user: null,
});

export function AuthProvider({ children }) {
  return (
    <AuthContext.Provider
      value={{
        isLoadingAuth: false,
        isLoadingPublicSettings: false,
        authError: null,
        navigateToLogin: () => {},
        user: null,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
