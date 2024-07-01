export default function SingleMovie({
    title,
    genre,
    year,
    poster
}) {
    return (
        <div className="movie-card">
            <div className="movie-img">
                <img src={poster} alt={title} />
            </div>

            <div className="movie-info">
                <h3>{title}</h3>
                <p>Genre: {genre}</p>
                <p>Year: {year}</p>
                <a href="#">Details</a>
            </div>
        </div>
    );
}