import { useState } from "react";

import API from "../services/api";


function AIRecommendations() {

  const [recommendation, setRecommendation] =
    useState("");



  const getAIRecommendation = async () => {

    try {

      const res = await API.post(
        "/ai/recommend"
      );

      setRecommendation(
        res.data.recommendation
      );

    } catch (error) {

      alert(
        error.response.data.message
      );

    }

  };



  return (

    <div className="card">

      <h2>AI Recommendations</h2>

      <button
  className="ai-btn"
  onClick={getAIRecommendation}
>
        Generate AI Report
      </button>

      <pre>
        {recommendation}
      </pre>

    </div>

  );

}

export default AIRecommendations;