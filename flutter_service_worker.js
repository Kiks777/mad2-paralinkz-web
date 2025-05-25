'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "16ec07ff1a7451275f7286035ba8c84d",
".git/config": "65b4f3196ac57d4fad13975c9ed517d4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "bd6a105068323d0b019ca22493fb64ae",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b14a5c9834194c5745fdcc05ee6c97d4",
".git/logs/refs/heads/main": "51494ea047033542030b9e48ad0b0beb",
".git/logs/refs/remotes/origin/main": "08fd4db43c1b66eb154a91ca744c3a1c",
".git/objects/00/03ffbb4465b37264f65dd5e9a11cf3d46a6cf0": "527bbc828aacf80ad70b7847e2cb38ea",
".git/objects/04/a082df821c8aae0fb15a368f7526203fa4e847": "8b9d004c175c655c7dd90ff651bedc85",
".git/objects/04/ecd61645c5a71df2bceac2f84e5bbef45548b1": "0457e10f9edcb7010144545e3b6caca2",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/1a/a0da5af3f316b07a8972c12281d246288e7f60": "7f1f509cf69fa85a3cae95e17599c8af",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/38/5882a0626e72bd044e4ca5fc44ad70a5c79f55": "69d00bc22203c7e94f57ebf85b51cb1f",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/bf2a21673aa7a0dc58b24b9f6b24f0e9fb198b": "10bde9d5160b9289db91e5ecf0811716",
".git/objects/48/745ab7b27142b48e59b18ac50dd3d841c1a0b6": "8d904d1675e49045f492dc227df6c71a",
".git/objects/49/2b668201015a9f63f7535fe740d8645c4a2b89": "eb2db5f3af09bf806efdaa50c1eecc99",
".git/objects/54/bc023c3f44bf9bc17a9dc3c63e93d1a7c73e8d": "cb950425d59766dbf07112b6a0c2e7f1",
".git/objects/55/dc5af53d9e46c4b54bccc904cb22c2b96159d5": "1ad224655749eae7ef911eeabde4d2da",
".git/objects/56/c0f0791398d7daee067caeb3ad076be2fa0b43": "e5d90a3ad0fcd2390bec2f407b926382",
".git/objects/58/eb9e9995262967420a6df534f233ebc223fdc2": "c8bb5f1c8cc9ebaf8c85cfaf4e019fd4",
".git/objects/5c/f74faffd58291977f54cb07b3a47d9a6b5bb18": "b70c27a236144054c73a295394babaf1",
".git/objects/5e/aa10546fa79bb03e26739676ae017f776b19d6": "530e6b7054ec08590967f88187e33ac8",
".git/objects/65/7d45002d1b1658dbc5755c5887ad8b125446a8": "f87a5cf1239154f5e05fd4b711a8e010",
".git/objects/68/6a77719cf9b7e924cfebb9fd7bced8811a4be0": "8a3e03bde5bd463c83dad2c72d91b9da",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/70/3f5998830cf6b25a89b312c84035bb7c941a49": "9162e3b6b5fa5d636a3b3d3313b047a7",
".git/objects/70/facedb6b39f14aba6e786cfb875f4314e59e1c": "d42224811cbc057156e4a4154da1f450",
".git/objects/7b/903159b0c47a6c56d9d23773fd2c7510282ebd": "e9bb5459d925f550c769634a3abe1765",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/8d/60a1fe7e16809be7215456db24400fb189ffeb": "70878a55d6cb65852ad80c4b19ce01f8",
".git/objects/8f/d43a37fa99bd2ea9b9cb0bd45a5e934d6d2995": "e89a02fcc9d93123405d5a87cd2287f9",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/a5/87b81231aa8b32d428ac0416eeb0b6a008640f": "1f7973ec18acf91e88cb92b7bb9fe839",
".git/objects/ac/7a9d8b695de7c7fdd5d5fa6dbc8c0fadfcce8a": "80af4089cb12464ed04638d8ffbcf72f",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c0/8c87792d7a68ffd71898fa598b9b983f7e7ef9": "f455d63cfccab304798020f3d589d259",
".git/objects/c1/3d2756c3137d7ca86960cdb7026e2083da42ed": "8560b8aea42ae47f0a0f225edff7eea9",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/ce/aa6381478b4158f1c917c4df6ffe374355ab74": "ce2479f67df51bc62dd58676d658780b",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/da/6a8fed10fee8b95b13bbe47ab3728cfd352e5f": "6b934d3abfa8130ca993e6572eede2ca",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/db/c939c8036dc155acad3c998048e7b23a95c7bb": "783792864a9410a1a93564fd95c55950",
".git/objects/dd/f11bffe4e9244826a6cb3bbabb7ad1da557cec": "1f6a10e3f4b39d93fa51d1e602cc5031",
".git/objects/e0/9dc06b6e82879e58146ef66bff2cd29971e4c9": "f46739ce417e3f388d9a3efbcb5c7cae",
".git/objects/e4/be05215d3361bbae5bd35f57659ff5ddf5f33a": "0b51651798772f19cd5df7783a4ed409",
".git/objects/e7/020d2452d442535f655b99fc7fa66a00c4c18f": "554b5659ba9a3ee36fc83ad6297c6d54",
".git/objects/ea/130a6762cb1f156a27d60d392c23461d28a134": "69b29ac6b23af59c130fc505cb57d8e4",
".git/objects/ea/e197846e2ea52931110c141db7e02b5e46ff98": "e80c90271fd8e61479b60e893ef90d4d",
".git/objects/f0/4e997d696b992c3f03a2a5cefd6ce7093f0bd3": "54c9d009d46ae464df35fe7e594ec320",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fa/f74dafb2992a6e295244fc137a920674831c61": "15a052c3530b031a1bd0d056aafe37a5",
".git/refs/heads/main": "f04d0757d958d9b799b61254ddf9f1f5",
".git/refs/remotes/origin/main": "f04d0757d958d9b799b61254ddf9f1f5",
"assets/AssetManifest.bin": "760405d30978e9d7ecf9f941b5ccf209",
"assets/AssetManifest.bin.json": "b5eb592aa00989092c177e4fb8082a31",
"assets/AssetManifest.json": "54fca7a5af70c93b1f6702060cf5d88c",
"assets/assets/big_logo.png": "4d253f200dca118d2ed8dc729f48370c",
"assets/assets/big_logo.svg": "bf7639a30431570f7fd05886d0eba899",
"assets/assets/confirm_password.svg": "af6c55c60c8ba11bd088302e1f59100d",
"assets/assets/email.png": "2bb9c0f0c9f2eb39e31291832d2b981b",
"assets/assets/google_icon.svg": "0fde05d867b97c6e68d7186058474a79",
"assets/assets/google_logo.png": "1d94cfe2ce6b5f05f74684ac04af8467",
"assets/assets/logo.png": "a3fe4635030caf53a3125146cc8b1b7e",
"assets/assets/logo.svg": "21b4e576bfc6aa7ef60876a05b5f9732",
"assets/assets/paralinkz_logo.png": "d5598588257bb55f82576197a97c356a",
"assets/assets/password.svg": "7d482186a97646fc9927bffa3a2aeb45",
"assets/assets/person.svg": "80b7ca22eef5d47deeb536d578021756",
"assets/assets/program.svg": "8047d71882b297591c7e6004d95ac59e",
"assets/assets/p_logo.png": "ed6e8c441eb9a8807478d46a514452bc",
"assets/assets/year_level.svg": "ec906218b0673ccf2edbf2b300b62bb7",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0ee696c70c528118b970f0d7feb9b346",
"assets/NOTICES": "6b7385c4d2352e62410d6b68585a1089",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "a2d16c1c1bc61e5c0a197c467b4f6768",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "d6fc8726c7a95bb48cbc630588ffd854",
"icons/Icon-192.png": "84603d3278056ca356cebe741a09a24e",
"icons/Icon-512.png": "f4b162bdc212a2009092f5c6b0e2bfd9",
"icons/Icon-maskable-192.png": "84603d3278056ca356cebe741a09a24e",
"icons/Icon-maskable-512.png": "f4b162bdc212a2009092f5c6b0e2bfd9",
"index.html": "b1b45848cc6909a44cee90ea9546cdca",
"/": "b1b45848cc6909a44cee90ea9546cdca",
"main.dart.js": "8c539f69a731d198f366ecd449079f4c",
"manifest.json": "87831ee54ed2e5bda8b2cda35f4c18c2",
"version.json": "da432a70db3422fadab4147efedcf5d5"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
