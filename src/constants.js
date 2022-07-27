export const FIRST_PAGE = 1;
export const HEADER_HEIGHT = 80;

/**
 * Retrieved from URL : 
 * 
 * List :
 * https://www.iflix.com/_next/data/tuvqPK5nDW3xVsPlEE7AG/channel/10110.json?id=10110&channelId=10110
 * 
 * or
 * 
 * Detail : 
 * https://www.iflix.com/_next/data/tuvqPK5nDW3xVsPlEE7AG/play/r6yht13srzu48mc-FULLMETAL-ALCHEMIST-2003.json?ids=r6yht13srzu48mc-FULLMETAL-ALCHEMIST-2003
 * 
 * Where the attribute is : 
 * pageProps.channels
 * 
 * Note : 
 * - "id" is used to check whether the item is in selected state
 * - "name" is used for display
 */
export const CHANNELS_LIST = [{
    "channel": {
      "id": "1001",
      "name": "Home",
      "page_type": "PAGE_TYPE_MODULE_LIST"
    }
  },
  {
    "channel": {
      "id": "10026",
      "name": "Original",
      "page_type": "PAGE_TYPE_MODULE_LIST"
    }
  },
  {
    "channel": {
      "id": "10062",
      "name": "Movies",
      "page_type": "PAGE_TYPE_MODULE_LIST"
    }
  },
  {
    "channel": {
      "id": "10066",
      "name": "Chinese",
      "page_type": "PAGE_TYPE_MODULE_LIST"
    }
  },
  {
    "channel": {
      "id": "10081",
      "name": "Korean",
      "page_type": "PAGE_TYPE_MODULE_LIST"
    }
  },
  {
    "channel": {
      "id": "10110",
      "name": "Anime",
      "page_type": "PAGE_TYPE_MODULE_LIST"
    }
  }
];

/**
 * Retrieved from URL : 
 * 
 * List :
 * https://www.iflix.com/_next/data/tuvqPK5nDW3xVsPlEE7AG/channel/10110.json?id=10110&channelId=10110
 * 
 * or
 * 
 * Detail : 
 * https://www.iflix.com/_next/data/tuvqPK5nDW3xVsPlEE7AG/play/r6yht13srzu48mc-FULLMETAL-ALCHEMIST-2003.json?ids=r6yht13srzu48mc-FULLMETAL-ALCHEMIST-2003
 * 
 * Where the attribute is : 
 * pageProps.langConfig
 * 
 * Note : 
 * - "langName" is to display the item
 * - "langId" / "langCode" is to choose whether the item is selected
 */
export const LANGUAGES_CONFIG_LIST = [{
    "langName": "English",
    "langCode": "en",
    "langId": 1491988,
    "playerLang": "en"
  },
  {
    "langName": "ไทย",
    "langCode": "th",
    "langId": 1491973,
    "playerLang": "th"
  },
  {
    "langName": "繁體中文",
    "langCode": "zh-tw",
    "langId": 8229847,
    "playerLang": "zh-tw"
  },
  {
    "langName": "简体中文",
    "langCode": "zh-cn",
    "langId": 1491963,
    "playerLang": "zh-cn"
  },
  {
    "langName": "Bahasa Indonesia",
    "langCode": "id",
    "langId": 1491937,
    "playerLang": "id"
  },
  {
    "langName": "हिन्दी",
    "langCode": "hi",
    "langId": 35,
    "playerLang": "hi"
  },
  {
    "langName": "日本語",
    "langCode": "ja",
    "langId": 8,
    "playerLang": "ja"
  },
  {
    "langName": "한국어",
    "langCode": "ko",
    "langId": 9,
    "playerLang": "ko"
  },
  {
    "langName": "Português",
    "langCode": "pt",
    "langId": 12,
    "playerLang": "pt"
  },
  {
    "langName": "Español",
    "langCode": "es",
    "langId": 14,
    "playerLang": "es"
  },
  {
    "langName": "العربية",
    "langCode": "ar",
    "langId": 54,
    "playerLang": "ar"
  }
];

/**
 * Retrieved from URL : 
 * https://www.iflix.com/api/channel?id=10110
 * 
 * Where the attribute is : 
 * response.modules -> 
 * inside the item, the type is : "MODULE_TYPE_CAROUSEL" -> 
 * "items" attribute
 * 
 * the item :
 * "title" is used for the item in slider
 * "pic" is used for the image
 */
export const CAROUSEL_ITEMS = {
  "type": "MODULE_TYPE_CAROUSEL",
  "name": "Banner",
  "item_pic_aspect_ratio": 2.896551724137931,
  "items": [{
      "type": "ITEM_TYPE_ALBUM",
      "id": "bz3il3gwp8b8gyq",
      "title": "Attack on Titan OAD",
      "subtitle": "Attack on Titan OAD",
      "pic": "https://puui.wetvinfo.com/tv/0/1236927264_1680580/0",
      "labels": {
        "1": {
          "text": "Full",
          "color": "#FF4A22"
        }
      }
    },
    {
      "type": "ITEM_TYPE_ALBUM",
      "id": "bxhkltz7d0xaqhl",
      "title": "BORUTO: NARUTO NEXT GENERATIONS S5",
      "subtitle": "BORUTO: NARUTO NEXT GENERATIONS S5",
      "pic": "https://puui.wetvinfo.com/tv/0/1235424471_1680580/0",
      "labels": {
        "0": {
          "text": "VIP",
          "color": "#FF4A22"
        },
        "1": {
          "text": "Full",
          "color": "#FF4A22"
        }
      }
    },
    {
      "type": "ITEM_TYPE_ALBUM",
      "id": "5nlz3htw3fqhx20",
      "title": "Demon Slayer: Kimetsu no Yaiba Mugen Train Arc",
      "pic": "https://puui.wetvinfo.com/tv/0/1236215557_1680580/0",
      "labels": {
        "1": {
          "text": "Full",
          "color": "#FF4A22"
        }
      }
    },
    {
      "type": "ITEM_TYPE_ALBUM",
      "id": "0foxsdgr873t53g",
      "title": "Tokyo Revengers",
      "pic": "https://puui.wetvinfo.com/tv/0/1235925125_1680580/0",
      "labels": {
        "1": {
          "text": "Full",
          "color": "#FF4A22"
        }
      }
    },
    {
      "type": "ITEM_TYPE_ALBUM",
      "id": "5jqsrcbvp04la6y",
      "title": "Legends of Dawn: The Sacred Stone",
      "subtitle": "Legends of Dawn: The Sacred Stone",
      "pic": "https://puui.wetvinfo.com/tv/0/1235424482_1680580/0",
      "labels": {
        "1": {
          "text": "Full",
          "color": "#FF4A22"
        }
      }
    },
    {
      "type": "ITEM_TYPE_ALBUM",
      "id": "4zwsvk310fss01s",
      "title": "Hunter x Hunter",
      "pic": "https://puui.wetvinfo.com/tv/0/1235424495_1680580/0",
      "labels": {
        "0": {
          "text": "VIP",
          "color": "#FF4A22"
        },
        "1": {
          "text": "Full",
          "color": "#FF4A22"
        }
      }
    },
    {
      "type": "ITEM_TYPE_ALBUM",
      "id": "fau68h3l0nle6pa",
      "title": "Sailor Moon",
      "pic": "https://puui.wetvinfo.com/tv/0/1235424508_1680580/0",
      "labels": {
        "1": {
          "text": "Full",
          "color": "#FF4A22"
        }
      }
    },
    {
      "type": "ITEM_TYPE_ALBUM",
      "id": "w74fdyncquqifcx",
      "title": "Jujutsu Kaisen",
      "pic": "https://puui.wetvinfo.com/tv/0/1235424521_1680580/0",
      "labels": {
        "1": {
          "text": "Full",
          "color": "#FF4A22"
        }
      }
    },
    {
      "type": "ITEM_TYPE_ALBUM",
      "id": "akk9f54ztjldyrx",
      "title": "Dragon Ball Z Kai: The Final Chapters",
      "pic": "https://puui.wetvinfo.com/tv/0/1235424553_1680580/0",
      "labels": {
        "1": {
          "text": "Full",
          "color": "#FF4A22"
        }
      }
    }
  ]
};

/**
 * Retrieved from URL : 
 * https://www.iflix.com/api/channel?id=10110
 * 
 * Where the attribute is : 
 * response.modules -> 
 * inside the item, the type is : "MODULE_TYPE_ITEMS" -> 
 * "items" attribute
 * 
 * Note :
 * the title will be the "title" attribute
 * the subtitle will be the "subtitle" attribute
 * the picture will be the "pic" attribute
 */
export const ALBUMS_LIST = {
  "type": "MODULE_TYPE_MODULE_ITEMS",
  "name": "New",
  "item_pic_aspect_ratio": 0.7129629629629629,
  "items": [{
      "type": "ITEM_TYPE_ALBUM",
      "id": "w74fdyncquqifcx",
      "title": "Jujutsu Kaisen",
      "pic": "http://puui.wetvinfo.com/vcover_vt_pic/0/w74fdyncquqifcx1622198675801/0",
      "labels": {
        "1": {
          "text": "Full",
          "color": "#FF4A22"
        }
      }
    },
    {
      "type": "ITEM_TYPE_ALBUM",
      "id": "r6yht13srzu48mc",
      "title": "FULLMETAL ALCHEMIST 2003",
      "pic": "http://puui.wetvinfo.com/vcover_vt_pic/0/r6yht13srzu48mc1632969840021/0",
      "labels": {
        "1": {
          "text": "Full",
          "color": "#FF4A22"
        }
      }
    },
    {
      "type": "ITEM_TYPE_ALBUM",
      "id": "ecmp615ib5kswl3",
      "title": "Mushoku Tensei: Jobless Reincarnation Part 2",
      "pic": "http://puui.wetvinfo.com/vcover_vt_pic/0/ecmp615ib5kswl31632969294053/0",
      "labels": {
        "1": {
          "text": "Full",
          "color": "#FF4A22"
        }
      }
    },
    {
      "type": "ITEM_TYPE_ALBUM",
      "id": "5nlz3htw3fqhx20",
      "title": "Demon Slayer: Kimetsu no Yaiba Mugen Train Arc",
      "pic": "http://puui.wetvinfo.com/vcover_vt_pic/0/5nlz3htw3fqhx201633759565165/0",
      "labels": {
        "1": {
          "text": "Full",
          "color": "#FF4A22"
        }
      }
    },
    {
      "type": "ITEM_TYPE_ALBUM",
      "id": "bz3il3gwp8b8gyq",
      "title": "Attack on Titan OAD",
      "subtitle": "Attack on Titan OAD",
      "pic": "http://puui.wetvinfo.com/vcover_vt_pic/0/bz3il3gwp8b8gyq1638975978208/0",
      "labels": {
        "1": {
          "text": "Full",
          "color": "#FF4A22"
        }
      }
    },
    {
      "type": "ITEM_TYPE_ALBUM",
      "id": "t9rdwvmst6slsq8",
      "title": "Dr.STONE S2",
      "subtitle": "Reconstructing the original world with science!",
      "pic": "http://puui.wetvinfo.com/vcover_vt_pic/0/t9rdwvmst6slsq81633085761383/0",
      "labels": {
        "1": {
          "text": "Full",
          "color": "#FF4A22"
        }
      }
    },
    {
      "type": "ITEM_TYPE_ALBUM",
      "id": "0foxsdgr873t53g",
      "title": "Tokyo Revengers",
      "pic": "http://puui.wetvinfo.com/vcover_vt_pic/0/0foxsdgr873t53g1632968485429/0",
      "labels": {
        "1": {
          "text": "Full",
          "color": "#FF4A22"
        }
      }
    },
    {
      "type": "ITEM_TYPE_ALBUM",
      "id": "bxhkltz7d0xaqhl",
      "title": "BORUTO: NARUTO NEXT GENERATIONS S5",
      "subtitle": "BORUTO: NARUTO NEXT GENERATIONS S5",
      "pic": "http://puui.wetvinfo.com/vcover_vt_pic/0/bxhkltz7d0xaqhl1631417365423/0",
      "labels": {
        "0": {
          "text": "VIP",
          "color": "#FF4A22"
        },
        "1": {
          "text": "Full",
          "color": "#FF4A22"
        }
      }
    },
    {
      "type": "ITEM_TYPE_ALBUM",
      "id": "5jqsrcbvp04la6y",
      "title": "Legends of Dawn: The Sacred Stone",
      "subtitle": "Legends of Dawn: The Sacred Stone",
      "pic": "http://puui.wetvinfo.com/vcover_vt_pic/0/5jqsrcbvp04la6y1630049905869/0",
      "labels": {
        "1": {
          "text": "Full",
          "color": "#FF4A22"
        }
      }
    },
    {
      "type": "ITEM_TYPE_ALBUM",
      "id": "s2snqyt4n1d0gwc",
      "title": "Re-Main",
      "pic": "http://puui.wetvinfo.com/vcover_vt_pic/0/s2snqyt4n1d0gwc1625334509989/0",
      "labels": {
        "1": {
          "text": "Full",
          "color": "#FF4A22"
        }
      }
    },
    {
      "type": "ITEM_TYPE_ALBUM",
      "id": "h0xlm50tkpg1u2c",
      "title": "The Case Study of Vanitas",
      "pic": "http://puui.wetvinfo.com/vcover_vt_pic/0/h0xlm50tkpg1u2c1625126145425/0",
      "labels": {
        "1": {
          "text": "Full",
          "color": "#FF4A22"
        }
      }
    },
    {
      "type": "ITEM_TYPE_ALBUM",
      "id": "sucfd8cxv5gfuym",
      "title": "My Next Life as a Villainess S2",
      "pic": "http://puui.wetvinfo.com/vcover_vt_pic/0/sucfd8cxv5gfuym1625240407836/0",
      "labels": {
        "1": {
          "text": "Full",
          "color": "#FF4A22"
        }
      }
    }
  ]
};

/**
 * Retrieved from URL : 
 * https://www.iflix.com/_next/data/tuvqPK5nDW3xVsPlEE7AG/play/r6yht13srzu48mc-FULLMETAL-ALCHEMIST-2003.json?ids=r6yht13srzu48mc-FULLMETAL-ALCHEMIST-2003
 * 
 * Where we get from : 
 * pageProps -> "hot" attribute
 * 
 * title should be from "title"
 * subtitle should be from "episode_updated_country" -> Updated to "episode_updated_country" EP
 * 
 * the text in the image should be : 
 * "imgtag_ver" :
 * first item -> the one on left, using the "text" attribute, the "color" should be in the decoration bg color
 * second item -> the one on right, using the "text attribute"
 * 
 * the picture should be : 
 * "new_pic_hz"
 */
