const axios = require("axios");

const Employee = require("../models/Employee");




// AI RECOMMENDATION
const getAIRecommendation = async (req, res) => {

  try {

    // GET ALL EMPLOYEES
    const employees = await Employee.find();

    // CREATE PROMPT
    const prompt = `
You are an HR AI assistant.

Analyze these employees and provide:

1. Promotion recommendations
2. Employee ranking
3. Training suggestions
4. Performance feedback

Employees Data:
${JSON.stringify(employees)}

Return clean readable output.
`;



    // API CALL
    const response = await axios.post(

      "https://openrouter.ai/api/v1/chat/completions",

      {
        model: "openai/gpt-3.5-turbo",

        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      },

      {
        headers: {
          Authorization:
            `Bearer ${process.env.OPENROUTER_API_KEY}`,

          "Content-Type": "application/json",
        },
      }

    );


    // SEND AI RESPONSE
    res.json({
      recommendation:
        response.data.choices[0].message.content,
    });

  } catch (error) {

    console.log(error.response?.data || error.message);

    res.status(500).json({
      message: "AI request failed",
      error: error.message,
    });

  }

};



module.exports = {
  getAIRecommendation,
};