import movieModel from './movieModel';
import asyncHandler from 'express-async-handler';
import express from 'express';
import {
    getUpcomingMovies,
    getMovies,
    getGenres,
    getMoviePopular,
    getTrendingMovies,
    getMovie,
    getMovieRecommendations,
    getMovieImages,
    getMovieReviews,
    fetchNowPlayingMovies,
    fetchNowPlayingTV,
    getTVShowDetails,
    getTVShowRecommendations,
    getTVShowCredits,
    searchTVShows,
    getPopularTVShows,
    getTVShowsByGenre,
} from '../tmdb-api';

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const movies = await getMovies();
    res.status(200).json(movies);
}));

// Get movie details
router.post("/getMovie", asyncHandler(async (req, res) => {
    const { args } = req.body; // Extract args from request body
    try {
    const movie = await getMovie(args);
    res.status(200).json(movie);
    } catch (error) {
    res.status(500).json({
    message: error.message || "Failed to fetch movie.",
    status_code: 500,
    });
    }
    })
);

router.get('/upcoming', asyncHandler(async (req, res) => {
    const upcomingMovies = await getUpcomingMovies();
    res.status(200).json(upcomingMovies);
}));

router.get('/genres', asyncHandler(async (req, res) => {
    const Genres = await getGenres();
    res.status(200).json(Genres);
}));

router.post("/getMovieImages", asyncHandler(async (req, res) => {
    const { args } = req.body; // Extract args from request body
    try {
    const movie = await getMovieImages(args);
    res.status(200).json(movie);
    } catch (error) {
    res.status(500).json({
    message: error.message || "Failed to fetch movie.",
    status_code: 500,
    });
    }
    })
);

router.post("/getPopularTVShows", asyncHandler(async (req, res) => {
    const { args } = req.body; // Extract args from request body
    try {
    const movie = await getPopularTVShows(args);
    res.status(200).json(movie);
    } catch (error) {
    res.status(500).json({
    message: error.message || "Failed to fetch movie.",
    status_code: 500,
    });
    }
    })
);

router.post("/getMovieReviews", asyncHandler(async (req, res) => {
    const { args } = req.body; // Extract args from request body
    try {
    const movie = await getMovieImages(args);
    res.status(200).json(movie);
    } catch (error) {
    res.status(500).json({
    message: error.message || "Failed to fetch movie.",
    status_code: 500,
    });
    }
    })
);


router.get('/fetchNowPlayingMovies', asyncHandler(async (req, res) => {
    const Genres = await fetchNowPlayingMovies();
    res.status(200).json(Genres);
}));

router.post("/fetchNowPlayingTV", asyncHandler(async (req, res) => {
    const { args } = req.body; // Extract args from request body
    try {
    const movie = await fetchNowPlayingTV(args);
    res.status(200).json(movie);
    } catch (error) {
    res.status(500).json({
    message: error.message || "Failed to fetch movie.",
    status_code: 500,
    });
    }
    })
);

router.post("/getTVShowDetails", asyncHandler(async (req, res) => {
    const { args } = req.body; // Extract args from request body
    try {
    const movie = await getTVShowDetails(args);
    res.status(200).json(movie);
    } catch (error) {
    res.status(500).json({
    message: error.message || "Failed to fetch movie.",
    status_code: 500,
    });
    }
    })
);

router.post("/getTVShowCredits", asyncHandler(async (req, res) => {
    const { args } = req.body; // Extract args from request body
    try {
    const movie = await getTVShowCredits(args);
    res.status(200).json(movie);
    } catch (error) {
    res.status(500).json({
    message: error.message || "Failed to fetch movie.",
    status_code: 500,
    });
    }
    })
);

router.post("/searchTVShows", asyncHandler(async (req, res) => {
    const { args } = req.body; // Extract args from request body
    try {
    const movie = await searchTVShows(args);
    res.status(200).json(movie);
    } catch (error) {
    res.status(500).json({
    message: error.message || "Failed to fetch movie.",
    status_code: 500,
    });
    }
    })
);

router.post("/getTVShowsByGenre", asyncHandler(async (req, res) => {
    const { args } = req.body; // Extract args from request body
    try {
    const movie = await getTVShowsByGenre(args);
    res.status(200).json(movie);
    } catch (error) {
    res.status(500).json({
    message: error.message || "Failed to fetch movie.",
    status_code: 500,
    });
    }
    })
);
export default router;
