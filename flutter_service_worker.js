'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "e6d4cc4c4ede5e4950328e5fdae778e6",
".git/config": "334891acef7baa37024254306a641be8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "45ad7fd4e3fac46d08629c2bb5949ada",
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
".git/index": "73beee9b0d961bc6b4158231f39b9e91",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a4af0f2830d07ecb2266a0c972ade594",
".git/logs/refs/heads/main": "774ca34ed406c275c774448f9275e450",
".git/logs/refs/remotes/origin/main": "7661b0790b0f6bac05001a24c005c28a",
".git/objects/00/309a13a6500df408702d6e90e3c276d9351448": "afbe9abfec9d1e35fb7eef6139a360b6",
".git/objects/04/f463ad205152c30dc07b26c34f303dfa6d0aaa": "49827d0da55cdd549dbf1e9e19181f5e",
".git/objects/05/737b2cfe355ce6486088ae89744f66783d4e17": "a96771bd446ccd0e9638539a7160a7fd",
".git/objects/0a/982f66821fdc025001c6ce97cf5d33538dad82": "9ab8fe226dbb8b15f582ec5dda555dce",
".git/objects/0b/85039f459f6720ab991ee50acbeb9faa4a3fe9": "25b1f875ce972af50c5f89f17b0b2f28",
".git/objects/0b/9eadaa9c489dbb6130535481036b2313badbc8": "0e7d63b8700ae5c0af690ea37f81341d",
".git/objects/0d/57f936c8bea0d4f7703f2258d8d32c4f1c26ae": "4c7681755ccd78908f87dabe4ffe087f",
".git/objects/14/f8a9e2bca37ad8988073252689b3094d611568": "e9fac990c4988d715f74f6ab20e2f1de",
".git/objects/1b/d21e179ee31430e04a094c5b2f7190128d739f": "05540cac5fb6a936bafb9fb2e49364e3",
".git/objects/1d/9c6ee0c66d786a8ce761f5711441db600ca5a9": "51a8aafa2a6c4017b7233dcfec7ef055",
".git/objects/1e/dd4994a03602d95fa7bbf929877dbed6a6d058": "74eeb278a2f5e67111e95f6a7188fee5",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/25/91e1b1feb6ffb1612525832ee02a714e32b8a7": "d988f3e90f2a67ab71fbd54e22c3a4a2",
".git/objects/2d/583c7dc55bc37f8d5298b0cd48c1e108adef52": "5b7df31ccc8494f4da0573cd4b1777bb",
".git/objects/2d/9ca35f5b65a91336d03982872b6f316b33ee39": "016d87c73f5fc465e9912344ca4dffbb",
".git/objects/31/b16259bf141a0641e5bd58d7eb406f9d58f4f9": "16ba43e8078b86a1f3969484378db08d",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/34/55e678360e6dea4770199a878e31bcdbd8b3f2": "cd583271e641230fc9f637111ddd0394",
".git/objects/36/699394eb3efd893f15333678f2e4e32e379240": "0118d7fb1553d4485dbc16b4c81f351c",
".git/objects/37/6bf8d013509a651e3281ab51c6cdc79ebf6d3b": "dc413af609d5d176c961d7e071cd2bc5",
".git/objects/37/eecce7010fe62b00ff7d0c3f782609d90795d9": "57e66c18bbbc93e30a7ad2bea1faf4d7",
".git/objects/42/544eaaa672d5912beb9b1951d1e6e19e18c10b": "ea874ac99e28de56120d7155a0b22d82",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/986e6f3379a0f4cbba6b264d8c4315de7da6dc": "96929d7fcb4d63ca01c72724b1bbe167",
".git/objects/50/0e2794d9f1bb782464b441c9a28069a01aa879": "59426e781c253d6321defd028d3bbe8c",
".git/objects/51/02644133678ec58f789d72901828aa54037496": "e5829c961eeb9a0885558efbfdd905c4",
".git/objects/51/3b13f618ccba12e988b407ac9a09613cdc2090": "32a80c198b50a0ceaf647af62acfcc20",
".git/objects/53/e9635cf6b7b15e5970560bcd7de381b2734d8c": "96cbc0a80a7a531237bf076b1d2d59fb",
".git/objects/54/8d051c32a99c98edb5fecf29beede3de4cbf0d": "17faaae7bfcfcac28509a29b52610e14",
".git/objects/55/b749523699bb2c0c49023f93d2767a6e9183d8": "73670b1c88e90dcb26cb001eec20a7b5",
".git/objects/5e/35e65b7fd650df01ad1de21e4f13f1e10aa0fd": "578adb7e42efb86aa134b9d87d201d8d",
".git/objects/62/8fe819101b7834f30881091a2cef886b7db9a0": "b57c3ed04fbb8a7c4723caf3677421e4",
".git/objects/66/0cb7365dacbc438eb671f800ac2ecd521b7281": "6e78f7df49b83ed8f92e1cc457017f97",
".git/objects/66/ae6f75efdabd985f611e0d96d1e723f4774a90": "189bd8da2171d1456562f354596a713f",
".git/objects/6b/d9a63e5a834d23e554cd5a5b06f8aaf934db00": "710b6c151c49b8bd382cc9dee96bb75f",
".git/objects/6d/6c4ca4599da82585fb076d2817410ae8c13c18": "072f9dbd43cb01d9064700988cc0afd2",
".git/objects/6e/12d9875e91d355e0d19679f6f84048cb74167d": "1b151c100160a6ae3531680b59136ffb",
".git/objects/72/4d2e65f9dcf4224c51953957c8c7153cc61316": "b3c8891e7715cf6a82c222692a4b5d49",
".git/objects/75/a640ace9dfdb7fa534756c7415d37789cef412": "a18e07d845055d3b4d84ca9d23c58744",
".git/objects/78/c2f1ad09f3ea573f4b6ccc05c408a12dd38865": "15a314fd43c6322df000768dea72fb91",
".git/objects/79/6f5636d58f8c54262a783de9ee038f4abfefa4": "be1bc0883b764ec38c6e2a956ca082d9",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/4673bcafcb5f166a8d6d4b08ff07c4ff0ce235": "f51471f055b1ec820dedaa1f3d86b9c6",
".git/objects/7a/7cd37b4540d0bb662ac4a1286f26dd05fd987b": "efb7cc9e37b0fb902f020d16b1ceeef1",
".git/objects/83/5a33b7af0be8a6a692389f34ee381f0fa68e82": "6199d9e679c29ccc79e730bbfe187802",
".git/objects/84/5314a56a4331366e445c174314f7ffe970c9a4": "3d19ddaa2fa6422f7b6d15700a4ff7f5",
".git/objects/85/e72c980162c543cb4d8964ce7e4f04c9a2c232": "d74cdfb60713be3c0304e485ba13161e",
".git/objects/88/70da6f90a3e110e8286c7f1474b7bd0cfaef0a": "790359962683b8bb45259bca881970f0",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/36c46e77638a69ebc5aee3bd85e81087e2e83c": "a03e7ca2d179d68cffe4578c61d1088c",
".git/objects/93/29be506b2ac73d3652266c3e3f93fb36b18600": "3da16e3d8802fca930f64bc41021c151",
".git/objects/99/c3a506d09be82cdd4d0771cf1cf850c8a5a72a": "1222e6cfcc36aa53e52106f0e8c0ac84",
".git/objects/9a/5283756799f81ccd112043db1174cf4cc8e9f2": "28014e10e802ddd5045f3ce80bb75ba9",
".git/objects/9d/433505413a7b9e2e48515e0c5deafaf3278738": "f720dbcd73c0b14b81f8cfbe6e9e2d37",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/1159b50a29fa169c0ea2138c276ebcef2e4380": "bba62fbad4b13033e6e81c56d5ca3d15",
".git/objects/a4/07117432f116b305846c2f9ba901952205cc8e": "bf227a0d1a34d8453bcd2f08057d8e07",
".git/objects/a6/40504de9900eadf50edefabb410acb14157110": "bd71662ceb126485456a7cefce1f7c9e",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/5b65879be8500d5459ddbe04eb8c2a76a5b8f7": "97bda2aa7c68518421dfdb2506807e7f",
".git/objects/a9/764eb5032429c5bea8f6d66203bd237e0d05ee": "31985831c963564d796cb58ec020caff",
".git/objects/a9/f422e89cfa6b73a403ef6e8de7c4425c47c945": "9be52aa19cca379f8cd6ac73c3828aad",
".git/objects/ad/d64a0e997392fcb9a9f8f4b159a1ec714e9edd": "d3781ef28f3d44c8401a35d8b9f9a935",
".git/objects/ae/7a66663bd3e20812dc3e2ec21646b82b0491c0": "10f405958d0bf6a648154e3fe4b23481",
".git/objects/ae/b1961c43d998f5eba4d0c780533238206a427e": "eaf6e7a47c9a8f13e9868fcd2dc806ef",
".git/objects/af/3daef780c4827429655bd637a01ef10e93d279": "90cf107a0b153b21579609831ef4195f",
".git/objects/b4/767e9a9782ef846346face75bb3dacf4a390ec": "c64db0247c24e3483c98c784549258ac",
".git/objects/b6/53f809420dd82ef8354c0604df06e6f2b7b501": "d7ef757fe8396cdc424c838e3131f0df",
".git/objects/b6/b81563c6dc47fca7d5bfcd66855b6379a45167": "2c1b8e6cfbaeb6471623b700d6a28c94",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bf/9b1c1d50e8cb4391fbf54c71aa9a31e0a0d06d": "3bff2c0e4a8f14a08ae5c2cbb02b1e51",
".git/objects/c5/199f7ea8cbfd8f183ec27a6d3c1249fbfb17de": "b40e59e51ccc8407a80da8f270671b96",
".git/objects/d6/945bb9fb80f7555526b866ecd9a7a8e0bee75e": "b43ea68d090ca0630c088da3d7674d77",
".git/objects/d7/e17a00557e9cfdbe7c6af11ecefc1916089a9a": "1bc5f18478cfee6ae904bfc10c6c8fd1",
".git/objects/d8/b4e4351649578d1d26de55e10741385a16f703": "29f97dee88910e0b07bacf595a8f3d65",
".git/objects/e3/f33c10935ca060e22aaf543dca698594264e6d": "a719186ac936dd52ab3b09a9c56146e9",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/f3d67fd3daff984576623e2f629315ac9f7f53": "4c7b50329c4721034a9646172cd047bb",
".git/objects/ea/a8fc6ce8df58ca06c3b5120a9240c0218be3f7": "8eb72b7dc2a11c22f3e86a38e2c2dde4",
".git/objects/ed/8becfdfafece9c2f4324eea53f0cd916e28051": "3a3fed21e7813e904c814357c28f9855",
".git/objects/f0/a4b35465e1c06c7472a66f69d1e218ab3921dc": "56a5d3056b37618dae3cf34a654d1980",
".git/objects/f1/58339c49f252144b0e665ab8aed9b52b99dca3": "fba69544fe09d78646ccfa6606e51ef6",
".git/objects/f3/048fdde3a7c6dddb0d62cf4237e4881067e10c": "85faec3bc703b7a70cd7f65fc1540c47",
".git/objects/fc/1ddde366dc0f21cebf9728c374d997c54c23bb": "fbcf1cd34eadef58605a39d6574a6de1",
".git/objects/fc/60a69f0c645de90677c98411de78c71f458d44": "9bb17f7f7a3dc10e53c084da687f638a",
".git/objects/fd/c5444e82a911aab86d755412a842410f79bc01": "4faa32d0ed4303fe8007aaecdbeb2101",
".git/objects/fe/f81a621c2a19d7af67babc04ef49e508ac79c6": "86607f0711d050f45637797a887b1b15",
".git/objects/ff/388bc13e01986635db2d16b0347f5c8efd372e": "f6b8face673e18b295ff1053ae83cd0d",
".git/ORIG_HEAD": "613730ccfb21b72a2768d1603c73c795",
".git/refs/heads/main": "7fe77288b0ab798fbf459533edc654cb",
".git/refs/remotes/origin/main": "7fe77288b0ab798fbf459533edc654cb",
"assets/AssetManifest.json": "87d3141f080f32e68134b9255af9d44a",
"assets/assets/test.json": "028c83345b2e9196eb8b25fe62af7e15",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "4520726a9eb8f34641cced47e4637a45",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/rflutter_alert/assets/images/2.0x/close.png": "abaa692ee4fa94f76ad099a7a437bd4f",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_error.png": "2da9704815c606109493d8af19999a65",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_info.png": "612ea65413e042e3df408a8548cefe71",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_success.png": "7d6abdd1b85e78df76b2837996749a43",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_warning.png": "e4606e6910d7c48132912eb818e3a55f",
"assets/packages/rflutter_alert/assets/images/3.0x/close.png": "98d2de9ca72dc92b1c9a2835a7464a8c",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_error.png": "15ca57e31f94cadd75d8e2b2098239bd",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_info.png": "e68e8527c1eb78949351a6582469fe55",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_success.png": "1c04416085cc343b99d1544a723c7e62",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_warning.png": "e5f369189faa13e7586459afbe4ffab9",
"assets/packages/rflutter_alert/assets/images/close.png": "13c168d8841fcaba94ee91e8adc3617f",
"assets/packages/rflutter_alert/assets/images/icon_error.png": "f2b71a724964b51ac26239413e73f787",
"assets/packages/rflutter_alert/assets/images/icon_info.png": "3f71f68cae4d420cecbf996f37b0763c",
"assets/packages/rflutter_alert/assets/images/icon_success.png": "8bb472ce3c765f567aa3f28915c1a8f4",
"assets/packages/rflutter_alert/assets/images/icon_warning.png": "ccfc1396d29de3ac730da38a8ab20098",
"dmw_configs/drinks.json": "eb8a79439cb86a79d33b6f4ece2d087d",
"dmw_configs/food.json": "4059c2dd08f272512fbec40b5f69a397",
"dmw_configs/liquors.json": "2166d76abc32161e0254009fb1b073bb",
"dmw_configs/misc.json": "4bee12cd07793bd5c7957b26a468f553",
"dmw_configs/staff.json": "90c132f4ddbb0d16fc24f1d82a6d1f3b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "45080eea117e2ac4196e72b17b786052",
"/": "45080eea117e2ac4196e72b17b786052",
"main.dart.js": "be42956c747e6c4ae221aaf4b126f54b",
"manifest.json": "31827b624e7727b4ad2521da16dbc0cb",
"version.json": "499fc045ea39011efe8a9f0ce8342b29"
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
