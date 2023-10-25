import { useEffect, useState, useRef } from "react";
import CardMovie from "../components/card/CardMovie";
import Slider from "react-slick";
import CardMovieList from "../components/card/CardMovieList";
import CardUpNext from "../components/card/CardUpNext";
import CardCast from "../components/card/CardCast";
import Title from "../components/home/Title";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../store/actions";
import Loading from "../components/Loading";
import { fetchCasts } from "../store/actions/castAction";
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <button className="rounded-sm  flex absolute text-2xl hover:text-yellow-500 px-4 py-3 top-1/4 right-0 z-20 border border-white" onClick={onClick}>
      ❯
    </button>
  );
}
function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <button className="hover:text-yellow-500 text-2xl bg-[hsla(0,0%,100%,.08)] rounded-sm flex absolute px-4 py-3 left-0 z-20 top-1/4 border border-white" onClick={onClick}>
      ❮
    </button>
  );
}

function Home() {
  const { movies, loading } = useSelector((state) => state.movieReducer);
  const { casts } = useSelector((state) => state.castReducer);
  const dispatch = useDispatch();
  const targetRef = useRef(null);

  const favorite = [
    {
      id: 1,
      title: "The Big 4",
      rating: 6.1,
      imgUrl: "https://upload.wikimedia.org/wikipedia/id/8/88/Poster_film_The_Big_4.jpg",
      trailerUrl: "https://www.youtube.com/watch?v=sQQJEiESrK0",
    },
    {
      id: 2,
      title: "The Night Comes for Us",
      rating: 6.9,
      imgUrl: "https://i0.wp.com/storage.waploaded.com/images/dcfa77a8814d717a851a668d39d25db4.jpg?w=900&ulb=true&ssl=1",
      trailerUrl: "https://www.youtube.com/watch?v=HfSisHrUTLM",
    },
    {
      id: 3,
      title: "Headshot",
      rating: 6.3,
      imgUrl: "https://thumbor.prod.vidiocdn.com/Tx0keCDZVRPfC5HYnOtlUPY8IYs=/filters:quality(70)/vidio-web-prod-film/uploads/film/image_portrait/832/headshot-d17638.jpg",
      trailerUrl: "https://www.youtube.com/watch?v=yXhoytk0Hfw",
    },
    {
      id: 4,
      title: "Warkop DKI Reborn: Jangkrik Boss! Part 1",
      rating: 7.4,
      imgUrl: "https://upload.wikimedia.org/wikipedia/id/5/55/WDKI_reborn.jpg",
      trailerUrl: "https://www.youtube.com/watch?v=lmuNabammwk",
    },
    {
      id: 5,
      title: "Warkop DKI Reborn: Jangkrik Boss! Part 2",
      rating: 7.5,
      imgUrl: "https://www.bukukita.com/babacms/displaybuku/101909_f.jpg",
      trailerUrl: "https://www.youtube.com/watch?v=RqG20t70PP4",
    },
    {
      id: 6,
      title: "99 Cahaya di Langit Eropa",
      rating: 5.6,
      imgUrl: "https://upload.wikimedia.org/wikipedia/id/3/32/99_Cahaya_di_Langit_Eropa.jpg",
      trailerUrl: "https://www.youtube.com/watch?v=OUPQ4kMD620",
    },
    {
      id: 7,
      title: "KKN di Desa Penari",
      rating: 5.9,
      imgUrl: "https://cdn.cgv.id/uploads/movie/compressed/22024900.jpg",
      trailerUrl: "https://www.youtube.com/watch?v=01BPk6M37qs",
    },
    {
      id: 8,
      title: "Bukan Pocong Biasa",
      rating: 7.5,
      imgUrl: "https://upload.wikimedia.org/wikipedia/id/d/de/Poster_Bukan_Pocong_Biasa.jpg",
      trailerUrl: "https://www.youtube.com/watch?v=hzmmTAC_sPo",
    },
  ];
  const upNext = [
    {
      id: 1,
      title: "Ayat-Ayat Cinta",
      genre: "Romance",
      imageUrl: "https://bukurepublika.id/wp-content/uploads/2019/02/AAC2_film_dpn.jpg",
      trailerUrl: "https://www.youtube.com/watch?v=YlYlbpXt6Bc",
    },
    {
      id: 2,
      title: "Spiderman : Home Coming",
      genre: "Action",
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/f/f9/Spider-Man_Homecoming_poster.jpg",
      trailerUrl: "https://www.youtube.com/watch?v=rk-dF1lIbIg",
    },
    {
      id: 3,
      title: "Home Alone",
      genre: "Family",
      imageUrl: "https://m.media-amazon.com/images/I/9136rW+hZKL._AC_UF894,1000_QL80_.jpg",
      trailerUrl: "https://www.youtube.com/watch?v=jEDaVHmw7r4",
    },
  ];
  const top6 = [
    {
      id: 1,
      title: "Warkop DKI Reborn: Jangkrik Boss! Part 1",
      rating: 7.4,
      imgUrl: "https://upload.wikimedia.org/wikipedia/id/5/55/WDKI_reborn.jpg",
      trailerUrl: "https://www.youtube.com/watch?v=lmuNabammwk",
    },
    {
      id: 2,
      title: "Transformer : Rise of the beast",
      imgUrl: "https://image.tmdb.org/t/p/w500/gPbM0MK8CP8A174rmUwGsADNYKD.jpg",
      rating: 7.5,
      trailerUrl: "https://www.youtube.com/watch?v=itnqEauWQZM",
    },
    {
      imgUrl: "https://m.media-amazon.com/images/M/MV5BODkyZjcyOGMtZWVhYy00ZWEyLWJlZDItZDA2OTBhNGZmMjBiXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
      title: "Blue Beetle",
      rating: "8.1",
      id: 3,
      trailerUrl: "https://www.youtube.com/watch?v=4wxyy8Rcz4k",
    },
    {
      id: 4,
      title: "Elemental",
      imgUrl: "https://image.tmdb.org/t/p/w500/4Y1WNkd88JXmGfhtWR7dmDAo1T2.jpg",
      rating: 7.8,
      trailerUrl: "https://youtube.com/watch?v=hXzcyx9V0xw",
    },
    {
      id: 5,
      title: "Bukan Pocong Biasa",
      rating: 7.5,
      imgUrl: "https://upload.wikimedia.org/wikipedia/id/d/de/Poster_Bukan_Pocong_Biasa.jpg",
      trailerUrl: "https://www.youtube.com/watch?v=hzmmTAC_sPo",
    },
    {
      id: 6,
      title: "Warkop DKI Reborn: Jangkrik Boss! Part 2",
      rating: 7.5,
      imgUrl: "https://www.bukukita.com/babacms/displaybuku/101909_f.jpg",
      trailerUrl: "https://www.youtube.com/watch?v=RqG20t70PP4",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const settings_1 = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    dispatch(fetchMovies());
    dispatch(fetchCasts());
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex">
        <div className="m-auto">
          <Loading />
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="bg-black py-10" ref={targetRef}>
        {/* masthead */}
        <div className="lg:flex lg:flex-wrap grid grid-cols-1 lg:mx-16">
          <div className="px-10 md:w-[1000px]">
            <Slider {...settings}>
              {movies.map((movie) => (
                <CardMovieList image={movie.imgUrl} imageCover={movie.imgCover} id={movie.id} title={movie.title} genre={movie.Genre.name} key={movie.id} trailer={movie.trailerUrl} />
              ))}
            </Slider>
          </div>
          <div className="lg:flex flex-col hidden">
            <h1 className="text-yellow-500 text-4xl font-extrabold mb-3 font-[rubik]">Up next</h1>
            <div className=" space-y-8 px-4 bg-gradient-to-t from-black via-black to-[hsla(0,0%,100%,.20)] p-2 md:w-96">
              {upNext.map((e) => (
                <CardUpNext title={e.title} genre={e.genre} image={e.imageUrl} key={e.id} trailerUrl={e.trailerUrl} />
              ))}
            </div>
          </div>
        </div>
        {/* end masthead */}

        {/* playing now */}
        <div className="md:mx-24 mx-5 py-10">
          <h1 className="mb-6 text-yellow-500 text-4xl font-[roboto] font-bold flex"> Playing</h1>
          <Slider {...settings_1}>
            {movies.map((movie) => (
              <CardMovie title={movie.title} key={movie.id} image={movie.imgUrl} rating={movie.rating} slug={movie.slug} trailerUrl={movie.trailerUrl} />
            ))}
          </Slider>
        </div>
        {/* end playing now */}

        {/* Watchlist */}
        <div className="md:mx-24 mx-5 py-10 text-white font-[roboto]">
          <Title title={"From your Watchlist"} />
          <div className="flex py-10">
            <div className="m-auto flex-col flex">
              <button className="m-auto">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px">
                  <path
                    d="M 37 48 C 36.824219 48 36.652344 47.953125 36.496094 47.863281 L 25 41.15625 L 13.503906 47.863281 C 13.195313 48.042969 12.8125 48.046875 12.503906 47.867188 C 12.191406 47.6875 12 47.359375 12 47 L 12 3 C 12 2.449219 12.449219 2 13 2 L 37 2 C 37.554688 2 38 2.449219 38 3 L 38 47 C 38 47.359375 37.808594 47.6875 37.496094 47.867188 C 37.34375 47.957031 37.171875 48 37 48 Z"
                    fill="whitesmoke"
                  />
                  <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize="35" fontWeight="thin" fill="black">
                    +
                  </text>
                </svg>
              </button>
              <div className="text-center py-5">
                <h1 className="text-xl font-bold">Sign in to access your Watchlist</h1>
                <p> Save shows and movies to keep track of what you want to watch.</p>
              </div>
              <div className="mt-5 text-center">
                <button className="bg-gray-800 px-6 py-2 rounded text-sm text-blue-300">Sign in to JatssMovie</button>
              </div>
            </div>
          </div>
        </div>
        {/* end Watchlist */}

        {/* fan fav */}
        <div className="md:mx-24 mx-5 py-10">
          <Title title={"Indonesian Movies"} />
          <Slider {...settings_1}>
            {favorite.map((movie) => (
              <CardMovie title={movie.title} key={movie.id + "fav"} image={movie.imgUrl} rating={movie.rating} trailerUrl={movie.trailerUrl} />
            ))}
          </Slider>
        </div>
        {/* end fan fav */}

        {/* top 6 jatssmovie */}
        <div className="md:mx-24 mx-5 py-10">
          <Title title={"Top 6 JatssMovie"} />
          <div className="grid lg:grid-cols-6 md:grid-col-3 gap-3 md:gap-0">
            {top6.map((movie) => (
              <CardMovie title={movie.title} key={movie.id + "fav"} image={movie.imgUrl} rating={movie.rating} trailerUrl={movie.trailerUrl} />
            ))}
          </div>
        </div>
        {/* end top 6 */}

        {/* catst */}
        <div className="md:mx-24 mx-5 py-10 text-white font-[roboto] mb-10">
          <Title title={"Top Casts"} />
          <Slider {...settings_1}>
            {casts.map((e) => (
              <CardCast key={e.id + "cast"} profilePict={e.profilePict} name={e.name} />
            ))}
          </Slider>
        </div>
        {/* end casts */}
      </div>
    </>
  );
}
export default Home;
