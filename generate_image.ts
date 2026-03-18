import { GoogleGenAI } from "@google/genai";
import fs from "fs";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function run() {
  console.log("Generating image...");
  const response = await ai.models.generateContent({
    model: 'gemini-3.1-flash-image-preview',
    contents: {
      parts: [
        {
          text: 'A high-definition cinematic photograph of a clean, modern solar farm array under bright, clear sunlight. The composition is focused on the professional figure of a solar engineer in the mid-ground. He is a Caucasian man, standing upright and confident, wearing a white safety helmet, a professional blue work jacket, and safety boots. In his hands, he is holding and interacting with a silver rugged tablet. He is not pointing or gesturing, just looking at the tablet. Behind him are rows of clean monocristaline solar panels that fill the lower half of the frame. The perspective creates depth. The sky is bright but not distracting. The dynamic range is high, highlighting the metallic texture of the helmet and tablet. The entire scene feels stable and professional. No text, no logos, no interfaces.',
        },
      ],
    },
    config: {
      imageConfig: {
        aspectRatio: "16:9",
        imageSize: "2K"
      }
    }
  });

  for (const part of response.candidates[0].content.parts) {
    if (part.inlineData) {
      const base64EncodeString = part.inlineData.data;
      fs.writeFileSync('public/hero-bg.jpg', Buffer.from(base64EncodeString, 'base64'));
      console.log('Image saved to public/hero-bg.jpg');
    }
  }
}

run().catch(console.error);
