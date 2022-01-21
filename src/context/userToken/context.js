import { createContext, useContext, useReducer } from "react";
import { UserTokenReducer, initialState } from "./reducer";
export const UserTokenState = createContext();
export const UserTokenStateDispatcher = createContext();
export function useUserTokenState() {
  return useContext(UserTokenState);
}
export function useUserTokenStateDispatcher() {
  return useContext(UserTokenStateDispatcher);
}

export function UserTokenProvider({ children }) {
  const [user, dispatch] = useReducer(UserTokenReducer, initialState);
  return (
    <UserTokenState.Provider value={user}>
      <UserTokenStateDispatcher.Provider value={dispatch}>
        {children}
      </UserTokenStateDispatcher.Provider>
    </UserTokenState.Provider>
  );
}
