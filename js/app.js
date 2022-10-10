let randNum = 0;
let myaudio = new Audio();
const playlist = [
  {
    "id": "6-1",
    "path": "music/TH6_kou/01.mp3",
    "title": "赤より紅い夢"
  },
  {
    "id": "6-2",
    "path": "music/TH6_kou/02.mp3",
    "title": "ほおずきみたいに紅い魂"
  },
  {
    "id": "6-3",
    "path": "music/TH6_kou/03.mp3",
    "title": "妖魔夜行"
  },
  {
    "id": "6-4",
    "path": "music/TH6_kou/04.mp3",
    "title": "ルーネイトエルフ"
  },
  {
    "id": "6-5",
    "path": "music/TH6_kou/05.mp3",
    "title": "おてんば恋娘"
  },
  {
    "id": "6-6",
    "path": "music/TH6_kou/06.mp3",
    "title": "上海紅茶館 ~ Chinese Tea"
  },
  {
    "id": "6-7",
    "path": "music/TH6_kou/07.mp3",
    "title": "明治十七年の上海アリス"
  },
  {
    "id": "6-8",
    "path": "music/TH6_kou/08.mp3",
    "title": "ヴワル魔法図書館"
  },
  {
    "id": "6-9",
    "path": "music/TH6_kou/09.mp3",
    "title": "ラクトガール ~ 少女密室"
  },
  {
    "id": "6-10",
    "path": "music/TH6_kou/10.mp3",
    "title": "メイドと血の懐中時計"
  },
  {
    "id": "6-11",
    "path": "music/TH6_kou/11.mp3",
    "title": "月時計 ~ ルナ・ダイアル"
  },
  {
    "id": "6-12",
    "path": "music/TH6_kou/12.mp3",
    "title": "ツェペシュの幼き末裔"
  },
  {
    "id": "6-13",
    "path": "music/TH6_kou/13.mp3",
    "title": "亡き王女のためのセプテット"
  },
  {
    "id": "6-14",
    "path": "music/TH6_kou/14.mp3",
    "title": "魔法少女達の百年祭"
  },
  {
    "id": "6-15",
    "path": "music/TH6_kou/15.mp3",
    "title": "U.N.オーエンは彼女なのか？"
  },
  {
    "id": "6-16",
    "path": "music/TH6_kou/16.mp3",
    "title": "紅より儚い永遠"
  },
  {
    "id": "6-17",
    "path": "music/TH6_kou/17.mp3",
    "title": "紅楼 ~ Eastern Dream..."
  },

  {
    "id": "7-1",
    "path": "music/TH7_you/01.mp3",
    "title": "妖々夢 ~ Snow or Cherry Petal"
  },
  {
    "id": "7-2",
    "path": "music/TH7_you/02.mp3",
    "title": "無何有の郷 ~ Deep Mountain"
  },
  {
    "id": "7-3",
    "path": "music/TH7_you/03.mp3",
    "title": "クリスタライズシルバー"
  },
  {
    "id": "7-4",
    "path": "music/TH7_you/04.mp3",
    "title": "遠野幻想物語"
  },
  {
    "id": "7-5",
    "path": "music/TH7_you/05.mp3",
    "title": "ティアオイエツォン (withered leaf)"
  },
  {
    "id": "7-6",
    "path": "music/TH7_you/06.mp3",
    "title": "ブクレシュティの人形師"
  },
  {
    "id": "7-7",
    "path": "music/TH7_you/07.mp3",
    "title": "人形裁判 ~ 人の形弄びし少女"
  },
  {
    "id": "7-8",
    "path": "music/TH7_you/08.mp3",
    "title": "天空の花の都"
  },
  {
    "id": "7-9",
    "path": "music/TH7_you/09.mp3",
    "title": "幽霊楽団 ~ Phantom Ensemble"
  },
  {
    "id": "7-10",
    "path": "music/TH7_you/10.mp3",
    "title": "東方妖々夢 ~ Ancient Temple"
  },
  {
    "id": "7-11",
    "path": "music/TH7_you/11.mp3",
    "title": "広有射怪鳥事 ~ Till When?"
  },
  {
    "id": "7-12",
    "path": "music/TH7_you/12.mp3",
    "title": "アルティメットトゥルース"
  },
  {
    "id": "7-13",
    "path": "music/TH7_you/13.mp3",
    "title": "優雅に咲かせ、墨染の桜 ~ Border of Life"
  },
  {
    "id": "7-14",
    "path": "music/TH7_you/14.mp3",
    "title": "ボーダーオブライフ"
  },
  {
    "id": "7-15",
    "path": "music/TH7_you/15.mp3",
    "title": "妖々跋扈"
  },
  {
    "id": "7-16",
    "path": "music/TH7_you/16.mp3",
    "title": "少女幻葬 ~ Necro-Fantasy"
  },
  {
    "id": "7-17",
    "path": "music/TH7_you/17.mp3",
    "title": "妖々跋扈 ~ Who done it!"
  },
  {
    "id": "7-18",
    "path": "music/TH7_you/18.mp3",
    "title": "ネクロファンタジア"
  },
  {
    "id": "7-19",
    "path": "music/TH7_you/19.mp3",
    "title": "春風の夢"
  },
  {
    "id": "7-20",
    "path": "music/TH7_you/20.mp3",
    "title": "さくらさくら ~ Japanize Dream..."
  },

  {
    "id": "8-1",
    "path": "music/TH8_ei/01.mp3",
    "title": "永夜抄 ~ Eastern Night"
  },
  {
    "id": "8-2",
    "path": "music/TH8_ei/02.mp3",
    "title": "幻視の夜 ~ Ghostly Eyes"
  },
  {
    "id": "8-3",
    "path": "music/TH8_ei/03.mp3",
    "title": "蠢々秋月 ~ Mooned Insect"
  },
  {
    "id": "8-4",
    "path": "music/TH8_ei/04.mp3",
    "title": "夜雀の歌声 ~ Night Bird"
  },
  {
    "id": "8-5",
    "path": "music/TH8_ei/05.mp3",
    "title": "もう歌しか聞こえない"
  },
  {
    "id": "8-6",
    "path": "music/TH8_ei/06.mp3",
    "title": "懐かしき東方の血 ~ Old World"
  },
  {
    "id": "8-7",
    "path": "music/TH8_ei/07.mp3",
    "title": "プレインエイジア"
  },
  {
    "id": "8-8",
    "path": "music/TH8_ei/08.mp3",
    "title": "永夜の報い ~ Imperishable Night"
  },
  {
    "id": "8-9",
    "path": "music/TH8_ei/09.mp3",
    "title": "少女綺想曲 ~ Dream Battle"
  },
  {
    "id": "8-10",
    "path": "music/TH8_ei/10.mp3",
    "title": "恋色マスタースパーク"
  },
  {
    "id": "8-11",
    "path": "music/TH8_ei/11.mp3",
    "title": "シンデレラケージ ~ Kagome-Kagome"
  },
  {
    "id": "8-12",
    "path": "music/TH8_ei/12.mp3",
    "title": "狂気の瞳 ~ Invisible Full Moon"
  },
  {
    "id": "8-13",
    "path": "music/TH8_ei/13.mp3",
    "title": "ヴォヤージュ1969"
  },
  {
    "id": "8-14",
    "path": "music/TH8_ei/14.mp3",
    "title": "千年幻想郷 ~ History of the Moon"
  },
  {
    "id": "8-15",
    "path": "music/TH8_ei/15.mp3",
    "title": "竹取飛翔 ~ Lunatic Princess"
  },
  {
    "id": "8-16",
    "path": "music/TH8_ei/16.mp3",
    "title": "ヴォヤージュ1970"
  },
  {
    "id": "8-17",
    "path": "music/TH8_ei/17.mp3",
    "title": "エクステンドアッシュ ~ 蓬莱人"
  },
  {
    "id": "8-18",
    "path": "music/TH8_ei/18.mp3",
    "title": "月まで届け、不死の煙"
  },
  {
    "id": "8-19",
    "path": "music/TH8_ei/19.mp3",
    "title": "月見草"
  },
  {
    "id": "8-20",
    "path": "music/TH8_ei/20.mp3",
    "title": "Eternal Dream ~ 幽玄の槭樹"
  },
  {
    "id": "8-22",
    "path": "music/TH8_ei/22.mp3",
    "title": "東方妖怪小町"
  }
];
function randomplay(list) {
  randNum = Math.floor(Math.random() * list.length);
  myaudio.src = list[randNum].path;
  myaudio.play();
  // document.getElementById('playing').textContent = "【再生中】" + list[randNum].title;
};
function judge(id) {
  if(id == playlist[randNum].id){
    alert('OK');
  }
  else {
    alert('ちがう');
  }
};