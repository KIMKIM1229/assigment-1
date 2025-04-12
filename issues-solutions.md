# 問題與解決方法

在開發過程中，遇到了一些挑戰和技術問題。以下是主要問題及其解決方法的記錄：

## 1. 搜尋功能無法即時更新

### 問題：
搜尋框中的文字更改後，結果頁面未能即時更新顯示過濾後的項目。這會影響用戶體驗。

### 解決方法：
- 確保在 `input` 事件中處理搜尋邏輯。使用 `debounce` 函數來避免每次輸入時都觸發搜尋，而是等用戶停止輸入後再更新結果。
- 使用 `setTimeout` 或 `debounce` 來延遲搜尋，從而減少不必要的重新渲染。
  
```javascript
let timeout;
const searchInput = document.getElementById('search-bar');
searchInput.addEventListener('input', function() {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    performSearch(searchInput.value);
  }, 500); // 延遲 500 毫秒進行搜尋
});

2. 響應式設計在小螢幕上顯示異常
問題：
在小螢幕設備（例如手機）上，頁面內容顯示不正常，某些元素會被擠壓，甚至需要橫向捲動。

解決方法：
通過使用 @media 查詢來設置不同設備下的樣式。

設置 meta 標籤中的 viewport，確保頁面在各種設備上都能正確縮放。
<meta name="viewport" content="width=device-width, initial-scale=1.0">

並使用以下 CSS 來調整頁面結構：
@media screen and (max-width: 480px) {
  .container {
    padding: 1rem;
  }

  .card {
    margin-bottom: 1rem;
  }

  .item-title {
    font-size: 1em;
  }
}

3. 類別過濾選項無法正常重置
問題：
當用戶選擇類別進行過濾後，點擊重設按鈕時，篩選選項未能完全清除，仍然顯示已選擇的類別。

解決方法：
在重設按鈕的事件處理器中，確保所有過濾選項被設置為默認狀態。

使用 JavaScript 清空所有選項，並觸發一次過濾更新，這樣用戶可以看到所有項目。
const resetButton = document.getElementById('reset-btn');
resetButton.addEventListener('click', function() {
  // 重設所有過濾條件
  document.getElementById('category-filter').value = ''; // 清除類別選擇
  performSearch(''); // 重新載入所有項目
});

4. 影片嵌入無法自適應顯示大小
問題：
嵌入的 YouTube 影片在某些螢幕上顯示異常，未能自動調整大小，導致影片比例失真。

解決方法：
使用 iframe 的包裹元素來控制影片的大小，並使用 CSS 設置其為 16:9 的比例，這樣可以確保影片在各種螢幕上保持正確的比例。
.responsive-video {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  overflow: hidden;
  border-radius: 0.5rem;
  margin-top: 0.5rem;
}

.responsive-video iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

5. 重複項目顯示問題
問題：
某些項目顯示多次，這是因為在資料處理時未能正確過濾重複項目。

解決方法：
在資料處理階段，確保所有項目都經過去重處理。可以使用 JavaScript 中的 Set 或使用 filter 方法來過濾重複項目。
const uniqueItems = [...new Set(items.map(item => item.id))];
const filteredItems = items.filter(item => uniqueItems.includes(item.id));

6. 資料過濾功能未能支持多個條件組合
問題：
當用戶選擇多個過濾條件時，結果頁面未能正確顯示所有符合條件的項目。

解決方法：
在過濾邏輯中，確保將所有選擇的條件進行交集處理。這可以通過合併多個過濾條件來實現。
const filters = {
  category: selectedCategory,
  type: selectedType,
  bodyPart: selectedBodyPart,
};

const filteredResults = allItems.filter(item => 
  (!filters.category || item.category === filters.category) &&
  (!filters.type || item.type === filters.type) &&
  (!filters.bodyPart || item.bodyPart === filters.bodyPart)
);
