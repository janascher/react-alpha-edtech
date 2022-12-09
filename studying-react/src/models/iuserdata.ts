export interface IUserData {
    id: string;
    userName: string;
    userEmail: string;
    userPassWord: string;
}

export interface IUserContextProps {
    userData: IUserData;
    setUserData: React.Dispatch<React.SetStateAction<IUserData>>;
}
