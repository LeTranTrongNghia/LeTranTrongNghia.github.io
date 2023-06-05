'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "27184bad55e39f0f5455bef35b2c8510",
".git/config": "c0dc1e4eb3d74f8dbff36ac9245d05c1",
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
".git/index": "9f481b0b8c1b6edfe8199e24b42812ea",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "22bd96f5601ad374cdfc3a2c210ac439",
".git/logs/refs/heads/main": "098297d8a261bef42f1f07a34ccabfd0",
".git/objects/00/18f535545d5c93c727910d29fbaf4984b82599": "20d404aac5e2407dd1a288061657d43a",
".git/objects/02/842d69ee38d5b7e4ba6ed21c124ea4dafe04e7": "dbf4a59cd13dddffb50f62aecdfd70e9",
".git/objects/03/9bad9bf2ac86e82468f035602d686cd39d872d": "c05179f5fa1cd2747b415a963c454a5d",
".git/objects/1a/501b6e3f79def44ec8b9529c611c8d625c80de": "894e58ef5a528d8eb6f2151ba83b40a0",
".git/objects/1e/64eab987dca5c783c7abd6fbd03476bb2a87ba": "3432bbf79ad671f66b542ef156ebe034",
".git/objects/21/d1285c47d696bf8c1ae7e45d57ada8d132a4c8": "3e81f02e6e8946f10c0bdba568bebe97",
".git/objects/23/424ac8d93e087d8aaf8fc093177130be7c908e": "5ad28487f563f7f34e95d56bf1ba02ce",
".git/objects/25/51ee87f7b40ee5baf3cdd4de3fa708dbfebbbe": "69f3389b80f2dab32fb213e27a837056",
".git/objects/27/b6f709b9271ccb5c14cc6e8660bd196745fc38": "7eaa0fcfe4ba921bec63542c16dd6598",
".git/objects/28/6b583725be3c2525b7c06d5f9f7f6b7024b8d9": "b625c75915e4f69f5f2c069215249b5b",
".git/objects/28/914da519197fbaf544972d741b35be25cc74aa": "36f456df92d4332e00900fc4020f334a",
".git/objects/2b/d4c3b9715efb035a3baee5703a63693d746601": "9a638ed144de51c3b1a8342d2e5f6049",
".git/objects/34/b16bd0f93e550e8cbffc6f2b4c7b88986e2c91": "e57694810c586699d774232a6f1cf265",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/3b/86ba1b1786628c75f544c03f56fa2afd251fe0": "7aa4fa62a852a1569f563e201c53503a",
".git/objects/40/05246d0b7eabb9b0e119a1f81dcbe910e09554": "74f4dde9538040aacf99f242b674819a",
".git/objects/40/f1694ba4c97cdfaaa99a6459feab9a24614586": "aca2ed34561ba1ba8fc7d7674cd50113",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/41/9d00e989e09f4e2990b4e090cdfebee2b19521": "2e7910176ab8369aec4c89eadcc59876",
".git/objects/44/4932c992e7fdb838e2a41f0ff0d03b86751c3d": "7627f96cc7259586f52fbf3869cc946c",
".git/objects/4e/00c7a37a9920394327755edb5c55f4530b47aa": "ca984c9c07ba9bfd94bb2b365e7d7634",
".git/objects/56/a7a215d26db2deabccec8ea3c8bc68ab5562a1": "2236ccc5f84dcfb510f0b54ffaf61348",
".git/objects/5c/dac9ca591a2705844030915ac2b727141fa287": "85ca7297faab300642e4466cd150fa22",
".git/objects/61/d96e581158ab938c2ed2a19a1301b780818544": "fee58151c84a8e729697310db13d1388",
".git/objects/67/8fad1d191a70cb27c3e434ae1622adf25a3d10": "8ce625027cfd8fc690b70d2ad192f420",
".git/objects/6d/1ca9e5048c5278b379d90e9ea4bc84ab927b97": "1843523497d850ae3586b0298aed2855",
".git/objects/74/fce7ebedfd2c5672db4da95384e96405f8ab30": "a254dbd92c883ac02f36a9e37a114f9e",
".git/objects/76/66d304293b2185462013ef8adb60eaa2442a59": "f8111f121f4ff31d58b84024d8aef053",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7f/718f780eb47333f640466b792a2d3bce526c79": "0a19d9211b01bf23e19a19312e52d788",
".git/objects/80/0bf17b13fc4a786a38ef0df0998ef59fa51994": "80a46608482aa971b1a780f24360b4b0",
".git/objects/86/7d9ddd53a635dc65afc0639698395a08132dc2": "c4055c396d8e2536043d0d24e788eba4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/38487b21543577f9deb0271eda539e86714406": "daae08d3d579d301d609cd40f0102213",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8e/fa223ed68ab70ceb12d0e8b2d47ddae1e2fc2c": "edb2e6d6b7a99f9ea40fb4b52ebbd370",
".git/objects/92/a0699269094f68df9485f04bcb604575504b4f": "b9e38bc2443c8b8865026545044a0259",
".git/objects/99/1c8979d168007b04f944492bb3d263764319ef": "c02590c7b7e8b8eada25f6c107e7ead2",
".git/objects/9b/7c32e0e1527b3ae9e9ad37fc2d027a9d850d1c": "fb3d8474aa4ffbf42f740c39663b6ba8",
".git/objects/9e/430b89328bd4fd188c0f4e329406a6654c901e": "21d253f507d9286c47860369a77f36e6",
".git/objects/a0/7252028d73d46a6fb3503f9dc871428d4ae65a": "72e949f3d11d3ab8735679c561b2f9db",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/e0a53af0be4237b802dca1c3a49aad9f946e1b": "f0308f312e14d1b2394664435674eb90",
".git/objects/a6/5a7c46f49bfcb62f07ab947caa1a4f92f4fe4d": "8db81ef14f2c05580194572cb1f98d16",
".git/objects/a9/bc0e5bfb66f87661a0e1495983a310aab7b5ee": "85877d665722274c55b842378b2e2cb2",
".git/objects/af/be97cdd70a2b2b607ed9a57f30878bcd8b3384": "161b2f403303bc3f3c1d984ea44d6e4e",
".git/objects/b2/d9d0ae539eeaed819d1e990780faaffe6a7c64": "fa21d3d99a00a64ac4ba4256324ae217",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bb/e8b4998bc4696a7502008351604fc8743d93fa": "e7949829af110845dea7f59d011b4787",
".git/objects/bd/cc89c9be90c8c1732b4e481c1968addcff25b1": "41d3280d003d61d4f6fc79f8795e3dfb",
".git/objects/bf/559a4ac9d9749ed85da39a3ca8b0b89f1b4c31": "d470f6812b63fa8f79a46549e81d7d61",
".git/objects/ca/91879b9f00a7fad4fd6dd68a0bf38f07995cca": "a480ed05bcd70d8e84cd4d3275ff0e85",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/e694a91d036114f71a2ce905af3b10e0826406": "a24921ee844a544d6b1caa97b3272311",
".git/objects/e0/6f7a991fe8ad4b86a272f90e4ae2a2c18a5ede": "ac82b4373454dcfca3d7f4bdeb5d24d8",
".git/objects/e0/b9af8cfed48fdebf5cde0aa25180684a640507": "db23af87b5eb4d1b4237207bdc60e7bf",
".git/objects/e2/51897a2d87090650f6de6ee77d486e0798568e": "a2e79444eaab3fe0cb6a9c9e32667df1",
".git/objects/e3/234b429a8ccf5230838f65900f8ff40bc653b1": "05a34d100801866ab3e72f154b3d8135",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/8afe83f5b2ba6f7a23cf17b43e5c4d5cf592c5": "3a4926ee21b4a4d08ba76c0f6f0ba59a",
".git/objects/f3/86683aab425611c0c5fafe1f83dbdd80df23a2": "9eff4e47ffd30b86deba745cec63a4c5",
".git/objects/f7/36cfb4046dc88e01b39204fb34f727a7269207": "763c24ea83c619d376b734a79ff2b554",
".git/objects/fd/35baa2b90aff6c7c51e396941fa469bc978672": "d29a30627b43402ec51e82c07a950db1",
".git/objects/fe/9f78fa47ee605d378f0b67d8ac757cb607e9eb": "277b6b8f327472ce122a1b55f08e34f1",
".git/refs/heads/main": "f3794daf25cd568a62e39d2193351d22",
"assets/AssetManifest.bin": "dec625fc9df81c7fb539752479b7719c",
"assets/AssetManifest.json": "2d38ea8f7999390f48aef86a3664219e",
"assets/assets/fonts/CMTiempo.ttf": "3867e752d44ba093e6f0012776cc7ac6",
"assets/assets/fonts/DsignesB.ttf": "a142f60eb305c6ed0f67c940bb08dd7a",
"assets/assets/fonts/DsignesL.ttf": "4f90568281bfbd06efd9c43d437114b1",
"assets/assets/fonts/DsignesR.ttf": "665378f5718eddc6680c36a6b55fc937",
"assets/assets/fonts/TimesNewRomanB.ttf": "1d3466fec8a99ed65f32cbdfb3d5c4d0",
"assets/assets/fonts/TimesNewRomanR.ttf": "e2f6bf4ef7c6443cbb0ae33f1c1a9ccc",
"assets/assets/images/1.png": "5ac0b8a814fe3520b09ad1f489bbd9f2",
"assets/assets/images/bg_dark.jpg": "d5848dca8f1f395be37a40f43fa5a5f3",
"assets/assets/images/bg_light.jpg": "e0c1ffe7c2c28c78256c9448fa3d4752",
"assets/assets/images/io.png": "d04e80277144d0c07a11f5d128975a55",
"assets/assets/images/main1.jpg": "671542874c765e2b0c875a85629a0da7",
"assets/assets/images/main1_dark.jpg": "b5d2a14effd6a8f1cdb5042eae1bdaa8",
"assets/assets/images/main2.png": "cae63d5b7df2f7a11a2887b9cb1150b8",
"assets/assets/images/ms.jpg": "5df5c4db2fbb4c603d45649f6cb3af4c",
"assets/assets/images/Picture1.jpg": "be6972e062aa23db279e91fb953ad70c",
"assets/assets/images/Picture2.jpg": "dde44b4a0ed212bb3568c00b173978a7",
"assets/assets/images/Picture3.jpeg": "9c6b4cc45df41a202a73e59012caca5f",
"assets/assets/images/Picture4.jpeg": "6463ab6bd013ce52761af3d589ad8a21",
"assets/assets/images/Picture5.png": "62f0524b9e331b6f1294707cd6ca9aad",
"assets/assets/images/Picture6.png": "670c824ad9328eb466c3997c7d2b8003",
"assets/assets/images/Picture7.jpeg": "d1a75ab9f4a6d71b48f7f28bb8f01547",
"assets/FontManifest.json": "6f9fd36b76a9b8f388aabecefe89e6ac",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "1dbe3a333f287e57faecd0e3643b1e37",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/iconsax/lib/assets/fonts/iconsax.ttf": "071d77779414a409552e0584dcbfd03d",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "45bec3a754fba62b2d8f23c38895f029",
"canvaskit/canvaskit.wasm": "e5b1f72690096075e25fe1f481cb6ce6",
"canvaskit/chromium/canvaskit.js": "6bdd0526762a124b0745c05281c8a53e",
"canvaskit/chromium/canvaskit.wasm": "347841c04107bb5a17164bee251d8307",
"canvaskit/skwasm.js": "831c0eebc8462d12790b0fadf3ab6a8a",
"canvaskit/skwasm.wasm": "2cb965595f656f0c58ad6bb5988f8280",
"canvaskit/skwasm.worker.js": "7ec8c65402d6cd2a341a5d66aa3d021f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f8a2b6e95f253454b3d73a8725620991",
"/": "f8a2b6e95f253454b3d73a8725620991",
"main.dart.js": "4a8a92586b82834579d45402dda4c218",
"manifest.json": "aee7c4007fda52a6824c76eec5a84487",
"version.json": "cc132570d6d238130e38adc59e1f998d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
