/*
 * Vencord, a Discord client mod
 * Copyright (c) 2024 bazelik-null
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";

export default definePlugin({
    name: "oNiko",
    description: "Just Niko follows your mouse (Sprites from OneShot)",
    // Listing adryd here because this literally just evals her script
    authors: [{ name: "bazelik143", id: 1247930315603705898 }],

    start() {
        fetch("https://raw.githubusercontent.com/bazelik-null/oniko.js/9d7d43fc528117e3722699130cab18521f2c7f3c/oniko.js")
            .then(x => x.text())
            .then(s => s.replace("./oniko.png", "https://raw.githubusercontent.com/bazelik-null/oniko.js/main/oniko.png"))
            .then(eval);
    },

    stop() {
        document.getElementById("oniko")?.remove();
    }
});
