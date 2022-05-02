import Hero from "../components/Hero";
import Card from "../components/Card";
import React, { useEffect } from "react";

const Landing = () => {
  const [loading, setLoading] = React.useState(true);
  const [movies, setMovies] = React.useState([]);

  useEffect(() => {
    setLoading(false);
    fetch("http://localhost:8080/movies")
      .then((res) => res.json())
      .then((result) => {
        setMovies(result);
        setLoading(false);
      });
  }, []);

  const handleDeleteMovie = async (id) => {
    try {
      await fetch(`http://localhost:8080/movies/${id}`, {
        method: "DELETE",
      });
      const updatedMovies = movies.filter((movie) => movie.id !== id);

      setMovies(updatedMovies);
    } catch (error) {
      console.log(error.message);
    }
  };

  const renderMovies = () => {
    if (loading) {
      return <p>Loading...</p>;
    }

    return movies.map(({ id, image, score, name, director, genre }) => (
      <Card
        key={id}
        image={image}
        score={score}
        name={name}
        director={director}
        genre={genre}
        onDelete={() => handleDeleteMovie(id)}
      />
    ));
  };

  return (
    <div>
      <Hero />
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 movies-container">
        {renderMovies()}
      </div>
    </div>
  );
};

export default Landing;
