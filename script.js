(function () {
    var container = document.getElementById("game-container");
    var loader = document.getElementById("loader");
    var loaderText = loader.querySelector(".loader-text");

    function onProgress(progress) {
        if (progress.Module) {
            var pct = (progress.percentageDone || 0) << 0;
            loaderText.textContent = "Caricamento gioco… " + pct + "%";
            if (pct >= 100) {
                loaderText.textContent = "Preparazione gioco…";
                loader.classList.add("done");
            }
        }
    }

    function onReady() {
        container.style.display = "flex";
        loader.style.display = "none";
    }

    window.unityGame = UnityLoader.instantiate("game", "Build/SanFrancisco.json", {
        onProgress: onProgress,
        Module: {
            onRuntimeInitialized: onReady
        }
    });
})();
