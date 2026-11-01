let currentRotation = 0;

function spinBottle() {
    const bottle = document.getElementById("bottle");
    const btn = document.getElementById("spin-btn");

    // Düyməni fırlanma vaxtı basmağı dayandırıriq
    btn.disabled = true;

    // Minimum 5 tam dövr (1800 dərəcə) + təsadüfi bucaq (0-360 dərəcə)
    const extraDegrees = Math.floor(Math.random() * 360);
    const totalSpin = 1800 + extraDegrees;

    currentRotation += totalSpin;

    // Butulkanı fırladırıq
    bottle.style.transform = `rotate(${currentRotation}deg)`;

    // 4 saniyə sonra fırlanma bitir və düymə yenidən aktiv olur
    setTimeout(() => {
        btn.disabled = false;
    }, 4000);
}
