import { useState } from "react";

export const useLanding = (initialValue = true) => {
    const [isOpenLanding, setIsOpenLanding] = useState(initialValue);

    const openLanding = () => setIsOpenLanding(true);
    const closeLanding = () => setIsOpenLanding(false);

    return[isOpenLanding, openLanding, closeLanding];
}

export default useLanding;