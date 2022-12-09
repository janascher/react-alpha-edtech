export interface IButton {
    children: React.ReactNode;
    type?: 'submit' | 'button';
    onClick: () => void;
}