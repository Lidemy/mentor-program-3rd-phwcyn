## 請以自己的話解釋 API 是什麼

* API 的正式名稱是 Application Programming Interface，重點在於「介面」，而這個介面可以拿來達到「交換資料」的目的。
 * API 其實有分為很多種，例如 API，而我們的重點在於學習 Web API
 * 優點有點像是函式一樣，將功能打包好，這樣的好處是我們不用從頭到尾自己生出一個功能，只需要借用別人的資料就好。


* Web API 的用處是什麼


 * 購物網站用到的是可以使用金流付款，利用第三方串接 API 來達到交易付款的功能
 
 * 在 《 Web API 建構與設計》當中，提到了怎麼樣撰寫一份 API 文件，遵守共通的使用規則，才能夠達到功能。


## 請找出三個課程沒教的 HTTP status code 並簡單介紹

 HTTP 狀態碼大致上可以分為五類，挑幾個介紹
 
 * 1XX：參考資訊（似乎比較少見？）
 * 2XX：伺服器已接受用戶要求
   * 205： 完成 Request
 * 3XX：重新導向
  * 301：要求的網頁永久改變了網址，這個狀態代表用戶應該連接到指定的 URL 
  * 305：要求的網頁需要透過伺服器指定的 Proxy 才能夠看到。（不太懂 Proxy 是什麼，參考鳥哥的私房菜）http://linux.vbird.org/linux_server/0420squid.php
  * 307：暫時的重新導向。這個狀態代表網頁暫時改變網址。
 * 4XX：用戶端錯誤
  * 403：權限不足被拒絕
  * 407：需要 Proxy 驗證
  * 408：沒有在伺服器預設時間內等到用戶端的 Request
 * 5XX：伺服器錯誤
　* 500：內部伺服器錯誤
　* 505：不支援的 HTTP 版本


## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

## URL
https://Nicedayrestaurantlidemy.learingCode.com/api

## 獲取餐廳資料

### 其他
| 說明      | 方法      | Path     | 參數 |
| -------- | -------- | -------- |----  |
| 新增餐廳資料| POST | /resaturants|name : 餐廳名稱 （Required） phone: 電話（Required）  region : 縣市（Required）category : 食物種類（Required）  |
|新增餐廳資料|Patch| /restaurants/:name|name : 餐廳名稱（Optional）phone: 電話（Optional）region : 縣市（Optional）category : 食物種類（Optional）
刪除餐廳資料|delete| /restaurants/:name|-|

### 回傳範例

{
  "data":{
    "id": "4849527",
    "name": "GoodGoodEat",
    "phone": "(03)2345678"
    "region": "Taipei",
    "category": "barbecue",
  }
}

參考資料：
restful程式撰寫風格-for-crud
https://www.shopshopjob.com/restful%E7%A8%8B%E5%BC%8F%E6%92%B0%E5%AF%AB%E9%A2%A8%E6%A0%BC-for-crud/
https://ihower.tw/cs/web-apis.html