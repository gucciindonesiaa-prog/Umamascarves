import { GoogleGenAI } from "@google/genai";

export const getFashionAdvice = async (userMessage: string, chatHistory: string[]): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Construct the prompt with conversation history context
    const historyContext = chatHistory.join('\n');
    const prompt = historyContext 
      ? `${historyContext}\nUser: ${userMessage}`
      : `User: ${userMessage}`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: "Anda adalah Umama AI Stylist, asisten fashion personal untuk brand Umama Scarves. Tugas Anda adalah memberikan saran mix & match outfit, rekomendasi warna hijab yang cocok dengan baju, dan saran produk Umama yang relevan. Gaya bicara Anda ramah, stylish, kekinian, dan membantu. Gunakan Bahasa Indonesia yang baik dan natural.",
      },
    });

    return response.text || "Maaf, saya sedang tidak bisa memberikan saran saat ini.";
  } catch (error) {
    console.error("Error fetching fashion advice:", error);
    return "Maaf, terjadi kesalahan pada layanan AI Stylist. Silakan coba lagi nanti.";
  }
};