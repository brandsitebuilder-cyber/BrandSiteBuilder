import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

export const generateQuoteEstimate = async (
  projectType: string,
  features: string[],
  description: string
): Promise<string> => {
  if (!API_KEY) {
    return "AI estimation unavailable. Please contact us directly for a manual quote.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    const model = 'gemini-3-flash-preview';

    const prompt = `
      You are an expert estimator for a web development agency called 'BrandSiteBuilder'.
      A potential client has requested a quote with the following details:
      
      - Project Type: ${projectType}
      - Key Features: ${features.join(', ')}
      - Description: ${description}

      Please provide a friendly, professional response that includes:
      1. A brief analysis of their needs.
      2. A suggested tech stack (e.g., React, Node.js, CMS).
      3. A rough estimated price range (in USD) and timeline.
      4. A call to action to book a meeting.
      
      Keep the tone encouraging, professional, and concise (under 200 words).
      Format the output with Markdown.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });

    return response.text || "Could not generate an estimate at this time.";
  } catch (error) {
    console.error("Gemini Quote Error:", error);
    return "Error generating estimate. Our team will review your request manually.";
  }
};