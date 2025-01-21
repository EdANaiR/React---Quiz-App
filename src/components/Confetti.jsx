import React, { useEffect } from "react";
import "../style/confetti.css";

const Confetti = ({ isVisible }) => {
  useEffect(() => {
    if (!isVisible) return;

    // Konfeti parçacıklarını oluştur
    const createConfetti = () => {
      const confetti = document.createElement("div");
      confetti.className = "confetti";

      // Rastgele renk seç
      const colors = [
        "#ff0000",
        "#00ff00",
        "#0000ff",
        "#ffff00",
        "#ff00ff",
        "#00ffff",
      ];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.backgroundColor = randomColor;

      // Rastgele pozisyon ve animasyon süresi
      confetti.style.left = Math.random() * 100 + "vw";
      confetti.style.animationDuration = Math.random() * 3 + 2 + "s";

      document.body.appendChild(confetti);

      // Animasyon bitince elementi kaldır
      setTimeout(() => {
        confetti.remove();
      }, 5000);
    };

    // 50 konfeti parçacığı oluştur
    for (let i = 0; i < 50; i++) {
      setTimeout(createConfetti, i * 100);
    }
  }, [isVisible]);

  return null;
};

export default Confetti;
