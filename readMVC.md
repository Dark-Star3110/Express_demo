```diff
-từ  file index.js sẽ nhảy vào
=> folder routes(trong folder routes  có file index.js nên mặc định có sẽ nhảy luôn vào
=> file index.js )
-từ đây sẽ sẽ chạy tiếp vào
=> file news.js hoặc site.js (vẫn ở trong folder routes) dựa theo url đang là / hay /news ,
sau khi chạy tiếp vào 1 trong 2 file news.js hoặc site.js nó tiếp tục chạy vào
=> folder app/controller từ đây sẽ chạy vào
=> file SiteController.js hoặc NewsController.js tương ứng với news.js hoặc site.js
và sẽ  nhảy vào folder resources tìm file để hiển thị
+ file site.js đang có config trang chủ (/) và trang search (/search)
+ file news.js đang có config trang new (/news) và trang new children (/news/abc..)
```
