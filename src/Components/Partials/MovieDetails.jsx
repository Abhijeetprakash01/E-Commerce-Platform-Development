import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { asyncloadmovie, removemovie } from "../store/actions/movieActions";
import { asyncloadmovie, removemovie } from '@/store/actions/movieActions';

import {
    Link,
    Outlet,
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";

import Footer from "../Partials/Footer";
// import Loading from "./Loading";
import Loader from "../Loader";

const Moviedetails = () => {
    document.title = "Movie Details";

    const { pathname } = useLocation();
    const navigate = useNavigate();
    const { id } = useParams();
    const { info } = useSelector((state) => state.movie);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(asyncloadmovie(id));
        return () => {
            dispatch(removemovie());
        };
    }, [id]);
    return info ? (
        <div
            style={{
                background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5), rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${info.details.backdrop_path})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
            className="relative w-[100%] h-[full] px-[10%]"
        >
            {/* Part 1 navigation */}
            <nav className="h-[10vh] w-full text-zinc-100 flex items-center gap-8 text-xl ">
                <Link
                    onClick={() => navigate(-1)}
                    className="hover:text-[#6556CD] ri-arrow-left-line"
                ></Link>
                <a target="_blank" href={info.details.homepage}>
                    <i className="ri-external-link-fill"></i>
                </a>
                <a
                    target="_blank"
                    href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
                >
                    <i className="ri-earth-fill"></i>
                </a>

                <a
                    target="_blank"
                    href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}
                >
                    imdb
                </a>
            </nav>

            {/* Part 2 Poster and details */}
            <div className="w-full flex">
                <img
                    className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[50vh] object-cover mt-[3%]"
                    src={`https://image.tmdb.org/t/p/original/${
                        info.details.poster_path || info.details.backdrop_path
                    }`}
                    alt=""
                />

                <div className="content ml-[3%] text-white">
                    <h1 className="text-4xl font-black ">
                        {info.details.name ||
                            info.details.title ||
                            info.details.original_name ||
                            info.details.original_title}

                        <small className="text-2xl font-bold text-zinc-200">
                            ({info.details.release_date.split("-")[0]})
                        </small>
                    </h1>

                    <div className="mt-7 mb-10 flex  items-center gap-x-3">
                        <span className="rounded-full text-xl font-semibold bg-yellow-600 text-white w-[8vh] h-[5vh] flex justify-center items-center">
                            {(info.details.vote_average * 10).toFixed()}{" "}
                            <sup>%</sup>
                        </span>
                        <h1 className="w-[60px] font-semibold text-2xl leading-6">
                            User Score
                        </h1>
                        <h1>{info.details.release_date}</h1>
                        <h1>
                            {/* {info.details.genres.map((g) => g.name).join(",")} */}
                        </h1>
                        <h1>{info.details.runtime}min</h1>
                    </div>

                    <h1 className="text-xl font-semibold italic text-zinc-200">
                        {info.details.tagline}
                    </h1>

                    <h1 className="text-2xl mb-3 mt-10">Overview</h1>
                    <p className="w-[120vh] mb-[7%]">{info.details.overview.slice(0,400)}</p>

                    {/* <h1 className="text-2xl mb-8">Movie Translated</h1>
                    <p className="mb-10">{info.spoken_languages.${english_name}}</p> */}

                    <Link
                        className="p-5 bg-[#6556CD] rounded-lg "
                        // to={`${pathname}/trailer`}
                    >
                        <i className="text-xl ri-play-fill mr-3 mt-5"></i>
                        Play Trailer
                    </Link>
                </div>
            </div>

            {/* Part 3 Available on Platform */}
            <div className="w-[80%] flex flex-col gap-y-5 mt-[5%]">
                {info.watchprovider && info.watchprovider.flatrate && (
                    <div className="flex gap-x-5 items-center text-white">
                        <h1 className="mr-[2.5%]">Available on Platforms</h1>
                        {info.watchprovider.flatrate.map((w, i) => (
                            <img
                                key={i}
                                title={w.provider_name}
                                className="w-[5vh] h-[5vh] object-cover rounded-md"
                                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                                alt=""
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* Part 4 Recommendations and Similar Stuff */}
            <hr className="mt-10 mb-5 w-[100%] border-none h-[2px] bg-zinc-500" />
            <h1 className=" text-3xl font-bold text-white">
                Recommendations & Similar stuff
            </h1>

            <div className="mb-[2%] w-[100%]">
            <Footer
                title="movie"
                data={
                    info.recommendations.length > 0
                    ? info.recommendations
                    : info.similar
                }
                />
                </div>
            <Outlet />
        </div>
    ) : (
        <Loader />
    );
};

export default Moviedetails;