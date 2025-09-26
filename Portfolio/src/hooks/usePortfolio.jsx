import { useState, useEffect } from "react";

export const usePortfolio = (userId) => {
  const [portfolio, setPortfolio] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPortfolio = async () => {
      if (!userId) {
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(`http://localhost:8081/api/portfolio/user/${userId}`);
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();

        if (Array.isArray(data) && data.length > 0) {
          setPortfolio(data[0]);
        } else if (data && !Array.isArray(data)) {
          setPortfolio(data);
        } else {
          setError("No portfolio found for this user.");
        }
      } catch (err) {
        console.error("Error fetching portfolio:", err);
        setError("Failed to fetch portfolio.");
      } finally {
        setLoading(false);
      }
    };
    fetchPortfolio();
  }, [userId]);

  return { portfolio, loading, error };
};
