
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // In a real app, you might want to handle this more gracefully.
  // For this example, we'll throw an error if the key is not set.
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const generateProjectDescription = async (keywords: string): Promise<string> => {
  if (!keywords) {
    return "Please provide some keywords to generate a description.";
  }

  const prompt = `
    As an expert architectural copywriter, write a compelling and evocative project description for an architect's portfolio, approximately 100-150 words long. 
    The project's key features are: "${keywords}".
    Focus on the design philosophy, the interplay of materials, the experience of the space, and the connection to its environment. 
    Use sophisticated and professional language. Do not use markdown or formatting.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    
    return response.text;
  } catch (error) {
    console.error("Error generating description:", error);
    return "Sorry, I encountered an error while trying to generate the description. Please try again.";
  }
};
