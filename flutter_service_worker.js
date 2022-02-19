'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "90a21a8fe5173def3488387bf1ea9a9d",
".git/config": "334891acef7baa37024254306a641be8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "b31077c091e048cbbbf93d774e1bd844",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "78ebcb2a2cf92422634d6fa722adb64c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ac215b9851624519985a683cca4c4bc5",
".git/logs/refs/heads/main": "ac215b9851624519985a683cca4c4bc5",
".git/logs/refs/remotes/origin/HEAD": "ae307f8d977da887b34c7b4844ed5d08",
".git/logs/refs/remotes/origin/main": "d99ea272be0a166c1588775e1257e89c",
".git/objects/18/a56f7b5a6482f022e84e0380215d49a258b771": "cd734083d4c6455308a56ce8544e8f8b",
".git/objects/33/11969a5fdd211153ae095351244a6407af2977": "2265b071476e8af54ad00dbfe50645db",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/54/cf23572724f03d32162cab21c8980ba3762620": "1c77846332e944423f5d9f62aeca6034",
".git/objects/62/129e0c163887b543f90419ff3d3be867c11ccd": "52f934952b07ccaf1ae4b7a67b00e98d",
".git/objects/77/bbf39dd8b3850b21bde162d23bfca2e7eb1ccb": "f0f0d6a779f8ea2862ccacbd1712d710",
".git/objects/84/9985f0a690eab1d8e7f1dd65dcc6b83b4eb0f4": "14bde3a430bd95e84457ae7da55a9e02",
".git/objects/a7/22c5def525f69c5fbfba272b9ac3d122b4b5f0": "0fcfc81fbde1489ffa8208d8a8bbc593",
".git/objects/a7/40b9307ad30e41bb2574bec30f70c9cc7ac41c": "47f2679c1e2a133473a1297cf18ed18a",
".git/objects/b8/baf5d1c4010f9af8382fa9022f1644c529db06": "4df75133c27cd11a5c5df869e14707b9",
".git/objects/c6/4d0ff535d2c0d91d85db2155388124900783a2": "5d0a773b676d32b84d3aa3d69377beba",
".git/objects/d5/0af2c2d08ae67a5cbf727d8d29283b145f0f42": "c18a1ed36eef11a81227072ff605453b",
".git/objects/ea/bc29af37fd79fb455ceee841dd074efaaa12aa": "01977abc6eff5d1305e4d7869c5ae0a4",
".git/objects/fd/eb776c2577c957b685e2a61c3172d485feb4c0": "54dc09370bbcd92373935ab5eec3434d",
".git/objects/pack/pack-2cee97bde9e05c18cc215cfa3096b70c8c87503e.idx": "6ed8a98985932776a4763ea3a3a4da9d",
".git/objects/pack/pack-2cee97bde9e05c18cc215cfa3096b70c8c87503e.pack": "0edb3ec6897a2c6c06a8f9f528658903",
".git/packed-refs": "3aeea09e60a7e0130c4786e9cbd00cfc",
".git/refs/heads/main": "6c3017b38453f11f76d3b9b0f26f51ef",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "6c3017b38453f11f76d3b9b0f26f51ef",
".git/sourcetreeconfig.json": "0029069d577ea217c1d5b6c2e02f89fb",
"assets/AssetManifest.json": "b3708c00484be8d9895f895c76ad19d1",
"assets/assets/images/logo.png": "e73c204dfe6b33b355a0a02df187ab0a",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "b11e99fcb93174734ae7771cb8b24df4",
"dmw_configs/drinks.json": "da6a878cdc0c504de2b8c1d4dc2c5851",
"dmw_configs/food.json": "9e5597b0bb609398682fa02d930746eb",
"dmw_configs/liquors.json": "4973c52f9223c4b653a6d58299249715",
"dmw_configs/misc.json": "81aea766feb9e86bf4594966fb8aae90",
"dmw_configs/staff.json": "698d5c8463fea8237cee9ae996081f9f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "c20461275ef03167315143c03207fdce",
"/": "c20461275ef03167315143c03207fdce",
"main.dart.js": "b08acfe486b4b633a45534d33351bb44",
"manifest.json": "31827b624e7727b4ad2521da16dbc0cb",
"version.json": "cf0b4e9b68b938271f9bb5963594817e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
