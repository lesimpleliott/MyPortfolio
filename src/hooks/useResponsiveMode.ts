import { useCallback, useEffect } from "react";
import useStoreResponsive from "../stores/responsive.store";

const useResponsiveMode = () => {
  const { setResponsiveMode } = useStoreResponsive();

  const initResponsiveMode = useCallback(() => {
    if (window.innerWidth < 768) {
      setResponsiveMode("mobile");
    } else {
      setResponsiveMode("desktop");
    }
  }, [setResponsiveMode]);

  useEffect(() => {
    // Initialisation de la navbar en fonction de la taille de l'écran
    initResponsiveMode();
    window.addEventListener("resize", initResponsiveMode);
    // Nettoyage des eventListener
    return () => {
      window.removeEventListener("resize", initResponsiveMode);
    };
  }, [initResponsiveMode]);
};

export default useResponsiveMode;
