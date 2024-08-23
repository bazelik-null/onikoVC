/*
 * Vencord, a Discord client mod
 * Copyright (c) 2024 bazelik-null
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";

export default definePlugin({
    name: "oniko",
    description: "Just Niko follows your mouse (Sprites from OneShot)",
    // Listing adryd here because this literally just evals her script
    authors: [{ name: "bazelik143", id: 1247930315603705898 }],

    start() {
        fetch("https://raw.githubusercontent.com/bazelik-null/oniko.js/7bcf70a8cc57c48a98ebf9a2fc3378692cc511a2/oniko.js")
            .then(x => x.text())
            .then(s => s.replace("./oniko.png", "https://raw.githubusercontent.com/bazelik-null/oniko.js/main/oniko.png"))
            .then(eval);
    },

    stop() {
        document.getElementById("oniko")?.remove();
    }
});
