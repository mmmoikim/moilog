
# bfcache

### bfcache ( back forward cache )

: 네비게이팅 될 때 그 시점을 pausing 시켜 자바스크립트 힙, 랜더 된 이미지, 스크롤 위치, DOM 을 보존한 후 뒤로가기/앞으로 가기로 돌아 왔을 때 restored 됨

---
A back/forward cache (bfcache) caches whole pages (including the JavaScript heap) when navigating away from a page, so that the full state of the page can be restored when the user navigates back. Think of it as pausing a page when you leave it and playing it when you return.

[developers.google.com](https://developers.google.com/web/updates/2019/02/back-forward-cache)

---

What is the page navigation cache?
The page navigation cache is a general term used to describe a navigation optimization some browsers implement that makes using the back and forward buttons faster. Webkit calls it the Page Cache and Firefox calls it the Back-Forwards Cache (or bfcache for short).

When a user navigates away from a page, these browsers freeze a version of that page so that it can be quickly resumed in case the user navigates back using the back or forward buttons. Remember that adding a beforeunload or unload event handler prevents this optimization from being possible.

For all intents and purposes, this freezing is functionally the same as the freezing browsers perform to conserve CPU/battery; for that reason it's considered part of the frozen lifecycle state.

[developers.google.com](https://developers.google.com/web/updates/2018/07/page-lifecycle-api)

---