export const HOT_ITEMS = [{
    "title": "My Lecturer My Husband S2",
    "protagonist_name": [
      "\tReza Rahadian",
      "Prilly Latuconsina",
      "",
      "Kevin Ardilova",
      "Josephine Firmstone",
      "Maura Gabrielle",
      "Nicho Bryant",
      ""
    ],
    "new_pic_hz_country_calc": "http://puui.qpic.cn/vcover_hz_pic/0/dz9l5geq0gu14zm1655354604399/0",
    "new_pic_vt_country_calc": "http://puui.qpic.cn/vcover_vt_pic/0/dz9l5geq0gu14zm1655354592253/0",
    "new_pic_hz": "http://puui.wetvinfo.com/vcover_hz_pic/0/dz9l5geq0gu14zm1652946798718/0",
    "new_pic_vt": "http://puui.wetvinfo.com/vcover_vt_pic/0/dz9l5geq0gu14zm1652946783499/0",
    "update_desc_country": "{\"153504\":\"\",\"153513\":\"Setiap hari Jumat - Sabtu pukul 18.00 WIB (1 bagian/hari) | VIP 2 bagian lebih awal | Total 10EP\",\"153548\":\"\",\"153576\":\"\",\"8227797\":\"\"}",
    "online_language": [
      "1491937",
      "1491963",
      "1491988",
      "40",
      "54",
      "8229847"
    ],
    "default_pay_status": 12,
    "holly_online_time": "Segera Tayang",
    "areaName": "",
    "head_time": null,
    "episode_updated_country": "21",
    "main_genres": [
      "Cerita"
    ],
    "video_ids_country": [
      "h0042gbejdw",
      "w0042q5dd6b",
      "f00422swaw6",
      "d00428v95ee",
      "r0042arer23",
      "n0043vz53kf",
      "f0043uwyhmp",
      "t0043kgmzf1",
      "h00430dyeel",
      "p00439kpb18",
      "y0042v8bo7s",
      "b0043nv0sr3",
      "p00436gbov4",
      "q0043g1xv7l",
      "c004315bcdb",
      "x0043py1jgh",
      "i00430i0lh3",
      "s004363vtau",
      "g004324t5of",
      "a0043yi192j",
      "d0043xupuf1",
      "c0043ms627w",
      "o0043wzj9vo",
      "d0043mqrgbf",
      "f0043zqk4zk",
      "e0043nxo4fq",
      "r0043ilz0qk",
      "x0043705egi",
      "x0043dxh0fe",
      "p0043g8c961",
      "q0043emsqou",
      "t0043qewh4u",
      "j00438fy5wh"
    ],
    "update_desc": null,
    "is_trailer": 0,
    "cover_id": "dz9l5geq0gu14zm",
    "leading_actorX": [
      "\tReza Rahadian",
      "Prilly Latuconsina",
      "",
      "Kevin Ardilova",
      "Josephine Firmstone",
      "Maura Gabrielle",
      "Nicho Bryant",
      ""
    ],
    "leading_actor_id": [
      "278774",
      "8324511",
      "8395361",
      "8324512",
      "8369812",
      "8323804",
      "8323805",
      "8395362"
    ],
    "second_title": "My Lecturer My Husband S2",
    "clips_ids_country": [
      "y0043oou5wt",
      "i00431hlntj",
      "m0043q1xz35",
      "o00432mpg74",
      "b0043o4bvjn",
      "a0043ezp2ch",
      "a0043wl1q5q",
      "f0043cu45ni",
      "n00436ud709",
      "g0043w91x6t",
      "t0043mf12cr",
      "e0043228igb",
      "n0043bqa7py",
      "p0043zunbjn",
      "z00439y0n73",
      "t00435edgy2",
      "h0043kkqnbp",
      "q0043bi223m",
      "m0043ud7ii6",
      "m00434a4yoe",
      "d0043eygm71",
      "k0043mky3ei",
      "k0043qlyr7e",
      "u0043rpodtz",
      "b0043uao0vs",
      "c0043m9gx0f",
      "m0043yjtmk9",
      "m00438a0pqo",
      "f004338urw8",
      "o0043oquqm1",
      "s0043fat65j",
      "x0043ojzbkf",
      "n0043i48wqs",
      "o004301rc1c",
      "y00438gw9ai",
      "m00434mj8dg",
      "a0043xfy7oy",
      "m0043g2zl95",
      "o0043em09aq",
      "w0043znehvq",
      "j0043mgiohw",
      "r0043ytinly",
      "y00438rna36",
      "y0043c3yf32",
      "j0043ipdv4u",
      "x0043jg5qan",
      "a0043r7lr2r",
      "y0043wd753z",
      "f0043hgn12r",
      "o0043w91hji",
      "z0043hg7jns",
      "f0043k9oy40",
      "z00437sxskv",
      "a0043ukiu8r",
      "b00438qmm10",
      "b004384qklf",
      "n0043pbe34e",
      "b0043fde2nq",
      "v0043cuu85i",
      "n0043bx9olq",
      "x00437udxaf",
      "l0043t98f34",
      "p0043xatw3h",
      "i0043gprfhw",
      "i0043fqhmzo",
      "f004360h0qw",
      "x0043ccu6mx",
      "d0043x7tljq",
      "j0043eiietv",
      "b00432lr0ad",
      "v00434hxzqm",
      "b0043s08o63",
      "r00434z3x3f",
      "m0043xv9m6s",
      "q0043x7vjff",
      "y0043eqptm6",
      "x0043yod13g",
      "v0043s0p2u7",
      "g0043sm0f8c",
      "h0043ooyaji",
      "k0043kykpzn",
      "y0043dt90ha",
      "r0043e9efwj",
      "v0042t2muwg",
      "c0042cjrnes",
      "y0043tinf8u",
      "v0043ebs8wy",
      "y0043bz21l1",
      "e0043ghxuw3",
      "e0042pygh3m",
      "j0042xtheux",
      "n0043olmohp",
      "t00421r0z8c",
      "z0042tcaxt8",
      "l0042yr29my",
      "o0043pa55ro",
      "p0042lbba9s",
      "m0042bm0v5g",
      "v0042cnmdgn",
      "w0042y8gq7r"
    ],
    "category_map": [
      10470,
      "Film/Sinetron",
      1089,
      "SerialTV",
      2,
      "serial Drama TV"
    ],
    "director": [
      "\tMonty Tiwa"
    ],
    "pay_status": 12,
    "operation_type_country": "{\"153504\":\"\",\"153513\":1518001,\"153548\":\"\",\"153576\":\"\",\"8227797\":1518001}",
    "episode_all": "20",
    "year_name": [
      "2022"
    ],
    "description": "Sukses dengan season 1,  berlanjut ke season 2. Kisahnya tentang kehidupan keluarga mereka setelah menikah. Inggit dan Arya, harus menghadapi kenyataan kehidupan berumah tangga tidak mudah, penuh konflik, rumit dan lucu. Mantan pacar Arya, Karin datang dari luar negeri. Sementara itu, Inggit harus menutup buku perihal hubungannya dengan Tristan. Seberapa kuat cinta mereka menahan godaan masa lalu satu sama lain?",
    "imgtag_ver": {
      "0": {
        "text": "VIP",
        "color": "#FF4A22"
      },
      "1": {
        "text": "updated to 10C",
        "color": "#FF4A22"
      }
    },
    "type": 2,
    "is_area_limit": 0,
    "cover_checkup_grade": 4,
    "tail_time": null
  },
  {
    "category_map": [
      10470,
      "Film/Sinetron",
      1089,
      "SerialTV",
      2,
      "serial Drama TV"
    ],
    "director": [
      "Zhenxiang Fei"
    ],
    "pay_status": null,
    "operation_type_country": "{\"153513\":\"\",\"153548\":\"\",\"153566\":\"\",\"153576\":\"\",\"8227797\":\"\"}",
    "episode_all": "56",
    "year_name": [
      "2022"
    ],
    "description": "Cheng Shao Shang muda ditinggal orangtuanya pergi berperang. Demi melindungi diri, ia harus cerdik bersiasat menghadapi jebakan bibinya. Dia harus ekstra cerdas sambil berpura-pura memperlihatkan sebaliknya. Tumbuh tanpa cinta dari orangtua, Cheng Shao Shang menjadi pribadi pragmatis dan takut untuk menikah. Dia bertemu tiga pria, anak angkat kaisar Ling Bu Yi, Yuan Shen dari Gunung Bailu, dan pangeran Lou Yao, yang masing-masing punya keunggulan dan kelemahan. Meski jalan menemukan cinta penuh gelombang, dia tak menyesali pilihan yang telah dibuat.",
    "imgtag_ver": {
      "0": {
        "text": "VIP",
        "color": "#FF4A22"
      },
      "1": {
        "text": "updated to 28",
        "color": "#FF4A22"
      }
    },
    "is_area_limit": 0,
    "type": 2,
    "cover_checkup_grade": 4,
    "title": "Asmara Laksana Galaksi",
    "protagonist_name": [
      "Wu Lei",
      "Guo Tao",
      "Zeng Li",
      "Rosy Zhao"
    ],
    "new_pic_hz_country_calc": "http://puui.qpic.cn/vcover_hz_pic/0/5ns3tlffhfhwzto1657510234467/0",
    "new_pic_vt_country_calc": "http://puui.qpic.cn/vcover_vt_pic/0/5ns3tlffhfhwzto1657510216392/0",
    "new_pic_vt": "http://puui.qpic.cn/vcover_vt_pic/0/5ns3tlffhfhwzto1656925680337/0",
    "new_pic_hz": "http://puui.qpic.cn/vcover_hz_pic/0/5ns3tlffhfhwzto1656925700580/0",
    "online_language": [
      "12",
      "14",
      "1491937",
      "1491963",
      "1491973",
      "1491988",
      "1491994",
      "40",
      "54",
      "8229847",
      "9"
    ],
    "update_desc_country": "{\"153513\":\"Gratis: Setiap hari Selasa - Sabtu pukul 19.00 WIB (1EP/hari) | VIP: Setiap hari Selasa - Kamis pukul 19.00 WIB (2EP/hari) | Minggu pertama VIP update di hari Selasa - Sabtu (2EP/hari) | Total 27EP\",\"153548\":\"\",\"153576\":\"\",\"8227797\":\"\"}",
    "default_pay_status": 6,
    "holly_online_time": null,
    "areaName": "Daratan/Tiongkok",
    "head_time": null,
    "episode_updated_country": "28",
    "main_genres": [
      "Romance"
    ],
    "update_desc": null,
    "video_ids_country": [
      "v0043yx35ea",
      "d004346dhg8",
      "j0043du944l",
      "e0043qxfkfn",
      "p00439hfok0",
      "r0043kufopn",
      "q00438vacio",
      "c00437wdud7",
      "k00432w3iy7",
      "d0043s3fk9x",
      "a0043ijgol2",
      "p0043zlympi",
      "g0043v0zavr",
      "r0043lj8qfv",
      "w0043x771nb",
      "b00431sly17",
      "w0043jdgl1r",
      "v0043gmnc51",
      "d0043vbbhfl",
      "e0043t34sao",
      "k00431mv07i",
      "a00435alrje",
      "o004362zyfy",
      "v0043gw75sf",
      "q0043oxko6l",
      "c00434jd4r0",
      "m0043cljp9n",
      "o0043o08dt1",
      "t0043ezzmhb",
      "q00435rnbfk",
      "c00434zpb0t",
      "e004301cuyu",
      "y0043vgmbt3",
      "r0043fgoyhq",
      "r0043ariqkt",
      "e0043q1k9ra",
      "d0043u2t0rr",
      "p0043j0p1dn",
      "i0043b6u7j9",
      "t0043xgcgxf",
      "x0043l2qj3l",
      "s0043mnfp7j",
      "d004342kzrt",
      "t00439vnqgy"
    ],
    "is_trailer": 0,
    "cover_id": "5ns3tlffhfhwzto",
    "leading_actorX": [
      "Wu Lei",
      "Guo Tao",
      "Zeng Li",
      "Rosy Zhao"
    ],
    "leading_actor_id": [
      "84004",
      "79321",
      "95077",
      "1594422"
    ],
    "second_title": "Asmara Laksana Galaksi",
    "clips_ids_country": [
      "g0043txwvv1",
      "o0043kt3lqr",
      "d0043ou8xry",
      "z0043ylt5jw",
      "u0043o2ljk5",
      "i0043jusd2i",
      "r0043gqo4eh",
      "h0043zovr86",
      "w0043iov6qp",
      "s0043nft31p",
      "h0043eucmd9",
      "d0043jbvoiv",
      "o0043e9vts3",
      "m0043hspj5a",
      "o0043exmyhq",
      "b0043ijs4ts",
      "m0043radibi",
      "e00439myyam",
      "o004367ai7s",
      "i0043fo49op",
      "n0043b188b0",
      "h0043xympzz",
      "i0043avt0fj",
      "l0043m45ltw",
      "r0043zg0kkt",
      "y0043ieaz56",
      "d00436yyq6g",
      "o00437k50is",
      "d0043fmfj9v",
      "y004352i1wq",
      "w00433vrchj",
      "d00431smteh",
      "e0043sujhet",
      "s0043acw3ll",
      "q00430bl5n6",
      "g0043qppt15",
      "u0043g79ej0",
      "h00436qc28j",
      "q0043a9znpk",
      "r0043vkq82v",
      "h0043or7wx4",
      "r0043qtc5tq",
      "d0043sxv901",
      "j0043a5x6zc",
      "v00439lanyg",
      "z0043r5iic6",
      "o0043y6ouvm",
      "i0043u2mm0h",
      "d0043bcgts7",
      "o0043r35ukj",
      "b0043zntq3a",
      "k0043790ham",
      "q004373bzpm",
      "n0043784fzx",
      "z004337r4a7",
      "z0043s6ja41",
      "r0043fnzlm5",
      "z00432k97rf",
      "r004376l9lc",
      "e0041op6y2h",
      "e0041eyxvnw",
      "a00436vy81i",
      "i0043h85vtb",
      "d0043voii2n",
      "s0043504o8l",
      "r00435g9jhx",
      "t0043huge2r",
      "l00431itu3m",
      "u0043kctdn0",
      "w0043fitax4",
      "p00437olhzl",
      "h0043dcg5a5",
      "p0043aprtw1",
      "r00439tf88w",
      "y00438odbt0",
      "a0043coxggk",
      "l0043mrhv7e"
    ],
    "tail_time": null
  },
  {
    "head_time": null,
    "episode_updated_country": "43",
    "main_genres": [
      "Romance"
    ],
    "update_desc": null,
    "video_ids_country": [
      "h004379khuq",
      "l00432ea5um",
      "r0043s1j186",
      "p0043zmwyc6",
      "y00434o8weh",
      "t00432sdsxh",
      "z0043ewztky",
      "j004398oxl5",
      "w0043iarrct",
      "d004326lpmi",
      "c0043s02x39",
      "s0043b2qf0t",
      "l0043zoiaws",
      "r0043d2wmsd",
      "z0043d1upvi",
      "e0043ipyk9r",
      "a0043ywcuf3",
      "x0043de84uy",
      "c0043vu52ow",
      "i00435qiatq",
      "k0043u3n2j3",
      "l0043m9sms0",
      "u004392vyn0",
      "t004398miut",
      "n0043tpbjz5",
      "j0043qwi1mn",
      "h0043mt9fag",
      "q0043kidmp9",
      "y0043scuiey",
      "g0043uyfwhv",
      "j0043oc89cz",
      "v00431s93st",
      "u0043n8u63v",
      "s0043bzcnk7",
      "o0043r7609z",
      "c0043mvtq8i",
      "t00439smc0p",
      "z0043vz8c4l",
      "p0043l88epr",
      "m0043s8z8my",
      "c0043rb3jqg",
      "u0043180id5",
      "m0043h6ignf"
    ],
    "is_trailer": 0,
    "cover_id": "0thhs8ch9gj40mp",
    "leading_actorX": [
      "Chen Qiaoen",
      "Jin Han",
      "Chen Youwei",
      "Wang Zixuan",
      "Zou Tingwei",
      " Wang Jianing ",
      "Wang Zirui ",
      "Xie Shuai "
    ],
    "leading_actor_id": [
      "79779",
      "303979",
      "1608232",
      "509720",
      "96318",
      "95221",
      "95858",
      "1295903"
    ],
    "second_title": "Kekasihku, Cahayaku",
    "clips_ids_country": [
      "p0043fqs6ta",
      "s00437o5mq3",
      "l0043ekf8ve",
      "k0043nfvnok",
      "g0043dzu3i4",
      "j0043afxv67",
      "k0043yxtiw9",
      "g0043w1x7q8",
      "g00434oyq37",
      "c00436urzi3",
      "x00439ih13x",
      "p0043v008xu",
      "o0043a84gr6",
      "j0043ydele5",
      "f0043hst2pv",
      "i0043kdjvqg",
      "g0043txd4g8",
      "v00435cpy7t",
      "z00437vkeqz",
      "y00435klgsf",
      "n00433n93hw",
      "b0043ysbtt0",
      "g0043amgxdq",
      "r0043v3rp4p",
      "o00437xf710",
      "m0043ccbmas",
      "o00434sdzl1",
      "j0043k6bzmx",
      "m00432g5kfn",
      "b00438b2pa4",
      "u0043yjdboj",
      "s0043z99dgj",
      "t00430tauuo",
      "u004353bfgb",
      "j0043crqa1j",
      "h0043wq85dw",
      "n0043hsjs2y",
      "c00433ybacb",
      "h0043gchlsl",
      "f004384ejox",
      "k0043stt2uu",
      "r0043o7i917",
      "y0043709nvq",
      "o0043o9wz4c",
      "c0043nevsk4",
      "j0043mgntzw",
      "h0043m08ju7",
      "i00431cqoha",
      "n00430404f0"
    ],
    "category_map": [
      10470,
      "Film/Sinetron",
      1089,
      "SerialTV",
      2,
      "serial Drama TV"
    ],
    "director": [
      "Chen Mingzhang"
    ],
    "pay_status": null,
    "operation_type_country": "{\"153513\":\"\",\"153548\":\"\",\"153566\":\"\",\"153576\":\"\",\"8227797\":\"\"}",
    "episode_all": "43",
    "year_name": [
      "2022"
    ],
    "description": "Dugu Rounan, seorang manager artis yang sukses, terpuruk hingga ke dasar karena pengkhianatan artisnya, Song Zihao dan staf lainnya. Tidak mau menerima kekalahan, Ruonan bersumpah untuk kembali suatu hari nanti. Dia membangun managemen artis yang baru dan mendapat kesempatan kedua. Di tengah jalan, ia bertemu Ji Mo, seorang direktur perusahaan yang dingin. Pertemuan mereka yang tak terduga kemudian berujung pada saling jatuh cinta.",
    "imgtag_ver": {
      "1": {
        "text": "Full",
        "color": "#FF4A22"
      }
    },
    "type": 2,
    "is_area_limit": 0,
    "cover_checkup_grade": 4,
    "title": "Kekasihku, Cahayaku",
    "protagonist_name": [
      "Chen Qiaoen",
      "Jin Han",
      "Chen Youwei",
      "Wang Zixuan",
      "Zou Tingwei",
      " Wang Jianing ",
      "Wang Zirui ",
      "Xie Shuai "
    ],
    "new_pic_vt_country_calc": "http://puui.qpic.cn/vcover_vt_pic/0/0thhs8ch9gj40mp1658205896897/0",
    "new_pic_hz_country_calc": "http://puui.qpic.cn/vcover_hz_pic/0/0thhs8ch9gj40mp1658205913338/0",
    "new_pic_hz": "http://puui.qpic.cn/vcover_hz_pic/0/0thhs8ch9gj40mp1655187714253/0",
    "new_pic_vt": "http://puui.qpic.cn/vcover_vt_pic/0/0thhs8ch9gj40mp1655187698807/0",
    "online_language": [
      "12",
      "14",
      "1491937",
      "1491963",
      "1491973",
      "1491988",
      "1491994",
      "40",
      "8229847",
      "9"
    ],
    "update_desc_country": "{\"153513\":\"Gratis: Setiap Hari pukul 19.00 WIB (1EP/hari) | VIP: Setiap hari Senin - Kamis pukul 19.00 WIB (2EP/hari), Jumat - Minggu (1EP/hari) | Total 43EP\",\"153548\":\"\",\"153566\":\"\",\"153576\":\"\",\"8227797\":\"\"}",
    "default_pay_status": 8,
    "holly_online_time": null,
    "areaName": "Daratan/Tiongkok",
    "tail_time": null
  },
  {
    "director": [],
    "pay_status": 6,
    "operation_type_country": "{\"153512\":\"\",\"153513\":\"\",\"153548\":\"\",\"153566\":\"\",\"153569\":\"\",\"153576\":\"\",\"8227797\":\"\"}",
    "episode_all": "500",
    "year_name": [
      "2018"
    ],
    "description": "Versi anime dari \"Douluo Continent\". Murid luar klan Tang, Tang San, yang diam-diam mempelajari kekuatan terbesar sekte itu terjun dari jurang demi membuktikan ketulusannya. Dengan identitas lain, ia memasuki dunia roh para jago silat bernama Dunia Roh. Di dunia itu, jiwa bela diri setiap roh dibangkitkan saat berusia 6 tahun di kuil roh pendekar. Tang San kecil lalu memulai perjalanan menjadi seorang pendekar roh. Mampukah ia membangun kembali kejayaan klan Tang?",
    "imgtag_ver": {
      "0": {
        "text": "VIP",
        "color": "#FF4A22"
      },
      "1": {
        "text": "updated to 218",
        "color": "#FF4A22"
      }
    },
    "type": 3,
    "is_area_limit": 0,
    "cover_checkup_grade": 4,
    "title": "Dunia Roh",
    "protagonist_name": null,
    "new_pic_vt_country_calc": "http://puui.wetvinfo.com/vcover_vt_pic/0/wzx7pbebgpxlqqr1646815263645/0",
    "new_pic_hz_country_calc": "http://puui.wetvinfo.com/vcover_hz_pic/0/wzx7pbebgpxlqqr1646815280057/0",
    "new_pic_hz": "http://puui.wetvinfo.com/vcover_hz_pic/0/wzx7pbebgpxlqqr1612442717167/0",
    "new_pic_vt": "http://puui.wetvinfo.com/vcover_vt_pic/0/wzx7pbebgpxlqqr1551925800/0",
    "online_language": [
      "12",
      "14",
      "1491937",
      "1491963",
      "1491973",
      "1491988",
      "1491994",
      "54",
      "8",
      "8229847",
      "9"
    ],
    "update_desc_country": "{\"153512\":\"\",\"153513\":\"Setiap hari Sabtu pukul 09:00 WIB VIP update 1EP\",\"153548\":\"\",\"153566\":\"\",\"153576\":\"\",\"8227797\":\"\"}",
    "default_pay_status": 6,
    "holly_online_time": "Tayang 6 Februari",
    "areaName": "Daratan/Tiongkok",
    "head_time": null,
    "episode_updated_country": "218",
    "main_genres": [
      "Fantasi Misterius",
      "Perang",
      "Petualangan"
    ],
    "update_desc": null,
    "video_ids_country": [
      "m0030872c5z",
      "g0030vss232",
      "g0030rv0rzw",
      "n0030us3d2p",
      "v0030g4nh0d",
      "i0030bnsfgu",
      "z0030ztm53l",
      "l00304ifwf6",
      "a0030p83kcd",
      "k0030wlw11v",
      "u0030gag5ra",
      "e00309srwps",
      "k0030fwltg2",
      "a0030ra3mi3",
      "i0030r8eliy",
      "i00303fhhvf",
      "b0030t7yyv2",
      "h0030u4yy2z",
      "a0030g3gwfo",
      "u0030y0n8rb",
      "d0030cn7h0e",
      "f0030lpnhcr",
      "h0030mjcoyh",
      "l0030uf4rmy",
      "g00309i1twe",
      "s0030sn73zo",
      "f0031gaesg0",
      "h0031opsvyq",
      "t0031to13kd",
      "t0031lnna8g",
      "t0031r2nmg2",
      "q00319x2syy",
      "g0031zf1ko6",
      "a0031qdgi3i",
      "o003141rhax",
      "m003189pqbc",
      "t0031ul34vy",
      "b0031g32oo4",
      "q0031dzopbc",
      "u0031ymwj28",
      "x0031a05pp6",
      "b00312yvil4",
      "f0031qgt60g",
      "q0031t04lzd",
      "g003139kb1w",
      "e0031yn1lpm",
      "l0031rqrs19",
      "d0033gj1p11",
      "n003354ptsc",
      "m0033nob00l",
      "e0033xue4i0",
      "o0033mysuak",
      "w0033lrkcrt",
      "n0033o921e1",
      "a0033338mnf",
      "k0033w1vstr",
      "f00330fiks2",
      "a00334jqir3",
      "q0033xwfbgr",
      "v0033v1cto7",
      "h0033z5xbx1",
      "l0033mcvxbt",
      "r00335swcfh",
      "v0033xmmm1h",
      "x0033rky3sa",
      "l00330xsosj",
      "s003340et1s",
      "f0033pyxce0",
      "k0033qh2b6f",
      "j0033voijse",
      "s00333x523h",
      "b0033u39m6e",
      "i00332tccpd",
      "p003330iguh",
      "p0033tfuokt",
      "k0033d5ck9l",
      "n0033azszga",
      "u0033a9srz7",
      "n0033m8ageo",
      "k0033jqmm51",
      "z0033hl6jzy",
      "e0033i8kg2q",
      "e0033wskkxl",
      "i0033reg5gb",
      "y003374b745",
      "k0033v670j8",
      "h0033wxve6m",
      "u0033h6y6sp",
      "g0033ihv9ki",
      "d0033xcxapg",
      "g0033307rnq",
      "q0033hmj6r7",
      "d0033epuz81",
      "x00333osrjt",
      "s003364efh0",
      "w00330lp15v",
      "u0033sr2phl",
      "i00333og0ed",
      "e0033ox9d8l",
      "o0033qsim9s",
      "q003304cjls",
      "f0033ddifhi",
      "j00338t8kqw",
      "j0034ykodtz",
      "t0034pulkha",
      "u0034zyy5no",
      "k0034gq5y28",
      "c0034vl039f",
      "k0034u7vqmg",
      "d0034g0p7r2",
      "m00341ozg59",
      "b0034gzs1o7",
      "q0034opuw7r",
      "q0034fpc0gf",
      "h00349z6m3d",
      "a00344o44bz",
      "o0034lz8si2",
      "y00342u57q1",
      "a0034n0kuev",
      "a0034mdtb80",
      "j0034tmn1w3",
      "a003459nv9r",
      "k003477vfqn",
      "z0034yf4h7u",
      "k0034tv2chf",
      "r0034nmn7kq",
      "p00348m9er9",
      "u0034ry45r9",
      "i0034epq6x3",
      "q0035xdfkrd",
      "z0035as3773",
      "o003536g9ux",
      "u00353xxofm",
      "g0035vm3wu5",
      "a00352qy37n",
      "g00352xisb7",
      "y0035ciesis",
      "v0035fzo91b",
      "d0035rzzm1n",
      "e0035ewwxa0",
      "e0035hhu361",
      "z0035xc6xwr",
      "v0035fmys5u",
      "p0036ymz26w",
      "b003695brb7",
      "v0036yypvj9",
      "v0036fc7y37",
      "y0036b86i56",
      "n0036vkwlud",
      "f003689irth",
      "x0036rrbqsi",
      "d0036l0kfn9",
      "c0036ruwvuu",
      "z003686o7kl",
      "r0036lxbrxi",
      "s0036r3j4pr",
      "q0036eyky8o",
      "s0037gs88zg",
      "u0037pkssop",
      "a0038vltb72",
      "s00392o212v",
      "k00396mqn62",
      "r0039fmapuc",
      "w0039wkxvcw",
      "a0039732d3x",
      "e0039ipz4l4",
      "b0040z476j0",
      "d0040izpwrp",
      "k0040kilaes",
      "e0040ct9wod",
      "k0040h4mngd",
      "i0040c3pam8",
      "d00404y4ha8",
      "w0040bvfs6k",
      "j0040biatze",
      "z0040jtl6zd",
      "d00405qnxil",
      "e0040e3ewk6",
      "b0040b0vjjn",
      "k0040up16c1",
      "l0041g7fzmm",
      "j0041n7ms8u",
      "t0041s4tgus",
      "y0041ltwa5x",
      "w00417zjwrr",
      "t0041yzbcki",
      "a0041nzsokh",
      "t0041g4v14d",
      "q00412xy3i7",
      "z0041bk61ue",
      "c004157k4we",
      "l00416tctv4",
      "u0042izk2h1",
      "c0042esebqa",
      "a0042fdul4t",
      "z0042xokis9",
      "s00421ynhii",
      "z0042h3qp7z",
      "y0042h92oyq",
      "r00424hv65s",
      "x00429xqxqb",
      "w0042yf2upg",
      "b0042jejb7v",
      "m0042fzsj29",
      "w0042tnd825",
      "w00425mna5e",
      "j00427i1g4u",
      "d0042xbzb80",
      "e0042mss1x3",
      "g0042lljdsu",
      "f0043w9cc09",
      "l00430b3znm",
      "v0043vc3lfu",
      "f004327knra",
      "r00431cipsn",
      "j0043kpt6vk",
      "a00438wkngu",
      "j0043fbtjdw"
    ],
    "is_trailer": 0,
    "cover_id": "wzx7pbebgpxlqqr",
    "leading_actorX": null,
    "leading_actor_id": null,
    "second_title": "Dunia Roh",
    "clips_ids_country": [
      "b0031fhkrd5",
      "f003143kh5f",
      "v0031wesxw0",
      "y0031e9ulj0",
      "e00313b0gie",
      "w0031wo3ptd",
      "t00310flo91",
      "a0031dw1gt5",
      "u0031vlr13a",
      "x0031u1mkkh",
      "u0031kjmg20",
      "g0032hex7qx",
      "e0032qwfmu5",
      "q0032pmtmza",
      "f0032ga9w6c"
    ],
    "category_map": [
      10994,
      "Film/Sinetron",
      1204,
      "animasi",
      3,
      "animasi"
    ],
    "tail_time": null
  },
  {
    "type": 2,
    "is_area_limit": 0,
    "cover_checkup_grade": 4,
    "protagonist_name": [
      "Liu Xie'ning",
      ""
    ],
    "title": "Malam Cinta Bersamamu",
    "new_pic_vt_country_calc": "http://puui.qpic.cn/vcover_vt_pic/0/lzs7mj96jpcdt7m1657254192424/0",
    "new_pic_hz_country_calc": "http://puui.qpic.cn/vcover_hz_pic/0/lzs7mj96jpcdt7m1657254208851/0",
    "new_pic_hz": "http://puui.qpic.cn/vcover_hz_pic/0/lzs7mj96jpcdt7m1657099729156/0",
    "new_pic_vt": "http://puui.qpic.cn/vcover_vt_pic/0/lzs7mj96jpcdt7m1657099649757/0",
    "update_desc_country": "{\"153513\":\"VIP: Setiap hari Sabtu - Senin pukul 11.00 WIB (2EP/hari) , Gratis 1 minggu setelahnya | Total 24EP\",\"153548\":\"\",\"153576\":\"\",\"8227797\":\"\"}",
    "online_language": [
      "12",
      "14",
      "1491937",
      "1491963",
      "1491973",
      "1491988",
      "1491994",
      "40",
      "54",
      "8229847",
      "9"
    ],
    "default_pay_status": 6,
    "holly_online_time": null,
    "areaName": "Daratan/Tiongkok",
    "head_time": null,
    "episode_updated_country": "24",
    "main_genres": [
      "Romance"
    ],
    "update_desc": null,
    "video_ids_country": [
      "h00436xwuz9",
      "k0043c9ohil",
      "u00435ky4vn",
      "o0043zziw6u",
      "z0043efwtqk",
      "s0043dwz0dv",
      "i0043k1xdlz",
      "k0043bytt65",
      "x00436v6wvc",
      "q0043xqawyg",
      "w0043rxd4k3",
      "l0043xex495",
      "j0043qx0uux",
      "z0043ak76wh",
      "k0043bkft2z",
      "e0043fzqx5y",
      "a00432xrvgs",
      "a00435apu9v",
      "n0043ry1g3e",
      "d004394qvno",
      "i004351orv7",
      "p0043g7sun6",
      "p00431k3ric",
      "n0043ezaq44"
    ],
    "is_trailer": 0,
    "cover_id": "lzs7mj96jpcdt7m",
    "leading_actor_id": [
      "8262415",
      "1589147"
    ],
    "leading_actorX": [
      "Liu Xie'ning",
      ""
    ],
    "second_title": "Malam Cinta Bersamamu",
    "clips_ids_country": [
      "z0043lh78o8",
      "x00437wraue",
      "w0043qaij3c",
      "h004349t1xz",
      "z0043oxz1sl"
    ],
    "category_map": [
      11811,
      "",
      11810,
      "",
      2,
      "serial Drama TV"
    ],
    "director": [
      ""
    ],
    "operation_type_country": "{\"153513\":\"\",\"153548\":\"\",\"153566\":\"\",\"153576\":\"\",\"8227797\":\"\"}",
    "pay_status": 6,
    "episode_all": "24",
    "year_name": [
      "2022"
    ],
    "description": "Untuk sekian lama Qiqi berperan sebagai karakter pendukung wanita yang kejam di komik. Kemudian ia membuat kesalahan dan masuk ke komik baru \"Malam Cinta Bersamamu\", dan berubah dari karakter pendukung menjadi tokoh utama pahlawan wanita bernama Luo Qing. Tiadanya garis cinta untuk penjahat laki-laki, Qiqi menyelamatkan diri dan akhirnya menemukan kebahagiaannya sendiri.",
    "imgtag_ver": {
      "0": {
        "text": "VIP",
        "color": "#FF4A22"
      },
      "1": {
        "text": "Full",
        "color": "#FF4A22"
      }
    },
    "tail_time": null
  },
  {
    "episode_all": "32",
    "year_name": [
      "2021"
    ],
    "description": "Qiao Jing Jing dan Yu Tu dulunya teman sekolah di SMA. Kala itu, Qiao Jing Jing dua kali menyatakan cinta dan dua kali pula ditolak. Sepuluh tahun kemudian, Qiao Jing Jing, yang kini telah jadi seleb terkenal, jadi bintang iklan sebuah video game, tapi kenyataan kalau ia tak bisa main game terkuak. Demi menyelamatkan reputasinya, sang manajer mengikutsertakannya pada sebuah kompetisi game. Saat itulah ia bertemu kembali dengan Yu Tu, seorang insinyur pesawat terbang yang tengah ragu dengan masa depannya. Qiao Jing Jing meminta Yu Tu menjadi pelatih game. Kala itulah cinta mulai bersemi di antara mereka.",
    "imgtag_ver": {
      "1": {
        "text": "Full",
        "color": "#FF4A22"
      }
    },
    "type": 2,
    "is_area_limit": 0,
    "cover_checkup_grade": 4,
    "protagonist_name": [
      "Yang Yang",
      "Dilraba Dilmurat",
      "Yueming Pan",
      "Hu Ke",
      "Ian Wang",
      "Zheng Hehuizi"
    ],
    "title": "Kau Kebanggaanku",
    "new_pic_hz_country_calc": "http://puui.wetvinfo.com/vcover_hz_pic/0/u37kgfnfzs73kiu1640231458462/0",
    "new_pic_vt_country_calc": "http://puui.wetvinfo.com/vcover_vt_pic/0/u37kgfnfzs73kiu1626325029037/0",
    "new_pic_vt": "http://puui.wetvinfo.com/vcover_vt_pic/0/u37kgfnfzs73kiu1626940005480/0",
    "new_pic_hz": "http://puui.wetvinfo.com/vcover_hz_pic/0/u37kgfnfzs73kiu1626940017413/0",
    "online_language": [
      "12",
      "14",
      "1491937",
      "1491963",
      "1491973",
      "1491988",
      "1491994",
      "40",
      "54",
      "8229847",
      "9"
    ],
    "update_desc_country": "{\"153513\":\"Setiap hari Senin - Rabu pukul 19:00 WIB (2EP/hari) | VIP 6EP lebih awal | Total 32EP\"}",
    "default_pay_status": 8,
    "holly_online_time": "26 Juli",
    "areaName": "Daratan/Tiongkok",
    "head_time": null,
    "episode_updated_country": "32",
    "main_genres": [
      "Romance"
    ],
    "video_ids_country": [
      "p0039b9nvik",
      "i0039n1csd6",
      "r0039qgfjmj",
      "c00395bbu56",
      "m0039fv0fnl",
      "q0039r4q9mj",
      "z0039v27vks",
      "c0039m04mf7",
      "j0039qs2v9p",
      "p0039orhp29",
      "s0039hxgdj5",
      "d0039j2mmuv",
      "n0040yqy9ok",
      "y0040omj8ub",
      "g00408fndoe",
      "j0040k559jb",
      "m0040j40s1i",
      "d0040vikytu",
      "l0040whkmlm",
      "p0040g9tyxc",
      "l0040t3yga9",
      "p0040msisnl",
      "w00405pp364",
      "y0040ju7y9o",
      "f0040jef0ua",
      "x0040ys4s57",
      "j00401wtzjo",
      "a0040k5hoq5",
      "m0040jjaw75",
      "u00403aaxy2",
      "w0040rc1bxd",
      "e0040rcys8l"
    ],
    "update_desc": null,
    "is_trailer": 0,
    "cover_id": "u37kgfnfzs73kiu",
    "leading_actor_id": [
      "510635",
      "222071",
      "94125",
      "94298",
      "474588",
      "1334275"
    ],
    "leading_actorX": [
      "Yang Yang",
      "Dilraba Dilmurat",
      "Yueming Pan",
      "Hu Ke",
      "Ian Wang",
      "Zheng Hehuizi"
    ],
    "second_title": "Kau Kebanggaanku",
    "clips_ids_country": [
      "o0043evhbmr",
      "i0042ztomji",
      "j0040j3y6i7",
      "g0040t1khiw",
      "u0040m9zicl",
      "v004079jxcf",
      "r0040ez2l89",
      "p0040kx2541",
      "k00401ggejn",
      "t0040rj3c9k",
      "m00404rlihg",
      "y0040orzgfv",
      "u0040q13nrq",
      "h0040pq2dwt",
      "r32693seqou",
      "i00408fqank",
      "y0040xsywrb",
      "h3268mi2y5x",
      "g0040ojcpm8",
      "a0040b9f8p9",
      "t0040x06pd6",
      "z0040xvwdt3",
      "e0040rmm02o",
      "o32683356c7",
      "d32685ld36g",
      "u0040tqs5ct",
      "l0040ibtuy0",
      "r00400aupu2",
      "n00400pc917",
      "m00403r18ts",
      "f0040a8sygq",
      "k00407yrxrt",
      "x0040i4ghqq",
      "m0040z47k3k",
      "a0040o0bklu",
      "z00404bb79u",
      "q0040eqpeev",
      "w00400yqx4r",
      "n0040k5o6up",
      "q00401xkwfa",
      "g0040orvndz",
      "z0040n3qgyl",
      "e0040o4ccbm",
      "b0040mdd80r",
      "j0040tg38rz",
      "f0040s8k4e6",
      "p32692vil4o",
      "j32692tb6jm",
      "l32696702ln",
      "s0040cuyowo",
      "r0040dz9u23",
      "o004026aysy",
      "z0040j1prma",
      "x0040oeksz5",
      "n0040pz73p2",
      "o004041wga9",
      "c0040jbnaf9",
      "c0040s966f7",
      "z00400sd84w",
      "y0040e1qukh",
      "x0040852t79",
      "i0040khcil6",
      "o004099sl3l",
      "v0040k7xt4e",
      "f3267c4v5ay",
      "x0040kaemud",
      "f00407ybema",
      "i0040vbjvci",
      "u0040hc0f96",
      "o00409m6e2v",
      "b0040hfz8a5",
      "q0040jtj1j6",
      "d0040dbiwmw",
      "x0040qvg00v",
      "v0040ry66rz",
      "h0040kjd8j2",
      "v0040hivssm",
      "i0040dhswqh",
      "r0040aav8v8",
      "s00402v7f6b",
      "j0040dqjqmw",
      "v0040bj5zc5",
      "m0040eso523",
      "x004080i7pa",
      "o00408n69nt",
      "n0040lxvfls",
      "p0040051ymq",
      "s0040xqybrf",
      "q0040nsuihi",
      "j0040tpe1zr",
      "t0040phzmgo",
      "y0040uz92ez",
      "z32671s4k2e",
      "z0040s243di",
      "d0040nyht9y",
      "g0040xgw7au",
      "c0040vdo9n0",
      "l0040mk1i6t",
      "m0040fdzmle",
      "a0040zalu2t"
    ],
    "category_map": [
      10470,
      "Film/Sinetron",
      1089,
      "SerialTV",
      2,
      "serial Drama TV"
    ],
    "director": [
      "Wang Zhi "
    ],
    "operation_type_country": "{\"153505\":\"\",\"153513\":1518001,\"153514\":\"\",\"153548\":1518001,\"153566\":1518001,\"153569\":\"\",\"153576\":1518001,\"8227797\":\"\"}",
    "pay_status": 8,
    "tail_time": null
  },
  {
    "clips_ids_country": [
      "u0042u5iezf",
      "o00425hg584",
      "i0042k4a1lo",
      "b0042gz5545",
      "w0042flfmez",
      "h00421mrwvf",
      "q0042ccjp24",
      "v0042o1zd2k",
      "g0043399yqy",
      "h00423bsc27",
      "r0042x65xzl",
      "u00420yyh3y",
      "k0042xrvt1t",
      "s0042mugtkw",
      "h0042ijkvyx",
      "d0042hspppj",
      "l0042sirjlu",
      "y0042zjr171",
      "d0042l6fgd2",
      "c0042c0l7de",
      "k0042fxmft3",
      "h0042bn4anv",
      "v0042s2qoz1",
      "j0042r2vaif",
      "x004295z6ri",
      "u0042zmhff6",
      "u0042286143",
      "t0042d6k3yu",
      "i0042y00lxp",
      "t0042yxzbvx",
      "t0042n9uk12",
      "w0042mbip7l",
      "m0042qjhdi7",
      "e0042n7s568",
      "s0042bvoh8t",
      "z00428t3bg7",
      "y0042gle94i",
      "a0042vvqx47",
      "w0042zjjow7",
      "a00420jztax",
      "j0042r86num",
      "n00427jjha2",
      "h0042n6wcoz",
      "d0042fmvkrm",
      "t0042zyxu2t",
      "a0042eqjzjz",
      "x004283rfnr",
      "j00420bsttl",
      "e0042jgdhsl",
      "r0042u7wivu",
      "y0042we8qfb",
      "i0042v44eco",
      "t0042iqzx28",
      "p0042vdu4cj",
      "y00424qzsrz",
      "i0042z28rts",
      "v0042k02ifd",
      "k004261q8a0",
      "n0042ig1xa4",
      "e00429dbb21",
      "f00429hahrj",
      "a00428eggc7",
      "k0042p3pjvm",
      "w00424lxyyd",
      "a0042ygl7y3",
      "y0042o55o42",
      "y0042dtv0rk",
      "w0042a7dvi7",
      "j004284pf8a",
      "o00425lovnc",
      "r00427wll3c",
      "k0042lr08kl",
      "z0042cm81jp",
      "a00426jtvm6",
      "j0042s103yb",
      "h004218yf1s",
      "f0042mlnu88",
      "z0042dso7y8",
      "x0042tf01n0",
      "k00424t8o0c",
      "e0042xshqhj",
      "c0042vxxrzx",
      "b004265kv09",
      "r0042dhke46",
      "j0042z2d97d",
      "e0042rxihh2",
      "r0042h1ll1w",
      "x00423q7mrn",
      "h00420c2kv4",
      "z0042vxn65n",
      "n0042qug4y8",
      "q0042slo8m5",
      "u0042mzrymh",
      "u00420x53io",
      "z0042aleh6d",
      "d0042rpsnsv",
      "n0042s4px5k",
      "h0042741q9q",
      "c00425ty4oi",
      "o0042p45lja"
    ],
    "category_map": [
      10470,
      "Film/Sinetron",
      1089,
      "SerialTV",
      2,
      "serial Drama TV"
    ],
    "director": [
      "Yin Tao",
      ""
    ],
    "operation_type_country": "{\"153513\":1518001,\"153548\":1518001,\"153557\":\"\",\"153566\":1518001,\"153576\":1518001,\"8227797\":\"\"}",
    "pay_status": null,
    "episode_all": "40",
    "year_name": [
      "2021"
    ],
    "description": "Hei Feng Xi tampan dan elegan sedangkan Bai Feng Xi agung dan merupakan pribadi yang bebas. Selain berlawanan, mereka berdua juga tidak tertandingi ilmu silatnya. Terjebak dalam kekacauan dunia persilatan, bunga cinta mulai mekar di tengah nyawa-nyawa yang sudah dikorbankan selama 10 tahun terakhir. Mereka berdua bergabung, mengelilingi dunia untuk mencari keadilan. Apakah cinta mereka akan mendatangkan kedamaian di dalam dunia yang penuh kekacauan ini?",
    "imgtag_ver": {
      "0": {
        "text": "VIP",
        "color": "#FF4A22"
      },
      "1": {
        "text": "Full",
        "color": "#FF4A22"
      }
    },
    "type": 2,
    "is_area_limit": 0,
    "cover_checkup_grade": 4,
    "protagonist_name": [
      "Yang Yang",
      "Rosy Zhao",
      "Xuan Lu",
      "Lai Yi"
    ],
    "title": "Sang Penguasa Dunia",
    "new_pic_vt_country_calc": "http://puui.wetvinfo.com/vcover_vt_pic/0/uvwdajywre9oli91654098537250/0",
    "new_pic_hz_country_calc": "http://puui.wetvinfo.com/vcover_hz_pic/0/uvwdajywre9oli91654098549806/0",
    "new_pic_hz": "http://puui.wetvinfo.com/vcover_hz_pic/0/uvwdajywre9oli91649657202704/0",
    "new_pic_vt": "http://puui.wetvinfo.com/vcover_vt_pic/0/uvwdajywre9oli91649657190336/0",
    "update_desc_country": "{\"153513\":\"Gratis: Setiap hari Senin - Jumat pukul 19.00 WIB (1EP/hari) | VIP: Setiap hari Minggu - Rabu pukul 19.00 WIB (2EP/hari) | Total 40EP\",\"153548\":\"\",\"153557\":\"\",\"153566\":\"\",\"153576\":\"\",\"8227797\":\"\"}",
    "online_language": [
      "12",
      "14",
      "1491937",
      "1491963",
      "1491973",
      "1491988",
      "1491994",
      "40",
      "54",
      "8229847",
      "9"
    ],
    "default_pay_status": 6,
    "holly_online_time": null,
    "areaName": "Daratan/Tiongkok",
    "head_time": null,
    "episode_updated_country": "40",
    "main_genres": [
      "Kostum Tradisional"
    ],
    "update_desc": null,
    "video_ids_country": [
      "l0042a83tmu",
      "s0042aapjso",
      "d0042q1x25v",
      "y0042ichp2a",
      "a0042sapdg9",
      "b004219shqk",
      "g004225w2pa",
      "f0042idddx8",
      "g0042ic76oj",
      "v0042fpay6u",
      "m0042lyrbcd",
      "b00420obrih",
      "z0042avdgxa",
      "g0042psplpb",
      "y0042djbtbr",
      "y00420ebtzr",
      "p00429o9vl3",
      "n00429xxlle",
      "i0042bsmysa",
      "a0042vnduxk",
      "f0042eairl7",
      "z00425aan4t",
      "b0042305ldy",
      "w0042cjgsjk",
      "s00425u99l2",
      "f0042e2smzd",
      "h0042inualt",
      "h00426n9csh",
      "r0042n29sfp",
      "m00424ntqa7",
      "f00425lpdss",
      "v0042qmoxrs",
      "z0042xn2pz6",
      "q004246e6iv",
      "w0042mbc686",
      "v0042rzkd4q",
      "k0042xuu368",
      "n004217yu9w",
      "g0042ltfrwy",
      "f0042pwryaf"
    ],
    "is_trailer": 0,
    "cover_id": "uvwdajywre9oli9",
    "leading_actor_id": [
      "510635",
      "1594422",
      "102955",
      "1332858"
    ],
    "leading_actorX": [
      "Yang Yang",
      "Rosy Zhao",
      "Xuan Lu",
      "Lai Yi"
    ],
    "second_title": "Sang Penguasa Dunia",
    "tail_time": null
  },
  {
    "episode_updated_country": "30",
    "main_genres": [
      "Romance"
    ],
    "video_ids_country": [
      "n0043hlcsqc",
      "i00431gcheo",
      "a0043s5e7a4",
      "e00432e8hfi",
      "c00431oj0xf",
      "c0043fdkmts",
      "z0043urpxdh",
      "z0043qvz8ig",
      "i0043q74ycj",
      "c0043kjrb49",
      "r00439tip4j",
      "v0043636m3g",
      "h00432ourlw",
      "q0043kzjz5o",
      "v0043gl27ol",
      "k0043k30h4s",
      "q0043n2m1za",
      "r0043vwhbis",
      "o0043816911",
      "n00434gk47t",
      "h0043ayr4zr",
      "a0043wpjus1",
      "f0043mzngln",
      "g0043i5fhov",
      "i0043b6y8kg",
      "u0043gwv99o",
      "y0043byzuwe",
      "h00436xqmf9",
      "t00434x08sk",
      "f004359pfdv"
    ],
    "update_desc": null,
    "is_trailer": 0,
    "cover_id": "2z5sa8y7uqmh6z1",
    "leading_actor_id": [
      "142890",
      "8230921",
      "1671380",
      "8235536"
    ],
    "leading_actorX": [
      "Angelababy",
      "Edward Lai",
      "Tian Yitong",
      ""
    ],
    "second_title": "Love The Way You Are",
    "clips_ids_country": [
      "l0043unm0c1",
      "l00436zaseo",
      "v0043czpq6d",
      "e0043ibg0jr",
      "t0043d19wzq",
      "b0043d78wxf",
      "l00436lvsrp",
      "m0043854sy3",
      "o0043cnar0i",
      "a0043d0p2kw",
      "k0043g9rjkj",
      "p0043gh9pzi",
      "x0043gfmvvm",
      "q00430r2s3v",
      "y0043qvw4ew",
      "v00434z3g8w",
      "d0043i98mhm",
      "c0043lt2eba",
      "i0043ccyp6r",
      "k0043zqohyi",
      "c004330spl8",
      "h004353hwcy"
    ],
    "category_map": [
      10470,
      "Film/Sinetron",
      1089,
      "SerialTV",
      2,
      "serial Drama TV"
    ],
    "director": [
      "Chung Chung Yu"
    ],
    "operation_type_country": "{\"153513\":\"\",\"153548\":1518001,\"153566\":1518001,\"153576\":\"\",\"8227797\":\"\"}",
    "pay_status": null,
    "year_name": [
      "2022"
    ],
    "episode_all": "30",
    "description": "Yin Yeke yang tampaknya memiliki kehidupan yang sempurna, menjalani kehidupan usia 30-an sebagai hal biasa. Baik di perusahaan atau di rumah, dia penuh perhatian dan berpengetahuan luas tanpa jalan buntu. Seperti Wonder Woman yang tidak pernah lelah, dia menjaga semua orang di sekitarnya, hanya lupa menghangatkan dirinya sendiri. Sampai suatu saat, di sudut toko serba ada, ia bertemu dengan Xu Guangxi. Guangxi yang saat kecil sering pergi makan di rumahnya, sekarang telah menjadi seorang pemuda cemerlang penuh sinar matahari yang menyinari hatinya. Xu Guangxi kembali setelah belajar di luar negeri, dan kedekatan masa kecilnya pun menjadi detak jantung yang tak terkendali. \nMengejar Xu Guangxi bukanlah hal yang mudah. Hal ini berarti menghadapi perubahan besar akibat kemajuan dalam hidup dan tekanan dari beban kehidupan. Namun karena cinta, tahun demi tahun, Guangxi menjadi semakin dewasa, melangkah dengan teguh dan bergerak maju dengan pasti ke arah Yeke. Dua hati yang telah mengalami tantangan dan pilihan yang tak terhitung jumlahnya, pelan-pelan menjadi semakin dekat. Mereka menjadi mengerti bahwa cinta sejati bukanlah saling berkorban tetapi saling menarik dan menghormati satu sama lain, membangun satu sama lain menjadi orang yang lebih baik.",
    "imgtag_ver": {
      "1": {
        "text": "Full",
        "color": "#FF4A22"
      }
    },
    "is_area_limit": 0,
    "type": 2,
    "cover_checkup_grade": 4,
    "title": "Love The Way You Are",
    "protagonist_name": [
      "Angelababy",
      "Edward Lai",
      "Tian Yitong",
      ""
    ],
    "new_pic_vt_country_calc": "http://puui.qpic.cn/vcover_vt_pic/0/2z5sa8y7uqmh6z11657160044176/0",
    "new_pic_hz_country_calc": "http://puui.qpic.cn/vcover_hz_pic/0/2z5sa8y7uqmh6z11657160056891/0",
    "new_pic_hz": "http://puui.qpic.cn/vcover_hz_pic/0/2z5sa8y7uqmh6z11655461389938/0",
    "new_pic_vt": "http://puui.qpic.cn/vcover_vt_pic/0/2z5sa8y7uqmh6z11655461255827/0",
    "update_desc_country": "{\"153513\":\"Gratis: Setiap hari Senin - Jumat pukul 19.00 WIB (1EP/hari) | VIP: Setiap hari Senin - Rabu pukul 19.00 WIB (2EP/hari) | Total 30EP\",\"153548\":\"\",\"153566\":\"\",\"153576\":\"\",\"8227797\":\"\"}",
    "online_language": [
      "1491937",
      "1491963",
      "1491973",
      "1491988",
      "1491994",
      "40",
      "8229847"
    ],
    "default_pay_status": 8,
    "holly_online_time": null,
    "areaName": "Daratan/Tiongkok",
    "head_time": null,
    "tail_time": null
  },
  {
    "episode_updated_country": "0",
    "main_genres": null,
    "update_desc": null,
    "video_ids_country": [
      "l0043enodt1"
    ],
    "is_trailer": 1,
    "cover_id": "qmxcn2ydx2y6uui",
    "leading_actor_id": [
      "8346629",
      "8354550",
      "8345525",
      "8377654"
    ],
    "leading_actorX": [
      "Natasha Wilona",
      "Ajil Ditto",
      "Yoriko Angeline",
      "Abun Sungkar"
    ],
    "second_title": "Dikta & Hukum",
    "clips_ids_country": [
      "j00438fy5wh",
      "z0043v6f1ek",
      "v0043rno01q",
      "q0043y9sldo",
      "c0043hpp28v",
      "e00430mj6lj",
      "y0043du8p49",
      "e0043uhuq0m",
      "k00411r5z0s",
      "l0041phf94x",
      "g00427ll17p",
      "n0042i126mj",
      "w0042shdkhx",
      "m0041aq1l9p",
      "a00421u1vag",
      "b0041tliksc",
      "i0041dro7fq",
      "p00416fmp6x",
      "e0041rj7td9",
      "u0041an3mm4",
      "i00415lrr0c",
      "z0040ewsn0z"
    ],
    "category_map": [
      10479,
      "Trailer",
      1089,
      "SerialTV",
      2,
      "serial Drama TV"
    ],
    "director": [
      "Hadrah Daeng Ratu"
    ],
    "pay_status": null,
    "operation_type_country": "{\"153576\":\"\",\"8227797\":\"\"}",
    "episode_all": "10",
    "year_name": [
      "2021"
    ],
    "description": "Diangkat dari utas viral di media sosial dan novel laris. Kisahnya berawal tentang perempuan bernama Nadhira. Dia baru saja lulus jadi sarjana hukum. Tapi jauh sebelum jatuh cinta pada hukum, dia sudah terlebih dulu jatuh cinta pada lelaki bernama Dikta yang mengenalkan hukum padanya. Inilah cerita tentang Nadhira, Dikta dan hukum.",
    "imgtag_ver": {
      "0": {
        "text": "VIP",
        "color": "#FF4A22"
      }
    },
    "is_area_limit": 0,
    "type": 2,
    "cover_checkup_grade": 4,
    "title": "Dikta & Hukum",
    "protagonist_name": [
      "Natasha Wilona",
      "Ajil Ditto",
      "Yoriko Angeline",
      "Abun Sungkar"
    ],
    "new_pic_vt_country_calc": "http://puui.wetvinfo.com/vcover_vt_pic/0/qmxcn2ydx2y6uui1644663176587/0",
    "new_pic_hz_country_calc": "http://puui.wetvinfo.com/vcover_hz_pic/0/qmxcn2ydx2y6uui1644663192868/0",
    "new_pic_hz": "http://puui.wetvinfo.com/vcover_hz_pic/0/qmxcn2ydx2y6uui1638237559057/0",
    "new_pic_vt": "http://puui.wetvinfo.com/vcover_vt_pic/0/qmxcn2ydx2y6uui1638237527168/0",
    "online_language": [
      "1491937",
      "1491963",
      "1491988",
      "40"
    ],
    "update_desc_country": "{\"8227797\":\"\"}",
    "default_pay_status": 6,
    "holly_online_time": "Segera Tayang",
    "areaName": "",
    "head_time": null,
    "tail_time": null
  },
  {
    "title": "Kemegahan Mimpi",
    "protagonist_name": [
      "Crystal Liu",
      "Chen Xiao",
      "Liu Yan",
      "Jelly Lin"
    ],
    "new_pic_vt_country_calc": "http://puui.wetvinfo.com/vcover_vt_pic/0/o5fcepqss9muv1v1654057968486/0",
    "new_pic_hz_country_calc": "http://puui.wetvinfo.com/vcover_hz_pic/0/o5fcepqss9muv1v1654057989049/0",
    "new_pic_vt": "http://puui.wetvinfo.com/vcover_vt_pic/0/o5fcepqss9muv1v1654145873795/0",
    "new_pic_hz": "http://puui.wetvinfo.com/vcover_hz_pic/0/o5fcepqss9muv1v1654145888657/0",
    "update_desc_country": "{\"153513\":\"Gratis: Setiap hari Kamis - Senin pukul 19.00 WIB (1EP/hari) | VIP: Setiap hari Kamis - Sabtu pukul 19.00 WIB (2EP/hari) | Total 40EP\",\"153548\":\"\",\"153566\":\"\",\"8227797\":\"\"}",
    "online_language": [
      "12",
      "14",
      "1491937",
      "1491963",
      "1491973",
      "1491988",
      "1491994",
      "40",
      "54",
      "8229847",
      "9"
    ],
    "default_pay_status": 6,
    "holly_online_time": "Tayang 2 Juni",
    "areaName": "Daratan/Tiongkok",
    "head_time": null,
    "episode_updated_country": "40",
    "main_genres": [
      "Kostum Tradisional"
    ],
    "video_ids_country": [
      "o0042wkkwx7",
      "d0042xonvoz",
      "x0042hn9fo0",
      "y0042270dix",
      "p00425jbyij",
      "c0042f9vov9",
      "b0042t0gage",
      "h0042a69ruz",
      "c0042lnrisd",
      "c0042ceaczh",
      "l0043m5nvxq",
      "t0043vull7m",
      "h0043rk0r6p",
      "b0043wz6zp3",
      "o00437ilmk5",
      "r0043h6202v",
      "m0043y7k97k",
      "c0043shqaes",
      "d00431pw3y0",
      "y0043ie1mha",
      "s00433xp6n9",
      "q00430w9pxx",
      "s0043erqc3h",
      "s00430cqbmx",
      "r0043urj9s7",
      "y0043osa6bs",
      "c0043dq15dw",
      "h0043bf2d8b",
      "y0043wa5owc",
      "v0043cim5lb",
      "c00439bt3nq",
      "j0043hv9y4y",
      "q0043o8d0ls",
      "g0043uukotg",
      "m004395gv73",
      "w0043ikxkqt",
      "o0043pjhyrt",
      "o004390twaq",
      "p00430pudbp",
      "n0043ow8ayu"
    ],
    "update_desc": null,
    "is_trailer": 0,
    "cover_id": "o5fcepqss9muv1v",
    "leading_actor_id": [
      "72172",
      "79882",
      "75979",
      "1287593"
    ],
    "leading_actorX": [
      "Crystal Liu",
      "Chen Xiao",
      "Liu Yan",
      "Jelly Lin"
    ],
    "second_title": "Kemegahan Mimpi",
    "clips_ids_country": [
      "j004380luym",
      "m004337yrf7",
      "f0043qxakb0",
      "c00431d6ywn",
      "z0043ixcnrd",
      "x0043xqghzr",
      "b0043bdcz5g",
      "t0043v79dn4",
      "n00438al8qz",
      "c004321c3l2",
      "a0043lta65d",
      "j004300f70p",
      "v0043026kt7",
      "x0043ic8orj",
      "q00433k3odo",
      "z0043tcpbh8",
      "n0043ug3ajv",
      "t0043ek8nw4",
      "h0043dxg2o3",
      "y004370jbkk",
      "w0043s4ftm3",
      "a0043khl7ip",
      "t0043qbewqy",
      "p0043aukag1",
      "f0043qiig11",
      "a0043wcb7d0",
      "s00430g80os",
      "j0043a72sfz",
      "r00436orpiq",
      "j0043u2g16w",
      "p0043jedp3l",
      "t0043dj6734",
      "z0043wb672z",
      "u0043vfn08a",
      "k0043jv69zl",
      "d00430dubq3",
      "a0043o787qf",
      "y0043wpxy0e",
      "j0043dwfupb",
      "p0043q5nh3h",
      "u0043o6kso2",
      "j0043vtonhb",
      "p0043lqxg6l",
      "w0043puw05w",
      "c00435hrvuz",
      "e0043c8dtnw",
      "m0043fl0v2y",
      "o00434qalda",
      "t0043setwj7",
      "l0043xv7nuy",
      "k0043r05oiq",
      "d0043e9yg6n",
      "v0043e7s8a6",
      "j0043o3eg7r",
      "t0043cgw6ha",
      "s0043yfmkib",
      "a0043fcphny",
      "l0043w6p4b4",
      "v0043t9sfpa",
      "m00425vd7k6",
      "l0042l1sj52",
      "g00428pvrhi",
      "a0042s5r7as",
      "c0043felkoj",
      "l004397asjm",
      "y00439aunji",
      "f0043zwn9o6",
      "i00439gwxdz",
      "x004383178h",
      "e0043w2fh33",
      "o004359vg90",
      "f0043ayrd02",
      "q0043cc7ee3",
      "o00434cn2x8",
      "p0043oz71dc",
      "r0037nafpdu",
      "w0042jeyi7j",
      "x0042fmta3c",
      "u0042eekokg",
      "d0042ixn0iy",
      "m00422ld66c",
      "a00421igbun",
      "r0042qhf5er",
      "h00428sulhz",
      "p00422yy4dz",
      "f0042cv7vzz",
      "p00422ng3yu",
      "z0042i53jpd",
      "m0042xhcmc9",
      "h0042p1muf0",
      "x0042o04sew",
      "j0042mj0fsi",
      "c0042xbgklw",
      "w0042q69l0s",
      "z0042qznyd0",
      "t00424kgdas",
      "h0042vggzns",
      "t0042li36s1",
      "n00426ri905",
      "g00429ao9em"
    ],
    "category_map": [
      10470,
      "Film/Sinetron",
      1089,
      "SerialTV",
      2,
      "serial Drama TV"
    ],
    "director": [
      "Yang Yang"
    ],
    "operation_type_country": "{\"8227797\":\"\"}",
    "pay_status": 6,
    "episode_all": "40",
    "year_name": [
      "2022"
    ],
    "description": "Zhao Pan Er, yang membuka toko teh di Hangzhou menerima kabar bahagia bahwa tunangannya Ouyang Xu berada di Bianjing. Dia lalu merantau ke Bianjing untuk menemuinya. Dalam perjalanan, ia menyelamatkan saudara perempuannya yang baik, Song Yin Zhang dari perkawinan yang bagai neraka. Ia juga menyelamatkan Sun San Niang yang mencoba bunuh diri karena tak bahagia dengan pernikahannya. Sementara itu, ketika sampai di Bianjing, Ouyang Xu memutuskan pertunangan dengan Zhao Pan Er. Kemudian Zhao Pan Er, Song Yin Zhang, dan Sun San Niang memutuskan untuk tinggal di Bianjing, mengandalkan kemampuan mereka sendiri untuk menghasilkan banyak uang. Setelah mengalami kesulitan dan berbagai kesengsaraan, ketiga bersaudara itu akhirnya berhasil mengelola kedai teh kecil tersebut menjadi restoran terbesar di Bianjing.",
    "imgtag_ver": {
      "0": {
        "text": "VIP",
        "color": "#FF4A22"
      },
      "1": {
        "text": "Full",
        "color": "#FF4A22"
      }
    },
    "type": 2,
    "is_area_limit": 0,
    "cover_checkup_grade": 4,
    "tail_time": null
  }
];

