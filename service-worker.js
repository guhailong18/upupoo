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

var precacheConfig = [["D:/Desktop/My blog/upupoo/public/404.html","ee6c00f744949ac25fc132810c2683ab"],["D:/Desktop/My blog/upupoo/public/Gallery/index.html","5776fc24895eea2c18a8da127842aa7a"],["D:/Desktop/My blog/upupoo/public/Movie/index.html","b229992a112884fec8ddfa4641cbba14"],["D:/Desktop/My blog/upupoo/public/Music/index.html","7ce7c90a31df851f984f2d54190f01cb"],["D:/Desktop/My blog/upupoo/public/about/index.html","1a67abcd540cd30453c001ec543f000b"],["D:/Desktop/My blog/upupoo/public/archives/2020/01/index.html","85d9d61c15e9bd28ffa2dc0dc485794b"],["D:/Desktop/My blog/upupoo/public/archives/2020/02/index.html","a54d508ebbab293246700fc1e298ec55"],["D:/Desktop/My blog/upupoo/public/archives/2020/03/index.html","8eba5da5d3caa2bdbd67ab9ab795303c"],["D:/Desktop/My blog/upupoo/public/archives/2020/04/index.html","3c88e24dc7260e7bbadf38910b6b201b"],["D:/Desktop/My blog/upupoo/public/archives/2020/06/index.html","d047cc1ee1d244dd852f6e28b62b70db"],["D:/Desktop/My blog/upupoo/public/archives/2020/12/index.html","f9b052fd9c422ee203ba5aa47334dbf9"],["D:/Desktop/My blog/upupoo/public/archives/2020/index.html","5f3f81ac0715ecca0eedc4f8e575df8a"],["D:/Desktop/My blog/upupoo/public/archives/2020/page/2/index.html","9c8668a846eb40e5c088da1fc3bc0791"],["D:/Desktop/My blog/upupoo/public/archives/index.html","eb9a5d48e0679adf9a875c147e101b79"],["D:/Desktop/My blog/upupoo/public/archives/page/2/index.html","41d3097fcc0cd50f0157df6f5ae50093"],["D:/Desktop/My blog/upupoo/public/categories/index.html","62eb34c89b42cdd17f900a507f9b0fb6"],["D:/Desktop/My blog/upupoo/public/categories/uncategorized/index.html","ca9a4ce18ea57915c1d19e63be514139"],["D:/Desktop/My blog/upupoo/public/categories/壁纸/index.html","83246bf3f1af1dbe416fe6f214288fd7"],["D:/Desktop/My blog/upupoo/public/categories/搬运/index.html","21ac5a7a01284885dce965c976a8b2e4"],["D:/Desktop/My blog/upupoo/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["D:/Desktop/My blog/upupoo/public/css/index.css","f2c44f3053de18940978274729d6f163"],["D:/Desktop/My blog/upupoo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Desktop/My blog/upupoo/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Desktop/My blog/upupoo/public/img/QQ支付.png","29ebfdb449b1f62c1b1a5319808b21e6"],["D:/Desktop/My blog/upupoo/public/img/QQ支付剪切版.png","f587e7f634ce1073a0bd5fc4695c2f58"],["D:/Desktop/My blog/upupoo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Desktop/My blog/upupoo/public/img/alipay.jpg","413a64a781614fef740536bcba99db0a"],["D:/Desktop/My blog/upupoo/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Desktop/My blog/upupoo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Desktop/My blog/upupoo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Desktop/My blog/upupoo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Desktop/My blog/upupoo/public/img/wechat.jpg","b30357e9261a68fec6da6ffaca486f27"],["D:/Desktop/My blog/upupoo/public/index.html","86fc2d5e5617b3bf689b179869843ac8"],["D:/Desktop/My blog/upupoo/public/js/main.js","1c7d6eb8f8b1a9e2a06c37906146eb84"],["D:/Desktop/My blog/upupoo/public/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["D:/Desktop/My blog/upupoo/public/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["D:/Desktop/My blog/upupoo/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["D:/Desktop/My blog/upupoo/public/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["D:/Desktop/My blog/upupoo/public/lib/blog-encrypt.js","b5012c5bb408583c96a32031da7b9809"],["D:/Desktop/My blog/upupoo/public/link/index.html","1fec8f20b946420a3e22ede9ea114b18"],["D:/Desktop/My blog/upupoo/public/p/17f67118.html","594dec2c693a67813a0c0ea48277506a"],["D:/Desktop/My blog/upupoo/public/p/1ad68e8f.html","fe8942a4e4821d91a8c4c5b7f978195b"],["D:/Desktop/My blog/upupoo/public/p/3eeb.html","2227a6768c221a199a46c7ab5d4b8094"],["D:/Desktop/My blog/upupoo/public/p/4011c592.html","2321aeabdc6b2e98dcaa80bcf4dfde74"],["D:/Desktop/My blog/upupoo/public/p/5e05.html","c965dadcba9e8dc3843d35a0971ce54d"],["D:/Desktop/My blog/upupoo/public/p/67e32214.html","7955a674e037b0ee2fefa404d9dd9b7f"],["D:/Desktop/My blog/upupoo/public/p/748870d8.html","20f2e0139ece21a8cfd0115785177bc5"],["D:/Desktop/My blog/upupoo/public/p/75568dfa.html","8cfbe59d86232cfd6345cc9a40429de0"],["D:/Desktop/My blog/upupoo/public/p/7967.html","36c9fefdf0d1252100784319cee1002b"],["D:/Desktop/My blog/upupoo/public/p/c61d09a2.html","cdf14700f4b13c5a35d5215478b23b03"],["D:/Desktop/My blog/upupoo/public/p/ceda0d18.html","312408a16ee89cae3abd82ef5145ce43"],["D:/Desktop/My blog/upupoo/public/p/df5f4571.html","4d18b8d50497720ce8a4249fffd515d0"],["D:/Desktop/My blog/upupoo/public/p/ea10c205.html","5ded27b9091deb7f862da304509e5e82"],["D:/Desktop/My blog/upupoo/public/page/2/index.html","75ebaac768ae14f10c1dedcd2e45aa76"],["D:/Desktop/My blog/upupoo/public/tags/2018-01/index.html","b772139aa7ec6243de7e97ac2156aaa6"],["D:/Desktop/My blog/upupoo/public/tags/2018-02/index.html","26e770adbf33ba8c1f582596a3c8fee9"],["D:/Desktop/My blog/upupoo/public/tags/2018-03/index.html","51d966fd8a92a390bb9e30458a004168"],["D:/Desktop/My blog/upupoo/public/tags/2018/index.html","adc5cb221dd2f716a5bbd85a4c193f0d"],["D:/Desktop/My blog/upupoo/public/tags/PC/index.html","857c939e3ffd25112be53ec27e97d59e"],["D:/Desktop/My blog/upupoo/public/tags/P站/index.html","020d3e4fed426c87f884717f4870150f"],["D:/Desktop/My blog/upupoo/public/tags/Sakura/index.html","2623a5f39b43afcd54a5e1bd230f2b49"],["D:/Desktop/My blog/upupoo/public/tags/hexo/index.html","75833cbbf04d5f237f179589f07ab437"],["D:/Desktop/My blog/upupoo/public/tags/index.html","2229d72ed95413c2d6687bcadd7664e8"],["D:/Desktop/My blog/upupoo/public/tags/upupoo/index.html","200b20737c13b7f4e6827dda6e80b1ae"],["D:/Desktop/My blog/upupoo/public/tags/二次元/index.html","33c06d3f986b70c92a20b4becca01b40"],["D:/Desktop/My blog/upupoo/public/tags/分享/index.html","1773d1096ee4c3d06ff19d7e4e3f9ccf"],["D:/Desktop/My blog/upupoo/public/tags/初音/index.html","7a8dcdbc6cbc91395721969a4346b674"],["D:/Desktop/My blog/upupoo/public/tags/动漫/index.html","4a078bac5a1b093923b7c14c160c0ce9"],["D:/Desktop/My blog/upupoo/public/tags/图包/index.html","a7aee356e942f6d2646f899e77f2f806"],["D:/Desktop/My blog/upupoo/public/tags/壁纸/index.html","c99d933c2b9da507ca16491249db6580"],["D:/Desktop/My blog/upupoo/public/tags/天翼网盘/index.html","ea530dbf73f2a9870d73dc6c7bad1c2f"],["D:/Desktop/My blog/upupoo/public/tags/小知识/index.html","baad5cdd79a68d80deec5f8305037cc8"],["D:/Desktop/My blog/upupoo/public/tags/插件/index.html","b3d8c99040abdecb90e73c9b220235d8"],["D:/Desktop/My blog/upupoo/public/tags/教程/index.html","bbf493d627fc2928f577091f687b3fe0"],["D:/Desktop/My blog/upupoo/public/tags/琉璃神社/index.html","bda6d7e3a7a3009ae3c55dd11b388f56"],["D:/Desktop/My blog/upupoo/public/tags/解释/index.html","0538462406e7b76e829be7ca88bcd29b"],["D:/Desktop/My blog/upupoo/public/tags/资源/index.html","5350efcfe60109157ed49ba01d9beb36"],["D:/Desktop/My blog/upupoo/public/tags/软件/index.html","a80b00b1fa975912ff4404efe7153506"]];
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







