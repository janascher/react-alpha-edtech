export interface IModal {
    onSubmit?: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
    children?: React.ReactNode;
    isOpen?: boolean;
    toggle?: () => void;
}
