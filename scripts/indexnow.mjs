// Notifica a Bing, Yandex, Seznam ecc. (protocollo IndexNow) tutte le URL della sitemap.
// Uso: npm run indexnow   (da lanciare dopo ogni deploy con contenuti nuovi)
const HOST = "relaisdelsol.it";
const KEY = "fccc18a342a0d080c8be1c484c9cb8a9";

const sitemap = await fetch(`https://${HOST}/sitemap.xml`).then((r) => r.text());
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
});

console.log(`IndexNow: ${urlList.length} URL inviate → HTTP ${response.status}`);
if (!response.ok && response.status !== 202) process.exitCode = 1;
