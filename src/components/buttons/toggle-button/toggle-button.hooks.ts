import { useMemo, useState } from "react";

export const useToggleButton = (
    defaultValue: boolean,
    text: string,
    name: string,
    onClick: () => void
) => {
    const [isChecked, setIsChecked] = useState<boolean>(defaultValue);
    const handleClick = () => {
        onClick();
        setIsChecked(!isChecked);
    };
    const id = useMemo(() => name.replace(" ", ""), [text]);

    return {
        isChecked,
        handleClick,
        id,
    };
};
