'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"index.html": "e3a161f2aef15e742bc5772412cf9ee4",
"/": "e3a161f2aef15e742bc5772412cf9ee4",
"assets/fonts/MaterialIcons-Regular.otf": "b79b8a81189a0d42d23f6800d2cba85f",
"assets/AssetManifest.bin": "072e056ad4492549575c9f31a2759393",
"assets/assets/logo.png": "0dd526f2e1247c50a7f2ad4c7cf051e2",
"assets/assets/meetings.jpg": "ab693245b4ff0c6098549ab9946c7285",
"assets/NOTICES": "3cd7ed4684875867e27c2bea14b22c08",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/AssetManifest.json": "3735b2cdc0ddba83f28b938c631d95df",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "929330463135930e250f5cff0f12b313",
".git/index": "f34bcbe2c2310c7d13385a0c4bcc8a23",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/COMMIT_EDITMSG": "f3fd8a6c3d4f539052d50b6d5d7a097e",
".git/logs/HEAD": "15e274c1ab8cfc61b6ead1958bc7174b",
".git/logs/refs/remotes/origin/main": "db521193980bfc81c53d40835e951ca6",
".git/logs/refs/heads/main": "15e274c1ab8cfc61b6ead1958bc7174b",
".git/refs/remotes/origin/main": "b72db0787831e9d22dba03dc9351227d",
".git/refs/heads/main": "b72db0787831e9d22dba03dc9351227d",
".git/config": "a93feb439ff6a3869a010e9e547b0931",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/objects/bf/96d3db9fd7d7ffab4087567348b315470b185b": "5300c2ceb561fd5371f907b8fd9db5dc",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1d/559e91e105ce3ebf7a63a247f738b1aa2c83dd": "cb698c6c885b87ee8ec798e295d9d646",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/d1/6e3b9e3709a3e382a125a24e090fa808dbd637": "6b6e5526bed023f1178db7a34f93bbab",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/71/32357717fdc779273b8e0abae4666052936f34": "42f2beccfad82c4cd397955d91ee9b76",
".git/objects/30/939000b1c6cfce72595ce1aa6e9d2909e39b42": "919ae0ac2364985413e5f83dafca9861",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/50/f47e583b618db486608881303b18d7b5b62fe8": "a84c2f05ffd97f2c6e45521af8a3c1b9",
".git/objects/81/986a6db896f5076bf88a180b36b0fe5bc577d3": "5b85f494ee4046764a99dd99a1c52ff9",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/e7/644eb334fef4dbfc9c46890b01efeda437afb5": "18e93681223b4b74ba0eec3aa630d061",
".git/objects/20/45659f07ba3d6859652c9904f562ac2386e0a0": "ee8660d9bf842e67f85a5f130688ce64",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/55/7bd2754dacc1565412a6b098fd9085d571d78b": "23fb6ac449765e5c2b39cd4146f841b9",
".git/objects/61/2841e38777cd435a60f4449f98ac994281a610": "392d6d40d523c4d1af9c2d58f0fa693f",
".git/objects/aa/b70c38f6b8d6f0a481e6710b427a12126290a2": "1924db3a67e8d835c63a7abc2272d85b",
".git/objects/5e/b79614e64bc27a462ee19983f50ddeb8eaed49": "4aa52311091d8031da2e0f2d252e9056",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/c0/b05163592a4ae57be30d8715c661d53f61a664": "e59fc6d1ca96f05700635ed261da9ee0",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/7e/733289f90a2a0ec801807b809a98862ebf6293": "c12a33926f50e6b25cacd365c8f8b08f",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/5b/dd38b84cb7a9c9cfa7e449ca3356dfe896f8da": "be1dcbc8fa471c2407d49f8be106a9c2",
".git/objects/7d/7db62388b99406f7acea0f0934c064c25e7b72": "cdd23fb124c3389e3da499391e46a676",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/69/2c9ed89b1dccea0823558fddf747eb12dbc57e": "033810351546daf6341fd6e449962f08",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/88/d0bbb96db2eaece90083fb6a5e88c9d8302a76": "a63cafe58b4223ebdc08237b492a8929",
".git/objects/ed/d602b1451758bcaf9355b68900e3077ae53335": "407bd5e107c175b6c91fb4618ac1c0e6",
".git/objects/4d/479f54fab1943452f0b814063f65708bb6b6e6": "ca1e2ce24d3ce375b94142c080e2b014",
"main.dart.js": "69444cfc0a1174fd301d7dc67fe45dd0",
"manifest.json": "9df28664b7a0601cebe12d19962f181c",
"version.json": "1d3df4e05046e88f633adcb18252d4c7",
"icons/Icon-512.png": "66f2d9d4d8cf2f16817f63126949bbfa",
"icons/Icon-maskable-192.png": "87bfe8de87b5567f9b947ff453e1fa2f",
"icons/Icon-192.png": "87bfe8de87b5567f9b947ff453e1fa2f",
"icons/Icon-maskable-512.png": "66f2d9d4d8cf2f16817f63126949bbfa",
"favicon.png": "94c207d12122123e688a4159ac24857b",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a"};
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
