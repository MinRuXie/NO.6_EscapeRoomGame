# 逃離房間遊戲
逃離房間遊戲的規則為收集線索及道具，設法逃出上鎖的空間。此場景為動漫「未來都市NO.6」中角色的房間，所有圖片及遊戲事件皆參考動漫設定後自行繪製創作。

## 開發工具
* HTML
* CSS
* Vanilla Javascript
* Layoutit-Tab

## 使用滑鼠操作
* 拾起物品：點擊畫面中可拾起的物品，會放至下方工具列
* 放置物品：從工具列拖曳物品到畫面中

## 遊戲畫面部分截圖
<table>
  <tr>
    <td>
      <img src="https://i.imgur.com/ps3sYhR.png" width="400" style="margin:0 10px 10px 0">
    </td>
    <td>
      <img src="https://i.imgur.com/ywqkSFa.png" width="400" style="margin:0 10px 10px 0">
    </td>
  </tr>
  <tr>
    <td>
      <img src="https://i.imgur.com/IkJ62GL.png" width="400" style="margin:0 10px 10px 0">
    </td>
    <td>
      <img src="https://i.imgur.com/CZUH3io.png" width="400" style="margin:0 10px 10px 0">
    </td>
  </tr>
  <tr>
    <td>
      <img src="https://i.imgur.com/VpdVNO5.png" width="400" style="margin:0 10px 10px 0">
    </td>
    <td>
      <img src="https://i.imgur.com/275ZWAk.png" width="400" style="margin:0 10px 10px 0">
    </td>
  </tr>
</table>


## 事件類型

### 偵測型事件
工具列中需有特定物品，才可開啟隱藏畫面。

<table>
  <tr>
    <td>▼ 沒有道具「燈」，看不到路所以無法前進</td>
    <td>▼ 有道具「燈」，可進入左右通道</td>
  </tr>
  <tr>
    <td>
      <img src="https://i.imgur.com/fr9g7IB.png" width="400">
    </td>
    <td>
      <img src="https://i.imgur.com/2Q71XvQ.png" width="400">
    </td>
  </tr>
</table>


### 密碼型事件
需輸入正確的數字，才可開啟隱藏畫面。

<table>
  <tr>
    <td>▼ 輸入正確的食材「份量」來煮湯</td>
    <td>▼ 成功煮出能喝的湯，才能進入隱藏畫面</td>
  </tr>
  <tr>
    <td>
      <img src="https://i.imgur.com/kqtjSeo.png" width="400">
    </td>
    <td>
      <img src="https://i.imgur.com/Xs5TzLF.png" width="400">
    </td>
  </tr>
</table>

### 放置型事件
須將正確的物品拖曳至正確的畫面位置中，才可觸發特定事件。

<table>
  <tr>
    <td>▼ 給小老鼠喝「湯」</td>
    <td>▼ 賄賂小老鼠，才能獲得「小老鼠」的幫助喔！</td>
  </tr>
  <tr>
    <td>
      <img src="https://i.imgur.com/scbg0an.png" width="400">
    </td>
    <td>
      <img src="https://i.imgur.com/hMUESyo.png" width="400">
    </td>
  </tr>
</table>

## 資料集
### 場景 (左: `l`, 右: `r`, 事件畫面: `e`)
* a1 面向北方
    * a1door 門
    * a1e 湯
    * a1e2 煮好的湯
* a2 面向西方
    * a2e 小老鼠書櫃
    * a2b 進入通道
    * a2br 通道往右
        * a2bre 馬克白的書
        * a2bre2 馬克白的書:食譜
    * a2bl 通道往左
        * a2ble 關閉的急救箱
        * a2brl2 打開的急救箱
* a3 面向南方
    * a3e 床底
* a4 面向東方
    * a4e 鏡子

### 道具
* 月夜 moonlight → 位於 a2e
* 毛巾 towel → 位於 a4
* 盤子 plate → 位於 a3
* 提燈 light → 位於 a1
* 機器鼠 machinerat → 位於 a2ble2
* 鑰匙 doorkey → 位於 a3
* 一盤湯 soup → 位於 a1e2

### 事件
* Event 1 照亮視野 (偵測型) → 位於 a2b
    * 持有道具 light，開啟新場景
* Event 2 清潔鏡子取得急救箱密碼 (放置型) → 位於 a4e
    * 拖曳道具 towel
* Event 3 打開急救箱 (密碼型) → 位於 a2ble
    * 輸入密碼，獲得道具 machinerat
* Event 4 馬克白的書 (放置型) → 位於 a2bre
    * 拖曳道具 machinerat，取得湯的食譜情報
* Event 5 調配特製的湯 (密碼型) → 位於 a1e
    * 輸入食譜，煮好湯
* Event 6 裝湯 (放置型) → 位於 a1e2
    * 拖曳道具 plate，獲得道具 soup
* Event 7 給老鼠們喝湯 (放置型) → 位於 a2e
    * 拖曳道具 soup，獲得道具 moonlight
* Event 8 找鑰匙 (放置型) → 位於 a3
    * 拖曳道具 moonlight，獲得道具 doorkey 
* Event 9 開門 (放置型) → 位於 a1door
    * doorkey moonlight，破關
