/* eslint-disable react/prop-types */
const Match = ({ match }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold mb-2">{match.name}</h3>
      <p className="text-gray-600">
        <span className="font-medium">Venue:</span> {match.venue}
      </p>
      <p className="text-gray-600">
        <span className="font-medium">Date:</span> {match.date}
      </p>
      <p className="text-gray-600">
        <span className="font-medium">Teams:</span> {match.teams.join(" vs ")}
      </p>
      <p className="text-gray-600">
        <span className="font-medium">Status:</span> {match.status}
      </p>
      {match.matchStarted && (
        <p className="text-green-600 font-medium">Match in Progress</p>
      )}
      {match.matchEnded && (
        <p className="text-red-600 font-medium">Match Ended</p>
      )}
    </div>
  );
};

export default Match;
