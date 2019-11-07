## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。

1. `<em>` ：強調，就是把文字變成斜體字。

2. `<progress>`：可以顯現成一個進度條的樣子。
例如：
`<progress value=50" max="100">70 %</progress>`
是進度到 50，最大值到一百的意思。

3. `<u></u>`：讓文字加上底線。

##請問什麼是盒模型（box modal）

1. 在佈局網頁版面時，所有元素都能建成矩形盒子，像俄羅斯娃娃一樣，一個下面還可以包住一個。我們可以自己設定每個盒子的大小、位置及各種屬性。

2. 為什麼要了解盒模型？一般排版時只考量到「內容」，也就是想要呈現給瀏覽者的實質資訊，像是文字以及圖像等。但是在網頁上，與其他元素並排時，就需要用到邊距、留白等概念，能夠保持版面的美觀。

用圖來說明：
![](https://i.imgur.com/KTc6g0c.gif)
 
圖片來源：https://www.runoob.com/images/box-model.gif

3. 盒模型可以分為四層，從外到內是：

(1)	Margin（外距） ：

* 可以設定粗細，margin-top、margin-bottom、margin-left、margin-right。（寫法是上右下左）
* 能夠把元素推出一段距離，保持留白。
* 透明，不吃背景色。

(2)	border（邊框） ：

* 可以設定粗細、類型、顏色。（ex：solid blue 5px）
* 把 padding 跟 content 包住。
* 不吃背景色。

(3)	padding （內距）：

* 可以設定粗細，padding-top、padding-bottom、padding-left、padding-right。
* padding 會向外部的方向擴張，可以視為 content 的延伸。
* 透明，會吃到背景色。

(4)	content（內容）：

* 可以設定 width、height。
* 一般沒有盒模型概念的人，會只讓 content 的部分設定長寬高，也就是可見部分，但這樣在實際布局上不靈活。在實質設定的時候，可能會像是這樣：
* 
```
div { width: 100px; 
border: 20px solid blue; 
padding: 25px; margin: 25px;}]
```
在實作上，要能夠清楚算出每個盒模型的寬高（content+padding+border），這樣才會知道呈現在瀏覽器上實際是什麼樣子。
不過，由於在設定的時候要一直左算右算，對於後續維護很麻煩，因此 box-sizing 概念應運而生。

可以這樣寫：

```
 *, *:after, *:before {
   -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
           box-sizing: border-box;  
 }
```

-webkit 、 -moz 是前綴，從 ie8+ 可以開始支援。

## 請問 display: inline, block 跟 inline-block 的差別是什麼？

display 是指元素在網頁上的陳列方式。

* 每個標籤都有預設不同的特性
* 能夠透過 css 設定改變預設值

1.inline （行內元素）：

* 指元素之間能夠「在同一行內左右並排，且不換行」。
* 無法指定元素的 width、height、margin-top、margin-bottom，直接透過元素大小、padding 撐開容器的大小。
* padding-top、padding-bottom 是對容器大小產生變動，而非元素本身。
* 有下列這幾種標籤：

2. block （區塊元素）：
* 讓每個元素佔據一行（換行），預設寬度 100%。
* width、height、margin、padding 都可以調整。
* 有下列這幾種標籤：

3.inline-block（行內區塊元素）：
* 不用換行，可以使用所有的屬性。
* margin. border. padding 都可以使用。
* 最靈活的 display 屬性。
* 有下列這幾種：

##請問 position: static, relative, absolute 跟 fixed 的差別是什麼？
排版的時候，需要有圖層的概念。

1. static 靜態定位：

* 這個元素是瀏覽器的預設值。
* 從上而下，從左而右依序排列。  
* 通常不太會用，除非要覆蓋。

2. relative 相對定位： 

* 可以設定元素裏頭的位置了，能調整 top、bottom、left、right。
* 設定完後，看起來變了，但它實際上的位置還是原本的位置。
* 不會去影響到別的元素。

3. absolute 絕對定位
* 可以放在任何你想要放的位置。
* 基準點是以 relative 的父層為基準；若無，則以 body 為基準。
* absolute 會常和 relative 混用。

4. fixed 固定定位：
* 相對瀏覽器的的位置來定位；就算頁面捲動了，位置也會固定住。
* 可以設定 top、bottom、left、right。
* 通常會用在小廣告、購物網站的右小角購物車、客服對話窗，能夠讓你隨時都能注意到它。


參考資料：

1.[CSS 基础框盒模型介绍](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
（介紹了基本盒模型，但是比較沒有觀念的釐清，可能還是會對各種元素的運作之間不清楚）

2.[好用的CSS box-sizing](https://www.zeusdesign.com.tw/article/6-%E5%A5%BD%E7%94%A8%E7%9A%84%20CSS%20box-sizing.html) 
（介紹 box-sizing用法）

3.[【DAY12】盒模型 box model](https://ithelp.ithome.com.tw/articles/10194997)

4.[CSS Position 基本觀念](https://tpu.thinkpower.com.tw/tpu/articleDetails/1276)