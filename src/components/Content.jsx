import React from "react";
import CodeBox from "../layout/CodeBox";

const Content = () => {
  return (
    <div className="space-y-12">
      <section>
        <h2 id="headers" className="text-3xl font-bold mb-6">Query Headers</h2>
        <p className="text-lg text-gray-600 mb-8">
          The following headers can be used to query movies based on specific parameters. These queries allow users to fetch movies by title, cast, director, release year, genre, and more.
        </p>
      </section>

      {/* Movie Name */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">Movie Name</h3>
        <p className="text-gray-700 mb-6">
          Search for movies by their titles using the <code className="bg-gray-200 px-1 py-0.5 rounded">name</code> parameter. Include the desired title in your API request to get results.
        </p>
        <div className="p-4 bg-gray-50 border rounded">
          <CodeBox code={"https://apiverse-backend.onrender.com/api/movie/query?name=jawan"} />
        </div>
      </section>

      {/* Cast */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">Cast</h3>
        <p className="text-gray-700 mb-6">
          Use the <code className="bg-gray-200 px-1 py-0.5 rounded">cast</code> parameter to search for movies featuring specific cast members.
        </p>
        <div className="p-4 bg-gray-50 border rounded">
          <CodeBox code={"https://apiverse-backend.onrender.com/api/movie/query?cast=shah-rukh-khan"} />
        </div>
      </section>

      {/* Director */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">Director</h3>
        <p className="text-gray-700 mb-6">
          Filter movies by their directors using the <code className="bg-gray-200 px-1 py-0.5 rounded">director</code> parameter.
        </p>
        <div className="p-4 bg-gray-50 border rounded">
          <CodeBox code={"https://apiverse-backend.onrender.com/api/movie/query?director=christopher-nolan"} />
        </div>
      </section>

      {/* Year */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">Year</h3>
        <p className="text-gray-700 mb-6">
          Use the <code className="bg-gray-200 px-1 py-0.5 rounded">year</code> parameter to find movies released in a specific year.
        </p>
        <div className="p-4 bg-gray-50 border rounded">
          <CodeBox code={"https://apiverse-backend.onrender.com/api/movie/query?year=2023"} />
        </div>
      </section>

      {/* Genre */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">Genre</h3>
        <p className="text-gray-700 mb-6">
          Search for movies by genre using the <code className="bg-gray-200 px-1 py-0.5 rounded">genre</code> parameter.
        </p>
        <div className="p-4 bg-gray-50 border rounded">
          <CodeBox code={"https://apiverse-backend.onrender.com/api/movie/query?genre=action"} />
        </div>
      </section>
    </div>
  );
};

export default Content;
