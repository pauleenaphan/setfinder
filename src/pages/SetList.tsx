import { useParams } from 'react-router-dom';

export const SetList = () =>{
    const YOUTUBE_KEY = import.meta.env.VITE_API_KEY;

    const { artistName } = useParams<{artistName : string}>();
    console.log("youtube", YOUTUBE_KEY);


    return(
        <>
            <p> {artistName} </p>
        </>
    )
}