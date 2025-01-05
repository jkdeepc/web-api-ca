export const getUpcomingMovies = async () => {
  const response = await fetch(
    'http://localhost:8080/api/movies/upcoming', {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};


export const getMovies = async () => {
  const response = await fetch(
    'http://localhost:8080/api/movies', {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};

export const getMovie = async ({queryKey}) => {
  const response = await fetch('http://localhost:8080/api/movies/getMovie', {
  headers: {
    'Content-Type': 'application/json', // 添加 Content-Type
  'Authorization': window.localStorage.getItem('token')
  },
  method: 'post',
  body: JSON.stringify({ args:queryKey })
  });
  return response.json();
  };

  export const getGenres = async () => {
    const response = await fetch(
     'http://localhost:8080/api/movies/genres', {
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }
  });
    return response.json();
  };

  export const getMovieImages = async ({ queryKey }) => {
    const response = await fetch('http://localhost:8080/api/movies/getMovieImages', {
    headers: {
      'Content-Type': 'application/json', // 添加 Content-Type
    'Authorization': window.localStorage.getItem('token')
    },
    method: 'post',
    body: JSON.stringify({ args:queryKey })
    });
    return response.json();
  };
  
  
  
  export const getMovieReviews = async ({ queryKey }) => {
    const response = await fetch('http://localhost:8080/api/movies/getMovieReviews', {
    headers: {
      'Content-Type': 'application/json', // 添加 Content-Type
    'Authorization': window.localStorage.getItem('token')
    },
    method: 'post',
    body: JSON.stringify({ args:queryKey })
    });
    return response.json();
  };
 
  export const fetchNowPlayingMovies = async () => {
    const response = await fetch(
     'http://localhost:8080/api/movies/fetchNowPlayingMovies', {
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }
  });
    return response.json();
  };

  export const fetchNowPlayingTV = async () => {
    const response = await fetch(
     'http://localhost:8080/api/movies/fetchNowPlayingTV', {
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }
  });
    return response.json();
  };

  export const getTVShowDetails = async ({ queryKey }) => {
    const response = await fetch('http://localhost:8080/api/movies/getTVShowDetails', {
    headers: {
      'Content-Type': 'application/json', // 添加 Content-Type
    'Authorization': window.localStorage.getItem('token')
    },
    method: 'post',
    body: JSON.stringify({ args:queryKey })
    });
    return response.json();
  };

  export const getTVShowRecommendations = async ({ queryKey }) => {
    const response = await fetch('http://localhost:8080/api/movies/getTVShowRecommendations', {
    headers: {
      'Content-Type': 'application/json', // 添加 Content-Type
    'Authorization': window.localStorage.getItem('token')
    },
    method: 'post',
    body: JSON.stringify({ args:queryKey })
    });
    return response.json();
  };

  export const getTVShowCredits = async ({ queryKey }) => {
    const response = await fetch('http://localhost:8080/api/movies/getTVShowCredits', {
    headers: {
      'Content-Type': 'application/json', // 添加 Content-Type
    'Authorization': window.localStorage.getItem('token')
    },
    method: 'post',
    body: JSON.stringify({ args:queryKey })
    });
    return response.json();
  };

  export const searchTVShows = async ({ queryKey }) => {
    const response = await fetch('http://localhost:8080/api/movies/searchTVShows', {
    headers: {
      'Content-Type': 'application/json', // 添加 Content-Type
    'Authorization': window.localStorage.getItem('token')
    },
    method: 'post',
    body: JSON.stringify({ args:queryKey })
    });
    return response.json();
  };

  export const getPopularTVShows = async () => {
    const response = await fetch('http://localhost:8080/api/movies/getPopularTVShows', {
    headers: {
      'Content-Type': 'application/json', // 添加 Content-Type
    'Authorization': window.localStorage.getItem('token')
    },
    method: 'post',
    body: JSON.stringify()
    });
    return response.json();
  };

  export const getTVShowsByGenre = async ({ queryKey }) => {
    const response = await fetch('http://localhost:8080/api/movies/getTVShowsByGenre', {
    headers: {
      'Content-Type': 'application/json', // 添加 Content-Type
    'Authorization': window.localStorage.getItem('token')
    },
    method: 'post',
    body: JSON.stringify({ args:queryKey })
    });
    return response.json();
  };