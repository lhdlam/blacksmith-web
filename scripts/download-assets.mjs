// Downloads every image asset used by the lgp-blacksmith.com homepage into public/.
import fs from "node:fs/promises";
import path from "node:path";

const U = "https://lgp-blacksmith.com/wp-content/uploads";
const assets = {
  "images/logo.png": `${U}/2021/04/blacksmith-new-logo.png`,
  "images/footer-logo.png": `${U}/2021/07/fotter-logo.png`,
  "images/see-all-arrow.svg": `${U}/2021/07/SEE-ALL-vn2-arrow-.svg`,
  "images/hero-1.png": `${U}/2021/06/Blacksmith-Design-1-.png`,
  "images/hero-2.jpg": `${U}/2021/06/Main-Header-image-2-Blacksmith-and-Design-Vietnam-.jpg`,
  "images/hero-3.jpg": `${U}/2021/06/Main-Header-image-3-Blacksmith-and-Design-Vietnam-.jpg`,
  "images/overlay-1.png": `${U}/2021/06/Background-Overlay-1-Blacksmith-and-Design-.png`,
  "images/overlay-2.png": `${U}/2021/06/Background-Overlay-2-Blacksmith-and-Design-.png`,
  "images/overlay-4.png": `${U}/2021/06/Background-Overlay-4-Blacksmith-and-Design-.png`,
  "images/sebastien-sicot.jpg": `${U}/2021/06/Blacksmith-and-Design-Sebastien-Sicot-1.jpg`,
  "images/contact-bg.png": `${U}/2021/06/Groupe-42-1.png`,
  "images/projects/tropic-1.png": `${U}/2021/06/Tropic-Garden-Penthouse-1-.png`,
  "images/projects/tropic-2.png": `${U}/2021/06/Tropic-Garden-Penthouse-2-.png`,
  "images/projects/villa-1.png": `${U}/2021/06/Villa-Mr-Cuong-1-.png`,
  "images/projects/villa-2.png": `${U}/2021/06/Villa-Mr-Cuong-2-.png`,
  "images/projects/penthouse-d3-1.png": `${U}/2021/06/Penthouse-District-3-1-.png`,
  "images/projects/penthouse-d3-2.png": `${U}/2021/06/Penthouse-District-3-2-.png`,
  "seo/favicon-32.png": `${U}/2021/06/cropped-Blacksmith-and-Design-Vietnam-HCMC-Favicon--32x32.png`,
  "seo/favicon-192.png": `${U}/2021/06/cropped-Blacksmith-and-Design-Vietnam-HCMC-Favicon--192x192.png`,
  "seo/apple-touch-icon.png": `${U}/2021/06/cropped-Blacksmith-and-Design-Vietnam-HCMC-Favicon--180x180.png`,
};
for (const n of [12, 11, 10, 8, 7, 6, 5, 1]) assets[`images/gallery/grand-forge-${n}.jpg`] = `${U}/2021/06/Grand-Forge-${n}-.jpg`;
for (const n of [15, 14, 3, 17, 13, 11]) assets[`images/gallery/eurokorten-${n}.jpg`] = `${U}/2021/06/Eurokorten-${n}-.jpg`;
for (const n of ["mekong", "phutai", "rochdale", "unique", "ashley", "galaxy"]) assets[`images/partners/${n}.jpg`] = `${U}/2024/10/${n}200.jpg`;

const entries = Object.entries(assets);
let ok = 0;
for (let i = 0; i < entries.length; i += 4) {
  await Promise.all(entries.slice(i, i + 4).map(async ([dest, url]) => {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`${res.status}`);
      const file = path.join("public", dest);
      await fs.mkdir(path.dirname(file), { recursive: true });
      await fs.writeFile(file, Buffer.from(await res.arrayBuffer()));
      ok++;
    } catch (e) {
      console.error(`FAIL ${url}: ${e.message}`);
    }
  }));
}
console.log(`${ok}/${entries.length} downloaded`);
