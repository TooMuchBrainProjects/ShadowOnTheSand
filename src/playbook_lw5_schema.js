// use playbooks;
//-- ------------------------------------------------------------------------------------ --
// --    Collection: personalities
// -- ----------------------------------------------------------------------------------- --
db.getCollection("lw5").drop();

db.createCollection("lw5", {
    validationLevel: "strict",
    validationAction: "error",
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["sectionType", "content", "book"],
            additionalProperties: true,
            properties: {
                sectionType: {
                    enum: ["RULE_SECTION", "STORY_SECTION"],
                },
                content: {
                    bsonType: "string",
                },
                ruleType: {
                    enum: ["TITLE_PAGE", "THE_STORY_SO_FAR", "ABILITIES", "ITEMS", "REGIONS"],
                },
                book: {
                    bsonType: "object",
                    required: ["name", "imageUrl", "author", "illustrator"],
                    additionalProperties: false,
                    properties: {
                        name: {
                            bsonType: "string",
                            minLength: 1,
                            maxLength: 100,
                        },
                        imageUrl: {
                            bsonType: "string",
                            minLength: 1,
                            maxLength: 100,
                        },
                        author: {
                            bsonType: "string",
                            minLength: 1,
                            maxLength: 50,
                        },
                        illustrator: {
                            bsonType: "string",
                            minLength: 1,
                            maxLength: 50,
                        },
                    },
                },
                region: {
                    bsonType: "object",
                    required: ["name", "regionType", "description", "imageUrl"],
                    additionalProperties: true,
                    properties: {
                        name: {
                            bsonType: "string",
                            minLength: 1,
                            maxLength: 50,
                        },
                        regionType: {
                            enum: [
                                "BRIDGE",
                                "BUILDING",
                                "CAVE",
                                "CITADEL",
                                "CITY",
                                "CITY_OUTSKIRTS",
                                "CLEARING",
                                "CONTINENT",
                                "EVIL_TEMPLE",
                                "GRAVEYARD",
                                "HARBOUR",
                                "ISLAND",
                                "KINGDOM",
                                "LAKE",
                                "OASIS",
                                "PLACES_OF_WORSHIP",
                                "MARSH",
                                "MOUNTAIN",
                                "RIVER",
                                "RIVER_BANK",
                                "RIVER_VALLEY",
                                "ROAD",
                                "STONE_BUILDING",
                                "TEMPLE_RUIN",
                                "TOWN",
                                "VILLAGE",
                                "WOOD_BUILDING",
                                "WOODS",
                            ],
                        },
                    },
                },
                abilities: {
                    bsonType: "array",
                    items: {
                        bsonType: "object",
                        required: ["abilityType", "description", "imageUrl"],
                        additionalProperties: false,
                        properties: {
                            abilityType: {
                                enum: [
                                    "CAMOUFLAGE",
                                    "HUNTING",
                                    "SIXTH_SENSE",
                                    "TRACKING",
                                    "HEALING",
                                    "WEAPONSKILL",
                                    "MINDSHIELD",
                                    "MINDBLAST",
                                    "ANIMAL_KINSHIP",
                                    "MIND_OVER_MATTER",
                                ],
                            },
                            description: {
                                bsonType: "string",
                            },
                            imageUrl: {
                                bsonType: "string",
                                minLength: 1,
                                maxLength: 100,
                            },
                        },
                    },
                },
                items: {
                    bsonType: "array",
                    items: {
                        bsonType: "object",
                        required: ["code", "name", "itemType", "description", "weight", "imageUrl"],
                        additionalProperties: false,
                        properties: {
                            code: {
                                bsonType: "string",
                                minLength: 2,
                                maxLength: 20,
                            },
                            name: {
                                bsonType: "string",
                                maxLength: 50,
                            },
                            itemType: {
                                enum: [
                                    "WEAPON",
                                    "MAGICAL_ITEM",
                                    "BACK_PACK",
                                    "KEY",
                                    "HERB",
                                    "GEM",
                                    "POTION",
                                    "SCROLL",
                                    "UTILITY",
                                ],
                            },
                            description: {
                                bsonType: "string",
                            },
                            weight: {
                                enum: ["SMALL", "MEDIUM", "HEAVY"],
                            },
                            imageUrl: {
                                bsonType: "string",
                            },
                        },
                    },
                },
                sectionNr: {
                    bsonType: "int",
                    minimum: 1,
                    maximum: 500,
                },
                events: {
                    bsonType: "array",
                    items: {
                        bsonType: "object",
                        required: ["eventType", "ranking"],
                        additionalProperties: true,
                        properties: {
                            eventType: {
                                enum: [
                                    "COMBAT",
                                    "ACQUIRE_ITEM_EVENT",
                                    "CHANGE_GOLD_AMOUNT_EVENT",
                                    "CHANGE_RATION_AMOUNT_EVENT",
                                    "MISSION_FAILED_EVENT",
                                    "TEMPORARY_CHANGE_COMBAT_SKILL_EVENT",
                                    "CHANGE_ENDURANCE_EVENT",
                                    "STORY_EVENT",
                                    "DROP_ALL_WEAPONS_EVENT",
                                    "DROP_BACKPACK_EVENT",
                                    "CHANGE_COMBAT_SKILL_EVENT",
                                    "DROP_ALL_ITEMS_EVENT",
                                    "DROP_WEAPON_EVENT",
                                    "MISSION_ACCOMPLISHED_EVENT",
                                ],
                            },
                            ranking: {
                                bsonType: "int",
                                minimum: 1,
                                maximum: 50,
                            },
                            creature: {
                                bsonType: "object",
                                required: ["name", "combatSkill", "endurance", "imageUrl"],
                                additionalProperties: false,
                                properties: {
                                    name: {
                                        bsonType: "string",
                                        minLength: 1,
                                        maxLength: 50,
                                    },
                                    combatSkill: {
                                        bsonType: "int",
                                        minimum: 1,
                                        maximum: 200,
                                    },
                                    endurance: {
                                        bsonType: "int",
                                        minimum: 1,
                                        maximum: 500,
                                    },
                                    imageUrl: {
                                        bsonType: "string",
                                        maxLength: 100,
                                    },
                                },
                            },
                            item: {
                                bsonType: "object",
                                required: ["name", "itemType", "description", "weight", "imageUrl"],
                                additionalProperties: false,
                                properties: {
                                    name: {
                                        bsonType: "string",
                                        maxLength: 50,
                                    },
                                    itemType: {
                                        enum: [
                                            "WEAPON",
                                            "MAGICAL_ITEM",
                                            "BACK_PACK",
                                            "KEY",
                                            "HERB",
                                            "GEM",
                                            "POTION",
                                            "SCROLL",
                                            "UTILITY",
                                        ],
                                    },
                                    description: {
                                        bsonType: "string",
                                    },
                                    weight: {
                                        enum: ["SMALL", "MEDIUM", "HEAVY"],
                                    },
                                    imageUrl: {
                                        bsonType: "string",
                                    },
                                },
                            },
                            amount: {
                                bsonType: "int",
                            },
                        },
                    },
                },
                outcomes: {
                    bsonType: "array",
                    items: {
                        bsonType: "object",
                        required: ["outcomeType", "content", "targetNr"],
                        additionalProperties: true,
                        properties: {
                            outcomeType: {
                                enum: [
                                    "DEFAULT",
                                    "RANDOM",
                                    "ABILITY",
                                    "ITEM",
                                    "GOLD",
                                    "MISSION_FAILED",
                                ],
                            },
                            content: {
                                bsonType: "string",
                            },
                            targetNr: {
                                bsonType: "int",
                                minimum: -1,
                                maximum: 500,
                            },
                            amount: {
                                bsonType: "int",
                            },
                            ability: {
                                bsonType: "object",
                                required: ["abilityType", "description"],
                                additionalProperties: false,
                                properties: {
                                    abilityType: {
                                        enum: [
                                            "CAMOUFLAGE",
                                            "HUNTING",
                                            "SIXTH_SENSE",
                                            "TRACKING",
                                            "HEALING",
                                            "WEAPONSKILL",
                                            "MINDSHIELD",
                                            "MINDBLAST",
                                            "ANIMAL_KINSHIP",
                                            "MIND_OVER_MATTER",
                                        ],
                                    },
                                    description: {
                                        bsonType: "string",
                                    },
                                },
                            },
                            intervall: {
                                bsonType: "object",
                                required: ["min", "max"],
                                additionalProperties: false,
                                properties: {
                                    min: {
                                        bsonType: "int",
                                        minimum: 0,
                                        maximum: 10,
                                    },
                                    max: {
                                        bsonType: "int",
                                        minimum: 0,
                                        maximum: 10,
                                    },
                                },
                            },
                            item: {
                                bsonType: "object",
                                required: ["code", "name", "description", "imageUrl"],
                                additionalProperties: true,
                                properties: {
                                    name: {
                                        bsonType: "string",
                                        minLength: 1,
                                        maxLength: 50,
                                    },
                                    description: {
                                        bsonType: "string",
                                    },
                                    imageUrl: {
                                        bsonType: "string",
                                        minLength: 1,
                                        maxLength: 100,
                                    },
                                    code: {
                                        bsonType: "string",
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
    },
});

db.getCollection("lw5").insertMany([
    {
        /*
         * -- --------------------------------------------------------
         * --  Rulesection: Title Page
         * -- --------------------------------------------------------
         */
        sectionType: "RULE_SECTION",
        ruleType: "TITLE_PAGE",
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        content:
            "You are Lone Wolf—last of the Kai Lords. A voyage to Vassagonia promises an end to the shadow of war. But hopes are soon shattered upon your arrival at Barrakeesh—a city full of treachery and death. In Shadow on the Sand, you are the quarry of a sinister foe, determined to kill you at all costs. Choose your skills and your weapons carefully. They can help you survive and aid you in the quest for a lost Sommlending treasure—a treasure that contains the secret of your destiny.",
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Rulesection: The story so far
         * -- --------------------------------------------------------
         */
        sectionType: "RULE_SECTION",
        ruleType: "THE_STORY_SO_FAR",
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        content:
            "<p>You are Lone Wolf—last of the Kai Lords of Sommerlund, and sole survivor of the massacre that destroyed them during a bitter war with your age-old enemies, the Darklords of Helgedad. It is midwinter in your northern homeland and a mantle of snow lies knee-deep in the streets of Holmgard—the capital—when you are summoned from your monastery in the hills by a messenger bearing a scroll, signed and sealed by the hand of King Ulnar. You are surprised to read the King’s message, for it is a request for your help in solving an urgent problem of what he describes as ‘great diplomatic importance’. It seems a strange request to make of a warrior lord, whose skills are better suited to the field of battle than to parleying with foreign envoys. However, you obey the summons and upon your arrival at the capital, all is made clear. The Zakhan of Vassagonia, the imperial ruler of this desert empire, has sent his most trusted envoy to seek a treaty of peace between your two countries, and you have been asked to sign the treaty on behalf of your country. The reason for this is easily apparent. Less than a year ago, a renegade noble of Vassagonia called Barraka led his army of bandits in an attack upon the Sommlending province of Ruanon. This mining town and much of the surrounding land was overrun and destroyed. Many Sommlending lost their lives, and many more were enslaved and forced to labour in the mines of the Maaken Range. When the regular convoy from Ruanon failed to arrive at the capital, the king sent you to investigate. A great battle ensued in which you defeated Barraka in mortal combat. Without your courage and skill, the safety of Sommerlund and all of the Lastlands would have been placed in grave peril. ‘Your majesty, the Zakhan is gravely embarrassed by Barraka’s foul treachery, and is most anxious that our friendship and trust be restored. He begs that you send the Kai warrior, Lone Wolf, to sign a treaty of peace with him at the Grand Palace in Barrakeesh,’ whimpers the Zakhan’s emissary, as he kneels at the feet of King Ulnar. The king rises from his throne, barely able to conceal his distaste for the fawning envoy. He turns his gaze to you and bids you follow him to the privacy of an antechamber. ‘I have no liking for this desert realm, Lone Wolf, but I like the prospect of war even less. The Zakhan is old and frail, and has no son to claim his throne when he dies. Barraka was but one of many ruthless nobles who wait like jackals for the chance to seize power, and I fear they grow too impatient to allow the Zakhan to die a natural death. The treaty may not guarantee peace with Vassagonia once the Zakhan is dead, but it will at least buy us precious time to strengthen our southern border.’ The king leads you to a window and points towards the harbour, barely visible through the falling snow. A Vassagonian galley lies anchored close to the harbour wall. ‘Go to Vassagonia, Lone Wolf. Sign the treaty and return quickly. Even with the promise of peace, I fear the shadow of war will fall upon us before the year is out.’ You wave farewell to Holmgard on this bleak midwinter’s day, feeling sure you will return before the thaw. But as you watch the spires of Holmgard disappear in the falling snow, you have no inkling of the shadow that awaits you in Vassagonia.</p>",
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Rulesection: Abilities
         * -- --------------------------------------------------------
         */
        sectionType: "RULE_SECTION",
        ruleType: "ABILITIES",
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        abilities: [
            {
                abilityType: "CAMOUFLAGE",
                description:
                    "This Discipline enables a Kai Lord to blend in with his surroundings. In the countryside, he can hide undetected among trees and rocks and pass close to an enemy without being seen. In a town or city, it enables him to look and sound like a native of that area, and can help him to find shelter or a safe hiding place.",
                imageUrl: "images/shadow/abilities/camouflage.png",
            },
            {
                abilityType: "HUNTING",
                description:
                    "This skill ensures that a Kai Lord will never starve in the wild. He will always be able to hunt for food for himself except in areas of wasteland and desert. You are aware that most of Vassagonia is arid desert; should your adventure lead you into this desert, the opportunities for successful hunting may not arise. But this skill is still very useful for it also enables a Kai Lord to move with great speed and dexterity.",
                imageUrl: "images/shadow/abilities/hunting.png",
            },
            {
                abilityType: "SIXTH_SENSE",
                description:
                    "This skill may warn a Kai Lord of imminent danger. It may also reveal the true purpose of a stranger or strange object encountered in your adventure.",
                imageUrl: "images/shadow/abilities/sixthsense.png",
            },
            {
                abilityType: "TRACKING",
                description:
                    "This skill enables a Kai Lord to make the correct choice of a path in the wild, to discover the location of a person or object in a town or city and to read the secrets of footprints or tracks.",
                imageUrl: "images/shadow/abilities/hunting.png",
            },
            {
                abilityType: "HEALING",
                description:
                    "This Discipline can be used to restore ENDURANCE points lost in combat. If you possess this skill you may restore 1 ENDURANCE point to your total for every numbered section of the book you pass through in which you are not involved in combat. (This is only to be used after your ENDURANCE has fallen below its original level.) Remember that your ENDURANCE cannot rise above its original level.",
                imageUrl: "images/shadow/abilities/healing.png",
            },
            {
                abilityType: "WEAPONSKILL",
                description:
                    "Upon entering the Kai Monastery, each initiate is taught to master one type of weapon. If Weaponskill is to be one of your Kai Disciplines, pick a number in the usual way from the Random Number Table, and then find the corresponding weapon from the list below. This is the weapon in which you have skill. When you enter combat carrying this weapon, you add 2 points to your COMBAT SKILL.",
                imageUrl: "images/shadow/abilities/weaponskill.png",
            },
            {
                abilityType: "MINDSHIELD",
                description:
                    "The Darklords and many of the evil creatures in their command have the ability to attack you using their Mindforce. The Kai Discipline of Mindshield prevents you from losing any ENDURANCE points when subjected to this form of attack.",
                imageUrl: "images/shadow/abilities/mindshield.png",
            },
            {
                abilityType: "MINDBLAST",
                description:
                    "This enables a Kai Lord to attack an enemy using the force of his mind. It can be used at the same time as normal combat weapons and adds two extra points to your COMBAT SKILL. Not all the creatures encountered on this adventure will be harmed by Mindblast. You will be told if a creature is immune.",
                imageUrl: "images/shadow/abilities/mindblast.png",
            },
            {
                abilityType: "ANIMAL_KINSHIP",
                description:
                    "This skill enables a Kai Lord to communicate with some animals and to be able to guess the intentions of others.",
                imageUrl: "images/shadow/abilities/animalkinship.png",
            },
            {
                abilityType: "MIND_OVER_MATTER",
                description:
                    "Mastery of this Discipline enables a Kai Lord to move small objects with his powers of concentration.",
                imageUrl: "images/shadow/abilities/mindovermatter.png",
            },
        ],
        content:
            "Over the centuries, the Kai monks have mastered the skills of the warrior. These skills are known as the Kai Disciplines, and they are taught to all Kai Lords. You have learnt only five of the skills listed below. The choice of which five skills these are, is for you to make. As all of the Disciplines may be of use to you at some point on your perilous quest, pick your five with care. The correct use of a Discipline at the right time can save your life.",
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Rulesection: Items
         * -- --------------------------------------------------------
         */
        sectionType: "RULE_SECTION",
        ruleType: "ITEMS",
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        items: [
            {
                code: "DAGGER",
                name: "Dagger",
                itemType: "WEAPON",
                description: "Dagger",
                weight: "SMALL",
                imageUrl: "images/shadow/items/dagger.png",
            },
            {
                code: "SPEAR",
                name: "Spear",
                itemType: "WEAPON",
                description: "Spear",
                weight: "MEDIUM",
                imageUrl: "images/shadow/items/spear.png",
            },
            {
                code: "MACE",
                name: "Mace",
                itemType: "WEAPON",
                description: "Mace",
                weight: "MEDIUM",
                imageUrl: "images/shadow/items/mace.png",
            },
            // {
            //     code: "SHORT_SWORD",
            //     name: "Short Sword",
            //     itemType: "WEAPON",
            //     description: "Short Sord",
            //     weight: "MEDIUM",
            //     imageUrl: "images/shadow/items/shortsword.png",
            // },
            // {
            //     code: "WARHAMMER",
            //     name: "Warhammer",
            //     itemType: "WEAPON",
            //     description: "Warhammer",
            //     weight: "HEAVY",
            //     imageUrl: "images/shadow/items/warhammer.png",
            // },
            {
                code: "SWORD",
                name: "Sword",
                itemType: "WEAPON",
                description: "Sword",
                weight: "MEDIUM",
                imageUrl: "images/shadow/items/sword.png",
            },
            // {
            //     code: "AXE",
            //     name: "Axe",
            //     itemType: "WEAPON",
            //     description: "Axe",
            //     weight: "HEAVY",
            //     imageUrl: "images/shadow/items/axe.png",
            // },
            // {
            //     code: "QUARTER_STAFF",
            //     name: "Quarterstaff",
            //     itemType: "WEAPON",
            //     description: "Quarterstaff",
            //     weight: "SMALL",
            //     imageUrl: "images/shadow/items/quarterstaff.png",
            // },
            // {
            //     code: "BROADSWORD",
            //     name: "Broadsword",
            //     itemType: "WEAPON",
            //     description: "Broadsword",
            //     weight: "HEAVY",
            //     imageUrl: "images/shadow/items/broadsword.png",
            // },
            // {
            //     code: "VORDAK_GEM",
            //     name: "Vordak Gem",
            //     itemType: "WEAPON",
            //     description: "Vordak Gem",
            //     weight: "SMALL",
            //     imageUrl: "images/shadow/items/vordakgem.png",
            // },
            // {
            //     code: "BACK_PACK",
            //     name: "Back Pack",
            //     itemType: "WEAPON",
            //     description: "Back Pack",
            //     weight: "SMALL",
            //     imageUrl: "images/shadow/items/backpack.png",
            // },
            // {
            //     code: "GOLDEN_KEY",
            //     name: "Golden Key",
            //     itemType: "WEAPON",
            //     description: "Golden Key",
            //     weight: "SMALL",
            //     imageUrl: "images/shadow/items/goldenkey.png",
            // },
            {
                code: "BLACK_SASHE",
                name: "Black sashe",
                itemType: "MAGICAL_ITEM",
                description: "Black sashe",
                weight: "SMALL",
                imageUrl: "images/flight/items/black_sashe.png"
            },
            {
                code: "TINCTURE_OF_CALACENA",
                name: "Tincture of Calacena",
                itemType: "UTILITY",
                description: "causes terrifying hallucinations for 1–2 hours per dose",
                weight: "SMALL",
                imageUrl: "images/flight/items/tincture_of_calacena.png"
            },
            {
                code: "TINCTURE_OF_GRAVEWEED",
                name: "Tincture of Graveweed",
                itemType: "UTILITY",
                description: "causes sickness and loss of 2 ENDURANCE points per dose",
                weight: "SMALL",
                imageUrl: "images/flight/items/tincture_of_graveweed.png"
            },
            {
                code: "VIAL_OF_LARNUMA OIL",
                name: "Vial of Larnuma Oil",
                itemType: "UTILITY",
                description: "restores 2 ENDURANCE points per dose",
                weight: "SMALL",
                imageUrl: "images/flight/items/vial_of_larnuma_oil.png"
            },
            {
                code: "POTION_OF_LAUMSPUR",
                name: "Potion of Laumspur",
                itemType: "POTION",
                description: "restores 4 ENDURANCE points per dose",
                weight: "SMALL",
                imageUrl: "images/flight/items/potion_of_laumspur.png"
            },
            {
                code: "POTION_OF_GALLOWBRUSH",
                name: "Potion of Gallowbrush",
                itemType: "POTION",
                description: "induces sleep for 1–2 hours per dose",
                weight: "SMALL",
                imageUrl: "images/flight/items/potion_of_gallowbrush.png"
            },
            {
                code: "POTION_OF_ALETHER",
                name: "Potion of Alether",
                itemType : "POTION",
                description: "increases COMBAT SKILL by 2 for the duration of 1 combat",
                weight: "SMALL",
                imageUrl: "images/flight/items/potion_of_alether.png"
            },
            {
                code: "BRASS_WISTLE",
                name: "Brass Whistle",
                itemType: "MAGICAL_ITEM",
                description: "Brass Whistle",
                weight: "MEDIUM",
                imageUrl: "images/flight/items/brass_whistle.png"
            },
            {
                code: "BOTTLE_OF_KOURSHAH",
                name: "Bottle of Kourshah",
                itemType: "POTION",
                description: "There is enough Kourshah in the bottle to restore a further 4 ENDURANCE points.",
                weight: "MEDIUM",
                imageUrl: "images/flight/items/bottle_of_kourshah.png"
            },
            {
                code : "SOMMERSWERD",
                name : "Sommerswerd",
                itemType: "WEAPON",
                description : "Sommerswerd",
                weight: "MEDIUM",
                imageUrl : "images/flight/items/sommerswerd.png"
            },
            {
                code : "CRYSTAL_STAR_PENDANT",
                name : "Crystal star pendant",
                itemType: "GEM",
                description : "Crystal star pendant",
                weight: "SMALL",
                imageUrl : "images/flight/items/crystal_star_pendant.png"
            },
            {
                code : "ONYX_MEDALLION",
                name : "Onyx Medallion",
                itemType: "MAGICAL_ITEM",
                description : "This Special Item, torn from the armour of a renegade Vassagonian captain during the battle of Ruanon, enables you to communicate with the Itikar",
                weight: "SMALL",
                imageUrl : "images/flight/items/onyx_medallion.png"
            },
            {
                code : "BLACK_CRYSTAL_CUBE",
                name : "Black crystal cube",
                itemType: "MAGICAL_ITEM",
                description : "Black crystal cube",
                weight: "SMALL",
                imageUrl : "images/flight/items/black_crystal_cube.png"
            },
        ],
        content:
            "Before leaving Holmgard on your voyage to the Vassagonian capital of Barrakeesh, you are given a map of the desert empire and a pouch of gold.",
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Rulesection: Regions
         * -- --------------------------------------------------------
         */
        sectionType: "RULE_SECTION",
        ruleType: "REGIONS",
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        content:
            "The Empire of Vassagonia is a vast desert realm. The northern coast runs roughly east for several hundred miles before it turns in a lazy, rugged arc to the south. Roughly at the apex of this arc is the city of Barrakeesh, the capital city of Vassagonia. The six other cities of this vast arid country are mainly to be found in the thin coastal strip, such as Ferufezan in the northwest, and Bisutan in the south. Barrakeesh is cut off from most of the rest of Vassagonia by the semicircle of the Kabar Range. These mountains meet the sea on the eastern coast at Cape Kabar, which overlooks a trio of islands. For all its magnificent coastline, Vassagonia lacks fresh water, with only six major oases in the entire realm, half of which line the trail to the south of the Dahir Mountains between Ikaresh and Bir Rabalou.",
        regionTree: {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png",
            regions: [
                {
                    name: "Barrakeesh",
                    regionType: "CITY",
                    description:
                        "Barrakeesh is the capital city of Vassagonia. It has a habour, a lake and on the outskirts of the magnificent city are some smaller towns such as Chiras and Chula. The citizens of Barrakeesh, unlike the inhabitants of other Vassagonian cities, enjoy an abundant supply of fresh water from the Da River.",
                    imageUrl: "images/shadow/regions/barrakeesh.png",
                    regions: [
                        {
                            name: "Habour of Barrakeesh",
                            regionType: "HARBOUR",
                            description:
                                "The harbour of Barrakeesh is deserted save for a handful of citizens clad in black, and the only sound that greets you is the toll of a funeral bell, echoing through the harbour on this day of mourning.",
                            imageUrl: "images/shadow/regions/barrakeesh_harbour.png",
                        },
                        {
                            name: "Chiras",
                            regionType: "TOWN",
                            description:
                                "A small village northwest of the capital. The splendour of the Grand Palace dominates this city.",
                            imageUrl: "images/shadow/regions/chiras.png",
                        },
                        {
                            name: "Lake Inrahim",
                            regionType: "LAKE",
                            description:
                                "The lake is an immense salt-water plain that is completely dry and cracked.",
                            imageUrl: "images/shadow/regions/lake_inrahim.png",
                        },
                        {
                            name: "Grand Palace",
                            regionType: "STONE_BUILDING",
                            description: "The biggest building in Barrakeesh. ",
                            imageUrl: "images/shadow/regions/chula.png",
                        },
                        {
                            name: "Chula",
                            regionType: "TOWN",
                            description:
                                "This village is connected to the capital with a small road stretched across the causeway.",
                            imageUrl: "images/shadow/regions/chula.png",
                        },
                        {
                            name: "River Da",
                            regionType: "RIVER",
                            description:
                                "A great aqueduct over forty miles long, which channels freshwater from the River Da into the city.",
                            imageUrl: "images/shadow/regions/river_da.png",
                        },
                        {
                            name: "Baga-darooz",
                            regionType: "SEWER",
                            description: "The sewer of Barrakeesh, a dirty and disgusting place, full with rats and insects. The water is thick with scum, and the glutinous mire is clotted with green and black filth.",
                            imageUrl: "images/shadow/regions/baga-darooz.png"
                        },
                    ],
                },
                {
                    name: "Dahir Mountains",
                    regionType: "MOUNTAIN",
                    description:
                        "The Dahir Mountains are a barren, sun-scorched mountain range lying in the south of Barrakeesh.",
                    imageUrl: "images/shadow/regions/dahir_mountains.png",
                    regions: [
                        {
                            name: "Ikaresh",
                            regionType: "TOWN",
                            description:
                                "This is a village lying between the mountains of Dahir. The villagers - named Ikareshi - have their own dialect, so called Ikareshi dialect",
                            imageUrl: "images/shadow/regions/ikaresh.png",
                        },
                        {
                            name: "The Koos",
                            regionType: "MOUNTAIN",
                            description:
                                "Highest mountains in the middle of Dahir Mountains. The voyage through the Koos is breathtaking. The Skyrider glides between the towers of rock that rise from the valley floor with fantastic and unearthly grandeur. Perched upon two of these huge rocky columns are Kraan, their Drakkarim riders scouring the valley with telescopes.",
                            imageUrl: "images/shadow/regions/the_koos.png",
                        },
                        {
                            name: "Dahir Pass",
                            regionType: "ROAD",
                            description: "A long road on the south border of the Dahir Mountains.",
                            imageUrl: "images/shadow/regions/dahir_pass.png",
                        },
                        {
                            name: "Kabar Range",
                            regionType: "MOUNTAIN",
                            description:
                                "The Kabar Range is a isolated mountain range in the south of Dahir Mountains.",
                            imageUrl: "images/shadow/regions/kabar_range.png",
                        },
                        {
                            name: "Benoi Hills",
                            regionType: "MOUNTAIN",
                            description:
                                "The Benoi Hills are part of the Dahir Mountains. However, the are very low hills and located at the east of Dahir, nearby the coast.",
                            imageUrl: "images/shadow/regions/benoi_hills.png",
                        },
                        {
                            name: "Cape Kabar",
                            regionType: "TOWN",
                            description:
                                "This is the easternmost northern town in Vassagonia. The town overlooks a tria of islands.",
                            imageUrl: "images/shadow/regions/cape_kabar.png",
                        },
                    ],
                },
                {
                    name: "The Dry Main",
                    regionType: "KINGDOM",
                    description:
                        "An endless desert - the shifting ocean of sand - is protected by Kimah, Emir of Ferufezan. ",
                    imageUrl: "images/shadow/regions/the_dry_main.png",
                    regions: [
                        {
                            name: "Kara Kala",
                            regionType: "CITY",
                            description: "Kara Kala is a northen city in the dry main.",
                            imageUrl: "images/shadow/regions/kara_kala.png",
                            regions: [
                                {
                                    name: "Lyam",
                                    regionType: "ISLAND",
                                    description:
                                        "Lyam is a little island far away from the coast of kara kala. Nevertheless, the whole island belongs to the area of Kara Kala.",
                                    imageUrl: "images/shadow/regions/lyam.png",
                                },
                                {
                                    name: "Tefa",
                                    regionType: "TOWN",
                                    description:
                                        "Tefa is a little village near the Dahir Mountains which has a constructed highway to Kara Kala which allows safe passage through the town and to Kara Kala.",
                                    imageUrl: "images/shadow/regions/tefa.png",
                                },
                            ],
                        },
                        {
                            name: "Teph",
                            regionType: "CITY",
                            description:
                                "Although Teph is a hugh city on the western border of Vassagonia, it is very dry because it lies in the middle of the Dry Main. Trading with this city is very rare because it's far from other cities and villages.",
                            imageUrl: "images/shadow/regions/teph.png",
                        },
                        {
                            name: "Mount Dhanamet",
                            regionType: "MOUNTAIN",
                            description:
                                "The Mount Dhanamet is a lonely mountain in the middle of nothing - the Dry Main. Fortunately, in the near western of Mount Dhanamet lies a oasis.",
                            imageUrl: "images/shadow/regions/mount_dhanamet.png",
                        },
                        {
                            name: "Chah Mountains",
                            regionType: "MOUNTAIN",
                            description:
                                "The second biggest mountain range in the empire of Vassagonia are the Chah Mountains in the southwest. The only oasis nearby is the one in the south of Chah Mountains.",
                            imageUrl: "images/shadow/regions/chah_mountains.png",
                            regions: [
                                {
                                    name: "Chahdan",
                                    regionType: "TOWN",
                                    description: "Chahdan is the biggest town near Chah Mountains.",
                                    imageUrl: "images/shadow/regions/chahdan.png",
                                },
                                {
                                    name: "Chahdan Pass",
                                    regionType: "ROAD",
                                    description:
                                        "The western road through Chah Mountains is called Chahdan pass.",
                                    imageUrl: "images/shadow/regions/chahdan_pass.png",
                                },
                                {
                                    name: "Omonai Pass",
                                    regionType: "ROAD",
                                    description:
                                        "The eastern road through Chah Mountains is called Omonai Pass.",
                                    imageUrl: "images/shadow/regions/omonai_pass.png",
                                },
                            ],
                        },
                        {
                            name: "Ferufezan",
                            regionType: "CITY",
                            description:
                                "This city lies in the only area of Vassagonia which is not as dry as all the others. Ferufezan is led by a emir called Kimah.",
                            imageUrl: "images/shadow/regions/ferufezan.png",
                            regions: [
                                {
                                    name: "Kuchek",
                                    regionType: "TOWN",
                                    description:
                                        "This town is near the northwest border of Vassagonia and belongs to the city Ferufezan.",
                                    imageUrl: "images/shadow/regions/kuchek.png",
                                },
                                {
                                    name: "Lohn",
                                    regionType: "TOWN",
                                    description:
                                        "Nearby Ferufezan lies Lohn, a small town on the northern coast.",
                                    imageUrl: "images/shadow/regions/lohn.png",
                                },
                                {
                                    name: "Samiz",
                                    regionType: "TOWN",
                                    description:
                                        "Although the small town Samiz on an island northern the coast belongs to Ferufezan, it has been occupied by the Lakuri pirates who travell around in the wild sea.",
                                    imageUrl: "images/shadow/regions/samiz.png",
                                },
                            ],
                        },
                        {
                            name: "Bir Rabalou",
                            regionType: "CITY",
                            description:
                                "On the eastern coast of Vassagonia lies a hugh city called Bir Rabalou. However, there are no nearby towns belonging to this city.",
                            imageUrl: "images/shadow/regions/bir_rabalou.png",
                        },
                        {
                            name: "Koneshi Mountains",
                            regionType: "MOUNTAIN",
                            description:
                                "The Koneshi Mountains stretch from the southeast to the middle of the Dry Main in Vassagonia. At the western end of this high mountains lies one of the six oasis.",
                            imageUrl: "images/shadow/regions/koneshi_mountains.png",
                        },
                        {
                            name: "Vale of Tears",
                            regionType: "ROAD",
                            description:
                                "The Valley of Tears is the longest pass in Vassagonia and goes from the southwest of the country to the northeast. Along this path are three oases.",
                            imageUrl: "images/shadow/regions/vale_of_tears.png",
                        },
                    ],
                },
                {
                    name: "Bisutan",
                    regionType: "CITY",
                    description:
                        "Bisutan is the southeasternmost city of Vassagonia and lies on an island connected to the Dry Main with two bridges.",
                    imageUrl: "images/shadow/regions/bisutan.png",
                    regions: [
                        {
                            name: "Khordaim Islands",
                            regionType: "ISLAND",
                            description:
                                "The island group Khordaim Islands are beyond the eastern coast. In sum there are twelve islands.",
                            imageUrl: "images/shadow/regions/khordaim_islands.png",
                        },
                        {
                            name: "Khakea",
                            regionType: "RIVER",
                            description:
                                "The flow of the Khakea River goes from the eastern coast to the south border of the gigantic empire and it surrounds Bisutan.",
                            imageUrl: "images/shadow/regions/khakea.png",
                        },
                        {
                            name: "Khor",
                            regionType: "TOWN",
                            description:
                                "A small town eastern of the Koneshi Mountains is named Khor.",
                            imageUrl: "images/shadow/regions/khor.png",
                        },
                    ],
                },
            ],
        },
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 1
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 1,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "As you dash through the thickening trees, the shouts of the Giaks begin to fade behind you. You have nearly outdistanced them completely, when you crash headlong into a tangle of low branches.",
        outcomes: [
            {
                outcomeType: "ABILITY",
                targetNr: 141,
                ability: {
                    abilityType: "SIXTH_SENSE",
                    description:
                        "This skill may warn a Kai Lord of imminent danger. It may also reveal the true purpose of a stranger or strange object encountered in your adventure.",
                },
                content: "If you wish to use your Kai Discipline of Sixth Sense, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 88,
                content: "If you wish to take the right path into the wood, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 275,
                content: "If you wish to follow the left track, turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 2
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 2,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "As you dash through the thickening trees, the shouts of the Giaks begin to fade behind you. You have nearly outdistanced them completely, when you crash headlong into a tangle of low branches.",
        outcomes: [
            {
                outcomeType: "RANDOM",
                targetNr: 343,
                intervall: {
                    min: 0,
                    max: 4,
                },
                content: "If you have picked a number 0–4, turn to ",
            },
            {
                outcomeType: "RANDOM",
                targetNr: 276,
                intervall: {
                    min: 5,
                    max: 9,
                },
                content: "If you have picked a number 5-9, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 3
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 3,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Kings Citadel",
            regionType: "CITADEL",
            description:
                "The Kings Citadel is the highest law enforcement and paramilitary organization in Holmgard.",
            imageUrl: "images/shadow/regions/holmguardcitadel.png",
        },
        content:
            "Staying close to the officer, you follow him through an arched portal and up a short flight of stairs to a long hall. Soldiers run back and forth bearing orders on ornate scrolls to officers stationed around the city wall. A haggard and scar-faced man dressed in the white and purple robes of the King’s court approaches you and bids you follow him to the citadel.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 196,
                content: "If you wish to follow this man, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 144,
                content:
                    "If you wish to decline his offer and return to the crowded streets, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 4
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 4,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "River Valley",
            regionType: "RIVER_VALLEY",
            description: "River Valley",
            imageUrl: "images/shadow/regions/sommerlundrivervalley.png",
        },
        content:
            "It is a small one-man canoe in very poor condition. The wood has split and warped, and the craft appears to be leaking in several places. You quickly patch up the worst of the holes with some clay and bail out the water. This seems to stop the leaking for the moment. Stowing your equipment at the bow, you set off downstream, using a piece of driftwood as a paddle. After a short while, you hear the sound of horses galloping towards you along the left bank.",
        outcomes: [
            {
                outcomeType: "ABILITY",
                targetNr: 218,
                ability: {
                    abilityType: "SIXTH_SENSE",
                    description:
                        "This skill may warn a Kai Lord of imminent danger. It may also reveal the true purpose of a stranger or strange object encountered in your adventure.",
                },
                content: "If you wish to use the Kai Discipline of Sixth Sense, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 75,
                content: "If you wish to hide in the bottom of the canoe, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 175,
                content: "If you wish to try to attract their attention, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 5
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 5,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "After about an hour of walking, the track slowly bears round to the east. You reach a shallow ford where a fast-flowing brook runs on a steep rocky course towards the south. Just beyond the ford is a junction where the track meets a wider path running north to south. Realizing that the north path will take you away from the capital, you turn right at the junction and head south.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 11,
                content: "Turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 6
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 6,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Main Road",
            regionType: "ROAD",
            description:
                "The Main Road is the main passage between the port of Toran in the north and the capital in the south.",
            imageUrl: "images/shadow/regions/sommerlundmainroad.png",
        },
        content:
            "In the distance you can hear the sound of horses galloping nearer. You crouch behind a tree and wait as the riders come closer. They are the cavalry of the King’s Guard wearing the white uniforms of His Majesty’s army.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 183,
                content: "If you wish to call them, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 200,
                content:
                    "If you wish to let them pass and then continue on your way through the forest, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 7
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 7,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Holmgard",
            regionType: "CITY",
            description:
                "Holmgard is the capital of Sommerlund and is a seaport on the Holmgulf. It is located near the Graveyard of the Ancients. The city is enclosed by grey-white walls two hundred feet in height whose gatehouses are 100 yards long. At the center of the city is the Citadel of the King.",
            imageUrl: "images/shadow/regions/holmguard.png",
        },
        content:
            "For what seems an eternity, the rush of the crowd carries you along like a leaf on a fast-flowing stream. You desperately fight to stay on your feet, but you feel weak and dizzy from your ordeal, and your legs are as heavy as lead. Suddenly, you catch a glimpse of a long, narrow stone stairway that leads up to the roof of an inn. Gathering the last reserves of your strength, you dive for the stairs and climb slowly up to the top. From here you can see the magnificent view of the rooftops and spires of Holmgard, with the high stone walls of the citadel gleaming in the sun. The houses and buildings of the capital are built very close to each other, and it is possible to jump from one roof to the next. In fact many of the citizens of Holmgard used to use the Roofways (as they are known) when the heavy autumn rains made the unpaved parts of the streets too muddy for walking. But after many accidents, a royal decree forbade their use. After careful thought, you decide to use the Roofways, as they are your only chance of reaching the King. You have hopped, skipped, and jumped across several streets and you are only one street away from the citadel when you come to the end of a row of rooftops. The jump to the next row is much further than anything you have tried before, and your stomach begins to feel as if it were full of butterflies. Determined to reach the citadel, you turn and take a long run-up to the jump. With blood pounding in your ears, you sprint to the edge of the roof and leap into space, your eyes fixed on the opposite rooftop. Pick a number from the Random Number Table.",
        outcomes: [
            {
                outcomeType: "RANDOM",
                targetNr: 108,
                intervall: {
                    min: 0,
                    max: 2,
                },
                content: "If you have picked a number that is 0–2, turn to ",
            },
            {
                outcomeType: "RANDOM",
                targetNr: 25,
                intervall: {
                    min: 3,
                    max: 9,
                },
                content: "If the number is 3–9, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 8
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 8,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "River Bridge",
            regionType: "BRIDGE",
            description: "Wooden bridge in the Summerlund Woodlands.",
            imageUrl: "images/shadow/regions/woodenbridge.png",
        },
        content:
            "Your Kai Sixth Sense warns there is a fierce battle raging in the south. Your common sense tells you that the south is also the quickest route to the capital.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 70,
                content: "Turn to 70 and choose your route. ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 9
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 9,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Graveyard of the Ancients",
            regionType: "GRAVEYARD",
            description:
                "The Graveyard of the Ancients is an ancient, mist-shrouded graveyard just North of Holmgard. This place is taboo because of the nameless horrors that inhabit it. No one knows who lies in eternal unrest here but the Evil that lives there is more ancient than the Darklords.",
            imageUrl: "images/shadow/regions/graveyardofancients.png",
        },
        content:
            "You cannot move: you are being held rigid by some powerful force. Your eyes are drawn towards the mouth of the skeleton. From deep in the earth you hear a low humming, like the sound of millions of angry bees. A dull red glow appears in the empty eye sockets of the dead King and the humming increases until your ears are filled with the deafening roar. You are in the presence of an ancient evil, far older and stronger than the Darklords themselves.",
        outcomes: [
            {
                outcomeType: "ITEM",
                targetNr: 236,
                item: {
                    code: "VORDAK_GEM",
                    name: "Vordak Gem",
                    description: "Vordak Gem",
                    imageUrl: "images/shadow/items/vordakgem.png",
                },
                content: "If you possess a Vordak Gem, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 292,
                content: "If you do not, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 10
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 10,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "You are sweating and your legs ache. In the middle distance you can see a group of cottages.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 115,
                content: "If you wish to enter a cottage and rest for a while, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 83,
                content: "If you wish to press on, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 11
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 11,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Kings Citadel",
            regionType: "CITADEL",
            description:
                "The Kings Citadel is the highest law enforcement and paramilitary organization in Holmgard.",
            imageUrl: "images/shadow/regions/holmguardcitadel.png",
        },
        content:
            "You quickly dodge into the doorway of a stable and hide your surgeon’s cloak in the straw, for it would be better to be seen as a Kai Lord than as a charlatan. Without wasting a second, you set off towards the Great Hall on the other side of the courtyard.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 139,
                content: "Turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 12
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 12,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Main Road",
            regionType: "ROAD",
            description:
                "The Main Road is the main passage between the port of Toran in the north and the capital in the south.",
            imageUrl: "images/shadow/regions/sommerlundmainroad.png",
        },
        content:
            "The bodyguard looks at you with great suspicion and then slams the door shut. You can hear the sound of voices inside the caravan. Suddenly the door swings open and the face of a wealthy merchant appears. He demands 10 Gold Crowns as payment for the ride.",
        outcomes: [
            {
                outcomeType: "GOLD",
                targetNr: 262,
                amount: -10,
                content: "If you have 10 Gold Crowns and wish to pay him, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 247,
                content:
                    "If you do not have enough Gold Crowns or do not wish to pay him, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 13
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 13,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "The path soon ends at a large clearing. In the centre of the clearing is a tree much taller and wider than any other you have seen in the forest. Looking up through the massive branches you can see a large treehouse some twenty-five to thirty feet above the ground. There is no ladder, but the gnarled bark of the tree offers many footholds.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 307,
                content: "If you wish to climb the tree and search the treehouse, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 213,
                content: "If you would rather press on, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 14
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 14,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Stoneclearing",
            regionType: "PLACES_OF_WORSHIP",
            description:
                "Your reach the top of a small wooded hill on which several large boulders form a rough circle.",
            imageUrl: "images/shadow/regions/stoneclearing.png",
        },
        content:
            "You reach the top of a small wooded hill on which several large boulders form a rough circle. Suddenly you hear a loud growl from behind a rock to your left.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 43,
                content: "If you wish to draw your weapon and prepare to fight, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 106,
                content:
                    "If you would rather take evasive action by running as fast as you can over the hill, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 15
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 15,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Clearing",
            regionType: "CLEARING",
            description:
                "You pass through a long, dark tunnel of voerhanging branches that eventually opens out into a large clearing.",
            imageUrl: "images/shadow/regions/clearing.png",
        },
        content:
            "You pass through a long, dark tunnel of overhanging branche that eventually opens out into a large clearing. On a stone plinth in the centre of the clearing is a Sword, sheathed in a black leather scabbard. A handwritten note has been tied to the hilt, but it is in a language which is foreign to you. You may take the Sword if you wish, and note it on your Action Chart. There are three exits from the clearing.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 207,
                content: "If you decide to go east, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 201,
                content: "If you decide to go west, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 35,
                content: "If you decide to go south, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 16
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 16,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Main Road",
            regionType: "ROAD",
            description:
                "The Main Road is the main passage between the port of Toran in the north and the capital in the south.",
            imageUrl: "images/shadow/regions/sommerlundmainroad.png",
        },
        content:
            "You manage to free a horse from the straps securing it to the caravan. It is frightened by the scent of the approaching Doomwolves, and the cries of their evil riders—the Giaks. Preparing your weapon, you spur your skittish horse towards the oncoming beasts. They are less than fifty yards away and they are lowering their lances at you as they get nearer and nearer.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 192,
                content: "You are charging head-on towards each other. Turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 17
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 17,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "You raise your weapon to strike at the beast as its razor-fanged mouth snaps shut just inches from your head. Buffeted by the beating of its wings you find it difficult to stand. Deduct 1 point from your COMBAT SKILL and fight the Kraan. If you kill the creature, you quickly descend the far side of the hill to avoid the Giaks. Pick a number from the Random Number Table.",
        events: [
            {
                eventType: "COMBAT",
                ranking: 1,
                creature: {
                    name: "Kraan",
                    combatSkill: 16,
                    endurance: 24,
                    imageUrl: "images/shadow/creatures/.png",
                },
            },
        ],
        outcomes: [
            {
                outcomeType: "RANDOM",
                targetNr: 53,
                intervall: {
                    min: 0,
                    max: 0,
                },
                content: "If you pick 0, turn to ",
            },
            {
                outcomeType: "RANDOM",
                targetNr: 274,
                intervall: {
                    min: 1,
                    max: 2,
                },
                content: "If you pick 1–2, turn to ",
            },
            {
                outcomeType: "RANDOM",
                targetNr: 316,
                intervall: {
                    min: 3,
                    max: 9,
                },
                content: "If you pick 3–9, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 18
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 18,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Silvermoon Lake",
            regionType: "LAKE",
            description: "The Silvermoon Lake is a ...",
            imageUrl: "images/shadow/regions/silvermoonlake.png",
        },
        content:
            "You are awoken by the sound of troops in the distance. Across the lake you see the black-cloaked figures of Drakkarim and a pack of Doomwolves and their riders. A Kraan appears from above the trees and lands on the roof of the small wooden shack. It is ridden by a creature dressed in red. The Kraan takes off and begins to fly across the lake to where you are hidden.",
        outcomes: [
            {
                outcomeType: "ABILITY",
                targetNr: 114,
                ability: {
                    abilityType: "CAMOUFLAGE",
                    description:
                        "This Discipline enables a Kai Lord to blend in with his surroundings. In the countryside, he can hide undetected among trees and rocks and pass close to an enemy without being seen. In a town or city, it enables him to look and sound like a native of that area, and can help him to find shelter or a safe hiding place.",
                },
                content: "If you wish to use the Kai Discipline of Camouflage, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 239,
                content: "If you wish to ride deeper in the forest, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 29,
                content: "If you wish to fight the creature, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 19
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 19,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "Just ahead through the tall trees you can see clumps of dark-red gallowbrush, a thorny briar with sharp crimson barbs. The common name for this forest weed is Sleeptooth, for the thorns are very sharp and can make you feel weak and sleepy if they scratch your skin.",
        outcomes: [
            {
                outcomeType: "ABILITY",
                targetNr: 69,
                ability: {
                    abilityType: "TRACKING",
                    description:
                        "This skill enables a Kai Lord to make the correct choice of a path in the wild, to discover the location of a person or object in a town or city and to read the secrets of footprints or tracks.",
                },
                content: "If you have the Kai Discipline of Tracking, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 272,
                content: "You can avoid the Sleeptooth by returning to the track. Turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 119,
                content:
                    "Or you can push on through the briars, deeper into the forest, by turning to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 20
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 20,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Village",
            regionType: "VILLAGE",
            description: "A small Village in the middle of the Summerlund Woodland.",
            imageUrl: "images/shadow/regions/sommerlundvillage.png",
        },
        content:
            "It seems that whoever lived here left in a great hurry—and they must have left quite recently. A half-eaten meal still remains on the table, and a mug of dark jala is still warm to the touch. Searching a chest and small wardrobe, you find a Backpack, food (enough for two Meals), and a Dagger. If you wish to take these items, remember to mark them on your Action Chart. You continue your mission.",
        events: [
            {
                eventType: "ACQUIRE_ITEM_EVENT",
                ranking: 1,
                item: {
                    name: "Dagger",
                    itemType: "WEAPON",
                    description: "A dagger is a small convinient weapon",
                    weight: "SMALL",
                    imageUrl: "images/shadow/items/dagger.png",
                },
            },
            {
                eventType: "ACQUIRE_ITEM_EVENT",
                ranking: 2,
                item: {
                    name: "Backpack",
                    itemType: "BACK_PACK",
                    description: "A backpack",
                    weight: "SMALL",
                    imageUrl: "images/shadow/items/backpack.png",
                },
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 273,
                content: "Turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 21
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 21,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "You have ridden about two miles into the tangle of trees when the ground becomes very marshy. Pick a number from the Random Number Table.",
        outcomes: [
            {
                outcomeType: "RANDOM",
                targetNr: 189,
                intervall: {
                    min: 0,
                    max: 6,
                },
                content:
                    "If the number is 6 or below, you manage to steer clear of the morass and may now turn to ",
            },
            {
                outcomeType: "RANDOM",
                targetNr: 312,
                intervall: {
                    min: 7,
                    max: 8,
                },
                content:
                    "If the number is 7 or 8 you are stuck. The mud engulfs you up to your armpits. Your horse gives one last despairing scream as its muzzle disappears into the bubbling mud. ",
            },
            {
                outcomeType: "MISSION_FAILED",
                targetNr: -1,
                content:
                    "the foul-smelling bog sucks you under and claims another victim. Your life and your mission end here.",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 22
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 22,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Main Road",
            regionType: "ROAD",
            description:
                "The Main Road is the main passage between the port of Toran in the north and the capital in the south.",
            imageUrl: "images/shadow/regions/sommerlundmainroad.png",
        },
        content:
            "Knocking aside the leader, you sprint off along the highway. Then behind you the ominous click of a crossbow being cocked sends a shiver down your spine. Pick a number from the Random Number Table.",
        outcomes: [
            {
                outcomeType: "RANDOM",
                targetNr: 181,
                intervall: {
                    min: 0,
                    max: 4,
                },
                content: "If you have picked a number 0–4, turn to ",
            },
            {
                outcomeType: "RANDOM",
                targetNr: 145,
                intervall: {
                    min: 5,
                    max: 9,
                },
                content: "If you have picked a number 5–9, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 23
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 23,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Graveyard of the Ancients",
            regionType: "GRAVEYARD",
            description:
                "The Graveyard of the Ancients is an ancient, mist-shrouded graveyard just North of Holmgard. This place is taboo because of the nameless horrors that inhabit it. No one knows who lies in eternal unrest here but the Evil that lives there is more ancient than the Darklords.",
            imageUrl: "images/shadow/regions/graveyardofancients.png",
        },
        content:
            "The corridor soon widens into a large hall. At the far end, a stone staircase leads up to a huge door. Two black candles on either side of the stone steps dimly illuminate the chamber. You notice that no wax has melted, and as you get nearer you can feel that they give off no heat. Ancient engravings cover the stone surfaces of the walls. Anxious to leave this evil tomb, you examine the door for a latch. An ornate pin appears to lock the door, but there is also a keyhole in the lockplate.",
        outcomes: [
            {
                outcomeType: "ITEM",
                targetNr: 326,
                item: {
                    code: "GOLDEN_KEY",
                    name: "Golden Key",
                    description: "The Golden Key emmits a shimmer ..",
                    imageUrl: "images/shadow/items/goldenkey.png",
                },
                content: "If you have a Golden Key and wish to use it, turn to ",
            },
            {
                outcomeType: "ABILITY",
                targetNr: 151,
                ability: {
                    abilityType: "MIND_OVER_MATTER",
                    description:
                        "Mastery of this Discipline enables a Kai Lord to move small objects with his powers of concentration.",
                },
                content: "If you have the Kai Discipline of Mind Over Matter, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 337,
                content: "If you wish to remove the pin, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 24
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 24,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Main Road",
            regionType: "ROAD",
            description:
                "The Main Road is the main passage between the port of Toran in the north and the capital in the south.",
            imageUrl: "images/shadow/regions/sommerlundmainroad.png",
        },
        content:
            "The merchant shouts to the driver of the caravan to jump. ‘We’re under attack!’ he cries, disappearing through a circular window.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 234,
                content: "If you decide to jump after him, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 184,
                content:
                    "If you decide to run through the caravan and grab the reins of the horse team, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 25
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 25,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Homgard Robbers Lane",
            regionType: "CITY",
            description: "The Homgard Robbers Lane is...",
            imageUrl: "images/shadow/regions/holmguardupperlane.png",
        },
        content:
            "You land with such a crash on the opposite roof, that the wind is knocked out of you and you lie flat on your back with your head in a spin. It takes a minute or so for you to realize that you’ve made it and are perfectly safe. When you are sure you are all right, you jump up and let out a shout for joy at your skill and daring. Quickly you find a way across the roof and climb down a long drainpipe to the street below. You see the large iron doors of the citadel open, and a wagon drawn by two large horses tries to leave. The horses are frightened by the noisy crowd and they both rear up, causing the wagon to smash a front wheel against the door. In the confusion, you see a chance to enter and quickly slip inside just as the guards slam the doors shut.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 139,
                content: "Turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 26
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 26,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Graveyard of the Ancients",
            regionType: "GRAVEYARD",
            description:
                "The Graveyard of the Ancients is an ancient, mist-shrouded graveyard just North of Holmgard. This place is taboo because of the nameless horrors that inhabit it. No one knows who lies in eternal unrest here but the Evil that lives there is more ancient than the Darklords.",
            imageUrl: "images/shadow/regions/graveyardofancients.png",
        },
        content:
            "Cautiously, you move along the corridor until you come to a sharp eastward turn. A strange greenish light can be seen in the distance.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 249,
                content: "If you wish to continue, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 100,
                content: "If you wish to go back and try the southern route, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 27
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 27,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "You walk along this path for over an hour, carefully watching the sky above you in case the Kraan attack again. Up ahead, a large tree has fallen across the path. As you approach you can hear voices coming from the other side of the massive trunk.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 250,
                content: "If you choose to attack, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 52,
                content: "If you choose to listen to what the voices say, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 28
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 28,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content: "After a few hundred yards, the path joins another one running north to south.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 130,
                content: "If you wish to go northwards, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 147,
                content: "If you wish to head south, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 29
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 29,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Silvermoon Lake",
            regionType: "LAKE",
            description: "The Silvermoon Lake is a ...",
            imageUrl: "images/shadow/regions/silvermoonlake.png",
        },
        content:
            "You stride out to the water’s edge and prepare yourself for combat. The Kraan and its rider spot you and begin to speed across the lake barely inches above the surface. The rider lets out a scream that freezes your blood. He is a Vordak, a fierce lieutenant of the Darklords. He is upon you and you must fight him.",
        events: [
            {
                eventType: "COMBAT",
                ranking: 1,
                creature: {
                    name: "Vordak",
                    combatSkill: 18,
                    endurance: 25,
                    imageUrl: "images/shadow/creatures/vordak.png",
                },
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 270,
                content: "If you win the fight, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 30
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 30,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Main Road",
            regionType: "ROAD",
            description:
                "The Main Road is the main passage between the port of Toran in the north and the capital in the south.",
            imageUrl: "images/shadow/regions/sommerlundmainroad.png",
        },
        content:
            "The people look tired and hungry. They have come many miles from their burning city. Suddenly, you hear the beat of huge wings coming from the north. ‘Kraan, Kraan! Hide yourselves!’ the cry goes up all along the road. Just in front of you, a wagon carrying small children breaks down, its right wheel jammed in a furrow. The children scream in panic.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 194,
                content: "If you wish to help the children, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 261,
                content: "If you’d rather run for the cover of the trees, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 31
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 31,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Dragon Bridge",
            regionType: "BRIDGE",
            description: "The Dragon Bridge connects the northern and southern part of Summerlund.",
            imageUrl: "images/shadow/regions/dragonbridge.png",
        },
        content:
            "You try to comfort the injured man as best you can, but his wounds are serious and he is soon unconscious again. Covering him with his cape, you turn and press deeper into the forest.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 264,
                content: "Turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 32
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 32,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Main Road",
            regionType: "ROAD",
            description:
                "The Main Road is the main passage between the port of Toran in the north and the capital in the south.",
            imageUrl: "images/shadow/regions/sommerlundmainroad.png",
        },
        content:
            "You have ridden about three miles when, in the distance, you spot the unmistakable silhouette of five large Doomwolves. Riding on their backs are Giaks. They seem to be going on ahead to where the path leads down into an open meadow. Suddenly, one of the Giaks leaves the others and begins to ride back along the path towards you.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 176,
                content: "If you wish to hide in the undergrowth and let him pass, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 340,
                content: "If you wish to fight him, turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 33
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 33,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Clearing",
            regionType: "CLEARING",
            description:
                "You pass through a long, dark tunnel of voerhanging branches that eventually opens out into a large clearing.",
            imageUrl: "images/shadow/regions/clearing.png",
        },
        content:
            "The floor of the cave is quite dry and dusty. As you explore deeper in the half-light, you detect the stale odour of rotting flesh. Littering a crevice are the bones, fur, and teeth of several small animals. You notice a small cloth bag among these remains which you open to discover 3 Gold Crowns. Pocketing these coins, you leave what appears to be the lair of a mountain cat and carefully descend the hill.",
        events: [
            {
                eventType: "CHANGE_GOLD_AMOUNT_EVENT",
                ranking: 1,
                amount: 3,
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 248,
                content: "Turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 34
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 34,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "Without warning, a terrible apparition in red robes swoops down from the sky on the back of a Kraan. Its cry freezes your blood. The beast is a Vordak, a fierce lieutenant of the Darklords. He is above you and you must fight him.",
        events: [
            {
                eventType: "COMBAT",
                ranking: 1,
                creature: {
                    name: "Vordak",
                    combatSkill: 18,
                    endurance: 25,
                    imageUrl: "images/shadow/creatures/vordak.png",
                },
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 328,
                content: "If you win, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 35
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 35,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "The forest is becoming denser, and the path more tangled with thorny briars. Almost completely hidden by the undergrowth, you notice another path branching off towards the east. Your current route seems to be coming to a prickly end, so you decide to follow the new path eastwards.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 207,
                content: "Turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 36
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 36,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Old Watch Tower",
            regionType: "WOOD_BUILDING",
            description: "The old Watchtower is ...",
            imageUrl: "images/shadow/regions/ruinwatchtower.png",
        },
        content:
            "The old watchtower ladder is rotten and several rungs break as you climb. Pick a number from the Random Number Table.",
        outcomes: [
            {
                outcomeType: "RANDOM",
                targetNr: 140,
                intervall: {
                    min: 0,
                    max: 4,
                },
                content: "If the number is 4 or lower ",
            },
            {
                outcomeType: "RANDOM",
                targetNr: 323,
                intervall: {
                    min: 5,
                    max: 9,
                },
                content: "If the number is 5 or higher ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 37
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 37,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Kings Citadel",
            regionType: "CITADEL",
            description:
                "The Kings Citadel is the highest law enforcement and paramilitary organization in Holmgard.",
            imageUrl: "images/shadow/regions/holmguardcitadel.png",
        },
        content:
            "You are feeling tired and hungry and you must stop to eat. After your Meal, you retrace your steps back to the citadel and begin to walk around the high, indomitable stone wall. You discover another entrance on the eastern side, guarded as before by two armoured soldiers.",
        events: [
            {
                eventType: "CHANGE_RATION_AMOUNT_EVENT",
                ranking: 1,
                amount: -1,
            },
        ],
        outcomes: [
            {
                outcomeType: "ABILITY",
                targetNr: 282,
                ability: {
                    abilityType: "CAMOUFLAGE",
                    description:
                        "This Discipline enables a Kai Lord to blend in with his surroundings. In the countryside, he can hide undetected among trees and rocks and pass close to an enemy without being seen. In a town or city, it enables him to look and sound like a native of that area, and can help him to find shelter or a safe hiding place.",
                },
                content: "If you wish to use the Kai Discipline of Camouflage, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 289,
                content: "If you wish to approach them and tell your story, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 38
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 38,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "For half an hour or more you press on through the forest, through the rich vegetation and ferns. You happen upon a small clear stream where you stop for a few minutes to wash your face and drink of the cold, fresh water. Feeling revitalized, you cross the stream and press on. You soon notice the smell of wood smoke which seems to be drifting towards you from the north.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 128,
                content: "If you wish to investigate the smell of wood smoke, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 347,
                content: "If you would rather avoid the source of this smoke, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 39
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 39,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "After a few seconds, two small furry faces nervously appear over the top of the trunk. They say they are Kakarmi and tell you that the Kraan are everywhere. To the west lie the remains of their village but little is left of it now. They are trying to find the rest of their tribe who took to the forest when the ‘Black-wings’ attacked. They point behind them—east along the path—and tell you that the trail appears to be a dead end, but that if you continue through the undergrowth for a few yards more, you will find a watchtower where the path splits into three directions. Take the east path. This leads to the King’s highway between the capital city Holmgard and the northern port of Toran. You thank the Kakarmi, and bid them farewell.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 228,
                content: "Turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 40
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 40,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "Keeping a careful watch on the huts for any sign of the enemy, you make your way around the clearing under the cover of the trees and bracken. Rejoining the track, you hurry away from Fogwood.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 105,
                content: "Turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 41
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 41,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Silvermoon Lake",
            regionType: "LAKE",
            description: "The Silvermoon Lake is a ...",
            imageUrl: "images/shadow/regions/silvermoonlake.png",
        },
        content:
            "Three rangers gallop past the river bank, closely followed by the Giaks on their snarling Doomwolves. The bank is steep and you are spotted by the Giak leader who orders five of his troops to open fire at you with their bows. Their black arrows rain down on you.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 174,
                content: "If you decide to paddle downstream as fast as you can, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 116,
                content:
                    "If you decide to head for the cover of the trees on the opposite bank, turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 42
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 42,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Main Road",
            regionType: "ROAD",
            description:
                "The Main Road is the main passage between the port of Toran in the north and the capital in the south.",
            imageUrl: "images/shadow/regions/sommerlundmainroad.png",
        },
        content: "You follow the track for nearly an hour when you come to a crossroads.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 86,
                content: "If you wish to continue east, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 238,
                content: "If you would rather head north, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 157,
                content: "If you decide to venture south, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 147,
                content: "Or if you prefer to go west, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 43
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 43,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "From behind the rock a huge black bear comes into view. It advances slowly towards you, its mouth open and its face lined in anger and pain. You notice that it is badly wounded and is bleeding from its neck and back. You must fight it.",
        events: [
            {
                eventType: "COMBAT",
                ranking: 1,
                creature: {
                    name: "Black Bear",
                    combatSkill: 16,
                    endurance: 10,
                    imageUrl: "images/shadow/creatures/.png",
                },
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 195,
                content: "If you win, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 44
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 44,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "Without warning, the old track ends abruptly at the edge of a steep slope. The ground here is very loose and unstable. You lose your footing and fall headlong over the edge. Pick a number from the Random Number Table.",
        outcomes: [
            {
                outcomeType: "RANDOM",
                targetNr: 277,
                intervall: {
                    min: 0,
                    max: 4,
                },
                content: "If you have picked a number that is 0–4, turn to ",
            },
            {
                outcomeType: "RANDOM",
                targetNr: 338,
                intervall: {
                    min: 5,
                    max: 9,
                },
                content: "If the number is 5–9, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 45
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 45,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Boat Crossing",
            regionType: "CITY_OUTSKIRTS",
            description: "The outer fildworks of the city can now be seen.",
            imageUrl: "images/shadow/regions/holmguardoutskirts.png",
        },
        content:
            "These men are not what they seem. The tunic of the leader is genuine but it is heavily bloodstained around the collar, as if its true owner had been murdered. Their weapons are not army issue, but expensive and lavishly decorated like the weapons made by the armourers of Durenor. The leader has a crossbow slung over his pack. An attempt to run would be suicide. You decide that you must fight them or you will surely be murdered as soon as you drop your weapon.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 178,
                content: "Turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 46
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 46,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Silvermoon Lake",
            regionType: "LAKE",
            description: "The Silvermoon Lake is a ...",
            imageUrl: "images/shadow/regions/silvermoonlake.png",
        },
        content:
            "You have covered about two miles when the trees ahead thin out. You can see a small wooden shack on the edge of a lake. A cloaked man approaches you and offers to row you and your horse across the lake for a fee of 2 Gold Crowns.",
        outcomes: [
            {
                outcomeType: "ABILITY",
                targetNr: 296,
                ability: {
                    abilityType: "SIXTH_SENSE",
                    description:
                        "This skill may warn a Kai Lord of imminent danger. It may also reveal the true purpose of a stranger or strange object encountered in your adventure.",
                },
                content: "If you have the Kai Discipline of Sixth Sense, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 246,
                content: "If you accept the offer, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 90,
                content: "If you refuse and try to ride around the lake, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 47
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 47,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "Breathless and sweating, you claw your way towards the summit of the hill. Suddenly, a large winged shadow passes across the hillside. You look up to see a Kraan circling the peak above. Behind you the Giaks are gaining ground.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 136,
                content:
                    "Do you stand and fight the Giaks where you are, using the high ground to your advantage? If so, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 322,
                content:
                    "Or do you grit your teeth and press on towards the peak of the hill? Turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 48
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 48,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "Your Sixth Sense warns you that these troops are not all they seem. You can detect an aura of evil about them. They are in the service of the Darklords.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 243,
                content: "You must leave here quickly before you are spotted. Turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 49
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 49,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Holmgard",
            regionType: "CITY",
            description:
                "Holmgard is the capital of Sommerlund and is a seaport on the Holmgulf. It is located near the Graveyard of the Ancients. The city is enclosed by grey-white walls two hundred feet in height whose gatehouses are 100 yards long. At the center of the city is the Citadel of the King.",
            imageUrl: "images/shadow/regions/holmguard.png",
        },
        content:
            "As you begin to read the inscription, you notice a shadow moving towards you from behind the screen. Pick a number from the Random Number Table.",
        outcomes: [
            {
                outcomeType: "RANDOM",
                targetNr: 339,
                intervall: {
                    min: 0,
                    max: 4,
                },
                content: "If you have chosen a number that is 0–4, turn to ",
            },
            {
                outcomeType: "RANDOM",
                targetNr: 60,
                intervall: {
                    min: 5,
                    max: 9,
                },
                content: "If the number is 5–9, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 50
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 50,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Dragon Bridge",
            regionType: "BRIDGE",
            description: "The Dragon Bridge connects the northern and southern part of Summerlund.",
            imageUrl: "images/shadow/regions/dragonbridge.png",
        },
        content: "The sound of fighting can be heard in the distance.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 97,
                content: "If you wish to continue towards the sound of battle, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 243,
                content: "If you wish to avoid the fighting, change direction and turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 51
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 51,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Boat Crossing",
            regionType: "CITY_OUTSKIRTS",
            description: "The outer fildworks of the city can now be seen.",
            imageUrl: "images/shadow/regions/holmguardoutskirts.png",
        },
        content:
            "You climb the wooded bank of the river and see the log walls of the fieldworks disappearing into the distance. A battle rages about two miles away and the log wall has collapsed in several places where the Darklords are attacking. Most of the fieldworks ahead are unmanned, the soldiers having left to supply reinforcements for the raging battle.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 288,
                content: "There is a gate in the log wall. If you wish to approach it, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 221,
                content: "If you would prefer to climb over the wall instead, turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 52
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 52,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "Now that you are closer, you can make out that the voices are not human. The sound is more like a kind of grunting and squeaking.",
        outcomes: [
            {
                outcomeType: "ABILITY",
                targetNr: 225,
                ability: {
                    abilityType: "ANIMAL_KINSHIP",
                    description:
                        "This skill enables a Kai Lord to communicate with some animals and to be able to guess the intentions of others.",
                },
                content: "If you have the Kai Discipline of Animal Kinship, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 250,
                content:
                    "If not, you must climb over the tree and face whatever lurks on the other side. Turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 53
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 53,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "A searing pain tears through your right leg as it is twisted and crushed by the weight of your body. Down and down you tumble, until you finally land in a ditch at the base of the hill with such force that the wind is knocked out of you and you lose consciousness. You are awoken by the sharp pain of something stabbing your chest. It proves to be the tip of a Giak spear. You are greeted by the malicious sneer of its owner as he pins your left arm to the ground. Instinctively you reach for your weapon but it is no longer there. Defenceless against the cruel Giaks, the last thing that you see before all light fades is the jagged point of a Giak lance hurtling down towards your throat. Your mission ends here.",
        events: [
            {
                eventType: "MISSION_FAILED_EVENT",
                ranking: 1,
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 54
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 54,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Main Road",
            regionType: "ROAD",
            description:
                "The Main Road is the main passage between the port of Toran in the north and the capital in the south.",
            imageUrl: "images/shadow/regions/sommerlundmainroad.png",
        },
        content:
            "It would seem that the heavens have not heard your prayers. A spear whistles past your head and embeds itself in the neck of your galloping horse. With a shriek of pain, the horse topples forward and you both roll in a tangled heap on the highway. Dazed and pinned down by the weight of the dead body of your horse, the last thing you remember is the sharp penetrating spearheads of the Giak lances. You have failed in your mission.",
        events: [
            {
                eventType: "MISSION_FAILED_EVENT",
                ranking: 1,
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 55
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 55,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Ruins of Raumas",
            regionType: "TEMPLE_RUIN",
            description:
                "Edging nearer, you soon make out a clearing that you recognize to be the site of the ruins of Raumas.",
            imageUrl: "images/shadow/regions/runinsofraumas.png",
        },
        content:
            "Just as the Giak makes his leap, you race forward and strike out with your weapon—knocking the creature away from the young wizard’s back. You jump onto the struggling Giak and strike again. Due to the surprise of your attack, add 4 points to your COMBAT SKILL for the duration of this fight but remember to deduct it again as soon as the fight is over.",
        events: [
            {
                eventType: "COMBAT",
                ranking: 2,
                creature: {
                    name: "Giak",
                    combatSkill: 9,
                    endurance: 9,
                    imageUrl: "images/shadow/creatures/giak.png",
                },
            },
            {
                eventType: "TEMPORARY_CHANGE_COMBAT_SKILL_EVENT",
                ranking: 1,
                amount: 4,
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 325,
                content: "If you win, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 56
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 56,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "You hear the scream of a large winged beast above the trees. It is a Kraan, a deadly servant of the Darklords. Quickly you hide beneath the thick fronds of fern until the horrible shrieks have passed away.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 222,
                content: "Now turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 57
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 57,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "The cabin has only one room. In it you see a wooden table and two benches, a large bed made of straw bales lashed together, several bottles of coloured liquids, and an embroidered rug in the centre of the floor.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 164,
                content: "If you choose to take a closer look at the bottles, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 109,
                content: "If you choose to pull back the rug, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 308,
                content: "If you choose to leave the room and investigate the stable, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 58
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 58,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Boat Crossing",
            regionType: "CITY_OUTSKIRTS",
            description: "The outer fildworks of the city can now be seen.",
            imageUrl: "images/shadow/regions/holmguardoutskirts.png",
        },
        content:
            "Bracing yourself for the run, you head off down the ridge at a steady pace. To the west, the army of the Darklords looks like a giant pot of black ink that has been spilled between the mountains and is spreading into the land below. You have been running for twenty minutes when you catch sight of a pack of Doomwolves lining a shallow ridge to your right.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 251,
                content:
                    "If you decide to flatten yourself against the rocks along the side of the road and wait until they pass, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 160,
                content:
                    "If you decide to carry on running, but draw your weapon just in case they attack, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 59
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 59,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Clearing",
            regionType: "CLEARING",
            description:
                "You pass through a long, dark tunnel of voerhanging branches that eventually opens out into a large clearing.",
            imageUrl: "images/shadow/regions/clearing.png",
        },
        content:
            "Peering into the darkness, you notice that rough stairs have been cut into the earth and that the mouth of the cave is in fact the entrance to a tunnel. Carefully descending the slippery stairway, you notice a small silver box on a shelf at the bottom of the staircase.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 124,
                content: "If you want to open the silver box, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 106,
                content: "If you wish to return to the surface and press on, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 211,
                content: "If you wish to investigate the tunnel further, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 60
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 60,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Holmgard",
            regionType: "CITY",
            description:
                "Holmgard is the capital of Sommerlund and is a seaport on the Holmgulf. It is located near the Graveyard of the Ancients. The city is enclosed by grey-white walls two hundred feet in height whose gatehouses are 100 yards long. At the center of the city is the Citadel of the King.",
            imageUrl: "images/shadow/regions/holmguard.png",
        },
        content:
            "The last thing you remember before darkness engulfs you is the flash of a long curved steel knife. You have become yet another victim of the Sage and his robber son—the very one who has just slit your throat! Your quest ends here.",
        events: [
            {
                eventType: "MISSION_FAILED_EVENT",
                ranking: 1,
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 61
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 61,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Boat Crossing",
            regionType: "CITY_OUTSKIRTS",
            description: "The outer fildworks of the city can now be seen.",
            imageUrl: "images/shadow/regions/holmguardoutskirts.png",
        },
        content:
            "At last you can reach the wooden fieldworks surrounding the outer city. As you race towards a sentry post, you can hear the excited shouts of the guards cheering you on. Thank the gods that they recognize you, for you must appear a ragged and suspicious figure. Your cloak is torn and hangs in tatters, your face is scratched and blood-smeared, and the dust of the Graveyard covers you from head to toe. Splashing through a shallow stream, you stagger towards the gate. The full horror of the Graveyard encounter begins to catch up with you. The last thing you recall before exhaustion robs you of consciousness, is falling into the outstretched arms of two soldiers who have run from the fieldworks to help you.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 268,
                content: "Turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 62
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 62,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Boat Crossing",
            regionType: "CITY_OUTSKIRTS",
            description: "The outer fildworks of the city can now be seen.",
            imageUrl: "images/shadow/regions/holmguardoutskirts.png",
        },
        content:
            "The ‘soldiers’ lie dead at your feet. They were bandits who were stealing from the refugees of Toran, and from the abandoned houses and farms in the area. Searching their bodies you find 28 Gold Crowns and two Backpacks containing enough food for 3 Meals. They had been armed with a crossbow and three Swords. The crossbow has been damaged in the fight, but the Swords are untouched and you may keep one if you wish. You adjust your equipment, give a cautious glance towards the west, and continue your run towards the outer defences of the capital.",
        events: [
            {
                eventType: "ACQUIRE_ITEM_EVENT",
                ranking: 1,
                item: {
                    name: "Crossbow",
                    itemType: "WEAPON",
                    description: "Crossbow",
                    weight: "MEDIUM",
                    imageUrl: "images/shadow/items/.png",
                },
            },
            {
                eventType: "ACQUIRE_ITEM_EVENT",
                ranking: 2,
                item: {
                    name: "Sword",
                    itemType: "WEAPON",
                    description: "Sword",
                    weight: "MEDIUM",
                    imageUrl: "images/shadow/items/.png",
                },
            },
            {
                eventType: "CHANGE_GOLD_AMOUNT_EVENT",
                ranking: 3,
                amount: 28,
            },
            {
                eventType: "CHANGE_RATION_AMOUNT_EVENT",
                ranking: 4,
                amount: 3,
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 288,
                content: "Turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 63
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 63,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Holmgard",
            regionType: "CITY",
            description:
                "Holmgard is the capital of Sommerlund and is a seaport on the Holmgulf. It is located near the Graveyard of the Ancients. The city is enclosed by grey-white walls two hundred feet in height whose gatehouses are 100 yards long. At the center of the city is the Citadel of the King.",
            imageUrl: "images/shadow/regions/holmguard.png",
        },
        content:
            "The wild old man is screaming at you. He blames you for the war and curses the Kai Lords as agents of the Darklords. He will not listen to reason and you must fight him.",
        events: [
            {
                eventType: "COMBAT",
                ranking: 1,
                creature: {
                    name: "Madman",
                    combatSkill: 11,
                    endurance: 10,
                    imageUrl: "images/shadow/creatures/madman.png",
                },
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 269,
                content: "Turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 64
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 64,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Main Road",
            regionType: "ROAD",
            description:
                "The Main Road is the main passage between the port of Toran in the north and the capital in the south.",
            imageUrl: "images/shadow/regions/sommerlundmainroad.png",
        },
        content:
            "You are awoken by the cries of a Kraan circling above the caravan. It is early morning and the sky is clear and bright. You can see a pack of Doomwolves less than a quarter of a mile away along the highway ahead. They are preparing to attack. You must act quickly.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 188,
                content:
                    "If you decide to gather your equipment and run for the cover of the trees, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 16,
                content:
                    "If you decide to cut free one of the horses and try to break through the attacking Doomwolves to the clear road beyond, then turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 65
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 65,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Graveyard of the Ancients",
            regionType: "GRAVEYARD",
            description:
                "The Graveyard of the Ancients is an ancient, mist-shrouded graveyard just North of Holmgard. This place is taboo because of the nameless horrors that inhabit it. No one knows who lies in eternal unrest here but the Evil that lives there is more ancient than the Darklords.",
            imageUrl: "images/shadow/regions/graveyardofancients.png",
        },
        content:
            "Your senses scream at you that this place is very evil. Leave as quickly as you can.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 104,
                content: "Turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 66
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 66,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Great Hall",
            regionType: "STONE_BUILDING",
            description: "The Great Hall is",
            imageUrl: "images/shadow/regions/greathall.png",
        },
        content:
            "Startled, you turn around to see a burly sergeant and two soldiers running towards you, their swords drawn as if to strike. You prepare to defend yourself for it looks as if they are about to attack first and ask questions later; but suddenly the sergeant calls his men to a halt. He has recognized your cloak. They put away their weapons and apologize many times for their mistake. The sergeant orders one of the men to fetch the captain of the Guard as he leads you to the doors of the Great Hall. You are greeted by a tall and handsome warrior who listens intently to your story. When you have finished the account of your perilous journey to the capital, you notice a tear in the brave man’s eye as he bids you to follow him. You walk through the splendid halls and corridors of the inner Palace. The richness and grandeur are a wonder to behold. You eventually arrive at a large carved door, guarded by two soldiers wearing silver armour. You are about to meet the King.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 350,
                content: "Turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 67
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 67,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "Your Kai Discipline of Tracking reveals to you fresh paw prints leading off along the south path. They are the prints of a black bear, an animal renowned for its ferocity. You decide the east path would be a much safer route.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 252,
                content: "Turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 68
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 68,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "After a short walk, you reach a junction where a path crosses your present route heading from west to east.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 130,
                content: "If you wish to turn west, go to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 15,
                content: "If you wish to head east, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 69
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 69,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content: "You are very near a friendly village. ",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 272,
                content: "Avoid the gallowbrush and turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 70
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 70,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "River Bridge",
            regionType: "BRIDGE",
            description: "Wooden bridge in the Summerlund Woodlands.",
            imageUrl: "images/shadow/regions/woodenbridge.png",
        },
        content:
            "You have reached a small bridge. A track follows the stream towards the east. A much narrower path disappears into thick forest towards the south.",
        outcomes: [
            {
                outcomeType: "ABILITY",
                targetNr: 8,
                ability: {
                    abilityType: "SIXTH_SENSE",
                    description:
                        "This skill may warn a Kai Lord of imminent danger. It may also reveal the true purpose of a stranger or strange object encountered in your adventure.",
                },
                content: "If you wish to use the Kai Discipline of Sixth Sense, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 28,
                content: "If you wish to go east, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 157,
                content: "If you wish to go south, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 71
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 71,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Graveyard of the Ancients",
            regionType: "GRAVEYARD",
            description:
                "The Graveyard of the Ancients is an ancient, mist-shrouded graveyard just North of Holmgard. This place is taboo because of the nameless horrors that inhabit it. No one knows who lies in eternal unrest here but the Evil that lives there is more ancient than the Darklords.",
            imageUrl: "images/shadow/regions/graveyardofancients.png",
        },
        content:
            "You are winded but not hurt. You have fallen fifteen feet or so through the roof of an underground tomb. The walls are sheer and you cannot climb them. An arched tunnel leads out of the tomb towards the east, in front of which lies the sarcophagus of some ancient noble.",
        outcomes: [
            {
                outcomeType: "ABILITY",
                targetNr: 65,
                ability: {
                    abilityType: "SIXTH_SENSE",
                    description:
                        "This skill may warn a Kai Lord of imminent danger. It may also reveal the true purpose of a stranger or strange object encountered in your adventure.",
                },
                content: "If you wish to use the Kai Discipline of Sixth Sense, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 242,
                content:
                    "If you wish to open the sarcophagus to see if it contains any treasure, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 104,
                content: "If you wish to leave via the tunnel, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 72
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 72,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "You turn to face a sneering Giak and the razor-fanged jaws of its mount. You must fight them as one enemy.",
        events: [
            {
                eventType: "COMBAT",
                ranking: 1,
                creature: {
                    name: "Giak on Doomwolf",
                    combatSkill: 15,
                    endurance: 24,
                    imageUrl: "images/shadow/creatures/.png",
                },
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 265,
                content: "If you win, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 73
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 73,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "Pulling your green cloak about you, you blend into the foliage and rocks. Peering carefully up at the track, you are shocked to see that they are not the King’s men at all. They are Drakkarim, some of the Darklords’ cruellest troops. They must have disguised themselves as soldiers of the King in order to get this far into the forest. Thanking your Kai training for saving your life, you silently slip away from the stream and push on into the forest.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 243,
                content: "Turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 74
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 74,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "The Kraan and its riders land on the track barely ten feet from where you are hidden. The Giaks leap from the scaly backs of the Kraan and move towards you, their spears raised to strike. You have been seen.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 141,
                content: "If you decide to fight them, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 281,
                content: "If you decide to run deeper into the forest without delay, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 75
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 75,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "Peering out carefully, you can see three green-clad men on horses racing along the bank. You recognize them as Border Rangers, the regiment of the King’s Army that police the western borders. One of them is wounded and is slumped over the neck of his horse. Close behind follow a pack of twenty Doomwolves. Their Giak riders are firing arrows at the rangers which fall all around them. One ranger drops from his horse and rolls down the river bank, a black arrow deeply embedded in his right leg.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 260,
                content: "If you wish to help the ranger, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 163,
                content: "If you wish to stay hidden and drift downstream, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 76
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 76,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Boat Crossing",
            regionType: "CITY_OUTSKIRTS",
            description: "The outer fildworks of the city can now be seen.",
            imageUrl: "images/shadow/regions/holmguardoutskirts.png",
        },
        content:
            "The Gem feels very hot and burns your hand. Lose 2 ENDURANCE points. You quickly grab it with the edge of your cloak and slip this Vordak Gem into your Backpack. A Gem that size must be worth hundreds of Crowns. You smile at your good fortune, mount your horse, and ride off along the south track.",
        events: [
            {
                eventType: "CHANGE_ENDURANCE_EVENT",
                ranking: 1,
                amount: -2,
            },
            {
                eventType: "ACQUIRE_ITEM_EVENT",
                ranking: 2,
                item: {
                    name: "Glowing Gem",
                    itemType: "MAGICAL_ITEM",
                    description: "Glowing Gem",
                    weight: "SMALL",
                    imageUrl: "images/shadow/items/glowinggem.png",
                },
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 118,
                content: "Turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 77
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 77,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "The Mountain Giaks are unaccustomed to pursuing their prey through forests and you soon outdistance them, until finally the sound of their grunts and curses disappears completely. When you are satisfied that they have given up the chase, you stop for a few minutes to catch your breath and check your equipment. With the memory of your ruined monastery still blazing in your mind, you gather up your meagre belongings and push on.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 19,
                content: "Turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 78
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 78,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Main Road",
            regionType: "ROAD",
            description:
                "The Main Road is the main passage between the port of Toran in the north and the capital in the south.",
            imageUrl: "images/shadow/regions/sommerlundmainroad.png",
        },
        content:
            "As the caravan careers past, you leap for the tailboard and manage to hold fast. Pulling yourself upright, you find that you are standing on the bottom rung of a ladder leadingto the rear door of the wagon. Suddenly the top half of the door flies open and you are confronted by the angry face of a bodyguard.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 132,
                content:
                    "If you decide to inform him that you are a Kai Lord with an urgent message for the King, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 12,
                content:
                    "If you decide to offer him Gold Crowns for safe passage to the capital, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 220,
                content: "If you decide to attack the guard with your weapon, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 79
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 79,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "You come to a small footbridge across a fast-flowing stream. On the other side of the bridge the path turns south. You cross the bridge and follow the path.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 204,
                content: "Turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 80
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 80,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Holmgard",
            regionType: "CITY",
            description:
                "Holmgard is the capital of Sommerlund and is a seaport on the Holmgulf. It is located near the Graveyard of the Ancients. The city is enclosed by grey-white walls two hundred feet in height whose gatehouses are 100 yards long. At the center of the city is the Citadel of the King.",
            imageUrl: "images/shadow/regions/holmguard.png",
        },
        content:
            "You stumble backwards through the front door, clutching your burnt chest with both hands. Smoke is billowing from the shop and you must run—before the Sage or his robber son catch you. You make it back to the main street and lose yourself in the rush of the crowds.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 7,
                content: "Turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 81
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 81,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Main Road",
            regionType: "ROAD",
            description:
                "The Main Road is the main passage between the port of Toran in the north and the capital in the south.",
            imageUrl: "images/shadow/regions/sommerlundmainroad.png",
        },
        content:
            "After nearly an hour, the Kraan and their cruel riders vanish towards the west. As the shocked refugees start to emerge from the woods, you can hear the sound of horses in the distance galloping nearer. You stay hidden and wait as the riders come closer. They are the cavalry of the King’s Guard wearing the white uniforms of His Majesty’s army.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 183,
                content: "If you wish to call to them, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 200,
                content:
                    "If you would rather continue along the forest edge towards the south, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 82
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 82,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Dragon Bridge",
            regionType: "BRIDGE",
            description: "The Dragon Bridge connects the northern and southern part of Summerlund.",
            imageUrl: "images/shadow/regions/dragonbridge.png",
        },
        content:
            "The giant Gourgaz lies dead at your feet. His evil followers hiss at you and then fall back from the bridge. The Prince’s soldiers form a protective wall around you and their dying leader with their shields. Black arrows whistle past your head.The dying Prince looks up into your eyes and says, ‘Kai Lord, you must take a message to my father. The enemy is too strong, we cannot hold him. The King must seek that which is in Durenor or all is lost. Take my horse and ride for the capital. May the luck of the gods ride with you.’You bid a sad farewell to the Prince, mount his white steed, and head south along the forest path. The battle still rages behind you as the Prince’s men fight off another assault on the bridge.",
        events: [
            {
                eventType: "STORY_EVENT",
                ranking: 1,
                code: "THE_DYING_PRINCE",
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 235,
                content: "Turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 83
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 83,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Boat Crossing",
            regionType: "CITY_OUTSKIRTS",
            description: "The outer fildworks of the city can now be seen.",
            imageUrl: "images/shadow/regions/holmguardoutskirts.png",
        },
        content:
            "You have run about a mile when three soldiers appear from beneath a small footbridge. They demand that you halt and drop your weapons and equipment. They are bloodstained and unshaven. Their leader is wearing the tunic of a soldier of the Toran garrison.",
        outcomes: [
            {
                outcomeType: "ABILITY",
                targetNr: 45,
                ability: {
                    abilityType: "SIXTH_SENSE",
                    description:
                        "This skill may warn a Kai Lord of imminent danger. It may also reveal the true purpose of a stranger or strange object encountered in your adventure.",
                },
                content: "If you possess the Kai Discipline of Sixth Sense, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 205,
                content: "If you wish to do as they say, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 180,
                content: "If you wish to prepare to fight them, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 232,
                content: "If you demand to know what they want, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 84
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 84,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Main Road",
            regionType: "ROAD",
            description:
                "The Main Road is the main passage between the port of Toran in the north and the capital in the south.",
            imageUrl: "images/shadow/regions/sommerlundmainroad.png",
        },
        content:
            "Just as you feel the air beating on your back, you slip free of your horse and roll over—landing with a splash in a muddy ditch by the side of the highway. You are uninjured, and you quickly scramble to your feet and make a dash for the cover of the trees—but with thirty yards left to run, you see the Kraan circling above for another dive.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 188,
                content: "Turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 85
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 85,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "he path is wide and leads straight into thick undergrowth. The trees are tall here and unusually quiet. You walk for over a mile when suddenly you hear the beating of large wings directly above you. Looking up, you are shocked to see the sinister black outline of a Kraan diving to attack you.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 229,
                content: "If you draw your weapon and prepare to fight, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 99,
                content:
                    "If you evade the attack by running south, deeper into the forest, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 86
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 86,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Main Road",
            regionType: "ROAD",
            description:
                "The Main Road is the main passage between the port of Toran in the north and the capital in the south.",
            imageUrl: "images/shadow/regions/sommerlundmainroad.png",
        },
        content: "You soon reach another crossroads",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 6,
                content: "If you wish to journey east, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 35,
                content: "If you wish to head north, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 167,
                content: "If you prefer to go south, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 42,
                content: "Or if you wish to turn west, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 87
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 87,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Graveyard of the Ancients",
            regionType: "GRAVEYARD",
            description:
                "The Graveyard of the Ancients is an ancient, mist-shrouded graveyard just North of Holmgard. This place is taboo because of the nameless horrors that inhabit it. No one knows who lies in eternal unrest here but the Evil that lives there is more ancient than the Darklords.",
            imageUrl: "images/shadow/regions/graveyardofancients.png",
        },
        content:
            "Focusing your powers on the lock, you try to visualize the inner mechanism. Gradually its image appears in your mind’s eye. It is old and corroded but it still functions. You are in danger of losing your concentration when a subtle click confirms that your effort has not been in vain. The pin is an easier task. Slowly it rises out of the lock and falls to the floor. The granite door swings towards you on hidden hinges and the grey half-light of the Graveyard floods into the tomb. The exit is overgrown with graveweed and you suffer many small cuts to your face and hands as you fight your way through to the surface. You are startled by a sudden noise. You turn to see the disembodied head of a corpse laughing at you. In blind panic, you race through the eerie necropolis towards the southern gate.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 61,
                content: "Turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 88
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 88,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Dragon Bridge",
            regionType: "BRIDGE",
            description: "The Dragon Bridge connects the northern and southern part of Summerlund.",
            imageUrl: "images/shadow/regions/dragonbridge.png",
        },
        content:
            "You cautiously peer around the rock to see a soldier lying on his back. By his side is a Spear and shield. On the shield is the painting of a white pegasus—the Prince of Sommerlund’s emblem. He is one of the Prince’s soldiers, and he is only just conscious. His uniform is badly torn, and you can see that he has a deep wound in his left arm. As you move nearer, his eyes flicker open. Heal me, my lord, he begs. I can barely feel my arm.",
        outcomes: [
            {
                outcomeType: "ABILITY",
                targetNr: 216,
                ability: {
                    abilityType: "HEALING",
                    description:
                        "This Discipline can be used to restore ENDURANCE points lost in combat. If you possess this skill you may restore 1 ENDURANCE point to your total for every numbered section of the book you pass through in which you are involved in combat. (This is only to be used after your ENDURANCE has fallen below its original level.) Remember that your ENDURANCE cannot rise above its original level.",
                },
                content:
                    "If you possess and wish to use the Kai Discipline of Healing on this man, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 31,
                content:
                    "If you do not possess the skill, or if you do not want to use it, then turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 89
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 89,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "In a cloud of dust and loose rocks you career down the steep hillside. The Kraan is still circling above as if waiting to direct the Giaks after you. Pick a number from the Random Number Table. ",
        outcomes: [
            {
                outcomeType: "RANDOM",
                targetNr: 53,
                intervall: {
                    min: 0,
                    max: 1,
                },
                content: "If you have picked 0–1, turn to ",
            },
            {
                outcomeType: "RANDOM",
                targetNr: 274,
                intervall: {
                    min: 2,
                    max: 4,
                },
                content: "If it is 2–4, turn to ",
            },
            {
                outcomeType: "RANDOM",
                targetNr: 316,
                intervall: {
                    min: 5,
                    max: 9,
                },
                content: "If it is 5–9, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 90
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 90,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Silvermoon Lake",
            regionType: "LAKE",
            description: "The Silvermoon Lake is a ...",
            imageUrl: "images/shadow/regions/silvermoonlake.png",
        },
        content:
            "Night falls and you are soon engulfed in total darkness. To press on would be useless, for you would be sure to lose your way. Tethering your horse to a tree, you pull your green Kai cloak about you and fall into a restless sleep.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 18,
                content: "Turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 91
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 91,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Holmgard",
            regionType: "CITY",
            description:
                "Holmgard is the capital of Sommerlund and is a seaport on the Holmgulf. It is located near the Graveyard of the Ancients. The city is enclosed by grey-white walls two hundred feet in height whose gatehouses are 100 yards long. At the center of the city is the Citadel of the King.",
            imageUrl: "images/shadow/regions/holmguard.png",
        },
        content:
            "The small shop is dark and musty. Books and bottles of every size and colour fill the many shelves. As you close the door, a small black dog begins to yap at you. A bald man appears from behind a large screen and bids you welcome. He politely enquires as to the nature of your visit and offers you a choice of his wares from the glass counter.",
        outcomes: [
            {
                outcomeType: "ABILITY",
                targetNr: 198,
                ability: {
                    abilityType: "SIXTH_SENSE",
                    description:
                        "This skill may warn a Kai Lord of imminent danger. It may also reveal the true purpose of a stranger or strange object encountered in your adventure.",
                },
                content: "If you have the Kai Discipline of Sixth Sense, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 152,
                content: "If you wish to look at his wares, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 7,
                content: "If you would rather decline his offer and return to the street, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 92
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 92,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "You dive for cover not a moment too soon, for a hail of black arrows scream out of the woods and bombard the area where you were standing seconds before. Pulling your cloak around you to blend into the dense bracken, you dash through the forest and away from the hidden ambushers as fast as possible. This entire area is infested by Giaks and you must escape as quickly as you can. You run without rest for over an hour until you happen to fall upon a straight forest path heading towards the east. You follow the path, taking care to keep watch for signs of the enemy.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 13,
                content: "Turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 93
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 93,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "You turn and run for the stairs just as a large block falls with a crash behind you. The room you were in has been completely sealed off. As you escape into the daylight, you glimpse behind you the crooked figure of an old druid as he raises his staff. A second later, a bolt of lightning explodes at your feet. You do not stop but run headlong down the hill, cursing the delay but thankful for your Sixth Sense.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 106,
                content: "Turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 94
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 94,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        content:
            "The Sage, seeing that you have killed his son, turns and runs from the shop by a back door. You find 12 Gold Crowns in the robber’s purse and another 4 Gold Crowns in a wooden box under the counter. Carefully examining the potions and the wand you soon realize that they are all cheap counterfeits. In fact the entire shop is full of imitations. You shake your head and return to the main street.",
        events: [
            {
                eventType: "CHANGE_GOLD_AMOUNT_EVENT",
                ranking: 1,
                amount: 16,
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 7,
                content: "Turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 95
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 95,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content: "You soon stumble upon a narrow forest track running from north to south.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 240,
                content: "If you wish to set off along the track towards the north, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 5,
                content: "If you wish to go south instead, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 96
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 96,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        content:
            "Holding your breath, you tighten your grip on your weapon and prepare to strike. The tension is unbearable—the Giaks are so close that the foul stench of their unwashed bodies fills your nostrils. You hear them curse in their strange alien tongue and then leave the ledge and start to scramble towards the peak. When you are sure they have gone, you finally exhale and wipe the sweat from your eyes.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 33,
                content: "If you wish to explore the cave further, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 248,
                content:
                    "If you wish to leave the cave and descend the hill in case the Giaks return, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 97
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 97,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Dragon Bridge",
            regionType: "BRIDGE",
            description: "The Dragon Bridge connects the northern and southern part of Summerlund.",
            imageUrl: "images/shadow/regions/dragonbridge.png",
        },
        content:
            "Ahead of you, you can see a fierce battle raging across a stone bridge. The clash of steel and the cries of men and beasts echo through the forest. In the midst of the fighting, you see Prince Pelathar, the King’s son. He is in combat with a large grey Gourgaz who is wielding a black axe above his scaly head. Suddenly, the Prince falls wounded—a black arrow in his side.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 255,
                content: "If you wish to defend the fallen Prince, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 306,
                content: "If you wish to run into the forest, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 98
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 98,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Inner Courtyard",
            regionType: "STONE_BUILDING",
            description:
                "The inner courtyard is a bustle of activity. Cavalry scouts are waiting beside their nervous horses for messages from their unit commanders inside the  Great Hall. They  take orders with great speed to the defenders of the outer fieldworks.",
            imageUrl: "images/shadow/regions/stonebuilding.png",
        },
        content:
            "The guards seem to believe your story and bow with respect to your rank of Kai Lord. One of them pulls a concealed bell-rope and the huge doors start to swing open. They usher you inside and you hear the doors close behind you.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 139,
                content: "Turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 99
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 99,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "You dive into the undergrowth just as the beast screams past your head. You quickly look back to see the Kraan turning in the air in preparation for another dive. You scramble to your feet and run deeper into the safety of the forest.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 222,
                content: "Turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 100
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 100,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Graveyard of the Ancients",
            regionType: "GRAVEYARD",
            description:
                "The Graveyard of the Ancients is an ancient, mist-shrouded graveyard just North of Holmgard. This place is taboo because of the nameless horrors that inhabit it. No one knows who lies in eternal unrest here but the Evil that lives there is more ancient than the Darklords.",
            imageUrl: "images/shadow/regions/graveyardofancients.png",
        },
        content:
            "The cold corridor suddenly makes an abrupt turning towards the east. You notice a greenish glow that lights the tunnel in the far distance. As you creep nearer you can see that the corridor opens out into a larger chamber. The strange light seems to emanate from a large bowl resting upon the top of a granite throne. On a plinth in front of the throne stands a statue. It looks like a winged serpent curved in the shape of an ‘S’.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 161,
                content: "If you wish to sit on the throne, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 133,
                content: "If you wish to examine the statue, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 257,
                content: "If you wish to look for an exit from this chamber, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 101
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 101,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "The noise of battle soon fades behind you but the ensuing silence is broken by a voice in your head that accuses you of being a coward, and deserting a fellow human in danger. You try to rid yourself of your nagging conscience by telling yourself that your mission is far more important, and that not only is the life of the young magician in peril but the lives of all your countrymen depend on you reaching the capital alive. Suddenly, the sight of a Giak war party in the distance makes you quickly take cover and hide. But it is too late—they have spotted you and you must run as fast as you can.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 281,
                content: "Turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 102
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 102,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Graveyard of the Ancients",
            regionType: "GRAVEYARD",
            description:
                "The Graveyard of the Ancients is an ancient, mist-shrouded graveyard just North of Holmgard. This place is taboo because of the nameless horrors that inhabit it. No one knows who lies in eternal unrest here but the Evil that lives there is more ancient than the Darklords.",
            imageUrl: "images/shadow/regions/graveyardofancients.png",
        },
        content:
            "As you descend the rocky slope towards the Graveyard of the Ancients, you are aware of a strange mist and cloud that swirls all around this grey and forbidding place, blocking the sun and covering the Graveyard in a perpetual gloom. A chill creeps forward to greet your approach. With a feeling of deep dread, you enter the eerie necropolis.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 284,
                content: "Turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 103
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 103,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "The overgrown path leads to a junction where another track branches off towards the east.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 13,
                content: "If you wish to take this path, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 287,
                content: "If you would rather continue towards the northeast, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 104
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 104,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Graveyard of the Ancients",
            regionType: "GRAVEYARD",
            description:
                "The Graveyard of the Ancients is an ancient, mist-shrouded graveyard just North of Holmgard. This place is taboo because of the nameless horrors that inhabit it. No one knows who lies in eternal unrest here but the Evil that lives there is more ancient than the Darklords.",
            imageUrl: "images/shadow/regions/graveyardofancients.png",
        },
        content:
            "The walls are dank and slimy. The stale air chokes you and cobwebs brush across your face. You can feel panic grip your stomach, as the tunnel gets darker and darker. You reach a junction where the tunnel meets a corridor leading from north to south.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 26,
                content: "If you wish to turn north, go to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 100,
                content: "If you wish to go south, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 105
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 105,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content: "In the distance, perched on the branch of an old oak tree is a jet-black raven.",
        outcomes: [
            {
                outcomeType: "ABILITY",
                targetNr: 298,
                ability: {
                    abilityType: "ANIMAL_KINSHIP",
                    description:
                        "This skill enables a Kai Lord to communicate with some animals and to be able to guess the intentions of others.",
                },
                content:
                    "If you have the Kai Discipline of Animal Kinship, you may call to this bird by turning to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 335,
                content:
                    "If you do not possess this skill, or if you do not wish to use it, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 106
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 106,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Clearing",
            regionType: "CLEARING",
            description:
                "You pass through a long, dark tunnel of voerhanging branches that eventually opens out into a large clearing.",
            imageUrl: "images/shadow/regions/clearing.png",
        },
        content:
            "Eventually you come to the edge of a fast-flowing icy stream. The white water cascades over the mossy rocks and disappears towards the east.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 263,
                content: "If you wish to follow the stream to the east, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 334,
                content: "If you would rather explore upstream, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 107
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 107,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Graveyard of the Ancients",
            regionType: "GRAVEYARD",
            description:
                "The Graveyard of the Ancients is an ancient, mist-shrouded graveyard just North of Holmgard. This place is taboo because of the nameless horrors that inhabit it. No one knows who lies in eternal unrest here but the Evil that lives there is more ancient than the Darklords.",
            imageUrl: "images/shadow/regions/graveyardofancients.png",
        },
        content:
            "Running across the room, you lash out at the skulls, smashing them to fragments. You notice that inside each skull is a bubbling grey jelly that seems to writhe and change its shape, sprouting bat-like wings and suckers from its glistening form. In horror and loathing, you race for the exit corridor and escape just as a heavy portcullis falls with a crash, completely sealing off the chamber.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 23,
                content: "Turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 108
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 108,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Homgard Robbers Lane",
            regionType: "CITY",
            description: "The Homgard Robbers Lane is...",
            imageUrl: "images/shadow/regions/holmguardupperlane.png",
        },
        content:
            "You fly in an arc through the air towards the opposite roof. Everything seems to be happening in slow motion. You see the teeming crowds below in the street, and a nest of callysparrows in the eaves of a roof to your right. You hear their startled cries as you land with a crash on the other side. But it is the last sound that you will ever hear. The tiles splinter and collapse and you fall through the four floors of the ‘Green Slipper Inn’ breaking your back in several places. Your mission and your life end here.",
        events: [
            {
                eventType: "MISSION_FAILED_EVENT",
                ranking: 1,
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 109
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 109,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content: "The only thing under the carpet is dirt!",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 164,
                content: "You may take a closer look at the bottles by turning to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 308,
                content: "Or you can leave the room and investigate the stable by turning to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 110
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 110,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        content:
            "You quickly take aim and hurl the rock at the Giak’s head as hard as you can, but to your horror the creature ducks and the rock arcs harmlessly over its back. You must act immediately to save the wizard.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 55,
                content: "Turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 111
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 111,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "Only a few minutes after leaving the junction, you see in the distance a small log cabin and stable. On arrival you check the interior through a side window. The cabin looks deserted.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 57,
                content: "If you wish to enter the cabin, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 308,
                content: "If you wish to search the stable, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 112
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 112,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Clearing",
            regionType: "CLEARING",
            description:
                "You pass through a long, dark tunnel of voerhanging branches that eventually opens out into a large clearing.",
            imageUrl: "images/shadow/regions/clearing.png",
        },
        content:
            "Suddenly, the large rock you are hiding behind is rolled aside and you are faced by two snarling Giaks intent on your death. The cave mouth is a narrow entrance and you can only fight the Giaks one at a time.",
        events: [
            {
                eventType: "COMBAT",
                ranking: 1,
                creature: {
                    name: "Giak",
                    combatSkill: 13,
                    endurance: 10,
                    imageUrl: "images/shadow/creatures/giak.png",
                },
            },
            {
                eventType: "COMBAT",
                ranking: 2,
                creature: {
                    name: "Giak",
                    combatSkill: 13,
                    endurance: 10,
                    imageUrl: "images/shadow/creatures/giak.png",
                },
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 33,
                content: "If you win, you may explore the cave further by turning to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 248,
                content: "Or you may leave and descend the hill. Turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 113
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 113,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "You have been walking for over half an hour when your eye is caught by some bright red flowers growing near to a mossy bank. You recognize the plants to be Laumspur, a rare and beautiful herb much prized for its healing properties. Kneeling down, you pick a handful of Laumspur and place it in your Backpack. You may eat this herb to regain lost ENDURANCE points. Each Meal of Laumspur will restore 3 ENDURANCE points, and you have gathered enough for two such Meals.1 Closing your pack, you continue your mission.",
        events: [
            {
                eventType: "ACQUIRE_ITEM_EVENT",
                ranking: 1,
                item: {
                    name: "Laumspur",
                    itemType: "HERB",
                    description:
                        "Each Meal of Laumspur may be consumed when prompted for a Meal, in which case it fulfills teh Meal re...",
                    weight: "SMALL",
                    imageUrl: "images/shadow/items/.png",
                },
            },
            {
                eventType: "ACQUIRE_ITEM_EVENT",
                ranking: 2,
                item: {
                    name: "Laumspur",
                    itemType: "HERB",
                    description:
                        "Each Meal of Laumspur may be consumed when prompted for a Meal, in which case it fulfills teh Meal re...",
                    weight: "SMALL",
                    imageUrl: "images/shadow/items/.png",
                },
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 347,
                content: "If you wish to head northeast, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 295,
                content: "If you wish to head east, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 114
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 114,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Silvermoon Lake",
            regionType: "LAKE",
            description: "The Silvermoon Lake is a ...",
            imageUrl: "images/shadow/regions/silvermoonlake.png",
        },
        content:
            "You coax the horse to lie down and begin to cover him and yourself with branches and dead leaves. You hear the wings of the Kraan as it passes over the trees. It returns and circles above you, but soon retreats back across the lake. You decide to leave now, in case it returns with some of its friends.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 239,
                content: "Turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 115
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 115,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Boat Crossing",
            regionType: "CITY_OUTSKIRTS",
            description: "The outer fildworks of the city can now be seen.",
            imageUrl: "images/shadow/regions/holmguardoutskirts.png",
        },
        content:
            "You stumble into the first building and fall to the floor exhausted. You can smell cooked meat. You notice a small cauldron hanging over the embers of a dying fire, and a large oak table that has been set for a meal. Whoever lived here must have left in a great hurry this very morning. There is water in a jug and a loaf of fresh bread on the table.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 150,
                content: "If you decide to take a quick Meal, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 177,
                content: "If you decide to search the building, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 83,
                content: "If you would rather leave now and continue your run, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 116
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 116,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Silvermoon Lake",
            regionType: "LAKE",
            description: "The Silvermoon Lake is a ...",
            imageUrl: "images/shadow/regions/silvermoonlake.png",
        },
        content:
            "As you climb out of the muddy water, black arrows fall all around you. Quickly, you dash for the cover of the trees and wait for the Giaks to leave the opposite bank, before continuing on foot towards the capital.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 321,
                content: "Turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 117
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 117,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Dragon Bridge",
            regionType: "BRIDGE",
            description: "The Dragon Bridge connects the northern and southern part of Summerlund.",
            imageUrl: "images/shadow/regions/dragonbridge.png",
        },
        content:
            "The man is badly injured and near to death. If you have the Kai Discipline of Healing, you may ease the pain of his wounds but he has been so seriously hurt he is beyond repair by your skills alone. He soon lapses into unconsciousness. You try to make him as comfortable as possible beneath a large forest oak, before leaving and pressing on through the thick woodland towards the northeast.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 330,
                content: "Turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 118
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 118,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Boat Crossing",
            regionType: "CITY_OUTSKIRTS",
            description: "The outer fildworks of the city can now be seen.",
            imageUrl: "images/shadow/regions/holmguardoutskirts.png",
        },
        content:
            "You spur your horse to a gallop and race down the long straight path. In the far distance you can just make out the silhouette of Holmgard on the horizon, its high walls and tall spires glinting in the morning sun. Your path joins a highway running from north to south. It is the main turnpike road between the northern port of Toran and the capital. You set off towards Holmgard, your eyes peeled for Kraan in the clear morning sky.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 224,
                content: "Turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 119
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 119,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        content: "",
        events: [
            {
                eventType: "CHANGE_ENDURANCE_EVENT",
                ranking: 1,
                amount: -2,
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 226,
                content: "If you wish to slide down the slope as carefully as you can, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 38,
                content:
                    "If you do not feel that you are up to the risk of this tricky descent in your present sleepy state, walk around the edge of the ridge by turning to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 120
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 120,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        content:
            "Behind you can hear the blood-crazy Giaks killing the caravan horses. You risk a quick glance over your shoulder and see a Kraan start to climb high into the air. Will it attack you or is it interested in something else? The dark shadow that is gradually getting larger all around you tells you that you are its intended victim. The Kraan is diving full speed at you!",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 84,
                content:
                    "If you wait until it is about to strike and then jump from the saddle, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 171,
                content: "If you head as fast as you can for the trees, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 54,
                content:
                    "If you put your head down, pray to the heavens for good luck and gallop on regardless, turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 121
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 121,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "After a few minutes walking you see a stranger, clad in red, standing in the centre of the track ahead. He has his back towards you, and his head is covered by the hood of his robes. Perched on his outstretched arm is the black raven that you saw earlier.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 342,
                content: "If you wish to call the stranger, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 309,
                content: "If you wish to approach the stranger cautiously, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 283,
                content: "If you would rather draw your weapon and attack, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 122
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 122,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "Immediately the horse senses your communication. He calms down. You walk towards the beautiful animal and stroke his head reassuringly. You sense that he is frightened and confused. Mounting him, you lead him off to the path and head south once again.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 206,
                content: "Turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 123
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 123,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "As the creature dies, its body slowly dissolves into a vile green liquid. You notice that all of the grass and the plants beneath the smoking fluid are beginning to shrivel and die. A large valuable looking Gem lies on the ground near to the decaying body. Further along the track you can see a large war party of Giaks running towards you.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 304,
                content: "If you wish to take the Gem, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 2,
                content: "If you would rather leave it and run, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 124
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 124,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Clearing",
            regionType: "CLEARING",
            description:
                "You pass through a long, dark tunnel of voerhanging branches that eventually opens out into a large clearing.",
            imageUrl: "images/shadow/regions/clearing.png",
        },
        content:
            "Inside the box you find 15 Gold Crowns and a Silver Key. If you wish to keep the key, remember to mark it on your Action Chart.",
        events: [
            {
                eventType: "CHANGE_GOLD_AMOUNT_EVENT",
                ranking: 1,
                amount: 15,
            },
            {
                eventType: "ACQUIRE_ITEM_EVENT",
                ranking: 2,
                item: {
                    name: "Silver Key",
                    itemType: "KEY",
                    description: "Silver Key",
                    weight: "SMALL",
                    imageUrl: "images/shadow/items/silverkey.png",
                },
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 211,
                content: "You can continue to investigate the tunnel by turning to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 106,
                content: "Or you may leave and descend the hill by turning to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 125
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 125,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Clearing",
            regionType: "CLEARING",
            description:
                "You pass through a long, dark tunnel of voerhanging branches that eventually opens out into a large clearing.",
            imageUrl: "images/shadow/regions/clearing.png",
        },
        content:
            "The path opens out into a large clearing. You notice strange claw prints in the earth. Kraan have landed here. By the number of prints and by the size of the area disturbed, you judge that at least five of the foul creatures landed here in the last twelve hours. You see two exits on the far side of the clearing. One leads west, the other south.",
        outcomes: [
            {
                outcomeType: "ABILITY",
                targetNr: 301,
                ability: {
                    abilityType: "TRACKING",
                    description:
                        "This skill enables a Kai Lord to make the correct choice of a path in the wild, to discover the location of a person or object in a town or city and to read the secrets of footprints or tracks.",
                },
                content: "If you have the Kai Discipline of Tracking, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 27,
                content: "If you wish to take the south path, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 214,
                content: "If you wish to take the west path, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 126
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 126,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Silvermoon Lake",
            regionType: "LAKE",
            description: "The Silvermoon Lake is a ...",
            imageUrl: "images/shadow/regions/silvermoonlake.png",
        },
        content:
            "You ride deeper and deeper into the forest. Silently you thank the Prince for such a fine horse, for although the ground is a tangle of briars and roots, he never once falters. The Doomwolves are soon left far behind and you bring your horse to a halt. The light has faded fast and it is almost night.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 46,
                content: "If you wish to press on ahead, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 143,
                content:
                    "If you wish to bear left (the same direction as the path you left far behind) then turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 127
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 127,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "After an hour of marching, the Drakkarim suddenly halt as a large, grey scaly creature approaches along the track. As the beast draws closer, you can smell its fetid breath on your face. It lets out a roar and grabs your head in its powerful webbed hands. The last thing you hear is the sharp crack of your spine snapping. Your quest ends here.",
        events: [
            {
                eventType: "MISSION_FAILED_EVENT",
                ranking: 1,
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 128
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 128,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "Carefully parting the dense foliage, you are horrified by the sight that meets you. In a small clearing ahead, three Giaks have tied a man to a wooden stake and are setting fire to a mass of brushwood bundled at his feet. You recognize his tunic as that of a Border Ranger, one of the King’s men who police the kingdom near the Durncrag Mountains of the west. He has been badly beaten and is nearly unconscious.",
        outcomes: [
            {
                outcomeType: "ABILITY",
                targetNr: 297,
                ability: {
                    abilityType: "HUNTING",
                    description:
                        "This skill ensures that a Kai Lord will never starve in the wild. He will always be able to hunt for food for himself except in areas of wasteland and desert. The skill also enables a Kai Lord to be able to move stealthily when stalking his prey.",
                },
                content: "If you have the Kai Discipline of Hunting, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 336,
                content:
                    "If you do not, you must attack the Giaks now in order to save the ranger’s life. Turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 129
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 129,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Holmgard",
            regionType: "CITY",
            description:
                "Holmgard is the capital of Sommerlund and is a seaport on the Holmgulf. It is located near the Graveyard of the Ancients. The city is enclosed by grey-white walls two hundred feet in height whose gatehouses are 100 yards long. At the center of the city is the Citadel of the King.",
            imageUrl: "images/shadow/regions/holmguard.png",
        },
        content:
            "You reach the main gates of the capital, and stare in awe at the height of the city’s walls. Two hundred feet high, the walls of Holmgard have withstood the ravages of both time and the Darklords. You and the officer race through the tunnel of the inner gatehouse, one hundred yards in length, and finally halt outside the doorway of the main watchtower. Great crowds of soldiers and civilians are running to and from.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 3,
                content: "If you wish to continue following the officer, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 144,
                content:
                    "If you feel that you stand a better chance of making your way to the King’s citadel on your own, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 130
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 130,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Wafford Clearing",
            regionType: "CLEARING",
            description: "You soon reach a small clearing in the woods.",
            imageUrl: "images/shadow/regions/waffordclearing.png",
        },
        content:
            "You soon reach a small clearing in the woods. A bench, carved from a fallen tree is set in the centre of the clearing. You are hungry and must now eat a Meal here.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 28,
                content:
                    "When you have finished, if you decide to leave the clearing by the south way, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 201,
                content:
                    "Or if you prefer the smaller track that leads eastwards into the forest, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 131
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 131,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Ruins of Raumas",
            regionType: "TEMPLE_RUIN",
            description:
                "Edging nearer, you soon make out a clearing that you recognize to be the site of the ruins of Raumas.",
            imageUrl: "images/shadow/regions/runinsofraumas.png",
        },
        content:
            "You have covered about a quarter of a mile when you hear shouting and a noise like thunderclaps ahead. Edging nearer, you soon make out a clearing that you recognize to be the site of the ruins of Raumas, an ancient forest temple. A war party of Giaks, some twenty-five to thirty strong, are attacking the ruins from all sides. Many more of the Giaks are dead or dying among the broken pillars of marble, but still they assault whatever is hidden inside. Suddenly, a bolt of blue lightning rips through the front rank of Giaks sending the armour-clad creatures tumbling in all directions.  A Giak, taller than the others and dressed from head to foot in black chainmail, curses at his troops as he whips them forward with a barbed flail. With weapon ready, you move to the edge of the clearing, under cover of the thick foliage, and try to catch a glimpse of the defenders. To your amazement, the ruins are being defended by a young man no older than yourself. You recognize his sky-blue robes, embroidered with stars. He is a young theurgist of the Magicians’ Guild of Toran: an apprentice in magic. Five Giaks charge forward, their spears raised to stab the apprentice as he hurriedly retreats deeper into the ruins. You see him turn and raise his left hand just before a bolt of blue flame shoots from his fingertips into the snarling Giak soldiers. Close to where you are hidden, you see a Giak scuttle past and climb one of the pillars of the temple. He has a long curved dagger in his mouth and he is about to jump on the young wizard standing below.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 241,
                content: "If you wish to shout a warning to the wizard, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 55,
                content: "If you wish to run forward and attack the Giak when he jumps, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 302,
                content:
                    "If you wish to pick up a chunk of temple marble and throw it at the Giak’s head, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 101,
                content:
                    "Or if you would rather turn and leave the battle area and run back into the woods, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 132
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 132,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Main Road",
            regionType: "ROAD",
            description:
                "The Main Road is the main passage between the port of Toran in the north and the capital in the south.",
            imageUrl: "images/shadow/regions/sommerlundmainroad.png",
        },
        content:
            "The bodyguard looks at you with great suspicion and slams the door. You can hear voices chattering inside the caravan. Suddenly the door swings open and the face of a wealthy merchant appears. He recognizes your Kai cloak and apologizes for his servant’s behaviour. He says that they have been attacked several times since they left Toran: by Kraan, by bandits, and by robbers. They thought you may have been a bandit. Inside, the caravan is full of silks and spices. The merchant offers you food which you gratefully accept. After your sumptuous meal, the fatigue of your ordeal finally overcomes you and you slip into a deep sleep.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 64,
                content: "Turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 133
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 133,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Graveyard of the Ancients",
            regionType: "GRAVEYARD",
            description:
                "The Graveyard of the Ancients is an ancient, mist-shrouded graveyard just North of Holmgard. This place is taboo because of the nameless horrors that inhabit it. No one knows who lies in eternal unrest here but the Evil that lives there is more ancient than the Darklords.",
            imageUrl: "images/shadow/regions/graveyardofancients.png",
        },
        content:
            "As you approach the statue, several cracks appear in its stone surface. It suddenly explodes before you as a real Winged Serpent breaks free of its stone mantle and attacks you. You must fight the creature.",
        events: [
            {
                eventType: "COMBAT",
                ranking: 1,
                creature: {
                    name: "Winged Serpent",
                    combatSkill: 16,
                    endurance: 18,
                    imageUrl: "images/shadow/creatures/wingedserpent.png",
                },
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 266,
                content: "If you win the fight, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 134
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 134,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "Using your skills, you detect Giak tracks around the perimeter of the clearing. The prints are fresh and you can tell that these cruel minions of the Darklords were in this area less than two hours ago.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 305,
                content:
                    "Forewarned by this knowledge, if you decide to investigate the huts, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 40,
                content: "If you would rather avoid the clearing, turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 135
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 135,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Baga-darooz",
            regionType: "SEWER",
            description: "The sewer of Barrakeesh, a dirty and disgusting place, full with rats and insects. The water is thick with scum, and the glutinous mire is clotted with green and black filth.",
            imageUrl: "images/shadow/regions/baga-darooz.png"
        },
        content:
            "The air of the new tunnel is hot and humid, and as you press on, the putrid gas makes you increasingly nauseous. You are forced to stop—the vapour is burning your throat and causing painful stomach cramps. Suddenly a noise makes you forget your discomfort; you turn to see that one of Maouk’s men has caught up with you. He looms out of the darkness, his face covered by a pad of herbs. Deduct 2 points from your COMBAT SKILL due to the effects of the noxious fumes.",
        events : [
            {
                eventType : "COMBAT",
                ranking : 1,
                creature : {
                    name : "Sharnazim Warrior",
                    combatSkill : 17,
                    endurance : 22,
                    imageUrl : "images/flight/creatures/sharnazimwarrior.png"
                },
            },
            {
                eventType : "TEMPORARY_CHANGE_COMBAT_SKILL_EVENT",
                ranking : 2,
                amount : -2
            },
            {
                eventType : "CHANGE_ENDURANCE_EVENT",
                ranking : 3,
                amount : 3,
            }
            
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 161,
                content: "If you lose this combat, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 130,
                content: "If you win this combat, restore 3 of any ENDURANCE points and turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 136
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 136,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Grand Palace",
            regionType: "STONE_BUILDING",
            description: "The biggest building in Barrakeesh. ",
            imageUrl: "images/shadow/regions/chula.png",
        },
        content:
            "Once you have unlocked the door, you twist the handle and open it a few inches. You see a stair descending to a small chamber where a black-robed soldier is guarding a pair of iron gates. Through the bars you can see rows of weapons and suits of armour stacked in long racks. A sign fixed to the bars says: GRAND PALACE ARMOURY",
        outcomes: [
            {
                outcomeType : "ABILITY",
                targetNr : 186,
                ability : {
                    abilityType : "CAMOUFLAGE",
                    description : "This Discipline enables a Kai Lord to blend in with his surroundings. In the countryside, he can hide undetected among trees and rocks and pass close to an enemy without being seen. In a town or city, it enables him to look and sound like a native of that area, and can help him to find shelter or a safe hiding place."
                },
                content : "If you have the Kai Discipline of Camouflage, turn to"
            },
            ,
            {
                outcomeType: "DEFAULT",
                targetNr: 178,
                content: "If you wish to use the canoe, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 93,
                content: "If you wish to use the canoe, turn to ",
            }
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 137
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 137,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Grand Palace",
            regionType: "STONE_BUILDING",
            description: "The biggest building in Barrakeesh. ",
            imageUrl: "images/shadow/regions/chula.png",
        },
        content:
            "Suddenly you realize just how hungry you are. You must now eat a Meal or lose 3 ENDURANCE points. You pass unseen through the exotic plants that grow everywhere in abundance. The gravelled path divides a lawn of strange, luxuriant, purple grass and leads to a magnificent fountain. A jet of clear blue water catches the sun, reflecting and refracting an eye-dazzling rainbow of colour. You gaze beyond the fountain to where the vaulting towers of the palace soar into the sky, and carefully note the positions of the doors and windows. There are two entrances to the Grand Palace from the gardens; you can either go through the palace kitchens or through the Vizu-diar—the Zakhan’s trophy hall. However, only one of these entrances will lead to the Imperial Apothecary, and to the precious Oede herb stored there.",
        events: [
            {
                eventType : "CHANGE_RATION_AMOUNT_EVENT",
                ranking : 1,
                amount : 1
            },
            {
                eventType : "CHANGE_ENDURANCE_EVENT",
                ranking : 2,
                amount : -3
            },
        ],
        outcomes: [
            {
                outcomeType : "ABILITY",
                targetNr : 37,
                ability : {
                    abilityType : "TRACKING",
                    description : "This skill enables a Kai Lord to make the correct choice of a path in the wild, to discover the location of a person or object in a town or city and to read the secrets of footprints or tracks."
                },
                content : "If you have the Kai Discipline of Tracking, turn to "
            },
            {
                outcomeType : "ABILITY",
                targetNr : 37,
                ability : {
                    abilityType : "SIXTH_SENSE",
                    description : "This skill may warn a Kai Lord of imminent danger. It may also reveal the true purpose of a stranger or strange object encountered in your adventure."
                },
                content : "If you have the Kai Discipline of Sixth Sense, turn to "
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 66,
                content: "If you wish to enter the palace through the kitchens, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 49,
                content: "If you wish to enter through the Vizu-diar, turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 138
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 138,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Grand Palace",
            regionType: "STONE_BUILDING",
            description: "The biggest building in Barrakeesh. ",
            imageUrl: "images/shadow/regions/chula.png",
        },
        content:
            "The guards pull open the door, and you spring into action. Your clenched fist strikes the first man beneath his bearded jaw, lifting him from the floor with the power of the blow. His sword drops from his hand and clatters to the ground close to your feet.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 4,
                content: "If you wish to pick up the sword, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 91,
                content: "If you wish to ignore the sword and attack the second guard with your bare hands, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 139
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 139,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Baga-darooz",
            regionType: "SEWER",
            description: "The sewer of Barrakeesh, a dirty and disgusting place, full with rats and insects. The water is thick with scum, and the glutinous mire is clotted with green and black filth.",
            imageUrl: "images/shadow/regions/baga-darooz.png"
        },
        content:
            "You are so irritated by the crawling mask of insects covering your skin that you fail to see the rusty metal post sticking out of the water ahead. You walk straight into it and lose your footing. Instinctively, you grab at the post, but like everything else it is covered with sewage, as slippery as Kalte ice.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 94,
                content: "Turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 140
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 140,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Grand Palace",
            regionType: "STONE_BUILDING",
            description: "The biggest building in Barrakeesh. ",
            imageUrl: "images/shadow/regions/chula.png",
        },
        content:
            "The iron gates of the armoury are unlocked. You push open the left gate and wince as the shrill squeak of a dry hinge sends a shiver down your spine. Inside, at the end of a long aisle, is a workbench, littered with spearheads, sword hilts, and all manner of armourer’s tools. In the midst of this tangled mess is a large, black, leather-bound book.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 83,
                content: "If you wish to open the book, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 181,
                content: "If you wish to ignore the book and search for your confiscated equipment, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 141
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 141,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Barrakeesh",
            regionType: "CITY",
            description:
                "Barrakeesh is the capital city of Vassagonia. It has a habour, a lake and on the outskirts of the magnificent city are some smaller towns such as Chiras and Chula. The citizens of Barrakeesh, unlike the inhabitants of other Vassagonian cities, enjoy an abundant supply of fresh water from the Da River.",
            imageUrl: "images/shadow/regions/barrakeesh.png",
        },
        content:
            "You throw yourself to one side, barely escaping the dart as it whistles past your chest. ‘Seize him!’ screams Maouk, kicking his soldiers onwards through the wreckage. ‘Don’t let him get away this time!’ You are now lying on the floor less than a couple of feet away from the trapdoor.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 51,
                content: "If you wish to roll over to the trapdoor and escape, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 10,
                content:
                    "If you decide to surrender to Maouk and his warriors, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 142
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 142,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Habour of Barrakeesh",
            regionType: "HARBOUR",
            description:
                "The harbour of Barrakeesh is deserted save for a handful of citizens clad in black, and the only sound that greets you is the toll of a funeral bell, echoing through the harbour on this day of mourning.",
            imageUrl: "images/shadow/regions/barrakeesh_harbour.png",
        },
        content:
            "You hit the water and swim submerged until the pain in your lungs forces you to the surface. Sharnazim are running in every direction, trying to surround the quay and prevent your escape. Gulping another breath, you dive again and swim towards a cluster of small boats less than fifty yards away. Through the clear blue water, it is easy to see the rubbish that litters the bed of the harbour; mementoes of all the merchant ships that have docked at the quayside. Clinging to one old anchor is a strange, jelly-like blob. A mass of short tubes sticks out from all its sides, and a long hook-like scoop hangs beneath its rubbery body. Without warning, the blob suddenly jets towards you, propelled by water from its mass of breathing tubes. It is a Bloodlug, and it is hungry for your flesh!",
        outcomes: [
            {
                outcomeType : "ABILITY",
                targetNr : 134,
                ability : {
                    abilityType : "ANIMAL_KINSHIP",
                    description : "This skill enables a Kai Lord to communicate with some animals and to be able to guess the intentions of others."
                },
                content : "If you have the Kai Discipline of Animal Kinship, turn to "
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 12,
                content:
                    "If you wish to fight the creature, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 95,
                content:
                    "If you wish to evade the creature, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 143
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 143,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Barrakeesh",
            regionType: "CITY",
            description:
                "Barrakeesh is the capital city of Vassagonia. It has a habour, a lake and on the outskirts of the magnificent city are some smaller towns such as Chiras and Chula. The citizens of Barrakeesh, unlike the inhabitants of other Vassagonian cities, enjoy an abundant supply of fresh water from the Da River.",
            imageUrl: "images/shadow/regions/barrakeesh.png",
        },
        content:
            "You set light to a tar-coated torch and hurl it down into the sewer-hole. There is a tremendous flash and roar; suddenly, all along the alley, plumes of flaming sewage explode skywards. The alley is transformed into a rush of shocked and screaming people, all scrambling to avoid the deluge of burning filth raining down on their heads. The torch has triggered a chain reaction in the Baga-darooz; the inflammable sewer gas has ignited—everywhere is panic and confusion. You run with the crowd through the sewage-stained alleys until you reach a busy market square, unpolluted by the blast. Your eye is caught by a sign hanging above the side door of a large hall: BARRAKEESH PUBLIC BATHS. You push open the door and slip inside.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 90,
                content: "Turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 144
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 144,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Grand Palace",
            regionType: "STONE_BUILDING",
            description: "The biggest building in Barrakeesh. ",
            imageUrl: "images/shadow/regions/chula.png",
        },
        content:
            "A terrible sense of dread fills your mind. Your Kai skill is warning you that a horrific and inescapable fate awaits you if you stay in this cell. You follow your instincts and attack.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 174,
                content: "Turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 145
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 145,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Baga-darooz",
            regionType: "SEWER",
            description: "The sewer of Barrakeesh, a dirty and disgusting place, full with rats and insects. The water is thick with scum, and the glutinous mire is clotted with green and black filth.",
            imageUrl: "images/shadow/regions/baga-darooz.png"
        },
        content:
            "You wade into the water, thick with scum, and try not to breathe through your nose. The glutinous mire is clotted with green and black filth, and with your every movement the surface cracks, releasing a vile gas. You cover your mouth with your Kai cloak, but the appalling stench makes you retch and choke. A loud splash behind you warns that Maouk’s men are not far away, and you quicken your step. At regular intervals, circular chutes disappear into the ceiling. Many are stained bright yellow, white, or reddish-brown. This section of the Baga-darooz passes beneath the Linen Quarter of Barrakeesh, where the Guild of Linen-weavers operate their fuller’s shops. The chutes dump waste dyes straight into the sewer, making the oily water even more garish in colour. You spot a ripple in the water ahead. It moves nearer, the wake of a submerged sewer creature. Instinctively, you flatten yourself against the dye-stained wall as you feel the movement of water against your waist, and watch in fear and fascination as the ripple of water disappears into the tunnel. Suddenly, a fearful scream bursts out of the darkness; Maouk has lost one of his men. The terrible cries of the Sharnazim warrior chill your spine, but your instincts tell you to press on while you have the advantage. The channel soon reaches a junction where another tunnel heads off to the west.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 108,
                content: "If you wish to enter the new tunnel, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 70,
                content: "If you wish to continue northwards, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 146
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 146,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png",
        },
        content:
            "For a few minutes, you watch the man working at his anvil, in case he, too, should decide to leave the chamber. However, he continues to work, apparently unaffected by the scorching heat. To reach the west door without being seen, you must make your way cautiously across the chamber, dodging from one pillar to the next. Pick a number from the Random Number Table. If you have the Kai Discipline of Camouflage or Hunting, deduct 2 from the number you have chosen.",
        outcomes: [
            {
                outcomeType : "RANDOM",
                targetNr : 44,
                intervall : {
                    min : 0,
                    max : 2,
                },
                content : "If your total is now 2 or less, turn to "
            },
            {
                outcomeType : "RANDOM",
                targetNr : 190,
                intervall : {
                    min : 3,
                    max : 9,
                },
                content : "If your total is now 3 or more, turn to "
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 147
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 147,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png",
        },
        content:
            "Your Kai sense tells you to beware of the man who helped you. He intends to betray you for a purse of silver.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 61,
                content: "If you wish to stay in his house, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 109,
                content: "If you wish to escape by the window, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 148
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 148,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png",
        },
        content:
            "As soon as you enter, the panel slides shut, and you are plunged into darkness. You advance nervously, your hand held before your face to part the cobwebs hanging in festoons from the low ceiling. You are a few feet away from what appears to be a dead end when you tread on a pressure plate, which activates another panel that slides back to reveal a small chamber.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 14,
                content: "Turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 149
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 149,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Grand Palace",
            regionType: "STONE_BUILDING",
            description: "The biggest building in Barrakeesh. ",
            imageUrl: "images/shadow/regions/chula.png",
        },
        content:
            "You reach the door to the Vizu-diar without being seen, only to find that it is securely bolted from the inside. You are about to curse your bad luck when you notice a window set into an elaborately carved panel above the door; its iron shutter is open. In spite of your injured arm, you successfully climb the nail-studded door and drop through the window into the silence of the trophy room. An eerie collection of stuffed heads lines the walls of this private chamber. Most are those of reptilian desert creatures, souvenirs of imperial hunting expeditions into the Dry Main. Among the snake-like trophies, and more gruesome, are human heads! They are ghoulish battle honours, the heads of enemy commanders slain in battle during the countless wars waged by Vassagonia. You hurry out of the Vizu-diar and into a long marble corridor, where the walls are inlaid with veins of gold and pearls. It leads to a large hall where palace guards and brightly robed courtiers are walking to and fro, but a colonnade of statues provides all the cover you need to reach a distant staircase unseen. Stealthily, you sprint up the staircase to arrive at a junction where passages head off to the east and west. At the end of each is a door with a symbol engraved into the wall above. The symbol above the east door depicts a mortar and pestle; the symbol above the west door, an open book.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 57,
                content: "If you wish to investigate the east door, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 100,
                content: "If you wish to investigate the west door, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 150
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 150,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png",
        },
        content:
            "The corridor heads north but soon ends at a junction where another passage runs across from east to west. Cautiously, you peer around the corner, but there are no signs of any guards. At the end of the east passage you can see a flight of steps descending out of view; to the west, you see a closed door.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 93,
                content: "If you wish to go east, towards the stairs, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 122,
                content: "If you decide to go west, towards the door, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 151
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 151,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Baga-darooz",
            regionType: "SEWER",
            description: "The sewer of Barrakeesh, a dirty and disgusting place, full with rats and insects. The water is thick with scum, and the glutinous mire is clotted with green and black filth.",
            imageUrl: "images/shadow/regions/baga-darooz.png"
        },
        content:
            "Your keen eye falls upon a narrow fissure in the tunnel wall. The gap is near to the level of the scum and can barely be seen in the darkness. You squeeze inside, steeling yourself as the foul water rises up to your chin. The Sharnazim pass within inches of your hiding place, and you have to fight the urge to vomit as a wave of sewage laps your face. ‘He has taken the south tunnel,’ echoes an angry voice. ‘Quickly—don’t waste your time here!’ It seems an eternity before the Sharnazim retrace their steps and disappear back along the tunnel. With a sigh of relief, you emerge from the fissure, but catch your foot in something embedded in the silt of the tunnel floor and lose your balance.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 94,
                content: "Turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 152
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 152,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Grand Palace",
            regionType: "STONE_BUILDING",
            description: "The biggest building in Barrakeesh. ",
            imageUrl: "images/shadow/regions/chula.png",
        },
        content:
            "You press yourself against the weathered stone and try to avoid looking down at the courtyards and gardens of the palace, hundreds of feet below. You bite your lip and wait for the guards to pass, but they do not pass. It is nearly sunset, and they have come to shut the iron grilles of the palace windows. You hear the creak of dry hinges and the click of bolts—sounds that send a shiver down your spine. You realize that you are now locked out. To your left, the ledge continues around outside of a dome; inside this is the mess hall. If you can only inch your way around the tower, you may be able to find an open window on the other side. Pick a number from the Random Number Table.  If you have the Kai Discipline of Hunting, add 2 to the number you have picked. If you have reached the Kai rank of Savant, you may add another 2.",
        outcomes: [
            {
                outcomeType : "RANDOM",
                targetNr : 5,
                intervall : {
                    min : 0,
                    max : 2,
                },
                content : "If your total score is now 0–2, turn to "
            },
            {
                outcomeType : "RANDOM",
                targetNr : 38,
                intervall : {
                    min : 3,
                    max : 8,
                },
                content : "If your total score is now 3–8, turn to "
            },
            {
                outcomeType : "RANDOM",
                targetNr : 87,
                intervall : {
                    min : 9,
                    max : 13,
                },
                content : "If your total score is now 9-13, turn to "
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 153
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 153,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Habour of Barrakeesh",
            regionType: "HARBOUR",
            description:
                "The harbour of Barrakeesh is deserted save for a handful of citizens clad in black, and the only sound that greets you is the toll of a funeral bell, echoing through the harbour on this day of mourning.",
            imageUrl: "images/shadow/regions/barrakeesh_harbour.png",
        },
        content:
            "Maouk orders his black-clad troops to search the area, threatening them with death if they allow you to escape. You bite your lip and wait for a chance to run. Creeping from one boat to the next, you reach a narrow flight of stone steps. At the top of the steps, beyond a small paved square, lies a maze of crooked alleyways that disappear into the shadows of the Thieves’ Quarter. You are less than twenty feet from safety when a cry echoes across the water: ‘There he is!’ You sprint along the deserted passage and climb a stairway into an open courtyard. The sound of hooves clattering on the cobblestones below urges you onwards. There are three possible exits from the courtyard: a high, nail-studded gate to the left; an alley to your right; and a straight, paved pathway that leads to an arch. You must make a quick decision for Maouk’s men are close at your heels.",
        outcomes: [
            {
                outcomeType : "ABILITY",
                targetNr : 42,
                ability : {
                    abilityType : "TRACKING",
                    description : "This skill enables a Kai Lord to make the correct choice of a path in the wild, to discover the location of a person or object in a town or city and to read the secrets of footprints or tracks."
                },
                content : "If you possess the Kai Discipline of Tracking, turn to "
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 75,
                content:
                    "If you wish to enter the gate, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 117,
                content:
                    "If you wish to enter the alley, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 169,
                content:
                    "If you decide to take the straight pathway through the arch, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 154
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 154,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Barrakeesh",
            regionType: "CITY",
            description:
                "Barrakeesh is the capital city of Vassagonia. It has a habour, a lake and on the outskirts of the magnificent city are some smaller towns such as Chiras and Chula. The citizens of Barrakeesh, unlike the inhabitants of other Vassagonian cities, enjoy an abundant supply of fresh water from the Da River.",
            imageUrl: "images/shadow/regions/barrakeesh.png",
        },
        content:
            "You part the bead curtain that hangs across the doorway and enter the cool interior. The light is poor and the room gloomy, for the windows are obscured by sheaves of herbs and plants. You are studying a curious row of coloured bottles when a woman appears. She has piercing green eyes and her red hair is raised, bound with rings of jadin. Softly, she speaks to you. ‘Welcome, Northlander. I sense you are a warrior—or am I mistaken?’ As you hesitate to answer, she shrugs her shoulders and searches through a pile of parchments stacked on top of a wine casket. She blows away the dust before handing you a yellowed sheet. It is a list of merchandise, written in Sommlending: Potion of Alether (increases COMBAT SKILL by 2 for the duration of 1 combat)—4 Gold Crowns, Potion of Gallowbrush (induces sleep for 1–2 hours per dose)—2 Gold Crowns, Potion of Laumspur (restores 4 ENDURANCE points per dose)—5 Gold Crowns, Vial of Larnuma Oil (restores 2 ENDURANCE points per dose)—3 Gold Crowns, Tincture of Graveweed (causes sickness and loss of 2 ENDURANCE points per dose)—1 Gold Crown, Tincture of Calacena (causes terrifying hallucinations for 1–2 hours per dose)—2 Gold Crowns.You may purchase any of the above and in any quantity you desire; all potions, vials, and tinctures are Backpack Items. You then leave the shop and continue along the street.",
        events: [
            {
                eventType : "ACQUIRE_ITEM_EVENT",
                ranking : 1,
                item : {
                    name : "Potion of Alether",
                    itemType : "POTION",
                    description : "increases COMBAT SKILL by 2 for the duration of 1 combat",
                    weight : "SMALL",
                    imageUrl : "images/flight/items/potion_of_alether.png"
                }
            },
            {
                eventType : "CHANGE_GOLD_AMOUNT_EVENT",
                ranking : 2,
                amount : -4,
            },
            {
                eventType : "ACQUIRE_ITEM_EVENT",
                ranking : 3,
                item : {
                    name : "Potion of Gallowbrush",
                    itemType : "POTION",
                    description : "induces sleep for 1–2 hours per dose",
                    weight : "SMALL",
                    imageUrl : "images/flight/items/potion_of_gallowbrush.png"
                }
            },
            {
                eventType : "CHANGE_GOLD_AMOUNT_EVENT",
                ranking : 4,
                amount : -2
            },
            {
                eventType : "ACQUIRE_ITEM_EVENT",
                ranking : 5,
                item : {
                    name : "Potion of Laumspur",
                    itemType : "POTION",
                    description : "restores 4 ENDURANCE points per dose",
                    weight : "SMALL",
                    imageUrl : "images/flight/items/potion_of_laumspur.png"
                }
            },
            {
                eventType : "CHANGE_GOLD_AMOUNT_EVENT",
                ranking : 6,
                amount : -5
            },
            {
                eventType : "ACQUIRE_ITEM_EVENT",
                ranking : 7,
                item : {
                    name : "Vial of Larnuma Oil",
                    itemType : "UTILITY",
                    description : "restores 2 ENDURANCE points per dose",
                    weight : "SMALL",
                    imageUrl : "images/flight/items/vial_of_larnuma_oil.png"
                }
            },
            {
                eventType : "CHANGE_GOLD_AMOUNT_EVENT",
                ranking : 8,
                amount : -3
            },
            {
                eventType : "ACQUIRE_ITEM_EVENT",
                ranking : 9,
                item : {
                    name : "Tincture of Graveweed",
                    itemType : "UTILITY",
                    description : "causes sickness and loss of 2 ENDURANCE points per dose",
                    weight : "SMALL",
                    imageUrl : "images/flight/items/tincture_of_graveweed.png"
                }
            },
            {
                eventType : "CHANGE_GOLD_AMOUNT_EVENT",
                ranking : 10,
                amount : -1
            },
            {
                eventType : "ACQUIRE_ITEM_EVENT",
                ranking : 11,
                item : {
                    name : "Tincture of Calacena",
                    itemType : "UTILITY",
                    description : "causes terrifying hallucinations for 1–2 hours per dose",
                    weight : "SMALL",
                    imageUrl : "images/flight/items/tincture_of_calacena.png"
                }
            },
            {
                eventType : "CHANGE_GOLD_AMOUNT_EVENT",
                ranking : 12,
                amount : -2
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 179,
                content: "Turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 155
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 155,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Barrakeesh",
            regionType: "CITY",
            description:
                "Barrakeesh is the capital city of Vassagonia. It has a habour, a lake and on the outskirts of the magnificent city are some smaller towns such as Chiras and Chula. The citizens of Barrakeesh, unlike the inhabitants of other Vassagonian cities, enjoy an abundant supply of fresh water from the Da River.",
            imageUrl: "images/shadow/regions/barrakeesh.png",
        },
        content:
            "From the view, you judge that this window is set high up in the south wall of the Grand Palace. Far below you can see the buildings of the capital, in miniature clusters inside the white city wall. To the southeast lies Lake Inrahim, an immense salt-water plain that is completely dry and cracked. To the east, a road stretches across the causeway to the town of Chula, just visible on the horizon. To the southwest lie the barren, sun-scorched Dahir Mountains and the shifting ocean of sand known as the Dry Main. The bars of the window are badly corroded; it would be easy to dislodge them. However, the drop of several hundred feet to the city below means that there is no hope of escape this way. You climb down from the table and hurry along the corridor.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 182,
                content: "Turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 156
         * -- --------------------------------------------------------
         */
        //Outcome needs two abilites
        sectionType: "STORY_SECTION",
        sectionNr: 156,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Grand Palace",
            regionType: "STONE_BUILDING",
            description: "The biggest building in Barrakeesh. ",
            imageUrl: "images/shadow/regions/chula.png",
        },
        content:
            "After concentrating on the lock for several minutes, you realize that it is connected to an alarm. If you turn the lock to the wrong number, the alarm will be triggered, alerting the entire palace guard.",
        outcomes: [
            {
                outcomeType : "ABILITY",
                targetNr : 8,
                ability : {
                    abilityType : "SIXTH_SENSE",
                    description : "This skill may warn a Kai Lord of imminent danger. It may also reveal the true purpose of a stranger or strange object encountered in your adventure."
                },
                content : "If you possess the Kai Disciplines of Mind Over Matter and Sixth Sense, turn to "
            },
            {
                outcomeType : "ABILITY",
                targetNr : 8,
                ability : {
                    abilityType : "MIND_OVER_MATTER",
                    description : "Mastery of this Discipline enables a Kai Lord to move small objects with his powers of concentration."
                },
                content : "If you possess the Kai Disciplines of Mind Over Matter and Sixth Sense, turn to "
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 98,
                content:
                    "If you do not have both of these skills, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 157
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 157,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Barrakeesh",
            regionType: "CITY",
            description:
                "Barrakeesh is the capital city of Vassagonia. It has a habour, a lake and on the outskirts of the magnificent city are some smaller towns such as Chiras and Chula. The citizens of Barrakeesh, unlike the inhabitants of other Vassagonian cities, enjoy an abundant supply of fresh water from the Da River.",
            imageUrl: "images/shadow/regions/barrakeesh.png",
        },
        content:
            "The house smells strongly of burnt incense. You enter a narrow hallway lined with chairs and walk slowly along the central aisle towards a fountain, flanked by a pair of massive orange-red pillars. A man, dressed from head to toe in black, appears from behind the left-hand pillar and walks towards you. Suddenly, you hear Maouk’s men enter the plaza, and cast an anxious glance towards the open door. The man sees you are nervous and silently points to a cellar door.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 16,
                content:
                    "If you wish to hide in the cellar, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 99,
                content:
                    "If you wish to leave the hallway, return to the plaza by turning to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 158
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 158,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Grand Palace",
            regionType: "STONE_BUILDING",
            description: "The biggest building in Barrakeesh. ",
            imageUrl: "images/shadow/regions/chula.png",
        },
        content:
            "You enter a gallery, which houses a beautiful mosaic. Thousands of tiny fragments of pearl and gold shimmer in the light of the evening sun, glancing rainbows of colour across the high marble walls. A group of palace courtiers ambles through the gallery, and you are forced to hide behind a huge pillar. You wait until their footsteps have faded into the distance before emerging into light. All hope of signing a peace treaty has long vanished, and your only concern now is to escape from the Grand Palace and, somehow, return home to Sommerlund as quickly as possible. Hurrying out of the gallery, you follow the passage westwards and soon reach a junction where the passage turns abruptly to the north.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 58,
                content: "Turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 159
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 159,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png",
        },
        content:
            "You batter your way through the door successfully, but having gathered momentum, you cannot stop, and fall headlong down a flight of stairs on the other side. You landed in a heap on the hard marble floor of an antechamber, (you lose 2 ENDURANCE points) barely a few feet away from an armed soldier, who is guarding the doors to the palace armoury. He is startled by your dramatic entrance but quickly regains his senses and attacks. Deduct 2 from your COMBAT SKILL for the first 3 rounds of combat, as you are lying on the ground. You cannot evade combat and must fight the guard to the death.",
        events : [
            {
                eventType : "CHANGE_ENDURANCE_EVENT",
                ranking : 1,
                amount : -2
            },
            {
                eventType : "COMBAT",
                ranking :2,
                creature : {
                    name : "Armoury Guard",
                    combatSkill : 16,
                    endurance : 22,
                    imageUrl : "images/flight/creatures/armoury_guard.png"
                }
            },
            {
                eventType : "TEMPORARY_CHANGE_COMBAT_SKILL_EVENT",
                ranking : 3,
                amount : -2
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 52,
                content: "If you win, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 160
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 160,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Barrakeesh",
            regionType: "CITY",
            description:
                "Barrakeesh is the capital city of Vassagonia. It has a habour, a lake and on the outskirts of the magnificent city are some smaller towns such as Chiras and Chula. The citizens of Barrakeesh, unlike the inhabitants of other Vassagonian cities, enjoy an abundant supply of fresh water from the Da River.",
            imageUrl: "images/shadow/regions/barrakeesh.png",
        },
        content: "Your desire to leave this treacherous city is overcome by your fear of losing your arm. You must get the Oede herb, even though it means you will have to enter the very place you are most anxious to avoid—the Grand Palace. The alley follows a tortuous route through the Mikarum, finally leading you to the ‘Horm-tas-Lallaim’: the Tomb of the Princesses. Beyond the tomb, the Grand Palace rises like a massive white pantheon. You suddenly recall a legend told to you by your Kai masters long ago: ‘The Nemesis of the Black Zakhan’. The Black Zakhan was a brutal tyrant, the cruellest of an evil lineage that ruled over the desert empire long ago. The barbaric excesses of his reign have never been forgotten in the Lastlands. The Grand Palace was built by his army of slaves, prisoners from countries he had conquered in war. The palace became his obsession; he personally oversaw its entire construction and punished the workers personally if there was the slightest delay. He butchered his subjects indiscriminately and in the most terrible fashion. His favourite form of execution was for the victim to be sawn in half from head to foot until the body fell in two pieces. However, it was the mass execution of the slaves who built the Grand Palace that made him infamous. He slaughtered every slave worker so that his enemies could never learn of the secret treasure chambers he had had constructed. Among the slaves were his only daughters, Kebilla and Sousse, who openly opposed their father’s cruelty and tried to prevent the executions. In a blind rage, he ordered that they should be the first to die. It would have been better for the Zakhan, and for Vassagonia, if he himself had died that day. He lived for another two years, but his mind was unhinged by guilt, and he was tortured by self-loathing and despair. In the Grand Palace, the silence of the night was frequently broken by the Zakhan’s moans and cries, as he wandered from room to room looking for his daughters. When he died, he was laid beside them, here, in the Tomb of the Princesses. From where you stand, you can see two entrances to the Grand Palace; a spike-topped gate in the north wall, and an arch in the west wall, blocked by an iron portcullis. The palace is usually heavily guarded, but there are very few guards today; most are searching for you in the city.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 126,
                content: "If you wish to approach the north gate, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 79,
                content: "If you wish to approach the west arch, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 49,
                content: "If you wish to search for some other way of entering the Grand Palace, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 161
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 161,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Baga-darooz",
            regionType: "SEWER",
            description: "The sewer of Barrakeesh, a dirty and disgusting place, full with rats and insects. The water is thick with scum, and the glutinous mire is clotted with green and black filth. Restore 5 ENDURANCE points",
            imageUrl: "images/shadow/regions/baga-darooz.png",
        },
        content:
            "You are very lucky that your enemy was only trying to knock you unconscious",
        events: [
            {
                eventType : "CHANGE_ENDURANCE_EVENT",
                ranking : 1,
                amount : 5
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 69,
                content: "Turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 162
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 162,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png",
        },
        content:
            "You pull yourself into the left chimney and pause to catch your breath. The scalding steam hurts your lungs, and every move becomes a tremendous strain, for your hands and feet are now swollen and sore. Lose 1 ENDURANCE point before continuing your climb. You hook your fingers into a jagged crack in the wall of the sweltering chimney and try to draw yourself upwards. Suddenly, a wave of fear engulfs you—something is crawling up your forearm. You have disturbed a nest of loathsome arachnids. These creatures are immune to Mindblast. If you have lost the use of one arm, you cannot fight these biting horrors, for you will inevitably slip and fall into the tar-sorkh. Pick a number from the Random Number Table. This represents the number of ENDURANCE points that you lose (0 = 10) as you climb past the Steamspiders’ nest.",
        events : [
            {
                eventType : "COMBAT",
                ranking : 1,
                creature : {
                    name : "Steamspiders",
                    combatSkill : 10,
                    endurance : 35,
                    imageUrl : "images/flight/creatures/.png"
                }
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 114,
                content: "If you are still alive after climbing past the nest, or if you fight the Steamspiders and win, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 163
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 163,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Barrakeesh",
            regionType: "CITY",
            description:
                "Barrakeesh is the capital city of Vassagonia. It has a habour, a lake and on the outskirts of the magnificent city are some smaller towns such as Chiras and Chula. The citizens of Barrakeesh, unlike the inhabitants of other Vassagonian cities, enjoy an abundant supply of fresh water from the Da River.",
            imageUrl: "images/shadow/regions/barrakeesh.png",
        },
        content:
            "While you wait for the return of the guard, you are taunted and ridiculed by the other bully. He describes with relish all the horrible tortures that await you and is greatly disappointed when the other guard returns empty-handed. ‘The Zakhan doesn’t want our northern friend damaged. He’s got something special planned for him this evening,’ he snarls. Wicked grimaces spread across their faces as they turn to leave the cell. Both now have their backs towards you.",
        outcomes: [
            {
                outcomeType : "ABILITY",
                targetNr : 144,
                ability : {
                    abilityType : "SIXTH_SENSE",
                    description : "This skill may warn a Kai Lord of imminent danger. It may also reveal the true purpose of a stranger or strange object encountered in your adventure."
                },
                content : "If you have the Kai Discipline of Sixth Sense, turn to "
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 174,
                content: "If you wish to attack the guards, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 18,
                content: "If you wish to remain as you are, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 164
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 164,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Baga-darooz",
            regionType: "SEWER",
            description: "The sewer of Barrakeesh, a dirty and disgusting place, full with rats and insects. The water is thick with scum, and the glutinous mire is clotted with green and black filth.",
            imageUrl: "images/shadow/regions/baga-darooz.png",
        },
        content:
            "The water is becoming thicker, and the stench of the sewer gas increasingly more vile and nauseating. Suddenly the air becomes choked with thousands of tiny flies, and every time you gasp for breath you feel the thick fur of pulped bodies in your throat. The black specks build up like paste around your eyes, mouth, and nostrils, and the sharp tangy taste in your mouth makes you retch. Lose 1 ENDURANCE point. As if in answer to your prayers, an iron ladder appears from out of the gloom. It is fixed to the tunnel wall and leads up to a circular stone trapdoor in the ceiling.",
        events: [
            {
                eventType : "CHANGE_ENDURANCE_EVENT",
                ranking : 1,
                amount : -1,
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 31,
                content: "If you wish to climb the ladder, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 139,
                content: "If you wish to ignore the ladder and press on along in the insect-choked tunnel, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 165
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 165,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Barrakeesh",
            regionType: "CITY",
            description:
                "Barrakeesh is the capital city of Vassagonia. It has a habour, a lake and on the outskirts of the magnificent city are some smaller towns such as Chiras and Chula. The citizens of Barrakeesh, unlike the inhabitants of other Vassagonian cities, enjoy an abundant supply of fresh water from the Da River.",
            imageUrl: "images/shadow/regions/barrakeesh.png",
        },
        content:
            "The guard clutches at his wounds and drops lifeless to the ground. You see that the other man is recovering from your blow and is clawing at the cell door to try to pull himself to his feet.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 78,
                content: "If you wish to attack this guard, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 199,
                content: "If you wish to overpower him and capture him alive, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 166
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 166,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Baga-darooz",
            regionType: "SEWER",
            description: "The sewer of Barrakeesh, a dirty and disgusting place, full with rats and insects. The water is thick with scum, and the glutinous mire is clotted with green and black filth.",
            imageUrl: "images/shadow/regions/baga-darooz.png",
        },
        content:
            "You knead your numb arm in an effort to massage some life back into it, but it is useless; the muscles are limp and nerveless. The only consolation is that it is not your weapon arm, but as long as you are suffering from this disease, you cannot use a shield of any sort. Deduct 3 points from your COMBAT SKILL—the lost points may be recovered if ever you should regain the use of your arm. You turn your attention to your surroundings in an effort to find some way of escape from the nightmarish sewer. The passage ahead winds and curves like a giant snake, and the foul air that drifts towards you is hot and humid. You have shaken off your pursuers, but you now have the problem of your arm to solve.",
        events: [
            {
                eventType : "TEMPORARY_CHANGE_COMBAT_SKILL_EVENT",
                ranking : 1,
                amount : -3,
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 55,
                content: "Turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 167
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 167,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Grand Palace",
            regionType: "STONE_BUILDING",
            description: "The biggest building in Barrakeesh. ",
            imageUrl: "images/shadow/regions/chula.png",
        },
        content:
            "You pass through the door and hurry into the welcoming cool of the room beyond. You notice a large drawbar on this side of the door and instinctively lock it to delay any would-be pursuers. The room is empty, save for some clothing draped over the back of a wrought-iron chair. Judging by the size and cut of the material, the clothes must belong to the armourer. You can hear noises echoing from a passage to the east; the voices of hungry guards and the distinctive clatter of plates. You climb a wide stairway and follow a network of passages towards the west. They are lined with alcoves that contain marble busts and beautiful tapestries, each depicting a past Zakhan or a long-forgotten battle.",
        outcomes: [
            {
                outcomeType: "ABILITY",
                targetNr: 105,
                ability: {
                    abilityType: "SIXTH_SENSE",
                    description:
                        "This skill may warn a Kai Lord of imminent danger. It may also reveal the true purpose of a stranger or strange object encountered in your adventure.",
                },
                content:
                    "If you have the Kai Discipline of Sixth Sense, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 158,
                content: "If you do not possess this skill, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 168
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 168,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png",
        },
        content:
            "With a tiger-like bound you are among the startled guards. The blowpipe firer raises his weapon, but a well-aimed kick to the forehead counters his move. He somersaults backwards, cracking his head against the wall with a sickening thud. A trident flashes towards your ribs; you sidestep and grab the haft with your free hand, pulling the guard off balance. He stumbles forward and falls flat on his face. You turn just in time to face the third guard—his trident is poised to stab you.",
        events: [
            {
                eventType : "COMBAT",
                ranking : 1,
                creature : {
                    name : "Vestibule Guard",
                    combatSkill : 15,
                    endurance : 23,
                    imageUrl : "images/flight/creatures/vestibule_guard.png"
                }
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 101,
                content: "If you win the combat and the fight lasts 3 rounds or less, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 46,
                content: "If you win and the fight lasts longer than 3 rounds, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 169
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 169,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png",
        },
        content:
            "You enter a wide street where vendors compete for space for their stalls beneath the overhanging balconies. The market is crowded with people; they each wear a black sash as a mark of respect to their dead Zakhan, but here, unlike in most of Barrakeesh, business continues as normal. You pass a stall festooned with black sashes, each costing 2 Gold Crowns. If you wish to buy a sash, pay the vendor and mark it on your Action Chart as a Special Item (which you wear over your tunic). You hurry away from the stall and dodge into a narrow passage lined with eating houses and small taverns, where the smell of food is mingled with the odour of stale wine, and the air is alive with chatter and gossip. Your attention is drawn to a notice freshly pasted to a tavern wall. The bold headline reads: THE ZAKHAN IS DEAD—LONG LIVE THE ZAKHAN",
            events: [
                {
                    eventType : "ACQUIRE_ITEM_EVENT",
                    ranking : 1,
                    item : {
                        name : "Black sashe",
                        itemType : "MAGICAL_ITEM",
                        description : "Black sashe",
                        weight : "SMALL",
                        imageUrl : "images/flight/items/black_sashe.png"
                    }
                },
                {
                    eventType : "CHANGE_GOLD_AMOUNT_EVENT",
                    ranking : 2,
                    amount : -2
                },
            ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 88,
                content: "If you wish to stop to read the poster, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 113,
                content: "If you wish to continue along the passage, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 170
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 170,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Barrakeesh",
            regionType: "CITY",
            description:
                "Barrakeesh is the capital city of Vassagonia. It has a habour, a lake and on the outskirts of the magnificent city are some smaller towns such as Chiras and Chula. The citizens of Barrakeesh, unlike the inhabitants of other Vassagonian cities, enjoy an abundant supply of fresh water from the Da River.",
            imageUrl: "images/shadow/regions/barrakeesh.png",
        },
        content:
            "The combined mastery of these Kai Disciplines enables you to slip past the guards undetected. By the time they resume their correct guard positions, you have safely made your way into the palace gardens.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 137,
                content: "Turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 171
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 171,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Grand Palace",
            regionType: "STONE_BUILDING",
            description: "The biggest building in Barrakeesh. ",
            imageUrl: "images/shadow/regions/chula.png",
        },
        content:
            "A panel in the alcove slides aside to reveal a secret, dark, and very narrow passage. A pair of footprints can clearly be seen in the dust-covered floor, leading into the darkness.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 148,
                content: "If you wish to enter the secret passage, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 158,
                content: "If you decide to avoid the passage, close the secret panel and continue along the corridor and turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 172
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 172,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Barrakeesh",
            regionType: "CITY",
            description:
                "Barrakeesh is the capital city of Vassagonia. It has a habour, a lake and on the outskirts of the magnificent city are some smaller towns such as Chiras and Chula. The citizens of Barrakeesh, unlike the inhabitants of other Vassagonian cities, enjoy an abundant supply of fresh water from the Da River.",
            imageUrl: "images/shadow/regions/barrakeesh.png",
        },
        content:
            "‘Come in, stranger. Welcome to my humble tavern,’ says the plump landlady of the eating house. ‘We have wine and food and rooms a-plenty.’ At this moment, you hear Maouk’s men enter the plaza and cast an anxious glance towards the open door. The landlady sees that you are nervous; she points to the cellar stairs and says in a hushed voice: ‘Do not worry—we share your fear of the new Zakhan. Quickly, you must hide.’ There is no time to hesitate. Maouk’s warriors are already approaching the tavern.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 16,
                content: "Turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 173
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 173,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Barrakeesh",
            regionType: "CITY",
            description:
                "Barrakeesh is the capital city of Vassagonia. It has a habour, a lake and on the outskirts of the magnificent city are some smaller towns such as Chiras and Chula. The citizens of Barrakeesh, unlike the inhabitants of other Vassagonian cities, enjoy an abundant supply of fresh water from the Da River.",
            imageUrl: "images/shadow/regions/barrakeesh.png",
        },
        content:
            "Judging by the direction of the sluggish flow, the right channel appears to head off to the north. The vast tide of sewage and garbage from the Baga-darooz is swept out towards the coast, until it emerges at Chiras, a village northwest of the capital. There it makes life both difficult and unpleasant for the poor local fishermen (especially during the summer months). If you take the north channel, you should eventually reach the coast. The left channel heads south, running below the very heart of the capital. In the maze of tunnels that feed into the Baga-darooz, you should be able to find at least one exit to the streets above. Straight ahead, the channel leads off to the west. It is by far the least fetid and contaminated of the three. During the voyage, you remember ‘The Stink’ telling you about the Grand Madani: a great aqueduct over forty miles long, which channels freshwater from the River Da into the city. As a result, the citizens of Barrakeesh, unlike the inhabitants of other Vassagonian cities, enjoy a lavish supply of fresh water. The west channel will lead to that water source.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 145,
                content: "If you wish to take the north channel, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 96,
                content: "If you wish to take the south channel, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 13,
                content: "If you wish to take the west channel, turn to 1",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 174
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 174,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png",
        },
        content:
            "You spring forward and strike the taller of the guards, slamming your clenched fist into the nape of his neck. He groans and sinks to his knees, his sword clattering to the ground close by your feet.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 4,
                content: "If you wish to pick up the sword, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 91,
                content: "If you wish to ignore the sword and attack the second guard with your bare hands, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 175
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 175,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png",
        },
        content:
            "Before you find a suitable hiding place, three Sharnazim wade into view. ‘Leave him to me, you fools!’ booms a voice, and the warriors make way for Maouk, who appears from the shadows—a dart held high in his hand. He hisses a curse and flings the missile at your chest.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 25,
                content: "Turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 176
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 176,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Habour of Barrakeesh",
            regionType: "HARBOUR",
            description:
                "The harbour of Barrakeesh is deserted save for a handful of citizens clad in black, and the only sound that greets you is the toll of a funeral bell, echoing through the harbour on this day of mourning.",
            imageUrl: "images/shadow/regions/barrakeesh_harbour.png",
        },
        content:
            "You are stripped of your Backpack, your Weapons, your Gold Crowns, and all of your Special Items. (Make all the necessary adjustments to your Action Chart, but note your lost possessions elsewhere in case you find them again later.) Your hands are tied behind your back and you are pushed head-first into the waiting carriage. ‘Back to the palace!’ commands Maouk as he climbs aboard and slams the door. ‘The Zakhan awaits his prize.’ You fight to free the cords that bind you, but Maouk is quick to see the danger. He grabs your arm and forces a dart into your skin. As sleep engulfs your senses, you hear Maouk’s wicked laughter fading into the silence. Make a necessary adjustments to your Action Chart, and list all the items that you have had confiscated on a separate piece of paper, for reference in case you should discover them later in your adventure.",
        events : [
            {
                eventType : "DROP_ALL_ITEMS_EVENT",
                ranking : 1
            }
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 69,
                content: "Turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 177
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 177,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Baga-darooz",
            regionType: "SEWER",
            description: "The sewer of Barrakeesh, a dirty and disgusting place, full with rats and insects. The water is thick with scum, and the glutinous mire is clotted with green and black filth.",
            imageUrl: "images/shadow/regions/baga-darooz.png",
        },
        content:
            "As you strike the Kwaraz a killing blow, three Sharnazim wade out of the dark sewer. They have discarded their black robes and they are naked to the waist. Their muscular chests are decorated with a large, blue tattoo of an eagle’s claw. As they struggle out of the water, they fix you with a malicious stare and unsheathe razor-sharp scimitars.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 60,
                content: "If you wish to attack the Sharnazim, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 43,
                content: "If you wish to evade them by climbing the narrow stone stairs, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 178
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 178,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Barrakeesh",
            regionType: "CITY",
            description:
                "Barrakeesh is the capital city of Vassagonia. It has a habour, a lake and on the outskirts of the magnificent city are some smaller towns such as Chiras and Chula. The citizens of Barrakeesh, unlike the inhabitants of other Vassagonian cities, enjoy an abundant supply of fresh water from the Da River.",
            imageUrl: "images/shadow/regions/barrakeesh.png",
        },
        content:
            "You are halfway down the stairs when the guard realizes what you are doing. He leaps to his feet and unsheathes his sword; you cannot evade him now and you must fight to the death.",
        events: [
            {
                eventType : "COMBAT",
                ranking : 1,
                creature : {
                    name : "Armoury Guard",
                    combatSkill : 16,
                    endurance : 22,
                    imageUrl : "images/flight/creatures/armoury_guard.png"
                }
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 52,
                content: "If you win the combat, you may search his body and turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 140,
                content: "If you would rather ignore the body and enter the armoury, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 179
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 179,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Barrakeesh",
            regionType: "CITY",
            description:
                "Barrakeesh is the capital city of Vassagonia. It has a habour, a lake and on the outskirts of the magnificent city are some smaller towns such as Chiras and Chula. The citizens of Barrakeesh, unlike the inhabitants of other Vassagonian cities, enjoy an abundant supply of fresh water from the Da River.",
            imageUrl: "images/shadow/regions/barrakeesh.png",
        },
        content: "All manner of strange and exotic plants, oils, potions, and medicaments fill the shop windows, and the smell of the herb-filled street is intoxicating. There is a sudden bustle of activity at the end of the street. The crowd disperses, melting into the shops as if into thin air. A man stands before you, his face is streaked with sweat, his turquoise robes torn and heavily stained. It is Maouk—he has survived the Baga-darooz. ‘Were it not for the Zakhan, I would kill you here and now,’ hisses Maouk, his face a mask of hate. ‘But I will not lose my head for a cowardly Sommlending.’ His insult enrages you, but you control your anger. You sense he is not alone; eyes are watching you at every window.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 197,
                content:
                    "If you wish to attack Maouk, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 92,
                content: "If you wish to turn and run back along the street, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 180
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 180,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png",
        },
        content: "As your enemy collapses at your feet, you notice that the other guard has recovered from your punch. He pulls a dagger from his boot and draws back his hand to throw. If you do not possess this skill, pick a number from the Random Number Table. If you have the Kai Discipline of Sixth Sense or Hunting, add 3 to the number you have picked.",
        outcomes: [
            {
                outcomeType : "ABILITY",
                targetNr : 45,
                ability : {
                    abilityType : "MINDBLAST",
                    description : "This enables a Kai Lord to attack an enemy using the force of his mind. It can be used at the same time as normal combat weapons and adds two extra points to your COMBAT SKILL. Not all the creatures encountered on this adventure will be harmed by Mindblast. You will be told if a creature is immune.",
                },
                content : "If you possess the Kai Discipline of Mindblast, turn to "
            },
            {
                outcomeType : "RANDOM",
                targetNr : 120,
                intervall : {
                    min : 0,
                    max : 5,
                },
                content : "If your total is now 0–5, turn to "
            },
            {
                outcomeType : "RANDOM",
                targetNr : 193,
                intervall : {
                    min : 6,
                    max : 12,
                },
                content : "If your total is now 6–12, turn to "
            },  
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 181
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 181,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Grand Palace",
            regionType: "STONE_BUILDING",
            description: "The biggest building in Barrakeesh. ",
            imageUrl: "images/shadow/regions/chula.png",
        },
        content:
            "You root through all the drawers and cupboards of the workbench, smashing locks when they refuse to open, only to be disappointed. These drawers and cupboards do not contain your missing equipment. All hope of signing a peace treaty with the new Zakhan has vanished; your only concern now is to find your equipment, escape from the Grand Palace, and somehow return home to Sommerlund as quickly as possible. You pull aside a latticed partition and enter a small antechamber. Narrow stones steps lead up to an open door in the north wall, beside which stands a wooden chest.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 14,
                content: "If you wish to climb the steps and enter the door, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 97,
                content: "If you wish to investigate the wooden chest, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 182
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 182,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Barrakeesh",
            regionType: "CITY",
            description:
                "Barrakeesh is the capital city of Vassagonia. It has a habour, a lake and on the outskirts of the magnificent city are some smaller towns such as Chiras and Chula. The citizens of Barrakeesh, unlike the inhabitants of other Vassagonian cities, enjoy an abundant supply of fresh water from the Da River.",
            imageUrl: "images/shadow/regions/barrakeesh.png",
        },
        content:
            "You arrive at a high-vaulted chamber with a large, nail-studded door set into the south wall. A rack standing near to the door holds a Spear and a Broadsword. You may take either or both of these if you wish. To the north, beneath a beautifully decorated horseshoe arch, is another passage that leads out of the chamber.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 132,
                content: "If you wish to enter the passage, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 115,
                content: "If you wish to listen at the door, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 183
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 183,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Barrakeesh",
            regionType: "CITY",
            description:
                "Barrakeesh is the capital city of Vassagonia. It has a habour, a lake and on the outskirts of the magnificent city are some smaller towns such as Chiras and Chula. The citizens of Barrakeesh, unlike the inhabitants of other Vassagonian cities, enjoy an abundant supply of fresh water from the Da River.",
            imageUrl: "images/shadow/regions/barrakeesh.png",
        },
        content:
            "The warrior’s head suddenly emerges from the sewer hole. He lashes at your legs, tearing a nasty gash in your calf. You lose 2 ENDURANCE points. In anger and pain, you raise your foot and stamp on the man’s head with all your strength. He screams and falls back into the sewer, and you hear a loud, resounding splash. You replace the stone lid and drag a heavy barrel across it before making your way through the maze of city streets. All hope of signing a peace treaty with the new Zakhan has vanished; your only concern now is to escape from Barrakeesh and, somehow, return to Sommerlund as quickly as possible. Eventually you reach a busy market square. Your eye is caught by a sign hanging above the side entrance to large building: BARRAKEESH PUBLIC BATHS.By this time, the smell of your clothes is making you feel quite ill. You have no hesitation in opening the door and slipping inside.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 183,
                content: "If you accept, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 184
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 184,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Habour of Barrakeesh",
            regionType: "HARBOUR",
            description:
                "The harbour of Barrakeesh is deserted save for a handful of citizens clad in black, and the only sound that greets you is the toll of a funeral bell, echoing through the harbour on this day of mourning.",
            imageUrl: "images/shadow/regions/barrakeesh_harbour.png",
        },
        content:
            "As you stare out across the harbour, you notice a large, white-domed warehouse near to the water’s edge. A platform on the upper floor overhangs a merchant dhow moored at the quay below. On this platform are several earthenware tuns: huge spice containers destined for the trading emporia of Ragadorn. You focus your attention on one of these tuns and concentrate all your Kai skill into making it move. Sweat pours down your face from the strain, but you soon hear a distant crash that confirms your success. The tun has fallen and shattered on the deck of the dhow.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 153,
                content: "Turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 185
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 185,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png",
        },
        content:
            "The footsteps grow louder and then suddenly stop. You hear whispering and Maouk slowly appears from the shadows, his henchmen at his heels. ‘Caught like a wolf in the trap,’ he sniggers, a dart held high in his sinewy fist. He hisses a curse and flings the missile at your chest.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 25,
                content: "Turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 186
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 186,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png",
        },
        content:
            "Using your Kai skill to disguise your Sommlending accent, you call out to the guard. ‘Quick! We need your help—the Northlander is escaping!’ Immediately, the guard leaps to his feet and charges up the stairs towards the door. You wait until he reaches the top step before you attack—one kick to the knee sends him tumbling backwards into the chamber, where he falls in a heap at the foot of the stairs. You enter the chamber, poised to strike again should the guard recover and attack. However, this time your caution is unnecessary; the guard is dead, his neck was broken in the fall.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 52,
                content: "If you wish to search his body, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 140,
                content: "If you wish to ignore the body and enter the armoury, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 187
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 187,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Baga-darooz",
            regionType: "SEWER",
            description: "The sewer of Barrakeesh, a dirty and disgusting place, full with rats and insects. The water is thick with scum, and the glutinous mire is clotted with green and black filth.",
            imageUrl: "images/shadow/regions/baga-darooz.png",
        },
        content:
            "You recognize the creature; it is a Kwaraz, a giant, creeping reptile. Kwaraz are native to the Maakenmire swamp, hundreds of miles to the west of Vassagonia, but they thrive in any hot, damp, and fetid environment, and it strikes you that the Baga-darooz sewer is an ideal breeding ground for these deadly beasts. The Kwaraz moves along the ceiling, gripping the stone with its long, curved claws—its oval eyes opening wider and wider. Kwaraz are very susceptible to psychic power. By using your Kai Discipline of Animal Kinship, you persuade it that you are not at all appetizing, and it soon loses interest. You watch with a mixture of fear and fascination as the huge reptile disappears along the tunnel. Suddenly, a fearful scream bursts out of the darkness; Maouk has lost one of his men. A shiver runs down your spine, but your instincts tell you to press on while you have the advantage.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 17,
                content: "Turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 188
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 188,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png",
        },
        content:
            "The tavern is crowded with people who are seated at a long, stone counter decorated with fragments of coloured marble. Large earthenware jars, full of spicy foods, are set into the counter, and serving girls are busy attending to the hungry customers.",
        outcomes: [
            {
                outcomeType : "ITEM",
                targetNr: 172,
                item : {
                    code : "BLACK_SASH",
                    name : "Black Sash",
                    description : "Black Sash",
                    imageUrl : "images/flight/items/black_sash.png"
                },
                content : "If you are wearing a Black Sash, turn to "
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 71,
                content: "If you do not possess a Black Sash, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 189
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 189,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Grand Palace",
            regionType: "STONE_BUILDING",
            description: "The biggest building in Barrakeesh. ",
            imageUrl: "images/shadow/regions/chula.png",
        },
        content:
            "The courier screams as he falls but is dead before his head hits the cobblestones. You waste little time dragging his body into the shadows. You don his loose robe and raise the hood, concealing your tunic and your face. In the pocket of the robe you find a scroll: the pass needed to enter the Grand Palace. The dead courier’s horse has bolted and fled, but your appearance at the gate on foot does not seem to arouse any suspicion. The guards inspect the scroll with bored indifference and allow you to pass through the gate into the palace gardens beyond.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 137,
                content: "Turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 190
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 190,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png",
        },
        content:
            "You have barely taken a dozen steps before you are seen. The giant armourer raises a massive hammer and strides forward, a bloodthirsty snarl escaping from between his clenched teeth. You prepare to defend yourself, but you are momentarily stunned when you see that the hammer is part of his right arm: it is, in fact, an enormous steel fist. The armourer bellows a war-cry and you react just in time. The hammer tears a chunk of stone from the wall, less than an inch above your scalp.",
        events: [
            {
                eventType: "COMBAT",
                ranking: 1,
                creature: {
                    name: "Hammerfist the Armourer",
                    combatSkill: 18,
                    endurance: 30,
                    imageUrl: "images/shadow/creatures/hammerfist_the_armourer.png",
                },
            },
            {
                eventType : "TEMPORARY_CHANGE_COMBAT_SKILL_EVENT",
                ranking : 2,
                amount : -2,
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 111,
                content: "If you win the combat, turn to ",
            }
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 191
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 191,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png",
        },
        content: "You manage to inch your way along the row of oars until you reach the ship’s rail, where eager hands catch hold of your cloak and pull you to safety. Maouk’s voice booms out across water. ‘Surrender the Kai Lord to me. The Zakhan commands it. Your lives and the lives of all your kin will be forfeit if you disobey this order!’ The crew stare at each other in sorrow and dismay—they know that Maouk’s words are no idle threat. You cannot expect these men to sacrifice their families for you, so you must quickly decide on an alternative plan.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 176,
                content: "If you decide to surrender to Maouk, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 142,
                content: "If you wish to dive overboard and attempt an escape, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 192
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 192,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png",
        },
        content:
            "The sweltering heat is overwhelming. Three times you nearly slip and fall and are saved only by your quick wits and natural survival instincts from a gruesome end in the tar-sorkh. You manage to climb twenty feet of the chimney, but the price is high. Your fingers and knees are skinned and bleeding, and your legs ache with fatigue. Lose 2 ENDURANCE points.",
        events: [
            {
                eventType : "CHANGE_ENDURANCE_EVENT",
                ranking : 1,
                amount : -2
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 114,
                content: "Turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 193
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 193,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Grand Palace",
            regionType: "STONE_BUILDING",
            description: "The biggest building in Barrakeesh. ",
            imageUrl: "images/shadow/regions/chula.png",
        },
        content:
            "You jump to one side as the dagger whistles towards you, skimming barely an inch from your throat. The guard stares in open-mouthed disbelief. He is now unarmed.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 78,
                content: "If you wish to attack the guard, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 199,
                content: "If you wish to overpower him and capture him alive, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 194
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 194,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Grand Palace",
            regionType: "STONE_BUILDING",
            description: "The biggest building in Barrakeesh. ",
            imageUrl: "images/shadow/regions/chula.png",
        },
        content:
            "The Yas is a constrictor: it kills its prey by crushing them to death with the coils of its powerful body. Its sleepy eyes have now opened and the red-rimmed slit pupils fix you with a mesmerizing stare. You suddenly realize that the Yas is trying to hypnotize you. Unless you have the Kai Discipline of Mindshield, deduct 3 points from your COMBAT SKILL for the duration of this combat.",
        events :  [
            {
                eventType : "TEMPORARY_CHANGE_COMBAT_SKILL_EVENT",
                ranking : 1,
                amount : 3
            }, {
                eventType : "COMBAT",
                ranking : 2,
                creature : {
                    name : "Yas",
                    combatSkill : 14,
                    endurance : 28,
                    imageUrl : "images/flight/creatures/yas.png"
                }
            }
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 35,
                content: "If you win the combat, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 195
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 195,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Habour of Barrakeesh",
            regionType: "HARBOUR",
            description:
                "The harbour of Barrakeesh is deserted save for a handful of citizens clad in black, and the only sound that greets you is the toll of a funeral bell, echoing through the harbour on this day of mourning.",
            imageUrl: "images/shadow/regions/barrakeesh_harbour.png",
        },
        content:
            "A forge has been constructed in the centre of a massive circular chamber, its funnel-like chimney stretching up to the roof. The heat had become unbearable long ago, but now you feel as if you have walked straight into a raging furnace. Two men, naked except for small loin-cloths, work the bellows that feed the forge. Sweat pours from their bodies, and they frequently stop to gulp ladlefuls of water from a trough set in the stone floor. An armourer hammers a strip of red-hot iron at an anvil close to the flames. He is massive; his huge, muscled shoulders and powerful chest are as wide as the other two men put together. The bellows men stop work and leave the chamber; one by the door in the north wall, the other by the door in the west wall. The big man continues to hammer at the anvil.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 11,
                content: "If you wish to follow the man who left by the north door, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 146,
                content: "If you wish to follow the man who left by the west door, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 190,
                content: "If you wish to attack the armourer working at the anvil, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 30,
                content: "If you wish to leave the chamber and retrace your steps along the corridor to take the other passage, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 196
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 196,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png",
        },
        content:
            "You notice that a large table dominates the room; it is set with wine and meat, and freshly-baked loaves of bread.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 61,
                content: "If you wish to eat some of this mouth-watering food, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 109,
                content: "If you wish to leave the room by the window, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 197
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 197,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Barrakeesh",
            regionType: "CITY",
            description:
                "Barrakeesh is the capital city of Vassagonia. It has a habour, a lake and on the outskirts of the magnificent city are some smaller towns such as Chiras and Chula. The citizens of Barrakeesh, unlike the inhabitants of other Vassagonian cities, enjoy an abundant supply of fresh water from the Da River.",
            imageUrl: "images/shadow/regions/barrakeesh.png",
        },
        content:
            "Maouk pulls his hand from his robe, a dart held tightly in his sinewy fist. He hisses a curse and flings the missile at your chest. You gasp with shock as the missile strikes home—you are too close to avoid being hit.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 25,
                content: "Turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 198
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 198,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png",
        },
        content:
            "As the officer’s body slumps lifelessly across the shattered cellar door, the Sharnazim back away and step aside. Maouk himself appears in the doorway, a dart held high in his hand. ‘I have you now!’ he hisses, and flings the missile at your chest. Pick a number from the Random Number Table. If you have the Kai Discipline of Hunting, add 3 to the number you have picked.",
        outcomes: [
            {
                outcomeType : "RANDOM",
                targetNr : 25,
                intervall : {
                    min : 0,
                    max : 6,
                },
                content : "If your total is now 0–6, turn to "
            },
            {
                outcomeType : "RANDOM",
                targetNr : 141,
                intervall : {
                    min : 7,
                    max : 12,
                },
                content : "If your total is now 7–9, turn to "
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 199
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 199,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png",
        },
        content:
            "You grasp the frightened guard in a secure head-lock and threaten to break his neck if he does not answer your questions. He immediately promises to tell you everything he knows. He says that the new Zakhan fears that you are an assassin, sent by his enemies in the west. He claims to hate the new Zakhan himself. He is only a simple gaoler, he says, and knows nothing more.",
        outcomes: [
            {
                outcomeType : "ABILITY",
                targetNr : 39,
                ability : {
                    abilityType : "SIXTH_SENSE",
                    description : "This skill may warn a Kai Lord of imminent danger. It may also reveal the true purpose of a stranger or strange object encountered in your adventure."
                },
                content : "If you have the Kai Discipline of Sixth Sense, turn to "
            },
            {
                outcomeType : "DEFAULT",
                targetNr : 9,
                content : "If you do not possess this skill, turn to "
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 200
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 200,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Grand Palace",
            regionType: "STONE_BUILDING",
            description: "The biggest building in Barrakeesh. ",
            imageUrl: "images/shadow/regions/chula.png",
        },
        content:
            "Upon a raised platform, carpeted with scarlet fur, sits the Vassagonian Emperor, Zakhan Kimah. He is robed in gold but devoid of all ornamentation. In his hand is an orb of black metal, and in his eye an ice-cold cruelty that chills your spine. The Zakhan is a man of awesome countenance, but he pales in the shadow of his companion. Before him stands the cause of your terror. A helm as black as death itself hides the face, but the stench of decay and a hideous sepulchral voice betray the identity. ‘Give me Lone Wolf!’ It is the fell voice of a mortal enemy—a Darklord of Helgedad. As the Zakhan rises to his feet, you notice a flicker of doubt, or perhaps of fear, dim his cruel gaze, but he is quick to mask it. ‘He will be brought to you at sunset in exchange for the Orb of Death. It is agreed.’ ‘You have the Orb,’ echoes the chilling voice. ‘Give me Lone Wolf!’ The Zakhan hides his fear well, but time is not on his side. The game of bluff he is playing is deadly. However, the fact that he has not yet been discovered is evidence of his powerful will, for you sense the Darklord is persistently clawing and probing at his mind. ‘You will get your Northlander, Lord Haakon,’ says the Zakhan, his voice curt with anger, ‘when you tell me why your servants defile the Tomb of the Majhan. You claim to have no need for gold and jewels—why then do you plunder the graves of our ancestors?’ A deathly quiet fills the hall; only the unnatural hiss of the Darklord’s breath disturbs the silence. ‘This land, this insignificant speck of sand, harbours two small thorns that prick our skin. We seek to remove them both—forever. The fledgling Kai, Lone Wolf, is the thorn that denies us Sommerlund. The Tomb of the Majhan hides the other thorn that threatens us—the accursed Book of the Magnakai.’ Your heart pounds as the words echo in your head. The Book of the Magnakai! Suddenly, the reason why you have been enticed into a deadly trap becomes clear, and the sinister truth is revealed. The Book of the Magnakai is one of the oldest legends of Sommerlund. With the wisdom of the Magnakai, Sun Eagle, the first Kai Grand Master, instilled the disciplines into the warriors of the House of Ulnar, the bloodline of your king, that were to save your land from devastation at the hands of the Darklords. The Book of the Magnakai was lost hundreds of years ago, but its wisdom was kept alive, handed down through generations of Sommlending warriors so that they could share the strength to resist their eternal enemies, the Darklords of Helgedad. If the Darklords discover and destroy the Book of the Magnakai, the secrets will be lost forever, and when you die, the Kai will become extinct. However, if you discover the Book of the Magnakai first and deny the Darklords their prize, all the wisdom of the Magnakai will be revealed to you. Through its wisdom you will become strong, strong enough to reach the ultimate achievement for a Sommlending warrior—to become a Kai Grand Master. However, the peril and the glory of the quest that lies ahead are distracting you from more immediate danger. To discover this danger and to begin the quest for the Book of the Magnakai, turn to Part Two of Shadow on the Sand.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 201,
                content: "Begin your adventure at ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 201
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 201,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Grand Palace",
            regionType: "STONE_BUILDING",
            description: "The biggest building in Barrakeesh. ",
            imageUrl: "images/shadow/regions/chula.png",
        },
        content:
            "Suddenly, you catch sight of two warriors creeping towards you from a passage to your right. They are clad in jet-black armour and scarlet robes, and their hideous death-masks identify them as Drakkarim warriors. They are men, but they are evil men, as evil as the Darklords whom they serve. One of them holds a razor-fanged Akataz, a creeping leathery war-dog, straining on a chain leash. The Drakkar hisses and the Akataz springs towards your throat.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 273,
                content: "If you wish to fight this creature, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 285,
                content: "If you wish to try to evade the attack and escape, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 202
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 202,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Ikaresh",
            regionType: "TOWN",
            description:
                "This is a village lying between the mountains of Dahir. The villagers - named Ikareshi - have their own dialect, so called Ikareshi dialect",
            imageUrl: "images/shadow/regions/ikaresh.png",
        },
        content:
            "You pass under an arch where two brass-gilded, conical towers gleam like gold and enter a marketplace crowded with squabbling merchants. Exotic carpets, brightly coloured material, and all manner of foods are being bought, sold, and haggled over. The north side of the marketplace is devoted to the auction of douggas. The sleek but noisy desert beasts are being paraded, for the benefit of the bidders, around a paddock adjoining their stables. Just past the stables, a street vanishes into the Carpet-weavers’ Quarter of Ikaresh.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 309,
                content: "If you wish to investigate the stables, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 248,
                content: "If you wish to ask one of the merchants if they know where Tipasa lives, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 386,
                content: "If you wish to leave the marketplace, continue along the adjoining street and turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 203
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 203,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png",
        },
        content:
            "There is a sickening and acidic smell as a great gout of green blood gushes from the Vordak’s red robe. The creature screams and topples from view, its mangled corpse spiralling downwards. Sheathing your weapon, you grab the reins and fight to regain control of your injured mount. You have slain the Vordak, but the battle is not yet won. The Itikar is losing a lot of blood and could lapse into unconsciousness at any moment to drop you like a stone onto hard Lake Inrahim. Suddenly you see something in the distance—something that renews your faith in miracles.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 221,
                content: "Turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 204
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 204,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png",
        },
        content:
            "You sense that the stone radiates pure evil. If you can only turn the stone’s power against the Darklord, it will drain his strength and make him fade from this dimension. Although the stone cannot kill Haakon, it can at least banish him to a place where he can no longer harm you.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 268,
                content: "If you wish to try to grab the stone and turn it on your enemy, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 390,
                content: "If you wish to ignore the stone and attack the Darklord with your own weapon, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 205
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 205,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png",
        },
        content:
            "All you can hear above the wind that screams past your face are the gleeful howls of the Drakkarim. They are watching you fall to certain doom. Pick a number from the Random Number Table.",
        outcomes: [
            {
                outcomeType: "RANDOM",
                targetNr: 234,
                intervall: {
                    min: 0,
                    max: 4,
                },
                content: "If the number you have picked is 0–4, turn to ",
            },
            {
                outcomeType: "RANDOM",
                targetNr: 293,
                intervall: {
                    min: 5,
                    max: 9,
                },
                content: "If the number you have picked is 5–9, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 206
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 206,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Ikaresh",
            regionType: "TOWN",
            description:
                "This is a village lying between the mountains of Dahir. The villagers - named Ikareshi - have their own dialect, so called Ikareshi dialect",
            imageUrl: "images/shadow/regions/ikaresh.png",
        },
        content:
            "There is no reply to your first knock. You are about to knock again when the door opens a few inches and the red-rimmed eyes of an old woman stare out from the darkness. ‘Banedon!’ she exclaims, her voice hoarse and shaky. ‘Thank the gods it is you.’ She ushers you both inside and locks the door. The house is sparsely furnished, and what little is there is either damaged or broken. ‘They have taken him, Banedon, they have taken my husband—the men with the faces of the dead. Ten days ago. They came like shadows in the night.’ She breaks down, her frail body wracked by sobs. Banedon comforts her as best he can, but you sense he shares her bitter loss. The Drakkarim have taken Tipasa, of that there is little doubt. By now they will have made him tell everything he knows about the Tomb of the Majhan. ‘We will find him, I promise,’ says Banedon, wiping the tears from the old woman’s face, ‘but you must try to help us if you can. Tipasa always kept a diary of his travels—do you have it still?’ A flicker of hope shines in the old woman’s eyes. ‘Yes, it is here. He told me to hide it when the evil men came for him.’ She kneels at an empty fireplace and prises a loose brick from the chimney; a leather-bound book drops from its hiding place into her hand. She gives it to Banedon who studies the yellowed pages, his face lined in thought. You notice that the book is full of cryptic symbols, numbers, and pictograms. ‘They are drawn by the night stars,’ says Banedon, tracing his finger along the astronomical drawings. ‘They hold the secret, I know, but without my star charts we cannot hope to find the tomb. We must return to the Skyrider at first light. There I shall be able to make some sense of this book.’",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 331,
                content: "Turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 207
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 207,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png",
        },
        content:
            "You discover little of interest: 8 Gold Crowns and a Brass Whistle on a chain around the guard’s neck. You may take these if you wish, but remember to mark them on your Action Chart. (The Brass Whistle is a Special Item worn on a chain around the neck.) Suddenly, a noise alerts you to unwelcome company; Drakkarim are rushing along the tiled pathway that leads to the pens. Without a moment’s hesitation, you turn and run inside the Itikar’s enclosure.",
        events: [
            {
                eventType : "CHANGE_GOLD_AMOUNT_EVENT",
                ranking : 1,
                amount : 8
            },
            {
                eventType : "ACQUIRE_ITEM_EVENT",
                ranking : 2,
                item : {
                    name : "BRASS_WISTLE",
                    itemType : "MAGICAL_ITEM",
                    description : "Brass Whistle",
                    weight : "MEDIUM",
                    imageUrl : "images/flight/items/brass_whistle.png"
                }
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 224,
                content: "Turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 208
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 208,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png",
        },
        content:
            "‘By the gods!’ cries Banedon. ‘A vaxeler!’ The old man’s face is a mask of green putrescent sores. The pupils of his eyes are yellow, and his ragged grey lips hang in tatters. Banedon grabs your arm and pulls you away from the wretched man. ‘He has vaxelus, Lone Wolf, a terrible disease that rots the skin. It is highly contagious—our lives are in peril.’",
        outcomes: [
            {
                outcomeType : "ITEM",
                targetNr: 321,
                item : {
                    code : "OEDE_HERB",
                    name : "Oede herb",
                    description : "golden leaves which heal many deadly diseases or restore 10 ENDURANCE if swallowed after combat",
                    imageUrl : "images/flight/items/oedeherb.png"
                },
                content : "If you possess some Oede herb, you may give it to the poor vaxeler by turning to "
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 270,
                content: "If you do not have any Oede, or if you do not wish to give it to the man, you can flee the cave with Banedon by turning to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 209
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 209,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png",
        },
        content:
            "You reach the landing in time to see three Drakkarim warriors enter the tower. Maniacal laughter echoes from their ghoulish death-mask faces, as they form a line and creep towards you. More of their evil kind are flooding onto the bridge, some carrying crossbows. You decide it would be suicide to attack the Drakkarim and sprint quickly up the stairs to escape from them.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 322,
                content: "Turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 210
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 210,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Barrakeesh",
            regionType: "CITY",
            description:
                "Barrakeesh is the capital city of Vassagonia. It has a habour, a lake and on the outskirts of the magnificent city are some smaller towns such as Chiras and Chula. The citizens of Barrakeesh, unlike the inhabitants of other Vassagonian cities, enjoy an abundant supply of fresh water from the Da River.",
            imageUrl: "images/shadow/regions/barrakeesh.png",
        },
        content:
            "You dive aside, your Kai skill saving you from the axe that is spinning towards the platform. Suddenly, a deafening bang rings out and the Drakkar is flung backwards, his breastplate torn open by dwarf shot. He gives a long, agonizing death-cry as he disappears from sight, tumbling into the darkness that surrounds the speeding skyship. As if in answer to the shot, a menacing roll of thunder rumbles across the darkening plain from Barrakeesh. It is as if the city itself were cursing your escape. Banedon appears at your side, his face lined with concern. As he offers a shaky hand to help you to your feet, you notice that the makeshift bandage which binds his wound is soaked with blood. He is pale and weak and close to collapse.",
        outcomes: [
            {
                outcomeType : "ABILITY",
                targetNr : 377,
                ability : {
                    abilityType : "HEALING",
                    description : "This Discipline can be used to restore ENDURANCE points lost in combat. If you possess this skill you may restore 1 ENDURANCE point to your total for every numbered section of the book you pass through in which you are involved in combat. (This is only to be used after your ENDURANCE has fallen below its original level.) Remember that your ENDURANCE cannot rise above its original level."
                },
                content : "If you have the Kai Discipline of Healing, turn to "
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 339,
                content:
                    "If you do not possess this skill, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 211
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 211,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Dahir Mountains",
            regionType: "MOUNTAIN",
            description:
                "The Dahir Mountains are a barren, sun-scorched mountain range lying in the south of Barrakeesh.",
            imageUrl: "images/shadow/regions/dahir_mountains.png",
        },
        content:
            "Despite your misgivings, the lime-green wine tastes delicious. A warm glow radiates slowly from your stomach, filling you with a comfortable sense of well-being. Restore 2 ENDURANCE points. The man looks delighted by your reaction to his wine and offers to sell you the bottle for 5 Gold Crowns. If you wish to buy the Bottle of Kourshah, pay the man 5 Gold Crowns and make the necessary adjustments to your Action Chart. (There is enough Kourshah in the bottle to restore a further 4 ENDURANCE points.)",
        events: [
            {
                eventType : "CHANGE_ENDURANCE_EVENT",
                ranking : 1,
                amount : 2,
            },
            {
                eventType : "ACQUIRE_ITEM_EVENT",
                ranking : 2,
                item : {
                    name : "Bottle of Kourshah",
                    itemType : "POTION",
                    description : "Bottle of Kourshah",
                    weight : "MEDIUM",
                    imageUrl : "images/flight/items/.png"
                }
            }, 
            {
                eventType : "CHANGE_GOLD_AMOUNT_EVENT",
                ranking : 3,
                amount : -5,
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 318,
                content: "If you wish to question him about Tipasa the Wanderer, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 272,
                content:
                    "If you wish to leave his home and continue on your way to Ikaresh, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 212
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 212,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png",
        },
        content:
            "Fleeting shadows move through the densely packed trees: the Drakkarim are trying to surround you. Suddenly, a red shape bursts from the foliage and a mace glances across your forehead. You roll with the blow, tumbling over as though stunned by the force. The Vordak shrieks with malicious laughter and leaps upon you, its black mace raised to crush your skull.",
        outcomes: [
            {
                outcomeType : "ITEM",
                targetNr: 349,
                item : {
                    code : "SOMMERSWERD",
                    name : "Sommerswerd",
                    description : "Sommerswerd",
                    imageUrl : "images/flight/items/.png"
                },
                content : "If you possess the Sommerswerd, turn to "
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 355,
                content: "If you do not possess this Special Item, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 213
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 213,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png",
        },
        content:
            "The Drakkar falls to his knees and makes a horrible rasping noise as he tries in vain to prise open his shattered death-mask. Your blows have staved in his helm, and the buckled metal has fractured his skull. You lash out with your foot and kick him from the outrigger, sending him spiralling down to Lake Inrahim to join the dwarf he murdered. But the dwarf is neither dead nor hundreds of feet below. He hangs by his foot, unconscious, snagged in the netting below the outrigger boards. You grab the dwarf’s leg and haul him to safety before continuing the fight. The platform looks empty—no heads are showing above its armoured parapet, but you sense something is wrong. Instinctively, you leap from the outrigger onto the main hull, your weapon poised to strike.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 361,
                content: "Turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 214
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 214,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Excavation Site",
            regionType: "CONSTRUCTION_SITE",
            description: "An excavation site in the Koneshi Mountains delving the Tomb of Majhan. Commanded by Darklord Haakon in order to find the \"Book of the Magnakai\"",
            imageUrl: "images/shadow/regions/excavation_site.png",
        },
        content:
            "You focus your skill on a nearby spade, willing the spade handle to rattle against the wheelbarrow in which it rests. It only takes a few seconds for the vigilant Drakkarim sentry to leave his post and investigate the noise. By the time he returns, you are inside the Tomb of the Majhan.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 395,
                content: "Turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 215
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 215,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Grand Palace",
            regionType: "STONE_BUILDING",
            description: "The biggest building in Barrakeesh. ",
            imageUrl: "images/shadow/regions/chula.png",
        },
        content:
            "At the bottom of the stairs, a wooden door braced with iron blocks the entrance to the scented garden. Frantically you twist the handle, but it does not open—the door is locked. Then a couple of palace guards appear on the bridge above; they see you and unsling their heavy crossbows.",
        outcomes: [
            {
                outcomeType : "ITEM",
                targetNr: 246,
                item : {
                    code : "COPPER_KEY",
                    name : "Copper Key",
                    description : "Copper Key",
                    imageUrl : "images/flight/items/copperkey.png"
                },
                content : "If you possess a Copper Key, turn to "
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 301,
                content: "If you do not possess this item, you can try to climb over the door by turning to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 375,
                content: "Alternatively, you can run back up the stairs and attempt to attack the guards before they load and fire their crossbows by turning to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 216
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 216,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Ikaresh",
            regionType: "TOWN",
            description:
                "This is a village lying between the mountains of Dahir. The villagers - named Ikareshi - have their own dialect, so called Ikareshi dialect",
            imageUrl: "images/shadow/regions/ikaresh.png",
        },
        content:
            "You soon enter a public square where a throng of men have gathered at the ruins of a fountain. They are listening to the frenzied speech of a man dressed in red from head to toe; each man in the crowd is wearing a strip of the same coloured cloth, which covers the lower half of his face. ‘They’re Adu-kaw—“the veiled ones”,’ says Banedon nervously. ‘It sounds as if they’re declaring a blood feud on their old enemies, the men of Tefa.’ You follow Banedon to the shelter of a toa tree, where you will be less conspicuous. The speaker is denouncing the Tefarim for imposing a heavy tax for safe passage through their town and for use of the highway to Kara Kala. His ranting begins to stir the crowd to fever pitch. Suddenly he points to where you stand and shrieks, ‘Tefarim spies!’",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 284,
                content: "If you want to try to reason with the crowd of screaming fanatics that are now running towards you with their swords drawn, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 340,
                content: "If you wish to follow Banedon’s example and run for your life, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 217
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 217,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png",
        },
        content:
            "The Itikar fixes you with a cold, black stare, but you sense that it is no longer hostile. As you settle on its wide saddle, you catch sight of the Drakkarim streaming across the gangplank. Leaning forward, you unhook the anchor rope from the saddle ring and grab the thick leather reins.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 343,
                content: "Turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 218
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 218,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png",
        },
        content:
            "The dwarves continue their meal, pausing only to light large hooded pipes. Through the bluish hue of the pipe smoke that clouds the low cabin roof, you notice that they are casting nervous glances at you, as if you might explode at any moment. After five minutes have passed, Nolrim raises his tankard and proclaims a toast: ‘To Lone Wolf—a man among dwarves!’ The dwarves guffaw at Nolrim’s wry toast and raise their tankards in a salute to your courage and fortitude. The Bor-brew has loosened their tongues, and they are eager to tell you of their past exploits.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 291,
                content: "Turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 219
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 219,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Tomb of the Majhan",
            regionType: "EVIL_TEMPLE",
            description: "an old tomb where Darklord Haakon hopes to find the \"Book of the Magnakai\"",
            imageUrl: "images/shadow/regions/tomb_of_the_Majhan.png",
        },
        content:
            "You act purely by instinct. You dive to the floor and roll over; the blue flame screams past your head and explodes into the chamber wall, blasting a hole several feet deep in the steel-hard rock. You spring to your feet and dodge behind a massive pillar as the hideous laugh of Darklord Haakon echoes around the dust-choked chamber. As it rises in pitch, your mind is filled with agonizing pain.",
        outcomes: [
            {
                outcomeType : "ABILITY",
                targetNr : 253,
                ability : {
                    abilityType : "MINDSHIELD",
                    description : "The Darklords and many of the evil creatures in their command have the ability to attack you using their Mindforce. The Kai Discipline of Mindshield prevents you from losing any ENDURANCE points when subjected to this form of attack."
                },
                content : "If you have the Kai Discipline of Mindshield, turn to "
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 369,
                content: "If you do not possess this Kai Discipline, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 220
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 220,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Barrakeesh",
            regionType: "CITY",
            description:
                "Barrakeesh is the capital city of Vassagonia. It has a habour, a lake and on the outskirts of the magnificent city are some smaller towns such as Chiras and Chula. The citizens of Barrakeesh, unlike the inhabitants of other Vassagonian cities, enjoy an abundant supply of fresh water from the Da River.",
            imageUrl: "images/shadow/regions/barrakeesh.png",
        },
        content: "Your Kai sense of Tracking reveals that the winding path leads into the Zakhan’s arboretum: his cathedral of trees. The stairs to the portal lead to a private chamber in the upper palace, but you still cannot tell what the chamber contains.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 391,
                content: "If you wish to follow the path, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 352,
                content:
                    "If you decide to climb the stairs to the portal, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 221
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 221,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Barrakeesh",
            regionType: "CITY",
            description:
                "Barrakeesh is the capital city of Vassagonia. It has a habour, a lake and on the outskirts of the magnificent city are some smaller towns such as Chiras and Chula. The citizens of Barrakeesh, unlike the inhabitants of other Vassagonian cities, enjoy an abundant supply of fresh water from the Da River.",
            imageUrl: "images/shadow/regions/barrakeesh.png",
        },
        content:
            "Emerging from a bank of cloud on the skyline is a flying ship. It is a small craft, no bigger than an Unoram river barge, with two triangular sails swept back either side of its curving prow. In the fading twilight you can make out a long pennant that flutters from its mast. A faint humming reaches your ears. Your first reaction is disbelief; what you are seeing must be a trick of the light or some fiendish illusion created by the Darklords. However, as the ship floats nearer, your senses tell you that it is indeed quite real.",
        outcomes: [
            {
                outcomeType : "ITEM",
                targetNr: 336,
                item : {
                    code : "CRYSTAL_STAR_PENDANT",
                    name : "Crystal star pendant",
                    description : "Crystal star pendant",
                    imageUrl : "images/flight/items/crystal_star_pendant.png"
                },
                content : "If you have ever been given a Crystal Star Pendant, turn to "
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 275,
                content: "If you do not have this Special Item, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 222
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 222,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Barrakeesh",
            regionType: "CITY",
            description:
                "Barrakeesh is the capital city of Vassagonia. It has a habour, a lake and on the outskirts of the magnificent city are some smaller towns such as Chiras and Chula. The citizens of Barrakeesh, unlike the inhabitants of other Vassagonian cities, enjoy an abundant supply of fresh water from the Da River.",
            imageUrl: "images/shadow/regions/barrakeesh.png",
        },
        content: "You must act quickly if you are to avoid detection, for the creature in red is a Vordak: one of the powerful undead who serve the Darklords. Pick a number from the Random Number Table.",
        outcomes: [
            {
                outcomeType : "RANDOM",
                targetNr : 378,
                intervall : {
                    min : 0,
                    max : 2,
                },
                content : "If the number you have picked is 0–2, turn to "
            },
            {
                outcomeType : "RANDOM",
                targetNr : 262,
                intervall : {
                    min : 3,
                    max : 9,
                },
                content : "If the number is 3–9, turn to "
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 223
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 223,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png",
        },
        content:
            "Suddenly, the pain subsides—but the onslaught has only just begun. A mist as black as the grave is seeping from Haakon’s mouth. It creeps along his outstretched arm and settles like a cloud in the palm of his upturned hand. Whirling shadow-shapes draw into focus; wings and tentacles sprout and take form. A curse in the dark tongue shakes the whole chamber as a deadly flood of horror hurtles from his hand.",
        events: [
            {
                eventType : "COMBAT",
                ranking : 1,
                creature : {
                    name : "Crypt Spawn",
                    combatSkill : 24,
                    endurance : 40,
                    imageUrl : "images/flight/creatures/.png"
                }
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 353,
                content: "If you win the combat, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 224
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 224,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png",
        },
        content:
            "The great black bird beats its massive wings, cawing hoarsely through the domed pen. Two black eyes, fierce and cold, fix you with a deadly stare as you edge nearer to its perch. Grabbing the saddle pommel, you haul yourself up, but suddenly there is a flash of razor-sharp talons. Instinctively, you shield your face as a glint of orange sunlight is caught on the Itikar’s curved beak, for it slashes the air barely inches above your head. If you possess neither the Kai Discipline nor the Special Item, pick a number from the Random Number Table. If you have reached the Kai Rank of Aspirant or higher, add 2 to the number you have picked.",
        outcomes: [
            {
                outcomeType : "ABILITY",
                targetNr : 308,
                ability : {
                    abilityType : "ANIMAL_KINSHIP",
                    description : "This skill enables a Kai Lord to communicate with some animals and to be able to guess the intentions of others."
                },
                content : "If you have the Kai Discipline of Animal Kinship, turn to "
            },
            {
                outcomeType : "ITEM",
                targetNr: 319,
                item : {
                    code : "ONYX_MEDALLION",
                    name : "Onyx Medallion",
                    description : "This Special Item, torn from the armour of a renegade Vassagonian captain during the battle of Ruanon, enables you to communicate with the Itikar",
                    imageUrl : "images/flight/items/onyx_medallion.png"
                },
                content : "If you possess an Onyx Medallion, turn to "
            },
            {
                outcomeType : "RANDOM",
                targetNr : 287,
                intervall : {
                    min : 8,
                    max : 11,
                },
                content : "If your total is now 8–11, turn to "
            },
            {
                outcomeType : "RANDOM",
                targetNr : 240,
                intervall : {
                    min : 4,
                    max : 7,
                },
                content : "If your total is 4–7, turn to "
            },
            {
                outcomeType : "RANDOM",
                targetNr : 370,
                intervall : {
                    min : 1,
                    max : 3,
                },
                content : "If your total is 1–3, turn to "
            },
            {
                outcomeType : "RANDOM",
                targetNr : 257,
                intervall : {
                    min : 0,
                    max : 0,
                },
                content : "If your total is 0, turn to "
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 225
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 225,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Ikaresh",
            regionType: "TOWN",
            description:
                "This is a village lying between the mountains of Dahir. The villagers - named Ikareshi - have their own dialect, so called Ikareshi dialect",
            imageUrl: "images/shadow/regions/ikaresh.png",
        },
        content:
            "The man is short of stature but broad-shouldered and strongly built, physical characteristics common among the tough mountain-dwellers in Vassagonia. He pulls a cork from a bottle of lime-green wine and pours three large measures into earthenware cups. ‘Kourshah!’ he exclaims, and downs the wine in one swift gulp.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 211,
                content: "If you wish to follow his example and drink the strange wine, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 318,
                content:
                    "If you do not want to drink the wine, ask him where Tipasa can be found and turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 226
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 226,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png",
        },
        content:
            "You are the first to recover from the surprise of the sudden encounter.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 334,
                content: "If you wish to attack the guards (Ignore any wounds you may sustain in the first 2 rounds of combat.), turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 209,
                content: "If you do not wish to fight them, you can evade before they have a chance to strike at you by running back up to stairs. Turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 227
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 227,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Ikaresh",
            regionType: "TOWN",
            description:
                "This is a village lying between the mountains of Dahir. The villagers - named Ikareshi - have their own dialect, so called Ikareshi dialect",
            imageUrl: "images/shadow/regions/ikaresh.png",
        },
        content:
            "As you near the entrance to a shadowy alley, you hear a woman’s voice begging in the darkness: ‘Alms for a poor widow, young sirs?’ A decrepit old woman hobbles into the light, her features harsh, her face haggard and drawn. She repeats her plaintive cry: ‘Will you spare a coin for a poor widow’s needs?’",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 265,
                content: "If you wish to stop and question her, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 388,
                content: "If you wish to ignore her and continue on your way, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 228
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 228,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Barrakeesh",
            regionType: "CITY",
            description:
                "Barrakeesh is the capital city of Vassagonia. It has a habour, a lake and on the outskirts of the magnificent city are some smaller towns such as Chiras and Chula. The citizens of Barrakeesh, unlike the inhabitants of other Vassagonian cities, enjoy an abundant supply of fresh water from the Da River.",
            imageUrl: "images/shadow/regions/barrakeesh.png",
        },
        content: "Eager to put distance between yourself and your merciless enemy, you race headlong through a tangle of trees and roots until you stumble upon a small domed hut of latticed wood, half hidden by a curtain of vines. Peering through the dense foliage, you see that the vines reach up to a wrought-iron walkway, which ends at an open stone door.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 352,
                content:
                    "If you wish to climb up a vine to the walkway and escape through the open stone door, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 332,
                content:
                    "If you wish to search for an exit from the arboretum at ground level, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 229
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 229,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Dahir Mountains",
            regionType: "MOUNTAIN",
            description:
                "The Dahir Mountains are a barren, sun-scorched mountain range lying in the south of Barrakeesh.",
            imageUrl: "images/shadow/regions/dahir_mountains.png",
        },
        content:
            "As the craft emerges into the sunlight, a terrible noise fills the air—the screeching cacophony of Kraan-riders, sweeping down from the table of rock. They have been waiting patiently for the Skyrider to appear before launching their ambush, for they have been certain of your hiding place since before the dawn. The Black Crystal Cube enabled them to track your escape route through the Dahir Mountains, its signal to them as clear as a burning beacon in the night. You sense it is the Cube which has betrayed your escape and snatch it from your pocket, but before you can hurl the accursed object away, it explodes in your hand. Pick a number from the Random Number Table. If you have the Kai Discipline of Sixth Sense, add 3 to the number you have picked.",
        outcomes: [
            {
                outcomeType : "RANDOM",
                targetNr : 385,
                intervall : {
                    min : 0,
                    max : 6,
                },
                content : "If your total is now 0–6, turn to "
            },
            {
                outcomeType : "RANDOM",
                targetNr : 251,
                intervall : {
                    min : 7,
                    max : 12,
                },
                content : "If your total is now 7–12, turn to "
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 230
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 230,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Tomb of the Majhan",
            regionType: "EVIL_TEMPLE",
            description: "an old tomb where Darklord Haakon hopes to find the \"Book of the Magnakai\"",
            imageUrl: "images/shadow/regions/tomb_of_the_Majhan.png",
        },
        content:
            "There is another searing blast, which hits the base of the huge pillar behind which you have taken refuge; it severs the stone in an instant. Your body is torn to pieces as the pillar explodes into a million fragments—the little of you that remains is buried beneath tons of falling sand and stone. Your life and the hopes of Sommerlund end here.",
        events : [
            {
                eventType : "MISSION_FAILED_EVENT",
                ranking : 1
            }
        ]
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 231
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 231,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png",
        },
        content:
            "The Drakkarim rush into the guard room, bellowing like Kalte mammoths and hacking madly at the air with their cruel, black swords. The leader advances on you, a mane of jet-black hair streaming from the open back of his helm, his sword held low for a thrust that will disembowel you. You sidestep and drive your weapon into his armoured chest. The black metal buckles, crushing his ribs, killing him instantly, but before he has fallen to the ground, two more Drakkarim are upon you. You cannot evade combat and must fight them to the death.",
        events: [
            {
                eventType: "COMBAT",
                ranking: 1,
                creature: {
                    name: "Drakkarim",
                    combatSkill: 18,
                    endurance: 34,
                    imageUrl: "images/shadow/creatures/drakkarim.png",
                },
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 290,
                content: "If you win the combat, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 232
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 232,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png",
        },
        content:
            "You try to sidestep as the lethal blade hurtles towards you, but in the darkness you cannot be sure of the direction of its flight. You are hit in the chest, the blow smashing the air from your lungs. Lights flash before your eyes, and an explosion rings in your ears. You fall to your knees, and a sensation of numbness spreads through your chest. Through a haze of swirling mist, you see the Drakkar flung backwards, his breastplate torn open by dwarf shot. Banedon appears; his face is ashen grey. His lips move, but you cannot hear what he is saying. Images of Sommerlund swim in your mind and then slowly fade as oblivion engulfs you. Your life and the last hope of Sommerlund end here.",
        events : [
            {
                eventType : "MISSION_FAILED_EVENT",
                ranking : 1
            }
        ]
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 233
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 233,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png",
        },
        content:
            "Holding the Prism in the centre of the beam, you divert the light towards the hole in the floor. You hear the sound of stone grating on stone as the door slowly opens to reveal a large chamber. It is dimly lit, but in the dust that covers the marble floor you can see footprints too numerous to count. As you enter, you suddenly catch sight of a rough stone throne, facing the wall on the far side of the chamber. Behind you the door slides shut with unnerving speed.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 289,
                content: "Turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 234
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 234,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png",
        },
        content:
            "In a complete daze you tumble and spin, totally unaware of whether you are falling head- or feet-first. The warm wind tears at your face, forcing your eyelids and mouth open. You can barely breathe. You scream with terror until you hit the upper branches of a toa tree; in the next instant you hit water. You rapidly surface again, and instinctively begin to pump your legs. You have no idea in which direction you are swimming, but in three strokes you find yourself at the side of this deep, sculptured pool of clear water. Still shaking from the shock of impact, you crawl your way out onto a mossy bank. Miraculously, you have escaped injury, but your ordeal is far from over. The Drakkarim and the palace guards watched you fall and at this very moment are racing down from the tower and the bridge to the palace gardens. Ahead of you, beyond a tree-lined colonnade, a flight of steps ascends to a small portal in the wall of the upper palace. To your right, a leafy tunnel winds away into the trees and shrubs.",
        outcomes: [
            {
                outcomeType: "ABILITY",
                targetNr: 220,
                ability: {
                    abilityType: "TRACKING",
                    description:
                        "This skill enables a Kai Lord to make the correct choice of a path in the wild, to discover the location of a person or object in a town or city and to read the secrets of footprints or tracks.",
                },
                content: "If you have the Kai Discipline of Tracking, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 352,
                content: "If you wish to climb the stairs to the small portal, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 391,
                content: "If you wish to follow the winding path, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 235
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 235,
        book: {
            name: "Dahir Mountains",
            regionType: "MOUNTAIN",
            description:
                "The Dahir Mountains are a barren, sun-scorched mountain range lying in the south of Barrakeesh.",
            imageUrl: "images/shadow/regions/dahir_mountains.png",
        },
        content:
            "Rows of stalactites hang from the roof of the cave, like the fangs of some incredible monster, and the bubbling of a distant geyser echoes eerily through the unknown depths. You begin to explore and eventually reach a place where a natural bridge of rock arches over a steaming course of water, red with ore. Huddled beneath the bridge is a pathetic figure, its body bent and emaciated. A tattered blanket covers his face, and in his withered hands he clutches a crude fishing rod. A small catch of lavacrabs lies on the bank, their claws twitching as they slowly die. As you move nearer, the figure raises his face to stare at you. It is a man, but the sight of his face shocks you to the core.",
        outcomes: [
            {
                outcomeType : "ABILITY",
                targetNr : 344,
                ability : {
                    abilityType : "HEALING",
                    description : "This Discipline can be used to restore ENDURANCE points lost in combat. If you possess this skill you may restore 1 ENDURANCE point to your total for every numbered section of the book you pass through in which you are involved in combat. (This is only to be used after your ENDURANCE has fallen below its original level.) Remember that your ENDURANCE cannot rise above its original level."
                },
                content : "If you have the Kai Discipline of Healing, turn to "
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 208,
                content: "If you do not possess this Kai Discipline, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 236
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 236,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Grand Palace",
            regionType: "STONE_BUILDING",
            description: "The biggest building in Barrakeesh. ",
            imageUrl: "images/shadow/regions/chula.png",
        },
        content:
            "Your speed and stealth carry you across the gangplank undetected. Your attack is silent and deadly.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 207,
                content: "If you wish to search the guard’s body, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 224,
                content: "If you decide to ignore the body, hurry into the Itikar’s pen and turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 237
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 237,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Ikaresh",
            regionType: "TOWN",
            description:
                "This is a village lying between the mountains of Dahir. The villagers - named Ikareshi - have their own dialect, so called Ikareshi dialect",
            imageUrl: "images/shadow/regions/ikaresh.png",
        },
        content:
            "The jala tastes as good as it smells and, after your dusty trek through the hills, is a welcome relief to your parched throat. Restore 1 ENDURANCE point. ‘Do you know where we may be able to find a man called Tipasa the Wanderer?’ asks Banedon, successfully hiding his Northland accent with his expert mastery of the Ikareshi dialect. ‘I’m sorry, friend, but I have never heard of this man,’ replies one of the men. ‘You would be wise,’ interrupts the other, ‘to ask the widow Soushilla. There is little in Ikaresh that she does not know.’ ‘Where can she be found?’ you ask. ‘At her tavern, of course,’ they reply, simultaneously. ‘Cross Eagle Square and you’ll find it on the way to the Dougga Market.’ You thank the Ikareshi and leave the eating house. Retracing your steps to the square, you set off towards the Dougga Market in search of Soushilla the Widow.",
        events: [
            {
                eventType : "CHANGE_ENDURANCE_EVENT",
                ranking : 1,
                amount : 1,
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 376,
                content: "Turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 238
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 238,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Grand Palace",
            regionType: "STONE_BUILDING",
            description: "The biggest building in Barrakeesh. ",
            imageUrl: "images/shadow/regions/chula.png",
        },
        content:
            "You escape from the combat and sprint along the opposite passage, but the enemy gives chase, and the crunch of iron-shod boots echoes in your ears. You race down a stairway, through an arch of silver and along a balcony overlooking the lower palace. You glimpse the silhouette of Darklord Haakon in the hall below, his spiked fist raised. A Drakkar appears from nowhere and leaps at you, his sword raised high above his skull-like helm. There is a deafening crack, and a bolt of blue lightning streaks from a stone in the Darklord’s hand and hurtles towards you. The Drakkar lunges and wounds your forearm (you lose 1 ENDURANCE point), but he is now standing in the path of the bolt. In a flash of light, the Drakkar is gone; only cinders and the rotten odour of scorched flesh remain. At the end of the balcony you see another arch and a staircase.",
        events: [
            {
                eventType : "CHANGE_ENDURANCE_EVENT",
                ranking : 1,
                amount : -1,
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 381,
                content: "If you wish to escape through the arch, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 317,
                content: "If you wish to escape by the stairs, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 239
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 239,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Excavation Site",
            regionType: "CONSTRUCTION_SITE",
            description: "An excavation site in the Koneshi Mountains delving the Tomb of Majhan. Commanded by Darklord Haakon in order to find the \"Book of the Magnakai\"",
            imageUrl: "images/shadow/regions/excavation_site.png",
        },
        content:
            "If you are to get inside the tomb, you must either distract or silence the Drakkarim sentry. If you do not possess this item, you will have to creep up and overpower him as quickly and silently as you can. Pick a number from the Random Number Table. If you possess the Kai Disciplines of Hunting, Tracking, and Camouflage, add 2 to the number you have picked. If you have reached the Kai rank of Guardian or higher, add 3 to the number.",
        outcomes: [
            {
                outcomeType : "ITEM",
                targetNr: 260,
                item : {
                    code : "TINCTURE_OF_GRAVEWEED",
                    name : "Tincture of Graveweed",
                    description : "causes sickness and loss of 2 ENDURANCE points per dose",
                    imageUrl : "images/flight/items/tincture_of_graveweed.png"
                },
                content : "If you possess a Tincture of Graveweed (You may only use Graveweed in its Tincture form in this case (you may not use a concentrated potion if you have one)), turn to "
            },
            {
                outcomeType : "RANDOM",
                targetNr : 324,
                intervall : {
                    min : 0,
                    max : 4,
                },
                content : "If your total is now 0–4, turn to "
            },
            {
                outcomeType : "RANDOM",
                targetNr : 303,
                intervall : {
                    min : 5,
                    max : 12,
                },
                content : "If it is 5 or more, turn to "
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 240
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 240,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png",
        },
        content:
            "Itikar are wild and malicious creatures. It can take several years for a rider to tame and train one, but once trained, the giant black birds are fiercely loyal. As you approach, the Itikar senses that you are not his master and furiously attacks you with its deadly beak and talons. Fight the combat as normal, but double all ENDURANCE points lost by the giant bird. When its score falls to zero or below, you will have subdued it enough to be able to climb into the saddle and take control. All the ENDURANCE points you lose in the combat count as wounds and must be deducted from your current ENDURANCE points total.",
        events: [
            {
                eventType : "COMBAT",
                ranking : 1,
                creature : {
                    name : "Itikar",
                    combatSkill : 17,
                    endurance : 30,
                    imageUrl : "images/flight/creatures/itikar.png"
                }
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 217,
                content: "If you successfully reduce the Itikar’s ENDURANCE points to zero or below, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 241
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 241,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Dahir Mountains",
            regionType: "MOUNTAIN",
            description:
                "The Dahir Mountains are a barren, sun-scorched mountain range lying in the south of Barrakeesh.",
            imageUrl: "images/shadow/regions/dahir_mountains.png",
        },
        content:
            "Once outside the cave, you and Banedon waste no time in pressing on towards Ikaresh. As you near the outskirts of the town, you pass a small, round hut where a goat is eating from a manger near the door. A man appears in the darkened doorway and bids you welcome; he touches his forehead in a salute of friendship and invites you to enter his humble home.",
        outcomes: [
            {
                outcomeType : "ABILITY",
                targetNr : 365,
                ability : {
                    abilityType : "SIXTH_SENSE",
                    description : "This skill may warn a Kai Lord of imminent danger. It may also reveal the true purpose of a stranger or strange object encountered in your adventure."
                },
                content : "If you have the Kai Discipline of Sixth Sense, turn to "
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 225,
                content: "If you wish to accept his invitation, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 272,
                content: "If you decide to decline his offer and continue on your way towards Ikaresh, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 242
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 242,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Barrakeesh",
            regionType: "CITY",
            description:
                "Barrakeesh is the capital city of Vassagonia. It has a habour, a lake and on the outskirts of the magnificent city are some smaller towns such as Chiras and Chula. The citizens of Barrakeesh, unlike the inhabitants of other Vassagonian cities, enjoy an abundant supply of fresh water from the Da River.",
            imageUrl: "images/shadow/regions/barrakeesh.png",
        },
        content:
            "You recognize the creature dressed in red: it is a Vordak, a servant of the Darklords, one of the powerful undead. Vordaks possess great psychic power, and you feel it scanning for you with its Mindforce. You know that if you are to avoid these evil troops, you will not only have to hide, but also shield your mind. Pick a number from the Random Number Table. If you have the Kai Discipline of Camouflage, add 2 to the number you have picked. If you have the Kai Discipline of Mindshield, add 3.",
        outcomes: [
            {
                outcomeType : "RANDOM",
                targetNr : 262,
                intervall : {
                    min : 0,
                    max : 6,
                },
                content : "If your total score is now 0–6, turn to "
            },
            {
                outcomeType : "RANDOM",
                targetNr : 378,
                intervall : {
                    min : 7,
                    max : 12,
                },
                content : "If it is 7 or over, turn to "
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 243
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 243,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png",
        },
        content:
            "Your deadly stroke hurls the Drakkar over the armoured parapet. He tumbles from view and plummets into the valley thousands of feet below.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 306,
                content: "Turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 244
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 244,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Barrakeesh",
            regionType: "CITY",
            description:
                "Barrakeesh is the capital city of Vassagonia. It has a habour, a lake and on the outskirts of the magnificent city are some smaller towns such as Chiras and Chula. The citizens of Barrakeesh, unlike the inhabitants of other Vassagonian cities, enjoy an abundant supply of fresh water from the Da River.",
            imageUrl: "images/shadow/regions/barrakeesh.png",
        },
        content: "You can clearly see the main highway that links Chula to the capital. It crosses the desolate salt plain of Lake Inrahim by means of a causeway thirty feet high and is a useful landmark by which you can steer. Little stone houses with beaten earth roofs are grouped in small clusters along the highway, their numbers increasing as you draw nearer to the town. You are five miles from Chula, when you notice a dark cloud hovering several hundred feet above one of the small villages. It is a cloud of Kraan; they are moving to intercept you. Suddenly the Itikar squeals in pain, and a splash of feathers billows out from its wing. A Kraan has closed in from behind; it is less than a hundred yards distant. The Drakkarim rider holsters an empty bronze crossbow and draws his black sword. His bolt has passed through the wing of your mount, and he prepares to strike as the Itikar loses height and speed. The Kraan and its rider are swooping on you from behind. You will only be able to fight for one round of combat before they are carried past by the momentum of their attack.",
        events: [
            {
                eventType : "COMBAT",
                ranking : 1,
                creature : {
                    name : "Drakkarim Kraan-rider",
                    combatSkill : 20,
                    endurance : 28,
                    imageUrl : "images/flight/creatures/drakkarim_kraan-rider.png"
                }
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 347,
                content: "If you lose more ENDURANCE points than the enemy in this one round combat, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 327,
                content: "If the enemy loses more ENDURANCE points than you, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 271,
                content: "If you both lose exactly the same number of ENDURANCE points, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 245
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 245,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Tomb of the Majhan",
            regionType: "EVIL_TEMPLE",
            description: "an old tomb where Darklord Haakon hopes to find the \"Book of the Magnakai\"",
            imageUrl: "images/shadow/regions/tomb_of_the_Majhan.png",
        },
        content:
            "You remove your Blue Stone Triangle from around your neck and press it into the indentation in the wall. It is a perfect fit. You hear the sound of stone grating on stone, and the door slowly opens to reveal a chamber. It is dimly lit, but you see that the thick dust on its marble floor is covered with innumerable footprints. As you enter, you catch sight of a rough stone throne, facing the wall on the far side of the chamber. Behind you the stone door slides shut with unnerving speed.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 289,
                content: "Turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 246
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 246,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Grand Palace",
            regionType: "STONE_BUILDING",
            description: "The biggest building in Barrakeesh. ",
            imageUrl: "images/shadow/regions/chula.png",
        },
        content:
            "Using the Copper Key, you unlock the door and hurry into the garden, not a moment too soon; as the heavy door swings shut you hear crossbow bolts ricocheting from the bands of studded iron. The enclosed garden is filled with the fragrance of exotic shrubs and trees, which cluster around a sculptured pool of deep blue water. It is a beautiful sight, but you dare not stop to enjoy it. The Drakkarim and the palace guards know where you are, and you must keep moving if you are to escape them. Beyond a tree-lined colonnade, a flight of steps ascends to a small portal in the wall of the upper palace. To your right, a leafy tunnel winds away into the trees and shrubs.",
        outcomes: [
            {
                outcomeType : "ABILITY",
                targetNr : 220,
                ability : {
                    abilityType : "TRACKING",
                    description : "This skill enables a Kai Lord to make the correct choice of a path in the wild, to discover the location of a person or object in a town or city and to read the secrets of footprints or tracks."
                },
                content : "If you possess the Kai Discipline of Tracking, turn to "
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 352,
                content: "If you decide to climb the stairs to the small portal, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 391,
                content: "If you would rather follow the winding path, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 247
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 247,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "The Koos",
            regionType: "MOUNTAIN",
            description:
                "Highest mountains in the middle of Dahir Mountains. The voyage through the Koos is breathtaking. The Skyrider glides between the towers of rock that rise from the valley floor with fantastic and unearthly grandeur. Perched upon two of these huge rocky columns are Kraan, their Drakkarim riders scouring the valley with telescopes.",
            imageUrl: "images/shadow/regions/the_koos.png",
        },
        content:
            "The voyage through the Koos is breathtaking. The Skyrider glides between the towers of rock that rise from the valley floor with fantastic and unearthly grandeur. Far below, sulphurous water bubbles from fissures in the orange ground and streams of hissing lava carve circular channels, which glow like moats of liquid fire. You watch the sky, but there are no signs of the enemy. ‘Ikaresh,’ says Banedon pensively. ‘ “The Eagle’s Lair”. That is where we will find Tipasa the Wanderer. It is the place of his birth and the home of his family. He roams the Dry Main, but he always returns to Ikaresh.’ It is late afternoon when you reach the hills beyond the Koos that overlook the town of Ikaresh. Banedon moors the Skyrider to a pinnacle of stone, and a rope ladder is lowered to the ground. It has been decided that you and he will enter Ikaresh on foot and locate Tipasa, while Nolrim and the crew wait in hiding for you to return—the sight of the Skyrider hovering above the mountain town would be sure to arouse unwanted interest in your arrival. You and Banedon prepare yourselves for your mission by staining your skins with brown copalla berries and dressing in the grey and white robes commonly worn by the mountain people of this region. You bid farewell to Nolrim and set off across the barren hills. Pick in number from the Random Number Table.",
        outcomes: [
            {
                outcomeType : "RANDOM",
                targetNr : 337,
                intervall : {
                    min : 0,
                    max : 2,
                },
                content : "If the number you have picked is 0–2, turn to "
            },
            {
                outcomeType : "RANDOM",
                targetNr : 383,
                intervall : {
                    min : 3,
                    max : 9,
                },
                content : "If it is 3–9, turn to "
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 248
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 248,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Ikaresh",
            regionType: "TOWN",
            description:
                "This is a village lying between the mountains of Dahir. The villagers - named Ikareshi - have their own dialect, so called Ikareshi dialect",
            imageUrl: "images/shadow/regions/ikaresh.png",
        },
        content:
            "A small, heavy-set merchant is hawking his wares from a stall set close to the archway. His small, beady eyes twinkle from beneath a ridiculously outsized turban. As you approach, he launches himself at you, desperately trying, with a flood of wild claims, to persuade you to buy his obviously inferior goods. He looks surprised when you interrupt him with your question. ‘Tipasa?’ he answers. ‘Yes, I know where he lives.’ He holds up a gaudy waistcoat of pink and orange sackcloth and offers it to you. ‘It would make a worthy gift for your esteemed friend,’ he suggests, his eyes continually glancing at your Belt Pouch. ‘Only 5 Gold Crowns, master.’ You realize you will first have to purchase this ridiculous garment before the merchant will tell you where Tipasa lives.",
        outcomes: [
            {
                outcomeType : "GOLD",
                targetNr: 328,
                amount : -5,
                content : "If you wish to buy the waistcoat, pay the man 5 Gold Crowns and turn to "
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 274,
                content: "If you do not want to buy the waistcoat or cannot afford to pay him 5 Gold Crowns, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 249
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 249,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png",
        },
        content:
            "As the Vordak dies, its body gradually dissolves into a bubbling green liquid, shrivelling the plants that lie beneath the crumbled red robe. The swish of a sword alerts you to the Drakkarim who are now closing in around their slain leader. Without hesitation, you sheathe your weapon and run for cover among the densely packed trees.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 228,
                content: "Turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 250
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 250,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Dahir Mountains",
                    regionType: "MOUNTAIN",
                    description:
                        "The Dahir Mountains are a barren, sun-scorched mountain range lying in the south of Barrakeesh.",
                    imageUrl: "images/shadow/regions/dahir_mountains.png",
        },
        content:
            "As you watch the Kraan-riders disappear into the darkening sky, a roll of thunder rumbles across the plain from Barrakeesh. The sound is threatening and full of brooding menace, as if the city itself were cursing your escape. You turn away and focus your attention on Banedon, your unexpected rescuer. The makeshift bandage that binds his wound is soaked with blood, and he looks pale and weak.",
        outcomes: [
            {
                outcomeType : "ABILITY",
                targetNr : 377,
                ability : {
                    abilityType : "HEALING",
                    description : "This Discipline can be used to restore ENDURANCE points lost in combat. If you possess this skill you may restore 1 ENDURANCE point to your total for every numbered section of the book you pass through in which you are involved in combat. (This is only to be used after your ENDURANCE has fallen below its original level.) Remember that your ENDURANCE cannot rise above its original level."
                },
                content : "If you have the Kai Discipline of Healing, turn to "
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 339,
                content: "If you do not have this skill, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 251
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 251,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Dahir Mountains",
            regionType: "MOUNTAIN",
            description:
                "The Dahir Mountains are a barren, sun-scorched mountain range lying in the south of Barrakeesh.",
            imageUrl: "images/shadow/regions/dahir_mountains.png",
        },
        content:
            "You are fortunate that you are not struck by the blast, but even so, the blue flame scorches your hand and arm and knocks you to the floor. Lose 6 ENDURANCE points.",
        events: [
            {
                eventType : "CHANGE_ENDURANCE_EVENT",
                ranking : 1,
                amount : -6
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 316,
                content: "If you are still alive, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 252
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 252,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Grand Palace",
            regionType: "STONE_BUILDING",
            description: "The biggest building in Barrakeesh. ",
            imageUrl: "images/shadow/regions/chula.png",
        },
        content:
            "You whirl your feet away from the shining steel and narrowly escape being wounded as the axe bites inches deep into the polished stone floor. However, before the guard can strike another blow, you lash out and send the axe spinning from his hand. He screams, clutching broken fingers to his chest. You turn and run towards an open door. The air is filled with the sound of pounding feet, for the palace guard are on full alert; together with the Drakkarim, they are now bent on finding and killing you as quickly as possible. Beyond the door, a bridge rises at a slanted angle over an enclosed garden, joining this part of the palace to a needle-like tower of white marble. At the entrance to the bridge, a narrow stair disappears into the garden below.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 396,
                content: "If you wish to cross the bridge and enter the Tower, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 215,
                content: "If you decide to descend the stairs, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 253
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 253,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Tomb of the Majhan",
            regionType: "EVIL_TEMPLE",
            description: "an old tomb where Darklord Haakon hopes to find the \"Book of the Magnakai\"",
            imageUrl: "images/shadow/regions/tomb_of_the_Majhan.png",
        },
        content: "Suddenly, the pain subsides, but a new horror is taking shape before your eyes. Out of the darkness, a green whorl of vapour is forming slowly into the shape of a glistening, serpent-like monster. A grey mist issues forth from the Darklord’s mouth, floating towards the core of this horror, infusing it with the power of death. The serpent writhes and convulses as the grey mist fills its body, changing it from a dream-like illusion into a living nightmare. Two pinpoints of crimson glow from its eyes, as it slithers towards you. If you possess a Jewelled Mace, you may add 5 to your COMBAT SKILL for the duration of the combat, for it is an enchanted weapon, especially effective against such a creature.",
        events: [
            {
                eventType: "COMBAT",
                ranking: 1,
                creature: {
                    name: "Dhorgaan",
                    combatSkill: 20,
                    endurance: 40,
                    imageUrl: "images/shadow/creatures/dhorgaan.png",
                },
            },
            {
                eventType : "TEMPORARY_CHANGE_COMBAT_SKILL_EVENT",
                ranking : 2,
                amount : 5
            }            
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 335,
                content: "If you win the combat, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 254
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 254,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Barrakeesh",
            regionType: "CITY",
            description:
                "Barrakeesh is the capital city of Vassagonia. It has a habour, a lake and on the outskirts of the magnificent city are some smaller towns such as Chiras and Chula. The citizens of Barrakeesh, unlike the inhabitants of other Vassagonian cities, enjoy an abundant supply of fresh water from the Da River.",
            imageUrl: "images/shadow/regions/barrakeesh.png",
        },
        content:
            "The chill air whips past your face as you tumble towards Lake Inrahim. The Kraan-riders, the skyship, and the distant horizon all melt into a kaleidoscope of shapes and images. You fear these will be the last things you will ever see. You have prepared yourself for death and feel calm and relaxed. Suddenly, you feel your body engulfed by a mass of sticky fibres. There is a terrific jolt, which leaves you breathless and stunned. (Lose 2 ENDURANCE points.) The impossible is happening—you are no longer falling but rising! You have been caught by a net of sticky strands like a fly in a web. You rise into the sky towards the flying ship as quickly as you fell. Three bearded dwarves clad in bright, padded battle-jerkins pull you aboard an outrigger that runs the length of the hull. There’s no time to express your gratitude, for the small skyship is under attack from the Kraan-riders. At the end of the outrigger, a dwarf is in hand-to-hand combat with a snarling Drakkar. He is losing the battle. As you rush to help him, another of the evil warriors lands in the centre of the craft, on top of the fortified platform.",
        events: [
            {
                eventType : "CHANGE_ENDURANCE_EVENT",
                ranking : 1,
                amount : -2,
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 280,
                content: "If you wish to help the dwarf, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 361,
                content: "If you wish to leap from the outrigger onto the fortified platform, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 255
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 255,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png",
        },
        content:
            "As the Drakkar collapses to the ground, a Black Crystal Cube falls from his pocket. If you wish to take this item, place it in your own pocket and mark it on your Action Chart as a Special Item. The shriek of the Vordak drives you away from the dead body—his hideous cry is loud and very near.",
        events: [
            {
                eventType: "ACQUIRE_ITEM_EVENT",
                ranking: 1,
                item: {
                    name: "Black Crystal Cube",
                    itemType: "MAGICAL_ITEM",
                    description: "Black Crystal Cube",
                    weight: "SMALL",
                    imageUrl: "images/shadow/items/black_crystal_cube.png",
                },
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 228,
                content: "Turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 256
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 256,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png",
        },
        content:
            "‘Here you are,’ says Banedon, flicking a Gold Crown into her empty bowl. ‘Now will you help us in return?’ She snatches the coin to her mouth and bites into the gold. Satisfied that the coin is real, she nods her head.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 307,
                content: "If you wish to ask her if she is Soushilla (only if you have heard that name before), turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 314,
                content: "If you wish to ask her if she knows were Tipasa the Wanderer can be found, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 257
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 257,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png",
        },
        content:
            "The creature’s curved beak gores your back, impaling you upon its razor-sharp tip. You are lifted into the air and dashed against the wall with one flick of the great bird’s powerful neck. Mercifully, death is instantaneous as your skull is shattered against the hard, unyielding marble. Your life and the hopes of Sommerlund end here.",
        events : [
            {
                eventType : "MISSION_FAILED_EVENT",
                ranking : 1
            }
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 258
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 258,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png",
        },
        content:
            "The sun-sword tingles with power as you point it at the flame which hurtles nearer and nearer, its hiss becoming so loud that it drowns the noise of battle. You brace yourself for the moment of impact. The flame hits the Sommerswerd with a thunderous noise and is held there in a ball of liquid purple fire that burns at the very tip of the magical blade. Instinctively, you whirl the Sommerswerd around your head and cast the fireball back into the sky. The Vordak shrieks with terror, but it is too late—its fate is sealed. The fireball consumes the Zlanbeast and its rider in a massive explosion of sun-like brilliance.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 267,
                content: "Turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 259
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 259,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Grand Palace",
            regionType: "STONE_BUILDING",
            description: "The biggest building in Barrakeesh. ",
            imageUrl: "images/shadow/regions/chula.png",
        },
        content:
            "Two bolts whistle through the air and slam into your back. As the pain tears through your body, you faint and fall onto the poison-tipped spikes. As your life’s blood drains away, the last sound you hear is the hideous gloating laughter of Darklord Haakon rising above the ghoulish howl of his evil Drakkarim warriors. Your life and the hopes of Sommerlund end here.",
        events: [
            {
                eventType: "MISSION_FAILED_EVENT",
                ranking: 1,
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 260
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 260,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Excavation Site",
            regionType: "CONSTRUCTION_SITE",
            description: "An excavation site in the Koneshi Mountains delving the Tomb of Majhan. Commanded by Darklord Haakon in order to find the \"Book of the Magnakai\"",
            imageUrl: "images/shadow/regions/excavation_site.png",
        },
        content:
            "Using the cover of the excavation equipment scattered around the crater, you creep up on the sentry and empty the Tincture into the water flask resting by his feet. A few minutes later, he reaches down and drinks from the flask. It is not long before he begins to feel very ill. As he staggers away to be violently sick, you slip into the Tomb unnoticed.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 395,
                content: "Turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 261
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 261,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Lake Inrahim",
            regionType: "LAKE",
            description:
                "The lake is an immense salt-water plain that is completely dry and cracked.",
            imageUrl: "images/shadow/regions/lake_inrahim.png",
        },
        content:
            "You tumble earthwards, blurred colours flashing before your eyes. The Kraan-riders, the skyship, and the distant horizon all melt into a kaleidoscope of shapes, the last images you see before smashing into the hard and barren salt-plain of Lake Inrahim. Your life and the hopes of Sommerlund end here.",
        events: [
            {
                eventType: "MISSION_FAILED_EVENT",
                ranking: 1,
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 262
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 262,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Barrakeesh",
            regionType: "CITY",
            description:
                "Barrakeesh is the capital city of Vassagonia. It has a habour, a lake and on the outskirts of the magnificent city are some smaller towns such as Chiras and Chula. The citizens of Barrakeesh, unlike the inhabitants of other Vassagonian cities, enjoy an abundant supply of fresh water from the Da River.",
            imageUrl: "images/shadow/regions/barrakeesh.png",
        },
        content:
            "You have been detected; the Vordak shrieks a hideous high-pitched scream and points a bony finger towards your hiding place. Drakkarim crash through the undergrowth, cleaving a path with their black swords.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 212,
                content: "If you wish to draw your weapon and prepare for combat, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 393,
                content:
                    "If you wish to try to escape from them, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 263
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 263,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png",
        },
        content:
            "The crone hobbles away into the dark alley; you and Banedon retrace your steps to the eagle monolith, where an arrow sign points west to the main square. The evening shadows are lengthening as you set off from the eagle once more.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 216,
                content: "Turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 264
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 264,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Dahir Mountains",
            regionType: "MOUNTAIN",
            description:
                "The Dahir Mountains are a barren, sun-scorched mountain range lying in the south of Barrakeesh.",
            imageUrl: "images/shadow/regions/dahir_mountains.png",
        },
        content: "A terrible shriek rings out above the rush of the wind, filling your head with pain. You are being attacked by a powerful Mindblast. Unless you possess the Kai Discipline of Mindshield, deduct 2 ENDURANCE points from your current total. The Itikar shudders and frantically twists its head from side to side as the shriek rings out again. You sense that the great bird is in agony, racked by the Mindblast. As you glance over your shoulder, your stomach becomes knotted with fear—a Kraan is swooping down to attack. On its back is your adversary: a Vordak, one of the undead and a hideous lieutenant of the Darklords. As the Kraan streaks towards you, the Vordak spreads its red-robed arms and leaps from the saddle. It lands behind you, astride the Itikar’s back, its skeletal fingers sunk deep into your mount’s feathered flesh. The shock of the impact throws you forward, and the reins slip from your hands. The giant bird screeches in horror and pain as the Vordak’s grip paralyses its spine. You must act quickly, for the Itikar is now plummeting towards the salt-plain of Lake Inrahim.",
        events: [
            {
                eventType : "CHANGE_ENDURANCE_EVENT",
                ranking : 1,
                amount : -2,
            },
        ],
        outcomes: [
            {
                outcomeType : "ITEM",
                targetNr: 315,
                item : {
                    code : "SOMMERSWERD",
                    name : "Sommerswerd",
                    description : "Sommerswerd",
                    imageUrl : "images/flight/items/sommerswerd.png"
                },
                content : "If you possess the Sommerswerd, turn to "
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 299,
                content: "If you do not possess this Special Item, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 265
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 265,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png",
        },
        content:
            "She refuses to say anything until you have placed some money in her begging bowl.",
        outcomes: [
            {
                outcomeType : "GOLD",
                targetNr: 397,
                amount : 1,
                content : "If you wish to give her a Gold Crown, make the adjustment to your Action Chart and turn to "
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 256,
                content: "If you do not wish, or cannot afford, to give her any gold, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 266
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 266,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Grand Palace",
            regionType: "STONE_BUILDING",
            description: "The biggest building in Barrakeesh. ",
            imageUrl: "images/shadow/regions/chula.png",
        },
        content:
            "Your Kai skill warns you that two palace guards are running up the spiral stairs from their guardroom in the base of the tower. Quickly, you ascend the stairs before the Drakkarim enter and see in which direction you have gone.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 322,
                content: "Turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 267
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 267,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png",
        },
        content:
            "The Drakkarim falter, blinded by the flash. Nolrim seizes the opportunity and urges his brethren forward against the invaders, leading the attack with his mighty battle-axe. Its razor edge whines and strikes sparks against the enemies’ black armour, cutting through their unsteady ranks like a scythe through blighted corn. You climb back onto the platform and see a Drakkar about to strike Banedon. The wizard seems unconcerned about the screaming warrior who threatens to decapitate him with a black broadsword. Banedon points his finger at the Drakkar, who is poised to strike.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 330,
                content: "If you wish to attack the Drakkar before he lands his blow upon Banedon’s head, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 394,
                content: "If you do not wish to attack, turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 268
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 268,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Boat Crossing",
            regionType: "CITY_OUTSKIRTS",
            description: "The outer fildworks of the city can now be seen.",
            imageUrl: "images/shadow/regions/holmguardoutskirts.png",
        },
        content:
            "You black out for only a few minutes before you are revived with a measure of strong spirit. Feeling weary but thankful to be alive, you lean on the shoulders of the King’s men and you stagger towards the outer defences.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 288,
                content: "Turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 269
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 269,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Holmgard",
            regionType: "CITY",
            description:
                "Holmgard is the capital of Sommerlund and is a seaport on the Holmgulf. It is located near the Graveyard of the Ancients. The city is enclosed by grey-white walls two hundred feet in height whose gatehouses are 100 yards long. At the center of the city is the Citadel of the King.",
            imageUrl: "images/shadow/regions/holmguard.png",
        },
        content:
            "The madman lies dead at your feet. Two soldiers soon appear at the doorway and immediately congratulate you. They tell you that he was an escaped lunatic whom they had been tracking for the last two days. One of the soldiers gives you 10 Gold Crowns reward money and offers to escort you to the citadel.",
        events: [
            {
                eventType: "CHANGE_GOLD_AMOUNT_EVENT",
                ranking: 1,
                amount: 3,
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 314,
                content: "If you accept his offer, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 7,
                content: "If you would prefer to trust your own sense of direction, turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 270
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 270,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Yellow Marsh",
            regionType: "MARSH",
            description: "You soon realize that you are walking deeper into a wooded marsh.",
            imageUrl: "images/shadow/regions/yellowmarch.png",
        },
        content:
            "You hear the angry cries of the enemy drift across the lake. You must leave here before more Kraan appear. You mount your steed and push on further into the forest.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 21,
                content: "Turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 271
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 271,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "You feel very weak. The poison of the snake has entered your bloodstream and you can feel the muscles of your body involuntarily tightening and relaxing. Your legs suddenly collapse beneath you and you feel the slimy water of the marsh close over your head. Your life ends here.",
        events: [
            {
                eventType: "MISSION_FAILED_EVENT",
                ranking: 1,
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 272
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 272,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Fogwood",
            regionType: "VILLAGE",
            description:
                "A little path through the wood leads to Gogwood, a small cluster of huts that have beein used by a family of charcoal burnder for nearly fifty years.",
            imageUrl: "images/shadow/regions/fogwood.png",
        },
        content:
            "Keeping a watchful eye on the sky above, you move quickly along the track. You recall that this route leads to Fogwood, a small cluster of huts that have been used by a family of charcoal burners for nearly fifty years. After twenty minutes you reach the edge of a clearing where the huts are grouped in a small circle. There is no sign of the usual mist of wood smoke which gives Fogwood its apt name, and the huts are unusually quiet.",
        outcomes: [
            {
                outcomeType: "ABILITY",
                targetNr: 134,
                ability: {
                    abilityType: "TRACKING",
                    description:
                        "This skill enables a Kai Lord to make the correct choice of a path in the wild, to discover the location of a person or object in a town or city and to read the secrets of footprints or tracks.",
                },
                content: "If you have the Kai Discipline of Tracking, you may turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 305,
                content:
                    "If you do not possess this skill, you prepare your weapon and stealthily approach the huts. Turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 273
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 273,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Boat Crossing",
            regionType: "CITY_OUTSKIRTS",
            description: "The outer fildworks of the city can now be seen.",
            imageUrl: "images/shadow/regions/holmguardoutskirts.png",
        },
        content:
            "The outer fieldworks of the city can now be seen. Drawn across the river is a line of barges chained together to form a floating barricade. You can also see soldiers running along the log walls of the fieldworks, and you can hear the faint noise of battle drifting from the west.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 179,
                content: "If you wish to approach the barges, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 51,
                content: "If you wish to take cover in the trees, turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 274
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 274,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "In your haste to avoid the enemy, you catch your foot in a tree root and you are pitched head over heels in a tumble of dust and leaves. You quickly get to your feet and, crashing through the undergrowth at the base of the hill, you run into the forest. You have been running for nearly ten minutes when you discover that you have lost your Weapon(s). Well, at least you still have your life and your Backpack. Wiping the grime from your face, you push on through the trees ahead.",
        events: [
            {
                eventType: "DROP_ALL_WEAPONS_EVENT",
                ranking: 1,
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 331,
                content: "Turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 275
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 275,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "You have followed this twisting track for about twenty minutes when you hear the beating of wings high above the trees. Looking up you see a large Kraan approaching from the north, its huge black wings casting a gigantic shadow on the trees below. On its back are two creatures armed with long spears. They are Mountain Giaks—small ugly creatures full of hatred and malice. Many centuries ago, their ancestors were used by the Darklords to build the infernal city of Helgedad, which lies in the volcanic wastelands beyond the Durncrag mountain range. The construction of the city was long and torturous, and only the strongest of the creatures survived the heat and poisonous atmosphere of Helgedad. Quickly you dive for the shelter of a large fern tree as the Kraan passes overhead. With heart pounding, you pray that your quick reactions have saved you from being spotted. Pick a number from the Random Number Table.",
        outcomes: [
            {
                outcomeType: "RANDOM",
                targetNr: 345,
                intervall: {
                    min: 0,
                    max: 4,
                },
                content: "If the number you have picked is 0–4, turn to",
            },
            {
                outcomeType: "RANDOM",
                targetNr: 74,
                intervall: {
                    min: 5,
                    max: 9,
                },
                content: "If the number is 5–9, turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 276
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 276,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "Reaching for your weapon you manage to hack your way through the tangle of wood and twisted branches to the clearer forest beyond. Your cloak is torn in several places and your right leg is badly bruised above the knee.",
        events: [
            {
                eventType: "CHANGE_ENDURANCE_EVENT",
                ranking: 1,
                amount: -1,
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 213,
                content: "Lose 1 ENDURANCE point and turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 277
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 277,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "When you awake, you find yourself lying at the foot of a steep slope in a tangle of tall grasses. Your Backpack and Weapon are missing and your head aches. You cannot tell how long you have been unconscious, but you realize that you must not delay in pressing on with your mission. Standing up, you see your Backpack is intact but one Weapon is broken in two and is now useless. Remember to cross it off your Action Chart. You quickly pick up your Backpack and move off into the trees ahead.",
        events: [
            {
                eventType: "DROP_WEAPON_EVENT",
                ranking: 1,
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 113,
                content: "Turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 278
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 278,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "You quickly leave the path and gallop off along the track heading towards the capital. When you reach the point where the Doomwolves stopped, you can see just beyond a meadow the main highway which runs from the northern port of Toran to Holmgard. You should reach the capital by morning.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 149,
                content: "Turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 279
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 279,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Main Road",
            regionType: "ROAD",
            description:
                "The Main Road is the main passage between the port of Toran in the north and the capital in the south.",
            imageUrl: "images/shadow/regions/sommerlundmainroad.png",
        },
        content:
            "You clamber over the loose rocks and into the mouth of the cave, and then quickly turn to push a large rock over the entrance. After a few minutes you see the Giaks on the rocky ledge outside, their evil yellow eyes furtively searching every crevice of the hillside. They are so close that you feel sure that they must spot you any second now. Pick a number from the Random Number Table.",
        outcomes: [
            {
                outcomeType: "RANDOM",
                targetNr: 112,
                intervall: {
                    min: 0,
                    max: 6,
                },
                content: "If the number you have picked is 0–6, turn to",
            },
            {
                outcomeType: "RANDOM",
                targetNr: 96,
                intervall: {
                    min: 7,
                    max: 9,
                },
                content: "If the number is 7–9, turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 280
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 280,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "As you begin your climb, you hear the beat of wings approaching from the west. Kraan! By the noise they are making you estimate there are at least ten, perhaps more. You curse your bad luck, for the hillside offers no cover from the sky. If you are attacked during this difficult climb, you will find it nearly impossible to fight back and remain upright at the same time.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 327,
                content:
                    "If you decide to draw your weapon and remain completely still, in the hope that the Kraan will not spot you, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 170,
                content:
                    "If you decide to quickly descend the hillside and take cover in the tunnel, turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 281
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 281,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "As you race through the trees you can hear the horrible cackle of the Giaks close behind you. Soon the trees start to thin out and directly ahead you can see a rocky hillside.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 311,
                content: "f you break cover and climb up the hill, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 77,
                content:
                    "If you change direction and continue your run through the forest, turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 282
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 282,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Kings Citadel",
            regionType: "CITADEL",
            description:
                "The Kings Citadel is the highest law enforcement and paramilitary organization in Holmgard.",
            imageUrl: "images/shadow/regions/holmguardcitadel.png",
        },
        content:
            "Looking above the heads of the crowd, you notice that one of the shops opposite the main gate is the timbered surgery of a city physician. Suddenly, a bold plan springs to mind. Bracing yourself against the tide of bodies, you struggle across to the other side of the street. You quickly enter to find that there is no sign of life, apart from a brightly coloured parrot in its cage by the window. Taking a selection of small bottles you slip on a white surgeon’s cloak, and fight your way back to the main gate. ‘An emergency!’ you bluff, as guards stop and question you. ‘It’s the royal cook’s wife ... she’s having a baby.’ The guards hesitate for a moment, but you assure them that the matter is most urgent and they decide to let you in. One of the great doors swings open about two feet, and you are roughly pushed through the narrow gap into the courtyard beyond.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 11,
                content: "Turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 283
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 283,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "You are only ten feet or so away from the robed stranger when the raven squawks a warning to its master who instantly spins around. You are frozen in your tracks by the hideous apparition of a Vordak, a lieutenant of the Darklords and one of the undead. You must fight him. Due to the surprise of your attack, you may add 2 points to your COMBAT SKILL for the first round of combat only. Unless you have the Kai Discipline of Mindshield, deduct 2 points from your COMBAT SKILL for the second and subsequent rounds of fighting, for the creature is attacking you with the power of its Mindforce as well as with a large black mace!",
        events: [
            {
                eventType: "TEMPORARY_CHANGE_COMBAT_SKILL_EVENT",
                ranking: 1,
                amount: 2,
            },
            {
                eventType: "COMBAT",
                ranking: 2,
                creature: {
                    name: "Vordak",
                    combatSkill: 18,
                    endurance: 25,
                    imageUrl: "images/shadow/creatures/vordak.png",
                },
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 123,
                content: "If you win, turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 284
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 284,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Graveyard of the Ancients",
            regionType: "GRAVEYARD",
            description:
                "The Graveyard of the Ancients is an ancient, mist-shrouded graveyard just North of Holmgard. This place is taboo because of the nameless horrors that inhabit it. No one knows who lies in eternal unrest here but the Evil that lives there is more ancient than the Darklords.",
            imageUrl: "images/shadow/regions/graveyardofancients.png",
        },
        content:
            "Your passage through the Graveyard will not be easy, for the ground is broken and covered with a thorny graveweed. This wicked briar tears your cloak and cuts your legs. The air hangs heavy and still. Foul gases seep from open crypts and the haunting murmur of distant whispering fills your ears. Carefully, you approach a gap between two ancient pillars, and part the graveweed with your cloaked hand. Suddenly, the ground collapses beneath you and you fall in a tumble of earth and stone.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 71,
                content: "Turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 285
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 285,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Ruins of Raumas",
            regionType: "TEMPLE_RUIN",
            description:
                "Edging nearer, you soon make out a clearing that you recognize to be the site of the ruins of Raumas.",
            imageUrl: "images/shadow/regions/runinsofraumas.png",
        },
        content:
            "With a sickening thud, the chunk of marble cracks open the back of the Giak’s head. The creature drops to its knees and slowly falls forward, down to the ruins below. Elated by your skill, you race forward to aid the young wizard.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 235,
                content: "Turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 286
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 286,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "Messengers of death—and ones eager to deliver their news—the Doomwolves surround and then attack you. Valiantly you fight, but it is to no avail for there are too many of them. As your life’s blood seeps away and eternal dark approaches, the last sight you remember is the glint of sunlight on the spires of Holmgard. You have failed in your mission.",
        events: [
            {
                eventType: "MISSION_FAILED_EVENT",
                ranking: 1,
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 287
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 287,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "The track soon disappears completely into a tangle of thorny brambles and low-branched fir trees.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 13,
                content: "If you decide to return to the junction and head east, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 330,
                content:
                    "If you decide to hack your way slowly through the undergrowth in this present direction, turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 288
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 288,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Boat Crossing",
            regionType: "CITY_OUTSKIRTS",
            description: "The outer fildworks of the city can now be seen.",
            imageUrl: "images/shadow/regions/holmguardoutskirts.png",
        },
        content:
            "As you reach the walls of the fieldworks, the large oak gates open and you are quickly hurried inside. A sergeant, bloodstained and battle-weary, calls to an officer who turns and recognizes your cloak. ‘My Lord,’ he says. ‘Where are the other Kai Masters? We are in desperate need of their wisdom. The Darklords press us most cruelly and casualties are high. You inform the brave officer of the terrible fate of your kinsmen, and the urgency of your mission to seek the King’s council. Without saying a word, he motions to a soldier to bring forward two horses. You both mount and gallop off towards the high city wall of Holmgard.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 129,
                content: "Turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 289
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 289,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Kings Citadel",
            regionType: "CITADEL",
            description:
                "The Kings Citadel is the highest law enforcement and paramilitary organization in Holmgard.",
            imageUrl: "images/shadow/regions/holmguardcitadel.png",
        },
        content:
            "The two guards look tired and anxious. They nervously hold their royal halberds in front of themselves, using the weapons to push away anyone who comes too close to the gates. An angry woman attacks one of them, pounding his chest with her clenched fists making him fall against the other guard. All three collapse in a struggling heap of flailing arms and legs. Seeing your chance, you dash forward and pull the large lever which opens the great doors. You slip inside and the doors close without either of the guards seeing you enter.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 139,
                content: "Turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 290
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 290,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "Inside the long box is a sword wrapped in leather. You may take this Weapon if you wish. You close the box and descend the ladder to the clearing below, taking care to use only the sound rungs.",
        events: [
            {
                eventType: "ACQUIRE_ITEM_EVENT",
                ranking: 1,
                item: {
                    name: "Sword",
                    itemType: "WEAPON",
                    description: "Sword",
                    weight: "MEDIUM",
                    imageUrl: "images/shadow/items/sword.png",
                },
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 140,
                content: "Turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 291
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 291,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "The two Giaks lie at your feet, their bodies twisted and lifeless. A quick search reveals 6 Gold Crowns, 2 Spears, and a Dagger. You may keep the Gold and take either the Dagger or a Spear. Remember to mark this on your Action Chart. The Kraan flew off during your battle, and the track is now deserted. You adjust your Backpack and continue your mission.",
        events: [
            {
                eventType: "ACQUIRE_ITEM_EVENT",
                ranking: 1,
                item: {
                    name: "Sword",
                    itemType: "WEAPON",
                    description: "Sword",
                    weight: "MEDIUM",
                    imageUrl: "images/shadow/items/sword.png",
                },
            },
            {
                eventType: "ACQUIRE_ITEM_EVENT",
                ranking: 2,
                item: {
                    name: "Spear",
                    itemType: "WEAPON",
                    description: "Spear",
                    weight: "MEDIUM",
                    imageUrl: "images/shadow/items/spear.png",
                },
            },
            {
                eventType: "CHANGE_GOLD_AMOUNT_EVENT",
                ranking: 3,
                amount: 6,
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 272,
                content: "Turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 292
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 292,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Graveyard of the Ancients",
            regionType: "GRAVEYARD",
            description:
                "The Graveyard of the Ancients is an ancient, mist-shrouded graveyard just North of Holmgard. This place is taboo because of the nameless horrors that inhabit it. No one knows who lies in eternal unrest here but the Evil that lives there is more ancient than the Darklords.",
            imageUrl: "images/shadow/regions/graveyardofancients.png",
        },
        content:
            "The last thing that you experience of this life is the feeling of being sucked into the void of darkness. No trace of you remains in this world, for you have passed into a realm of timeless existence. You have become a slave of an ancient evil. Your adventure ends here.",
        events: [
            {
                eventType: "MISSION_FAILED_EVENT",
                ranking: 1,
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 293
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 293,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Ruins of Raumas",
            regionType: "TEMPLE_RUIN",
            description:
                "Edging nearer, you soon make out a clearing that you recognize to be the site of the ruins of Raumas.",
            imageUrl: "images/shadow/regions/runinsofraumas.png",
        },
        content:
            "With a wave of his hand, Banedon leaves the ruins and you continue your mission, pushing on through the thick woods ahead. You have not gone far when you realize several pairs of yellow eyes are watching you from the undergrowth to your left. Suddenly, a black arrow skims the top of your head. It is a Giak ambush and you must run as fast as you can to escape it.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 281,
                content: "Turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 294
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 294,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Silvermoon Lake",
            regionType: "LAKE",
            description: "The Silvermoon Lake is a ...",
            imageUrl: "images/shadow/regions/silvermoonlake.png",
        },
        content:
            "Staying underwater for as long as you can, you finally surface to see the Giaks far behind you. You have lost your Weapon(s) and Backpack but at least you are still alive. You wade out of the muddy water and continue your journey under cover of the trees that line the right-hand bank. Pick a number from the Random Number Table.",
        outcomes: [
            {
                outcomeType: "RANDOM",
                targetNr: 230,
                intervall: {
                    min: 0,
                    max: 2,
                },
                content: "If the number you pick is 0–2, turn to",
            },
            {
                outcomeType: "RANDOM",
                targetNr: 190,
                intervall: {
                    min: 3,
                    max: 6,
                },
                content: "If the number is 3–6, turn to",
            },
            {
                outcomeType: "RANDOM",
                targetNr: 321,
                intervall: {
                    min: 7,
                    max: 9,
                },
                content: "If the number is 7–9, turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 295
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 295,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "You have continued your journey for about fifteen minutes when suddenly a black arrow whistles past your head and embeds itself in a tree. Instinctively you duck and draw your weapon.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 185,
                content:
                    "If you wish to remain where you are in order to try to spot the hidden archer, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 92,
                content: "If you wish to run for the cover of denser undergrowth, turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 296
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 296,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Silvermoon Lake",
            regionType: "LAKE",
            description: "The Silvermoon Lake is a ...",
            imageUrl: "images/shadow/regions/silvermoonlake.png",
        },
        content:
            "You sense something is wrong. With fighting all around and the forces of the Darklords so near, why has this man stayed in the forest? You feel a strange aura of evil about him and decline his offer.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 90,
                content: "Turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 297
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 297,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "Using the skills taught to you by your masters in the art of Hunting, you inch your way through the foliage undetected. In less than a minute you are directly behind, and only a few feet from, the stake to which the ranger is tied. The wood is alight and great clouds of smoke are engulfing the poor victim. You take your weapon and run forward, hidden by the smoke. One blow of your weapon is all that is needed to sever his bonds, and you pull him free and back into the safety of the forest. As you press on into the forest, you hear the shrieks of the Giaks as they discover that their prisoner has literally disappeared in a cloud of smoke!",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 117,
                content: "Turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 298
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 298,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "The head of the bird slowly turns and it curses you. An instant later, it flies off above the trees and has soon disappeared. Shocked by what you have heard you are now sure that the fledgling was a scout of the Darklords and is now probably on its way to inform them of your whereabouts.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 121,
                content: "If you wish to continue your journey along the track, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 38,
                content:
                    "If you wish to leave the track and continue through the forest instead, turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 299
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 299,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Yellow Marsh",
            regionType: "MARSH",
            description: "You soon realize that you are walking deeper into a wooded marsh.",
            imageUrl: "images/shadow/regions/yellowmarch.png",
        },
        content:
            "You soon realize that you are walking deeper into a wooded marsh. To continue in this direction will be slow and hazardous.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 227,
                content: "If you wish to continue, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 95,
                content: "If you wish to change direction and head towards firmer ground, turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 300
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 300,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "You walk for over an hour, during which time you keep a constant vigil for any sign of Kraan in the sky above. You have twice spotted their tell-tale shadows in the sky and on both occasions your quick wits have saved you from capture. You are now very hungry and must eat a Meal.",
        events: [
            {
                eventType: "CHANGE_RATION_AMOUNT_EVENT",
                ranking: 1,
                amount: -1,
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 13,
                content: "You may now continue on your journey by turning to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 301
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 301,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Clearing",
            regionType: "CLEARING",
            description:
                "You pass through a long, dark tunnel of voerhanging branches that eventually opens out into a large clearing.",
            imageUrl: "images/shadow/regions/clearing.png",
        },
        content: "Your Kai Discipline reveals that the west path is a dead end.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 27,
                content: "You choose the south path and turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 302
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 302,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Ruins of Raumas",
            regionType: "TEMPLE_RUIN",
            description:
                "Edging nearer, you soon make out a clearing that you recognize to be the site of the ruins of Raumas.",
            imageUrl: "images/shadow/regions/runinsofraumas.png",
        },
        content: "Pick a number from the Random Number Table.",
        outcomes: [
            {
                outcomeType: "RANDOM",
                targetNr: 110,
                intervall: {
                    min: 0,
                    max: 2,
                },
                content: "If the number you have picked is 0–2, turn to",
            },
            {
                outcomeType: "RANDOM",
                targetNr: 285,
                intervall: {
                    min: 3,
                    max: 9,
                },
                content: "If the number is 3–9, turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 303
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 303,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "The forest here is sparse and hilly. It does not give much cover from an attack from the air. You move as quickly as you can from tree to tree, to avoid the Kraan but you can hear the sound of Doomwolves close behind.",
        outcomes: [
            {
                outcomeType: "ABILITY",
                targetNr: 237,
                ability: {
                    abilityType: "CAMOUFLAGE",
                    description:
                        "This Discipline enables a Kai Lord to blend in with his surroundings. In the countryside, he can hide undetected among trees and rocks and pass close to an enemy without being seen. In a town or city, it enables him to look and sound like a native of that area, and can help him to find shelter or a safe hiding place.",
                },
                content: "If you have the Kai Discipline of Camouflage, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 72,
                content: "If you do not, turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 304
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 304,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "The Gem feels incredibly hot and burns your hand. Lose 2 ENDURANCE points. You quickly pick it up with the edge of your Kai cloak and slip this Vordak Gem into your Backpack. A Gem that size must be worth hundreds of Crowns. But the Giaks are very close and their arrows whistle past your head as you turn and run for the safety of the forest.",
        events: [
            {
                eventType: "CHANGE_ENDURANCE_EVENT",
                ranking: 1,
                amount: -2,
            },
            {
                eventType: "ACQUIRE_ITEM_EVENT",
                ranking: 2,
                item: {
                    name: "Glowing Gem",
                    itemType: "MAGICAL_ITEM",
                    description: "Glowing Gem",
                    weight: "SMALL",
                    imageUrl: "images/shadow/items/glowinggem.png",
                },
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 2,
                content: "Turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 305
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 305,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "Through the open doorway of the first hut, you can see the body of a charcoal burner lying face down on the rough stone floor. He has been murdered, stabbed in the back by a spear. All his furniture and belongings have been smashed and broken and not one piece remains intact. This is the evil handiwork of Giaks without any doubt, for they delight in the destruction of all things. A quick check of the other huts reveals a similar story of murder and wreckage. In the last hut that you search, you discover a Giak Spear—proof of your suspicions. You may keep this Weapon if you wish. More determined than ever now to succeed in your mission, you continue along the track.",
        events: [
            {
                eventType: "ACQUIRE_ITEM_EVENT",
                ranking: 1,
                item: {
                    name: "Spear",
                    itemType: "WEAPON",
                    description: "Spear",
                    weight: "MEDIUM",
                    imageUrl: "images/shadow/items/spear.png",
                },
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 105,
                content: "Turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 306
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 306,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Dragon Bridge",
            regionType: "BRIDGE",
            description: "The Dragon Bridge connects the northern and southern part of Summerlund.",
            imageUrl: "images/shadow/regions/dragonbridge.png",
        },
        content:
            "The sound of battle gradually fades behind you. Suddenly, you are pulled to the ground. Three Drakkarim have dropped from a tree above. You struggle but it is useless for there are too many of them for you and they are very strong.The last thing that you hear is the vicious snarls of Drakkarim as they raise their spears. Your life and your mission end here.",
        events: [
            {
                eventType: "MISSION_FAILED_EVENT",
                ranking: 1,
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 307
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 307,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Treehouse",
            regionType: "WOOD_BUILDING",
            description:
                "Looking up through the massive branches you can see a large treehouse some twhety-five feet above teh ground. There is no ladder, but the ganreld bark of teh tree offers many footholds.",
            imageUrl: "images/shadow/regions/treehouse.png",
        },
        content:
            "Your climb is swift and easy. It reminds you of the many trees that you climbed and explored near Toran as a child, when you wanted to pick fruit or to look out over the beautiful countryside of Sommerlund. Pushing open the treehouse door, you see an old hermit huddled in the corner of the small cabin. A look of great relief spreads across his face as he recognizes your green Kai cloak. He tells you that this area is full of Giaks, and that he has counted over forty Kraan flying over his home in the last three hours. They were heading east. He scurries over to a cupboard and returns with a plate of fresh fruit. You thank him and place the fruit in your Backpack. There is enough for one Meal. The hermit also produces a fine Warhammer and lays it upon a table by the door. Your need is greater than mine, Kai Lord,’ he says. ‘Please take this trusty Warhammer if you so wish. You may take this Weapon only if you exchange it for another Weapon already in your possession, for it is the only defence that the hermit has against the enemy. Thanking the old man, you carefully descend the tree and continue on your mission.",
        events: [
            {
                eventType: "ACQUIRE_ITEM_EVENT",
                ranking: 1,
                item: {
                    name: "Warhammer",
                    itemType: "WEAPON",
                    description: "Warhammer",
                    weight: "HEAVY",
                    imageUrl: "images/shadow/items/warhammer.png",
                },
            },
            {
                eventType: "CHANGE_RATION_AMOUNT_EVENT",
                ranking: 2,
                amount: 1,
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 213,
                content: "Turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 308
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 308,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "The stable door is open and you can hear the breathing of a horse from inside the darkened interior. Suddenly, the horse senses your presence and rushes past, knocking you to the ground. You lose 1 ENDURANCE point.",
        events: [
            {
                eventType: "CHANGE_ENDURANCE_EVENT",
                ranking: 1,
                amount: -1,
            },
        ],
        outcomes: [
            {
                outcomeType: "ABILITY",
                targetNr: 122,
                ability: {
                    abilityType: "ANIMAL_KINSHIP",
                    description:
                        "This skill enables a Kai Lord to communicate with some animals and to be able to guess the intentions of others.",
                },
                content: "If you wish to use the Kai Discipline of Animal Kinship, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 233,
                content: "If you wish to chase after the runaway horse, turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 309
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 309,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "You have taken less than ten paces when the raven squawks a warning to the stranger. Turning to face you, the robed creature utters a piercing screech that freezes your blood and grips your stomach with fear and panic. It is a Vordak, a lieutenant of the Darklords and one of the undead. Within seconds, a host of Giaks appear at its side and attack you. You fight bravely but you are greatly outnumbered. The last thing you remember is the icy grasp of the Vordak’s skeletal fingers as they close around your throat. Your life and your mission end here.",
        events: [
            {
                eventType: "MISSION_FAILED_EVENT",
                ranking: 1,
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 310
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 310,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Holmgard",
            regionType: "CITY",
            description:
                "Holmgard is the capital of Sommerlund and is a seaport on the Holmgulf. It is located near the Graveyard of the Ancients. The city is enclosed by grey-white walls two hundred feet in height whose gatehouses are 100 yards long. At the center of the city is the Citadel of the King.",
            imageUrl: "images/shadow/regions/holmguard.png",
        },
        content:
            "You notice a small faded sign on the wall of a building opposite. You remember that the royal court sessions are held within the citadel and you are sure that the west road must lead there.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 37,
                content: "Turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 311
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 311,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "The hillside is steep and the earth is loose and slippery. You chance a swift glance over your shoulder and see the two Giaks emerge from the woods. They start to climb after you. About halfway from the peak of the hill, you spot a cave to your right, almost totally hidden by a landslide.",
        outcomes: [
            {
                outcomeType: "ABILITY",
                targetNr: 324,
                ability: {
                    abilityType: "CAMOUFLAGE",
                    description:
                        "This Discipline enables a Kai Lord to blend in with his surroundings. In the countryside, he can hide undetected among trees and rocks and pass close to an enemy without being seen. In a town or city, it enables him to look and sound like a native of that area, and can help him to find shelter or a safe hiding place.",
                },
                content: "If you have the Kai Discipline of Camouflage, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 279,
                content: "If you wish to hide in the cave, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 47,
                content:
                    "If you wish to avoid the cave and continue your climb to the peak, turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 312
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 312,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "You curse your ill luck. It seems that nature and the Darklords have conspired against you, but it does not shake your determination to reach the King. Wiping the sticky mud from your clothes, you turn and press on into the forest.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 299,
                content: "Turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 313
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 313,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "Wiping the foul Giak blood from your weapon, you quickly descend the hillside before the Kraan spots its dead riders. Many times you lose your footing on the loose rocks, falling several feet. Deduct 1 ENDURANCE point for cuts and bruises to your legs.",
        events: [
            {
                eventType: "CHANGE_ENDURANCE_EVENT",
                ranking: 1,
                amount: -1,
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 248,
                content: "Turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 314
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 314,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Kings Citadel",
            regionType: "CITADEL",
            description:
                "The Kings Citadel is the highest law enforcement and paramilitary organization in Holmgard.",
            imageUrl: "images/shadow/regions/holmguardcitadel.png",
        },
        content:
            "It takes you nearly an hour to reach the citadel. When you arrive you find that the citizens of Holmgard are in panic and confusion. Your escort approaches the armoured guards at the main entrance and tells them of your urgent message for the King. Pick a number from the Random Number Table.",
        outcomes: [
            {
                outcomeType: "RANDOM",
                targetNr: 341,
                intervall: {
                    min: 0,
                    max: 6,
                },
                content: "If you have picked a number that is 0–6, turn to",
            },
            {
                outcomeType: "RANDOM",
                targetNr: 98,
                intervall: {
                    min: 7,
                    max: 9,
                },
                content: "If the number is 7–9, turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 315
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 315,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Dragon Bridge",
            regionType: "BRIDGE",
            description: "The Dragon Bridge connects the northern and southern part of Summerlund.",
            imageUrl: "images/shadow/regions/dragonbridge.png",
        },
        content:
            "Wrapped in a bundle of women’s clothing is a small velvet purse containing 6 Gold Crowns. You may take these items and continue your journey.",
        events: [
            {
                eventType: "CHANGE_GOLD_AMOUNT_EVENT",
                ranking: 1,
                amount: 6,
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 213,
                content: "Turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 316
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 316,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "In your haste to avoid the enemy, you catch your foot in a tree root and you are pitched head over heels in a tumble of dust and leaves. Crashing through the undergrowth at the base of the hill, you quickly pick up your weapon and run into the thick forest. The Kraan is no longer circling above, but you can make out the silhouette of two Giaks on the peak of the hill behind. Wiping the grime from your eyes, you wince as you discover a large bruise on your forehead. Without delay, you run deeper into the safety of the forest.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 331,
                content: "Turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 317
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 317,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Boat Crossing",
            regionType: "CITY_OUTSKIRTS",
            description: "The outer fildworks of the city can now be seen.",
            imageUrl: "images/shadow/regions/holmguardoutskirts.png",
        },
        content:
            "Instinctively you dive away from the stairs, and land on the stone floor. Your quick reactions have saved your life, for a vast granite block has fallen from the ceiling and crushed the steps, just in front of the lockplate! Shaken but still in one piece, you get to your feet. A shaft of dull grey light is seeping into the chamber from above, where the stone block was. Through a hole in the ceiling you can see a tangle of graveweed and the cloudy sky above. You clamber out of the tomb and head for the arched south gate of the necropolis as fast as possible. The pointed log walls of the city’s outer defence works are now visible.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 61,
                content: "Turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 318
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 318,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Boat Crossing",
            regionType: "CITY_OUTSKIRTS",
            description: "The outer fildworks of the city can now be seen.",
            imageUrl: "images/shadow/regions/holmguardoutskirts.png",
        },
        content:
            "Two soldiers and a sergeant run towards you, their crossbows aimed at your head. As they get nearer, they recognize your Kai cloak and a look of relief spreads across their faces. ‘My Lord,’ says the sergeant, ‘where are the other Kai Masters? We are in desperate need of their wisdom. The Darklords press us most cruelly and our casualties are high.’ You inform the brave soldier of the fate of your kinsmen, and the urgency of your mission to see the King. He takes you back to the barges where an officer accompanies you on horseback towards the high walls and the main gate of Holmgard.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 129,
                content: "Turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 319
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 319,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Clearing",
            regionType: "CLEARING",
            description:
                "You pass through a long, dark tunnel of voerhanging branches that eventually opens out into a large clearing.",
            imageUrl: "images/shadow/regions/clearing.png",
        },
        content:
            "The slimy creature lets out a long, ghastly death-cry and collapses. You are near to panic and scramble to your feet, grabbing what you think to be your belt from the jaws of the dead beast. You can see light in the far distance, and you sprint for it as fast as you can. When you finally emerge into the daylight, you fall onto the leafy ground and fight for breath in painful gasps. Slowly sitting upright, you notice that you are still wearing your belt—you had not lost it after all. What you grabbed from the jaw of the Burrowcrawler was a leather strap with a small pouch and a sheathed Dagger halfway along it. You break open the clasp to find it contains 20 Gold Crowns. You may take both the Dagger and the Crowns if you are able to. Feeling a little better now, you gather your Equipment together and push on eastwards into the forest.",
        events: [
            {
                eventType: "CHANGE_GOLD_AMOUNT_EVENT",
                ranking: 1,
                amount: 20,
            },
            {
                eventType: "ACQUIRE_ITEM_EVENT",
                ranking: 2,
                item: {
                    name: "Dagger",
                    itemType: "WEAPON",
                    description: "Dagger",
                    weight: "SMALL",
                    imageUrl: "images/shadow/items/dagger.png",
                },
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 157,
                content: "Turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 320
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 320,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "As you race across the open field towards the wood, a Kraan dives at you and claws your arm. Before you can fight back, it has flown off again, shrieking with cold malice. You enter the wood, but you have lost 2 ENDURANCE points.",
        events: [
            {
                eventType: "CHANGE_ENDURANCE_EVENT",
                ranking: 1,
                amount: -2,
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 264,
                content: "Turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 321
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 321,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Silvermoon Lake",
            regionType: "LAKE",
            description: "The Silvermoon Lake is a ...",
            imageUrl: "images/shadow/regions/silvermoonlake.png",
        },
        content:
            "You walk for nearly an hour along the twisting river’s edge. Beyond the next turn you can hear the faint noise of battle. You carefully climb a steep hillock to get a better view of the area.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 269,
                content: "Turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 322
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 322,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "After what seems an eternity of struggling, you reach the peak of the steep hill. Behind you, above the canopy of trees, you can see the still smouldering remains of the monastery. To the north, a column of jet-black smoke rises high into the sky. Small orange tongues of flame flicker at its base. Your heart sinks as you realize that the port of Toran is ablaze. Suddenly, a piercing cry above warns you that a Kraan is about to attack. It is about thirty yards away and diving for the kill.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 17,
                content: "If you are going to stand and fight it as it swoops down, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 89,
                content:
                    "If you are going to evade its attack and slide down the other side of the hill, away from the Kraan, turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 323
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 323,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Old Watch Tower",
            regionType: "WOOD_BUILDING",
            description: "The old Watchtower is ...",
            imageUrl: "images/shadow/regions/ruinwatchtower.png",
        },
        content:
            "From the top of the tower you can see above the trees in all directions. Far to the north, a column of jet-black smoke rises high into the sky. Small orange tongues of flame flicker at its base. Your heart sinks as you realize that the port of Toran is ablaze. From the southwest, the wind carries the noise of battle. It is close; no more than five miles at most. On the floor of the watchtower is a large oblong box.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 290,
                content: "If you wish to open this box, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 140,
                content:
                    "If you would prefer to descend the ladder and leave the tower, taking care to use only the good rungs, turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 324
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 324,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Main Road",
            regionType: "ROAD",
            description:
                "The Main Road is the main passage between the port of Toran in the north and the capital in the south.",
            imageUrl: "images/shadow/regions/sommerlundmainroad.png",
        },
        content:
            "You pull up your hood and drop down behind the rocks that litter the mouth of the cave. Holding your breath, you curl up into a tight ball, and completely cover yourself with your green cloak. Only a few minutes later the Giaks clamber over the rocky ledge outside, their evil yellow eyes furtively searching every crevice of the hillside. Then cursing in their strange tongue, they leave the ledge and start to climb towards the peak. You silently thank your old Masters for teaching you the Kai Discipline of Camouflage—it has probably saved your life on this occasion.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 33,
                content: "If you wish to explore the cave, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 248,
                content:
                    "If you wish to leave and descend the hill in case the Giaks return, turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 325
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 325,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Ruins of Raumas",
            regionType: "TEMPLE_RUIN",
            description:
                "Edging nearer, you soon make out a clearing that you recognize to be the site of the ruins of Raumas.",
            imageUrl: "images/shadow/regions/runinsofraumas.png",
        },
        content:
            "Upon seeing you emerge from the woods, the Giak officer shouts ‘Ogot! Ogot!’ to his cowering troops, who flee the ruins and run to the safety of the forest. Shaking his mailed fist at you, the black-clad Giak screams, ‘RANEG ROGAG OK—ORGADAKA OKAK ROGAG GAJ!’ before leaving. Surveying the scene of battle, you count over fifteen Giak dead lying among the broken pillars of Raumas. The young wizard wipes his brow and walks towards you, his hand extended in friendship.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 349,
                content: "Turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 326
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 326,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Graveyard of the Ancients",
            regionType: "GRAVEYARD",
            description:
                "The Graveyard of the Ancients is an ancient, mist-shrouded graveyard just North of Holmgard. This place is taboo because of the nameless horrors that inhabit it. No one knows who lies in eternal unrest here but the Evil that lives there is more ancient than the Darklords.",
            imageUrl: "images/shadow/regions/graveyardofancients.png",
        },
        content:
            "You carefully insert the Key and turn it clockwise. You hear a dull click—the Key works. You lift out the pin, and the large granite door slowly swings towards you on hidden hinges. The grey half-light of the Graveyard floods into the tomb. The exit is overgrown with graveweed and you suffer many cuts to your face and arms as you fight your way through to the surface. Looking back, you see the tomb door slowly close and a cruel inhuman laugh seems to rise out of the very ground on which you stand. In blind panic, you race through the eerie necropolis towards the south gate.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 61,
                content: "Turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 327
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 327,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "Within a few minutes, you can see the Kraan hovering over a hilltop behind you. At a quick count you can make out at least sixteen of these horrible creatures, each of which has at least two Giaks riding upon its back. They are armed with long spears and wear tall pointed helmets of dull bronze. You hear the excited grunts of the Giaks. They have spotted you. You jump for the entrance of the tunnel some twenty-five feet below, but your boot gets caught in a thorny briar and you hang helplessly upside down—weaponless and vulnerable. Fortunately for you the end is swift: As the first Giak lance pierces your heart, death is instantaneous. Your life and your mission end here.",
        events: [
            {
                eventType: "MISSION_FAILED_EVENT",
                ranking: 1,
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 328
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 328,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "As the creature dies, its body slowly dissolves into a vile green liquid. You notice that the grass and plants beneath the smoking fluid are beginning to shrivel and die. But a large valuable looking Gem lies on the ground near to the decaying body.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 76,
                content: "If you wish to take the Gem, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 118,
                content: "If you would rather leave as quickly as possible, turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 329
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 329,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Graveyard of the Ancients",
            regionType: "GRAVEYARD",
            description:
                "The Graveyard of the Ancients is an ancient, mist-shrouded graveyard just North of Holmgard. This place is taboo because of the nameless horrors that inhabit it. No one knows who lies in eternal unrest here but the Evil that lives there is more ancient than the Darklords.",
            imageUrl: "images/shadow/regions/graveyardofancients.png",
        },
        content:
            "As you descend the ridge towards the Graveyard of the Ancients, you are aware of a strange mist and cloud that swirls all around this grey and forbidding place, blocking the sun and keeping the Graveyard in perpetual gloom. A creeping chill seems to penetrate your very bones. Your horse becomes startled and no matter how you urge him on, he refuses to go any nearer to this dreadful place. So you must leave your horse and press on by foot.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 284,
                content: "Turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 330
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 330,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Dragon Bridge",
            regionType: "BRIDGE",
            description: "The Dragon Bridge connects the northern and southern part of Summerlund.",
            imageUrl: "images/shadow/regions/dragonbridge.png",
        },
        content:
            "Fatigued by your exertions, you stop to rest for a few minutes at a fallen tree. You notice a large bundle, beneath the trunk.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 315,
                content: "If you wish to examine the contents of the bundle, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 213,
                content: "If you wish to leave it where it is and continue your mission, turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 331
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 331,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Clearing",
            regionType: "CLEARING",
            description:
                "You pass through a long, dark tunnel of voerhanging branches that eventually opens out into a large clearing.",
            imageUrl: "images/shadow/regions/clearing.png",
        },
        content:
            "Surrounded by thorny briars and closely packed roots, you see the entrance of a tunnel disappearing into the hillside beyond. It is approximately seven feet in height and just over ten feet wide. As you get closer, you can feel a slight breeze coming from the inky blackness. If the other end of this tunnel emerges on the far side of the hill, it could save you many hours of difficult climbing. But it could also harbour unknown danger.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 170,
                content: "If you wish to enter the tunnel, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 280,
                content: "If you would prefer to climb the hillside, turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 332
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 332,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Kings Citadel",
            regionType: "CITADEL",
            description:
                "The Kings Citadel is the highest law enforcement and paramilitary organization in Holmgard.",
            imageUrl: "images/shadow/regions/holmguardcitadel.png",
        },
        content:
            "You walk for nearly ten minutes along a dark and winding corridor, and then start to climb a steep staircase to a small wooden door. The man presses a secret catch and the door opens. You enter a large, plushly decorated bedroom with a huge marble bath that takes up one corner of the room. The man suggests that you refresh yourself here whilst he seeks an audience with the King. You quickly bathe and change into some white robes that have been left out on a large marble table. Shortly, the man returns and leads you through a long corridor lined with exquisite tapestries. You finally arrive at a large door guarded by two soldiers wearing silver armour. You are about to meet the King.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 350,
                content: "Turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 333
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 333,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "You have cut your way through the thick undergrowth for nearly half an hour when you hear the beat of wings high above the trees. Looking up you can just make out the shape of a Kraan approaching from the north. It is one of the monsters that attacked the monastery and on its back are two grey-skinned creatures armed with long spears. These are Mountain Giaks—evil servants of the Darklords, full of hatred and malice. Many centuries ago, their ancestors were used by the Darklords to build the infernal city of Helgedad, which lies in the volcanic wastelands beyond the Durncrag range of mountains. The construction of the city was long and torturous and only the strongest of the Giaks survived the heat and poisonous atmosphere of Helgedad. Hidden by the trees, you freeze, keeping absolutely still as the Kraan passes overhead and disappears towards the south. When you are sure that it has gone, you move off once again into the forest.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 131,
                content: "Turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 334
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 334,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "As the stream vanishes up into the rocky hillside, you can see on the track above four soldiers and their officer. They wear the uniform of the King’s army.",
        outcomes: [
            {
                outcomeType: "ABILITY",
                targetNr: 48,
                ability: {
                    abilityType: "SIXTH_SENSE",
                    description:
                        "This skill may warn a Kai Lord of imminent danger. It may also reveal the true purpose of a stranger or strange object encountered in your adventure.",
                },
                content: "If you wish to use the Kai Discipline of Sixth Sense, turn to",
            },
            {
                outcomeType: "ABILITY",
                targetNr: 73,
                ability: {
                    abilityType: "CAMOUFLAGE",
                    description:
                        "This Discipline enables a Kai Lord to blend in with his surroundings. In the countryside, he can hide undetected among trees and rocks and pass close to an enemy without being seen. In a town or city, it enables him to look and sound like a native of that area, and can help him to find shelter or a safe hiding place.",
                },
                content:
                    "If you wish to use the Kai Discipline of Camouflage and wait for them to pass, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 162,
                content: "If you wish to approach them, turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 335
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 335,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "As you approach, the black bird flies off above the trees and soon disappears from view. You search the tree on which it was perched but find nothing unusual. Rather than waste any more precious time, you continue off along the track.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 121,
                content: "Turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 336
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 336,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "You rush into the clearing and take the Giaks completely by surprise. Without a moment’s hesitation, you strike out at the one nearest to you. He is dead before his body hits the ground. The other Giaks unsheathe their curved swords and attack you. You must fight them one at a time.",
        events: [
            {
                eventType: "COMBAT",
                ranking: 1,
                creature: {
                    name: "Giak",
                    combatSkill: 13,
                    endurance: 10,
                    imageUrl: "images/shadow/creatures/giak.png",
                },
            },
            {
                eventType: "COMBAT",
                ranking: 2,
                creature: {
                    name: "Giak",
                    combatSkill: 12,
                    endurance: 10,
                    imageUrl: "images/shadow/creatures/giak.png",
                },
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 117,
                content: "If you win, you free the ranger and turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 337
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 337,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Graveyard of the Ancients",
            regionType: "GRAVEYARD",
            description:
                "The Graveyard of the Ancients is an ancient, mist-shrouded graveyard just North of Holmgard. This place is taboo because of the nameless horrors that inhabit it. No one knows who lies in eternal unrest here but the Evil that lives there is more ancient than the Darklords.",
            imageUrl: "images/shadow/regions/graveyardofancients.png",
        },
        content:
            "Just as you remove the ornate pin, a loud crack deafens you. Pick a number from the Random Number Table.",
        outcomes: [
            {
                outcomeType: "RANDOM",
                targetNr: 219,
                intervall: {
                    min: 0,
                    max: 4,
                },
                content: "If the number picked is 0–4, turn to",
            },
            {
                outcomeType: "RANDOM",
                targetNr: 317,
                intervall: {
                    min: 5,
                    max: 9,
                },
                content: "If the number is 5–9, turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 338
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 338,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "When you awake, you find yourself lying at the foot of a steep slope in a tangle of long grasses. Your Backpack and Weapons are missing and your head aches violently. You cannot tell how long you have been unconscious, but you realize that time is running out and you must press on. Standing up, you notice your Backpack and Weapon on the slope above. They must have broken free when you fell. You quickly retrieve them and move off into the trees ahead.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 113,
                content: "Turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 339
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 339,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Holmgard",
            regionType: "CITY",
            description:
                "Holmgard is the capital of Sommerlund and is a seaport on the Holmgulf. It is located near the Graveyard of the Ancients. The city is enclosed by grey-white walls two hundred feet in height whose gatehouses are 100 yards long. At the center of the city is the Citadel of the King.",
            imageUrl: "images/shadow/regions/holmguard.png",
        },
        content:
            "You quickly sidestep just as a long dagger shatters the glass top of the counter. A swarthy youth is attacking you and you must fight him.",
        events: [
            {
                eventType: "COMBAT",
                ranking: 1,
                creature: {
                    name: "Human",
                    combatSkill: 10,
                    endurance: 10,
                    imageUrl: "images/shadow/creatures/human.png",
                },
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 94,
                content: "If you kill him within 4 rounds of Combat, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 203,
                content: "If you are still fighting after 4 rounds of Combat, turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 340
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 340,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Main Road",
            regionType: "ROAD",
            description:
                "The Main Road is the main passage between the port of Toran in the north and the capital in the south.",
            imageUrl: "images/shadow/regions/sommerlundmainroad.png",
        },
        content:
            "You gallop forward to meet the oncoming Doomwolf and rider, your Weapon raised to strike. The Giak sees you and unsheathes his scimitar. You must fight both Giak and Doomwolf as one enemy.",
        events: [
            {
                eventType: "COMBAT",
                ranking: 1,
                creature: {
                    name: "Doomwolf",
                    combatSkill: 12,
                    endurance: 12,
                    imageUrl: "images/shadow/creatures/doomwolf.png",
                },
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 193,
                content: "If you win the fight, turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 341
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 341,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Kings Citadel",
            regionType: "CITADEL",
            description:
                "The Kings Citadel is the highest law enforcement and paramilitary organization in Holmgard.",
            imageUrl: "images/shadow/regions/holmguardcitadel.png",
        },
        content:
            "The guards do not believe your story and refuse to let you enter. Your escort disappears into the crowd and you are left alone to find your way in this confused city. Shocked, and then dejected by such a rebuff, you are carried along by the crowds until you find yourself at the entrance to the Guildhall. It stands at one side of the Guild Bridge which crosses the River Eledil near where it joins the Holmgulf.",
        outcomes: [
            {
                outcomeType: "ABILITY",
                targetNr: 310,
                ability: {
                    abilityType: "TRACKING",
                    description:
                        "This skill enables a Kai Lord to make the correct choice of a path in the wild, to discover the location of a person or object in a town or city and to read the secrets of footprints or tracks.",
                },
                content: "If you wish to use the Kai Discipline of Tracking, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 210,
                content: "If you wish to enter the Guildhall, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 37,
                content: "If you wish to search for another route into the citadel, turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 342
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 342,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "As your voice echoes through the trees, the stranger slowly turns to face you. Your heart pounds and your blood freezes as you realize that the stranger is not human. It is a Vordak, a hideous lieutenant of the Darklords and one of the undead. A piercing scream fills your ears, and the creature raises a huge black mace above its head and charges at you. Frozen with horror, you can also feel the Vordak attacking you with the force of its mind.",
        events: [
            {
                eventType: "COMBAT",
                ranking: 1,
                creature: {
                    name: "Vordak",
                    combatSkill: 18,
                    endurance: 25,
                    imageUrl: "images/shadow/creatures/vordak.png",
                },
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 123,
                content: "If you win, turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 343
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 343,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "You are held by the mass of tangled branches and roots. Eventually you free your right hand, grab your weapon, and hack your way slowly through the foliage to the clearer forest beyond. Your cloak is torn in several places and your left arm is cut and badly bruised above the elbow.",
        events: [
            {
                eventType: "CHANGE_ENDURANCE_EVENT",
                ranking: 1,
                amount: -2,
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 213,
                content: "Lose 2 ENDURANCE points and turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 344
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 344,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Holmgard",
            regionType: "CITY",
            description:
                "Holmgard is the capital of Sommerlund and is a seaport on the Holmgulf. It is located near the Graveyard of the Ancients. The city is enclosed by grey-white walls two hundred feet in height whose gatehouses are 100 yards long. At the center of the city is the Citadel of the King.",
            imageUrl: "images/shadow/regions/holmguard.png",
        },
        content:
            "You are weak and dizzy. You can no longer feel your legs and they refuse to bear your weight. You try to crawl for the door but the robber jumps on you and pins you to the ground.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 340,
                content: "Turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 345
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 345,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "You pull up the hood of your green Kai cloak and hold your breath as the Kraan circles above. After a few minutes, you hear the frantic curses of the Giaks. The beating of Kraan wings fades, as they disappear towards the west. Your quick reactions have saved you from capture and likely death.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 272,
                content: "You can now return to the track, by turning to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 19,
                content: "Or push on under cover of the trees. Turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 346
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 346,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "Lodged deep in the rib cage of the skeleton is a Spear. It is in good condition and you may take it if you wish and are able to.",
        events: [
            {
                eventType: "ACQUIRE_ITEM_EVENT",
                ranking: 1,
                item: {
                    name: "Spear",
                    itemType: "WEAPON",
                    description: "Spear",
                    weight: "MEDIUM",
                    imageUrl: "images/shadow/items/spear.png",
                },
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 14,
                content: "To leave the clearing, turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 347
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 347,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "The trees start to thin out, and just ahead you can make out the silhouette of an old log cabin beneath an oak tree. This hut seems to have been abandoned and there is little of apparent value left behind. Opening a small chest near the main door, you discover bunches of twigs that have been tied together with strong twine. One end of each bundle has been coated with pitch. They are Torches. Next to the chest are a Short Sword and a Tinderbox. You may take them and a Torch if you wish but make sure, that you mark them on your Action Chart. Closing the door of the cabin, you head off along an overgrown path towards the northeast.",
        events: [
            {
                eventType: "ACQUIRE_ITEM_EVENT",
                ranking: 1,
                item: {
                    name: "Torch",
                    itemType: "UTILITY",
                    description: "Torch",
                    weight: "SMALL",
                    imageUrl: "images/shadow/items/torch.png",
                },
            },
            {
                eventType: "ACQUIRE_ITEM_EVENT",
                ranking: 2,
                item: {
                    name: "Tinderbox",
                    itemType: "UTILITY",
                    description: "Tinderbox",
                    weight: "SMALL",
                    imageUrl: "images/shadow/items/tinderbox.png",
                },
            },
            {
                eventType: "ACQUIRE_ITEM_EVENT",
                ranking: 3,
                item: {
                    name: "Sword",
                    itemType: "WEAPON",
                    description: "Sword",
                    weight: "MEDIUM",
                    imageUrl: "images/shadow/items/sword.png",
                },
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 103,
                content: "Turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 348
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 348,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Yellow Marsh",
            regionType: "MARSH",
            description: "You soon realize that you are walking deeper into a wooded marsh.",
            imageUrl: "images/shadow/regions/yellowmarch.png",
        },
        content:
            "Raising your boot to kick away the dead snake, your heart skips a beat as you realize that it was a Red Marshviper. There is no known cure for its venomous bite! You decide that to go any further in this direction would be suicide. Carefully retracing your steps, you eventually reach firm ground and continue on your mission.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 95,
                content: "Turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 349
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 349,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Ruins of Raumas",
            regionType: "TEMPLE_RUIN",
            description:
                "Edging nearer, you soon make out a clearing that you recognize to be the site of the ruins of Raumas.",
            imageUrl: "images/shadow/regions/runinsofraumas.png",
        },
        content:
            "He is a young blond-haired youth with deep brooding eyes. His face is lined with exhaustion and the grime of battle, and his long sky-blue robes bear evidence of living rough in the wilds. He shakes your hand and bows. ‘My eternal thanks, Kai Lord. My powers are nearly drained. Had you not come to my aid, I fear I would have ended my days atop a Giak lance.’ He is weak and unsteady on his feet. You take his arm and sit him down upon a fallen pillar where you listen intently to what he has to say. ‘My name is Banedon. I am journeyman to the Brotherhood of the Crystal Star, which is the Magicians’ Guild of Toran. My Guildmaster has sent me to your monastery with this urgent message.’ He removes a vellum envelope from inside his robes and handd it to you. ‘As you see, I have opened the letter and read its contents. When the war started, I was on the highway with two travelling companions. The Kraan attacked us and we lost each other in the forest during our escape. The letter is a warning to the Kai Lords that the Darklords have mustered a vast army beyond the Durncrag Range. The Guildmaster urges the Kai to cancel the celebrations of Fehmarn and prepare for war. I fear we were betrayed,’ says Banedon, his head bowed in sorrow. ‘One of my order, a brother called Vonotar, had explored the forbidden mysteries of the Black Art. Ten days ago he denounced the Brotherhood and killed one of our Elders. He has since disappeared. It is rumoured that he now aids the Darklords.’ You tell Banedon what has happened at the monastery, and of your mission to warn the King. Silently, he removes a gold chain from around his neck and hands it to you. On the chain is a small Crystal Star Pendant. ‘It is the symbol of my Brotherhood, and we are both truly brothers in this hour of darkness. It is a talisman of good fortune—may it protect you on your road ahead.’ You thank him, place the chain around your neck, and slip the Crystal Star4 inside your shirt. (Remember to mark this on your Action Chart.) Banedon bids you farewell. ‘We must leave this place lest the Giaks return with more of their loathsome kind to put an end to us. I must return to my Guild. I bid you farewell, my brother. May the luck of the gods go with you.’",
        events: [
            {
                eventType: "ACQUIRE_ITEM_EVENT",
                ranking: 1,
                item: {
                    name: "Crystal Star",
                    itemType: "MAGICAL_ITEM",
                    description: "Crystal Star",
                    weight: "SMALL",
                    imageUrl: "images/shadow/items/crystalstar.png",
                },
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 95,
                content: "Turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 350
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 350,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        content:
            "You enter the Chamber of State, a magnificent hall decorated lavishly in white and gold. The King and his closest advisers are studying a large map spread upon a marble plinth in the centre of the chamber. Their faces are lined with worry and concentration. A silence fills the hall as you tell of the death of your kinsmen and of your perilous journey to the citadel. As you finish your story, the King approaches and takes your right hand in his. Lone Wolf, you have selfless courage: the quality of a true Kai Lord. Your journey here has been one of great peril and although your news comes as a grievous blow, the spirit of your determination is like a beacon of hope to us all in this dark hour. You have brought great honour to the memory of your Masters, and for that we praise you.’ You receive the praise and heartfelt thanks of the entire hall—an honour that brings a certain redness to your young face. The King raises his hand and all the voices cease. ‘You have done all that Sommerlund could have asked of a loyal son, but she is greatly in need of you still. The Darklords are powerful once more and their ambition knows no bounds. Our only hope lies within Durenor with the power that once defeated the Darklords an age ago. Lone Wolf, you are the last of the Kai—you have the skills. Will you journey to Durenor and return with the Sommerswerd, the sword of the sun?  Only with that gift of the gods may we crush this evil and save our land.’ If you wish to accept the quest of the Sommerswerd, begin your adventure with Book 2 of the Lone Wolf adventures: Fire on the Water",
        events: [
            {
                eventType: "MISSION_ACCOMPLISHED_EVENT",
                ranking: 1,
                book: {
                    name: "Shadow on the Sand",
                    imageUrl: "images/shadow/title.jpg",
                    author: "Joe Dever",
                    illustrator: "Gary Chalk",
                },
            },
        ],
    },
]);

db.lw5.find();
