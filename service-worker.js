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

var precacheConfig = [["D:/Desktop/My blog/upupoo/public/404.html","5ac38da59d3a241b25ea344c34b8c3f9"],["D:/Desktop/My blog/upupoo/public/Gallery/index.html","43de03c2c7cd2271c3392b657300d981"],["D:/Desktop/My blog/upupoo/public/Movie/index.html","5291381c3b48c1f4fcf5d1ba2ceb3a66"],["D:/Desktop/My blog/upupoo/public/Music/index.html","445552c983db39c3c9d8299abd5c4ba3"],["D:/Desktop/My blog/upupoo/public/about/index.html","59d265617b53ded6b8b4d22ea85c2956"],["D:/Desktop/My blog/upupoo/public/archives/2020/01/index.html","fa4d453698532150495e679b79ea6a40"],["D:/Desktop/My blog/upupoo/public/archives/2020/02/index.html","9890de798e2cc397bffb80d02fffdb9c"],["D:/Desktop/My blog/upupoo/public/archives/2020/03/index.html","502e6f40e95fc7192713825a40234e2e"],["D:/Desktop/My blog/upupoo/public/archives/2020/04/index.html","f0e2e6436fd11a1df47e6d424a44d6d0"],["D:/Desktop/My blog/upupoo/public/archives/2020/06/index.html","fece44e5b3590d23c74ce41339728b64"],["D:/Desktop/My blog/upupoo/public/archives/2020/12/index.html","3abcefc1038e568e1943deb58208fb02"],["D:/Desktop/My blog/upupoo/public/archives/2020/index.html","22a2995cc0a16d407a0217f152cc5b62"],["D:/Desktop/My blog/upupoo/public/archives/2020/page/2/index.html","71d3e7d7950442512efbc1ea57f8f82b"],["D:/Desktop/My blog/upupoo/public/archives/index.html","60fd47ba13ff92c1fc5b39b703911841"],["D:/Desktop/My blog/upupoo/public/archives/page/2/index.html","4ef55f5bc5fa8f78b2206017bdc1d803"],["D:/Desktop/My blog/upupoo/public/artitalk/index.html","381718f9b072f1509146a5be61bd3c5b"],["D:/Desktop/My blog/upupoo/public/categories/P站/index.html","6502871f1a8a4a2eef95e3bb974a899f"],["D:/Desktop/My blog/upupoo/public/categories/hexo/index.html","8a8ea929a604a12d630f8e83f819259c"],["D:/Desktop/My blog/upupoo/public/categories/index.html","ff33e9c99a27ebcc8ff8997a1c1e8a6c"],["D:/Desktop/My blog/upupoo/public/categories/uncategorized/index.html","87ed2e5d8e4e8f8460904c4d0cbdeda7"],["D:/Desktop/My blog/upupoo/public/categories/动态壁纸/index.html","56ea5e3d872f8bc5177be42280272314"],["D:/Desktop/My blog/upupoo/public/categories/壁纸/index.html","bf957b43374dfa3cbab7eac7da947e84"],["D:/Desktop/My blog/upupoo/public/categories/搬运/index.html","85e81ce90b782124cd4bc3bc77e2d372"],["D:/Desktop/My blog/upupoo/public/categories/资源/index.html","f54da8d6454a0788cd9b2994f04f9701"],["D:/Desktop/My blog/upupoo/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["D:/Desktop/My blog/upupoo/public/css/index.css","8d6714078b3684882c0a18805a8b6343"],["D:/Desktop/My blog/upupoo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Desktop/My blog/upupoo/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Desktop/My blog/upupoo/public/img/QQ支付.png","29ebfdb449b1f62c1b1a5319808b21e6"],["D:/Desktop/My blog/upupoo/public/img/QQ支付剪切版.png","f587e7f634ce1073a0bd5fc4695c2f58"],["D:/Desktop/My blog/upupoo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Desktop/My blog/upupoo/public/img/alipay.jpg","413a64a781614fef740536bcba99db0a"],["D:/Desktop/My blog/upupoo/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Desktop/My blog/upupoo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Desktop/My blog/upupoo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Desktop/My blog/upupoo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Desktop/My blog/upupoo/public/img/wechat.jpg","b30357e9261a68fec6da6ffaca486f27"],["D:/Desktop/My blog/upupoo/public/index.html","f15059f6e89d74c68e71e5c51730f9a1"],["D:/Desktop/My blog/upupoo/public/js/main.js","1c7d6eb8f8b1a9e2a06c37906146eb84"],["D:/Desktop/My blog/upupoo/public/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["D:/Desktop/My blog/upupoo/public/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["D:/Desktop/My blog/upupoo/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["D:/Desktop/My blog/upupoo/public/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["D:/Desktop/My blog/upupoo/public/lib/blog-encrypt.js","b5012c5bb408583c96a32031da7b9809"],["D:/Desktop/My blog/upupoo/public/link/index.html","d8bf55e0ff0b684045c6292af18042a9"],["D:/Desktop/My blog/upupoo/public/p/17f67118.html","b24be557fbaf92b8d5d4e51bc17c05f0"],["D:/Desktop/My blog/upupoo/public/p/1d167eed.html","1a3eebaf128c234b0742bd93bad29cfc"],["D:/Desktop/My blog/upupoo/public/p/3eeb.html","fb85a2b7b732e79ddea53fa267855626"],["D:/Desktop/My blog/upupoo/public/p/4011c592.html","eaf50942540d7bd16ed7ccd70db19f08"],["D:/Desktop/My blog/upupoo/public/p/5e05.html","27d3b7146f72b1ca4019c7f2e40e21c3"],["D:/Desktop/My blog/upupoo/public/p/67e32214.html","f6c03fbb7d7e1a1119375330b4e9e4be"],["D:/Desktop/My blog/upupoo/public/p/748870d8.html","5cc84038c9a8d9bc8adcdd7b2e180f75"],["D:/Desktop/My blog/upupoo/public/p/75568dfa.html","03572bb2357106ccfe571792b3709a5f"],["D:/Desktop/My blog/upupoo/public/p/7967.html","57ace4687c4a696e9f10d926c2828fae"],["D:/Desktop/My blog/upupoo/public/p/c61d09a2.html","1ad8c7c7c84d4b28084606f471cdb255"],["D:/Desktop/My blog/upupoo/public/p/ceda0d18.html","9d38f079a5231a316c6dc3f3dad7e449"],["D:/Desktop/My blog/upupoo/public/p/df5f4571.html","77b2b99b44e159715814865e0ed7241a"],["D:/Desktop/My blog/upupoo/public/p/ea10c205.html","139e2ddd09c32839c961a0e00bab76e5"],["D:/Desktop/My blog/upupoo/public/page/2/index.html","0a5551515219195ee529e43849dffffb"],["D:/Desktop/My blog/upupoo/public/tags/2018-01/index.html","db93fb517392c084d159ee49b7e589a2"],["D:/Desktop/My blog/upupoo/public/tags/2018-02/index.html","979347819f61c3e6bf82313f6ba96cc9"],["D:/Desktop/My blog/upupoo/public/tags/2018-03/index.html","e8bd6cba9672e7b8b1e15d164ccd2ad9"],["D:/Desktop/My blog/upupoo/public/tags/2018/index.html","08be403d10cf02decaebb0854787f0ce"],["D:/Desktop/My blog/upupoo/public/tags/PC/index.html","401e7806dcb834bcc39bc4cb9b9c18f9"],["D:/Desktop/My blog/upupoo/public/tags/P站/index.html","0c25af3fa0d06dbc852490983884356e"],["D:/Desktop/My blog/upupoo/public/tags/Sakura/index.html","8dc0927975e343759ebb034a7f44113d"],["D:/Desktop/My blog/upupoo/public/tags/hexo/index.html","b192df7752ceb2c00be3e498a51aa4db"],["D:/Desktop/My blog/upupoo/public/tags/index.html","5ca6684a1805f4a357aec0cab88f5604"],["D:/Desktop/My blog/upupoo/public/tags/upupoo/index.html","4ab54326e4193f78ccc7c35b38ee07cf"],["D:/Desktop/My blog/upupoo/public/tags/二次元/index.html","e1be4f876a3d69684515f49736bb3c57"],["D:/Desktop/My blog/upupoo/public/tags/分享/index.html","5d6ec29f944571f495aa54ffe3201840"],["D:/Desktop/My blog/upupoo/public/tags/初音/index.html","a6a324609b632cd4afee04764ed4839b"],["D:/Desktop/My blog/upupoo/public/tags/动漫/index.html","d7940354e590fcce8f5ee2b1bbba2554"],["D:/Desktop/My blog/upupoo/public/tags/图包/index.html","d18f747def449d3bd8b5bf946435d0de"],["D:/Desktop/My blog/upupoo/public/tags/壁纸/index.html","70ffaeb7fc85b7264dce5bdd91422f37"],["D:/Desktop/My blog/upupoo/public/tags/天翼网盘/index.html","b4a4dd0c5f4c98504339669abc79dadc"],["D:/Desktop/My blog/upupoo/public/tags/小知识/index.html","51d6118c4aa1415036800333680bca38"],["D:/Desktop/My blog/upupoo/public/tags/教程/index.html","e63e7f9ad3c6e8d7839a66b3692cacc3"],["D:/Desktop/My blog/upupoo/public/tags/琉璃神社/index.html","364edd38796d6d69f91fc1f2c73a07ae"],["D:/Desktop/My blog/upupoo/public/tags/解释/index.html","c2e85aedb93dacf84df36c4993c1a180"],["D:/Desktop/My blog/upupoo/public/tags/资源/index.html","1ea30e849bca4c88f9d67ad55cf58959"],["D:/Desktop/My blog/upupoo/public/tags/软件/index.html","8360bb32ca15f0041c8205197e10313d"]];
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







