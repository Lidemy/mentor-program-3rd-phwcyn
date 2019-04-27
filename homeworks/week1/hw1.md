## 交作業流程

建置環境

1.通過邀請連結加入
2.開啟  cmd ，輸入 `git clone` https://github.com/Lidemy/mentor-program-3rd-phwcyn 下載到自己的電腦裡。
3. `npm install` （安裝 node.js 的套件管理工具）

開始寫作業

好習慣：永遠在一個新的分支下寫作業。
1.新開一個 branch ：`git branch week1`
切換到 week1 branch ：`git checkout week1`
2.指令 `vim 檔名`： 可開啓檔案開始編寫作業。
3.寫完之後按 `Esc` ，再輸入 `:wq` 存檔並且離開 vim。
4.指令`git commit -am message`：將你的檔案存入本地的 repository 裡頭。

交作業囉

1.指令`git push origin week1`：將你的作業上傳到 Github 上頭。
2.等它開始跑，到自己的頁面上按下 compare & pull request。
3.注意頁面上 base 是 master ，compare 是 week1。
4.留下標題和內容。
5.按下 create pull request 送出。
6.到 https://github.com/Lidemy/homeworks-3rd 交作業專用的 repository 建立一個
new issue。
7.標題填入[Week1] 、內容填上剛剛 pull 的網址。

回到本地端要做的事情

1.指令`git checkout master`： 切換回 master 的分支。
2.指令`git pull origin master`： 拉下 merge 完的分支。
3.指令`git branch -d　week1`：把 week1 的分支刪除。

這樣作業就完成囉～

