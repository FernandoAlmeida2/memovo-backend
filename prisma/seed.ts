import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.category.createMany({
    data: [
      {
        name: "Verbs",
      },
      {
        name: "Numbers",
      },
      {
        name: "Nouns",
      },
      {
        name: "Measure words",
      },
      {
        name: "Idiomatic expressions",
      },
      {
        name: "Adverbs",
      },
      {
        name: "Adjectives",
      },
      {
        name: "Particles",
      },
      {
        name: "Pronouns",
      },
      {
        name: "Conjunctions",
      },
    ],
  });

  await prisma.card.createMany({
    data: [
      {
        categoryId: 1,
        hanzi: "爱",
        pinyin: "ài",
        videoId: "LNo5M_2ybC4",
      },
      {
        categoryId: 2,
        hanzi: "八",
        pinyin: "bā",
        videoId: "gOwlDvTFCH8",
      },
      {
        categoryId: 3,
        hanzi: "爸爸",
        pinyin: "bà ba",
        videoId: "fBbS3I_I6VM",
      },
      {
        categoryId: 3,
        hanzi: "杯子",
        pinyin: "bēi zi",
        videoId: "-Gzlq8c4EW8",
      },
      {
        categoryId: 3,
        hanzi: "北京",
        pinyin: "Běi jīng",
        videoId: "qru2b45eo_8",
      },
      {
        categoryId: 4,
        hanzi: "本",
        pinyin: "běn",
        videoId: "QGY2O8OpVGo",
      },
      {
        categoryId: 5,
        hanzi: "不客气",
        pinyin: "bù kè qi",
        videoId: "5uNMCGf06l8",
      },
      {
        categoryId: 6,
        hanzi: "不",
        pinyin: "bù",
        videoId: "gOwlDvTFCH8",
      },
      {
        categoryId: 3,
        hanzi: "菜",
        pinyin: "cài",
        videoId: "weA-M7ghTqQ",
      },
      {
        categoryId: 3,
        hanzi: "茶",
        pinyin: "chá",
        videoId: "jw8OPuOFAqI",
      },
      {
        categoryId: 1,
        hanzi: "吃",
        pinyin: "chī",
        videoId: "r_cSMTc8Fws",
      },
      {
        categoryId: 3,
        hanzi: "出租车",
        pinyin: "chū zū chē",
        videoId: "7aW7kJs81cs",
      },
      {
        categoryId: 1,
        hanzi: "打电话",
        pinyin: "dǎ diàn huà",
        videoId: "wghNyairZjI",
      },
      {
        categoryId: 7,
        hanzi: "大",
        pinyin: "dà",
        videoId: "wAs9u0T1izo",
      },
      {
        categoryId: 8,
        hanzi: "的",
        pinyin: "de",
        videoId: "xOKrN5I8QJw",
      },
      {
        categoryId: 3,
        hanzi: "点",
        pinyin: "diǎn",
        videoId: "ubmksV_2oHY",
      },
      {
        categoryId: 3,
        hanzi: "电脑",
        pinyin: "diàn nǎo",
        videoId: "HyccVg0Di8k",
      },
      {
        categoryId: 3,
        hanzi: "电视",
        pinyin: "diàn shì",
        videoId: "-Do6kYnG_R4",
      },
      {
        categoryId: 3,
        hanzi: "电影",
        pinyin: "diàn yǐng",
        videoId: "KD6z3Pem1gE",
      },
      {
        categoryId: 3,
        hanzi: "东西",
        pinyin: "dōng xi",
        videoId: "-NAaUGzAFAI",
      },
      {
        categoryId: 6,
        hanzi: "都",
        pinyin: "dōu",
        videoId: "IY-_Gtt7SEA",
      },
      {
        categoryId: 1,
        hanzi: "读",
        pinyin: "dú",
        videoId: "XyovbG8yNxE",
      },
      {
        categoryId: 5,
        hanzi: "对不起",
        pinyin: "duì bu qǐ",
        videoId: "Nd-yR2c7OJ4",
      },
      {
        categoryId: 7,
        hanzi: "多",
        pinyin: "duō",
        videoId: "6hS9tgS6VmI",
      },
      {
        categoryId: 9,
        hanzi: "多少",
        pinyin: "duō shao",
        videoId: "ELwt0Dhasko",
      },
      {
        categoryId: 3,
        hanzi: "儿子",
        pinyin: "ér zi",
        videoId: "w9bhUTj4-II",
      },
      {
        categoryId: 2,
        hanzi: "二",
        pinyin: "èr",
        videoId: "W7w3DhQlBIY",
      },
      {
        categoryId: 3,
        hanzi: "饭店",
        pinyin: "fàn diàn",
        videoId: "h3Pw-bkjuUU",
      },
      {
        categoryId: 3,
        hanzi: "飞机",
        pinyin: "fēi jī",
        videoId: "wNX-1La1cZk",
      },
      {
        categoryId: 3,
        hanzi: "分钟",
        pinyin: "fēn zhōng",
        videoId: "1U1MJTXM7rI",
      },
      {
        categoryId: 7,
        hanzi: "高兴",
        pinyin: "gāo xìng",
        videoId: "PJfF0PQYF60",
      },
      {
        categoryId: 4,
        hanzi: "个",
        pinyin: "gè",
        videoId: "zwM7wL9mEaE",
      },
      {
        categoryId: 1,
        hanzi: "工作",
        pinyin: "gōng zuò",
        videoId: "zwM7wL9mEaE",
      },
      {
        categoryId: 3,
        hanzi: "狗",
        pinyin: "gǒu",
        videoId: "W48esme5d1w",
      },
      {
        categoryId: 3,
        hanzi: "汉语",
        pinyin: "Hàn yǔ",
        videoId: "GVk-MzjGZB4",
      },
      {
        categoryId: 7,
        hanzi: "好",
        pinyin: "hǎo",
        videoId: "T5uS6YegONE",
      },
      {
        categoryId: 1,
        hanzi: "喝",
        pinyin: "hē",
        videoId: "I2MtF6tB4Nk",
      },
      {
        categoryId: 10,
        hanzi: "和",
        pinyin: "hé",
        videoId: "2FiEXjzteLQ",
      },
      {
        categoryId: 6,
        hanzi: "很",
        pinyin: "hěn",
        videoId: "L_jzdva8UQg",
      },
      {
        categoryId: 3,
        hanzi: "后面",
        pinyin: "hòu mian",
        videoId: "296cv8xG7ig",
      },
      {
        categoryId: 1,
        hanzi: "回",
        pinyin: "huí",
        videoId: "domZguph3l0",
      },
      {
        categoryId: 1,
        hanzi: "会",
        pinyin: "huì",
        videoId: "a4hOZvooqlA",
      },
      {
        categoryId: 3,
        hanzi: "火车站",
        pinyin: "huǒ chē zhàn",
        videoId: "q4lGKN97Rwo",
      },
      {
        categoryId: 9,
        hanzi: "几",
        pinyin: "jǐ",
        videoId: "Ab-LUigLJ6A",
      },
      {
        categoryId: 3,
        hanzi: "家",
        pinyin: "jiā",
        videoId: "ngflKI7rPvo",
      },
      {
        categoryId: 1,
        hanzi: "叫",
        pinyin: "jiào",
        videoId: "X-GWTZOu8ns",
      },
      {
        categoryId: 3,
        hanzi: "今天",
        pinyin: "jīn tiān",
        videoId: "SPhsdFNIR9c",
      },
      {
        categoryId: 2,
        hanzi: "九",
        pinyin: "jiǔ",
        videoId: "BD_9G-rbKgY",
      },
      {
        categoryId: 1,
        hanzi: "开",
        pinyin: "kāi",
        videoId: "HiXeB8k03eU",
      },
      {
        categoryId: 1,
        hanzi: "看",
        pinyin: "kàn",
        videoId: "JKxnz5Uvn20",
      },
      {
        categoryId: 1,
        hanzi: "看见",
        pinyin: "kàn jiàn",
        videoId: "TlGGLJDC6As",
      },
      {
        categoryId: 4,
        hanzi: "块",
        pinyin: "kuài",
        videoId: "pNeXysYCUcI",
      },
      {
        categoryId: 1,
        hanzi: "来",
        pinyin: "lái",
        videoId: "WZdM71nNOuE",
      },
      {
        categoryId: 3,
        hanzi: "老师",
        pinyin: "lǎo shī",
        videoId: "PLe7X0Qklrc",
      },
      {
        categoryId: 8,
        hanzi: "了",
        pinyin: "le",
        videoId: "v6eEwc26NQ8",
      },
      {
        categoryId: 7,
        hanzi: "冷",
        pinyin: "lěng",
        videoId: "rX0A6nLL5sI",
      },
      {
        categoryId: 3,
        hanzi: "里",
        pinyin: "lǐ",
        videoId: "NbxJKLxoIOw",
      },
      {
        categoryId: 2,
        hanzi: "零",
        pinyin: "líng",
        videoId: "BeU438veSLM",
      },
      {
        categoryId: 2,
        hanzi: "六",
        pinyin: "liù",
        videoId: "SdfSCfDG4XI",
      },
      {
        categoryId: 3,
        hanzi: "妈妈",
        pinyin: "mā ma",
        videoId: "VpgXOERPz_g",
      },
      {
        categoryId: 8,
        hanzi: "吗",
        pinyin: "ma",
        videoId: "IJaDxOIi5Ek",
      },
      {
        categoryId: 1,
        hanzi: "买",
        pinyin: "mǎi",
        videoId: "NGUxQn5OIPs",
      },
      {
        categoryId: 3,
        hanzi: "猫",
        pinyin: "māo",
        videoId: "qqI1ZFnysDA",
      },
      {
        categoryId: 6,
        hanzi: "没",
        pinyin: "méi",
        videoId: "zZc6JJZHERE",
      },
      {
        categoryId: 5,
        hanzi: "没关系",
        pinyin: "méi guān xi",
        videoId: "yTOag8g038s",
      },
      {
        categoryId: 3,
        hanzi: "米饭",
        pinyin: "mǐ fàn",
        videoId: "5pKBNv0iNsM",
      },
      {
        categoryId: 3,
        hanzi: "明天",
        pinyin: "míng tiān",
        videoId: "Ciqf9yjwp4U",
      },
      {
        categoryId: 3,
        hanzi: "名字",
        pinyin: "míng zi",
        videoId: "CsAw7jspbSI",
      },
      {
        categoryId: 9,
        hanzi: "哪",
        pinyin: "nǎ",
        videoId: "6yN3lbdZJ9Y",
      },
      {
        categoryId: 9,
        hanzi: "那",
        pinyin: "nà",
        videoId: "M2_mO1mJqLY",
      },
      {
        categoryId: 8,
        hanzi: "呢",
        pinyin: "ne",
        videoId: "BheH65xmpzQ",
      },
      {
        categoryId: 1,
        hanzi: "能",
        pinyin: "néng",
        videoId: "gKvkDXN67FY",
      },
      {
        categoryId: 9,
        hanzi: "你",
        pinyin: "nǐ",
        videoId: "P5QwzaDB2Qo",
      },
      {
        categoryId: 3,
        hanzi: "年",
        pinyin: "nián",
        videoId: "0HIM79ThOfg",
      },
      {
        categoryId: 3,
        hanzi: "女儿",
        pinyin: "nǚ ér",
        videoId: "aL-Mvxz4xUw",
      },
      {
        categoryId: 3,
        hanzi: "朋友",
        pinyin: "péng you",
        videoId: "N1ABdvONU-4",
      },
      {
        categoryId: 7,
        hanzi: "漂亮",
        pinyin: "piào liang",
        videoId: "vGnnnUIxfHQ",
      },
      {
        categoryId: 3,
        hanzi: "苹果",
        pinyin: "píng guǒ",
        videoId: "VSEUjz7-LAQ",
      },
      {
        categoryId: 2,
        hanzi: "七",
        pinyin: "qī",
        videoId: "WUFAOaF9eqQ",
      },
      {
        categoryId: 3,
        hanzi: "钱",
        pinyin: "qián",
        videoId: "AAmJ8N5Qrqc",
      },
      {
        categoryId: 3,
        hanzi: "前面",
        pinyin: "qián miàn",
        videoId: "ta1Ey7ROCTA",
      },
      {
        categoryId: 5,
        hanzi: "请",
        pinyin: "qǐng",
        videoId: "llzX67EdiAI",
      },
      {
        categoryId: 1,
        hanzi: "去",
        pinyin: "qù",
        videoId: "ZUcLAwL8mR8",
      },
      {
        categoryId: 7,
        hanzi: "热",
        pinyin: "rè",
        videoId: "5LYysMIUVSc",
      },
      {
        categoryId: 3,
        hanzi: "人",
        pinyin: "rén",
        videoId: "GfD8SSmCjzE",
      },
      {
        categoryId: 1,
        hanzi: "认识",
        pinyin: "rèn shi",
        videoId: "3n_ou3GltSY",
      },
      {
        categoryId: 3,
        hanzi: "日",
        pinyin: "rì",
        videoId: "tLIBOO1Coqw",
      },
      {
        categoryId: 2,
        hanzi: "三",
        pinyin: "sān",
        videoId: "f2WfICgFJnk",
      },
      {
        categoryId: 3,
        hanzi: "商店",
        pinyin: "shāng diàn",
        videoId: "i6YT1LGcyaI",
      },
      {
        categoryId: 3,
        hanzi: "上",
        pinyin: "shàng",
        videoId: "Lc48U66M3yA",
      },
      {
        categoryId: 3,
        hanzi: "上午",
        pinyin: "shàng wǔ",
        videoId: "AkKxnvAj-eE",
      },
      {
        categoryId: 7,
        hanzi: "少",
        pinyin: "shǎo",
        videoId: "8YTRUR49bFY",
      },
      {
        categoryId: 9,
        hanzi: "谁",
        pinyin: "shéi",
        videoId: "OFM3XgSnH0w",
      },
      {
        categoryId: 9,
        hanzi: "什么",
        pinyin: "shén me",
        videoId: "8oiZGbYrkJg",
      },
      {
        categoryId: 2,
        hanzi: "十",
        pinyin: "shí",
        videoId: "HZpycZKk7ng",
      },
      {
        categoryId: 3,
        hanzi: "时候",
        pinyin: "shí hou",
        videoId: "cfqQR3dWfMM",
      },
      {
        categoryId: 1,
        hanzi: "是",
        pinyin: "shì",
        videoId: "1g9fcimzjMc",
      },
      {
        categoryId: 3,
        hanzi: "书",
        pinyin: "shū",
        videoId: "nfIBl73m2CA",
      },
      {
        categoryId: 3,
        hanzi: "水",
        pinyin: "shuǐ",
        videoId: "Xz2PUOq2IqQ",
      },
      {
        categoryId: 3,
        hanzi: "水果",
        pinyin: "shuǐ guǒ",
        videoId: "C8WdwyhlOCQ",
      },
      {
        categoryId: 1,
        hanzi: "睡觉",
        pinyin: "shuì jiào",
        videoId: "uTfZHd8qbPE",
      },
      {
        categoryId: 1,
        hanzi: "说话",
        pinyin: "shuō huà",
        videoId: "R9a-IfhOudk",
      },
      {
        categoryId: 2,
        hanzi: "四",
        pinyin: "sì",
        videoId: "Dk2KGhrUaO8",
      },
      {
        categoryId: 4,
        hanzi: "岁",
        pinyin: "suì",
        videoId: "x_JQuY1w0Ts",
      },
      {
        categoryId: 9,
        hanzi: "他",
        pinyin: "tā",
        videoId: "Xvx29mX9wjg",
      },
      {
        categoryId: 9,
        hanzi: "她",
        pinyin: "tā",
        videoId: "qXv15j7HcTc",
      },
      {
        categoryId: 6,
        hanzi: "太",
        pinyin: "tài",
        videoId: "KkpFa-a28Xo",
      },
      {
        categoryId: 3,
        hanzi: "天气",
        pinyin: "tiān qì",
        videoId: "EMM4zJ_v8tg",
      },
      {
        categoryId: 1,
        hanzi: "听",
        pinyin: "tīng",
        videoId: "k2Bmmwu7UBY",
      },
      {
        categoryId: 3,
        hanzi: "同学",
        pinyin: "tóng xué",
        videoId: "6ARElR3D9CU",
      },
      {
        categoryId: 5,
        hanzi: "喂",
        pinyin: "wèi",
        videoId: "tTIrwKPhF_E",
      },
      {
        categoryId: 9,
        hanzi: "我",
        pinyin: "wǒ",
        videoId: "88c3jmFAQZ8",
      },
      {
        categoryId: 9,
        hanzi: "我们",
        pinyin: "wǒ men",
        videoId: "MYVD1142e7U",
      },
      {
        categoryId: 2,
        hanzi: "五",
        pinyin: "wǔ",
        videoId: "i88RJ5FvGqg",
      },
      {
        categoryId: 1,
        hanzi: "喜欢",
        pinyin: "xǐ huan",
        videoId: "yR_ZpJxvulE",
      },
      {
        categoryId: 3,
        hanzi: "下",
        pinyin: "xià",
        videoId: "vr2dz-evBF8",
      },
      {
        categoryId: 3,
        hanzi: "下午",
        pinyin: "xià wǔ",
        videoId: "9FillRTOFMw",
      },
      {
        categoryId: 1,
        hanzi: "下雨",
        pinyin: "xià yǔ",
        videoId: "uhQaC8pMfKw",
      },
      {
        categoryId: 3,
        hanzi: "先生",
        pinyin: "xiān sheng",
        videoId: "21fJUNg4EHo",
      },
      {
        categoryId: 3,
        hanzi: "现在",
        pinyin: "xiàn zài",
        videoId: "RrtJ3qBJHEg",
      },
      {
        categoryId: 1,
        hanzi: "想",
        pinyin: "xiǎng",
        videoId: "3KUGDl8lpGA",
      },
      {
        categoryId: 7,
        hanzi: "小",
        pinyin: "xiǎo",
        videoId: "ZXd-yZSZwsk",
      },
      {
        categoryId: 3,
        hanzi: "小姐",
        pinyin: "xiǎo jie",
        videoId: "dMV9V2P8ga8",
      },
      {
        categoryId: 4,
        hanzi: "些",
        pinyin: "xiē",
        videoId: "A1G0M8FYNdw",
      },
      {
        categoryId: 1,
        hanzi: "写",
        pinyin: "xiě",
        videoId: "RMNjQjGLxn8",
      },
      {
        categoryId: 5,
        hanzi: "谢谢",
        pinyin: "xiè xie",
        videoId: "V0946GQhEc4",
      },
      {
        categoryId: 3,
        hanzi: "星期",
        pinyin: "xīng qī",
        videoId: "gsfxNSDmODU",
      },
      {
        categoryId: 3,
        hanzi: "学生",
        pinyin: "xué sheng",
        videoId: "4RB0A9adKvc",
      },
      {
        categoryId: 1,
        hanzi: "学习",
        pinyin: "xué xí",
        videoId: "G6qzZWtM-o4",
      },
      {
        categoryId: 3,
        hanzi: "学校",
        pinyin: "xué xiào",
        videoId: "Z42U38WnePE",
      },
      {
        categoryId: 2,
        hanzi: "一",
        pinyin: "yī",
        videoId: "ru3TFJFTpxk",
      },
      {
        categoryId: 3,
        hanzi: "衣服",
        pinyin: "yī fu",
        videoId: "Jmtg6JpoGh0",
      },
      {
        categoryId: 3,
        hanzi: "医生",
        pinyin: "yī shēng",
        videoId: "8Rfi1KMwndI",
      },
      {
        categoryId: 3,
        hanzi: "医院",
        pinyin: "yī yuàn",
        videoId: "O1HBx4q7wfI",
      },
      {
        categoryId: 3,
        hanzi: "椅子",
        pinyin: "yǐ zi",
        videoId: "zZKVGiXgoZ8",
      },
      {
        categoryId: 1,
        hanzi: "有",
        pinyin: "yǒu",
        videoId: "3qfGkstbPJ8",
      },
      {
        categoryId: 3,
        hanzi: "月",
        pinyin: "yuè",
        videoId: "TJyRMyXS7Hk",
      },
      {
        categoryId: 1,
        hanzi: "在",
        pinyin: "zài",
        videoId: "39hqbFZb8f4",
      },
      {
        categoryId: 5,
        hanzi: "再见",
        pinyin: "zài jiàn",
        videoId: "L1OMx9Hf0H4",
      },
      {
        categoryId: 9,
        hanzi: "怎么",
        pinyin: "zěn me",
        videoId: "DKIKGt5SoNc",
      },
      {
        categoryId: 9,
        hanzi: "怎么样",
        pinyin: "zěn me yàng",
        videoId: "6pfXg8Fwh00",
      },
      {
        categoryId: 9,
        hanzi: "这",
        pinyin: "zhè",
        videoId: "pNxbe8XofVQ",
      },
      {
        categoryId: 3,
        hanzi: "中国",
        pinyin: "Zhōng guó",
        videoId: "Kd2tAh2Pr_8",
      },
      {
        categoryId: 3,
        hanzi: "中午",
        pinyin: "zhōng wǔ",
        videoId: "cJcWpiRfKLQ",
      },
      {
        categoryId: 1,
        hanzi: "住",
        pinyin: "zhù",
        videoId: "TNnwdVkqKdM",
      },
      {
        categoryId: 3,
        hanzi: "桌子",
        pinyin: "zhuō zi",
        videoId: "MGYZYyrUFfw",
      },
      {
        categoryId: 3,
        hanzi: "字",
        pinyin: "zì",
        videoId: "RJ79_yQ8RGs",
      },
      {
        categoryId: 3,
        hanzi: "昨天",
        pinyin: "zuó tiān",
        videoId: "i7ZFDoHwOKU",
      },
      {
        categoryId: 1,
        hanzi: "坐",
        pinyin: "zuò",
        videoId: "i1T5lXtDSNA",
      },
      {
        categoryId: 1,
        hanzi: "做",
        pinyin: "zuò",
        videoId: "b4f_XLN9ZOE",
      },
    ],
  });

  await prisma.translation.createMany({
    data: [
      {
        cardId: 1,
        translation: "to love",
      },
      {
        cardId: 1,
        translation: "affection",
      },
      {
        cardId: 1,
        translation: "to be fond of",
      },
      {
        cardId: 1,
        translation: "to like",
      },
      {
        cardId: 2,
        translation: "eight",
      },
      {
        cardId: 2,
        translation: "8",
      },
      {
        cardId: 3,
        translation: "(informal) father",
      },
      {
        cardId: 3,
        translation: "CL:個|个",
      },
      {
        cardId: 3,
        translation: "位[wèi]",
      },
      {
        cardId: 4,
        translation: "cup",
      },
      {
        cardId: 4,
        translation: "glass",
      },
      {
        cardId: 4,
        translation: "CL:個|个",
      },
      {
        cardId: 4,
        translation: "支",
      },
      {
        cardId: 4,
        translation: "枝[zhī]",
      },
      {
        cardId: 5,
        translation: "Beijing",
      },
      {
        cardId: 5,
        translation: "capital of People's Republic of China",
      },
      {
        cardId: 5,
        translation: "Peking",
      },
      {
        cardId: 5,
        translation: "PRC government",
      },
      {
        cardId: 6,
        translation: "roots or stems of plants",
      },
      {
        cardId: 6,
        translation: "origin",
      },
      {
        cardId: 6,
        translation: "source",
      },
      {
        cardId: 6,
        translation: "this",
      },
      {
        cardId: 6,
        translation: "the current",
      },
      {
        cardId: 6,
        translation: "root",
      },
      {
        cardId: 6,
        translation: "foundation",
      },
      {
        cardId: 6,
        translation: "basis",
      },
      {
        cardId: 6,
        translation: "classifier for books",
      },
      {
        cardId: 6,
        translation: "periodicals",
      },
      {
        cardId: 6,
        translation: "files etc",
      },
      {
        cardId: 6,
        translation: "originally",
      },
      {
        cardId: 7,
        translation: "you're welcome",
      },
      {
        cardId: 7,
        translation: "impolite",
      },
      {
        cardId: 7,
        translation: "rude",
      },
      {
        cardId: 7,
        translation: "blunt",
      },
      {
        cardId: 7,
        translation: "don't mention it",
      },
      {
        cardId: 8,
        translation: "(negative prefix)",
      },
      {
        cardId: 8,
        translation: "not",
      },
      {
        cardId: 8,
        translation: "no",
      },
      {
        cardId: 9,
        translation: "dish (type of food)",
      },
      {
        cardId: 9,
        translation: "vegetables",
      },
      {
        cardId: 9,
        translation: "vegetable",
      },
      {
        cardId: 9,
        translation: "cuisine",
      },
      {
        cardId: 9,
        translation: "CL:盤|盘",
      },
      {
        cardId: 9,
        translation: "道[dào]",
      },
      {
        cardId: 10,
        translation: "tea",
      },
      {
        cardId: 10,
        translation: "tea plant",
      },
      {
        cardId: 10,
        translation: "CL:杯",
      },
      {
        cardId: 10,
        translation: "壺|壶[hú]",
      },
      {
        cardId: 11,
        translation: "to eat",
      },
      {
        cardId: 11,
        translation: "to consume",
      },
      {
        cardId: 11,
        translation: "to eat at (a cafeteria etc)",
      },
      {
        cardId: 11,
        translation: "to eradicate",
      },
      {
        cardId: 11,
        translation: "to destroy",
      },
      {
        cardId: 11,
        translation: "to absorb",
      },
      {
        cardId: 11,
        translation: "to suffer",
      },
      {
        cardId: 12,
        translation: "taxi",
      },
      {
        cardId: 12,
        translation: "(Taiwan) rental car",
      },
      {
        cardId: 13,
        translation: "to make a telephone call",
      },
      {
        cardId: 14,
        translation: "big",
      },
      {
        cardId: 14,
        translation: "huge",
      },
      {
        cardId: 14,
        translation: "large",
      },
      {
        cardId: 14,
        translation: "major",
      },
      {
        cardId: 14,
        translation: "great",
      },
      {
        cardId: 14,
        translation: "wide",
      },
      {
        cardId: 14,
        translation: "deep",
      },
      {
        cardId: 14,
        translation: "oldest",
      },
      {
        cardId: 14,
        translation: "eldest",
      },
      {
        cardId: 15,
        translation: "of",
      },
      {
        cardId: 15,
        translation: "~'s (possessive particle)",
      },
      {
        cardId: 15,
        translation: "(used after an attribute)",
      },
      {
        cardId: 15,
        translation: "(used to form a nominal expression)",
      },
      {
        cardId: 15,
        translation: "(used at the end of a declarative sentence for emphasis)",
      },
      {
        cardId: 16,
        translation: "point",
      },
      {
        cardId: 16,
        translation: "dot",
      },
      {
        cardId: 16,
        translation: "drop",
      },
      {
        cardId: 16,
        translation: "speck",
      },
      {
        cardId: 16,
        translation: "o'clock",
      },
      {
        cardId: 16,
        translation: "point (in space or time)",
      },
      {
        cardId: 16,
        translation: "to draw a dot",
      },
      {
        cardId: 16,
        translation: "to check on a list",
      },
      {
        cardId: 16,
        translation: "to choose",
      },
      {
        cardId: 16,
        translation: "to order (food in a restaurant)",
      },
      {
        cardId: 16,
        translation: "to touch briefly",
      },
      {
        cardId: 16,
        translation: "to hint",
      },
      {
        cardId: 16,
        translation: "to light",
      },
      {
        cardId: 16,
        translation: "to ignite",
      },
      {
        cardId: 16,
        translation: "to pour a liquid drop by drop",
      },
      {
        cardId: 16,
        translation: "(old) one fifth of a two-hour watch 更[gēng]",
      },
      {
        cardId: 16,
        translation: "dot stroke in Chinese characters",
      },
      {
        cardId: 16,
        translation: "classifier for items",
      },
      {
        cardId: 17,
        translation: "computer",
      },
      {
        cardId: 17,
        translation: "CL:臺|台[tái]",
      },
      {
        cardId: 18,
        translation: "television",
      },
      {
        cardId: 18,
        translation: "TV",
      },
      {
        cardId: 18,
        translation: "CL:臺|台",
      },
      {
        cardId: 18,
        translation: "個|个[gè]",
      },
      {
        cardId: 19,
        translation: "movie",
      },
      {
        cardId: 19,
        translation: "film",
      },
      {
        cardId: 19,
        translation: "CL:部",
      },
      {
        cardId: 19,
        translation: "片",
      },
      {
        cardId: 19,
        translation: "幕",
      },
      {
        cardId: 19,
        translation: "場|场[chǎng]",
      },
      {
        cardId: 20,
        translation: "thing",
      },
      {
        cardId: 20,
        translation: "stuff",
      },
      {
        cardId: 20,
        translation: "person",
      },
      {
        cardId: 20,
        translation: "CL:個|个",
      },
      {
        cardId: 20,
        translation: "件[jiàn]",
      },
      {
        cardId: 21,
        translation: "all",
      },
      {
        cardId: 21,
        translation: "both",
      },
      {
        cardId: 21,
        translation: "entirely",
      },
      {
        cardId: 21,
        translation: "(used for emphasis) even",
      },
      {
        cardId: 21,
        translation: "already",
      },
      {
        cardId: 21,
        translation: "(not) at all",
      },
      {
        cardId: 22,
        translation: "to read",
      },
      {
        cardId: 22,
        translation: "to study",
      },
      {
        cardId: 22,
        translation: "reading of word (i.e. pronunciation)",
      },
      {
        cardId: 22,
        translation: "similar to 拼音[pīn yīn]",
      },
      {
        cardId: 23,
        translation: "unworthy",
      },
      {
        cardId: 23,
        translation: "to let down",
      },
      {
        cardId: 23,
        translation: "I'm sorry",
      },
      {
        cardId: 23,
        translation: "excuse me",
      },
      {
        cardId: 23,
        translation: "pardon me",
      },
      {
        cardId: 23,
        translation: "if you please",
      },
      {
        cardId: 23,
        translation: "sorry? (please repeat)",
      },
      {
        cardId: 24,
        translation: "many",
      },
      {
        cardId: 24,
        translation: "much",
      },
      {
        cardId: 24,
        translation: "a lot of",
      },
      {
        cardId: 24,
        translation: "numerous",
      },
      {
        cardId: 24,
        translation: "more",
      },
      {
        cardId: 24,
        translation: "in excess",
      },
      {
        cardId: 24,
        translation: "how (to what extent)",
      },
      {
        cardId: 24,
        translation: "multi-",
      },
      {
        cardId: 25,
        translation: "how much",
      },
      {
        cardId: 25,
        translation: "how many",
      },
      {
        cardId: 25,
        translation: "which (number)",
      },
      {
        cardId: 25,
        translation: "as much as",
      },
      {
        cardId: 26,
        translation: "son",
      },
      {
        cardId: 27,
        translation: "two",
      },
      {
        cardId: 27,
        translation: "2",
      },
      {
        cardId: 27,
        translation: "stupid (Beijing dialect)",
      },
      {
        cardId: 28,
        translation: "restaurant",
      },
      {
        cardId: 28,
        translation: "CL:家[jiā]",
      },
      {
        cardId: 29,
        translation: "airplane",
      },
      {
        cardId: 29,
        translation: "CL:架[jià]",
      },
      {
        cardId: 30,
        translation: "minute",
      },
      {
        cardId: 31,
        translation: "happy",
      },
      {
        cardId: 31,
        translation: "glad",
      },
      {
        cardId: 31,
        translation: "willing (to do sth)",
      },
      {
        cardId: 31,
        translation: "in a cheerful mood",
      },
      {
        cardId: 32,
        translation: "variant of 個|个[gè]",
      },
      {
        cardId: 33,
        translation: "to work",
      },
      {
        cardId: 33,
        translation: "(of a machine) to operate",
      },
      {
        cardId: 33,
        translation: "job",
      },
      {
        cardId: 33,
        translation: "work",
      },
      {
        cardId: 33,
        translation: "task",
      },
      {
        cardId: 33,
        translation: "CL:個|个",
      },
      {
        cardId: 33,
        translation: "份",
      },
      {
        cardId: 33,
        translation: "項|项[xiàng]",
      },
      {
        cardId: 34,
        translation: "dog",
      },
      {
        cardId: 34,
        translation: "CL:隻|只",
      },
      {
        cardId: 34,
        translation: "條|条[tiáo]",
      },
      {
        cardId: 35,
        translation: "Chinese language",
      },
      {
        cardId: 35,
        translation: "CL:門|门[mén]",
      },
      {
        cardId: 36,
        translation: "good",
      },
      {
        cardId: 36,
        translation: "well",
      },
      {
        cardId: 36,
        translation: "proper",
      },
      {
        cardId: 36,
        translation: "good to",
      },
      {
        cardId: 36,
        translation: "easy to",
      },
      {
        cardId: 36,
        translation: "very",
      },
      {
        cardId: 36,
        translation: "so",
      },
      {
        cardId: 36,
        translation: "(suffix indicating completion or readiness)",
      },
      {
        cardId: 37,
        translation: "to drink",
      },
      {
        cardId: 37,
        translation: "My goodness!",
      },
      {
        cardId: 38,
        translation: "and",
      },
      {
        cardId: 38,
        translation: "together with",
      },
      {
        cardId: 38,
        translation: "with",
      },
      {
        cardId: 38,
        translation: "sum",
      },
      {
        cardId: 38,
        translation: "union",
      },
      {
        cardId: 38,
        translation: "peace",
      },
      {
        cardId: 38,
        translation: "harmony",
      },
      {
        cardId: 38,
        translation: "Japanese related",
      },
      {
        cardId: 38,
        translation: "Taiwan pr. [hàn]",
      },
      {
        cardId: 39,
        translation: "(adverb of degree)",
      },
      {
        cardId: 39,
        translation: "quite",
      },
      {
        cardId: 39,
        translation: "very",
      },
      {
        cardId: 39,
        translation: "awfully",
      },
      {
        cardId: 40,
        translation: "rear",
      },
      {
        cardId: 40,
        translation: "back",
      },
      {
        cardId: 40,
        translation: "behind",
      },
      {
        cardId: 40,
        translation: "later",
      },
      {
        cardId: 40,
        translation: "afterwards",
      },
      {
        cardId: 41,
        translation: "to curve",
      },
      {
        cardId: 41,
        translation: "to return",
      },
      {
        cardId: 41,
        translation: "to revolve",
      },
      {
        cardId: 42,
        translation: "can",
      },
      {
        cardId: 42,
        translation: "be possible",
      },
      {
        cardId: 42,
        translation: "be able to",
      },
      {
        cardId: 42,
        translation: "will",
      },
      {
        cardId: 42,
        translation: "be likely to",
      },
      {
        cardId: 42,
        translation: "be sure to",
      },
      {
        cardId: 42,
        translation: "to assemble",
      },
      {
        cardId: 42,
        translation: "to meet",
      },
      {
        cardId: 42,
        translation: "to gather",
      },
      {
        cardId: 42,
        translation: "to see",
      },
      {
        cardId: 42,
        translation: "union",
      },
      {
        cardId: 42,
        translation: "group",
      },
      {
        cardId: 42,
        translation: "association",
      },
      {
        cardId: 42,
        translation: "CL:個|个[gè]",
      },
      {
        cardId: 42,
        translation: "a moment (Taiwan pr. for this sense is )",
      },
      {
        cardId: 43,
        translation: "train station",
      },
      {
        cardId: 44,
        translation: "how much",
      },
      {
        cardId: 44,
        translation: "how many",
      },
      {
        cardId: 44,
        translation: "several",
      },
      {
        cardId: 44,
        translation: "a few",
      },
      {
        cardId: 45,
        translation: "home",
      },
      {
        cardId: 45,
        translation: "family",
      },
      {
        cardId: 45,
        translation: "classifier for families or businesses",
      },
      {
        cardId: 45,
        translation: "refers to the philosophical schools of pre-Han China",
      },
      {
        cardId: 45,
        translation:
          "noun suffix for specialists in some activity such as musician or revolutionary",
      },
      {
        cardId: 45,
        translation: "corresponds to English -ist",
      },
      {
        cardId: 45,
        translation: "-er",
      },
      {
        cardId: 45,
        translation: "-ary or -ian",
      },
      {
        cardId: 45,
        translation: "CL:個|个[gè]",
      },
      {
        cardId: 46,
        translation: "to shout",
      },
      {
        cardId: 46,
        translation: "to call",
      },
      {
        cardId: 46,
        translation: "to order",
      },
      {
        cardId: 46,
        translation: "to ask",
      },
      {
        cardId: 46,
        translation: "to be called",
      },
      {
        cardId: 46,
        translation: "by (indicates agent in the passive mood)",
      },
      {
        cardId: 47,
        translation: "today",
      },
      {
        cardId: 47,
        translation: "at the present",
      },
      {
        cardId: 47,
        translation: "now",
      },
      {
        cardId: 48,
        translation: "nine",
      },
      {
        cardId: 48,
        translation: "9",
      },
      {
        cardId: 49,
        translation: "to open",
      },
      {
        cardId: 49,
        translation: "to start",
      },
      {
        cardId: 49,
        translation: "to turn on",
      },
      {
        cardId: 49,
        translation: "to boil",
      },
      {
        cardId: 49,
        translation: "to write out (a medical prescription)",
      },
      {
        cardId: 49,
        translation: "to operate (vehicle)",
      },
      {
        cardId: 49,
        translation: "abbr. for 開爾文|开尔文 degrees Kelvin",
      },
      {
        cardId: 50,
        translation: "to see",
      },
      {
        cardId: 50,
        translation: "to look at",
      },
      {
        cardId: 50,
        translation: "to read",
      },
      {
        cardId: 50,
        translation: "to watch",
      },
      {
        cardId: 50,
        translation: "to consider",
      },
      {
        cardId: 50,
        translation: "to regard as",
      },
      {
        cardId: 50,
        translation: "to view as",
      },
      {
        cardId: 50,
        translation: "to treat as",
      },
      {
        cardId: 50,
        translation: "to judge",
      },
      {
        cardId: 50,
        translation: "(after repeated verb) to give it a try",
      },
      {
        cardId: 50,
        translation: "depending on (how you're judging)",
      },
      {
        cardId: 50,
        translation: "to visit",
      },
      {
        cardId: 50,
        translation: "to call on",
      },
      {
        cardId: 50,
        translation: "to treat (an illness)",
      },
      {
        cardId: 50,
        translation: "to look after",
      },
      {
        cardId: 50,
        translation: "Watch out! (for a danger)",
      },
      {
        cardId: 51,
        translation: "to see",
      },
      {
        cardId: 51,
        translation: "to catch sight of",
      },
      {
        cardId: 52,
        translation: "lump (of earth)",
      },
      {
        cardId: 52,
        translation: "chunk",
      },
      {
        cardId: 52,
        translation: "piece",
      },
      {
        cardId: 52,
        translation: "classifier for pieces of cloth",
      },
      {
        cardId: 52,
        translation: "cake",
      },
      {
        cardId: 52,
        translation: "soap etc",
      },
      {
        cardId: 52,
        translation:
          "colloquial word for yuan (or other unit of currency such as Hong Kong or US dollar etc)",
      },
      {
        cardId: 52,
        translation: "usually as 塊錢|块钱",
      },
      {
        cardId: 53,
        translation: "to come",
      },
      {
        cardId: 53,
        translation: "to arrive",
      },
      {
        cardId: 53,
        translation: "to come round",
      },
      {
        cardId: 53,
        translation: "ever since",
      },
      {
        cardId: 53,
        translation: "next",
      },
      {
        cardId: 54,
        translation: "teacher",
      },
      {
        cardId: 54,
        translation: "CL:個|个",
      },
      {
        cardId: 54,
        translation: "位[wèi]",
      },
      {
        cardId: 55,
        translation: "(modal particle intensifying preceding clause)",
      },
      {
        cardId: 55,
        translation: "(completed action marker)",
      },
      {
        cardId: 56,
        translation: "cold",
      },
      {
        cardId: 57,
        translation: "li (Chinese mile)",
      },
      {
        cardId: 57,
        translation: "500 meters (modern)",
      },
      {
        cardId: 57,
        translation: "home",
      },
      {
        cardId: 57,
        translation: "hometown",
      },
      {
        cardId: 57,
        translation: "village",
      },
      {
        cardId: 57,
        translation: "neighborhood",
      },
      {
        cardId: 57,
        translation: "administrative unit",
      },
      {
        cardId: 58,
        translation: "zero",
      },
      {
        cardId: 58,
        translation: "nought",
      },
      {
        cardId: 58,
        translation: "zero sign",
      },
      {
        cardId: 58,
        translation: "fractional",
      },
      {
        cardId: 58,
        translation: "fragmentary",
      },
      {
        cardId: 58,
        translation: "odd (of numbers)",
      },
      {
        cardId: 58,
        translation:
          "(placed between two numbers to indicate a smaller quantity followed by a larger one)",
      },
      {
        cardId: 58,
        translation: "fraction",
      },
      {
        cardId: 58,
        translation: "(in mathematics) remainder (after division)",
      },
      {
        cardId: 58,
        translation: "extra",
      },
      {
        cardId: 58,
        translation: "to wither and fall",
      },
      {
        cardId: 58,
        translation: "to wither",
      },
      {
        cardId: 59,
        translation: "six",
      },
      {
        cardId: 59,
        translation: "6",
      },
      {
        cardId: 60,
        translation: "mama",
      },
      {
        cardId: 60,
        translation: "mommy",
      },
      {
        cardId: 60,
        translation: "mother",
      },
      {
        cardId: 60,
        translation: "CL:個|个",
      },
      {
        cardId: 60,
        translation: "位[wèi]",
      },
      {
        cardId: 61,
        translation: "(question tag)",
      },
      {
        cardId: 62,
        translation: "to buy",
      },
      {
        cardId: 62,
        translation: "to purchase",
      },
      {
        cardId: 63,
        translation: "cat",
      },
      {
        cardId: 63,
        translation: "CL:隻|只[zhī]",
      },
      {
        cardId: 64,
        translation: "(negative prefix for verbs)",
      },
      {
        cardId: 64,
        translation: "have not",
      },
      {
        cardId: 64,
        translation: "not",
      },
      {
        cardId: 65,
        translation: "it doesn't matter",
      },
      {
        cardId: 66,
        translation: "(cooked) rice",
      },
      {
        cardId: 67,
        translation: "tomorrow",
      },
      {
        cardId: 68,
        translation: "name (of a person or thing)",
      },
      {
        cardId: 68,
        translation: "CL:個|个[gè]",
      },
      {
        cardId: 69,
        translation: "how",
      },
      {
        cardId: 69,
        translation: "which",
      },
      {
        cardId: 70,
        translation: "that",
      },
      {
        cardId: 70,
        translation: "those",
      },
      {
        cardId: 70,
        translation: "then (in that case)",
      },
      {
        cardId: 70,
        translation: "commonly pr.  before a classifier",
      },
      {
        cardId: 70,
        translation: "esp. in Beijing",
      },
      {
        cardId: 71,
        translation:
          "particle indicating that a previously asked question is to be applied to the preceding word (What about ...?,And ...?)",
      },
      {
        cardId: 71,
        translation: "particle for inquiring about location (Where is ...?)",
      },
      {
        cardId: 71,
        translation: "particle signaling a pause",
      },
      {
        cardId: 71,
        translation:
          "to emphasize the preceding words and allow the listener time to take them on board (ok?)",
      },
      {
        cardId: 71,
        translation: "are you with me?)",
      },
      {
        cardId: 71,
        translation:
          "(at the end of a declarative sentence) particle indicating continuation of a state or action",
      },
      {
        cardId: 71,
        translation: "particle indicating strong affirmation",
      },
      {
        cardId: 72,
        translation: "to be able to",
      },
      {
        cardId: 72,
        translation: "to be capable of",
      },
      {
        cardId: 72,
        translation: "ability",
      },
      {
        cardId: 72,
        translation: "capability",
      },
      {
        cardId: 72,
        translation: "able",
      },
      {
        cardId: 72,
        translation: "capable",
      },
      {
        cardId: 72,
        translation: "can possibly",
      },
      {
        cardId: 72,
        translation:
          "(usually used in the negative) to have the possibility of",
      },
      {
        cardId: 73,
        translation: "you (informal",
      },
      {
        cardId: 73,
        translation: "as opposed to courteous 您)",
      },
      {
        cardId: 74,
        translation: "year",
      },
      {
        cardId: 74,
        translation: "CL:個|个[gè]",
      },
      {
        cardId: 75,
        translation: "daughter",
      },
      {
        cardId: 76,
        translation: "friend",
      },
      {
        cardId: 76,
        translation: "CL:個|个",
      },
      {
        cardId: 76,
        translation: "位[wèi]",
      },
      {
        cardId: 77,
        translation: "pretty",
      },
      {
        cardId: 77,
        translation: "beautiful",
      },
      {
        cardId: 78,
        translation: "apple",
      },
      {
        cardId: 78,
        translation: "CL:個|个",
      },
      {
        cardId: 78,
        translation: "顆|颗[kē]",
      },
      {
        cardId: 79,
        translation: "seven",
      },
      {
        cardId: 79,
        translation: "7",
      },
      {
        cardId: 80,
        translation: "coin",
      },
      {
        cardId: 80,
        translation: "money",
      },
      {
        cardId: 80,
        translation: "CL:筆|笔[bǐ]",
      },
      {
        cardId: 80,
        translation: "unit of weight",
      },
      {
        cardId: 80,
        translation: "one tenth of a tael 兩|两[liǎng]",
      },
      {
        cardId: 81,
        translation: "ahead",
      },
      {
        cardId: 81,
        translation: "in front",
      },
      {
        cardId: 81,
        translation: "preceding",
      },
      {
        cardId: 81,
        translation: "above",
      },
      {
        cardId: 82,
        translation: "to ask",
      },
      {
        cardId: 82,
        translation: "to invite",
      },
      {
        cardId: 82,
        translation: "please (do sth)",
      },
      {
        cardId: 82,
        translation: "to treat (to a meal etc)",
      },
      {
        cardId: 82,
        translation: "to request",
      },
      {
        cardId: 83,
        translation: "to go",
      },
      {
        cardId: 83,
        translation: "to go to (a place)",
      },
      {
        cardId: 83,
        translation: "to cause to go or send (sb)",
      },
      {
        cardId: 83,
        translation: "to remove",
      },
      {
        cardId: 83,
        translation: "to get rid of",
      },
      {
        cardId: 83,
        translation:
          "(when used either before or after a verb) to go in order to do sth",
      },
      {
        cardId: 83,
        translation: "to be apart from in space or time",
      },
      {
        cardId: 83,
        translation:
          "(after a verb of motion indicates movement away from the speaker)",
      },
      {
        cardId: 83,
        translation:
          "(used after certain verbs to indicate detachment or separation)",
      },
      {
        cardId: 83,
        translation: "(of a time or an event etc) just passed or elapsed",
      },
      {
        cardId: 84,
        translation: "to warm up",
      },
      {
        cardId: 84,
        translation: "to heat up",
      },
      {
        cardId: 84,
        translation: "hot (of weather)",
      },
      {
        cardId: 84,
        translation: "heat",
      },
      {
        cardId: 84,
        translation: "fervent",
      },
      {
        cardId: 85,
        translation: "man",
      },
      {
        cardId: 85,
        translation: "person",
      },
      {
        cardId: 85,
        translation: "people",
      },
      {
        cardId: 85,
        translation: "CL:個|个",
      },
      {
        cardId: 85,
        translation: "位[wèi]",
      },
      {
        cardId: 86,
        translation: "to know",
      },
      {
        cardId: 86,
        translation: "to recognize",
      },
      {
        cardId: 86,
        translation: "to be familiar with",
      },
      {
        cardId: 86,
        translation: "to get acquainted with sb",
      },
      {
        cardId: 86,
        translation: "knowledge",
      },
      {
        cardId: 86,
        translation: "understanding",
      },
      {
        cardId: 86,
        translation: "awareness",
      },
      {
        cardId: 86,
        translation: "cognition",
      },
      {
        cardId: 87,
        translation: "sun",
      },
      {
        cardId: 87,
        translation: "day",
      },
      {
        cardId: 87,
        translation: "date",
      },
      {
        cardId: 87,
        translation: "day of the month",
      },
      {
        cardId: 87,
        translation: "abbr. for 日本 Japan",
      },
      {
        cardId: 88,
        translation: "three",
      },
      {
        cardId: 88,
        translation: "3",
      },
      {
        cardId: 89,
        translation: "store",
      },
      {
        cardId: 89,
        translation: "shop",
      },
      {
        cardId: 89,
        translation: "CL:家",
      },
      {
        cardId: 89,
        translation: "個|个[gè]",
      },
      {
        cardId: 90,
        translation: "on top",
      },
      {
        cardId: 90,
        translation: "upon",
      },
      {
        cardId: 90,
        translation: "above",
      },
      {
        cardId: 90,
        translation: "upper",
      },
      {
        cardId: 90,
        translation: "previous",
      },
      {
        cardId: 90,
        translation: "first (of multiple parts)",
      },
      {
        cardId: 90,
        translation: "to climb",
      },
      {
        cardId: 90,
        translation: "to get onto",
      },
      {
        cardId: 90,
        translation: "to go up",
      },
      {
        cardId: 90,
        translation: "to attend (class or university)",
      },
      {
        cardId: 91,
        translation: "morning",
      },
      {
        cardId: 91,
        translation: "CL:個|个[gè]",
      },
      {
        cardId: 92,
        translation: "few",
      },
      {
        cardId: 92,
        translation: "little",
      },
      {
        cardId: 92,
        translation: "lack",
      },
      {
        cardId: 93,
        translation: "who",
      },
      {
        cardId: 93,
        translation: "also pr. [shuí]",
      },
      {
        cardId: 94,
        translation: "what?",
      },
      {
        cardId: 94,
        translation: "who?",
      },
      {
        cardId: 94,
        translation: "something",
      },
      {
        cardId: 94,
        translation: "anything",
      },
      {
        cardId: 95,
        translation: "ten",
      },
      {
        cardId: 95,
        translation: "10",
      },
      {
        cardId: 96,
        translation: "time",
      },
      {
        cardId: 96,
        translation: "length of time",
      },
      {
        cardId: 96,
        translation: "moment",
      },
      {
        cardId: 96,
        translation: "period",
      },
      {
        cardId: 97,
        translation: "is",
      },
      {
        cardId: 97,
        translation: "are",
      },
      {
        cardId: 97,
        translation: "am",
      },
      {
        cardId: 97,
        translation: "yes",
      },
      {
        cardId: 97,
        translation: "to be",
      },
      {
        cardId: 98,
        translation: "book",
      },
      {
        cardId: 98,
        translation: "letter",
      },
      {
        cardId: 98,
        translation: "CL:本",
      },
      {
        cardId: 98,
        translation: "冊|册",
      },
      {
        cardId: 98,
        translation: "部[bù]",
      },
      {
        cardId: 98,
        translation: "see also 書經|书经 Book of History",
      },
      {
        cardId: 99,
        translation: "water",
      },
      {
        cardId: 99,
        translation: "river",
      },
      {
        cardId: 99,
        translation: "liquid",
      },
      {
        cardId: 99,
        translation: "beverage",
      },
      {
        cardId: 99,
        translation: "additional charges or income",
      },
      {
        cardId: 99,
        translation: "(of clothes) classifier for number of washes",
      },
      {
        cardId: 100,
        translation: "fruit",
      },
      {
        cardId: 100,
        translation: "CL:個|个[gè]",
      },
      {
        cardId: 101,
        translation: "to go to bed",
      },
      {
        cardId: 101,
        translation: "to sleep",
      },
      {
        cardId: 102,
        translation: "to speak",
      },
      {
        cardId: 102,
        translation: "to say",
      },
      {
        cardId: 102,
        translation: "to talk",
      },
      {
        cardId: 102,
        translation: "to gossip",
      },
      {
        cardId: 102,
        translation: "to tell stories",
      },
      {
        cardId: 102,
        translation: "talk",
      },
      {
        cardId: 102,
        translation: "word",
      },
      {
        cardId: 103,
        translation: "four",
      },
      {
        cardId: 103,
        translation: "4",
      },
      {
        cardId: 104,
        translation: "classifier for years (of age)",
      },
      {
        cardId: 104,
        translation: "year",
      },
      {
        cardId: 104,
        translation: "year (of crop harvests)",
      },
      {
        cardId: 105,
        translation: "he or him",
      },
      {
        cardId: 105,
        translation:
          "(used for either sex when the sex is unknown or unimportant)",
      },
      {
        cardId: 105,
        translation: "(used before sb's name for emphasis)",
      },
      {
        cardId: 105,
        translation: "(used as a meaningless mock object)",
      },
      {
        cardId: 105,
        translation: "other",
      },
      {
        cardId: 105,
        translation: "another",
      },
      {
        cardId: 106,
        translation: "she",
      },
      {
        cardId: 107,
        translation: "highest",
      },
      {
        cardId: 107,
        translation: "greatest",
      },
      {
        cardId: 107,
        translation: "too (much)",
      },
      {
        cardId: 107,
        translation: "very",
      },
      {
        cardId: 107,
        translation: "extremely",
      },
      {
        cardId: 108,
        translation: "weather",
      },
      {
        cardId: 109,
        translation: "to listen",
      },
      {
        cardId: 109,
        translation: "to hear",
      },
      {
        cardId: 109,
        translation: "to obey",
      },
      {
        cardId: 110,
        translation: "to study at the same school",
      },
      {
        cardId: 110,
        translation: "fellow student",
      },
      {
        cardId: 110,
        translation: "classmate",
      },
      {
        cardId: 110,
        translation: "CL:位",
      },
      {
        cardId: 110,
        translation: "個|个[gè]",
      },
      {
        cardId: 111,
        translation: "to feed",
      },
      {
        cardId: 112,
        translation: "I",
      },
      {
        cardId: 112,
        translation: "me",
      },
      {
        cardId: 112,
        translation: "my",
      },
      {
        cardId: 113,
        translation: "we",
      },
      {
        cardId: 113,
        translation: "us",
      },
      {
        cardId: 113,
        translation: "ourselves",
      },
      {
        cardId: 113,
        translation: "our",
      },
      {
        cardId: 114,
        translation: "five",
      },
      {
        cardId: 114,
        translation: "5",
      },
      {
        cardId: 115,
        translation: "to like",
      },
      {
        cardId: 115,
        translation: "to be fond of",
      },
      {
        cardId: 116,
        translation: "down",
      },
      {
        cardId: 116,
        translation: "downwards",
      },
      {
        cardId: 116,
        translation: "below",
      },
      {
        cardId: 116,
        translation: "lower",
      },
      {
        cardId: 116,
        translation: "later",
      },
      {
        cardId: 116,
        translation: "next (week etc)",
      },
      {
        cardId: 116,
        translation: "second (of two parts)",
      },
      {
        cardId: 116,
        translation: "to decline",
      },
      {
        cardId: 116,
        translation: "to go down",
      },
      {
        cardId: 117,
        translation: "afternoon",
      },
      {
        cardId: 117,
        translation: "CL:個|个[gè]",
      },
      {
        cardId: 117,
        translation: "p.m.",
      },
      {
        cardId: 118,
        translation: "to rain",
      },
      {
        cardId: 118,
        translation: "rainy",
      },
      {
        cardId: 119,
        translation: "teacher",
      },
      {
        cardId: 119,
        translation: "husband",
      },
      {
        cardId: 119,
        translation: "doctor (topolect)",
      },
      {
        cardId: 119,
        translation: "CL:位[wèi]",
      },
      {
        cardId: 120,
        translation: "now",
      },
      {
        cardId: 120,
        translation: "at present",
      },
      {
        cardId: 120,
        translation: "at the moment",
      },
      {
        cardId: 120,
        translation: "modern",
      },
      {
        cardId: 120,
        translation: "current",
      },
      {
        cardId: 120,
        translation: "nowadays",
      },
      {
        cardId: 121,
        translation: "to think",
      },
      {
        cardId: 121,
        translation: "to believe",
      },
      {
        cardId: 121,
        translation: "to suppose",
      },
      {
        cardId: 121,
        translation: "to wish",
      },
      {
        cardId: 121,
        translation: "to want",
      },
      {
        cardId: 121,
        translation: "to miss",
      },
      {
        cardId: 122,
        translation: "small",
      },
      {
        cardId: 122,
        translation: "tiny",
      },
      {
        cardId: 122,
        translation: "few",
      },
      {
        cardId: 122,
        translation: "young",
      },
      {
        cardId: 123,
        translation: "young lady",
      },
      {
        cardId: 123,
        translation: "miss",
      },
      {
        cardId: 123,
        translation: "(slang) prostitute",
      },
      {
        cardId: 123,
        translation: "CL:個|个",
      },
      {
        cardId: 123,
        translation: "位[wèi]",
      },
      {
        cardId: 124,
        translation: "some",
      },
      {
        cardId: 124,
        translation: "few",
      },
      {
        cardId: 124,
        translation: "several",
      },
      {
        cardId: 124,
        translation:
          "measure word indicating a small amount or small number (greater than 1)",
      },
      {
        cardId: 125,
        translation: "to write",
      },
      {
        cardId: 126,
        translation: "to thank",
      },
      {
        cardId: 126,
        translation: "thanks",
      },
      {
        cardId: 127,
        translation: "week",
      },
      {
        cardId: 127,
        translation: "CL:個|个[gè]",
      },
      {
        cardId: 127,
        translation: "day of the week",
      },
      {
        cardId: 127,
        translation: "Sunday",
      },
      {
        cardId: 128,
        translation: "student",
      },
      {
        cardId: 128,
        translation: "schoolchild",
      },
      {
        cardId: 129,
        translation: "to learn",
      },
      {
        cardId: 129,
        translation: "to study",
      },
      {
        cardId: 130,
        translation: "school",
      },
      {
        cardId: 130,
        translation: "CL:所[suǒ]",
      },
      {
        cardId: 131,
        translation: "one",
      },
      {
        cardId: 131,
        translation: "1",
      },
      {
        cardId: 131,
        translation: "single",
      },
      {
        cardId: 131,
        translation: "a (article)",
      },
      {
        cardId: 131,
        translation: "as soon as",
      },
      {
        cardId: 131,
        translation: "entire",
      },
      {
        cardId: 131,
        translation: "whole",
      },
      {
        cardId: 131,
        translation: "all",
      },
      {
        cardId: 131,
        translation: "throughout",
      },
      {
        cardId: 132,
        translation: "clothes",
      },
      {
        cardId: 132,
        translation: "CL:件",
      },
      {
        cardId: 132,
        translation: "套[tào]",
      },
      {
        cardId: 133,
        translation: "doctor",
      },
      {
        cardId: 133,
        translation: "CL:個|个",
      },
      {
        cardId: 133,
        translation: "位",
      },
      {
        cardId: 133,
        translation: "名[míng]",
      },
      {
        cardId: 134,
        translation: "hospital",
      },
      {
        cardId: 134,
        translation: "CL:所",
      },
      {
        cardId: 134,
        translation: "家",
      },
      {
        cardId: 134,
        translation: "座[zuò]",
      },
      {
        cardId: 135,
        translation: "chair",
      },
      {
        cardId: 135,
        translation: "CL:把",
      },
      {
        cardId: 135,
        translation: "套[tào]",
      },
      {
        cardId: 136,
        translation: "to have",
      },
      {
        cardId: 136,
        translation: "there is",
      },
      {
        cardId: 136,
        translation: "there are",
      },
      {
        cardId: 136,
        translation: "to exist",
      },
      {
        cardId: 136,
        translation: "to be",
      },
      {
        cardId: 137,
        translation: "moon",
      },
      {
        cardId: 137,
        translation: "month",
      },
      {
        cardId: 137,
        translation: "CL:個|个",
      },
      {
        cardId: 137,
        translation: "輪|轮[lún]",
      },
      {
        cardId: 138,
        translation: "(located) at",
      },
      {
        cardId: 138,
        translation: "(to be) in",
      },
      {
        cardId: 138,
        translation: "to exist",
      },
      {
        cardId: 138,
        translation: "in the middle of doing sth",
      },
      {
        cardId: 138,
        translation: "(indicating an action in progress)",
      },
      {
        cardId: 139,
        translation: "goodbye",
      },
      {
        cardId: 139,
        translation: "see you again later",
      },
      {
        cardId: 140,
        translation: "variant of 怎麼|怎么[zěn me]",
      },
      {
        cardId: 141,
        translation: "how?",
      },
      {
        cardId: 141,
        translation: "how about?",
      },
      {
        cardId: 141,
        translation: "how was it?",
      },
      {
        cardId: 141,
        translation: "how are things?",
      },
      {
        cardId: 142,
        translation: "this",
      },
      {
        cardId: 142,
        translation: "these",
      },
      {
        cardId: 142,
        translation: "(commonly pr.  before a classifier",
      },
      {
        cardId: 142,
        translation: "esp. in Beijing)",
      },
      {
        cardId: 143,
        translation: "China",
      },
      {
        cardId: 143,
        translation: "Middle Kingdom",
      },
      {
        cardId: 144,
        translation: "noon",
      },
      {
        cardId: 144,
        translation: "midday",
      },
      {
        cardId: 144,
        translation: "CL:個|个[gè]",
      },
      {
        cardId: 145,
        translation: "to live",
      },
      {
        cardId: 145,
        translation: "to dwell",
      },
      {
        cardId: 145,
        translation: "to stay",
      },
      {
        cardId: 145,
        translation: "to reside",
      },
      {
        cardId: 145,
        translation: "to stop",
      },
      {
        cardId: 145,
        translation: "(suffix indicating firmness",
      },
      {
        cardId: 145,
        translation: "steadiness",
      },
      {
        cardId: 145,
        translation: "or coming to a halt)",
      },
      {
        cardId: 146,
        translation: "table",
      },
      {
        cardId: 146,
        translation: "desk",
      },
      {
        cardId: 146,
        translation: "CL:張|张",
      },
      {
        cardId: 146,
        translation: "套[tào]",
      },
      {
        cardId: 147,
        translation: "letter",
      },
      {
        cardId: 147,
        translation: "symbol",
      },
      {
        cardId: 147,
        translation: "character",
      },
      {
        cardId: 147,
        translation: "word",
      },
      {
        cardId: 147,
        translation: "CL:個|个[gè]",
      },
      {
        cardId: 147,
        translation:
          "courtesy or style name traditionally given to males aged 20 in dynastic China",
      },
      {
        cardId: 148,
        translation: "yesterday",
      },
      {
        cardId: 149,
        translation: "to sit",
      },
      {
        cardId: 149,
        translation: "to take a seat",
      },
      {
        cardId: 149,
        translation: "to take (a bus",
      },
      {
        cardId: 149,
        translation: "airplane etc)",
      },
      {
        cardId: 149,
        translation: "to bear fruit",
      },
      {
        cardId: 149,
        translation: "variant of 座[zuò]",
      },
      {
        cardId: 150,
        translation: "to do",
      },
      {
        cardId: 150,
        translation: "to make",
      },
      {
        cardId: 150,
        translation: "to produce",
      },
      {
        cardId: 150,
        translation: "to write",
      },
      {
        cardId: 150,
        translation: "to compose",
      },
      {
        cardId: 150,
        translation: "to act as",
      },
      {
        cardId: 150,
        translation: "to engage in",
      },
      {
        cardId: 150,
        translation: "to hold (a party)",
      },
      {
        cardId: 150,
        translation: "to be",
      },
      {
        cardId: 150,
        translation: "to become",
      },
      {
        cardId: 150,
        translation: "to function (in some capacity)",
      },
      {
        cardId: 150,
        translation: "to serve as",
      },
      {
        cardId: 150,
        translation: "to be used for",
      },
      {
        cardId: 150,
        translation: "to form (a bond or relationship)",
      },
      {
        cardId: 150,
        translation: "to pretend",
      },
      {
        cardId: 150,
        translation: "to feign",
      },
      {
        cardId: 150,
        translation: "to act a part",
      },
      {
        cardId: 150,
        translation: "to put on appearance",
      },
    ],
  });
}

main()
  .then(() => console.log("Registration done successfully!"))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
