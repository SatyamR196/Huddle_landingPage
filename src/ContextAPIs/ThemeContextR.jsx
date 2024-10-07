import React,{createContext,useContext,useState} from "react";

// 1st step
const ThemeContextR = createContext();

//2nd step
export const ThemeContextRProvider = ({children}) =>{
    const light_theme={
        color: "black",
        backgroundColor: "#d9fffd",
        logo_bg: "#fff1f1",
        bg_image: "none",
        bg_body_image: "none"
    }
    const dark_theme={
        color: "white",
        backgroundColor: "#310e68",
        logo_bg: "#fcfc73",
        bg_image: "linear-gradient(316deg, #310e68 0%, #5f0f40 74%)",
        bg_body_image:"linear-gradient(126deg, rgba(23,49,97,1) 0%, rgba(57,9,39,1) 36%, rgba(49,14,104,1) 100%)",

    }
    let [isdark,setIsdark] = useState(false);
    const toggleTheme = ()=> setIsdark(!isdark);
    let theme = isdark ? dark_theme : light_theme;
    console.log(isdark,theme);

    return(
        <ThemeContextR.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContextR.Provider>
    )
}

export default function useThemeR(){
    return useContext(ThemeContextR);
}
