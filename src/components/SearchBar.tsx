import { useState, useEffect } from "react";
import { AiOutlineHeart, AiOutlineMoon, AiFillMoon, AiFillHeart, AiOutlineSun, AiFillSun  } from "react-icons/ai";
import { RiUser3Line, RiUser3Fill } from "react-icons/ri";

import { useMode } from "./useMode";

import { useNavigate } from "react-router-dom";

import "../styles/nav.css";

export const SearchBar = () =>{
    const navigate = useNavigate();

    const [artistName, setArtistName] = useState<string>("")
    const [isHovered1, setIsHovered1] = useState<boolean>(false);
    const [isHovered2, setIsHovered2] = useState<boolean>(false);
    const [isHovered3, setIsHovered3] = useState<boolean>(false);

    const [currMode, setCurrMode] = useState<string>("light");
    const lsCurrMode = localStorage.getItem("currMode");

    const toggleMode = () =>{
        const newMode = currMode === "light" ? "dark" : "light";
        setCurrMode(newMode);
        localStorage.setItem("currMode", newMode);
    }

    useEffect(() => {
        const savedMode = lsCurrMode;
        if (savedMode) {
            setCurrMode(savedMode);
        }
    }, [lsCurrMode]);

    useMode(currMode);

    return(
        <nav>
            <div className="leftContainer">
                <div className="navTitle" onClick={() => {navigate("/")}}> SETFINDER </div>
                <form className="searchBar" onSubmit={(e) =>{
                    e.preventDefault(); 
                    navigate(`/SetList/${artistName.toUpperCase()}`)
                }}>
                    <input type="text" placeholder="Svdden Death" required onChange={(e) => setArtistName(e.target.value)}/>
                    <button type="submit"> Search </button>
                </form>
            </div>
            <div className="icons">
                {currMode === "dark" ? (
                    //if mode is dark then show the sun
                    isHovered1 ? (
                        <AiFillSun
                            className="icon" 
                            onMouseLeave={() => setIsHovered1(false)} 
                            onClick={toggleMode}
                        />
                    ) : (
                        <AiOutlineSun 
                            className="icon" 
                            onMouseEnter={() => setIsHovered1(true)} 
                        />
                    )
                ) : (
                    //if mode is light then show the moon
                    isHovered1 ? (
                        <AiFillMoon 
                            className="icon" 
                            onMouseLeave={() => setIsHovered1(false)} 
                            onClick={toggleMode}
                        />
                    ) : (
                        <AiOutlineMoon 
                            className="icon" 
                            onMouseEnter={() => setIsHovered1(true)} 
                        />
                    )
                )}
                {isHovered2 ? (
                    <AiFillHeart
                        className="icon" 
                        onMouseLeave={() => setIsHovered2(false)} 
                    />
                ) : (
                    <AiOutlineHeart 
                        className="icon" 
                        onMouseEnter={() => setIsHovered2(true)} 
                    />
                )}
                {isHovered3 ? (
                    <RiUser3Fill
                        className="icon" 
                        onMouseLeave={() => setIsHovered3(false)} 
                    />
                ) : (
                    <RiUser3Line
                        className="icon" 
                        onMouseEnter={() => setIsHovered3(true)} 
                    />
                )}
            </div>
        </nav>
    )
}
