## 請以自己的話解釋 API 是什麼

* API 的正式名稱是 Application Programming Interface，重點在於「介面」，而這個介面可以達到「交換資料」的目的。
 * API 其實分為很多種，例如有系統導向的 API、資料庫與框架的 API，而我們的重點在於學習 Web API。最常見的就是購物網站使用金流付款，利用第三方串接 API 來達到交易功能
 * 優點是像函式一樣，將功能打包好，如此一來我們不用從頭到尾自己生出一個功能，只需要借用別人的資料就好。
 * 在 《 Web API 建構與設計》當中，提到了怎麼樣撰寫一份 API 文件，遵守共通的使用規則、展示範例，才能讓使用者又快又方便撈到資料。

## 請找出三個課程沒教的 HTTP status code 並簡單介紹

 HTTP 狀態碼大致上可以分為五類，挑幾個介紹：
 
 * 1XX：參考資訊（似乎比較少見？）
 * 2XX：伺服器已接受用戶要求
   * 205： 完成 Request
 * 3XX：重新導向
  * 301：要求的網頁永久改變了網址，這個狀態代表用戶應該連接到指定的 URL 
  * 305：要求的網頁需要透過伺服器指定的 Proxy 才能夠看到。（不太懂 Proxy 是什麼，參考[鳥哥的私房菜關於 Proxy的部分](http://linux.vbird.org/linux_server/0420squid.php)）
  * 307：暫時的重新導向。這個狀態代表網頁暫時改變網址。
 * 4XX：用戶端錯誤
  * 403：權限不足被拒絕
  * 407：需要 Proxy 驗證
  * 408：沒有在伺服器預設時間內等到用戶端的 Request
 * 5XX：伺服器錯誤
　* 500：內部伺服器錯誤
　* 505：不支援的 HTTP 版本


## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

### URL
https://NicedayRestaurantLidemy.com/api

### 獲取餐廳資料

| 說明      | Methon      | Path     | 參數 |
| -------- | -------- | -------- |----  |
| 新增餐廳資料| POST | /restaurants/:list|name : 餐廳名稱 phone: 電話  region : 所在縣市 address : 餐廳地址 |
| 讀取餐廳資料| GET |/restaurants/:list|-
|更新餐廳資料|PATCH| /restaurants/:list/id|name : 餐廳名稱 phone: 電話  region : 所在縣市 address：餐廳地址
刪除餐廳資料|DELETE| /restaurants/:list/id|-|

### 回傳範例

```
{
  "data":{
    "id": "39324",
    "name": "CafeLatte",
    "phone": "(02)1345234"
    "region": "Hualien",
    "address": "No. 2333, Zhongshan Rd., Hualien City, Taiwan ",
  }
}
```