/**
 * Retrieved from URL : 
 * https: //www.iflix.com/_next/data/tuvqPK5nDW3xVsPlEE7AG/play/r6yht13srzu48mc-FULLMETAL-ALCHEMIST-2003.json?ids=r6yht13srzu48mc-FULLMETAL-ALCHEMIST-2003
 * 
 * Where we get from : 
 * pageProps -> data -> coverInfo
 * 
 * Title -> from "title" attribute
 * Description -> from "description" attribute
 * 
 * The list of image tag comes from "imgtag_ver" attribute
 */
export const DETAILED_VIDEO_ITEM_INFO = {
  "description": "Edward Elric, a young, brilliant alchemist, has lost much in his twelve-year life: when he and his brother Alphonse try to resurrect their dead mother through the forbidden act of human transmutation, Edward loses his brother as well as two of his limbs. With his supreme alchemy skills, Edward binds Alphonse's soul to a large suit of armor.\n\nA year later, Edward, now promoted to the fullmetal alchemist of the state, embarks on a journey with his younger brother to obtain the Philosopher's Stone. The fabled mythical object is rumored to be capable of amplifying an alchemist's abilities by leaps and bounds, thus allowing them to override the fundamental law of alchemy: to gain something, an alchemist must sacrifice something of equal value.",
  "category_map": [
    10994
  ],
  "type": 3,
  "title": "FULLMETAL ALCHEMIST 2003",
  "protagonist_name": [

  ],
  "director": "",
  "actors": [

  ],
  "imgtag_ver": {
    "1": {
      "text": "Full",
      "color": "#FF4A22"
    }
  },
  "main_genres": [
    "Combat",
    "Classic",
    "Magical"
  ],
  "cover_id": "r6yht13srzu48mc",
  "cover_checkup_grade": 4,
  "video_ids_country": [
    "c0040l97su8",
    "t0040and1m4",
    "o0040sb3xdk",
    "t0040q28ef6",
    "m0040sx47xz",
    "e0040hbwu14",
    "r0040dl1vwl",
    "x004050q8j7",
    "m0040j8972i",
    "y0040xy10mr",
    "g004088fcnq",
    "m0040jhn64a",
    "w00402vzz01",
    "m0040yoi3bq",
    "o0040locibi",
    "t0040h17q3p",
    "s0040eylhoa",
    "h0040j5e9s0",
    "g00400yo45q",
    "c00405gguub",
    "n0040qn5o8x",
    "k0040fv6hnf",
    "g00402api9q",
    "d0040tp1gfd",
    "z0040tja11s",
    "t0040z6dmho",
    "r00405msa0w",
    "i00409yu6e9",
    "b0040pad8be",
    "z0040vlscug",
    "z00404oq5ur",
    "p0040qkarqi",
    "q0040lggg9v",
    "x0040e5x382",
    "w00405soyy8",
    "c0040xm04ow",
    "k00404729j0",
    "m00403uqbff",
    "m00401u0omc",
    "g0040grwsz8",
    "w0040kode0l",
    "k00401qz990",
    "s00406ibo9z",
    "a0040hezexf",
    "a0040aakkyd",
    "z0040x1ika9",
    "m0040xoz9ec",
    "q0040ouvdo5",
    "g0040cdbmu9",
    "e0040ssakjt",
    "o0040j9hcvj"
  ],
  "clips_ids_country": [

  ],
  "leading_actorX": [

  ],
  "online_language": [
    "1491937",
    "1491963",
    "1491973",
    "1491988",
    "1491994",
    "40",
    "8229847"
  ],
  "new_pic_hz": "http://puui.wetvinfo.com/vcover_hz_pic/0/r6yht13srzu48mc1632970651520/0",
  "new_pic_vt": "http://puui.wetvinfo.com/vcover_vt_pic/0/r6yht13srzu48mc1632969840021/0",
  "new_pic_vt_country_calc": "http://puui.wetvinfo.com/vcover_vt_pic/0/r6yht13srzu48mc1632969840021/0",
  "new_pic_hz_country_calc": "http://puui.wetvinfo.com/vcover_hz_pic/0/r6yht13srzu48mc1632970651520/0",
  "episode_all": 51,
  "episode_updated_country": 51,
  "holly_online_time": "Full",
  "entertainmentShow": false
};

