import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';

export default function AiImageGenerator() {
  const [prompt, setPrompt] = useState('A high-definition cinematic photograph of a clean, modern solar farm array under bright, clear sunlight. The composition is focused on the professional figure of a solar engineer in the mid-ground. He is a Caucasian man, standing upright and confident, wearing a white safety helmet, a professional blue work jacket, and safety boots. In his hands, he is holding and interacting with a silver rugged tablet. He is not pointing or gesturing, just looking at the tablet. Behind him are rows of clean monocristaline solar panels that fill the lower half of the frame. The perspective creates depth. The sky is bright but not distracting. The dynamic range is high, highlighting the metallic texture of the helmet and tablet. The entire scene feels stable and professional. No text, no logos, no interfaces.');
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateImage = async () => {
    setIsGenerating(true);
    setError(null);
    try {
      // Check for API key selection
      // @ts-ignore
      if (window.aistudio && !await window.aistudio.hasSelectedApiKey()) {
        // @ts-ignore
        await window.aistudio.openSelectKey();
      }

      // We must assume the key is now available in process.env.API_KEY
      // @ts-ignore
      const apiKey = process.env.API_KEY;
      if (!apiKey) {
        throw new Error("API Key não encontrada. Por favor, selecione uma chave de API válida.");
      }

      const ai = new GoogleGenAI({ apiKey });

      const response = await ai.models.generateContent({
        model: 'gemini-3.1-flash-image-preview',
        contents: {
          parts: [{ text: prompt }],
        },
        config: {
          imageConfig: {
            aspectRatio: "16:9",
            imageSize: "2K"
          }
        }
      });

      let foundImage = false;
      for (const part of response.candidates?.[0]?.content?.parts || []) {
        if (part.inlineData) {
          const base64EncodeString = part.inlineData.data;
          setImageUrl(`data:image/jpeg;base64,${base64EncodeString}`);
          foundImage = true;
          break;
        }
      }

      if (!foundImage) {
        throw new Error("Nenhuma imagem foi retornada pela IA.");
      }

    } catch (err: any) {
      console.error(err);
      setError(err.message || "Erro ao gerar imagem.");
      // If entity not found, reset key
      if (err.message && err.message.includes("Requested entity was not found")) {
        // @ts-ignore
        if (window.aistudio) window.aistudio.openSelectKey();
      }
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section className="py-20 bg-solar-dark text-white border-t border-white/5">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black mb-4"><i className="fas fa-magic text-solar-orange mr-3"></i>Estúdio de Imagens IA</h2>
          <p className="text-gray-400">Gere imagens exclusivas e fotorrealistas para o seu site usando a inteligência artificial do Google (Gemini 3.1 Flash Image).</p>
        </div>

        <div className="bg-solar-card p-6 rounded-2xl border border-white/10 shadow-2xl">
          <label className="block text-sm font-bold text-gray-300 mb-2">Prompt da Imagem</label>
          <textarea 
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full bg-black/20 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-solar-orange transition-colors h-40 mb-4"
          />
          
          <button 
            onClick={generateImage}
            disabled={isGenerating}
            className="w-full bg-solar-orange text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-colors shadow-lg flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isGenerating ? (
              <><i className="fas fa-spinner fa-spin"></i> Gerando Imagem (Pode levar alguns segundos)...</>
            ) : (
              <><i className="fas fa-image"></i> Gerar Imagem</>
            )}
          </button>

          {error && (
            <div className="mt-4 p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-400 text-sm">
              <i className="fas fa-exclamation-triangle mr-2"></i> {error}
            </div>
          )}

          {imageUrl && (
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4 text-center">Resultado:</h3>
              <div className="rounded-xl overflow-hidden border-2 border-solar-orange shadow-[0_0_30px_rgba(255,107,0,0.2)]">
                <img src={imageUrl} alt="Imagem Gerada por IA" className="w-full h-auto" />
              </div>
              <p className="text-center text-gray-400 mt-4 text-sm">
                <i className="fas fa-info-circle mr-1"></i> Clique com o botão direito na imagem para salvar e usar no seu site.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
