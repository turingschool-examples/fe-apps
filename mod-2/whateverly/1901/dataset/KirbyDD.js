const data = {
  anime: [
    {
      title: "Attack on Titan",
      mainCharacter: "Eren Yeager",
      numOfEps: 49,
      currentlyAiring: true
    },
    {
      title: "Black Clover",
      mainCharacter: "Asta",
      numOfEps: 76,
      currentlyAiring: true
    },
    {
      title: "Bleach",
      mainCharacter: "Ichigo Kurosaki",
      numOfEps: 366,
      currentlyAiring: true
    },
    {
      title: "Code Geass",
      mainCharacter: "Lelouch vi Britannia",
      numOfEps: 26,
      currentlyAiring: false
    },
    {
      title: "Cowboy Bebop",
      mainCharacter: "Spike Spiegal",
      numOfEps: 50,
      currentlyAiring: false
    },
    {
      title: "Death Note",
      mainCharacter: "Light Yagami",
      numOfEps: 37,
      currentlyAiring: false
    },
    {
      title: "Dragonball Z",
      mainCharacter: "Son Goku",
      numOfEps: 291,
      currentlyAiring: false
    },
    {
      title: "Eureka Seven",
      mainCharacter: "Renton Thurston",
      numOfEps: 50,
      currentlyAiring: false
    },
    {
      title: "Fairy Tail",
      mainCharacter: "Natsu Dragneel",
      numOfEps: 303,
      currentlyAiring: true
    },
    {
      title: "FLCL",
      mainCharacter: "Noata Nandaba",
      numOfEps: 18,
      currentlyAiring: false
    },
    {
      title: "Fullmetal Alchemist: Brotherhood",
      mainCharacter: "Edward Elric",
      numOfEps: 64,
      currentlyAiring: false
    },
    {
      title: "Future Diary",
      mainCharacter: "Yukiteru Amano",
      numOfEps: 26,
      currentlyAiring: false
    },
    {
      title: "Goblin Slayer",
      mainCharacter: "Goblin Slayer",
      numOfEps: 12,
      currentlyAiring: true
    },
    {
      title: "Haikyu!!",
      mainCharacter: "Shoyo Hinata",
      numOfEps: 60,
      currentlyAiring: true
    },
    {
      title: "HUNTERxHUNTER",
      mainCharacter: "Gon Freecss",
      numOfEps: 148,
      currentlyAiring: false
    },
    {
      title: "Kill la Kill",
      mainCharacter: "Ryuko Matoi",
      numOfEps: 24,
      currentlyAiring: false
    },
    {
      title: "Mob Psycho 100",
      mainCharacter: "Shigeo Kageyama",
      numOfEps: 24,
      currentlyAiring: true
    },
    {
      title: "My Hero Academia",
      mainCharacter: "Izuku Midoriya",
      numOfEps: 63,
      currentlyAiring: true
    },
    {
      title: "Naruto",
      mainCharacter: "Naruto Uzumaki",
      numOfEps: 720,
      currentlyAiring: false
    },
    {
      title: "Neon Genesis Evangelion",
      mainCharacter: "Shinji Ikari",
      numOfEps: 26,
      currentlyAiring: false
    },
    {
      title: "One Piece",
      mainCharacter: "Monkey D. Luffy",
      numOfEps: 875,
      currentlyAiring: true
    },
    {
      title: "One Punch Man",
      mainCharacter: "Saitama",
      numOfEps: 12,
      currentlyAiring: true
    },
    {
      title: "Ouran High School Host Club",
      mainCharacter: "Haruhi Fujioka",
      numOfEps: 26,
      currentlyAiring: false
    },
    {
      title: "Pokemon",
      mainCharacter: "Ash Ketchum",
      numOfEps: 1041,
      currentlyAiring: true
    },
    {
      title: "Rurouni Kenshin",
      mainCharacter: "Himura Kenshin",
      numOfEps: 95,
      currentlyAiring: false
    },
    {
      title: "Samurai Champloo",
      mainCharacter: "Fuu",
      numOfEps: 26,
      currentlyAiring: true
    },
    {
      title: "Tengen Toppa Gurren Lagaan",
      mainCharacter: "Simon",
      numOfEps: 27,
      currentlyAiring: false
    },
    {
      title: "The Rising of the Shield Hero",
      mainCharacter: "Naofumi Iwatani",
      numOfEps: 12,
      currentlyAiring: true
    },
    {
      title: "That Time I got Reincarnated as a Slime",
      mainCharacter: "Rimuru Tempest",
      numOfEps: 25,
      currentlyAiring: true
    },
    {
      title: "Toradora!",
      mainCharacter: "Ryuji Takasu",
      numOfEps: 25,
      currentlyAiring: false
    }
  ],
  manga: [
    {
      title: "Attack on Titan",
      author: "Hajime Isayama",
      numOfChapters: 114,
      yearSerielized: 2009
    },
    {
      title: "Black Clover",
      author: "Yuki Tabata",
      numOfChapters: 178,
      yearSerielized: 2015
    },
    {
      title: "Bleach",
      author: "Tite Kubo",
      numOfChapters: 686,
      yearSerielized: 2001
    },
    {
      title: "Code Geass",
      author: "Goro Taniguchi",
      numOfChapters: 20,
      yearSerielized: 2006
    },
    {
      title: "Cowboy Bebop",
      author: "Yutaka Nanten",
      numOfChapters: 21,
      yearSerielized: 1998
    },
    {
      title: "Death Note",
      author: "Tsugumi Ohba",
      numOfChapters: 108,
      yearSerielized: 2003
    },
    {
      title: "Dragonball Z",
      author: "Akira Toriyama",
      numOfChapters: 325,
      yearSerielized: 1989
    },
    {
      title: "Eureka Seven",
      author: "Jinsei Kataoka",
      numOfChapters: 23,
      yearSerielized: 2005
    },
    {
      title: "Fairy Tail",
      author: "Hiro Mashima",
      numOfChapters: 63,
      yearSerielized: 2006
    },
    {
      title: "FLCL",
      author: "Hajime Ueda",
      numOfChapters: 15,
      yearSerielized: 2000
    },
    {
      title: "Fullmetal Alchemist: Brotherhood",
      author: " Hiromu Arakawa",
      numOfChapters: 108,
      yearSerielized: 2001
    },
    {
      title: "Future Diary",
      author: "Sakae Esuno",
      numOfChapters: 59,
      yearSerielized: 2006
    },
    {
      title: "Goblin Slayer",
      author: "Kento Eida",
      numOfChapters: 34,
      yearSerielized: 2017
    },
    {
      title: "Haikyu!!",
      author: "Haruichi Furudate",
      numOfChapters: 342,
      yearSerielized: 2012
    },
    {
      title: "HUNTERxHUNTER",
      author: "GYoshihiro Togashi",
      numOfChapters: 390,
      yearSerielized: 1998
    },
    {
      title: "Kill la Kill",
      author: "Kazuki Nakashima",
      numOfChapters: 17,
      yearSerielized: 2015
    },
    {
      title: "Mob Psycho 100",
      author: "One",
      numOfChapters: 97,
      yearSerielized: 2012
    },
    {
      title: "My Hero Academia",
      author: "Kohei Horikoshi",
      numOfChapters: 222,
      yearSerielized: 2014
    },
    {
      title: "Naruto",
      author: "Masashi Kishimoto",
      numOfChapters: 700,
      yearSerielized: 2000
    },
    {
      title: "Neon Genesis Evangelion",
      author: "Yoshiyuki Sadamoto",
      numOfChapters: 110,
      yearSerielized: 1994
    },
    {
      title: "One Piece",
      author: "Eiichiro Oda",
      numOfChapters: 931,
      yearSerielized: 1997
    },
    {
      title: "One Punch Man",
      author: "One",
      numOfChapters: 90,
      yearSerielized: 2012
    },
    {
      title: "Ouran High School Host Club",
      author: "Bisco Hatori",
      numOfChapters: 83,
      yearSerielized: 2002
    },
    {
      title: "Pokemon",
      author: "Satoshi Tajiri",
      numOfChapters: 76,
      yearSerielized: 1997
    },
    {
      title: "Rurouni Kenshin",
      author: "Nobuhiro Watsuki",
      numOfChapters: 255,
      "yearSerialized": 1994
    },
    {
      title: "Samurai Champloo",
      author: "Masaru Gotsubo",
      numOfChapters: 10,
      yearSerielized: 2004
    },
    {
      title: "Tengen Toppa Gurren Lagaan",
      author: "Kazuki Nakashima",
      numOfChapters: 22,
      yearSerielized: 2007
    },
    {
      title: "The Rising of the Shield Hero",
      author: "Aiya Kyū",
      numOfChapters: 53,
      yearSerielized: 2014
    },
    {
      title: "That Time I got Reincarnated as a Slime",
      author: "Fuse",
      numOfChapters: 54,
      yearSerielized: 2016
    },
    {
      title: "Toradora!",
      author: "Yuyuko Takemiya",
      numOfChapters: 60,
      yearSerielized: 2007
    }
  ]
};

export default data;