/**
 * Retrieved from URL : 
 * https://www.iflix.com/_next/data/tuvqPK5nDW3xVsPlEE7AG/play/r6yht13srzu48mc-FULLMETAL-ALCHEMIST-2003.json?ids=r6yht13srzu48mc-FULLMETAL-ALCHEMIST-2003
 * 
 * Get from : 
 * pageProps -> data -> videoList
 * 
 * Attributes : 
 * - "vid" 
 * a. to identify the video id
 * b. to make sure that we are in the selected state of the episode item :
 *      if vid === vid from route -> we try to enableSelectedItem
 * - "episode" -> to display the text
 * - "title" -> to load the URL
 * - "imgtag_ver" -> to display the image at the right most part, only if the value is not empty
 */
export const VIDEOS_LIST = [{
    "online_language": [
      "1491937",
      "8",
      "1491963",
      "1491973",
      "1491988",
      "12",
      "14",
      "1491994",
      "54",
      "9",
      "40",
      "8229847",
      "35"
    ],
    "duration": "1432",
    "pic_332_187": "https://newpic.wetvinfo.com/vpic_cover/c0040l97su8/c0040l97su8_hz.jpg/332",
    "vuid": "0",
    "pay_status": null,
    "default_pay_status": null,
    "publish_date": "2010-01-01 00:00:00",
    "head_time": 0,
    "cover_list": [
      "r6yht13srzu48mc"
    ],
    "c_category_value": 10994,
    "aspect": 1.7777777910232544,
    "tail_time": 0,
    "state": 4,
    "imgtag_ver": [

    ],
    "pic_640_360": "https://newpic.wetvinfo.com/vpic_cover/c0040l97su8/c0040l97su8_hz.jpg/640",
    "type": 3,
    "is_area_limit": 0,
    "episode": "01",
    "title": "EP1: FULLMETAL ALCHEMIST 2003",
    "desc": null,
    "pic_496_280": "https://newpic.wetvinfo.com/vpic_cover/c0040l97su8/c0040l97su8_hz.jpg/496",
    "vid": "c0040l97su8",
    "isLong": true
  },
  {
    "tail_time": 0,
    "aspect": 1.7777777910232544,
    "state": 4,
    "imgtag_ver": [

    ],
    "pic_640_360": "https://newpic.wetvinfo.com/vpic_cover/t0040and1m4/t0040and1m4_hz.jpg/640",
    "is_area_limit": 0,
    "type": 3,
    "episode": "02",
    "title": "EP2: FULLMETAL ALCHEMIST 2003",
    "desc": null,
    "pic_496_280": "https://newpic.wetvinfo.com/vpic_cover/t0040and1m4/t0040and1m4_hz.jpg/496",
    "vid": "t0040and1m4",
    "online_language": [
      "1491937",
      "8",
      "1491963",
      "1491973",
      "1491988",
      "12",
      "14",
      "1491994",
      "54",
      "9",
      "40",
      "8229847",
      "35"
    ],
    "duration": "1432",
    "pic_332_187": "https://newpic.wetvinfo.com/vpic_cover/t0040and1m4/t0040and1m4_hz.jpg/332",
    "vuid": "0",
    "default_pay_status": null,
    "pay_status": null,
    "head_time": 0,
    "publish_date": "2010-01-01 00:00:00",
    "cover_list": [
      "r6yht13srzu48mc"
    ],
    "c_category_value": 10994,
    "isLong": true
  }, {
    "desc": null,
    "pic_496_280": "https://newpic.wetvinfo.com/vpic_cover/o0040sb3xdk/o0040sb3xdk_hz.jpg/496",
    "vid": "o0040sb3xdk",
    "online_language": [
      "1491937",
      "8",
      "1491963",
      "1491973",
      "1491988",
      "12",
      "14",
      "1491994",
      "54",
      "9",
      "40",
      "8229847",
      "35"
    ],
    "duration": "1432",
    "pic_332_187": "https://newpic.wetvinfo.com/vpic_cover/o0040sb3xdk/o0040sb3xdk_hz.jpg/332",
    "vuid": "0",
    "default_pay_status": null,
    "pay_status": null,
    "publish_date": "2010-01-01 00:00:00",
    "head_time": 0,
    "cover_list": [
      "r6yht13srzu48mc"
    ],
    "c_category_value": 10994,
    "aspect": 1.7777777910232544,
    "tail_time": 0,
    "imgtag_ver": [

    ],
    "state": 4,
    "pic_640_360": "https://newpic.wetvinfo.com/vpic_cover/o0040sb3xdk/o0040sb3xdk_hz.jpg/640",
    "type": 3,
    "is_area_limit": 0,
    "episode": "03",
    "title": "EP3: FULLMETAL ALCHEMIST 2003",
    "isLong": true
  }, {
    "publish_date": "2010-01-01 00:00:00",
    "head_time": 0,
    "cover_list": [
      "r6yht13srzu48mc"
    ],
    "c_category_value": 10994,
    "tail_time": 0,
    "aspect": 1.7777777910232544,
    "pic_640_360": "https://newpic.wetvinfo.com/vpic_cover/t0040q28ef6/t0040q28ef6_hz.jpg/640",
    "imgtag_ver": [

    ],
    "state": 4,
    "is_area_limit": 0,
    "type": 3,
    "episode": "04",
    "title": "EP4: FULLMETAL ALCHEMIST 2003",
    "desc": null,
    "pic_496_280": "https://newpic.wetvinfo.com/vpic_cover/t0040q28ef6/t0040q28ef6_hz.jpg/496",
    "vid": "t0040q28ef6",
    "online_language": [
      "1491937",
      "8",
      "1491963",
      "1491973",
      "1491988",
      "12",
      "14",
      "1491994",
      "54",
      "9",
      "40",
      "8229847",
      "35"
    ],
    "pic_332_187": "https://newpic.wetvinfo.com/vpic_cover/t0040q28ef6/t0040q28ef6_hz.jpg/332",
    "duration": "1432",
    "vuid": "0",
    "default_pay_status": null,
    "pay_status": null,
    "isLong": true
  }, {
    "desc": null,
    "pic_496_280": "https://newpic.wetvinfo.com/vpic_cover/m0040sx47xz/m0040sx47xz_hz.jpg/496",
    "vid": "m0040sx47xz",
    "online_language": [
      "1491937",
      "8",
      "1491963",
      "1491973",
      "1491988",
      "12",
      "14",
      "1491994",
      "54",
      "9",
      "40",
      "8229847",
      "35"
    ],
    "duration": "1432",
    "pic_332_187": "https://newpic.wetvinfo.com/vpic_cover/m0040sx47xz/m0040sx47xz_hz.jpg/332",
    "vuid": "0",
    "pay_status": null,
    "default_pay_status": null,
    "publish_date": "2010-01-01 00:00:00",
    "head_time": 0,
    "cover_list": [
      "r6yht13srzu48mc"
    ],
    "c_category_value": 10994,
    "aspect": 1.7777777910232544,
    "tail_time": 0,
    "state": 4,
    "imgtag_ver": [

    ],
    "pic_640_360": "https://newpic.wetvinfo.com/vpic_cover/m0040sx47xz/m0040sx47xz_hz.jpg/640",
    "type": 3,
    "is_area_limit": 0,
    "episode": "05",
    "title": "EP5: FULLMETAL ALCHEMIST 2003",
    "isLong": true
  }, {
    "pic_496_280": "https://newpic.wetvinfo.com/vpic_cover/e0040hbwu14/e0040hbwu14_hz.jpg/496",
    "vid": "e0040hbwu14",
    "online_language": [
      "1491937",
      "8",
      "1491963",
      "1491973",
      "1491988",
      "12",
      "14",
      "1491994",
      "54",
      "9",
      "40",
      "8229847",
      "35"
    ],
    "duration": "1432",
    "pic_332_187": "https://newpic.wetvinfo.com/vpic_cover/e0040hbwu14/e0040hbwu14_hz.jpg/332",
    "vuid": "0",
    "default_pay_status": null,
    "pay_status": null,
    "head_time": 0,
    "publish_date": "2010-01-01 00:00:00",
    "cover_list": [
      "r6yht13srzu48mc"
    ],
    "c_category_value": 10994,
    "tail_time": 0,
    "aspect": 1.7777777910232544,
    "pic_640_360": "https://newpic.wetvinfo.com/vpic_cover/e0040hbwu14/e0040hbwu14_hz.jpg/640",
    "imgtag_ver": [

    ],
    "state": 4,
    "is_area_limit": 0,
    "type": 3,
    "episode": "06",
    "title": "EP6: FULLMETAL ALCHEMIST 2003",
    "desc": null,
    "isLong": true
  }, {
    "publish_date": "2010-01-01 00:00:00",
    "head_time": 0,
    "cover_list": [
      "r6yht13srzu48mc"
    ],
    "c_category_value": 10994,
    "aspect": 1.7777777910232544,
    "tail_time": 0,
    "imgtag_ver": [

    ],
    "pic_640_360": "https://newpic.wetvinfo.com/vpic_cover/r0040dl1vwl/r0040dl1vwl_hz.jpg/640",
    "state": 4,
    "is_area_limit": 0,
    "type": 3,
    "episode": "07",
    "title": "EP7: FULLMETAL ALCHEMIST 2003",
    "desc": null,
    "pic_496_280": "https://newpic.wetvinfo.com/vpic_cover/r0040dl1vwl/r0040dl1vwl_hz.jpg/496",
    "vid": "r0040dl1vwl",
    "online_language": [
      "1491937",
      "8",
      "1491963",
      "1491973",
      "1491988",
      "12",
      "14",
      "1491994",
      "54",
      "9",
      "40",
      "8229847",
      "35"
    ],
    "pic_332_187": "https://newpic.wetvinfo.com/vpic_cover/r0040dl1vwl/r0040dl1vwl_hz.jpg/332",
    "duration": "1432",
    "vuid": "0",
    "pay_status": null,
    "default_pay_status": null,
    "isLong": true
  }, {
    "cover_list": [
      "r6yht13srzu48mc"
    ],
    "c_category_value": 10994,
    "tail_time": 0,
    "aspect": 1.7777777910232544,
    "pic_640_360": "https://newpic.wetvinfo.com/vpic_cover/x004050q8j7/x004050q8j7_hz.jpg/640",
    "imgtag_ver": [

    ],
    "state": 4,
    "is_area_limit": 0,
    "type": 3,
    "episode": "08",
    "title": "EP8: FULLMETAL ALCHEMIST 2003",
    "desc": null,
    "pic_496_280": "https://newpic.wetvinfo.com/vpic_cover/x004050q8j7/x004050q8j7_hz.jpg/496",
    "vid": "x004050q8j7",
    "online_language": [
      "1491937",
      "8",
      "1491963",
      "1491973",
      "1491988",
      "12",
      "14",
      "1491994",
      "54",
      "9",
      "40",
      "8229847",
      "35"
    ],
    "duration": "1432",
    "pic_332_187": "https://newpic.wetvinfo.com/vpic_cover/x004050q8j7/x004050q8j7_hz.jpg/332",
    "vuid": "0",
    "default_pay_status": null,
    "pay_status": null,
    "publish_date": "2010-01-01 00:00:00",
    "head_time": 0,
    "isLong": true
  }, {
    "vuid": "0",
    "pay_status": null,
    "default_pay_status": null,
    "head_time": 0,
    "publish_date": "2010-01-01 00:00:00",
    "cover_list": [
      "r6yht13srzu48mc"
    ],
    "c_category_value": 10994,
    "aspect": 1.7777777910232544,
    "tail_time": 0,
    "pic_640_360": "https://newpic.wetvinfo.com/vpic_cover/m0040j8972i/m0040j8972i_hz.jpg/640",
    "imgtag_ver": [

    ],
    "state": 4,
    "is_area_limit": 0,
    "type": 3,
    "episode": "09",
    "title": "EP9: FULLMETAL ALCHEMIST 2003",
    "desc": null,
    "pic_496_280": "https://newpic.wetvinfo.com/vpic_cover/m0040j8972i/m0040j8972i_hz.jpg/496",
    "vid": "m0040j8972i",
    "online_language": [
      "1491937",
      "8",
      "1491963",
      "1491973",
      "1491988",
      "12",
      "14",
      "1491994",
      "54",
      "9",
      "40",
      "8229847",
      "35"
    ],
    "pic_332_187": "https://newpic.wetvinfo.com/vpic_cover/m0040j8972i/m0040j8972i_hz.jpg/332",
    "duration": "1432",
    "isLong": true
  }, {
    "pic_496_280": "https://newpic.wetvinfo.com/vpic_cover/y0040xy10mr/y0040xy10mr_hz.jpg/496",
    "vid": "y0040xy10mr",
    "online_language": [
      "1491937",
      "8",
      "1491963",
      "1491973",
      "1491988",
      "12",
      "14",
      "1491994",
      "54",
      "9",
      "40",
      "8229847",
      "35"
    ],
    "duration": "1432",
    "pic_332_187": "https://newpic.wetvinfo.com/vpic_cover/y0040xy10mr/y0040xy10mr_hz.jpg/332",
    "vuid": "0",
    "pay_status": null,
    "default_pay_status": null,
    "publish_date": "2010-01-01 00:00:00",
    "head_time": 0,
    "cover_list": [
      "r6yht13srzu48mc"
    ],
    "c_category_value": 10994,
    "aspect": 1.7777777910232544,
    "tail_time": 0,
    "state": 4,
    "imgtag_ver": [

    ],
    "pic_640_360": "https://newpic.wetvinfo.com/vpic_cover/y0040xy10mr/y0040xy10mr_hz.jpg/640",
    "type": 3,
    "is_area_limit": 0,
    "episode": "10",
    "title": "EP10: FULLMETAL ALCHEMIST 2003",
    "desc": null,
    "isLong": true
  }, {
    "title": "EP11: FULLMETAL ALCHEMIST 2003",
    "desc": null,
    "pic_496_280": "https://newpic.wetvinfo.com/vpic_cover/g004088fcnq/g004088fcnq_hz.jpg/496",
    "vid": "g004088fcnq",
    "online_language": [
      "1491937",
      "8",
      "1491963",
      "1491973",
      "1491988",
      "12",
      "14",
      "1491994",
      "54",
      "9",
      "40",
      "8229847",
      "35"
    ],
    "duration": "1432",
    "pic_332_187": "https://newpic.wetvinfo.com/vpic_cover/g004088fcnq/g004088fcnq_hz.jpg/332",
    "vuid": "0",
    "default_pay_status": null,
    "pay_status": null,
    "head_time": 0,
    "publish_date": "2010-01-01 00:00:00",
    "cover_list": [
      "r6yht13srzu48mc"
    ],
    "c_category_value": 10994,
    "aspect": 1.7777777910232544,
    "tail_time": 0,
    "imgtag_ver": [

    ],
    "pic_640_360": "https://newpic.wetvinfo.com/vpic_cover/g004088fcnq/g004088fcnq_hz.jpg/640",
    "state": 4,
    "is_area_limit": 0,
    "type": 3,
    "episode": "11",
    "isLong": true
  }, {
    "duration": "1432",
    "pic_332_187": "https://newpic.wetvinfo.com/vpic_cover/m0040jhn64a/m0040jhn64a_hz.jpg/332",
    "vuid": "0",
    "default_pay_status": null,
    "pay_status": null,
    "head_time": 0,
    "publish_date": "2010-01-01 00:00:00",
    "cover_list": [
      "r6yht13srzu48mc"
    ],
    "c_category_value": 10994,
    "tail_time": 0,
    "aspect": 1.7777777910232544,
    "state": 4,
    "imgtag_ver": [

    ],
    "pic_640_360": "https://newpic.wetvinfo.com/vpic_cover/m0040jhn64a/m0040jhn64a_hz.jpg/640",
    "is_area_limit": 0,
    "type": 3,
    "episode": "12",
    "title": "EP12: FULLMETAL ALCHEMIST 2003",
    "desc": null,
    "pic_496_280": "https://newpic.wetvinfo.com/vpic_cover/m0040jhn64a/m0040jhn64a_hz.jpg/496",
    "vid": "m0040jhn64a",
    "online_language": [
      "1491937",
      "8",
      "1491963",
      "1491973",
      "1491988",
      "12",
      "14",
      "1491994",
      "54",
      "9",
      "40",
      "8229847",
      "35"
    ],
    "isLong": true
  }, {
    "episode": "13",
    "title": "EP13: FULLMETAL ALCHEMIST 2003",
    "desc": null,
    "pic_496_280": "https://newpic.wetvinfo.com/vpic_cover/w00402vzz01/w00402vzz01_hz.jpg/496",
    "vid": "w00402vzz01",
    "online_language": [
      "1491937",
      "8",
      "1491963",
      "1491973",
      "1491988",
      "12",
      "14",
      "1491994",
      "54",
      "9",
      "40",
      "8229847",
      "35"
    ],
    "pic_332_187": "https://newpic.wetvinfo.com/vpic_cover/w00402vzz01/w00402vzz01_hz.jpg/332",
    "duration": "1432",
    "vuid": "0",
    "pay_status": null,
    "default_pay_status": null,
    "publish_date": "2010-01-01 00:00:00",
    "head_time": 0,
    "cover_list": [
      "r6yht13srzu48mc"
    ],
    "c_category_value": 10994,
    "tail_time": 0,
    "aspect": 1.7777777910232544,
    "state": 4,
    "imgtag_ver": [

    ],
    "pic_640_360": "https://newpic.wetvinfo.com/vpic_cover/w00402vzz01/w00402vzz01_hz.jpg/640",
    "type": 3,
    "is_area_limit": 0,
    "isLong": true
  }, {
    "vuid": "0",
    "default_pay_status": null,
    "pay_status": null,
    "head_time": 0,
    "publish_date": "2010-01-01 00:00:00",
    "cover_list": [
      "r6yht13srzu48mc"
    ],
    "c_category_value": 10994,
    "aspect": 1.7777777910232544,
    "tail_time": 0,
    "pic_640_360": "https://newpic.wetvinfo.com/vpic_cover/m0040yoi3bq/m0040yoi3bq_hz.jpg/640",
    "imgtag_ver": [

    ],
    "state": 4,
    "is_area_limit": 0,
    "type": 3,
    "episode": "14",
    "title": "EP14: FULLMETAL ALCHEMIST 2003",
    "desc": null,
    "pic_496_280": "https://newpic.wetvinfo.com/vpic_cover/m0040yoi3bq/m0040yoi3bq_hz.jpg/496",
    "vid": "m0040yoi3bq",
    "online_language": [
      "1491937",
      "8",
      "1491963",
      "1491973",
      "1491988",
      "12",
      "14",
      "1491994",
      "54",
      "9",
      "40",
      "8229847",
      "35"
    ],
    "duration": "1432",
    "pic_332_187": "https://newpic.wetvinfo.com/vpic_cover/m0040yoi3bq/m0040yoi3bq_hz.jpg/332",
    "isLong": true
  }, {
    "desc": null,
    "pic_496_280": "https://newpic.wetvinfo.com/vpic_cover/o0040locibi/o0040locibi_hz.jpg/496",
    "vid": "o0040locibi",
    "online_language": [
      "1491937",
      "8",
      "1491963",
      "1491973",
      "1491988",
      "12",
      "14",
      "1491994",
      "54",
      "9",
      "40",
      "8229847",
      "35"
    ],
    "pic_332_187": "https://newpic.wetvinfo.com/vpic_cover/o0040locibi/o0040locibi_hz.jpg/332",
    "duration": "1432",
    "vuid": "0",
    "pay_status": null,
    "default_pay_status": null,
    "head_time": 0,
    "publish_date": "2010-01-01 00:00:00",
    "cover_list": [
      "r6yht13srzu48mc"
    ],
    "c_category_value": 10994,
    "tail_time": 0,
    "aspect": 1.7777777910232544,
    "pic_640_360": "https://newpic.wetvinfo.com/vpic_cover/o0040locibi/o0040locibi_hz.jpg/640",
    "imgtag_ver": [

    ],
    "state": 4,
    "type": 3,
    "is_area_limit": 0,
    "episode": "15",
    "title": "EP15: FULLMETAL ALCHEMIST 2003",
    "isLong": true
  }, {
    "is_area_limit": 0,
    "type": 3,
    "episode": "16",
    "title": "EP16: FULLMETAL ALCHEMIST 2003",
    "desc": null,
    "pic_496_280": "https://newpic.wetvinfo.com/vpic_cover/t0040h17q3p/t0040h17q3p_hz.jpg/496",
    "vid": "t0040h17q3p",
    "online_language": [
      "1491937",
      "8",
      "1491963",
      "1491973",
      "1491988",
      "12",
      "14",
      "1491994",
      "54",
      "9",
      "40",
      "8229847",
      "35"
    ],
    "pic_332_187": "https://newpic.wetvinfo.com/vpic_cover/t0040h17q3p/t0040h17q3p_hz.jpg/332",
    "duration": "1432",
    "vuid": "0",
    "default_pay_status": null,
    "pay_status": null,
    "head_time": 0,
    "publish_date": "2010-01-01 00:00:00",
    "cover_list": [
      "r6yht13srzu48mc"
    ],
    "c_category_value": 10994,
    "tail_time": 0,
    "aspect": 1.7777777910232544,
    "pic_640_360": "https://newpic.wetvinfo.com/vpic_cover/t0040h17q3p/t0040h17q3p_hz.jpg/640",
    "imgtag_ver": [

    ],
    "state": 4,
    "isLong": true
  }, {
    "c_category_value": 10994,
    "tail_time": 0,
    "aspect": 1.7777777910232544,
    "pic_640_360": "https://newpic.wetvinfo.com/vpic_cover/s0040eylhoa/s0040eylhoa_hz.jpg/640",
    "imgtag_ver": [

    ],
    "state": 4,
    "type": 3,
    "is_area_limit": 0,
    "episode": "17",
    "title": "EP17: FULLMETAL ALCHEMIST 2003",
    "desc": null,
    "pic_496_280": "https://newpic.wetvinfo.com/vpic_cover/s0040eylhoa/s0040eylhoa_hz.jpg/496",
    "vid": "s0040eylhoa",
    "online_language": [
      "1491937",
      "8",
      "1491963",
      "1491973",
      "1491988",
      "12",
      "14",
      "1491994",
      "54",
      "9",
      "40",
      "8229847",
      "35"
    ],
    "pic_332_187": "https://newpic.wetvinfo.com/vpic_cover/s0040eylhoa/s0040eylhoa_hz.jpg/332",
    "duration": "1432",
    "vuid": "0",
    "pay_status": null,
    "default_pay_status": null,
    "publish_date": "2010-01-01 00:00:00",
    "head_time": 0,
    "cover_list": [
      "r6yht13srzu48mc"
    ],
    "isLong": true
  }, {
    "title": "EP18: FULLMETAL ALCHEMIST 2003",
    "desc": null,
    "pic_496_280": "https://newpic.wetvinfo.com/vpic_cover/h0040j5e9s0/h0040j5e9s0_hz.jpg/496",
    "vid": "h0040j5e9s0",
    "online_language": [
      "1491937",
      "8",
      "1491963",
      "1491973",
      "1491988",
      "12",
      "14",
      "1491994",
      "54",
      "9",
      "40",
      "8229847",
      "35"
    ],
    "duration": "1432",
    "pic_332_187": "https://newpic.wetvinfo.com/vpic_cover/h0040j5e9s0/h0040j5e9s0_hz.jpg/332",
    "vuid": "0",
    "default_pay_status": null,
    "pay_status": null,
    "publish_date": "2010-01-01 00:00:00",
    "head_time": 0,
    "cover_list": [
      "r6yht13srzu48mc"
    ],
    "c_category_value": 10994,
    "tail_time": 0,
    "aspect": 1.7777777910232544,
    "pic_640_360": "https://newpic.wetvinfo.com/vpic_cover/h0040j5e9s0/h0040j5e9s0_hz.jpg/640",
    "imgtag_ver": [

    ],
    "state": 4,
    "is_area_limit": 0,
    "type": 3,
    "episode": "18",
    "isLong": true
  }, {
    "online_language": [
      "1491937",
      "8",
      "1491963",
      "1491973",
      "1491988",
      "12",
      "14",
      "1491994",
      "54",
      "9",
      "40",
      "8229847",
      "35"
    ],
    "pic_332_187": "https://newpic.wetvinfo.com/vpic_cover/g00400yo45q/g00400yo45q_hz.jpg/332",
    "duration": "1432",
    "vuid": "0",
    "pay_status": null,
    "default_pay_status": null,
    "publish_date": "2010-01-01 00:00:00",
    "head_time": 0,
    "cover_list": [
      "r6yht13srzu48mc"
    ],
    "c_category_value": 10994,
    "tail_time": 0,
    "aspect": 1.7777777910232544,
    "pic_640_360": "https://newpic.wetvinfo.com/vpic_cover/g00400yo45q/g00400yo45q_hz.jpg/640",
    "imgtag_ver": [

    ],
    "state": 4,
    "type": 3,
    "is_area_limit": 0,
    "episode": "19",
    "title": "EP19: FULLMETAL ALCHEMIST 2003",
    "desc": null,
    "pic_496_280": "https://newpic.wetvinfo.com/vpic_cover/g00400yo45q/g00400yo45q_hz.jpg/496",
    "vid": "g00400yo45q",
    "isLong": true
  }, {
    "episode": "20",
    "title": "EP20: FULLMETAL ALCHEMIST 2003",
    "desc": null,
    "pic_496_280": "https://newpic.wetvinfo.com/vpic_cover/c00405gguub/c00405gguub_hz.jpg/496",
    "vid": "c00405gguub",
    "online_language": [
      "1491937",
      "8",
      "1491963",
      "1491973",
      "1491988",
      "12",
      "14",
      "1491994",
      "54",
      "9",
      "40",
      "8229847",
      "35"
    ],
    "pic_332_187": "https://newpic.wetvinfo.com/vpic_cover/c00405gguub/c00405gguub_hz.jpg/332",
    "duration": "1432",
    "vuid": "0",
    "pay_status": null,
    "default_pay_status": null,
    "publish_date": "2010-01-01 00:00:00",
    "head_time": 0,
    "cover_list": [
      "r6yht13srzu48mc"
    ],
    "c_category_value": 10994,
    "tail_time": 0,
    "aspect": 1.7777777910232544,
    "pic_640_360": "https://newpic.wetvinfo.com/vpic_cover/c00405gguub/c00405gguub_hz.jpg/640",
    "imgtag_ver": [

    ],
    "state": 4,
    "type": 3,
    "is_area_limit": 0,
    "isLong": true
  }, {
    "tail_time": 0,
    "aspect": 1.7777777910232544,
    "state": 4,
    "imgtag_ver": [

    ],
    "pic_640_360": "https://newpic.wetvinfo.com/vpic_cover/n0040qn5o8x/n0040qn5o8x_hz.jpg/640",
    "is_area_limit": 0,
    "type": 3,
    "episode": "21",
    "title": "EP21: FULLMETAL ALCHEMIST 2003",
    "desc": null,
    "pic_496_280": "https://newpic.wetvinfo.com/vpic_cover/n0040qn5o8x/n0040qn5o8x_hz.jpg/496",
    "vid": "n0040qn5o8x",
    "online_language": [
      "1491937",
      "8",
      "1491963",
      "1491973",
      "1491988",
      "12",
      "14",
      "1491994",
      "54",
      "9",
      "40",
      "8229847",
      "35"
    ],
    "duration": "1432",
    "pic_332_187": "https://newpic.wetvinfo.com/vpic_cover/n0040qn5o8x/n0040qn5o8x_hz.jpg/332",
    "vuid": "0",
    "default_pay_status": null,
    "pay_status": null,
    "head_time": 0,
    "publish_date": "2010-01-01 00:00:00",
    "cover_list": [
      "r6yht13srzu48mc"
    ],
    "c_category_value": 10994,
    "isLong": true
  }, {
    "aspect": 1.7777777910232544,
    "tail_time": 0,
    "pic_640_360": "https://newpic.wetvinfo.com/vpic_cover/k0040fv6hnf/k0040fv6hnf_hz.jpg/640",
    "imgtag_ver": [

    ],
    "state": 4,
    "is_area_limit": 0,
    "type": 3,
    "episode": "22",
    "title": "EP22: FULLMETAL ALCHEMIST 2003",
    "desc": null,
    "pic_496_280": "https://newpic.wetvinfo.com/vpic_cover/k0040fv6hnf/k0040fv6hnf_hz.jpg/496",
    "vid": "k0040fv6hnf",
    "online_language": [
      "1491937",
      "8",
      "1491963",
      "1491973",
      "1491988",
      "12",
      "14",
      "1491994",
      "54",
      "9",
      "40",
      "8229847",
      "35"
    ],
    "duration": "1432",
    "pic_332_187": "https://newpic.wetvinfo.com/vpic_cover/k0040fv6hnf/k0040fv6hnf_hz.jpg/332",
    "vuid": "0",
    "pay_status": null,
    "default_pay_status": null,
    "head_time": 0,
    "publish_date": "2010-01-01 00:00:00",
    "cover_list": [
      "r6yht13srzu48mc"
    ],
    "c_category_value": 10994,
    "isLong": true
  }, {
    "online_language": [
      "1491937",
      "8",
      "1491963",
      "1491973",
      "1491988",
      "12",
      "14",
      "1491994",
      "54",
      "9",
      "40",
      "8229847",
      "35"
    ],
    "duration": "1432",
    "pic_332_187": "https://newpic.wetvinfo.com/vpic_cover/g00402api9q/g00402api9q_hz.jpg/332",
    "vuid": "0",
    "default_pay_status": null,
    "pay_status": null,
    "head_time": 0,
    "publish_date": "2010-01-01 00:00:00",
    "cover_list": [
      "r6yht13srzu48mc"
    ],
    "c_category_value": 10994,
    "tail_time": 0,
    "aspect": 1.7777777910232544,
    "pic_640_360": "https://newpic.wetvinfo.com/vpic_cover/g00402api9q/g00402api9q_hz.jpg/640",
    "imgtag_ver": [

    ],
    "state": 4,
    "is_area_limit": 0,
    "type": 3,
    "episode": "23",
    "title": "EP23: FULLMETAL ALCHEMIST 2003",
    "desc": null,
    "pic_496_280": "https://newpic.wetvinfo.com/vpic_cover/g00402api9q/g00402api9q_hz.jpg/496",
    "vid": "g00402api9q",
    "isLong": true
  }, {
    "pic_496_280": "https://newpic.wetvinfo.com/vpic_cover/d0040tp1gfd/d0040tp1gfd_hz.jpg/496",
    "vid": "d0040tp1gfd",
    "online_language": [
      "1491937",
      "8",
      "1491963",
      "1491973",
      "1491988",
      "12",
      "14",
      "1491994",
      "54",
      "9",
      "40",
      "8229847",
      "35"
    ],
    "duration": "1432",
    "pic_332_187": "https://newpic.wetvinfo.com/vpic_cover/d0040tp1gfd/d0040tp1gfd_hz.jpg/332",
    "vuid": "0",
    "default_pay_status": null,
    "pay_status": null,
    "publish_date": "2010-01-01 00:00:00",
    "head_time": 0,
    "cover_list": [
      "r6yht13srzu48mc"
    ],
    "c_category_value": 10994,
    "tail_time": 0,
    "aspect": 1.7777777910232544,
    "pic_640_360": "https://newpic.wetvinfo.com/vpic_cover/d0040tp1gfd/d0040tp1gfd_hz.jpg/640",
    "state": 4,
    "imgtag_ver": [

    ],
    "is_area_limit": 0,
    "type": 3,
    "episode": "24",
    "title": "EP24: FULLMETAL ALCHEMIST 2003",
    "desc": null,
    "isLong": true
  }, {
    "cover_list": [
      "r6yht13srzu48mc"
    ],
    "c_category_value": 10994,
    "tail_time": 0,
    "aspect": 1.7777777910232544,
    "pic_640_360": "https://newpic.wetvinfo.com/vpic_cover/z0040tja11s/z0040tja11s_hz.jpg/640",
    "imgtag_ver": [

    ],
    "state": 4,
    "is_area_limit": 0,
    "type": 3,
    "episode": "25",
    "title": "EP25: FULLMETAL ALCHEMIST 2003",
    "desc": null,
    "vid": "z0040tja11s",
    "pic_496_280": "https://newpic.wetvinfo.com/vpic_cover/z0040tja11s/z0040tja11s_hz.jpg/496",
    "online_language": [
      "1491937",
      "8",
      "1491963",
      "1491973",
      "1491988",
      "12",
      "14",
      "1491994",
      "54",
      "9",
      "40",
      "8229847",
      "35"
    ],
    "pic_332_187": "https://newpic.wetvinfo.com/vpic_cover/z0040tja11s/z0040tja11s_hz.jpg/332",
    "duration": "1539",
    "vuid": "0",
    "pay_status": null,
    "default_pay_status": null,
    "publish_date": "2010-01-01 00:00:00",
    "head_time": 0,
    "isLong": true
  }, {
    "desc": null,
    "pic_496_280": "https://newpic.wetvinfo.com/vpic_cover/t0040z6dmho/t0040z6dmho_hz.jpg/496",
    "vid": "t0040z6dmho",
    "online_language": [
      "1491937",
      "8",
      "1491963",
      "1491973",
      "1491988",
      "12",
      "14",
      "1491994",
      "54",
      "9",
      "40",
      "8229847",
      "35"
    ],
    "duration": "1432",
    "pic_332_187": "https://newpic.wetvinfo.com/vpic_cover/t0040z6dmho/t0040z6dmho_hz.jpg/332",
    "vuid": "0",
    "default_pay_status": null,
    "pay_status": null,
    "publish_date": "2010-01-01 00:00:00",
    "head_time": 0,
    "cover_list": [
      "r6yht13srzu48mc"
    ],
    "c_category_value": 10994,
    "aspect": 1.7777777910232544,
    "tail_time": 0,
    "pic_640_360": "https://newpic.wetvinfo.com/vpic_cover/t0040z6dmho/t0040z6dmho_hz.jpg/640",
    "imgtag_ver": [

    ],
    "state": 4,
    "type": 3,
    "is_area_limit": 0,
    "episode": "26",
    "title": "EP26: FULLMETAL ALCHEMIST 2003",
    "isLong": true
  }, {
    "c_category_value": 10994,
    "aspect": 1.7777777910232544,
    "tail_time": 0,
    "pic_640_360": "https://newpic.wetvinfo.com/vpic_cover/r00405msa0w/r00405msa0w_hz.jpg/640",
    "imgtag_ver": [

    ],
    "state": 4,
    "is_area_limit": 0,
    "type": 3,
    "episode": "27",
    "title": "EP27: FULLMETAL ALCHEMIST 2003",
    "desc": null,
    "pic_496_280": "https://newpic.wetvinfo.com/vpic_cover/r00405msa0w/r00405msa0w_hz.jpg/496",
    "vid": "r00405msa0w",
    "online_language": [
      "1491937",
      "8",
      "1491963",
      "1491973",
      "1491988",
      "12",
      "14",
      "1491994",
      "54",
      "9",
      "40",
      "8229847",
      "35"
    ],
    "pic_332_187": "https://newpic.wetvinfo.com/vpic_cover/r00405msa0w/r00405msa0w_hz.jpg/332",
    "duration": "1432",
    "vuid": "0",
    "pay_status": null,
    "default_pay_status": null,
    "publish_date": "2010-01-01 00:00:00",
    "head_time": 0,
    "cover_list": [
      "r6yht13srzu48mc"
    ],
    "isLong": true
  }, {
    "episode": "28",
    "title": "EP28: FULLMETAL ALCHEMIST 2003",
    "desc": null,
    "pic_496_280": "https://newpic.wetvinfo.com/vpic_cover/i00409yu6e9/i00409yu6e9_hz.jpg/496",
    "vid": "i00409yu6e9",
    "online_language": [
      "1491937",
      "8",
      "1491963",
      "1491973",
      "1491988",
      "12",
      "14",
      "1491994",
      "54",
      "9",
      "40",
      "8229847",
      "35"
    ],
    "pic_332_187": "https://newpic.wetvinfo.com/vpic_cover/i00409yu6e9/i00409yu6e9_hz.jpg/332",
    "duration": "1432",
    "vuid": "0",
    "pay_status": null,
    "default_pay_status": null,
    "head_time": 0,
    "publish_date": "2010-01-01 00:00:00",
    "cover_list": [
      "r6yht13srzu48mc"
    ],
    "c_category_value": 10994,
    "aspect": 1.7777777910232544,
    "tail_time": 0,
    "pic_640_360": "https://newpic.wetvinfo.com/vpic_cover/i00409yu6e9/i00409yu6e9_hz.jpg/640",
    "state": 4,
    "imgtag_ver": [

    ],
    "is_area_limit": 0,
    "type": 3,
    "isLong": true
  }, {
    "duration": "1432",
    "pic_332_187": "https://newpic.wetvinfo.com/vpic_cover/b0040pad8be/b0040pad8be_hz.jpg/332",
    "vuid": "0",
    "default_pay_status": null,
    "pay_status": null,
    "head_time": 0,
    "publish_date": "2010-01-01 00:00:00",
    "cover_list": [
      "r6yht13srzu48mc"
    ],
    "c_category_value": 10994,
    "tail_time": 0,
    "aspect": 1.7777777910232544,
    "imgtag_ver": [

    ],
    "pic_640_360": "https://newpic.wetvinfo.com/vpic_cover/b0040pad8be/b0040pad8be_hz.jpg/640",
    "state": 4,
    "is_area_limit": 0,
    "type": 3,
    "episode": "29",
    "title": "EP29: FULLMETAL ALCHEMIST 2003",
    "desc": null,
    "pic_496_280": "https://newpic.wetvinfo.com/vpic_cover/b0040pad8be/b0040pad8be_hz.jpg/496",
    "vid": "b0040pad8be",
    "online_language": [
      "1491937",
      "8",
      "1491963",
      "1491973",
      "1491988",
      "12",
      "14",
      "1491994",
      "54",
      "9",
      "40",
      "8229847",
      "35"
    ],
    "isLong": true
  }, {
    "cover_list": [
      "r6yht13srzu48mc"
    ],
    "c_category_value": 10994,
    "tail_time": 0,
    "aspect": 1.7777777910232544,
    "pic_640_360": "https://newpic.wetvinfo.com/vpic_cover/z0040vlscug/z0040vlscug_hz.jpg/640",
    "imgtag_ver": [

    ],
    "state": 4,
    "type": 3,
    "is_area_limit": 0,
    "episode": "30",
    "title": "EP30: FULLMETAL ALCHEMIST 2003",
    "desc": null,
    "pic_496_280": "https://newpic.wetvinfo.com/vpic_cover/z0040vlscug/z0040vlscug_hz.jpg/496",
    "vid": "z0040vlscug",
    "online_language": [
      "1491937",
      "8",
      "1491963",
      "1491973",
      "1491988",
      "12",
      "14",
      "1491994",
      "54",
      "9",
      "40",
      "8229847",
      "35"
    ],
    "pic_332_187": "https://newpic.wetvinfo.com/vpic_cover/z0040vlscug/z0040vlscug_hz.jpg/332",
    "duration": "1432",
    "vuid": "0",
    "pay_status": null,
    "default_pay_status": null,
    "publish_date": "2010-01-01 00:00:00",
    "head_time": 0,
    "isLong": true
  }, {
    "desc": null,
    "pic_496_280": "https://newpic.wetvinfo.com/vpic_cover/z00404oq5ur/z00404oq5ur_hz.jpg/496",
    "vid": "z00404oq5ur",
    "online_language": [
      "1491937",
      "8",
      "1491963",
      "1491973",
      "1491988",
      "12",
      "14",
      "1491994",
      "54",
      "9",
      "40",
      "8229847",
      "35"
    ],
    "pic_332_187": "https://newpic.wetvinfo.com/vpic_cover/z00404oq5ur/z00404oq5ur_hz.jpg/332",
    "duration": "1432",
    "vuid": "0",
    "pay_status": null,
    "default_pay_status": null,
    "publish_date": "2010-01-01 00:00:00",
    "head_time": 0,
    "cover_list": [
      "r6yht13srzu48mc"
    ],
    "c_category_value": 10994,
    "aspect": 1.7777777910232544,
    "tail_time": 0,
    "state": 4,
    "imgtag_ver": [

    ],
    "pic_640_360": "https://newpic.wetvinfo.com/vpic_cover/z00404oq5ur/z00404oq5ur_hz.jpg/640",
    "type": 3,
    "is_area_limit": 0,
    "episode": "31",
    "title": "EP31: FULLMETAL ALCHEMIST 2003",
    "isLong": true
  }, {
    "cover_list": [
      "r6yht13srzu48mc"
    ],
    "c_category_value": 10994,
    "aspect": 1.7777777910232544,
    "tail_time": 0,
    "state": 4,
    "imgtag_ver": [

    ],
    "pic_640_360": "https://newpic.wetvinfo.com/vpic_cover/p0040qkarqi/p0040qkarqi_hz.jpg/640",
    "is_area_limit": 0,
    "type": 3,
    "episode": "32",
    "title": "EP32: FULLMETAL ALCHEMIST 2003",
    "desc": null,
    "pic_496_280": "https://newpic.wetvinfo.com/vpic_cover/p0040qkarqi/p0040qkarqi_hz.jpg/496",
    "vid": "p0040qkarqi",
    "online_language": [
      "1491937",
      "8",
      "1491963",
      "1491973",
      "1491988",
      "12",
      "14",
      "1491994",
      "54",
      "9",
      "40",
      "8229847",
      "35"
    ],
    "duration": "1432",
    "pic_332_187": "https://newpic.wetvinfo.com/vpic_cover/p0040qkarqi/p0040qkarqi_hz.jpg/332",
    "vuid": "0",
    "default_pay_status": null,
    "pay_status": null,
    "head_time": 0,
    "publish_date": "2010-01-01 00:00:00",
    "isLong": true
  }, {
    "vuid": "0",
    "default_pay_status": null,
    "pay_status": null,
    "publish_date": "2010-01-01 00:00:00",
    "head_time": 0,
    "cover_list": [
      "r6yht13srzu48mc"
    ],
    "c_category_value": 10994,
    "tail_time": 0,
    "aspect": 1.7777777910232544,
    "pic_640_360": "https://newpic.wetvinfo.com/vpic_cover/q0040lggg9v/q0040lggg9v_hz.jpg/640",
    "imgtag_ver": [

    ],
    "state": 4,
    "is_area_limit": 0,
    "type": 3,
    "episode": "33",
    "title": "EP33: FULLMETAL ALCHEMIST 2003",
    "desc": null,
    "pic_496_280": "https://newpic.wetvinfo.com/vpic_cover/q0040lggg9v/q0040lggg9v_hz.jpg/496",
    "vid": "q0040lggg9v",
    "online_language": [
      "1491937",
      "8",
      "1491963",
      "1491973",
      "1491988",
      "12",
      "14",
      "1491994",
      "54",
      "9",
      "40",
      "8229847",
      "35"
    ],
    "duration": "1432",
    "pic_332_187": "https://newpic.wetvinfo.com/vpic_cover/q0040lggg9v/q0040lggg9v_hz.jpg/332",
    "isLong": true
  }, {
    "duration": "1432",
    "pic_332_187": "https://newpic.wetvinfo.com/vpic_cover/x0040e5x382/x0040e5x382_hz.jpg/332",
    "vuid": "0",
    "default_pay_status": null,
    "pay_status": null,
    "head_time": 0,
    "publish_date": "2010-01-01 00:00:00",
    "cover_list": [
      "r6yht13srzu48mc"
    ],
    "c_category_value": 10994,
    "aspect": 1.7777777910232544,
    "tail_time": 0,
    "pic_640_360": "https://newpic.wetvinfo.com/vpic_cover/x0040e5x382/x0040e5x382_hz.jpg/640",
    "imgtag_ver": [

    ],
    "state": 4,
    "is_area_limit": 0,
    "type": 3,
    "episode": "34",
    "title": "EP34: FULLMETAL ALCHEMIST 2003",
    "desc": null,
    "pic_496_280": "https://newpic.wetvinfo.com/vpic_cover/x0040e5x382/x0040e5x382_hz.jpg/496",
    "vid": "x0040e5x382",
    "online_language": [
      "1491937",
      "8",
      "1491963",
      "1491973",
      "1491988",
      "12",
      "14",
      "1491994",
      "54",
      "9",
      "40",
      "8229847",
      "35"
    ],
    "isLong": true
  }, {
    "pic_332_187": "https://newpic.wetvinfo.com/vpic_cover/w00405soyy8/w00405soyy8_hz.jpg/332",
    "duration": "1432",
    "vuid": "0",
    "default_pay_status": null,
    "pay_status": null,
    "publish_date": "2010-01-01 00:00:00",
    "head_time": 0,
    "cover_list": [
      "r6yht13srzu48mc"
    ],
    "c_category_value": 10994,
    "aspect": 1.7777777910232544,
    "tail_time": 0,
    "pic_640_360": "https://newpic.wetvinfo.com/vpic_cover/w00405soyy8/w00405soyy8_hz.jpg/640",
    "imgtag_ver": [

    ],
    "state": 4,
    "is_area_limit": 0,
    "type": 3,
    "episode": "35",
    "title": "EP35: FULLMETAL ALCHEMIST 2003",
    "desc": null,
    "vid": "w00405soyy8",
    "pic_496_280": "https://newpic.wetvinfo.com/vpic_cover/w00405soyy8/w00405soyy8_hz.jpg/496",
    "online_language": [
      "1491937",
      "8",
      "1491963",
      "1491973",
      "1491988",
      "12",
      "14",
      "1491994",
      "54",
      "9",
      "40",
      "8229847",
      "35"
    ],
    "isLong": true
  }, {
    "tail_time": 0,
    "aspect": 1.7777777910232544,
    "pic_640_360": "https://newpic.wetvinfo.com/vpic_cover/c0040xm04ow/c0040xm04ow_hz.jpg/640",
    "imgtag_ver": [

    ],
    "state": 4,
    "is_area_limit": 0,
    "type": 3,
    "episode": "36",
    "title": "EP36: FULLMETAL ALCHEMIST 2003",
    "desc": null,
    "pic_496_280": "https://newpic.wetvinfo.com/vpic_cover/c0040xm04ow/c0040xm04ow_hz.jpg/496",
    "vid": "c0040xm04ow",
    "online_language": [
      "1491937",
      "8",
      "1491963",
      "1491973",
      "1491988",
      "12",
      "14",
      "1491994",
      "54",
      "9",
      "40",
      "8229847",
      "35"
    ],
    "pic_332_187": "https://newpic.wetvinfo.com/vpic_cover/c0040xm04ow/c0040xm04ow_hz.jpg/332",
    "duration": "1432",
    "vuid": "0",
    "default_pay_status": null,
    "pay_status": null,
    "head_time": 0,
    "publish_date": "2010-01-01 00:00:00",
    "cover_list": [
      "r6yht13srzu48mc"
    ],
    "c_category_value": 10994,
    "isLong": true
  }, {
    "tail_time": 0,
    "aspect": 1.7777777910232544,
    "state": 4,
    "pic_640_360": "https://newpic.wetvinfo.com/vpic_cover/k00404729j0/k00404729j0_hz.jpg/640",
    "imgtag_ver": [

    ],
    "type": 3,
    "is_area_limit": 0,
    "episode": "37",
    "title": "EP37: FULLMETAL ALCHEMIST 2003",
    "desc": null,
    "pic_496_280": "https://newpic.wetvinfo.com/vpic_cover/k00404729j0/k00404729j0_hz.jpg/496",
    "vid": "k00404729j0",
    "online_language": [
      "1491937",
      "8",
      "1491963",
      "1491973",
      "1491988",
      "12",
      "14",
      "1491994",
      "54",
      "9",
      "40",
      "8229847",
      "35"
    ],
    "duration": "1432",
    "pic_332_187": "https://newpic.wetvinfo.com/vpic_cover/k00404729j0/k00404729j0_hz.jpg/332",
    "vuid": "0",
    "default_pay_status": null,
    "pay_status": null,
    "head_time": 0,
    "publish_date": "2010-01-01 00:00:00",
    "cover_list": [
      "r6yht13srzu48mc"
    ],
    "c_category_value": 10994,
    "isLong": true
  }, {
    "aspect": 1.7777777910232544,
    "tail_time": 0,
    "pic_640_360": "https://newpic.wetvinfo.com/vpic_cover/m00403uqbff/m00403uqbff_hz.jpg/640",
    "imgtag_ver": [

    ],
    "state": 4,
    "type": 3,
    "is_area_limit": 0,
    "episode": "38",
    "title": "EP38: FULLMETAL ALCHEMIST 2003",
    "desc": null,
    "pic_496_280": "https://newpic.wetvinfo.com/vpic_cover/m00403uqbff/m00403uqbff_hz.jpg/496",
    "vid": "m00403uqbff",
    "online_language": [
      "1491937",
      "8",
      "1491963",
      "1491973",
      "1491988",
      "12",
      "14",
      "1491994",
      "54",
      "9",
      "40",
      "8229847",
      "35"
    ],
    "duration": "1432",
    "pic_332_187": "https://newpic.wetvinfo.com/vpic_cover/m00403uqbff/m00403uqbff_hz.jpg/332",
    "vuid": "0",
    "default_pay_status": null,
    "pay_status": null,
    "publish_date": "2010-01-01 00:00:00",
    "head_time": 0,
    "cover_list": [
      "r6yht13srzu48mc"
    ],
    "c_category_value": 10994,
    "isLong": true
  }, {
    "title": "EP39: FULLMETAL ALCHEMIST 2003",
    "desc": null,
    "pic_496_280": "https://newpic.wetvinfo.com/vpic_cover/m00401u0omc/m00401u0omc_hz.jpg/496",
    "vid": "m00401u0omc",
    "online_language": [
      "1491937",
      "8",
      "1491963",
      "1491973",
      "1491988",
      "12",
      "14",
      "1491994",
      "54",
      "9",
      "40",
      "8229847",
      "35"
    ],
    "duration": "1432",
    "pic_332_187": "https://newpic.wetvinfo.com/vpic_cover/m00401u0omc/m00401u0omc_hz.jpg/332",
    "vuid": "0",
    "default_pay_status": null,
    "pay_status": null,
    "head_time": 0,
    "publish_date": "2010-01-01 00:00:00",
    "cover_list": [
      "r6yht13srzu48mc"
    ],
    "c_category_value": 10994,
    "aspect": 1.7777777910232544,
    "tail_time": 0,
    "state": 4,
    "imgtag_ver": [

    ],
    "pic_640_360": "https://newpic.wetvinfo.com/vpic_cover/m00401u0omc/m00401u0omc_hz.jpg/640",
    "type": 3,
    "is_area_limit": 0,
    "episode": "39",
    "isLong": true
  }, {
    "head_time": 0,
    "publish_date": "2010-01-01 00:00:00",
    "cover_list": [
      "r6yht13srzu48mc"
    ],
    "c_category_value": 10994,
    "aspect": 1.7777777910232544,
    "tail_time": 0,
    "state": 4,
    "pic_640_360": "https://newpic.wetvinfo.com/vpic_cover/g0040grwsz8/g0040grwsz8_hz.jpg/640",
    "imgtag_ver": [

    ],
    "type": 3,
    "is_area_limit": 0,
    "episode": "40",
    "title": "EP40: FULLMETAL ALCHEMIST 2003",
    "desc": null,
    "pic_496_280": "https://newpic.wetvinfo.com/vpic_cover/g0040grwsz8/g0040grwsz8_hz.jpg/496",
    "vid": "g0040grwsz8",
    "online_language": [
      "1491937",
      "8",
      "1491963",
      "1491973",
      "1491988",
      "12",
      "14",
      "1491994",
      "54",
      "9",
      "40",
      "8229847",
      "35"
    ],
    "duration": "1432",
    "pic_332_187": "https://newpic.wetvinfo.com/vpic_cover/g0040grwsz8/g0040grwsz8_hz.jpg/332",
    "vuid": "0",
    "default_pay_status": null,
    "pay_status": null,
    "isLong": true
  }, {
    "online_language": [
      "1491937",
      "8",
      "1491963",
      "1491973",
      "1491988",
      "12",
      "14",
      "1491994",
      "54",
      "9",
      "40",
      "8229847",
      "35"
    ],
    "pic_332_187": "https://newpic.wetvinfo.com/vpic_cover/w0040kode0l/w0040kode0l_hz.jpg/332",
    "duration": "1432",
    "vuid": "0",
    "pay_status": null,
    "default_pay_status": null,
    "head_time": 0,
    "publish_date": "2010-01-01 00:00:00",
    "cover_list": [
      "r6yht13srzu48mc"
    ],
    "c_category_value": 10994,
    "tail_time": 0,
    "aspect": 1.7777777910232544,
    "imgtag_ver": [

    ],
    "state": 4,
    "pic_640_360": "https://newpic.wetvinfo.com/vpic_cover/w0040kode0l/w0040kode0l_hz.jpg/640",
    "type": 3,
    "is_area_limit": 0,
    "episode": "41",
    "title": "EP41: FULLMETAL ALCHEMIST 2003",
    "desc": null,
    "pic_496_280": "https://newpic.wetvinfo.com/vpic_cover/w0040kode0l/w0040kode0l_hz.jpg/496",
    "vid": "w0040kode0l",
    "isLong": true
  }, {
    "pic_496_280": "https://newpic.wetvinfo.com/vpic_cover/k00401qz990/k00401qz990_hz.jpg/496",
    "vid": "k00401qz990",
    "online_language": [
      "1491937",
      "8",
      "1491963",
      "1491973",
      "1491988",
      "12",
      "14",
      "1491994",
      "54",
      "9",
      "40",
      "8229847",
      "35"
    ],
    "duration": "1432",
    "pic_332_187": "https://newpic.wetvinfo.com/vpic_cover/k00401qz990/k00401qz990_hz.jpg/332",
    "vuid": "0",
    "default_pay_status": null,
    "pay_status": null,
    "head_time": 0,
    "publish_date": "2010-01-01 00:00:00",
    "cover_list": [
      "r6yht13srzu48mc"
    ],
    "c_category_value": 10994,
    "aspect": 1.7777777910232544,
    "tail_time": 0,
    "state": 4,
    "imgtag_ver": [

    ],
    "pic_640_360": "https://newpic.wetvinfo.com/vpic_cover/k00401qz990/k00401qz990_hz.jpg/640",
    "is_area_limit": 0,
    "type": 3,
    "episode": "42",
    "title": "EP42: FULLMETAL ALCHEMIST 2003",
    "desc": null,
    "isLong": true
  }, {
    "tail_time": 0,
    "aspect": 1.7777777910232544,
    "pic_640_360": "https://newpic.wetvinfo.com/vpic_cover/s00406ibo9z/s00406ibo9z_hz.jpg/640",
    "imgtag_ver": [

    ],
    "state": 4,
    "is_area_limit": 0,
    "type": 3,
    "episode": "43",
    "title": "EP43: FULLMETAL ALCHEMIST 2003",
    "desc": null,
    "pic_496_280": "https://newpic.wetvinfo.com/vpic_cover/s00406ibo9z/s00406ibo9z_hz.jpg/496",
    "vid": "s00406ibo9z",
    "online_language": [
      "1491937",
      "8",
      "1491963",
      "1491973",
      "1491988",
      "12",
      "14",
      "1491994",
      "54",
      "9",
      "40",
      "8229847",
      "35"
    ],
    "duration": "1432",
    "pic_332_187": "https://newpic.wetvinfo.com/vpic_cover/s00406ibo9z/s00406ibo9z_hz.jpg/332",
    "vuid": "0",
    "default_pay_status": null,
    "pay_status": null,
    "head_time": 0,
    "publish_date": "2010-01-01 00:00:00",
    "cover_list": [
      "r6yht13srzu48mc"
    ],
    "c_category_value": 10994,
    "isLong": true
  }, {
    "vuid": "0",
    "default_pay_status": null,
    "pay_status": null,
    "head_time": 0,
    "publish_date": "2010-01-01 00:00:00",
    "cover_list": [
      "r6yht13srzu48mc"
    ],
    "c_category_value": 10994,
    "tail_time": 0,
    "aspect": 1.7777777910232544,
    "pic_640_360": "https://newpic.wetvinfo.com/vpic_cover/a0040hezexf/a0040hezexf_hz.jpg/640",
    "imgtag_ver": [

    ],
    "state": 4,
    "is_area_limit": 0,
    "type": 3,
    "episode": "44",
    "title": "EP44: FULLMETAL ALCHEMIST 2003",
    "desc": null,
    "pic_496_280": "https://newpic.wetvinfo.com/vpic_cover/a0040hezexf/a0040hezexf_hz.jpg/496",
    "vid": "a0040hezexf",
    "online_language": [
      "1491937",
      "8",
      "1491963",
      "1491973",
      "1491988",
      "12",
      "14",
      "1491994",
      "54",
      "9",
      "40",
      "8229847",
      "35"
    ],
    "duration": "1432",
    "pic_332_187": "https://newpic.wetvinfo.com/vpic_cover/a0040hezexf/a0040hezexf_hz.jpg/332",
    "isLong": true
  }, {
    "aspect": 1.7777777910232544,
    "tail_time": 0,
    "pic_640_360": "https://newpic.wetvinfo.com/vpic_cover/a0040aakkyd/a0040aakkyd_hz.jpg/640",
    "imgtag_ver": [

    ],
    "state": 4,
    "type": 3,
    "is_area_limit": 0,
    "episode": "45",
    "title": "EP45: FULLMETAL ALCHEMIST 2003",
    "desc": null,
    "pic_496_280": "https://newpic.wetvinfo.com/vpic_cover/a0040aakkyd/a0040aakkyd_hz.jpg/496",
    "vid": "a0040aakkyd",
    "online_language": [
      "1491937",
      "8",
      "1491963",
      "1491973",
      "1491988",
      "12",
      "14",
      "1491994",
      "54",
      "9",
      "40",
      "8229847",
      "35"
    ],
    "duration": "1432",
    "pic_332_187": "https://newpic.wetvinfo.com/vpic_cover/a0040aakkyd/a0040aakkyd_hz.jpg/332",
    "vuid": "0",
    "default_pay_status": null,
    "pay_status": null,
    "publish_date": "2010-01-01 00:00:00",
    "head_time": 0,
    "cover_list": [
      "r6yht13srzu48mc"
    ],
    "c_category_value": 10994,
    "isLong": true
  }, {
    "publish_date": "2010-01-01 00:00:00",
    "head_time": 0,
    "cover_list": [
      "r6yht13srzu48mc"
    ],
    "c_category_value": 10994,
    "tail_time": 0,
    "aspect": 1.7777777910232544,
    "pic_640_360": "https://newpic.wetvinfo.com/vpic_cover/z0040x1ika9/z0040x1ika9_hz.jpg/640",
    "imgtag_ver": [

    ],
    "state": 4,
    "is_area_limit": 0,
    "type": 3,
    "episode": "46",
    "title": "EP46: FULLMETAL ALCHEMIST 2003",
    "desc": null,
    "vid": "z0040x1ika9",
    "pic_496_280": "https://newpic.wetvinfo.com/vpic_cover/z0040x1ika9/z0040x1ika9_hz.jpg/496",
    "online_language": [
      "1491937",
      "8",
      "1491963",
      "1491973",
      "1491988",
      "12",
      "14",
      "1491994",
      "54",
      "9",
      "40",
      "8229847",
      "35"
    ],
    "duration": "1432",
    "pic_332_187": "https://newpic.wetvinfo.com/vpic_cover/z0040x1ika9/z0040x1ika9_hz.jpg/332",
    "vuid": "0",
    "pay_status": null,
    "default_pay_status": null,
    "isLong": true
  }, {
    "title": "EP47: FULLMETAL ALCHEMIST 2003",
    "desc": null,
    "pic_496_280": "https://newpic.wetvinfo.com/vpic_cover/m0040xoz9ec/m0040xoz9ec_hz.jpg/496",
    "vid": "m0040xoz9ec",
    "online_language": [
      "1491937",
      "8",
      "1491963",
      "1491973",
      "1491988",
      "12",
      "14",
      "1491994",
      "54",
      "9",
      "40",
      "8229847",
      "35"
    ],
    "pic_332_187": "https://newpic.wetvinfo.com/vpic_cover/m0040xoz9ec/m0040xoz9ec_hz.jpg/332",
    "duration": "1432",
    "vuid": "0",
    "pay_status": null,
    "default_pay_status": null,
    "publish_date": "2010-01-01 00:00:00",
    "head_time": 0,
    "cover_list": [
      "r6yht13srzu48mc"
    ],
    "c_category_value": 10994,
    "tail_time": 0,
    "aspect": 1.7777777910232544,
    "state": 4,
    "imgtag_ver": [

    ],
    "pic_640_360": "https://newpic.wetvinfo.com/vpic_cover/m0040xoz9ec/m0040xoz9ec_hz.jpg/640",
    "type": 3,
    "is_area_limit": 0,
    "episode": "47",
    "isLong": true
  }, {
    "type": 3,
    "is_area_limit": 0,
    "episode": "48",
    "title": "EP48: FULLMETAL ALCHEMIST 2003",
    "desc": null,
    "pic_496_280": "https://newpic.wetvinfo.com/vpic_cover/q0040ouvdo5/q0040ouvdo5_hz.jpg/496",
    "vid": "q0040ouvdo5",
    "online_language": [
      "1491937",
      "8",
      "1491963",
      "1491973",
      "1491988",
      "12",
      "14",
      "1491994",
      "54",
      "9",
      "40",
      "8229847",
      "35"
    ],
    "pic_332_187": "https://newpic.wetvinfo.com/vpic_cover/q0040ouvdo5/q0040ouvdo5_hz.jpg/332",
    "duration": "1432",
    "vuid": "0",
    "pay_status": null,
    "default_pay_status": null,
    "head_time": 0,
    "publish_date": "2010-01-01 00:00:00",
    "cover_list": [
      "r6yht13srzu48mc"
    ],
    "c_category_value": 10994,
    "aspect": 1.7777777910232544,
    "tail_time": 0,
    "state": 4,
    "imgtag_ver": [

    ],
    "pic_640_360": "https://newpic.wetvinfo.com/vpic_cover/q0040ouvdo5/q0040ouvdo5_hz.jpg/640",
    "isLong": true
  }, {
    "episode": "49",
    "title": "EP49: FULLMETAL ALCHEMIST 2003",
    "desc": null,
    "pic_496_280": "https://newpic.wetvinfo.com/vpic_cover/g0040cdbmu9/g0040cdbmu9_hz.jpg/496",
    "vid": "g0040cdbmu9",
    "online_language": [
      "1491937",
      "8",
      "1491963",
      "1491973",
      "1491988",
      "12",
      "14",
      "1491994",
      "54",
      "9",
      "40",
      "8229847",
      "35"
    ],
    "duration": "1432",
    "pic_332_187": "https://newpic.wetvinfo.com/vpic_cover/g0040cdbmu9/g0040cdbmu9_hz.jpg/332",
    "vuid": "0",
    "pay_status": null,
    "default_pay_status": null,
    "publish_date": "2010-01-01 00:00:00",
    "head_time": 0,
    "cover_list": [
      "r6yht13srzu48mc"
    ],
    "c_category_value": 10994,
    "aspect": 1.7777777910232544,
    "tail_time": 0,
    "state": 4,
    "imgtag_ver": [

    ],
    "pic_640_360": "https://newpic.wetvinfo.com/vpic_cover/g0040cdbmu9/g0040cdbmu9_hz.jpg/640",
    "type": 3,
    "is_area_limit": 0,
    "isLong": true
  }, {
    "tail_time": 0,
    "aspect": 1.7777777910232544,
    "pic_640_360": "https://newpic.wetvinfo.com/vpic_cover/e0040ssakjt/e0040ssakjt_hz.jpg/640",
    "imgtag_ver": [

    ],
    "state": 4,
    "type": 3,
    "is_area_limit": 0,
    "episode": "50",
    "title": "EP50: FULLMETAL ALCHEMIST 2003",
    "desc": null,
    "pic_496_280": "https://newpic.wetvinfo.com/vpic_cover/e0040ssakjt/e0040ssakjt_hz.jpg/496",
    "vid": "e0040ssakjt",
    "online_language": [
      "1491937",
      "8",
      "1491963",
      "1491973",
      "1491988",
      "12",
      "14",
      "1491994",
      "54",
      "9",
      "40",
      "8229847",
      "35"
    ],
    "duration": "1417",
    "pic_332_187": "https://newpic.wetvinfo.com/vpic_cover/e0040ssakjt/e0040ssakjt_hz.jpg/332",
    "vuid": "0",
    "pay_status": null,
    "default_pay_status": null,
    "publish_date": "2010-01-01 00:00:00",
    "head_time": 0,
    "cover_list": [
      "r6yht13srzu48mc"
    ],
    "c_category_value": 10994,
    "isLong": true
  }, {
    "type": 3,
    "is_area_limit": 0,
    "episode": "51",
    "title": "EP51: FULLMETAL ALCHEMIST 2003",
    "desc": null,
    "vid": "o0040j9hcvj",
    "pic_496_280": "https://newpic.wetvinfo.com/vpic_cover/o0040j9hcvj/o0040j9hcvj_hz.jpg/496",
    "online_language": [
      "1491937",
      "8",
      "1491963",
      "1491973",
      "1491988",
      "12",
      "14",
      "1491994",
      "54",
      "9",
      "40",
      "8229847",
      "35"
    ],
    "pic_332_187": "https://newpic.wetvinfo.com/vpic_cover/o0040j9hcvj/o0040j9hcvj_hz.jpg/332",
    "duration": "1417",
    "vuid": "0",
    "default_pay_status": null,
    "pay_status": null,
    "head_time": 0,
    "publish_date": "2010-01-01 00:00:00",
    "cover_list": [
      "r6yht13srzu48mc"
    ],
    "c_category_value": 10994,
    "tail_time": 0,
    "aspect": 1.7777777910232544,
    "state": 4,
    "imgtag_ver": [{
      "text": " Final",
      "color": "#FF4A22"
    }],
    "pic_640_360": "https://newpic.wetvinfo.com/vpic_cover/o0040j9hcvj/o0040j9hcvj_hz.jpg/640",
    "isLong": true
  }
];
