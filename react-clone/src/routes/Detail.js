import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const [loading, setLoading] = useState(true)
    const [detail, setDetail] = useState("");
    const { id } = useParams();
    const getMovie = async () => {
        const response = (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`));
        console.log(response)
        const json = await response.json()
        console.log(json)
        setDetail(json.data.movie)
        setLoading(false)
    }
    useEffect(() => {
        getMovie()
    }, [])
    return (
        <div>
            <h1>Detail</h1>
            {loading ? null : <div>
                <img alt="" src={detail.medium_cover_image} />
                <div>{detail.title}</div>
                <p>{detail.description_full}</p>
            </div>}
        </div>
    )
}
export default Detail;