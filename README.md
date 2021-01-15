# 逃離房間遊戲
逃離房間遊戲的規則為收集線索及道具，設法逃出上鎖的空間。此場景為動漫「未來都市NO.6」中角色的房間，所有圖片及遊戲事件皆參考動漫設定後自行繪製創作。

## 開發工具
* HTML
* CSS
* 原生 Javascript：暴力到無法維護...
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
