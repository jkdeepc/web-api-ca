import fetch from 'node-fetch';

export const getUpcomingMovies = async () => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
        );

        if (!response.ok) {
            throw new Error(response.json().message);
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
};

export const getMovies = async () => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
        );

        if (!response.ok) {
            throw new Error(response.json().message);
        }
        return await response.json();
    } catch (error) {
        throw error;
    }
};

export const getGenres = async () => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.TMDB_KEY}&language=en-US`
        );

        if (!response.ok) {
            throw new Error(response.json().message);
        }
        return await response.json();
    } catch (error) {
        throw error;
    }
};

export const getMoviePopular = async () => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
        );

        if (!response.ok) {
            throw new Error(response.json().message);
        }
        return await response.json();
    } catch (error) {
        throw error;
    }
};

export const getTrendingMovies = async () => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.TMDB_KEY}`
        );

        if (!response.ok) {
            throw new Error(response.json().message);
        }
        return await response.json();
    } catch (error) {
        throw error;
    }
};

export const getMovie = async ( queryKey ) => {
    try {
    const [, { id }] = queryKey;
    console.log(id)
    const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_KEY}`
    );

    if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to fetch movie details.");
    } 
    return await response.json();
    } catch (error) {
    console.error("Error fetching movie details:", error.message);
    throw error;
    }
};

export const getMovieImages = async ( queryKey ) => {
    try {
    const [, { id }] = queryKey;
    console.log(id)
    const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.TMDB_KEY}`
    );

    if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to fetch movie details.");
    } 
    return await response.json();
    } catch (error) {
    console.error("Error fetching movie details:", error.message);
    throw error;
    }
};

export const getMovieRecommendations = async ( id ) => {
    try {
    const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.TMDB_KEY}`
    );

    if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to fetch movie details.");
    } 
    return await response.json();
    } catch (error) {
    console.error("Error fetching movie details:", error.message);
    throw error;
    }
};

export const getMovieReviews = async ( queryKey ) => {
    try {
    const [, { id }] = queryKey;
    console.log(id)
    const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.TMDB_KEY}`
    );

    if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to fetch movie details.");
    } 
    return await response.json();
    } catch (error) {
    console.error("Error fetching movie details:", error.message);
    throw error;
    }
};

export const fetchNowPlayingMovies = async () => {
    const apiKey = process.env.TMDB_KEY;  
  
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (data && data.results) {
        return data.results;
      } else {
        console.error("Error fetching data:", data);
        return [];  
      }
    } catch (error) {
      console.error("Error fetching now playing movies:", error);
      return [];  
    }
  };

  export const fetchNowPlayingTV = async () => {
    const apiKey = process.env.REACT_APP_TMDB_KEY;
    const url = `https://api.themoviedb.org/3/tv/on_the_air?api_key=${apiKey}&language=en-US&page=1`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (data && data.results) {
        return data.results;  
      } else {
        console.error("Error fetching data:", data);
        return [];
      }
    } catch (error) {
      console.error("Error fetching now playing TV shows:", error);
      return [];
    }
  };

  export const getTVShowDetails = (id) => {
    return fetch(
      `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.TMDB_KEY}&language=en-US`
    )
      .then((response) => response.json())
      .catch((error) => {
        throw error;
      });
  };
  export const getTVShowRecommendations = (id) => {
    return fetch(
      `https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=${process.env.TMDB_KEY}&language=en-US`
    )
      .then((response) => response.json())
      .catch((error) => {
        console.error("Error fetching TV show recommendations:", error);
        throw error;
      });
  };
  export const getTVShowCredits = (id) => {
    return fetch(
      `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${process.env.TMDB_KEY}&language=en-US`
    )
      .then((response) => response.json())
      .catch((error) => {
        console.error("Error fetching TV show credits:", error);
        throw error;
      });
  };
  
  
  
  export const searchTVShows = (query) => {
    return fetch(
      `https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&query=${query}&page=1`
    )
      .then((response) => {
        if (!response.ok) {
          return response.json().then((error) => {
            throw new Error(error.status_message || "Something went wrong");
          });
        }
        return response.json();
      })
      .catch((error) => {
        throw error;
      });
  };
  
  export const getPopularTVShows = (genreId = "") => {
    // 如果传递了类型 ID，则将其作为查询参数进行过滤
    const genreParam = genreId ? `&with_genres=${genreId}` : "";
    
    return fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.TMDB_KEY}&language=en-US&page=1${genreParam}`
    )
      .then((response) => {
        if (!response.ok) {
          return response.json().then((error) => {
            throw new Error(error.status_message || "Something went wrong");
          });
        }
        return response.json();
      })
      .catch((error) => {
        throw error;
      });
  };
  
  export const getTVGenres = () => {
    return fetch(
      `https://api.themoviedb.org/3/genre/tv/list?api_key=${process.env.TMDB_KEY}&language=en-US`
    )
      .then((response) => {
        if (!response.ok) {
          return response.json().then((error) => {
            throw new Error(error.status_message || "Something went wrong");
          });
        }
        return response.json();
      })
      .catch((error) => {
        throw error;
      });
  };
  // api/tmdb-api.js
  export const getTVShowsByGenre = async (genreId, year = "", language = "en-US", totalPages = 3) => {
    let allResults = [];
  
    for (let page = 1; page <= totalPages; page++) {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.TMDB_KEY}&language=${language}&with_genres=${genreId}&first_air_date_year=${year}&page=${page}`
        );
  
        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.status_message || "Something went wrong");
        }
  
        const data = await response.json();
        allResults = [...allResults, ...data.results];
      } catch (error) {
        console.error("Error fetching TV shows by genre:", error);
      }
    }
  
    return { results: allResults };
  };