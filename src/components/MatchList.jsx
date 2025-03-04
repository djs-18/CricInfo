/* eslint-disable no-unused-vars */
import React from "react";
import useMatches from "../customhooks/useMatches";
import Match from "./Match";
import ShimmerMatch from "./ShimmerMatch";

const MatchesList = () => {
  const { matches, loading, error } = useMatches();
  console.log("This is matches",matches,loading,error)

//   if (loading) {
//     return <p className="text-center text-gray-600">Loading matches...</p>;
//   }

  if (error) {
    return <p className="text-center text-red-600">Error: {error}</p>;
  }

  return (
    <div className="container mx-auto p-4 ">
      <h1 className="text-3xl font-bold text-center mb-20">
        ICC Champions Trophy 2025
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading
          ? // Show shimmer effect while loading
            Array.from({ length: 6 }).map((_, index) => (
              <ShimmerMatch key={index} />
            ))
          : // Render actual matches once data is loaded
            matches.map((match) => <Match key={match.id} match={match} />)}
      </div>
    </div>
  );
};

export default MatchesList;
