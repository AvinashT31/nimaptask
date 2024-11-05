import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Pagination } from "@nextui-org/react";

const Singlemovie = () => {

    const { id } = useParams();
    console.log(id, "id heree");

    const Api_key = "c45a857c193f6302f2b5061c3b85e743"
    const fetchmovieurl = `https://api.themoviedb.org/3/movie/${id}?api_key=${Api_key}&language=en-US`
    const fetchcasturl = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${Api_key}&language=en-US`

    const [singlemovie, setsinglemovie] = useState([]);
    const [castdetails, setcastdetails] = useState([]);
    const [currentpage, setcurrentpage] = useState(1);

    useEffect(() => {
        async function getData() {
            const movieresponse = await axios.get(fetchmovieurl)
            setsinglemovie(movieresponse.data);

            const castresponse = await axios.get(fetchcasturl)
            setcastdetails(castresponse.data.cast)
        }
        getData()
    }, [id])

    const cardperpage = 12;
    const startindex = (currentpage - 1) * cardperpage;
    const paginationmovie = castdetails.slice(startindex, startindex + cardperpage);

    const handlepagechange = (page) => {
        setcurrentpage(page)
    }

    return (
        <div className='bg-[#29292a] w-full pt-10 text-white'>
            <div className='bg-[#020a17] rounded-lg overflow-hidden w-[95%] m-auto flex justify-start flex-col-reverse lg:flex-row'>
                <div className='w-full lg:w-[65%] flex flex-col gap-6 p-4 '>
                    <div className='flex justify-start gap-3 flex-col md:flex-row'>
                        <div className='w-44 h-44'>
                            <img src={`https://image.tmdb.org/t/p/w500${singlemovie.backdrop_path}`} alt="Image are not upload" className="w-full h-full" />
                        </div>
                        <div className='flex flex-col gap-6'>
                            <div className='flex flex-col justify-start gap-1'>
                                <p className='font-bold text-2xl'>{singlemovie.original_title}</p>
                                <p className='text-[#afafaf] text-lg'>Rating: {singlemovie.vote_average}</p>
                            </div>
                            <div className='flex flex-col justify-start gap-4'>
                                <div className='flex justify-start gap-2 flex-col lg:flex-row lg:items-center'>
                                    <p className='lg:border lg:border-[#afafaf] text-[#afafaf] lg:p-2 rounded-md'>{singlemovie.runtime} mins</p>
                                    <p className='text-[#afafaf]'>{singlemovie.tagline}</p>
                                </div>

                                <p className='text-[#afafaf]'>Realease Date: {singlemovie.release_date}</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='font-bold text-xl'>Overview</p>
                        <p className='text-[#afafaf]'>{singlemovie.overview}</p>
                    </div>
                </div>
                <div className='w-full lg:w-[35%] h-[28rem] md:h-[35rem] lg:h[28rem]'>
                    <img src={`https://image.tmdb.org/t/p/w500${singlemovie.poster_path}`} alt="Image are not upload" className="w-full h-full" />
                </div>
            </div>

            <div className='w-full py-10 px-4'>
                <div className='text-white grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4'>
                    {paginationmovie && paginationmovie.map((e, i) => (
                        <div key={i} onClick={() => handlesinglemovie(e)}>
                            <div className='w-full'>
                                <img src={`https://image.tmdb.org/t/p/w500${e.profile_path}`} alt="Image not upload in database" className='w-full h-full' />
                            </div>
                            <div className='py-2 h-24 flex flex-col justify-start gap-1'>
                                <p className='text-left'>{e.original_name}</p>
                                <p className='text-left'>Character: {e.character}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='flex justify-center items-center mt-5'>
                    <Pagination
                        color='default'
                        total={Math.ceil(castdetails.length / cardperpage)}
                        initialPage={1}
                        page={currentpage}
                        onChange={handlepagechange}
                        classNames={{
                            wrapper: "gap-3",
                            cursor: "bg-[#f5c518] text-white font-bold",
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Singlemovie
