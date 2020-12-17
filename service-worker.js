/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["D:/Desktop/My blog/upupoo/public/404.html","098176d115a61322bcf17d1dc5438546"],["D:/Desktop/My blog/upupoo/public/Gallery/index.html","b5e4fe04f7adf67a59abdd0d93d55696"],["D:/Desktop/My blog/upupoo/public/Movie/index.html","fb0904250544e26e2c3217663331334d"],["D:/Desktop/My blog/upupoo/public/Music/index.html","742eed7585d9a4ff010c4faf92b12809"],["D:/Desktop/My blog/upupoo/public/about/index.html","bd7c2860a223d0cb0d3325d44afbea1b"],["D:/Desktop/My blog/upupoo/public/archives/2020/01/index.html","758bd5f98007c21117742714254df6dc"],["D:/Desktop/My blog/upupoo/public/archives/2020/02/index.html","92af90c1e0c52f20b886c5afa7b59db5"],["D:/Desktop/My blog/upupoo/public/archives/2020/03/index.html","893df40089fe2ca0fd1492332a3db51c"],["D:/Desktop/My blog/upupoo/public/archives/2020/04/index.html","65575a39867855f7424766490ae11c94"],["D:/Desktop/My blog/upupoo/public/archives/2020/06/index.html","31b65b024443cb5874054425a92facba"],["D:/Desktop/My blog/upupoo/public/archives/2020/12/index.html","aa83e9996ee5eb664ca9874c72aa7fed"],["D:/Desktop/My blog/upupoo/public/archives/2020/index.html","3f8af18e258d22ef91b6a24385e46db6"],["D:/Desktop/My blog/upupoo/public/archives/2020/page/2/index.html","f92b0839cb83216930725548e051ba9f"],["D:/Desktop/My blog/upupoo/public/archives/index.html","96f1f8414980099022af42080778f040"],["D:/Desktop/My blog/upupoo/public/archives/page/2/index.html","c761a0dc4c8cff82e45325ad5856358e"],["D:/Desktop/My blog/upupoo/public/categories/index.html","60af22db25778f90747c9d173f7fe755"],["D:/Desktop/My blog/upupoo/public/categories/uncategorized/index.html","34e989827c54c3a81d52ef106260b277"],["D:/Desktop/My blog/upupoo/public/categories/壁纸/index.html","39e1866847e9f4ecd75cf4006ce6cc9b"],["D:/Desktop/My blog/upupoo/public/categories/搬运/index.html","2f22b1477b9b8324c1e365046430b819"],["D:/Desktop/My blog/upupoo/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["D:/Desktop/My blog/upupoo/public/css/index.css","6ec31ca678644c709378d6e4706e2b0b"],["D:/Desktop/My blog/upupoo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Desktop/My blog/upupoo/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Desktop/My blog/upupoo/public/img/QQ支付.png","29ebfdb449b1f62c1b1a5319808b21e6"],["D:/Desktop/My blog/upupoo/public/img/QQ支付剪切版.png","f587e7f634ce1073a0bd5fc4695c2f58"],["D:/Desktop/My blog/upupoo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Desktop/My blog/upupoo/public/img/alipay.jpg","413a64a781614fef740536bcba99db0a"],["D:/Desktop/My blog/upupoo/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Desktop/My blog/upupoo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Desktop/My blog/upupoo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Desktop/My blog/upupoo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Desktop/My blog/upupoo/public/img/wechat.jpg","b30357e9261a68fec6da6ffaca486f27"],["D:/Desktop/My blog/upupoo/public/index.html","ce6b4d65d22fb59f36e9b529cd22a0ed"],["D:/Desktop/My blog/upupoo/public/js/main.js","1c7d6eb8f8b1a9e2a06c37906146eb84"],["D:/Desktop/My blog/upupoo/public/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["D:/Desktop/My blog/upupoo/public/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["D:/Desktop/My blog/upupoo/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["D:/Desktop/My blog/upupoo/public/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["D:/Desktop/My blog/upupoo/public/lib/blog-encrypt.js","b5012c5bb408583c96a32031da7b9809"],["D:/Desktop/My blog/upupoo/public/link/index.html","bcb6ed0e1f50992196d423307810f612"],["D:/Desktop/My blog/upupoo/public/p/17f67118.html","b74d26e1c8d3c6af75b095e18395409b"],["D:/Desktop/My blog/upupoo/public/p/1ad68e8f.html","c1a79bf68f3df3294845a66a465e92fe"],["D:/Desktop/My blog/upupoo/public/p/3eeb.html","236cebe6dcb91b1efaa2516584b0e6a7"],["D:/Desktop/My blog/upupoo/public/p/4011c592.html","d5dabf7bcabdabb899b72ed23656c5cb"],["D:/Desktop/My blog/upupoo/public/p/5e05.html","c1f228f9bcb2cff1f740ab74babe75b6"],["D:/Desktop/My blog/upupoo/public/p/67e32214.html","e1c974306bc641e20bd6e7752c562d73"],["D:/Desktop/My blog/upupoo/public/p/748870d8.html","9e56f393a4fd7119e4f51c726e574bb4"],["D:/Desktop/My blog/upupoo/public/p/75568dfa.html","ad452f8ba0a87c6f40c95f7ede4646f7"],["D:/Desktop/My blog/upupoo/public/p/7967.html","6dfa460670e9f64d9c36b0bd31800484"],["D:/Desktop/My blog/upupoo/public/p/c61d09a2.html","5449e02f0f56fa61372c61025ee10bc0"],["D:/Desktop/My blog/upupoo/public/p/ceda0d18.html","cbd7db2657fdd7cb3ea7f0e33fca3ad4"],["D:/Desktop/My blog/upupoo/public/p/df5f4571.html","64b6c282c162dac1ded7dd24adb093b5"],["D:/Desktop/My blog/upupoo/public/p/ea10c205.html","0b22c5dcd86b37568f3ce02162356d95"],["D:/Desktop/My blog/upupoo/public/page/2/index.html","512f8b853bc800c34ec700204aeacf89"],["D:/Desktop/My blog/upupoo/public/tags/2018-01/index.html","259ca95c16f2b27018d45ef07e643fb5"],["D:/Desktop/My blog/upupoo/public/tags/2018-02/index.html","1890b039f0c9345f6bcd38a91cbfc18e"],["D:/Desktop/My blog/upupoo/public/tags/2018-03/index.html","c892e6e4e447ba4854689e6146bd9afb"],["D:/Desktop/My blog/upupoo/public/tags/2018/index.html","a4d5a4a77363905608fffedcce9d364a"],["D:/Desktop/My blog/upupoo/public/tags/PC/index.html","9329e2fe1a3c4fde468275f61ae28272"],["D:/Desktop/My blog/upupoo/public/tags/P站/index.html","d9f09bbfa01e8faf652c3489a0d194ae"],["D:/Desktop/My blog/upupoo/public/tags/Sakura/index.html","01fe762defce945c99e94aa6da29c318"],["D:/Desktop/My blog/upupoo/public/tags/hexo/index.html","32c9e528a07759cdc1b3d2e4ca493734"],["D:/Desktop/My blog/upupoo/public/tags/index.html","addd98306de4581f14caf55985a02db9"],["D:/Desktop/My blog/upupoo/public/tags/upupoo/index.html","1116a863b70dc233ebe67074b7a1837f"],["D:/Desktop/My blog/upupoo/public/tags/二次元/index.html","333a4fdfc778b15444c613bbbe6aeb5c"],["D:/Desktop/My blog/upupoo/public/tags/分享/index.html","4085039023eff9f3f9c4b67375936125"],["D:/Desktop/My blog/upupoo/public/tags/初音/index.html","1581720a5b104e6cacfb502f6f728f99"],["D:/Desktop/My blog/upupoo/public/tags/动漫/index.html","cf722cea16af97bba495c437dbacbfca"],["D:/Desktop/My blog/upupoo/public/tags/图包/index.html","e6260fcda72b769acb4d10cafca0f00d"],["D:/Desktop/My blog/upupoo/public/tags/壁纸/index.html","75c3febb32b47d2b8cf1fbe8e03b4f17"],["D:/Desktop/My blog/upupoo/public/tags/天翼网盘/index.html","5771ca81f25098cd5a441f14852336db"],["D:/Desktop/My blog/upupoo/public/tags/小知识/index.html","8004a52afd548adf173c273f5846ccf7"],["D:/Desktop/My blog/upupoo/public/tags/插件/index.html","4c4e481a4e4f48defb6d77f4d650dae1"],["D:/Desktop/My blog/upupoo/public/tags/教程/index.html","1e875c2afa0e0cfedf023bc88bbc9256"],["D:/Desktop/My blog/upupoo/public/tags/琉璃神社/index.html","bacfbe384c86e4dcfd0f0668d83aafa9"],["D:/Desktop/My blog/upupoo/public/tags/解释/index.html","cef280c967b916bc642051067a376497"],["D:/Desktop/My blog/upupoo/public/tags/资源/index.html","0bf0fabe7230d2b036081d66d23cbd9b"],["D:/Desktop/My blog/upupoo/public/tags/软件/index.html","fd7df7924c33dbae339426d79dce9ce3"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







