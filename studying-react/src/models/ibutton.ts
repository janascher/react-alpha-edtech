export interface IButton {
    children: React.ReactNode;
    type?: 'submit';
    onClick: () => void;
}