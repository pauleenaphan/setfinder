import { useEffect } from 'react';

export const useMode = (mode: string) => {
    useEffect(() => {
        document.body.className = mode === "dark" ? "dark-mode" : "light-mode";

        const beads = document.querySelectorAll('.kandiPinkBead, .kandiPurpleBead, .kandiBlueBead, .kandiGreenBead, .kandiYellowBead, .kandiRedBead');
        beads.forEach(bead => {
            if (mode === "dark") {
                bead.classList.add('glow-effect');
            } else {
                bead.classList.remove('glow-effect');
            }
        });
    }, [mode]);
};
