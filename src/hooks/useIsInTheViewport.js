import {
    useEffect,
    useRef,
    useState
} from 'react'

export const useIsInTheViewport = (options) => {

    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const callbackFunction = (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
    }

    useEffect(() => {
        const target = containerRef.current
        const observer = new IntersectionObserver(callbackFunction, options);

        if (target) {
            observer.observe(target);
        }

        return () => {
            observer.unobserve(target);
        }
    }, [containerRef, options])

    return [isVisible, containerRef];
}