import { useEffect, useState } from "react";

const useMatches = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await fetch(
          "https://api.cricapi.com/v1/series_info?apikey=7cc6a5da-2f6b-4d85-acf1-52cad0955801&id=49fc7a37-da67-435e-bf5f-00da233e9ff4"
        ); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch matches");
        }
        const data = await response.json();
        setMatches(data.data.matchList);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMatches();
  }, []);

  return { matches, loading, error };
};

export default useMatches;
