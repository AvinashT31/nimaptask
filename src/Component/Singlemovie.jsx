import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const Singlemovie = () => {

    const { id } = useParams();
    console.log(id, "id heree");

    const Api_key = "c45a857c193f6302f2b5061c3b85e743"
    const fetchmovieurl = `https://api.themoviedb.org/3/movie/${id}?api_key=${Api_key}&language=en-US`
    const fetchcasturl = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${Api_key}&language=en-US`

    const [singlemovie, setsinglemovie] = useState([]);
    console.log(singlemovie, "singlemovie");

    const [castdetails, setcastdetails] = useState([]);
    console.log(castdetails, "castdetails");

    useEffect(() => {
        async function getData() {
            const movieresponse = await axios.get(fetchmovieurl)
            // console.log(movieresponse.data, "check data");
            setsinglemovie(movieresponse.data);

            const castresponse = await axios.get(fetchcasturl)
            // console.log(castresponse.data.cast, "check data");
            setcastdetails(castresponse.data.cast)
        }
        getData()

    }, [id])

    return (
        <div className='border border-black w-full'>
            <div className='border border-black w-[90% m-auto grid grid-cols-2'>
                <div className='border border-black'>
                    <div className='flex justify-start gap-2'>
                        <div className='border border-black w-36 h-36'>
                        </div>
                    </div>
                </div>
                <div className='border border-black'>

                </div>
            </div>
        </div>
    )
}

export default Singlemovie
