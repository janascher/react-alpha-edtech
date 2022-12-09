import { useState, createContext } from 'react';
import { IUserData, IUserContextProps } from '../models/iuserdata';
import { UserProviderProps } from '../models/iuserproviderprops';

const defaultUserData: IUserData = {
    id: '',
    userName: '',
    userEmail: '',
    userPassWord: '',
};

const UserContext = createContext<IUserContextProps>(undefined as any);

/* Para o Rect DevTools, o nome que vai aparecer do contexto é user.  */
UserContext.displayName = 'User';

function UserProvider({ children }: UserProviderProps) {
    const [userData, setUserData] = useState<IUserData>(defaultUserData);
    const value = { userData, setUserData };

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export { UserContext };
export default UserProvider;
