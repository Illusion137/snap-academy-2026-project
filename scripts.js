/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 */

// this dataset is scraped from smogon; https://www.smogon.com/dex/bw/pokemon/
const pokemons = [
    {
        "name": "Syclar",
        "abilities": [
            "Compound Eyes",
            "Snow Cloak",
            "Ice Body"
        ],
        "stats": [
            {
                "hp": 40
            },
            {
                "atk": 76
            },
            {
                "def": 45
            },
            {
                "spa": 74
            },
            {
                "spd": 39
            }
        ],
        "height": 0.2,
        "weight": 4,
        "formats": [],
        "oob": {
            "dex_number": -1
        },
        "types": [
            "Ice",
            "Bug"
        ]
    },
    {
        "name": "Tactite",
        "abilities": [
            "Levitate",
            "Technician",
            "Sniper"
        ],
        "stats": [
            {
                "hp": 70
            },
            {
                "atk": 40
            },
            {
                "def": 65
            },
            {
                "spa": 100
            },
            {
                "spd": 65
            }
        ],
        "height": 0.6,
        "weight": 16,
        "formats": [],
        "oob": {
            "dex_number": -10
        },
        "types": [
            "Rock"
        ]
    },
    {
        "name": "Stratagem",
        "abilities": [
            "Levitate",
            "Technician"
        ],
        "stats": [
            {
                "hp": 90
            },
            {
                "atk": 60
            },
            {
                "def": 65
            },
            {
                "spa": 120
            },
            {
                "spd": 70
            }
        ],
        "height": 0.9,
        "weight": 45,
        "formats": [
            "CAP"
        ],
        "oob": {
            "dex_number": -11
        },
        "types": [
            "Rock"
        ]
    },
    {
        "name": "Privatyke",
        "abilities": [
            "Unaware",
            "Technician"
        ],
        "stats": [
            {
                "hp": 65
            },
            {
                "atk": 75
            },
            {
                "def": 65
            },
            {
                "spa": 40
            },
            {
                "spd": 60
            }
        ],
        "height": 1,
        "weight": 35,
        "formats": [],
        "oob": {
            "dex_number": -12
        },
        "types": [
            "Water",
            "Fighting"
        ]
    },
    {
        "name": "Arghonaut",
        "abilities": [
            "Unaware"
        ],
        "stats": [
            {
                "hp": 105
            },
            {
                "atk": 110
            },
            {
                "def": 95
            },
            {
                "spa": 70
            },
            {
                "spd": 100
            }
        ],
        "height": 1.7,
        "weight": 151,
        "formats": [
            "CAP"
        ],
        "oob": {
            "dex_number": -13
        },
        "types": [
            "Water",
            "Fighting"
        ]
    },
    {
        "name": "Kitsunoh",
        "abilities": [
            "Frisk",
            "Limber"
        ],
        "stats": [
            {
                "hp": 80
            },
            {
                "atk": 103
            },
            {
                "def": 85
            },
            {
                "spa": 55
            },
            {
                "spd": 80
            }
        ],
        "height": 1.1,
        "weight": 51,
        "formats": [
            "CAP"
        ],
        "oob": {
            "dex_number": -14
        },
        "types": [
            "Ghost",
            "Steel"
        ]
    },
    {
        "name": "Cyclohm",
        "abilities": [
            "Shield Dust",
            "Static"
        ],
        "stats": [
            {
                "hp": 108
            },
            {
                "atk": 60
            },
            {
                "def": 118
            },
            {
                "spa": 112
            },
            {
                "spd": 70
            }
        ],
        "height": 1.6,
        "weight": 59,
        "formats": [
            "CAP"
        ],
        "oob": {
            "dex_number": -15
        },
        "types": [
            "Electric",
            "Dragon"
        ]
    },
    {
        "name": "Colossoil",
        "abilities": [
            "Rebound",
            "Guts"
        ],
        "stats": [
            {
                "hp": 133
            },
            {
                "atk": 122
            },
            {
                "def": 72
            },
            {
                "spa": 71
            },
            {
                "spd": 72
            }
        ],
        "height": 2.6,
        "weight": 683.6,
        "formats": [
            "CAP"
        ],
        "oob": {
            "dex_number": -16
        },
        "types": [
            "Ground",
            "Dark"
        ]
    },
    {
        "name": "Krilowatt",
        "abilities": [
            "Trace",
            "Magic Guard"
        ],
        "stats": [
            {
                "hp": 151
            },
            {
                "atk": 84
            },
            {
                "def": 73
            },
            {
                "spa": 83
            },
            {
                "spd": 74
            }
        ],
        "height": 0.7,
        "weight": 10.6,
        "formats": [
            "CAP"
        ],
        "oob": {
            "dex_number": -17
        },
        "types": [
            "Electric",
            "Water"
        ]
    },
    {
        "name": "Voodoll",
        "abilities": [
            "Volt Absorb",
            "Lightning Rod",
            "Cursed Body"
        ],
        "stats": [
            {
                "hp": 55
            },
            {
                "atk": 40
            },
            {
                "def": 55
            },
            {
                "spa": 75
            },
            {
                "spd": 50
            }
        ],
        "height": 1,
        "weight": 25,
        "formats": [],
        "oob": {
            "dex_number": -18
        },
        "types": [
            "Normal",
            "Dark"
        ]
    },
    {
        "name": "Voodoom",
        "abilities": [
            "Volt Absorb",
            "Lightning Rod"
        ],
        "stats": [
            {
                "hp": 90
            },
            {
                "atk": 85
            },
            {
                "def": 80
            },
            {
                "spa": 105
            },
            {
                "spd": 80
            }
        ],
        "height": 2,
        "weight": 75.5,
        "formats": [
            "CAP"
        ],
        "oob": {
            "dex_number": -19
        },
        "types": [
            "Fighting",
            "Dark"
        ]
    },
    {
        "name": "Syclant",
        "abilities": [
            "Compound Eyes",
            "Mountaineer"
        ],
        "stats": [
            {
                "hp": 70
            },
            {
                "atk": 116
            },
            {
                "def": 70
            },
            {
                "spa": 114
            },
            {
                "spd": 64
            }
        ],
        "height": 1.7,
        "weight": 52,
        "formats": [
            "CAP"
        ],
        "oob": {
            "dex_number": -2
        },
        "types": [
            "Ice",
            "Bug"
        ]
    },
    {
        "name": "Scratchet",
        "abilities": [
            "Scrappy",
            "Prankster",
            "Vital Spirit"
        ],
        "stats": [
            {
                "hp": 55
            },
            {
                "atk": 85
            },
            {
                "def": 80
            },
            {
                "spa": 20
            },
            {
                "spd": 70
            }
        ],
        "height": 0.5,
        "weight": 20,
        "formats": [],
        "oob": {
            "dex_number": -20
        },
        "types": [
            "Normal",
            "Fighting"
        ]
    },
    {
        "name": "Tomohawk",
        "abilities": [
            "Intimidate",
            "Prankster",
            "Justified"
        ],
        "stats": [
            {
                "hp": 105
            },
            {
                "atk": 60
            },
            {
                "def": 90
            },
            {
                "spa": 115
            },
            {
                "spd": 80
            }
        ],
        "height": 1.27,
        "weight": 37.2,
        "formats": [
            "CAP"
        ],
        "oob": {
            "dex_number": -21
        },
        "types": [
            "Flying",
            "Fighting"
        ]
    },
    {
        "name": "Necturine",
        "abilities": [
            "Anticipation",
            "Telepathy"
        ],
        "stats": [
            {
                "hp": 49
            },
            {
                "atk": 55
            },
            {
                "def": 60
            },
            {
                "spa": 50
            },
            {
                "spd": 75
            }
        ],
        "height": 0.3,
        "weight": 1.8,
        "formats": [],
        "oob": {
            "dex_number": -22
        },
        "types": [
            "Grass",
            "Ghost"
        ]
    },
    {
        "name": "Necturna",
        "abilities": [
            "Forewarn",
            "Telepathy"
        ],
        "stats": [
            {
                "hp": 64
            },
            {
                "atk": 120
            },
            {
                "def": 100
            },
            {
                "spa": 85
            },
            {
                "spd": 120
            }
        ],
        "height": 1.65,
        "weight": 49.6,
        "formats": [
            "CAP"
        ],
        "oob": {
            "dex_number": -23
        },
        "types": [
            "Grass",
            "Ghost"
        ]
    },
    {
        "name": "Mollux",
        "abilities": [
            "Dry Skin",
            "Illuminate"
        ],
        "stats": [
            {
                "hp": 95
            },
            {
                "atk": 45
            },
            {
                "def": 83
            },
            {
                "spa": 131
            },
            {
                "spd": 105
            }
        ],
        "height": 1.2,
        "weight": 41,
        "formats": [
            "CAP"
        ],
        "oob": {
            "dex_number": -24
        },
        "types": [
            "Fire",
            "Poison"
        ]
    },
    {
        "name": "Cupra",
        "abilities": [
            "Shield Dust",
            "Keen Eye",
            "Magic Guard"
        ],
        "stats": [
            {
                "hp": 50
            },
            {
                "atk": 60
            },
            {
                "def": 49
            },
            {
                "spa": 67
            },
            {
                "spd": 30
            }
        ],
        "height": 0.5,
        "weight": 4.8,
        "formats": [],
        "oob": {
            "dex_number": -25
        },
        "types": [
            "Bug",
            "Psychic"
        ]
    },
    {
        "name": "Argalis",
        "abilities": [
            "Shed Skin",
            "Compound Eyes",
            "Overcoat"
        ],
        "stats": [
            {
                "hp": 60
            },
            {
                "atk": 90
            },
            {
                "def": 89
            },
            {
                "spa": 87
            },
            {
                "spd": 40
            }
        ],
        "height": 1.3,
        "weight": 341.4,
        "formats": [],
        "oob": {
            "dex_number": -26
        },
        "types": [
            "Bug",
            "Psychic"
        ]
    },
    {
        "name": "Aurumoth",
        "abilities": [
            "Weak Armor",
            "No Guard",
            "Light Metal"
        ],
        "stats": [
            {
                "hp": 110
            },
            {
                "atk": 120
            },
            {
                "def": 99
            },
            {
                "spa": 117
            },
            {
                "spd": 60
            }
        ],
        "height": 2.1,
        "weight": 193,
        "formats": [
            "CAP"
        ],
        "oob": {
            "dex_number": -27
        },
        "types": [
            "Bug",
            "Psychic"
        ]
    },
    {
        "name": "Brattler",
        "abilities": [
            "Harvest",
            "Infiltrator",
            "Rattled"
        ],
        "stats": [
            {
                "hp": 80
            },
            {
                "atk": 70
            },
            {
                "def": 40
            },
            {
                "spa": 20
            },
            {
                "spd": 90
            }
        ],
        "height": 1.8,
        "weight": 11.5,
        "formats": [],
        "oob": {
            "dex_number": -28
        },
        "types": [
            "Dark",
            "Grass"
        ]
    },
    {
        "name": "Malaconda",
        "abilities": [
            "Harvest",
            "Infiltrator"
        ],
        "stats": [
            {
                "hp": 115
            },
            {
                "atk": 100
            },
            {
                "def": 60
            },
            {
                "spa": 40
            },
            {
                "spd": 130
            }
        ],
        "height": 5.5,
        "weight": 108.8,
        "formats": [
            "CAP"
        ],
        "oob": {
            "dex_number": -29
        },
        "types": [
            "Dark",
            "Grass"
        ]
    },
    {
        "name": "Revenankh",
        "abilities": [
            "Air Lock",
            "Shed Skin"
        ],
        "stats": [
            {
                "hp": 90
            },
            {
                "atk": 105
            },
            {
                "def": 90
            },
            {
                "spa": 65
            },
            {
                "spd": 110
            }
        ],
        "height": 1.8,
        "weight": 44,
        "formats": [
            "CAP"
        ],
        "oob": {
            "dex_number": -3
        },
        "types": [
            "Ghost",
            "Fighting"
        ]
    },
    {
        "name": "Cawdet",
        "abilities": [
            "Keen Eye",
            "Volt Absorb",
            "Big Pecks"
        ],
        "stats": [
            {
                "hp": 35
            },
            {
                "atk": 72
            },
            {
                "def": 85
            },
            {
                "spa": 40
            },
            {
                "spd": 55
            }
        ],
        "height": 0.76,
        "weight": 25,
        "formats": [],
        "oob": {
            "dex_number": -30
        },
        "types": [
            "Steel",
            "Flying"
        ]
    },
    {
        "name": "Cawmodore",
        "abilities": [
            "Intimidate",
            "Volt Absorb",
            "Big Pecks"
        ],
        "stats": [
            {
                "hp": 50
            },
            {
                "atk": 92
            },
            {
                "def": 130
            },
            {
                "spa": 65
            },
            {
                "spd": 75
            }
        ],
        "height": 1.7,
        "weight": 37,
        "formats": [
            "CAP"
        ],
        "oob": {
            "dex_number": -31
        },
        "types": [
            "Steel",
            "Flying"
        ]
    },
    {
        "name": "Embirch",
        "abilities": [
            "Reckless",
            "Leaf Guard",
            "Chlorophyll"
        ],
        "stats": [
            {
                "hp": 60
            },
            {
                "atk": 40
            },
            {
                "def": 55
            },
            {
                "spa": 65
            },
            {
                "spd": 40
            }
        ],
        "height": 0.6,
        "weight": 15,
        "formats": [],
        "oob": {
            "dex_number": -4
        },
        "types": [
            "Fire",
            "Grass"
        ]
    },
    {
        "name": "Flarelm",
        "abilities": [
            "Rock Head",
            "Battle Armor",
            "White Smoke"
        ],
        "stats": [
            {
                "hp": 90
            },
            {
                "atk": 50
            },
            {
                "def": 95
            },
            {
                "spa": 75
            },
            {
                "spd": 70
            }
        ],
        "height": 1.4,
        "weight": 73,
        "formats": [],
        "oob": {
            "dex_number": -5
        },
        "types": [
            "Fire",
            "Grass"
        ]
    },
    {
        "name": "Pokestar Smeargle",
        "abilities": [
            "Own Tempo",
            "Technician",
            "Moody"
        ],
        "stats": [
            {
                "hp": 55
            },
            {
                "atk": 20
            },
            {
                "def": 35
            },
            {
                "spa": 20
            },
            {
                "spd": 45
            }
        ],
        "height": 1.5,
        "weight": 61,
        "formats": [],
        "oob": {
            "dex_number": -5000
        },
        "types": [
            "Normal"
        ]
    },
    {
        "name": "Pokestar UFO",
        "abilities": [
            "Levitate"
        ],
        "stats": [
            {
                "hp": 100
            },
            {
                "atk": 100
            },
            {
                "def": 100
            },
            {
                "spa": 100
            },
            {
                "spd": 100
            }
        ],
        "height": 1.5,
        "weight": 61,
        "formats": [],
        "oob": {
            "dex_number": -5001
        },
        "types": [
            "Flying",
            "Electric"
        ]
    },
    {
        "name": "Pokestar UFO-2",
        "abilities": [
            "Levitate"
        ],
        "stats": [
            {
                "hp": 100
            },
            {
                "atk": 100
            },
            {
                "def": 100
            },
            {
                "spa": 100
            },
            {
                "spd": 100
            }
        ],
        "height": 1.5,
        "weight": 61,
        "formats": [],
        "oob": {
            "dex_number": -5001
        },
        "types": [
            "Psychic",
            "Electric"
        ]
    },
    {
        "name": "Pokestar UFO-PropU2",
        "abilities": [
            "Levitate"
        ],
        "stats": [
            {
                "hp": 100
            },
            {
                "atk": 100
            },
            {
                "def": 100
            },
            {
                "spa": 100
            },
            {
                "spd": 100
            }
        ],
        "height": 1.5,
        "weight": 61,
        "formats": [],
        "oob": {
            "dex_number": -5001
        },
        "types": [
            "Psychic",
            "Electric"
        ]
    },
    {
        "name": "Pokestar Brycen-Man",
        "abilities": [
            "Levitate"
        ],
        "stats": [
            {
                "hp": 100
            },
            {
                "atk": 100
            },
            {
                "def": 100
            },
            {
                "spa": 100
            },
            {
                "spd": 100
            }
        ],
        "height": 1.5,
        "weight": 61,
        "formats": [],
        "oob": {
            "dex_number": -5002
        },
        "types": [
            "Dark",
            "Psychic"
        ]
    },
    {
        "name": "Pokestar MT",
        "abilities": [
            "Analytic"
        ],
        "stats": [
            {
                "hp": 100
            },
            {
                "atk": 100
            },
            {
                "def": 100
            },
            {
                "spa": 100
            },
            {
                "spd": 100
            }
        ],
        "height": 1.5,
        "weight": 61,
        "formats": [],
        "oob": {
            "dex_number": -5003
        },
        "types": [
            "Steel"
        ]
    },
    {
        "name": "Pokestar MT2",
        "abilities": [
            "Flash Fire"
        ],
        "stats": [
            {
                "hp": 100
            },
            {
                "atk": 100
            },
            {
                "def": 100
            },
            {
                "spa": 100
            },
            {
                "spd": 100
            }
        ],
        "height": 1.5,
        "weight": 61,
        "formats": [],
        "oob": {
            "dex_number": -5004
        },
        "types": [
            "Steel",
            "Electric"
        ]
    },
    {
        "name": "Pokestar Transport",
        "abilities": [
            "Motor Drive"
        ],
        "stats": [
            {
                "hp": 100
            },
            {
                "atk": 100
            },
            {
                "def": 100
            },
            {
                "spa": 100
            },
            {
                "spd": 100
            }
        ],
        "height": 1.5,
        "weight": 61,
        "formats": [],
        "oob": {
            "dex_number": -5005
        },
        "types": [
            "Steel"
        ]
    },
    {
        "name": "Pokestar Giant",
        "abilities": [
            "Huge Power"
        ],
        "stats": [
            {
                "hp": 100
            },
            {
                "atk": 100
            },
            {
                "def": 100
            },
            {
                "spa": 100
            },
            {
                "spd": 100
            }
        ],
        "height": 1.5,
        "weight": 61,
        "formats": [],
        "oob": {
            "dex_number": -5006
        },
        "types": [
            "Normal"
        ]
    },
    {
        "name": "Pokestar Humanoid",
        "abilities": [
            "Insomnia"
        ],
        "stats": [
            {
                "hp": 100
            },
            {
                "atk": 100
            },
            {
                "def": 100
            },
            {
                "spa": 100
            },
            {
                "spd": 100
            }
        ],
        "height": 1.5,
        "weight": 61,
        "formats": [],
        "oob": {
            "dex_number": -5007
        },
        "types": [
            "Normal"
        ]
    },
    {
        "name": "Pokestar Monster",
        "abilities": [
            "Pressure"
        ],
        "stats": [
            {
                "hp": 100
            },
            {
                "atk": 100
            },
            {
                "def": 100
            },
            {
                "spa": 100
            },
            {
                "spd": 100
            }
        ],
        "height": 1.5,
        "weight": 61,
        "formats": [],
        "oob": {
            "dex_number": -5008
        },
        "types": [
            "Dark"
        ]
    },
    {
        "name": "Pokestar F-00",
        "abilities": [
            "Volt Absorb"
        ],
        "stats": [
            {
                "hp": 100
            },
            {
                "atk": 100
            },
            {
                "def": 100
            },
            {
                "spa": 100
            },
            {
                "spd": 100
            }
        ],
        "height": 1.5,
        "weight": 61,
        "formats": [],
        "oob": {
            "dex_number": -5009
        },
        "types": [
            "Steel",
            "Normal"
        ]
    },
    {
        "name": "Pokestar F-002",
        "abilities": [
            "Reckless"
        ],
        "stats": [
            {
                "hp": 100
            },
            {
                "atk": 100
            },
            {
                "def": 100
            },
            {
                "spa": 100
            },
            {
                "spd": 100
            }
        ],
        "height": 1.5,
        "weight": 61,
        "formats": [],
        "oob": {
            "dex_number": -5010
        },
        "types": [
            "Steel",
            "Normal"
        ]
    },
    {
        "name": "Pokestar Spirit",
        "abilities": [
            "Wonder Guard"
        ],
        "stats": [
            {
                "hp": 100
            },
            {
                "atk": 100
            },
            {
                "def": 100
            },
            {
                "spa": 100
            },
            {
                "spd": 100
            }
        ],
        "height": 1.5,
        "weight": 61,
        "formats": [],
        "oob": {
            "dex_number": -5011
        },
        "types": [
            "Dark",
            "Ghost"
        ]
    },
    {
        "name": "Pokestar Black Door",
        "abilities": [
            "Early Bird"
        ],
        "stats": [
            {
                "hp": 100
            },
            {
                "atk": 100
            },
            {
                "def": 100
            },
            {
                "spa": 100
            },
            {
                "spd": 100
            }
        ],
        "height": 1.5,
        "weight": 61,
        "formats": [],
        "oob": {
            "dex_number": -5012
        },
        "types": [
            "Grass"
        ]
    },
    {
        "name": "Pokestar White Door",
        "abilities": [
            "Blaze"
        ],
        "stats": [
            {
                "hp": 100
            },
            {
                "atk": 100
            },
            {
                "def": 100
            },
            {
                "spa": 100
            },
            {
                "spd": 100
            }
        ],
        "height": 1.5,
        "weight": 61,
        "formats": [],
        "oob": {
            "dex_number": -5013
        },
        "types": [
            "Fire"
        ]
    },
    {
        "name": "Pokestar Black Belt",
        "abilities": [
            "Huge Power"
        ],
        "stats": [
            {
                "hp": 100
            },
            {
                "atk": 100
            },
            {
                "def": 100
            },
            {
                "spa": 100
            },
            {
                "spd": 100
            }
        ],
        "height": 1.5,
        "weight": 61,
        "formats": [],
        "oob": {
            "dex_number": -5014
        },
        "types": [
            "Fighting"
        ]
    },
    {
        "name": "Pyroak",
        "abilities": [
            "Rock Head",
            "Battle Armor"
        ],
        "stats": [
            {
                "hp": 120
            },
            {
                "atk": 70
            },
            {
                "def": 105
            },
            {
                "spa": 95
            },
            {
                "spd": 90
            }
        ],
        "height": 2.1,
        "weight": 168,
        "formats": [
            "CAP"
        ],
        "oob": {
            "dex_number": -6
        },
        "types": [
            "Fire",
            "Grass"
        ]
    },
    {
        "name": "Nohface",
        "abilities": [
            "Frisk",
            "Limber",
            "Unnerve"
        ],
        "stats": [
            {
                "hp": 50
            },
            {
                "atk": 73
            },
            {
                "def": 50
            },
            {
                "spa": 30
            },
            {
                "spd": 50
            }
        ],
        "height": 0.5,
        "weight": 5.9,
        "formats": [],
        "oob": {
            "dex_number": -61
        },
        "types": [
            "Ghost"
        ]
    },
    {
        "name": "Monohm",
        "abilities": [
            "Shield Dust",
            "Static",
            "Damp"
        ],
        "stats": [
            {
                "hp": 53
            },
            {
                "atk": 40
            },
            {
                "def": 58
            },
            {
                "spa": 67
            },
            {
                "spd": 55
            }
        ],
        "height": 0.6,
        "weight": 4.1,
        "formats": [],
        "oob": {
            "dex_number": -62
        },
        "types": [
            "Electric"
        ]
    },
    {
        "name": "Duohm",
        "abilities": [
            "Shield Dust",
            "Static",
            "Damp"
        ],
        "stats": [
            {
                "hp": 88
            },
            {
                "atk": 40
            },
            {
                "def": 103
            },
            {
                "spa": 77
            },
            {
                "spd": 60
            }
        ],
        "height": 1.1,
        "weight": 19.2,
        "formats": [],
        "oob": {
            "dex_number": -63
        },
        "types": [
            "Electric",
            "Dragon"
        ]
    },
    {
        "name": "Dorsoil",
        "abilities": [
            "Oblivious",
            "Guts",
            "Unnerve"
        ],
        "stats": [
            {
                "hp": 103
            },
            {
                "atk": 72
            },
            {
                "def": 52
            },
            {
                "spa": 61
            },
            {
                "spd": 52
            }
        ],
        "height": 1.3,
        "weight": 145,
        "formats": [],
        "oob": {
            "dex_number": -64
        },
        "types": [
            "Ground"
        ]
    },
    {
        "name": "Protowatt",
        "abilities": [
            "Trace",
            "Magic Guard",
            "Minus"
        ],
        "stats": [
            {
                "hp": 51
            },
            {
                "atk": 44
            },
            {
                "def": 33
            },
            {
                "spa": 43
            },
            {
                "spd": 34
            }
        ],
        "height": 0.1,
        "weight": 0.1,
        "formats": [],
        "oob": {
            "dex_number": -65
        },
        "types": [
            "Electric",
            "Water"
        ]
    },
    {
        "name": "Breezi",
        "abilities": [
            "Unburden",
            "Own Tempo",
            "Frisk"
        ],
        "stats": [
            {
                "hp": 50
            },
            {
                "atk": 46
            },
            {
                "def": 69
            },
            {
                "spa": 60
            },
            {
                "spd": 50
            }
        ],
        "height": 0.4,
        "weight": 0.6,
        "formats": [],
        "oob": {
            "dex_number": -7
        },
        "types": [
            "Poison",
            "Flying"
        ]
    },
    {
        "name": "Fidgit",
        "abilities": [
            "Persistent",
            "Vital Spirit"
        ],
        "stats": [
            {
                "hp": 95
            },
            {
                "atk": 76
            },
            {
                "def": 109
            },
            {
                "spa": 90
            },
            {
                "spd": 80
            }
        ],
        "height": 0.9,
        "weight": 53,
        "formats": [
            "CAP"
        ],
        "oob": {
            "dex_number": -8
        },
        "types": [
            "Poison",
            "Ground"
        ]
    },
    {
        "name": "Rebble",
        "abilities": [
            "Levitate",
            "Solid Rock",
            "Sniper"
        ],
        "stats": [
            {
                "hp": 45
            },
            {
                "atk": 25
            },
            {
                "def": 65
            },
            {
                "spa": 75
            },
            {
                "spd": 55
            }
        ],
        "height": 0.3,
        "weight": 7,
        "formats": [],
        "oob": {
            "dex_number": -9
        },
        "types": [
            "Rock"
        ]
    },
    {
        "name": "Bulbasaur",
        "abilities": [
            "Overgrow",
            "Chlorophyll"
        ],
        "stats": [
            {
                "hp": 45
            },
            {
                "atk": 49
            },
            {
                "def": 49
            },
            {
                "spa": 65
            },
            {
                "spd": 65
            }
        ],
        "height": 0.7,
        "weight": 6.9,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 1
        },
        "types": [
            "Grass",
            "Poison"
        ]
    },
    {
        "name": "Caterpie",
        "abilities": [
            "Shield Dust",
            "Run Away"
        ],
        "stats": [
            {
                "hp": 45
            },
            {
                "atk": 30
            },
            {
                "def": 35
            },
            {
                "spa": 20
            },
            {
                "spd": 20
            }
        ],
        "height": 0.3,
        "weight": 2.9,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 10
        },
        "types": [
            "Bug"
        ]
    },
    {
        "name": "Voltorb",
        "abilities": [
            "Soundproof",
            "Static",
            "Aftermath"
        ],
        "stats": [
            {
                "hp": 40
            },
            {
                "atk": 30
            },
            {
                "def": 50
            },
            {
                "spa": 55
            },
            {
                "spd": 55
            }
        ],
        "height": 0.5,
        "weight": 10.4,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 100
        },
        "types": [
            "Electric"
        ]
    },
    {
        "name": "Electrode",
        "abilities": [
            "Soundproof",
            "Static",
            "Aftermath"
        ],
        "stats": [
            {
                "hp": 60
            },
            {
                "atk": 50
            },
            {
                "def": 70
            },
            {
                "spa": 80
            },
            {
                "spd": 80
            }
        ],
        "height": 1.2,
        "weight": 66.6,
        "formats": [
            "NU"
        ],
        "oob": {
            "dex_number": 101
        },
        "types": [
            "Electric"
        ]
    },
    {
        "name": "Exeggcute",
        "abilities": [
            "Chlorophyll",
            "Harvest"
        ],
        "stats": [
            {
                "hp": 60
            },
            {
                "atk": 40
            },
            {
                "def": 80
            },
            {
                "spa": 60
            },
            {
                "spd": 45
            }
        ],
        "height": 0.4,
        "weight": 2.5,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 102
        },
        "types": [
            "Grass",
            "Psychic"
        ]
    },
    {
        "name": "Exeggutor",
        "abilities": [
            "Chlorophyll",
            "Harvest"
        ],
        "stats": [
            {
                "hp": 95
            },
            {
                "atk": 95
            },
            {
                "def": 85
            },
            {
                "spa": 125
            },
            {
                "spd": 65
            }
        ],
        "height": 2,
        "weight": 120,
        "formats": [
            "NU"
        ],
        "oob": {
            "dex_number": 103
        },
        "types": [
            "Grass",
            "Psychic"
        ]
    },
    {
        "name": "Cubone",
        "abilities": [
            "Rock Head",
            "Lightning Rod",
            "Battle Armor"
        ],
        "stats": [
            {
                "hp": 50
            },
            {
                "atk": 50
            },
            {
                "def": 95
            },
            {
                "spa": 40
            },
            {
                "spd": 50
            }
        ],
        "height": 0.4,
        "weight": 6.5,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 104
        },
        "types": [
            "Ground"
        ]
    },
    {
        "name": "Marowak",
        "abilities": [
            "Rock Head",
            "Lightning Rod",
            "Battle Armor"
        ],
        "stats": [
            {
                "hp": 60
            },
            {
                "atk": 80
            },
            {
                "def": 110
            },
            {
                "spa": 50
            },
            {
                "spd": 80
            }
        ],
        "height": 1,
        "weight": 45,
        "formats": [
            "ZUBL"
        ],
        "oob": {
            "dex_number": 105
        },
        "types": [
            "Ground"
        ]
    },
    {
        "name": "Hitmonlee",
        "abilities": [
            "Limber",
            "Reckless",
            "Unburden"
        ],
        "stats": [
            {
                "hp": 50
            },
            {
                "atk": 120
            },
            {
                "def": 53
            },
            {
                "spa": 35
            },
            {
                "spd": 110
            }
        ],
        "height": 1.5,
        "weight": 49.8,
        "formats": [
            "RU"
        ],
        "oob": {
            "dex_number": 106
        },
        "types": [
            "Fighting"
        ]
    },
    {
        "name": "Hitmonchan",
        "abilities": [
            "Keen Eye",
            "Iron Fist",
            "Inner Focus"
        ],
        "stats": [
            {
                "hp": 50
            },
            {
                "atk": 105
            },
            {
                "def": 79
            },
            {
                "spa": 35
            },
            {
                "spd": 110
            }
        ],
        "height": 1.4,
        "weight": 50.2,
        "formats": [
            "RU"
        ],
        "oob": {
            "dex_number": 107
        },
        "types": [
            "Fighting"
        ]
    },
    {
        "name": "Lickitung",
        "abilities": [
            "Own Tempo",
            "Oblivious",
            "Cloud Nine"
        ],
        "stats": [
            {
                "hp": 90
            },
            {
                "atk": 55
            },
            {
                "def": 75
            },
            {
                "spa": 60
            },
            {
                "spd": 75
            }
        ],
        "height": 1.2,
        "weight": 65.5,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 108
        },
        "types": [
            "Normal"
        ]
    },
    {
        "name": "Koffing",
        "abilities": [
            "Levitate"
        ],
        "stats": [
            {
                "hp": 40
            },
            {
                "atk": 65
            },
            {
                "def": 95
            },
            {
                "spa": 60
            },
            {
                "spd": 45
            }
        ],
        "height": 0.6,
        "weight": 1,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 109
        },
        "types": [
            "Poison"
        ]
    },
    {
        "name": "Metapod",
        "abilities": [
            "Shed Skin"
        ],
        "stats": [
            {
                "hp": 50
            },
            {
                "atk": 20
            },
            {
                "def": 55
            },
            {
                "spa": 25
            },
            {
                "spd": 25
            }
        ],
        "height": 0.7,
        "weight": 9.9,
        "formats": [
            "NFE"
        ],
        "oob": {
            "dex_number": 11
        },
        "types": [
            "Bug"
        ]
    },
    {
        "name": "Weezing",
        "abilities": [
            "Levitate"
        ],
        "stats": [
            {
                "hp": 65
            },
            {
                "atk": 90
            },
            {
                "def": 120
            },
            {
                "spa": 85
            },
            {
                "spd": 70
            }
        ],
        "height": 1.2,
        "weight": 9.5,
        "formats": [
            "NU"
        ],
        "oob": {
            "dex_number": 110
        },
        "types": [
            "Poison"
        ]
    },
    {
        "name": "Rhyhorn",
        "abilities": [
            "Lightning Rod",
            "Rock Head",
            "Reckless"
        ],
        "stats": [
            {
                "hp": 80
            },
            {
                "atk": 85
            },
            {
                "def": 95
            },
            {
                "spa": 30
            },
            {
                "spd": 30
            }
        ],
        "height": 1,
        "weight": 115,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 111
        },
        "types": [
            "Ground",
            "Rock"
        ]
    },
    {
        "name": "Rhydon",
        "abilities": [
            "Lightning Rod",
            "Rock Head",
            "Reckless"
        ],
        "stats": [
            {
                "hp": 105
            },
            {
                "atk": 130
            },
            {
                "def": 120
            },
            {
                "spa": 45
            },
            {
                "spd": 45
            }
        ],
        "height": 1.9,
        "weight": 120,
        "formats": [
            "RU"
        ],
        "oob": {
            "dex_number": 112
        },
        "types": [
            "Ground",
            "Rock"
        ]
    },
    {
        "name": "Chansey",
        "abilities": [
            "Natural Cure",
            "Serene Grace",
            "Healer"
        ],
        "stats": [
            {
                "hp": 250
            },
            {
                "atk": 5
            },
            {
                "def": 5
            },
            {
                "spa": 35
            },
            {
                "spd": 105
            }
        ],
        "height": 1.1,
        "weight": 34.6,
        "formats": [
            "UUBL"
        ],
        "oob": {
            "dex_number": 113
        },
        "types": [
            "Normal"
        ]
    },
    {
        "name": "Tangela",
        "abilities": [
            "Chlorophyll",
            "Leaf Guard",
            "Regenerator"
        ],
        "stats": [
            {
                "hp": 65
            },
            {
                "atk": 55
            },
            {
                "def": 115
            },
            {
                "spa": 100
            },
            {
                "spd": 40
            }
        ],
        "height": 1,
        "weight": 35,
        "formats": [
            "NU"
        ],
        "oob": {
            "dex_number": 114
        },
        "types": [
            "Grass"
        ]
    },
    {
        "name": "Kangaskhan",
        "abilities": [
            "Early Bird",
            "Scrappy",
            "Inner Focus"
        ],
        "stats": [
            {
                "hp": 105
            },
            {
                "atk": 95
            },
            {
                "def": 80
            },
            {
                "spa": 40
            },
            {
                "spd": 80
            }
        ],
        "height": 2.2,
        "weight": 80,
        "formats": [
            "NU"
        ],
        "oob": {
            "dex_number": 115
        },
        "types": [
            "Normal"
        ]
    },
    {
        "name": "Horsea",
        "abilities": [
            "Swift Swim",
            "Sniper",
            "Damp"
        ],
        "stats": [
            {
                "hp": 30
            },
            {
                "atk": 40
            },
            {
                "def": 70
            },
            {
                "spa": 70
            },
            {
                "spd": 25
            }
        ],
        "height": 0.4,
        "weight": 8,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 116
        },
        "types": [
            "Water"
        ]
    },
    {
        "name": "Seadra",
        "abilities": [
            "Poison Point",
            "Sniper",
            "Damp"
        ],
        "stats": [
            {
                "hp": 55
            },
            {
                "atk": 65
            },
            {
                "def": 95
            },
            {
                "spa": 95
            },
            {
                "spd": 45
            }
        ],
        "height": 1.2,
        "weight": 25,
        "formats": [
            "NFE"
        ],
        "oob": {
            "dex_number": 117
        },
        "types": [
            "Water"
        ]
    },
    {
        "name": "Goldeen",
        "abilities": [
            "Swift Swim",
            "Water Veil",
            "Lightning Rod"
        ],
        "stats": [
            {
                "hp": 45
            },
            {
                "atk": 67
            },
            {
                "def": 60
            },
            {
                "spa": 35
            },
            {
                "spd": 50
            }
        ],
        "height": 0.6,
        "weight": 15,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 118
        },
        "types": [
            "Water"
        ]
    },
    {
        "name": "Seaking",
        "abilities": [
            "Swift Swim",
            "Water Veil",
            "Lightning Rod"
        ],
        "stats": [
            {
                "hp": 80
            },
            {
                "atk": 92
            },
            {
                "def": 65
            },
            {
                "spa": 65
            },
            {
                "spd": 80
            }
        ],
        "height": 1.3,
        "weight": 39,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 119
        },
        "types": [
            "Water"
        ]
    },
    {
        "name": "Butterfree",
        "abilities": [
            "Compound Eyes",
            "Tinted Lens"
        ],
        "stats": [
            {
                "hp": 60
            },
            {
                "atk": 45
            },
            {
                "def": 50
            },
            {
                "spa": 80
            },
            {
                "spd": 80
            }
        ],
        "height": 1.1,
        "weight": 32,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 12
        },
        "types": [
            "Bug",
            "Flying"
        ]
    },
    {
        "name": "Staryu",
        "abilities": [
            "Illuminate",
            "Natural Cure",
            "Analytic"
        ],
        "stats": [
            {
                "hp": 30
            },
            {
                "atk": 45
            },
            {
                "def": 55
            },
            {
                "spa": 70
            },
            {
                "spd": 55
            }
        ],
        "height": 0.8,
        "weight": 34.5,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 120
        },
        "types": [
            "Water"
        ]
    },
    {
        "name": "Starmie",
        "abilities": [
            "Illuminate",
            "Natural Cure",
            "Analytic"
        ],
        "stats": [
            {
                "hp": 60
            },
            {
                "atk": 75
            },
            {
                "def": 85
            },
            {
                "spa": 100
            },
            {
                "spd": 85
            }
        ],
        "height": 1.1,
        "weight": 80,
        "formats": [
            "OU"
        ],
        "oob": {
            "dex_number": 121
        },
        "types": [
            "Water",
            "Psychic"
        ]
    },
    {
        "name": "Mr. Mime",
        "abilities": [
            "Soundproof",
            "Filter",
            "Technician"
        ],
        "stats": [
            {
                "hp": 40
            },
            {
                "atk": 45
            },
            {
                "def": 65
            },
            {
                "spa": 100
            },
            {
                "spd": 120
            }
        ],
        "height": 1.3,
        "weight": 54.5,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 122
        },
        "types": [
            "Psychic"
        ]
    },
    {
        "name": "Scyther",
        "abilities": [
            "Swarm",
            "Technician",
            "Steadfast"
        ],
        "stats": [
            {
                "hp": 70
            },
            {
                "atk": 110
            },
            {
                "def": 80
            },
            {
                "spa": 55
            },
            {
                "spd": 80
            }
        ],
        "height": 1.5,
        "weight": 56,
        "formats": [
            "RU"
        ],
        "oob": {
            "dex_number": 123
        },
        "types": [
            "Bug",
            "Flying"
        ]
    },
    {
        "name": "Jynx",
        "abilities": [
            "Oblivious",
            "Forewarn",
            "Dry Skin"
        ],
        "stats": [
            {
                "hp": 65
            },
            {
                "atk": 50
            },
            {
                "def": 35
            },
            {
                "spa": 115
            },
            {
                "spd": 95
            }
        ],
        "height": 1.4,
        "weight": 40.6,
        "formats": [
            "NUBL"
        ],
        "oob": {
            "dex_number": 124
        },
        "types": [
            "Ice",
            "Psychic"
        ]
    },
    {
        "name": "Electabuzz",
        "abilities": [
            "Static",
            "Vital Spirit"
        ],
        "stats": [
            {
                "hp": 65
            },
            {
                "atk": 83
            },
            {
                "def": 57
            },
            {
                "spa": 95
            },
            {
                "spd": 85
            }
        ],
        "height": 1.1,
        "weight": 30,
        "formats": [
            "NU"
        ],
        "oob": {
            "dex_number": 125
        },
        "types": [
            "Electric"
        ]
    },
    {
        "name": "Magmar",
        "abilities": [
            "Flame Body",
            "Vital Spirit"
        ],
        "stats": [
            {
                "hp": 65
            },
            {
                "atk": 95
            },
            {
                "def": 57
            },
            {
                "spa": 100
            },
            {
                "spd": 85
            }
        ],
        "height": 1.3,
        "weight": 44.5,
        "formats": [
            "NFE"
        ],
        "oob": {
            "dex_number": 126
        },
        "types": [
            "Fire"
        ]
    },
    {
        "name": "Pinsir",
        "abilities": [
            "Hyper Cutter",
            "Mold Breaker",
            "Moxie"
        ],
        "stats": [
            {
                "hp": 65
            },
            {
                "atk": 125
            },
            {
                "def": 100
            },
            {
                "spa": 55
            },
            {
                "spd": 70
            }
        ],
        "height": 1.5,
        "weight": 55,
        "formats": [
            "NU"
        ],
        "oob": {
            "dex_number": 127
        },
        "types": [
            "Bug"
        ]
    },
    {
        "name": "Tauros",
        "abilities": [
            "Intimidate",
            "Anger Point",
            "Sheer Force"
        ],
        "stats": [
            {
                "hp": 75
            },
            {
                "atk": 100
            },
            {
                "def": 95
            },
            {
                "spa": 40
            },
            {
                "spd": 70
            }
        ],
        "height": 1.4,
        "weight": 88.4,
        "formats": [
            "NU"
        ],
        "oob": {
            "dex_number": 128
        },
        "types": [
            "Normal"
        ]
    },
    {
        "name": "Magikarp",
        "abilities": [
            "Swift Swim",
            "Rattled"
        ],
        "stats": [
            {
                "hp": 20
            },
            {
                "atk": 10
            },
            {
                "def": 55
            },
            {
                "spa": 15
            },
            {
                "spd": 20
            }
        ],
        "height": 0.9,
        "weight": 10,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 129
        },
        "types": [
            "Water"
        ]
    },
    {
        "name": "Weedle",
        "abilities": [
            "Shield Dust",
            "Run Away"
        ],
        "stats": [
            {
                "hp": 40
            },
            {
                "atk": 35
            },
            {
                "def": 30
            },
            {
                "spa": 20
            },
            {
                "spd": 20
            }
        ],
        "height": 0.3,
        "weight": 3.2,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 13
        },
        "types": [
            "Bug",
            "Poison"
        ]
    },
    {
        "name": "Gyarados",
        "abilities": [
            "Intimidate",
            "Moxie"
        ],
        "stats": [
            {
                "hp": 95
            },
            {
                "atk": 125
            },
            {
                "def": 79
            },
            {
                "spa": 60
            },
            {
                "spd": 100
            }
        ],
        "height": 6.5,
        "weight": 235,
        "formats": [
            "OU"
        ],
        "oob": {
            "dex_number": 130
        },
        "types": [
            "Water",
            "Flying"
        ]
    },
    {
        "name": "Lapras",
        "abilities": [
            "Water Absorb",
            "Shell Armor",
            "Hydration"
        ],
        "stats": [
            {
                "hp": 130
            },
            {
                "atk": 85
            },
            {
                "def": 80
            },
            {
                "spa": 85
            },
            {
                "spd": 95
            }
        ],
        "height": 2.5,
        "weight": 220,
        "formats": [
            "NU"
        ],
        "oob": {
            "dex_number": 131
        },
        "types": [
            "Water",
            "Ice"
        ]
    },
    {
        "name": "Ditto",
        "abilities": [
            "Limber",
            "Imposter"
        ],
        "stats": [
            {
                "hp": 48
            },
            {
                "atk": 48
            },
            {
                "def": 48
            },
            {
                "spa": 48
            },
            {
                "spd": 48
            }
        ],
        "height": 0.3,
        "weight": 4,
        "formats": [
            "NU"
        ],
        "oob": {
            "dex_number": 132
        },
        "types": [
            "Normal"
        ]
    },
    {
        "name": "Eevee",
        "abilities": [
            "Run Away",
            "Adaptability",
            "Anticipation"
        ],
        "stats": [
            {
                "hp": 55
            },
            {
                "atk": 55
            },
            {
                "def": 50
            },
            {
                "spa": 45
            },
            {
                "spd": 65
            }
        ],
        "height": 0.3,
        "weight": 6.5,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 133
        },
        "types": [
            "Normal"
        ]
    },
    {
        "name": "Vaporeon",
        "abilities": [
            "Water Absorb",
            "Hydration"
        ],
        "stats": [
            {
                "hp": 130
            },
            {
                "atk": 65
            },
            {
                "def": 60
            },
            {
                "spa": 110
            },
            {
                "spd": 95
            }
        ],
        "height": 1,
        "weight": 29,
        "formats": [
            "OU"
        ],
        "oob": {
            "dex_number": 134
        },
        "types": [
            "Water"
        ]
    },
    {
        "name": "Jolteon",
        "abilities": [
            "Volt Absorb",
            "Quick Feet"
        ],
        "stats": [
            {
                "hp": 65
            },
            {
                "atk": 65
            },
            {
                "def": 60
            },
            {
                "spa": 110
            },
            {
                "spd": 95
            }
        ],
        "height": 0.8,
        "weight": 24.5,
        "formats": [
            "OU"
        ],
        "oob": {
            "dex_number": 135
        },
        "types": [
            "Electric"
        ]
    },
    {
        "name": "Flareon",
        "abilities": [
            "Flash Fire",
            "Guts"
        ],
        "stats": [
            {
                "hp": 65
            },
            {
                "atk": 130
            },
            {
                "def": 60
            },
            {
                "spa": 95
            },
            {
                "spd": 110
            }
        ],
        "height": 0.9,
        "weight": 25,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 136
        },
        "types": [
            "Fire"
        ]
    },
    {
        "name": "Porygon",
        "abilities": [
            "Trace",
            "Download",
            "Analytic"
        ],
        "stats": [
            {
                "hp": 65
            },
            {
                "atk": 60
            },
            {
                "def": 70
            },
            {
                "spa": 85
            },
            {
                "spd": 75
            }
        ],
        "height": 0.8,
        "weight": 36.5,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 137
        },
        "types": [
            "Normal"
        ]
    },
    {
        "name": "Omanyte",
        "abilities": [
            "Swift Swim",
            "Shell Armor",
            "Weak Armor"
        ],
        "stats": [
            {
                "hp": 35
            },
            {
                "atk": 40
            },
            {
                "def": 100
            },
            {
                "spa": 90
            },
            {
                "spd": 55
            }
        ],
        "height": 0.4,
        "weight": 7.5,
        "formats": [
            "ZUBL"
        ],
        "oob": {
            "dex_number": 138
        },
        "types": [
            "Rock",
            "Water"
        ]
    },
    {
        "name": "Omastar",
        "abilities": [
            "Swift Swim",
            "Shell Armor",
            "Weak Armor"
        ],
        "stats": [
            {
                "hp": 70
            },
            {
                "atk": 60
            },
            {
                "def": 125
            },
            {
                "spa": 115
            },
            {
                "spd": 70
            }
        ],
        "height": 1,
        "weight": 35,
        "formats": [
            "RU"
        ],
        "oob": {
            "dex_number": 139
        },
        "types": [
            "Rock",
            "Water"
        ]
    },
    {
        "name": "Kakuna",
        "abilities": [
            "Shed Skin"
        ],
        "stats": [
            {
                "hp": 45
            },
            {
                "atk": 25
            },
            {
                "def": 50
            },
            {
                "spa": 25
            },
            {
                "spd": 25
            }
        ],
        "height": 0.6,
        "weight": 10,
        "formats": [
            "NFE"
        ],
        "oob": {
            "dex_number": 14
        },
        "types": [
            "Bug",
            "Poison"
        ]
    },
    {
        "name": "Kabuto",
        "abilities": [
            "Swift Swim",
            "Battle Armor",
            "Weak Armor"
        ],
        "stats": [
            {
                "hp": 30
            },
            {
                "atk": 80
            },
            {
                "def": 90
            },
            {
                "spa": 55
            },
            {
                "spd": 45
            }
        ],
        "height": 0.5,
        "weight": 11.5,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 140
        },
        "types": [
            "Rock",
            "Water"
        ]
    },
    {
        "name": "Kabutops",
        "abilities": [
            "Swift Swim",
            "Battle Armor",
            "Weak Armor"
        ],
        "stats": [
            {
                "hp": 60
            },
            {
                "atk": 115
            },
            {
                "def": 105
            },
            {
                "spa": 65
            },
            {
                "spd": 70
            }
        ],
        "height": 1.3,
        "weight": 40.5,
        "formats": [
            "RU"
        ],
        "oob": {
            "dex_number": 141
        },
        "types": [
            "Rock",
            "Water"
        ]
    },
    {
        "name": "Aerodactyl",
        "abilities": [
            "Rock Head",
            "Pressure",
            "Unnerve"
        ],
        "stats": [
            {
                "hp": 80
            },
            {
                "atk": 105
            },
            {
                "def": 65
            },
            {
                "spa": 60
            },
            {
                "spd": 75
            }
        ],
        "height": 1.8,
        "weight": 59,
        "formats": [
            "RU"
        ],
        "oob": {
            "dex_number": 142
        },
        "types": [
            "Rock",
            "Flying"
        ]
    },
    {
        "name": "Snorlax",
        "abilities": [
            "Immunity",
            "Thick Fat",
            "Gluttony"
        ],
        "stats": [
            {
                "hp": 160
            },
            {
                "atk": 110
            },
            {
                "def": 65
            },
            {
                "spa": 65
            },
            {
                "spd": 110
            }
        ],
        "height": 2.1,
        "weight": 460,
        "formats": [
            "UU"
        ],
        "oob": {
            "dex_number": 143
        },
        "types": [
            "Normal"
        ]
    },
    {
        "name": "Articuno",
        "abilities": [
            "Pressure",
            "Snow Cloak"
        ],
        "stats": [
            {
                "hp": 90
            },
            {
                "atk": 85
            },
            {
                "def": 100
            },
            {
                "spa": 95
            },
            {
                "spd": 125
            }
        ],
        "height": 1.7,
        "weight": 55.4,
        "formats": [
            "ZUBL"
        ],
        "oob": {
            "dex_number": 144
        },
        "types": [
            "Ice",
            "Flying"
        ]
    },
    {
        "name": "Zapdos",
        "abilities": [
            "Pressure",
            "Lightning Rod"
        ],
        "stats": [
            {
                "hp": 90
            },
            {
                "atk": 90
            },
            {
                "def": 85
            },
            {
                "spa": 125
            },
            {
                "spd": 90
            }
        ],
        "height": 1.6,
        "weight": 52.6,
        "formats": [
            "UU"
        ],
        "oob": {
            "dex_number": 145
        },
        "types": [
            "Electric",
            "Flying"
        ]
    },
    {
        "name": "Moltres",
        "abilities": [
            "Pressure",
            "Flame Body"
        ],
        "stats": [
            {
                "hp": 90
            },
            {
                "atk": 100
            },
            {
                "def": 90
            },
            {
                "spa": 125
            },
            {
                "spd": 85
            }
        ],
        "height": 2,
        "weight": 60,
        "formats": [
            "RU"
        ],
        "oob": {
            "dex_number": 146
        },
        "types": [
            "Fire",
            "Flying"
        ]
    },
    {
        "name": "Dratini",
        "abilities": [
            "Shed Skin",
            "Marvel Scale"
        ],
        "stats": [
            {
                "hp": 41
            },
            {
                "atk": 64
            },
            {
                "def": 45
            },
            {
                "spa": 50
            },
            {
                "spd": 50
            }
        ],
        "height": 1.8,
        "weight": 3.3,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 147
        },
        "types": [
            "Dragon"
        ]
    },
    {
        "name": "Dragonair",
        "abilities": [
            "Shed Skin",
            "Marvel Scale"
        ],
        "stats": [
            {
                "hp": 61
            },
            {
                "atk": 84
            },
            {
                "def": 65
            },
            {
                "spa": 70
            },
            {
                "spd": 70
            }
        ],
        "height": 4,
        "weight": 16.5,
        "formats": [
            "ZUBL"
        ],
        "oob": {
            "dex_number": 148
        },
        "types": [
            "Dragon"
        ]
    },
    {
        "name": "Dragonite",
        "abilities": [
            "Inner Focus",
            "Multiscale"
        ],
        "stats": [
            {
                "hp": 91
            },
            {
                "atk": 134
            },
            {
                "def": 95
            },
            {
                "spa": 100
            },
            {
                "spd": 100
            }
        ],
        "height": 2.2,
        "weight": 210,
        "formats": [
            "OU"
        ],
        "oob": {
            "dex_number": 149
        },
        "types": [
            "Dragon",
            "Flying"
        ]
    },
    {
        "name": "Beedrill",
        "abilities": [
            "Swarm",
            "Sniper"
        ],
        "stats": [
            {
                "hp": 65
            },
            {
                "atk": 80
            },
            {
                "def": 40
            },
            {
                "spa": 45
            },
            {
                "spd": 80
            }
        ],
        "height": 1,
        "weight": 29.5,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 15
        },
        "types": [
            "Bug",
            "Poison"
        ]
    },
    {
        "name": "Mewtwo",
        "abilities": [
            "Pressure",
            "Unnerve"
        ],
        "stats": [
            {
                "hp": 106
            },
            {
                "atk": 110
            },
            {
                "def": 90
            },
            {
                "spa": 154
            },
            {
                "spd": 90
            }
        ],
        "height": 2,
        "weight": 122,
        "formats": [
            "Uber"
        ],
        "oob": {
            "dex_number": 150
        },
        "types": [
            "Psychic"
        ]
    },
    {
        "name": "Mew",
        "abilities": [
            "Synchronize"
        ],
        "stats": [
            {
                "hp": 100
            },
            {
                "atk": 100
            },
            {
                "def": 100
            },
            {
                "spa": 100
            },
            {
                "spd": 100
            }
        ],
        "height": 0.4,
        "weight": 4,
        "formats": [
            "UU"
        ],
        "oob": {
            "dex_number": 151
        },
        "types": [
            "Psychic"
        ]
    },
    {
        "name": "Chikorita",
        "abilities": [
            "Overgrow",
            "Leaf Guard"
        ],
        "stats": [
            {
                "hp": 45
            },
            {
                "atk": 49
            },
            {
                "def": 65
            },
            {
                "spa": 49
            },
            {
                "spd": 65
            }
        ],
        "height": 0.9,
        "weight": 6.4,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 152
        },
        "types": [
            "Grass"
        ]
    },
    {
        "name": "Bayleef",
        "abilities": [
            "Overgrow",
            "Leaf Guard"
        ],
        "stats": [
            {
                "hp": 60
            },
            {
                "atk": 62
            },
            {
                "def": 80
            },
            {
                "spa": 63
            },
            {
                "spd": 80
            }
        ],
        "height": 1.2,
        "weight": 15.8,
        "formats": [
            "NFE"
        ],
        "oob": {
            "dex_number": 153
        },
        "types": [
            "Grass"
        ]
    },
    {
        "name": "Meganium",
        "abilities": [
            "Overgrow",
            "Leaf Guard"
        ],
        "stats": [
            {
                "hp": 80
            },
            {
                "atk": 82
            },
            {
                "def": 100
            },
            {
                "spa": 83
            },
            {
                "spd": 100
            }
        ],
        "height": 1.8,
        "weight": 100.5,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 154
        },
        "types": [
            "Grass"
        ]
    },
    {
        "name": "Cyndaquil",
        "abilities": [
            "Blaze",
            "Flash Fire"
        ],
        "stats": [
            {
                "hp": 39
            },
            {
                "atk": 52
            },
            {
                "def": 43
            },
            {
                "spa": 60
            },
            {
                "spd": 50
            }
        ],
        "height": 0.5,
        "weight": 7.9,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 155
        },
        "types": [
            "Fire"
        ]
    },
    {
        "name": "Quilava",
        "abilities": [
            "Blaze",
            "Flash Fire"
        ],
        "stats": [
            {
                "hp": 58
            },
            {
                "atk": 64
            },
            {
                "def": 58
            },
            {
                "spa": 80
            },
            {
                "spd": 65
            }
        ],
        "height": 0.9,
        "weight": 19,
        "formats": [
            "NFE"
        ],
        "oob": {
            "dex_number": 156
        },
        "types": [
            "Fire"
        ]
    },
    {
        "name": "Typhlosion",
        "abilities": [
            "Blaze",
            "Flash Fire"
        ],
        "stats": [
            {
                "hp": 78
            },
            {
                "atk": 84
            },
            {
                "def": 78
            },
            {
                "spa": 109
            },
            {
                "spd": 85
            }
        ],
        "height": 1.7,
        "weight": 79.5,
        "formats": [
            "RU"
        ],
        "oob": {
            "dex_number": 157
        },
        "types": [
            "Fire"
        ]
    },
    {
        "name": "Totodile",
        "abilities": [
            "Torrent",
            "Sheer Force"
        ],
        "stats": [
            {
                "hp": 50
            },
            {
                "atk": 65
            },
            {
                "def": 64
            },
            {
                "spa": 44
            },
            {
                "spd": 48
            }
        ],
        "height": 0.6,
        "weight": 9.5,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 158
        },
        "types": [
            "Water"
        ]
    },
    {
        "name": "Croconaw",
        "abilities": [
            "Torrent",
            "Sheer Force"
        ],
        "stats": [
            {
                "hp": 65
            },
            {
                "atk": 80
            },
            {
                "def": 80
            },
            {
                "spa": 59
            },
            {
                "spd": 63
            }
        ],
        "height": 1.1,
        "weight": 25,
        "formats": [
            "NFE"
        ],
        "oob": {
            "dex_number": 159
        },
        "types": [
            "Water"
        ]
    },
    {
        "name": "Pidgey",
        "abilities": [
            "Keen Eye",
            "Tangled Feet",
            "Big Pecks"
        ],
        "stats": [
            {
                "hp": 40
            },
            {
                "atk": 45
            },
            {
                "def": 40
            },
            {
                "spa": 35
            },
            {
                "spd": 35
            }
        ],
        "height": 0.3,
        "weight": 1.8,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 16
        },
        "types": [
            "Normal",
            "Flying"
        ]
    },
    {
        "name": "Feraligatr",
        "abilities": [
            "Torrent",
            "Sheer Force"
        ],
        "stats": [
            {
                "hp": 85
            },
            {
                "atk": 105
            },
            {
                "def": 100
            },
            {
                "spa": 79
            },
            {
                "spd": 83
            }
        ],
        "height": 2.3,
        "weight": 88.8,
        "formats": [
            "RU"
        ],
        "oob": {
            "dex_number": 160
        },
        "types": [
            "Water"
        ]
    },
    {
        "name": "Sentret",
        "abilities": [
            "Run Away",
            "Keen Eye",
            "Frisk"
        ],
        "stats": [
            {
                "hp": 35
            },
            {
                "atk": 46
            },
            {
                "def": 34
            },
            {
                "spa": 35
            },
            {
                "spd": 45
            }
        ],
        "height": 0.8,
        "weight": 6,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 161
        },
        "types": [
            "Normal"
        ]
    },
    {
        "name": "Furret",
        "abilities": [
            "Run Away",
            "Keen Eye",
            "Frisk"
        ],
        "stats": [
            {
                "hp": 85
            },
            {
                "atk": 76
            },
            {
                "def": 64
            },
            {
                "spa": 45
            },
            {
                "spd": 55
            }
        ],
        "height": 1.8,
        "weight": 32.5,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 162
        },
        "types": [
            "Normal"
        ]
    },
    {
        "name": "Hoothoot",
        "abilities": [
            "Insomnia",
            "Keen Eye",
            "Tinted Lens"
        ],
        "stats": [
            {
                "hp": 60
            },
            {
                "atk": 30
            },
            {
                "def": 30
            },
            {
                "spa": 36
            },
            {
                "spd": 56
            }
        ],
        "height": 0.7,
        "weight": 21.2,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 163
        },
        "types": [
            "Normal",
            "Flying"
        ]
    },
    {
        "name": "Noctowl",
        "abilities": [
            "Insomnia",
            "Keen Eye",
            "Tinted Lens"
        ],
        "stats": [
            {
                "hp": 100
            },
            {
                "atk": 50
            },
            {
                "def": 50
            },
            {
                "spa": 76
            },
            {
                "spd": 96
            }
        ],
        "height": 1.6,
        "weight": 40.8,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 164
        },
        "types": [
            "Normal",
            "Flying"
        ]
    },
    {
        "name": "Ledyba",
        "abilities": [
            "Swarm",
            "Early Bird",
            "Rattled"
        ],
        "stats": [
            {
                "hp": 40
            },
            {
                "atk": 20
            },
            {
                "def": 30
            },
            {
                "spa": 40
            },
            {
                "spd": 80
            }
        ],
        "height": 1,
        "weight": 10.8,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 165
        },
        "types": [
            "Bug",
            "Flying"
        ]
    },
    {
        "name": "Ledian",
        "abilities": [
            "Swarm",
            "Early Bird",
            "Iron Fist"
        ],
        "stats": [
            {
                "hp": 55
            },
            {
                "atk": 35
            },
            {
                "def": 50
            },
            {
                "spa": 55
            },
            {
                "spd": 110
            }
        ],
        "height": 1.4,
        "weight": 35.6,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 166
        },
        "types": [
            "Bug",
            "Flying"
        ]
    },
    {
        "name": "Spinarak",
        "abilities": [
            "Swarm",
            "Insomnia",
            "Sniper"
        ],
        "stats": [
            {
                "hp": 40
            },
            {
                "atk": 60
            },
            {
                "def": 40
            },
            {
                "spa": 40
            },
            {
                "spd": 40
            }
        ],
        "height": 0.5,
        "weight": 8.5,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 167
        },
        "types": [
            "Bug",
            "Poison"
        ]
    },
    {
        "name": "Ariados",
        "abilities": [
            "Swarm",
            "Insomnia",
            "Sniper"
        ],
        "stats": [
            {
                "hp": 70
            },
            {
                "atk": 90
            },
            {
                "def": 70
            },
            {
                "spa": 60
            },
            {
                "spd": 60
            }
        ],
        "height": 1.1,
        "weight": 33.5,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 168
        },
        "types": [
            "Bug",
            "Poison"
        ]
    },
    {
        "name": "Crobat",
        "abilities": [
            "Inner Focus",
            "Infiltrator"
        ],
        "stats": [
            {
                "hp": 85
            },
            {
                "atk": 90
            },
            {
                "def": 80
            },
            {
                "spa": 70
            },
            {
                "spd": 80
            }
        ],
        "height": 1.8,
        "weight": 75,
        "formats": [
            "UU"
        ],
        "oob": {
            "dex_number": 169
        },
        "types": [
            "Poison",
            "Flying"
        ]
    },
    {
        "name": "Pidgeotto",
        "abilities": [
            "Keen Eye",
            "Tangled Feet",
            "Big Pecks"
        ],
        "stats": [
            {
                "hp": 63
            },
            {
                "atk": 60
            },
            {
                "def": 55
            },
            {
                "spa": 50
            },
            {
                "spd": 50
            }
        ],
        "height": 1.1,
        "weight": 30,
        "formats": [
            "NFE"
        ],
        "oob": {
            "dex_number": 17
        },
        "types": [
            "Normal",
            "Flying"
        ]
    },
    {
        "name": "Chinchou",
        "abilities": [
            "Volt Absorb",
            "Illuminate",
            "Water Absorb"
        ],
        "stats": [
            {
                "hp": 75
            },
            {
                "atk": 38
            },
            {
                "def": 38
            },
            {
                "spa": 56
            },
            {
                "spd": 56
            }
        ],
        "height": 0.5,
        "weight": 12,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 170
        },
        "types": [
            "Water",
            "Electric"
        ]
    },
    {
        "name": "Lanturn",
        "abilities": [
            "Volt Absorb",
            "Illuminate",
            "Water Absorb"
        ],
        "stats": [
            {
                "hp": 125
            },
            {
                "atk": 58
            },
            {
                "def": 58
            },
            {
                "spa": 76
            },
            {
                "spd": 76
            }
        ],
        "height": 1.2,
        "weight": 22.5,
        "formats": [
            "RU"
        ],
        "oob": {
            "dex_number": 171
        },
        "types": [
            "Water",
            "Electric"
        ]
    },
    {
        "name": "Pichu",
        "abilities": [
            "Static",
            "Lightning Rod"
        ],
        "stats": [
            {
                "hp": 20
            },
            {
                "atk": 40
            },
            {
                "def": 15
            },
            {
                "spa": 35
            },
            {
                "spd": 35
            }
        ],
        "height": 0.3,
        "weight": 2,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 172
        },
        "types": [
            "Electric"
        ]
    },
    {
        "name": "Cleffa",
        "abilities": [
            "Cute Charm",
            "Magic Guard",
            "Friend Guard"
        ],
        "stats": [
            {
                "hp": 50
            },
            {
                "atk": 25
            },
            {
                "def": 28
            },
            {
                "spa": 45
            },
            {
                "spd": 55
            }
        ],
        "height": 0.3,
        "weight": 3,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 173
        },
        "types": [
            "Normal"
        ]
    },
    {
        "name": "Igglybuff",
        "abilities": [
            "Cute Charm",
            "Friend Guard"
        ],
        "stats": [
            {
                "hp": 90
            },
            {
                "atk": 30
            },
            {
                "def": 15
            },
            {
                "spa": 40
            },
            {
                "spd": 20
            }
        ],
        "height": 0.3,
        "weight": 1,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 174
        },
        "types": [
            "Normal"
        ]
    },
    {
        "name": "Togepi",
        "abilities": [
            "Hustle",
            "Serene Grace",
            "Super Luck"
        ],
        "stats": [
            {
                "hp": 35
            },
            {
                "atk": 20
            },
            {
                "def": 65
            },
            {
                "spa": 40
            },
            {
                "spd": 65
            }
        ],
        "height": 0.3,
        "weight": 1.5,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 175
        },
        "types": [
            "Normal"
        ]
    },
    {
        "name": "Togetic",
        "abilities": [
            "Hustle",
            "Serene Grace",
            "Super Luck"
        ],
        "stats": [
            {
                "hp": 55
            },
            {
                "atk": 40
            },
            {
                "def": 85
            },
            {
                "spa": 80
            },
            {
                "spd": 105
            }
        ],
        "height": 0.6,
        "weight": 3.2,
        "formats": [
            "NFE"
        ],
        "oob": {
            "dex_number": 176
        },
        "types": [
            "Normal",
            "Flying"
        ]
    },
    {
        "name": "Natu",
        "abilities": [
            "Synchronize",
            "Early Bird",
            "Magic Bounce"
        ],
        "stats": [
            {
                "hp": 40
            },
            {
                "atk": 50
            },
            {
                "def": 45
            },
            {
                "spa": 70
            },
            {
                "spd": 45
            }
        ],
        "height": 0.2,
        "weight": 2,
        "formats": [
            "PU"
        ],
        "oob": {
            "dex_number": 177
        },
        "types": [
            "Psychic",
            "Flying"
        ]
    },
    {
        "name": "Xatu",
        "abilities": [
            "Synchronize",
            "Early Bird",
            "Magic Bounce"
        ],
        "stats": [
            {
                "hp": 65
            },
            {
                "atk": 75
            },
            {
                "def": 70
            },
            {
                "spa": 95
            },
            {
                "spd": 70
            }
        ],
        "height": 1.5,
        "weight": 15,
        "formats": [
            "UU"
        ],
        "oob": {
            "dex_number": 178
        },
        "types": [
            "Psychic",
            "Flying"
        ]
    },
    {
        "name": "Mareep",
        "abilities": [
            "Static",
            "Plus"
        ],
        "stats": [
            {
                "hp": 55
            },
            {
                "atk": 40
            },
            {
                "def": 40
            },
            {
                "spa": 65
            },
            {
                "spd": 45
            }
        ],
        "height": 0.6,
        "weight": 7.8,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 179
        },
        "types": [
            "Electric"
        ]
    },
    {
        "name": "Pidgeot",
        "abilities": [
            "Keen Eye",
            "Tangled Feet",
            "Big Pecks"
        ],
        "stats": [
            {
                "hp": 83
            },
            {
                "atk": 80
            },
            {
                "def": 75
            },
            {
                "spa": 70
            },
            {
                "spd": 70
            }
        ],
        "height": 1.5,
        "weight": 39.5,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 18
        },
        "types": [
            "Normal",
            "Flying"
        ]
    },
    {
        "name": "Flaaffy",
        "abilities": [
            "Static",
            "Plus"
        ],
        "stats": [
            {
                "hp": 70
            },
            {
                "atk": 55
            },
            {
                "def": 55
            },
            {
                "spa": 80
            },
            {
                "spd": 60
            }
        ],
        "height": 0.8,
        "weight": 13.3,
        "formats": [
            "NFE"
        ],
        "oob": {
            "dex_number": 180
        },
        "types": [
            "Electric"
        ]
    },
    {
        "name": "Ampharos",
        "abilities": [
            "Static",
            "Plus"
        ],
        "stats": [
            {
                "hp": 90
            },
            {
                "atk": 75
            },
            {
                "def": 75
            },
            {
                "spa": 115
            },
            {
                "spd": 90
            }
        ],
        "height": 1.4,
        "weight": 61.5,
        "formats": [
            "NU"
        ],
        "oob": {
            "dex_number": 181
        },
        "types": [
            "Electric"
        ]
    },
    {
        "name": "Bellossom",
        "abilities": [
            "Chlorophyll",
            "Healer"
        ],
        "stats": [
            {
                "hp": 75
            },
            {
                "atk": 80
            },
            {
                "def": 85
            },
            {
                "spa": 90
            },
            {
                "spd": 100
            }
        ],
        "height": 0.4,
        "weight": 5.8,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 182
        },
        "types": [
            "Grass"
        ]
    },
    {
        "name": "Marill",
        "abilities": [
            "Thick Fat",
            "Huge Power",
            "Sap Sipper"
        ],
        "stats": [
            {
                "hp": 70
            },
            {
                "atk": 20
            },
            {
                "def": 50
            },
            {
                "spa": 20
            },
            {
                "spd": 50
            }
        ],
        "height": 0.4,
        "weight": 8.5,
        "formats": [
            "NFE"
        ],
        "oob": {
            "dex_number": 183
        },
        "types": [
            "Water"
        ]
    },
    {
        "name": "Azumarill",
        "abilities": [
            "Thick Fat",
            "Huge Power",
            "Sap Sipper"
        ],
        "stats": [
            {
                "hp": 100
            },
            {
                "atk": 50
            },
            {
                "def": 80
            },
            {
                "spa": 50
            },
            {
                "spd": 80
            }
        ],
        "height": 0.8,
        "weight": 28.5,
        "formats": [
            "UU"
        ],
        "oob": {
            "dex_number": 184
        },
        "types": [
            "Water"
        ]
    },
    {
        "name": "Sudowoodo",
        "abilities": [
            "Sturdy",
            "Rock Head",
            "Rattled"
        ],
        "stats": [
            {
                "hp": 70
            },
            {
                "atk": 100
            },
            {
                "def": 115
            },
            {
                "spa": 30
            },
            {
                "spd": 65
            }
        ],
        "height": 1.2,
        "weight": 38,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 185
        },
        "types": [
            "Rock"
        ]
    },
    {
        "name": "Politoed",
        "abilities": [
            "Water Absorb",
            "Damp",
            "Drizzle"
        ],
        "stats": [
            {
                "hp": 90
            },
            {
                "atk": 75
            },
            {
                "def": 75
            },
            {
                "spa": 90
            },
            {
                "spd": 100
            }
        ],
        "height": 1.1,
        "weight": 33.9,
        "formats": [
            "OU"
        ],
        "oob": {
            "dex_number": 186
        },
        "types": [
            "Water"
        ]
    },
    {
        "name": "Hoppip",
        "abilities": [
            "Chlorophyll",
            "Leaf Guard",
            "Infiltrator"
        ],
        "stats": [
            {
                "hp": 35
            },
            {
                "atk": 35
            },
            {
                "def": 40
            },
            {
                "spa": 35
            },
            {
                "spd": 55
            }
        ],
        "height": 0.4,
        "weight": 0.5,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 187
        },
        "types": [
            "Grass",
            "Flying"
        ]
    },
    {
        "name": "Skiploom",
        "abilities": [
            "Chlorophyll",
            "Leaf Guard",
            "Infiltrator"
        ],
        "stats": [
            {
                "hp": 55
            },
            {
                "atk": 45
            },
            {
                "def": 50
            },
            {
                "spa": 45
            },
            {
                "spd": 65
            }
        ],
        "height": 0.6,
        "weight": 1,
        "formats": [
            "NFE"
        ],
        "oob": {
            "dex_number": 188
        },
        "types": [
            "Grass",
            "Flying"
        ]
    },
    {
        "name": "Jumpluff",
        "abilities": [
            "Chlorophyll",
            "Leaf Guard",
            "Infiltrator"
        ],
        "stats": [
            {
                "hp": 75
            },
            {
                "atk": 55
            },
            {
                "def": 70
            },
            {
                "spa": 55
            },
            {
                "spd": 85
            }
        ],
        "height": 0.8,
        "weight": 3,
        "formats": [
            "PU"
        ],
        "oob": {
            "dex_number": 189
        },
        "types": [
            "Grass",
            "Flying"
        ]
    },
    {
        "name": "Rattata",
        "abilities": [
            "Run Away",
            "Guts",
            "Hustle"
        ],
        "stats": [
            {
                "hp": 30
            },
            {
                "atk": 56
            },
            {
                "def": 35
            },
            {
                "spa": 25
            },
            {
                "spd": 35
            }
        ],
        "height": 0.3,
        "weight": 3.5,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 19
        },
        "types": [
            "Normal"
        ]
    },
    {
        "name": "Aipom",
        "abilities": [
            "Run Away",
            "Pickup",
            "Skill Link"
        ],
        "stats": [
            {
                "hp": 55
            },
            {
                "atk": 70
            },
            {
                "def": 55
            },
            {
                "spa": 40
            },
            {
                "spd": 55
            }
        ],
        "height": 0.8,
        "weight": 11.5,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 190
        },
        "types": [
            "Normal"
        ]
    },
    {
        "name": "Sunkern",
        "abilities": [
            "Chlorophyll",
            "Solar Power",
            "Early Bird"
        ],
        "stats": [
            {
                "hp": 30
            },
            {
                "atk": 30
            },
            {
                "def": 30
            },
            {
                "spa": 30
            },
            {
                "spd": 30
            }
        ],
        "height": 0.3,
        "weight": 1.8,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 191
        },
        "types": [
            "Grass"
        ]
    },
    {
        "name": "Sunflora",
        "abilities": [
            "Chlorophyll",
            "Solar Power",
            "Early Bird"
        ],
        "stats": [
            {
                "hp": 75
            },
            {
                "atk": 75
            },
            {
                "def": 55
            },
            {
                "spa": 105
            },
            {
                "spd": 85
            }
        ],
        "height": 0.8,
        "weight": 8.5,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 192
        },
        "types": [
            "Grass"
        ]
    },
    {
        "name": "Yanma",
        "abilities": [
            "Speed Boost",
            "Compound Eyes",
            "Frisk"
        ],
        "stats": [
            {
                "hp": 65
            },
            {
                "atk": 65
            },
            {
                "def": 45
            },
            {
                "spa": 75
            },
            {
                "spd": 45
            }
        ],
        "height": 1.2,
        "weight": 38,
        "formats": [
            "NFE"
        ],
        "oob": {
            "dex_number": 193
        },
        "types": [
            "Bug",
            "Flying"
        ]
    },
    {
        "name": "Wooper",
        "abilities": [
            "Damp",
            "Water Absorb",
            "Unaware"
        ],
        "stats": [
            {
                "hp": 55
            },
            {
                "atk": 45
            },
            {
                "def": 45
            },
            {
                "spa": 25
            },
            {
                "spd": 25
            }
        ],
        "height": 0.4,
        "weight": 8.5,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 194
        },
        "types": [
            "Water",
            "Ground"
        ]
    },
    {
        "name": "Quagsire",
        "abilities": [
            "Damp",
            "Water Absorb",
            "Unaware"
        ],
        "stats": [
            {
                "hp": 95
            },
            {
                "atk": 85
            },
            {
                "def": 85
            },
            {
                "spa": 65
            },
            {
                "spd": 65
            }
        ],
        "height": 1.4,
        "weight": 75,
        "formats": [
            "RU"
        ],
        "oob": {
            "dex_number": 195
        },
        "types": [
            "Water",
            "Ground"
        ]
    },
    {
        "name": "Espeon",
        "abilities": [
            "Synchronize",
            "Magic Bounce"
        ],
        "stats": [
            {
                "hp": 65
            },
            {
                "atk": 65
            },
            {
                "def": 60
            },
            {
                "spa": 130
            },
            {
                "spd": 95
            }
        ],
        "height": 0.9,
        "weight": 26.5,
        "formats": [
            "OU"
        ],
        "oob": {
            "dex_number": 196
        },
        "types": [
            "Psychic"
        ]
    },
    {
        "name": "Umbreon",
        "abilities": [
            "Synchronize",
            "Inner Focus"
        ],
        "stats": [
            {
                "hp": 95
            },
            {
                "atk": 65
            },
            {
                "def": 110
            },
            {
                "spa": 60
            },
            {
                "spd": 130
            }
        ],
        "height": 1,
        "weight": 27,
        "formats": [
            "UU"
        ],
        "oob": {
            "dex_number": 197
        },
        "types": [
            "Dark"
        ]
    },
    {
        "name": "Murkrow",
        "abilities": [
            "Insomnia",
            "Super Luck",
            "Prankster"
        ],
        "stats": [
            {
                "hp": 60
            },
            {
                "atk": 85
            },
            {
                "def": 42
            },
            {
                "spa": 85
            },
            {
                "spd": 42
            }
        ],
        "height": 0.5,
        "weight": 2.1,
        "formats": [
            "PU"
        ],
        "oob": {
            "dex_number": 198
        },
        "types": [
            "Dark",
            "Flying"
        ]
    },
    {
        "name": "Slowking",
        "abilities": [
            "Oblivious",
            "Own Tempo",
            "Regenerator"
        ],
        "stats": [
            {
                "hp": 95
            },
            {
                "atk": 75
            },
            {
                "def": 80
            },
            {
                "spa": 100
            },
            {
                "spd": 110
            }
        ],
        "height": 2,
        "weight": 79.5,
        "formats": [
            "RU"
        ],
        "oob": {
            "dex_number": 199
        },
        "types": [
            "Water",
            "Psychic"
        ]
    },
    {
        "name": "Ivysaur",
        "abilities": [
            "Overgrow",
            "Chlorophyll"
        ],
        "stats": [
            {
                "hp": 60
            },
            {
                "atk": 62
            },
            {
                "def": 63
            },
            {
                "spa": 80
            },
            {
                "spd": 80
            }
        ],
        "height": 1,
        "weight": 13,
        "formats": [
            "NFE"
        ],
        "oob": {
            "dex_number": 2
        },
        "types": [
            "Grass",
            "Poison"
        ]
    },
    {
        "name": "Raticate",
        "abilities": [
            "Run Away",
            "Guts",
            "Hustle"
        ],
        "stats": [
            {
                "hp": 55
            },
            {
                "atk": 81
            },
            {
                "def": 60
            },
            {
                "spa": 50
            },
            {
                "spd": 70
            }
        ],
        "height": 0.7,
        "weight": 18.5,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 20
        },
        "types": [
            "Normal"
        ]
    },
    {
        "name": "Misdreavus",
        "abilities": [
            "Levitate"
        ],
        "stats": [
            {
                "hp": 60
            },
            {
                "atk": 60
            },
            {
                "def": 60
            },
            {
                "spa": 85
            },
            {
                "spd": 85
            }
        ],
        "height": 0.7,
        "weight": 1,
        "formats": [
            "NU"
        ],
        "oob": {
            "dex_number": 200
        },
        "types": [
            "Ghost"
        ]
    },
    {
        "name": "Unown",
        "abilities": [
            "Levitate"
        ],
        "stats": [
            {
                "hp": 48
            },
            {
                "atk": 72
            },
            {
                "def": 48
            },
            {
                "spa": 72
            },
            {
                "spd": 48
            }
        ],
        "height": 0.5,
        "weight": 5,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 201
        },
        "types": [
            "Psychic"
        ]
    },
    {
        "name": "Wobbuffet",
        "abilities": [
            "Shadow Tag",
            "Telepathy"
        ],
        "stats": [
            {
                "hp": 190
            },
            {
                "atk": 33
            },
            {
                "def": 58
            },
            {
                "spa": 33
            },
            {
                "spd": 58
            }
        ],
        "height": 1.3,
        "weight": 28.5,
        "formats": [
            "UUBL"
        ],
        "oob": {
            "dex_number": 202
        },
        "types": [
            "Psychic"
        ]
    },
    {
        "name": "Girafarig",
        "abilities": [
            "Inner Focus",
            "Early Bird",
            "Sap Sipper"
        ],
        "stats": [
            {
                "hp": 70
            },
            {
                "atk": 80
            },
            {
                "def": 65
            },
            {
                "spa": 90
            },
            {
                "spd": 65
            }
        ],
        "height": 1.5,
        "weight": 41.5,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 203
        },
        "types": [
            "Normal",
            "Psychic"
        ]
    },
    {
        "name": "Pineco",
        "abilities": [
            "Sturdy",
            "Overcoat"
        ],
        "stats": [
            {
                "hp": 50
            },
            {
                "atk": 65
            },
            {
                "def": 90
            },
            {
                "spa": 35
            },
            {
                "spd": 35
            }
        ],
        "height": 0.6,
        "weight": 7.2,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 204
        },
        "types": [
            "Bug"
        ]
    },
    {
        "name": "Forretress",
        "abilities": [
            "Sturdy",
            "Overcoat"
        ],
        "stats": [
            {
                "hp": 75
            },
            {
                "atk": 90
            },
            {
                "def": 140
            },
            {
                "spa": 60
            },
            {
                "spd": 60
            }
        ],
        "height": 1.2,
        "weight": 125.8,
        "formats": [
            "OU"
        ],
        "oob": {
            "dex_number": 205
        },
        "types": [
            "Bug",
            "Steel"
        ]
    },
    {
        "name": "Dunsparce",
        "abilities": [
            "Serene Grace",
            "Run Away",
            "Rattled"
        ],
        "stats": [
            {
                "hp": 100
            },
            {
                "atk": 70
            },
            {
                "def": 70
            },
            {
                "spa": 65
            },
            {
                "spd": 65
            }
        ],
        "height": 1.5,
        "weight": 14,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 206
        },
        "types": [
            "Normal"
        ]
    },
    {
        "name": "Gligar",
        "abilities": [
            "Hyper Cutter",
            "Sand Veil",
            "Immunity"
        ],
        "stats": [
            {
                "hp": 65
            },
            {
                "atk": 75
            },
            {
                "def": 105
            },
            {
                "spa": 35
            },
            {
                "spd": 65
            }
        ],
        "height": 1.1,
        "weight": 64.8,
        "formats": [
            "UU"
        ],
        "oob": {
            "dex_number": 207
        },
        "types": [
            "Ground",
            "Flying"
        ]
    },
    {
        "name": "Steelix",
        "abilities": [
            "Rock Head",
            "Sturdy",
            "Sheer Force"
        ],
        "stats": [
            {
                "hp": 75
            },
            {
                "atk": 85
            },
            {
                "def": 200
            },
            {
                "spa": 55
            },
            {
                "spd": 65
            }
        ],
        "height": 9.2,
        "weight": 400,
        "formats": [
            "RU"
        ],
        "oob": {
            "dex_number": 208
        },
        "types": [
            "Steel",
            "Ground"
        ]
    },
    {
        "name": "Snubbull",
        "abilities": [
            "Intimidate",
            "Run Away",
            "Rattled"
        ],
        "stats": [
            {
                "hp": 60
            },
            {
                "atk": 80
            },
            {
                "def": 50
            },
            {
                "spa": 40
            },
            {
                "spd": 40
            }
        ],
        "height": 0.6,
        "weight": 7.8,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 209
        },
        "types": [
            "Normal"
        ]
    },
    {
        "name": "Spearow",
        "abilities": [
            "Keen Eye",
            "Sniper"
        ],
        "stats": [
            {
                "hp": 40
            },
            {
                "atk": 60
            },
            {
                "def": 30
            },
            {
                "spa": 31
            },
            {
                "spd": 31
            }
        ],
        "height": 0.3,
        "weight": 2,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 21
        },
        "types": [
            "Normal",
            "Flying"
        ]
    },
    {
        "name": "Granbull",
        "abilities": [
            "Intimidate",
            "Quick Feet",
            "Rattled"
        ],
        "stats": [
            {
                "hp": 90
            },
            {
                "atk": 120
            },
            {
                "def": 75
            },
            {
                "spa": 60
            },
            {
                "spd": 60
            }
        ],
        "height": 1.4,
        "weight": 48.7,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 210
        },
        "types": [
            "Normal"
        ]
    },
    {
        "name": "Qwilfish",
        "abilities": [
            "Poison Point",
            "Swift Swim",
            "Intimidate"
        ],
        "stats": [
            {
                "hp": 65
            },
            {
                "atk": 95
            },
            {
                "def": 75
            },
            {
                "spa": 55
            },
            {
                "spd": 55
            }
        ],
        "height": 0.5,
        "weight": 3.9,
        "formats": [
            "RU"
        ],
        "oob": {
            "dex_number": 211
        },
        "types": [
            "Water",
            "Poison"
        ]
    },
    {
        "name": "Scizor",
        "abilities": [
            "Swarm",
            "Technician",
            "Light Metal"
        ],
        "stats": [
            {
                "hp": 70
            },
            {
                "atk": 130
            },
            {
                "def": 100
            },
            {
                "spa": 55
            },
            {
                "spd": 80
            }
        ],
        "height": 1.8,
        "weight": 118,
        "formats": [
            "OU"
        ],
        "oob": {
            "dex_number": 212
        },
        "types": [
            "Bug",
            "Steel"
        ]
    },
    {
        "name": "Shuckle",
        "abilities": [
            "Sturdy",
            "Gluttony",
            "Contrary"
        ],
        "stats": [
            {
                "hp": 20
            },
            {
                "atk": 10
            },
            {
                "def": 230
            },
            {
                "spa": 10
            },
            {
                "spd": 230
            }
        ],
        "height": 0.6,
        "weight": 20.5,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 213
        },
        "types": [
            "Bug",
            "Rock"
        ]
    },
    {
        "name": "Heracross",
        "abilities": [
            "Swarm",
            "Guts",
            "Moxie"
        ],
        "stats": [
            {
                "hp": 80
            },
            {
                "atk": 125
            },
            {
                "def": 75
            },
            {
                "spa": 40
            },
            {
                "spd": 95
            }
        ],
        "height": 1.5,
        "weight": 54,
        "formats": [
            "UU"
        ],
        "oob": {
            "dex_number": 214
        },
        "types": [
            "Bug",
            "Fighting"
        ]
    },
    {
        "name": "Sneasel",
        "abilities": [
            "Inner Focus",
            "Keen Eye",
            "Pickpocket"
        ],
        "stats": [
            {
                "hp": 55
            },
            {
                "atk": 95
            },
            {
                "def": 55
            },
            {
                "spa": 35
            },
            {
                "spd": 75
            }
        ],
        "height": 0.9,
        "weight": 28,
        "formats": [
            "PU"
        ],
        "oob": {
            "dex_number": 215
        },
        "types": [
            "Dark",
            "Ice"
        ]
    },
    {
        "name": "Teddiursa",
        "abilities": [
            "Pickup",
            "Quick Feet",
            "Honey Gather"
        ],
        "stats": [
            {
                "hp": 60
            },
            {
                "atk": 80
            },
            {
                "def": 50
            },
            {
                "spa": 50
            },
            {
                "spd": 50
            }
        ],
        "height": 0.6,
        "weight": 8.8,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 216
        },
        "types": [
            "Normal"
        ]
    },
    {
        "name": "Ursaring",
        "abilities": [
            "Guts",
            "Quick Feet",
            "Unnerve"
        ],
        "stats": [
            {
                "hp": 90
            },
            {
                "atk": 130
            },
            {
                "def": 75
            },
            {
                "spa": 75
            },
            {
                "spd": 75
            }
        ],
        "height": 1.8,
        "weight": 125.8,
        "formats": [
            "PU"
        ],
        "oob": {
            "dex_number": 217
        },
        "types": [
            "Normal"
        ]
    },
    {
        "name": "Slugma",
        "abilities": [
            "Magma Armor",
            "Flame Body",
            "Weak Armor"
        ],
        "stats": [
            {
                "hp": 40
            },
            {
                "atk": 40
            },
            {
                "def": 40
            },
            {
                "spa": 70
            },
            {
                "spd": 40
            }
        ],
        "height": 0.7,
        "weight": 35,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 218
        },
        "types": [
            "Fire"
        ]
    },
    {
        "name": "Magcargo",
        "abilities": [
            "Magma Armor",
            "Flame Body",
            "Weak Armor"
        ],
        "stats": [
            {
                "hp": 50
            },
            {
                "atk": 50
            },
            {
                "def": 120
            },
            {
                "spa": 80
            },
            {
                "spd": 80
            }
        ],
        "height": 0.8,
        "weight": 55,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 219
        },
        "types": [
            "Fire",
            "Rock"
        ]
    },
    {
        "name": "Fearow",
        "abilities": [
            "Keen Eye",
            "Sniper"
        ],
        "stats": [
            {
                "hp": 65
            },
            {
                "atk": 90
            },
            {
                "def": 65
            },
            {
                "spa": 61
            },
            {
                "spd": 61
            }
        ],
        "height": 1.2,
        "weight": 38,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 22
        },
        "types": [
            "Normal",
            "Flying"
        ]
    },
    {
        "name": "Swinub",
        "abilities": [
            "Oblivious",
            "Snow Cloak",
            "Thick Fat"
        ],
        "stats": [
            {
                "hp": 50
            },
            {
                "atk": 50
            },
            {
                "def": 40
            },
            {
                "spa": 30
            },
            {
                "spd": 30
            }
        ],
        "height": 0.4,
        "weight": 6.5,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 220
        },
        "types": [
            "Ice",
            "Ground"
        ]
    },
    {
        "name": "Piloswine",
        "abilities": [
            "Oblivious",
            "Snow Cloak",
            "Thick Fat"
        ],
        "stats": [
            {
                "hp": 100
            },
            {
                "atk": 100
            },
            {
                "def": 80
            },
            {
                "spa": 60
            },
            {
                "spd": 60
            }
        ],
        "height": 1.1,
        "weight": 55.8,
        "formats": [
            "NU"
        ],
        "oob": {
            "dex_number": 221
        },
        "types": [
            "Ice",
            "Ground"
        ]
    },
    {
        "name": "Corsola",
        "abilities": [
            "Hustle",
            "Natural Cure",
            "Regenerator"
        ],
        "stats": [
            {
                "hp": 55
            },
            {
                "atk": 55
            },
            {
                "def": 85
            },
            {
                "spa": 65
            },
            {
                "spd": 85
            }
        ],
        "height": 0.6,
        "weight": 5,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 222
        },
        "types": [
            "Water",
            "Rock"
        ]
    },
    {
        "name": "Remoraid",
        "abilities": [
            "Hustle",
            "Sniper",
            "Moody"
        ],
        "stats": [
            {
                "hp": 35
            },
            {
                "atk": 65
            },
            {
                "def": 35
            },
            {
                "spa": 65
            },
            {
                "spd": 35
            }
        ],
        "height": 0.6,
        "weight": 12,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 223
        },
        "types": [
            "Water"
        ]
    },
    {
        "name": "Octillery",
        "abilities": [
            "Suction Cups",
            "Sniper",
            "Moody"
        ],
        "stats": [
            {
                "hp": 75
            },
            {
                "atk": 105
            },
            {
                "def": 75
            },
            {
                "spa": 105
            },
            {
                "spd": 75
            }
        ],
        "height": 0.9,
        "weight": 28.5,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 224
        },
        "types": [
            "Water"
        ]
    },
    {
        "name": "Delibird",
        "abilities": [
            "Vital Spirit",
            "Hustle",
            "Insomnia"
        ],
        "stats": [
            {
                "hp": 45
            },
            {
                "atk": 55
            },
            {
                "def": 45
            },
            {
                "spa": 65
            },
            {
                "spd": 45
            }
        ],
        "height": 0.9,
        "weight": 16,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 225
        },
        "types": [
            "Ice",
            "Flying"
        ]
    },
    {
        "name": "Mantine",
        "abilities": [
            "Swift Swim",
            "Water Absorb",
            "Water Veil"
        ],
        "stats": [
            {
                "hp": 65
            },
            {
                "atk": 40
            },
            {
                "def": 70
            },
            {
                "spa": 80
            },
            {
                "spd": 140
            }
        ],
        "height": 2.1,
        "weight": 220,
        "formats": [
            "PU"
        ],
        "oob": {
            "dex_number": 226
        },
        "types": [
            "Water",
            "Flying"
        ]
    },
    {
        "name": "Skarmory",
        "abilities": [
            "Keen Eye",
            "Sturdy",
            "Weak Armor"
        ],
        "stats": [
            {
                "hp": 65
            },
            {
                "atk": 80
            },
            {
                "def": 140
            },
            {
                "spa": 40
            },
            {
                "spd": 70
            }
        ],
        "height": 1.7,
        "weight": 50.5,
        "formats": [
            "OU"
        ],
        "oob": {
            "dex_number": 227
        },
        "types": [
            "Steel",
            "Flying"
        ]
    },
    {
        "name": "Houndour",
        "abilities": [
            "Early Bird",
            "Flash Fire",
            "Unnerve"
        ],
        "stats": [
            {
                "hp": 45
            },
            {
                "atk": 60
            },
            {
                "def": 30
            },
            {
                "spa": 80
            },
            {
                "spd": 50
            }
        ],
        "height": 0.6,
        "weight": 10.8,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 228
        },
        "types": [
            "Dark",
            "Fire"
        ]
    },
    {
        "name": "Houndoom",
        "abilities": [
            "Early Bird",
            "Flash Fire",
            "Unnerve"
        ],
        "stats": [
            {
                "hp": 75
            },
            {
                "atk": 90
            },
            {
                "def": 50
            },
            {
                "spa": 110
            },
            {
                "spd": 80
            }
        ],
        "height": 1.4,
        "weight": 35,
        "formats": [
            "UU"
        ],
        "oob": {
            "dex_number": 229
        },
        "types": [
            "Dark",
            "Fire"
        ]
    },
    {
        "name": "Ekans",
        "abilities": [
            "Intimidate",
            "Shed Skin",
            "Unnerve"
        ],
        "stats": [
            {
                "hp": 35
            },
            {
                "atk": 60
            },
            {
                "def": 44
            },
            {
                "spa": 40
            },
            {
                "spd": 54
            }
        ],
        "height": 2,
        "weight": 6.9,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 23
        },
        "types": [
            "Poison"
        ]
    },
    {
        "name": "Kingdra",
        "abilities": [
            "Swift Swim",
            "Sniper",
            "Damp"
        ],
        "stats": [
            {
                "hp": 75
            },
            {
                "atk": 95
            },
            {
                "def": 95
            },
            {
                "spa": 95
            },
            {
                "spd": 95
            }
        ],
        "height": 1.8,
        "weight": 152,
        "formats": [
            "UU"
        ],
        "oob": {
            "dex_number": 230
        },
        "types": [
            "Water",
            "Dragon"
        ]
    },
    {
        "name": "Phanpy",
        "abilities": [
            "Pickup",
            "Sand Veil"
        ],
        "stats": [
            {
                "hp": 90
            },
            {
                "atk": 60
            },
            {
                "def": 60
            },
            {
                "spa": 40
            },
            {
                "spd": 40
            }
        ],
        "height": 0.5,
        "weight": 33.5,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 231
        },
        "types": [
            "Ground"
        ]
    },
    {
        "name": "Donphan",
        "abilities": [
            "Sturdy",
            "Sand Veil"
        ],
        "stats": [
            {
                "hp": 90
            },
            {
                "atk": 120
            },
            {
                "def": 120
            },
            {
                "spa": 60
            },
            {
                "spd": 60
            }
        ],
        "height": 1.1,
        "weight": 120,
        "formats": [
            "OU"
        ],
        "oob": {
            "dex_number": 232
        },
        "types": [
            "Ground"
        ]
    },
    {
        "name": "Porygon2",
        "abilities": [
            "Trace",
            "Download",
            "Analytic"
        ],
        "stats": [
            {
                "hp": 85
            },
            {
                "atk": 80
            },
            {
                "def": 90
            },
            {
                "spa": 105
            },
            {
                "spd": 95
            }
        ],
        "height": 0.6,
        "weight": 32.5,
        "formats": [
            "UU"
        ],
        "oob": {
            "dex_number": 233
        },
        "types": [
            "Normal"
        ]
    },
    {
        "name": "Stantler",
        "abilities": [
            "Intimidate",
            "Frisk",
            "Sap Sipper"
        ],
        "stats": [
            {
                "hp": 73
            },
            {
                "atk": 95
            },
            {
                "def": 62
            },
            {
                "spa": 85
            },
            {
                "spd": 65
            }
        ],
        "height": 1.4,
        "weight": 71.2,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 234
        },
        "types": [
            "Normal"
        ]
    },
    {
        "name": "Smeargle",
        "abilities": [
            "Own Tempo",
            "Technician",
            "Moody"
        ],
        "stats": [
            {
                "hp": 55
            },
            {
                "atk": 20
            },
            {
                "def": 35
            },
            {
                "spa": 20
            },
            {
                "spd": 45
            }
        ],
        "height": 1.2,
        "weight": 58,
        "formats": [
            "RU"
        ],
        "oob": {
            "dex_number": 235
        },
        "types": [
            "Normal"
        ]
    },
    {
        "name": "Tyrogue",
        "abilities": [
            "Guts",
            "Steadfast",
            "Vital Spirit"
        ],
        "stats": [
            {
                "hp": 35
            },
            {
                "atk": 35
            },
            {
                "def": 35
            },
            {
                "spa": 35
            },
            {
                "spd": 35
            }
        ],
        "height": 0.7,
        "weight": 21,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 236
        },
        "types": [
            "Fighting"
        ]
    },
    {
        "name": "Hitmontop",
        "abilities": [
            "Intimidate",
            "Technician",
            "Steadfast"
        ],
        "stats": [
            {
                "hp": 50
            },
            {
                "atk": 95
            },
            {
                "def": 95
            },
            {
                "spa": 35
            },
            {
                "spd": 110
            }
        ],
        "height": 1.4,
        "weight": 48,
        "formats": [
            "UU"
        ],
        "oob": {
            "dex_number": 237
        },
        "types": [
            "Fighting"
        ]
    },
    {
        "name": "Smoochum",
        "abilities": [
            "Oblivious",
            "Forewarn",
            "Hydration"
        ],
        "stats": [
            {
                "hp": 45
            },
            {
                "atk": 30
            },
            {
                "def": 15
            },
            {
                "spa": 85
            },
            {
                "spd": 65
            }
        ],
        "height": 0.4,
        "weight": 6,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 238
        },
        "types": [
            "Ice",
            "Psychic"
        ]
    },
    {
        "name": "Elekid",
        "abilities": [
            "Static",
            "Vital Spirit"
        ],
        "stats": [
            {
                "hp": 45
            },
            {
                "atk": 63
            },
            {
                "def": 37
            },
            {
                "spa": 65
            },
            {
                "spd": 55
            }
        ],
        "height": 0.6,
        "weight": 23.5,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 239
        },
        "types": [
            "Electric"
        ]
    },
    {
        "name": "Arbok",
        "abilities": [
            "Intimidate",
            "Shed Skin",
            "Unnerve"
        ],
        "stats": [
            {
                "hp": 60
            },
            {
                "atk": 85
            },
            {
                "def": 69
            },
            {
                "spa": 65
            },
            {
                "spd": 79
            }
        ],
        "height": 3.5,
        "weight": 65,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 24
        },
        "types": [
            "Poison"
        ]
    },
    {
        "name": "Magby",
        "abilities": [
            "Flame Body",
            "Vital Spirit"
        ],
        "stats": [
            {
                "hp": 45
            },
            {
                "atk": 75
            },
            {
                "def": 37
            },
            {
                "spa": 70
            },
            {
                "spd": 55
            }
        ],
        "height": 0.7,
        "weight": 21.4,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 240
        },
        "types": [
            "Fire"
        ]
    },
    {
        "name": "Miltank",
        "abilities": [
            "Thick Fat",
            "Scrappy",
            "Sap Sipper"
        ],
        "stats": [
            {
                "hp": 95
            },
            {
                "atk": 80
            },
            {
                "def": 105
            },
            {
                "spa": 40
            },
            {
                "spd": 70
            }
        ],
        "height": 1.2,
        "weight": 75.5,
        "formats": [
            "NU"
        ],
        "oob": {
            "dex_number": 241
        },
        "types": [
            "Normal"
        ]
    },
    {
        "name": "Blissey",
        "abilities": [
            "Natural Cure",
            "Serene Grace",
            "Healer"
        ],
        "stats": [
            {
                "hp": 255
            },
            {
                "atk": 10
            },
            {
                "def": 10
            },
            {
                "spa": 75
            },
            {
                "spd": 135
            }
        ],
        "height": 1.5,
        "weight": 46.8,
        "formats": [
            "OU"
        ],
        "oob": {
            "dex_number": 242
        },
        "types": [
            "Normal"
        ]
    },
    {
        "name": "Raikou",
        "abilities": [
            "Pressure",
            "Volt Absorb"
        ],
        "stats": [
            {
                "hp": 90
            },
            {
                "atk": 85
            },
            {
                "def": 75
            },
            {
                "spa": 115
            },
            {
                "spd": 100
            }
        ],
        "height": 1.9,
        "weight": 178,
        "formats": [
            "UU"
        ],
        "oob": {
            "dex_number": 243
        },
        "types": [
            "Electric"
        ]
    },
    {
        "name": "Entei",
        "abilities": [
            "Pressure",
            "Flash Fire"
        ],
        "stats": [
            {
                "hp": 115
            },
            {
                "atk": 115
            },
            {
                "def": 85
            },
            {
                "spa": 90
            },
            {
                "spd": 75
            }
        ],
        "height": 2.1,
        "weight": 198,
        "formats": [
            "RU"
        ],
        "oob": {
            "dex_number": 244
        },
        "types": [
            "Fire"
        ]
    },
    {
        "name": "Suicune",
        "abilities": [
            "Pressure",
            "Water Absorb"
        ],
        "stats": [
            {
                "hp": 100
            },
            {
                "atk": 75
            },
            {
                "def": 115
            },
            {
                "spa": 90
            },
            {
                "spd": 115
            }
        ],
        "height": 2,
        "weight": 187,
        "formats": [
            "UU"
        ],
        "oob": {
            "dex_number": 245
        },
        "types": [
            "Water"
        ]
    },
    {
        "name": "Larvitar",
        "abilities": [
            "Guts",
            "Sand Veil"
        ],
        "stats": [
            {
                "hp": 50
            },
            {
                "atk": 64
            },
            {
                "def": 50
            },
            {
                "spa": 45
            },
            {
                "spd": 50
            }
        ],
        "height": 0.6,
        "weight": 72,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 246
        },
        "types": [
            "Rock",
            "Ground"
        ]
    },
    {
        "name": "Pupitar",
        "abilities": [
            "Shed Skin"
        ],
        "stats": [
            {
                "hp": 70
            },
            {
                "atk": 84
            },
            {
                "def": 70
            },
            {
                "spa": 65
            },
            {
                "spd": 70
            }
        ],
        "height": 1.2,
        "weight": 152,
        "formats": [
            "NFE"
        ],
        "oob": {
            "dex_number": 247
        },
        "types": [
            "Rock",
            "Ground"
        ]
    },
    {
        "name": "Tyranitar",
        "abilities": [
            "Sand Stream",
            "Unnerve"
        ],
        "stats": [
            {
                "hp": 100
            },
            {
                "atk": 134
            },
            {
                "def": 110
            },
            {
                "spa": 95
            },
            {
                "spd": 100
            }
        ],
        "height": 2,
        "weight": 202,
        "formats": [
            "OU"
        ],
        "oob": {
            "dex_number": 248
        },
        "types": [
            "Rock",
            "Dark"
        ]
    },
    {
        "name": "Lugia",
        "abilities": [
            "Pressure",
            "Multiscale"
        ],
        "stats": [
            {
                "hp": 106
            },
            {
                "atk": 90
            },
            {
                "def": 130
            },
            {
                "spa": 90
            },
            {
                "spd": 154
            }
        ],
        "height": 5.2,
        "weight": 216,
        "formats": [
            "Uber"
        ],
        "oob": {
            "dex_number": 249
        },
        "types": [
            "Psychic",
            "Flying"
        ]
    },
    {
        "name": "Pikachu",
        "abilities": [
            "Static",
            "Lightning Rod"
        ],
        "stats": [
            {
                "hp": 35
            },
            {
                "atk": 55
            },
            {
                "def": 30
            },
            {
                "spa": 50
            },
            {
                "spd": 40
            }
        ],
        "height": 0.4,
        "weight": 6,
        "formats": [
            "NFE"
        ],
        "oob": {
            "dex_number": 25
        },
        "types": [
            "Electric"
        ]
    },
    {
        "name": "Ho-Oh",
        "abilities": [
            "Pressure",
            "Regenerator"
        ],
        "stats": [
            {
                "hp": 106
            },
            {
                "atk": 130
            },
            {
                "def": 90
            },
            {
                "spa": 110
            },
            {
                "spd": 154
            }
        ],
        "height": 3.8,
        "weight": 199,
        "formats": [
            "Uber"
        ],
        "oob": {
            "dex_number": 250
        },
        "types": [
            "Fire",
            "Flying"
        ]
    },
    {
        "name": "Celebi",
        "abilities": [
            "Natural Cure"
        ],
        "stats": [
            {
                "hp": 100
            },
            {
                "atk": 100
            },
            {
                "def": 100
            },
            {
                "spa": 100
            },
            {
                "spd": 100
            }
        ],
        "height": 0.6,
        "weight": 5,
        "formats": [
            "OU"
        ],
        "oob": {
            "dex_number": 251
        },
        "types": [
            "Psychic",
            "Grass"
        ]
    },
    {
        "name": "Treecko",
        "abilities": [
            "Overgrow",
            "Unburden"
        ],
        "stats": [
            {
                "hp": 40
            },
            {
                "atk": 45
            },
            {
                "def": 35
            },
            {
                "spa": 65
            },
            {
                "spd": 55
            }
        ],
        "height": 0.5,
        "weight": 5,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 252
        },
        "types": [
            "Grass"
        ]
    },
    {
        "name": "Grovyle",
        "abilities": [
            "Overgrow",
            "Unburden"
        ],
        "stats": [
            {
                "hp": 50
            },
            {
                "atk": 65
            },
            {
                "def": 45
            },
            {
                "spa": 85
            },
            {
                "spd": 65
            }
        ],
        "height": 0.9,
        "weight": 21.6,
        "formats": [
            "NFE"
        ],
        "oob": {
            "dex_number": 253
        },
        "types": [
            "Grass"
        ]
    },
    {
        "name": "Sceptile",
        "abilities": [
            "Overgrow",
            "Unburden"
        ],
        "stats": [
            {
                "hp": 70
            },
            {
                "atk": 85
            },
            {
                "def": 65
            },
            {
                "spa": 105
            },
            {
                "spd": 85
            }
        ],
        "height": 1.7,
        "weight": 52.2,
        "formats": [
            "RU"
        ],
        "oob": {
            "dex_number": 254
        },
        "types": [
            "Grass"
        ]
    },
    {
        "name": "Torchic",
        "abilities": [
            "Blaze",
            "Speed Boost"
        ],
        "stats": [
            {
                "hp": 45
            },
            {
                "atk": 60
            },
            {
                "def": 40
            },
            {
                "spa": 70
            },
            {
                "spd": 50
            }
        ],
        "height": 0.4,
        "weight": 2.5,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 255
        },
        "types": [
            "Fire"
        ]
    },
    {
        "name": "Combusken",
        "abilities": [
            "Blaze",
            "Speed Boost"
        ],
        "stats": [
            {
                "hp": 60
            },
            {
                "atk": 85
            },
            {
                "def": 60
            },
            {
                "spa": 85
            },
            {
                "spd": 60
            }
        ],
        "height": 0.9,
        "weight": 19.5,
        "formats": [
            "PUBL"
        ],
        "oob": {
            "dex_number": 256
        },
        "types": [
            "Fire",
            "Fighting"
        ]
    },
    {
        "name": "Blaziken",
        "abilities": [
            "Blaze",
            "Speed Boost"
        ],
        "stats": [
            {
                "hp": 80
            },
            {
                "atk": 120
            },
            {
                "def": 70
            },
            {
                "spa": 110
            },
            {
                "spd": 70
            }
        ],
        "height": 1.9,
        "weight": 52,
        "formats": [
            "Uber"
        ],
        "oob": {
            "dex_number": 257
        },
        "types": [
            "Fire",
            "Fighting"
        ]
    },
    {
        "name": "Mudkip",
        "abilities": [
            "Torrent",
            "Damp"
        ],
        "stats": [
            {
                "hp": 50
            },
            {
                "atk": 70
            },
            {
                "def": 50
            },
            {
                "spa": 50
            },
            {
                "spd": 50
            }
        ],
        "height": 0.4,
        "weight": 7.6,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 258
        },
        "types": [
            "Water"
        ]
    },
    {
        "name": "Marshtomp",
        "abilities": [
            "Torrent",
            "Damp"
        ],
        "stats": [
            {
                "hp": 70
            },
            {
                "atk": 85
            },
            {
                "def": 70
            },
            {
                "spa": 60
            },
            {
                "spd": 70
            }
        ],
        "height": 0.7,
        "weight": 28,
        "formats": [
            "NFE"
        ],
        "oob": {
            "dex_number": 259
        },
        "types": [
            "Water",
            "Ground"
        ]
    },
    {
        "name": "Raichu",
        "abilities": [
            "Static",
            "Lightning Rod"
        ],
        "stats": [
            {
                "hp": 60
            },
            {
                "atk": 90
            },
            {
                "def": 55
            },
            {
                "spa": 90
            },
            {
                "spd": 80
            }
        ],
        "height": 0.8,
        "weight": 30,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 26
        },
        "types": [
            "Electric"
        ]
    },
    {
        "name": "Swampert",
        "abilities": [
            "Torrent",
            "Damp"
        ],
        "stats": [
            {
                "hp": 100
            },
            {
                "atk": 110
            },
            {
                "def": 90
            },
            {
                "spa": 85
            },
            {
                "spd": 90
            }
        ],
        "height": 1.5,
        "weight": 81.9,
        "formats": [
            "UU"
        ],
        "oob": {
            "dex_number": 260
        },
        "types": [
            "Water",
            "Ground"
        ]
    },
    {
        "name": "Poochyena",
        "abilities": [
            "Run Away",
            "Quick Feet",
            "Rattled"
        ],
        "stats": [
            {
                "hp": 35
            },
            {
                "atk": 55
            },
            {
                "def": 35
            },
            {
                "spa": 30
            },
            {
                "spd": 30
            }
        ],
        "height": 0.5,
        "weight": 13.6,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 261
        },
        "types": [
            "Dark"
        ]
    },
    {
        "name": "Mightyena",
        "abilities": [
            "Intimidate",
            "Quick Feet",
            "Moxie"
        ],
        "stats": [
            {
                "hp": 70
            },
            {
                "atk": 90
            },
            {
                "def": 70
            },
            {
                "spa": 60
            },
            {
                "spd": 60
            }
        ],
        "height": 1,
        "weight": 37,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 262
        },
        "types": [
            "Dark"
        ]
    },
    {
        "name": "Zigzagoon",
        "abilities": [
            "Pickup",
            "Gluttony",
            "Quick Feet"
        ],
        "stats": [
            {
                "hp": 38
            },
            {
                "atk": 30
            },
            {
                "def": 41
            },
            {
                "spa": 30
            },
            {
                "spd": 41
            }
        ],
        "height": 0.4,
        "weight": 17.5,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 263
        },
        "types": [
            "Normal"
        ]
    },
    {
        "name": "Linoone",
        "abilities": [
            "Pickup",
            "Gluttony",
            "Quick Feet"
        ],
        "stats": [
            {
                "hp": 78
            },
            {
                "atk": 70
            },
            {
                "def": 61
            },
            {
                "spa": 50
            },
            {
                "spd": 61
            }
        ],
        "height": 0.5,
        "weight": 32.5,
        "formats": [
            "PUBL"
        ],
        "oob": {
            "dex_number": 264
        },
        "types": [
            "Normal"
        ]
    },
    {
        "name": "Wurmple",
        "abilities": [
            "Shield Dust",
            "Run Away"
        ],
        "stats": [
            {
                "hp": 45
            },
            {
                "atk": 45
            },
            {
                "def": 35
            },
            {
                "spa": 20
            },
            {
                "spd": 30
            }
        ],
        "height": 0.3,
        "weight": 3.6,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 265
        },
        "types": [
            "Bug"
        ]
    },
    {
        "name": "Silcoon",
        "abilities": [
            "Shed Skin"
        ],
        "stats": [
            {
                "hp": 50
            },
            {
                "atk": 35
            },
            {
                "def": 55
            },
            {
                "spa": 25
            },
            {
                "spd": 25
            }
        ],
        "height": 0.6,
        "weight": 10,
        "formats": [
            "NFE"
        ],
        "oob": {
            "dex_number": 266
        },
        "types": [
            "Bug"
        ]
    },
    {
        "name": "Beautifly",
        "abilities": [
            "Swarm",
            "Rivalry"
        ],
        "stats": [
            {
                "hp": 60
            },
            {
                "atk": 70
            },
            {
                "def": 50
            },
            {
                "spa": 90
            },
            {
                "spd": 50
            }
        ],
        "height": 1,
        "weight": 28.4,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 267
        },
        "types": [
            "Bug",
            "Flying"
        ]
    },
    {
        "name": "Cascoon",
        "abilities": [
            "Shed Skin"
        ],
        "stats": [
            {
                "hp": 50
            },
            {
                "atk": 35
            },
            {
                "def": 55
            },
            {
                "spa": 25
            },
            {
                "spd": 25
            }
        ],
        "height": 0.7,
        "weight": 11.5,
        "formats": [
            "NFE"
        ],
        "oob": {
            "dex_number": 268
        },
        "types": [
            "Bug"
        ]
    },
    {
        "name": "Dustox",
        "abilities": [
            "Shield Dust",
            "Compound Eyes"
        ],
        "stats": [
            {
                "hp": 60
            },
            {
                "atk": 50
            },
            {
                "def": 70
            },
            {
                "spa": 50
            },
            {
                "spd": 90
            }
        ],
        "height": 1.2,
        "weight": 31.6,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 269
        },
        "types": [
            "Bug",
            "Poison"
        ]
    },
    {
        "name": "Sandshrew",
        "abilities": [
            "Sand Veil",
            "Sand Rush"
        ],
        "stats": [
            {
                "hp": 50
            },
            {
                "atk": 75
            },
            {
                "def": 85
            },
            {
                "spa": 20
            },
            {
                "spd": 30
            }
        ],
        "height": 0.6,
        "weight": 12,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 27
        },
        "types": [
            "Ground"
        ]
    },
    {
        "name": "Lotad",
        "abilities": [
            "Swift Swim",
            "Rain Dish",
            "Own Tempo"
        ],
        "stats": [
            {
                "hp": 40
            },
            {
                "atk": 30
            },
            {
                "def": 30
            },
            {
                "spa": 40
            },
            {
                "spd": 50
            }
        ],
        "height": 0.5,
        "weight": 2.6,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 270
        },
        "types": [
            "Water",
            "Grass"
        ]
    },
    {
        "name": "Lombre",
        "abilities": [
            "Swift Swim",
            "Rain Dish",
            "Own Tempo"
        ],
        "stats": [
            {
                "hp": 60
            },
            {
                "atk": 50
            },
            {
                "def": 50
            },
            {
                "spa": 60
            },
            {
                "spd": 70
            }
        ],
        "height": 1.2,
        "weight": 32.5,
        "formats": [
            "NFE"
        ],
        "oob": {
            "dex_number": 271
        },
        "types": [
            "Water",
            "Grass"
        ]
    },
    {
        "name": "Ludicolo",
        "abilities": [
            "Swift Swim",
            "Rain Dish",
            "Own Tempo"
        ],
        "stats": [
            {
                "hp": 80
            },
            {
                "atk": 70
            },
            {
                "def": 70
            },
            {
                "spa": 90
            },
            {
                "spd": 100
            }
        ],
        "height": 1.5,
        "weight": 55,
        "formats": [
            "NU"
        ],
        "oob": {
            "dex_number": 272
        },
        "types": [
            "Water",
            "Grass"
        ]
    },
    {
        "name": "Seedot",
        "abilities": [
            "Chlorophyll",
            "Early Bird",
            "Pickpocket"
        ],
        "stats": [
            {
                "hp": 40
            },
            {
                "atk": 40
            },
            {
                "def": 50
            },
            {
                "spa": 30
            },
            {
                "spd": 30
            }
        ],
        "height": 0.5,
        "weight": 4,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 273
        },
        "types": [
            "Grass"
        ]
    },
    {
        "name": "Nuzleaf",
        "abilities": [
            "Chlorophyll",
            "Early Bird",
            "Pickpocket"
        ],
        "stats": [
            {
                "hp": 70
            },
            {
                "atk": 70
            },
            {
                "def": 40
            },
            {
                "spa": 60
            },
            {
                "spd": 40
            }
        ],
        "height": 1,
        "weight": 28,
        "formats": [
            "NFE"
        ],
        "oob": {
            "dex_number": 274
        },
        "types": [
            "Grass",
            "Dark"
        ]
    },
    {
        "name": "Shiftry",
        "abilities": [
            "Chlorophyll",
            "Early Bird",
            "Pickpocket"
        ],
        "stats": [
            {
                "hp": 90
            },
            {
                "atk": 100
            },
            {
                "def": 60
            },
            {
                "spa": 90
            },
            {
                "spd": 60
            }
        ],
        "height": 1.3,
        "weight": 59.6,
        "formats": [
            "PU"
        ],
        "oob": {
            "dex_number": 275
        },
        "types": [
            "Grass",
            "Dark"
        ]
    },
    {
        "name": "Taillow",
        "abilities": [
            "Guts",
            "Scrappy"
        ],
        "stats": [
            {
                "hp": 40
            },
            {
                "atk": 55
            },
            {
                "def": 30
            },
            {
                "spa": 30
            },
            {
                "spd": 30
            }
        ],
        "height": 0.3,
        "weight": 2.3,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 276
        },
        "types": [
            "Normal",
            "Flying"
        ]
    },
    {
        "name": "Swellow",
        "abilities": [
            "Guts",
            "Scrappy"
        ],
        "stats": [
            {
                "hp": 60
            },
            {
                "atk": 85
            },
            {
                "def": 60
            },
            {
                "spa": 50
            },
            {
                "spd": 50
            }
        ],
        "height": 0.7,
        "weight": 19.8,
        "formats": [
            "NU"
        ],
        "oob": {
            "dex_number": 277
        },
        "types": [
            "Normal",
            "Flying"
        ]
    },
    {
        "name": "Wingull",
        "abilities": [
            "Keen Eye",
            "Rain Dish"
        ],
        "stats": [
            {
                "hp": 40
            },
            {
                "atk": 30
            },
            {
                "def": 30
            },
            {
                "spa": 55
            },
            {
                "spd": 30
            }
        ],
        "height": 0.6,
        "weight": 9.5,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 278
        },
        "types": [
            "Water",
            "Flying"
        ]
    },
    {
        "name": "Pelipper",
        "abilities": [
            "Keen Eye",
            "Rain Dish"
        ],
        "stats": [
            {
                "hp": 60
            },
            {
                "atk": 50
            },
            {
                "def": 100
            },
            {
                "spa": 85
            },
            {
                "spd": 70
            }
        ],
        "height": 1.2,
        "weight": 28,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 279
        },
        "types": [
            "Water",
            "Flying"
        ]
    },
    {
        "name": "Sandslash",
        "abilities": [
            "Sand Veil",
            "Sand Rush"
        ],
        "stats": [
            {
                "hp": 75
            },
            {
                "atk": 100
            },
            {
                "def": 110
            },
            {
                "spa": 45
            },
            {
                "spd": 55
            }
        ],
        "height": 1,
        "weight": 29.5,
        "formats": [
            "RU"
        ],
        "oob": {
            "dex_number": 28
        },
        "types": [
            "Ground"
        ]
    },
    {
        "name": "Ralts",
        "abilities": [
            "Synchronize",
            "Trace",
            "Telepathy"
        ],
        "stats": [
            {
                "hp": 28
            },
            {
                "atk": 25
            },
            {
                "def": 25
            },
            {
                "spa": 45
            },
            {
                "spd": 35
            }
        ],
        "height": 0.4,
        "weight": 6.6,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 280
        },
        "types": [
            "Psychic"
        ]
    },
    {
        "name": "Kirlia",
        "abilities": [
            "Synchronize",
            "Trace",
            "Telepathy"
        ],
        "stats": [
            {
                "hp": 38
            },
            {
                "atk": 35
            },
            {
                "def": 35
            },
            {
                "spa": 65
            },
            {
                "spd": 55
            }
        ],
        "height": 0.8,
        "weight": 20.2,
        "formats": [
            "NFE"
        ],
        "oob": {
            "dex_number": 281
        },
        "types": [
            "Psychic"
        ]
    },
    {
        "name": "Gardevoir",
        "abilities": [
            "Synchronize",
            "Trace",
            "Telepathy"
        ],
        "stats": [
            {
                "hp": 68
            },
            {
                "atk": 65
            },
            {
                "def": 65
            },
            {
                "spa": 125
            },
            {
                "spd": 115
            }
        ],
        "height": 1.6,
        "weight": 48.4,
        "formats": [
            "NU"
        ],
        "oob": {
            "dex_number": 282
        },
        "types": [
            "Psychic"
        ]
    },
    {
        "name": "Surskit",
        "abilities": [
            "Swift Swim",
            "Rain Dish"
        ],
        "stats": [
            {
                "hp": 40
            },
            {
                "atk": 30
            },
            {
                "def": 32
            },
            {
                "spa": 50
            },
            {
                "spd": 52
            }
        ],
        "height": 0.5,
        "weight": 1.7,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 283
        },
        "types": [
            "Bug",
            "Water"
        ]
    },
    {
        "name": "Masquerain",
        "abilities": [
            "Intimidate",
            "Unnerve"
        ],
        "stats": [
            {
                "hp": 70
            },
            {
                "atk": 60
            },
            {
                "def": 62
            },
            {
                "spa": 80
            },
            {
                "spd": 82
            }
        ],
        "height": 0.8,
        "weight": 3.6,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 284
        },
        "types": [
            "Bug",
            "Flying"
        ]
    },
    {
        "name": "Shroomish",
        "abilities": [
            "Effect Spore",
            "Poison Heal",
            "Quick Feet"
        ],
        "stats": [
            {
                "hp": 60
            },
            {
                "atk": 40
            },
            {
                "def": 60
            },
            {
                "spa": 40
            },
            {
                "spd": 60
            }
        ],
        "height": 0.4,
        "weight": 4.5,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 285
        },
        "types": [
            "Grass"
        ]
    },
    {
        "name": "Breloom",
        "abilities": [
            "Effect Spore",
            "Poison Heal",
            "Technician"
        ],
        "stats": [
            {
                "hp": 60
            },
            {
                "atk": 130
            },
            {
                "def": 80
            },
            {
                "spa": 60
            },
            {
                "spd": 60
            }
        ],
        "height": 1.2,
        "weight": 39.2,
        "formats": [
            "OU"
        ],
        "oob": {
            "dex_number": 286
        },
        "types": [
            "Grass",
            "Fighting"
        ]
    },
    {
        "name": "Slakoth",
        "abilities": [
            "Truant"
        ],
        "stats": [
            {
                "hp": 60
            },
            {
                "atk": 60
            },
            {
                "def": 60
            },
            {
                "spa": 35
            },
            {
                "spd": 35
            }
        ],
        "height": 0.8,
        "weight": 24,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 287
        },
        "types": [
            "Normal"
        ]
    },
    {
        "name": "Vigoroth",
        "abilities": [
            "Vital Spirit"
        ],
        "stats": [
            {
                "hp": 80
            },
            {
                "atk": 80
            },
            {
                "def": 80
            },
            {
                "spa": 55
            },
            {
                "spd": 55
            }
        ],
        "height": 1.4,
        "weight": 46.5,
        "formats": [
            "PUBL"
        ],
        "oob": {
            "dex_number": 288
        },
        "types": [
            "Normal"
        ]
    },
    {
        "name": "Slaking",
        "abilities": [
            "Truant"
        ],
        "stats": [
            {
                "hp": 150
            },
            {
                "atk": 160
            },
            {
                "def": 100
            },
            {
                "spa": 95
            },
            {
                "spd": 65
            }
        ],
        "height": 2,
        "weight": 130.5,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 289
        },
        "types": [
            "Normal"
        ]
    },
    {
        "name": "Nidoran-F",
        "abilities": [
            "Poison Point",
            "Rivalry",
            "Hustle"
        ],
        "stats": [
            {
                "hp": 55
            },
            {
                "atk": 47
            },
            {
                "def": 52
            },
            {
                "spa": 40
            },
            {
                "spd": 40
            }
        ],
        "height": 0.4,
        "weight": 7,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 29
        },
        "types": [
            "Poison"
        ]
    },
    {
        "name": "Nincada",
        "abilities": [
            "Compound Eyes",
            "Run Away"
        ],
        "stats": [
            {
                "hp": 31
            },
            {
                "atk": 45
            },
            {
                "def": 90
            },
            {
                "spa": 30
            },
            {
                "spd": 30
            }
        ],
        "height": 0.5,
        "weight": 5.5,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 290
        },
        "types": [
            "Bug",
            "Ground"
        ]
    },
    {
        "name": "Ninjask",
        "abilities": [
            "Speed Boost",
            "Infiltrator"
        ],
        "stats": [
            {
                "hp": 61
            },
            {
                "atk": 90
            },
            {
                "def": 45
            },
            {
                "spa": 50
            },
            {
                "spd": 50
            }
        ],
        "height": 0.8,
        "weight": 12,
        "formats": [
            "NU"
        ],
        "oob": {
            "dex_number": 291
        },
        "types": [
            "Bug",
            "Flying"
        ]
    },
    {
        "name": "Shedinja",
        "abilities": [
            "Wonder Guard"
        ],
        "stats": [
            {
                "hp": 1
            },
            {
                "atk": 90
            },
            {
                "def": 45
            },
            {
                "spa": 30
            },
            {
                "spd": 30
            }
        ],
        "height": 0.8,
        "weight": 1.2,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 292
        },
        "types": [
            "Bug",
            "Ghost"
        ]
    },
    {
        "name": "Whismur",
        "abilities": [
            "Soundproof",
            "Rattled"
        ],
        "stats": [
            {
                "hp": 64
            },
            {
                "atk": 51
            },
            {
                "def": 23
            },
            {
                "spa": 51
            },
            {
                "spd": 23
            }
        ],
        "height": 0.6,
        "weight": 16.3,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 293
        },
        "types": [
            "Normal"
        ]
    },
    {
        "name": "Loudred",
        "abilities": [
            "Soundproof",
            "Scrappy"
        ],
        "stats": [
            {
                "hp": 84
            },
            {
                "atk": 71
            },
            {
                "def": 43
            },
            {
                "spa": 71
            },
            {
                "spd": 43
            }
        ],
        "height": 1,
        "weight": 40.5,
        "formats": [
            "NFE"
        ],
        "oob": {
            "dex_number": 294
        },
        "types": [
            "Normal"
        ]
    },
    {
        "name": "Exploud",
        "abilities": [
            "Soundproof",
            "Scrappy"
        ],
        "stats": [
            {
                "hp": 104
            },
            {
                "atk": 91
            },
            {
                "def": 63
            },
            {
                "spa": 91
            },
            {
                "spd": 63
            }
        ],
        "height": 1.5,
        "weight": 84,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 295
        },
        "types": [
            "Normal"
        ]
    },
    {
        "name": "Makuhita",
        "abilities": [
            "Thick Fat",
            "Guts",
            "Sheer Force"
        ],
        "stats": [
            {
                "hp": 72
            },
            {
                "atk": 60
            },
            {
                "def": 30
            },
            {
                "spa": 20
            },
            {
                "spd": 30
            }
        ],
        "height": 1,
        "weight": 86.4,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 296
        },
        "types": [
            "Fighting"
        ]
    },
    {
        "name": "Hariyama",
        "abilities": [
            "Thick Fat",
            "Guts",
            "Sheer Force"
        ],
        "stats": [
            {
                "hp": 144
            },
            {
                "atk": 120
            },
            {
                "def": 60
            },
            {
                "spa": 40
            },
            {
                "spd": 60
            }
        ],
        "height": 2.3,
        "weight": 253.8,
        "formats": [
            "RU"
        ],
        "oob": {
            "dex_number": 297
        },
        "types": [
            "Fighting"
        ]
    },
    {
        "name": "Azurill",
        "abilities": [
            "Thick Fat",
            "Huge Power",
            "Sap Sipper"
        ],
        "stats": [
            {
                "hp": 50
            },
            {
                "atk": 20
            },
            {
                "def": 40
            },
            {
                "spa": 20
            },
            {
                "spd": 40
            }
        ],
        "height": 0.2,
        "weight": 2,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 298
        },
        "types": [
            "Normal"
        ]
    },
    {
        "name": "Nosepass",
        "abilities": [
            "Sturdy",
            "Magnet Pull",
            "Sand Force"
        ],
        "stats": [
            {
                "hp": 30
            },
            {
                "atk": 45
            },
            {
                "def": 135
            },
            {
                "spa": 45
            },
            {
                "spd": 90
            }
        ],
        "height": 1,
        "weight": 97,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 299
        },
        "types": [
            "Rock"
        ]
    },
    {
        "name": "Venusaur",
        "abilities": [
            "Overgrow",
            "Chlorophyll"
        ],
        "stats": [
            {
                "hp": 80
            },
            {
                "atk": 82
            },
            {
                "def": 83
            },
            {
                "spa": 100
            },
            {
                "spd": 100
            }
        ],
        "height": 2,
        "weight": 100,
        "formats": [
            "OU"
        ],
        "oob": {
            "dex_number": 3
        },
        "types": [
            "Grass",
            "Poison"
        ]
    },
    {
        "name": "Nidorina",
        "abilities": [
            "Poison Point",
            "Rivalry",
            "Hustle"
        ],
        "stats": [
            {
                "hp": 70
            },
            {
                "atk": 62
            },
            {
                "def": 67
            },
            {
                "spa": 55
            },
            {
                "spd": 55
            }
        ],
        "height": 0.8,
        "weight": 20,
        "formats": [
            "NFE"
        ],
        "oob": {
            "dex_number": 30
        },
        "types": [
            "Poison"
        ]
    },
    {
        "name": "Skitty",
        "abilities": [
            "Cute Charm",
            "Normalize",
            "Wonder Skin"
        ],
        "stats": [
            {
                "hp": 50
            },
            {
                "atk": 45
            },
            {
                "def": 45
            },
            {
                "spa": 35
            },
            {
                "spd": 35
            }
        ],
        "height": 0.6,
        "weight": 11,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 300
        },
        "types": [
            "Normal"
        ]
    },
    {
        "name": "Delcatty",
        "abilities": [
            "Cute Charm",
            "Normalize",
            "Wonder Skin"
        ],
        "stats": [
            {
                "hp": 70
            },
            {
                "atk": 65
            },
            {
                "def": 65
            },
            {
                "spa": 55
            },
            {
                "spd": 55
            }
        ],
        "height": 1.1,
        "weight": 32.6,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 301
        },
        "types": [
            "Normal"
        ]
    },
    {
        "name": "Sableye",
        "abilities": [
            "Keen Eye",
            "Stall",
            "Prankster"
        ],
        "stats": [
            {
                "hp": 50
            },
            {
                "atk": 75
            },
            {
                "def": 75
            },
            {
                "spa": 65
            },
            {
                "spd": 65
            }
        ],
        "height": 0.5,
        "weight": 11,
        "formats": [
            "UU"
        ],
        "oob": {
            "dex_number": 302
        },
        "types": [
            "Dark",
            "Ghost"
        ]
    },
    {
        "name": "Mawile",
        "abilities": [
            "Hyper Cutter",
            "Intimidate",
            "Sheer Force"
        ],
        "stats": [
            {
                "hp": 50
            },
            {
                "atk": 85
            },
            {
                "def": 85
            },
            {
                "spa": 55
            },
            {
                "spd": 55
            }
        ],
        "height": 0.6,
        "weight": 11.5,
        "formats": [
            "PU"
        ],
        "oob": {
            "dex_number": 303
        },
        "types": [
            "Steel"
        ]
    },
    {
        "name": "Aron",
        "abilities": [
            "Sturdy",
            "Rock Head",
            "Heavy Metal"
        ],
        "stats": [
            {
                "hp": 50
            },
            {
                "atk": 70
            },
            {
                "def": 100
            },
            {
                "spa": 40
            },
            {
                "spd": 40
            }
        ],
        "height": 0.4,
        "weight": 60,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 304
        },
        "types": [
            "Steel",
            "Rock"
        ]
    },
    {
        "name": "Lairon",
        "abilities": [
            "Sturdy",
            "Rock Head",
            "Heavy Metal"
        ],
        "stats": [
            {
                "hp": 60
            },
            {
                "atk": 90
            },
            {
                "def": 140
            },
            {
                "spa": 50
            },
            {
                "spd": 50
            }
        ],
        "height": 0.9,
        "weight": 120,
        "formats": [
            "NFE"
        ],
        "oob": {
            "dex_number": 305
        },
        "types": [
            "Steel",
            "Rock"
        ]
    },
    {
        "name": "Aggron",
        "abilities": [
            "Sturdy",
            "Rock Head",
            "Heavy Metal"
        ],
        "stats": [
            {
                "hp": 70
            },
            {
                "atk": 110
            },
            {
                "def": 180
            },
            {
                "spa": 60
            },
            {
                "spd": 60
            }
        ],
        "height": 2.1,
        "weight": 360,
        "formats": [
            "RU"
        ],
        "oob": {
            "dex_number": 306
        },
        "types": [
            "Steel",
            "Rock"
        ]
    },
    {
        "name": "Meditite",
        "abilities": [
            "Pure Power",
            "Telepathy"
        ],
        "stats": [
            {
                "hp": 30
            },
            {
                "atk": 40
            },
            {
                "def": 55
            },
            {
                "spa": 40
            },
            {
                "spd": 55
            }
        ],
        "height": 0.6,
        "weight": 11.2,
        "formats": [
            "NFE"
        ],
        "oob": {
            "dex_number": 307
        },
        "types": [
            "Fighting",
            "Psychic"
        ]
    },
    {
        "name": "Medicham",
        "abilities": [
            "Pure Power",
            "Telepathy"
        ],
        "stats": [
            {
                "hp": 60
            },
            {
                "atk": 60
            },
            {
                "def": 75
            },
            {
                "spa": 60
            },
            {
                "spd": 75
            }
        ],
        "height": 1.3,
        "weight": 31.5,
        "formats": [
            "RU"
        ],
        "oob": {
            "dex_number": 308
        },
        "types": [
            "Fighting",
            "Psychic"
        ]
    },
    {
        "name": "Electrike",
        "abilities": [
            "Static",
            "Lightning Rod",
            "Minus"
        ],
        "stats": [
            {
                "hp": 40
            },
            {
                "atk": 45
            },
            {
                "def": 40
            },
            {
                "spa": 65
            },
            {
                "spd": 40
            }
        ],
        "height": 0.6,
        "weight": 15.2,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 309
        },
        "types": [
            "Electric"
        ]
    },
    {
        "name": "Nidoqueen",
        "abilities": [
            "Poison Point",
            "Rivalry",
            "Sheer Force"
        ],
        "stats": [
            {
                "hp": 90
            },
            {
                "atk": 82
            },
            {
                "def": 87
            },
            {
                "spa": 75
            },
            {
                "spd": 85
            }
        ],
        "height": 1.3,
        "weight": 60,
        "formats": [
            "UU"
        ],
        "oob": {
            "dex_number": 31
        },
        "types": [
            "Poison",
            "Ground"
        ]
    },
    {
        "name": "Manectric",
        "abilities": [
            "Static",
            "Lightning Rod",
            "Minus"
        ],
        "stats": [
            {
                "hp": 70
            },
            {
                "atk": 75
            },
            {
                "def": 60
            },
            {
                "spa": 105
            },
            {
                "spd": 60
            }
        ],
        "height": 1.5,
        "weight": 40.2,
        "formats": [
            "RU"
        ],
        "oob": {
            "dex_number": 310
        },
        "types": [
            "Electric"
        ]
    },
    {
        "name": "Plusle",
        "abilities": [
            "Plus"
        ],
        "stats": [
            {
                "hp": 60
            },
            {
                "atk": 50
            },
            {
                "def": 40
            },
            {
                "spa": 85
            },
            {
                "spd": 75
            }
        ],
        "height": 0.4,
        "weight": 4.2,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 311
        },
        "types": [
            "Electric"
        ]
    },
    {
        "name": "Minun",
        "abilities": [
            "Minus"
        ],
        "stats": [
            {
                "hp": 60
            },
            {
                "atk": 40
            },
            {
                "def": 50
            },
            {
                "spa": 75
            },
            {
                "spd": 85
            }
        ],
        "height": 0.4,
        "weight": 4.2,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 312
        },
        "types": [
            "Electric"
        ]
    },
    {
        "name": "Volbeat",
        "abilities": [
            "Illuminate",
            "Swarm",
            "Prankster"
        ],
        "stats": [
            {
                "hp": 65
            },
            {
                "atk": 73
            },
            {
                "def": 55
            },
            {
                "spa": 47
            },
            {
                "spd": 75
            }
        ],
        "height": 0.7,
        "weight": 17.7,
        "formats": [
            "PU"
        ],
        "oob": {
            "dex_number": 313
        },
        "types": [
            "Bug"
        ]
    },
    {
        "name": "Illumise",
        "abilities": [
            "Oblivious",
            "Tinted Lens",
            "Prankster"
        ],
        "stats": [
            {
                "hp": 65
            },
            {
                "atk": 47
            },
            {
                "def": 55
            },
            {
                "spa": 73
            },
            {
                "spd": 75
            }
        ],
        "height": 0.6,
        "weight": 17.7,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 314
        },
        "types": [
            "Bug"
        ]
    },
    {
        "name": "Roselia",
        "abilities": [
            "Natural Cure",
            "Poison Point",
            "Leaf Guard"
        ],
        "stats": [
            {
                "hp": 50
            },
            {
                "atk": 60
            },
            {
                "def": 45
            },
            {
                "spa": 100
            },
            {
                "spd": 80
            }
        ],
        "height": 0.3,
        "weight": 2,
        "formats": [
            "NU"
        ],
        "oob": {
            "dex_number": 315
        },
        "types": [
            "Grass",
            "Poison"
        ]
    },
    {
        "name": "Gulpin",
        "abilities": [
            "Liquid Ooze",
            "Sticky Hold",
            "Gluttony"
        ],
        "stats": [
            {
                "hp": 70
            },
            {
                "atk": 43
            },
            {
                "def": 53
            },
            {
                "spa": 43
            },
            {
                "spd": 53
            }
        ],
        "height": 0.4,
        "weight": 10.3,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 316
        },
        "types": [
            "Poison"
        ]
    },
    {
        "name": "Swalot",
        "abilities": [
            "Liquid Ooze",
            "Sticky Hold",
            "Gluttony"
        ],
        "stats": [
            {
                "hp": 100
            },
            {
                "atk": 73
            },
            {
                "def": 83
            },
            {
                "spa": 73
            },
            {
                "spd": 83
            }
        ],
        "height": 1.7,
        "weight": 80,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 317
        },
        "types": [
            "Poison"
        ]
    },
    {
        "name": "Carvanha",
        "abilities": [
            "Rough Skin",
            "Speed Boost"
        ],
        "stats": [
            {
                "hp": 45
            },
            {
                "atk": 90
            },
            {
                "def": 20
            },
            {
                "spa": 65
            },
            {
                "spd": 20
            }
        ],
        "height": 0.8,
        "weight": 20.8,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 318
        },
        "types": [
            "Water",
            "Dark"
        ]
    },
    {
        "name": "Sharpedo",
        "abilities": [
            "Rough Skin",
            "Speed Boost"
        ],
        "stats": [
            {
                "hp": 70
            },
            {
                "atk": 120
            },
            {
                "def": 40
            },
            {
                "spa": 95
            },
            {
                "spd": 40
            }
        ],
        "height": 1.8,
        "weight": 88.8,
        "formats": [
            "UU"
        ],
        "oob": {
            "dex_number": 319
        },
        "types": [
            "Water",
            "Dark"
        ]
    },
    {
        "name": "Nidoran-M",
        "abilities": [
            "Poison Point",
            "Rivalry",
            "Hustle"
        ],
        "stats": [
            {
                "hp": 46
            },
            {
                "atk": 57
            },
            {
                "def": 40
            },
            {
                "spa": 40
            },
            {
                "spd": 40
            }
        ],
        "height": 0.5,
        "weight": 9,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 32
        },
        "types": [
            "Poison"
        ]
    },
    {
        "name": "Wailmer",
        "abilities": [
            "Water Veil",
            "Oblivious",
            "Pressure"
        ],
        "stats": [
            {
                "hp": 130
            },
            {
                "atk": 70
            },
            {
                "def": 35
            },
            {
                "spa": 70
            },
            {
                "spd": 35
            }
        ],
        "height": 2,
        "weight": 130,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 320
        },
        "types": [
            "Water"
        ]
    },
    {
        "name": "Wailord",
        "abilities": [
            "Water Veil",
            "Oblivious",
            "Pressure"
        ],
        "stats": [
            {
                "hp": 170
            },
            {
                "atk": 90
            },
            {
                "def": 45
            },
            {
                "spa": 90
            },
            {
                "spd": 45
            }
        ],
        "height": 14.5,
        "weight": 398,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 321
        },
        "types": [
            "Water"
        ]
    },
    {
        "name": "Numel",
        "abilities": [
            "Oblivious",
            "Simple",
            "Own Tempo"
        ],
        "stats": [
            {
                "hp": 60
            },
            {
                "atk": 60
            },
            {
                "def": 40
            },
            {
                "spa": 65
            },
            {
                "spd": 45
            }
        ],
        "height": 0.7,
        "weight": 24,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 322
        },
        "types": [
            "Fire",
            "Ground"
        ]
    },
    {
        "name": "Camerupt",
        "abilities": [
            "Magma Armor",
            "Solid Rock",
            "Anger Point"
        ],
        "stats": [
            {
                "hp": 70
            },
            {
                "atk": 100
            },
            {
                "def": 70
            },
            {
                "spa": 105
            },
            {
                "spd": 75
            }
        ],
        "height": 1.9,
        "weight": 220,
        "formats": [
            "NU"
        ],
        "oob": {
            "dex_number": 323
        },
        "types": [
            "Fire",
            "Ground"
        ]
    },
    {
        "name": "Torkoal",
        "abilities": [
            "White Smoke",
            "Shell Armor"
        ],
        "stats": [
            {
                "hp": 70
            },
            {
                "atk": 85
            },
            {
                "def": 140
            },
            {
                "spa": 85
            },
            {
                "spd": 70
            }
        ],
        "height": 0.5,
        "weight": 80.4,
        "formats": [
            "NU"
        ],
        "oob": {
            "dex_number": 324
        },
        "types": [
            "Fire"
        ]
    },
    {
        "name": "Spoink",
        "abilities": [
            "Thick Fat",
            "Own Tempo",
            "Gluttony"
        ],
        "stats": [
            {
                "hp": 60
            },
            {
                "atk": 25
            },
            {
                "def": 35
            },
            {
                "spa": 70
            },
            {
                "spd": 80
            }
        ],
        "height": 0.7,
        "weight": 30.6,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 325
        },
        "types": [
            "Psychic"
        ]
    },
    {
        "name": "Grumpig",
        "abilities": [
            "Thick Fat",
            "Own Tempo",
            "Gluttony"
        ],
        "stats": [
            {
                "hp": 80
            },
            {
                "atk": 45
            },
            {
                "def": 65
            },
            {
                "spa": 90
            },
            {
                "spd": 110
            }
        ],
        "height": 0.9,
        "weight": 71.5,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 326
        },
        "types": [
            "Psychic"
        ]
    },
    {
        "name": "Spinda",
        "abilities": [
            "Own Tempo",
            "Tangled Feet",
            "Contrary"
        ],
        "stats": [
            {
                "hp": 60
            },
            {
                "atk": 60
            },
            {
                "def": 60
            },
            {
                "spa": 60
            },
            {
                "spd": 60
            }
        ],
        "height": 1.1,
        "weight": 5,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 327
        },
        "types": [
            "Normal"
        ]
    },
    {
        "name": "Trapinch",
        "abilities": [
            "Hyper Cutter",
            "Arena Trap",
            "Sheer Force"
        ],
        "stats": [
            {
                "hp": 45
            },
            {
                "atk": 100
            },
            {
                "def": 45
            },
            {
                "spa": 45
            },
            {
                "spd": 45
            }
        ],
        "height": 0.7,
        "weight": 15,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 328
        },
        "types": [
            "Ground"
        ]
    },
    {
        "name": "Vibrava",
        "abilities": [
            "Levitate"
        ],
        "stats": [
            {
                "hp": 50
            },
            {
                "atk": 70
            },
            {
                "def": 50
            },
            {
                "spa": 50
            },
            {
                "spd": 50
            }
        ],
        "height": 1.1,
        "weight": 15.3,
        "formats": [
            "NFE"
        ],
        "oob": {
            "dex_number": 329
        },
        "types": [
            "Ground",
            "Dragon"
        ]
    },
    {
        "name": "Nidorino",
        "abilities": [
            "Poison Point",
            "Rivalry",
            "Hustle"
        ],
        "stats": [
            {
                "hp": 61
            },
            {
                "atk": 72
            },
            {
                "def": 57
            },
            {
                "spa": 55
            },
            {
                "spd": 55
            }
        ],
        "height": 0.9,
        "weight": 19.5,
        "formats": [
            "NFE"
        ],
        "oob": {
            "dex_number": 33
        },
        "types": [
            "Poison"
        ]
    },
    {
        "name": "Flygon",
        "abilities": [
            "Levitate"
        ],
        "stats": [
            {
                "hp": 80
            },
            {
                "atk": 100
            },
            {
                "def": 80
            },
            {
                "spa": 80
            },
            {
                "spd": 80
            }
        ],
        "height": 2,
        "weight": 82,
        "formats": [
            "UU"
        ],
        "oob": {
            "dex_number": 330
        },
        "types": [
            "Ground",
            "Dragon"
        ]
    },
    {
        "name": "Cacnea",
        "abilities": [
            "Sand Veil",
            "Water Absorb"
        ],
        "stats": [
            {
                "hp": 50
            },
            {
                "atk": 85
            },
            {
                "def": 40
            },
            {
                "spa": 85
            },
            {
                "spd": 40
            }
        ],
        "height": 0.4,
        "weight": 51.3,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 331
        },
        "types": [
            "Grass"
        ]
    },
    {
        "name": "Cacturne",
        "abilities": [
            "Sand Veil",
            "Water Absorb"
        ],
        "stats": [
            {
                "hp": 70
            },
            {
                "atk": 115
            },
            {
                "def": 60
            },
            {
                "spa": 115
            },
            {
                "spd": 60
            }
        ],
        "height": 1.3,
        "weight": 77.4,
        "formats": [
            "NU"
        ],
        "oob": {
            "dex_number": 332
        },
        "types": [
            "Grass",
            "Dark"
        ]
    },
    {
        "name": "Swablu",
        "abilities": [
            "Natural Cure",
            "Cloud Nine"
        ],
        "stats": [
            {
                "hp": 45
            },
            {
                "atk": 40
            },
            {
                "def": 60
            },
            {
                "spa": 40
            },
            {
                "spd": 75
            }
        ],
        "height": 0.4,
        "weight": 1.2,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 333
        },
        "types": [
            "Normal",
            "Flying"
        ]
    },
    {
        "name": "Altaria",
        "abilities": [
            "Natural Cure",
            "Cloud Nine"
        ],
        "stats": [
            {
                "hp": 75
            },
            {
                "atk": 70
            },
            {
                "def": 90
            },
            {
                "spa": 70
            },
            {
                "spd": 105
            }
        ],
        "height": 1.1,
        "weight": 20.6,
        "formats": [
            "NU"
        ],
        "oob": {
            "dex_number": 334
        },
        "types": [
            "Dragon",
            "Flying"
        ]
    },
    {
        "name": "Zangoose",
        "abilities": [
            "Immunity",
            "Toxic Boost"
        ],
        "stats": [
            {
                "hp": 73
            },
            {
                "atk": 115
            },
            {
                "def": 60
            },
            {
                "spa": 60
            },
            {
                "spd": 60
            }
        ],
        "height": 1.3,
        "weight": 40.3,
        "formats": [
            "NU"
        ],
        "oob": {
            "dex_number": 335
        },
        "types": [
            "Normal"
        ]
    },
    {
        "name": "Seviper",
        "abilities": [
            "Shed Skin",
            "Infiltrator"
        ],
        "stats": [
            {
                "hp": 73
            },
            {
                "atk": 100
            },
            {
                "def": 60
            },
            {
                "spa": 100
            },
            {
                "spd": 60
            }
        ],
        "height": 2.7,
        "weight": 52.5,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 336
        },
        "types": [
            "Poison"
        ]
    },
    {
        "name": "Lunatone",
        "abilities": [
            "Levitate"
        ],
        "stats": [
            {
                "hp": 70
            },
            {
                "atk": 55
            },
            {
                "def": 65
            },
            {
                "spa": 95
            },
            {
                "spd": 85
            }
        ],
        "height": 1,
        "weight": 168,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 337
        },
        "types": [
            "Rock",
            "Psychic"
        ]
    },
    {
        "name": "Solrock",
        "abilities": [
            "Levitate"
        ],
        "stats": [
            {
                "hp": 70
            },
            {
                "atk": 95
            },
            {
                "def": 85
            },
            {
                "spa": 55
            },
            {
                "spd": 65
            }
        ],
        "height": 1.2,
        "weight": 154,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 338
        },
        "types": [
            "Rock",
            "Psychic"
        ]
    },
    {
        "name": "Barboach",
        "abilities": [
            "Oblivious",
            "Anticipation",
            "Hydration"
        ],
        "stats": [
            {
                "hp": 50
            },
            {
                "atk": 48
            },
            {
                "def": 43
            },
            {
                "spa": 46
            },
            {
                "spd": 41
            }
        ],
        "height": 0.4,
        "weight": 1.9,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 339
        },
        "types": [
            "Water",
            "Ground"
        ]
    },
    {
        "name": "Nidoking",
        "abilities": [
            "Poison Point",
            "Rivalry",
            "Sheer Force"
        ],
        "stats": [
            {
                "hp": 81
            },
            {
                "atk": 92
            },
            {
                "def": 77
            },
            {
                "spa": 85
            },
            {
                "spd": 75
            }
        ],
        "height": 1.4,
        "weight": 62,
        "formats": [
            "UU"
        ],
        "oob": {
            "dex_number": 34
        },
        "types": [
            "Poison",
            "Ground"
        ]
    },
    {
        "name": "Whiscash",
        "abilities": [
            "Oblivious",
            "Anticipation",
            "Hydration"
        ],
        "stats": [
            {
                "hp": 110
            },
            {
                "atk": 78
            },
            {
                "def": 73
            },
            {
                "spa": 76
            },
            {
                "spd": 71
            }
        ],
        "height": 0.9,
        "weight": 23.6,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 340
        },
        "types": [
            "Water",
            "Ground"
        ]
    },
    {
        "name": "Corphish",
        "abilities": [
            "Hyper Cutter",
            "Shell Armor",
            "Adaptability"
        ],
        "stats": [
            {
                "hp": 43
            },
            {
                "atk": 80
            },
            {
                "def": 65
            },
            {
                "spa": 50
            },
            {
                "spd": 35
            }
        ],
        "height": 0.6,
        "weight": 11.5,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 341
        },
        "types": [
            "Water"
        ]
    },
    {
        "name": "Crawdaunt",
        "abilities": [
            "Hyper Cutter",
            "Shell Armor",
            "Adaptability"
        ],
        "stats": [
            {
                "hp": 63
            },
            {
                "atk": 120
            },
            {
                "def": 85
            },
            {
                "spa": 90
            },
            {
                "spd": 55
            }
        ],
        "height": 1.1,
        "weight": 32.8,
        "formats": [
            "RU"
        ],
        "oob": {
            "dex_number": 342
        },
        "types": [
            "Water",
            "Dark"
        ]
    },
    {
        "name": "Baltoy",
        "abilities": [
            "Levitate"
        ],
        "stats": [
            {
                "hp": 40
            },
            {
                "atk": 40
            },
            {
                "def": 55
            },
            {
                "spa": 40
            },
            {
                "spd": 70
            }
        ],
        "height": 0.5,
        "weight": 21.5,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 343
        },
        "types": [
            "Ground",
            "Psychic"
        ]
    },
    {
        "name": "Claydol",
        "abilities": [
            "Levitate"
        ],
        "stats": [
            {
                "hp": 60
            },
            {
                "atk": 70
            },
            {
                "def": 105
            },
            {
                "spa": 70
            },
            {
                "spd": 120
            }
        ],
        "height": 1.5,
        "weight": 108,
        "formats": [
            "UU"
        ],
        "oob": {
            "dex_number": 344
        },
        "types": [
            "Ground",
            "Psychic"
        ]
    },
    {
        "name": "Lileep",
        "abilities": [
            "Suction Cups",
            "Storm Drain"
        ],
        "stats": [
            {
                "hp": 66
            },
            {
                "atk": 41
            },
            {
                "def": 77
            },
            {
                "spa": 61
            },
            {
                "spd": 87
            }
        ],
        "height": 1,
        "weight": 23.8,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 345
        },
        "types": [
            "Rock",
            "Grass"
        ]
    },
    {
        "name": "Cradily",
        "abilities": [
            "Suction Cups",
            "Storm Drain"
        ],
        "stats": [
            {
                "hp": 86
            },
            {
                "atk": 81
            },
            {
                "def": 97
            },
            {
                "spa": 81
            },
            {
                "spd": 107
            }
        ],
        "height": 1.5,
        "weight": 60.4,
        "formats": [
            "NU"
        ],
        "oob": {
            "dex_number": 346
        },
        "types": [
            "Rock",
            "Grass"
        ]
    },
    {
        "name": "Anorith",
        "abilities": [
            "Battle Armor",
            "Swift Swim"
        ],
        "stats": [
            {
                "hp": 45
            },
            {
                "atk": 95
            },
            {
                "def": 50
            },
            {
                "spa": 40
            },
            {
                "spd": 50
            }
        ],
        "height": 0.7,
        "weight": 12.5,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 347
        },
        "types": [
            "Rock",
            "Bug"
        ]
    },
    {
        "name": "Armaldo",
        "abilities": [
            "Battle Armor",
            "Swift Swim"
        ],
        "stats": [
            {
                "hp": 75
            },
            {
                "atk": 125
            },
            {
                "def": 100
            },
            {
                "spa": 70
            },
            {
                "spd": 80
            }
        ],
        "height": 1.5,
        "weight": 68.2,
        "formats": [
            "NU"
        ],
        "oob": {
            "dex_number": 348
        },
        "types": [
            "Rock",
            "Bug"
        ]
    },
    {
        "name": "Feebas",
        "abilities": [
            "Swift Swim",
            "Adaptability"
        ],
        "stats": [
            {
                "hp": 20
            },
            {
                "atk": 15
            },
            {
                "def": 20
            },
            {
                "spa": 10
            },
            {
                "spd": 55
            }
        ],
        "height": 0.6,
        "weight": 7.4,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 349
        },
        "types": [
            "Water"
        ]
    },
    {
        "name": "Clefairy",
        "abilities": [
            "Cute Charm",
            "Magic Guard",
            "Friend Guard"
        ],
        "stats": [
            {
                "hp": 70
            },
            {
                "atk": 45
            },
            {
                "def": 48
            },
            {
                "spa": 60
            },
            {
                "spd": 65
            }
        ],
        "height": 0.6,
        "weight": 7.5,
        "formats": [
            "NFE"
        ],
        "oob": {
            "dex_number": 35
        },
        "types": [
            "Normal"
        ]
    },
    {
        "name": "Milotic",
        "abilities": [
            "Marvel Scale",
            "Cute Charm"
        ],
        "stats": [
            {
                "hp": 95
            },
            {
                "atk": 60
            },
            {
                "def": 79
            },
            {
                "spa": 100
            },
            {
                "spd": 125
            }
        ],
        "height": 6.2,
        "weight": 162,
        "formats": [
            "UU"
        ],
        "oob": {
            "dex_number": 350
        },
        "types": [
            "Water"
        ]
    },
    {
        "name": "Castform",
        "abilities": [
            "Forecast"
        ],
        "stats": [
            {
                "hp": 70
            },
            {
                "atk": 70
            },
            {
                "def": 70
            },
            {
                "spa": 70
            },
            {
                "spd": 70
            }
        ],
        "height": 0.3,
        "weight": 0.8,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 351
        },
        "types": [
            "Normal"
        ]
    },
    {
        "name": "Kecleon",
        "abilities": [
            "Color Change"
        ],
        "stats": [
            {
                "hp": 60
            },
            {
                "atk": 90
            },
            {
                "def": 70
            },
            {
                "spa": 60
            },
            {
                "spd": 120
            }
        ],
        "height": 1,
        "weight": 22,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 352
        },
        "types": [
            "Normal"
        ]
    },
    {
        "name": "Shuppet",
        "abilities": [
            "Insomnia",
            "Frisk",
            "Cursed Body"
        ],
        "stats": [
            {
                "hp": 44
            },
            {
                "atk": 75
            },
            {
                "def": 35
            },
            {
                "spa": 63
            },
            {
                "spd": 33
            }
        ],
        "height": 0.6,
        "weight": 2.3,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 353
        },
        "types": [
            "Ghost"
        ]
    },
    {
        "name": "Banette",
        "abilities": [
            "Insomnia",
            "Frisk",
            "Cursed Body"
        ],
        "stats": [
            {
                "hp": 64
            },
            {
                "atk": 115
            },
            {
                "def": 65
            },
            {
                "spa": 83
            },
            {
                "spd": 63
            }
        ],
        "height": 1.1,
        "weight": 12.5,
        "formats": [
            "PU"
        ],
        "oob": {
            "dex_number": 354
        },
        "types": [
            "Ghost"
        ]
    },
    {
        "name": "Duskull",
        "abilities": [
            "Levitate"
        ],
        "stats": [
            {
                "hp": 20
            },
            {
                "atk": 40
            },
            {
                "def": 90
            },
            {
                "spa": 30
            },
            {
                "spd": 90
            }
        ],
        "height": 0.8,
        "weight": 15,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 355
        },
        "types": [
            "Ghost"
        ]
    },
    {
        "name": "Dusclops",
        "abilities": [
            "Pressure"
        ],
        "stats": [
            {
                "hp": 40
            },
            {
                "atk": 70
            },
            {
                "def": 130
            },
            {
                "spa": 60
            },
            {
                "spd": 130
            }
        ],
        "height": 1.6,
        "weight": 30.6,
        "formats": [
            "UU"
        ],
        "oob": {
            "dex_number": 356
        },
        "types": [
            "Ghost"
        ]
    },
    {
        "name": "Tropius",
        "abilities": [
            "Chlorophyll",
            "Solar Power",
            "Harvest"
        ],
        "stats": [
            {
                "hp": 99
            },
            {
                "atk": 68
            },
            {
                "def": 83
            },
            {
                "spa": 72
            },
            {
                "spd": 87
            }
        ],
        "height": 2,
        "weight": 100,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 357
        },
        "types": [
            "Grass",
            "Flying"
        ]
    },
    {
        "name": "Chimecho",
        "abilities": [
            "Levitate"
        ],
        "stats": [
            {
                "hp": 65
            },
            {
                "atk": 50
            },
            {
                "def": 70
            },
            {
                "spa": 95
            },
            {
                "spd": 80
            }
        ],
        "height": 0.6,
        "weight": 1,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 358
        },
        "types": [
            "Psychic"
        ]
    },
    {
        "name": "Absol",
        "abilities": [
            "Pressure",
            "Super Luck",
            "Justified"
        ],
        "stats": [
            {
                "hp": 65
            },
            {
                "atk": 130
            },
            {
                "def": 60
            },
            {
                "spa": 75
            },
            {
                "spd": 60
            }
        ],
        "height": 1.2,
        "weight": 47,
        "formats": [
            "RU"
        ],
        "oob": {
            "dex_number": 359
        },
        "types": [
            "Dark"
        ]
    },
    {
        "name": "Clefable",
        "abilities": [
            "Cute Charm",
            "Magic Guard",
            "Unaware"
        ],
        "stats": [
            {
                "hp": 95
            },
            {
                "atk": 70
            },
            {
                "def": 73
            },
            {
                "spa": 85
            },
            {
                "spd": 90
            }
        ],
        "height": 1.3,
        "weight": 40,
        "formats": [
            "RU"
        ],
        "oob": {
            "dex_number": 36
        },
        "types": [
            "Normal"
        ]
    },
    {
        "name": "Wynaut",
        "abilities": [
            "Shadow Tag",
            "Telepathy"
        ],
        "stats": [
            {
                "hp": 95
            },
            {
                "atk": 23
            },
            {
                "def": 48
            },
            {
                "spa": 23
            },
            {
                "spd": 48
            }
        ],
        "height": 0.6,
        "weight": 14,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 360
        },
        "types": [
            "Psychic"
        ]
    },
    {
        "name": "Snorunt",
        "abilities": [
            "Inner Focus",
            "Ice Body",
            "Moody"
        ],
        "stats": [
            {
                "hp": 50
            },
            {
                "atk": 50
            },
            {
                "def": 50
            },
            {
                "spa": 50
            },
            {
                "spd": 50
            }
        ],
        "height": 0.7,
        "weight": 16.8,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 361
        },
        "types": [
            "Ice"
        ]
    },
    {
        "name": "Glalie",
        "abilities": [
            "Inner Focus",
            "Ice Body",
            "Moody"
        ],
        "stats": [
            {
                "hp": 80
            },
            {
                "atk": 80
            },
            {
                "def": 80
            },
            {
                "spa": 80
            },
            {
                "spd": 80
            }
        ],
        "height": 1.5,
        "weight": 256.5,
        "formats": [
            "ZUBL"
        ],
        "oob": {
            "dex_number": 362
        },
        "types": [
            "Ice"
        ]
    },
    {
        "name": "Spheal",
        "abilities": [
            "Thick Fat",
            "Ice Body",
            "Oblivious"
        ],
        "stats": [
            {
                "hp": 70
            },
            {
                "atk": 40
            },
            {
                "def": 50
            },
            {
                "spa": 55
            },
            {
                "spd": 50
            }
        ],
        "height": 0.8,
        "weight": 39.5,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 363
        },
        "types": [
            "Ice",
            "Water"
        ]
    },
    {
        "name": "Sealeo",
        "abilities": [
            "Thick Fat",
            "Ice Body",
            "Oblivious"
        ],
        "stats": [
            {
                "hp": 90
            },
            {
                "atk": 60
            },
            {
                "def": 70
            },
            {
                "spa": 75
            },
            {
                "spd": 70
            }
        ],
        "height": 1.1,
        "weight": 87.6,
        "formats": [
            "NFE"
        ],
        "oob": {
            "dex_number": 364
        },
        "types": [
            "Ice",
            "Water"
        ]
    },
    {
        "name": "Walrein",
        "abilities": [
            "Thick Fat",
            "Ice Body",
            "Oblivious"
        ],
        "stats": [
            {
                "hp": 110
            },
            {
                "atk": 80
            },
            {
                "def": 90
            },
            {
                "spa": 95
            },
            {
                "spd": 90
            }
        ],
        "height": 1.4,
        "weight": 150.6,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 365
        },
        "types": [
            "Ice",
            "Water"
        ]
    },
    {
        "name": "Clamperl",
        "abilities": [
            "Shell Armor",
            "Rattled"
        ],
        "stats": [
            {
                "hp": 35
            },
            {
                "atk": 64
            },
            {
                "def": 85
            },
            {
                "spa": 74
            },
            {
                "spd": 55
            }
        ],
        "height": 0.4,
        "weight": 52.5,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 366
        },
        "types": [
            "Water"
        ]
    },
    {
        "name": "Huntail",
        "abilities": [
            "Swift Swim",
            "Water Veil"
        ],
        "stats": [
            {
                "hp": 55
            },
            {
                "atk": 104
            },
            {
                "def": 105
            },
            {
                "spa": 94
            },
            {
                "spd": 75
            }
        ],
        "height": 1.7,
        "weight": 27,
        "formats": [
            "PU"
        ],
        "oob": {
            "dex_number": 367
        },
        "types": [
            "Water"
        ]
    },
    {
        "name": "Gorebyss",
        "abilities": [
            "Swift Swim",
            "Hydration"
        ],
        "stats": [
            {
                "hp": 55
            },
            {
                "atk": 84
            },
            {
                "def": 105
            },
            {
                "spa": 114
            },
            {
                "spd": 75
            }
        ],
        "height": 1.8,
        "weight": 22.6,
        "formats": [
            "NU"
        ],
        "oob": {
            "dex_number": 368
        },
        "types": [
            "Water"
        ]
    },
    {
        "name": "Relicanth",
        "abilities": [
            "Swift Swim",
            "Rock Head",
            "Sturdy"
        ],
        "stats": [
            {
                "hp": 100
            },
            {
                "atk": 90
            },
            {
                "def": 130
            },
            {
                "spa": 45
            },
            {
                "spd": 65
            }
        ],
        "height": 1,
        "weight": 23.4,
        "formats": [
            "PU"
        ],
        "oob": {
            "dex_number": 369
        },
        "types": [
            "Water",
            "Rock"
        ]
    },
    {
        "name": "Vulpix",
        "abilities": [
            "Flash Fire",
            "Drought"
        ],
        "stats": [
            {
                "hp": 38
            },
            {
                "atk": 41
            },
            {
                "def": 40
            },
            {
                "spa": 50
            },
            {
                "spd": 65
            }
        ],
        "height": 0.6,
        "weight": 9.9,
        "formats": [
            "NFE"
        ],
        "oob": {
            "dex_number": 37
        },
        "types": [
            "Fire"
        ]
    },
    {
        "name": "Luvdisc",
        "abilities": [
            "Swift Swim",
            "Hydration"
        ],
        "stats": [
            {
                "hp": 43
            },
            {
                "atk": 30
            },
            {
                "def": 55
            },
            {
                "spa": 40
            },
            {
                "spd": 65
            }
        ],
        "height": 0.6,
        "weight": 8.7,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 370
        },
        "types": [
            "Water"
        ]
    },
    {
        "name": "Bagon",
        "abilities": [
            "Rock Head",
            "Sheer Force"
        ],
        "stats": [
            {
                "hp": 45
            },
            {
                "atk": 75
            },
            {
                "def": 60
            },
            {
                "spa": 40
            },
            {
                "spd": 30
            }
        ],
        "height": 0.6,
        "weight": 42.1,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 371
        },
        "types": [
            "Dragon"
        ]
    },
    {
        "name": "Shelgon",
        "abilities": [
            "Rock Head",
            "Overcoat"
        ],
        "stats": [
            {
                "hp": 65
            },
            {
                "atk": 95
            },
            {
                "def": 100
            },
            {
                "spa": 60
            },
            {
                "spd": 50
            }
        ],
        "height": 1.1,
        "weight": 110.5,
        "formats": [
            "NFE"
        ],
        "oob": {
            "dex_number": 372
        },
        "types": [
            "Dragon"
        ]
    },
    {
        "name": "Salamence",
        "abilities": [
            "Intimidate",
            "Moxie"
        ],
        "stats": [
            {
                "hp": 95
            },
            {
                "atk": 135
            },
            {
                "def": 80
            },
            {
                "spa": 110
            },
            {
                "spd": 80
            }
        ],
        "height": 1.5,
        "weight": 102.6,
        "formats": [
            "OU"
        ],
        "oob": {
            "dex_number": 373
        },
        "types": [
            "Dragon",
            "Flying"
        ]
    },
    {
        "name": "Beldum",
        "abilities": [
            "Clear Body",
            "Light Metal"
        ],
        "stats": [
            {
                "hp": 40
            },
            {
                "atk": 55
            },
            {
                "def": 80
            },
            {
                "spa": 35
            },
            {
                "spd": 60
            }
        ],
        "height": 0.6,
        "weight": 95.2,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 374
        },
        "types": [
            "Steel",
            "Psychic"
        ]
    },
    {
        "name": "Metang",
        "abilities": [
            "Clear Body",
            "Light Metal"
        ],
        "stats": [
            {
                "hp": 60
            },
            {
                "atk": 75
            },
            {
                "def": 100
            },
            {
                "spa": 55
            },
            {
                "spd": 80
            }
        ],
        "height": 1.2,
        "weight": 202.5,
        "formats": [
            "NU"
        ],
        "oob": {
            "dex_number": 375
        },
        "types": [
            "Steel",
            "Psychic"
        ]
    },
    {
        "name": "Metagross",
        "abilities": [
            "Clear Body",
            "Light Metal"
        ],
        "stats": [
            {
                "hp": 80
            },
            {
                "atk": 135
            },
            {
                "def": 130
            },
            {
                "spa": 95
            },
            {
                "spd": 90
            }
        ],
        "height": 1.6,
        "weight": 550,
        "formats": [
            "OU"
        ],
        "oob": {
            "dex_number": 376
        },
        "types": [
            "Steel",
            "Psychic"
        ]
    },
    {
        "name": "Regirock",
        "abilities": [
            "Clear Body",
            "Sturdy"
        ],
        "stats": [
            {
                "hp": 80
            },
            {
                "atk": 100
            },
            {
                "def": 200
            },
            {
                "spa": 50
            },
            {
                "spd": 100
            }
        ],
        "height": 1.7,
        "weight": 230,
        "formats": [
            "NU"
        ],
        "oob": {
            "dex_number": 377
        },
        "types": [
            "Rock"
        ]
    },
    {
        "name": "Regice",
        "abilities": [
            "Clear Body",
            "Ice Body"
        ],
        "stats": [
            {
                "hp": 80
            },
            {
                "atk": 50
            },
            {
                "def": 100
            },
            {
                "spa": 100
            },
            {
                "spd": 200
            }
        ],
        "height": 1.8,
        "weight": 175,
        "formats": [
            "NU"
        ],
        "oob": {
            "dex_number": 378
        },
        "types": [
            "Ice"
        ]
    },
    {
        "name": "Registeel",
        "abilities": [
            "Clear Body",
            "Light Metal"
        ],
        "stats": [
            {
                "hp": 80
            },
            {
                "atk": 75
            },
            {
                "def": 150
            },
            {
                "spa": 75
            },
            {
                "spd": 150
            }
        ],
        "height": 1.9,
        "weight": 205,
        "formats": [
            "UU"
        ],
        "oob": {
            "dex_number": 379
        },
        "types": [
            "Steel"
        ]
    },
    {
        "name": "Ninetales",
        "abilities": [
            "Flash Fire",
            "Drought"
        ],
        "stats": [
            {
                "hp": 73
            },
            {
                "atk": 76
            },
            {
                "def": 75
            },
            {
                "spa": 81
            },
            {
                "spd": 100
            }
        ],
        "height": 1.1,
        "weight": 19.9,
        "formats": [
            "OU"
        ],
        "oob": {
            "dex_number": 38
        },
        "types": [
            "Fire"
        ]
    },
    {
        "name": "Latias",
        "abilities": [
            "Levitate"
        ],
        "stats": [
            {
                "hp": 80
            },
            {
                "atk": 80
            },
            {
                "def": 90
            },
            {
                "spa": 110
            },
            {
                "spd": 130
            }
        ],
        "height": 1.4,
        "weight": 40,
        "formats": [
            "OU"
        ],
        "oob": {
            "dex_number": 380
        },
        "types": [
            "Dragon",
            "Psychic"
        ]
    },
    {
        "name": "Latios",
        "abilities": [
            "Levitate"
        ],
        "stats": [
            {
                "hp": 80
            },
            {
                "atk": 90
            },
            {
                "def": 80
            },
            {
                "spa": 130
            },
            {
                "spd": 110
            }
        ],
        "height": 2,
        "weight": 60,
        "formats": [
            "OU"
        ],
        "oob": {
            "dex_number": 381
        },
        "types": [
            "Dragon",
            "Psychic"
        ]
    },
    {
        "name": "Kyogre",
        "abilities": [
            "Drizzle"
        ],
        "stats": [
            {
                "hp": 100
            },
            {
                "atk": 100
            },
            {
                "def": 90
            },
            {
                "spa": 150
            },
            {
                "spd": 140
            }
        ],
        "height": 4.5,
        "weight": 352,
        "formats": [
            "Uber"
        ],
        "oob": {
            "dex_number": 382
        },
        "types": [
            "Water"
        ]
    },
    {
        "name": "Groudon",
        "abilities": [
            "Drought"
        ],
        "stats": [
            {
                "hp": 100
            },
            {
                "atk": 150
            },
            {
                "def": 140
            },
            {
                "spa": 100
            },
            {
                "spd": 90
            }
        ],
        "height": 3.5,
        "weight": 950,
        "formats": [
            "Uber"
        ],
        "oob": {
            "dex_number": 383
        },
        "types": [
            "Ground"
        ]
    },
    {
        "name": "Rayquaza",
        "abilities": [
            "Air Lock"
        ],
        "stats": [
            {
                "hp": 105
            },
            {
                "atk": 150
            },
            {
                "def": 90
            },
            {
                "spa": 150
            },
            {
                "spd": 90
            }
        ],
        "height": 7,
        "weight": 206.5,
        "formats": [
            "Uber"
        ],
        "oob": {
            "dex_number": 384
        },
        "types": [
            "Dragon",
            "Flying"
        ]
    },
    {
        "name": "Jirachi",
        "abilities": [
            "Serene Grace"
        ],
        "stats": [
            {
                "hp": 100
            },
            {
                "atk": 100
            },
            {
                "def": 100
            },
            {
                "spa": 100
            },
            {
                "spd": 100
            }
        ],
        "height": 0.3,
        "weight": 1.1,
        "formats": [
            "OU"
        ],
        "oob": {
            "dex_number": 385
        },
        "types": [
            "Steel",
            "Psychic"
        ]
    },
    {
        "name": "Deoxys",
        "abilities": [
            "Pressure"
        ],
        "stats": [
            {
                "hp": 50
            },
            {
                "atk": 150
            },
            {
                "def": 50
            },
            {
                "spa": 150
            },
            {
                "spd": 50
            }
        ],
        "height": 1.7,
        "weight": 60.8,
        "formats": [
            "Uber"
        ],
        "oob": {
            "dex_number": 386
        },
        "types": [
            "Psychic"
        ]
    },
    {
        "name": "Deoxys-Attack",
        "abilities": [
            "Pressure"
        ],
        "stats": [
            {
                "hp": 50
            },
            {
                "atk": 180
            },
            {
                "def": 20
            },
            {
                "spa": 180
            },
            {
                "spd": 20
            }
        ],
        "height": 1.7,
        "weight": 60.8,
        "formats": [
            "Uber"
        ],
        "oob": {
            "dex_number": 386
        },
        "types": [
            "Psychic"
        ]
    },
    {
        "name": "Deoxys-Defense",
        "abilities": [
            "Pressure"
        ],
        "stats": [
            {
                "hp": 50
            },
            {
                "atk": 70
            },
            {
                "def": 160
            },
            {
                "spa": 70
            },
            {
                "spd": 160
            }
        ],
        "height": 1.7,
        "weight": 60.8,
        "formats": [
            "Uber"
        ],
        "oob": {
            "dex_number": 386
        },
        "types": [
            "Psychic"
        ]
    },
    {
        "name": "Deoxys-Speed",
        "abilities": [
            "Pressure"
        ],
        "stats": [
            {
                "hp": 50
            },
            {
                "atk": 95
            },
            {
                "def": 90
            },
            {
                "spa": 95
            },
            {
                "spd": 90
            }
        ],
        "height": 1.7,
        "weight": 60.8,
        "formats": [
            "Uber"
        ],
        "oob": {
            "dex_number": 386
        },
        "types": [
            "Psychic"
        ]
    },
    {
        "name": "Turtwig",
        "abilities": [
            "Overgrow",
            "Shell Armor"
        ],
        "stats": [
            {
                "hp": 55
            },
            {
                "atk": 68
            },
            {
                "def": 64
            },
            {
                "spa": 45
            },
            {
                "spd": 55
            }
        ],
        "height": 0.4,
        "weight": 10.2,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 387
        },
        "types": [
            "Grass"
        ]
    },
    {
        "name": "Grotle",
        "abilities": [
            "Overgrow",
            "Shell Armor"
        ],
        "stats": [
            {
                "hp": 75
            },
            {
                "atk": 89
            },
            {
                "def": 85
            },
            {
                "spa": 55
            },
            {
                "spd": 65
            }
        ],
        "height": 1.1,
        "weight": 97,
        "formats": [
            "NFE"
        ],
        "oob": {
            "dex_number": 388
        },
        "types": [
            "Grass"
        ]
    },
    {
        "name": "Torterra",
        "abilities": [
            "Overgrow",
            "Shell Armor"
        ],
        "stats": [
            {
                "hp": 95
            },
            {
                "atk": 109
            },
            {
                "def": 105
            },
            {
                "spa": 75
            },
            {
                "spd": 85
            }
        ],
        "height": 2.2,
        "weight": 310,
        "formats": [
            "PU"
        ],
        "oob": {
            "dex_number": 389
        },
        "types": [
            "Grass",
            "Ground"
        ]
    },
    {
        "name": "Jigglypuff",
        "abilities": [
            "Cute Charm",
            "Friend Guard"
        ],
        "stats": [
            {
                "hp": 115
            },
            {
                "atk": 45
            },
            {
                "def": 20
            },
            {
                "spa": 45
            },
            {
                "spd": 25
            }
        ],
        "height": 0.5,
        "weight": 5.5,
        "formats": [
            "NFE"
        ],
        "oob": {
            "dex_number": 39
        },
        "types": [
            "Normal"
        ]
    },
    {
        "name": "Chimchar",
        "abilities": [
            "Blaze",
            "Iron Fist"
        ],
        "stats": [
            {
                "hp": 44
            },
            {
                "atk": 58
            },
            {
                "def": 44
            },
            {
                "spa": 58
            },
            {
                "spd": 44
            }
        ],
        "height": 0.5,
        "weight": 6.2,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 390
        },
        "types": [
            "Fire"
        ]
    },
    {
        "name": "Monferno",
        "abilities": [
            "Blaze",
            "Iron Fist"
        ],
        "stats": [
            {
                "hp": 64
            },
            {
                "atk": 78
            },
            {
                "def": 52
            },
            {
                "spa": 78
            },
            {
                "spd": 52
            }
        ],
        "height": 0.9,
        "weight": 22,
        "formats": [
            "PU"
        ],
        "oob": {
            "dex_number": 391
        },
        "types": [
            "Fire",
            "Fighting"
        ]
    },
    {
        "name": "Infernape",
        "abilities": [
            "Blaze",
            "Iron Fist"
        ],
        "stats": [
            {
                "hp": 76
            },
            {
                "atk": 104
            },
            {
                "def": 71
            },
            {
                "spa": 104
            },
            {
                "spd": 71
            }
        ],
        "height": 1.2,
        "weight": 55,
        "formats": [
            "OU"
        ],
        "oob": {
            "dex_number": 392
        },
        "types": [
            "Fire",
            "Fighting"
        ]
    },
    {
        "name": "Piplup",
        "abilities": [
            "Torrent",
            "Defiant"
        ],
        "stats": [
            {
                "hp": 53
            },
            {
                "atk": 51
            },
            {
                "def": 53
            },
            {
                "spa": 61
            },
            {
                "spd": 56
            }
        ],
        "height": 0.4,
        "weight": 5.2,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 393
        },
        "types": [
            "Water"
        ]
    },
    {
        "name": "Prinplup",
        "abilities": [
            "Torrent",
            "Defiant"
        ],
        "stats": [
            {
                "hp": 64
            },
            {
                "atk": 66
            },
            {
                "def": 68
            },
            {
                "spa": 81
            },
            {
                "spd": 76
            }
        ],
        "height": 0.8,
        "weight": 23,
        "formats": [
            "NFE"
        ],
        "oob": {
            "dex_number": 394
        },
        "types": [
            "Water"
        ]
    },
    {
        "name": "Empoleon",
        "abilities": [
            "Torrent",
            "Defiant"
        ],
        "stats": [
            {
                "hp": 84
            },
            {
                "atk": 86
            },
            {
                "def": 88
            },
            {
                "spa": 111
            },
            {
                "spd": 101
            }
        ],
        "height": 1.7,
        "weight": 84.5,
        "formats": [
            "UU"
        ],
        "oob": {
            "dex_number": 395
        },
        "types": [
            "Water",
            "Steel"
        ]
    },
    {
        "name": "Starly",
        "abilities": [
            "Keen Eye"
        ],
        "stats": [
            {
                "hp": 40
            },
            {
                "atk": 55
            },
            {
                "def": 30
            },
            {
                "spa": 30
            },
            {
                "spd": 30
            }
        ],
        "height": 0.3,
        "weight": 2,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 396
        },
        "types": [
            "Normal",
            "Flying"
        ]
    },
    {
        "name": "Staravia",
        "abilities": [
            "Intimidate",
            "Reckless"
        ],
        "stats": [
            {
                "hp": 55
            },
            {
                "atk": 75
            },
            {
                "def": 50
            },
            {
                "spa": 40
            },
            {
                "spd": 40
            }
        ],
        "height": 0.6,
        "weight": 15.5,
        "formats": [
            "NFE"
        ],
        "oob": {
            "dex_number": 397
        },
        "types": [
            "Normal",
            "Flying"
        ]
    },
    {
        "name": "Staraptor",
        "abilities": [
            "Intimidate",
            "Reckless"
        ],
        "stats": [
            {
                "hp": 85
            },
            {
                "atk": 120
            },
            {
                "def": 70
            },
            {
                "spa": 50
            },
            {
                "spd": 50
            }
        ],
        "height": 1.2,
        "weight": 24.9,
        "formats": [
            "UUBL"
        ],
        "oob": {
            "dex_number": 398
        },
        "types": [
            "Normal",
            "Flying"
        ]
    },
    {
        "name": "Bidoof",
        "abilities": [
            "Simple",
            "Unaware",
            "Moody"
        ],
        "stats": [
            {
                "hp": 59
            },
            {
                "atk": 45
            },
            {
                "def": 40
            },
            {
                "spa": 35
            },
            {
                "spd": 40
            }
        ],
        "height": 0.5,
        "weight": 20,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 399
        },
        "types": [
            "Normal"
        ]
    },
    {
        "name": "Charmander",
        "abilities": [
            "Blaze",
            "Solar Power"
        ],
        "stats": [
            {
                "hp": 39
            },
            {
                "atk": 52
            },
            {
                "def": 43
            },
            {
                "spa": 60
            },
            {
                "spd": 50
            }
        ],
        "height": 0.6,
        "weight": 8.5,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 4
        },
        "types": [
            "Fire"
        ]
    },
    {
        "name": "Wigglytuff",
        "abilities": [
            "Cute Charm",
            "Frisk"
        ],
        "stats": [
            {
                "hp": 140
            },
            {
                "atk": 70
            },
            {
                "def": 45
            },
            {
                "spa": 75
            },
            {
                "spd": 50
            }
        ],
        "height": 1,
        "weight": 12,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 40
        },
        "types": [
            "Normal"
        ]
    },
    {
        "name": "Bibarel",
        "abilities": [
            "Simple",
            "Unaware",
            "Moody"
        ],
        "stats": [
            {
                "hp": 79
            },
            {
                "atk": 85
            },
            {
                "def": 60
            },
            {
                "spa": 55
            },
            {
                "spd": 60
            }
        ],
        "height": 1,
        "weight": 31.5,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 400
        },
        "types": [
            "Normal",
            "Water"
        ]
    },
    {
        "name": "Kricketot",
        "abilities": [
            "Shed Skin",
            "Run Away"
        ],
        "stats": [
            {
                "hp": 37
            },
            {
                "atk": 25
            },
            {
                "def": 41
            },
            {
                "spa": 25
            },
            {
                "spd": 41
            }
        ],
        "height": 0.3,
        "weight": 2.2,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 401
        },
        "types": [
            "Bug"
        ]
    },
    {
        "name": "Kricketune",
        "abilities": [
            "Swarm",
            "Technician"
        ],
        "stats": [
            {
                "hp": 77
            },
            {
                "atk": 85
            },
            {
                "def": 51
            },
            {
                "spa": 55
            },
            {
                "spd": 51
            }
        ],
        "height": 1,
        "weight": 25.5,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 402
        },
        "types": [
            "Bug"
        ]
    },
    {
        "name": "Shinx",
        "abilities": [
            "Rivalry",
            "Intimidate",
            "Guts"
        ],
        "stats": [
            {
                "hp": 45
            },
            {
                "atk": 65
            },
            {
                "def": 34
            },
            {
                "spa": 40
            },
            {
                "spd": 34
            }
        ],
        "height": 0.5,
        "weight": 9.5,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 403
        },
        "types": [
            "Electric"
        ]
    },
    {
        "name": "Luxio",
        "abilities": [
            "Rivalry",
            "Intimidate",
            "Guts"
        ],
        "stats": [
            {
                "hp": 60
            },
            {
                "atk": 85
            },
            {
                "def": 49
            },
            {
                "spa": 60
            },
            {
                "spd": 49
            }
        ],
        "height": 0.9,
        "weight": 30.5,
        "formats": [
            "NFE"
        ],
        "oob": {
            "dex_number": 404
        },
        "types": [
            "Electric"
        ]
    },
    {
        "name": "Luxray",
        "abilities": [
            "Rivalry",
            "Intimidate",
            "Guts"
        ],
        "stats": [
            {
                "hp": 80
            },
            {
                "atk": 120
            },
            {
                "def": 79
            },
            {
                "spa": 95
            },
            {
                "spd": 79
            }
        ],
        "height": 1.4,
        "weight": 42,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 405
        },
        "types": [
            "Electric"
        ]
    },
    {
        "name": "Budew",
        "abilities": [
            "Natural Cure",
            "Poison Point",
            "Leaf Guard"
        ],
        "stats": [
            {
                "hp": 40
            },
            {
                "atk": 30
            },
            {
                "def": 35
            },
            {
                "spa": 50
            },
            {
                "spd": 70
            }
        ],
        "height": 0.2,
        "weight": 1.2,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 406
        },
        "types": [
            "Grass",
            "Poison"
        ]
    },
    {
        "name": "Roserade",
        "abilities": [
            "Natural Cure",
            "Poison Point",
            "Technician"
        ],
        "stats": [
            {
                "hp": 60
            },
            {
                "atk": 70
            },
            {
                "def": 55
            },
            {
                "spa": 125
            },
            {
                "spd": 105
            }
        ],
        "height": 0.9,
        "weight": 14.5,
        "formats": [
            "UU"
        ],
        "oob": {
            "dex_number": 407
        },
        "types": [
            "Grass",
            "Poison"
        ]
    },
    {
        "name": "Cranidos",
        "abilities": [
            "Mold Breaker",
            "Sheer Force"
        ],
        "stats": [
            {
                "hp": 67
            },
            {
                "atk": 125
            },
            {
                "def": 40
            },
            {
                "spa": 30
            },
            {
                "spd": 30
            }
        ],
        "height": 0.9,
        "weight": 31.5,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 408
        },
        "types": [
            "Rock"
        ]
    },
    {
        "name": "Rampardos",
        "abilities": [
            "Mold Breaker",
            "Sheer Force"
        ],
        "stats": [
            {
                "hp": 97
            },
            {
                "atk": 165
            },
            {
                "def": 60
            },
            {
                "spa": 65
            },
            {
                "spd": 50
            }
        ],
        "height": 1.6,
        "weight": 102.5,
        "formats": [
            "PU"
        ],
        "oob": {
            "dex_number": 409
        },
        "types": [
            "Rock"
        ]
    },
    {
        "name": "Zubat",
        "abilities": [
            "Inner Focus",
            "Infiltrator"
        ],
        "stats": [
            {
                "hp": 40
            },
            {
                "atk": 45
            },
            {
                "def": 35
            },
            {
                "spa": 30
            },
            {
                "spd": 40
            }
        ],
        "height": 0.8,
        "weight": 7.5,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 41
        },
        "types": [
            "Poison",
            "Flying"
        ]
    },
    {
        "name": "Shieldon",
        "abilities": [
            "Sturdy",
            "Soundproof"
        ],
        "stats": [
            {
                "hp": 30
            },
            {
                "atk": 42
            },
            {
                "def": 118
            },
            {
                "spa": 42
            },
            {
                "spd": 88
            }
        ],
        "height": 0.5,
        "weight": 57,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 410
        },
        "types": [
            "Rock",
            "Steel"
        ]
    },
    {
        "name": "Bastiodon",
        "abilities": [
            "Sturdy",
            "Soundproof"
        ],
        "stats": [
            {
                "hp": 60
            },
            {
                "atk": 52
            },
            {
                "def": 168
            },
            {
                "spa": 47
            },
            {
                "spd": 138
            }
        ],
        "height": 1.3,
        "weight": 149.5,
        "formats": [
            "NU"
        ],
        "oob": {
            "dex_number": 411
        },
        "types": [
            "Rock",
            "Steel"
        ]
    },
    {
        "name": "Burmy",
        "abilities": [
            "Shed Skin",
            "Overcoat"
        ],
        "stats": [
            {
                "hp": 40
            },
            {
                "atk": 29
            },
            {
                "def": 45
            },
            {
                "spa": 29
            },
            {
                "spd": 45
            }
        ],
        "height": 0.2,
        "weight": 3.4,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 412
        },
        "types": [
            "Bug"
        ]
    },
    {
        "name": "Wormadam",
        "abilities": [
            "Anticipation",
            "Overcoat"
        ],
        "stats": [
            {
                "hp": 60
            },
            {
                "atk": 59
            },
            {
                "def": 85
            },
            {
                "spa": 79
            },
            {
                "spd": 105
            }
        ],
        "height": 0.5,
        "weight": 6.5,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 413
        },
        "types": [
            "Bug",
            "Grass"
        ]
    },
    {
        "name": "Wormadam-Sandy",
        "abilities": [
            "Anticipation",
            "Overcoat"
        ],
        "stats": [
            {
                "hp": 60
            },
            {
                "atk": 79
            },
            {
                "def": 105
            },
            {
                "spa": 59
            },
            {
                "spd": 85
            }
        ],
        "height": 0.5,
        "weight": 6.5,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 413
        },
        "types": [
            "Bug",
            "Ground"
        ]
    },
    {
        "name": "Wormadam-Trash",
        "abilities": [
            "Anticipation",
            "Overcoat"
        ],
        "stats": [
            {
                "hp": 60
            },
            {
                "atk": 69
            },
            {
                "def": 95
            },
            {
                "spa": 69
            },
            {
                "spd": 95
            }
        ],
        "height": 0.5,
        "weight": 6.5,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 413
        },
        "types": [
            "Bug",
            "Steel"
        ]
    },
    {
        "name": "Mothim",
        "abilities": [
            "Swarm",
            "Tinted Lens"
        ],
        "stats": [
            {
                "hp": 70
            },
            {
                "atk": 94
            },
            {
                "def": 50
            },
            {
                "spa": 94
            },
            {
                "spd": 50
            }
        ],
        "height": 0.9,
        "weight": 23.3,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 414
        },
        "types": [
            "Bug",
            "Flying"
        ]
    },
    {
        "name": "Combee",
        "abilities": [
            "Honey Gather",
            "Hustle"
        ],
        "stats": [
            {
                "hp": 30
            },
            {
                "atk": 30
            },
            {
                "def": 42
            },
            {
                "spa": 30
            },
            {
                "spd": 42
            }
        ],
        "height": 0.3,
        "weight": 5.5,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 415
        },
        "types": [
            "Bug",
            "Flying"
        ]
    },
    {
        "name": "Vespiquen",
        "abilities": [
            "Pressure",
            "Unnerve"
        ],
        "stats": [
            {
                "hp": 70
            },
            {
                "atk": 80
            },
            {
                "def": 102
            },
            {
                "spa": 80
            },
            {
                "spd": 102
            }
        ],
        "height": 1.2,
        "weight": 38.5,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 416
        },
        "types": [
            "Bug",
            "Flying"
        ]
    },
    {
        "name": "Pachirisu",
        "abilities": [
            "Run Away",
            "Pickup",
            "Volt Absorb"
        ],
        "stats": [
            {
                "hp": 60
            },
            {
                "atk": 45
            },
            {
                "def": 70
            },
            {
                "spa": 45
            },
            {
                "spd": 90
            }
        ],
        "height": 0.4,
        "weight": 3.9,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 417
        },
        "types": [
            "Electric"
        ]
    },
    {
        "name": "Buizel",
        "abilities": [
            "Swift Swim",
            "Water Veil"
        ],
        "stats": [
            {
                "hp": 55
            },
            {
                "atk": 65
            },
            {
                "def": 35
            },
            {
                "spa": 60
            },
            {
                "spd": 30
            }
        ],
        "height": 0.7,
        "weight": 29.5,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 418
        },
        "types": [
            "Water"
        ]
    },
    {
        "name": "Floatzel",
        "abilities": [
            "Swift Swim",
            "Water Veil"
        ],
        "stats": [
            {
                "hp": 85
            },
            {
                "atk": 105
            },
            {
                "def": 55
            },
            {
                "spa": 85
            },
            {
                "spd": 50
            }
        ],
        "height": 1.1,
        "weight": 33.5,
        "formats": [
            "NU"
        ],
        "oob": {
            "dex_number": 419
        },
        "types": [
            "Water"
        ]
    },
    {
        "name": "Golbat",
        "abilities": [
            "Inner Focus",
            "Infiltrator"
        ],
        "stats": [
            {
                "hp": 75
            },
            {
                "atk": 80
            },
            {
                "def": 70
            },
            {
                "spa": 65
            },
            {
                "spd": 75
            }
        ],
        "height": 1.6,
        "weight": 55,
        "formats": [
            "NU"
        ],
        "oob": {
            "dex_number": 42
        },
        "types": [
            "Poison",
            "Flying"
        ]
    },
    {
        "name": "Cherubi",
        "abilities": [
            "Chlorophyll"
        ],
        "stats": [
            {
                "hp": 45
            },
            {
                "atk": 35
            },
            {
                "def": 45
            },
            {
                "spa": 62
            },
            {
                "spd": 53
            }
        ],
        "height": 0.4,
        "weight": 3.3,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 420
        },
        "types": [
            "Grass"
        ]
    },
    {
        "name": "Cherrim",
        "abilities": [
            "Flower Gift"
        ],
        "stats": [
            {
                "hp": 70
            },
            {
                "atk": 60
            },
            {
                "def": 70
            },
            {
                "spa": 87
            },
            {
                "spd": 78
            }
        ],
        "height": 0.5,
        "weight": 9.3,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 421
        },
        "types": [
            "Grass"
        ]
    },
    {
        "name": "Shellos",
        "abilities": [
            "Sticky Hold",
            "Storm Drain",
            "Sand Force"
        ],
        "stats": [
            {
                "hp": 76
            },
            {
                "atk": 48
            },
            {
                "def": 48
            },
            {
                "spa": 57
            },
            {
                "spd": 62
            }
        ],
        "height": 0.3,
        "weight": 6.3,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 422
        },
        "types": [
            "Water"
        ]
    },
    {
        "name": "Gastrodon",
        "abilities": [
            "Sticky Hold",
            "Storm Drain",
            "Sand Force"
        ],
        "stats": [
            {
                "hp": 111
            },
            {
                "atk": 83
            },
            {
                "def": 68
            },
            {
                "spa": 92
            },
            {
                "spd": 82
            }
        ],
        "height": 0.9,
        "weight": 29.9,
        "formats": [
            "OU"
        ],
        "oob": {
            "dex_number": 423
        },
        "types": [
            "Water",
            "Ground"
        ]
    },
    {
        "name": "Ambipom",
        "abilities": [
            "Technician",
            "Pickup",
            "Skill Link"
        ],
        "stats": [
            {
                "hp": 75
            },
            {
                "atk": 100
            },
            {
                "def": 66
            },
            {
                "spa": 60
            },
            {
                "spd": 66
            }
        ],
        "height": 1.2,
        "weight": 20.3,
        "formats": [
            "UU"
        ],
        "oob": {
            "dex_number": 424
        },
        "types": [
            "Normal"
        ]
    },
    {
        "name": "Drifloon",
        "abilities": [
            "Aftermath",
            "Unburden",
            "Flare Boost"
        ],
        "stats": [
            {
                "hp": 90
            },
            {
                "atk": 50
            },
            {
                "def": 34
            },
            {
                "spa": 60
            },
            {
                "spd": 44
            }
        ],
        "height": 0.4,
        "weight": 1.2,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 425
        },
        "types": [
            "Ghost",
            "Flying"
        ]
    },
    {
        "name": "Drifblim",
        "abilities": [
            "Aftermath",
            "Unburden",
            "Flare Boost"
        ],
        "stats": [
            {
                "hp": 150
            },
            {
                "atk": 80
            },
            {
                "def": 44
            },
            {
                "spa": 90
            },
            {
                "spd": 54
            }
        ],
        "height": 1.2,
        "weight": 15,
        "formats": [
            "NU"
        ],
        "oob": {
            "dex_number": 426
        },
        "types": [
            "Ghost",
            "Flying"
        ]
    },
    {
        "name": "Buneary",
        "abilities": [
            "Run Away",
            "Klutz",
            "Limber"
        ],
        "stats": [
            {
                "hp": 55
            },
            {
                "atk": 66
            },
            {
                "def": 44
            },
            {
                "spa": 44
            },
            {
                "spd": 56
            }
        ],
        "height": 0.4,
        "weight": 5.5,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 427
        },
        "types": [
            "Normal"
        ]
    },
    {
        "name": "Lopunny",
        "abilities": [
            "Cute Charm",
            "Klutz",
            "Limber"
        ],
        "stats": [
            {
                "hp": 65
            },
            {
                "atk": 76
            },
            {
                "def": 84
            },
            {
                "spa": 54
            },
            {
                "spd": 96
            }
        ],
        "height": 1.2,
        "weight": 33.3,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 428
        },
        "types": [
            "Normal"
        ]
    },
    {
        "name": "Mismagius",
        "abilities": [
            "Levitate"
        ],
        "stats": [
            {
                "hp": 60
            },
            {
                "atk": 60
            },
            {
                "def": 60
            },
            {
                "spa": 105
            },
            {
                "spd": 105
            }
        ],
        "height": 0.9,
        "weight": 4.4,
        "formats": [
            "UU"
        ],
        "oob": {
            "dex_number": 429
        },
        "types": [
            "Ghost"
        ]
    },
    {
        "name": "Oddish",
        "abilities": [
            "Chlorophyll",
            "Run Away"
        ],
        "stats": [
            {
                "hp": 45
            },
            {
                "atk": 50
            },
            {
                "def": 55
            },
            {
                "spa": 75
            },
            {
                "spd": 65
            }
        ],
        "height": 0.5,
        "weight": 5.4,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 43
        },
        "types": [
            "Grass",
            "Poison"
        ]
    },
    {
        "name": "Honchkrow",
        "abilities": [
            "Insomnia",
            "Super Luck",
            "Moxie"
        ],
        "stats": [
            {
                "hp": 100
            },
            {
                "atk": 125
            },
            {
                "def": 52
            },
            {
                "spa": 105
            },
            {
                "spd": 52
            }
        ],
        "height": 0.9,
        "weight": 27.3,
        "formats": [
            "UU"
        ],
        "oob": {
            "dex_number": 430
        },
        "types": [
            "Dark",
            "Flying"
        ]
    },
    {
        "name": "Glameow",
        "abilities": [
            "Limber",
            "Own Tempo",
            "Keen Eye"
        ],
        "stats": [
            {
                "hp": 49
            },
            {
                "atk": 55
            },
            {
                "def": 42
            },
            {
                "spa": 42
            },
            {
                "spd": 37
            }
        ],
        "height": 0.5,
        "weight": 3.9,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 431
        },
        "types": [
            "Normal"
        ]
    },
    {
        "name": "Purugly",
        "abilities": [
            "Thick Fat",
            "Own Tempo",
            "Defiant"
        ],
        "stats": [
            {
                "hp": 71
            },
            {
                "atk": 82
            },
            {
                "def": 64
            },
            {
                "spa": 64
            },
            {
                "spd": 59
            }
        ],
        "height": 1,
        "weight": 43.8,
        "formats": [
            "PU"
        ],
        "oob": {
            "dex_number": 432
        },
        "types": [
            "Normal"
        ]
    },
    {
        "name": "Chingling",
        "abilities": [
            "Levitate"
        ],
        "stats": [
            {
                "hp": 45
            },
            {
                "atk": 30
            },
            {
                "def": 50
            },
            {
                "spa": 65
            },
            {
                "spd": 50
            }
        ],
        "height": 0.2,
        "weight": 0.6,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 433
        },
        "types": [
            "Psychic"
        ]
    },
    {
        "name": "Stunky",
        "abilities": [
            "Stench",
            "Aftermath",
            "Keen Eye"
        ],
        "stats": [
            {
                "hp": 63
            },
            {
                "atk": 63
            },
            {
                "def": 47
            },
            {
                "spa": 41
            },
            {
                "spd": 41
            }
        ],
        "height": 0.4,
        "weight": 19.2,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 434
        },
        "types": [
            "Poison",
            "Dark"
        ]
    },
    {
        "name": "Skuntank",
        "abilities": [
            "Stench",
            "Aftermath",
            "Keen Eye"
        ],
        "stats": [
            {
                "hp": 103
            },
            {
                "atk": 93
            },
            {
                "def": 67
            },
            {
                "spa": 71
            },
            {
                "spd": 61
            }
        ],
        "height": 1,
        "weight": 38,
        "formats": [
            "NU"
        ],
        "oob": {
            "dex_number": 435
        },
        "types": [
            "Poison",
            "Dark"
        ]
    },
    {
        "name": "Bronzor",
        "abilities": [
            "Levitate",
            "Heatproof",
            "Heavy Metal"
        ],
        "stats": [
            {
                "hp": 57
            },
            {
                "atk": 24
            },
            {
                "def": 86
            },
            {
                "spa": 24
            },
            {
                "spd": 86
            }
        ],
        "height": 0.5,
        "weight": 60.5,
        "formats": [
            "PU"
        ],
        "oob": {
            "dex_number": 436
        },
        "types": [
            "Steel",
            "Psychic"
        ]
    },
    {
        "name": "Bronzong",
        "abilities": [
            "Levitate",
            "Heatproof",
            "Heavy Metal"
        ],
        "stats": [
            {
                "hp": 67
            },
            {
                "atk": 89
            },
            {
                "def": 116
            },
            {
                "spa": 79
            },
            {
                "spd": 116
            }
        ],
        "height": 1.3,
        "weight": 187,
        "formats": [
            "UU"
        ],
        "oob": {
            "dex_number": 437
        },
        "types": [
            "Steel",
            "Psychic"
        ]
    },
    {
        "name": "Bonsly",
        "abilities": [
            "Sturdy",
            "Rock Head",
            "Rattled"
        ],
        "stats": [
            {
                "hp": 50
            },
            {
                "atk": 80
            },
            {
                "def": 95
            },
            {
                "spa": 10
            },
            {
                "spd": 45
            }
        ],
        "height": 0.5,
        "weight": 15,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 438
        },
        "types": [
            "Rock"
        ]
    },
    {
        "name": "Mime Jr.",
        "abilities": [
            "Soundproof",
            "Filter",
            "Technician"
        ],
        "stats": [
            {
                "hp": 20
            },
            {
                "atk": 25
            },
            {
                "def": 45
            },
            {
                "spa": 70
            },
            {
                "spd": 90
            }
        ],
        "height": 0.6,
        "weight": 13,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 439
        },
        "types": [
            "Psychic"
        ]
    },
    {
        "name": "Gloom",
        "abilities": [
            "Chlorophyll",
            "Stench"
        ],
        "stats": [
            {
                "hp": 60
            },
            {
                "atk": 65
            },
            {
                "def": 70
            },
            {
                "spa": 85
            },
            {
                "spd": 75
            }
        ],
        "height": 0.8,
        "weight": 8.6,
        "formats": [
            "NFE"
        ],
        "oob": {
            "dex_number": 44
        },
        "types": [
            "Grass",
            "Poison"
        ]
    },
    {
        "name": "Happiny",
        "abilities": [
            "Natural Cure",
            "Serene Grace",
            "Friend Guard"
        ],
        "stats": [
            {
                "hp": 100
            },
            {
                "atk": 5
            },
            {
                "def": 5
            },
            {
                "spa": 15
            },
            {
                "spd": 65
            }
        ],
        "height": 0.6,
        "weight": 24.4,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 440
        },
        "types": [
            "Normal"
        ]
    },
    {
        "name": "Chatot",
        "abilities": [
            "Keen Eye",
            "Tangled Feet",
            "Big Pecks"
        ],
        "stats": [
            {
                "hp": 76
            },
            {
                "atk": 65
            },
            {
                "def": 45
            },
            {
                "spa": 92
            },
            {
                "spd": 42
            }
        ],
        "height": 0.5,
        "weight": 1.9,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 441
        },
        "types": [
            "Normal",
            "Flying"
        ]
    },
    {
        "name": "Spiritomb",
        "abilities": [
            "Pressure",
            "Infiltrator"
        ],
        "stats": [
            {
                "hp": 50
            },
            {
                "atk": 92
            },
            {
                "def": 108
            },
            {
                "spa": 92
            },
            {
                "spd": 108
            }
        ],
        "height": 1,
        "weight": 108,
        "formats": [
            "RU"
        ],
        "oob": {
            "dex_number": 442
        },
        "types": [
            "Ghost",
            "Dark"
        ]
    },
    {
        "name": "Gible",
        "abilities": [
            "Sand Veil",
            "Rough Skin"
        ],
        "stats": [
            {
                "hp": 58
            },
            {
                "atk": 70
            },
            {
                "def": 45
            },
            {
                "spa": 40
            },
            {
                "spd": 45
            }
        ],
        "height": 0.7,
        "weight": 20.5,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 443
        },
        "types": [
            "Dragon",
            "Ground"
        ]
    },
    {
        "name": "Gabite",
        "abilities": [
            "Sand Veil",
            "Rough Skin"
        ],
        "stats": [
            {
                "hp": 68
            },
            {
                "atk": 90
            },
            {
                "def": 65
            },
            {
                "spa": 50
            },
            {
                "spd": 55
            }
        ],
        "height": 1.4,
        "weight": 56,
        "formats": [
            "PU"
        ],
        "oob": {
            "dex_number": 444
        },
        "types": [
            "Dragon",
            "Ground"
        ]
    },
    {
        "name": "Garchomp",
        "abilities": [
            "Sand Veil",
            "Rough Skin"
        ],
        "stats": [
            {
                "hp": 108
            },
            {
                "atk": 130
            },
            {
                "def": 95
            },
            {
                "spa": 80
            },
            {
                "spd": 85
            }
        ],
        "height": 1.9,
        "weight": 95,
        "formats": [
            "OU"
        ],
        "oob": {
            "dex_number": 445
        },
        "types": [
            "Dragon",
            "Ground"
        ]
    },
    {
        "name": "Munchlax",
        "abilities": [
            "Pickup",
            "Thick Fat",
            "Gluttony"
        ],
        "stats": [
            {
                "hp": 135
            },
            {
                "atk": 85
            },
            {
                "def": 40
            },
            {
                "spa": 40
            },
            {
                "spd": 85
            }
        ],
        "height": 0.6,
        "weight": 105,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 446
        },
        "types": [
            "Normal"
        ]
    },
    {
        "name": "Riolu",
        "abilities": [
            "Steadfast",
            "Inner Focus",
            "Prankster"
        ],
        "stats": [
            {
                "hp": 40
            },
            {
                "atk": 70
            },
            {
                "def": 40
            },
            {
                "spa": 35
            },
            {
                "spd": 40
            }
        ],
        "height": 0.7,
        "weight": 20.2,
        "formats": [
            "PUBL"
        ],
        "oob": {
            "dex_number": 447
        },
        "types": [
            "Fighting"
        ]
    },
    {
        "name": "Lucario",
        "abilities": [
            "Steadfast",
            "Inner Focus",
            "Justified"
        ],
        "stats": [
            {
                "hp": 70
            },
            {
                "atk": 110
            },
            {
                "def": 70
            },
            {
                "spa": 115
            },
            {
                "spd": 70
            }
        ],
        "height": 1.2,
        "weight": 54,
        "formats": [
            "OU"
        ],
        "oob": {
            "dex_number": 448
        },
        "types": [
            "Fighting",
            "Steel"
        ]
    },
    {
        "name": "Hippopotas",
        "abilities": [
            "Sand Stream",
            "Sand Force"
        ],
        "stats": [
            {
                "hp": 68
            },
            {
                "atk": 72
            },
            {
                "def": 78
            },
            {
                "spa": 38
            },
            {
                "spd": 42
            }
        ],
        "height": 0.8,
        "weight": 49.5,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 449
        },
        "types": [
            "Ground"
        ]
    },
    {
        "name": "Vileplume",
        "abilities": [
            "Chlorophyll",
            "Effect Spore"
        ],
        "stats": [
            {
                "hp": 75
            },
            {
                "atk": 80
            },
            {
                "def": 85
            },
            {
                "spa": 100
            },
            {
                "spd": 90
            }
        ],
        "height": 1.2,
        "weight": 18.6,
        "formats": [
            "PU"
        ],
        "oob": {
            "dex_number": 45
        },
        "types": [
            "Grass",
            "Poison"
        ]
    },
    {
        "name": "Hippowdon",
        "abilities": [
            "Sand Stream",
            "Sand Force"
        ],
        "stats": [
            {
                "hp": 108
            },
            {
                "atk": 112
            },
            {
                "def": 118
            },
            {
                "spa": 68
            },
            {
                "spd": 72
            }
        ],
        "height": 2,
        "weight": 300,
        "formats": [
            "OU"
        ],
        "oob": {
            "dex_number": 450
        },
        "types": [
            "Ground"
        ]
    },
    {
        "name": "Skorupi",
        "abilities": [
            "Battle Armor",
            "Sniper",
            "Keen Eye"
        ],
        "stats": [
            {
                "hp": 40
            },
            {
                "atk": 50
            },
            {
                "def": 90
            },
            {
                "spa": 30
            },
            {
                "spd": 55
            }
        ],
        "height": 0.8,
        "weight": 12,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 451
        },
        "types": [
            "Poison",
            "Bug"
        ]
    },
    {
        "name": "Drapion",
        "abilities": [
            "Battle Armor",
            "Sniper",
            "Keen Eye"
        ],
        "stats": [
            {
                "hp": 70
            },
            {
                "atk": 90
            },
            {
                "def": 110
            },
            {
                "spa": 60
            },
            {
                "spd": 75
            }
        ],
        "height": 1.3,
        "weight": 61.5,
        "formats": [
            "RU"
        ],
        "oob": {
            "dex_number": 452
        },
        "types": [
            "Poison",
            "Dark"
        ]
    },
    {
        "name": "Croagunk",
        "abilities": [
            "Anticipation",
            "Dry Skin",
            "Poison Touch"
        ],
        "stats": [
            {
                "hp": 48
            },
            {
                "atk": 61
            },
            {
                "def": 40
            },
            {
                "spa": 61
            },
            {
                "spd": 40
            }
        ],
        "height": 0.7,
        "weight": 23,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 453
        },
        "types": [
            "Poison",
            "Fighting"
        ]
    },
    {
        "name": "Toxicroak",
        "abilities": [
            "Anticipation",
            "Dry Skin",
            "Poison Touch"
        ],
        "stats": [
            {
                "hp": 83
            },
            {
                "atk": 106
            },
            {
                "def": 65
            },
            {
                "spa": 86
            },
            {
                "spd": 65
            }
        ],
        "height": 1.3,
        "weight": 44.4,
        "formats": [
            "OU"
        ],
        "oob": {
            "dex_number": 454
        },
        "types": [
            "Poison",
            "Fighting"
        ]
    },
    {
        "name": "Carnivine",
        "abilities": [
            "Levitate"
        ],
        "stats": [
            {
                "hp": 74
            },
            {
                "atk": 100
            },
            {
                "def": 72
            },
            {
                "spa": 90
            },
            {
                "spd": 72
            }
        ],
        "height": 1.4,
        "weight": 27,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 455
        },
        "types": [
            "Grass"
        ]
    },
    {
        "name": "Finneon",
        "abilities": [
            "Swift Swim",
            "Storm Drain",
            "Water Veil"
        ],
        "stats": [
            {
                "hp": 49
            },
            {
                "atk": 49
            },
            {
                "def": 56
            },
            {
                "spa": 49
            },
            {
                "spd": 61
            }
        ],
        "height": 0.4,
        "weight": 7,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 456
        },
        "types": [
            "Water"
        ]
    },
    {
        "name": "Lumineon",
        "abilities": [
            "Swift Swim",
            "Storm Drain",
            "Water Veil"
        ],
        "stats": [
            {
                "hp": 69
            },
            {
                "atk": 69
            },
            {
                "def": 76
            },
            {
                "spa": 69
            },
            {
                "spd": 86
            }
        ],
        "height": 1.2,
        "weight": 24,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 457
        },
        "types": [
            "Water"
        ]
    },
    {
        "name": "Mantyke",
        "abilities": [
            "Swift Swim",
            "Water Absorb",
            "Water Veil"
        ],
        "stats": [
            {
                "hp": 45
            },
            {
                "atk": 20
            },
            {
                "def": 50
            },
            {
                "spa": 60
            },
            {
                "spd": 120
            }
        ],
        "height": 1,
        "weight": 65,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 458
        },
        "types": [
            "Water",
            "Flying"
        ]
    },
    {
        "name": "Snover",
        "abilities": [
            "Snow Warning",
            "Soundproof"
        ],
        "stats": [
            {
                "hp": 60
            },
            {
                "atk": 62
            },
            {
                "def": 50
            },
            {
                "spa": 62
            },
            {
                "spd": 60
            }
        ],
        "height": 1,
        "weight": 50.5,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 459
        },
        "types": [
            "Grass",
            "Ice"
        ]
    },
    {
        "name": "Paras",
        "abilities": [
            "Effect Spore",
            "Dry Skin",
            "Damp"
        ],
        "stats": [
            {
                "hp": 35
            },
            {
                "atk": 70
            },
            {
                "def": 55
            },
            {
                "spa": 45
            },
            {
                "spd": 55
            }
        ],
        "height": 0.3,
        "weight": 5.4,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 46
        },
        "types": [
            "Bug",
            "Grass"
        ]
    },
    {
        "name": "Abomasnow",
        "abilities": [
            "Snow Warning",
            "Soundproof"
        ],
        "stats": [
            {
                "hp": 90
            },
            {
                "atk": 92
            },
            {
                "def": 75
            },
            {
                "spa": 92
            },
            {
                "spd": 85
            }
        ],
        "height": 2.2,
        "weight": 135.5,
        "formats": [
            "UU"
        ],
        "oob": {
            "dex_number": 460
        },
        "types": [
            "Grass",
            "Ice"
        ]
    },
    {
        "name": "Weavile",
        "abilities": [
            "Pressure",
            "Pickpocket"
        ],
        "stats": [
            {
                "hp": 70
            },
            {
                "atk": 120
            },
            {
                "def": 65
            },
            {
                "spa": 45
            },
            {
                "spd": 85
            }
        ],
        "height": 1.1,
        "weight": 34,
        "formats": [
            "UU"
        ],
        "oob": {
            "dex_number": 461
        },
        "types": [
            "Dark",
            "Ice"
        ]
    },
    {
        "name": "Magnezone",
        "abilities": [
            "Magnet Pull",
            "Sturdy",
            "Analytic"
        ],
        "stats": [
            {
                "hp": 70
            },
            {
                "atk": 70
            },
            {
                "def": 115
            },
            {
                "spa": 130
            },
            {
                "spd": 90
            }
        ],
        "height": 1.2,
        "weight": 180,
        "formats": [
            "OU"
        ],
        "oob": {
            "dex_number": 462
        },
        "types": [
            "Electric",
            "Steel"
        ]
    },
    {
        "name": "Lickilicky",
        "abilities": [
            "Own Tempo",
            "Oblivious",
            "Cloud Nine"
        ],
        "stats": [
            {
                "hp": 110
            },
            {
                "atk": 85
            },
            {
                "def": 95
            },
            {
                "spa": 80
            },
            {
                "spd": 95
            }
        ],
        "height": 1.7,
        "weight": 140,
        "formats": [
            "NU"
        ],
        "oob": {
            "dex_number": 463
        },
        "types": [
            "Normal"
        ]
    },
    {
        "name": "Rhyperior",
        "abilities": [
            "Lightning Rod",
            "Solid Rock",
            "Reckless"
        ],
        "stats": [
            {
                "hp": 115
            },
            {
                "atk": 140
            },
            {
                "def": 130
            },
            {
                "spa": 55
            },
            {
                "spd": 55
            }
        ],
        "height": 2.4,
        "weight": 282.8,
        "formats": [
            "UU"
        ],
        "oob": {
            "dex_number": 464
        },
        "types": [
            "Ground",
            "Rock"
        ]
    },
    {
        "name": "Tangrowth",
        "abilities": [
            "Chlorophyll",
            "Leaf Guard",
            "Regenerator"
        ],
        "stats": [
            {
                "hp": 100
            },
            {
                "atk": 100
            },
            {
                "def": 125
            },
            {
                "spa": 110
            },
            {
                "spd": 50
            }
        ],
        "height": 2,
        "weight": 128.6,
        "formats": [
            "RU"
        ],
        "oob": {
            "dex_number": 465
        },
        "types": [
            "Grass"
        ]
    },
    {
        "name": "Electivire",
        "abilities": [
            "Motor Drive",
            "Vital Spirit"
        ],
        "stats": [
            {
                "hp": 75
            },
            {
                "atk": 123
            },
            {
                "def": 67
            },
            {
                "spa": 95
            },
            {
                "spd": 85
            }
        ],
        "height": 1.8,
        "weight": 138.6,
        "formats": [
            "RU"
        ],
        "oob": {
            "dex_number": 466
        },
        "types": [
            "Electric"
        ]
    },
    {
        "name": "Magmortar",
        "abilities": [
            "Flame Body",
            "Vital Spirit"
        ],
        "stats": [
            {
                "hp": 75
            },
            {
                "atk": 95
            },
            {
                "def": 67
            },
            {
                "spa": 125
            },
            {
                "spd": 95
            }
        ],
        "height": 1.6,
        "weight": 68,
        "formats": [
            "RU"
        ],
        "oob": {
            "dex_number": 467
        },
        "types": [
            "Fire"
        ]
    },
    {
        "name": "Togekiss",
        "abilities": [
            "Hustle",
            "Serene Grace",
            "Super Luck"
        ],
        "stats": [
            {
                "hp": 85
            },
            {
                "atk": 50
            },
            {
                "def": 95
            },
            {
                "spa": 120
            },
            {
                "spd": 115
            }
        ],
        "height": 1.5,
        "weight": 38,
        "formats": [
            "UU"
        ],
        "oob": {
            "dex_number": 468
        },
        "types": [
            "Normal",
            "Flying"
        ]
    },
    {
        "name": "Yanmega",
        "abilities": [
            "Speed Boost",
            "Tinted Lens",
            "Frisk"
        ],
        "stats": [
            {
                "hp": 86
            },
            {
                "atk": 76
            },
            {
                "def": 86
            },
            {
                "spa": 116
            },
            {
                "spd": 56
            }
        ],
        "height": 1.9,
        "weight": 51.5,
        "formats": [
            "UU"
        ],
        "oob": {
            "dex_number": 469
        },
        "types": [
            "Bug",
            "Flying"
        ]
    },
    {
        "name": "Parasect",
        "abilities": [
            "Effect Spore",
            "Dry Skin",
            "Damp"
        ],
        "stats": [
            {
                "hp": 60
            },
            {
                "atk": 95
            },
            {
                "def": 80
            },
            {
                "spa": 60
            },
            {
                "spd": 80
            }
        ],
        "height": 1,
        "weight": 29.5,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 47
        },
        "types": [
            "Bug",
            "Grass"
        ]
    },
    {
        "name": "Leafeon",
        "abilities": [
            "Leaf Guard",
            "Chlorophyll"
        ],
        "stats": [
            {
                "hp": 65
            },
            {
                "atk": 110
            },
            {
                "def": 130
            },
            {
                "spa": 60
            },
            {
                "spd": 65
            }
        ],
        "height": 1,
        "weight": 25.5,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 470
        },
        "types": [
            "Grass"
        ]
    },
    {
        "name": "Glaceon",
        "abilities": [
            "Snow Cloak",
            "Ice Body"
        ],
        "stats": [
            {
                "hp": 65
            },
            {
                "atk": 60
            },
            {
                "def": 110
            },
            {
                "spa": 130
            },
            {
                "spd": 95
            }
        ],
        "height": 0.8,
        "weight": 25.9,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 471
        },
        "types": [
            "Ice"
        ]
    },
    {
        "name": "Gliscor",
        "abilities": [
            "Hyper Cutter",
            "Sand Veil",
            "Poison Heal"
        ],
        "stats": [
            {
                "hp": 75
            },
            {
                "atk": 95
            },
            {
                "def": 125
            },
            {
                "spa": 45
            },
            {
                "spd": 75
            }
        ],
        "height": 2,
        "weight": 42.5,
        "formats": [
            "OU"
        ],
        "oob": {
            "dex_number": 472
        },
        "types": [
            "Ground",
            "Flying"
        ]
    },
    {
        "name": "Mamoswine",
        "abilities": [
            "Oblivious",
            "Snow Cloak",
            "Thick Fat"
        ],
        "stats": [
            {
                "hp": 110
            },
            {
                "atk": 130
            },
            {
                "def": 80
            },
            {
                "spa": 70
            },
            {
                "spd": 60
            }
        ],
        "height": 2.5,
        "weight": 291,
        "formats": [
            "OU"
        ],
        "oob": {
            "dex_number": 473
        },
        "types": [
            "Ice",
            "Ground"
        ]
    },
    {
        "name": "Porygon-Z",
        "abilities": [
            "Adaptability",
            "Download",
            "Analytic"
        ],
        "stats": [
            {
                "hp": 85
            },
            {
                "atk": 80
            },
            {
                "def": 70
            },
            {
                "spa": 135
            },
            {
                "spd": 75
            }
        ],
        "height": 0.9,
        "weight": 34,
        "formats": [
            "UU"
        ],
        "oob": {
            "dex_number": 474
        },
        "types": [
            "Normal"
        ]
    },
    {
        "name": "Gallade",
        "abilities": [
            "Steadfast",
            "Justified"
        ],
        "stats": [
            {
                "hp": 68
            },
            {
                "atk": 125
            },
            {
                "def": 65
            },
            {
                "spa": 65
            },
            {
                "spd": 115
            }
        ],
        "height": 1.6,
        "weight": 52,
        "formats": [
            "RU"
        ],
        "oob": {
            "dex_number": 475
        },
        "types": [
            "Psychic",
            "Fighting"
        ]
    },
    {
        "name": "Probopass",
        "abilities": [
            "Sturdy",
            "Magnet Pull",
            "Sand Force"
        ],
        "stats": [
            {
                "hp": 60
            },
            {
                "atk": 55
            },
            {
                "def": 145
            },
            {
                "spa": 75
            },
            {
                "spd": 150
            }
        ],
        "height": 1.4,
        "weight": 340,
        "formats": [
            "NU"
        ],
        "oob": {
            "dex_number": 476
        },
        "types": [
            "Rock",
            "Steel"
        ]
    },
    {
        "name": "Dusknoir",
        "abilities": [
            "Pressure"
        ],
        "stats": [
            {
                "hp": 45
            },
            {
                "atk": 100
            },
            {
                "def": 135
            },
            {
                "spa": 65
            },
            {
                "spd": 135
            }
        ],
        "height": 2.2,
        "weight": 106.6,
        "formats": [
            "RU"
        ],
        "oob": {
            "dex_number": 477
        },
        "types": [
            "Ghost"
        ]
    },
    {
        "name": "Froslass",
        "abilities": [
            "Snow Cloak",
            "Cursed Body"
        ],
        "stats": [
            {
                "hp": 70
            },
            {
                "atk": 80
            },
            {
                "def": 70
            },
            {
                "spa": 80
            },
            {
                "spd": 70
            }
        ],
        "height": 1.3,
        "weight": 26.6,
        "formats": [
            "UUBL"
        ],
        "oob": {
            "dex_number": 478
        },
        "types": [
            "Ice",
            "Ghost"
        ]
    },
    {
        "name": "Rotom",
        "abilities": [
            "Levitate"
        ],
        "stats": [
            {
                "hp": 50
            },
            {
                "atk": 50
            },
            {
                "def": 77
            },
            {
                "spa": 95
            },
            {
                "spd": 77
            }
        ],
        "height": 0.3,
        "weight": 0.3,
        "formats": [
            "RU"
        ],
        "oob": {
            "dex_number": 479
        },
        "types": [
            "Electric",
            "Ghost"
        ]
    },
    {
        "name": "Rotom-Fan",
        "abilities": [
            "Levitate"
        ],
        "stats": [
            {
                "hp": 50
            },
            {
                "atk": 65
            },
            {
                "def": 107
            },
            {
                "spa": 105
            },
            {
                "spd": 107
            }
        ],
        "height": 0.3,
        "weight": 0.3,
        "formats": [
            "NU"
        ],
        "oob": {
            "dex_number": 479
        },
        "types": [
            "Electric",
            "Flying"
        ]
    },
    {
        "name": "Rotom-Frost",
        "abilities": [
            "Levitate"
        ],
        "stats": [
            {
                "hp": 50
            },
            {
                "atk": 65
            },
            {
                "def": 107
            },
            {
                "spa": 105
            },
            {
                "spd": 107
            }
        ],
        "height": 0.3,
        "weight": 0.3,
        "formats": [
            "PUBL"
        ],
        "oob": {
            "dex_number": 479
        },
        "types": [
            "Electric",
            "Ice"
        ]
    },
    {
        "name": "Rotom-Heat",
        "abilities": [
            "Levitate"
        ],
        "stats": [
            {
                "hp": 50
            },
            {
                "atk": 65
            },
            {
                "def": 107
            },
            {
                "spa": 105
            },
            {
                "spd": 107
            }
        ],
        "height": 0.3,
        "weight": 0.3,
        "formats": [
            "UU"
        ],
        "oob": {
            "dex_number": 479
        },
        "types": [
            "Electric",
            "Fire"
        ]
    },
    {
        "name": "Rotom-Mow",
        "abilities": [
            "Levitate"
        ],
        "stats": [
            {
                "hp": 50
            },
            {
                "atk": 65
            },
            {
                "def": 107
            },
            {
                "spa": 105
            },
            {
                "spd": 107
            }
        ],
        "height": 0.3,
        "weight": 0.3,
        "formats": [
            "RU"
        ],
        "oob": {
            "dex_number": 479
        },
        "types": [
            "Electric",
            "Grass"
        ]
    },
    {
        "name": "Rotom-Wash",
        "abilities": [
            "Levitate"
        ],
        "stats": [
            {
                "hp": 50
            },
            {
                "atk": 65
            },
            {
                "def": 107
            },
            {
                "spa": 105
            },
            {
                "spd": 107
            }
        ],
        "height": 0.3,
        "weight": 0.3,
        "formats": [
            "OU"
        ],
        "oob": {
            "dex_number": 479
        },
        "types": [
            "Electric",
            "Water"
        ]
    },
    {
        "name": "Venonat",
        "abilities": [
            "Compound Eyes",
            "Tinted Lens",
            "Run Away"
        ],
        "stats": [
            {
                "hp": 60
            },
            {
                "atk": 55
            },
            {
                "def": 50
            },
            {
                "spa": 40
            },
            {
                "spd": 55
            }
        ],
        "height": 1,
        "weight": 30,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 48
        },
        "types": [
            "Bug",
            "Poison"
        ]
    },
    {
        "name": "Uxie",
        "abilities": [
            "Levitate"
        ],
        "stats": [
            {
                "hp": 75
            },
            {
                "atk": 75
            },
            {
                "def": 130
            },
            {
                "spa": 75
            },
            {
                "spd": 130
            }
        ],
        "height": 0.3,
        "weight": 0.3,
        "formats": [
            "RU"
        ],
        "oob": {
            "dex_number": 480
        },
        "types": [
            "Psychic"
        ]
    },
    {
        "name": "Mesprit",
        "abilities": [
            "Levitate"
        ],
        "stats": [
            {
                "hp": 80
            },
            {
                "atk": 105
            },
            {
                "def": 105
            },
            {
                "spa": 105
            },
            {
                "spd": 105
            }
        ],
        "height": 0.3,
        "weight": 0.3,
        "formats": [
            "RU"
        ],
        "oob": {
            "dex_number": 481
        },
        "types": [
            "Psychic"
        ]
    },
    {
        "name": "Azelf",
        "abilities": [
            "Levitate"
        ],
        "stats": [
            {
                "hp": 75
            },
            {
                "atk": 125
            },
            {
                "def": 70
            },
            {
                "spa": 125
            },
            {
                "spd": 70
            }
        ],
        "height": 0.3,
        "weight": 0.3,
        "formats": [
            "UU"
        ],
        "oob": {
            "dex_number": 482
        },
        "types": [
            "Psychic"
        ]
    },
    {
        "name": "Dialga",
        "abilities": [
            "Pressure",
            "Telepathy"
        ],
        "stats": [
            {
                "hp": 100
            },
            {
                "atk": 120
            },
            {
                "def": 120
            },
            {
                "spa": 150
            },
            {
                "spd": 100
            }
        ],
        "height": 5.4,
        "weight": 683,
        "formats": [
            "Uber"
        ],
        "oob": {
            "dex_number": 483
        },
        "types": [
            "Steel",
            "Dragon"
        ]
    },
    {
        "name": "Palkia",
        "abilities": [
            "Pressure",
            "Telepathy"
        ],
        "stats": [
            {
                "hp": 90
            },
            {
                "atk": 120
            },
            {
                "def": 100
            },
            {
                "spa": 150
            },
            {
                "spd": 120
            }
        ],
        "height": 4.2,
        "weight": 336,
        "formats": [
            "Uber"
        ],
        "oob": {
            "dex_number": 484
        },
        "types": [
            "Water",
            "Dragon"
        ]
    },
    {
        "name": "Heatran",
        "abilities": [
            "Flash Fire",
            "Flame Body"
        ],
        "stats": [
            {
                "hp": 91
            },
            {
                "atk": 90
            },
            {
                "def": 106
            },
            {
                "spa": 130
            },
            {
                "spd": 106
            }
        ],
        "height": 1.7,
        "weight": 430,
        "formats": [
            "OU"
        ],
        "oob": {
            "dex_number": 485
        },
        "types": [
            "Fire",
            "Steel"
        ]
    },
    {
        "name": "Regigigas",
        "abilities": [
            "Slow Start"
        ],
        "stats": [
            {
                "hp": 110
            },
            {
                "atk": 160
            },
            {
                "def": 110
            },
            {
                "spa": 80
            },
            {
                "spd": 110
            }
        ],
        "height": 3.7,
        "weight": 420,
        "formats": [
            "ZUBL"
        ],
        "oob": {
            "dex_number": 486
        },
        "types": [
            "Normal"
        ]
    },
    {
        "name": "Giratina",
        "abilities": [
            "Pressure",
            "Telepathy"
        ],
        "stats": [
            {
                "hp": 150
            },
            {
                "atk": 100
            },
            {
                "def": 120
            },
            {
                "spa": 100
            },
            {
                "spd": 120
            }
        ],
        "height": 4.5,
        "weight": 750,
        "formats": [
            "Uber"
        ],
        "oob": {
            "dex_number": 487
        },
        "types": [
            "Ghost",
            "Dragon"
        ]
    },
    {
        "name": "Giratina-Origin",
        "abilities": [
            "Levitate"
        ],
        "stats": [
            {
                "hp": 150
            },
            {
                "atk": 120
            },
            {
                "def": 100
            },
            {
                "spa": 120
            },
            {
                "spd": 100
            }
        ],
        "height": 6.9,
        "weight": 650,
        "formats": [
            "Uber"
        ],
        "oob": {
            "dex_number": 487
        },
        "types": [
            "Ghost",
            "Dragon"
        ]
    },
    {
        "name": "Cresselia",
        "abilities": [
            "Levitate"
        ],
        "stats": [
            {
                "hp": 120
            },
            {
                "atk": 70
            },
            {
                "def": 120
            },
            {
                "spa": 75
            },
            {
                "spd": 130
            }
        ],
        "height": 1.5,
        "weight": 85.6,
        "formats": [
            "RUBL"
        ],
        "oob": {
            "dex_number": 488
        },
        "types": [
            "Psychic"
        ]
    },
    {
        "name": "Phione",
        "abilities": [
            "Hydration"
        ],
        "stats": [
            {
                "hp": 80
            },
            {
                "atk": 80
            },
            {
                "def": 80
            },
            {
                "spa": 80
            },
            {
                "spd": 80
            }
        ],
        "height": 0.4,
        "weight": 3.1,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 489
        },
        "types": [
            "Water"
        ]
    },
    {
        "name": "Venomoth",
        "abilities": [
            "Shield Dust",
            "Tinted Lens",
            "Wonder Skin"
        ],
        "stats": [
            {
                "hp": 70
            },
            {
                "atk": 65
            },
            {
                "def": 60
            },
            {
                "spa": 90
            },
            {
                "spd": 75
            }
        ],
        "height": 1.5,
        "weight": 12.5,
        "formats": [
            "RUBL"
        ],
        "oob": {
            "dex_number": 49
        },
        "types": [
            "Bug",
            "Poison"
        ]
    },
    {
        "name": "Manaphy",
        "abilities": [
            "Hydration"
        ],
        "stats": [
            {
                "hp": 100
            },
            {
                "atk": 100
            },
            {
                "def": 100
            },
            {
                "spa": 100
            },
            {
                "spd": 100
            }
        ],
        "height": 0.3,
        "weight": 1.4,
        "formats": [
            "Uber"
        ],
        "oob": {
            "dex_number": 490
        },
        "types": [
            "Water"
        ]
    },
    {
        "name": "Darkrai",
        "abilities": [
            "Bad Dreams"
        ],
        "stats": [
            {
                "hp": 70
            },
            {
                "atk": 90
            },
            {
                "def": 90
            },
            {
                "spa": 135
            },
            {
                "spd": 90
            }
        ],
        "height": 1.5,
        "weight": 50.5,
        "formats": [
            "Uber"
        ],
        "oob": {
            "dex_number": 491
        },
        "types": [
            "Dark"
        ]
    },
    {
        "name": "Shaymin",
        "abilities": [
            "Natural Cure"
        ],
        "stats": [
            {
                "hp": 100
            },
            {
                "atk": 100
            },
            {
                "def": 100
            },
            {
                "spa": 100
            },
            {
                "spd": 100
            }
        ],
        "height": 0.2,
        "weight": 2.1,
        "formats": [
            "UU"
        ],
        "oob": {
            "dex_number": 492
        },
        "types": [
            "Grass"
        ]
    },
    {
        "name": "Shaymin-Sky",
        "abilities": [
            "Serene Grace"
        ],
        "stats": [
            {
                "hp": 100
            },
            {
                "atk": 103
            },
            {
                "def": 75
            },
            {
                "spa": 120
            },
            {
                "spd": 75
            }
        ],
        "height": 0.4,
        "weight": 5.2,
        "formats": [
            "Uber"
        ],
        "oob": {
            "dex_number": 492
        },
        "types": [
            "Grass",
            "Flying"
        ]
    },
    {
        "name": "Arceus",
        "abilities": [
            "Multitype"
        ],
        "stats": [
            {
                "hp": 120
            },
            {
                "atk": 120
            },
            {
                "def": 120
            },
            {
                "spa": 120
            },
            {
                "spd": 120
            }
        ],
        "height": 3.2,
        "weight": 320,
        "formats": [
            "Uber"
        ],
        "oob": {
            "dex_number": 493
        },
        "types": [
            "Normal"
        ]
    },
    {
        "name": "Arceus-Bug",
        "abilities": [
            "Multitype"
        ],
        "stats": [
            {
                "hp": 120
            },
            {
                "atk": 120
            },
            {
                "def": 120
            },
            {
                "spa": 120
            },
            {
                "spd": 120
            }
        ],
        "height": 3.2,
        "weight": 320,
        "formats": [
            "Uber"
        ],
        "oob": {
            "dex_number": 493
        },
        "types": [
            "Bug"
        ]
    },
    {
        "name": "Arceus-Dark",
        "abilities": [
            "Multitype"
        ],
        "stats": [
            {
                "hp": 120
            },
            {
                "atk": 120
            },
            {
                "def": 120
            },
            {
                "spa": 120
            },
            {
                "spd": 120
            }
        ],
        "height": 3.2,
        "weight": 320,
        "formats": [
            "Uber"
        ],
        "oob": {
            "dex_number": 493
        },
        "types": [
            "Dark"
        ]
    },
    {
        "name": "Arceus-Dragon",
        "abilities": [
            "Multitype"
        ],
        "stats": [
            {
                "hp": 120
            },
            {
                "atk": 120
            },
            {
                "def": 120
            },
            {
                "spa": 120
            },
            {
                "spd": 120
            }
        ],
        "height": 3.2,
        "weight": 320,
        "formats": [
            "Uber"
        ],
        "oob": {
            "dex_number": 493
        },
        "types": [
            "Dragon"
        ]
    },
    {
        "name": "Arceus-Electric",
        "abilities": [
            "Multitype"
        ],
        "stats": [
            {
                "hp": 120
            },
            {
                "atk": 120
            },
            {
                "def": 120
            },
            {
                "spa": 120
            },
            {
                "spd": 120
            }
        ],
        "height": 3.2,
        "weight": 320,
        "formats": [
            "Uber"
        ],
        "oob": {
            "dex_number": 493
        },
        "types": [
            "Electric"
        ]
    },
    {
        "name": "Arceus-Fighting",
        "abilities": [
            "Multitype"
        ],
        "stats": [
            {
                "hp": 120
            },
            {
                "atk": 120
            },
            {
                "def": 120
            },
            {
                "spa": 120
            },
            {
                "spd": 120
            }
        ],
        "height": 3.2,
        "weight": 320,
        "formats": [
            "Uber"
        ],
        "oob": {
            "dex_number": 493
        },
        "types": [
            "Fighting"
        ]
    },
    {
        "name": "Arceus-Fire",
        "abilities": [
            "Multitype"
        ],
        "stats": [
            {
                "hp": 120
            },
            {
                "atk": 120
            },
            {
                "def": 120
            },
            {
                "spa": 120
            },
            {
                "spd": 120
            }
        ],
        "height": 3.2,
        "weight": 320,
        "formats": [
            "Uber"
        ],
        "oob": {
            "dex_number": 493
        },
        "types": [
            "Fire"
        ]
    },
    {
        "name": "Arceus-Flying",
        "abilities": [
            "Multitype"
        ],
        "stats": [
            {
                "hp": 120
            },
            {
                "atk": 120
            },
            {
                "def": 120
            },
            {
                "spa": 120
            },
            {
                "spd": 120
            }
        ],
        "height": 3.2,
        "weight": 320,
        "formats": [
            "Uber"
        ],
        "oob": {
            "dex_number": 493
        },
        "types": [
            "Flying"
        ]
    },
    {
        "name": "Arceus-Ghost",
        "abilities": [
            "Multitype"
        ],
        "stats": [
            {
                "hp": 120
            },
            {
                "atk": 120
            },
            {
                "def": 120
            },
            {
                "spa": 120
            },
            {
                "spd": 120
            }
        ],
        "height": 3.2,
        "weight": 320,
        "formats": [
            "Uber"
        ],
        "oob": {
            "dex_number": 493
        },
        "types": [
            "Ghost"
        ]
    },
    {
        "name": "Arceus-Grass",
        "abilities": [
            "Multitype"
        ],
        "stats": [
            {
                "hp": 120
            },
            {
                "atk": 120
            },
            {
                "def": 120
            },
            {
                "spa": 120
            },
            {
                "spd": 120
            }
        ],
        "height": 3.2,
        "weight": 320,
        "formats": [
            "Uber"
        ],
        "oob": {
            "dex_number": 493
        },
        "types": [
            "Grass"
        ]
    },
    {
        "name": "Arceus-Ground",
        "abilities": [
            "Multitype"
        ],
        "stats": [
            {
                "hp": 120
            },
            {
                "atk": 120
            },
            {
                "def": 120
            },
            {
                "spa": 120
            },
            {
                "spd": 120
            }
        ],
        "height": 3.2,
        "weight": 320,
        "formats": [
            "Uber"
        ],
        "oob": {
            "dex_number": 493
        },
        "types": [
            "Ground"
        ]
    },
    {
        "name": "Arceus-Ice",
        "abilities": [
            "Multitype"
        ],
        "stats": [
            {
                "hp": 120
            },
            {
                "atk": 120
            },
            {
                "def": 120
            },
            {
                "spa": 120
            },
            {
                "spd": 120
            }
        ],
        "height": 3.2,
        "weight": 320,
        "formats": [
            "Uber"
        ],
        "oob": {
            "dex_number": 493
        },
        "types": [
            "Ice"
        ]
    },
    {
        "name": "Arceus-Poison",
        "abilities": [
            "Multitype"
        ],
        "stats": [
            {
                "hp": 120
            },
            {
                "atk": 120
            },
            {
                "def": 120
            },
            {
                "spa": 120
            },
            {
                "spd": 120
            }
        ],
        "height": 3.2,
        "weight": 320,
        "formats": [
            "Uber"
        ],
        "oob": {
            "dex_number": 493
        },
        "types": [
            "Poison"
        ]
    },
    {
        "name": "Arceus-Psychic",
        "abilities": [
            "Multitype"
        ],
        "stats": [
            {
                "hp": 120
            },
            {
                "atk": 120
            },
            {
                "def": 120
            },
            {
                "spa": 120
            },
            {
                "spd": 120
            }
        ],
        "height": 3.2,
        "weight": 320,
        "formats": [
            "Uber"
        ],
        "oob": {
            "dex_number": 493
        },
        "types": [
            "Psychic"
        ]
    },
    {
        "name": "Arceus-Rock",
        "abilities": [
            "Multitype"
        ],
        "stats": [
            {
                "hp": 120
            },
            {
                "atk": 120
            },
            {
                "def": 120
            },
            {
                "spa": 120
            },
            {
                "spd": 120
            }
        ],
        "height": 3.2,
        "weight": 320,
        "formats": [
            "Uber"
        ],
        "oob": {
            "dex_number": 493
        },
        "types": [
            "Rock"
        ]
    },
    {
        "name": "Arceus-Steel",
        "abilities": [
            "Multitype"
        ],
        "stats": [
            {
                "hp": 120
            },
            {
                "atk": 120
            },
            {
                "def": 120
            },
            {
                "spa": 120
            },
            {
                "spd": 120
            }
        ],
        "height": 3.2,
        "weight": 320,
        "formats": [
            "Uber"
        ],
        "oob": {
            "dex_number": 493
        },
        "types": [
            "Steel"
        ]
    },
    {
        "name": "Arceus-Water",
        "abilities": [
            "Multitype"
        ],
        "stats": [
            {
                "hp": 120
            },
            {
                "atk": 120
            },
            {
                "def": 120
            },
            {
                "spa": 120
            },
            {
                "spd": 120
            }
        ],
        "height": 3.2,
        "weight": 320,
        "formats": [
            "Uber"
        ],
        "oob": {
            "dex_number": 493
        },
        "types": [
            "Water"
        ]
    },
    {
        "name": "Victini",
        "abilities": [
            "Victory Star"
        ],
        "stats": [
            {
                "hp": 100
            },
            {
                "atk": 100
            },
            {
                "def": 100
            },
            {
                "spa": 100
            },
            {
                "spd": 100
            }
        ],
        "height": 0.4,
        "weight": 4,
        "formats": [
            "UU"
        ],
        "oob": {
            "dex_number": 494
        },
        "types": [
            "Psychic",
            "Fire"
        ]
    },
    {
        "name": "Snivy",
        "abilities": [
            "Overgrow",
            "Contrary"
        ],
        "stats": [
            {
                "hp": 45
            },
            {
                "atk": 45
            },
            {
                "def": 55
            },
            {
                "spa": 45
            },
            {
                "spd": 55
            }
        ],
        "height": 0.6,
        "weight": 8.1,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 495
        },
        "types": [
            "Grass"
        ]
    },
    {
        "name": "Servine",
        "abilities": [
            "Overgrow",
            "Contrary"
        ],
        "stats": [
            {
                "hp": 60
            },
            {
                "atk": 60
            },
            {
                "def": 75
            },
            {
                "spa": 60
            },
            {
                "spd": 75
            }
        ],
        "height": 0.8,
        "weight": 16,
        "formats": [
            "NFE"
        ],
        "oob": {
            "dex_number": 496
        },
        "types": [
            "Grass"
        ]
    },
    {
        "name": "Serperior",
        "abilities": [
            "Overgrow",
            "Contrary"
        ],
        "stats": [
            {
                "hp": 75
            },
            {
                "atk": 75
            },
            {
                "def": 95
            },
            {
                "spa": 75
            },
            {
                "spd": 95
            }
        ],
        "height": 3.3,
        "weight": 63,
        "formats": [
            "NU"
        ],
        "oob": {
            "dex_number": 497
        },
        "types": [
            "Grass"
        ]
    },
    {
        "name": "Tepig",
        "abilities": [
            "Blaze",
            "Thick Fat"
        ],
        "stats": [
            {
                "hp": 65
            },
            {
                "atk": 63
            },
            {
                "def": 45
            },
            {
                "spa": 45
            },
            {
                "spd": 45
            }
        ],
        "height": 0.5,
        "weight": 9.9,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 498
        },
        "types": [
            "Fire"
        ]
    },
    {
        "name": "Pignite",
        "abilities": [
            "Blaze",
            "Thick Fat"
        ],
        "stats": [
            {
                "hp": 90
            },
            {
                "atk": 93
            },
            {
                "def": 55
            },
            {
                "spa": 70
            },
            {
                "spd": 55
            }
        ],
        "height": 1,
        "weight": 55.5,
        "formats": [
            "NFE"
        ],
        "oob": {
            "dex_number": 499
        },
        "types": [
            "Fire",
            "Fighting"
        ]
    },
    {
        "name": "Charmeleon",
        "abilities": [
            "Blaze",
            "Solar Power"
        ],
        "stats": [
            {
                "hp": 58
            },
            {
                "atk": 64
            },
            {
                "def": 58
            },
            {
                "spa": 80
            },
            {
                "spd": 65
            }
        ],
        "height": 1.1,
        "weight": 19,
        "formats": [
            "NFE"
        ],
        "oob": {
            "dex_number": 5
        },
        "types": [
            "Fire"
        ]
    },
    {
        "name": "Diglett",
        "abilities": [
            "Sand Veil",
            "Arena Trap",
            "Sand Force"
        ],
        "stats": [
            {
                "hp": 10
            },
            {
                "atk": 55
            },
            {
                "def": 25
            },
            {
                "spa": 35
            },
            {
                "spd": 45
            }
        ],
        "height": 0.2,
        "weight": 0.8,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 50
        },
        "types": [
            "Ground"
        ]
    },
    {
        "name": "Emboar",
        "abilities": [
            "Blaze",
            "Reckless"
        ],
        "stats": [
            {
                "hp": 110
            },
            {
                "atk": 123
            },
            {
                "def": 65
            },
            {
                "spa": 100
            },
            {
                "spd": 65
            }
        ],
        "height": 1.6,
        "weight": 150,
        "formats": [
            "RU"
        ],
        "oob": {
            "dex_number": 500
        },
        "types": [
            "Fire",
            "Fighting"
        ]
    },
    {
        "name": "Oshawott",
        "abilities": [
            "Torrent",
            "Shell Armor"
        ],
        "stats": [
            {
                "hp": 55
            },
            {
                "atk": 55
            },
            {
                "def": 45
            },
            {
                "spa": 63
            },
            {
                "spd": 45
            }
        ],
        "height": 0.5,
        "weight": 5.9,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 501
        },
        "types": [
            "Water"
        ]
    },
    {
        "name": "Dewott",
        "abilities": [
            "Torrent",
            "Shell Armor"
        ],
        "stats": [
            {
                "hp": 75
            },
            {
                "atk": 75
            },
            {
                "def": 60
            },
            {
                "spa": 83
            },
            {
                "spd": 60
            }
        ],
        "height": 0.8,
        "weight": 24.5,
        "formats": [
            "NFE"
        ],
        "oob": {
            "dex_number": 502
        },
        "types": [
            "Water"
        ]
    },
    {
        "name": "Samurott",
        "abilities": [
            "Torrent",
            "Shell Armor"
        ],
        "stats": [
            {
                "hp": 95
            },
            {
                "atk": 100
            },
            {
                "def": 85
            },
            {
                "spa": 108
            },
            {
                "spd": 70
            }
        ],
        "height": 1.5,
        "weight": 94.6,
        "formats": [
            "NU"
        ],
        "oob": {
            "dex_number": 503
        },
        "types": [
            "Water"
        ]
    },
    {
        "name": "Patrat",
        "abilities": [
            "Run Away",
            "Keen Eye",
            "Analytic"
        ],
        "stats": [
            {
                "hp": 45
            },
            {
                "atk": 55
            },
            {
                "def": 39
            },
            {
                "spa": 35
            },
            {
                "spd": 39
            }
        ],
        "height": 0.5,
        "weight": 11.6,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 504
        },
        "types": [
            "Normal"
        ]
    },
    {
        "name": "Watchog",
        "abilities": [
            "Illuminate",
            "Keen Eye",
            "Analytic"
        ],
        "stats": [
            {
                "hp": 60
            },
            {
                "atk": 85
            },
            {
                "def": 69
            },
            {
                "spa": 60
            },
            {
                "spd": 69
            }
        ],
        "height": 1.1,
        "weight": 27,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 505
        },
        "types": [
            "Normal"
        ]
    },
    {
        "name": "Lillipup",
        "abilities": [
            "Vital Spirit",
            "Pickup",
            "Run Away"
        ],
        "stats": [
            {
                "hp": 45
            },
            {
                "atk": 60
            },
            {
                "def": 45
            },
            {
                "spa": 25
            },
            {
                "spd": 45
            }
        ],
        "height": 0.4,
        "weight": 4.1,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 506
        },
        "types": [
            "Normal"
        ]
    },
    {
        "name": "Herdier",
        "abilities": [
            "Intimidate",
            "Sand Rush",
            "Scrappy"
        ],
        "stats": [
            {
                "hp": 65
            },
            {
                "atk": 80
            },
            {
                "def": 65
            },
            {
                "spa": 35
            },
            {
                "spd": 65
            }
        ],
        "height": 0.9,
        "weight": 14.7,
        "formats": [
            "NFE"
        ],
        "oob": {
            "dex_number": 507
        },
        "types": [
            "Normal"
        ]
    },
    {
        "name": "Stoutland",
        "abilities": [
            "Intimidate",
            "Sand Rush",
            "Scrappy"
        ],
        "stats": [
            {
                "hp": 85
            },
            {
                "atk": 100
            },
            {
                "def": 90
            },
            {
                "spa": 45
            },
            {
                "spd": 90
            }
        ],
        "height": 1.2,
        "weight": 61,
        "formats": [
            "PU"
        ],
        "oob": {
            "dex_number": 508
        },
        "types": [
            "Normal"
        ]
    },
    {
        "name": "Purrloin",
        "abilities": [
            "Limber",
            "Unburden",
            "Prankster"
        ],
        "stats": [
            {
                "hp": 41
            },
            {
                "atk": 50
            },
            {
                "def": 37
            },
            {
                "spa": 50
            },
            {
                "spd": 37
            }
        ],
        "height": 0.4,
        "weight": 10.1,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 509
        },
        "types": [
            "Dark"
        ]
    },
    {
        "name": "Dugtrio",
        "abilities": [
            "Sand Veil",
            "Arena Trap",
            "Sand Force"
        ],
        "stats": [
            {
                "hp": 35
            },
            {
                "atk": 80
            },
            {
                "def": 50
            },
            {
                "spa": 50
            },
            {
                "spd": 70
            }
        ],
        "height": 0.7,
        "weight": 33.3,
        "formats": [
            "OU"
        ],
        "oob": {
            "dex_number": 51
        },
        "types": [
            "Ground"
        ]
    },
    {
        "name": "Liepard",
        "abilities": [
            "Limber",
            "Unburden",
            "Prankster"
        ],
        "stats": [
            {
                "hp": 64
            },
            {
                "atk": 88
            },
            {
                "def": 50
            },
            {
                "spa": 88
            },
            {
                "spd": 50
            }
        ],
        "height": 1.1,
        "weight": 37.5,
        "formats": [
            "NU"
        ],
        "oob": {
            "dex_number": 510
        },
        "types": [
            "Dark"
        ]
    },
    {
        "name": "Pansage",
        "abilities": [
            "Gluttony",
            "Overgrow"
        ],
        "stats": [
            {
                "hp": 50
            },
            {
                "atk": 53
            },
            {
                "def": 48
            },
            {
                "spa": 53
            },
            {
                "spd": 48
            }
        ],
        "height": 0.6,
        "weight": 10.5,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 511
        },
        "types": [
            "Grass"
        ]
    },
    {
        "name": "Simisage",
        "abilities": [
            "Gluttony",
            "Overgrow"
        ],
        "stats": [
            {
                "hp": 75
            },
            {
                "atk": 98
            },
            {
                "def": 63
            },
            {
                "spa": 98
            },
            {
                "spd": 63
            }
        ],
        "height": 1.1,
        "weight": 30.5,
        "formats": [
            "PU"
        ],
        "oob": {
            "dex_number": 512
        },
        "types": [
            "Grass"
        ]
    },
    {
        "name": "Pansear",
        "abilities": [
            "Gluttony",
            "Blaze"
        ],
        "stats": [
            {
                "hp": 50
            },
            {
                "atk": 53
            },
            {
                "def": 48
            },
            {
                "spa": 53
            },
            {
                "spd": 48
            }
        ],
        "height": 0.6,
        "weight": 11,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 513
        },
        "types": [
            "Fire"
        ]
    },
    {
        "name": "Simisear",
        "abilities": [
            "Gluttony",
            "Blaze"
        ],
        "stats": [
            {
                "hp": 75
            },
            {
                "atk": 98
            },
            {
                "def": 63
            },
            {
                "spa": 98
            },
            {
                "spd": 63
            }
        ],
        "height": 1,
        "weight": 28,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 514
        },
        "types": [
            "Fire"
        ]
    },
    {
        "name": "Panpour",
        "abilities": [
            "Gluttony",
            "Torrent"
        ],
        "stats": [
            {
                "hp": 50
            },
            {
                "atk": 53
            },
            {
                "def": 48
            },
            {
                "spa": 53
            },
            {
                "spd": 48
            }
        ],
        "height": 0.6,
        "weight": 13.5,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 515
        },
        "types": [
            "Water"
        ]
    },
    {
        "name": "Simipour",
        "abilities": [
            "Gluttony",
            "Torrent"
        ],
        "stats": [
            {
                "hp": 75
            },
            {
                "atk": 98
            },
            {
                "def": 63
            },
            {
                "spa": 98
            },
            {
                "spd": 63
            }
        ],
        "height": 1,
        "weight": 29,
        "formats": [
            "PUBL"
        ],
        "oob": {
            "dex_number": 516
        },
        "types": [
            "Water"
        ]
    },
    {
        "name": "Munna",
        "abilities": [
            "Forewarn",
            "Synchronize",
            "Telepathy"
        ],
        "stats": [
            {
                "hp": 76
            },
            {
                "atk": 25
            },
            {
                "def": 45
            },
            {
                "spa": 67
            },
            {
                "spd": 55
            }
        ],
        "height": 0.6,
        "weight": 23.3,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 517
        },
        "types": [
            "Psychic"
        ]
    },
    {
        "name": "Musharna",
        "abilities": [
            "Forewarn",
            "Synchronize",
            "Telepathy"
        ],
        "stats": [
            {
                "hp": 116
            },
            {
                "atk": 55
            },
            {
                "def": 85
            },
            {
                "spa": 107
            },
            {
                "spd": 95
            }
        ],
        "height": 1.1,
        "weight": 60.5,
        "formats": [
            "NU"
        ],
        "oob": {
            "dex_number": 518
        },
        "types": [
            "Psychic"
        ]
    },
    {
        "name": "Pidove",
        "abilities": [
            "Big Pecks",
            "Super Luck",
            "Rivalry"
        ],
        "stats": [
            {
                "hp": 50
            },
            {
                "atk": 55
            },
            {
                "def": 50
            },
            {
                "spa": 36
            },
            {
                "spd": 30
            }
        ],
        "height": 0.3,
        "weight": 2.1,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 519
        },
        "types": [
            "Normal",
            "Flying"
        ]
    },
    {
        "name": "Meowth",
        "abilities": [
            "Pickup",
            "Technician",
            "Unnerve"
        ],
        "stats": [
            {
                "hp": 40
            },
            {
                "atk": 45
            },
            {
                "def": 35
            },
            {
                "spa": 40
            },
            {
                "spd": 40
            }
        ],
        "height": 0.4,
        "weight": 4.2,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 52
        },
        "types": [
            "Normal"
        ]
    },
    {
        "name": "Tranquill",
        "abilities": [
            "Big Pecks",
            "Super Luck",
            "Rivalry"
        ],
        "stats": [
            {
                "hp": 62
            },
            {
                "atk": 77
            },
            {
                "def": 62
            },
            {
                "spa": 50
            },
            {
                "spd": 42
            }
        ],
        "height": 0.6,
        "weight": 15,
        "formats": [
            "NFE"
        ],
        "oob": {
            "dex_number": 520
        },
        "types": [
            "Normal",
            "Flying"
        ]
    },
    {
        "name": "Unfezant",
        "abilities": [
            "Big Pecks",
            "Super Luck",
            "Rivalry"
        ],
        "stats": [
            {
                "hp": 80
            },
            {
                "atk": 105
            },
            {
                "def": 80
            },
            {
                "spa": 65
            },
            {
                "spd": 55
            }
        ],
        "height": 1.2,
        "weight": 29,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 521
        },
        "types": [
            "Normal",
            "Flying"
        ]
    },
    {
        "name": "Blitzle",
        "abilities": [
            "Lightning Rod",
            "Motor Drive",
            "Sap Sipper"
        ],
        "stats": [
            {
                "hp": 45
            },
            {
                "atk": 60
            },
            {
                "def": 32
            },
            {
                "spa": 50
            },
            {
                "spd": 32
            }
        ],
        "height": 0.8,
        "weight": 29.8,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 522
        },
        "types": [
            "Electric"
        ]
    },
    {
        "name": "Zebstrika",
        "abilities": [
            "Lightning Rod",
            "Motor Drive",
            "Sap Sipper"
        ],
        "stats": [
            {
                "hp": 75
            },
            {
                "atk": 100
            },
            {
                "def": 63
            },
            {
                "spa": 80
            },
            {
                "spd": 63
            }
        ],
        "height": 1.6,
        "weight": 79.5,
        "formats": [
            "PU"
        ],
        "oob": {
            "dex_number": 523
        },
        "types": [
            "Electric"
        ]
    },
    {
        "name": "Roggenrola",
        "abilities": [
            "Sturdy",
            "Sand Force"
        ],
        "stats": [
            {
                "hp": 55
            },
            {
                "atk": 75
            },
            {
                "def": 85
            },
            {
                "spa": 25
            },
            {
                "spd": 25
            }
        ],
        "height": 0.4,
        "weight": 18,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 524
        },
        "types": [
            "Rock"
        ]
    },
    {
        "name": "Boldore",
        "abilities": [
            "Sturdy",
            "Sand Force"
        ],
        "stats": [
            {
                "hp": 70
            },
            {
                "atk": 105
            },
            {
                "def": 105
            },
            {
                "spa": 50
            },
            {
                "spd": 40
            }
        ],
        "height": 0.9,
        "weight": 102,
        "formats": [
            "NFE"
        ],
        "oob": {
            "dex_number": 525
        },
        "types": [
            "Rock"
        ]
    },
    {
        "name": "Gigalith",
        "abilities": [
            "Sturdy",
            "Sand Force"
        ],
        "stats": [
            {
                "hp": 85
            },
            {
                "atk": 135
            },
            {
                "def": 130
            },
            {
                "spa": 60
            },
            {
                "spd": 70
            }
        ],
        "height": 1.7,
        "weight": 260,
        "formats": [
            "NU"
        ],
        "oob": {
            "dex_number": 526
        },
        "types": [
            "Rock"
        ]
    },
    {
        "name": "Woobat",
        "abilities": [
            "Unaware",
            "Klutz",
            "Simple"
        ],
        "stats": [
            {
                "hp": 55
            },
            {
                "atk": 45
            },
            {
                "def": 43
            },
            {
                "spa": 55
            },
            {
                "spd": 43
            }
        ],
        "height": 0.4,
        "weight": 2.1,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 527
        },
        "types": [
            "Psychic",
            "Flying"
        ]
    },
    {
        "name": "Swoobat",
        "abilities": [
            "Unaware",
            "Klutz",
            "Simple"
        ],
        "stats": [
            {
                "hp": 67
            },
            {
                "atk": 57
            },
            {
                "def": 55
            },
            {
                "spa": 77
            },
            {
                "spd": 55
            }
        ],
        "height": 0.9,
        "weight": 10.5,
        "formats": [
            "PU"
        ],
        "oob": {
            "dex_number": 528
        },
        "types": [
            "Psychic",
            "Flying"
        ]
    },
    {
        "name": "Drilbur",
        "abilities": [
            "Sand Rush",
            "Sand Force",
            "Mold Breaker"
        ],
        "stats": [
            {
                "hp": 60
            },
            {
                "atk": 85
            },
            {
                "def": 40
            },
            {
                "spa": 30
            },
            {
                "spd": 45
            }
        ],
        "height": 0.3,
        "weight": 8.5,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 529
        },
        "types": [
            "Ground"
        ]
    },
    {
        "name": "Persian",
        "abilities": [
            "Limber",
            "Technician",
            "Unnerve"
        ],
        "stats": [
            {
                "hp": 65
            },
            {
                "atk": 70
            },
            {
                "def": 60
            },
            {
                "spa": 65
            },
            {
                "spd": 65
            }
        ],
        "height": 1,
        "weight": 32,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 53
        },
        "types": [
            "Normal"
        ]
    },
    {
        "name": "Excadrill",
        "abilities": [
            "Sand Rush",
            "Sand Force",
            "Mold Breaker"
        ],
        "stats": [
            {
                "hp": 110
            },
            {
                "atk": 135
            },
            {
                "def": 60
            },
            {
                "spa": 50
            },
            {
                "spd": 65
            }
        ],
        "height": 0.7,
        "weight": 40.4,
        "formats": [
            "OU"
        ],
        "oob": {
            "dex_number": 530
        },
        "types": [
            "Ground",
            "Steel"
        ]
    },
    {
        "name": "Audino",
        "abilities": [
            "Healer",
            "Regenerator",
            "Klutz"
        ],
        "stats": [
            {
                "hp": 103
            },
            {
                "atk": 60
            },
            {
                "def": 86
            },
            {
                "spa": 60
            },
            {
                "spd": 86
            }
        ],
        "height": 1.1,
        "weight": 31,
        "formats": [
            "PU"
        ],
        "oob": {
            "dex_number": 531
        },
        "types": [
            "Normal"
        ]
    },
    {
        "name": "Timburr",
        "abilities": [
            "Guts",
            "Sheer Force",
            "Iron Fist"
        ],
        "stats": [
            {
                "hp": 75
            },
            {
                "atk": 80
            },
            {
                "def": 55
            },
            {
                "spa": 25
            },
            {
                "spd": 35
            }
        ],
        "height": 0.6,
        "weight": 12.5,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 532
        },
        "types": [
            "Fighting"
        ]
    },
    {
        "name": "Gurdurr",
        "abilities": [
            "Guts",
            "Sheer Force",
            "Iron Fist"
        ],
        "stats": [
            {
                "hp": 85
            },
            {
                "atk": 105
            },
            {
                "def": 85
            },
            {
                "spa": 40
            },
            {
                "spd": 50
            }
        ],
        "height": 1.2,
        "weight": 40,
        "formats": [
            "NU"
        ],
        "oob": {
            "dex_number": 533
        },
        "types": [
            "Fighting"
        ]
    },
    {
        "name": "Conkeldurr",
        "abilities": [
            "Guts",
            "Sheer Force",
            "Iron Fist"
        ],
        "stats": [
            {
                "hp": 105
            },
            {
                "atk": 140
            },
            {
                "def": 95
            },
            {
                "spa": 55
            },
            {
                "spd": 65
            }
        ],
        "height": 1.4,
        "weight": 87,
        "formats": [
            "OU"
        ],
        "oob": {
            "dex_number": 534
        },
        "types": [
            "Fighting"
        ]
    },
    {
        "name": "Tympole",
        "abilities": [
            "Swift Swim",
            "Hydration",
            "Water Absorb"
        ],
        "stats": [
            {
                "hp": 50
            },
            {
                "atk": 50
            },
            {
                "def": 40
            },
            {
                "spa": 50
            },
            {
                "spd": 40
            }
        ],
        "height": 0.5,
        "weight": 4.5,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 535
        },
        "types": [
            "Water"
        ]
    },
    {
        "name": "Palpitoad",
        "abilities": [
            "Swift Swim",
            "Hydration",
            "Water Absorb"
        ],
        "stats": [
            {
                "hp": 75
            },
            {
                "atk": 65
            },
            {
                "def": 55
            },
            {
                "spa": 65
            },
            {
                "spd": 55
            }
        ],
        "height": 0.8,
        "weight": 17,
        "formats": [
            "NFE"
        ],
        "oob": {
            "dex_number": 536
        },
        "types": [
            "Water",
            "Ground"
        ]
    },
    {
        "name": "Seismitoad",
        "abilities": [
            "Swift Swim",
            "Poison Touch",
            "Water Absorb"
        ],
        "stats": [
            {
                "hp": 105
            },
            {
                "atk": 85
            },
            {
                "def": 75
            },
            {
                "spa": 85
            },
            {
                "spd": 75
            }
        ],
        "height": 1.5,
        "weight": 62,
        "formats": [
            "NU"
        ],
        "oob": {
            "dex_number": 537
        },
        "types": [
            "Water",
            "Ground"
        ]
    },
    {
        "name": "Throh",
        "abilities": [
            "Guts",
            "Inner Focus",
            "Mold Breaker"
        ],
        "stats": [
            {
                "hp": 120
            },
            {
                "atk": 100
            },
            {
                "def": 85
            },
            {
                "spa": 30
            },
            {
                "spd": 85
            }
        ],
        "height": 1.3,
        "weight": 55.5,
        "formats": [
            "PUBL"
        ],
        "oob": {
            "dex_number": 538
        },
        "types": [
            "Fighting"
        ]
    },
    {
        "name": "Sawk",
        "abilities": [
            "Sturdy",
            "Inner Focus",
            "Mold Breaker"
        ],
        "stats": [
            {
                "hp": 75
            },
            {
                "atk": 125
            },
            {
                "def": 75
            },
            {
                "spa": 30
            },
            {
                "spd": 75
            }
        ],
        "height": 1.4,
        "weight": 51,
        "formats": [
            "NU"
        ],
        "oob": {
            "dex_number": 539
        },
        "types": [
            "Fighting"
        ]
    },
    {
        "name": "Psyduck",
        "abilities": [
            "Damp",
            "Cloud Nine",
            "Swift Swim"
        ],
        "stats": [
            {
                "hp": 50
            },
            {
                "atk": 52
            },
            {
                "def": 48
            },
            {
                "spa": 65
            },
            {
                "spd": 50
            }
        ],
        "height": 0.8,
        "weight": 19.6,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 54
        },
        "types": [
            "Water"
        ]
    },
    {
        "name": "Sewaddle",
        "abilities": [
            "Swarm",
            "Chlorophyll",
            "Overcoat"
        ],
        "stats": [
            {
                "hp": 45
            },
            {
                "atk": 53
            },
            {
                "def": 70
            },
            {
                "spa": 40
            },
            {
                "spd": 60
            }
        ],
        "height": 0.3,
        "weight": 2.5,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 540
        },
        "types": [
            "Bug",
            "Grass"
        ]
    },
    {
        "name": "Swadloon",
        "abilities": [
            "Leaf Guard",
            "Chlorophyll",
            "Overcoat"
        ],
        "stats": [
            {
                "hp": 55
            },
            {
                "atk": 63
            },
            {
                "def": 90
            },
            {
                "spa": 50
            },
            {
                "spd": 80
            }
        ],
        "height": 0.5,
        "weight": 7.3,
        "formats": [
            "NFE"
        ],
        "oob": {
            "dex_number": 541
        },
        "types": [
            "Bug",
            "Grass"
        ]
    },
    {
        "name": "Leavanny",
        "abilities": [
            "Swarm",
            "Chlorophyll",
            "Overcoat"
        ],
        "stats": [
            {
                "hp": 75
            },
            {
                "atk": 103
            },
            {
                "def": 80
            },
            {
                "spa": 70
            },
            {
                "spd": 70
            }
        ],
        "height": 1.2,
        "weight": 20.5,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 542
        },
        "types": [
            "Bug",
            "Grass"
        ]
    },
    {
        "name": "Venipede",
        "abilities": [
            "Poison Point",
            "Swarm",
            "Quick Feet"
        ],
        "stats": [
            {
                "hp": 30
            },
            {
                "atk": 45
            },
            {
                "def": 59
            },
            {
                "spa": 30
            },
            {
                "spd": 39
            }
        ],
        "height": 0.4,
        "weight": 5.3,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 543
        },
        "types": [
            "Bug",
            "Poison"
        ]
    },
    {
        "name": "Whirlipede",
        "abilities": [
            "Poison Point",
            "Swarm",
            "Quick Feet"
        ],
        "stats": [
            {
                "hp": 40
            },
            {
                "atk": 55
            },
            {
                "def": 99
            },
            {
                "spa": 40
            },
            {
                "spd": 79
            }
        ],
        "height": 1.2,
        "weight": 58.5,
        "formats": [
            "ZUBL"
        ],
        "oob": {
            "dex_number": 544
        },
        "types": [
            "Bug",
            "Poison"
        ]
    },
    {
        "name": "Scolipede",
        "abilities": [
            "Poison Point",
            "Swarm",
            "Quick Feet"
        ],
        "stats": [
            {
                "hp": 60
            },
            {
                "atk": 90
            },
            {
                "def": 89
            },
            {
                "spa": 55
            },
            {
                "spd": 69
            }
        ],
        "height": 2.5,
        "weight": 200.5,
        "formats": [
            "NUBL"
        ],
        "oob": {
            "dex_number": 545
        },
        "types": [
            "Bug",
            "Poison"
        ]
    },
    {
        "name": "Cottonee",
        "abilities": [
            "Prankster",
            "Infiltrator",
            "Chlorophyll"
        ],
        "stats": [
            {
                "hp": 40
            },
            {
                "atk": 27
            },
            {
                "def": 60
            },
            {
                "spa": 37
            },
            {
                "spd": 50
            }
        ],
        "height": 0.3,
        "weight": 0.6,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 546
        },
        "types": [
            "Grass"
        ]
    },
    {
        "name": "Whimsicott",
        "abilities": [
            "Prankster",
            "Infiltrator",
            "Chlorophyll"
        ],
        "stats": [
            {
                "hp": 60
            },
            {
                "atk": 67
            },
            {
                "def": 85
            },
            {
                "spa": 77
            },
            {
                "spd": 75
            }
        ],
        "height": 0.7,
        "weight": 6.6,
        "formats": [
            "RU"
        ],
        "oob": {
            "dex_number": 547
        },
        "types": [
            "Grass"
        ]
    },
    {
        "name": "Petilil",
        "abilities": [
            "Chlorophyll",
            "Own Tempo",
            "Leaf Guard"
        ],
        "stats": [
            {
                "hp": 45
            },
            {
                "atk": 35
            },
            {
                "def": 50
            },
            {
                "spa": 70
            },
            {
                "spd": 50
            }
        ],
        "height": 0.5,
        "weight": 6.6,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 548
        },
        "types": [
            "Grass"
        ]
    },
    {
        "name": "Lilligant",
        "abilities": [
            "Chlorophyll",
            "Own Tempo",
            "Leaf Guard"
        ],
        "stats": [
            {
                "hp": 70
            },
            {
                "atk": 60
            },
            {
                "def": 75
            },
            {
                "spa": 110
            },
            {
                "spd": 75
            }
        ],
        "height": 1.1,
        "weight": 16.3,
        "formats": [
            "RU"
        ],
        "oob": {
            "dex_number": 549
        },
        "types": [
            "Grass"
        ]
    },
    {
        "name": "Golduck",
        "abilities": [
            "Damp",
            "Cloud Nine",
            "Swift Swim"
        ],
        "stats": [
            {
                "hp": 80
            },
            {
                "atk": 82
            },
            {
                "def": 78
            },
            {
                "spa": 95
            },
            {
                "spd": 80
            }
        ],
        "height": 1.7,
        "weight": 76.6,
        "formats": [
            "PU"
        ],
        "oob": {
            "dex_number": 55
        },
        "types": [
            "Water"
        ]
    },
    {
        "name": "Basculin",
        "abilities": [
            "Reckless",
            "Adaptability",
            "Mold Breaker"
        ],
        "stats": [
            {
                "hp": 70
            },
            {
                "atk": 92
            },
            {
                "def": 65
            },
            {
                "spa": 80
            },
            {
                "spd": 55
            }
        ],
        "height": 1,
        "weight": 18,
        "formats": [
            "NU"
        ],
        "oob": {
            "dex_number": 550
        },
        "types": [
            "Water"
        ]
    },
    {
        "name": "Basculin-Blue-Striped",
        "abilities": [
            "Rock Head",
            "Adaptability",
            "Mold Breaker",
            "Reckless"
        ],
        "stats": [
            {
                "hp": 70
            },
            {
                "atk": 92
            },
            {
                "def": 65
            },
            {
                "spa": 80
            },
            {
                "spd": 55
            }
        ],
        "height": 1,
        "weight": 18,
        "formats": [
            "NU"
        ],
        "oob": {
            "dex_number": 550
        },
        "types": [
            "Water"
        ]
    },
    {
        "name": "Sandile",
        "abilities": [
            "Intimidate",
            "Moxie",
            "Anger Point"
        ],
        "stats": [
            {
                "hp": 50
            },
            {
                "atk": 72
            },
            {
                "def": 35
            },
            {
                "spa": 35
            },
            {
                "spd": 35
            }
        ],
        "height": 0.7,
        "weight": 15.2,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 551
        },
        "types": [
            "Ground",
            "Dark"
        ]
    },
    {
        "name": "Krokorok",
        "abilities": [
            "Intimidate",
            "Moxie",
            "Anger Point"
        ],
        "stats": [
            {
                "hp": 60
            },
            {
                "atk": 82
            },
            {
                "def": 45
            },
            {
                "spa": 45
            },
            {
                "spd": 45
            }
        ],
        "height": 1,
        "weight": 33.4,
        "formats": [
            "PU"
        ],
        "oob": {
            "dex_number": 552
        },
        "types": [
            "Ground",
            "Dark"
        ]
    },
    {
        "name": "Krookodile",
        "abilities": [
            "Intimidate",
            "Moxie",
            "Anger Point"
        ],
        "stats": [
            {
                "hp": 95
            },
            {
                "atk": 117
            },
            {
                "def": 70
            },
            {
                "spa": 65
            },
            {
                "spd": 70
            }
        ],
        "height": 1.5,
        "weight": 96.3,
        "formats": [
            "UU"
        ],
        "oob": {
            "dex_number": 553
        },
        "types": [
            "Ground",
            "Dark"
        ]
    },
    {
        "name": "Darumaka",
        "abilities": [
            "Hustle",
            "Inner Focus"
        ],
        "stats": [
            {
                "hp": 70
            },
            {
                "atk": 90
            },
            {
                "def": 45
            },
            {
                "spa": 15
            },
            {
                "spd": 45
            }
        ],
        "height": 0.6,
        "weight": 37.5,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 554
        },
        "types": [
            "Fire"
        ]
    },
    {
        "name": "Darmanitan",
        "abilities": [
            "Sheer Force",
            "Zen Mode"
        ],
        "stats": [
            {
                "hp": 105
            },
            {
                "atk": 140
            },
            {
                "def": 55
            },
            {
                "spa": 30
            },
            {
                "spd": 55
            }
        ],
        "height": 1.3,
        "weight": 92.9,
        "formats": [
            "UU"
        ],
        "oob": {
            "dex_number": 555
        },
        "types": [
            "Fire"
        ]
    },
    {
        "name": "Maractus",
        "abilities": [
            "Water Absorb",
            "Chlorophyll",
            "Storm Drain"
        ],
        "stats": [
            {
                "hp": 75
            },
            {
                "atk": 86
            },
            {
                "def": 67
            },
            {
                "spa": 106
            },
            {
                "spd": 67
            }
        ],
        "height": 1,
        "weight": 28,
        "formats": [
            "PU"
        ],
        "oob": {
            "dex_number": 556
        },
        "types": [
            "Grass"
        ]
    },
    {
        "name": "Dwebble",
        "abilities": [
            "Sturdy",
            "Shell Armor",
            "Weak Armor"
        ],
        "stats": [
            {
                "hp": 50
            },
            {
                "atk": 65
            },
            {
                "def": 85
            },
            {
                "spa": 35
            },
            {
                "spd": 35
            }
        ],
        "height": 0.3,
        "weight": 14.5,
        "formats": [
            "PU"
        ],
        "oob": {
            "dex_number": 557
        },
        "types": [
            "Bug",
            "Rock"
        ]
    },
    {
        "name": "Crustle",
        "abilities": [
            "Sturdy",
            "Shell Armor",
            "Weak Armor"
        ],
        "stats": [
            {
                "hp": 70
            },
            {
                "atk": 95
            },
            {
                "def": 125
            },
            {
                "spa": 65
            },
            {
                "spd": 75
            }
        ],
        "height": 1.4,
        "weight": 200,
        "formats": [
            "RU"
        ],
        "oob": {
            "dex_number": 558
        },
        "types": [
            "Bug",
            "Rock"
        ]
    },
    {
        "name": "Scraggy",
        "abilities": [
            "Shed Skin",
            "Moxie",
            "Intimidate"
        ],
        "stats": [
            {
                "hp": 50
            },
            {
                "atk": 75
            },
            {
                "def": 70
            },
            {
                "spa": 35
            },
            {
                "spd": 70
            }
        ],
        "height": 0.6,
        "weight": 11.8,
        "formats": [
            "PU"
        ],
        "oob": {
            "dex_number": 559
        },
        "types": [
            "Dark",
            "Fighting"
        ]
    },
    {
        "name": "Mankey",
        "abilities": [
            "Vital Spirit",
            "Anger Point",
            "Defiant"
        ],
        "stats": [
            {
                "hp": 40
            },
            {
                "atk": 80
            },
            {
                "def": 35
            },
            {
                "spa": 35
            },
            {
                "spd": 45
            }
        ],
        "height": 0.5,
        "weight": 28,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 56
        },
        "types": [
            "Fighting"
        ]
    },
    {
        "name": "Scrafty",
        "abilities": [
            "Shed Skin",
            "Moxie",
            "Intimidate"
        ],
        "stats": [
            {
                "hp": 65
            },
            {
                "atk": 90
            },
            {
                "def": 115
            },
            {
                "spa": 45
            },
            {
                "spd": 115
            }
        ],
        "height": 1.1,
        "weight": 30,
        "formats": [
            "UU"
        ],
        "oob": {
            "dex_number": 560
        },
        "types": [
            "Dark",
            "Fighting"
        ]
    },
    {
        "name": "Sigilyph",
        "abilities": [
            "Wonder Skin",
            "Magic Guard",
            "Tinted Lens"
        ],
        "stats": [
            {
                "hp": 72
            },
            {
                "atk": 58
            },
            {
                "def": 80
            },
            {
                "spa": 103
            },
            {
                "spd": 80
            }
        ],
        "height": 1.4,
        "weight": 14,
        "formats": [
            "RU"
        ],
        "oob": {
            "dex_number": 561
        },
        "types": [
            "Psychic",
            "Flying"
        ]
    },
    {
        "name": "Yamask",
        "abilities": [
            "Mummy"
        ],
        "stats": [
            {
                "hp": 38
            },
            {
                "atk": 30
            },
            {
                "def": 85
            },
            {
                "spa": 55
            },
            {
                "spd": 65
            }
        ],
        "height": 0.5,
        "weight": 1.5,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 562
        },
        "types": [
            "Ghost"
        ]
    },
    {
        "name": "Cofagrigus",
        "abilities": [
            "Mummy"
        ],
        "stats": [
            {
                "hp": 58
            },
            {
                "atk": 50
            },
            {
                "def": 145
            },
            {
                "spa": 95
            },
            {
                "spd": 105
            }
        ],
        "height": 1.7,
        "weight": 76.5,
        "formats": [
            "UU"
        ],
        "oob": {
            "dex_number": 563
        },
        "types": [
            "Ghost"
        ]
    },
    {
        "name": "Tirtouga",
        "abilities": [
            "Solid Rock",
            "Sturdy",
            "Swift Swim"
        ],
        "stats": [
            {
                "hp": 54
            },
            {
                "atk": 78
            },
            {
                "def": 103
            },
            {
                "spa": 53
            },
            {
                "spd": 45
            }
        ],
        "height": 0.7,
        "weight": 16.5,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 564
        },
        "types": [
            "Water",
            "Rock"
        ]
    },
    {
        "name": "Carracosta",
        "abilities": [
            "Solid Rock",
            "Sturdy",
            "Swift Swim"
        ],
        "stats": [
            {
                "hp": 74
            },
            {
                "atk": 108
            },
            {
                "def": 133
            },
            {
                "spa": 83
            },
            {
                "spd": 65
            }
        ],
        "height": 1.2,
        "weight": 81,
        "formats": [
            "NU"
        ],
        "oob": {
            "dex_number": 565
        },
        "types": [
            "Water",
            "Rock"
        ]
    },
    {
        "name": "Archen",
        "abilities": [
            "Defeatist"
        ],
        "stats": [
            {
                "hp": 55
            },
            {
                "atk": 112
            },
            {
                "def": 45
            },
            {
                "spa": 74
            },
            {
                "spd": 45
            }
        ],
        "height": 0.5,
        "weight": 9.5,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 566
        },
        "types": [
            "Rock",
            "Flying"
        ]
    },
    {
        "name": "Archeops",
        "abilities": [
            "Defeatist"
        ],
        "stats": [
            {
                "hp": 75
            },
            {
                "atk": 140
            },
            {
                "def": 65
            },
            {
                "spa": 112
            },
            {
                "spd": 65
            }
        ],
        "height": 1.4,
        "weight": 32,
        "formats": [
            "RU"
        ],
        "oob": {
            "dex_number": 567
        },
        "types": [
            "Rock",
            "Flying"
        ]
    },
    {
        "name": "Trubbish",
        "abilities": [
            "Stench",
            "Sticky Hold",
            "Aftermath"
        ],
        "stats": [
            {
                "hp": 50
            },
            {
                "atk": 50
            },
            {
                "def": 62
            },
            {
                "spa": 40
            },
            {
                "spd": 62
            }
        ],
        "height": 0.6,
        "weight": 31,
        "formats": [
            "ZUBL"
        ],
        "oob": {
            "dex_number": 568
        },
        "types": [
            "Poison"
        ]
    },
    {
        "name": "Garbodor",
        "abilities": [
            "Stench",
            "Weak Armor",
            "Aftermath"
        ],
        "stats": [
            {
                "hp": 80
            },
            {
                "atk": 95
            },
            {
                "def": 82
            },
            {
                "spa": 60
            },
            {
                "spd": 82
            }
        ],
        "height": 1.9,
        "weight": 107.3,
        "formats": [
            "NU"
        ],
        "oob": {
            "dex_number": 569
        },
        "types": [
            "Poison"
        ]
    },
    {
        "name": "Primeape",
        "abilities": [
            "Vital Spirit",
            "Anger Point",
            "Defiant"
        ],
        "stats": [
            {
                "hp": 65
            },
            {
                "atk": 105
            },
            {
                "def": 60
            },
            {
                "spa": 60
            },
            {
                "spd": 70
            }
        ],
        "height": 1,
        "weight": 32,
        "formats": [
            "NU"
        ],
        "oob": {
            "dex_number": 57
        },
        "types": [
            "Fighting"
        ]
    },
    {
        "name": "Zorua",
        "abilities": [
            "Illusion"
        ],
        "stats": [
            {
                "hp": 40
            },
            {
                "atk": 65
            },
            {
                "def": 40
            },
            {
                "spa": 80
            },
            {
                "spd": 40
            }
        ],
        "height": 0.7,
        "weight": 12.5,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 570
        },
        "types": [
            "Dark"
        ]
    },
    {
        "name": "Zoroark",
        "abilities": [
            "Illusion"
        ],
        "stats": [
            {
                "hp": 60
            },
            {
                "atk": 105
            },
            {
                "def": 60
            },
            {
                "spa": 120
            },
            {
                "spd": 60
            }
        ],
        "height": 1.6,
        "weight": 81.1,
        "formats": [
            "UU"
        ],
        "oob": {
            "dex_number": 571
        },
        "types": [
            "Dark"
        ]
    },
    {
        "name": "Minccino",
        "abilities": [
            "Cute Charm",
            "Technician",
            "Skill Link"
        ],
        "stats": [
            {
                "hp": 55
            },
            {
                "atk": 50
            },
            {
                "def": 40
            },
            {
                "spa": 40
            },
            {
                "spd": 40
            }
        ],
        "height": 0.4,
        "weight": 5.8,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 572
        },
        "types": [
            "Normal"
        ]
    },
    {
        "name": "Cinccino",
        "abilities": [
            "Cute Charm",
            "Technician",
            "Skill Link"
        ],
        "stats": [
            {
                "hp": 75
            },
            {
                "atk": 95
            },
            {
                "def": 60
            },
            {
                "spa": 65
            },
            {
                "spd": 60
            }
        ],
        "height": 0.5,
        "weight": 7.5,
        "formats": [
            "RU"
        ],
        "oob": {
            "dex_number": 573
        },
        "types": [
            "Normal"
        ]
    },
    {
        "name": "Gothita",
        "abilities": [
            "Frisk",
            "Shadow Tag"
        ],
        "stats": [
            {
                "hp": 45
            },
            {
                "atk": 30
            },
            {
                "def": 50
            },
            {
                "spa": 55
            },
            {
                "spd": 65
            }
        ],
        "height": 0.4,
        "weight": 5.8,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 574
        },
        "types": [
            "Psychic"
        ]
    },
    {
        "name": "Gothorita",
        "abilities": [
            "Frisk",
            "Shadow Tag"
        ],
        "stats": [
            {
                "hp": 60
            },
            {
                "atk": 45
            },
            {
                "def": 70
            },
            {
                "spa": 75
            },
            {
                "spd": 85
            }
        ],
        "height": 0.7,
        "weight": 18,
        "formats": [
            "PUBL"
        ],
        "oob": {
            "dex_number": 575
        },
        "types": [
            "Psychic"
        ]
    },
    {
        "name": "Gothitelle",
        "abilities": [
            "Frisk",
            "Shadow Tag"
        ],
        "stats": [
            {
                "hp": 70
            },
            {
                "atk": 55
            },
            {
                "def": 95
            },
            {
                "spa": 95
            },
            {
                "spd": 110
            }
        ],
        "height": 1.5,
        "weight": 44,
        "formats": [
            "UUBL"
        ],
        "oob": {
            "dex_number": 576
        },
        "types": [
            "Psychic"
        ]
    },
    {
        "name": "Solosis",
        "abilities": [
            "Overcoat",
            "Magic Guard",
            "Regenerator"
        ],
        "stats": [
            {
                "hp": 45
            },
            {
                "atk": 30
            },
            {
                "def": 40
            },
            {
                "spa": 105
            },
            {
                "spd": 50
            }
        ],
        "height": 0.3,
        "weight": 1,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 577
        },
        "types": [
            "Psychic"
        ]
    },
    {
        "name": "Duosion",
        "abilities": [
            "Overcoat",
            "Magic Guard",
            "Regenerator"
        ],
        "stats": [
            {
                "hp": 65
            },
            {
                "atk": 40
            },
            {
                "def": 50
            },
            {
                "spa": 125
            },
            {
                "spd": 60
            }
        ],
        "height": 0.6,
        "weight": 8,
        "formats": [
            "PU"
        ],
        "oob": {
            "dex_number": 578
        },
        "types": [
            "Psychic"
        ]
    },
    {
        "name": "Reuniclus",
        "abilities": [
            "Overcoat",
            "Magic Guard",
            "Regenerator"
        ],
        "stats": [
            {
                "hp": 110
            },
            {
                "atk": 65
            },
            {
                "def": 75
            },
            {
                "spa": 125
            },
            {
                "spd": 85
            }
        ],
        "height": 1,
        "weight": 20.1,
        "formats": [
            "OU"
        ],
        "oob": {
            "dex_number": 579
        },
        "types": [
            "Psychic"
        ]
    },
    {
        "name": "Growlithe",
        "abilities": [
            "Intimidate",
            "Flash Fire",
            "Justified"
        ],
        "stats": [
            {
                "hp": 55
            },
            {
                "atk": 70
            },
            {
                "def": 45
            },
            {
                "spa": 70
            },
            {
                "spd": 50
            }
        ],
        "height": 0.7,
        "weight": 19,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 58
        },
        "types": [
            "Fire"
        ]
    },
    {
        "name": "Ducklett",
        "abilities": [
            "Keen Eye",
            "Big Pecks",
            "Hydration"
        ],
        "stats": [
            {
                "hp": 62
            },
            {
                "atk": 44
            },
            {
                "def": 50
            },
            {
                "spa": 44
            },
            {
                "spd": 50
            }
        ],
        "height": 0.5,
        "weight": 5.5,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 580
        },
        "types": [
            "Water",
            "Flying"
        ]
    },
    {
        "name": "Swanna",
        "abilities": [
            "Keen Eye",
            "Big Pecks",
            "Hydration"
        ],
        "stats": [
            {
                "hp": 75
            },
            {
                "atk": 87
            },
            {
                "def": 63
            },
            {
                "spa": 87
            },
            {
                "spd": 63
            }
        ],
        "height": 1.3,
        "weight": 24.2,
        "formats": [
            "PU"
        ],
        "oob": {
            "dex_number": 581
        },
        "types": [
            "Water",
            "Flying"
        ]
    },
    {
        "name": "Vanillite",
        "abilities": [
            "Ice Body",
            "Weak Armor"
        ],
        "stats": [
            {
                "hp": 36
            },
            {
                "atk": 50
            },
            {
                "def": 50
            },
            {
                "spa": 65
            },
            {
                "spd": 60
            }
        ],
        "height": 0.4,
        "weight": 5.7,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 582
        },
        "types": [
            "Ice"
        ]
    },
    {
        "name": "Vanillish",
        "abilities": [
            "Ice Body",
            "Weak Armor"
        ],
        "stats": [
            {
                "hp": 51
            },
            {
                "atk": 65
            },
            {
                "def": 65
            },
            {
                "spa": 80
            },
            {
                "spd": 75
            }
        ],
        "height": 1.1,
        "weight": 41,
        "formats": [
            "NFE"
        ],
        "oob": {
            "dex_number": 583
        },
        "types": [
            "Ice"
        ]
    },
    {
        "name": "Vanilluxe",
        "abilities": [
            "Ice Body",
            "Weak Armor"
        ],
        "stats": [
            {
                "hp": 71
            },
            {
                "atk": 95
            },
            {
                "def": 85
            },
            {
                "spa": 110
            },
            {
                "spd": 95
            }
        ],
        "height": 1.3,
        "weight": 57.5,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 584
        },
        "types": [
            "Ice"
        ]
    },
    {
        "name": "Deerling",
        "abilities": [
            "Chlorophyll",
            "Sap Sipper",
            "Serene Grace"
        ],
        "stats": [
            {
                "hp": 60
            },
            {
                "atk": 60
            },
            {
                "def": 50
            },
            {
                "spa": 40
            },
            {
                "spd": 50
            }
        ],
        "height": 0.6,
        "weight": 19.5,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 585
        },
        "types": [
            "Normal",
            "Grass"
        ]
    },
    {
        "name": "Sawsbuck",
        "abilities": [
            "Chlorophyll",
            "Sap Sipper",
            "Serene Grace"
        ],
        "stats": [
            {
                "hp": 80
            },
            {
                "atk": 100
            },
            {
                "def": 70
            },
            {
                "spa": 60
            },
            {
                "spd": 70
            }
        ],
        "height": 1.9,
        "weight": 92.5,
        "formats": [
            "NU"
        ],
        "oob": {
            "dex_number": 586
        },
        "types": [
            "Normal",
            "Grass"
        ]
    },
    {
        "name": "Emolga",
        "abilities": [
            "Static",
            "Motor Drive"
        ],
        "stats": [
            {
                "hp": 55
            },
            {
                "atk": 75
            },
            {
                "def": 60
            },
            {
                "spa": 75
            },
            {
                "spd": 60
            }
        ],
        "height": 0.4,
        "weight": 5,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 587
        },
        "types": [
            "Electric",
            "Flying"
        ]
    },
    {
        "name": "Karrablast",
        "abilities": [
            "Swarm",
            "Shed Skin",
            "No Guard"
        ],
        "stats": [
            {
                "hp": 50
            },
            {
                "atk": 75
            },
            {
                "def": 45
            },
            {
                "spa": 40
            },
            {
                "spd": 45
            }
        ],
        "height": 0.5,
        "weight": 5.9,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 588
        },
        "types": [
            "Bug"
        ]
    },
    {
        "name": "Escavalier",
        "abilities": [
            "Swarm",
            "Shell Armor",
            "Overcoat"
        ],
        "stats": [
            {
                "hp": 70
            },
            {
                "atk": 135
            },
            {
                "def": 105
            },
            {
                "spa": 60
            },
            {
                "spd": 105
            }
        ],
        "height": 1,
        "weight": 33,
        "formats": [
            "RU"
        ],
        "oob": {
            "dex_number": 589
        },
        "types": [
            "Bug",
            "Steel"
        ]
    },
    {
        "name": "Arcanine",
        "abilities": [
            "Intimidate",
            "Flash Fire",
            "Justified"
        ],
        "stats": [
            {
                "hp": 90
            },
            {
                "atk": 110
            },
            {
                "def": 80
            },
            {
                "spa": 100
            },
            {
                "spd": 80
            }
        ],
        "height": 1.9,
        "weight": 155,
        "formats": [
            "UU"
        ],
        "oob": {
            "dex_number": 59
        },
        "types": [
            "Fire"
        ]
    },
    {
        "name": "Foongus",
        "abilities": [
            "Effect Spore",
            "Regenerator"
        ],
        "stats": [
            {
                "hp": 69
            },
            {
                "atk": 55
            },
            {
                "def": 45
            },
            {
                "spa": 55
            },
            {
                "spd": 55
            }
        ],
        "height": 0.2,
        "weight": 1,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 590
        },
        "types": [
            "Grass",
            "Poison"
        ]
    },
    {
        "name": "Amoonguss",
        "abilities": [
            "Effect Spore",
            "Regenerator"
        ],
        "stats": [
            {
                "hp": 114
            },
            {
                "atk": 85
            },
            {
                "def": 70
            },
            {
                "spa": 85
            },
            {
                "spd": 80
            }
        ],
        "height": 0.6,
        "weight": 10.5,
        "formats": [
            "RU"
        ],
        "oob": {
            "dex_number": 591
        },
        "types": [
            "Grass",
            "Poison"
        ]
    },
    {
        "name": "Frillish",
        "abilities": [
            "Water Absorb",
            "Cursed Body",
            "Damp"
        ],
        "stats": [
            {
                "hp": 55
            },
            {
                "atk": 40
            },
            {
                "def": 50
            },
            {
                "spa": 65
            },
            {
                "spd": 85
            }
        ],
        "height": 1.2,
        "weight": 33,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 592
        },
        "types": [
            "Water",
            "Ghost"
        ]
    },
    {
        "name": "Jellicent",
        "abilities": [
            "Water Absorb",
            "Cursed Body",
            "Damp"
        ],
        "stats": [
            {
                "hp": 100
            },
            {
                "atk": 60
            },
            {
                "def": 70
            },
            {
                "spa": 85
            },
            {
                "spd": 105
            }
        ],
        "height": 2.2,
        "weight": 135,
        "formats": [
            "OU"
        ],
        "oob": {
            "dex_number": 593
        },
        "types": [
            "Water",
            "Ghost"
        ]
    },
    {
        "name": "Alomomola",
        "abilities": [
            "Healer",
            "Hydration",
            "Regenerator"
        ],
        "stats": [
            {
                "hp": 165
            },
            {
                "atk": 75
            },
            {
                "def": 80
            },
            {
                "spa": 40
            },
            {
                "spd": 45
            }
        ],
        "height": 1.2,
        "weight": 31.6,
        "formats": [
            "NU"
        ],
        "oob": {
            "dex_number": 594
        },
        "types": [
            "Water"
        ]
    },
    {
        "name": "Joltik",
        "abilities": [
            "Compound Eyes",
            "Unnerve",
            "Swarm"
        ],
        "stats": [
            {
                "hp": 50
            },
            {
                "atk": 47
            },
            {
                "def": 50
            },
            {
                "spa": 57
            },
            {
                "spd": 50
            }
        ],
        "height": 0.1,
        "weight": 0.6,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 595
        },
        "types": [
            "Bug",
            "Electric"
        ]
    },
    {
        "name": "Galvantula",
        "abilities": [
            "Compound Eyes",
            "Unnerve",
            "Swarm"
        ],
        "stats": [
            {
                "hp": 70
            },
            {
                "atk": 77
            },
            {
                "def": 60
            },
            {
                "spa": 97
            },
            {
                "spd": 60
            }
        ],
        "height": 0.8,
        "weight": 14.3,
        "formats": [
            "RU"
        ],
        "oob": {
            "dex_number": 596
        },
        "types": [
            "Bug",
            "Electric"
        ]
    },
    {
        "name": "Ferroseed",
        "abilities": [
            "Iron Barbs"
        ],
        "stats": [
            {
                "hp": 44
            },
            {
                "atk": 50
            },
            {
                "def": 91
            },
            {
                "spa": 24
            },
            {
                "spd": 86
            }
        ],
        "height": 0.6,
        "weight": 18.8,
        "formats": [
            "RU"
        ],
        "oob": {
            "dex_number": 597
        },
        "types": [
            "Grass",
            "Steel"
        ]
    },
    {
        "name": "Ferrothorn",
        "abilities": [
            "Iron Barbs"
        ],
        "stats": [
            {
                "hp": 74
            },
            {
                "atk": 94
            },
            {
                "def": 131
            },
            {
                "spa": 54
            },
            {
                "spd": 116
            }
        ],
        "height": 1,
        "weight": 110,
        "formats": [
            "OU"
        ],
        "oob": {
            "dex_number": 598
        },
        "types": [
            "Grass",
            "Steel"
        ]
    },
    {
        "name": "Klink",
        "abilities": [
            "Plus",
            "Minus",
            "Clear Body"
        ],
        "stats": [
            {
                "hp": 40
            },
            {
                "atk": 55
            },
            {
                "def": 70
            },
            {
                "spa": 45
            },
            {
                "spd": 60
            }
        ],
        "height": 0.3,
        "weight": 21,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 599
        },
        "types": [
            "Steel"
        ]
    },
    {
        "name": "Charizard",
        "abilities": [
            "Blaze",
            "Solar Power"
        ],
        "stats": [
            {
                "hp": 78
            },
            {
                "atk": 84
            },
            {
                "def": 78
            },
            {
                "spa": 109
            },
            {
                "spd": 85
            }
        ],
        "height": 1.7,
        "weight": 90.5,
        "formats": [
            "NU"
        ],
        "oob": {
            "dex_number": 6
        },
        "types": [
            "Fire",
            "Flying"
        ]
    },
    {
        "name": "Poliwag",
        "abilities": [
            "Water Absorb",
            "Damp",
            "Swift Swim"
        ],
        "stats": [
            {
                "hp": 40
            },
            {
                "atk": 50
            },
            {
                "def": 40
            },
            {
                "spa": 40
            },
            {
                "spd": 40
            }
        ],
        "height": 0.6,
        "weight": 12.4,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 60
        },
        "types": [
            "Water"
        ]
    },
    {
        "name": "Klang",
        "abilities": [
            "Plus",
            "Minus",
            "Clear Body"
        ],
        "stats": [
            {
                "hp": 60
            },
            {
                "atk": 80
            },
            {
                "def": 95
            },
            {
                "spa": 70
            },
            {
                "spd": 85
            }
        ],
        "height": 0.6,
        "weight": 51,
        "formats": [
            "PU"
        ],
        "oob": {
            "dex_number": 600
        },
        "types": [
            "Steel"
        ]
    },
    {
        "name": "Klinklang",
        "abilities": [
            "Plus",
            "Minus",
            "Clear Body"
        ],
        "stats": [
            {
                "hp": 60
            },
            {
                "atk": 100
            },
            {
                "def": 115
            },
            {
                "spa": 70
            },
            {
                "spd": 85
            }
        ],
        "height": 0.6,
        "weight": 81,
        "formats": [
            "PU"
        ],
        "oob": {
            "dex_number": 601
        },
        "types": [
            "Steel"
        ]
    },
    {
        "name": "Tynamo",
        "abilities": [
            "Levitate"
        ],
        "stats": [
            {
                "hp": 35
            },
            {
                "atk": 55
            },
            {
                "def": 40
            },
            {
                "spa": 45
            },
            {
                "spd": 40
            }
        ],
        "height": 0.2,
        "weight": 0.3,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 602
        },
        "types": [
            "Electric"
        ]
    },
    {
        "name": "Eelektrik",
        "abilities": [
            "Levitate"
        ],
        "stats": [
            {
                "hp": 65
            },
            {
                "atk": 85
            },
            {
                "def": 70
            },
            {
                "spa": 75
            },
            {
                "spd": 70
            }
        ],
        "height": 1.2,
        "weight": 22,
        "formats": [
            "NFE"
        ],
        "oob": {
            "dex_number": 603
        },
        "types": [
            "Electric"
        ]
    },
    {
        "name": "Eelektross",
        "abilities": [
            "Levitate"
        ],
        "stats": [
            {
                "hp": 85
            },
            {
                "atk": 115
            },
            {
                "def": 80
            },
            {
                "spa": 105
            },
            {
                "spd": 80
            }
        ],
        "height": 2.1,
        "weight": 80.5,
        "formats": [
            "NU"
        ],
        "oob": {
            "dex_number": 604
        },
        "types": [
            "Electric"
        ]
    },
    {
        "name": "Elgyem",
        "abilities": [
            "Telepathy",
            "Synchronize",
            "Analytic"
        ],
        "stats": [
            {
                "hp": 55
            },
            {
                "atk": 55
            },
            {
                "def": 55
            },
            {
                "spa": 85
            },
            {
                "spd": 55
            }
        ],
        "height": 0.5,
        "weight": 9,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 605
        },
        "types": [
            "Psychic"
        ]
    },
    {
        "name": "Beheeyem",
        "abilities": [
            "Telepathy",
            "Synchronize",
            "Analytic"
        ],
        "stats": [
            {
                "hp": 75
            },
            {
                "atk": 75
            },
            {
                "def": 75
            },
            {
                "spa": 125
            },
            {
                "spd": 95
            }
        ],
        "height": 1,
        "weight": 34.5,
        "formats": [
            "PU"
        ],
        "oob": {
            "dex_number": 606
        },
        "types": [
            "Psychic"
        ]
    },
    {
        "name": "Litwick",
        "abilities": [
            "Flash Fire",
            "Flame Body",
            "Shadow Tag"
        ],
        "stats": [
            {
                "hp": 50
            },
            {
                "atk": 30
            },
            {
                "def": 55
            },
            {
                "spa": 65
            },
            {
                "spd": 55
            }
        ],
        "height": 0.3,
        "weight": 3.1,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 607
        },
        "types": [
            "Ghost",
            "Fire"
        ]
    },
    {
        "name": "Lampent",
        "abilities": [
            "Flash Fire",
            "Flame Body",
            "Shadow Tag"
        ],
        "stats": [
            {
                "hp": 60
            },
            {
                "atk": 40
            },
            {
                "def": 60
            },
            {
                "spa": 95
            },
            {
                "spd": 60
            }
        ],
        "height": 0.6,
        "weight": 13,
        "formats": [
            "NFE"
        ],
        "oob": {
            "dex_number": 608
        },
        "types": [
            "Ghost",
            "Fire"
        ]
    },
    {
        "name": "Chandelure",
        "abilities": [
            "Flash Fire",
            "Flame Body",
            "Shadow Tag"
        ],
        "stats": [
            {
                "hp": 60
            },
            {
                "atk": 55
            },
            {
                "def": 90
            },
            {
                "spa": 145
            },
            {
                "spd": 90
            }
        ],
        "height": 1,
        "weight": 34.3,
        "formats": [
            "UUBL"
        ],
        "oob": {
            "dex_number": 609
        },
        "types": [
            "Ghost",
            "Fire"
        ]
    },
    {
        "name": "Poliwhirl",
        "abilities": [
            "Water Absorb",
            "Damp",
            "Swift Swim"
        ],
        "stats": [
            {
                "hp": 65
            },
            {
                "atk": 65
            },
            {
                "def": 65
            },
            {
                "spa": 50
            },
            {
                "spd": 50
            }
        ],
        "height": 1,
        "weight": 20,
        "formats": [
            "NFE"
        ],
        "oob": {
            "dex_number": 61
        },
        "types": [
            "Water"
        ]
    },
    {
        "name": "Axew",
        "abilities": [
            "Rivalry",
            "Mold Breaker",
            "Unnerve"
        ],
        "stats": [
            {
                "hp": 46
            },
            {
                "atk": 87
            },
            {
                "def": 60
            },
            {
                "spa": 30
            },
            {
                "spd": 40
            }
        ],
        "height": 0.6,
        "weight": 18,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 610
        },
        "types": [
            "Dragon"
        ]
    },
    {
        "name": "Fraxure",
        "abilities": [
            "Rivalry",
            "Mold Breaker",
            "Unnerve"
        ],
        "stats": [
            {
                "hp": 66
            },
            {
                "atk": 117
            },
            {
                "def": 70
            },
            {
                "spa": 40
            },
            {
                "spd": 50
            }
        ],
        "height": 1,
        "weight": 36,
        "formats": [
            "PU"
        ],
        "oob": {
            "dex_number": 611
        },
        "types": [
            "Dragon"
        ]
    },
    {
        "name": "Haxorus",
        "abilities": [
            "Rivalry",
            "Mold Breaker",
            "Unnerve"
        ],
        "stats": [
            {
                "hp": 76
            },
            {
                "atk": 147
            },
            {
                "def": 90
            },
            {
                "spa": 60
            },
            {
                "spd": 70
            }
        ],
        "height": 1.8,
        "weight": 105.5,
        "formats": [
            "OU"
        ],
        "oob": {
            "dex_number": 612
        },
        "types": [
            "Dragon"
        ]
    },
    {
        "name": "Cubchoo",
        "abilities": [
            "Snow Cloak",
            "Rattled"
        ],
        "stats": [
            {
                "hp": 55
            },
            {
                "atk": 70
            },
            {
                "def": 40
            },
            {
                "spa": 60
            },
            {
                "spd": 40
            }
        ],
        "height": 0.5,
        "weight": 8.5,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 613
        },
        "types": [
            "Ice"
        ]
    },
    {
        "name": "Beartic",
        "abilities": [
            "Snow Cloak",
            "Swift Swim"
        ],
        "stats": [
            {
                "hp": 95
            },
            {
                "atk": 110
            },
            {
                "def": 80
            },
            {
                "spa": 70
            },
            {
                "spd": 80
            }
        ],
        "height": 2.6,
        "weight": 260,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 614
        },
        "types": [
            "Ice"
        ]
    },
    {
        "name": "Cryogonal",
        "abilities": [
            "Levitate"
        ],
        "stats": [
            {
                "hp": 70
            },
            {
                "atk": 50
            },
            {
                "def": 30
            },
            {
                "spa": 95
            },
            {
                "spd": 135
            }
        ],
        "height": 1.1,
        "weight": 148,
        "formats": [
            "RU"
        ],
        "oob": {
            "dex_number": 615
        },
        "types": [
            "Ice"
        ]
    },
    {
        "name": "Shelmet",
        "abilities": [
            "Hydration",
            "Shell Armor",
            "Overcoat"
        ],
        "stats": [
            {
                "hp": 50
            },
            {
                "atk": 40
            },
            {
                "def": 85
            },
            {
                "spa": 40
            },
            {
                "spd": 65
            }
        ],
        "height": 0.4,
        "weight": 7.7,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 616
        },
        "types": [
            "Bug"
        ]
    },
    {
        "name": "Accelgor",
        "abilities": [
            "Hydration",
            "Sticky Hold",
            "Unburden"
        ],
        "stats": [
            {
                "hp": 80
            },
            {
                "atk": 70
            },
            {
                "def": 40
            },
            {
                "spa": 100
            },
            {
                "spd": 60
            }
        ],
        "height": 0.8,
        "weight": 25.3,
        "formats": [
            "RU"
        ],
        "oob": {
            "dex_number": 617
        },
        "types": [
            "Bug"
        ]
    },
    {
        "name": "Stunfisk",
        "abilities": [
            "Static",
            "Limber",
            "Sand Veil"
        ],
        "stats": [
            {
                "hp": 109
            },
            {
                "atk": 66
            },
            {
                "def": 84
            },
            {
                "spa": 81
            },
            {
                "spd": 99
            }
        ],
        "height": 0.7,
        "weight": 11,
        "formats": [
            "PU"
        ],
        "oob": {
            "dex_number": 618
        },
        "types": [
            "Ground",
            "Electric"
        ]
    },
    {
        "name": "Mienfoo",
        "abilities": [
            "Inner Focus",
            "Regenerator",
            "Reckless"
        ],
        "stats": [
            {
                "hp": 45
            },
            {
                "atk": 85
            },
            {
                "def": 50
            },
            {
                "spa": 55
            },
            {
                "spd": 50
            }
        ],
        "height": 0.9,
        "weight": 20,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 619
        },
        "types": [
            "Fighting"
        ]
    },
    {
        "name": "Poliwrath",
        "abilities": [
            "Water Absorb",
            "Damp",
            "Swift Swim"
        ],
        "stats": [
            {
                "hp": 90
            },
            {
                "atk": 85
            },
            {
                "def": 95
            },
            {
                "spa": 70
            },
            {
                "spd": 90
            }
        ],
        "height": 1.3,
        "weight": 54,
        "formats": [
            "RU"
        ],
        "oob": {
            "dex_number": 62
        },
        "types": [
            "Water",
            "Fighting"
        ]
    },
    {
        "name": "Mienshao",
        "abilities": [
            "Inner Focus",
            "Regenerator",
            "Reckless"
        ],
        "stats": [
            {
                "hp": 65
            },
            {
                "atk": 125
            },
            {
                "def": 60
            },
            {
                "spa": 95
            },
            {
                "spd": 60
            }
        ],
        "height": 1.4,
        "weight": 35.5,
        "formats": [
            "UU"
        ],
        "oob": {
            "dex_number": 620
        },
        "types": [
            "Fighting"
        ]
    },
    {
        "name": "Druddigon",
        "abilities": [
            "Rough Skin",
            "Sheer Force",
            "Mold Breaker"
        ],
        "stats": [
            {
                "hp": 77
            },
            {
                "atk": 120
            },
            {
                "def": 90
            },
            {
                "spa": 60
            },
            {
                "spd": 90
            }
        ],
        "height": 1.6,
        "weight": 139,
        "formats": [
            "RU"
        ],
        "oob": {
            "dex_number": 621
        },
        "types": [
            "Dragon"
        ]
    },
    {
        "name": "Golett",
        "abilities": [
            "Iron Fist",
            "Klutz",
            "No Guard"
        ],
        "stats": [
            {
                "hp": 59
            },
            {
                "atk": 74
            },
            {
                "def": 50
            },
            {
                "spa": 35
            },
            {
                "spd": 50
            }
        ],
        "height": 1,
        "weight": 92,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 622
        },
        "types": [
            "Ground",
            "Ghost"
        ]
    },
    {
        "name": "Golurk",
        "abilities": [
            "Iron Fist",
            "Klutz",
            "No Guard"
        ],
        "stats": [
            {
                "hp": 89
            },
            {
                "atk": 124
            },
            {
                "def": 80
            },
            {
                "spa": 55
            },
            {
                "spd": 80
            }
        ],
        "height": 2.8,
        "weight": 330,
        "formats": [
            "NU"
        ],
        "oob": {
            "dex_number": 623
        },
        "types": [
            "Ground",
            "Ghost"
        ]
    },
    {
        "name": "Pawniard",
        "abilities": [
            "Defiant",
            "Inner Focus",
            "Pressure"
        ],
        "stats": [
            {
                "hp": 45
            },
            {
                "atk": 85
            },
            {
                "def": 70
            },
            {
                "spa": 40
            },
            {
                "spd": 40
            }
        ],
        "height": 0.5,
        "weight": 10.2,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 624
        },
        "types": [
            "Dark",
            "Steel"
        ]
    },
    {
        "name": "Bisharp",
        "abilities": [
            "Defiant",
            "Inner Focus",
            "Pressure"
        ],
        "stats": [
            {
                "hp": 65
            },
            {
                "atk": 125
            },
            {
                "def": 100
            },
            {
                "spa": 60
            },
            {
                "spd": 70
            }
        ],
        "height": 1.6,
        "weight": 70,
        "formats": [
            "UU"
        ],
        "oob": {
            "dex_number": 625
        },
        "types": [
            "Dark",
            "Steel"
        ]
    },
    {
        "name": "Bouffalant",
        "abilities": [
            "Reckless",
            "Sap Sipper",
            "Soundproof"
        ],
        "stats": [
            {
                "hp": 95
            },
            {
                "atk": 110
            },
            {
                "def": 95
            },
            {
                "spa": 40
            },
            {
                "spd": 95
            }
        ],
        "height": 1.6,
        "weight": 94.6,
        "formats": [
            "RU"
        ],
        "oob": {
            "dex_number": 626
        },
        "types": [
            "Normal"
        ]
    },
    {
        "name": "Rufflet",
        "abilities": [
            "Keen Eye",
            "Sheer Force",
            "Hustle"
        ],
        "stats": [
            {
                "hp": 70
            },
            {
                "atk": 83
            },
            {
                "def": 50
            },
            {
                "spa": 37
            },
            {
                "spd": 50
            }
        ],
        "height": 0.5,
        "weight": 10.5,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 627
        },
        "types": [
            "Normal",
            "Flying"
        ]
    },
    {
        "name": "Braviary",
        "abilities": [
            "Keen Eye",
            "Sheer Force",
            "Defiant"
        ],
        "stats": [
            {
                "hp": 100
            },
            {
                "atk": 123
            },
            {
                "def": 75
            },
            {
                "spa": 57
            },
            {
                "spd": 75
            }
        ],
        "height": 1.5,
        "weight": 41,
        "formats": [
            "NU"
        ],
        "oob": {
            "dex_number": 628
        },
        "types": [
            "Normal",
            "Flying"
        ]
    },
    {
        "name": "Vullaby",
        "abilities": [
            "Big Pecks",
            "Overcoat",
            "Weak Armor"
        ],
        "stats": [
            {
                "hp": 70
            },
            {
                "atk": 55
            },
            {
                "def": 75
            },
            {
                "spa": 45
            },
            {
                "spd": 65
            }
        ],
        "height": 0.5,
        "weight": 9,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 629
        },
        "types": [
            "Dark",
            "Flying"
        ]
    },
    {
        "name": "Abra",
        "abilities": [
            "Synchronize",
            "Inner Focus",
            "Magic Guard"
        ],
        "stats": [
            {
                "hp": 25
            },
            {
                "atk": 20
            },
            {
                "def": 15
            },
            {
                "spa": 105
            },
            {
                "spd": 55
            }
        ],
        "height": 0.9,
        "weight": 19.5,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 63
        },
        "types": [
            "Psychic"
        ]
    },
    {
        "name": "Mandibuzz",
        "abilities": [
            "Big Pecks",
            "Overcoat",
            "Weak Armor"
        ],
        "stats": [
            {
                "hp": 110
            },
            {
                "atk": 65
            },
            {
                "def": 105
            },
            {
                "spa": 55
            },
            {
                "spd": 95
            }
        ],
        "height": 1.2,
        "weight": 39.5,
        "formats": [
            "NU"
        ],
        "oob": {
            "dex_number": 630
        },
        "types": [
            "Dark",
            "Flying"
        ]
    },
    {
        "name": "Heatmor",
        "abilities": [
            "Gluttony",
            "Flash Fire",
            "White Smoke"
        ],
        "stats": [
            {
                "hp": 85
            },
            {
                "atk": 97
            },
            {
                "def": 66
            },
            {
                "spa": 105
            },
            {
                "spd": 66
            }
        ],
        "height": 1.4,
        "weight": 58,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 631
        },
        "types": [
            "Fire"
        ]
    },
    {
        "name": "Durant",
        "abilities": [
            "Swarm",
            "Hustle",
            "Truant"
        ],
        "stats": [
            {
                "hp": 58
            },
            {
                "atk": 109
            },
            {
                "def": 112
            },
            {
                "spa": 48
            },
            {
                "spd": 48
            }
        ],
        "height": 0.3,
        "weight": 33,
        "formats": [
            "RU"
        ],
        "oob": {
            "dex_number": 632
        },
        "types": [
            "Bug",
            "Steel"
        ]
    },
    {
        "name": "Deino",
        "abilities": [
            "Hustle"
        ],
        "stats": [
            {
                "hp": 52
            },
            {
                "atk": 65
            },
            {
                "def": 50
            },
            {
                "spa": 45
            },
            {
                "spd": 50
            }
        ],
        "height": 0.8,
        "weight": 17.3,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 633
        },
        "types": [
            "Dark",
            "Dragon"
        ]
    },
    {
        "name": "Zweilous",
        "abilities": [
            "Hustle"
        ],
        "stats": [
            {
                "hp": 72
            },
            {
                "atk": 85
            },
            {
                "def": 70
            },
            {
                "spa": 65
            },
            {
                "spd": 70
            }
        ],
        "height": 1.4,
        "weight": 50,
        "formats": [
            "PU"
        ],
        "oob": {
            "dex_number": 634
        },
        "types": [
            "Dark",
            "Dragon"
        ]
    },
    {
        "name": "Hydreigon",
        "abilities": [
            "Levitate"
        ],
        "stats": [
            {
                "hp": 92
            },
            {
                "atk": 105
            },
            {
                "def": 90
            },
            {
                "spa": 125
            },
            {
                "spd": 90
            }
        ],
        "height": 1.8,
        "weight": 160,
        "formats": [
            "OU"
        ],
        "oob": {
            "dex_number": 635
        },
        "types": [
            "Dark",
            "Dragon"
        ]
    },
    {
        "name": "Larvesta",
        "abilities": [
            "Flame Body",
            "Swarm"
        ],
        "stats": [
            {
                "hp": 55
            },
            {
                "atk": 85
            },
            {
                "def": 55
            },
            {
                "spa": 50
            },
            {
                "spd": 55
            }
        ],
        "height": 1.1,
        "weight": 28.8,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 636
        },
        "types": [
            "Bug",
            "Fire"
        ]
    },
    {
        "name": "Volcarona",
        "abilities": [
            "Flame Body",
            "Swarm"
        ],
        "stats": [
            {
                "hp": 85
            },
            {
                "atk": 60
            },
            {
                "def": 65
            },
            {
                "spa": 135
            },
            {
                "spd": 105
            }
        ],
        "height": 1.6,
        "weight": 46,
        "formats": [
            "OU"
        ],
        "oob": {
            "dex_number": 637
        },
        "types": [
            "Bug",
            "Fire"
        ]
    },
    {
        "name": "Cobalion",
        "abilities": [
            "Justified"
        ],
        "stats": [
            {
                "hp": 91
            },
            {
                "atk": 90
            },
            {
                "def": 129
            },
            {
                "spa": 90
            },
            {
                "spd": 72
            }
        ],
        "height": 2.1,
        "weight": 250,
        "formats": [
            "UU"
        ],
        "oob": {
            "dex_number": 638
        },
        "types": [
            "Steel",
            "Fighting"
        ]
    },
    {
        "name": "Terrakion",
        "abilities": [
            "Justified"
        ],
        "stats": [
            {
                "hp": 91
            },
            {
                "atk": 129
            },
            {
                "def": 90
            },
            {
                "spa": 72
            },
            {
                "spd": 90
            }
        ],
        "height": 1.9,
        "weight": 260,
        "formats": [
            "OU"
        ],
        "oob": {
            "dex_number": 639
        },
        "types": [
            "Rock",
            "Fighting"
        ]
    },
    {
        "name": "Kadabra",
        "abilities": [
            "Synchronize",
            "Inner Focus",
            "Magic Guard"
        ],
        "stats": [
            {
                "hp": 40
            },
            {
                "atk": 35
            },
            {
                "def": 30
            },
            {
                "spa": 120
            },
            {
                "spd": 70
            }
        ],
        "height": 1.3,
        "weight": 56.5,
        "formats": [
            "NU"
        ],
        "oob": {
            "dex_number": 64
        },
        "types": [
            "Psychic"
        ]
    },
    {
        "name": "Virizion",
        "abilities": [
            "Justified"
        ],
        "stats": [
            {
                "hp": 91
            },
            {
                "atk": 90
            },
            {
                "def": 72
            },
            {
                "spa": 90
            },
            {
                "spd": 129
            }
        ],
        "height": 2,
        "weight": 200,
        "formats": [
            "UU"
        ],
        "oob": {
            "dex_number": 640
        },
        "types": [
            "Grass",
            "Fighting"
        ]
    },
    {
        "name": "Tornadus",
        "abilities": [
            "Prankster",
            "Defiant"
        ],
        "stats": [
            {
                "hp": 79
            },
            {
                "atk": 115
            },
            {
                "def": 70
            },
            {
                "spa": 125
            },
            {
                "spd": 80
            }
        ],
        "height": 1.5,
        "weight": 63,
        "formats": [
            "UU"
        ],
        "oob": {
            "dex_number": 641
        },
        "types": [
            "Flying"
        ]
    },
    {
        "name": "Tornadus-Therian",
        "abilities": [
            "Regenerator"
        ],
        "stats": [
            {
                "hp": 79
            },
            {
                "atk": 100
            },
            {
                "def": 80
            },
            {
                "spa": 110
            },
            {
                "spd": 90
            }
        ],
        "height": 1.4,
        "weight": 63,
        "formats": [
            "Uber"
        ],
        "oob": {
            "dex_number": 641
        },
        "types": [
            "Flying"
        ]
    },
    {
        "name": "Thundurus",
        "abilities": [
            "Prankster",
            "Defiant"
        ],
        "stats": [
            {
                "hp": 79
            },
            {
                "atk": 115
            },
            {
                "def": 70
            },
            {
                "spa": 125
            },
            {
                "spd": 80
            }
        ],
        "height": 1.5,
        "weight": 61,
        "formats": [
            "Uber"
        ],
        "oob": {
            "dex_number": 642
        },
        "types": [
            "Electric",
            "Flying"
        ]
    },
    {
        "name": "Thundurus-Therian",
        "abilities": [
            "Volt Absorb"
        ],
        "stats": [
            {
                "hp": 79
            },
            {
                "atk": 105
            },
            {
                "def": 70
            },
            {
                "spa": 145
            },
            {
                "spd": 80
            }
        ],
        "height": 3,
        "weight": 61,
        "formats": [
            "OU"
        ],
        "oob": {
            "dex_number": 642
        },
        "types": [
            "Electric",
            "Flying"
        ]
    },
    {
        "name": "Reshiram",
        "abilities": [
            "Turboblaze"
        ],
        "stats": [
            {
                "hp": 100
            },
            {
                "atk": 120
            },
            {
                "def": 100
            },
            {
                "spa": 150
            },
            {
                "spd": 120
            }
        ],
        "height": 3.2,
        "weight": 330,
        "formats": [
            "Uber"
        ],
        "oob": {
            "dex_number": 643
        },
        "types": [
            "Dragon",
            "Fire"
        ]
    },
    {
        "name": "Zekrom",
        "abilities": [
            "Teravolt"
        ],
        "stats": [
            {
                "hp": 100
            },
            {
                "atk": 150
            },
            {
                "def": 120
            },
            {
                "spa": 120
            },
            {
                "spd": 100
            }
        ],
        "height": 2.9,
        "weight": 345,
        "formats": [
            "Uber"
        ],
        "oob": {
            "dex_number": 644
        },
        "types": [
            "Dragon",
            "Electric"
        ]
    },
    {
        "name": "Landorus",
        "abilities": [
            "Sand Force",
            "Sheer Force"
        ],
        "stats": [
            {
                "hp": 89
            },
            {
                "atk": 125
            },
            {
                "def": 90
            },
            {
                "spa": 115
            },
            {
                "spd": 80
            }
        ],
        "height": 1.5,
        "weight": 68,
        "formats": [
            "Uber"
        ],
        "oob": {
            "dex_number": 645
        },
        "types": [
            "Ground",
            "Flying"
        ]
    },
    {
        "name": "Landorus-Therian",
        "abilities": [
            "Intimidate"
        ],
        "stats": [
            {
                "hp": 89
            },
            {
                "atk": 145
            },
            {
                "def": 90
            },
            {
                "spa": 105
            },
            {
                "spd": 80
            }
        ],
        "height": 1.3,
        "weight": 68,
        "formats": [
            "OU"
        ],
        "oob": {
            "dex_number": 645
        },
        "types": [
            "Ground",
            "Flying"
        ]
    },
    {
        "name": "Kyurem",
        "abilities": [
            "Pressure"
        ],
        "stats": [
            {
                "hp": 125
            },
            {
                "atk": 130
            },
            {
                "def": 90
            },
            {
                "spa": 130
            },
            {
                "spd": 90
            }
        ],
        "height": 3,
        "weight": 325,
        "formats": [
            "UUBL"
        ],
        "oob": {
            "dex_number": 646
        },
        "types": [
            "Dragon",
            "Ice"
        ]
    },
    {
        "name": "Kyurem-Black",
        "abilities": [
            "Teravolt"
        ],
        "stats": [
            {
                "hp": 125
            },
            {
                "atk": 170
            },
            {
                "def": 100
            },
            {
                "spa": 120
            },
            {
                "spd": 90
            }
        ],
        "height": 3.3,
        "weight": 325,
        "formats": [
            "OU"
        ],
        "oob": {
            "dex_number": 646
        },
        "types": [
            "Dragon",
            "Ice"
        ]
    },
    {
        "name": "Kyurem-White",
        "abilities": [
            "Turboblaze"
        ],
        "stats": [
            {
                "hp": 125
            },
            {
                "atk": 120
            },
            {
                "def": 90
            },
            {
                "spa": 170
            },
            {
                "spd": 100
            }
        ],
        "height": 3.6,
        "weight": 325,
        "formats": [
            "Uber"
        ],
        "oob": {
            "dex_number": 646
        },
        "types": [
            "Dragon",
            "Ice"
        ]
    },
    {
        "name": "Keldeo",
        "abilities": [
            "Justified"
        ],
        "stats": [
            {
                "hp": 91
            },
            {
                "atk": 72
            },
            {
                "def": 90
            },
            {
                "spa": 129
            },
            {
                "spd": 90
            }
        ],
        "height": 1.4,
        "weight": 48.5,
        "formats": [
            "OU"
        ],
        "oob": {
            "dex_number": 647
        },
        "types": [
            "Water",
            "Fighting"
        ]
    },
    {
        "name": "Keldeo-Resolute",
        "abilities": [
            "Justified"
        ],
        "stats": [
            {
                "hp": 91
            },
            {
                "atk": 72
            },
            {
                "def": 90
            },
            {
                "spa": 129
            },
            {
                "spd": 90
            }
        ],
        "height": 1.4,
        "weight": 48.5,
        "formats": [
            "OU"
        ],
        "oob": {
            "dex_number": 647
        },
        "types": [
            "Water",
            "Fighting"
        ]
    },
    {
        "name": "Meloetta",
        "abilities": [
            "Serene Grace"
        ],
        "stats": [
            {
                "hp": 100
            },
            {
                "atk": 77
            },
            {
                "def": 77
            },
            {
                "spa": 128
            },
            {
                "spd": 128
            }
        ],
        "height": 0.6,
        "weight": 6.5,
        "formats": [
            "UU"
        ],
        "oob": {
            "dex_number": 648
        },
        "types": [
            "Normal",
            "Psychic"
        ]
    },
    {
        "name": "Genesect",
        "abilities": [
            "Download"
        ],
        "stats": [
            {
                "hp": 71
            },
            {
                "atk": 120
            },
            {
                "def": 95
            },
            {
                "spa": 120
            },
            {
                "spd": 95
            }
        ],
        "height": 1.5,
        "weight": 82.5,
        "formats": [
            "Uber"
        ],
        "oob": {
            "dex_number": 649
        },
        "types": [
            "Bug",
            "Steel"
        ]
    },
    {
        "name": "Genesect-Burn",
        "abilities": [
            "Download"
        ],
        "stats": [
            {
                "hp": 71
            },
            {
                "atk": 120
            },
            {
                "def": 95
            },
            {
                "spa": 120
            },
            {
                "spd": 95
            }
        ],
        "height": 1.5,
        "weight": 82.5,
        "formats": [
            "Uber"
        ],
        "oob": {
            "dex_number": 649
        },
        "types": [
            "Bug",
            "Steel"
        ]
    },
    {
        "name": "Genesect-Chill",
        "abilities": [
            "Download"
        ],
        "stats": [
            {
                "hp": 71
            },
            {
                "atk": 120
            },
            {
                "def": 95
            },
            {
                "spa": 120
            },
            {
                "spd": 95
            }
        ],
        "height": 1.5,
        "weight": 82.5,
        "formats": [
            "Uber"
        ],
        "oob": {
            "dex_number": 649
        },
        "types": [
            "Bug",
            "Steel"
        ]
    },
    {
        "name": "Genesect-Douse",
        "abilities": [
            "Download"
        ],
        "stats": [
            {
                "hp": 71
            },
            {
                "atk": 120
            },
            {
                "def": 95
            },
            {
                "spa": 120
            },
            {
                "spd": 95
            }
        ],
        "height": 1.5,
        "weight": 82.5,
        "formats": [
            "Uber"
        ],
        "oob": {
            "dex_number": 649
        },
        "types": [
            "Bug",
            "Steel"
        ]
    },
    {
        "name": "Genesect-Shock",
        "abilities": [
            "Download"
        ],
        "stats": [
            {
                "hp": 71
            },
            {
                "atk": 120
            },
            {
                "def": 95
            },
            {
                "spa": 120
            },
            {
                "spd": 95
            }
        ],
        "height": 1.5,
        "weight": 82.5,
        "formats": [
            "Uber"
        ],
        "oob": {
            "dex_number": 649
        },
        "types": [
            "Bug",
            "Steel"
        ]
    },
    {
        "name": "Alakazam",
        "abilities": [
            "Synchronize",
            "Inner Focus",
            "Magic Guard"
        ],
        "stats": [
            {
                "hp": 55
            },
            {
                "atk": 50
            },
            {
                "def": 45
            },
            {
                "spa": 135
            },
            {
                "spd": 85
            }
        ],
        "height": 1.5,
        "weight": 48,
        "formats": [
            "OU"
        ],
        "oob": {
            "dex_number": 65
        },
        "types": [
            "Psychic"
        ]
    },
    {
        "name": "Machop",
        "abilities": [
            "Guts",
            "No Guard",
            "Steadfast"
        ],
        "stats": [
            {
                "hp": 70
            },
            {
                "atk": 80
            },
            {
                "def": 50
            },
            {
                "spa": 35
            },
            {
                "spd": 35
            }
        ],
        "height": 0.8,
        "weight": 19.5,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 66
        },
        "types": [
            "Fighting"
        ]
    },
    {
        "name": "Machoke",
        "abilities": [
            "Guts",
            "No Guard",
            "Steadfast"
        ],
        "stats": [
            {
                "hp": 80
            },
            {
                "atk": 100
            },
            {
                "def": 70
            },
            {
                "spa": 50
            },
            {
                "spd": 60
            }
        ],
        "height": 1.5,
        "weight": 70.5,
        "formats": [
            "ZUBL"
        ],
        "oob": {
            "dex_number": 67
        },
        "types": [
            "Fighting"
        ]
    },
    {
        "name": "Machamp",
        "abilities": [
            "Guts",
            "No Guard",
            "Steadfast"
        ],
        "stats": [
            {
                "hp": 90
            },
            {
                "atk": 130
            },
            {
                "def": 80
            },
            {
                "spa": 65
            },
            {
                "spd": 85
            }
        ],
        "height": 1.6,
        "weight": 130,
        "formats": [
            "UU"
        ],
        "oob": {
            "dex_number": 68
        },
        "types": [
            "Fighting"
        ]
    },
    {
        "name": "Bellsprout",
        "abilities": [
            "Chlorophyll",
            "Gluttony"
        ],
        "stats": [
            {
                "hp": 50
            },
            {
                "atk": 75
            },
            {
                "def": 35
            },
            {
                "spa": 70
            },
            {
                "spd": 30
            }
        ],
        "height": 0.7,
        "weight": 4,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 69
        },
        "types": [
            "Grass",
            "Poison"
        ]
    },
    {
        "name": "Squirtle",
        "abilities": [
            "Torrent",
            "Rain Dish"
        ],
        "stats": [
            {
                "hp": 44
            },
            {
                "atk": 48
            },
            {
                "def": 65
            },
            {
                "spa": 50
            },
            {
                "spd": 64
            }
        ],
        "height": 0.5,
        "weight": 9,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 7
        },
        "types": [
            "Water"
        ]
    },
    {
        "name": "Weepinbell",
        "abilities": [
            "Chlorophyll",
            "Gluttony"
        ],
        "stats": [
            {
                "hp": 65
            },
            {
                "atk": 90
            },
            {
                "def": 50
            },
            {
                "spa": 85
            },
            {
                "spd": 45
            }
        ],
        "height": 1,
        "weight": 6.4,
        "formats": [
            "NFE"
        ],
        "oob": {
            "dex_number": 70
        },
        "types": [
            "Grass",
            "Poison"
        ]
    },
    {
        "name": "Victreebel",
        "abilities": [
            "Chlorophyll",
            "Gluttony"
        ],
        "stats": [
            {
                "hp": 80
            },
            {
                "atk": 105
            },
            {
                "def": 65
            },
            {
                "spa": 100
            },
            {
                "spd": 60
            }
        ],
        "height": 1.7,
        "weight": 15.5,
        "formats": [
            "PU"
        ],
        "oob": {
            "dex_number": 71
        },
        "types": [
            "Grass",
            "Poison"
        ]
    },
    {
        "name": "Tentacool",
        "abilities": [
            "Clear Body",
            "Liquid Ooze",
            "Rain Dish"
        ],
        "stats": [
            {
                "hp": 40
            },
            {
                "atk": 40
            },
            {
                "def": 35
            },
            {
                "spa": 50
            },
            {
                "spd": 100
            }
        ],
        "height": 0.9,
        "weight": 45.5,
        "formats": [
            "PU"
        ],
        "oob": {
            "dex_number": 72
        },
        "types": [
            "Water",
            "Poison"
        ]
    },
    {
        "name": "Tentacruel",
        "abilities": [
            "Clear Body",
            "Liquid Ooze",
            "Rain Dish"
        ],
        "stats": [
            {
                "hp": 80
            },
            {
                "atk": 70
            },
            {
                "def": 65
            },
            {
                "spa": 80
            },
            {
                "spd": 120
            }
        ],
        "height": 1.6,
        "weight": 55,
        "formats": [
            "OU"
        ],
        "oob": {
            "dex_number": 73
        },
        "types": [
            "Water",
            "Poison"
        ]
    },
    {
        "name": "Geodude",
        "abilities": [
            "Rock Head",
            "Sturdy",
            "Sand Veil"
        ],
        "stats": [
            {
                "hp": 40
            },
            {
                "atk": 80
            },
            {
                "def": 100
            },
            {
                "spa": 30
            },
            {
                "spd": 30
            }
        ],
        "height": 0.4,
        "weight": 20,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 74
        },
        "types": [
            "Rock",
            "Ground"
        ]
    },
    {
        "name": "Graveler",
        "abilities": [
            "Rock Head",
            "Sturdy",
            "Sand Veil"
        ],
        "stats": [
            {
                "hp": 55
            },
            {
                "atk": 95
            },
            {
                "def": 115
            },
            {
                "spa": 45
            },
            {
                "spd": 45
            }
        ],
        "height": 1,
        "weight": 105,
        "formats": [
            "NFE"
        ],
        "oob": {
            "dex_number": 75
        },
        "types": [
            "Rock",
            "Ground"
        ]
    },
    {
        "name": "Golem",
        "abilities": [
            "Rock Head",
            "Sturdy",
            "Sand Veil"
        ],
        "stats": [
            {
                "hp": 80
            },
            {
                "atk": 110
            },
            {
                "def": 130
            },
            {
                "spa": 55
            },
            {
                "spd": 65
            }
        ],
        "height": 1.4,
        "weight": 300,
        "formats": [
            "NU"
        ],
        "oob": {
            "dex_number": 76
        },
        "types": [
            "Rock",
            "Ground"
        ]
    },
    {
        "name": "Ponyta",
        "abilities": [
            "Run Away",
            "Flash Fire",
            "Flame Body"
        ],
        "stats": [
            {
                "hp": 50
            },
            {
                "atk": 85
            },
            {
                "def": 55
            },
            {
                "spa": 65
            },
            {
                "spd": 65
            }
        ],
        "height": 1,
        "weight": 30,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 77
        },
        "types": [
            "Fire"
        ]
    },
    {
        "name": "Rapidash",
        "abilities": [
            "Run Away",
            "Flash Fire",
            "Flame Body"
        ],
        "stats": [
            {
                "hp": 65
            },
            {
                "atk": 100
            },
            {
                "def": 70
            },
            {
                "spa": 80
            },
            {
                "spd": 80
            }
        ],
        "height": 1.7,
        "weight": 95,
        "formats": [
            "PU"
        ],
        "oob": {
            "dex_number": 78
        },
        "types": [
            "Fire"
        ]
    },
    {
        "name": "Slowpoke",
        "abilities": [
            "Oblivious",
            "Own Tempo",
            "Regenerator"
        ],
        "stats": [
            {
                "hp": 90
            },
            {
                "atk": 65
            },
            {
                "def": 65
            },
            {
                "spa": 40
            },
            {
                "spd": 40
            }
        ],
        "height": 1.2,
        "weight": 36,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 79
        },
        "types": [
            "Water",
            "Psychic"
        ]
    },
    {
        "name": "Wartortle",
        "abilities": [
            "Torrent",
            "Rain Dish"
        ],
        "stats": [
            {
                "hp": 59
            },
            {
                "atk": 63
            },
            {
                "def": 80
            },
            {
                "spa": 65
            },
            {
                "spd": 80
            }
        ],
        "height": 1,
        "weight": 22.5,
        "formats": [
            "NU"
        ],
        "oob": {
            "dex_number": 8
        },
        "types": [
            "Water"
        ]
    },
    {
        "name": "Slowbro",
        "abilities": [
            "Oblivious",
            "Own Tempo",
            "Regenerator"
        ],
        "stats": [
            {
                "hp": 95
            },
            {
                "atk": 75
            },
            {
                "def": 110
            },
            {
                "spa": 100
            },
            {
                "spd": 80
            }
        ],
        "height": 1.6,
        "weight": 78.5,
        "formats": [
            "UU"
        ],
        "oob": {
            "dex_number": 80
        },
        "types": [
            "Water",
            "Psychic"
        ]
    },
    {
        "name": "Magnemite",
        "abilities": [
            "Magnet Pull",
            "Sturdy",
            "Analytic"
        ],
        "stats": [
            {
                "hp": 25
            },
            {
                "atk": 35
            },
            {
                "def": 70
            },
            {
                "spa": 95
            },
            {
                "spd": 55
            }
        ],
        "height": 0.3,
        "weight": 6,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 81
        },
        "types": [
            "Electric",
            "Steel"
        ]
    },
    {
        "name": "Magneton",
        "abilities": [
            "Magnet Pull",
            "Sturdy",
            "Analytic"
        ],
        "stats": [
            {
                "hp": 50
            },
            {
                "atk": 60
            },
            {
                "def": 95
            },
            {
                "spa": 120
            },
            {
                "spd": 70
            }
        ],
        "height": 1,
        "weight": 60,
        "formats": [
            "RU"
        ],
        "oob": {
            "dex_number": 82
        },
        "types": [
            "Electric",
            "Steel"
        ]
    },
    {
        "name": "Farfetch'd",
        "abilities": [
            "Keen Eye",
            "Inner Focus",
            "Defiant"
        ],
        "stats": [
            {
                "hp": 52
            },
            {
                "atk": 65
            },
            {
                "def": 55
            },
            {
                "spa": 58
            },
            {
                "spd": 62
            }
        ],
        "height": 0.8,
        "weight": 15,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 83
        },
        "types": [
            "Normal",
            "Flying"
        ]
    },
    {
        "name": "Doduo",
        "abilities": [
            "Run Away",
            "Early Bird",
            "Tangled Feet"
        ],
        "stats": [
            {
                "hp": 35
            },
            {
                "atk": 85
            },
            {
                "def": 45
            },
            {
                "spa": 35
            },
            {
                "spd": 35
            }
        ],
        "height": 1.4,
        "weight": 39.2,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 84
        },
        "types": [
            "Normal",
            "Flying"
        ]
    },
    {
        "name": "Dodrio",
        "abilities": [
            "Run Away",
            "Early Bird",
            "Tangled Feet"
        ],
        "stats": [
            {
                "hp": 60
            },
            {
                "atk": 110
            },
            {
                "def": 70
            },
            {
                "spa": 60
            },
            {
                "spd": 60
            }
        ],
        "height": 1.8,
        "weight": 85.2,
        "formats": [
            "PU"
        ],
        "oob": {
            "dex_number": 85
        },
        "types": [
            "Normal",
            "Flying"
        ]
    },
    {
        "name": "Seel",
        "abilities": [
            "Thick Fat",
            "Hydration",
            "Ice Body"
        ],
        "stats": [
            {
                "hp": 65
            },
            {
                "atk": 45
            },
            {
                "def": 55
            },
            {
                "spa": 45
            },
            {
                "spd": 70
            }
        ],
        "height": 1.1,
        "weight": 90,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 86
        },
        "types": [
            "Water"
        ]
    },
    {
        "name": "Dewgong",
        "abilities": [
            "Thick Fat",
            "Hydration",
            "Ice Body"
        ],
        "stats": [
            {
                "hp": 90
            },
            {
                "atk": 70
            },
            {
                "def": 80
            },
            {
                "spa": 70
            },
            {
                "spd": 95
            }
        ],
        "height": 1.7,
        "weight": 120,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 87
        },
        "types": [
            "Water",
            "Ice"
        ]
    },
    {
        "name": "Grimer",
        "abilities": [
            "Stench",
            "Sticky Hold",
            "Poison Touch"
        ],
        "stats": [
            {
                "hp": 80
            },
            {
                "atk": 80
            },
            {
                "def": 50
            },
            {
                "spa": 40
            },
            {
                "spd": 50
            }
        ],
        "height": 0.9,
        "weight": 30,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 88
        },
        "types": [
            "Poison"
        ]
    },
    {
        "name": "Muk",
        "abilities": [
            "Stench",
            "Sticky Hold",
            "Poison Touch"
        ],
        "stats": [
            {
                "hp": 105
            },
            {
                "atk": 105
            },
            {
                "def": 75
            },
            {
                "spa": 65
            },
            {
                "spd": 100
            }
        ],
        "height": 1.2,
        "weight": 30,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 89
        },
        "types": [
            "Poison"
        ]
    },
    {
        "name": "Blastoise",
        "abilities": [
            "Torrent",
            "Rain Dish"
        ],
        "stats": [
            {
                "hp": 79
            },
            {
                "atk": 83
            },
            {
                "def": 100
            },
            {
                "spa": 85
            },
            {
                "spd": 105
            }
        ],
        "height": 1.6,
        "weight": 85.5,
        "formats": [
            "UU"
        ],
        "oob": {
            "dex_number": 9
        },
        "types": [
            "Water"
        ]
    },
    {
        "name": "Shellder",
        "abilities": [
            "Shell Armor",
            "Skill Link",
            "Overcoat"
        ],
        "stats": [
            {
                "hp": 30
            },
            {
                "atk": 65
            },
            {
                "def": 100
            },
            {
                "spa": 45
            },
            {
                "spd": 25
            }
        ],
        "height": 0.3,
        "weight": 4,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 90
        },
        "types": [
            "Water"
        ]
    },
    {
        "name": "Cloyster",
        "abilities": [
            "Shell Armor",
            "Skill Link",
            "Overcoat"
        ],
        "stats": [
            {
                "hp": 50
            },
            {
                "atk": 95
            },
            {
                "def": 180
            },
            {
                "spa": 85
            },
            {
                "spd": 45
            }
        ],
        "height": 1.5,
        "weight": 132.5,
        "formats": [
            "Uber"
        ],
        "oob": {
            "dex_number": 91
        },
        "types": [
            "Water",
            "Ice"
        ]
    },
    {
        "name": "Gastly",
        "abilities": [
            "Levitate"
        ],
        "stats": [
            {
                "hp": 30
            },
            {
                "atk": 35
            },
            {
                "def": 30
            },
            {
                "spa": 100
            },
            {
                "spd": 35
            }
        ],
        "height": 1.3,
        "weight": 0.1,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 92
        },
        "types": [
            "Ghost",
            "Poison"
        ]
    },
    {
        "name": "Haunter",
        "abilities": [
            "Levitate"
        ],
        "stats": [
            {
                "hp": 45
            },
            {
                "atk": 50
            },
            {
                "def": 45
            },
            {
                "spa": 115
            },
            {
                "spd": 55
            }
        ],
        "height": 1.6,
        "weight": 0.1,
        "formats": [
            "NU"
        ],
        "oob": {
            "dex_number": 93
        },
        "types": [
            "Ghost",
            "Poison"
        ]
    },
    {
        "name": "Gengar",
        "abilities": [
            "Levitate"
        ],
        "stats": [
            {
                "hp": 60
            },
            {
                "atk": 65
            },
            {
                "def": 60
            },
            {
                "spa": 130
            },
            {
                "spd": 75
            }
        ],
        "height": 1.5,
        "weight": 40.5,
        "formats": [
            "OU"
        ],
        "oob": {
            "dex_number": 94
        },
        "types": [
            "Ghost",
            "Poison"
        ]
    },
    {
        "name": "Onix",
        "abilities": [
            "Rock Head",
            "Sturdy",
            "Weak Armor"
        ],
        "stats": [
            {
                "hp": 35
            },
            {
                "atk": 45
            },
            {
                "def": 160
            },
            {
                "spa": 30
            },
            {
                "spd": 45
            }
        ],
        "height": 8.8,
        "weight": 210,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 95
        },
        "types": [
            "Rock",
            "Ground"
        ]
    },
    {
        "name": "Drowzee",
        "abilities": [
            "Insomnia",
            "Forewarn",
            "Inner Focus"
        ],
        "stats": [
            {
                "hp": 60
            },
            {
                "atk": 48
            },
            {
                "def": 45
            },
            {
                "spa": 43
            },
            {
                "spd": 90
            }
        ],
        "height": 1,
        "weight": 32.4,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 96
        },
        "types": [
            "Psychic"
        ]
    },
    {
        "name": "Hypno",
        "abilities": [
            "Insomnia",
            "Forewarn",
            "Inner Focus"
        ],
        "stats": [
            {
                "hp": 85
            },
            {
                "atk": 73
            },
            {
                "def": 70
            },
            {
                "spa": 73
            },
            {
                "spd": 115
            }
        ],
        "height": 1.6,
        "weight": 75.6,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 97
        },
        "types": [
            "Psychic"
        ]
    },
    {
        "name": "Krabby",
        "abilities": [
            "Hyper Cutter",
            "Shell Armor",
            "Sheer Force"
        ],
        "stats": [
            {
                "hp": 30
            },
            {
                "atk": 105
            },
            {
                "def": 90
            },
            {
                "spa": 25
            },
            {
                "spd": 25
            }
        ],
        "height": 0.4,
        "weight": 6.5,
        "formats": [
            "LC"
        ],
        "oob": {
            "dex_number": 98
        },
        "types": [
            "Water"
        ]
    },
    {
        "name": "Kingler",
        "abilities": [
            "Hyper Cutter",
            "Shell Armor",
            "Sheer Force"
        ],
        "stats": [
            {
                "hp": 55
            },
            {
                "atk": 130
            },
            {
                "def": 115
            },
            {
                "spa": 50
            },
            {
                "spd": 50
            }
        ],
        "height": 1.3,
        "weight": 60,
        "formats": [
            "ZU"
        ],
        "oob": {
            "dex_number": 99
        },
        "types": [
            "Water"
        ]
    },
    {
        "name": "Castform-Sunny",
        "abilities": [
            "Forecast"
        ],
        "stats": [
            {
                "hp": 70
            },
            {
                "atk": 70
            },
            {
                "def": 70
            },
            {
                "spa": 70
            },
            {
                "spd": 70
            }
        ],
        "height": 0.3,
        "weight": 0.8,
        "formats": [
            "ZU"
        ],
        "oob": {},
        "types": [
            "Fire"
        ]
    },
    {
        "name": "Meloetta-Pirouette",
        "abilities": [
            "Serene Grace"
        ],
        "stats": [
            {
                "hp": 100
            },
            {
                "atk": 128
            },
            {
                "def": 90
            },
            {
                "spa": 77
            },
            {
                "spd": 77
            }
        ],
        "height": 0.6,
        "weight": 6.5,
        "formats": [
            "UU"
        ],
        "oob": {},
        "types": [
            "Normal",
            "Fighting"
        ]
    },
    {
        "name": "Darmanitan-Zen",
        "abilities": [
            "Zen Mode"
        ],
        "stats": [
            {
                "hp": 105
            },
            {
                "atk": 30
            },
            {
                "def": 105
            },
            {
                "spa": 140
            },
            {
                "spd": 105
            }
        ],
        "height": 1.3,
        "weight": 92.9,
        "formats": [
            "UU"
        ],
        "oob": {},
        "types": [
            "Fire",
            "Psychic"
        ]
    },
    {
        "name": "Castform-Rainy",
        "abilities": [
            "Forecast"
        ],
        "stats": [
            {
                "hp": 70
            },
            {
                "atk": 70
            },
            {
                "def": 70
            },
            {
                "spa": 70
            },
            {
                "spd": 70
            }
        ],
        "height": 0.3,
        "weight": 0.8,
        "formats": [
            "ZU"
        ],
        "oob": {},
        "types": [
            "Water"
        ]
    },
    {
        "name": "Cherrim-Sunshine",
        "abilities": [
            "Flower Gift"
        ],
        "stats": [
            {
                "hp": 70
            },
            {
                "atk": 60
            },
            {
                "def": 70
            },
            {
                "spa": 87
            },
            {
                "spd": 78
            }
        ],
        "height": 0.5,
        "weight": 9.3,
        "formats": [
            "ZU"
        ],
        "oob": {},
        "types": [
            "Grass"
        ]
    },
    {
        "name": "Castform-Snowy",
        "abilities": [
            "Forecast"
        ],
        "stats": [
            {
                "hp": 70
            },
            {
                "atk": 70
            },
            {
                "def": 70
            },
            {
                "spa": 70
            },
            {
                "spd": 70
            }
        ],
        "height": 0.3,
        "weight": 0.8,
        "formats": [
            "ZU"
        ],
        "oob": {},
        "types": [
            "Ice"
        ]
    }
].filter(pokemon => pokemon.oob?.dex_number >= 0)
.sort((pokemon_a, pokemon_b) => pokemon_a.oob?.dex_number - pokemon_b.oob?.dex_number)
.map(pokemon => pokemon);

const get_pokemon_gif = (pokemon) => `https://www.smogon.com/dex/media/sprites/bw/${pokemon.name.toLowerCase()}.gif`;

const in_range = (num, left, right) => num >= left && num <= right;
function get_stat_viability_class(value){
	if(in_range(value, 0, 69)) return "vbad";
	if(in_range(value, 69, 84)) return "valright";
	if(in_range(value, 84, 119)) return "vgood";
	if(in_range(value, 119, 256)) return "vbest";
	return "vbad";
}

function get_stats_slider(key, value){
	return `
	<div class="card-stats-group">
		<p style="width: 25px;">${key.padEnd(3)}:</p>
		<p>${value}</p>
		<div class="stat ${get_stat_viability_class(value)}" style="width: ${(120 * value) / 255}px;"></div>
	</div>`
}

function get_type(type){
	return `<p class="card-type ${type.toLowerCase()}">${type}<p>`;
}

function insert_pokemon_card(pokemon){
	const card_container = document.querySelector('#card-container');
	const stats_list_items = pokemon.stats.map((stat_obj) => get_stats_slider(Object.keys(stat_obj)[0], Object.values(stat_obj)[0])).join('\n'); 
	const types_list_items = pokemon.types.map((type) => get_type(type)).join('\n'); 
	console.log(stats_list_items)
	const card = `
	<div class="card-wrapper">
		<p class="card-dex-no">${pokemon.oob.dex_number}</p>
		<div class="card">
			<div class="card-gif-container" style="grid-area: gif;">
				<img class="card-gif" src="${get_pokemon_gif(pokemon)}" alt="GIF of ${pokemon.name}"/>
			</div>
			<div class="card-name-type" style="grid-area: name-type;">
				<h2 class="card-name">${pokemon.name}</h2>
				<div class="card-types-list">
					${types_list_items}
				</div>
			</div>
			<div class="card-attribute-group" style="grid-area: sdata;">
				<p class="card-attribute">Height: ${pokemon.height}m</p>
				<p class="card-attribute">Weight: ${pokemon.weight}kg</p>
				${pokemon.formats.filter(f => f).length > 0 ? `<p class="card-attribute">Formats: ${pokemon.formats[0]}</p>` : ''}
			</div>
			<div class="card-stats-list" style="grid-area: stats;">
				${stats_list_items}
			</div>
		</div>
	</div>
	`;
	card_container.insertAdjacentHTML("beforeend", card);
}

function insert_pokemon_card_list(){

}
function clear_insert_pokemon_card_list(){

}

function on_dom_loaded(){
	for(const mon of pokemons.slice(500, 550))
	{
		insert_pokemon_card(mon);
	}
}

document.addEventListener("DOMContentLoaded", on_dom_loaded);


// // This function adds cards the page to display the data in the array
// function showCards() {
// 	const cardContainer = document.getElementById("card-container");
// 	cardContainer.innerHTML = "";
// 	const templateCard = document.querySelector(".card");

// 	for (let i = 0; i < titles.length; i++) {
// 		let title = titles[i];

// 		// This part of the code doesn't scale very well! After you add your
// 		// own data, you'll need to do something totally different here.
// 		let imageURL = "";
// 		if (i == 0) {
// 			imageURL = FRESH_PRINCE_URL;
// 		} else if (i == 1) {
// 			imageURL = CURB_POSTER_URL;
// 		} else if (i == 2) {
// 			imageURL = EAST_LOS_HIGH_POSTER_URL;
// 		}

// 		const nextCard = templateCard.cloneNode(true); // Copy the template card
// 		editCardContent(nextCard, title, imageURL); // Edit title and image
// 		cardContainer.appendChild(nextCard); // Add new card to the container
// 	}
// }

// function editCardContent(card, newTitle, newImageURL) {
// 	card.style.display = "block";

// 	const cardHeader = card.querySelector("h2");
// 	cardHeader.textContent = newTitle;

// 	const cardImage = card.querySelector("img");
// 	cardImage.src = newImageURL;
// 	cardImage.alt = newTitle + " Poster";

// 	// You can use console.log to help you debug!
// 	// View the output by right clicking on your website,
// 	// select "Inspect", then click on the "Console" tab
// 	console.log("new card:", newTitle, "- html: ", card);
// }

// // This calls the addCards() function when the page is first loaded

// function quoteAlert() {
// 	console.log("Button Clicked!");
// 	alert(
// 		"I guess I can kiss heaven goodbye, because it got to be a sin to look this good!",
// 	);
// }

// function removeLastCard() {
// 	titles.pop(); // Remove last item in titles array
// 	showCards(); // Call showCards again to refresh
// }
