import {useState, useEffect} from 'react';

export default function useWindowWidth(){
    const [getWindowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {

        const setWidth = () => {
            const newWidth = window.innerWidth;
            setWindowWidth(newWidth);
        }

        window.addEventListener("resize", () => {
            setWidth()
        })

        return () => window.removeEventListener('resize', setWidth);
    }, [])

    return setWindowWidth;
}