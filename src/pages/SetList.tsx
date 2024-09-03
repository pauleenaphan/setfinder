import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SearchBar } from '../components/SearchBar';

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
            const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=100&q=${encodeURIComponent(artistName + " live")}&key=${YOUTUBE_KEY}`)
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
            <p> {artistName} </p>
            <div className="setResults">
                {YTList.map((set) => (
                    <div key={set.id.videoId}>
                        <h1>{set.snippet.title}</h1>
                        <a href={`https://www.youtube.com/watch?v=${set.id.videoId}`} target="_blank" rel="noopener noreferrer">
                            <img src={set.snippet.thumbnails.default.url} alt={set.snippet.title} />
                        </a>
                        <p>{set.snippet.description}</p>
                    </div>
                ))}
            </div>
        </>
    )
}