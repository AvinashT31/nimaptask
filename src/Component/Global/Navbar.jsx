import { CircleX, Menu } from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    
    const route = useNavigate();
    const [ismobilemenu, setismobilemenu] = useState(false);
    const [query, setquery] = useState({ movie: "" });

    const handlemenu = () => {
        setismobilemenu(!ismobilemenu);
    };

    const closemenu = () => {
        setismobilemenu(false);
    };

    function searchhere(e) {
        var name = e.target.name;
        var value = e.target.value;
        setquery({ ...query, [name]: value });
    }

    function handlesearch(e) {
        e.preventDefault();
        setquery({ movie: "" });
        route(`/searchmovie/${query.movie}`)
    }

    return (
        <div className='w-full py-3 bg-[#131820] text-white'>
            {/* Desktop Navbar */}
            <div className='hidden w-[90%] m-auto lg:flex justify-evenly items-center'>
                <div className='w-[20%]'>
                    <div className='inline-block p-2 font-bold text-lg cursor-pointer'>
                        <p onClick={() => route("/")}>MovieDb</p>
                    </div>
                </div>
                <div className='w-[70%] flex justify-end text-lg'>
                    <div className='p-2 flex justify-start items-center gap-4'>
                        <div className='flex justify-start gap-5 font-bold cursor-pointer'>
                            <p onClick={() => route("/")}>Popular</p>
                            <p onClick={() => route("/toprated")}>Top Rated</p>
                            <p onClick={() => route("/upcoming")}>Upcoming</p>
                        </div>
                        <div className='flex justify-start gap-2'>
                            <input onChange={(e) => searchhere(e)} name='movie' value={query.movie} type="text" className='pl-2 text-sm p-2 rounded-md overflow-hidden border-none outline-none text-black' placeholder='Movie Name' />
                            <button onClick={(e) => handlesearch(e)} className='bg-[#808080] px-3 rounded-md text-sm text-white font-bold overflow-hidden'>Search</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Navbar */}
            <div className='lg:hidden w-[95%] m-auto flex justify-between items-center gap-3 '>
                <div>
                    <p onClick={() => route("/")}>MovieDb</p>
                </div>
                <div className='flex justify-start gap-2'>
                    <input onChange={(e) => searchhere(e)} name='movie' value={query.movie} className='pl-2 text-sm p-2 rounded-md overflow-hidden border-none outline-none text-black' type="text" placeholder='Movie Name' />
                    <button onClick={(e) => handlesearch(e)} className='bg-[#808080] px-3 rounded-md text-sm text-white font-bold overflow-hidden'>Search</button>
                </div>
                <div onClick={handlemenu} className='cursor-pointer'>
                    <Menu />
                </div>
            </div>

            {/* Slide-in Mobile Sidebar Menu */}
            <div
                className={`fixed inset-y-0 right-0 w-full bg-[#131820] transform ${ismobilemenu ? 'translate-x-0' : 'translate-x-full'
                    } transition-transform duration-300 ease-in-out z-50`}
            >
                <button
                    onClick={closemenu}
                    className='absolute top-5 right-5 text-white text-lg font-bold'
                >
                    <CircleX />
                </button>
                <div className='flex flex-col gap-5 mt-20 pl-3 font-bold text-white text-lg cursor-pointer'>
                    <p onClick={() => { route("/"); closemenu(); }}>Popular</p>
                    <p onClick={() => { route("/toprated"); closemenu(); }}>Top Rated</p>
                    <p onClick={() => { route("/upcoming"); closemenu(); }}>Upcoming</p>
                </div>
            </div>

            {/* Overlay */}
            {ismobilemenu && (
                <div
                    className='fixed inset-0 bg-black opacity-50 z-40'
                    onClick={closemenu}
                ></div>
            )}
        </div>
    );
};

export default Navbar;
