// app.js

// 假資料（先放 3 筆做測試，稍後再補到 20 筆）
let items = [
    {
      title: '下犬式', // 動作名稱
      level: '初階',   // 難度
      benefits: '伸展脊柱，舒緩壓力', // 效果
      caution: '避免過度拉伸', // 注意事項
      imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/gettyimages-1066259462-665f07385f296.jpg?crop=1.00xw:0.755xh;0,0&resize=1200:*', // 圖片
      videoUrl: 'https://www.youtube.com/embed/YwFOL6vFfhE', // 影片
      category: '伸展', // 分類
      tags: ['伸展', '基礎'], // 標籤
    },
    {
      title: '戰士二式',
      level: '中階',
      benefits: '增強腿部力量，開展胸部',
      caution: '保持背部直線',
      imageUrl: 'images/warrior-2.jpg',
      videoUrl: 'https://www.youtube.com/embed/someotherid',
      category: '力量',
      tags: ['力量', '中階'],
    },
    // 更多動作
  ];
  
    {
      title: '下犬式',
      difficulty: '初學者',
      effect: '伸展背部與腿部',
      caution: '避免膝蓋有傷者使用',
      category: '放鬆',
      imageUrl: 'https://via.placeholder.com/400x300?text=下犬式',
      videoUrl: 'https://www.youtube.com/embed/0Fx2vUOMd90',
    },
    {
      title: '戰士二式',
      difficulty: '進階',
      effect: '強化腿部與核心肌群',
      caution: '保持膝蓋對齊腳尖',
      category: '進階',
      imageUrl: 'https://via.placeholder.com/400x300?text=戰士二式',
      videoUrl: 'https://www.youtube.com/embed/YXrNKNZxWz8',
    },
    {
      title: '嬰兒式',
      difficulty: '初學者',
      effect: '放鬆下背與情緒',
      caution: '避免膝蓋不適者使用',
      category: '放鬆',
      imageUrl: 'https://via.placeholder.com/400x300?text=嬰兒式',
      videoUrl: 'https://www.youtube.com/embed/7kgZnJqzNaU',
    },
  ];
  
  // 初始化與更新清單
  function updateList() {
    const list = document.querySelector('ion-list');
    list.innerHTML = ''; // 清空列表內容
    
    items.forEach(item => {
      const ionItem = document.createElement('ion-item');
      ionItem.innerHTML = `
        <div class="item-content">
          <!-- 標題：最重要信息 -->
          <div class="item-title" style="font-size: 1.5em; font-weight: bold;">${item.title}</div>
  
          <!-- 顯示難度，使用較小字體 -->
          <div class="item-subtitle" style="font-size: 1.1em; color: var(--ion-color-medium);">難度：${item.level}</div>
          
          <!-- 顯示效果與注意事項 -->
          <div class="item-details" style="font-size: 1em; margin-top: 0.5rem;">
            <strong>效果：</strong>${item.benefits}<br>
            <strong>注意事項：</strong>${item.caution}
          </div>
  
          <!-- 圖片：動作的實際圖片 -->
          <img src="${item.imageUrl}" alt="${item.title}" style="width: 100%; max-width: 300px; margin-top: 0.5rem; border-radius: 8px;" />
  
          <!-- 影片：用於教學 -->
          <div style="margin-top: 1rem;">
            <iframe width="100%" height="200" src="${item.videoUrl}" frameborder="0" allowfullscreen></iframe>
          </div>
  
          <!-- 標籤：分類，使用較小字體 -->
          <div class="tag-container" style="margin-top: 1rem; display: flex; flex-wrap: wrap; gap: 0.5rem;">
            <ion-chip size="small" color="primary">${item.category}</ion-chip>
            ${item.tags.map(tag => `<ion-chip size="small">${tag}</ion-chip>`).join('')}
          </div>
        </div>
      `;
      list.appendChild(ionItem); // 將每個項目加入清單
    });
  }
  
  
  
  // 搜尋與分類功能
  document.getElementById('searchbar').addEventListener('ionInput', updateList);
  document.getElementById('categorySelect').addEventListener('ionChange', updateList);
  
  // 頁面載入時顯示全部
  window.addEventListener('load', updateList);
  