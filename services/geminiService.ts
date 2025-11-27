import { GoogleGenAI } from "@google/genai";
import { Product } from "../types";
import { PRODUCTS } from "../constants";

// Initialize Gemini
// Note: In a real production app, ensure API keys are handled securely.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getFashionAdvice = async (userMessage: string, chatHistory: string[]): Promise<string> => {
  try {
    if (!process.env.API_KEY) {
        return "Maaf, sistem AI sedang offline (Missing API Key).";
    }

    const productContext = PRODUCTS.map(p => 
      `- ${p.name} (${p.category}): IDR ${p.price}`
    ).join('\n');

    const systemInstruction = `
      Anda adalah "Umama AI Stylist", asisten fashion virtual yang ramah dan membantu untuk toko online Umama Scarves.
      
      Tugas Anda:
      1. Memberikan rekomendasi produk dari daftar inventaris yang tersedia berikut ini:
      ${productContext}
      
      2. Memberikan tips fashion umum tentang cara memadukan warna hijab dengan pakaian.
      3. Menjawab pertanyaan dalam Bahasa Indonesia yang sopan dan gaya bahasa santai namun profesional.
      4. Jika pengguna bertanya tentang produk yang tidak ada di daftar, sarankan produk yang mirip dari daftar yang ada.
      
      Jaga jawaban Anda singkat, padat, dan bermanfaat (maksimal 3-4 kalimat).
    `;

    // Construct the prompt with history for context
    const fullPrompt = `${chatHistory.join('\n')}\nUser: ${userMessage}`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: fullPrompt,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      }
    });

    return response.text || "Maaf, saya tidak dapat memproses permintaan Anda saat ini.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Maaf, terjadi kesalahan saat menghubungi asisten fashion kami.";
  }
};