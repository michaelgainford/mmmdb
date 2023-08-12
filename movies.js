/* const AllMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await getMovies();
      setMovies(movies);
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>All Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
} */

const allMovies = [
  {
    id: 1,
    title: "Ace Ventura: Pet Detective",
    image: "ace-ventura-pet-detective.jpg",
    imdb_url: "https://www.imdb.com/title/tt0109040/",
    description:
      "A goofy detective specializing in animals goes in search of the missing mascot of the Miami Dolphins.",
    year: 1994,
    genre: "Comedy",
    duration: 86,
  },
  {
    id: 2,
    title: "Ace Ventura: When Nature Calls",
    image: "ace-ventura-when-nature-calls.jpg",
    imdb_url: "https://www.imdb.com/title/tt0112281/",
    description:
      "Ace Ventura, Pet Detective, returns from a spiritual quest to investigate the disappearance of a rare white bat, the sacred animal of a tribe in Africa.",
    year: 1995,
    genre: "Comedy",
    duration: 90,
  },
  {
    id: 3,
    title: "Armageddon",
    image: "armageddon.jpg",
    imdb_url: "https://www.imdb.com/title/tt0120591/",
  },
  {
    id: 4,
    title: "Avatar",
    image: "avatar.jpg",
    imdb_url: "https://www.imdb.com/title/tt0499549/",
  },
  {
    id: 5,
    title: "Avengers: Age of Ultron",
    image: "avengers-age-of-ultron.jpg",
    imdb_url: "https://www.imdb.com/title/tt2395427/",
  },
  {
    id: 6,
    title: "Avengers: Endgame",
    image: "avengers-endgame.jpg",
    imdb_url: "https://www.imdb.com/title/tt4154796/",
    date_watched: "2023-08-08"
  },
  {
    id: 7,
    title: "Avengers: Infinity War",
    image: "avengers-infinity-war.jpg",
    imdb_url: "https://www.imdb.com/title/tt4154756/",
    date_watched: "2023-08-07"
  },
  {
    id: 8,
    title: "Batman: The Dark Knight",
    image: "batman-the-dark-knight.jpg",
    imdb_url: "https://www.imdb.com/title/tt0468569/",
  },
  {
    id: 9,
    title: "Big",
    image: "big.jpg",
    imdb_url: "https://www.imdb.com/title/tt0094737/",
  },
  {
    id: 10,
    title: "Big Hero 6",
    image: "big-hero-6.jpg",
    imdb_url: "https://www.imdb.com/title/tt2245084/",
  },
  {
    id: 11,
    title: "Black Panther",
    image: "black-panther.jpg",
    imdb_url: "https://www.imdb.com/title/tt1825683/",
  },
  {
    id: 12,
    title: "Black Widow",
    image: "black-widow.jpg",
    imdb_url: "https://www.imdb.com/title/tt3480822/",
  },
  {
    id: 13,
    title: "Captain America: Civil War",
    image: "captain-america-civil-war.jpg",
    imdb_url: "https://www.imdb.com/title/tt3498820/",
  },
  {
    id: 14,
    title: "Captain America: The First Avenger",
    image: "captain-america-the-first-avenger.jpg",
    imdb_url: "https://www.imdb.com/title/tt0458339/",
  },
  {
    id: 15,
    title: "Captain America: The Winter Soldier",
    image: "captain-america-the-winter-soldier.jpg",
    imdb_url: "https://www.imdb.com/title/tt1843866/",
  },
  {
    id: 16,
    title: "Captain Marvel",
    image: "captain-marvel.jpg",
    imdb_url: "https://www.imdb.com/title/tt4154664/",
  },
  {
    id: 17,
    title: "Castaway",
    image: "castaway.jpg",
    imdb_url: "https://www.imdb.com/title/tt0162222/",
  },
  {
    id: 18,
    title: "Coco",
    image: "coco.jpg",
    imdb_url: "https://www.imdb.com/title/tt2380307/",
  },
  {
    id: 19,
    title: "Doctor Strange",
    image: "doctor-strange.jpg",
    imdb_url: "https://www.imdb.com/title/tt1211837/",
  },
  {
    id: 20,
    title: "Dodgeball: A True Underdog Story",
    image: "dodgeball.jpg",
    imdb_url: "https://www.imdb.com/title/tt0364725/",
  },
  {
    id: 21,
    title: "Ferris Bueller's Day Off",
    image: "ferris-buellers-day-off.jpg",
    imdb_url: "https://www.imdb.com/title/tt0091042/",
  },
  {
    id: 22,
    title: "Flubber",
    image: "flubber.jpg",
    imdb_url: "https://www.imdb.com/title/tt0119137/",
  },
  {
    id: 23,
    title: "Forrest Gump",
    image: "forrest-gump.jpg",
    imdb_url: "https://www.imdb.com/title/tt0109830/",
  },
  {
    id: 24,
    title: "Free Guy",
    image: "free-guy.jpg",
    imdb_url: "https://www.imdb.com/title/tt6264654/",
  },
  {
    id: 25,
    title: "George of the Jungle",
    image: "george-of-the-jungle.jpg",
    imdb_url: "https://www.imdb.com/title/tt0119190/",
  },
  {
    id: 26,
    title: "Guardians of the Galaxy",
    image: "guardians-of-the-galaxy.jpg",
    imdb_url: "https://www.imdb.com/title/tt2015381/",
  },
  {
    id: 27,
    title: "Guardians of the Galaxy Vol. 2",
    image: "guardians-of-the-galaxy-vol-2.jpg",
    imdb_url: "https://www.imdb.com/title/tt3896198/",
  },
  {
    id: 28,
    title: "Happy Gilmore",
    image: "happy-gilmore.jpg",
    imdb_url: "https://www.imdb.com/title/tt0116483/",
  },
  {
    id: 29,
    title: "Hercules",
    image: "hercules.jpg",
    imdb_url: "https://www.imdb.com/title/tt0119282/",
  },
  {
    id: 30,
    title: "Home Alone",
    image: "home-alone.jpg",
    imdb_url: "https://www.imdb.com/title/tt0099785/",
  },
  {
    id: 31,
    title: "Home Alone 2: Lost in New York",
    image: "home-alone-2.jpg",
    imdb_url: "https://www.imdb.com/title/tt0104431/",
  },
  {
    id: 32,
    title: "Inside Out",
    image: "inside-out.jpg",
    imdb_url: "https://www.imdb.com/title/tt2096673/",
  },
  {
    id: 33,
    title: "Iron Man",
    image: "iron-man.jpg",
    imdb_url: "https://www.imdb.com/title/tt0371746/",
  },
  {
    id: 34,
    title: "Iron Man 2",
    image: "iron-man-2.jpg",
    imdb_url: "https://www.imdb.com/title/tt1228705/",
  },
  {
    id: 35,
    title: "Iron Man 3",
    image: "iron-man-3.jpg",
    imdb_url: "https://www.imdb.com/title/tt1300854/",
  },
  {
    id: 36,
    title: "Jingle All The Way",
    image: "jingle-all-the-way.jpg",
    imdb_url: "https://www.imdb.com/title/tt0116705/",
  },
  {
    id: 37,
    title: "Jumanji",
    image: "jumanji.jpg",
    imdb_url: "https://www.imdb.com/title/tt0113497/",
  },
  {
    id: 38,
    title: "Kindergarten Cop",
    image: "kindergarten-cop.jpg",
    imdb_url: "https://www.imdb.com/title/tt0099938/",
  },
  {
    id: 39,
    title: "Lego Batman",
    image: "lego-batman.jpg",
    imdb_url: "https://www.imdb.com/title/tt4116284/",
  },
  {
    id: 40,
    title: "Lego Movie",
    image: "lego-movie.jpg",
    imdb_url: "https://www.imdb.com/title/tt1490017/",
  },
  {
    id: 41,
    title: "Lego Movie 2",
    image: "lego-movie-2.jpg",
    imdb_url: "https://www.imdb.com/title/tt3513498/",
  },
  {
    id: 42,
    title: "Men in Black",
    image: "men-in-black.jpg",
    imdb_url: "https://www.imdb.com/title/tt0119654/",
  },
  {
    id: 43,
    title: "Men In Black 2",
    image: "men-in-black-2.jpg",
    imdb_url: "https://www.imdb.com/title/tt0120912/",
  },
  {
    id: 44,
    title: "Men In Black 3",
    image: "men-in-black-3.jpg",
    imdb_url: "https://www.imdb.com/title/tt1409024/",
  },
  {
    id: 45,
    title: "Monsters Inc.",
    image: "monsters-inc.jpg",
    imdb_url: "https://www.imdb.com/title/tt0198781/",
  },
  {
    id: 46,
    title: "Monsters University",
    image: "monsters-university.jpg",
    imdb_url: "https://www.imdb.com/title/tt1453405/",
  },
  {
    id: 47,
    title: "Mrs. Doubtfire",
    image: "mrs-doubtfire.jpg",
    imdb_url: "https://www.imdb.com/title/tt0107614/",
  },
  {
    id: 48,
    title: "Onward",
    image: "onward.jpg",
    imdb_url: "https://www.imdb.com/title/tt7146812/",
  },
  {
    id: 49,
    title: "Pixels",
    image: "pixels.jpg",
    imdb_url: "https://www.imdb.com/title/tt2120120/",
  },
  {
    id: 50,
    title: "Ratatouille",
    image: "ratatouille.jpg",
    imdb_url: "https://www.imdb.com/title/tt0382932/",
  },
  {
    id: 51,
    title: "Shaggy D.A.",
    image: "shaggy-da.jpg",
    imdb_url: "https://www.imdb.com/title/tt0078259/",
  },
  {
    id: 52,
    title: "Shallow Hal",
    image: "shallow-hal.jpg",
    imdb_url: "https://www.imdb.com/title/tt0256380/",
  },
  {
    id: 53,
    title: "Sonic the Hedgehog",
    image: "sonic-the-hedgehog.jpg",
    imdb_url: "https://www.imdb.com/title/tt3794354/",
  },
  {
    id: 54,
    title: "Sonic the Hedgehog 2",
    image: "sonic-the-hedgehog-2.jpg",
    imdb_url: "https://www.imdb.com/title/tt3794354/",
  },
  {
    id: 55,
    title: "Spies in Disguise",
    image: "spies-in-disguise.jpg",
    imdb_url: "https://www.imdb.com/title/tt5814534/",
  },
  {
    id: 56,
    title: "Step Brothers",
    image: "step-brothers.jpg",
    imdb_url: "https://www.imdb.com/title/tt0838283/",
  },
  {
    id: 57,
    title: "The Super Mario Bros Movie",
    image: "the-super-mario-bros-movie.jpg",
    imdb_url: "https://www.imdb.com/title/tt0108255/",
  },
  {
    id: 58,
    title: "The Avengers",
    image: "the-avengers.jpg",
    imdb_url: "https://www.imdb.com/title/tt0848228/",
  },
  {
    id: 59,
    title: "The Day After Tomorrow",
    image: "the-day-after-tomorrow.jpg",
    imdb_url: "https://www.imdb.com/title/tt0319262/",
  },
  {
    id: 60,
    title: "The Incredibles",
    image: "the-incredibles.jpg",
    imdb_url: "https://www.imdb.com/title/tt0317705/",
  },
  {
    id: 61,
    title: "The Incredibles 2",
    image: "the-incredibles-2.jpg",
    imdb_url: "https://www.imdb.com/title/tt3606756/",
  },
  {
    id: 62,
    title: "The Jungle Book",
    image: "the-jungle-book.jpg",
    imdb_url: "https://www.imdb.com/title/tt0061852/",
  },
  {
    id: 63,
    title: "The Matrix",
    image: "the-matrix.jpg",
    imdb_url: "https://www.imdb.com/title/tt0133093/",
  },
  {
    id: 64,
    title: "The Matrix Reloaded",
    image: "the-matrix-reloaded.jpg",
    imdb_url: "https://www.imdb.com/title/tt0234215/",
  },
  {
    id: 65,
    title: "The Matrix Revolutions",
    image: "the-matrix-revolutions.jpg",
    imdb_url: "https://www.imdb.com/title/tt0242653/",
  },
  {
    id: 66,
    title: "Thor",
    image: "thor.jpg",
    imdb_url: "https://www.imdb.com/title/tt0800369/",
  },
  {
    id: 67,
    title: "Thor: Ragnarok",
    image: "thor-ragnarok.jpg",
    imdb_url: "https://www.imdb.com/title/tt3501632/",
  },
  {
    id: 68,
    title: "Toy Story 4",
    image: "toy-story-4.jpg",
    imdb_url: "https://www.imdb.com/title/tt1979376/",
  },
  {
    id: 69,
    title: "Wall-E",
    image: "wall-e.jpg",
    imdb_url: "https://www.imdb.com/title/tt0910970/",
  },
  {
    id: 70,
    title: "X-Men",
    image: "x-men.jpg",
    imdb_url: "https://www.imdb.com/title/tt0120903/",
  },
  {
    id: 71,
    title: "Zoolander",
    image: "zoolander.jpg",
    imdb_url: "https://www.imdb.com/title/tt0196229/",
    description:
      "At the end of his career, a clueless fashion model is brainwashed to kill the Prime Minister of Malaysia.",
    year: 2001,
  },
  {
    id: 72,
    title: "Zootopia",
    image: "zootopia.jpg",
    imdb_url: "https://www.imdb.com/title/tt2948356/",
  },
  {
    id: 73,
    title: "Percy Jackson & the Olympians: The Lightning Thief",
    image: "percy-jackson-the-lightning-thief.jpg",
    imdb_url: "https://www.imdb.com/title/tt0814255/",
  },
  {
    id: 74,
    title: "Percy Jackson: Sea of Monsters",
    image: "percy-jackson-sea-of-monsters.jpg",
    imdb_url: "https://www.imdb.com/title/tt1854564/",
  },
  {
    id: 75,
    title: "The Minions",
    image: "the-minions.jpg",
    imdb_url: "https://www.imdb.com/title/tt2293640/",
  },
  {
    id: 76,
    title: "Despicable Me",
    image: "despicable-me.jpg",
    imdb_url: "https://www.imdb.com/title/tt1323594/",
  },
  {
    id: 77,
    title: "Despicable Me 2",
    image: "despicable-me-2.jpg",
    imdb_url: "https://www.imdb.com/title/tt1690953/",
  },
  {
    id: 78,
    title: "Despicable Me 3",
    image: "despicable-me-3.jpg",
    imdb_url: "https://www.imdb.com/title/tt3469046/",
  },
  {
    id: 79,
    title: "Minions: The Rise of Gru",
    image: "minions-the-rise-of-gru.jpg",
    imdb_url: "https://www.imdb.com/title/tt8116784/",
  },
  {
    id: 80,
    title: "Die Another Day",
    image: "die-another-day.jpg",
    imdb_url: "https://www.imdb.com/title/tt0246460/",
  },
  {
    id: 81,
    title: "Spiderman Into the Spiderverse",
    image: "spiderman-into-the-spider-verse.jpg",
    imdb_url: "https://www.imdb.com/title/tt4633694/",
  },
  {
    id: 82,
    title: "The Nutty Professor",
    image: "the-nutty-professor.jpg",
    imdb_url: "https://www.imdb.com/title/tt0117218/",
  },
  {
    id: 83,
    title: "diary of a wimpy kid rodrick rules",
    image: "diary-of-a-wimpy-kid-rodrick-rules.jpg",
    imdb_url: "https://www.imdb.com/title/tt1650043/",
  },
  {
    id: 84,
    title: "Turning Red",
    image: "turning-red.jpg",
    imdb_url: "https://www.imdb.com/title/tt11240542/",
  },
  {
    id: 85,
    title: "Horrid Henry The Movie",
    image: "horrid-henry-the-movie.jpg",
    imdb_url: "https://www.imdb.com/title/tt1684558/",
  },
  {
    id: 86,
    title: "The emoji movie",
    image: "the-emoji-movie.jpg",
    imdb_url: "https://www.imdb.com/title/tt4877122/",
  },
  {
    id: 87,
    title: "Deadpool",
    image: "deadpool.jpg",
    imdb_url: "https://www.imdb.com/title/tt1431045/",
    date_watched: "2023-08-09"
  },
  {
    id: 88,
    title: "Back to the future",
    image: "back-to-the-future.jpg",
    imdb_url: "https://www.imdb.com/title/tt0088763/",
  },
  {
    id: 89,
    title: "Uncharted",
    image: "uncharted.jpg",
    imdb_url: "https://www.imdb.com/title/tt1464335/",
  },
  {
    id: 90,
    title: "spiderman homecoming",
    image: "spiderman-homecoming.jpg",
    imdb_url: "https://www.imdb.com/title/tt2250912/",
  },
  {
    id: 91,
    title: "Richie Rich",
    image: "richie-rich.jpg",
    imdb_url: "https://www.imdb.com/title/tt0110989/",
  },
  {
    id: 92,
    title: "Dr Dolittle",
    image: "dr-dolittle.jpg",
    imdb_url: "https://www.imdb.com/title/tt0118998/",
  },
  {
    id: 93,
    title: "Shrek",
    image: "shrek.jpg",
    imdb_url: "https://www.imdb.com/title/tt0126029/",
  }
];


