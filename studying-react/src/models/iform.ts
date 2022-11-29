import { IUser } from './iuser';

export interface IFromProps {
    setUsers: React.Dispatch<React.SetStateAction<IUser>>;
}
