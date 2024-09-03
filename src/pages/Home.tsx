import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Home = () =>{
    const navigate = useNavigate();
    const [artistName, setArtistName] = useState<string>("")

    return(
        <>
            <header>
                <h1> SetFinder </h1>
                <p> Caption placeholder </p>
            </header>
            <form className="searchBar" onSubmit={(e) =>{ 
                    e.preventDefault(); 
                    navigate(`SetList/${artistName}`)}}>
                <input type="text" placeholder="Dj Brisket" required onChange={(e) => setArtistName(e.target.value)}/>
                <button type="submit"> Search </button>
            </form>
        </>
    )
}