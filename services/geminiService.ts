
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
You are ARCHI-BOT, the virtual lead consultant for ARCHI-TEK Studio. 
You are a world-class architectural visionary. 
Your expertise covers:
- Sustainable design and eco-friendly materials (cross-laminated timber, recycled glass, mycelium bricks).
- Structural integrity and engineering concepts.
- Aesthetic trends like Minimalism, Brutalism, Biophilic design, and Neo-Futurism.
- Spatial optimization and lighting design.

Be professional, inspiring, and concise. Offer technical details when asked. 
If someone asks about our projects, refer them to 'The Monolith Villa', 'Crystal Pavilion', or 'Helix Towers'.
Keep responses formatted with Markdown for better readability.
`;

export async function askArchitect(prompt: string): Promise<string> {
  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.8,
        topP: 0.95,
        maxOutputTokens: 1000,
      },
    });

    return response.text || "I'm contemplating that. Could you rephrase your design inquiry?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The architectural network is currently offline. Please try again in a moment.";
  }
}
