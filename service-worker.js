/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "efcba376b4757cbb566d8d199fdb1734"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.9f643fd7.css",
    "revision": "e8b2e4a47e5725d48ddfd2cd11208f09"
  },
  {
    "url": "assets/img/1.5d8ef1c2.png",
    "revision": "5d8ef1c2409b945eb67a5ebf08f5c380"
  },
  {
    "url": "assets/img/2.c7da0389.png",
    "revision": "c7da038937e7bf3502929f7490bce973"
  },
  {
    "url": "assets/img/3.fffac689.jpeg",
    "revision": "fffac689045fdd44d4ec87d77e30d356"
  },
  {
    "url": "assets/img/4.72b9545e.png",
    "revision": "72b9545ef0b6df1f3be232474fb4de02"
  },
  {
    "url": "assets/img/5.d8167bd1.jpg",
    "revision": "d8167bd17662a89f5715e931ec2f90bc"
  },
  {
    "url": "assets/img/6.d93a5335.jpeg",
    "revision": "d93a533534ec0300810db49d03917334"
  },
  {
    "url": "assets/img/7.8b5e636c.png",
    "revision": "8b5e636cf9b81ffbddbfa911d1b39ab2"
  },
  {
    "url": "assets/img/8.8442e556.png",
    "revision": "8442e5569f619996c365516cb52eb5a6"
  },
  {
    "url": "assets/img/eer4.b038da56.png",
    "revision": "b038da563a8644012e76252dd5e86642"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.35d89b73.js",
    "revision": "0f40f6c197dd3d5e3f2618dc66746103"
  },
  {
    "url": "assets/js/11.cec2ed9f.js",
    "revision": "84b987c051a2f5be2207e7f758438054"
  },
  {
    "url": "assets/js/12.9a82e5ab.js",
    "revision": "669b3599ad6274169364ffc97b28fbb6"
  },
  {
    "url": "assets/js/13.0477e013.js",
    "revision": "3ce81a308b8633c62302dc11b37ae997"
  },
  {
    "url": "assets/js/14.36796f7d.js",
    "revision": "50df2bba4e7f9272ff6d717f924b6732"
  },
  {
    "url": "assets/js/15.73d7025e.js",
    "revision": "fcb55ba3e1e5ffffa4416a288436253d"
  },
  {
    "url": "assets/js/16.9a369fb1.js",
    "revision": "2e8ffc63aca523f6cd975e6b8ab2ff1a"
  },
  {
    "url": "assets/js/17.1e165722.js",
    "revision": "a429b207099741a23c8bef5e61b5c7cd"
  },
  {
    "url": "assets/js/18.2002ca3b.js",
    "revision": "6af711dd7b6113961f64b141e3d6c4b6"
  },
  {
    "url": "assets/js/19.4093fdcc.js",
    "revision": "db2f55a2c86aedafc1d12cae514734bf"
  },
  {
    "url": "assets/js/2.9b3c6fbb.js",
    "revision": "5cac3ec89f678e7e610423d7801dbae5"
  },
  {
    "url": "assets/js/20.83a5a2ef.js",
    "revision": "d6fc44a5a5dfdd114537ca858055fa80"
  },
  {
    "url": "assets/js/21.21a945b0.js",
    "revision": "443b8cd9021e047a2a73aca67ada48a8"
  },
  {
    "url": "assets/js/22.9b42c7e9.js",
    "revision": "607e2f3590d0fce96dd0a9d117c9ebee"
  },
  {
    "url": "assets/js/23.6c925699.js",
    "revision": "5cf5e4c19b86f5369240037812847e79"
  },
  {
    "url": "assets/js/24.ef87be9e.js",
    "revision": "fb088514255aa5931ac169cf501b6475"
  },
  {
    "url": "assets/js/26.3c108c65.js",
    "revision": "14070395307afbb22387ff5bad8d960c"
  },
  {
    "url": "assets/js/3.d9c963b9.js",
    "revision": "5ff179bb830e74702b8b18632bdca24d"
  },
  {
    "url": "assets/js/4.4ded2ed6.js",
    "revision": "e82d2d7c0cbf65eceb164c2b4d9f1db9"
  },
  {
    "url": "assets/js/5.5b3d6de5.js",
    "revision": "f49f22a787f321c3bd331e51f87e9584"
  },
  {
    "url": "assets/js/6.cb1ca25b.js",
    "revision": "fa5e8c6dd8fcfb1e81a1277f88437590"
  },
  {
    "url": "assets/js/7.eb73e1ac.js",
    "revision": "5b4888d3d6bfcdf50f41d84f97b97416"
  },
  {
    "url": "assets/js/8.f7398b0c.js",
    "revision": "b6a14a3bc9caded74fad7965e01d9116"
  },
  {
    "url": "assets/js/9.6a0c4c57.js",
    "revision": "0451ff4db2380cc8e2e1dc8fb14be457"
  },
  {
    "url": "assets/js/app.8e8ad9a8.js",
    "revision": "aad06b6001e9450a13bd782f3a45ae2a"
  },
  {
    "url": "conclusion/index.html",
    "revision": "59e34b32fde6c66abadd78621a0bacb4"
  },
  {
    "url": "design/index.html",
    "revision": "179cf7cb02140dda7ab89f832fae962b"
  },
  {
    "url": "index.html",
    "revision": "2ea7c3f10e9c999fb6fc20e058a19d15"
  },
  {
    "url": "intro/index.html",
    "revision": "f6b69deb74274b67ea6c9113c6b68fd7"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "8a4b4f4dd54e47b71cfb60c249e8634d"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "620cc596b93a630e420cf918c51bec67"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "4bf680706138005f6acdb892cd24c6b3"
  },
  {
    "url": "software/index.html",
    "revision": "85d047ab4b20b384cb525865ddd28948"
  },
  {
    "url": "test/index.html",
    "revision": "05ae1f6513857fb5beecdd76f362ed05"
  },
  {
    "url": "use cases/index.html",
    "revision": "496b864341582992f68019254b01d8d6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
