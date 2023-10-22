import React, { useEffect, useState } from "react";

const useThemeSwitch = () => {
  const preferDarkQuery = "(prefer-color-scheme: dark)";
  const [mode, setMode] = useState("");

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPreference = window.localStorage.getItem("theme");
    const handleThemeChange = () => {
      if (userPreference) {
        let modeType = userPreference === "dark" ? "dark" : "light";
        setMode(modeType);
        if (modeType === "dark") {
          document.documentElement.classList?.add("dark");
        } else {
          document.documentElement.classList?.remove("dark");
        }
      } else {
        let modeType = mediaQuery.matches ? "dark" : "light";
        setMode(modeType);
        window.localStorage.setItem("theme", modeType);
        if (modeType === "dark") {
          document.documentElement.classList?.add("dark");
        } else {
          document.documentElement.classList?.remove("dark");
        }
      }
    };
    handleThemeChange();
    mediaQuery.addEventListener("change", handleThemeChange);
    return () => mediaQuery.removeEventListener("change", handleThemeChange);
  }, []);

  useEffect(() => {
    if(mode){
        if (mode === "dark") {
            window.localStorage.setItem("theme", "dark");
            document.documentElement.classList?.add("dark");
          } else {
            window.localStorage.setItem("theme", "light");
            document.documentElement.classList?.remove("dark");
          }
    }
  }, [mode]);

  return [mode, setMode];
};

export default useThemeSwitch;
