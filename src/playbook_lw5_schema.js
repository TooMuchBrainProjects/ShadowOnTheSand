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
                                "CONSTRUCTION_SITE",
                                "CONTINENT",
                                "EVIL_TEMPLE",
                                "GRAVEYARD",
                                "HARBOUR",
                                "ISLAND",
                                "KINGDOM",
                                "LAKE",
                                "OASIS",
                                "PLACES_OF_WORSHIP",
                                "ROOM",
                                "MARSH",
                                "MOUNTAIN",
                                "RIVER",
                                "RIVER_BANK",
                                "RIVER_VALLEY",
                                "ROAD",
                                "SEWER",
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
                                    "DROP_ITEM_EVENT",
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
            {
                code: "SHORT_SWORD",
                name: "Short Sword",
                itemType: "WEAPON",
                description: "Short Sord",
                weight: "MEDIUM",
                imageUrl: "images/shadow/items/shortsword.png",
            },
            {
                code: "WARHAMMER",
                name: "Warhammer",
                itemType: "WEAPON",
                description: "Warhammer",
                weight: "HEAVY",
                imageUrl: "images/shadow/items/warhammer.png",
            },
            {
                code: "SWORD",
                name: "Sword",
                itemType: "WEAPON",
                description: "Sword",
                weight: "MEDIUM",
                imageUrl: "images/shadow/items/sword.png",
            },
            {
                code: "AXE",
                name: "Axe",
                itemType: "WEAPON",
                description: "Axe",
                weight: "HEAVY",
                imageUrl: "images/shadow/items/axe.png",
            },
            {
                code: "QUARTER_STAFF",
                name: "Quarterstaff",
                itemType: "WEAPON",
                description: "Quarterstaff",
                weight: "SMALL",
                imageUrl: "images/shadow/items/quarterstaff.png",
            },
            {
                code: "BROADSWORD",
                name: "Broadsword",
                itemType: "WEAPON",
                description: "Broadsword",
                weight: "HEAVY",
                imageUrl: "images/shadow/items/broadsword.png",
            },
            {
                code: "VORDAK_GEM",
                name: "Vordak Gem",
                itemType: "WEAPON",
                description: "Vordak Gem",
                weight: "SMALL",
                imageUrl: "images/shadow/items/vordakgem.png",
            },
            {
                code: "BACK_PACK",
                name: "Back Pack",
                itemType: "WEAPON",
                description: "Back Pack",
                weight: "SMALL",
                imageUrl: "images/shadow/items/backpack.png",
            },
            {
                code: "GOLDEN_KEY",
                name: "Golden Key",
                itemType: "WEAPON",
                description: "Golden Key",
                weight: "SMALL",
                imageUrl: "images/shadow/items/goldenkey.png",
            },
            {
                code: "BLACK_SASHE",
                name: "Black sashe",
                itemType: "MAGICAL_ITEM",
                description: "Black sashe",
                weight: "SMALL",
                imageUrl: "images/shadow/items/black_sashe.png",
            },
            {
                code: "TINCTURE_OF_CALACENA",
                name: "Tincture of Calacena",
                itemType: "UTILITY",
                description: "causes terrifying hallucinations for 1–2 hours per dose",
                weight: "SMALL",
                imageUrl: "images/shadow/items/tincture_of_calacena.png",
            },
            {
                code: "GRAVEWEED_TINCTURE",
                name: "Tincture of Graveweed",
                itemType: "UTILITY",
                description: "causes sickness and loss of 2 ENDURANCE points per dose",
                weight: "SMALL",
                imageUrl: "images/shadow/items/tincture_of_graveweed.png",
            },
            {
                code: "VIAL_OF_LARNUMA OIL",
                name: "Vial of Larnuma Oil",
                itemType: "UTILITY",
                description: "restores 2 ENDURANCE points per dose",
                weight: "SMALL",
                imageUrl: "images/shadow/items/vial_of_larnuma_oil.png",
            },
            {
                code: "POTION_OF_LAUMSPUR",
                name: "Potion of Laumspur",
                itemType: "POTION",
                description: "restores 4 ENDURANCE points per dose",
                weight: "SMALL",
                imageUrl: "images/shadow/items/potion_of_laumspur.png",
            },
            {
                code: "GALLOWBRUSH_POTION",
                name: "Potion of Gallowbrush",
                itemType: "POTION",
                description: "induces sleep for 1–2 hours per dose",
                weight: "SMALL",
                imageUrl: "images/shadow/items/potion_of_gallowbrush.png",
            },
            {
                code: "POTION_OF_ALETHER",
                name: "Potion of Alether",
                itemType: "POTION",
                description: "increases COMBAT SKILL by 2 for the duration of 1 combat",
                weight: "SMALL",
                imageUrl: "images/shadow/items/potion_of_alether.png",
            },
            {
                code: "BRASS_WISTLE",
                name: "Brass Whistle",
                itemType: "MAGICAL_ITEM",
                description: "Brass Whistle",
                weight: "MEDIUM",
                imageUrl: "images/shadow/items/brass_whistle.png",
            },
            {
                code: "BOTTLE_OF_KOURSHAH",
                name: "Bottle of Kourshah",
                itemType: "POTION",
                description:
                    "There is enough Kourshah in the bottle to restore a further 4 ENDURANCE points.",
                weight: "MEDIUM",
                imageUrl: "images/shadow/items/bottle_of_kourshah.png",
            },
            {
                code: "SOMMERSWERD",
                name: "Sommerswerd",
                itemType: "WEAPON",
                description: "Sommerswerd",
                weight: "MEDIUM",
                imageUrl: "images/shadow/items/sommerswerd.png",
            },
            {
                code: "BLOWPIPE",
                name: "Blowpipe",
                itemType: "WEAPON",
                description: "A blowpipe for shooting darts at your target.",
                weight: "MEDIUM",
                imageUrl: "images/shadow/items/blowpipe.png",
            },
            {
                code: "SLEEP_DART",
                name: "Sleep Dart",
                itemType: "WEAPON",
                description: "A dart to be shot with a blowpipe that lets your target fall asleep.",
                weight: "SMALL",
                imageUrl: "images/shadow/items/sleep_dart.png",
            },
            {
                code: "CRYSTAL_STAR_PENDANT",
                name: "Crystal star pendant",
                itemType: "GEM",
                description: "Crystal star pendant",
                weight: "SMALL",
                imageUrl: "images/shadow/items/crystal_star_pendant.png",
            },
            {
                code: "ONYX_MEDALLION",
                name: "Onyx Medallion",
                itemType: "MAGICAL_ITEM",
                description:
                    "This Special Item, torn from the armour of a renegade Vassagonian captain during the battle of Ruanon, enables you to communicate with the Itikar",
                weight: "SMALL",
                imageUrl: "images/shadow/items/onyx_medallion.png",
            },
            {
                code: "ROPE",
                name: "Rope",
                itemType: "UTILITY",
                description: "Rope",
                weight: "SMALL",
                imageUrl: "images/shadow/items/rope.png",
            },
            {
                code: "PRISM",
                name: "Prism",
                itemType: "UTILITY",
                description: "glass prism",
                weight: "SMALL",
                imageUrl: "images/shadow/items/prism.png",
            },
            {
                code: "BLUE_STONE_TRIANGLE",
                name: "Blue Stone Triangle",
                itemType: "UTILITY",
                description: "a blue triangle made out of stone",
                weight: "SMALL",
                imageUrl: "images/shadow/items/blue_stone_triangle.png",
            },
            {
                code: "COPPER_KEY",
                name: "Copper Key",
                itemType: "KEY",
                description: "Copper Key",
                weight: "SMALL",
                imageUrl: "images/shadow/items/copperkey.png",
            },
            {
                code: "OEDE_HERB",
                name: "Sufficient Oede",
                itemType: "HERB",
                description:
                    "golden leaves which heal many deadly diseases or restore 10 ENDURANCE if swallowed after combat",
                weight: "SMALL",
                imageUrl: "images/shadow/items/oedeherb.png",
            },
            {
                code: "BLACK_CRYSTAL_CUBE",
                name: "Black crystal cube",
                itemType: "MAGICAL_ITEM",
                description: "Black crystal cube",
                weight: "SMALL",
                imageUrl: "images/shadow/items/black_crystal_cube.png",
            },
            {
                code: "GAOLERS_KEYS",
                name: "Gaoler's Keys",
                itemType: "KEY",
                description: "Gaoler's Keys",
                weight: "SMALL",
                imageUrl: "images/shadow/items/gaolerskeys.png",
            },
            {
                code: "JEWELLED_MACE",
                name: "Jewelled Mace",
                itemType: "WEAPON",
                description: "a mace full of juwels",
                weight: "HEAVY",
                imageUrl: "images/shadow/items/jewelled_mace.png",
            },
            {
                code: "CANTEEN",
                name: "Canteen",
                itemType: "UTILITY",
                description: "a little canteen",
                weight: "SMALL",
                imageUrl: "images/shadow/items/canteen.png",
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
                            description:
                                "The sewer of Barrakeesh, a dirty and disgusting place, full with rats and insects. The water is thick with scum, and the glutinous mire is clotted with green and black filth.",
                            imageUrl: "images/shadow/regions/baga-darooz.png",
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
                            regions: [
                                {
                                    name: "Excavation Site",
                                    regionType: "CONSTRUCTION_SITE",
                                    description:
                                        'An excavation site in the Koneshi Mountains delving the Tomb of Majhan. Commanded by Darklord Haakon in order to find the "Book of the Magnakai"',
                                    imageUrl: "images/shadow/regions/excavation_site.png",
                                    regions: [
                                        {
                                            name: "Tomb of the Majhan",
                                            regionType: "EVIL_TEMPLE",
                                            description:
                                                'an old tomb where Darklord Haakon hopes to find the "Book of the Magnakai"',
                                            imageUrl:
                                                "images/shadow/regions/tomb_of_the_Majhan.png",
                                            regions: [
                                                {
                                                    name: "Throne Chamber",
                                                    regionType: "ROOM",
                                                    description:
                                                        "A large chamber within the Tomb of the Majhan. It is dimly lit and thick dust covers the marble floor. At the side of the chamber that is opposed to the large stone door there is a rough stone throne.",
                                                    imageUrl:
                                                        "images/shadow/regions/throne_chamber.png",
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
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
            description:
                "The sewer of Barrakeesh, a dirty and disgusting place, full with rats and insects. The water is thick with scum, and the glutinous mire is clotted with green and black filth.",
            imageUrl: "images/shadow/regions/baga-darooz.png",
        },
        content:
            "The air of the new tunnel is hot and humid, and as you press on, the putrid gas makes you increasingly nauseous. You are forced to stop—the vapour is burning your throat and causing painful stomach cramps. Suddenly a noise makes you forget your discomfort; you turn to see that one of Maouk’s men has caught up with you. He looms out of the darkness, his face covered by a pad of herbs. Deduct 2 points from your COMBAT SKILL due to the effects of the noxious fumes.",
        events: [
            {
                eventType: "COMBAT",
                ranking: 1,
                creature: {
                    name: "Sharnazim Warrior",
                    combatSkill: 17,
                    endurance: 22,
                    imageUrl: "images/shadow/creatures/sharnazimwarrior.png",
                },
            },
            {
                eventType: "TEMPORARY_CHANGE_COMBAT_SKILL_EVENT",
                ranking: 2,
                amount: -2,
            },
            {
                eventType: "CHANGE_ENDURANCE_EVENT",
                ranking: 3,
                amount: 3,
            },
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
                outcomeType: "ABILITY",
                targetNr: 186,
                ability: {
                    abilityType: "CAMOUFLAGE",
                    description:
                        "This Discipline enables a Kai Lord to blend in with his surroundings. In the countryside, he can hide undetected among trees and rocks and pass close to an enemy without being seen. In a town or city, it enables him to look and sound like a native of that area, and can help him to find shelter or a safe hiding place.",
                },
                content: "If you have the Kai Discipline of Camouflage, turn to",
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
            },
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
                eventType: "CHANGE_RATION_AMOUNT_EVENT",
                ranking: 1,
                amount: 1,
            },
            {
                eventType: "CHANGE_ENDURANCE_EVENT",
                ranking: 2,
                amount: -3,
            },
        ],
        outcomes: [
            {
                outcomeType: "ABILITY",
                targetNr: 37,
                ability: {
                    abilityType: "TRACKING",
                    description:
                        "This skill enables a Kai Lord to make the correct choice of a path in the wild, to discover the location of a person or object in a town or city and to read the secrets of footprints or tracks.",
                },
                content: "If you have the Kai Discipline of Tracking, turn to ",
            },
            {
                outcomeType: "ABILITY",
                targetNr: 37,
                ability: {
                    abilityType: "SIXTH_SENSE",
                    description:
                        "This skill may warn a Kai Lord of imminent danger. It may also reveal the true purpose of a stranger or strange object encountered in your adventure.",
                },
                content: "If you have the Kai Discipline of Sixth Sense, turn to ",
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
                content:
                    "If you wish to ignore the sword and attack the second guard with your bare hands, turn to ",
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
            description:
                "The sewer of Barrakeesh, a dirty and disgusting place, full with rats and insects. The water is thick with scum, and the glutinous mire is clotted with green and black filth.",
            imageUrl: "images/shadow/regions/baga-darooz.png",
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
                content:
                    "If you wish to ignore the book and search for your confiscated equipment, turn to ",
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
                content: "If you decide to surrender to Maouk and his warriors, turn to ",
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
                outcomeType: "ABILITY",
                targetNr: 134,
                ability: {
                    abilityType: "ANIMAL_KINSHIP",
                    description:
                        "This skill enables a Kai Lord to communicate with some animals and to be able to guess the intentions of others.",
                },
                content: "If you have the Kai Discipline of Animal Kinship, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 12,
                content: "If you wish to fight the creature, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 95,
                content: "If you wish to evade the creature, turn to ",
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
            description:
                "The sewer of Barrakeesh, a dirty and disgusting place, full with rats and insects. The water is thick with scum, and the glutinous mire is clotted with green and black filth.",
            imageUrl: "images/shadow/regions/baga-darooz.png",
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
                outcomeType: "RANDOM",
                targetNr: 44,
                intervall: {
                    min: 0,
                    max: 2,
                },
                content: "If your total is now 2 or less, turn to ",
            },
            {
                outcomeType: "RANDOM",
                targetNr: 190,
                intervall: {
                    min: 3,
                    max: 9,
                },
                content: "If your total is now 3 or more, turn to ",
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
            description:
                "The sewer of Barrakeesh, a dirty and disgusting place, full with rats and insects. The water is thick with scum, and the glutinous mire is clotted with green and black filth.",
            imageUrl: "images/shadow/regions/baga-darooz.png",
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
                outcomeType: "RANDOM",
                targetNr: 5,
                intervall: {
                    min: 0,
                    max: 2,
                },
                content: "If your total score is now 0–2, turn to ",
            },
            {
                outcomeType: "RANDOM",
                targetNr: 38,
                intervall: {
                    min: 3,
                    max: 8,
                },
                content: "If your total score is now 3–8, turn to ",
            },
            {
                outcomeType: "RANDOM",
                targetNr: 87,
                intervall: {
                    min: 9,
                    max: 13,
                },
                content: "If your total score is now 9-13, turn to ",
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
                outcomeType: "ABILITY",
                targetNr: 42,
                ability: {
                    abilityType: "TRACKING",
                    description:
                        "This skill enables a Kai Lord to make the correct choice of a path in the wild, to discover the location of a person or object in a town or city and to read the secrets of footprints or tracks.",
                },
                content: "If you possess the Kai Discipline of Tracking, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 75,
                content: "If you wish to enter the gate, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 117,
                content: "If you wish to enter the alley, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 169,
                content: "If you decide to take the straight pathway through the arch, turn to ",
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
                eventType: "ACQUIRE_ITEM_EVENT",
                ranking: 1,
                item: {
                    name: "Potion of Alether",
                    itemType: "POTION",
                    description: "increases COMBAT SKILL by 2 for the duration of 1 combat",
                    weight: "SMALL",
                    imageUrl: "images/shadow/items/potion_of_alether.png",
                },
            },
            {
                eventType: "CHANGE_GOLD_AMOUNT_EVENT",
                ranking: 2,
                amount: -4,
            },
            {
                eventType: "ACQUIRE_ITEM_EVENT",
                ranking: 3,
                item: {
                    name: "Potion of Gallowbrush",
                    itemType: "POTION",
                    description: "induces sleep for 1–2 hours per dose",
                    weight: "SMALL",
                    imageUrl: "images/shadow/items/potion_of_gallowbrush.png",
                },
            },
            {
                eventType: "CHANGE_GOLD_AMOUNT_EVENT",
                ranking: 4,
                amount: -2,
            },
            {
                eventType: "ACQUIRE_ITEM_EVENT",
                ranking: 5,
                item: {
                    name: "Potion of Laumspur",
                    itemType: "POTION",
                    description: "restores 4 ENDURANCE points per dose",
                    weight: "SMALL",
                    imageUrl: "images/shadow/items/potion_of_laumspur.png",
                },
            },
            {
                eventType: "CHANGE_GOLD_AMOUNT_EVENT",
                ranking: 6,
                amount: -5,
            },
            {
                eventType: "ACQUIRE_ITEM_EVENT",
                ranking: 7,
                item: {
                    name: "Vial of Larnuma Oil",
                    itemType: "UTILITY",
                    description: "restores 2 ENDURANCE points per dose",
                    weight: "SMALL",
                    imageUrl: "images/shadow/items/vial_of_larnuma_oil.png",
                },
            },
            {
                eventType: "CHANGE_GOLD_AMOUNT_EVENT",
                ranking: 8,
                amount: -3,
            },
            {
                eventType: "ACQUIRE_ITEM_EVENT",
                ranking: 9,
                item: {
                    name: "Tincture of Graveweed",
                    itemType: "UTILITY",
                    description: "causes sickness and loss of 2 ENDURANCE points per dose",
                    weight: "SMALL",
                    imageUrl: "images/shadow/items/tincture_of_graveweed.png",
                },
            },
            {
                eventType: "CHANGE_GOLD_AMOUNT_EVENT",
                ranking: 10,
                amount: -1,
            },
            {
                eventType: "ACQUIRE_ITEM_EVENT",
                ranking: 11,
                item: {
                    name: "Tincture of Calacena",
                    itemType: "UTILITY",
                    description: "causes terrifying hallucinations for 1–2 hours per dose",
                    weight: "SMALL",
                    imageUrl: "images/shadow/items/tincture_of_calacena.png",
                },
            },
            {
                eventType: "CHANGE_GOLD_AMOUNT_EVENT",
                ranking: 12,
                amount: -2,
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
                outcomeType: "ABILITY",
                targetNr: 8,
                ability: {
                    abilityType: "SIXTH_SENSE",
                    description:
                        "This skill may warn a Kai Lord of imminent danger. It may also reveal the true purpose of a stranger or strange object encountered in your adventure.",
                },
                content:
                    "If you possess the Kai Disciplines of Mind Over Matter and Sixth Sense, turn to ",
            },
            {
                outcomeType: "ABILITY",
                targetNr: 8,
                ability: {
                    abilityType: "MIND_OVER_MATTER",
                    description:
                        "Mastery of this Discipline enables a Kai Lord to move small objects with his powers of concentration.",
                },
                content:
                    "If you possess the Kai Disciplines of Mind Over Matter and Sixth Sense, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 98,
                content: "If you do not have both of these skills, turn to ",
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
                content: "If you wish to hide in the cellar, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 99,
                content: "If you wish to leave the hallway, return to the plaza by turning to ",
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
        events: [
            {
                eventType: "CHANGE_ENDURANCE_EVENT",
                ranking: 1,
                amount: -2,
            },
            {
                eventType: "COMBAT",
                ranking: 2,
                creature: {
                    name: "Armoury Guard",
                    combatSkill: 16,
                    endurance: 22,
                    imageUrl: "images/shadow/creatures/armoury_guard.png",
                },
            },
            {
                eventType: "TEMPORARY_CHANGE_COMBAT_SKILL_EVENT",
                ranking: 3,
                amount: -2,
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
        content:
            "Your desire to leave this treacherous city is overcome by your fear of losing your arm. You must get the Oede herb, even though it means you will have to enter the very place you are most anxious to avoid—the Grand Palace. The alley follows a tortuous route through the Mikarum, finally leading you to the ‘Horm-tas-Lallaim’: the Tomb of the Princesses. Beyond the tomb, the Grand Palace rises like a massive white pantheon. You suddenly recall a legend told to you by your Kai masters long ago: ‘The Nemesis of the Black Zakhan’. The Black Zakhan was a brutal tyrant, the cruellest of an evil lineage that ruled over the desert empire long ago. The barbaric excesses of his reign have never been forgotten in the Lastlands. The Grand Palace was built by his army of slaves, prisoners from countries he had conquered in war. The palace became his obsession; he personally oversaw its entire construction and punished the workers personally if there was the slightest delay. He butchered his subjects indiscriminately and in the most terrible fashion. His favourite form of execution was for the victim to be sawn in half from head to foot until the body fell in two pieces. However, it was the mass execution of the slaves who built the Grand Palace that made him infamous. He slaughtered every slave worker so that his enemies could never learn of the secret treasure chambers he had had constructed. Among the slaves were his only daughters, Kebilla and Sousse, who openly opposed their father’s cruelty and tried to prevent the executions. In a blind rage, he ordered that they should be the first to die. It would have been better for the Zakhan, and for Vassagonia, if he himself had died that day. He lived for another two years, but his mind was unhinged by guilt, and he was tortured by self-loathing and despair. In the Grand Palace, the silence of the night was frequently broken by the Zakhan’s moans and cries, as he wandered from room to room looking for his daughters. When he died, he was laid beside them, here, in the Tomb of the Princesses. From where you stand, you can see two entrances to the Grand Palace; a spike-topped gate in the north wall, and an arch in the west wall, blocked by an iron portcullis. The palace is usually heavily guarded, but there are very few guards today; most are searching for you in the city.",
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
                content:
                    "If you wish to search for some other way of entering the Grand Palace, turn to ",
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
            description:
                "The sewer of Barrakeesh, a dirty and disgusting place, full with rats and insects. The water is thick with scum, and the glutinous mire is clotted with green and black filth. Restore 5 ENDURANCE points",
            imageUrl: "images/shadow/regions/baga-darooz.png",
        },
        content: "You are very lucky that your enemy was only trying to knock you unconscious",
        events: [
            {
                eventType: "CHANGE_ENDURANCE_EVENT",
                ranking: 1,
                amount: 5,
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
        events: [
            {
                eventType: "COMBAT",
                ranking: 1,
                creature: {
                    name: "Steamspiders",
                    combatSkill: 10,
                    endurance: 35,
                    imageUrl: "images/shadow/creatures/.png",
                },
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 114,
                content:
                    "If you are still alive after climbing past the nest, or if you fight the Steamspiders and win, turn to ",
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
                outcomeType: "ABILITY",
                targetNr: 144,
                ability: {
                    abilityType: "SIXTH_SENSE",
                    description:
                        "This skill may warn a Kai Lord of imminent danger. It may also reveal the true purpose of a stranger or strange object encountered in your adventure.",
                },
                content: "If you have the Kai Discipline of Sixth Sense, turn to ",
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
            description:
                "The sewer of Barrakeesh, a dirty and disgusting place, full with rats and insects. The water is thick with scum, and the glutinous mire is clotted with green and black filth.",
            imageUrl: "images/shadow/regions/baga-darooz.png",
        },
        content:
            "The water is becoming thicker, and the stench of the sewer gas increasingly more vile and nauseating. Suddenly the air becomes choked with thousands of tiny flies, and every time you gasp for breath you feel the thick fur of pulped bodies in your throat. The black specks build up like paste around your eyes, mouth, and nostrils, and the sharp tangy taste in your mouth makes you retch. Lose 1 ENDURANCE point. As if in answer to your prayers, an iron ladder appears from out of the gloom. It is fixed to the tunnel wall and leads up to a circular stone trapdoor in the ceiling.",
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
                targetNr: 31,
                content: "If you wish to climb the ladder, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 139,
                content:
                    "If you wish to ignore the ladder and press on along in the insect-choked tunnel, turn to ",
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
            description:
                "The sewer of Barrakeesh, a dirty and disgusting place, full with rats and insects. The water is thick with scum, and the glutinous mire is clotted with green and black filth.",
            imageUrl: "images/shadow/regions/baga-darooz.png",
        },
        content:
            "You knead your numb arm in an effort to massage some life back into it, but it is useless; the muscles are limp and nerveless. The only consolation is that it is not your weapon arm, but as long as you are suffering from this disease, you cannot use a shield of any sort. Deduct 3 points from your COMBAT SKILL—the lost points may be recovered if ever you should regain the use of your arm. You turn your attention to your surroundings in an effort to find some way of escape from the nightmarish sewer. The passage ahead winds and curves like a giant snake, and the foul air that drifts towards you is hot and humid. You have shaken off your pursuers, but you now have the problem of your arm to solve.",
        events: [
            {
                eventType: "TEMPORARY_CHANGE_COMBAT_SKILL_EVENT",
                ranking: 1,
                amount: -3,
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
                content: "If you have the Kai Discipline of Sixth Sense, turn to ",
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
                eventType: "COMBAT",
                ranking: 1,
                creature: {
                    name: "Vestibule Guard",
                    combatSkill: 15,
                    endurance: 23,
                    imageUrl: "images/shadow/creatures/vestibule_guard.png",
                },
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
                eventType: "ACQUIRE_ITEM_EVENT",
                ranking: 1,
                item: {
                    name: "Black sashe",
                    itemType: "MAGICAL_ITEM",
                    description: "Black sashe",
                    weight: "SMALL",
                    imageUrl: "images/shadow/items/black_sashe.png",
                },
            },
            {
                eventType: "CHANGE_GOLD_AMOUNT_EVENT",
                ranking: 2,
                amount: -2,
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
                content:
                    "If you decide to avoid the passage, close the secret panel and continue along the corridor and turn to ",
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
                content:
                    "If you wish to ignore the sword and attack the second guard with your bare hands, turn to ",
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
        events: [
            {
                eventType: "DROP_ALL_ITEMS_EVENT",
                ranking: 1,
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
            description:
                "The sewer of Barrakeesh, a dirty and disgusting place, full with rats and insects. The water is thick with scum, and the glutinous mire is clotted with green and black filth.",
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
                eventType: "COMBAT",
                ranking: 1,
                creature: {
                    name: "Armoury Guard",
                    combatSkill: 16,
                    endurance: 22,
                    imageUrl: "images/shadow/creatures/armoury_guard.png",
                },
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
        content:
            "All manner of strange and exotic plants, oils, potions, and medicaments fill the shop windows, and the smell of the herb-filled street is intoxicating. There is a sudden bustle of activity at the end of the street. The crowd disperses, melting into the shops as if into thin air. A man stands before you, his face is streaked with sweat, his turquoise robes torn and heavily stained. It is Maouk—he has survived the Baga-darooz. ‘Were it not for the Zakhan, I would kill you here and now,’ hisses Maouk, his face a mask of hate. ‘But I will not lose my head for a cowardly Sommlending.’ His insult enrages you, but you control your anger. You sense he is not alone; eyes are watching you at every window.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 197,
                content: "If you wish to attack Maouk, turn to ",
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
        content:
            "As your enemy collapses at your feet, you notice that the other guard has recovered from your punch. He pulls a dagger from his boot and draws back his hand to throw. If you do not possess this skill, pick a number from the Random Number Table. If you have the Kai Discipline of Sixth Sense or Hunting, add 3 to the number you have picked.",
        outcomes: [
            {
                outcomeType: "ABILITY",
                targetNr: 45,
                ability: {
                    abilityType: "MINDBLAST",
                    description:
                        "This enables a Kai Lord to attack an enemy using the force of his mind. It can be used at the same time as normal combat weapons and adds two extra points to your COMBAT SKILL. Not all the creatures encountered on this adventure will be harmed by Mindblast. You will be told if a creature is immune.",
                },
                content: "If you possess the Kai Discipline of Mindblast, turn to ",
            },
            {
                outcomeType: "RANDOM",
                targetNr: 120,
                intervall: {
                    min: 0,
                    max: 5,
                },
                content: "If your total is now 0–5, turn to ",
            },
            {
                outcomeType: "RANDOM",
                targetNr: 193,
                intervall: {
                    min: 6,
                    max: 12,
                },
                content: "If your total is now 6–12, turn to ",
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
            description:
                "The sewer of Barrakeesh, a dirty and disgusting place, full with rats and insects. The water is thick with scum, and the glutinous mire is clotted with green and black filth.",
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
                outcomeType: "ITEM",
                targetNr: 172,
                item: {
                    code: "BLACK_SASH",
                    name: "Black Sash",
                    description: "Black Sash",
                    imageUrl: "images/shadow/items/black_sash.png",
                },
                content: "If you are wearing a Black Sash, turn to ",
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
                eventType: "TEMPORARY_CHANGE_COMBAT_SKILL_EVENT",
                ranking: 2,
                amount: -2,
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 111,
                content: "If you win the combat, turn to ",
            },
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
        content:
            "You manage to inch your way along the row of oars until you reach the ship’s rail, where eager hands catch hold of your cloak and pull you to safety. Maouk’s voice booms out across water. ‘Surrender the Kai Lord to me. The Zakhan commands it. Your lives and the lives of all your kin will be forfeit if you disobey this order!’ The crew stare at each other in sorrow and dismay—they know that Maouk’s words are no idle threat. You cannot expect these men to sacrifice their families for you, so you must quickly decide on an alternative plan.",
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
                eventType: "CHANGE_ENDURANCE_EVENT",
                ranking: 1,
                amount: -2,
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
        events: [
            {
                eventType: "TEMPORARY_CHANGE_COMBAT_SKILL_EVENT",
                ranking: 1,
                amount: 3,
            },
            {
                eventType: "COMBAT",
                ranking: 2,
                creature: {
                    name: "Yas",
                    combatSkill: 14,
                    endurance: 28,
                    imageUrl: "images/shadow/creatures/yas.png",
                },
            },
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
                content:
                    "If you wish to leave the chamber and retrace your steps along the corridor to take the other passage, turn to ",
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
                outcomeType: "RANDOM",
                targetNr: 25,
                intervall: {
                    min: 0,
                    max: 6,
                },
                content: "If your total is now 0–6, turn to ",
            },
            {
                outcomeType: "RANDOM",
                targetNr: 141,
                intervall: {
                    min: 7,
                    max: 12,
                },
                content: "If your total is now 7–9, turn to ",
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
                outcomeType: "ABILITY",
                targetNr: 39,
                ability: {
                    abilityType: "SIXTH_SENSE",
                    description:
                        "This skill may warn a Kai Lord of imminent danger. It may also reveal the true purpose of a stranger or strange object encountered in your adventure.",
                },
                content: "If you have the Kai Discipline of Sixth Sense, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 9,
                content: "If you do not possess this skill, turn to ",
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
                content:
                    "If you wish to ask one of the merchants if they know where Tipasa lives, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 386,
                content:
                    "If you wish to leave the marketplace, continue along the adjoining street and turn to ",
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
                content:
                    "If you wish to ignore the stone and attack the Darklord with your own weapon, turn to ",
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
                eventType: "CHANGE_GOLD_AMOUNT_EVENT",
                ranking: 1,
                amount: 8,
            },
            {
                eventType: "ACQUIRE_ITEM_EVENT",
                ranking: 2,
                item: {
                    name: "BRASS_WISTLE",
                    itemType: "MAGICAL_ITEM",
                    description: "Brass Whistle",
                    weight: "MEDIUM",
                    imageUrl: "images/shadow/items/brass_whistle.png",
                },
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
                outcomeType: "ITEM",
                targetNr: 321,
                item: {
                    code: "OEDE_HERB",
                    name: "Oede herb",
                    description:
                        "golden leaves which heal many deadly diseases or restore 10 ENDURANCE if swallowed after combat",
                    imageUrl: "images/shadow/items/oedeherb.png",
                },
                content:
                    "If you possess some Oede herb, you may give it to the poor vaxeler by turning to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 270,
                content:
                    "If you do not have any Oede, or if you do not wish to give it to the man, you can flee the cave with Banedon by turning to ",
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
                outcomeType: "ABILITY",
                targetNr: 377,
                ability: {
                    abilityType: "HEALING",
                    description:
                        "This Discipline can be used to restore ENDURANCE points lost in combat. If you possess this skill you may restore 1 ENDURANCE point to your total for every numbered section of the book you pass through in which you are involved in combat. (This is only to be used after your ENDURANCE has fallen below its original level.) Remember that your ENDURANCE cannot rise above its original level.",
                },
                content: "If you have the Kai Discipline of Healing, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 339,
                content: "If you do not possess this skill, turn to ",
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
                eventType: "CHANGE_ENDURANCE_EVENT",
                ranking: 1,
                amount: 2,
            },
            {
                eventType: "ACQUIRE_ITEM_EVENT",
                ranking: 2,
                item: {
                    name: "Bottle of Kourshah",
                    itemType: "POTION",
                    description: "Bottle of Kourshah",
                    weight: "MEDIUM",
                    imageUrl: "images/shadow/items/.png",
                },
            },
            {
                eventType: "CHANGE_GOLD_AMOUNT_EVENT",
                ranking: 3,
                amount: -5,
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
                outcomeType: "ITEM",
                targetNr: 349,
                item: {
                    code: "SOMMERSWERD",
                    name: "Sommerswerd",
                    description: "Sommerswerd",
                    imageUrl: "images/shadow/items/sommerswerd.png",
                },
                content: "If you possess the Sommerswerd, turn to ",
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
            description:
                'An excavation site in the Koneshi Mountains delving the Tomb of Majhan. Commanded by Darklord Haakon in order to find the "Book of the Magnakai"',
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
                outcomeType: "ITEM",
                targetNr: 246,
                item: {
                    code: "COPPER_KEY",
                    name: "Copper Key",
                    description: "Copper Key",
                    imageUrl: "images/shadow/items/copperkey.png",
                },
                content: "If you possess a Copper Key, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 301,
                content:
                    "If you do not possess this item, you can try to climb over the door by turning to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 375,
                content:
                    "Alternatively, you can run back up the stairs and attempt to attack the guards before they load and fire their crossbows by turning to ",
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
                content:
                    "If you want to try to reason with the crowd of screaming fanatics that are now running towards you with their swords drawn, turn to ",
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
            description:
                'an old tomb where Darklord Haakon hopes to find the "Book of the Magnakai"',
            imageUrl: "images/shadow/regions/tomb_of_the_Majhan.png",
        },
        content:
            "You act purely by instinct. You dive to the floor and roll over; the blue flame screams past your head and explodes into the chamber wall, blasting a hole several feet deep in the steel-hard rock. You spring to your feet and dodge behind a massive pillar as the hideous laugh of Darklord Haakon echoes around the dust-choked chamber. As it rises in pitch, your mind is filled with agonizing pain.",
        outcomes: [
            {
                outcomeType: "ABILITY",
                targetNr: 253,
                ability: {
                    abilityType: "MINDSHIELD",
                    description:
                        "The Darklords and many of the evil creatures in their command have the ability to attack you using their Mindforce. The Kai Discipline of Mindshield prevents you from losing any ENDURANCE points when subjected to this form of attack.",
                },
                content: "If you have the Kai Discipline of Mindshield, turn to ",
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
        content:
            "Your Kai sense of Tracking reveals that the winding path leads into the Zakhan’s arboretum: his cathedral of trees. The stairs to the portal lead to a private chamber in the upper palace, but you still cannot tell what the chamber contains.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 391,
                content: "If you wish to follow the path, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 352,
                content: "If you decide to climb the stairs to the portal, turn to ",
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
                outcomeType: "ITEM",
                targetNr: 336,
                item: {
                    code: "CRYSTAL_STAR_PENDANT",
                    name: "Crystal star pendant",
                    description: "Crystal star pendant",
                    imageUrl: "images/shadow/items/crystal_star_pendant.png",
                },
                content: "If you have ever been given a Crystal Star Pendant, turn to ",
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
        content:
            "You must act quickly if you are to avoid detection, for the creature in red is a Vordak: one of the powerful undead who serve the Darklords. Pick a number from the Random Number Table.",
        outcomes: [
            {
                outcomeType: "RANDOM",
                targetNr: 378,
                intervall: {
                    min: 0,
                    max: 2,
                },
                content: "If the number you have picked is 0–2, turn to ",
            },
            {
                outcomeType: "RANDOM",
                targetNr: 262,
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
                eventType: "COMBAT",
                ranking: 1,
                creature: {
                    name: "Crypt Spawn",
                    combatSkill: 24,
                    endurance: 40,
                    imageUrl: "images/shadow/creatures/.png",
                },
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
                outcomeType: "ABILITY",
                targetNr: 308,
                ability: {
                    abilityType: "ANIMAL_KINSHIP",
                    description:
                        "This skill enables a Kai Lord to communicate with some animals and to be able to guess the intentions of others.",
                },
                content: "If you have the Kai Discipline of Animal Kinship, turn to ",
            },
            {
                outcomeType: "ITEM",
                targetNr: 319,
                item: {
                    code: "ONYX_MEDALLION",
                    name: "Onyx Medallion",
                    description:
                        "This Special Item, torn from the armour of a renegade Vassagonian captain during the battle of Ruanon, enables you to communicate with the Itikar",
                    imageUrl: "images/shadow/items/onyx_medallion.png",
                },
                content: "If you possess an Onyx Medallion, turn to ",
            },
            {
                outcomeType: "RANDOM",
                targetNr: 287,
                intervall: {
                    min: 8,
                    max: 11,
                },
                content: "If your total is now 8–11, turn to ",
            },
            {
                outcomeType: "RANDOM",
                targetNr: 240,
                intervall: {
                    min: 4,
                    max: 7,
                },
                content: "If your total is 4–7, turn to ",
            },
            {
                outcomeType: "RANDOM",
                targetNr: 370,
                intervall: {
                    min: 1,
                    max: 3,
                },
                content: "If your total is 1–3, turn to ",
            },
            {
                outcomeType: "RANDOM",
                targetNr: 257,
                intervall: {
                    min: 0,
                    max: 0,
                },
                content: "If your total is 0, turn to ",
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
        content: "You are the first to recover from the surprise of the sudden encounter.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 334,
                content:
                    "If you wish to attack the guards (Ignore any wounds you may sustain in the first 2 rounds of combat.), turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 209,
                content:
                    "If you do not wish to fight them, you can evade before they have a chance to strike at you by running back up to stairs. Turn to ",
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
        content:
            "Eager to put distance between yourself and your merciless enemy, you race headlong through a tangle of trees and roots until you stumble upon a small domed hut of latticed wood, half hidden by a curtain of vines. Peering through the dense foliage, you see that the vines reach up to a wrought-iron walkway, which ends at an open stone door.",
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
                outcomeType: "RANDOM",
                targetNr: 385,
                intervall: {
                    min: 0,
                    max: 6,
                },
                content: "If your total is now 0–6, turn to ",
            },
            {
                outcomeType: "RANDOM",
                targetNr: 251,
                intervall: {
                    min: 7,
                    max: 12,
                },
                content: "If your total is now 7–12, turn to ",
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
            description:
                'an old tomb where Darklord Haakon hopes to find the "Book of the Magnakai"',
            imageUrl: "images/shadow/regions/tomb_of_the_Majhan.png",
        },
        content:
            "There is another searing blast, which hits the base of the huge pillar behind which you have taken refuge; it severs the stone in an instant. Your body is torn to pieces as the pillar explodes into a million fragments—the little of you that remains is buried beneath tons of falling sand and stone. Your life and the hopes of Sommerlund end here.",
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
                outcomeType: "ABILITY",
                targetNr: 344,
                ability: {
                    abilityType: "HEALING",
                    description:
                        "This Discipline can be used to restore ENDURANCE points lost in combat. If you possess this skill you may restore 1 ENDURANCE point to your total for every numbered section of the book you pass through in which you are involved in combat. (This is only to be used after your ENDURANCE has fallen below its original level.) Remember that your ENDURANCE cannot rise above its original level.",
                },
                content: "If you have the Kai Discipline of Healing, turn to ",
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
                content:
                    "If you decide to ignore the body, hurry into the Itikar’s pen and turn to ",
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
                eventType: "CHANGE_ENDURANCE_EVENT",
                ranking: 1,
                amount: 1,
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
                eventType: "CHANGE_ENDURANCE_EVENT",
                ranking: 1,
                amount: -1,
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
            description:
                'An excavation site in the Koneshi Mountains delving the Tomb of Majhan. Commanded by Darklord Haakon in order to find the "Book of the Magnakai"',
            imageUrl: "images/shadow/regions/excavation_site.png",
        },
        content:
            "If you are to get inside the tomb, you must either distract or silence the Drakkarim sentry. If you do not possess this item, you will have to creep up and overpower him as quickly and silently as you can. Pick a number from the Random Number Table. If you possess the Kai Disciplines of Hunting, Tracking, and Camouflage, add 2 to the number you have picked. If you have reached the Kai rank of Guardian or higher, add 3 to the number.",
        outcomes: [
            {
                outcomeType: "ITEM",
                targetNr: 260,
                item: {
                    code: "GRAVEWEED_TINCTURE",
                    name: "Tincture of Graveweed",
                    description: "causes sickness and loss of 2 ENDURANCE points per dose",
                    imageUrl: "images/shadow/items/tincture_of_graveweed.png",
                },
                content:
                    "If you possess a Tincture of Graveweed (You may only use Graveweed in its Tincture form in this case (you may not use a concentrated potion if you have one)), turn to ",
            },
            {
                outcomeType: "RANDOM",
                targetNr: 324,
                intervall: {
                    min: 0,
                    max: 4,
                },
                content: "If your total is now 0–4, turn to ",
            },
            {
                outcomeType: "RANDOM",
                targetNr: 303,
                intervall: {
                    min: 5,
                    max: 12,
                },
                content: "If it is 5 or more, turn to ",
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
                eventType: "COMBAT",
                ranking: 1,
                creature: {
                    name: "Itikar",
                    combatSkill: 17,
                    endurance: 30,
                    imageUrl: "images/shadow/creatures/itikar.png",
                },
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 217,
                content:
                    "If you successfully reduce the Itikar’s ENDURANCE points to zero or below, turn to ",
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
                outcomeType: "ABILITY",
                targetNr: 365,
                ability: {
                    abilityType: "SIXTH_SENSE",
                    description:
                        "This skill may warn a Kai Lord of imminent danger. It may also reveal the true purpose of a stranger or strange object encountered in your adventure.",
                },
                content: "If you have the Kai Discipline of Sixth Sense, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 225,
                content: "If you wish to accept his invitation, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 272,
                content:
                    "If you decide to decline his offer and continue on your way towards Ikaresh, turn to ",
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
                outcomeType: "RANDOM",
                targetNr: 262,
                intervall: {
                    min: 0,
                    max: 6,
                },
                content: "If your total score is now 0–6, turn to ",
            },
            {
                outcomeType: "RANDOM",
                targetNr: 378,
                intervall: {
                    min: 7,
                    max: 12,
                },
                content: "If it is 7 or over, turn to ",
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
        content:
            "You can clearly see the main highway that links Chula to the capital. It crosses the desolate salt plain of Lake Inrahim by means of a causeway thirty feet high and is a useful landmark by which you can steer. Little stone houses with beaten earth roofs are grouped in small clusters along the highway, their numbers increasing as you draw nearer to the town. You are five miles from Chula, when you notice a dark cloud hovering several hundred feet above one of the small villages. It is a cloud of Kraan; they are moving to intercept you. Suddenly the Itikar squeals in pain, and a splash of feathers billows out from its wing. A Kraan has closed in from behind; it is less than a hundred yards distant. The Drakkarim rider holsters an empty bronze crossbow and draws his black sword. His bolt has passed through the wing of your mount, and he prepares to strike as the Itikar loses height and speed. The Kraan and its rider are swooping on you from behind. You will only be able to fight for one round of combat before they are carried past by the momentum of their attack.",
        events: [
            {
                eventType: "COMBAT",
                ranking: 1,
                creature: {
                    name: "Drakkarim Kraan-rider",
                    combatSkill: 20,
                    endurance: 28,
                    imageUrl: "images/shadow/creatures/drakkarim_kraan-rider.png",
                },
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 347,
                content:
                    "If you lose more ENDURANCE points than the enemy in this one round combat, turn to ",
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
            description:
                'an old tomb where Darklord Haakon hopes to find the "Book of the Magnakai"',
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
                outcomeType: "ABILITY",
                targetNr: 220,
                ability: {
                    abilityType: "TRACKING",
                    description:
                        "This skill enables a Kai Lord to make the correct choice of a path in the wild, to discover the location of a person or object in a town or city and to read the secrets of footprints or tracks.",
                },
                content: "If you possess the Kai Discipline of Tracking, turn to ",
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
                outcomeType: "RANDOM",
                targetNr: 337,
                intervall: {
                    min: 0,
                    max: 2,
                },
                content: "If the number you have picked is 0–2, turn to ",
            },
            {
                outcomeType: "RANDOM",
                targetNr: 383,
                intervall: {
                    min: 3,
                    max: 9,
                },
                content: "If it is 3–9, turn to ",
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
                outcomeType: "GOLD",
                targetNr: 328,
                amount: -5,
                content: "If you wish to buy the waistcoat, pay the man 5 Gold Crowns and turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 274,
                content:
                    "If you do not want to buy the waistcoat or cannot afford to pay him 5 Gold Crowns, turn to ",
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
                outcomeType: "ABILITY",
                targetNr: 377,
                ability: {
                    abilityType: "HEALING",
                    description:
                        "This Discipline can be used to restore ENDURANCE points lost in combat. If you possess this skill you may restore 1 ENDURANCE point to your total for every numbered section of the book you pass through in which you are involved in combat. (This is only to be used after your ENDURANCE has fallen below its original level.) Remember that your ENDURANCE cannot rise above its original level.",
                },
                content: "If you have the Kai Discipline of Healing, turn to ",
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
                eventType: "CHANGE_ENDURANCE_EVENT",
                ranking: 1,
                amount: -6,
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
            description:
                'an old tomb where Darklord Haakon hopes to find the "Book of the Magnakai"',
            imageUrl: "images/shadow/regions/tomb_of_the_Majhan.png",
        },
        content:
            "Suddenly, the pain subsides, but a new horror is taking shape before your eyes. Out of the darkness, a green whorl of vapour is forming slowly into the shape of a glistening, serpent-like monster. A grey mist issues forth from the Darklord’s mouth, floating towards the core of this horror, infusing it with the power of death. The serpent writhes and convulses as the grey mist fills its body, changing it from a dream-like illusion into a living nightmare. Two pinpoints of crimson glow from its eyes, as it slithers towards you. If you possess a Jewelled Mace, you may add 5 to your COMBAT SKILL for the duration of the combat, for it is an enchanted weapon, especially effective against such a creature.",
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
                eventType: "TEMPORARY_CHANGE_COMBAT_SKILL_EVENT",
                ranking: 2,
                amount: 5,
            },
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
                eventType: "CHANGE_ENDURANCE_EVENT",
                ranking: 1,
                amount: -2,
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
                content:
                    "If you wish to leap from the outrigger onto the fortified platform, turn to ",
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
                content:
                    "If you wish to ask her if she is Soushilla (only if you have heard that name before), turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 314,
                content:
                    "If you wish to ask her if she knows were Tipasa the Wanderer can be found, turn to ",
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
            description:
                'An excavation site in the Koneshi Mountains delving the Tomb of Majhan. Commanded by Darklord Haakon in order to find the "Book of the Magnakai"',
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
                content: "If you wish to try to escape from them, turn to ",
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
        content:
            "A terrible shriek rings out above the rush of the wind, filling your head with pain. You are being attacked by a powerful Mindblast. Unless you possess the Kai Discipline of Mindshield, deduct 2 ENDURANCE points from your current total. The Itikar shudders and frantically twists its head from side to side as the shriek rings out again. You sense that the great bird is in agony, racked by the Mindblast. As you glance over your shoulder, your stomach becomes knotted with fear—a Kraan is swooping down to attack. On its back is your adversary: a Vordak, one of the undead and a hideous lieutenant of the Darklords. As the Kraan streaks towards you, the Vordak spreads its red-robed arms and leaps from the saddle. It lands behind you, astride the Itikar’s back, its skeletal fingers sunk deep into your mount’s feathered flesh. The shock of the impact throws you forward, and the reins slip from your hands. The giant bird screeches in horror and pain as the Vordak’s grip paralyses its spine. You must act quickly, for the Itikar is now plummeting towards the salt-plain of Lake Inrahim.",
        events: [
            {
                eventType: "CHANGE_ENDURANCE_EVENT",
                ranking: 1,
                amount: -2,
            },
        ],
        outcomes: [
            {
                outcomeType: "ITEM",
                targetNr: 315,
                item: {
                    code: "SOMMERSWERD",
                    name: "Sommerswerd",
                    description: "Sommerswerd",
                    imageUrl: "images/shadow/items/sommerswerd.png",
                },
                content: "If you possess the Sommerswerd, turn to ",
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
                outcomeType: "GOLD",
                targetNr: 397,
                amount: 1,
                content:
                    "If you wish to give her a Gold Crown, make the adjustment to your Action Chart and turn to ",
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
                content:
                    "If you wish to attack the Drakkar before he lands his blow upon Banedon’s head, turn to ",
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
            name: "Koneshi Mountains",
            regionType: "MOUNTAIN",
            description:
                "The Koneshi Mountains stretch from the southeast to the middle of the Dry Main in Vassagonia. At the western end of this high mountains lies one of the six oasis.",
            imageUrl: "images/shadow/regions/koneshi_mountains.png",
        },
        content:
            "With the leap of a tiger, you snatch the glowing gem barely a second before Haakon’s spiked fist slams into the floor where the jewel lay. You turn to face your enemy, the gem held high in your hand, its blue beam glinting on the Darklord’s black armour. He shrinks beneath its glare and falls to his knees, a repulsive sucking noise issuing from his helm as he slowly begins to fade. <br> A sudden crack makes you start with shock, but you are no longer in danger. The glowing gem has vanished from your hand; like its master it has left this dimension, never to return.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 400,
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
            name: "Grand Palace",
            regionType: "STONE_BUILDING",
            description: "The biggest building in Barrakeesh. ",
            imageUrl: "images/shadow/regions/chula.png",
        },
        content:
            "You stare at the bolt, willing it to move. The sound of running footsteps behind you sends a cold shiver down your spine as you realize that the Drakkarim are storming the stairs. Then, slowly, the bolt begins to move. As soon as it clears the bolt-hole, you pull open the stone portal and race through, unaware of what lies beyond.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 352,
                content: "Turn to",
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
            name: "The Koos",
            regionType: "MOUNTAIN",
            description:
                "Highest mountains in the middle of Dahir Mountains. The voyage through the Koos is breathtaking. The Skyrider glides between the towers of rock that rise from the valley floor with fantastic and unearthly grandeur. Perched upon two of these huge rocky columns are Kraan, their Drakkarim riders scouring the valley with telescopes.",
            imageUrl: "images/shadow/regions/the_koos.png",
        },
        content:
            "You race along the rock-strewn cave, eager to escape from the infected old man. The horrific stories that you have heard about vaxelus make you careless in your haste, and you lose 2 Items from your Backpack. Choose which two items to erase from your Action Chart (if you have no Backpack Items, you lose a Weapon and a Special Item instead).",
        events: [
            {
                eventType: "DROP_ITEM_EVENT",
                ranking: 1,
            },
            {
                eventType: "DROP_ITEM_EVENT",
                ranking: 2,
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 241,
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
            name: "Barrakeesh",
            regionType: "CITY",
            description:
                "Barrakeesh is the capital city of Vassagonia. It has a habour, a lake and on the outskirts of the magnificent city are some smaller towns such as Chiras and Chula. The citizens of Barrakeesh, unlike the inhabitants of other Vassagonian cities, enjoy an abundant supply of fresh water from the Da River.",
            imageUrl: "images/shadow/regions/barrakeesh.png",
        },
        content:
            "The Kraan-rider screams past to your left, spun off course by your swift counter-blow. He is now over a hundred feet below but is turning the Kraan for another attack. You wheel towards the south to avoid being caught between the two converging squadrons of Kraan-riders. Your change of direction increases the distance between you and your pursuers, but the Itikar is badly wounded and terrified by the shrieking Kraan.<br>You are close to despair; your feathered mount is losing a lot of blood and could lapse into unconsciousness at any moment and drop you like a stone from the darkening sky. Suddenly you spot something in the distance—a sight that renews your faith in miracles.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 221,
                content: "Turn to",
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
            name: "Ikaresh",
            regionType: "TOWN",
            description:
                "This is a village lying between the mountains of Dahir. The villagers - named Ikareshi - have their own dialect, so called Ikareshi dialect",
            imageUrl: "images/shadow/regions/ikaresh.png",
        },
        content:
            "You follow a path along a dry gully, the bed of an ancient river that once flowed through the mountains. An arid breeze blows eddies of red dust along the banks of dead earth. The white-walled buildings of Ikaresh suddenly appear, and, as the dust settles, you find yourselves standing in a small square close to the open archway of the town’s east gate.<br>Perched upon a tall basalt monolith in the centre of the square is an eagle—the emblem of this mountain town—cast in bronze. Three bronze arrows are held in its beak, each indicating an exit from the square.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 376,
                content: "If you wish to go north, towards the Dougga Market, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 216,
                content: "If you wish to go west, towards the main square, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 342,
                content: "If you wish to go south, along the Avenue of Eagles, turn to",
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
            name: "Grand Palace",
            regionType: "STONE_BUILDING",
            description: "The biggest building in Barrakeesh. ",
            imageUrl: "images/shadow/regions/chula.png",
        },
        content:
            "The Akataz leaps through the air at your face. You fall backwards, kicking with both feet, but you are winded as the war-dog jolts the air from your lungs. It slashes your shoulder (lose 1 ENDURANCE point), before cartwheeling over the edge of the stairs, its howl cut short as it smashes into the marble floor of the lower palace.<br>You spring to your feet and draw your weapon, for the Drakkarim are running towards you. A terrible roar of hate and rage fills the hall: ‘Kill him!’ The Drakkarim unsheathe their black swords, eager to obey their master’s command. They attack you simultaneously.<br>You can evade the combat at any time by running into the adjoining passage.",
        events: [
            {
                eventType: "CHANGE_ENDURANCE_EVENT",
                ranking: 1,
                amount: -1,
            },
            {
                eventType: "COMBAT",
                ranking: 2,
                creature: {
                    name: "Drakkarim",
                    combatSkill: 18,
                    endurance: 35,
                    imageUrl: "images/shadow/creatures/drakkarim.png",
                },
            },
            {
                eventType: "COMBAT",
                ranking: 3,
                creature: {
                    name: "Drakkarim",
                    combatSkill: 18,
                    endurance: 35,
                    imageUrl: "images/shadow/creatures/drakkarim.png",
                },
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 238,
                content: "If you wish to evade combat, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 345,
                content: "If you win the combat, turn to",
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
            name: "Ikaresh",
            regionType: "TOWN",
            description:
                "This is a village lying between the mountains of Dahir. The villagers - named Ikareshi - have their own dialect, so called Ikareshi dialect",
            imageUrl: "images/shadow/regions/ikaresh.png",
        },
        content:
            "Banedon holds a gleaming ring of silver beneath the merchant’s nose and says, ‘This is yours, my friend, if you tell us were Tipasa can be found.’<br>The merchant snatches the ring from the wizard’s hand and stammers, ‘The first alley on the left past the stables. He lives at the house with the blue door.’<br>You hurry across the crowded marketplace towards the stables and enter the street beyond. As you turn into the alley, you hear the merchant’s shriek of dismay above the noise of the crowd; the ring has just dissolved on his finger. At the end of the alley you find the house with the blue door.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 206,
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
            name: "Barrakeesh",
            regionType: "CITY",
            description:
                "Barrakeesh is the capital city of Vassagonia. It has a habour, a lake and on the outskirts of the magnificent city are some smaller towns such as Chiras and Chula. The citizens of Barrakeesh, unlike the inhabitants of other Vassagonian cities, enjoy an abundant supply of fresh water from the Da River.",
            imageUrl: "images/shadow/regions/barrakeesh.png",
        },
        content:
            "You recognize the flag that flies above a fortified platform in the centre of the strange craft: it is the crescent and crystal star ensign of the Magicians’ Guild of Toran, a city in northern Sommerlund. The skyship is commanded by a Sommlending wizard—one of your own countrymen. He is a blond-haired young man dressed in long, dark blue robes.<br>You are so stunned by the fateful appearance of the craft that you fail to notice the blood seeping from the Itikar’s mouth: the creature is near to death. Suddenly, the great bird lets out a pitiful and agonizing caw. Its wings stiffen, and its head falls limply forward as the last flicker of life escapes from its torn body. You are pitched forward, and your stomach heaves as you plummet towards Lake Inrahim.<br>Pick a number from the Random Number Table.",
        outcomes: [
            {
                outcomeType: "RANDOM",
                targetNr: 374,
                intervall: {
                    min: 0,
                    max: 4,
                },
                content: "If the number you have picked is 0–4, turn to",
            },
            {
                outcomeType: "RANDOM",
                targetNr: 254,
                intervall: {
                    min: 5,
                    max: 8,
                },
                content: "If it is 5–8, turn to",
            },
            {
                outcomeType: "RANDOM",
                targetNr: 261,
                intervall: {
                    min: 9,
                    max: 9,
                },
                content: "If it is 9, turn to",
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
            name: "Ikaresh",
            regionType: "TOWN",
            description:
                "This is a village lying between the mountains of Dahir. The villagers - named Ikareshi - have their own dialect, so called Ikareshi dialect",
            imageUrl: "images/shadow/regions/ikaresh.png",
        },
        content:
            "‘Why do you ask?’ she replies suspiciously, blinking the tears from her eyes. ‘What business do you have with Old Tipasa?’<br>‘He is a friend,’ replies Banedon, placing a Gold Crown on the tavern counter. The old woman covers the coin with her hand, her expression shrewd and calculating.<br>‘Soushilla is old, her memory has faded with the passing years,’ she says, waiting expectantly and glancing at Banedon’s money pouch. He opens the flap to remove another Crown, but the pouch has been emptied by a nimble pickpocket. Sheepishly he avoids your stare, his face growing redder by the second.<br>‘Five Gold Crowns may refresh my memory,’ she says, her gaze now resting on you.",
        outcomes: [
            {
                outcomeType: "GOLD",
                targetNr: 326,
                content:
                    "If you wish to pay the old woman 5 Gold Crowns, erase them from your Action Chart and turn to",
                amount: -5,
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 202,
                content:
                    "If you do not have 5 Gold Crowns or do not wish to give her the money, leave the tavern and turn to",
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
            name: "Grand Palace",
            regionType: "STONE_BUILDING",
            description: "The biggest building in Barrakeesh. ",
            imageUrl: "images/shadow/regions/chula.png",
        },
        content:
            "You crouch low as you wait for your chance to leap up and open the door. More and more crossbow bolts ricochet from the wall and parapet every second. The sound of iron-shod boots sends a shiver down your spine; the Drakkarim are storming the stairs—it’s now or never!<br>You spring to your feet and run to the door, grasping the iron bolt with trembling fingers. A steel-tipped missile splinters stone less than an inch from your hand, another ricochets and opens a cut above your eye. The instant the bolt clears the bolt-hole, you pull open the stone portal and race through, unaware of what lies beyond.",
        events: [
            {
                eventType: "DROP_WEAPON_EVENT",
                ranking: 1,
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 352,
                content: "Turn to ",
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
            name: "Throne Chamber",
            regionType: "ROOM",
            description:
                "A large chamber within the Tomb of the Majhan. It is dimly lit and thick dust covers the marble floor. At the side of the chamber that is opposed to the large stone door there is a rough stone throne.",
            imageUrl: "images/shadow/regions/throne_chamber.png",
        },
        content:
            "You run, half-crouched, towards your golden blade, grab the hilt, and continue at full speed towards the cover of another pillar. Suddenly, a burst of energy leaps from the Darklord’s fist, exploding into the base of the pillar, severing it from the floor. A tremendous roar fills your ears as you are thrown backwards by the shock of the blast. You lose 3 ENDURANCE points. Haakon’s laugh rises above the crash of falling stone until your head is filled with an agonizing pain.",
        events: [
            {
                eventType: "CHANGE_ENDURANCE_EVENT",
                ranking: 1,
                amount: -3,
            },
        ],
        outcomes: [
            {
                outcomeType: "ABILITY",
                targetNr: 223,
                content: "If you have the Kai Discipline of Mindshield, turn to",
                ability: {
                    abilityType: "MINDSHIELD",
                    description:
                        "The Darklords and many of the evil creatures in their command have the ability to attack you using their Mindforce. The Kai Discipline of Mindshield prevents you from losing any ENDURANCE points when subjected to this form of attack.",
                },
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 379,
                content: "If you do not have this skill, turn to",
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
            name: "Grand Palace",
            regionType: "STONE_BUILDING",
            description: "The biggest building in Barrakeesh. ",
            imageUrl: "images/shadow/regions/chula.png",
        },
        content:
            "A narrow corridor faces you, which is lit by the orange light of the setting sun filtering down from small open windows set high above in the patterned walls. The air is filled with the sound of running feet, for the Grand Palace is now on full alert. The palace guards and the evil Drakkarim are bent on finding and killing you, for their own lives will be forfeit if they fail.<br>You reach a door that opens onto an outside balcony. A stair descends to a bridge that connects a needle-like tower of white marble to the main palace. The stair itself continues past the bridge, disappearing down towards the palace gardens far below. You see no soldiers, either on the bridge or in the gardens.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 396,
                content: "If you wish to descend to the bridge and enter the marble tower, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 215,
                content:
                    "If you wish to continue past the bridge, descending the stairs to the palace gardens, turn to",
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
            name: "Barrakeesh",
            regionType: "CITY",
            description:
                "Barrakeesh is the capital city of Vassagonia. It has a habour, a lake and on the outskirts of the magnificent city are some smaller towns such as Chiras and Chula. The citizens of Barrakeesh, unlike the inhabitants of other Vassagonian cities, enjoy an abundant supply of fresh water from the Da River.",
            imageUrl: "images/shadow/regions/barrakeesh.png",
        },
        content:
            "The Drakkar is strangling the dwarf. As he catches sight of you, he releases his grip and smashes his mailed fist into the dwarf’s face, sending him tumbling into space. You are inflamed by this cold-blooded murder. You draw your weapon and attack.<br>Due to the speed of your attack, do not deduct any of your own ENDURANCE points in the first round of combat.",
        events: [
            {
                eventType: "COMBAT",
                ranking: 1,
                creature: {
                    name: "Drakkar",
                    combatSkill: 18,
                    endurance: 25,
                    imageUrl: "images/shadow/creatures/drakkar.png",
                },
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 213,
                content: "If you win the combat, turn to",
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
            name: "The Koos",
            regionType: "MOUNTAIN",
            description:
                "Highest mountains in the middle of Dahir Mountains. The voyage through the Koos is breathtaking. The Skyrider glides between the towers of rock that rise from the valley floor with fantastic and unearthly grandeur. Perched upon two of these huge rocky columns are Kraan, their Drakkarim riders scouring the valley with telescopes.",
            imageUrl: "images/shadow/regions/the_koos.png",
        },
        content:
            "As you turn to leave, the vaxeler bids you to wait. From a bundle of rags hidden beneath the bridge, he produces a gem-encrusted mace. The weapon is carved from solid silver and adorned with emeralds and diamonds along the haft. ‘Take it, I beseech you, as a token of my eternal thanks.’<br>If you wish to accept this gift, mark the Jewelled Mace on your Action Chart as a Special Item (which you carry tucked into your belt) before leaving the cave.",
        events: [
            {
                eventType: "ACQUIRE_ITEM_EVENT",
                ranking: 1,
                item: {
                    name: "Jewelled Mace",
                    itemType: "WEAPON",
                    description: "a mace full of juwels",
                    weight: "HEAVY",
                    imageUrl: "images/shadow/items/jewelled_mace.png",
                },
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 241,
                content: "Turn to",
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
            name: "Grand Palace",
            regionType: "STONE_BUILDING",
            description: "The biggest building in Barrakeesh. ",
            imageUrl: "images/shadow/regions/chula.png",
        },
        content:
            "You leave the bell-tower and make your way down towards the sentry. At first, dodging from one turret to the next, it is easy to remain unseen. However, for the final thirty yards to the landing platform you will have no cover, for the platform and the palace roof are linked by an exposed gangplank. If you are to overpower the sentry, you must cross the gangplank undetected.<br>If you do not possess the skill, pick a number from the Random Number Table. If you have the Kai Disciplines of either Hunting or Camouflage, add 2 to the number you have picked. If you have reached the Kai rank of Warmarn or higher, add 3.",
        outcomes: [
            {
                outcomeType: "RANDOM",
                targetNr: 357,
                content: "If your total score is now 0–4, turn to",
                intervall: {
                    min: 0,
                    max: 4,
                },
            },
            {
                outcomeType: "RANDOM",
                targetNr: 389,
                content: "If your total is 5–9, turn to",
                intervall: {
                    min: 5,
                    max: 9,
                },
            },
            {
                outcomeType: "RANDOM",
                targetNr: 236,
                content: "If your total is 10 or more, turn to",
                intervall: {
                    min: 10,
                    max: 10,
                },
            },
            {
                outcomeType: "ABILITY",
                targetNr: 295,
                content: "If you have the Kai Discipline of Mind Over Matter, turn to",
                ability: {
                    abilityType: "MIND_OVER_MATTER",
                    description:
                        "Mastery of this Discipline enables a Kai Lord to move small objects with his powers of concentration.",
                },
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
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png",
        },
        content:
            "The dwarves are not offended by your refusal. They have seen men stirred to fury or laid unconscious by a jug of Bor-brew. Nolrim grasps the tankard and downs the draught with one awesome gulp, removing the froth from his ginger beard with a practised flick of his forefinger.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 261,
                content:
                    "If you wish to ask the dwarves how they came to be under Banedon’s command, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 359,
                content: "If you wish to bid them goodnight, turn to",
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
            name: "Ikaresh",
            regionType: "TOWN",
            description:
                "This is a village lying between the mountains of Dahir. The villagers - named Ikareshi - have their own dialect, so called Ikareshi dialect",
            imageUrl: "images/shadow/regions/ikaresh.png",
        },
        content:
            "You call out to them to stop, but your accent merely confirms their suspicions that you are a spy. A rock hurtles through the air and gashes your forehead. You lose 3 ENDURANCE points. ‘Run, Lone Wolf!’ screams Banedon. ‘They will cut you to pieces!’<br>As they race nearer, the crazed look in their eyes quickly tells you it would be madness to stay. You turn and run for all you are worth.",
        events: [
            {
                eventType: "CHANGE_ENDURANCE_EVENT",
                ranking: 1,
                amount: -3,
            },
        ],
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
            name: "Grand Palace",
            regionType: "STONE_BUILDING",
            description: "The biggest building in Barrakeesh. ",
            imageUrl: "images/shadow/regions/chula.png",
        },
        content:
            "As you turn and sprint along the passage, a terrible roar of hatred and rage fills the hall: ‘Kill him!’<br>You glance back. The Drakkarim are unsheathing their black swords, eager to obey their master’s command. You race down some stairs, through a silver archway, and along a balcony that overlooks the lower palace.<br>The Akataz is nearly upon you; you feel its fetid breath on your legs. Instinctively you dodge aside at the very second it leaps. It crashes muzzle first into a marble pillar. A howl of pain leaves its broken mouth as you step forward and strike a death-blow; it will never attack again.<br>You glimpse the grim silhouette of Darklord Haakon in the hall below, his spiked fist raised. A Drakkar appears as if from nowhere and advances, a sword held high above his skull-like helm. There is a deafening crack as a bolt of blue lightning streaks from a stone in the Darklord’s hand and comes hurtling towards you. The Drakkar lunges and wounds your arm (you lose 2 ENDURANCE points), but he now stands in the path of the bolt. In a flash of light, the Drakkar is gone, leaving only cinders and the rotten odour of scorched flesh behind.<br>At the end of the balcony are another arch and a staircase.",
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
                targetNr: 381,
                content: "If you wish to escape through the arch, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 317,
                content: "If you wish to escape by the stairs, turn to",
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
            name: "Koneshi Mountains",
            regionType: "MOUNTAIN",
            description:
                "The Koneshi Mountains stretch from the southeast to the middle of the Dry Main in Vassagonia. At the western end of this high mountains lies one of the six oasis.",
            imageUrl: "images/shadow/regions/koneshi_mountains.png",
        },
        content:
            "As night falls, your desperate quest begins. The Giaks pose few problems that you cannot overcome with your warrior skills, for they have been overworked to the point of exhaustion. Only the Drakkarim show any sign of vigilance, but even then, there are less than a dozen patrolling the entire crater. Not until you reach the main entrance to the Tomb do you encounter any real difficulty.<br>A Drakkar stands on guard, his cruel eyes glinting behind his twisted iron death-mask. Occasionally, he diverts his attention from the watch to take a drink from a water flask.",
        outcomes: [
            {
                outcomeType: "ABILITY",
                targetNr: 214,
                content: "If you have the Kai Discipline of Mind Over Matter, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 239,
                content: "If you do not have this skill, turn to",
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
            name: "Grand Palace",
            regionType: "STONE_BUILDING",
            description: "The biggest building in Barrakeesh. ",
            imageUrl: "images/shadow/regions/chula.png",
        },
        content:
            "Itikar are by nature wild and malicious creatures, and it can take many years for a rider to tame and train one. However, the effort is well worthwhile as once this is been accomplished, the giant black birds are fiercely loyal.<br>The Itikar senses that you are not his master and tries to drive you away, wounding your back with a glancing blow from its powerful beak. You lose 1 ENDURANCE point. However, due to sheer strength of will, you manage to climb into the saddle and subdue the creature. It turns its head and fixes you with a cold black stare, but you sense that it is now no longer hostile.<br>Suddenly, you catch sight of the Drakkarim, streaming across the gangplank. You stretch forward, unhook the Itikar’s anchor rope from the saddle ring, and grab the thick leather reins.",
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
                targetNr: 343,
                content: "Turn to",
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
            name: "Barrakeesh",
            regionType: "CITY",
            description:
                "Barrakeesh is the capital city of Vassagonia. It has a habour, a lake and on the outskirts of the magnificent city are some smaller towns such as Chiras and Chula. The citizens of Barrakeesh, unlike the inhabitants of other Vassagonian cities, enjoy an abundant supply of fresh water from the Da River.",
            imageUrl: "images/shadow/regions/barrakeesh.png",
        },
        content:
            "The Drakkar curses you with his dying breath, his cry fading as he falls from the platform. You rush to aid your wounded countryman, but the battle is not yet over. A Kraan-rider is swooping towards you, a crossbow levelled at your head; he fires and the bolt shoots towards your face. Then a shrill, metallic whine rings in your ears as the bolt miraculously ricochets away, deflected by an invisible shield.",
        outcomes: [
            {
                outcomeType: "ITEM",
                targetNr: 399,
                content: "If you have ever been given a Crystal Star Pendant, turn to",
                item: {
                    code: "CRYSTAL_STAR_PENDANT",
                    name: "Crystal star pendant",
                    description: "Crystal star pendant",
                    imageUrl: "images/shadow/items/crystal_star_pendant.png",
                },
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 294,
                content: "If you do not have this Special Item, turn to",
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
            name: "Throne Chamber",
            regionType: "ROOM",
            description:
                "A large chamber within the Tomb of the Majhan. It is dimly lit and thick dust covers the marble floor. At the side of the chamber that is opposed to the large stone door there is a rough stone throne.",
            imageUrl: "images/shadow/regions/throne_chamber.png",
        },
        content:
            "The throne begins to revolve. A terrible howling fills your ears, changing almost instantaneously to the growling of a harsh guttural language, the like of which you have never heard before. Words and sounds that the mouths of men could never be shaped to speak roll through the chamber like thunder. It is the dark tongue, spoken by Haakon, Lord of Aarnak, Darklord of Helgedad.<br>He rises from the throne, the ghastly voice still echoing from his unnatural mouth. A spiked fist opens to reveal a glowing stone; blue flame smoulders around its surface, and you can feel the currents of power that radiate from its core. Suddenly, his words change and you hear a tongue you know so well—Sommlending.<br>‘Look on your doom, Kai Lord!’<br>There is a deafening crack, a surge of power, and a fireball of blue flame hurtles towards your head.",
        outcomes: [
            {
                outcomeType: "ITEM",
                targetNr: 311,
                content: "If you possess the Sommerswerd, turn to",
                item: {
                    code: "SOMMERSWERD",
                    name: "Sommerswerd",
                    description: "Sommerswerd",
                    imageUrl: "images/shadow/items/sommerswerd.png",
                },
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 219,
                content: "If you do not have this Special Item, turn to",
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
            name: "Grand Palace",
            regionType: "STONE_BUILDING",
            description: "The biggest building in Barrakeesh. ",
            imageUrl: "images/shadow/regions/chula.png",
        },
        content:
            "You search the body of the dead Drakkarim leader and discover in his pocket a Black Crystal Cube. If you wish to keep the Black Crystal Cube, place it in your pocket and mark it on your Action Chart as a Special Item.<br>The sound of more Drakkarim thundering down the tower stairs prompts you to leave the other bodies and hurry over to the wooden door.",
        events: [
            {
                eventType: "ACQUIRE_ITEM_EVENT",
                ranking: 1,
                item: {
                    name: "Black crystal cube",
                    itemType: "MAGICAL_ITEM",
                    description: "Black crystal cube",
                    weight: "SMALL",
                    imageUrl: "images/shadow/items/black_crystal_cube.png",
                },
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 359,
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
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png",
        },
        content:
            "You learn that the dwarves were once the crew of a more conventional vessel, a merchantman that sailed the Tentarias of southern Magnamund. The Tentarias is a vast expanse of lakes and land-locked seas, which connect to form a continuous canal stretching nearly three thousand miles. They were created, as was the Rymerift of Durenor, by a massive landslide. Three years ago, the dwarves’ former captain, a dwarf named Quan, lost his ship, cargo, and crew whilst gambling at cards; it seems the unfortunate captain was unaware of Banedon’s true profession until it was far too late. As a result, Banedon became the dwarves’ captain, and ever since they have adventured with him across the lands and skies of Southern Magnamund. The Skyrider itself was given to Banedon by the Magicians of Dessi, in return for his help in defeating the Gagadoth—a monstrous creature that terrorized their land, over which their own sorcery could not prevail.<br>The Skyrider was travelling from Dessi on its way to Barrakeesh when you appeared. The dwarves have overheard your talk with Banedon and are excited by the prospects of a new adventure. They seem undaunted by the deadly dangers that it will certainly involve.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 359,
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
            name: "Ikaresh",
            regionType: "TOWN",
            description:
                "This is a village lying between the mountains of Dahir. The villagers - named Ikareshi - have their own dialect, so called Ikareshi dialect",
            imageUrl: "images/shadow/regions/ikaresh.png",
        },
        content:
            "Your Kai sense tells you that the house at the end of the alleyway is Tipasa’s home. You signal to Banedon to follow as you approach the blue door.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 206,
                content: "Turn to",
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
            name: "Grand Palace",
            regionType: "STONE_BUILDING",
            description: "The biggest building in Barrakeesh. ",
            imageUrl: "images/shadow/regions/chula.png",
        },
        content:
            "For a moment, your sense of bearing is completely lost as you tumble and spin into the void, unaware of what is happening to your body. You try to cry out, but your cries are lost on the wind as it rushes past. You hit the upper branches of a toa tree. You are stunned by the crash, and your body becomes numb.<br>By the time your broken body is found by the Drakkarim, you have bled to death.<br>Your life and the hopes of Sommerlund end here.",
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
            name: "Barrakeesh",
            regionType: "CITY",
            description:
                "Barrakeesh is the capital city of Vassagonia. It has a habour, a lake and on the outskirts of the magnificent city are some smaller towns such as Chiras and Chula. The citizens of Barrakeesh, unlike the inhabitants of other Vassagonian cities, enjoy an abundant supply of fresh water from the Da River.",
            imageUrl: "images/shadow/regions/barrakeesh.png",
        },
        content:
            "You see the young magician lower his staff, a trace of a smile on his pain-racked face.<br>‘Alas, I was too slow to shield myself,’ he says wryly, as you kneel at his side and free the spear that pins him to the floor. The wound is serious, and you hastily staunch the bleeding with strips of cloth from his dark blue robes.<br>The wizard then introduces himself. ‘I am Banedon, Journeymaster to the Guild of the Crystal Star,’ he says, his voice weak and shaky. ‘However, you need not introduce yourself, Lone Wolf, for only you would attract such company this far from home.’ He glances at the Kraan-riders swooping past the skyship on every side. ‘Help me to my feet—we must escape before they drag us from the sky.’<br></br>You support the wizard as he grasps the ship’s helm—a radiant crystal sphere with hundreds of glowing facets set upon a slim silver rod.<br>No sooner has his hand closed around the crystal than there is a tremendous explosion.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 323,
                content: "Turn to",
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
            name: "Grand Palace",
            regionType: "STONE_BUILDING",
            description: "The biggest building in Barrakeesh. ",
            imageUrl: "images/shadow/regions/chula.png",
        },
        content:
            "Focusing your skill on a money pouch that hangs from the sentry’s belt, you concentrate on untying the leather thong that secures it. Seconds later, the pouch drops to the ground and spills its contents. The guard yelps in horror as he sees his gold rolling over the edge of the platform and drops to his knees to gather what little remains. As he turns his back, you break cover and run across the gangplank. Your speed and stealth carry you across the gangplank undetected. When you strike, the guard is still on his knees, picking up his scattered gold. Your attack is silent and deadly.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 207,
                content: "If you wish to search the guard’s body, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 224,
                content:
                    "If you decide to ignore the body, hurry into the Itikar’s pen and turn to",
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
            name: "Ikaresh",
            regionType: "TOWN",
            description:
                "This is a village lying between the mountains of Dahir. The villagers - named Ikareshi - have their own dialect, so called Ikareshi dialect",
            imageUrl: "images/shadow/regions/ikaresh.png",
        },
        content:
            "Inside, the eating house is full of townsfolk, all seated at small stone tables. Ornate hubble-bubble pipes add to the colourful atmosphere as the smokers discuss all kinds of matters. A quarrelsome trio of Ikareshi are lamenting the death of the old Zakhan. Others give voice to various grievances, calling their new leader an ox, a brute, and other such names. In your opinion, they speak too highly of him. Two rough-faced Ikareshi bid you welcome and invite you to share their pipe.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 362,
                content: "If you wish to accept their offer, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 388,
                content:
                    "If you wish to decline, you can leave the eating house and continue along the avenue and turn to",
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
            name: "Grand Palace",
            regionType: "STONE_BUILDING",
            description: "The biggest building in Barrakeesh. ",
            imageUrl: "images/shadow/regions/chula.png",
        },
        content:
            "The guards are the first to recover from the surprise of the encounter. They attack, opening a deep wound in your chest. Lose 4 ENDURANCE points.",
        events: [
            {
                eventType: "CHANGE_ENDURANCE_EVENT",
                ranking: 1,
                amount: -4,
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 334,
                content: "If you are still alive and wish to fight the guards, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 209,
                content: "If you wish to try to escape by running back up the stairs, turn to",
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
            name: "Tomb of the Majhan",
            regionType: "EVIL_TEMPLE",
            description:
                'an old tomb where Darklord Haakon hopes to find the "Book of the Magnakai"',
            imageUrl: "images/shadow/regions/tomb_of_the_Majhan.png",
        },
        content:
            "You are trying to decide whether to try prising open the door, when you hear the sound of stone grating on stone. The door slowly opens to reveal a large chamber. It is dimly lit, but in the thick dust which covers the marble floor you can see innumerable footprints.<br>Then, as you enter, you catch sight of a rough stone throne, facing the wall on the far side of the chamber. Behind you, the stone door slides shut with unnerving speed.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 289,
                content: "Turn to",
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
            name: "Barrakeesh",
            regionType: "CITY",
            description:
                "Barrakeesh is the capital city of Vassagonia. It has a habour, a lake and on the outskirts of the magnificent city are some smaller towns such as Chiras and Chula. The citizens of Barrakeesh, unlike the inhabitants of other Vassagonian cities, enjoy an abundant supply of fresh water from the Da River.",
            imageUrl: "images/shadow/regions/barrakeesh.png",
        },
        content:
            "The Vordak removes a bony hand, drenched in blood, from the Itikar’s back and claws at a black iron mace hanging from its belt. It raises the weapon and lunges at your head. It is impossible to evade its attack; you must fight the creature to the death.<br>Unless you have the Kai Discipline of Mindshield, deduct 2 points from your COMBAT SKILL for the duration of this fight, for the Vordak is attacking you with its Mindforce. It is immune to Mindblast.",
        events: [
            {
                eventType: "TEMPORARY_CHANGE_COMBAT_SKILL_EVENT",
                ranking: 1,
                amount: -2,
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 203,
                content: "If you win the fight, turn to",
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
            name: "The Koos",
            regionType: "MOUNTAIN",
            description:
                "Highest mountains in the middle of Dahir Mountains. The voyage through the Koos is breathtaking. The Skyrider glides between the towers of rock that rise from the valley floor with fantastic and unearthly grandeur. Perched upon two of these huge rocky columns are Kraan, their Drakkarim riders scouring the valley with telescopes.",
            imageUrl: "images/shadow/regions/the_koos.png",
        },
        content:
            "You wake shortly after dawn to the sound of snoring dwarves and the low hum of the Skyrider. Gathering your equipment, you climb on deck to find everything in shadow, for the Skyrider is hovering beneath a massive outcrop of sandstone that juts out from the side of a mountain, thousands of feet above the valley floor below. Banedon stands at the helm, but he is no longer in a trance.<br>‘Kraan-riders,’ he says, pointing to the sun-bleached valley beyond the shadows. ‘They arrived with the dawn.’<br>You stare out across this alien landscape, a mountain valley filled with pillars of massive and precariously balanced boulders. The Vassagonians call this place the Koos—‘the needles’. The rocky columns reach so high into the sky that an avalanche seems unavoidable. Perched upon two of the columns are Kraan, their Drakkarim riders scouring the valley with telescopes. An hour passes before they take to the air and disappear.<br>‘Trim the boom-sail, Bo’sun Nolrim,’ orders Banedon, his voice barely audible above the increasing hum of the Skyrider. ‘We’ve a fast run ahead.’",
        outcomes: [
            {
                outcomeType: "ITEM",
                targetNr: 229,
                content: "If you possess a Black Crystal Cube, turn to",
                item: {
                    code: "BLACK_CRYSTAL_CUBE",
                    name: "Black crystal cube",
                    description: "Black crystal cube",
                    imageUrl: "images/shadow/items/black_crystal_cube.png",
                },
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 247,
                content: "If you do not have this Special Item, turn to",
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
            name: "Grand Palace",
            regionType: "STONE_BUILDING",
            description: "The biggest building in Barrakeesh. ",
            imageUrl: "images/shadow/regions/chula.png",
        },
        content:
            "Using the bands of iron as footholds, you clamber to the top of the door. Long spikes protrude from the timber crossbar, each coated with an oily black tar. Just as you are stepping over the spikes, the guards fire their crossbows.<br>Pick a number from the Random Number Table. If you have reached the Kai rank of Guardian or higher, subtract 2 from the number you have picked. If you have the Kai Discipline of Hunting, subtract 1 from this number.",
        outcomes: [
            {
                outcomeType: "RANDOM",
                targetNr: 363,
                content: "If your total score is 4 or less, turn to ",
                intervall: {
                    min: 0,
                    max: 4,
                },
            },
            {
                outcomeType: "RANDOM",
                targetNr: 259,
                content: "If your score is 5–9, turn to",
                intervall: {
                    min: 5,
                    max: 9,
                },
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
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png",
        },
        content:
            "Banedon takes over the helm as his extraordinary ship, the Skyrider, as the dwarves call it, speeds through the gathering darkness towards the Dahir Pass. Visibility diminishes with each passing minute until, finally, you can see no further than the outriggers. You feel uneasy; if the Skyrider veers but a fraction off course, you will be smashed to pieces against the mountainside.<br>‘Do not worry, Lone Wolf,’ says Nolrim, the dwarf with the velvet satchel. ‘The captain will see us through.’<br>Banedon stands with his hand resting lightly on the glowing crystal, relaxed as if in a trance. His eyes are closed and a crackle of energy, like fine white lightning, traces an intricate pattern over his forehead and temples.<br>The dwarf leads you to the cabin at the rear of the craft where the crew are excitedly recounting their victory over the Kraan-riders. They are seated about a table cluttered with plates of steaming food and jugs of foaming ale. The rich smell of spiced meat and Bor-brew fills your nostrils, reminding you of how ravenously hungry you are.<br>You make short work of the meat and marrow placed before you. Restore 3 ENDURANCE points. However, you are unsure about accepting a jug of ale; Bor-brew is so strong that in many cities of Magnamund it has been banned for fear of the havoc it can cause.",
        events: [
            {
                eventType: "CHANGE_ENDURANCE_EVENT",
                ranking: 1,
                amount: 3,
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 392,
                content: "If you wish to accept a jug of the notorious ale, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 283,
                content: "If you decide to decline the offer, turn to",
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
            name: "Excavation Site",
            regionType: "CONSTRUCTION_SITE",
            description:
                'An excavation site in the Koneshi Mountains delving the Tomb of Majhan. Commanded by Darklord Haakon in order to find the "Book of the Magnakai"',
            imageUrl: "images/shadow/regions/excavation_site.png",
        },
        content:
            "With speed and stealth you approach the sentry from behind and silence him for good with a sharp twist of the neck. You drag the body away and cover it with a wheelbarrow before entering the Tomb.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 395,
                content: "Turn to",
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
            name: "Grand Palace",
            regionType: "STONE_BUILDING",
            description: "The biggest building in Barrakeesh. ",
            imageUrl: "images/shadow/regions/chula.png",
        },
        content:
            "The Vordak collapses at your feet, but before you can escape, you are surrounded by Drakkarim. A silence fills the arboretum; all is deathly quiet. You prepare to cut your way out, but more of the evil warriors appear. You shiver with a chill of fear—the Drakkarim reinforcements are armed with heavy bronze crossbows.<br>As you shout your battle-cry ‘For Sommerlund!’ you are hit by a volley of poison-tipped bolts, which hurl you backwards to the soft earth. The last sound you hear as your life’s blood drains away into the soil is the hideous gloating laughter of Darklord Haakon, rising above the ghoulish howl of his Drakkarim.<br>Your life and the hopes of Sommerlund end here.",
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
            name: "Grand Palace",
            regionType: "STONE_BUILDING",
            description: "The biggest building in Barrakeesh. ",
            imageUrl: "images/shadow/regions/chula.png",
        },
        content:
            "Tying one end of the rope to the parapet rail, you drop the other end over the side and glissade down the tower. You have reached halfway when you see two Drakkarim above you, sawing at the knot. Suddenly, the rope snaps and you plummet into the void.<br>Pick a number from the Random Number Table.",
        outcomes: [
            {
                outcomeType: "RANDOM",
                targetNr: 293,
                content: "If the number you have picked is 0–2, turn to",
                intervall: {
                    min: 0,
                    max: 2,
                },
            },
            {
                outcomeType: "RANDOM",
                targetNr: 234,
                content: "If it is 3–9, turn to",
                intervall: {
                    min: 3,
                    max: 9,
                },
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
            name: "The Koos",
            regionType: "MOUNTAIN",
            description:
                "Highest mountains in the middle of Dahir Mountains. The voyage through the Koos is breathtaking. The Skyrider glides between the towers of rock that rise from the valley floor with fantastic and unearthly grandeur. Perched upon two of these huge rocky columns are Kraan, their Drakkarim riders scouring the valley with telescopes.",
            imageUrl: "images/shadow/regions/the_koos.png",
        },
        content:
            "‘Hold tight, Lone Wolf,’ shouts Banedon, as he regains control of the glowing crystal helm. You obey and grasp the parapet rail, bracing your feet against a deck cleat for safety, for you have guessed what manoeuvre the young wizard is about to perform.<br>‘Pirate roll!’ he shouts to his fighting dwarves, and jerks the helm to the left. The Skyrider responds to his touch, swerving violently as the deck swings from a horizontal to a near-vertical angle. The dwarves heed his cry and throw themselves to the deck, clutching the boards like limpets to a galleon’s keel.<br>The Drakkarim are caught off-balance and hurtle over the decks and outriggers, tumbling into the void. Banedon rights the craft and a victory cheer resounds across the decks as you speed away from the Koos. ‘Blood for blood!’",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 247,
                content: "Turn to",
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
            name: "Ikaresh",
            regionType: "TOWN",
            description:
                "This is a village lying between the mountains of Dahir. The villagers - named Ikareshi - have their own dialect, so called Ikareshi dialect",
            imageUrl: "images/shadow/regions/ikaresh.png",
        },
        content:
            "‘Yes, yes. I am Soushilla,’ she replies.<br>‘Do you know where we can find Tipasa the wanderer?’ asks Banedon.<br>The old crone does not reply, she merely holds out her begging bowl in expectation. Banedon loses another crown before she answers his question.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 314,
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
            name: "Grand Palace",
            regionType: "STONE_BUILDING",
            description: "The biggest building in Barrakeesh. ",
            imageUrl: "images/shadow/regions/chula.png",
        },
        content:
            "It can take many years for a rider to tame an Itikar, for by nature they are wild and malicious creatures. You use your Kai skill to communicate with the giant bird, to assure it that you mean no harm. It fixes you with a cold, black stare, but you sense that it is no longer hostile.<br>As you settle in its wide saddle, you catch sight of the Drakkarim as they stream across the gangplank. Quickly you lean forward, unhook the anchor rope from the saddle ring and grab the thick leather reins.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 343,
                content: "Turn to",
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
            name: "Ikaresh",
            regionType: "TOWN",
            description:
                "This is a village lying between the mountains of Dahir. The villagers - named Ikareshi - have their own dialect, so called Ikareshi dialect",
            imageUrl: "images/shadow/regions/ikaresh.png",
        },
        content:
            "As you enter the stables, you are overpowered by the smell of the douggas. You grit your teeth and cover your nose with your robe. A small boy sniggers at your reaction and says, ‘You’re not Ikareshi—I can tell.’ He mimics your grimace, exposing a line of broken teeth.<br>‘Do you know where Tipasa the Wanderer lives?’ asks Banedon, holding up a silver ring. The boy’s eyes nearly pop out of his head at the sight of the gleaming silver.<br>‘Oh yes, yes, yes, I do indeed,’ he stammers in his excitement. ‘Walk up the street and take the first passage on your left. The old wanderer lives at the house with the blue door.’<br>Banedon flicks the ring into the air and the urchin catches it in his grubby hands. You hurry away from the stables and begin to search for the passageway. Just as you find it, you hear the young boy shriek with disappointment; the ring has just dissolved on his finger. At the end of the rubbish-strewn alley you find the house with the blue door.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 206,
                content: "Turn to",
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
            name: "Grand Palace",
            regionType: "STONE_BUILDING",
            description: "The biggest building in Barrakeesh. ",
            imageUrl: "images/shadow/regions/chula.png",
        },
        content:
            "As you climb over the lifeless bodies, you notice a Copper Key on a chain around one of their necks. Grabbing the Key, you slip it into your pocket, and race down the steps towards a dim light below. Mark the Copper Key on your Action Chart as a Special Item.<br>A small fire, over which is roasting a chicken on a spit, illuminates a guardroom at the base of the tower. On the back of a wrought-iron chair hangs a Canteen of Water, and lying beside it is a razor-sharp Broadsword. You may take either of these items if you wish, and mark them on your Action Chart (the Canteen is a Backpack Item).<br>You hear the Drakkarim rushing down the tower stairs. They will soon be upon you.",
        events: [
            {
                eventType: "ACQUIRE_ITEM_EVENT",
                ranking: 1,
                item: {
                    name: "Copper Key",
                    itemType: "KEY",
                    description: "Copper Key",
                    weight: "SMALL",
                    imageUrl: "images/shadow/items/copperkey.png",
                },
            },
            {
                eventType: "ACQUIRE_ITEM_EVENT",
                ranking: 2,
                item: {
                    name: "Broadsword",
                    itemType: "WEAPON",
                    description: "Broadsword",
                    weight: "HEAVY",
                    imageUrl: "images/shadow/items/broadsword.png",
                },
            },
            {
                eventType: "ACQUIRE_ITEM_EVENT",
                ranking: 3,
                item: {
                    name: "Canteen",
                    itemType: "UTILITY",
                    description: "a little canteen",
                    weight: "SMALL",
                    imageUrl: "images/shadow/items/canteen.png",
                },
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 246,
                content: "If you wish to leave the tower by a door in the north wall, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 231,
                content:
                    "If you wish to prepare yourself for combat and wait for the Drakkarim to appear, turn to",
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
            name: "Throne Chamber",
            regionType: "ROOM",
            description:
                "A large chamber within the Tomb of the Majhan. It is dimly lit and thick dust covers the marble floor. At the side of the chamber that is opposed to the large stone door there is a rough stone throne.",
            imageUrl: "images/shadow/regions/throne_chamber.png",
        },
        content:
            "You raise your golden sword just in time to deflect the bolt of raw energy. It screams from your blade and explodes into the chamber wall, gouging a hole several feet deep in the steel-hard rock. The impact jars the Sommerswerd from your hand; the blade arcs through the dust-choked air and embeds itself, upright, in the stone floor. You roll across the floor and take cover behind a pillar.<br>‘Your doom, Kai Lord,’ spits Haakon, ‘is but seconds away.’",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 278,
                content: "If you wish to retrieve the Sommerswerd, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 350,
                content:
                    "If you wish to try to move to a new hiding place, under cover of the swirling dust, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 230,
                content: "If you wish to stay where you are, turn to",
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
            name: "Barrakeesh",
            regionType: "CITY",
            description:
                "Barrakeesh is the capital city of Vassagonia. It has a habour, a lake and on the outskirts of the magnificent city are some smaller towns such as Chiras and Chula. The citizens of Barrakeesh, unlike the inhabitants of other Vassagonian cities, enjoy an abundant supply of fresh water from the Da River.",
            imageUrl: "images/shadow/regions/barrakeesh.png",
        },
        content:
            "The dwarves are clearing the deck of battle debris. A dead Drakkar lies sprawled face down across a pile of chests and sacks roped beneath the boom-sail. As the dwarves grab his legs to cast him over the side he suddenly springs to life, sending the dwarves tumbling in all directions. He screams like a fiend, his black axe cutting a wide arc around his blood-smeared body. A curse, vile and evil, echoes from his death-mask as he draws back the axe to throw. His target is you.<br>If you have neither of these skills, pick a number from the Random Number Table.",
        outcomes: [
            {
                outcomeType: "ABILITY",
                targetNr: 210,
                content: "If you have the Kai Discipline of Hunting or Sixth Sense, turn to",
                ability: {
                    abilityType: "SIXTH_SENSE",
                    description:
                        "This skill may warn a Kai Lord of imminent danger. It may also reveal the true purpose of a stranger or strange object encountered in your adventure.",
                },
            },
            {
                outcomeType: "ABILITY",
                targetNr: 210,
                content: "If you have the Kai Discipline of Hunting or Sixth Sense, turn to",
                ability: {
                    abilityType: "HUNTING",
                    description:
                        "This skill ensures that a Kai Lord will never starve in the wild. He will always be able to hunt for food for himself except in areas of wasteland and desert. You are aware that most of Vassagonia is arid desert; should your adventure lead you into this desert, the opportunities for successful hunting may not arise. But this skill is still very useful for it also enables a Kai Lord to move with great speed and dexterity.",
                },
            },
            {
                outcomeType: "RANDOM",
                targetNr: 354,
                content: "If the number you of picked is 0–4, turn to",
                intervall: {
                    min: 0,
                    max: 4,
                },
            },
            {
                outcomeType: "RANDOM",
                targetNr: 371,
                content: "If it is 5–8, turn to ",
                intervall: {
                    min: 5,
                    max: 8,
                },
            },
            {
                outcomeType: "RANDOM",
                targetNr: 232,
                content: "If it is 9, turn to",
                intervall: {
                    min: 9,
                    max: 9,
                },
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
            name: "Grand Palace",
            regionType: "STONE_BUILDING",
            description: "The biggest building in Barrakeesh. ",
            imageUrl: "images/shadow/regions/chula.png",
        },
        content:
            "Below the bell-tower you see a line of Itikar pens, each with its own circular landing platform. Itikar are a breed of huge black birds that nest in eyries high in the peaks of the Dahir and Vakar Mountains. The Vassagonians have long since tamed these giants of the skies, using them as winged mounts for their army leaders, their scouts, couriers, and envoys.<br>An Itikar and rider swoop down out of the reddening sky and alight upon the platform nearest to the bell-tower. Slaves hurl a rope to the rider, who in turn fixes it to a saddle ring before he jumps to the ground. The Itikar caws and beats its huge wings as it is slowly winched into the pen by a hidden capstan.<br>The rider and the slaves leave the platform; there is now only one sentry on guard at the pen. If you can overpower him, you can make your escape on the back of the giant bird.",
        outcomes: [
            {
                outcomeType: "ITEM",
                targetNr: 325,
                content: "If you possess a Blowpipe and Sleep Dart, turn to",
                item: {
                    code: "BLOWPIPE",
                    name: "Blowpipe",
                    description: "A blowpipe for shooting darts at your target.",
                    imageUrl: "images/shadow/items/blowpipe.png",
                },
            },
            {
                outcomeType: "ITEM",
                targetNr: 325,
                content: "If you possess a Blowpipe and Sleep Dart, turn to",
                item: {
                    code: "SLEEP_DART",
                    name: "Sleep Dart",
                    description:
                        "A dart to be shot with a blowpipe that lets your target fall asleep.",
                    imageUrl: "images/shadow/items/sleep_dart.png",
                },
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 282,
                content: "If you do not have these items, turn to",
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
            name: "Ikaresh",
            regionType: "TOWN",
            description:
                "This is a village lying between the mountains of Dahir. The villagers - named Ikareshi - have their own dialect, so called Ikareshi dialect",
            imageUrl: "images/shadow/regions/ikaresh.png",
        },
        content:
            "‘Tipasa can be found at the main square—he is always there at this time of day,’ says the woman cringingly, her face creased into an exaggerated smile.",
        outcomes: [
            {
                outcomeType: "ABILITY",
                targetNr: 358,
                content: "If you have the Kai Discipline of Sixth Sense, ",
                ability: {
                    abilityType: "SIXTH_SENSE",
                    description:
                        "This skill may warn a Kai Lord of imminent danger. It may also reveal the true purpose of a stranger or strange object encountered in your adventure.",
                },
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 358,
                content: "If you do not possess this skill, turn to ",
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
            name: "Barrakeesh",
            regionType: "CITY",
            description:
                "Barrakeesh is the capital city of Vassagonia. It has a habour, a lake and on the outskirts of the magnificent city are some smaller towns such as Chiras and Chula. The citizens of Barrakeesh, unlike the inhabitants of other Vassagonian cities, enjoy an abundant supply of fresh water from the Da River.",
            imageUrl: "images/shadow/regions/barrakeesh.png",
        },
        content:
            "As you unsheathe the Sommerswerd, a vivid golden flame shoots along the blade. The Vordak shrieks in terror, its blood-drenched bony fingers clawing at a black iron mace that hangs from its belt. It raises the mace to parry your blow, but the sun-sword shears through the iron, a splash of blue flame erupting in its wake. You strike again, curving the golden blade in a great arc. It bites into the Vordak’s neck, tearing through its unnatural body, and severing it diagonally from collarbone to hip. A sickening acidic smell chokes your throat as a fountain of green slime erupts from beneath the red robe. The Vordak crumples and topples from view, its dissolving corpse hissing as its spirals towards Lake Inrahim.<br>Sheathing your sword, you grab the reins and fight to control your injured mount. You have slain the Vordak but the battle is not yet won. The Itikar is losing a lot of blood; it could become unconscious at any moment and drop like a stone.<br>Suddenly you spot something in the distance. It is a sight that renews your faith in miracles.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 221,
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
            name: "The Koos",
            regionType: "MOUNTAIN",
            description:
                "Highest mountains in the middle of Dahir Mountains. The voyage through the Koos is breathtaking. The Skyrider glides between the towers of rock that rise from the valley floor with fantastic and unearthly grandeur. Perched upon two of these huge rocky columns are Kraan, their Drakkarim riders scouring the valley with telescopes.",
            imageUrl: "images/shadow/regions/the_koos.png",
        },
        content:
            "You stagger to your feet to see the Skyrider being engulfed by Drakkarim; they leap from their shrieking Kraan and crash onto the decks and outriggers, their black swords already drawn from their scabbards. The dwarves are caught by surprise; their weapons have been unloaded and stored below deck. Even so, they are quick to rally and fight with skill and fury. Above the din you hear Nolrim’s joyous battle-cry, ‘Blood for blood!’<br>An unexpected blow catches you squarely on the back, knocking you from the platform to the deck below. You have risen to one knee when your assailant attacks again. You cannot evade him.<br>Due to the surprise of the attack, reduce your COMBAT SKILL by 2 for the first 3 rounds of combat.",
        events: [
            {
                eventType: "TEMPORARY_CHANGE_COMBAT_SKILL_EVENT",
                ranking: 1,
                amount: -2,
            },
            {
                eventType: "COMBAT",
                ranking: 2,
                creature: {
                    name: "Drakkar",
                    combatSkill: 18,
                    endurance: 26,
                    imageUrl: "images/shadow/creatures/drakkar.png",
                },
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 333,
                content: "If you win the combat, turn to",
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
            name: "Grand Palace",
            regionType: "STONE_BUILDING",
            description: "The biggest building in Barrakeesh. ",
            imageUrl: "images/shadow/regions/chula.png",
        },
        content:
            "The blood is pounding in your ears as you bound up the marble steps. Twenty feet ahead of you, there is a landing with a stone door set into the wall. The stairs continue to ascend to a parapeted walkway, at the end of which is another stone door, identical to the first. Suddenly, the door on the first landing swings open and a palace guard wheels round to face you.<br>‘Majhan!’ he cries, fumbling for the hilt of his sword.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 338,
                content: "If you wish to attack the guard before he draws his weapon, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 372,
                content: "If you wish to barge him aside and continue climbing the stairs, turn to",
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
            name: "Ikaresh",
            regionType: "TOWN",
            description:
                "This is a village lying between the mountains of Dahir. The villagers - named Ikareshi - have their own dialect, so called Ikareshi dialect",
            imageUrl: "images/shadow/regions/ikaresh.png",
        },
        content:
            "‘Ah, Tipasa,’ he replies thoughtfully. ‘He lives near the Dougga Market, but exactly where his home is I am not sure…I haven’t seen old Tipasa for years. If you should find him, remind him of Khamsin the Goatherd. He still owes me twelve Crowns—that I have not forgotten.’ You thank the goatherd for his help and bid him farewell before continuing your trek to Ikaresh.",
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
            name: "Grand Palace",
            regionType: "STONE_BUILDING",
            description: "The biggest building in Barrakeesh. ",
            imageUrl: "images/shadow/regions/chula.png",
        },
        content:
            "The Onyx Medallion is beginning to glow and vibrate in your pocket. This Special Item, torn from the armour of a renegade Vassagonian captain during the battle of Ruanon, enables you to communicate with the Itikar. You reassure it that you mean no harm. Itikar are by nature wild and malicious creatures, but the power of the Onyx Medallion tames this natural instinct, subduing them to the wearer’s command.<br>As you settle in the wide saddle, you catch sight of the Drakkarim streaming across the gangplank. Quickly, you lean forward, unhook the Itikar’s anchor rope from the saddle ring and grab the thick leather reins.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 343,
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
            name: "Koneshi Mountains",
            regionType: "MOUNTAIN",
            description:
                "The Koneshi Mountains stretch from the southeast to the middle of the Dry Main in Vassagonia. At the western end of this high mountains lies one of the six oasis.",
            imageUrl: "images/shadow/regions/koneshi_mountains.png",
        },
        content:
            "Dawn is breaking on the horizon of a low hill, blurred and dotted with small tufted trees. Swiftly the Skyrider has voyaged through the night to arrive at the foothills of the Koneshi Mountains, in whose folds the skyship is safely tucked away from watchful eyes. Twenty-five miles to the north, across a landscape of barren rock and dry brush, lies the Tomb of the Majhan.<br>You and Banedon set off before the dawn, anxious not to waste either time or the protective cover of darkness. Now, as the great golden disc of the sun rises in the sky, for the first time you can see your goal. A massive excavation has exposed the heart of this scorched land, delving deep around the tombs of its forgotten ancestors. Thousands of Giaks, spiteful and malicious servants of the Darklords, labour unceasingly to remove rock and sand from this quarry, forced by Drakkarim to drag their backbreaking loads up ramps to the rim of the crater.<br>Close to the edge of the crater, an encampment of black tents surrounds a large domed canopy. Lying in the shade of this construction is a huge flying creature—an Imperial Zlanbeast. Its presence here can only mean one thing: Darklord Haakon has arrived. The thought chills your blood, but you draw comfort from the labour of his slaves. That they continue to labour is a sign that their mission has yet to be completed: the Book of the Magnakai has yet to be found.<br>It is impossible to approach the crater unseen; you will have to wait for darkness before you attempt to enter the Tomb. During the long wait, it is agreed that Banedon should attempt to find Tipasa. It is likely that he is being held captive inside the encampment—the Darklords would be unlikely to kill him before discovering the treasure they seek.<br>During the day, you must eat a Meal or lose 3 ENDURANCE points. (You may not use Hunting if required to eat a Meal in the middle of this wasteland.) Make the necessary adjustments to your Action Chart.",
        events: [
            {
                eventType: "CHANGE_ENDURANCE_EVENT",
                ranking: 1,
                amount: -3,
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 286,
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
            name: "The Koos",
            regionType: "MOUNTAIN",
            description:
                "Highest mountains in the middle of Dahir Mountains. The voyage through the Koos is breathtaking. The Skyrider glides between the towers of rock that rise from the valley floor with fantastic and unearthly grandeur. Perched upon two of these huge rocky columns are Kraan, their Drakkarim riders scouring the valley with telescopes.",
            imageUrl: "images/shadow/regions/the_koos.png",
        },
        content:
            "You place the Oede herb upon the stone bridge and step back. At first the vaxeler is suspicious and frightened—nobody has dared to enter his cave for many years. But when he recognizes the golden leaves of the Oede herb, he breaks down, weeping tears of joy.<br>‘May the Majhan bless you—may you live in eternal peace,’ he cries, his feeble voice brimming over with emotion. ‘How can I ever repay this kindness?’",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 356,
                content: "If you wish to question the vaxeler about Tipasa the Wanderer, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 281,
                content: "If you wish to leave the cave and press on towards Ikaresh, turn to",
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
            name: "Grand Palace",
            regionType: "STONE_BUILDING",
            description: "The biggest building in Barrakeesh. ",
            imageUrl: "images/shadow/regions/chula.png",
        },
        content:
            "The stairs are high and steep. You gasp for breath and force your aching legs to climb, for the Drakkarim are less than a dozen steps behind you. At the top of the tower, an open arch leads out onto a platform where a huge kettledrum stands. This is used by the tower guard to send messages to the other palace towers. A bleached hide is stretched across its surface and a black wooden beater hangs from the side.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 329,
                content: "If you wish to push the drum down the tower stairs, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 387,
                content:
                    "If you prefer to ignore the drum and escape out onto the platform, turn to",
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
            name: "Barrakeesh",
            regionType: "CITY",
            description:
                "Barrakeesh is the capital city of Vassagonia. It has a habour, a lake and on the outskirts of the magnificent city are some smaller towns such as Chiras and Chula. The citizens of Barrakeesh, unlike the inhabitants of other Vassagonian cities, enjoy an abundant supply of fresh water from the Da River.",
            imageUrl: "images/shadow/regions/barrakeesh.png",
        },
        content:
            "The explosion is followed by a huge cloud of smoke, which engulfs a cabin perched on the rear deck. As the noise rumbles across the desolate salt-plain, you hear the agonizing shriek of a wounded Kraan; it spirals past the platform, a ragged hole rent in its broken wing.<br>The smoke clears to reveal the grinning face of a dwarf at the cabin window. A smear of soot blackens his rosy cheeks and exaggerates the whiteness of his crooked teeth. He is holding a tube of smoking steel that you assume to be a magic staff, until you notice that each of the dwarf crew carry identical staves. As they point them at the swooping Kraan, gouts of smoke and flame bellow from their tips. Suddenly you recognize the weapons and their wielders—they are dwarves from the mountain kingdom of Bor, armed with one of the inventions for which these ingenious artisans are justly famous throughout Magnamund.<br>The Kraan are terrified by the noise; they turn their leathery tails and fly away, their Drakkarim riders powerless to stop them. The primitive guns have claimed only one victim, but nevertheless, they have driven off the enemy and saved the skyship from disaster.<br>Banedon steers the craft about, banking steeply until the ship faces the darkening peaks of the southern mountains and the distinct V-shaped cleft of the Dahir Pass.<br>Pick a number from the Random Number Table.",
        outcomes: [
            {
                outcomeType: "RANDOM",
                targetNr: 250,
                content: "If the number you have picked is 0–2, turn to",
                intervall: {
                    min: 0,
                    max: 2,
                },
            },
            {
                outcomeType: "RANDOM",
                targetNr: 312,
                content: "If it is 3–9, turn to",
                intervall: {
                    min: 3,
                    max: 9,
                },
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
            name: "Excavation Site",
            regionType: "CONSTRUCTION_SITE",
            description:
                'An excavation site in the Koneshi Mountains delving the Tomb of Majhan. Commanded by Darklord Haakon in order to find the "Book of the Magnakai"',
            imageUrl: "images/shadow/regions/excavation_site.png",
        },
        content:
            "You are less than ten feet from the sentry when he senses that something is wrong. He turns to confront you just as you are making your attack.",
        events: [
            {
                eventType: "COMBAT",
                ranking: 1,
                creature: {
                    name: "Drakkarim Sentry",
                    combatSkill: 18,
                    endurance: 25,
                    imageUrl: "images/shadow/creatures/drakkarim_sentry.png",
                },
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 395,
                content: "If you win the combat, hide the body and enter the tomb. Turn to",
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
            name: "Grand Palace",
            regionType: "STONE_BUILDING",
            description: "The biggest building in Barrakeesh. ",
            imageUrl: "images/shadow/regions/chula.png",
        },
        content:
            "Taking care to load the Blowpipe correctly, you raise the unfamiliar weapon to your lips and take aim. The sentry is standing very still; he makes a perfect target. You inflate your cheeks and fire.<br>Pick a number from the Random Number Table. If you have the Kai Discipline of Weaponskill (any weapon), add 2 to the number you have picked.",
        outcomes: [
            {
                outcomeType: "RANDOM",
                targetNr: 384,
                content: "If your total is now 0–3, turn to",
                intervall: {
                    min: 0,
                    max: 3,
                },
            },
            {
                outcomeType: "RANDOM",
                targetNr: 398,
                content: "If your total is now 0–3, turn to",
                intervall: {
                    min: 4,
                    max: 10,
                },
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
            name: "Ikaresh",
            regionType: "TOWN",
            description:
                "This is a village lying between the mountains of Dahir. The villagers - named Ikareshi - have their own dialect, so called Ikareshi dialect",
            imageUrl: "images/shadow/regions/ikaresh.png",
        },
        content:
            "‘Walk along the street to the Dougga Market. Behind the stables there is an alley. Tipasa lives there, in the house with the blue door.’<br>As you make your way through the dancing crowd to the tavern door, you take care to keep both hands on your Belt Pouch. An embarrassed Banedon follows in your footsteps, cursing his misfortune under his breath.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 202,
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
            name: "Barrakeesh",
            regionType: "CITY",
            description:
                "Barrakeesh is the capital city of Vassagonia. It has a habour, a lake and on the outskirts of the magnificent city are some smaller towns such as Chiras and Chula. The citizens of Barrakeesh, unlike the inhabitants of other Vassagonian cities, enjoy an abundant supply of fresh water from the Da River.",
            imageUrl: "images/shadow/regions/barrakeesh.png",
        },
        content:
            "Your blow has opened a wide gash in both the Drakkar and his mount. The Kraan spins uncontrollably, discarding its black-clad rider as it spirals earthwards. With the terrible cries of the doomed Drakkar fading below, you wheel to the south to avoid being caught between the two converging squadrons of Kraan-riders.<br>The quick change of direction increases the distance between you and your pursuers, but the Itikar is badly wounded and you are close to despair; your mount is losing so much blood that it could lapse into unconsciousness at any moment, dropping you like a stone onto Lake Inrahim.<br>Suddenly, you spot something in the distance. It is a sight that renews your faith in miracles.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 221,
                content: "Turn to",
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
            name: "Ikaresh",
            regionType: "TOWN",
            description:
                "This is a village lying between the mountains of Dahir. The villagers - named Ikareshi - have their own dialect, so called Ikareshi dialect",
            imageUrl: "images/shadow/regions/ikaresh.png",
        },
        content:
            "The merchant’s face beams with joy as he pockets your gold. Deduct this from your Action Chart.<br>‘The first alley on the left past the stables,’ he says. ‘He lives in the house with the blue door.’<br>You hurry across the crowded marketplace towards the stables and enter the street beyond. As you turn into the rubbish-strewn alley, you see the blue door facing you at the end of the passage.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 206,
                content: "Turn to",
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
            name: "Grand Palace",
            regionType: "STONE_BUILDING",
            description: "The biggest building in Barrakeesh. ",
            imageUrl: "images/shadow/regions/chula.png",
        },
        content:
            "The heavy copper drum rolls from its wooden base and crashes down the tower stair, a thunderous boom echoing from the dark as it careers on a collision course with the enemy. The screams of horror are cut short as the drum hurtles through the ranks of the Drakkarim, crushing them into the hard stone steps.<br>Your quick action has scattered your pursuers, but victory turns sour when you discover that you are trapped; there are no other stairs from the platform. You have delayed the Drakkarim, but your reprieve is only temporary.",
        outcomes: [
            {
                outcomeType: "ITEM",
                targetNr: 305,
                content:
                    "If you possess a Rope, you can attempt to climb down to the gardens below. Turn to",
                item: {
                    code: "ROPE",
                    name: "Rope",
                    description: "Rope",
                    imageUrl: "images/shadow/items/rope.png",
                },
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 387,
                content: "If you do not possess a Rope, turn to",
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
            name: "The Koos",
            regionType: "MOUNTAIN",
            description:
                "Highest mountains in the middle of Dahir Mountains. The voyage through the Koos is breathtaking. The Skyrider glides between the towers of rock that rise from the valley floor with fantastic and unearthly grandeur. Perched upon two of these huge rocky columns are Kraan, their Drakkarim riders scouring the valley with telescopes.",
            imageUrl: "images/shadow/regions/the_koos.png",
        },
        content:
            "You parry the Drakkar’s blow and turn it aside, but he is quick to recover. He turns to face you and bellows a vile curse, his broadsword arcing back towards your skull.",
        events: [
            {
                eventType: "COMBAT",
                ranking: 1,
                creature: {
                    name: "Drakkar",
                    combatSkill: 18,
                    endurance: 23,
                    imageUrl: "images/shadow/creatures/drakkar.png",
                },
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 243,
                content: "If you win the combat and it lasts for 2 rounds or less, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 394,
                content:
                    "If the combat lasts more than 2 rounds, do not continue the combat but turn immediately to",
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
            name: "Dahir Mountains",
            regionType: "MOUNTAIN",
            description:
                "The Dahir Mountains are a barren, sun-scorched mountain range lying in the south of Barrakeesh.",
            imageUrl: "images/shadow/regions/dahir_mountains.png",
        },
        content:
            "You have little sleep that night as you lie thinking about the quest that lies before you, haunted by the fear that the Darklords may already have found the Book of the Magnakai.<br>You rise before dawn and breakfast on a meal of sheep’s butter and dried milk cake, before bidding farewell to Tipasa’s wife. The trek back to the Skyrider passes uneventfully, and by noon you have reached the rocky crag where the craft is moored. Nolrim is the first to greet you, but he cannot hide his disappointment that you have returned unaccompanied.<br>‘Do not worry—the answer lies here,’ says Banedon, holding up Tipasa’s diary. ‘Prepare to set sail.’<br>As the Skyrider rises into the clear blue sky, Banedon hands over the helm to Nolrim and bids you follow him to his quarters at the prow. For three hours he pores over his charts, making calculations, checking instrument readings, and racking his brain for the solution that will pinpoint the Tomb of the Majhan.<br>‘It’s no use,’ he says, tired and exasperated. ‘I cannot fathom these numbers.’<br>As you peer at the pages of Tipasa’s diary, suddenly you realize that they are written in code. What Banedon had assumed to be positions of stars is a code to three numbers that give the precise location of the Tomb.<br>Consult the map to help you discover the location of the Tomb of the Majhan.<br>The first of the three numbers is equal to the number of oases on the trail between Ikaresh and Bir Rabalou. The second number is equal to the number of cities in Vassagonia. The third number is equal to the number of islands off the coast of Cape Kabar.<br>When you have broken the code, write the numbers in order and turn to the entry number that they indicate.",
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
            name: "Grand Palace",
            regionType: "STONE_BUILDING",
            description: "The biggest building in Barrakeesh. ",
            imageUrl: "images/shadow/regions/chula.png",
        },
        content:
            "Leaving the arbour, you press on towards the outer wall of the arboretum. Through the dense foliage you can make out a narrow, arched doorway that leads to an open chamber. A stairway ascends to a parapeted walkway, at the end of which is a stone door. You are halfway up the stairs when the sound of a crossbow being cocked freezes your blood. To turn back now would be suicide; you grit your teeth and bound up the stairs as a hail of crossbow fire slams into the steps on either side of you.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 372,
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
            name: "The Koos",
            regionType: "MOUNTAIN",
            description:
                "Highest mountains in the middle of Dahir Mountains. The voyage through the Koos is breathtaking. The Skyrider glides between the towers of rock that rise from the valley floor with fantastic and unearthly grandeur. Perched upon two of these huge rocky columns are Kraan, their Drakkarim riders scouring the valley with telescopes.",
            imageUrl: "images/shadow/regions/the_koos.png",
        },
        content:
            "You catch a glimpse of Nolrim fighting his way through a mass of red-cloaked Drakkarim, his two-handed battle-axe bringing down three of them in as many blows. He cuts a path to your side and points with his bloodstained axe to a creature hovering high above the Skyrider.<br>You recognize it to be a Zlanbeast, a creature rather like a Kraan but far larger than its leathery subspecies. Upon its back sits a red-robed Vordak, a staff of black iron in its skeletal hand. There is a flash, and a stream of liquid blue flame pours from its tip.",
        outcomes: [
            {
                outcomeType: "ITEM",
                targetNr: 258,
                content: "If you possess the Sommerswerd, turn to",
                item: {
                    code: "SOMMERSWERD",
                    name: "Sommerswerd",
                    description: "Sommerswerd",
                    imageUrl: "images/shadow/items/sommerswerd.png",
                },
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 349,
                content: "If you do not have the Special Item, turn to",
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
            name: "Grand Palace",
            regionType: "STONE_BUILDING",
            description: "The biggest building in Barrakeesh. ",
            imageUrl: "images/shadow/regions/chula.png",
        },
        content:
            "You are in combat with two grim-faced warriors. They block the stair and you must fight both of them as one enemy.",
        events: [
            {
                eventType: "COMBAT",
                ranking: 1,
                creature: {
                    name: "Tower Guards",
                    combatSkill: 17,
                    endurance: 32,
                    imageUrl: "images/shadow/creatures/tower_guards.png",
                },
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 209,
                content:
                    "If you wish to avoid combat at any time by running back up the spiral staircase, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 310,
                content: "If you win the fight, turn to",
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
            name: "Throne Chamber",
            regionType: "ROOM",
            description:
                "A large chamber within the Tomb of the Majhan. It is dimly lit and thick dust covers the marble floor. At the side of the chamber that is opposed to the large stone door there is a rough stone throne.",
            imageUrl: "images/shadow/regions/throne_chamber.png",
        },
        content:
            "As you strike the death-blow, the Dhorgaan shimmers and winks out of existence. Darklord Haakon reels back as if weakened by the death of his creation. The glowing stone falls from his hand and rolls across the chamber, coming to rest midway between you.",
        outcomes: [
            {
                outcomeType: "ABILITY",
                targetNr: 204,
                content: "If you have the Kai Discipline of Sixth Sense, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 268,
                content: "If you wish to attempt to grab the stone, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 390,
                content: "If you wish to ignore the stone and attack Haakon, turn to",
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
            name: "Barrakeesh",
            regionType: "CITY",
            description:
                "Barrakeesh is the capital city of Vassagonia. It has a habour, a lake and on the outskirts of the magnificent city are some smaller towns such as Chiras and Chula. The citizens of Barrakeesh, unlike the inhabitants of other Vassagonian cities, enjoy an abundant supply of fresh water from the Da River.",
            imageUrl: "images/shadow/regions/barrakeesh.png",
        },
        content:
            "Standing at a fortified platform in the centre of the strange craft is a blond-haired young man with deep, brooding eyes. Instantly you recognize him: it is Banedon, the young Sommlending magician who gave you the Crystal Star Pendant at the ruins of Raumas, after you saved his life in a Giak ambush.<br>You are so stunned by his unexpected appearance that you fail to notice the blood seeping from the Itikar’s mouth; the creature is near to death. Suddenly, the great bird lets out a pitiful and agonized caw, its wings stiffen, and its head falls limp as the last flicker of life escapes from its torn body. It pitches you forward, and your stomach heaves as you plummet towards Lake Inrahim.<br>Pick a number from the Random Number Table.",
        outcomes: [
            {
                outcomeType: "RANDOM",
                targetNr: 374,
                intervall: {
                    min: 0,
                    max: 4,
                },
                content: "If the number you have picked is 0–4, turn to",
            },
            {
                outcomeType: "RANDOM",
                targetNr: 254,
                intervall: {
                    min: 5,
                    max: 8,
                },
                content: "If it is 5–8, turn to",
            },
            {
                outcomeType: "RANDOM",
                targetNr: 261,
                intervall: {
                    min: 9,
                    max: 9,
                },
                content: "If it is 9, turn to",
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
            name: "Ikaresh",
            regionType: "TOWN",
            description:
                "This is a village lying between the mountains of Dahir. The villagers - named Ikareshi - have their own dialect, so called Ikareshi dialect",
            imageUrl: "images/shadow/regions/ikaresh.png",
        },
        content:
            "Without the breeze of the speeding Skyrider to cool you, the heat of the mountains is almost unbearable. You trudge across the loose reddish sand, your faces covered to keep the dust from choking your throats. All that seems to grow in this desolate waste is the wire-hard grass that tears at your boots and leggings.<br>As you reach the outskirts of Ikaresh, you pass a small round hut where a goat is eating from a manger by the door. A man appears at the darkened doorway and bids you welcome; he touches his forehead in a salute of friendship and invites you both to enter his humble home.",
        outcomes: [
            {
                outcomeType: "ABILITY",
                targetNr: 365,
                content: "If you have the Kai Discipline of Sixth Sense, turn to",
                ability: {
                    abilityType: "SIXTH_SENSE",
                    description:
                        "This skill may warn a Kai Lord of imminent danger. It may also reveal the true purpose of a stranger or strange object encountered in your adventure.",
                },
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 225,
                content: "If you wish to accept his invitation, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 272,
                content: "If you wish to decline his offer and continue towards Ikaresh, turn to",
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
            name: "Grand Palace",
            regionType: "STONE_BUILDING",
            description: "The biggest building in Barrakeesh. ",
            imageUrl: "images/shadow/regions/chula.png",
        },
        content:
            "Using your skill for unarmed combat taught to you by your Kai masters, you grab the startled guard by the throat and pitch him over the low wall at the edge of the landing. His cry of terror fills the air until he crashes into the flagstones below.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 372,
                content:
                    "If you wish to continue climbing the stairs towards the door of the walkway, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 279,
                content: "If you wish to enter the door through which the guard came, turn to",
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
            name: "Barrakeesh",
            regionType: "CITY",
            description:
                "Barrakeesh is the capital city of Vassagonia. It has a habour, a lake and on the outskirts of the magnificent city are some smaller towns such as Chiras and Chula. The citizens of Barrakeesh, unlike the inhabitants of other Vassagonian cities, enjoy an abundant supply of fresh water from the Da River.",
            imageUrl: "images/shadow/regions/barrakeesh.png",
        },
        content:
            "Two dwarves clamber onto the platform and hurry to their young captain’s side. One flicks open a red velvet satchel strapped to his barrel-like chest, and removes a glass vial and a clean linen bandage. They attend to the wound, and, as his strength returns, Banedon listens intently to your account of the terrifying events that have led up to this meeting. As you conclude your woeful tale, Banedon speaks, his voice full of grim determination.<br>‘The future of Sommerlund rests in our hands, Lone Wolf. We must stop Darklord Haakon from destroying the Book of the Magnakai. I have heard tell of the Tomb of the Majhan from the nomads of the Dry Main. They say it is a terrible place, a place of horror and death—for what little there is left to die there. It lies beyond the Dahir, near the oasis of Bal-loftan. That is all I know, for the Majhan hid their tombs well and what few traces remained have long since disappeared beneath the shifting sands of the Dry Main.’<br>Your face conveys the disappointment you feel upon hearing these words.<br>‘However, all is not lost,’ says Banedon, undaunted. ‘There is a man who can guide us there. His name is Tipasa Edarouk—“Tipasa the Wanderer”. It is he who we must seek, for he is the only man who has ever entered the Tomb of the Majhan and lived to tell the tale.’",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 302,
                content: "Turn to",
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
            name: "Ikaresh",
            regionType: "TOWN",
            description:
                "This is a village lying between the mountains of Dahir. The villagers - named Ikareshi - have their own dialect, so called Ikareshi dialect",
            imageUrl: "images/shadow/regions/ikaresh.png",
        },
        content:
            "It takes over an hour to shake off the Adu-kaw, by which time you have been chased through most of Ikaresh. Had it not been for Banedon’s timely casting of a spell of illusion, they would be after you still. You cannot help but laugh when you picture their faces, when they saw the Kalkoth leaping at them; thank the gods they did not think to question how a Kalte ice-beast came to be roaming the streets of their town.<br>When you have fully recovered from the chase, you leave the narrow alley in which you have been hiding, and press on in search of Tipasa the Wanderer.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 202,
                content: "Turn to",
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
            name: "Grand Palace",
            regionType: "STONE_BUILDING",
            description: "The biggest building in Barrakeesh. ",
            imageUrl: "images/shadow/regions/chula.png",
        },
        content:
            "As you step over the lifeless bodies, you notice a Copper Key on a chain around one of their necks. Grabbing the Key, you slip it into your pocket and race down the tower steps. (Mark the Key as a Special Item on your Action Chart). At the entrance, you see a crowd of Drakkarim and palace guards rushing across the bridge—certain death awaits you there. You continue down the spiral stairs towards a dim light below.<br>A small fire, over which roasts a chicken on a spit, illuminates a guardroom at the base of the tower. On the back of a wrought-iron chair hangs a Canteen of Water and a Broadsword. You may take either or both of these items if you wish, but remember to mark them on your Action Chart. (The Canteen is a Backpack Item.)<br>You hear the enemy thundering down the stairs; they will soon be upon you. However, a heavy wooden door in the north wall offers you another chance of escape.",
        events: [
            {
                eventType: "ACQUIRE_ITEM_EVENT",
                ranking: 1,
                item: {
                    name: "Copper Key",
                    itemType: "KEY",
                    description: "Copper Key",
                    weight: "SMALL",
                    imageUrl: "images/shadow/items/copperkey.png",
                },
            },
            {
                eventType: "ACQUIRE_ITEM_EVENT",
                ranking: 2,
                item: {
                    name: "Broadsword",
                    itemType: "WEAPON",
                    description: "Broadsword",
                    weight: "HEAVY",
                    imageUrl: "images/shadow/items/broadsword.png",
                },
            },
            {
                eventType: "ACQUIRE_ITEM_EVENT",
                ranking: 3,
                item: {
                    name: "Canteen",
                    itemType: "UTILITY",
                    description: "a little canteen",
                    weight: "SMALL",
                    imageUrl: "images/shadow/items/canteen.png",
                },
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 246,
                content: "If you wish to escape from the guard room by this door, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 231,
                content: "If you wish to stand and fight, turn to",
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
            name: "Ikaresh",
            regionType: "TOWN",
            description:
                "This is a village lying between the mountains of Dahir. The villagers - named Ikareshi - have their own dialect, so called Ikareshi dialect",
            imageUrl: "images/shadow/regions/ikaresh.png",
        },
        content:
            "The delicious smell of freshly brewed jala wafts from an eating-house halfway along the avenue. Chattering voices mingle with the clink of glasses, and the wailing cry of a hungry baby fills the air.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 296,
                content: "If you wish to enter the eating-house, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 227,
                content: "If you wish to continue along the avenue, turn to",
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
            name: "Barrakeesh",
            regionType: "CITY",
            description:
                "Barrakeesh is the capital city of Vassagonia. It has a habour, a lake and on the outskirts of the magnificent city are some smaller towns such as Chiras and Chula. The citizens of Barrakeesh, unlike the inhabitants of other Vassagonian cities, enjoy an abundant supply of fresh water from the Da River.",
            imageUrl: "images/shadow/regions/barrakeesh.png",
        },
        content:
            "You are jerked backwards in the saddle as the Itikar leaves its perch. It shrieks and caws, its wings beating as loud as thunder. A handful of Drakkarim are scattered as if they were rag dolls as the great black bird emerges from the pen and takes to the sky. You catch a glimpse of a Drakkar, his death-mask slashed in two by the bird’s razor-sharp talons, as he pitches from the landing platform and tumbles to his death in the palace gardens far below.<br>The golden domes of the Grand Palace grow smaller as the Itikar gathers speed. Soon, you have passed over the city wall and are heading out towards the shimmering salt-flats of Lake Inrahim. The land below is bathed in beautiful orange twilight, as the sun slowly sinks behind the Dahir Mountains to the west. Elated by your escape, you throw back your head and give voice to a triumphant yell that is carried away on the chill evening wind.<br>As if in answer to your cry, an echoing chorus of shrieks pierce the sky. Fear returns to your heart as you catch sight of a flock of Kraan, hideous leathery-winged fliers. Each carries a Drakkarim warrior on its back. They are over a mile behind you, but they are quickly closing the gap. Less than an hour of light remains; if you can evade them a little longer, you may be able to lose them when night falls.<br>You must decide in which direction to fly, for you are now above the centre of Lake Inrahim—consult the map before making your decision.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 264,
                content: "If you wish to steer the Itikar south towards the Dahir Pass, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 244,
                content: "If you wish to head east towards the town of Chula, turn to",
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
            name: "The Koos",
            regionType: "MOUNTAIN",
            description:
                "Highest mountains in the middle of Dahir Mountains. The voyage through the Koos is breathtaking. The Skyrider glides between the towers of rock that rise from the valley floor with fantastic and unearthly grandeur. Perched upon two of these huge rocky columns are Kraan, their Drakkarim riders scouring the valley with telescopes.",
            imageUrl: "images/shadow/regions/the_koos.png",
        },
        content:
            "The old man’s face is a mask of putrescent green sores. The pupils of his eyes are yellow, and his ragged grey lips hang in tatters. He suffers from vaxelus, an infectious disease that rots the skin and attacks the nerves, resulting in hideous mutilation and deformity. He has been cast from his community, banished to this cave where he must eke out his last few years of life in misery and solitude.",
        outcomes: [
            {
                outcomeType: "ITEM",
                targetNr: 321,
                item: {
                    code: "OEDE_HERB",
                    name: "Oede herb",
                    description:
                        "golden leaves which heal many deadly diseases or restore 10 ENDURANCE if swallowed after combat",
                    imageUrl: "images/shadow/items/oedeherb.png",
                },
                content:
                    "If you possess some Oede herb, you may give it to the poor vaxeler by turning to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 270,
                content:
                    "If you do not have any Oede herb, or if you do not wish to give it to this unfortunate wretch, flee the cave and turn to",
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
            name: "Grand Palace",
            regionType: "STONE_BUILDING",
            description: "The biggest building in Barrakeesh. ",
            imageUrl: "images/shadow/regions/chula.png",
        },
        content:
            "You glimpse the silhouette of Darklord Haakon in the hall below, his spiked fist raised. There is a deafening crack as a bolt of blue lightning streaks from a stone in the Darklord’s hand and hurtles towards you. You dive for cover behind the body of the Drakkar as the bolt explodes. In a flash of light, the Drakkar is gone. Only cinders and the rotten odour of scorched flesh remain.<br>You scramble to your feet and sprint along the passage. Another bolt hurtles from the hall, tearing into the ceiling with shattering effect. Splinters of razor-sharp marble whistle down, slashing your cloak and tunic. You race down some stairs, through a silver archway and along a balcony that overlooks the lower palace. A peal of bells and the crunch of iron-shod boots echo in your ears—the Zakhan has sounded the alarm, his guards close in on every side.<br>At the end of the balcony are another arch and a staircase: both look deserted.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 381,
                content: "If you wish to escape through the arch, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 317,
                content: "If you wish to race up the stairs, turn to",
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
            name: "Ikaresh",
            regionType: "TOWN",
            description:
                "This is a village lying between the mountains of Dahir. The villagers - named Ikareshi - have their own dialect, so called Ikareshi dialect",
            imageUrl: "images/shadow/regions/ikaresh.png",
        },
        content:
            "By the side of the street, an old man is selling assortment of rugs and carpets from the back of a wagon. Banedon approaches him and the two converse for several minutes. Finally, the wizard hands the old man a ring; his wrinkled face beams with joy. Banedon returns to you with good news.<br>‘The house with the blue door—at the end of the alley we passed a short while ago. Tipasa lives there.’<br>As you retrace your steps and enter the dingy passage, you hear the old man shriek with disappointment: the ring has just dissolved on his finger.<br>At the end of the alley you find the house with the blue door.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 206,
                content: "Turn to",
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
            name: "Barrakeesh",
            regionType: "CITY",
            description:
                "Barrakeesh is the capital city of Vassagonia. It has a habour, a lake and on the outskirts of the magnificent city are some smaller towns such as Chiras and Chula. The citizens of Barrakeesh, unlike the inhabitants of other Vassagonian cities, enjoy an abundant supply of fresh water from the Da River.",
            imageUrl: "images/shadow/regions/barrakeesh.png",
        },
        content:
            "Wincing from the pain of your wound, you snatch the reins back and urge the Itikar to climb higher. The Drakkar is now over a hundred feet below, but he is bringing the shrieking Kraan around for another attack.<br>You wheel to the south to avoid being caught between the two converging squadrons of Kraan-riders. Your sudden change of direction increases the distance between you and your pursuers, but your feathered mount is badly wounded and you are close to despair; the Itikar is losing so much blood that it could become unconscious at any moment, and drop you like a stone onto the distant surface of Lake Inrahim below.<br>Suddenly you spot something in the distance. It is a sight that renews your faith in miracles.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 221,
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
            name: "The Koos",
            regionType: "MOUNTAIN",
            description:
                "Highest mountains in the middle of Dahir Mountains. The voyage through the Koos is breathtaking. The Skyrider glides between the towers of rock that rise from the valley floor with fantastic and unearthly grandeur. Perched upon two of these huge rocky columns are Kraan, their Drakkarim riders scouring the valley with telescopes.",
            imageUrl: "images/shadow/regions/the_koos.png",
        },
        content:
            "Suddenly, you catch sight of Banedon. His arm is raised above the armoured parapet of the platform, and in his hand he holds a slender blue rod. A torrent of water gushes from the rod, arcing into the sky to meet the deluge of liquid flame. There is a tremendous explosion as the elements collide, and a massive whirlpool of flame and water spirals towards the Vordak.<br>The Vordak shrieks with terror but it is too late—its fate is sealed. The whirlpool consumes the Zlanbeast and its rider in a massive burst of sun-like brilliance.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 267,
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
            name: "Grand Palace",
            regionType: "STONE_BUILDING",
            description: "The biggest building in Barrakeesh. ",
            imageUrl: "images/shadow/regions/chula.png",
        },
        content:
            "The golden blade sings in your hand, a crackle of pure energy spreading along its razor-sharp edge. You strike a tremendous blow, splitting the Vordak’s skull to the teeth. It releases an awful howl of unearthly evil, pain, terror, and death. As it falls, its skeletal body dissolves into a smoking green fluid, shrivelling the plants on the ground beneath.<br>The Drakkarim hesitate as the golden light of the sun-sword glints on their shiny black death-masks; you see your chance and run straight at them, slashing to left and right. A Drakkar raises his shield, but your blade slices clean through the iron-sheathed wood, severing his arm at the shoulder. Wheeling round, you catch another Drakkar in mid-attack, tearing open his black armour with the sword as if it were merely parchment. He screams in agony, but you disappear into the dense foliage before his body falls lifelessly to the soft earth.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 228,
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
        region: {
            name: "Throne Chamber",
            regionType: "ROOM",
            description:
                "A large chamber within the Tomb of the Majhan. It is dimly lit and thick dust covers the marble floor. At the side of the chamber that is opposed to the large stone door there is a rough stone throne.",
            imageUrl: "images/shadow/regions/throne_chamber.png",
        },
        content:
            "As you break cover, another burst of energy leaps from the Darklord’s fist. It explodes into the base of the pillar, severing it from the floor, and the roof above caves in with a tremendous roar. The shock wave throws you to the floor, flattening you against the cold marble flagstones. You lose 3 ENDURANCE points. Erase the Sommerswerd from your Action Chart.<br>Haakon’s laugh can still be heard above the crash of falling stone. It rises in pitch until it fills your head with agonizing pain.",
        events: [
            {
                eventType: "CHANGE_ENDURANCE_EVENT",
                ranking: 1,
                amount: -3,
            },
            {
                eventType: "DROP_WEAPON_EVENT",
                ranking: 2,
                item: {
                    name: "Sommerswerd",
                    itemType: "WEAPON",
                    description: "Sommerswerd",
                    weight: "MEDIUM",
                    imageUrl: "images/shadow/items/sommerswerd.png",
                },
            },
        ],
        outcomes: [
            {
                outcomeType: "ABILITY",
                targetNr: 253,
                content: "If you have the Kai Discipline of Mindshield, turn to",
                ability: {
                    abilityType: "MINDSHIELD",
                    description:
                        "The Darklords and many of the evil creatures in their command have the ability to attack you using their Mindforce. The Kai Discipline of Mindshield prevents you from losing any ENDURANCE points when subjected to this form of attack.",
                },
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 369,
                content: "If you do not possess this Kai Discipline, turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 351
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 351,
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
            "As you approach the door, Banedon offers you a word of advice. ‘Take care to guard your gold, Lone Wolf. Nothing tempts the Ikareshi more than a full purse. You can trust their honour, but if you trust their honesty they will steal the hair from your head.’<br>Inside, the mood is one of celebration. Tables have been drawn together to form a large semicircle in front of which stands a small, broad-shouldered man dressed lavishly in an embroidered costume. A gold-mounted sword hangs by his side, its blue velvet scabbard as vivid in colour as the man’s silk pantaloons. Affectionately, the man embraces his companions, kissing the friends and relatives who have travelled so many miles to celebrate his wedding. At his side sits his bride, her face concealed behind a veil of shimmering pearls. Suddenly, the tavern is filled with music as the guests take the floor for the wedding dance.<br>On the far side of the floor you see the owner of the tavern, a stout old lady dressed in sombre black. She watches the festivities with tears in her eyes.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 276,
                content:
                    "If you wish to approach her and ask where Tipasa the Wanderer may be found, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 202,
                content: "If you wish to leave the tavern and continue along the street, turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 352
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 352,
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
            "Beyond the portal lies a vaulted corridor leading to a grand stairway. You narrowly avoid confrontation with a dozen Drakkarim, saved by your lightning reactions. As the enemy rush from an archway on the second floor landing, you dive behind a statue of the recently deceased Zakhan Moudalla. They are so intent on their chase that they fail to notice your hiding place and hurry down the stairs, grunting in their heavy armour as they run. Silently, you give thanks that Zakhan Moudalla was a very stout man and that his statue casts a very large shadow in which to hide. <br>At the top of the stairway you discover a hatch, which gives access to the roof. You climb through it and follow a path of sun-bleached tiles that wind in and out of the domes and turrets, eventually leading to a bell-tower.<br>You are exhausted and need to rest, your mind still full of the shock of your encounter with Darklord Haakon. The sound of his terrible voice repeating the words ‘Book of the Magnakai’ echoes again and again in your mind.<br>With desperation sapping your will, you peer out through a grille in the bell-tower. The sight before you renews your flagging hope, for it inspires a daring escape plan.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 313,
                content: "Turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 353
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 353,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Throne Chamber",
            regionType: "ROOM",
            description:
                "A large chamber within the Tomb of the Majhan. It is dimly lit and thick dust covers the marble floor. At the side of the chamber that is opposed to the large stone door there is a rough stone throne.",
            imageUrl: "images/shadow/regions/throne_chamber.png",
        },
        content:
            "As you slay the last of the Crypt Spawn, Haakon reels back as if weakened by the death of his creatures. You raise the Sommerswerd, willing the blade to discharge a bolt of power that will burn the evil Darklord from the face of Magnamund forever. The blade shimmers with golden fire, but no searing blast issues from its tip. Suddenly, you realize what has happened; you are beneath the earth, and there is no sun from which the sword can draw its power.<br>Haakon utters a terrible laugh that shakes the floor. A beam of blue flame is growing from the stone in his hand, forming a fiery blade that crackles and spits as it cuts through the dust-choked air. The stench of death and decay fills your nostrils as the Darklord prepares to attack.<br>Unless you have the Kai Discipline of Mindshield, reduce your COMBAT SKILL by 2 for the duration of this combat.",
        events: [
            {
                eventType: "TEMPORARY_CHANGE_COMBAT_SKILL_EVENT",
                ranking: 1,
                amount: -2,
            },
            {
                eventType: "COMBAT",
                ranking: 2,
                creature: {
                    name: "Darklord Haakon",
                    combatSkill: 28,
                    endurance: 45,
                    imageUrl: "images/shadow/creatures/darklord_haakon.png",
                },
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 400,
                content: "If you win the combat, turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 354
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 354,
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
            "You throw yourself to the deck, but the axe blade strikes your thigh, drawing a crimson line across the skin. You lose 2 ENDURANCE points. Suddenly, a deafening bang rings out and the Drakkar is flung backwards, his breastplate torn open by dwarf shot. He gives a long, agonizing death-cry as he disappears from sight, tumbling into the darkness that surrounds the speeding ship.<br>From Barrakeesh, a roll of thunder rumbles across the darkening plain. It is full of brooding menace, as if the city itself were cursing your escape. Banedon appears at your side, his face line with concern for your condition. As he offers a shaky hand to help you to stand, you notice that the makeshift bandage that binds his wound is soaked with blood. He is pale and weak, and close to collapse.",
        events: [
            {
                eventType: "CHANGE_ENDURANCE_EVENT",
                ranking: 1,
                amount: -2,
            },
        ],
        outcomes: [
            {
                outcomeType: "ABILITY",
                targetNr: 377,
                content: "If you have the Kai Discipline of Healing, turn to",
                ability: {
                    abilityType: "HEALING",
                    description:
                        "This Discipline can be used to restore ENDURANCE points lost in combat. If you possess this skill you may restore 1 ENDURANCE point to your total for every numbered section of the book you pass through in which you are not involved in combat. (This is only to be used after your ENDURANCE has fallen below its original level.) Remember that your ENDURANCE cannot rise above its original level.",
                },
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 339,
                content: "If you do not possess the skill, turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 355
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 355,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images /shadow/title.jpg",
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
            "You roll away a split second before the mace smashes down, crushing the dark soil where your head once lay. Unless you have the Kai Discipline of Mindshield, deduct 2 points from your COMBAT SKILL for the duration of the combat, for the Vordak is attacking you with the power of its Mindforce. This creature is immune to Mindblast.",
        events: [
            {
                eventType: "TEMPORARY_CHANGE_COMBAT_SKILL_EVENT",
                ranking: 1,
                amount: -2,
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
                targetNr: 249,
                content: "If you win and the fight lasts 4 rounds or less, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 304,
                content: "If you win and the fight lasts longer than 4 rounds, turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 356
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 356,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images /shadow/title.jpg",
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
            "‘I knew Tipasa once, when my body was young and strong like yours. We fought the Lakuri pirates at Samiz and voyaged to a distant land where ice and snow lay thick on the ground, and the sun had not the power to melt them. Yes, I knew Tipasa the Wanderer…once. All I know now is that he dwells in Ikaresh. Find the widow Soushilla—she will know. She knows all that passes in Ikaresh.’",
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
         * --  Storysection 357
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 357,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images /shadow/title.jpg",
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
            "The gangplank springs up and down as you stride across the gap, and you are forced to slow your pace for fear of falling over the edge. The sentry wheels round, alerted by the noise of creaking planks. He runs to intercept your attack, his spear levelled to thrust at your waist. You cannot avoid combat and must fight the sentry to the death. Deduct 2 from your COMBAT SKILL for the duration of this fight, for the plank on which you are standing is very unstable.",
        events: [
            {
                eventType: "TEMPORARY_CHANGE_COMBAT_SKILL_EVENT",
                ranking: 1,
                amount: -2,
            },
            {
                eventType: "COMBAT",
                ranking: 1,
                creature: {
                    name: "Platform Sentry",
                    combatSkill: 15,
                    endurance: 23,
                    imageUrl: "images/shadow/creatures/platform_sentry.png",
                },
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 293,
                content:
                    "If at any time during this combat you pick a 1 from the Random Number Table, you lose your balance and fall. Turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 207,
                content: "If you win the combat and decide to search the sentry’s body, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 224,
                content:
                    "If you win but decide to ignore the body and hurry into the Itikar’s pen, turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 358
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 358,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images /shadow/title.jpg",
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
            "You sense that the old woman is lying. She is not Soushilla the widow—she is a fraud, attempting to fleece you of your gold. When you confront her, she turns tail and disappears into the alley like a bolt of lightning.<br>‘Let her go,’ says Banedon. ‘Our time is worth more than the gold she took.’",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 388,
                content: "If you wish to continue along the Avenue of Eagles, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 376,
                content:
                    "If you decide to retrace your steps to the Eagle Square, you can either go north towards the Dougga Market, by turning to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 216,
                content: "Or west towards the Main Square, by turning to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 359
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 359,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images /shadow/title.jpg",
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
            "The fatigue of your ordeal finally catches up with you; you are finding it impossible to keep your eyes open. Nolrim shows you to a bunk in the hull of the Skyrider. Gratefully you climb into bed and pull the blankets over your aching limbs. Nolrim apologizes that the bunk is too short, but his words fall on deaf ears—you are already asleep. Restore 2 ENDURANCE points for this much needed rest.",
        events: [
            {
                eventType: "CHANGE_ENDURANCE_EVENT",
                ranking: 1,
                amount: 2,
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 300,
                content: "Turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 360
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 360,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images /shadow/title.jpg",
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
            "Two black-clad guards suddenly appear on the stairs below. You are both surprised by the encounter and are slow to react.<br>Pick a number for the Random Number Table. If you have the Kai Discipline of Hunting, add 1 to the number you have picked. Now, pick another number from the Random Number Table.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 226,
                content: "If the second number is less than the first, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 297,
                content: "If it is more than the first number, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 334,
                content: "If it is exactly the same, turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 361
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 361,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images /shadow/title.jpg",
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
            "Ducking beneath the boom-sail, you clamber onto the platform in time to witness a desperate struggle. The blond-haired magician is pinned to the deck, his left arm skewered by a spear. With a staff in his right hand, he is trying to fend off the dismounted Kraan-rider. The Drakkar senses your presence; he whirls round and draws a twisted black scimitar from its scabbard.",
        events: [
            {
                eventType: "COMBAT",
                ranking: 1,
                creature: {
                    name: "Drakkar",
                    combatSkill: 18,
                    endurance: 25,
                    imageUrl: "images/shadow/creatures/drakkar.png",
                },
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 288,
                content: "If you win and the fight lasts 3 rounds of combat or less, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 382,
                content:
                    "If the fight continues to a fourth round of combat, do not resolve it. Instead, turn immediately to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 362
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 362,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images /shadow/title.jpg",
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
            "The smoke is cool and fragrant. Unfortunately, the same cannot be said of your hosts. Their long coats of Dougga hide are perfumed with a musk that holds no appeal for Sommlending nostrils.<br>A young girl appears with a tray full of steaming jala cups. ‘1 Crown each,’ she says, as she places the tray upon the table.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 237,
                content: "If you wish to purchase a cup of the delicious beverage, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 388,
                content:
                    "If you not wish to purchase a cup of jala or do not have any gold, you must bid farewell and leave the eating-house. Turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 363
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 363,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images /shadow/title.jpg",
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
            "You dive into the garden below, avoiding death by a fraction of a second. The crossbow bolts ricochet off the poison-tipped spikes and shoot into the air, the whine of their twisted metal shafts fading into the sky.<br>The enclosed garden is full of the fragrance of exotic plants and flowers, clustered around a sculptured pool of deep blue water. It is a beautiful sight but one that you dare not stop to enjoy. The palace guards are sure to give chase and you must keep moving.<br>Ahead, beyond a tree-lined colonnade, a flight of steps ascends to a small portal in the wall of the upper palace. To your right, a leafy tunnel winds away into the shrubs and trees.",
        outcomes: [
            {
                outcomeType: "ABILITY",
                targetNr: 220,
                content: "If you have the Kai Discipline of Tracking, turn to",
                ability: {
                    abilityType: "TRACKING",
                    description:
                        "This skill enables a Kai Lord to make the correct choice of a path in the wild, to discover the location of a person or object in a town or city and to read the secrets of footprints or tracks.",
                },
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 352,
                content:
                    "If you do not possess this skill, you can either climb the stairs to the small portal by turning to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 391,
                content: "Or follow the winding path into the trees, by turning to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 364
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 364,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images /shadow/title.jpg",
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
            "The room is moving, at first only imperceptibly, but in the space of a few minutes, the dwarves and the cabin have become a blur of colour. You grasp the table, your knuckles whitening as you fight to control the feeling of dizziness that overcomes you. Sounds seem distant like echoes in a cave. Suddenly, the spinning stops and blackness engulfs your senses. You have collapsed unconscious to the floor.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 380,
                content: "Turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 365
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 365,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images /shadow/title.jpg",
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
            "You sense that the man’s show of friendship is genuine. He may be able to help you find Tipasa the Wanderer if you accept his hospitality.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 225,
                content: "If you wish to enter his home, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 272,
                content: "If you decide to press on towards Ikaresh, turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 366
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 366,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images /shadow/title.jpg",
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
            "Nervously, you wait for the chance to leap up and open the door, but the crossbow bolts ricocheting from the wall and parapet are increasing in number. Suddenly, the sound of running footsteps sends a cold shiver down your spine; the Drakkarim are storming the stairs—it is now or never!<br>You spring to your feet and run to the door, grasping the iron bolt between trembling fingers. As you fight to open it, a pain tears through your back: you have been hit. Another bolt strikes home, sinking deep into your shoulder and throwing you flat against the door.<br>As darkness falls before your eyes, you are unaware of the Drakkarim leaping towards you, their black swords raised for the death-blow. Their blades bite deep but you feel nothing: you are already dead.<br>Your life and the hopes of Sommerlund end here.",
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
         * --  Storysection 367
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 367,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images /shadow/title.jpg",
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
            "Silently, you are beginning to despair. The street is becoming narrower and more disgusting the further you go. A scraggy cat dashes across your path, closely pursued by an equally scraggy street urchin; the dagger that he carries in his hand suggests he is trying to catch his supper.<br>You are about to give up and suggest to Banedon that you should retrace your steps to the junction, when the street ends and turns abruptly left. A sign on the opposite wall points to the Dougga Market.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 376,
                content: "If you wish to follow the sign, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 216,
                content: "If you wish to go back to the fork and take the other street, turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 368
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 368,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images /shadow/title.jpg",
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
            "The axe bites deeply into your calf, making you cry out in pain and surprise. Lose 3 ENDURANCE points. However, before the guard can strike again, you lash out, sending the axe spinning from his hand. He howls, clutching broken fingers to his chest.<br>Gritting your teeth, you hobble away towards an open door. The air is alive with the sound of pounding feet, for the Grand Palace is now on full alert. Both the Drakkarim and the palace guard are bent on finding you; their lives will be forfeit if they fail.<br>Beyond the door, a bridge rises over an enclosed garden, joining the palace to a needle-like tower of white marble. At the entrance to the bridge, a narrow stair disappears into the garden below.",
        events: [
            {
                eventType: "CHANGE_ENDURANCE_EVENT",
                ranking: 1,
                amount: -35,
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 396,
                content: "If you wish cross the bridge and enter the tower, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 215,
                content:
                    "If you decide to descend the stair that leads to the garden below, turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 369
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 369,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images /shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Throne Chamber",
            regionType: "ROOM",
            description:
                "A large chamber within the Tomb of the Majhan. It is dimly lit and thick dust covers the marble floor. At the side of the chamber that is opposed to the large stone door there is a rough stone throne.",
            imageUrl: "images/shadow/regions/throne_chamber.png",
        },
        content:
            "The terrible pain causes spasms throughout every muscle of your body, making them twist and contort uncontrollably. You plead for the agony to cease. Lose 6 ENDURANCE points.",
        events: [
            {
                eventType: "CHANGE_ENDURANCE_EVENT",
                ranking: 1,
                amount: -6,
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 253,
                content: "If you are still alive after this psychic ordeal, turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 370
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 370,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images /shadow/title.jpg",
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
            "You sidestep to avoid its slashing beak but are caught by its talons and suffer a deep wound to your back. Lose 3 ENDURANCE points.<br>Itikar are wild and malicious creatures, and it can take many years for a rider to tame and train one. However, it is well worth the effort as, once trained, they become fiercely loyal to their master. The Itikar has sensed that you are a stranger and is ferociously attacking you with its long, curved beak and talons.<br>Fight the combat as usual, but double all ENDURANCE points lost by the bird. When its score falls to zero or below, you will have succeeded in subduing it enough to be able to climb into the saddle and take control. All ENDURANCE points that you lose are from ordinary wounds and must be deducted from your current ENDURANCE points total.",
        events: [
            {
                eventType: "CHANGE_ENDURANCE_EVENT",
                ranking: 1,
                amount: -3,
            },
            {
                eventType: "COMBAT",
                ranking: 2,
                creature: {
                    name: "Itikar",
                    combatSkill: 17,
                    endurance: 30,
                    imageUrl: "images/shadow/creatures/itikar.png",
                },
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 217,
                content:
                    "If you successfully reduce the Itikar’s ENDURANCE points to zero or below, turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 371
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 371,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images /shadow/title.jpg",
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
            "The axe howls through the dark; you sidestep, guided only by instinct, for you cannot see the lethal axe-blade, which hurtles towards you. Black steel bites into your side, the sudden pain making you gasp in shocked surprise. You clutch at your wounded ribs to feel warm blood oozing through your fingers. Lose 4 ENDURANCE points.<br>A deafening bang rings out and the Drakkar is flung backwards, his breastplate torn open by dwarf shot. He screams a long, agonizing death-cry as he disappears from sight, tumbling into the darkness, which surrounds the speeding skyship. From Barrakeesh, a roll of thunder rumbles across the dark plain, full of brooding menace, as if the city itself were cursing your escape.<br>Banedon appears at your side, his face lined with concern. As he offers a shaky hand to help you to your feet, you notice that the makeshift bandage which binds his wound is soaked with blood. He is weak and pale, and close to collapse.",
        events: [
            {
                eventType: "CHANGE_ENDURANCE_EVENT",
                ranking: 1,
                amount: -4,
            },
        ],
        outcomes: [
            {
                outcomeType: "ABILITY",
                targetNr: 377,
                content: "If you have the Kai Discipline of Healing, turn to",
                ability: {
                    abilityType: "HEALING",
                    description:
                        "This Discipline can be used to restore ENDURANCE points lost in combat. If you possess this skill you may restore 1 ENDURANCE point to your total for every numbered section of the book you pass through in which you are not involved in combat. (This is only to be used after your ENDURANCE has fallen below its original level.) Remember that your ENDURANCE cannot rise above its original level.",
                },
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 339,
                content: "If you do not possess this skill, turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 372
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 372,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images /shadow/title.jpg",
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
            "A crossbow bolt grazes your shoulder as you reach the walkway, making you dive for cover behind its low parapet wall. You lose 1 ENDURANCE point. Two more bolts ricochet from the stone lip barely inches from your head.<br>The stone door is shut, secured by an iron bolt on this side. To pull open the bolt, you will have to expose yourself to crossbow fire, for the bolt is clearly in view above the lip of the wall.<br>If you do not have the skill of Mind Over Matter, pick a number for the Random Number Table. If you have reached the Kai rank of Aspirant or higher, add 2 to the number you have picked.",
        outcomes: [
            {
                outcomeType: "RANDOM",
                targetNr: 366,
                content: "If your total is now is 0–3, turn to",
                intervall: {
                    min: 0,
                    max: 3,
                },
            },
            {
                outcomeType: "RANDOM",
                targetNr: 277,
                content: "If it is 4 or more, turn to",
                intervall: {
                    min: 4,
                    max: 10,
                },
            },
            {
                outcomeType: "ABILITY",
                targetNr: 269,
                content: "If you possess the Kai Discipline of Mind Over Matter, turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 373
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 373,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images /shadow/title.jpg",
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
            "‘That’s it!’ exclaims Banedon, stabbing his finger at a map of the Dry Main that covers his chart table. ‘One hundred and fifteen miles due west of Bir Rabalou; one hundred and fifteen miles due south of the oasis of Bal-loftan.’ He picks up a quill pen and marks the spot. ‘The Tomb of the Majhan.’<br>You study the map and ponder the miles of desolation separating you from your goal. Banedon notices your look of dismay and quickly tries to put your mind at ease.<br>‘Fear not, Lone Wolf—we’ll be there before the dawn.’<br>You smile at his confidence, but it is not the actual journey that worries you—your concern is what you may or may not find upon your arrival.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 320,
                content: "Turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 374
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 374,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images /shadow/title.jpg",
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
            "As you tumble earthwards, a blur of colour flashes before your eyes as the Kraan-riders, the skyship, and the distant horizon all melt into a kaleidoscope of shapes and images, which you fear will be the last things you will ever see.<br>You have prepared yourself for death and are calm and relaxed, when suddenly you feel your body entwined by a mass of sticky fibres. There is a terrific jolt, which leaves you breathless and stunned. The impossible is happening; you are no longer falling, but rising!<br>A net of clinging strands has caught you like a fly in a web. You rise up into the sky towards the flying ship as quickly as you fell. Three bearded dwarves clad in bright, padded battle-jerkins pull you aboard an outrigger that runs the length of the hull. However, there is no time to express your gratitude, for the small skyship is under attack from the Kraan-riders.<br>At the end of the outrigger, a dwarf is engaged in hand-to-hand combat with a snarling Drakkar. He is obviously losing. As you rush to his aid, another of the evil warriors lands in the centre of the craft, on top of the fortified platform.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 280,
                content: "If you wish to help the dwarf, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 361,
                content: "If you wish to leap from the outrigger onto the platform, turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 375
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 375,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images /shadow/title.jpg",
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
            "Beads of sweat break out on the faces of the guards as they frantically race to load their crossbows. Your bold move has unnerved them, and their fear makes them clumsy.<br>You reach the top of the steps and attack with the speed of a tiger, dashing the crossbow from a guard’s shaking hands with your first blow and splitting his jaw with the second. He screams and falls, toppling from the bridge to crash into the garden below. Meanwhile, the other guard has thrown away his crossbow and drawn a steel mace. He runs at you with hatred blazing in his dark eyes; you have just killed his brother and he is thirsty for revenge. Due to his frenzied state of mind, this guard is now immune to Mindblast.",
        events: [
            {
                eventType: "COMBAT",
                ranking: 1,
                creature: {
                    name: "Tower Guard",
                    combatSkill: 17,
                    endurance: 22,
                    imageUrl: "images/shadow/creatures/tower_guard.png",
                },
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 369,
                content: "If you win the combat, you enter the tower. Turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 376
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 376,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images /shadow/title.jpg",
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
            "Forty paces along the street is a barracks, a long whitewashed building with ugly square windows. A soldier sits dozing in the evening sun with his spear resting across his lap. Some children are tossing hollowed-out larnuma fruits at him, trying to catch them upon the tip of his spear. Opposite the barracks is a tavern with a line of saddled douggas tied to a rail near the main door. The braying of these sand-horses rivals the sound of revelry drifting from the tavern door.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 351,
                content: "If you wish to enter the tavern, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 202,
                content:
                    "If you wish to continue along the street towards the Dougga Market, turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 377
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 377,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images /shadow/title.jpg",
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
            "Clasping your hands around Banedon’s injured arm, you concentrate your Kai skill on healing the torn muscle and splintered bone. The warmth of your healing power numbs the pain and repairs the internal damage sufficiently to be able to remove the blood-soaked strips of cloth. The wound is still open, but you have saved the limb.<br>‘We’ll help him now, Lone Wolf,’ shouts a strange voice. You are surprised by this bold claim and turn around to discover who has made it.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 339,
                content: "Turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 378
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 378,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images /shadow/title.jpg",
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
            "Pressing yourself against the damp soil, you hold your breath and pray you will not be seen as the Vordak glides into view. Its bony arm is outstretched, and a skeletal finger sweeps the lush undergrowth on either side of the path. You sense the Vordak is using its Mindforce to try to locate your hiding place—as the finger points in your direction, a wave of pain washes over your body. You are near to crying out, when the pain ceases; you have not been detected. The finger sweeps away and the enemy continues its search along the path.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 228,
                content: "Turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 379
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 379,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images /shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Throne Chamber",
            regionType: "ROOM",
            description:
                "A large chamber within the Tomb of the Majhan. It is dimly lit and thick dust covers the marble floor. At the side of the chamber that is opposed to the large stone door there is a rough stone throne.",
            imageUrl: "images/shadow/regions/throne_chamber.png",
        },
        content:
            "The terrible pain racks your body, making your muscles twist and contort in spasms of pain. You scream for the agony to cease. Lose 6 ENDURANCE points.",
        events: [
            {
                eventType: "CHANGE_ENDURANCE_EVENT",
                ranking: 1,
                amount: -6,
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 223,
                content: "If you are still alive after the psychic ordeal, turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 380
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 380,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images /shadow/title.jpg",
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
            "Shortly after dawn the following day, you wake with a splitting headache. With bleary eyes you peer around you at the snoring dwarves who occupy the tiny bunks of the cramped cabin. The low hum of the ship only increases the pain that throbs like a demon inside your head, causing you to wince and grit your teeth at the slightest movement of your stiff and aching limbs. You lose 2 ENDURANCE points due to this monstrous hangover!<br>Painfully, you gather up your equipment and climb on deck to find everything in deep shadow, for the Skyrider is hovering beneath a massive outcrop of sandstone that juts from the side of a mountain. Banedon still stands at the helm, but he is no longer in a trance.<br>‘Kraan-riders,’ he says, pointing to a sun-bleached valley beyond the shadows. ‘They arrived with the dawn.’<br>You stare out across an alien landscape, a mountain valley filled with thousands of pillars formed from massive and precariously balanced boulders. The pillars reach so high into the sky that an avalanche looks inevitable. The Vassagonians call this place the Koos—‘the needles’. Perched upon two of these huge rocky columns are Kraan, their Drakkarim riders scouring the valley with telescopes. An hour passes before they take to the sky and disappear.<br>‘Trim the boom-sails, Bo’sun Nolrim,’ orders Banedon, his voice barely audible above the increasing hum of the Skyrider. ‘We’ve a fast run ahead.’",
        events: [
            {
                eventType: "CHANGE_ENDURANCE_EVENT",
                ranking: 1,
                amount: -2,
            },
        ],
        outcomes: [
            {
                outcomeType: "ITEM",
                targetNr: 229,
                content: "If you possess a Black Crystal Cube, turn to",
                item: {
                    code: "BLACK_CRYSTAL_CUBE",
                    name: "Black crystal cube",
                    description: "Black crystal cube",
                    imageUrl: "images/shadow/items/black_crystal_cube.png",
                },
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 247,
                content: "If you do not have this Special Item, turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 381
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 381,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images /shadow/title.jpg",
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
            "You run through the arch and straight into a black-robed palace guard. You bruise your ribs and the impact throws you off balance, but you manage to grab the wall to stop yourself from falling over. The guard lies sprawled upon the floor, but with incredible swiftness he draws a shining steel axe and lashes out at your legs.<br>Pick a number from the Random Number Table. If you have the Kai Discipline of Hunting, add 2 to the number you have picked.",
        outcomes: [
            {
                outcomeType: "RANDOM",
                targetNr: 368,
                content: "If your total is now 0–4, turn to",
                intervall: {
                    min: 0,
                    max: 4,
                },
            },
            {
                outcomeType: "RANDOM",
                targetNr: 252,
                content: "If it is 5–11, turn to",
                intervall: {
                    min: 5,
                    max: 10,
                },
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 382
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 382,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images /shadow/title.jpg",
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
            "Suddenly the Drakkar screams, his limbs outstretched, his gloved hands clawing the air. He is in the grip of some invisible power which is crushing him to death inside his armour.<br>You step back as the ghastly sound of cracking bones rises above the screech of the swooping Kraan-riders. The Drakkar crumples to the deck and topples over the edge of the platform.",
        outcomes: [
            {
                outcomeType: "ITEM",
                targetNr: 399,
                content: "If you have ever been given a Crystal Star Pendant, turn to",
                item: {
                    code: "CRYSTAL_STAR_PENDANT",
                    name: "Crystal star pendant",
                    description: "Crystal star pendant",
                    imageUrl: "images/shadow/items/crystal_star_pendant.png",
                },
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 294,
                content: "If you do not have this Special Item, turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 383
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 383,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images /shadow/title.jpg",
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
            "You trudge through the loose red sand, your faces covered to protect them from the dust and the blazing heat. The landscape is stark and desolate; all that seems to thrive here is the wire-hard grass that scratches your boots and leggings. You soon come across a dried river bed that leads to a cave in the orange sandstone hillside. A wooden plaque is nailed by the mouth of the cave, but you are unable to understand the strange words painted on its sun-blistered surface.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 235,
                content: "If you wish to investigate the cave, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 272,
                content: "If you wish to press on towards Ikaresh, turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 384
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 384,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images /shadow/title.jpg",
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
            "Unfortunately, you misjudged how hard you need to blow to make the dart reach its intended target. The sleep dart falls short, accidentally hitting a seagull that has alighted on the edge of the landing platform. The unfortunate bird takes a few shaky steps before keeling over onto its back, its splayed legs pointing stiffly at the sky.<br>The guard walks over to the bird and with the toe of his boot, casually flicks it over the edge of the platform. He watches as it spirals down towards the palace gardens far below, unaware that he has only just escaped a similar fate.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 282,
                content: "Turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 385
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 385,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images /shadow/title.jpg",
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
            "The searing flash of blue flame scorches your arm and face. You are thrown across the platform by the blast, and your body is peppered with shards of black crystal. Lose 12 ENDURANCE points.",
        events: [
            {
                eventType: "CHANGE_ENDURANCE_EVENT",
                ranking: 1,
                amount: -12,
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 316,
                content: "If you are still alive after this calamity, turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 386
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 386,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images /shadow/title.jpg",
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
            "A few paces beyond the marketplace, a small alley heads off to the left. At the end you see a house with a bright blue door.",
        outcomes: [
            {
                outcomeType: "ABILITY",
                targetNr: 292,
                content: "If you have the Kai Discipline of Tracking, turn to",
                ability: {
                    abilityType: "TRACKING",
                    description:
                        "This skill enables a Kai Lord to make the correct choice of a path in the wild, to discover the location of a person or object in a town or city and to read the secrets of footprints or tracks.",
                },
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 206,
                content: "If you wish to enter the alley and knock at the door, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 346,
                content: "If you wish to continue along the street, turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 387
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 387,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images /shadow/title.jpg",
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
            "Your heart sinks; there are no other stairs down from the platform—you are trapped. Before you can think of a plan, the Drakkarim burst from the arch and attack.<br>The only way you can evade combat is by leaping from the tower to the gardens below, a drop of over one hundred feet.",
        events: [
            {
                eventType: "COMBAT",
                ranking: 1,
                creature: {
                    name: "Drakkarim",
                    combatSkill: 17,
                    endurance: 35,
                    imageUrl: "images/shadow/creatures/drakkarim.png",
                },
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 205,
                content: "If you wish to jump, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 341,
                content: "If you win the combat, turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 388
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 388,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images /shadow/title.jpg",
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
            "You follow the avenue as it twists and turns through the Armourers’ Quarter of Ikaresh. A street vendor is selling a selection of swords and daggers that catch your eye; they are beautifully crafted, well-balanced and very sharp. A wooden sign displays his prices:<ul><li>Swords—5 Gold Crowns each</li><li>Daggers—3 Gold Crowns each</li><li>Broadswords—9 Gold Crowns each</li></ul>You may purchase any of the above weapons if you wish. Continuing along the avenue, you pass a meat market where carcasses of oxen are hung out in the open. You are not surprised to see the Ikareshi of this quarter walking about the streets with pieces of cotton stuffed into their nostrils (suspended by a thread around their necks), for the smell is dreadful.<br>Eventually you arrive at a fork, but there are no signs to indicate where the new streets lead.",
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
                eventType: "CHANGE_GOLD_AMOUNT_EVENT",
                ranking: 2,
                amount: 5,
            },
            {
                eventType: "ACQUIRE_ITEM_EVENT",
                ranking: 3,
                item: {
                    name: "Dagger",
                    itemType: "WEAPON",
                    description: "Dagger",
                    weight: "SMALL",
                    imageUrl: "images/shadow/items/dagger.png",
                },
            },
            {
                eventType: "CHANGE_GOLD_AMOUNT_EVENT",
                ranking: 4,
                amount: 3,
            },
            {
                eventType: "ACQUIRE_ITEM_EVENT",
                ranking: 5,
                item: {
                    name: "Broadsword",
                    itemType: "WEAPON",
                    description: "Broadsword",
                    weight: "HEAVY",
                    imageUrl: "images/shadow/items/broadsword.png",
                },
            },
            {
                eventType: "CHANGE_GOLD_AMOUNT_EVENT",
                ranking: 6,
                amount: 9,
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 216,
                content: "If you wish to take the left street, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 367,
                content: "If you wish to take the right street, turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 389
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 389,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images /shadow/title.jpg",
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
            "As you leap from the gangplank onto the landing platform, the sentry wheels round to confront you. He snatches up his spear in preparation for attack. He now stands between you and the Itikar’s pen; combat is unavoidable.",
        events: [
            {
                eventType: "COMBAT",
                ranking: 1,
                creature: {
                    name: "Sentry",
                    combatSkill: 15,
                    endurance: 23,
                    imageUrl: "images/shadow/creatures/sentry.png",
                },
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 207,
                content: "If you win the combat and wish to search the sentry’s body, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 224,
                content: "If you wish to ignore the body and hurry into the Itikar’s pen, turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 390
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 390,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images /shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Throne Chamber",
            regionType: "ROOM",
            description:
                "A large chamber within the Tomb of the Majhan. It is dimly lit and thick dust covers the marble floor. At the side of the chamber that is opposed to the large stone door there is a rough stone throne.",
            imageUrl: "images/shadow/regions/throne_chamber.png",
        },
        content:
            "You leap at the staggering form of Darklord Haakon, your weapon poised to strike a killing blow. However, as your arm sweeps down, a spiked fist lashes out; blood spurts from your wrist, your fingers go numb and your weapon falls from your hand. Haakon strikes again, catching you in the chest with a blow that pitches you backwards across the chamber.<br>You struggle to stand but the battle is over: Haakon has retrieved the glowing stone. The last thing you see before you are consumed by searing blue flame is the evil and triumphant grimace of the Darklord.<br>Your life and hopes of Sommerlund end here.",
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
         * --  Storysection 391
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 391,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images /shadow/title.jpg",
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
            "As you follow the track deeper into the arboretum, high-pitch shrieks echo above the ceiling of creepers and low branches. The air is humid as a jungle. You press on but the going is difficult; the soft, sticky, rotting humus clings to your boots like river clay.<br>A sudden movement on the path ahead makes you dive for cover; a handful of Drakkarim are coming this way, led by a figure dressed in red.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 242,
                content: "If you have reached the Kai rank of Warmarn or higher, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 222,
                content: "If you not yet reached this level of Kai training, turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 392
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 392,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images /shadow/title.jpg",
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
            "The ale is thick and creamy, with a taste like malted apples. You lower the half-empty tankard and wipe away the froth from your lips with your sleeve.<br>Pick a number from the Random Number Table. If your current ENDURANCE point total is less than 15, deduct 2 from this number. If your ENDURANCE point total is above 25, add 2 to this number. If you have reached the Kai rank of Savant, add 3 to this number.",
        outcomes: [
            {
                outcomeType: "RANDOM",
                targetNr: 364,
                content: "If your total score is now below 7, turn to",
                intervall: {
                    min: 0,
                    max: 6,
                },
            },
            {
                outcomeType: "RANDOM",
                targetNr: 218,
                content: "If your total score is now 7 or above, turn to",
                intervall: {
                    min: 7,
                    max: 10,
                },
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 393
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 393,
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
            "You run headlong through the foliage, the piercing scream of the Vordak tearing at your mind. Unless you possess the Kai Discipline of Mindshield, lose 2 ENDURANCE points. Suddenly, a Drakkar looms out of the trees ahead, his black broadsword held high above his masked face, ready to strike a deadly blow.<br>Deduct 2 from your COMBAT SKILL for the first round of combat due to the surprise of the Drakkar’s attack. You can evade combat after three rounds.",
        events: [
            {
                eventType: "CHANGE_ENDURANCE_EVENT",
                ranking: 1,
                amount: -2,
            },
            {
                eventType: "TEMPORARY_CHANGE_COMBAT_SKILL_EVENT",
                ranking: 2,
                amount: -2,
            },
            {
                eventType: "COMBAT",
                ranking: 3,
                creature: {
                    name: "Drakkar",
                    combatSkill: 16,
                    endurance: 25,
                    imageUrl: "images/shadow/creatures/drakkar.png",
                },
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 228,
                content: "If you wish to evade combat, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 255,
                content: "If you win the combat, turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 394
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 394,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images /shadow/title.jpg",
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
            "The Drakkar shrieks a cry of horror and lets the broadsword slip from his fingers. He claws at his death-mask, fumbling for the latch which opens the black steel visor. As it clicks open, a mass of writhing insects tumbles from the helmet. The Drakkar screams like a madman as the creatures slither and crawl around inside his armour, stinging and biting his skin. In his crazed panic, he topples over the parapet and falls to his doom thousands of feet below.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 306,
                content: "Turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 395
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 395,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images /shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Tomb of the Majhan",
            regionType: "EVIL_TEMPLE",
            description:
                'an old tomb where Darklord Haakon hopes to find the "Book of the Magnakai"',
            imageUrl: "images/shadow/regions/tomb_of_the_Majhan.png",
        },
        content:
            "As far as the eye can see, a long, straight, sandstone corridor slopes away into the distance. Torches crackle and sputter on the walls, illuminating the pictograms engraved in the yellow stone.<br>At regular intervals, rough-edged slabs protrude into the main corridor. You stop to take a close look at one of these slabs and the floor beneath it and come to a frightening conclusion. They are obviously traps, no doubt set off by the Giaks when they cleared this corridor of sand. Rather than instructing the Giaks to avoid them, the Darklords must have deliberately used their slaves to set them off. Once the traps had been sprung, the squashed bodies were cleared away and the slabs chiselled through to the next section. Pit traps in the floors seem to have been neutralized in the same way. Set off by luckless Giaks, they would have been filled in with the dead bodies and levelled off with sand. The thought of this heartless barbarity fills you with revulsion.<br>Just over a mile along the corridor, you eventually arrive at a large stone door. The stone surround bears evidence of chisel-work, but the door itself is rock solid.<br>You notice a faint beam of light descending from a hole in the ceiling. It creates a small circular pool of light, a little to one side of a similar hole in the floor. In the wall near to the door there is a triangular indentation, no larger than a Gold Crown.",
        outcomes: [
            {
                outcomeType: "ITEM",
                targetNr: 233,
                content: "If you possess a Prism, turn to",
                item: {
                    code: "PRISM",
                    name: "Prism",
                    description: "glass prism",
                    imageUrl: "images/shadow/items/prism.png",
                },
            },
            {
                outcomeType: "ITEM",
                targetNr: 245,
                content: "If you possess a Blue Stone Triangle, turn to",
                item: {
                    code: "BLUE_STONE_TRIANGLE",
                    name: "Blue Stone Triangle",
                    description: "a blue triangle made out of stone",
                    imageUrl: "images/shadow/items/blue_stone_triangle.png",
                },
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 298,
                content: "If you have neither of these items, turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 396
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 396,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images /shadow/title.jpg",
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
            "Inside the cool marble tower, two flights of spiral stairs meet at a landing. You detect the sound of distant running feet, gradually growing louder. It is coming from one of the spiral staircases, but which one? Suddenly, a band of Drakkarim warriors appear; they are crossing the bridge that leads to the tower. You must escape.",
        outcomes: [
            {
                outcomeType: "ABILITY",
                targetNr: 266,
                content: "If you have the Kai Discipline of Sixth Sense, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 322,
                content: "If you wish to ascend the spiral stairs, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 360,
                content: "If you wish to descend the spiral stairs, turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 397
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 397,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images /shadow/title.jpg",
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
            "Greedily, she snatches the coin from her begging bowl and tests it between her blackened teeth. Once satisfied the coin is real, she nods her head and waits for your questions.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 307,
                content:
                    "If you wish to ask her if she is Soushilla (only if you have heard that name before), turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 314,
                content:
                    "If you wish to ask her if she knows where Tipasa the Wanderer can be found, turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 398
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 398,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images /shadow/title.jpg",
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
            "The guard raises a hand to the back of his neck and removes the tiny dart, but before he realizes what has happened, he keels over unconscious, spread-eagled on the landing platform.<br>You can hear the clatter of running feet echoing across the palace roof: the Drakkarim have arrived. You must act quickly if you are to avoid them.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 207,
                content: "If you wish to search the body of the sleeping guard, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 224,
                content: "If you wish to ignore the guard and rush into the Itikar pen, turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 399
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 399,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images /shadow/title.jpg",
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
            "Banedon lowers his staff, the trace of a wry smile on his pain-racked face. ‘Alas, I was too slow to protect myself, Lone Wolf,’ he says, glancing at his arm. You kneel at his side and free the spear that pins him to the floor. The wound is serious; hastily you staunch the bleeding with strips of cloth torn from his dark blue robes. You recognize the robes, for they are the attire of a Journeymaster. It seems that young Banedon has achieved distinction among his brother magicians since last you met.<br>‘It appears that we are fated to meet in their company,’ he says, still watching the Kraan-riders anxiously. ‘Help me to my feet, we must escape before they drag us from the sky.’<br>You support the magician as he grasps the ship’s helm—a radiant crystal sphere with hundreds of glowing facets set on a slim silver rod. No sooner has his hand closed around the crystal than there is a tremendous explosion.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 323,
                content: "Turn to ",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 400
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 400,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images /shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "Koneshi Mountains",
            regionType: "MOUNTAIN",
            description:
                "The Koneshi Mountains stretch from the southeast to the middle of the Dry Main in Vassagonia. At the western end of this high mountains lies one of the six oasis.",
            imageUrl: "images/shadow/regions/koneshi_mountains.png",
        },
        content:
            "You examine the floor where Darklord Haakon fell, but there are no signs of his body. The atmosphere is strangely calm and peaceful, as if a great and evil shadow has been lifted. (If you lost the Sommerswerd in the confrontation with the Darklord, you may now retrieve it.)<br>You turn and walk to the throne where Haakon sat, waiting for you to appear. Beyond it lies a portal, an ancient inscription carved deep into the blood-red stone. Below the carving is set the impression of a human hand. Instinct and intuition guide your hand to the door; the carving fits around it like a glove.<br>Silently the portal slides back to reveal your destiny—the Book of the Magnakai. Set on a pedestal, the book lies open, its secrets revealed to your eyes alone. As you lift the sacred book, the very air throbs with the vibration of the force locked within its sun-gold cover. With a pounding heart you close the book and hurry from the chamber.<br>By the time you reach the foothills of the Koneshi, Banedon has successfully completed his mission; he and Tipasa are waiting for you. As they see you appear, clutching the Book of the Magnakai, they can barely contain their excitement.<br>‘This night of triumph,’ says Banedon, jubilantly, ‘will herald a new dawn of hope for Sommerlund. The Kai are reborn.’<br>The quest is now over. You have found the Book of the Magnakai and freed Magnamund from the shadow of Darklord Haakon. But for you, Kai Master Lone Wolf, the story has only just begun.<br>Your destiny lies along the path of the Grand Masters. To learn their secrets and attempt the first exciting quest of the Magnakai, begin your journey with Book 6 of the Lone Wolf series entitled: The Kingdoms of Terror",
        events: [
            {
                eventType: "MISSION_ACCOMPLISHED_EVENT",
                ranking: 1,
            },
        ],
    },
]);

db.lw5.find();
