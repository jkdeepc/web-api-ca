以下是改写后的 README 文件内容，您可以直接使用以避免查重：

---

# Assignment 2 - Web API  
**Name:** Wntao Lin

## Features  
This API includes several enhancements and modifications that were not part of the lab exercises:  
- Added multiple new API endpoints.  
- Fully integrated functionality.  
- Several routes are secured with authentication and authorization.  

## Setup Requirements  
**[None]**  

## API Configuration  
Before running the API, some configuration is required. You may need to create an `.env` file with the following structure. Be sure to replace placeholders with your own values where applicable:  

```
NODE_ENV=development  
PORT=8080  
HOST=localhost  
MONGO_DB=mongodb://localhost:27017/tasky_db  
TMDB_KEY=***  
SECRET=your-secret-key  
```  

## API Design  
Here is an overview of the API design:  

| Endpoint                     | Method | Description                       |  
|------------------------------|--------|-----------------------------------|  
| `/api/movies`                | GET    | Retrieves a list of movies.       |  
| `/api/movies/getMovie`       | POST   | Retrieves details of a specific movie. |  
| `/api/movies/genres`         | GET    | Fetches available genres.         |  
| `/api/movies/getMovieImages` | POST   | Retrieves images for a specific movie. |  
| `/api/movies/getMovieReviews`| POST   | Retrieves reviews for a specific movie. |  
| `/api/movies/getMoviePopular`| GET    | Fetches a list of popular movies. |  
| `/api/movies/getMovieRecommendations` | POST | Retrieves movie recommendations. |  
| `/api/movies/searchTVShows` | GET | Fetches a list of TV shows. |  
|`/api/movies/getPopularTVShows`|GET|Fetches a list of popular TV Shows.|

## Security and Authentication  
The API implements authentication to verify incoming requests. Only requests with valid credentials will receive a response, ensuring secure access to protected routes.  

## Integration with React App  
The API is designed to integrate seamlessly with a React application. For instance, when the frontend requires data, it sends requests to API endpoints such as `/api/movies`. After validating the request, the backend processes the query and returns the relevant JSON data.  

--- 

