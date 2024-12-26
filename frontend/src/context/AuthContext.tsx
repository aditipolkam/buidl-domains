import { createContext, useContext, useState, ReactNode } from "react";

interface UserInfo {
  name: string;
  address: string;
}

interface AuthContextType {
  isLoggedIn: boolean;
  userInfo: UserInfo | null;
  login: () => void;
  logout: () => void;
  updateUserInfo: (info: UserInfo) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  const login = () => setIsLoggedIn(true);
  const logout = () => {
    setIsLoggedIn(false);
    setUserInfo(null);
  };
  const updateUserInfo = (info: UserInfo) => setUserInfo(info);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, userInfo, login, logout, updateUserInfo }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
