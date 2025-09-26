import { useState, useEffect } from "react";

export const usePortfolio = () => {
  const [portfolio, setPortfolio] = useState(null);
  const [loading, setLoading] = useState(true);

  const userId = sessionStorage.getItem("userId");

  useEffect(() => {
    const fetchPortfolio = async () => {
      if (!userId) return;

      try {
        const res = await fetch(`http://localhost:8081/api/portfolio/user/${userId}`);
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) setPortfolio(data[0]);
        else if (data && !Array.isArray(data)) setPortfolio(data);
      } catch (err) {
        console.error("Error fetching portfolio:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolio();
  }, [userId]);

  return { portfolio, loading };
};
