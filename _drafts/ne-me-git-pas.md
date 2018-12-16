
```js
(function() {
        window.visibilityJoke = {
            song: [
                "🎶 Moi je t'offrirai",
                "🎶 Des commits ciselés",
                "🎶 Sur des branches forkées",
                "🎶 Où on ne rebase pas.",
                "🎶 …",
                "🎶 Je ferai des pull",
                "🎶 Jusqu'après ma mort",
                "🎶 Pour avoir tes tags",
                "🎶 Jusque dans mon stash.",
                "🎶 …",
                "🎶 Je ferai un HEAD",
                "🎶 Où l'amour sera roi,",
                "🎶 Où l'amour sera loi,",
                "🎶 Où tu pourras merge.",
                "🎶 …",
                "🎶 Ne me git pas,",
                "🎶 …",
                "🎶 Ne me git pas,",
                "🎶 …",
                "🎶 Ne me git pas,",
                "🎶 …",
                "🎶 Ne me git pas."
            ],
            id_interval: null,
            index: 0
        };

        document.addEventListener("visibilitychange", function () {

            function iterateSongTitle() {
                if (window.visibilityJoke.index < window.visibilityJoke.song.length) {
                    document.title = window.visibilityJoke.song[window.visibilityJoke.index];
                    window.visibilityJoke.index += 1;
                } else {
                    rollbackTitle();
                }
            }

            function rollbackTitle() {
                if (window.visibilityJoke.id_interval) {
                    clearInterval(window.visibilityJoke.id_interval);
                    window.visibilityJoke.index = 0;
                }
                try {
                    var title = localStorage.getItem("away_title");
                    if (title) {
                        document.title = title;
                    }
                } catch (e) {}
            }

            if ("visible" === document.visibilityState) {
                rollbackTitle();
            } else {
                localStorage.setItem("away_title", document.title);
                iterateSongTitle();
                window.visibilityJoke.id_interval = setInterval(iterateSongTitle, 2000);
            }
        });
    })();
```