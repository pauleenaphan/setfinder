import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SearchBar } from '../components/SearchBar';
import "../styles/setList.css";

import { AiOutlineYoutube, AiOutlineHeart } from "react-icons/ai";

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
    }, [])


    return(
        <>
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
                {artistName.split("").map((letter) => (
                    <div className="kandiLetterBead">{letter}</div>
                ))}
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
                    {/* {YTList.map((set) => (
                        <div className="youtubeResult" key={set.id.videoId}>
                            <a href={`https://www.youtube.com/watch?v=${set.id.videoId}`} target="_blank" rel="noopener noreferrer">
                                <img src={set.snippet.thumbnails.default.url} alt={set.snippet.title} />
                            </a>
                            <div className="setDesc">
                                <div className="setTitle">{set.snippet.title}</div>
                                <p>{set.snippet.description}</p>
                                <div className="icons">
                                    <AiOutlineYoutube/>
                                    <AiOutlineHeart />
                            </div>
                            </div>
                        </div>
                    ))} */}
                </div>
            </div>
        </>
    )
}