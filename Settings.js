import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import React, { useState } from 'react';

const characters = [
  {
    "url": "https://anapioficeandfire.com/api/characters/583",
    "name": "Jon Snow",
    "gender": "Male",
    "culture": "Northmen",
    "born": "In 283 AC",
    "died": "",
    "titles": [
      "Lord Commander of the Night's Watch"
    ],
    "aliases": [
      "Lord Snow",
      "Ned Stark's Bastard",
      "The Snow of Winterfell",
      "The Crow-Come-Over",
      "The 998th Lord Commander of the Night's Watch",
      "The Bastard of Winterfell",
      "The Black Bastard of the Wall",
      "Lord Crow"
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/362"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/5"
    ],
    "povBooks": [
      "https://anapioficeandfire.com/api/books/1",
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/8"
    ],
    "tvSeries": [
      "Season 1",
      "Season 2",
      "Season 3",
      "Season 4",
      "Season 5",
      "Season 6"
    ],
    "playedBy": [
      "Kit Harington"
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/584",
    "name": "Jon Stark",
    "gender": "Male",
    "culture": "",
    "born": "",
    "died": "",
    "titles": [
      "King in the North"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/362"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/1",
      "https://anapioficeandfire.com/api/books/11"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/585",
    "name": "Jon Umber",
    "gender": "Male",
    "culture": "Northmen",
    "born": "At the Last Hearth",
    "died": "",
    "titles": [
      "Lord of the Last Hearth"
    ],
    "aliases": [
      "The Greatjon",
      "Greatjon Umber"
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/401"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/1",
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
      "Season 1"
    ],
    "playedBy": [
      "Clive Mantle"
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/586",
    "name": "Jon Umber",
    "gender": "Male",
    "culture": "Northmen",
    "born": "",
    "died": "In 299 AC, at the Twins",
    "titles": [
      ""
    ],
    "aliases": [
      "The Smalljon",
      "Smalljon Umber"
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/401"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/1",
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
      "Season 6"
    ],
    "playedBy": [
      "Dean Jagger"
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/587",
    "name": "Jon Wylde",
    "gender": "Male",
    "culture": "",
    "born": "",
    "died": "",
    "titles": [
      "Ser"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "https://anapioficeandfire.com/api/characters/370",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/438"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/588",
    "name": "Jonelle Cerwyn",
    "gender": "Female",
    "culture": "Northmen",
    "born": "In 267 AC, at Cerwyn",
    "died": "",
    "titles": [
      "Lady of Cerwyn"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/66"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/1",
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/589",
    "name": "Jonnel Stark",
    "gender": "Male",
    "culture": "",
    "born": "",
    "died": "",
    "titles": [
      "Lord of Winterfell",
      "Warden of the North"
    ],
    "aliases": [
      "One-Eye"
    ],
    "father": "",
    "mother": "",
    "spouse": "https://anapioficeandfire.com/api/characters/911",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/362"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/11"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/590",
    "name": "Jonos Frey",
    "gender": "Male",
    "culture": "",
    "born": "In 291 AC",
    "died": "",
    "titles": [
      ""
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/143"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/591",
    "name": "Jonos Stark",
    "gender": "Male",
    "culture": "Northmen",
    "born": "",
    "died": "",
    "titles": [
      "King in the North",
      "Lord of Winterfell"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/362"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/2"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/592",
    "name": "Jonothor Darry",
    "gender": "Male",
    "culture": "",
    "born": "",
    "died": "In 283 AC, at the Trident",
    "titles": [
      "Ser"
    ],
    "aliases": [
      "Jon Darry"
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/97"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/593",
    "name": "Jorah Stark",
    "gender": "Male",
    "culture": "Northmen",
    "born": "",
    "died": "",
    "titles": [
      "King in the North",
      "Lord of Winterfell"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/362"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/2"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/594",
    "name": "Jorelle Mormont",
    "gender": "Female",
    "culture": "Northmen",
    "born": "In or between 278 AC and 289 AC",
    "died": "",
    "titles": [
      ""
    ],
    "aliases": [
      "Jory"
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/271"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/595",
    "name": "Jory Cassel",
    "gender": "Male",
    "culture": "Northmen",
    "born": "At Winterfell",
    "died": "In 298 AC, at King's Landing",
    "titles": [
      "Captain of the guard"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/61"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/1",
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
      "Season 1"
    ],
    "playedBy": [
      "Jamie Sives"
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/596",
    "name": "Joseth Mallister",
    "gender": "Male",
    "culture": "",
    "born": "",
    "died": "",
    "titles": [
      "Ser"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/254"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/4"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/597",
    "name": "Josmyn Peckledon",
    "gender": "Male",
    "culture": "",
    "born": "In 284 AC or 285 AC",
    "died": "",
    "titles": [
      ""
    ],
    "aliases": [
      "Peck"
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/299"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/598",
    "name": "Josua Willum",
    "gender": "Male",
    "culture": "",
    "born": "",
    "died": "",
    "titles": [
      ""
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/429"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/2"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/599",
    "name": "Jothos Slynt",
    "gender": "Male",
    "culture": "",
    "born": "",
    "died": "",
    "titles": [
      ""
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/354"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/3"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/600",
    "name": "Joyeuse Erenford",
    "gender": "Female",
    "culture": "",
    "born": "In 282 AC or 283 AC",
    "died": "",
    "titles": [
      "Lady of the Crossing"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "https://anapioficeandfire.com/api/characters/1093",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/115",
      "https://anapioficeandfire.com/api/houses/143"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/1",
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
      "Season 1",
      "Season 3"
    ],
    "playedBy": [
      "Kelly Long"
    ]
  },
  {
    "url": "https://www.anapioficeandfire.com/api/characters/601",
    "name": "Justin Massey",
    "gender": "Male",
    "culture": "",
    "born": "",
    "died": "",
    "titles": [
      "Ser"
    ],
    "aliases": [
      "The Smiler"
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://www.anapioficeandfire.com/api/houses/15",
      "https://www.anapioficeandfire.com/api/houses/260"
    ],
    "books": [
      "https://www.anapioficeandfire.com/api/books/5",
      "https://www.anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/602",
    "name": "Jyanna Frey",
    "gender": "Female",
    "culture": "",
    "born": "",
    "died": "",
    "titles": [
      ""
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "https://anapioficeandfire.com/api/characters/180",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/143"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://www.anapioficeandfire.com/api/characters/603",
    "name": "Karlon Stark",
    "gender": "Male",
    "culture": "Northmen",
    "born": "",
    "died": "",
    "titles": [
      "Lord of Karl's Hold"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://www.anapioficeandfire.com/api/houses/215",
      "https://www.anapioficeandfire.com/api/houses/362"
    ],
    "books": [
      "https://www.anapioficeandfire.com/api/books/3"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/604",
    "name": "Karyl Vance",
    "gender": "Male",
    "culture": "",
    "born": "At Wayfarer's Rest",
    "died": "",
    "titles": [
      "Ser",
      "Lord of Wayfarer's Rest"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/405"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/1",
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://www.anapioficeandfire.com/api/characters/605",
    "name": "Kevan Lannister",
    "gender": "Male",
    "culture": "",
    "born": "In 244 AC",
    "died": "In 300 AC, at King's Landing",
    "titles": [
      "Ser",
      "Master of laws",
      "Lord Regent",
      "Protector of the Realm"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "https://www.anapioficeandfire.com/api/characters/327",
    "allegiances": [
      "https://www.anapioficeandfire.com/api/houses/229"
    ],
    "books": [
      "https://www.anapioficeandfire.com/api/books/1",
      "https://www.anapioficeandfire.com/api/books/2",
      "https://www.anapioficeandfire.com/api/books/3",
      "https://www.anapioficeandfire.com/api/books/5"
    ],
    "povBooks": [
      "https://www.anapioficeandfire.com/api/books/8"
    ],
    "tvSeries": [
      "Season 1",
      "Season 2",
      "Season 5",
      "Season 6"
    ],
    "playedBy": [
      "Ian Gelder"
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/606",
    "name": "Kirth Vance",
    "gender": "Male",
    "culture": "",
    "born": "",
    "died": "",
    "titles": [
      ""
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/404"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/607",
    "name": "Kyle Condon",
    "gender": "Male",
    "culture": "",
    "born": "",
    "died": "",
    "titles": [
      "Ser"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/78"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/3"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/608",
    "name": "Kyle Royce",
    "gender": "Male",
    "culture": "",
    "born": "",
    "died": "At King's Landing",
    "titles": [
      ""
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/328"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/2"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/609",
    "name": "Kyra Frey",
    "gender": "Female",
    "culture": "",
    "born": "In or between 262 AC and 277 AC",
    "died": "",
    "titles": [
      ""
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "https://anapioficeandfire.com/api/characters/404",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/143"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/610",
    "name": "Laena Velaryon",
    "gender": "Female",
    "culture": "Valyrian",
    "born": "In 93 AC",
    "died": "In 120 AC, at Driftmark",
    "titles": [
      ""
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "https://anapioficeandfire.com/api/characters/269",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/378",
      "https://anapioficeandfire.com/api/houses/407"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/9",
      "https://anapioficeandfire.com/api/books/10",
      "https://anapioficeandfire.com/api/books/11"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/611",
    "name": "Laenor Velaryon.",
    "gender": "Male",
    "culture": "Valyrian",
    "born": "In 94 AC",
    "died": "In 120 AC, at Spicetown",
    "titles": [
      "Ser"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "https://anapioficeandfire.com/api/characters/874",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/378",
      "https://anapioficeandfire.com/api/houses/407"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/9",
      "https://anapioficeandfire.com/api/books/10",
      "https://anapioficeandfire.com/api/books/11"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/612",
    "name": "Lambert Turnberry",
    "gender": "Male",
    "culture": "",
    "born": "",
    "died": "",
    "titles": [
      "Ser"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/396"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://www.anapioficeandfire.com/api/characters/613",
    "name": "Lancel Lannister",
    "gender": "Male",
    "culture": "",
    "born": "In 282 AC",
    "died": "",
    "titles": [
      "Ser",
      "Lord of Darry"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "https://www.anapioficeandfire.com/api/characters/114",
    "allegiances": [
      "https://www.anapioficeandfire.com/api/houses/229",
      "https://www.anapioficeandfire.com/api/houses/230"
    ],
    "books": [
      "https://www.anapioficeandfire.com/api/books/1",
      "https://www.anapioficeandfire.com/api/books/2",
      "https://www.anapioficeandfire.com/api/books/3",
      "https://www.anapioficeandfire.com/api/books/5",
      "https://www.anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
      "Season 1",
      "Season 2",
      "Season 5"
    ],
    "playedBy": [
      "Eugene Simon"
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/614",
    "name": "Lancel V Lannister",
    "gender": "Male",
    "culture": "",
    "born": "",
    "died": "",
    "titles": [
      "King of the Rock"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [],
    "books": [
      "https://anapioficeandfire.com/api/books/6"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://www.anapioficeandfire.com/api/characters/615",
    "name": "Lann",
    "gender": "Male",
    "culture": "",
    "born": "In Age of Heroes",
    "died": "",
    "titles": [
      ""
    ],
    "aliases": [
      "Lann the Clever"
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://www.anapioficeandfire.com/api/houses/229"
    ],
    "books": [
      "https://www.anapioficeandfire.com/api/books/1",
      "https://www.anapioficeandfire.com/api/books/11"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://www.anapioficeandfire.com/api/characters/616",
    "name": "Lanna Lannister",
    "gender": "Female",
    "culture": "",
    "born": "In or between 271 AC and 286 AC",
    "died": "",
    "titles": [
      ""
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "https://www.anapioficeandfire.com/api/characters/124",
    "allegiances": [
      "https://www.anapioficeandfire.com/api/houses/212",
      "https://www.anapioficeandfire.com/api/houses/229"
    ],
    "books": [
      "https://www.anapioficeandfire.com/api/books/3",
      "https://www.anapioficeandfire.com/api/books/5",
      "https://www.anapioficeandfire.com/api/books/8",
      "https://www.anapioficeandfire.com/api/books/11"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/617",
    "name": "Larence Snow",
    "gender": "Male",
    "culture": "Northmen",
    "born": "In 286 AC",
    "died": "",
    "titles": [
      ""
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/202"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/618",
    "name": "Larys Strong",
    "gender": "Male",
    "culture": "",
    "born": "In 91 AC or before",
    "died": "",
    "titles": [
      "Lord of Harrenhal",
      "Master of whisperers"
    ],
    "aliases": [
      "Larys Clubfoot"
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/369"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/9",
      "https://anapioficeandfire.com/api/books/10"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/619",
    "name": "Leana Frey",
    "gender": "Female",
    "culture": "",
    "born": "In 299 AC or 300 AC",
    "died": "",
    "titles": [
      ""
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/143"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/5"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/620",
    "name": "Lenwood Tawney",
    "gender": "Male",
    "culture": "Ironborn",
    "born": "",
    "died": "",
    "titles": [
      ""
    ],
    "aliases": [
      "Little Lenwood Tawney"
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/381"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/5"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://www.anapioficeandfire.com/api/characters/621",
    "name": "Leo Blackbar",
    "gender": "Male",
    "culture": "",
    "born": "",
    "died": "",
    "titles": [
      "Ser"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "https://www.anapioficeandfire.com/api/characters/783",
    "allegiances": [
      "https://www.anapioficeandfire.com/api/houses/22"
    ],
    "books": [
      "https://www.anapioficeandfire.com/api/books/3",
      "https://www.anapioficeandfire.com/api/books/5"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/622",
    "name": "Leo Lefford",
    "gender": "Male",
    "culture": "",
    "born": "",
    "died": "In 299 AC, at Trident",
    "titles": [
      "Lord of the Golden Tooth"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/234"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/1",
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://www.anapioficeandfire.com/api/characters/623",
    "name": "Leo Tyrell",
    "gender": "Male",
    "culture": "Reach",
    "born": "",
    "died": "",
    "titles": [
      "Lord Paramount of the Mander",
      "Lord of Highgarden",
      "Defender of the Marches",
      "High Marshal of the Reach",
      "Warden of the South"
    ],
    "aliases": [
      "Leo Longthorn"
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://www.anapioficeandfire.com/api/houses/398"
    ],
    "books": [
      "https://www.anapioficeandfire.com/api/books/3",
      "https://www.anapioficeandfire.com/api/books/4",
      "https://www.anapioficeandfire.com/api/books/7",
      "https://www.anapioficeandfire.com/api/books/11"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/625",
    "name": "Leobald Tallhart",
    "gender": "Male",
    "culture": "Northmen",
    "born": "At Torrhen's Square",
    "died": "In 299 AC, at Winterfell",
    "titles": [
      "Castellan of Torrhen's Square"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "https://anapioficeandfire.com/api/characters/189",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/376"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://www.anapioficeandfire.com/api/characters/626",
    "name": "Leona Tyrell",
    "gender": "Female",
    "culture": "",
    "born": "",
    "died": "",
    "titles": [
      ""
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://www.anapioficeandfire.com/api/houses/398"
    ],
    "books": [
      "https://www.anapioficeandfire.com/api/books/3",
      "https://www.anapioficeandfire.com/api/books/5"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/627",
    "name": "Leona Woolfield",
    "gender": "Female",
    "culture": "",
    "born": "",
    "died": "",
    "titles": [
      ""
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "https://anapioficeandfire.com/api/characters/1122",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/255",
      "https://anapioficeandfire.com/api/houses/434"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/628",
    "name": "Leonella Lefford",
    "gender": "Female",
    "culture": "",
    "born": "",
    "died": "",
    "titles": [
      ""
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "https://anapioficeandfire.com/api/characters/649",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/143",
      "https://anapioficeandfire.com/api/houses/234"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/629",
    "name": "Leslyn Haigh",
    "gender": "Male",
    "culture": "",
    "born": "",
    "died": "",
    "titles": [
      "Ser"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "https://anapioficeandfire.com/api/characters/819",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/172"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/630",
    "name": "Lester Morrigen",
    "gender": "Male",
    "culture": "",
    "born": "",
    "died": "",
    "titles": [
      "Lord of Crows Nest"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/272"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/631",
    "name": "Lewyn Martell",
    "gender": "Male",
    "culture": "Dornish",
    "born": "",
    "died": "In 283 AC, at the Trident",
    "titles": [
      "Prince",
      "Ser"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/285"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/1",
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/632",
    "name": "Lewys Lydden",
    "gender": "Male",
    "culture": "",
    "born": "",
    "died": "",
    "titles": [
      "Lord of the Deep Den"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/250"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/1",
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/633",
    "name": "Lewys Piper",
    "gender": "Male",
    "culture": "Rivermen",
    "born": "",
    "died": "",
    "titles": [
      ""
    ],
    "aliases": [
      "Little Lew"
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/302"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/634",
    "name": "Leyla Hightower",
    "gender": "Female",
    "culture": "",
    "born": "",
    "died": "",
    "titles": [
      ""
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "https://anapioficeandfire.com/api/characters/1553",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/195"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/5"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/635",
    "name": "Leyton Hightower",
    "gender": "Male",
    "culture": "",
    "born": "",
    "died": "",
    "titles": [
      "Lord of the Hightower",
      "Lord of the Port",
      "Voice of Oldtown",
      "Defender of the Citadel",
      "Beacon of the South"
    ],
    "aliases": [
      "Old Man of Oldtown"
    ],
    "father": "",
    "mother": "",
    "spouse": "https://anapioficeandfire.com/api/characters/877",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/195"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/1",
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/636",
    "name": "Lia Serry",
    "gender": "Female",
    "culture": "",
    "born": "",
    "died": "",
    "titles": [
      ""
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "https://anapioficeandfire.com/api/characters/1019",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/343",
      "https://anapioficeandfire.com/api/houses/398"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/637",
    "name": "Liane Vance",
    "gender": "Female",
    "culture": "",
    "born": "",
    "died": "",
    "titles": [
      ""
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/405"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/5"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/638",
    "name": "Lollys Stokeworth",
    "gender": "Female",
    "culture": "",
    "born": "In 265 AC",
    "died": "",
    "titles": [
      "Lady of Stokeworth"
    ],
    "aliases": [
      "Lollys Lackwit"
    ],
    "father": "",
    "mother": "",
    "spouse": "https://anapioficeandfire.com/api/characters/217",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/364"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/639",
    "name": "Lomas Estermont",
    "gender": "Male",
    "culture": "Stormlands",
    "born": "",
    "died": "",
    "titles": [
      "Ser"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/117"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/640",
    "name": "Loras Tyrell",
    "gender": "Male",
    "culture": "Reach",
    "born": "In 282 AC, at Highgarden",
    "died": "",
    "titles": [
      "Ser",
      "Lord Commander of the Rainbow Guard"
    ],
    "aliases": [
      "The Knight of Flowers",
      "Knight o' Pansies",
      "Ser Daisy"
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/398"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/1",
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
      "Season 1",
      "Season 2",
      "Season 3",
      "Season 4",
      "Season 5",
      "Season 6"
    ],
    "playedBy": [
      "Finn Jones"
    ]
  },
  
  {
    "url": "https://anapioficeandfire.com/api/characters/642",
    "name": "Lord Caswell",
    "gender": "Male",
    "culture": "",
    "born": "",
    "died": "",
    "titles": [
      "Lord of Bitterbridge",
      "Defender of the Fords"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/63"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/643",
    "name": "Lord Staunton",
    "gender": "Male",
    "culture": "",
    "born": "",
    "died": "In 129 AC, at Rook's Rest",
    "titles": [
      "Lord of Rook's Rest"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/363"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/9"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/644",
    "name": "Lorent Caswell",
    "gender": "Male",
    "culture": "",
    "born": "",
    "died": "",
    "titles": [
      "Lord of Bitterbridge",
      "Defender of the Fords"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/63"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/645",
    "name": "Lorent Lorch",
    "gender": "Male",
    "culture": "",
    "born": "",
    "died": "",
    "titles": [
      "Ser"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/245"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/646",
    "name": "Lorent Marbrand",
    "gender": "Male",
    "culture": "Westerman",
    "born": "",
    "died": "In 130 AC, at King's Landing",
    "titles": [
      "Ser",
      "Lord Commander of the Queensguard"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/258"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/9"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/648",
    "name": "Lorra Royce",
    "gender": "Female",
    "culture": "",
    "born": "",
    "died": "",
    "titles": [
      "Lady of Winterfell"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "https://anapioficeandfire.com/api/characters/192",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/328",
      "https://anapioficeandfire.com/api/houses/362"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/11"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/649",
    "name": "Lothar Frey",
    "gender": "Male",
    "culture": "Rivermen",
    "born": "In 265 AC or 266 AC, at Twins",
    "died": "",
    "titles": [
      "Steward of the Twins"
    ],
    "aliases": [
      "Lame Lothar"
    ],
    "father": "",
    "mother": "",
    "spouse": "https://anapioficeandfire.com/api/characters/628",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/143"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/1",
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
      "Season 3"
    ],
    "playedBy": [
      "Tom Brooke"
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/653",
    "name": "Lucas Codd",
    "gender": "Male",
    "culture": "Ironborn",
    "born": "",
    "died": "",
    "titles": [
      ""
    ],
    "aliases": [
      "Left-Hand Lucas"
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/75"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/656",
    "name": "Lucas Lothston",
    "gender": "Male",
    "culture": "",
    "born": "",
    "died": "",
    "titles": [
      "Lord of Harrenhal",
      "Hand of the King"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "https://anapioficeandfire.com/api/characters/391",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/246"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/11"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/659",
    "name": "Luceon Frey",
    "gender": "Male",
    "culture": "",
    "born": "In or between 249 AC and 257 AC",
    "died": "",
    "titles": [
      "Septon"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [],
    "books": [
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/662",
    "name": "Lucion Lannister",
    "gender": "Male",
    "culture": "",
    "born": "In or between 270 AC and 285 AC",
    "died": "",
    "titles": [
      "Ser"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/229"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/8",
      "https://anapioficeandfire.com/api/books/11"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/664",
    "name": "Luthor Tyrell",
    "gender": "Male",
    "culture": "Reach",
    "born": "At Highgarden",
    "died": "",
    "titles": [
      "Lord Paramount of the Mander",
      "Lord of Highgarden",
      "Defender of the Marches",
      "High Marshal of the Reach",
      "Warden of the South"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "https://anapioficeandfire.com/api/characters/784",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/398"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/3"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/667",
    "name": "Lyanna Mormont",
    "gender": "Female",
    "culture": "Northmen",
    "born": "In 290 AC",
    "died": "",
    "titles": [
      ""
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/271"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
      "Season 6"
    ],
    "playedBy": [
      "Bella Ramsey"
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/691",
    "name": "Mace Tyrell",
    "gender": "Male",
    "culture": "",
    "born": "In After 256 AC",
    "died": "",
    "titles": [
      "Lord of Highgarden",
      "Defender of the Marches",
      "High Marshal of the Reach",
      "Warden of the South",
      "Hand of the King",
      "Master of ships (formerly)"
    ],
    "aliases": [
      "Lord Oaf",
      "The Fat Flower",
      "Lord Puff Fish"
    ],
    "father": "",
    "mother": "",
    "spouse": "https://anapioficeandfire.com/api/characters/69",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/398"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/1",
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
      "Season 4",
      "Season 5",
      "Season 6"
    ],
    "playedBy": [
      "Roger Ashton-Griffiths"
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/692",
    "name": "Maege Mormont",
    "gender": "Female",
    "culture": "Northmen",
    "born": "In or between 239 AC and 257 AC",
    "died": "",
    "titles": [
      "Lady of Bear Island"
    ],
    "aliases": [
      "The She-Bear"
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/271"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/1",
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
      "Season 1"
    ],
    "playedBy": [
      "Elizabeth Barrett"
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/693",
    "name": "Maegelle Frey",
    "gender": "Female",
    "culture": "",
    "born": "In or between 249 AC and 266 AC",
    "died": "",
    "titles": [
      ""
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "https://anapioficeandfire.com/api/characters/1305",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/143"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/694",
    "name": "Maegor I",
    "gender": "Male",
    "culture": "",
    "born": "12 AC",
    "died": "48 AC, at King's Landing",
    "titles": [
      "King of the Andals, the Rhoynar and the First Men",
      "Lord of the Seven Kingdoms",
      "Protector of the Realm",
      "Hand of the King",
      "Ser"
    ],
    "aliases": [
      "Maegor the Cruel"
    ],
    "father": "https://anapioficeandfire.com/api/characters/38",
    "mother": "https://anapioficeandfire.com/api/characters/2071",
    "spouse": "https://anapioficeandfire.com/api/characters/239",
    "allegiances": [],
    "books": [
      "https://anapioficeandfire.com/api/books/1",
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/9",
      "https://anapioficeandfire.com/api/books/10",
      "https://anapioficeandfire.com/api/books/11"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/695",
    "name": "Maekar I",
    "gender": "Male",
    "culture": "",
    "born": "or between 174 AC and 178 AC, at King's Landing",
    "died": "233 AC, at Starpike",
    "titles": [
      "King of the Andals, the Rhoynar and the First Men",
      "Lord of the Seven Kingdoms",
      "Protector of the Realm",
      "Prince of Summerhall"
    ],
    "aliases": [
      "The Anvil"
    ],
    "father": "https://anapioficeandfire.com/api/characters/274",
    "mother": "https://anapioficeandfire.com/api/characters/709",
    "spouse": "https://anapioficeandfire.com/api/characters/334",
    "allegiances": [],
    "books": [
      "https://anapioficeandfire.com/api/books/1",
      "https://anapioficeandfire.com/api/books/4",
      "https://anapioficeandfire.com/api/books/6",
      "https://anapioficeandfire.com/api/books/7",
      "https://anapioficeandfire.com/api/books/11"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/696",
    "name": "Maelor Targaryen",
    "gender": "Male",
    "culture": "",
    "born": "In 127 AC, at King's Landing",
    "died": "In 130 AC, at Bitterbridge",
    "titles": [
      "Prince"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/378"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/9",
      "https://anapioficeandfire.com/api/books/10",
      "https://anapioficeandfire.com/api/books/11"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/697",
    "name": "Maelys I Blackfyre",
    "gender": "Male",
    "culture": "Valyrian",
    "born": "",
    "died": "In 260 AC, at Stepstones",
    "titles": [
      ""
    ],
    "aliases": [
      "Maelys the Monstrous"
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/23"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/8",
      "https://anapioficeandfire.com/api/books/11"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/698",
    "name": "Maldon Massey",
    "gender": "Male",
    "culture": "First Men",
    "born": "",
    "died": "",
    "titles": [
      "Lord of Stonedance"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/260"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/11"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/701",
    "name": "Mandon Moore",
    "gender": "Male",
    "culture": "Valemen",
    "born": "",
    "died": "In 299 AC, at the Blackwater Rush",
    "titles": [
      "Ser"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/268"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/1",
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/3"
    ],
    "povBooks": [],
    "tvSeries": [
      "Season 1",
      "Season 2"
    ],
    "playedBy": [
      "James Doran"
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/705",
    "name": "Manfrey Martell",
    "gender": "Male",
    "culture": "Dornish",
    "born": "",
    "died": "",
    "titles": [
      "Ser",
      "Castellan of Sunspear"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/285"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/709",
    "name": "Mariah Martell",
    "gender": "Female",
    "culture": "Dornish",
    "born": "",
    "died": "",
    "titles": [
      "Princess"
    ],
    "aliases": [
      "Myriah Martell"
    ],
    "father": "",
    "mother": "",
    "spouse": "https://anapioficeandfire.com/api/characters/274",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/285",
      "https://anapioficeandfire.com/api/houses/378"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/1",
      "https://anapioficeandfire.com/api/books/4",
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/11"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/714",
    "name": "Mark Ryswell",
    "gender": "Male",
    "culture": "Northmen",
    "born": "",
    "died": "In 283 AC, at the Tower of Joy",
    "titles": [
      "Ser"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/335"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/1"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/718",
    "name": "Maron Greyjoy",
    "gender": "Male",
    "culture": "Ironborn",
    "born": "In 275 AC or before",
    "died": "In 289 AC, at Pyke",
    "titles": [
      ""
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/169"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/1",
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/720",
    "name": "Maron Volmark",
    "gender": "Male",
    "culture": "Ironborn",
    "born": "In 283 AC or 284 AC",
    "died": "",
    "titles": [
      "Lord of Volmark",
      "Lord of Greenshield"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/409"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/721",
    "name": "Marq Piper",
    "gender": "Male",
    "culture": "Rivermen",
    "born": "At Pinkmaiden Castle",
    "died": "",
    "titles": [
      "Ser"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/302"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/1",
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/724",
    "name": "Martyn Cassel",
    "gender": "Male",
    "culture": "Northmen",
    "born": "",
    "died": "In 284 AC, at the Tower of Joy",
    "titles": [
      ""
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/61"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/1",
      "https://anapioficeandfire.com/api/books/2"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/729",
    "name": "Matarys Targaryen",
    "gender": "Male",
    "culture": "",
    "born": "In 184 AC or later",
    "died": "In 209 AC, at King's Landing",
    "titles": [
      "Prince"
    ],
    "aliases": [
      "The Even Younger Prince"
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/378"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/4",
      "https://anapioficeandfire.com/api/books/6",
      "https://anapioficeandfire.com/api/books/7",
      "https://anapioficeandfire.com/api/books/11"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/733",
    "name": "Medgar Tully",
    "gender": "Male",
    "culture": "Rivermen",
    "born": "",
    "died": "In or between 209 AC and 211 AC",
    "titles": [
      "Lord Paramount of the Trident",
      "Lord of Riverrun"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/395"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/4"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/734",
    "name": "Medger Cerwyn",
    "gender": "Male",
    "culture": "Northmen",
    "born": "At Cerwyn",
    "died": "In 299 AC, at Harrenhal",
    "titles": [
      "Lord of Cerwyn"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/66"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/1",
      "https://anapioficeandfire.com/api/books/2"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/739",
    "name": "Melara Hetherspoon",
    "gender": "Female",
    "culture": "",
    "born": "In 264 AC or 265 AC",
    "died": "In 276 AC",
    "titles": [
      ""
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/193"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/743",
    "name": "Melisandre",
    "gender": "Female",
    "culture": "Asshai",
    "born": "At Unknown",
    "died": "",
    "titles": [
      ""
    ],
    "aliases": [
      "The Red Priestess",
      "The Red Woman",
      "The King's Red Shadow",
      "Lady Red",
      "Lot Seven"
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [],
    "books": [
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5"
    ],
    "povBooks": [
      "https://anapioficeandfire.com/api/books/8"
    ],
    "tvSeries": [
      "Season 2",
      "Season 3",
      "Season 4",
      "Season 5",
      "Season 6"
    ],
    "playedBy": [
      "Carice van Houten"
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/746",
    "name": "Meredyth Crane",
    "gender": "Female",
    "culture": "",
    "born": "At Red Lake",
    "died": "",
    "titles": [
      ""
    ],
    "aliases": [
      "Merry"
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/87"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/751",
    "name": "Merrett Frey",
    "gender": "Male",
    "culture": "Rivermen",
    "born": "In 262 AC",
    "died": "In 300 AC, at Near Oldstones",
    "titles": [
      ""
    ],
    "aliases": [
      "Merrett Muttonhead"
    ],
    "father": "",
    "mother": "",
    "spouse": "https://anapioficeandfire.com/api/characters/712",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/143"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/1",
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [
      "https://anapioficeandfire.com/api/books/3"
    ],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/755",
    "name": "Minisa Whent",
    "gender": "Female",
    "culture": "Rivermen",
    "born": "",
    "died": "At Riverrun",
    "titles": [
      "Lady of Riverrun"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "https://anapioficeandfire.com/api/characters/503",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/395",
      "https://anapioficeandfire.com/api/houses/427"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/1",
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/3"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/756",
    "name": "Monford Velaryon",
    "gender": "Male",
    "culture": "Valyrian",
    "born": "",
    "died": "In 299 AC, at Blackwater Rush",
    "titles": [
      "Lord of the Tides",
      "Master of Driftmark"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/407"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/3"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/757",
    "name": "Monterys Velaryon",
    "gender": "Male",
    "culture": "",
    "born": "In 293 AC",
    "died": "",
    "titles": [
      "Lord of the Tides",
      "Master of Driftmark"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/407"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/763",
    "name": "Mors Martell",
    "gender": "Male",
    "culture": "",
    "born": "In 248 AC or 257 AC",
    "died": "In 248 AC or 258 AC",
    "titles": [
      ""
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/285"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/5"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/764",
    "name": "Mors Umber",
    "gender": "Male",
    "culture": "Northmen",
    "born": "In 235 AC or before, at Last Hearth",
    "died": "",
    "titles": [
      "Castellan of Last Hearth"
    ],
    "aliases": [
      "Mors Crowfood"
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/401"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/767",
    "name": "Murmison",
    "gender": "Male",
    "culture": "",
    "born": "",
    "died": "In 41 AC, at King's Landing",
    "titles": [
      "Septon",
      "Hand of the King"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/378"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/11"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/775",
    "name": "Myrcella Baratheon",
    "gender": "Female",
    "culture": "",
    "born": "In 290 AC, at King's Landing",
    "died": "",
    "titles": [
      "Princess"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/16"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/1",
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
      "Season 1",
      "Season 2",
      "Season 5",
      "Season 6"
    ],
    "playedBy": [
      "Aimee Richardson, Nell Tiger Free"
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/777",
    "name": "Myriame Manderly",
    "gender": "Female",
    "culture": "Northmen",
    "born": "",
    "died": "",
    "titles": [
      "Lady of Winterfell"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "https://anapioficeandfire.com/api/characters/918",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/255",
      "https://anapioficeandfire.com/api/houses/362"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/11"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/779",
    "name": "Naerys Targaryen",
    "gender": "Female",
    "culture": "Valyrian",
    "born": "In 138 AC, at King's Landing",
    "died": "In or between 179 AC and 184 AC, at King's Landing",
    "titles": [
      "Princess",
      "Queen"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "https://anapioficeandfire.com/api/characters/41",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/378"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/1",
      "https://anapioficeandfire.com/api/books/11"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/781",
    "name": "Nymella Toland",
    "gender": "Female",
    "culture": "Dornish",
    "born": "",
    "died": "",
    "titles": [
      "Lady of Ghost Hill"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/387"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/782",
    "name": "Nymeria",
    "gender": "Female",
    "culture": "Rhoynar",
    "born": "",
    "died": "",
    "titles": [
      "Princess",
      "Queen"
    ],
    "aliases": [
      "Nymeria of the Rhoyne"
    ],
    "father": "",
    "mother": "",
    "spouse": "https://anapioficeandfire.com/api/characters/1725",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/285"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/1",
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/4",
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/8",
      "https://anapioficeandfire.com/api/books/11"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/784",
    "name": "Olenna Redwyne",
    "gender": "Female",
    "culture": "",
    "born": "In 228 AC, at Arbor",
    "died": "",
    "titles": [
      "Dowager Lady of Highgarden"
    ],
    "aliases": [
      "The Queen of Thorns"
    ],
    "father": "",
    "mother": "",
    "spouse": "https://anapioficeandfire.com/api/characters/664",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/317",
      "https://anapioficeandfire.com/api/houses/398"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/1",
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
      "Season 3",
      "Season 4",
      "Season 6"
    ],
    "playedBy": [
      "Diana Rigg"
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/787",
    "name": "Olyvar Oakheart",
    "gender": "Male",
    "culture": "",
    "born": "",
    "died": "In 161 AC",
    "titles": [
      "Ser"
    ],
    "aliases": [
      "The Green Oak"
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/286"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/5"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/788",
    "name": "Ondrew Locke",
    "gender": "Male",
    "culture": "Northmen",
    "born": "",
    "died": "",
    "titles": [
      "Lord of Oldcastle"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/239"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/789",
    "name": "Orbert Caswell",
    "gender": "Male",
    "culture": "",
    "born": "",
    "died": "At Castle Black",
    "titles": [
      "Lord Commander of the Night's Watch"
    ],
    "aliases": [
      "The Black Centaur"
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/63"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/5"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/793",
    "name": "Ormond Yronwood",
    "gender": "Male",
    "culture": "",
    "born": "",
    "died": "At Yronwood",
    "titles": [
      "Lord of Yronwood",
      "Warden of the Stoneway",
      "The Bloodroyal"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/444"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/794",
    "name": "Ormund Baratheon",
    "gender": "Male",
    "culture": "",
    "born": "",
    "died": "In 260 AC, at Stepstones",
    "titles": [
      "Lord Paramount of the Stormlands",
      "Lord of Storm's End",
      "Hand of the King"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "https://anapioficeandfire.com/api/characters/870",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/17"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/11"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/796",
    "name": "Orton Merryweather",
    "gender": "Male",
    "culture": "",
    "born": "",
    "died": "",
    "titles": [
      "Lord of Longtable",
      "Justiciar",
      "Master of laws",
      "Hand of the King"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "https://anapioficeandfire.com/api/characters/1006",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/264"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/797",
    "name": "Orys Baratheon",
    "gender": "Male",
    "culture": "",
    "born": "At Dragonstone (possibly)",
    "died": "In 38 AC",
    "titles": [
      "Lord of Storm's End",
      "Lord Paramount of the Stormlands",
      "Hand of the King"
    ],
    "aliases": [
      "Orys One-Hand"
    ],
    "father": "",
    "mother": "",
    "spouse": "https://anapioficeandfire.com/api/characters/128",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/17",
      "https://anapioficeandfire.com/api/houses/378"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/1",
      "https://anapioficeandfire.com/api/books/11"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/811",
    "name": "Owen Norrey",
    "gender": "Male",
    "culture": "Northern mountain clans",
    "born": "",
    "died": "In 299 AC, at the Twins",
    "titles": [
      ""
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/282"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/812",
    "name": "Parmen Crane",
    "gender": "Male",
    "culture": "",
    "born": "At Red Lake",
    "died": "",
    "titles": [
      "Ser"
    ],
    "aliases": [
      "Parmen the Purple"
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/87"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/3"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/815",
    "name": "Paxter Redwyne",
    "gender": "Male",
    "culture": "",
    "born": "",
    "died": "",
    "titles": [
      "Lord of the Arbor",
      "Grand admiral",
      "Lord admiral",
      "Master of ships"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "https://anapioficeandfire.com/api/characters/754",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/317"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/1",
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/817",
    "name": "Perra Frey",
    "gender": "Female",
    "culture": "",
    "born": "In 294 AC",
    "died": "",
    "titles": [
      ""
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/143"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/818",
    "name": "Perra Royce",
    "gender": "Female",
    "culture": "",
    "born": "In 221 AC or before",
    "died": "In or between 241 AC and 249 AC",
    "titles": [
      ""
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "https://anapioficeandfire.com/api/characters/1093",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/143",
      "https://anapioficeandfire.com/api/houses/328"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/820",
    "name": "Perwyn Frey",
    "gender": "Male",
    "culture": "",
    "born": "In or between 270 AC and 278 AC",
    "died": "",
    "titles": [
      "Ser"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/143"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/1",
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/823",
    "name": "Petyr Baelish",
    "gender": "Male",
    "culture": "Valemen",
    "born": "In 268 AC, at the Fingers",
    "died": "",
    "titles": [
      "Master of coin (formerly)",
      "Lord Paramount of the Trident",
      "Lord of Harrenhal",
      "Lord Protector of the Vale"
    ],
    "aliases": [
      "Littlefinger"
    ],
    "father": "",
    "mother": "",
    "spouse": "https://anapioficeandfire.com/api/characters/688",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/10",
      "https://anapioficeandfire.com/api/houses/11"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/1",
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
      "Season 1",
      "Season 2",
      "Season 3",
      "Season 4",
      "Season 5",
      "Season 6"
    ],
    "playedBy": [
      "Aidan Gillen"
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/824",
    "name": "Petyr Frey",
    "gender": "Male",
    "culture": "",
    "born": "In 281 AC, at Twins",
    "died": "In 300 AC, at Oldstones",
    "titles": [
      ""
    ],
    "aliases": [
      "Petyr Pimple"
    ],
    "father": "",
    "mother": "",
    "spouse": "https://anapioficeandfire.com/api/characters/769",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/143"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/827",
    "name": "Podrick Payne",
    "gender": "Male",
    "culture": "",
    "born": "In 286 AC or 287 AC",
    "died": "",
    "titles": [
      ""
    ],
    "aliases": [
      "Pod"
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/295"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/1",
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
      "Season 2",
      "Season 3",
      "Season 4",
      "Season 5",
      "Season 6"
    ],
    "playedBy": [
      "Daniel Portman"
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/828",
    "name": "Preston Greenfield",
    "gender": "Male",
    "culture": "Westerman",
    "born": "",
    "died": "In 299 AC, at King's Landing",
    "titles": [
      "Ser"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/163"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/1",
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/830",
    "name": "Qarl Kenning",
    "gender": "Male",
    "culture": "Ironborn",
    "born": "",
    "died": "",
    "titles": [
      ""
    ],
    "aliases": [
      "Queer Qarl Kenning"
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/218"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/831",
    "name": "Qarlton Chelsted",
    "gender": "Male",
    "culture": "",
    "born": "",
    "died": "In 283 AC, at King's Landing",
    "titles": [
      "Lord",
      "Master of Coin",
      "Hand of the King"
    ],
    "aliases": [
      "The mace-and-dagger Hand"
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/69"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/832",
    "name": "Qhorin",
    "gender": "Male",
    "culture": "",
    "born": "",
    "died": "In 299 AC, at Skirling Pass",
    "titles": [
      ""
    ],
    "aliases": [
      "Qhorin Halfhand"
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [],
    "books": [
      "https://anapioficeandfire.com/api/books/1",
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
      "Season 2"
    ],
    "playedBy": [
      "Simon Armstrong"
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/833",
    "name": "Qhorwyn Hoare",
    "gender": "Male",
    "culture": "",
    "born": "",
    "died": "",
    "titles": [
      "King of the Iron Islands"
    ],
    "aliases": [
      "Qhorwyn the Cunning"
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [],
    "books": [
      "https://anapioficeandfire.com/api/books/11"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/834",
    "name": "Qorgyle",
    "gender": "Male",
    "culture": "",
    "born": "",
    "died": "In 288 AC, at Castle Black",
    "titles": [
      "Lord Commander of the Night's Watch"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/311"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/3"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/840",
    "name": "Quenton Hightower",
    "gender": "Male",
    "culture": "",
    "born": "",
    "died": "At Oldtown",
    "titles": [
      "Lord of the Hightower",
      "Lord of the Port",
      "Voice of Oldtown",
      "Defender of the Citadel",
      "Beacon of the South"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/195"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/5"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/844",
    "name": "Quentyn Martell",
    "gender": "Male",
    "culture": "Dornish",
    "born": "In 281 AC, at Sunspear, Dorne",
    "died": "In 300 AC, at Meereen",
    "titles": [
      "Prince"
    ],
    "aliases": [
      "Frog",
      "Prince Frog",
      "The prince who came too late",
      "The Dragonrider"
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/285"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/1",
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5"
    ],
    "povBooks": [
      "https://anapioficeandfire.com/api/books/8"
    ],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/849",
    "name": "Ramsay Snow",
    "gender": "Male",
    "culture": "Northmen",
    "born": "In 282 AC or before",
    "died": "",
    "titles": [
      "Lord of the Hornwood",
      "Lord of Winterfell",
      "Castellan of the Dreadfort"
    ],
    "aliases": [
      "Ramsay Bolton",
      "The Bastard of Bolton",
      "The Bastard of the Dreadfort",
      "Reek",
      "Red Helm",
      "Monster"
    ],
    "father": "",
    "mother": "",
    "spouse": "https://anapioficeandfire.com/api/characters/317",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/34"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
      "Season 3",
      "Season 4",
      "Season 5",
      "Season 6"
    ],
    "playedBy": [
      "Iwan Rheon"
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/850",
    "name": "Randyll Tarly",
    "gender": "Male",
    "culture": "",
    "born": "",
    "died": "",
    "titles": [
      "Lord of Horn Hill",
      "Justiciar",
      "Master of laws"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "https://anapioficeandfire.com/api/characters/742",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/379"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/1",
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
      "Season 6"
    ],
    "playedBy": [
      "James Faulkner"
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/854",
    "name": "Raymund Frey",
    "gender": "Male",
    "culture": "",
    "born": "In 264 AC",
    "died": "",
    "titles": [
      "Ser"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "https://anapioficeandfire.com/api/characters/187",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/143"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/858",
    "name": "Red Alyn",
    "gender": "Male",
    "culture": "",
    "born": "At the Rosewood",
    "died": "In 300 AC, at Castle Black",
    "titles": [
      ""
    ],
    "aliases": [
      "Red Alyn of the Rosewood"
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [],
    "books": [
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/862",
    "name": "Renly Baratheon",
    "gender": "Male",
    "culture": "Stormlands",
    "born": "In 277 AC",
    "died": "In 299 AC, at Storm's End",
    "titles": [
      "Lord Paramount of the Stormlands",
      "Lord of Storm's End",
      "Master of laws",
      "Lord of the Seven Kingdoms (claimant)"
    ],
    "aliases": [
      "The King in Highgarden",
      "The King in the South"
    ],
    "father": "",
    "mother": "",
    "spouse": "https://anapioficeandfire.com/api/characters/16",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/17"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/1",
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
      "Season 1",
      "Season 2"
    ],
    "playedBy": [
      "Gethin Anthony"
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/865",
    "name": "Rhae Targaryen",
    "gender": "Female",
    "culture": "Valyrian",
    "born": "In or between 201 AC and 209 AC",
    "died": "",
    "titles": [
      "Princess"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/378"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/6",
      "https://anapioficeandfire.com/api/books/11"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/867",
    "name": "Rhaegar Targaryen",
    "gender": "Male",
    "culture": "Valyrian",
    "born": "In 259 AC, at Summerhall",
    "died": "In 283 AC, at the Trident",
    "titles": [
      "Prince of Dragonstone",
      "Ser"
    ],
    "aliases": [
      "Silver Prince",
      "The Dragon Prince",
      "The Last Dragon"
    ],
    "father": "",
    "mother": "",
    "spouse": "https://anapioficeandfire.com/api/characters/361",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/378"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/1",
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/869",
    "name": "Rhaella Targaryen",
    "gender": "Female",
    "culture": "Valyrian",
    "born": "In 245 AC or 246 AC, at King's Landing",
    "died": "In 284 AC, at Dragonstone",
    "titles": [
      "Princess",
      "Queen",
      "Dowager Queen"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "https://anapioficeandfire.com/api/characters/62",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/378"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/1",
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/8",
      "https://anapioficeandfire.com/api/books/11"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/872",
    "name": "Rhaena Targaryen",
    "gender": "Female",
    "culture": "Valyrian",
    "born": "In 147 AC",
    "died": "",
    "titles": [
      "Princess",
      "Septa"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/378"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/11"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/874",
    "name": "Rhaenyra Targaryen",
    "gender": "Female",
    "culture": "Valyrian",
    "born": "In 97 AC",
    "died": "In 130 AC, at Dragonstone",
    "titles": [
      "Princess of Dragonstone",
      "Lady of the Seven Kingdoms (claimant)"
    ],
    "aliases": [
      "The Realm's Delight",
      "The Whore of Dragonstone",
      "King Maegor with Teats",
      "Maegor's Teats",
      "The Half-Year Queen"
    ],
    "father": "",
    "mother": "",
    "spouse": "https://anapioficeandfire.com/api/characters/611",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/378"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/4",
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/8",
      "https://anapioficeandfire.com/api/books/9",
      "https://anapioficeandfire.com/api/books/10",
      "https://anapioficeandfire.com/api/books/11"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/876",
    "name": "Rhaenys Targaryen",
    "gender": "Female",
    "culture": "",
    "born": "In 280 AC, at Dragonstone",
    "died": "In 283 AC, at King's Landing",
    "titles": [
      "Princess"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/378"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/1",
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/884",
    "name": "Rickard Karstark",
    "gender": "Male",
    "culture": "Northmen",
    "born": "At Karhold",
    "died": "In 299 AC, at Riverrun (executed)",
    "titles": [
      "Lord of Karhold"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/215"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/1",
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
      "Season 1",
      "Season 2",
      "Season 3"
    ],
    "playedBy": [
      "Steven Blount",
      "John Stahl"
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/887",
    "name": "Rickard Stark",
    "gender": "Male",
    "culture": "Northmen",
    "born": "In or between 230 AC and 249 AC, at Winterfell",
    "died": "In 282 AC, at King's Landing",
    "titles": [
      "Lord of Winterfell",
      "Warden of the North"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "https://anapioficeandfire.com/api/characters/668",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/362"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/1",
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/8",
      "https://anapioficeandfire.com/api/books/11"
    ],
    "povBooks": [],
    "tvSeries": [
      "Season 6"
    ],
    "playedBy": [
      "Wayne Foskett"
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/891",
    "name": "Rickon Stark",
    "gender": "Male",
    "culture": "Northmen",
    "born": "In 295 AC, at Winterfell",
    "died": "",
    "titles": [
      "Prince of Winterfell",
      "Heir to Winterfell"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/362"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/1",
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
      "Season 1",
      "Season 2",
      "Season 3",
      "Season 4"
    ],
    "playedBy": [
      "Art Parkinson"
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/892",
    "name": "Robar Royce",
    "gender": "Male",
    "culture": "Valemen",
    "born": "In 277 AC (roughly), at Runestone",
    "died": "In 299 AC, at Near Storm's End",
    "titles": [
      "Ser"
    ],
    "aliases": [
      "Robar the Red"
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/328"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/1",
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/894",
    "name": "Robert Arryn",
    "gender": "Male",
    "culture": "Valemen",
    "born": "In 292 AC",
    "died": "",
    "titles": [
      "Lord of the Eyrie",
      "Defender of the Vale",
      "Warden of the East"
    ],
    "aliases": [
      "Sweetrobin",
      "True Warden of the East"
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/7"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/1",
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
      "Season 1",
      "Season 4",
      "Season 5"
    ],
    "playedBy": [
      "Lino Facioli"
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/901",
    "name": "Robert I Baratheon",
    "gender": "Male",
    "culture": "",
    "born": "262 AC, at Storm's End",
    "died": "298 AC, at King's Landing",
    "titles": [
      "King of the Andals, the Rhoynar and the First Men",
      "Lord of the Seven Kingdoms",
      "Protector of the Realm",
      "Ser[1]"
    ],
    "aliases": [
      "The Usurper",
      "Demon of the Trident",
      "The Whoremonger King"
    ],
    "father": "https://anapioficeandfire.com/api/characters/986",
    "mother": "https://anapioficeandfire.com/api/characters/230",
    "spouse": "https://anapioficeandfire.com/api/characters/238",
    "allegiances": [],
    "books": [
      "https://anapioficeandfire.com/api/books/1",
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/8",
      "https://anapioficeandfire.com/api/books/11"
    ],
    "povBooks": [],
    "tvSeries": [
      "Season 1"
    ],
    "playedBy": [
      "Mark Addy"
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/903",
    "name": "Robett Glover",
    "gender": "Male",
    "culture": "Northmen",
    "born": "At Deepwood Motte",
    "died": "",
    "titles": [
      ""
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "https://anapioficeandfire.com/api/characters/998",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/150"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/1",
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
      "Season 6"
    ],
    "playedBy": [
      "Tim McInnerny"
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/912",
    "name": "Rodrik Cassel",
    "gender": "Male",
    "culture": "Northmen",
    "born": "",
    "died": "In 299 AC, at Winterfell",
    "titles": [
      "Ser",
      "Master-at-arms of Winterfell",
      "Castellan of Winterfell"
    ],
    "aliases": [
      "Old Ser Rodrik"
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/61",
      "https://anapioficeandfire.com/api/houses/362"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/1",
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
      "Season 1",
      "Season 2"
    ],
    "playedBy": [
      "Ron Donachie"
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/916",
    "name": "Rodrik Stark",
    "gender": "Male",
    "culture": "Northmen",
    "born": "",
    "died": "",
    "titles": [
      "King in the North"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/362"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/1",
      "https://anapioficeandfire.com/api/books/11"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/933",
    "name": "Roose Bolton",
    "gender": "Male",
    "culture": "Northmen",
    "born": "In 260 AC or before, at the Dreadfort",
    "died": "",
    "titles": [
      "Lord of the Dreadfort",
      "Warden of the North"
    ],
    "aliases": [
      "The Leech Lord"
    ],
    "father": "",
    "mother": "",
    "spouse": "https://anapioficeandfire.com/api/characters/196",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/34"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/1",
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
      "Season 2",
      "Season 3",
      "Season 4",
      "Season 5",
      "Season 6"
    ],
    "playedBy": [
      "Michael McElhatton"
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/937",
    "name": "Roslin Frey",
    "gender": "Female",
    "culture": "Rivermen",
    "born": "In 282 AC or 283 AC",
    "died": "",
    "titles": [
      ""
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "https://anapioficeandfire.com/api/characters/346",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/143",
      "https://anapioficeandfire.com/api/houses/395"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
      "Season 3"
    ],
    "playedBy": [
      "Alexandra Dowling"
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/954",
    "name": "Samwell Tarly",
    "gender": "Male",
    "culture": "Andal",
    "born": "In 283 AC, at Horn Hill",
    "died": "",
    "titles": [
      ""
    ],
    "aliases": [
      "Sam",
      "Ser Piggy",
      "Prince Pork-chop",
      "Lady Piggy",
      "Sam the Slayer",
      "Black Sam",
      "Lord of Ham"
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/379"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/1",
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5"
    ],
    "tvSeries": [
      "Season 1",
      "Season 2",
      "Season 3",
      "Season 4",
      "Season 5",
      "Season 6"
    ],
    "playedBy": [
      "John Bradley-West"
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/955",
    "name": "Sandor Clegane",
    "gender": "Male",
    "culture": "",
    "born": "In 270 AC or 271 AC",
    "died": "In 300 AC (supposedly)",
    "titles": [
      ""
    ],
    "aliases": [
      "The Hound",
      "Dog"
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/72",
      "https://anapioficeandfire.com/api/houses/229"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/1",
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
      "Season 1",
      "Season 2",
      "Season 3",
      "Season 4",
      "Season 6"
    ],
    "playedBy": [
      "Rory McCann"
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/957",
    "name": "Sansa Stark",
    "gender": "Female",
    "culture": "Northmen",
    "born": "In 286 AC, at Winterfell",
    "died": "",
    "titles": [
      "Princess"
    ],
    "aliases": [
      "Little bird",
      "Alayne Stone",
      "Jonquil"
    ],
    "father": "",
    "mother": "",
    "spouse": "https://anapioficeandfire.com/api/characters/1052",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/10",
      "https://anapioficeandfire.com/api/houses/362"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [
      "https://anapioficeandfire.com/api/books/1",
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5"
    ],
    "tvSeries": [
      "Season 1",
      "Season 2",
      "Season 3",
      "Season 4",
      "Season 5",
      "Season 6"
    ],
    "playedBy": [
      "Sophie Turner"
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/967",
    "name": "Serala of Myr",
    "gender": "Female",
    "culture": "Myrish",
    "born": "In Myr",
    "died": "",
    "titles": [
      "Lady of Duskendale"
    ],
    "aliases": [
      "The Lace Serpent"
    ],
    "father": "",
    "mother": "",
    "spouse": "https://anapioficeandfire.com/api/characters/301",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/95"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/5"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/971",
    "name": "Shaera Targaryen",
    "gender": "Female",
    "culture": "Valyrian",
    "born": "In 226 AC",
    "died": "In or after 259AC",
    "titles": [
      "Princess",
      "Queen"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "https://anapioficeandfire.com/api/characters/527",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/378"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/11"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/975",
    "name": "Shireen Baratheon",
    "gender": "Female",
    "culture": "",
    "born": "In 289 AC, at Dragonstone",
    "died": "",
    "titles": [
      "Princess"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/15"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/1",
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
      "Season 3",
      "Season 4",
      "Season 5"
    ],
    "playedBy": [
      "Kerry Ingram"
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/984",
    "name": "Stafford Lannister",
    "gender": "Male",
    "culture": "Westerman",
    "born": "In or between 246 AC and 253 AC",
    "died": "In 299 AC, at Oxcross",
    "titles": [
      "Ser"
    ],
    "aliases": [
      "Uncle Dolt"
    ],
    "father": "",
    "mother": "",
    "spouse": "https://anapioficeandfire.com/api/characters/773",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/229"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/1",
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/994",
    "name": "Stevron Frey",
    "gender": "Male",
    "culture": "",
    "born": "In 233 AC or 234 AC, at Twins",
    "died": "In 299 AC, at Oxcross",
    "titles": [
      "Ser"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "https://anapioficeandfire.com/api/characters/252",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/143"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/1",
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
      "Season 1"
    ],
    "playedBy": [
      "Colin Carnegie"
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/1006",
    "name": "Taena of Myr",
    "gender": "Female",
    "culture": "Myrish",
    "born": "In 276 AC (roughly)",
    "died": "",
    "titles": [
      ""
    ],
    "aliases": [
      "Taena Merryweather",
      "Myr"
    ],
    "father": "",
    "mother": "",
    "spouse": "https://anapioficeandfire.com/api/characters/796",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/264"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/1008",
    "name": "Talla Tarly",
    "gender": "Female",
    "culture": "",
    "born": "",
    "died": "",
    "titles": [
      ""
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/379"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/3"
    ],
    "povBooks": [],
    "tvSeries": [
      "Season 6"
    ],
    "playedBy": [
      "Rebecca Benson"
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/1019",
    "name": "Theodore Tyrell",
    "gender": "Male",
    "culture": "",
    "born": "",
    "died": "",
    "titles": [
      "Ser"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "https://anapioficeandfire.com/api/characters/636",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/398"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/1022",
    "name": "Theon Greyjoy",
    "gender": "Male",
    "culture": "Ironborn",
    "born": "In 278 AC or 279 AC, at Pyke",
    "died": "",
    "titles": [
      "Prince of Winterfell",
      "Captain of Sea Bitch",
      "Lord of the Iron Islands (by law of the green lands)"
    ],
    "aliases": [
      "Prince of Fools",
      "Theon Turncloak",
      "Reek",
      "Theon Kinslayer"
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/169"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/1",
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5"
    ],
    "povBooks": [
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/8"
    ],
    "tvSeries": [
      "Season 1",
      "Season 2",
      "Season 3",
      "Season 4",
      "Season 5",
      "Season 6"
    ],
    "playedBy": [
      "Alfie Allen"
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/1023",
    "name": "Theon Stark",
    "gender": "Male",
    "culture": "Northmen",
    "born": "",
    "died": "",
    "titles": [
      "King of Winter"
    ],
    "aliases": [
      "The Hungry Wolf"
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [],
    "books": [
      "https://anapioficeandfire.com/api/books/1",
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/8",
      "https://anapioficeandfire.com/api/books/11"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  
  {
    "url": "https://anapioficeandfire.com/api/characters/1029",
    "name": "Tommen Baratheon",
    "gender": "Male",
    "culture": "",
    "born": "291 AC",
    "died": "",
    "titles": [
      "King of the Andals, the Rhoynar and the First Men",
      "Lord of the Seven Kingdoms"
    ],
    "aliases": [
      "The Boy King"
    ],
    "father": "https://anapioficeandfire.com/api/characters/901",
    "mother": "https://anapioficeandfire.com/api/characters/238",
    "spouse": "https://anapioficeandfire.com/api/characters/16",
    "allegiances": [],
    "books": [
      "https://anapioficeandfire.com/api/books/1",
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
      "Season 1",
      "Season 2",
      "Season 4",
      "Season 5"
    ],
    "playedBy": [
      "Callum Wharry",
      "Dean-Charles Chapman"
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/1033",
    "name": "Torrhen Karstark",
    "gender": "Male",
    "culture": "Northmen",
    "born": "At Karhold",
    "died": "In 298 AC, at the Whispering Wood",
    "titles": [
      ""
    ],
    "aliases": [
      "Torr"
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/215"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/1",
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
      "Season 2"
    ],
    "playedBy": [
      "Tyrone McElhennon"
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/1039",
    "name": "Tristifer Botley",
    "gender": "Male",
    "culture": "Ironborn",
    "born": "At Lordsport",
    "died": "",
    "titles": [
      "Heir to Lordsport"
    ],
    "aliases": [
      "Tris"
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/36"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/1041",
    "name": "Tristifer V",
    "gender": "Male",
    "culture": "",
    "born": "",
    "died": "",
    "titles": [
      "King of the Rivers and the Hills"
    ],
    "aliases": [
      "Tristifer the Last"
    ],
    "father": "https://anapioficeandfire.com/api/characters/1040",
    "mother": "",
    "spouse": "",
    "allegiances": [],
    "books": [],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/1043",
    "name": "Trystane Martell",
    "gender": "Male",
    "culture": "Dornish",
    "born": "In 287 AC",
    "died": "",
    "titles": [
      "Prince"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/285"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/1",
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
      "Season 5",
      "Season 6"
    ],
    "playedBy": [
      "Toby Sebastian"
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/1052",
    "name": "Tyrion Lannister",
    "gender": "Male",
    "culture": "",
    "born": "In 273 AC, at Casterly Rock",
    "died": "",
    "titles": [
      "Acting Hand of the King (former)",
      "Master of Coin (former)"
    ],
    "aliases": [
      "The Imp",
      "Halfman",
      "The boyman",
      "Giant of Lannister",
      "Lord Tywin's Doom",
      "Lord Tywin's Bane",
      "Yollo",
      "Hugor Hill",
      "No-Nose",
      "Freak",
      "Dwarf"
    ],
    "father": "",
    "mother": "",
    "spouse": "https://anapioficeandfire.com/api/characters/2044",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/229"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/11"
    ],
    "povBooks": [
      "https://anapioficeandfire.com/api/books/1",
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/8"
    ],
    "tvSeries": [
      "Season 1",
      "Season 2",
      "Season 3",
      "Season 4",
      "Season 5",
      "Season 6"
    ],
    "playedBy": [
      "Peter Dinklage"
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/1057",
    "name": "Tytos Lannister",
    "gender": "Male",
    "culture": "",
    "born": "In 220 AC",
    "died": "In 267 AC, at Casterly Rock",
    "titles": [
      "Lord of Casterly Rock",
      "Shield of Lannisport",
      "Warden of the West"
    ],
    "aliases": [
      "The Laughing Lion",
      "The Toothless Lion"
    ],
    "father": "",
    "mother": "",
    "spouse": "https://anapioficeandfire.com/api/characters/556",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/229"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/8",
      "https://anapioficeandfire.com/api/books/11"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/1065",
    "name": "Uthor Underleaf",
    "gender": "Male",
    "culture": "",
    "born": "In or around 181 AC, 182 AC or 183 AC",
    "died": "",
    "titles": [
      "Ser"
    ],
    "aliases": [
      "The Snail"
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [],
    "books": [
      "https://anapioficeandfire.com/api/books/7"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/1066",
    "name": "Vaemond Velaryon",
    "gender": "Male",
    "culture": "Valyrian",
    "born": "",
    "died": "In 126 AC",
    "titles": [
      "Ser"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/407"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/10"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/1067",
    "name": "Valarr Targaryen",
    "gender": "Male",
    "culture": "Valyrian",
    "born": "In or between 183 AC and 193 AC",
    "died": "In 209 AC, at King's Landing",
    "titles": [
      "Prince  Hand of the King (possibly)"
    ],
    "aliases": [
      "The Young Prince"
    ],
    "father": "",
    "mother": "",
    "spouse": "https://anapioficeandfire.com/api/characters/1589",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/378"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/4",
      "https://anapioficeandfire.com/api/books/6",
      "https://anapioficeandfire.com/api/books/7"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/1068",
    "name": "Vardis Egen",
    "gender": "Male",
    "culture": "Valemen",
    "born": "In or between 249 AC and 253 AC",
    "died": "In 298 AC, at the Eyrie",
    "titles": [
      "Ser",
      "Captain of the Guards"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/7",
      "https://anapioficeandfire.com/api/houses/113"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/1",
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/3"
    ],
    "povBooks": [],
    "tvSeries": [
      "Season 1"
    ],
    "playedBy": [
      "Brendan McCormack"
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/1072",
    "name": "Vickon Greyjoy",
    "gender": "Male",
    "culture": "",
    "born": "",
    "died": "In 33 AC",
    "titles": [
      "Lord of the Iron Islands",
      "Lord Reaper of Pyke"
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/169"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/1",
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/11"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/1076",
    "name": "Viserys I",
    "gender": "Male",
    "culture": "",
    "born": "77 AC, at King's Landing",
    "died": "129 AC, at King's Landing",
    "titles": [
      "King of the Andals, the Rhoynar and the First Men",
      "Lord of the Seven Kingdoms",
      "Protector of the Realm"
    ],
    "aliases": [
      "The Young King"
    ],
    "father": "https://anapioficeandfire.com/api/characters/157",
    "mother": "https://anapioficeandfire.com/api/characters/109",
    "spouse": "https://anapioficeandfire.com/api/characters/49",
    "allegiances": [],
    "books": [
      "https://anapioficeandfire.com/api/books/1",
      "https://anapioficeandfire.com/api/books/9",
      "https://anapioficeandfire.com/api/books/10",
      "https://anapioficeandfire.com/api/books/11"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/1077",
    "name": "Viserys II",
    "gender": "Male",
    "culture": "",
    "born": "122 AC, at Dragonstone",
    "died": "172 AC, at King's Landing",
    "titles": [
      "King of the Andals, the Rhoynar and the First Men",
      "Lord of the Seven Kingdoms",
      "Protector of the Realm",
      "Hand of the King"
    ],
    "aliases": [
      ""
    ],
    "father": "https://anapioficeandfire.com/api/characters/269",
    "mother": "https://anapioficeandfire.com/api/characters/874",
    "spouse": "https://anapioficeandfire.com/api/characters/1608",
    "allegiances": [],
    "books": [
      "https://anapioficeandfire.com/api/books/1",
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/9",
      "https://anapioficeandfire.com/api/books/10",
      "https://anapioficeandfire.com/api/books/11"
    ],
    "povBooks": [],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      ""
    ]
  },
  {
    "url": "https://anapioficeandfire.com/api/characters/1079",
    "name": "Viserys Targaryen",
    "gender": "Male",
    "culture": "Valyrian",
    "born": "In 276 AC, at King's Landing",
    "died": "In 298 AC, at Vaes Dothrak",
    "titles": [
      "King of the Andals, the Rhoynar and the First Men, Lord of the Seven Kingdoms and Protector of the Realm"
    ],
    "aliases": [
      "The Beggar King",
      "Khal Rhaggat (The Cart King)"
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://anapioficeandfire.com/api/houses/378"
    ],
    "books": [
      "https://anapioficeandfire.com/api/books/1",
      "https://anapioficeandfire.com/api/books/2",
      "https://anapioficeandfire.com/api/books/3",
      "https://anapioficeandfire.com/api/books/5",
      "https://anapioficeandfire.com/api/books/8",
      "https://anapioficeandfire.com/api/books/11"
    ],
    "povBooks": [],
    "tvSeries": [
      "Season 1"
    ],
    "playedBy": [
      "Harry Lloyd"
    ]
  },
  {
    "url": "https://www.anapioficeandfire.com/api/characters/2",
    "name": "Walder",
    "gender": "Male",
    "culture": "",
    "born": "",
    "died": "",
    "titles": [
      ""
    ],
    "aliases": [
      "Hodor"
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      "https://www.anapioficeandfire.com/api/houses/362"
    ],
    "books": [
      "https://www.anapioficeandfire.com/api/books/1",
      "https://www.anapioficeandfire.com/api/books/2",
      "https://www.anapioficeandfire.com/api/books/3",
      "https://www.anapioficeandfire.com/api/books/5",
      "https://www.anapioficeandfire.com/api/books/8"
    ],
    "povBooks": [],
    "tvSeries": [
      "Season 1",
      "Season 2",
      "Season 3",
      "Season 4",
      "Season 6"
    ],
    "playedBy": [
      "Kristian Nairn"
    ]
  },
  
  // Your characters data here
];

export default function Settings({navigation, route}) {
  const [searchText, setSearchText] = useState('');
  const [hideSearchBar, setHideSearchBar] = useState(false);

  const filteredCharacters = characters.filter(character =>
    character.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleSearch = text => {
    setSearchText(text);
  };

  const handleScroll = event => {
    const offsetY = event.nativeEvent.contentOffset.y;
    if (offsetY > 0 && !hideSearchBar) {
      setHideSearchBar(true);
    } else if (offsetY <= 0 && hideSearchBar) {
      setHideSearchBar(false);
    }
  };

  return (
    <View style={styles.container}>
      {!hideSearchBar && (
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchBar}
            placeholder="Search characters"
            onChangeText={handleSearch}
          />
        </View>
      )}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        onScroll={handleScroll}
      >
        {filteredCharacters.map((character, index) => (
          <View key={index} style={styles.characterContainer}>
            <Text style={styles.characterName}>{character.name}</Text>
            <Text style={styles.characterInfo}>Gender: {character.gender}</Text>
            <Text style={styles.characterInfo}>Culture: {character.culture}</Text>
            <Text style={styles.characterInfo}>Born: {character.born}</Text>
            <Text style={styles.characterInfo}>Died: {character.died}</Text>
            <Text style={styles.characterInfo}>Father: {character.father}</Text>
            <Text style={styles.characterInfo}>Mother: {character.mother}</Text>
            <Text style={styles.characterInfo}>Titles: {character.titles}</Text>
            <Text style={styles.characterInfo}>Aliases: {character.aliases}</Text>
            <Text style={styles.characterInfo}>TV Series: {character.tvSeries}</Text>
            <Text style={styles.characterInfo}>Played By {character.playedBy}</Text>
          </View>
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  characterContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  characterName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  characterInfo: {
    fontSize: 18,
    color: 'black',
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#d3d3d3',
    backgroundColor: '#8b0000',
    padding: 10,
    textAlign: 'center',
  },
  searchContainer: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    alignSelf: 'stretch',
  },
  searchBar: {
    backgroundColor: '#fff',
    color: 'black',
    padding: 10,
    borderRadius: 5,
  },
});
