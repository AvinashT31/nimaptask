import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Pagination } from "@nextui-org/react";
import { useDispatch } from 'react-redux';
import { adddata } from '../Redux/Slice/homestoreSlice';
import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

const Home = () => {

    const Api_key = "c45a857c193f6302f2b5061c3b85e743"
    const fetchurl = `https://api.themoviedb.org/3/movie/popular?api_key=${Api_key}&language=en-US&page=1`

    const [getallmovie, setgetallmovie] = useState([]);
    const [currentpage, setcurrentpage] = useState(1);
    
    const route = useNavigate()
    const dispatch = useDispatch();

    // const showreduxdata = useSelector((state) => state.movie.movie);
    // console.log(showreduxdata, "showreduxdata")

    useEffect(() => {
        async function getData() {
            const response = await axios.get(fetchurl)
            // console.log(response.data.results, "check data");
            setgetallmovie(response.data.results)
            dispatch(adddata(response.data.results))
            
        }
        getData()
    }, [dispatch])

    const cardperpage = 10;
    const startindex = (currentpage - 1) * cardperpage;
    const paginationmovie = getallmovie.slice(startindex, startindex + cardperpage);

    const handlepagechange = (page) => {
        setcurrentpage(page)
    }

    const handlesinglemovie = (e) => {
        route(`/singlemovie/${e.id}`)
    }

    return (
        <div className='w-full bg-[#29292a] py-10'>
            <div className='w-[90%] m-auto text-white grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10'>
                {paginationmovie && paginationmovie.map((e, i) => (
                    <div key={i} className='border border-white rounded-2xl overflow-hidden' onClick={() => handlesinglemovie(e)}>
                        <div className='w-full h-48'>
                            <img src={`https://image.tmdb.org/t/p/w500${e.backdrop_path}`} alt="Image not upload in database" className='w-full h-full' />
                        </div>
                        <div className='py-2 h-24 flex flex-col justify-start gap-1'>
                            <p className='text-center'>{e.title}</p>
                            <p className='text-center'>Rating: {e.vote_average}</p>
                        </div>

                    </div>
                ))}
            </div>

            <div className='flex justify-center items-center mt-5'>
                <Pagination
                    color='default'
                    total={Math.ceil(getallmovie.length / cardperpage)}
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
    )
}

export default Home
