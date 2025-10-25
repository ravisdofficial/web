export const slideFromLeft = (delay = 0) => ({
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, delay, ease: "easeOut" }
    }
});

export const slideFromRight = (delay = 0) => ({
    hidden: { opacity: 0, x: 100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, delay, ease: "easeOut" }
    }
});

export const fadeScale = (delay = 0) => ({
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.8, delay, ease: "easeOut" }
    }
});

export const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay, ease: "easeOut" }
    }
});