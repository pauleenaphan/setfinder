import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SearchBar } from '../components/SearchBar';
import "../styles/setList.css";

import { AiOutlineYoutube, AiFillYoutube, AiOutlineHeart, AiFillHeart, } from "react-icons/ai";

interface Video {
    id: {
        videoId: string;
    };
    snippet: {
        title: string;
        description: string;
        thumbnails: {
            default: {
                url: string;
            };
        };
    };
}

export const SetList = () =>{
    const YOUTUBE_KEY = import.meta.env.VITE_API_KEY;
    const { artistName } = useParams<{artistName : string}>();

    const [YTList, setYTList] = useState<Video[]>([]);

    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    
    console.log("youtube", YOUTUBE_KEY);

    const searchSets = async () =>{
        try{
            const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=5&q=${encodeURIComponent(artistName + " live")}&key=${YOUTUBE_KEY}`)
            const data = await response.json();
            console.log("API Response:", data);
            setYTList(data.items);

        }catch(error){
            console.error("Error getting sets", error)
        }
    }

    useEffect(() =>{
        searchSets();
    }, [artistName])


    return(
        <div className="setListContainer">
            <SearchBar/>
            <div className="kandiArtist">
                <div className="kandiYellowBead"></div>
                <div className="kandiRedBead"></div>
                <div className="kandiGreenBead"></div>
                <div className="kandiPinkBead"></div>
                <div className="kandiPurpleBead"></div>
                <div className="kandiBlueBead"></div>
                <div className="kandiYellowBead"></div>
                <div className="kandiRedBead"></div>
                <div className="kandiGreenBead"></div>
                <div className="kandiPinkBead"></div>
                <div className="kandiPurpleBead"></div>
                <div className="kandiBlueBead"></div>
                <div className="kandiString"> ─ </div>
                {artistName.split("").map((letter, index) => 
                    letter === " " ? (
                        <div key={index} className="kandiString"> ─ </div>
                    ) : (
                        <div key={index} className="kandiLetterBead">{letter}</div>
                    )
                )}
                <div className="kandiString"> ─ </div>
                <div className="kandiYellowBead"></div>
                <div className="kandiRedBead"></div>
                <div className="kandiGreenBead"></div>
                <div className="kandiPinkBead"></div>
                <div className="kandiPurpleBead"></div>
                <div className="kandiBlueBead"></div>
                <div className="kandiYellowBead"></div>
                <div className="kandiRedBead"></div>
                <div className="kandiGreenBead"></div>
                <div className="kandiPinkBead"></div>
                <div className="kandiPurpleBead"></div>
                <div className="kandiBlueBead"></div>
            </div>
            <div className="setResults">
                <div className="youtubeResultsContainer">
                    {YTList.map((set) => (
                        <div className="youtubeResult" key={set.id.videoId}>
                            <img src={set.snippet.thumbnails.default.url} alt={set.snippet.title} />
                            <div className="setDescContainer">
                                <div className="setTitle"><strong>{set.snippet.title}</strong></div>
                                <p className="setDesc">{set.snippet.description}</p>
                                <div className="icons">
                                    <a href={`https://www.youtube.com/watch?v=${set.id.videoId}`} target="_blank" rel="noopener noreferrer">
                                        {hoveredItem === set.id.videoId ? (
                                            <AiFillYoutube
                                                className="youtubeIcon" 
                                                onMouseLeave={() => setHoveredItem(null)} 
                                            />
                                        ) : (
                                            <AiOutlineYoutube
                                                className="youtubeIcon" 
                                                onMouseEnter={() => setHoveredItem(set.id.videoId)} 
                                            />
                                        )}
                                    </a>
                                    {hoveredItem === `${set.id.videoId}-heart` ? (
                                        <AiFillHeart
                                            className="heartIcon" 
                                            onMouseLeave={() => setHoveredItem(null)} 
                                        />
                                    ) : (
                                        <AiOutlineHeart 
                                            className="heartIcon" 
                                            onMouseEnter={() => {setHoveredItem(`${set.id.videoId}-heart`)}} 
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}