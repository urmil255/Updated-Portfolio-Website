import React, { useEffect, useState } from 'react'

const useThemeSwitcher = () => {

    const preferDarkQuery = "(prefers-color-scheme: dark)";
    const [mode, setMode] = useState("");

    useEffect(() => {
      
        const mediaQuery = window.matchMedia(preferDarkQuery);
        const userPref = window.localStorage.getItem("theme");

        const handleChange = () => {
            if(userPref){
                let check = userPref === "light" ? "light" : "dark";
                setMode(check);
                if(check==="light"){
                    document.documentElement.classList.add("light")
                }else{
                    document.documentElement.classList.remove("light")
                }
            }else{
                let check =  mediaQuery.matches ? "light" : "dark";
                setMode(check);
                window.localStorage.setItem(
                    "theme",
                    check
                  );

                if(check==="light"){
                    document.documentElement.classList.add("light")
                }else{
                    document.documentElement.classList.remove("light")
                }
            }
        }

        handleChange();

        mediaQuery.addEventListener("change", handleChange)
        
        return () => mediaQuery.removeEventListener("change", handleChange)

    }, [])


    useEffect(() => {
        if(mode === "dark"){
            window.localStorage.setItem("theme","dark");
            document.documentElement.classList.add("dark")
        }
        
        if(mode === "light"){
            window.localStorage.setItem("theme","light");
            document.documentElement.classList.remove("dark")
        }
      
    }, [mode])
    
    
    

  return [mode, setMode]
}

export default useThemeSwitcher