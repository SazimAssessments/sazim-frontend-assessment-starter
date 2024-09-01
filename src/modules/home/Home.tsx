import React, { useState } from "react";
import { getStatus } from "../../shared/services/api";

const Home: React.FC = () => {
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const checkStatus = async () => {
    setIsLoading(true);
    setStatusMessage(null);
    try {
      const response = await getStatus();
      setStatusMessage(`Success: ${response.data.message || "API is working"}`);
    } catch (error) {
      console.error("Error fetching status:", error);
      setStatusMessage("Failed: Unable to reach the /status endpoint");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div>
        <a href="#">
          <img src={"/SAZIM LONG LOGO.png"} className="logo" alt="Sazim logo" />
        </a>
      </div>
      <h1>Sazim React Template</h1>
      <div className="card">
        <button onClick={checkStatus} disabled={isLoading}>
          {isLoading ? "Checking..." : "Check API Status"}
        </button>
        {statusMessage ? (
          <p className={statusMessage.startsWith("Success") ? "success" : "error"}>
            {statusMessage}
          </p>
        ) : null}
      </div>
    </>
  );
};

export default Home;
