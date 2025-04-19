import html2canvas from "html2canvas";
import { questions, themes } from "./data";

export const getPackAsImageData = async (cardEl) => {
    const canvas = await html2canvas(cardEl, {
        useCORS: true,
        scale: 2, // daha kaliteli görüntü
    });
    return canvas.toDataURL("image/png"); // base64 string döner
};

export const uploadToImgbb = async (base64Data) => {
    const form = new FormData();
    form.append("image", base64Data.split(",")[1]);

    const response = await fetch("https://api.imgbb.com/1/upload?key=0c6e7cd171cc73ee4e6dfcfaf2cc0bd9", {
        method: "POST",
        body: form,
    });

    const data = await response.json();
    return data.data?.url; // işte bu senin paylaşılabilir linkin
};


export const savePackAsImage = async (cardElement) => {

    if (!cardElement) {
        console.error("🎯 .result bulunamadı!");
        return;
    }

    try {
        const canvas = await html2canvas(cardElement, {
            scale: 2, // daha kaliteli görüntü
            useCORS: true // harici img'ler için (örn. logo vs)
        });

        const dataURL = canvas.toDataURL("image/png");

        // Galeriye kaydedilsin: kullanıcıya indirme ver
        const link = document.createElement("a");
        link.href = dataURL;
        link.download = "result.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (error) {
        console.error("💥 Kart görsele çevrilemedi:", error);
    }
};

export function getQuizResult(answers) {
    const scores = {
        Chaos: 0,
        Melancholy: 0,
        Defense: 0,
        Clarity: 0
    };

    answers.forEach((answer, index) => {
        const question = questions[index];
        const selectedTheme = question.themes[answer - 1]; // 1-based index
        if (selectedTheme && scores[selectedTheme] !== undefined) {
            scores[selectedTheme]++;
        }
    });

    const sortedThemes = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    const topTheme = sortedThemes[0][0];

    return {
        theme: topTheme,
        score: scores[topTheme],
        title: themes[topTheme].title,
        description: themes[topTheme].description,
        breakdown: scores
    };
}
