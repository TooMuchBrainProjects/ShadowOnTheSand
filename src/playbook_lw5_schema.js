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
                code: "BLOWPIPE",
                name: "Blowpipe",
                itemType: "WEAPON",
                description: "A blowpipe for shooting darts at your target.",
                weight: "MEDIUM",
                imageUrl: "images/flight/items/blowpipe.png"
            },
            {
                code: "SLEEP_DART",
                name: "Sleep Dart",
                itemType: "WEAPON",
                description: "A dart to be shot with a blowpipe that lets your target fall asleep.",
                weight: "SMALL",
                imageUrl: "images/flight/items/sleep_dart.png"
            },
            {
                code: "PRISM",
                name: "Prism",
                itemType: "UTILITY",
                description: "glass prism",
                weight: "SMALL",
                imageUrl: "images/shadow/items/prism.png"
            },
            {
                code: "BLUE_STONE_TRIANGLE",
                name: "Blue Stone Triangle",
                itemType: "UTILITY",
                description: "a blue triangle made out of stone",
                weight: "SMALL",
                imageUrl: "images/shadow/items/blue_stone_triangle.png"
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
                                    description: "An excavation site in the Koneshi Mountains delving the Tomb of Majhan. Commanded by Darklord Haakon in order to find the \"Book of the Magnakai\"",
                                    imageUrl: "images/shadow/regions/excavation_site.png",
                                    regions: [
                                        {
                                            name: "Tomb of the Majhan",
                                            regionType: "EVIL_TEMPLE",
                                            description: "an old tomb where Darklord Haakon hopes to find the \"Book of the Magnakai\"",
                                            imageUrl: "images/shadow/regions/tomb_of_the_Majhan.png",
                                            regions: [
                                                {
                                                    name: "Throne Chamber",
                                                    regionType: "ROOM",
                                                    description: "A large chamber within the Tomb of the Majhan. It is dimly lit and thick dust covers the marble floor. At the side of the chamber that is opposed to the large stone door there is a rough stone throne.",
                                                    imageUrl: "images/shadow/regions/throne_chamber.png",
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
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
            name: "Riverbank",
            regionType: "RIVER_BANK",
            description:
                "Peering over the steep undercut of the riverbank, you can see a tanble of driftwood along the waters edge.",
            imageUrl: "images/shadow/regions/riverbank.png",
        },
        content:
            "Peering over the steep undercut of the river bank, you can see a tangle of driftwood along the water’s edge. A large tree trunk has grounded on the clay bank next to a small canoe.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 223,
                content: "If you wish to use the log to float down the river, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 4,
                content: "If you wish to use the canoe, turn to ",
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
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "The Giaks get nearer and then crouch down as if preparing themselves to pounce. You can see the sharp serrated points of their spears and hear their low guttural speech. The larger of the two creatures screams, ‘Orgadak taag! Nogjat aga ok!’ and attacks you. You must fight each of the Giaks in turn. Add 1 point to your COMBAT SKILL during this fight, as you have the advantage of the higher ground in your favour.",
        events: [
            {
                eventType: "COMBAT",
                ranking: 1,
                creature: {
                    name: "Giak",
                    combatSkill: 9,
                    endurance: 10,
                    imageUrl: "images/shadow/creatures/giak.png",
                },
            },
            {
                eventType: "COMBAT",
                ranking: 2,
                creature: {
                    name: "Giak",
                    combatSkill: 8,
                    endurance: 12,
                    imageUrl: "images/shadow/creatures/giak.png",
                },
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 313,
                content: "If you win, turn to ",
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
            name: "Graveyard of the Ancients",
            regionType: "GRAVEYARD",
            description:
                "The Graveyard of the Ancients is an ancient, mist-shrouded graveyard just North of Holmgard. This place is taboo because of the nameless horrors that inhabit it. No one knows who lies in eternal unrest here but the Evil that lives there is more ancient than the Darklords.",
            imageUrl: "images/shadow/regions/graveyardofancients.png",
        },
        content:
            "As the last of the foul creatures die, so the greenish light starts to fade. You notice that in each of the broken skulls lies a Gem. You take these 20 Tomb Guardian Gems before darkness engulfs the chamber. Remember to mark these on your Action Chart as a single Backpack Item. You quickly leave the dead Crypt spawn and press on.",
        events: [
            {
                eventType: "ACQUIRE_ITEM_EVENT",
                ranking: 1,
                item: {
                    name: "Guardian Gems",
                    itemType: "GEM",
                    description: "Guardian Gems from crypt ...",
                    weight: "SMALL",
                    imageUrl: "images/shadow/items/guardiangem.png",
                },
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 23,
                content: "Turn to",
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
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "You prepare your weapon and advance to meet the enemy. There are two Mountain Giaks and you must fight them one at a time.",
        events: [
            {
                eventType: "COMBAT",
                ranking: 1,
                creature: {
                    name: "Giak",
                    combatSkill: 9,
                    endurance: 10,
                    imageUrl: "images/shadow/creatures/giak.png",
                },
            },
            {
                eventType: "COMBAT",
                ranking: 2,
                creature: {
                    name: "Giak",
                    combatSkill: 8,
                    endurance: 12,
                    imageUrl: "images/shadow/creatures/giak.png",
                },
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 291,
                content: "If you win, turn to ",
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
        content:
            "The inner courtyard is a bustle of activity. Cavalry scouts are waiting beside their nervous horses for messages from their unit commanders inside the Great Hall. They take orders with great speed to the defenders of the outer fieldworks. No sooner do they gallop off, than other scouts return, many of them breathless and wounded. You have taken less than a dozen steps across the courtyard when you hear a deep voice boom out. ‘Stop that man!’",
        region: {
            name: "Inner Courtyard",
            regionType: "STONE_BUILDING",
            description:
                "The inner courtyard is a bustle of activity. Cavalry scouts are waiting beside their nervous horses for messages from their unit commanders inside the  Great Hall. They  take orders with great speed to the defenders of the outer fieldworks.",
            imageUrl: "images/shadow/regions/stonebuilding.png",
        },
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 66,
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
            name: "Old Watch Tower",
            regionType: "WOOD_BUILDING",
            description: "The old Watchtower is ...",
            imageUrl: "images/shadow/regions/ruinwatchtower.png",
        },
        content:
            "You are in a clearing where several trees have been cut down to make a rickety watchtower. Below the tower are three paths leading off in different directions.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 14,
                content: "If you take the south path, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 252,
                content: "If you take the east path, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 215,
                content: "If you take the southwest path, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 36,
                content: "If you decide to climb the watchtower, turn to ",
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
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "Your Sixth Sense has warned you that some of the creatures that attacked the monastery are searching the two paths for any survivors of their raid, but you can avoid both tracks by making your way through the undergrowth of the woods.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 56,
                content: "If you wish to head south, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 333,
                content:
                    "Or if you wish to cut through the heavier foliage towards the northeast, turn to ",
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
            name: "Boat Crossing",
            regionType: "CITY_OUTSKIRTS",
            description: "The outer fildworks of the city can now be seen.",
            imageUrl: "images/shadow/regions/holmguardoutskirts.png",
        },
        content:
            "You can see the tall grey-white walls and glimmering spires of Holmgard, its banners fluttering from the battlements in the fresh morning breeze. Stretching out towards the west, the River Eledil traces its course from the mountains of the Durncrag Range to the Holmgulf. But from below the mountain peaks you can see a vast black army marching relentlessly on towards the city. To your right you can see the highway heading off over the rolling plain towards Holmgard. At a run you could reach the outer fieldworks of the city defences in an hour, but you would be in the open for most of the time and vulnerable to attack by Kraan. However, ahead of you, a wide and muddy river drifts sluggishly towards the Eledil. You could use the cover of the river banks and swim towards the capital. Or towards your left lies the Graveyard of the Ancients. These tombs and crumbling monuments to a forgotten age would conceal your approach, but it is a forbidden area. Many are the unnamed horrors that lie there in restless sleep, waiting to consume the unwary trespasser.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 58,
                content: "If you will try your luck by the highway, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 135,
                content:
                    "If you feel that you stand a better chance of reaching the capital via the river, then turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 102,
                content:
                    "Or if you are brave enough to risk the unknown perils of the Graveyard of the Ancients, turn to",
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
            name: "Main Road",
            regionType: "ROAD",
            description:
                "The Main Road is the main passage between the port of Toran in the north and the capital in the south.",
            imageUrl: "images/shadow/regions/sommerlundmainroad.png",
        },
        content:
            "You soon emerge from the woods onto a main highway. You recognize it as being the main road between the port of Toran in the north and the capital in the south. Spurring your horse on, you estimate you will reach the capital by morning.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 149,
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
            name: "Kings Citadel",
            regionType: "CITADEL",
            description:
                "The Kings Citadel is the highest law enforcement and paramilitary organization in Holmgard.",
            imageUrl: "images/shadow/regions/holmguardcitadel.png",
        },
        content:
            "You fight your way through the press of bodies along the main street towards the citadel in the distance. City folk are rushing to and fro in the grip of panic, as the cries of Kraan are heard circling high above. In the crush, one item is stolen from your Backpack. If you no longer have a Backpack or if you have no Backpack Items, you lose a Weapon. Remember to take this off your Action Chart. A runaway horse and cart career past and knock you into a doorway. You are stunned and you lose 2 ENDURANCE points. As you stagger to your feet, the door bursts open and a decrepit old man attacks you with a meat cleaver. He is quite insane and you must fight him or take evasive action.",
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
                targetNr: 63,
                content: "If you choose to fight, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 217,
                content: "If you wish to evade a fight, turn to ",
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
            name: "Holmgard",
            regionType: "CITY",
            description:
                "Holmgard is the capital of Sommerlund and is a seaport on the Holmgulf. It is located near the Graveyard of the Ancients. The city is enclosed by grey-white walls two hundred feet in height whose gatehouses are 100 yards long. At the center of the city is the Citadel of the King.",
            imageUrl: "images/shadow/regions/holmguard.png",
        },
        content:
            "You feel as if you have been run down by a cart or wagon. As you fall forward the last thing that you remember before the darkness overcomes you, is the taste of the sandy road and the terrible pain in your back.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 165,
                content: "Turn to ",
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
            name: "Main Road",
            regionType: "ROAD",
            description:
                "The Main Road is the main passage between the port of Toran in the north and the capital in the south.",
            imageUrl: "images/shadow/regions/sommerlundmainroad.png",
        },
        content:
            "You have ridden about a mile when you are knocked from your horse by an arrow grazing your forehead. You lose 3 ENDURANCE points. As you pull yourself to your feet, you see a patrol of Drakkarim emerge from the woods on either side of the road. You have been ambushed and must evade them as quickly as possible by going into the forest.",
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
                targetNr: 154,
                content: "Turn to ",
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
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "After a few minutes walking, you find a mossy hut set back from the path. You are hungry and must eat a Meal here or lose 3 ENDURANCE points. As you eat you notice that the path starts to curve towards the east.",
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
                targetNr: 42,
                content: "If you wish to follow it, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 28,
                content: "If you wish to return the way you have come, turn to ",
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
            name: "Main Road",
            regionType: "ROAD",
            description:
                "The Main Road is the main passage between the port of Toran in the north and the capital in the south.",
            imageUrl: "images/shadow/regions/sommerlundmainroad.png",
        },
        content:
            "Kicking open the door, you dive into the farmhouse. A Kraan soars overhead, letting out a shriek of victory, a victim hanging in its claws. Getting to your feet, you find yourself alone. But propped against the fireplace is a Warhammer. You may take this Weapon if you wish.",
        events: [
            {
                eventType: "ACQUIRE_ITEM_EVENT",
                ranking: 1,
                item: {
                    name: "Warhammer",
                    itemType: "WEAPON",
                    description: "warhammer",
                    weight: "HEAVY",
                    imageUrl: "images/shadow/items/warhammer.png",
                },
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 81,
                content: "If you want to stay in the farmhouse, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 320,
                content:
                    "If you would feel safer in the forest, you can make a dash by turning to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 199,
                content: "If you wish to search the room further, turn to ",
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
            name: "Main Road",
            regionType: "ROAD",
            description:
                "The Main Road is the main passage between the port of Toran in the north and the capital in the south.",
            imageUrl: "images/shadow/regions/sommerlundmainroad.png",
        },
        content:
            "As you ride along the highway, you notice that light is getting worse. It will soon be completely dark—and impossible to see any dangers that may lurk ahead. You decide to hide and rest at the wood’s edge until morning. When you are satisfied that no one can see you, you pull your warm green cloak about you and drift off into an uneasy sleep.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 256,
                content: "Turn to ",
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
            name: "Boat Crossing",
            regionType: "CITY_OUTSKIRTS",
            description: "The outer fildworks of the city can now be seen.",
            imageUrl: "images/shadow/regions/holmguardoutskirts.png",
        },
        content:
            "Although a little overcooked, the food tastes fine (although it is not enough for a whole Meal) and the clear water slakes your thirst. You have spent nearly half an hour resting in this house when you suddenly realize the delay.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 83,
                content: "Prepare your equipment and leave. Turn to ",
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
            name: "Graveyard of the Ancients",
            regionType: "GRAVEYARD",
            description:
                "The Graveyard of the Ancients is an ancient, mist-shrouded graveyard just North of Holmgard. This place is taboo because of the nameless horrors that inhabit it. No one knows who lies in eternal unrest here but the Evil that lives there is more ancient than the Darklords.",
            imageUrl: "images/shadow/regions/graveyardofancients.png",
        },
        content:
            "If you concentrate on the keyhole, you could move the mechanism of the lock and open it. You can then make the pin levitate and free it from the lockplate, avoiding falling prey to any traps that may be set off as the door unlocks.",
        outcomes: [
            {
                outcomeType: "ABILITY",
                targetNr: 87,
                ability: {
                    abilityType: "MIND_OVER_MATTER",
                    description:
                        "Mastery of this Discipline enables a Kai Lord to move small objects with his powers of concentration.",
                },
                content:
                    "If you wish to use your Kai Discipline of Mind Over Matter to open this lock and levitate the pin, turn to ",
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
            name: "Holmgard",
            regionType: "CITY",
            description:
                "Holmgard is the capital of Sommerlund and is a seaport on the Holmgulf. It is located near the Graveyard of the Ancients. The city is enclosed by grey-white walls two hundred feet in height whose gatehouses are 100 yards long. At the center of the city is the Citadel of the King.",
            imageUrl: "images/shadow/regions/holmguard.png",
        },
        content:
            "The herbalist offers you a selection of special potions. Some increase your strength; some induce invisibility; some give you great powers of stealth; and others give you the power of turning yourself into a gaseous form. The man pulls open the bottom drawer of the counter to reveal a magnificent wand. He says that it is a powerful weapon against all evil creatures, and that it will make you invulnerable in battle. He points to the mystical inscriptions which cover the black staff.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 49,
                content:
                    "If you wish to lean over the counter and read the strange inscriptions, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 231,
                content: "If you are more interested in the potions, turn to ",
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
            name: "Boat Crossing",
            regionType: "CITY_OUTSKIRTS",
            description: "The outer fildworks of the city can now be seen.",
            imageUrl: "images/shadow/regions/holmguardoutskirts.png",
        },
        content:
            "Before you are the tall grey-white walls and glimmering spires of Holmgard, the city’s banners fluttering from the battlements in the fresh morning breeze. Stretching out towards the west, the River Eledil traces its course from the mountains of the Durncrag Range to the Holmgulf. But below the mountain peaks you can see a vast black army marching relentlessly on towards the capital.To your right you can see the highway heading off over the rolling plain towards Holmgard. At a gallop you could make the outer fieldworks of the city’s defences in less than an hour, but you would be in the open for most of the time and vulnerable to attack by Kraan. Directly ahead of you, a wide river drifts sluggishly towards the Eledil. If you abandoned your horse, you could swim towards the outer defences under cover of the river banks. Or there is a final alternative. To your left lies the Graveyard of the Ancients. These tombs and crumbling monuments to a forgotten age would conceal your approach but it is a forbidden area. Many are the unnamed horrors that lie there in restless sleep, waiting to consume the unwary trespasser.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 202,
                content: "If you will try your luck by the highway, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 135,
                content:
                    "If you feel that you stand a better chance of reaching the capital via the river then turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 329,
                content:
                    "Or if you are brave enough to risk the unknown perils of the Graveyard of the Ancients, turn to",
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
            name: "Main Road",
            regionType: "ROAD",
            description:
                "The Main Road is the main passage between the port of Toran in the north and the capital in the south.",
            imageUrl: "images/shadow/regions/sommerlundmainroad.png",
        },
        content:
            "You are dizzy from your wound and you stumble through the trees like a blind man. Suddenly you fall forward as if the ground has been snatched from beneath your feet. You have fallen head-first into a hunting pit. As you look up, you can see four Drakkarim levelling their bows at you, evil sneers spreading simultaneously across their ugly faces. As the world darkens, the last thing you feel is the black shafts of their arrows deep in your chest. You have failed in your mission.",
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
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "As you approach, the group of people stop talking. You can see by their expressions that they recognize your green Kai cloak. Slowly, one of the men extends his hand in friendship and says, ‘My Lord, we had heard a rumour that the Kai were destroyed. Heaven be praised that it is not so. We feared all was lost.’You do not tell them of the destruction of the monastery,  for they are refugees from Toran and have lost everything they owned. Their only hope now is that the Kai Lords will lead an army to victory. You learn that the northern port was attacked from both air and sea, and that the forces of the Darklords far outnumbered the King’s brave garrison. You reassure them that Sommerlund will not fall and wish them luck on their journey ahead.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 70,
                content: "turn to",
            },
        ],
    },
    {
        /*
         * -- --------------------------------------------------------
         * --  Storysection 156
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 156,
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
            "Black arrows embed themselves in the mud all around you. More Giaks have appeared on the steep slope of the river bank and are firing at you. There is no cover on this side of the river.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 294,
                content: "If you wish to dive into the water and swim with the current, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 245,
                content:
                    "If you wish to swim across to the cover of the trees on the other bank, turn to ",
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
            name: "Main Road",
            regionType: "ROAD",
            description:
                "The Main Road is the main passage between the port of Toran in the north and the capital in the south.",
            imageUrl: "images/shadow/regions/sommerlundmainroad.png",
        },
        content:
            "The forest begins to thin out until finally you can make out a road through the trees ahead. The highway is full of people heading south. Many are wheeling their possessions along on handcarts.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 30,
                content:
                    "If you wish to join the refugees and perhaps learn more of what has happened in the north, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 167,
                content:
                    "If you would prefer to continue to move south but under cover of the trees, turn to",
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
            name: "Darkstone Temple",
            regionType: "EVIL_TEMPLE",
            description:
                "It was only by an unlucky chance you discovered teh secret temple of a sect of evil druids",
            imageUrl: "images/shadow/regions/darkstonetemple.png",
        },
        content:
            "The Key fits and the lock opens. You pull back the door to find yourself face to face with a strange old man. In his right hand is a staff. Suddenly a bolt of lightning shoots from the staff and hits you square in the chest. You lose 6 ENDURANCE points. Gasping with pain, you knock the old man aside and run up the steep staircase towards daylight. You are halfway up the stairs when he fires another bolt at you. If you survive, you stagger out into the daylight and curse your bad luck. It was only by an unlucky chance you discovered the secret temple of a sect of evil druids. You are very lucky to have escaped with your life. You quickly rejoin the path which now disappears over the hill.",
        events: [
            {
                eventType: "CHANGE_ENDURANCE_EVENT",
                ranking: 1,
                amount: -7,
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 106,
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
            name: "Main Road",
            regionType: "ROAD",
            description:
                "The Main Road is the main passage between the port of Toran in the north and the capital in the south.",
            imageUrl: "images/shadow/regions/sommerlundmainroad.png",
        },
        content:
            "Your ploy does not work, for the merchant will not allow you to enter his caravan. Suddenly he clicks his fingers and the bodyguard grasps the hilt of his scimitar.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 191,
                content: "You must fight him by turning to ",
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
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content: "Pick a number from the Random Number Table.",
        outcomes: [
            {
                outcomeType: "RANDOM",
                targetNr: 286,
                intervall: {
                    min: 0,
                    max: 4,
                },
                content: "If it is 0–4, you have been seen. Turn to ",
            },
            {
                outcomeType: "RANDOM",
                targetNr: 10,
                intervall: {
                    min: 5,
                    max: 9,
                },
                content:
                    "If it is 5–9, they do not spot you and they slowly file away along the far side of the ridge. Turn to ",
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
            name: "Graveyard of the Ancients",
            regionType: "GRAVEYARD",
            description:
                "The Graveyard of the Ancients is an ancient, mist-shrouded graveyard just North of Holmgard. This place is taboo because of the nameless horrors that inhabit it. No one knows who lies in eternal unrest here but the Evil that lives there is more ancient than the Darklords.",
            imageUrl: "images/shadow/regions/graveyardofancients.png",
        },
        content:
            "As you sit down, the stone serpent slowly moves forward on its plinth. You suddenly break out in a cold sweat and grasp your weapon with trembling fingers in case it should attack. A red forked tongue appears from the head of this strange statue and dips into the bowl of green light above your head. Slowly the tongue re-emerges holding a Golden Key which, to your surprise, it drops into your lap. A panel in the east wall clicks open to reveal an exit. You take the Key and leave as quickly as possible.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 209,
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
            name: "Silvermoon Lake",
            regionType: "LAKE",
            description: "The Silvermoon Lake is a ...",
            imageUrl: "images/shadow/regions/silvermoonlake.png",
        },
        content:
            "As you get nearer to the men, you call to them. As they turn to face you, your skin turns cold and your heart pounds, for they are Drakkarim in disguise. Suddenly they charge at you. Forced to the ground, you are tied up with ropes and dragged behind them along a track. They take your Backpack and Weapons, but do not search your cloak or find your Gold Crowns. They cackle menacingly to themselves, and talk at great length of the tortures that await you at their camp.",
        outcomes: [
            {
                outcomeType: "ABILITY",
                targetNr: 258,
                ability: {
                    abilityType: "MIND_OVER_MATTER",
                    description:
                        "Mastery of this Discipline enables a Kai Lord to move small objects with his powers of concentration.",
                },
                content: "If you have the Kai Discipline of Mind Over Matter, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 127,
                content: "If you do not have this skill, turn to ",
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
            name: "Silvermoon Lake",
            regionType: "LAKE",
            description: "The Silvermoon Lake is a ...",
            imageUrl: "images/shadow/regions/silvermoonlake.png",
        },
        content:
            "After nearly half an hour you feel the current getting stronger. Looking out across the surface you can see that you are approaching a whirlpool in the middle of a large river bend. You will surely drown if caught in its current, so you quickly swim towards the right hand river bank and continue your mission on foot, carrying all your equipment.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 321,
                content: "Turn to ",
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
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "Carefully opening the seals on each of the bottles, you sniff at the contents. They all seem to be different types of wine. Suddenly a smaller bottle tucked behind the others catches your eye. Pulling out the glass stopper, you recognize the smell to be that of Alether, a Potion of Strength, which is orange in colour. You may keep this Potion and swallow it before you fight. It will increase your COMBAT SKILL by 2 points for the duration of your fight. Be sure to mark it down on your Action Chart and to strike it off once you have used it.",
        events: [
            {
                eventType: "ACQUIRE_ITEM_EVENT",
                ranking: 1,
                item: {
                    name: "Potion of Alether",
                    itemType: "POTION",
                    description: "Potion of Alether",
                    weight: "SMALL",
                    imageUrl: "images/shadow/items/alether.png",
                },
            },
            {
                eventType: "ACQUIRE_ITEM_EVENT",
                ranking: 2,
                item: {
                    name: "Potion of Alether",
                    itemType: "POTION",
                    description: "Potion of Alether",
                    weight: "SMALL",
                    imageUrl: "images/shadow/items/alether.png",
                },
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 308,
                content: "You now decide to investigate the stable by turning to ",
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
            name: "Kings Citadel",
            regionType: "CITADEL",
            description:
                "The Kings Citadel is the highest law enforcement and paramilitary organization in Holmgard.",
            imageUrl: "images/shadow/regions/holmguardcitadel.png",
        },
        content:
            "You awake in a fever. Images swim before your eyes and then fade completely. The pain in your back is intense and you cry out for relief. You feel a cool, damp cloth placed on your forehead and glimpse the worried face of a young woman. An old man whispers in her ear and then he disappears from view. The girl kneels at your side and comforts you with words of kindness and reassurance, but the light quickly fades and darkness engulfs you once more.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 212,
                content: "Turn to",
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
            name: "Graveyard of the Ancients",
            regionType: "GRAVEYARD",
            description:
                "The Graveyard of the Ancients is an ancient, mist-shrouded graveyard just North of Holmgard. This place is taboo because of the nameless horrors that inhabit it. No one knows who lies in eternal unrest here but the Evil that lives there is more ancient than the Darklords.",
            imageUrl: "images/shadow/regions/graveyardofancients.png",
        },
        content:
            "You are in the presence of a great evil. Your mind is being probed by a powerful and timeless being and you must shield yourself. The struggle has begun and your sanity is at stake. It is a long and torturous ordeal, during which you experience many fantastic and terrible apparitions that tempt and appal you. After this you must lose 4 ENDURANCE points and stagger towards the tunnel.",
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
                targetNr: 104,
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
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "You have been travelling for about a mile when you notice two legs sticking out from behind a large boulder.",
        outcomes: [
            {
                outcomeType: "ABILITY",
                targetNr: 178,
                ability: {
                    abilityType: "SIXTH_SENSE",
                    description:
                        "This skill may warn a Kai Lord of imminent danger. It may also reveal the true purpose of a stranger or strange object encountered in your adventure.",
                },
                content:
                    "If you possess and wish to use the Kai Discipline of Sixth Sense, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 88,
                content: "If you wish to take a closer look, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 264,
                content:
                    "If you would rather avoid meeting their owner and press on into the forest, turn to ",
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
            name: "Main Road",
            regionType: "ROAD",
            description:
                "The Main Road is the main passage between the port of Toran in the north and the capital in the south.",
            imageUrl: "images/shadow/regions/sommerlundmainroad.png",
        },
        content:
            "You pull yourself to the top of the opulent caravan and nestle among the travelling cases and bags. Night will soon engulf the highway. A chill wind blows from the west and you pull your cloak around yourself to keep warm. You listen to the voices below and you can smell the mouthwatering aroma of spiced meat. It reminds you that you are very hungry and must now take a Meal. The fatigue of your ordeal finally catches up with you and you drift off into a restless sleep.",
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
                targetNr: 64,
                content: "Turn to ",
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
            name: "Graveyard of the Ancients",
            regionType: "GRAVEYARD",
            description:
                "The Graveyard of the Ancients is an ancient, mist-shrouded graveyard just North of Holmgard. This place is taboo because of the nameless horrors that inhabit it. No one knows who lies in eternal unrest here but the Evil that lives there is more ancient than the Darklords.",
            imageUrl: "images/shadow/regions/graveyardofancients.png",
        },
        content:
            "As you pass each skull, it slowly turns, as if watching your every move. You are halfway across the room when you hear the sharp crack of bone splitting. Suddenly you see hideous shapes hatching inside the skulls, and stretching their wings. Ten slimy winged creatures attack you, and you must fight them as one enemy.",
        events: [
            {
                eventType: "COMBAT",
                ranking: 1,
                creature: {
                    name: "Crypt Spawn",
                    combatSkill: 16,
                    endurance: 16,
                    imageUrl: "images/shadow/creatures/cryptspawn.png",
                },
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 137,
                content: "If you win the combat, turn to ",
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
            name: "Clearing",
            regionType: "CLEARING",
            description:
                "You pass through a long, dark tunnel of voerhanging branches that eventually opens out into a large clearing.",
            imageUrl: "images/shadow/regions/clearing.png",
        },
        content:
            "The tunnel is dark and the air is much cooler than outside. You carefully advance with one hand on the tunnel wall to aid your sense of direction. You have been in total darkness for three minutes when you detect the foul smell of decay ahead, similar to rotting meat. If you have a Torch and Tinderbox in your Pack, you may light the Torch to see your way ahead. Suddenly, something heavy drops from the tunnel ceiling onto your back and you fall to your knees.  It is a Burrowcrawler and you must fight it, for it is trying to strangle you with its long slimy tentacles.",
        events: [
            {
                eventType: "COMBAT",
                ranking: 1,
                creature: {
                    name: "Burrowcrawler",
                    combatSkill: 17,
                    endurance: 7,
                    imageUrl: "images/shadow/creatures/burrowcrawler.png",
                },
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 319,
                content: "If you win, turn to ",
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
            name: "Main Road",
            regionType: "ROAD",
            description:
                "The Main Road is the main passage between the port of Toran in the north and the capital in the south.",
            imageUrl: "images/shadow/regions/sommerlundmainroad.png",
        },
        content:
            "You are at the very edge of the wood when your horse rears up in agony. The Kraan has sunk its claws deep into the horse’s hind legs and is trying to knock you to the ground with its wings. The ghoulish Giak rider squeals with delight as he stabs at you with his spear. You jump to the ground and dash for the trees, leaving the poor dying horse in the clutches of the Kraan.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 303,
                content: "Turn to ",
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
            name: "Silvermoon Lake",
            regionType: "LAKE",
            description: "The Silvermoon Lake is a ...",
            imageUrl: "images/shadow/regions/silvermoonlake.png",
        },
        content:
            "Night falls and you are soon engulfed in darkness. To press on any further would be futile, for you would be sure to lose your way. Tethering your horse to a tree, you pull your green Kai cloak about you and fall into a restless sleep. You are awoken by the sound of troops in the distance. Across the lake you see the black shapes of Drakkarim and a pack of Doomwolves. A Kraan appears from above the trees and lands on the roof of the small wooden shack. It is being ridden by a creature dressed in red robes. The Kraan takes off and begins to fly across the lake to where you are hidden.",
        outcomes: [
            {
                outcomeType: "ABILITY",
                targetNr: 114,
                ability: {
                    abilityType: "CAMOUFLAGE",
                    description:
                        "This Discipline enables a Kai Lord to blend in with his surroundings. In the countryside, he can hide undetected among trees and rocks and pass close to an enemy without being seen. In a town or city, it enables him to look and sound like a native of that area, and can help him to find shelter or a safe hiding place.",
                },
                content:
                    "If you wish to use the Kai Discipline of Camouflage to hide yourself and your horse, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 239,
                content: "If you wish to ride deeper into the forest to escape the Kraan, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 29,
                content: "If you wish to prepare to fight the creature, turn to ",
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
            name: "Darkstone Temple",
            regionType: "EVIL_TEMPLE",
            description:
                "It was only by an unlucky chance you discovered teh secret temple of a sect of evil druids",
            imageUrl: "images/shadow/regions/darkstonetemple.png",
        },
        content:
            "As you reach the door you hear the crash of a giant stone slab as it falls from the ceiling. Turning around, you see that your exit is now blocked.",
        outcomes: [
            {
                outcomeType: "ITEM",
                targetNr: 158,
                item: {
                    code: "SILVER_KEY",
                    name: "Silver Key",
                    description: "Silver Key",
                    imageUrl: "images/shadow/items/.png",
                },
                content: "If you have a Silver Key, you may try to open the door by turning to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 259,
                content: "If you do not possess a Silver Key, turn to ",
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
            name: "Silvermoon Lake",
            regionType: "LAKE",
            description: "The Silvermoon Lake is a ...",
            imageUrl: "images/shadow/regions/silvermoonlake.png",
        },
        content:
            "After nearly an hour of drifting downstream, the water current becomes quite strong and you can see that you are being drawn towards a whirlpool near the centre as the river curves round. You know that if you are caught in the swirling water, you stand very little chance of escaping a watery death. You dive into the muddy river and as you begin to swim towards the shore.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 190,
                content: "Turn to",
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
            name: "Silvermoon Lake",
            regionType: "LAKE",
            description: "The Silvermoon Lake is a ...",
            imageUrl: "images/shadow/regions/silvermoonlake.png",
        },
        content:
            "Waving your arms at the approaching cavalry, you recognize them to be Border Rangers of the King’s army, tough woodsmen who police the troubled western frontier of the kingdom. Your relief at seeing them soon fades when you realize that they are fleeing from a pack of Doomwolves with snarling Giak riders. Black arrows are dropping all around the rangers, as the vicious Doomwolves get nearer and nearer.",
        outcomes: [
            {
                outcomeType: "ABILITY",
                targetNr: 182,
                ability: {
                    abilityType: "CAMOUFLAGE",
                    description:
                        "This Discipline enables a Kai Lord to blend in with his surroundings. In the countryside, he can hide undetected among trees and rocks and pass close to an enemy without being seen. In a town or city, it enables him to look and sound like a native of that area, and can help him to find shelter or a safe hiding place.",
                },
                content: "If you possess the Kai Discipline of Camouflage, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 41,
                content: "If you wish to take cover and hide, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 116,
                content: "If you wish to make for the other bank, turn to ",
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
            name: "Silvermoon Lake",
            regionType: "LAKE",
            description: "The Silvermoon Lake is a ...",
            imageUrl: "images/shadow/regions/silvermoonlake.png",
        },
        content:
            "You hide behind some thick bushes so that the Doomwolf and its rider will not see your white horse. Luckily it works—the beast lopes past and vanishes down the track that you have just come along.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 253,
                content:
                    "If you wish to attack the remaining Doomwolves and their riders, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 126,
                content: "If you wish to press on deeper into the forest, turn to ",
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
            name: "Boat Crossing",
            regionType: "CITY_OUTSKIRTS",
            description: "The outer fildworks of the city can now be seen.",
            imageUrl: "images/shadow/regions/holmguardoutskirts.png",
        },
        content:
            "You search all of the cupboards in the small cottage but do not find anything of use or value. You decide that you have wasted enough time here and must press on without further delay.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 83,
                content: "Turn to ",
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
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "Your skill enables you to recognize the boots and leggings of a King’s soldier. You can sense that the man is wounded and in need of help.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 88,
                content: "If you wish to aid him, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 264,
                content: "If you would rather leave him here, turn to ",
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
            name: "Boat Crossing",
            regionType: "CITY_OUTSKIRTS",
            description: "The outer fildworks of the city can now be seen.",
            imageUrl: "images/shadow/regions/holmguardoutskirts.png",
        },
        content: "You have been spotted by the guards who level their crossbows at you.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 318,
                content:
                    "If you wish to raise your hands above your head and walk slowly towards them, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 51,
                content: "If you wish to run for cover in the trees, turn to ",
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
            name: "Boat Crossing",
            regionType: "CITY_OUTSKIRTS",
            description: "The outer fildworks of the city can now be seen.",
            imageUrl: "images/shadow/regions/holmguardoutskirts.png",
        },
        content: "They see you raise your weapon, and they instantly attack you.",
        events: [
            {
                eventType: "COMBAT",
                ranking: 1,
                creature: {
                    name: "Sergant",
                    combatSkill: 15,
                    endurance: 22,
                    imageUrl: "images/shadow/creatures/sergant.png",
                },
            },
            {
                eventType: "COMBAT",
                ranking: 2,
                creature: {
                    name: "Soldier",
                    combatSkill: 13,
                    endurance: 20,
                    imageUrl: "images/shadow/creatures/soldier.png",
                },
            },
            {
                eventType: "COMBAT",
                ranking: 3,
                creature: {
                    name: "Soldier",
                    combatSkill: 12,
                    endurance: 20,
                    imageUrl: "images/shadow/creatures/soldier.png",
                },
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 62,
                content: "If you kill all three of them, turn to",
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
            name: "Main Road",
            regionType: "ROAD",
            description:
                "The Main Road is the main passage between the port of Toran in the north and the capital in the south.",
            imageUrl: "images/shadow/regions/sommerlundmainroad.png",
        },
        content:
            "Instinctively you duck, and dive to avoid the crossbow bolt. The bandit fires and you feel the sleeve of your jacket tear as the missile grazes past your left arm. You thank the gods for your good fortune and sprint on. None of the other bandits have bows and they soon give up the chase. As you sprint off into the distance, you leave them all far behind. You stop just long enough to strap up your wounded arm and then continue along the road towards the outer defences of the capital.",
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
            name: "Silvermoon Lake",
            regionType: "LAKE",
            description: "The Silvermoon Lake is a ...",
            imageUrl: "images/shadow/regions/silvermoonlake.png",
        },
        content:
            "Three rangers gallop past the river bank, closely followed by the Giaks on their snarling mounts—the Doomwolves. But your Camouflage skill has saved you from being spotted. The pack of evil Giaks continue on their chase without even glancing at the river.",
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
            name: "Main Road",
            regionType: "ROAD",
            description:
                "The Main Road is the main passage between the port of Toran in the north and the capital in the south.",
            imageUrl: "images/shadow/regions/sommerlundmainroad.png",
        },
        content:
            "The officer orders his men to halt and asks you your business. You tell him who you are, and how the monastery has been destroyed. He is deeply saddened to hear your news. He offers you a horse and asks you to accompany him to Prince Pelathar, the King’s son.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 97,
                content: "If you accept, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 200,
                content: "If you decide to decline his offer, turn to ",
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
            name: "Main Road",
            regionType: "ROAD",
            description:
                "The Main Road is the main passage between the port of Toran in the north and the capital in the south.",
            imageUrl: "images/shadow/regions/sommerlundmainroad.png",
        },
        content:
            "The caravan is out of control and is bumping wildly through the rough ground that borders the highway. With difficulty you eventually steer the frightened horses back onto the road and halt the caravan. A quick search of the interior reveals 40 Gold Crowns, a Sword, and enough Food for 3 Meals. If you wish to keep any of these items, mark them on your Action Chart.",
        events: [
            {
                eventType: "CHANGE_GOLD_AMOUNT_EVENT",
                ranking: 1,
                amount: 40,
            },
            {
                eventType: "CHANGE_RATION_AMOUNT_EVENT",
                ranking: 2,
                amount: 3,
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
                targetNr: 64,
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
            name: "Main Road",
            regionType: "ROAD",
            description:
                "The Main Road is the main passage between the port of Toran in the north and the capital in the south.",
            imageUrl: "images/shadow/regions/sommerlundmainroad.png",
        },
        content:
            "You narrow your eyes and scan the trees for some sign of the hidden archer. Your wait is not a long one, for a moment later a sharp pain tears through your chest and you are thrown back by the force of three arrows. Two of the black shafts have sunk deep into your rib cage, and the third has pierced your thigh. The last thing that you see is the canopy of fern trees above and a large green dragonfly as it settles on your belt buckle. Your life and your mission end here.",
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
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "The Kakarmi disappear into the dense undergrowth and you soon find yourself lost. After nearly two hours of walking you hear the sound of running water. You decide to investigate a little closer.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 106,
                content: "Turn to ",
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
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "Two furry faces appear over the top of the trunk. Both pairs of eyes stare at your weapon and the two creatures let out a shriek of fright. Leaping from the trunk, they disappear into the forest.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 186,
                content: "If you wish to follow them, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 228,
                content: "If you wish to let them go and continue, turn to",
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
            name: "Main Road",
            regionType: "ROAD",
            description:
                "The Main Road is the main passage between the port of Toran in the north and the capital in the south.",
            imageUrl: "images/shadow/regions/sommerlundmainroad.png",
        },
        content:
            "You can see the shadow of the Kraan getting larger all around you. It suddenly strikes, pitching you forward onto your face with the power of its attack. You have been wounded in both arms. Lose 3 ENDURANCE points and run to the trees.",
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
                targetNr: 303,
                content: "Turn to ",
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
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "You thank your Kai training and your quick thinking, for that bog could have proved as deadly as any Drakkarim or Kraan. You are worried about losing time, and push on further into the trees towards the south. Ahead of you, you see a wide path that also leads south.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 118,
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
            name: "Silvermoon Lake",
            regionType: "LAKE",
            description: "The Silvermoon Lake is a ...",
            imageUrl: "images/shadow/regions/silvermoonlake.png",
        },
        content:
            "You walk for three miles along the water’s edge until you chance upon a wrecked river barge. It appears to have served as shelter for someone, as you can see a bed and some cooking utensils through a hole in the deck.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 20,
                content: "If you wish to search the barge, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 273,
                content: "If you wish to press on, turn to",
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
        content: "The bodyguard unsheathes a large scimitar and strikes at your head.",
        events: [
            {
                eventType: "COMBAT",
                ranking: 1,
                creature: {
                    name: "Bodyguard",
                    combatSkill: 11,
                    endurance: 21,
                    imageUrl: "images/shadow/creatures/bodyguard.png",
                },
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 24,
                content: "If you win, turn to ",
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
            name: "Main Road",
            regionType: "ROAD",
            description:
                "The Main Road is the main passage between the port of Toran in the north and the capital in the south.",
            imageUrl: "images/shadow/regions/sommerlundmainroad.png",
        },
        content:
            "You see the razor-fanged mouth of a Doomwolf and hear the hideous cries of the Giaks. Two of them are coming straight for you. You are saved from certain death when your horse jumps at the approaching beasts, knocking them both to the ground. You lash out at the Giak and open a large wound in his head ... and then suddenly, as if by a miracle, you’re through and racing on down the highway, clear of the rest of the pack. But a shadow follows you. It is a Kraan and it has started to dive. Its target is you.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 171,
                content: "If you veer off the highway towards the cover of the trees, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 120,
                content:
                    "If you press on regardless of the Kraan and gallop flat out down the highway, turn to ",
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
            name: "Silvermoon Lake",
            regionType: "LAKE",
            description: "The Silvermoon Lake is a ...",
            imageUrl: "images/shadow/regions/silvermoonlake.png",
        },
        content:
            "The beast and its rider lie dead. You notice a Scroll tucked into the Giak’s belt. You may take this if you wish, but remember to mark it on your Action Chart. The other Doomwolves are charging along the path towards you.",
        events: [
            {
                eventType: "ACQUIRE_ITEM_EVENT",
                ranking: 1,
                item: {
                    name: "Giak Scroll",
                    itemType: "SCROLL",
                    description: "Scroll",
                    weight: "SMALL",
                    imageUrl: "images/shadow/items/giakscroll.png",
                },
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 253,
                content: "If you wish to fight them, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 126,
                content: "If you wish to escape into the woods, turn to ",
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
            name: "Main Road",
            regionType: "ROAD",
            description:
                "The Main Road is the main passage between the port of Toran in the north and the capital in the south.",
            imageUrl: "images/shadow/regions/sommerlundmainroad.png",
        },
        content:
            "You sprint towards the wagon. People are running everywhere in panic as the Kraan make their attack, carrying their poor victims off into the darkening sky. A large Kraan is hovering above the wagon and three snarling Giaks drop from its back onto the startled horses. You must fight them or leave the wagon and run to the safety of a nearby farmhouse.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 208,
                content: "If you wish to fight the Giaks, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 148,
                content: "If you wish to run to the farmhouse, turn to ",
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
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "Wiping the bear’s blood from your weapon, you notice the mouth of a cave hidden behind the rock from which the bear attacked.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 59,
                content: "If you wish to investigate this cave further, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 106,
                content: "If you wish to press on, turn to ",
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
            name: "Kings Citadel",
            regionType: "CITADEL",
            description:
                "The Kings Citadel is the highest law enforcement and paramilitary organization in Holmgard.",
            imageUrl: "images/shadow/regions/holmguardcitadel.png",
        },
        content:
            "You follow the man into a small library off the main hall. He pushes one of the many books on the shelves which line all four walls, and you hear a metallic click. One section of the bookcase slowly slides back to reveal a hidden passage.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 332,
                content: "If you wish to follow the man into the passage, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 144,
                content:
                    "If you do not want to enter the dark corridor, leave the guildhall and return to the street. Turn to ",
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
            name: "Silvermoon Lake",
            regionType: "LAKE",
            description: "The Silvermoon Lake is a ...",
            imageUrl: "images/shadow/regions/silvermoonlake.png",
        },
        content:
            "The Drakkar lies dead at the bottom of the ferry. He has a Sword and 6 Gold Crowns which you may keep if you wish. You push the body into the water where it floats for a few seconds before disappearing into the icy depths. Grabbing the pole, you steer to the other side of the lake and abandon the ferry.",
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
                amount: 6,
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 172,
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
            name: "Holmgard",
            regionType: "CITY",
            description:
                "Holmgard is the capital of Sommerlund and is a seaport on the Holmgulf. It is located near the Graveyard of the Ancients. The city is enclosed by grey-white walls two hundred feet in height whose gatehouses are 100 yards long. At the center of the city is the Citadel of the King.",
            imageUrl: "images/shadow/regions/holmguard.png",
        },
        content:
            "You can sense that there is someone else behind the screen. There is a lingering aura of wickedness around this shop. Be on your guard—something is wrong here.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 7,
                content: "If you wish to return to the street, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 152,
                content: "If you wish to examine the goods in the glass counter, turn to ",
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
            name: "Main Road",
            regionType: "ROAD",
            description:
                "The Main Road is the main passage between the port of Toran in the north and the capital in the south.",
            imageUrl: "images/shadow/regions/sommerlundmainroad.png",
        },
        content:
            "Most of the cupboards and drawers are empty. Whoever lived here took nearly everything they owned with them, but you do manage to scrape together enough fruit in the cellar for one Meal. You may mark this on your Action Chart.",
        events: [
            {
                eventType: "CHANGE_RATION_AMOUNT_EVENT",
                ranking: 1,
                amount: 6,
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 81,
                content: "Turn to ",
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
            name: "Main Road",
            regionType: "ROAD",
            description:
                "The Main Road is the main passage between the port of Toran in the north and the capital in the south.",
            imageUrl: "images/shadow/regions/sommerlundmainroad.png",
        },
        content:
            "Night is starting to close in. The shadows of the forest are growing longer and darker. Just as you are about to stop and rest, you see through the trees a line of people moving south along a wide highway. Moving closer, you notice a large merchant’s caravan in the centre of the dusty turnpike. It is drawn by six large horses and is moving much faster than any of the other traffic. This could be your chance to reach the capital as quickly as possible.",
        outcomes: [
            {
                outcomeType: "ABILITY",
                targetNr: 168,
                ability: {
                    abilityType: "CAMOUFLAGE",
                    description:
                        "This Discipline enables a Kai Lord to blend in with his surroundings. In the countryside, he can hide undetected among trees and rocks and pass close to an enemy without being seen. In a town or city, it enables him to look and sound like a native of that area, and can help him to find shelter or a safe hiding place.",
                },
                content:
                    "If you wish to use the Kai Discipline of Camouflage to hide in among the packing cases strapped to the roof, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 78,
                content: "If you wish to jump onto the caravan, turn to ",
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
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "You follow the rough track for nearly an hour when you notice ahead of you another wider path branching off towards the south.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 238,
                content: "If you wish to turn south along the new path, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 201,
                content: "But if you wish to head east, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 130,
                content: "Or if you wish to go west, turn to ",
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
            name: "Boat Crossing",
            regionType: "CITY_OUTSKIRTS",
            description: "The outer fildworks of the city can now be seen.",
            imageUrl: "images/shadow/regions/holmguardoutskirts.png",
        },
        content:
            "Urging your horse forward, you gallop down the long stretch of highway towards the capital. After only a few minutes your horse suddenly slows and finally limps to a halt. You dismount and examine its raised right foreleg. You curse your ill luck, for you see that it has thrown a shoe and injured its hoof quite badly. You will have to leave him here and proceed on foot as quickly as you can.",
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
            name: "Holmgard",
            regionType: "CITY",
            description:
                "Holmgard is the capital of Sommerlund and is a seaport on the Holmgulf. It is located near the Graveyard of the Ancients. The city is enclosed by grey-white walls two hundred feet in height whose gatehouses are 100 yards long. At the center of the city is the Citadel of the King.",
            imageUrl: "images/shadow/regions/holmguard.png",
        },
        content:
            "You suddenly feel a searing pain shoot through your chest as something explodes against you in a shower of red sparks. You lose 10 ENDURANCE points. Through the smoke, the Sage is preparing to throw more explosives at you.",
        events: [
            {
                eventType: "CHANGE_ENDURANCE_EVENT",
                ranking: 1,
                amount: 10,
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 80,
                content: "If you have 10 or more ENDURANCE points left, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 344,
                content: "If you now have less than 10 ENDURANCE points, turn to ",
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
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "After an hour of walking you arrive at a junction. The path continues south and another path joins it from the west. You realize that the west path will lead you back to the marsh, so you continue southwards.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 111,
                content: "Turn to ",
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
            name: "Boat Crossing",
            regionType: "CITY_OUTSKIRTS",
            description: "The outer fildworks of the city can now be seen.",
            imageUrl: "images/shadow/regions/holmguardoutskirts.png",
        },
        content:
            "Their leader picks up your discarded Equipment and ushers you along the road ahead. (You must now erase all Weapons and Backpack Items from your Action Chart.) An evil grin spreads across the face of the other two men, and you suddenly realize that they are not soldiers after all. You make a break for it and run away from there, sprinting towards the distant capital. Behind you, the ominous click of a crossbow being primed sends a shiver down your spine. Pick a number from the Random Number Table.",
        events: [
            {
                eventType: "DROP_ALL_WEAPONS_EVENT",
                ranking: 1,
            },
            {
                eventType: "DROP_BACKPACK_EVENT",
                ranking: 2,
            },
        ],
        outcomes: [
            {
                outcomeType: "RANDOM",
                targetNr: 181,
                intervall: {
                    min: 0,
                    max: 4,
                },
                content: "If the number you have picked is 0–4, turn to ",
            },
            {
                outcomeType: "RANDOM",
                targetNr: 145,
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
        content:
            "The path soon joins a highway where a signpost indicates Toran to the north and Holmgard to the south. You turn south towards the capital.",
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
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "The track soon reaches a larger road which crosses the stream via a stone bridge. A signpost at the bridge points north to Toran and south to Holmgard. The road itself is jammed with people moving south, some pushing their possessions along on handcarts. You join the refugee column and head towards the capital.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 30,
                content: "",
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
            name: "Main Road",
            regionType: "ROAD",
            description:
                "The Main Road is the main passage between the port of Toran in the north and the capital in the south.",
            imageUrl: "images/shadow/regions/sommerlundmainroad.png",
        },
        content:
            "The ghoulish creatures thrust their spears at you and attack. Fight these creatures as a single enemy.",
        events: [
            {
                eventType: "COMBAT",
                ranking: 1,
                creature: {
                    name: "Giak",
                    combatSkill: 12,
                    endurance: 12,
                    imageUrl: "images/shadow/creatures/giak.png",
                },
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 148,
                content: "If you win, you can run to the safety of the farmhouse by turning to ",
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
            name: "Graveyard of the Ancients",
            regionType: "GRAVEYARD",
            description:
                "The Graveyard of the Ancients is an ancient, mist-shrouded graveyard just North of Holmgard. This place is taboo because of the nameless horrors that inhabit it. No one knows who lies in eternal unrest here but the Evil that lives there is more ancient than the Darklords.",
            imageUrl: "images/shadow/regions/graveyardofancients.png",
        },
        content:
            "You see ahead a corridor sloping upwards, and as you reach the top of this slope, a stone portal slides across to reveal another passage ahead. You step through the opening which then quickly closes with a crunch.",
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
            name: "Kings Citadel",
            regionType: "CITADEL",
            description:
                "The Kings Citadel is the highest law enforcement and paramilitary organization in Holmgard.",
            imageUrl: "images/shadow/regions/holmguardcitadel.png",
        },
        content:
            "Just inside the door, you are stopped by a journeyman of the Guildhall and asked to explain your intrusion. You calmly inform him of your urgent message for the King, and he hurries you into the Guildmaster’s chambers. A distinguished old man in deep purple robes turns to greet you and listens to your story. Taking you by the arm, he leads you into an adjoining library and closes the door. Pressing one of the many thousands of books, he releases a secret panel in the wall and beckons you to follow him.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 332,
                content: "If you wish to follow him into the dark passage, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 37,
                content:
                    "If you are not completely happy about this man and wish to leave the Guildhall, turn to ",
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
        content:
            "You walk along a dimly lit corridor which opens out into a large square room, with an oak door in the far wall. ",
        outcomes: [
            {
                outcomeType: "ABILITY",
                targetNr: 244,
                ability: {
                    abilityType: "SIXTH_SENSE",
                    description:
                        "This skill may warn a Kai Lord of imminent danger. It may also reveal the true purpose of a stranger or strange object encountered in your adventure.",
                },
                content: "If you possess the Kai Discipline of Sixth Sense turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 173,
                content: "If you wish to walk across to the door, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 106,
                content:
                    "If you would prefer to return to the surface and continue your journey, turn to ",
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
            name: "Kings Citadel",
            regionType: "CITADEL",
            description:
                "The Kings Citadel is the highest law enforcement and paramilitary organization in Holmgard.",
            imageUrl: "images/shadow/regions/holmguardcitadel.png",
        },
        content:
            "When you awake, the pain is but a memory. Restore all lost ENDURANCE points to your original score. A tall man dressed in white robes stands before you, a bowl of herbs in his hands. Placing the leaves into a kettle of boiling water, he then turns to greet you. ‘You have passed close to death and have seen his face, Kai Lord, but the Grey One has not claimed you for his flock. You are healed in body but I sense that you are wounded in spirit. What is it that troubles you so?’ You recognize the man to be one of the King’s senior physicians, for the gold embroidered emblem of a dove upon his sleeve is the sign of his respected vocation. You tell the aged cleric of the events at the monastery and of your perilous journey to the King. Raising you gently from the bed by your arm, he bids you follow him. You notice that you are in a lavishly decorated room which leads out through a long corridor lined with tapestries. It slowly dawns on you just where you are. This is the citadel of Holmgard and you are about to meet the King.",
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
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "You have been trudging through the forest for nearly two hours. The nagging fear that you are lost begins to seem a reality. Apart from the occasional cry of a Kraan in the far distance, you have seen or heard no evidence that the enemy is in this part of the forest. As you descend a rocky hillock, you see something unusual in the tangled woods ahead.",
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
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "The path gradually narrows until it disappears completely into a mass of dense vegetation. You cannot go any further on this route and therefore you must return to the clearing.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 125,
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
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "You emerge into a small clearing. In the centre you see the skeletal remains of a large animal. To the south a narrow track leads off into the distance.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 346,
                content: "If you wish to examine the skeleton, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 14,
                content: "If you would rather press on, turn to ",
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
            name: "Dragon Bridge",
            regionType: "BRIDGE",
            description: "The Dragon Bridge connects the northern and southern part of Summerlund.",
            imageUrl: "images/shadow/regions/dragonbridge.png",
        },
        content:
            "Placing one hand on his forehead and the other on his wounded arm, you feel the warmth of your healing powers leave your body and give strength to the injured man. He tells you his name is Trimis and he is a soldier in Prince Pelathar’s army. The Prince and his troops are engaged in battle to the south, where a large force of the Darklords’ creatures are attacking the bridge of Alema. During the fight, he had been snatched into the air by a Kraan, and dropped into the forest. You make the soldier as comfortable as possible before continuing on your mission.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 264,
                content: "If you would rather press on, turn to ",
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
            name: "Kings Citadel",
            regionType: "CITADEL",
            description:
                "The Kings Citadel is the highest law enforcement and paramilitary organization in Holmgard.",
            imageUrl: "images/shadow/regions/holmguardcitadel.png",
        },
        content:
            "You quickly escape from the madman and dodge along a dark alleyway where the houses are small and cramped together. At the very end is a green door with a sign above it that says: Herbalis",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 91,
                content: "If you wish to enter, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 7,
                content:
                    "If you wish to wait until you are sure the madman has disappeared and then return to the main street, turn to ",
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
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "Your senses reveal that more than just horses are heading towards you. You can just make out the very high shrieks of Giak war-cries in the distance. By the number of cries and curses you estimate that there are over a dozen Giaks, and probably Doomwolves as well. You decide that advertising your existence is perhaps not quite such a good idea after all!",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 75,
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
            name: "Holmgard",
            regionType: "CITY",
            description:
                "Holmgard is the capital of Sommerlund and is a seaport on the Holmgulf. It is located near the Graveyard of the Ancients. The city is enclosed by grey-white walls two hundred feet in height whose gatehouses are 100 yards long. At the center of the city is the Citadel of the King.",
            imageUrl: "images/shadow/regions/holmguard.png",
        },
        content:
            "All that remains of you now is embedded five feet into the stairs on which you were standing, beneath a vast granite block. Your mission and your life end here. ",
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
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        events: [
            {
                eventType: "COMBAT",
                ranking: 1,
                creature: {
                    name: "Bodyguard",
                    combatSkill: 11,
                    endurance: 21,
                    imageUrl: "images/shadow/creatures/bodyguard.png",
                },
            },
        ],
        content: "The bodyguard unsheathes a scimitar and lunges for your head. ",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 24,
                content: "If you win, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 234,
                content:
                    "If you wish to evade combat at any time during the fight, you can jump from the speeding caravan by turning to ",
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
            name: "Boat Crossing",
            regionType: "CITY_OUTSKIRTS",
            description: "The outer fildworks of the city can now be seen.",
            imageUrl: "images/shadow/regions/holmguardoutskirts.png",
        },
        content:
            "Cautiously, you approach the base of the log wall. The tree trunks are rough-hewn and afford plenty of footholds for your climb. As you reach the top of the wall, you come face to face with a crossbow. The soldier holding it in your face motions for you to descend a wooden ladder to the ground. You do not argue with him. Slowly you descend the ladder.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 318,
                content: "Turn to",
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
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content: "As you go on you discover a forest path that divides at the point you join it.",
        outcomes: [
            {
                outcomeType: "ABILITY",
                targetNr: 67,
                ability: {
                    abilityType: "TRACKING",
                    description:
                        "This skill enables a Kai Lord to make the correct choice of a path in the wild, to discover the location of a person or object in a town or city and to read the secrets of footprints or tracks.",
                },
                content: "If you wish to use your Kai Discipline of Tracking, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 140,
                content: "If you wish to take the south fork, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 252,
                content: "If you wish to take the east fork, turn to ",
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
            name: "Riverbank",
            regionType: "RIVER_BANK",
            description:
                "Peering over the steep undercut of the riverbank, you can see a tanble of driftwood along the waters edge.",
            imageUrl: "images/shadow/regions/riverbank.png",
        },
        content:
            "After quite a struggle, you manage to free the heavy trunk from the river bank. Gathering your equipment in a bundle, you stow it on top of the log and then slowly wade out into the river. The current soon takes you and you drift slowly downstream. After twenty minutes you hear the sound of horses along the left bank. ",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 75,
                content: "If you wish to hide behind the log, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 175,
                content:
                    "If you wish to climb onto the log and prepare to catch the riders’ attention, then turn to ",
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
            name: "Boat Crossing",
            regionType: "CITY_OUTSKIRTS",
            description: "The outer fildworks of the city can now be seen.",
            imageUrl: "images/shadow/regions/holmguardoutskirts.png",
        },
        content:
            "You have ridden several miles and have seen no sign of refugees or of the enemy. You race on towards a high ridge in the middle distance. You should be able to see the capital from there. As you reach the peak, the sight that meets you on the far side is one of hope—but there is still one challenge you know you have to face.",
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
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "You recognize the language to be that of the Kakarmi, an intelligent race of forest animals that live in, and care for the forests of Sommerlund. You have nothing to fear from these creatures as they are very timid and gentle in their behaviour. Using your skill of Animal Kinship, you call to them in their strange native tongue.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 187,
                content: "If you say ‘Do not be afraid, I am a friend,’ turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 39,
                content:
                    "If you say ‘I am a Kai Lord. I wish you no harm. I must talk with you,’ turn to ",
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
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "At first the descent is quite easy, but you soon find it difficult to see clearly and your legs feel very weak. The ‘Sleeptooth’ scratches are affecting you, and suddenly you pitch forward and slip head-first into darkness.",
        outcomes: [
            {
                outcomeType: "RANDOM",
                targetNr: 277,
                intervall: {
                    min: 0,
                    max: 4,
                },
                content: "If the number you have picked is 0–4, turn to",
            },
            {
                outcomeType: "RANDOM",
                targetNr: 338,
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
            name: "Yellow Marsh",
            regionType: "MARSH",
            description: "You soon realize that you are walking deeper into a wooded marsh.",
            imageUrl: "images/shadow/regions/yellowmarch.png",
        },
        content:
            "You are now up to your waist in slimy water. The air is thick with small insects that sting your face and clog your nose. Something wraps itself around your leg. It is a Marshviper and you must fight it.",
        events: [
            {
                eventType: "COMBAT",
                ranking: 1,
                creature: {
                    name: "Marshviper",
                    combatSkill: 13,
                    endurance: 6,
                    imageUrl: "images/shadow/creatures/marshviper.png",
                },
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 271,
                content: "If you lose any ENDURANCE points in the combat, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 348,
                content: "If you kill it without losing any ENDURANCE points, turn to ",
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
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content: "The path continues eastwards but soon disappears into thick undergrowth.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 140,
                content:
                    "If you continue east, cutting through the vegetation with your weapon, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 215,
                content:
                    "If you head south to where the bushes are less dense and then press on through the forest, turn to ",
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
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "The Kraan hovers above you, raising dust with the beat of its huge black wings. The dust gets into your eyes and nose, and you start to cough. Now the beast attacks. If you win you have a choice:",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 267,
                content: "Will you search the body by turning to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 125,
                content: "Or will you continue along the east path by turning to ",
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
            name: "Boat Crossing",
            regionType: "CITY_OUTSKIRTS",
            description: "The outer fildworks of the city can now be seen.",
            imageUrl: "images/shadow/regions/holmguardoutskirts.png",
        },
        content:
            "In the far distance, you can make out the silhouette of soldiers on barges that are strung out in a line across the river. You can hear the low growls of Doomwolves returning along the opposite bank. For once you throw caution to the wind and sprint along the river bank towards the barges in the distance.",
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
            name: "Holmgard",
            regionType: "CITY",
            description:
                "Holmgard is the capital of Sommerlund and is a seaport on the Holmgulf. It is located near the Graveyard of the Ancients. The city is enclosed by grey-white walls two hundred feet in height whose gatehouses are 100 yards long. At the center of the city is the Citadel of the King.",
            imageUrl: "images/shadow/regions/holmguard.png",
        },
        content:
            "You are about to ask the price of the potions when the bamboo screen crashes down and a young man leaps at you. He has a long curved dagger in his hand. He is upon you and you must fight for your life.",
        events: [
            {
                eventType: "COMBAT",
                ranking: 1,
                creature: {
                    name: "Robber",
                    combatSkill: 13,
                    endurance: 20,
                    imageUrl: "images/shadow/creatures/robber.png",
                },
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 94,
                content: "If you kill him within 4 rounds of combat, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 203,
                content: "If you are still fighting after 4 rounds of combat, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 7,
                content:
                    "You may evade more fighting after 2 rounds of combat by dashing through the front door. If you wish to do this, turn to",
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
            name: "Boat Crossing",
            regionType: "CITY_OUTSKIRTS",
            description: "The outer fildworks of the city can now be seen.",
            imageUrl: "images/shadow/regions/holmguardoutskirts.png",
        },
        content:
            "The rough-looking leader approaches you and says, ‘Our needs are simple, kind sir. Your money or your life!’",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 180,
                content: "If you wish to fight them, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 22,
                content: "If you wish to run, turn to ",
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
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "After nearly an hour, you catch up with the horse and succeed in calming him down. You are now north of the cabin, but you are confident of finding your way back. Mounting the horse, you ride back past the cabin, and press on towards the south once again.",
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
            name: "Main Road",
            regionType: "ROAD",
            description:
                "The Main Road is the main passage between the port of Toran in the north and the capital in the south.",
            imageUrl: "images/shadow/regions/sommerlundmainroad.png",
        },
        content:
            "You jump clear of the speeding caravan but land very badly and break your ankle. The pain is terrible and you soon lose consciousness. Unfortunately you never wake up, but it may be of interest to you that your head is now adorning the saddle of a Kraan. Your life and your mission end here.",
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
         * --  Storysection 235
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 235,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        content:
            "The Prince’s horse is indeed a magnificent animal, fast and sure of foot. You gallop along the twisting track as if it were a straight highway, until the noise of battle has disappeared far behind you. You are hungry and must eat a Meal during your ride. After several miles, the path stops abruptly at a junction. There is a signpost, but it has been hacked down.",
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
                targetNr: 254,
                ability: {
                    abilityType: "TRACKING",
                    description:
                        "This skill enables a Kai Lord to make the correct choice of a path in the wild, to discover the location of a person or object in a town or city and to read the secrets of footprints or tracks.",
                },
                content: "If you wish to use your Kai Discipline of Tracking, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 32,
                content: "If you wish to turn left, go to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 146,
                content: "If you wish to turn right, go to ",
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
            name: "Graveyard of the Ancients",
            regionType: "GRAVEYARD",
            description:
                "The Graveyard of the Ancients is an ancient, mist-shrouded graveyard just North of Holmgard. This place is taboo because of the nameless horrors that inhabit it. No one knows who lies in eternal unrest here but the Evil that lives there is more ancient than the Darklords.",
            imageUrl: "images/shadow/regions/graveyardofancients.png",
        },
        content:
            "The Gem hovers above the mouth of the skeleton king, glowing a fierce red. Suddenly, an explosion of searing crimson flame lashes upwards from the sarcophagus, destroying the Gem completely. You are thrown against the far wall and knocked unconscious. When you awake, the chamber is completely empty. The skeleton king and the sarcophagus have vanished. You have lost 6 ENDURANCE points, and your initial COMBAT SKILL is reduced by 1 point for the rest of your life. You carefully get to your feet and stagger towards the tunnel.",
        events: [
            {
                eventType: "CHANGE_ENDURANCE_EVENT",
                ranking: 1,
                amount: -6,
            },
            {
                eventType: "CHANGE_COMBAT_SKILL_EVENT",
                ranking: 2,
                amount: -1,
            },
            {
                eventType: "DROP_ALL_ITEMS_EVENT",
                ranking: 3,
            },
        ],
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
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "You make full use of your Kai Discipline and quickly burrow deep into the loose earth of the wooded hillside. Covering yourself with your cloak, you pull a loose branch across your hastily dug shelter. Pick a number from the Random Number Table.",
        outcomes: [
            {
                outcomeType: "RANDOM",
                targetNr: 265,
                intervall: {
                    min: 0,
                    max: 4,
                },
                content:
                    "If you have picked a number 0–4, then you have passed undetected. Turn to ",
            },
            {
                outcomeType: "RANDOM",
                targetNr: 72,
                intervall: {
                    min: 5,
                    max: 9,
                },
                content: "If you have picked a number 5–9, then you are not so lucky! Turn to ",
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
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "he path meanders between several small, wooded hills and eventually leads to a ruined log cabin. It seems that it had burnt down not so long ago, for the ashes are still warm and a haze of smoke still lingers. You sense possible danger here.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 42,
                content: "You may leave by the south route by turning to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 68,
                content: "Or you may take the north track by turning to ",
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
            "If you are to get inside the tomb, you must either distract or silence the Drakkarim sentry.<br>If you do not possess this item, you will have to creep up and overpower him as quickly and silently as you can. Pick a number from the Random Number Table. If you possess the Kai Disciplines of Hunting, Tracking, and Camouflage, add 2 to the number you have picked. If you have reached the Kai rank of Guardian or higher, add 3 to the number.",
        outcomes: [
            {
                outcomeType: "ITEM",
                targetNr: 260,
                content: "If you possess a Tincture of Graveweed, turn to",
                item: {
                    code: "TINCTURE_OF_GRAVEWEED",
                    name: "Tincture of Graveweed",
                    description: "causes sickness and loss of 2 ENDURANCE points per dose",
                    imageUrl: "images/flight/items/tincture_of_graveweed.png"
                }
            },
            {
                outcomeType: "RANDOM",
                targetNr: 324,
                content:
                    "If your total is now 0–4, turn to",
                intervall: {
                    min: 0,
                    max: 4
                }
            },
            {
                outcomeType: "RANDOM",
                targetNr: 303,
                content:
                    "If it is 5 or more, turn to",
                intervall: {
                    min: 5,
                    max: 10
                }
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
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "The path leads along a ridge of wooded hillocks and changes direction towards the east.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 79,
                content: "Turn to ",
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
            name: "Ruins of Raumas",
            regionType: "TEMPLE_RUIN",
            description:
                "Edging nearer, you soon make out a clearing that you recognize to be the site of the ruins of Raumas.",
            imageUrl: "images/shadow/regions/runinsofraumas.png",
        },
        content:
            "The wizard heeds your cry and spins around just in time to loose a searing bolt of energy at the Giak. The creature’s head disintegrates in flames and its twitching body falls in a heap at the foot of the pillar. The Giak officer sees you and shouts, ‘Ogot...Ogot!’ to his cowering troops, who quickly run away from the ruins to the safety of the forest beyond.The young wizard wipes his brow, and walks towards you, his hand extended in gratitude and friendship.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 237,
                content: "Turn to",
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
        content:
            "The lid of the sarcophagus slips to the floor with a dull crunch. You are looking at the remains of an ancient king, who lies still surrounded by his treasure. An ornate crown is still in position on his skull. The jaw of the skeleton is wide open and the darkness of the mouth seems strangely bottomless. A distant rumbling can now be heard from deep in the earth.",
        outcomes: [
            {
                outcomeType: "ABILITY",
                targetNr: 166,
                ability: {
                    abilityType: "MINDSHIELD",
                    description:
                        "The Darklords and many of the evil creatures in their command have the ability to attack you using their Mindforce. The Kai Discipline of Mindshield prevents you from losing any ENDURANCE points when subjected to this form of attack.",
                },
                content: "If you have the Kai Discipline of Mindshield, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 9,
                content: "If you do not, turn to ",
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
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "Hurrying through the forest, you stumble and fall down a steep slope which drops you in a heap on a hidden path below. On the path is a dead body. It is a Giak, a spiteful and ghoulish servant of the Darklords. Many centuries ago, their ancestors were used by the Darklords to build for them the infernal city of Helgedad, which lies in the volcanic wastelands beyond the Durncrag range of mountains. The construction of the city was a long and torturous nightmare, and only the strongest of the Giaks survived the heat and poisonous atmospheres of Helgedad. This creature that lies before you is a descendant of these Giak slaves. It has been killed by a sword blow to its head, and by its side lies a Mace. You may take this Weapon if you wish.",
        events: [
            {
                eventType: "ACQUIRE_ITEM_EVENT",
                ranking: 1,
                item: {
                    name: "Mace",
                    itemType: "WEAPON",
                    description: "A Mace is a",
                    weight: "MEDIUM",
                    imageUrl: "images/shadow/items/mace.png",
                },
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 97,
                content: "Continue along the hidden path by turning to ",
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
            name: "Graveyard of the Ancients",
            regionType: "GRAVEYARD",
            description:
                "The Graveyard of the Ancients is an ancient, mist-shrouded graveyard just North of Holmgard. This place is taboo because of the nameless horrors that inhabit it. No one knows who lies in eternal unrest here but the Evil that lives there is more ancient than the Darklords.",
            imageUrl: "images/shadow/regions/graveyardofancients.png",
        },
        content:
            "Your senses tell you that you are not alone. You are in very great danger. Return to the surface as quickly as you can.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 93,
                content: "Turn to ",
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
            name: "Silvermoon Lake",
            regionType: "LAKE",
            description: "The Silvermoon Lake is a ...",
            imageUrl: "images/shadow/regions/silvermoonlake.png",
        },
        content:
            "Arrows hit the water above you, and drop harmlessly past as you swim beneath the surface towards the opposite bank. Quickly you wade out of the river and dash for the trees. You are now out of range of the Giaks, who remount their Doomwolves and continue their chase.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 190,
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
            name: "Silvermoon Lake",
            regionType: "LAKE",
            description: "The Silvermoon Lake is a ...",
            imageUrl: "images/shadow/regions/silvermoonlake.png",
        },
        content:
            "When the ferry reaches the middle of the lake, the man stops rowing and stands up. He laughs menacingly and pulls back the hood of his cloak to reveal himself. He is a Drakkar and you must fight him.",
        events: [
            {
                eventType: "COMBAT",
                ranking: 1,
                creature: {
                    name: "Drakkar",
                    combatSkill: 15,
                    endurance: 23,
                    imageUrl: "images/shadow/creatures/drakkar.png",
                },
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 197,
                content: "If you win, turn to",
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
            name: "Main Road",
            regionType: "ROAD",
            description:
                "The Main Road is the main passage between the port of Toran in the north and the capital in the south.",
            imageUrl: "images/shadow/regions/sommerlundmainroad.png",
        },
        content:
            "The merchant looks angry. He calls to his bodyguard. You must think of something quickly.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 159,
                content:
                    "If you decide to offer him something of greater value that you have in your Backpack, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 220,
                content: "If you prepare to fight the bodyguard, turn to",
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
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "You reach the base of the hill and hurry into the forest. After only a few minutes you discover an old forest track.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 44,
                content: "If you wish to follow this track north, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 300,
                content: "If you wish to follow this track east, turn to",
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
            name: "Graveyard of the Ancients",
            regionType: "GRAVEYARD",
            description:
                "The Graveyard of the Ancients is an ancient, mist-shrouded graveyard just North of Holmgard. This place is taboo because of the nameless horrors that inhabit it. No one knows who lies in eternal unrest here but the Evil that lives there is more ancient than the Darklords.",
            imageUrl: "images/shadow/regions/graveyardofancients.png",
        },
        content:
            "You descend a flight of stone stairs that lead to a large chamber. A macabre sight awaits you. Directly opposite, across the large stone room, is an ornate archway with a corridor leading into the darkness beyond. The strange green light radiates from two lines of skulls each resting on a stone plinth. They face each other to form an eerie walkway across the room.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 169,
                content: "If you wish to walk across the room to the archway, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 107,
                content: "If you wish to attack the skulls, turn to",
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
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "Leaping from the top of the trunk, you land in front of two small furry creatures. You recognize that they are Kakarmi, an intelligent race of animals that inhabit and tend the forests of Sommerlund. Before you can apologize for your dramatic entrance, the frightened little creatures scurry off into the forest.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 186,
                content: "If you wish to follow them, turn to ",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 228,
                content: "If you wish to continue, turn to ",
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
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "You are lucky, they do not seem to have spotted you. They slowly move on and have soon disappeared along the far side of the ridge. You continue your run.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 10,
                content: "Turn to ",
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
            name: "Clearing",
            regionType: "CLEARING",
            description:
                "You pass through a long, dark tunnel of voerhanging branches that eventually opens out into a large clearing.",
            imageUrl: "images/shadow/regions/clearing.png",
        },
        content:
            "In the centre of a small clearing you see a group of humans talking excitedly and gesturing wildly with their hands. There are two children, three men, and a woman. Their belongings are wrapped in bundles which they carry slung over their shoulders. Their clothes look well made and expensive but they are dirty and torn.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 155,
                content: "If you wish to approach them and ask who they are, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 67,
                content: "If you wish to avoid them and continue onwards on your mission, turn to",
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
        content: "The Doomwolves are soon on you and you must fight them one at a time.",
        region: {
            name: "Silvermoon Lake",
            regionType: "LAKE",
            description: "The Silvermoon Lake is a ...",
            imageUrl: "images/shadow/regions/silvermoonlake.png",
        },
        events: [
            {
                eventType: "COMBAT",
                ranking: 1,
                creature: {
                    name: "Doomwolf",
                    combatSkill: 14,
                    endurance: 22,
                    imageUrl: "images/shadow/creatures/doomwolf.png",
                },
            },
            {
                eventType: "COMBAT",
                ranking: 2,
                creature: {
                    name: "Doomwolf",
                    combatSkill: 14,
                    endurance: 22,
                    imageUrl: "images/shadow/creatures/doomwolf.png",
                },
            },
            {
                eventType: "COMBAT",
                ranking: 3,
                creature: {
                    name: "Doomwolf",
                    combatSkill: 14,
                    endurance: 22,
                    imageUrl: "images/shadow/creatures/doomwolf.png",
                },
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 278,
                content: "If you kill them all in battle, turn to",
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
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "Your Tracking ability tells you that several trails from the right path lead off in the direction of the left path. They have been made by large wolves. The Darklords use such beasts to scout for their armies. They are vicious creatures and are often ridden by Giaks. The left path leads towards Holmgard, and the right path leads off towards the Durncrag Mountains. The choice of route is yours.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 32,
                content: "If you wish to turn left, go to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 146,
                content: "If you wish to turn right, go to",
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
            name: "Dragon Bridge",
            regionType: "BRIDGE",
            description: "The Dragon Bridge connects the northern and southern part of Summerlund.",
            imageUrl: "images/shadow/regions/dragonbridge.png",
        },
        content:
            "The creature that you now face is a Gourgaz, one of a race of cold-blooded reptilian creatures that dwell deep in the treacherous Maakenmire swamps. Their favourite food is human flesh! The Prince’s Sword lies at your feet. You may pick up and use this weapon if you wish. The Gourgaz is about to strike at you—you must fight him to the death.",
        events: [
            {
                eventType: "ACQUIRE_ITEM_EVENT",
                ranking: 1,
                item: {
                    name: "Amethyst Sword",
                    itemType: "MAGICAL_ITEM",
                    description: "Prince Yisun Qis sword",
                    weight: "SMALL",
                    imageUrl: "images/shadow/items/amethystsword.png",
                },
            },
            {
                eventType: "COMBAT",
                ranking: 2,
                creature: {
                    name: "Gourgaz",
                    combatSkill: 20,
                    endurance: 30,
                    imageUrl: "images/shadow/creatures/gourgaz.png",
                },
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 82,
                content: "If you win, turn to",
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
            name: "Main Road",
            regionType: "ROAD",
            description:
                "The Main Road is the main passage between the port of Toran in the north and the capital in the south.",
            imageUrl: "images/shadow/regions/sommerlundmainroad.png",
        },
        content:
            "You are awoken by the cries of Kraan high above you in the clear morning sky. Rubbing your eyes, you peer upwards through the canopy of branches to see three of the loathsome creatures fly off towards the north. You are sure you have not been spotted, but perhaps it would be best to leave now—just in case. You mount your horse and ride south along the highway.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 224,
                content: "Tunr to ",
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
            name: "Graveyard of the Ancients",
            regionType: "GRAVEYARD",
            description:
                "The Graveyard of the Ancients is an ancient, mist-shrouded graveyard just North of Holmgard. This place is taboo because of the nameless horrors that inhabit it. No one knows who lies in eternal unrest here but the Evil that lives there is more ancient than the Darklords.",
            imageUrl: "images/shadow/regions/graveyardofancients.png",
        },
        content:
            "You find a stone portal in the east wall, but there does not appear to be any way of opening it.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 133,
                content: "If you wish to examine the statue, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 161,
                content: "If you wish to sit on the seat, turn to",
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
            name: "Silvermoon Lake",
            regionType: "LAKE",
            description: "The Silvermoon Lake is a ...",
            imageUrl: "images/shadow/regions/silvermoonlake.png",
        },
        content:
            "Using your Kai Discipline of Mind Over Matter, you untie the ropes binding your hands. You wait for a chance to make a break for it and then sprint as fast as you can into the dense undergrowth. Black arrows whistle past you, but you are soon deep among the trees and safe again. You have lost your Backpack and Weapons but you have your life and limbs intact. You continue to push on into the forest.",
        events: [
            {
                eventType: "DROP_ALL_WEAPONS_EVENT",
                ranking: 1,
            },
            {
                eventType: "DROP_BACKPACK_EVENT",
                ranking: 2,
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 50,
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
            name: "Darkstone Temple",
            regionType: "EVIL_TEMPLE",
            description:
                "It was only by an unlucky chance you discovered teh secret temple of a sect of evil druids",
            imageUrl: "images/shadow/regions/darkstonetemple.png",
        },
        content:
            "The room is getting colder. You gradually notice the smell of sulphur in the air. You can hear chanting in the distance. It sounds as if it is somewhere in another part of this cave. A slit in the stone wall opens, and the end of a black staff begins to appear. Suddenly a bolt of blue lightning leaps from the staff and hits you in the chest. As your life slowly drains away, the last thing you see is an old man dressed in black robes raising a dagger above your throat. Your life and your mission end here.",
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
        content:
            "Swimming towards the bank, you can see the ranger spread-eagled at the water’s edge. You reach him but only to find that he has broken his neck in the fall and is dead. Suddenly, two Giaks jump on you from above and you must fight them.",
        events: [
            {
                eventType: "COMBAT",
                ranking: 1,
                creature: {
                    name: "Giak",
                    combatSkill: 9,
                    endurance: 9,
                    imageUrl: "images/shadow/creatures/giak.png",
                },
            },
            {
                eventType: "COMBAT",
                ranking: 2,
                creature: {
                    name: "Giak",
                    combatSkill: 8,
                    endurance: 11,
                    imageUrl: "images/shadow/creatures/giak.png",
                },
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 156,
                content: "If you win, turn to ",
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
            name: "Main Road",
            regionType: "ROAD",
            description:
                "The Main Road is the main passage between the port of Toran in the north and the capital in the south.",
            imageUrl: "images/shadow/regions/sommerlundmainroad.png",
        },
        content:
            "Sweating, and out of breath, you part the dense undergrowth to see a Kraan hovering over the wagon. Three ghoulish Giaks drop from its back, startling the horses. They advance upon the helpless children with their spears.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 208,
                content: "If you wish to run back to the wagon and defend the children, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 264,
                content: "If you want to run deeper into the forest, turn to",
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
            name: "Main Road",
            regionType: "ROAD",
            description:
                "The Main Road is the main passage between the port of Toran in the north and the capital in the south.",
            imageUrl: "images/shadow/regions/sommerlundmainroad.png",
        },
        content:
            "The merchant takes your Gold and clicks his fingers. His bodyguard attacks you with his scimitar.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 191,
                content: "If you wish to fight, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 234,
                content:
                    "If you wish to evade combat, jump clear of the speeding caravan by turning to",
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
            name: "Clearing",
            regionType: "CLEARING",
            description:
                "You pass through a long, dark tunnel of voerhanging branches that eventually opens out into a large clearing.",
            imageUrl: "images/shadow/regions/clearing.png",
        },
        content:
            "Carefully, you follow the stream as it makes its way towards the east. Suddenly you notice something in the distance that brings you to a halt. Lying in the rushing water like a great black dam is a dead Kraan. You creep nearer, under cover of the foliage, until you see three arrows deep in the beast’s chest. Trapped beneath the beast is the body of its rider. It is a Giak, a spiteful and malicious servant of the Darklords. Many centuries ago, their ancestors were used by the Darklords to build the infernal city of Helgedad, which lies in the volcanic wastelands beyond the Durncrag range of mountains. The construction of the city was a long and torturous nightmare, and only the strongest Giaks survived the heat and poisonous atmospheres of Helgedad. This creature is a descendant of these Giak slaves. It seems that this one must have drowned. The Giak’s pouch contains 3 Gold Crowns.",
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
                targetNr: 70,
                content: "You may continue downstream, by turning to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 157,
                content:
                    "Or you may leave the stream and make your way on foot through the wooded hills to the south by turning to",
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
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content: "You have not gone far when you hear the sound of battle to the west.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 97,
                content: "If you wish to follow the sound, turn to",
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 6,
                content: "If you would rather continue south, turn to",
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
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "You quickly move off into the forest before more Doomwolves or Kraan appear.You have walked for more than an hour when you reach the top of a rocky hill. The sight that befalls you on the other side is one of hope. But there is also a daunting challenge to be faced.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 142,
                content: "Turn to ",
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
            name: "Graveyard of the Ancients",
            regionType: "GRAVEYARD",
            description:
                "The Graveyard of the Ancients is an ancient, mist-shrouded graveyard just North of Holmgard. This place is taboo because of the nameless horrors that inhabit it. No one knows who lies in eternal unrest here but the Evil that lives there is more ancient than the Darklords.",
            imageUrl: "images/shadow/regions/graveyardofancients.png",
        },
        content:
            "As the beast writhes in its final death agony on the black stone floor, the portal in the east wall clicks open to reveal a corridor beyond. You quickly dash through the secret door just as it crashes shut.",
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 209,
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
            name: "Sommerlund Woodlands",
            regionType: "WOODS",
            description: "Deep Woods in Summerlund",
            imageUrl: "images/shadow/regions/sommerlundwoodlands.png",
        },
        content:
            "Covering your nose with your cloak, you cautiously approach the dead beast. The sharp smell of its fetid black blood makes your stomach churn, but you are determined to press on. Then you notice a large saddlebag strapped to its chest. Opening the bag, you find a Message written on an animal skin. Deeper in the bag is a Dagger. You may keep both the Message and the Dagger if you wish. You leave the body and continue eastwards along the path.",
        events: [
            {
                eventType: "ACQUIRE_ITEM_EVENT",
                ranking: 1,
                item: {
                    name: "Dagger",
                    itemType: "WEAPON",
                    description: "Dagger",
                    weight: "SMALL",
                    imageUrl: "images/shadow/items/dagger.png",
                },
            },
            {
                eventType: "ACQUIRE_ITEM_EVENT",
                ranking: 2,
                item: {
                    name: "Giak Scroll",
                    itemType: "SCROLL",
                    description: "Giak Scroll",
                    weight: "SMALL",
                    imageUrl: "images/shadow/items/giakscroll.png",
                },
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 125,
                content: "Turn to",
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
            description: "The Koneshi Mountains stretch from the southeast to the middle of the Dry Main in Vassagonia. At the western end of this high mountains lies one of the six oasis.",
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
            }
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
            nname: "Barrakeesh",
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
        ]
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
                amount: -1
            },
            {
                eventType: "COMBAT",
                ranking: 2,
                creature: {
                    name: "Drakkarim",
                    combatSkill: 18,
                    endurance: 35,
                    imageUrl: "images/shadow/creatures/drakkarim.png",
                }
            },
            {
                eventType: "COMBAT",
                ranking: 3,
                creature: {
                    name: "Drakkarim",
                    combatSkill: 18,
                    endurance: 35,
                    imageUrl: "images/shadow/creatures/drakkarim.png",
                }
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
                content: "If you wish to pay the old woman 5 Gold Crowns, erase them from your Action Chart and turn to",
                amount: -5
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 202,
                content: "If you do not have 5 Gold Crowns or do not wish to give her the money, leave the tavern and turn to",
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
            name: "",
            regionType: "",
            description: "",
            imageUrl: "images/shadow/regions/.png",
        },
        content:
            "",
        events: [
            {
                eventType: "DROP_WEAPON_EVENT",
                ranking: 1,
            },
        ],
        outcomes: [
            {
                outcomeType: "",
                targetNr: ,
                content: "",
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
            nname: "Throne Chamber",
            regionType: "ROOM",
            description: "A large chamber within the Tomb of the Majhan. It is dimly lit and thick dust covers the marble floor. At the side of the chamber that is opposed to the large stone door there is a rough stone throne.",
            imageUrl: "images/shadow/regions/throne_chamber.png",
        },
        content:
            "You run, half-crouched, towards your golden blade, grab the hilt, and continue at full speed towards the cover of another pillar. Suddenly, a burst of energy leaps from the Darklord’s fist, exploding into the base of the pillar, severing it from the floor. A tremendous roar fills your ears as you are thrown backwards by the shock of the blast. You lose 3 ENDURANCE points. Haakon’s laugh rises above the crash of falling stone until your head is filled with an agonizing pain.",
        events: [
            {
                eventType: "CHANGE_ENDURANCE_EVENT",
                ranking: 1,
                amount: -3
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
                }
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
            name: "",
            regionType: "",
            description: "",
            imageUrl: "images/shadow/regions/.png",
        },
        content:
            "",
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
                }
            }
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 213,
                content:
                    "If you win the combat, turn to",
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
            name: "",
            regionType: "",
            description: "",
            imageUrl: "images/shadow/regions/.png",
        },
        content:
            "",
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
                }
            },
            {
                outcomeType: "RANDOM",
                targetNr: 389,
                content: "If your total is 5–9, turn to",
                intervall: {
                    min: 5,
                    max: 9,
                }
            },
            {
                outcomeType: "RANDOM",
                targetNr: 236,
                content: "If your total is 10 or more, turn to",
                intervall: {
                    min: 10,
                    max: 10,
                }
            },
            {
                outcomeType: "ABILITY",
                targetNr: 295,
                content: "If you have the Kai Discipline of Mind Over Matter, turn to",
                ability: {
                    abilityType: "MIND_OVER_MATTER",
                    description: "Mastery of this Discipline enables a Kai Lord to move small objects with his powers of concentration."
                }
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
            name: "",
            regionType: "",
            description: "",
            imageUrl: "images/shadow/regions/.png",
        },
        content:
            "",
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
                outcomeType: "",
                targetNr: ,
                content: "",
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
                amount: -3
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
            name: "",
            regionType: "",
            description: "",
            imageUrl: "images/shadow/regions/.png",
        },
        content:
            "",
        outcomes: [
            {
                outcomeType: "",
                targetNr: ,
                content: "",
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
        ]
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
            name: "",
            regionType: "",
            description: "",
            imageUrl: "images/shadow/regions/.png",
        },
        content:
            "",
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
                    code : "CRYSTAL_STAR_PENDANT",
                    name : "Crystal star pendant",
                    description : "Crystal star pendant",
                    imageUrl : "images/flight/items/crystal_star_pendant.png"
                }
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
            description: "A large chamber within the Tomb of the Majhan. It is dimly lit and thick dust covers the marble floor. At the side of the chamber that is opposed to the large stone door there is a rough stone throne.",
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
                    code : "SOMMERSWERD",
                    name : "Sommerswerd",
                    description : "Sommerswerd",
                    imageUrl : "images/flight/items/sommerswerd.png"
                }
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
            name: "",
            regionType: "",
            description: "",
            imageUrl: "images/shadow/regions/.png",
        },
        content:
            "",
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
                outcomeType: "",
                targetNr: ,
                content: "",
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
            name: "",
            regionType: "",
            description: "",
            imageUrl: "images/shadow/regions/.png",
        },
        content:
            "",
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
                outcomeType: "",
                targetNr: ,
                content: "",
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
        ]
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
            name: "",
            regionType: "",
            description: "",
            imageUrl: "images/shadow/regions/.png",
        },
        content:
            "",
        outcomes: [
            {
                outcomeType: "",
                targetNr: ,
                content: "",
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
            name: "",
            regionType: "",
            description: "",
            imageUrl: "images/shadow/regions/.png",
        },
        content:
            "",
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
                content: "If you wish to decline, you can leave the eating house and continue along the avenue and turn to",
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
            name: "",
            regionType: "",
            description: "",
            imageUrl: "images/shadow/regions/.png",
        },
        content:
            "",
        outcomes: [
            {
                outcomeType: "",
                targetNr: ,
                content: "",
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
            description: "an old tomb where Darklord Haakon hopes to find the \"Book of the Magnakai\"",
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
            }
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
            name: "",
            regionType: "",
            description: "",
            imageUrl: "images/shadow/regions/.png",
        },
        content:
            "",
        events: [
            {
                eventType: "CHANGE_RATION_AMOUNT_EVENT",
                ranking: 1,
                amount: -1,
            },
        ],
        outcomes: [
            {
                outcomeType: "",
                targetNr: ,
                content: "",
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
            name: "",
            regionType: "",
            description: "",
            imageUrl: "images/shadow/regions/.png",
        },
        content: "Your Kai Discipline reveals that the west path is a dead end.",
        outcomes: [
            {
                outcomeType: "",
                targetNr: ,
                content: "",
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
            name: "",
            regionType: "",
            description: "",
            imageUrl: "images/shadow/regions/.png",
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
            name: "Excavation Site",
            regionType: "CONSTRUCTION_SITE",
            description: "An excavation site in the Koneshi Mountains delving the Tomb of Majhan. Commanded by Darklord Haakon in order to find the \"Book of the Magnakai\"",
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
            name: "",
            regionType: "",
            description: "",
            imageUrl: "images/shadow/regions/.png",
        },
        content:
            "",
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
                outcomeType: "",
                targetNr: ,
                content: "",
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
            name: "",
            regionType: "",
            description: "",
            imageUrl: "images/shadow/regions/.png",
        },
        content:
            "",
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
                outcomeType: "",
                targetNr: ,
                content: "",
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
            name: "",
            regionType: "",
            description: "",
            imageUrl: "images/shadow/regions/.png",
        },
        content:
            "",
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
            name: "",
            regionType: "",
            description: "",
            imageUrl: "images/shadow/regions/.png",
        },
        content:
            "",
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
                outcomeType: "",
                targetNr: ,
                content: "",
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
        ]
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
            name: "",
            regionType: "",
            description: "",
            imageUrl: "images/shadow/regions/.png",
        },
        content:
            "",
        outcomes: [
            {
                outcomeType: "",
                targetNr: ,
                content: "",
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
            description: "A large chamber within the Tomb of the Majhan. It is dimly lit and thick dust covers the marble floor. At the side of the chamber that is opposed to the large stone door there is a rough stone throne.",
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
                content: "If you wish to try to move to a new hiding place, under cover of the swirling dust, turn to",
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
            name: "",
            regionType: "",
            description: "",
            imageUrl: "images/shadow/regions/.png",
        },
        content:
            "",
        outcomes: [
            {
                outcomeType: "",
                targetNr: ,
                content: "",
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
                    imageUrl: "images/flight/items/blowpipe.png"
                }
            },
            {
                outcomeType: "ITEM",
                targetNr: 325,
                content: "If you possess a Blowpipe and Sleep Dart, turn to",
                item: {
                    code: "SLEEP_DART",
                    name: "Sleep Dart",
                    description: "A dart to be shot with a blowpipe that lets your target fall asleep.",
                    imageUrl: "images/flight/items/sleep_dart.png"
                }
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
            name: "",
            regionType: "",
            description: "",
            imageUrl: "images/shadow/regions/.png",
        },
        content:
            "",
        outcomes: [
            {
                outcomeType: "ABILITY",
                targetNr: 358,
                content: "If you have the Kai Discipline of Sixth Sense, ",
                ability: {
                    abilityType: "SIXTH_SENSE",
                    description: "This skill may warn a Kai Lord of imminent danger. It may also reveal the true purpose of a stranger or strange object encountered in your adventure.",
                }
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 263,
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
            name: "",
            regionType: "",
            description: "",
            imageUrl: "images/shadow/regions/.png",
        },
        content:
            "",
        outcomes: [
            {
                outcomeType: "",
                targetNr: ,
                content: "",
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
            name: "",
            regionType: "",
            description: "",
            imageUrl: "images/shadow/regions/.png",
        },
        content:
            "",
        outcomes: [
            {
                outcomeType: "",
                targetNr: ,
                content: "",
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
            name: "",
            regionType: "",
            description: "",
            imageUrl: "images/shadow/regions/.png",
        },
        content:
            "",
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
                outcomeType: "",
                targetNr: ,
                content: "",
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
            name: "",
            regionType: "",
            description: "",
            imageUrl: "images/shadow/regions/.png",
        },
        content:
            "",
        outcomes: [
            {
                outcomeType: "",
                targetNr: ,
                content: "",
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
            name: "",
            regionType: "",
            description: "",
            imageUrl: "images/shadow/regions/.png",
        },
        content:
            "",
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
                    max: 2
                }
            },
            {
                outcomeType: "RANDOM",
                targetNr: 312,
                content: "If it is 3–9, turn to",
                intervall: {
                    min: 3,
                    max: 9
                }
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
            description: "An excavation site in the Koneshi Mountains delving the Tomb of Majhan. Commanded by Darklord Haakon in order to find the \"Book of the Magnakai\"",
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
                    imageUrl: "images/shadow/creatures/drakkarim_sentry.png" 
                }
            }
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
                }
            },
            {
                outcomeType: "RANDOM",
                targetNr: 398,
                content: "If your total is now 0–3, turn to",
                intervall: {
                    min: 4,
                    max: 10,
                }
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
        ]
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
            name: "",
            regionType: "",
            description: "",
            imageUrl: "images/shadow/regions/.png",
        },
        content:
            "",
        outcomes: [
            {
                outcomeType: "",
                targetNr: ,
                content: "",
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
            name: "",
            regionType: "",
            description: "",
            imageUrl: "images/shadow/regions/.png",
        },
        content:
            "",
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
            name: "",
            regionType: "",
            description: "",
            imageUrl: "images/shadow/regions/.png",
        },
        content:
            "",
        outcomes: [
            {
                outcomeType: "",
                targetNr: ,
                content: "",
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
            name: "",
            regionType: "",
            description: "",
            imageUrl: "images/shadow/regions/.png",
        },
        content:
            "",
        outcomes: [
            {
                outcomeType: "",
                targetNr: ,
                content: "",
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
            name: "",
            regionType: "",
            description: "",
            imageUrl: "images/shadow/regions/.png",
        },
        content:
            "",
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
            name: "Throne Chamber",
            regionType: "ROOM",
            description: "A large chamber within the Tomb of the Majhan. It is dimly lit and thick dust covers the marble floor. At the side of the chamber that is opposed to the large stone door there is a rough stone throne.",
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
            name: "",
            regionType: "",
            description: "",
            imageUrl: "images/shadow/regions/.png",
        },
        content:
            "",
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
            name: "",
            regionType: "",
            description: "",
            imageUrl: "images/shadow/regions/.png",
        },
        content:
            "",
        outcomes: [
            {
                outcomeType: "",
                targetNr: ,
                content: "",
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
            name: "",
            regionType: "",
            description: "",
            imageUrl: "images/shadow/regions/.png",
        },
        content:
            "",
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
            name: "",
            regionType: "",
            description: "",
            imageUrl: "images/shadow/regions/.png",
        },
        content:
            "",
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
                targetNr: 277,
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
            name: "",
            regionType: "",
            description: "",
            imageUrl: "images/shadow/regions/.png",
        },
        content:
            "",
        outcomes: [
            {
                outcomeType: "",
                targetNr: ,
                content: "",
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
            name: "",
            regionType: "",
            description: "",
            imageUrl: "images/shadow/regions/.png",
        },
        content:
            "",
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
        ]
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
            name: "",
            regionType: "",
            description: "",
            imageUrl: "images/shadow/regions/.png",
        },
        content:
            "",
        outcomes: [
            {
                outcomeType: "",
                targetNr: ,
                content: "",
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
            name: "",
            regionType: "",
            description: "",
            imageUrl: "images/shadow/regions/.png",
        },
        content:
            "",
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
                outcomeType: "",
                targetNr: ,
                content: "",
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
            description: "A large chamber within the Tomb of the Majhan. It is dimly lit and thick dust covers the marble floor. At the side of the chamber that is opposed to the large stone door there is a rough stone throne.",
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
                    name : "Sommerswerd",
                    itemType: "WEAPON",
                    description : "Sommerswerd",
                    weight: "MEDIUM",
                    imageUrl : "images/flight/items/sommerswerd.png"
                }
            }
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
                }
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 369,
                content: "If you do not possess this Kai Discipline, turn to",
            },
        ]
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
                content: "If you wish to approach her and ask where Tipasa the Wanderer may be found, turn to",
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
    },{
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
            description: "A large chamber within the Tomb of the Majhan. It is dimly lit and thick dust covers the marble floor. At the side of the chamber that is opposed to the large stone door there is a rough stone throne.",
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
                }
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 400,
                content: "If you win the combat, turn to",
            },
        ],
    },{
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
            name: "",
            regionType: "",
            description: "",
            imageUrl: "images/shadow/regions/.png",
        },
        content:
            "",
        outcomes: [
            {
                outcomeType: "",
                targetNr: ,
                content: "",
            },
        ],
    },{
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
            name: "",
            regionType: "",
            description: "",
            imageUrl: "images/shadow/regions/.png",
        },
        content:
            "",
        outcomes: [
            {
                outcomeType: "",
                targetNr: ,
                content: "",
            },
        ],
    },{
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
            name: "",
            regionType: "",
            description: "",
            imageUrl: "images/shadow/regions/.png",
        },
        content:
            "",
        outcomes: [
            {
                outcomeType: "",
                targetNr: ,
                content: "",
            },
        ],
    },{
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
            name: "",
            regionType: "",
            description: "",
            imageUrl: "images/shadow/regions/.png",
        },
        content:
            "",
        outcomes: [
            {
                outcomeType: "",
                targetNr: ,
                content: "",
            },
        ],
    },{
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
            name: "",
            regionType: "",
            description: "",
            imageUrl: "images/shadow/regions/.png",
        },
        content:
            "",
        outcomes: [
            {
                outcomeType: "",
                targetNr: ,
                content: "",
            },
        ],
    },{
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
            name: "",
            regionType: "",
            description: "",
            imageUrl: "images/shadow/regions/.png",
        },
        content:
            "",
        outcomes: [
            {
                outcomeType: "",
                targetNr: ,
                content: "",
            },
        ],
    },{
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
            name: "",
            regionType: "",
            description: "",
            imageUrl: "images/shadow/regions/.png",
        },
        content:
            "",
        outcomes: [
            {
                outcomeType: "",
                targetNr: ,
                content: "",
            },
        ],
    },{
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
                }
            }
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
                content: "If the fight continues to a fourth round of combat, do not resolve it. Instead, turn immediately to",
            },
        ],
    },{
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
                content: "If you not wish to purchase a cup of jala or do not have any gold, you must bid farewell and leave the eating-house. Turn to",
            },
        ],
    },{
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
            name: "",
            regionType: "",
            description: "",
            imageUrl: "images/shadow/regions/.png",
        },
        content:
            "",
        outcomes: [
            {
                outcomeType: "",
                targetNr: ,
                content: "",
            },
        ],
    },{
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
            name: "",
            regionType: "",
            description: "",
            imageUrl: "images/shadow/regions/.png",
        },
        content:
            "",
        outcomes: [
            {
                outcomeType: "",
                targetNr: ,
                content: "",
            },
        ],
    },{
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
    },{
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
            name: "",
            regionType: "",
            description: "",
            imageUrl: "images/shadow/regions/.png",
        },
        content:
            "",
        outcomes: [
            {
                outcomeType: "",
                targetNr: ,
                content: "",
            },
        ],
    },{
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
    },{
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
                }
            },
            {
                eventType: "CHANGE_GOLD_AMOUNT_EVENT",
                ranking: 2,
                amount: 5
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
                }
            },
            {
                eventType: "CHANGE_GOLD_AMOUNT_EVENT",
                ranking: 4,
                amount: 3
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
                }
            },
            {
                eventType: "CHANGE_GOLD_AMOUNT_EVENT",
                ranking: 6,
                amount: 9
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
    },{
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
            description: "A large chamber within the Tomb of the Majhan. It is dimly lit and thick dust covers the marble floor. At the side of the chamber that is opposed to the large stone door there is a rough stone throne.",
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
    },{
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
            name: "",
            regionType: "",
            description: "",
            imageUrl: "images/shadow/regions/.png",
        },
        content:
            "",
        outcomes: [
            {
                outcomeType: "",
                targetNr: ,
                content: "",
            },
        ],
    },{
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
            name: "",
            regionType: "",
            description: "",
            imageUrl: "images/shadow/regions/.png",
        },
        content:
            "",
        outcomes: [
            {
                outcomeType: "",
                targetNr: ,
                content: "",
            },
        ],
    },{
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
            name: "",
            regionType: "",
            description: "",
            imageUrl: "images/shadow/regions/.png",
        },
        content:
            "",
        outcomes: [
            {
                outcomeType: "",
                targetNr: ,
                content: "",
            },
        ],
    },{
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
    },{
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
    },{
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
            name: "",
            regionType: "",
            description: "",
            imageUrl: "images/shadow/regions/.png",
        },
        content:
            "",
        outcomes: [
            {
                outcomeType: "",
                targetNr: ,
                content: "",
            },
        ],
    },{
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
                content: "If you wish to continue along the street towards the Dougga Market, turn to",
            },
        ],
    },{
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
            name: "",
            regionType: "",
            description: "",
            imageUrl: "images/shadow/regions/.png",
        },
        content:
            "",
        outcomes: [
            {
                outcomeType: "",
                targetNr: ,
                content: "",
            },
        ],
    },{
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
            name: "",
            regionType: "",
            description: "",
            imageUrl: "images/shadow/regions/.png",
        },
        content:
            "",
        outcomes: [
            {
                outcomeType: "",
                targetNr: ,
                content: "",
            },
        ],
    },{
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
            description: "A large chamber within the Tomb of the Majhan. It is dimly lit and thick dust covers the marble floor. At the side of the chamber that is opposed to the large stone door there is a rough stone throne.",
            imageUrl: "images/shadow/regions/throne_chamber.png",
        },
        content:
            "The terrible pain racks your body, making your muscles twist and contort in spasms of pain. You scream for the agony to cease. Lose 6 ENDURANCE points.",
        events: [
            {
                eventType: "CHANGE_ENDURANCE_EVENT",
                ranking: 1,
                amount: -6
            },
        ],
        outcomes: [
            {
                outcomeType: "DEFAULT",
                targetNr: 223,
                content: "If you are still alive after the psychic ordeal, turn to",
            },
        ],
    },{
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
            name: "",
            regionType: "",
            description: "",
            imageUrl: "images/shadow/regions/.png",
        },
        content:
            "",
        outcomes: [
            {
                outcomeType: "",
                targetNr: ,
                content: "",
            },
        ],
    },{
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
            name: "",
            regionType: "",
            description: "",
            imageUrl: "images/shadow/regions/.png",
        },
        content:
            "",
        outcomes: [
            {
                outcomeType: "",
                targetNr: ,
                content: "",
            },
        ],
    },{
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
                item:[
                    {
                        code : "CRYSTAL_STAR_PENDANT",
                        name : "Crystal star pendant",
                        description : "Crystal star pendant",
                        imageUrl : "images/flight/items/crystal_star_pendant.png"
                    }
                ]
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 294,
                content: "If you do not have this Special Item, turn to",
            },
        ],
    },{
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
            name: "",
            regionType: "",
            description: "",
            imageUrl: "images/shadow/regions/.png",
        },
        content:
            "",
        outcomes: [
            {
                outcomeType: "",
                targetNr: ,
                content: "",
            },
        ],
    },{
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
    },{
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
            name: "",
            regionType: "",
            description: "",
            imageUrl: "images/shadow/regions/.png",
        },
        content:
            "",
        outcomes: [
            {
                outcomeType: "",
                targetNr: ,
                content: "",
            },
        ],
    },{
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
            name: "",
            regionType: "",
            description: "",
            imageUrl: "images/shadow/regions/.png",
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
                }
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 206,
                content: "If you wish to enter the alley and knock at the door, turn to",
            },{
                outcomeType: "DEFAULT",
                targetNr: 346,
                content: "If you wish to continue along the street, turn to",
            },
        ],
    },{
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
            name: "",
            regionType: "",
            description: "",
            imageUrl: "images/shadow/regions/.png",
        },
        content:
            "",
        outcomes: [
            {
                outcomeType: "",
                targetNr: ,
                content: "",
            },
        ],
    },{
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
            name: "",
            regionType: "",
            description: "",
            imageUrl: "images/shadow/regions/.png",
        },
        content:
            "",
        outcomes: [
            {
                outcomeType: "",
                targetNr: ,
                content: "",
            },
        ],
    },{
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
            name: "",
            regionType: "",
            description: "",
            imageUrl: "images/shadow/regions/.png",
        },
        content:
            "",
        outcomes: [
            {
                outcomeType: "",
                targetNr: ,
                content: "",
            },
        ],
    },{
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
            description: "A large chamber within the Tomb of the Majhan. It is dimly lit and thick dust covers the marble floor. At the side of the chamber that is opposed to the large stone door there is a rough stone throne.",
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
    },{
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
            name: "",
            regionType: "",
            description: "",
            imageUrl: "images/shadow/regions/.png",
        },
        content:
            "",
        outcomes: [
            {
                outcomeType: "",
                targetNr: ,
                content: "",
            },
        ],
    },{
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
            name: "",
            regionType: "",
            description: "",
            imageUrl: "images/shadow/regions/.png",
        },
        content:
            "",
        outcomes: [
            {
                outcomeType: "",
                targetNr: ,
                content: "",
            },
        ],
    },{
        /*
         * -- --------------------------------------------------------
         * --  Storysection 393
         * -- --------------------------------------------------------
         */
        sectionType: "STORY_SECTION",
        sectionNr: 393,
        book: {
            name: "Shadow on the Sand",
            imageUrl: "images /shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk",
        },
        region: {
            name: "",
            regionType: "",
            description: "",
            imageUrl: "images/shadow/regions/.png",
        },
        content:
            "",
        outcomes: [
            {
                outcomeType: "",
                targetNr: ,
                content: "",
            },
        ],
    },{
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
            name: "",
            regionType: "",
            description: "",
            imageUrl: "images/shadow/regions/.png",
        },
        content:
            "",
        outcomes: [
            {
                outcomeType: "",
                targetNr: ,
                content: "",
            },
        ],
    },{
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
            description: "an old tomb where Darklord Haakon hopes to find the \"Book of the Magnakai\"",
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
                    imageUrl: "images/shadow/items/prism.png"
                }
            },
            {
                outcomeType: "ITEM",
                targetNr: 245,
                content: "If you possess a Blue Stone Triangle, turn to",
                item: {
                    code: "BLUE_STONE_TRIANGLE",
                    name: "Blue Stone Triangle",
                    description: "a blue triangle made out of stone",
                    imageUrl: "images/shadow/items/blue_stone_triangle.png"
                }
            },
            {
                outcomeType: "DEFAULT",
                targetNr: 298,
                content: "If you have neither of these items, turn to",
            }
        ],
    },{
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
            name: "",
            regionType: "",
            description: "",
            imageUrl: "images/shadow/regions/.png",
        },
        content:
            "",
        outcomes: [
            {
                outcomeType: "",
                targetNr: ,
                content: "",
            },
        ],
    },{
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
            name: "",
            regionType: "",
            description: "",
            imageUrl: "images/shadow/regions/.png",
        },
        content:
            "",
        outcomes: [
            {
                outcomeType: "",
                targetNr: ,
                content: "",
            },
        ],
    },{
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
    },{
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
    },{
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
        events:[
            {
                eventType: "MISSION_ACCOMPLISHED_EVENT",
                ranking: 1,
            },
        ],
    }
]);

db.lw5.find();
