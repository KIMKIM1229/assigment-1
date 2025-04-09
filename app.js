const items = [
  {
    "title": "下犬式",
    "level": "中階",
    "benefits": "伸展脊椎、腿後肌群，強化肩膀、腕部力量",
    "caution": "有肩膀、脊椎、腿部傷痛者應謹慎練習",
    "practiceNote": "腿部保持平衡，慢慢放開，避免強迫雙腿完全伸直，根據自己的靈活度進行調整",
    "category": "中階",
    "tags": ["腿部", "背部", "肩部"],
    "imageUrl": "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1066259462-665f07385f296.jpg?crop=1.00xw:0.755xh;0,0&resize=1200:*",
    "videoUrl": "https://www.youtube.com/watch?v=YwFOL6vFfhE"
  },
  {
    "title": "山式",
    "level": "初階",
    "benefits": "改善姿勢、減少背部疼痛",
    "caution": "坐骨神經痛、或骶骨有病變的人謹慎練習",
    "category": "初學者",
    "tags": ["腿部", "臀腿肌"],
    "imageUrl": "https://www.myprotein.cn/images?url=https://blogscdn.thehut.net/app/uploads/sites/496/2020/09/iStock-664637374opt_blog_1594303946_1599036799.jpg&format=webp&auto=avif&width=750&height=500&fit=crop",
    "videoUrl": "https://www.youtube.com/watch?v=oZPIr7HTmtc"
  },
  {
    "title": "戰士二式",
    "level": "中階",
    "benefits": "強化腿部、提升穩定性",
    "caution": "膝蓋問題請注意角度",
    "category": "中階",
    "tags": ["腿部", "核心"],
    "imageUrl": "https://via.placeholder.com/300x300?text=Warrior+II",
    "videoUrl": "https://www.youtube.com/watch?v=u1a8ICIQS90"
  },
  {
    "title": "樹式",
    "level": "初階",
    "benefits": "提升平衡感與專注力",
    "caution": "避免站不穩時跌倒",
    "category": "初學者",
    "tags": ["平衡", "集中"],
    "imageUrl": "https://via.placeholder.com/300x300?text=Tree+Pose",
    "videoUrl": "https://www.youtube.com/watch?v=s8n-IU7e1V4"
  },
  {
    "title": "眼鏡蛇式",
    "level": "初階",
    "benefits": "強化脊椎、舒緩背痛",
    "caution": "避免腰椎受傷者使用",
    "category": "初學者",
    "tags": ["背部", "柔軟度"],
    "imageUrl": "https://via.placeholder.com/300x300?text=Cobra+Pose",
    "videoUrl": "https://www.youtube.com/watch?v=3A6OeM8t2ac"
  }
];

let searchKeyword = '';
let selectedCategory = '';
let selectedLevel = '';

function extractYouTubeID(url) {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/);
  return match ? match[1] : '';
}

function updateList() {
  const list = document.getElementById('poseList');
  list.innerHTML = '';

  const filteredItems = items.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchKeyword) || item.benefits.toLowerCase().includes(searchKeyword);
    const matchesCategory = selectedCategory ? item.category === selectedCategory : true;

    return matchesSearch && matchesCategory;
  });

  filteredItems.forEach(item => {
    const ionItem = document.createElement('ion-item');
    ionItem.innerHTML = `
      <div class="item-content">
        <div class="item-title">${item.title}</div>
        <div class="item-subtitle">難度：${item.level}</div>
        <div class="item-details">
          效果：${item.benefits}
        </div>
        <div class="caution-details">
          練習時建議：${item.practiceNote}
        </div>
        <div class="caution-details" style="color: red;">
          注意: ${item.caution}
        </div>
        <img src="${item.imageUrl}" alt="${item.title}" />
        <iframe src="https://www.youtube.com/embed/${extractYouTubeID(item.videoUrl)}" frameborder="0" allowfullscreen></iframe>
        <div class="tag-container">
          <ion-chip color="primary">${item.category}</ion-chip>
          ${item.tags.map(tag => `<ion-chip>${tag}</ion-chip>`).join('')}
        </div>
      </div>
    `;
    list.appendChild(ionItem);
  });
}


document.getElementById('searchBar').addEventListener('ionInput', e => {
  searchKeyword = e.target.value.toLowerCase();
  updateList();
});

document.getElementById('categorySelect').addEventListener('ionChange', e => {
  selectedCategory = e.target.value;
  updateList();
});

document.addEventListener('DOMContentLoaded', updateList);

document.querySelectorAll('#categoryButtons ion-button').forEach(button => {
  button.addEventListener('click', () => {
    selectedCategory = button.value;
    updateList();

    // Highlight active button
    document.querySelectorAll('#categoryButtons ion-button').forEach(btn => btn.removeAttribute('color'));
    button.setAttribute('color', 'primary');
  });
});

document.querySelectorAll('#categoryButtons ion-button').forEach(button => {
  button.addEventListener('click', () => {
    selectedCategory = button.value;
    updateList();

    // 將所有按鈕都重設為 outline
    document.querySelectorAll('#categoryButtons ion-button').forEach(btn => {
      btn.setAttribute('fill', 'outline');
      btn.removeAttribute('color');
    });

    // 將被選中的按鈕 set 做填滿 + primary 色
    button.setAttribute('fill', 'solid');
    button.setAttribute('color', 'primary');
  });
});
