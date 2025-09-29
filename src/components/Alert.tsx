import type { FC } from "react";



interface AlertProps {
    message: string;
    onClose: () => void
}
const Alert: FC<AlertProps> = ({ message, onClose }) => {
    return (
        <div className="">
            <div className="" onChange={onClose}></div>
            <div className="">
                <header className="">
                    <p className="text-3xl font-sans font-medium">{message}</p>

                </header>
                <footer className="mb-10" style={{ justifyContent: 'center' }}>
                    <button className="px-4 py-2 bg-white dark:bg-blue-100 rounded-lg shadow hover:bg-blue-100 dark:hover:bg-white transition" onClick={onClose}>Close</button>
                </footer>
            </div>
        </div>
    )
}

export default Alert;
