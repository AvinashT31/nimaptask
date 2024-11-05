import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Pagination } from "@nextui-org/react";

const Searchmovie = () => {
    const Api_key = "c45a857c193f6302f2b5061c3b85e743";
    const { movie } = useParams();
    const navigate = useNavigate();

    const fetchurl = `https://api.themoviedb.org/3/search/movie?api_key=${Api_key}&language=en-US&query=${movie}&page=1`;

    const [result, setResult] = useState([]);
    const [currentpage, setCurrentPage] = useState(1);

    const cardperpage = 10;
    const startindex = (currentpage - 1) * cardperpage;
    const paginationmovie = result.slice(startindex, startindex + cardperpage);

    useEffect(() => {
        async function getData() {
            const response = await axios.get(fetchurl)
            setResult(response.data.results)
        }
        getData()
    }, [movie]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleSingleMovie = (movie) => {
        navigate(`/singlemovie/${movie.id}`);
    };

    return (
        <div className='w-full bg-[#29292a] py-10'>
            <div className='w-[90%] m-auto text-white grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10'>
                {paginationmovie && paginationmovie.map((e, i) => (
                    <div key={i} className='border border-white rounded-2xl overflow-hidden' onClick={() => handleSingleMovie(e)}>
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
                    total={Math.ceil(result.length / cardperpage)}
                    initialPage={1}
                    page={currentpage}
                    onChange={handlePageChange}
                    classNames={{
                        wrapper: "gap-3",
                        cursor: "bg-[#f5c518] text-white font-bold",
                    }}
                />
            </div>
        </div>
    );
};

export default Searchmovie;
