import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";

export const Home = () =>{
    const navigate = useNavigate();
    const [artistName, setArtistName] = useState<string>("")

    return(
        <div className="homeContainer">
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
                    navigate(`SetList/${artistName}`)}}>
                <input type="text" placeholder="Dj Brisket" required onChange={(e) => setArtistName(e.target.value)}/>
                <button type="submit"> Search </button>
            </form>
        </div>
    )
}