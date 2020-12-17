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

var precacheConfig = [["D:/Desktop/My blog/upupoo/public/404.html","6efc20fd804810887b689b39c9c9c1f4"],["D:/Desktop/My blog/upupoo/public/Gallery/index.html","655296129ade863b42b0f61d65f948ef"],["D:/Desktop/My blog/upupoo/public/Movie/index.html","3bd92f7a78885650a3e7f67288e4152d"],["D:/Desktop/My blog/upupoo/public/Music/index.html","665041807235a3df55fce313efde568a"],["D:/Desktop/My blog/upupoo/public/about/index.html","e217cdb4d2b729ae3fb92871babd53fa"],["D:/Desktop/My blog/upupoo/public/archives/2020/01/index.html","cc396015fc8040b06f530a90cac7ef1a"],["D:/Desktop/My blog/upupoo/public/archives/2020/02/index.html","99dccadfdad8b15fcfb5f20eac457ca1"],["D:/Desktop/My blog/upupoo/public/archives/2020/03/index.html","b6e2ce2cca73e88e68c02e293533dffd"],["D:/Desktop/My blog/upupoo/public/archives/2020/04/index.html","c5b9905f753175ba4da3e0a77eb4aec3"],["D:/Desktop/My blog/upupoo/public/archives/2020/06/index.html","ead6d92ba0bf1fe3fa708a6e61578cc0"],["D:/Desktop/My blog/upupoo/public/archives/2020/12/index.html","bf56d823c0c12b46cd842ac3db15e5ff"],["D:/Desktop/My blog/upupoo/public/archives/2020/index.html","2d3fc19e10c931bcfc82833aed4c7db8"],["D:/Desktop/My blog/upupoo/public/archives/2020/page/2/index.html","ff60e4e6fe9f3081acf972b58a6133f9"],["D:/Desktop/My blog/upupoo/public/archives/index.html","f716c655d61c01e4099cd91b70324d80"],["D:/Desktop/My blog/upupoo/public/archives/page/2/index.html","7020699f52f0eea3f897f48d80dfb741"],["D:/Desktop/My blog/upupoo/public/categories/index.html","2cd91f76c75bd17b84d3d475bc7e38cb"],["D:/Desktop/My blog/upupoo/public/categories/uncategorized/index.html","e6e302290fde8140fc97d3a753ff5ec0"],["D:/Desktop/My blog/upupoo/public/categories/壁纸/index.html","a850dfe5bcffe82eb4b87fa5b0db09ab"],["D:/Desktop/My blog/upupoo/public/categories/搬运/index.html","4a75d04f9d15e64e5d1a7316caee0447"],["D:/Desktop/My blog/upupoo/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["D:/Desktop/My blog/upupoo/public/css/index.css","6ec31ca678644c709378d6e4706e2b0b"],["D:/Desktop/My blog/upupoo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Desktop/My blog/upupoo/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Desktop/My blog/upupoo/public/img/QQ支付.png","29ebfdb449b1f62c1b1a5319808b21e6"],["D:/Desktop/My blog/upupoo/public/img/QQ支付剪切版.png","f587e7f634ce1073a0bd5fc4695c2f58"],["D:/Desktop/My blog/upupoo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Desktop/My blog/upupoo/public/img/alipay.jpg","413a64a781614fef740536bcba99db0a"],["D:/Desktop/My blog/upupoo/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Desktop/My blog/upupoo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Desktop/My blog/upupoo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Desktop/My blog/upupoo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Desktop/My blog/upupoo/public/img/wechat.jpg","b30357e9261a68fec6da6ffaca486f27"],["D:/Desktop/My blog/upupoo/public/index.html","a1a71b1160ccbb006bafd3c7a4442a7f"],["D:/Desktop/My blog/upupoo/public/js/main.js","1c7d6eb8f8b1a9e2a06c37906146eb84"],["D:/Desktop/My blog/upupoo/public/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["D:/Desktop/My blog/upupoo/public/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["D:/Desktop/My blog/upupoo/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["D:/Desktop/My blog/upupoo/public/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["D:/Desktop/My blog/upupoo/public/lib/blog-encrypt.js","b5012c5bb408583c96a32031da7b9809"],["D:/Desktop/My blog/upupoo/public/link/index.html","601f1ff39a0280f9b9d276e7e1919dda"],["D:/Desktop/My blog/upupoo/public/p/17f67118.html","88dcdc2d4e318e74633709852acc4c00"],["D:/Desktop/My blog/upupoo/public/p/1ad68e8f.html","9dcee05e52431c341e06ab9e0d2f2ada"],["D:/Desktop/My blog/upupoo/public/p/3eeb.html","a7aa3756a2998c710177389a5afef195"],["D:/Desktop/My blog/upupoo/public/p/4011c592.html","14828dcdaaaabbfbcf5baccbd67aa036"],["D:/Desktop/My blog/upupoo/public/p/5e05.html","2e4b36c84b1d42f3d81c14d395ac25ba"],["D:/Desktop/My blog/upupoo/public/p/67e32214.html","beeeaf146c73fc8f0c1dc39a97dee71c"],["D:/Desktop/My blog/upupoo/public/p/748870d8.html","edc14b4e6392de86481fa273c3f3a741"],["D:/Desktop/My blog/upupoo/public/p/75568dfa.html","50879a18a0cbdb543395d1895fa68e6c"],["D:/Desktop/My blog/upupoo/public/p/7967.html","d8aebd094f79c95dccf0ec912df27023"],["D:/Desktop/My blog/upupoo/public/p/c61d09a2.html","8379a2b9211ac5ebb75f6e2702c25c5e"],["D:/Desktop/My blog/upupoo/public/p/ceda0d18.html","e080cd044b4fa9b419b009b9a9c3d9af"],["D:/Desktop/My blog/upupoo/public/p/df5f4571.html","5929cbacf5b5e03b86bdd65c6db61ef5"],["D:/Desktop/My blog/upupoo/public/p/ea10c205.html","6f39520a303a068971be9e6cc01f7452"],["D:/Desktop/My blog/upupoo/public/page/2/index.html","66138473350b9c19c108c548d0189af7"],["D:/Desktop/My blog/upupoo/public/tags/2018-01/index.html","4b2e9735751d7d9420b49839fee01153"],["D:/Desktop/My blog/upupoo/public/tags/2018-02/index.html","a38f9c8c76e7ddd64533439aa868e681"],["D:/Desktop/My blog/upupoo/public/tags/2018-03/index.html","6560a9bd59419a7071105d5aacc5762b"],["D:/Desktop/My blog/upupoo/public/tags/2018/index.html","19a4d3ab775fbcf56282b0bc4c02a053"],["D:/Desktop/My blog/upupoo/public/tags/PC/index.html","b8cf0e34dbdecb037852a7b148c00686"],["D:/Desktop/My blog/upupoo/public/tags/P站/index.html","2b57571bfa905a47013bc18d937d2452"],["D:/Desktop/My blog/upupoo/public/tags/Sakura/index.html","2f6d611d2f1c2b40100d1e21c04d2714"],["D:/Desktop/My blog/upupoo/public/tags/hexo/index.html","1f40228250286e349e20f53b08498414"],["D:/Desktop/My blog/upupoo/public/tags/index.html","b7e3a27c470ad6d381069c923d9a75d8"],["D:/Desktop/My blog/upupoo/public/tags/upupoo/index.html","9fbc4c28bdf12b0c966dce0910064e43"],["D:/Desktop/My blog/upupoo/public/tags/二次元/index.html","4111862aac887ab3859b9a76ea431cd3"],["D:/Desktop/My blog/upupoo/public/tags/分享/index.html","62dcd78703d2a2042ca29e06242b7aa3"],["D:/Desktop/My blog/upupoo/public/tags/初音/index.html","8167c758ec9e6e6cece6a61491252f2f"],["D:/Desktop/My blog/upupoo/public/tags/动漫/index.html","178aca099513a06a19dc36ed9a9f9702"],["D:/Desktop/My blog/upupoo/public/tags/图包/index.html","cc5748bb214e21199b636b56f7709a00"],["D:/Desktop/My blog/upupoo/public/tags/壁纸/index.html","913a36a188cc9b9ec0969a2d4644e9c2"],["D:/Desktop/My blog/upupoo/public/tags/天翼网盘/index.html","26101a77301500cd82db1c1f97d0f679"],["D:/Desktop/My blog/upupoo/public/tags/小知识/index.html","601e5f461bdbd01d150943bf18679c1b"],["D:/Desktop/My blog/upupoo/public/tags/插件/index.html","a38420c82f768c3420b55d77a7b13c73"],["D:/Desktop/My blog/upupoo/public/tags/教程/index.html","a85483d054396dad550b62bbcc09bc05"],["D:/Desktop/My blog/upupoo/public/tags/琉璃神社/index.html","37bde8d41cc4097c6b89b3edeb068714"],["D:/Desktop/My blog/upupoo/public/tags/解释/index.html","9ae41a41288f9ea13bd140e808b6ef3c"],["D:/Desktop/My blog/upupoo/public/tags/资源/index.html","73b47dc6a76dfdc88b0eb2c81d0282c5"],["D:/Desktop/My blog/upupoo/public/tags/软件/index.html","e8e3898e018ad9af56e8488382c2206d"]];
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







