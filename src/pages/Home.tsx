import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useMode } from "../components/useMode";

import { AiOutlineMoon, AiFillMoon,  AiOutlineSun, AiFillSun } from "react-icons/ai";

import "../styles/home.css";

export const Home = () =>{
    const navigate = useNavigate();
    const [artistName, setArtistName] = useState<string>("")

    const [isHovered1, setIsHovered1] = useState<boolean>(false);
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
        <div className="homeContainer">
            <div className="modeIcon">
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
            </div>
            <header>
                <div className="kandiTitle">
                    <div className="kandiBlueBead"></div>
                    <div className="kandiGreenBead"></div>
                    <div className="kandiPinkBead"></div>
                    <div className="kandiGreenBead"></div>
                    <div className="kandiBlueBead"></div>
                    <div className="kandiPurpleBead"></div>
                    <div className="kandiBlueBead"></div>
                    <div className="kandiGreenBead"></div>
                    <div className="kandiPurpleBead"></div>
                    <div className="kandiPinkBead"></div>
                    <div className="kandiString"> ─ </div>
                    <div className="kandiLetterBead"> S </div>
                    <div className="kandiLetterBead"> E </div>
                    <div className="kandiLetterBead"> T </div>
                    <div className="kandiString"> ─ </div>
                    <div className="kandiLetterBead"> F </div>
                    <div className="kandiLetterBeadI"> I </div>
                    <div className="kandiLetterBead"> N </div>
                    <div className="kandiLetterBead"> D </div>
                    <div className="kandiLetterBead"> E </div>
                    <div className="kandiLetterBead"> R </div>
                    <div className="kandiString"> ─ </div>
                    <div className="kandiBlueBead"></div>
                    <div className="kandiGreenBead"></div>
                    <div className="kandiPinkBead"></div>
                    <div className="kandiGreenBead"></div>
                    <div className="kandiBlueBead"></div>
                    <div className="kandiBlueBead"></div>
                    <div className="kandiGreenBead"></div>
                    <div className="kandiPinkBead"></div>
                    <div className="kandiGreenBead"></div>
                    <div className="kandiBlueBead"></div>
                </div>
                
                <p className="caption"> Find all the sets you need </p>
            </header>
            <form className="searchBar" onSubmit={(e) =>{ 
                    e.preventDefault(); 
                    navigate(`SetList/${artistName.toUpperCase()}`)}}>
                <input type="text" placeholder="Dj Brisket" required onChange={(e) => setArtistName(e.target.value)}/>
                <button type="submit"> Search </button>
            </form>
        </div>
    )
}