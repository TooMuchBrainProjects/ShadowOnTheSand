{
        /*
         * -- --------------------------------------------------------
         * --  Storysection 1
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 1,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Habour of Barrakeesh",
            regionType: "HARBOUR",
            description:
                "The harbour of Barrakeesh is deserted save for a handful of citizens clad in black, and the only sound that greets you is the toll of a funeral bell, echoing through the harbour on this day of mourning.",
            imageUrl: "images/shadow/regions/barrakeesh_harbour.png",
         },
         content : "For twenty-five days, the Vassagonian galley sails on a steady course for its home port of Barrakeesh, with only a brief stop at the Durenese harbour of Port Bax to break a safe but monotonous voyage.  You use your time aboard the ship to good purpose, learning the Vassagonian language from the ship’s crew. They are only too eager to teach you, asking only in return tales of your adventures in the Lastlands—for many of the sailors, these are the most exciting stories they have ever heard. By the time you reach Barrakeesh, you have both mastered their language and won their respect. It is early afternoon when the ramparts of the desert capital are first sighted on the horizon. You push your way through the cheering crew, and join the envoy at the prow of the ship. Beaming with pride, he hands you a telescope and invites you to view the land of his birth. The sight is indeed breathtaking. You stare in fascination at the golden domes, minarets, and green-tiled roofs shimmering beneath the desert sun, and marvel at the splendour of the Grand Palace, which dominates this magnificent city. Then you notice that from every golden turret of the palace flutters a long, black pennant. You ask the envoy of the meaning of the black flags. Horror floods across his face as he snatches the telescope from your hands. ‘By the spirit of the Majhan! He is dead…The Zakhan is dead!’ As the bad news spreads through the ship, you pray that the peace treaty will be signed and honoured by the Zakhan’s successor. However, the envoy is less than hopeful.The harbour of Barrakeesh is deserted save for a handful of citizens clad in black, and the only sound that greets you is the toll of a funeral bell, echoing through the harbour on this day of mourning. Then a horse-drawn carriage enters the harbour square, escorted by the cavalry of the Palace Guard. It halts, and a dour man in turquoise robes steps out to meet you.‘A thousand greetings, Lone Wolf, I am Maouk, and I welcome you to our city on behalf of my master, his most sublime magnificence, Zakhan Kimah.’The envoy gasps upon hearing the name of the new Zakhan. He turns to speak, his eyes wild with fear. ‘It is a trap, you must…’His warning is cut short by the blade of Maouk’s dagger. Suddenly, scores of black-clad warriors emerge from the shadows; they are Sharnazim, élite Vassagonian bodyguards. They close in, surrounding you on every side. You must act quickly if you are to survive this deadly trap. :  ",
            outcomes: [
            {
                outcomeType : "DEFAULT",
                targetNr : 36,
                content : "If you wish to stand and fight against these overwhelming odds, turn to"
            }, {
                outcomeType : "DEFAULT",
                targetNr : 176,
                content : "If you wish to surrender to Maouk and his warriors, turn to"
            }, {
                outcomeType : "DEFAULT",
                targetNr : 104,
                content : "If you wish to run back to the galley, turn to"
            }
         ]
    },{
        /*
         * -- --------------------------------------------------------
         * --  Storysection 2
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 2,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Habour of Barrakeesh",
            regionType: "HARBOUR",
            description:
                "The harbour of Barrakeesh is deserted save for a handful of citizens clad in black, and the only sound that greets you is the toll of a funeral bell, echoing through the harbour on this day of mourning.",
            imageUrl: "images/shadow/regions/barrakeesh_harbour.png",
         },
         content : "Breathless from the exertion of combat, you step back as the Elix finally collapses and dies. Slowly, its glass-green eyes mist over and become opaque like hard, cold jadin. Around the creature’s blood-spattered throat hangs a Gold Key on a chain. You quickly discover that the Gold Key opens the steel door of a strongroom at the far end of apothecary.

        High upon a shelf, just inside the door, you find a small box that contains what you seek—the Oede herb. Within seconds of pressing the beautiful golden leaves to your wounded shoulder, a tingling sensation engulfs your whole arm. The numbness soon fades, and both your arm and shoulder are free of the horrific Limbdeath microbes.

        Sufficient Oede herb remains in the box for one further application. It is a powerful substance that can be used against many deadly diseases or alternatively can be used to restore 10 ENDURANCE points if swallowed after combat. If you wish to keep the Oede herb, mark it on your Action Chart as a Backpack Item. You should also restore the COMBAT SKILL points that were temporarily lost due to Limbdeath.

        After dragging the dead Elix into the strongroom, you lock the steel door from the inside. You notice that there are in fact two doors to the strongroom: the one by which you entered and a smaller door set into the opposite wall. The Gold Key opens the lock of the new door, which leads to a narrow staircase beyond, dimly lit by flaring torches in wall brackets.

        The climb is steep and arduous. You suspect that these steps are part of a secret route to the strongroom, and your suspicions are only confirmed when you arrive at what appears to be a dead end. A closer examination reveals a narrow bronze door set flush to the wall, plain in appearance except for a tiny key hole close to the floor. As you insert and twist the Gold Key, you are quietly confident that the bronze door will open.",


        events : [
            {
                eventType : "ACQUIRE_ITEM_EVENT",
                ranking : 1,
                item : {
                    name : "Sufficient Oede",
                    itemType : "HERB",
                    description : "golden leaves which heal many deadly diseases or restore 10 ENDURANCE if swallowed after combat",
                    weight : "SMALL",
                    imageUrl : "images/flight/items/oedeherb.png"
                }
            }],
        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 67,
                content : "Turn to"
            }
         ]
    },{
        /*
         * -- --------------------------------------------------------
         * --  Storysection 3
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 2,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Habour of Barrakeesh",
            regionType: "HARBOUR",
            description:
                "The harbour of Barrakeesh is deserted save for a handful of citizens clad in black, and the only sound that greets you is the toll of a funeral bell, echoing through the harbour on this day of mourning.",
            imageUrl: "images/shadow/regions/barrakeesh_harbour.png",
         },
         content : "You search the bodies of the three vestibule guards and uncover the following items:

            4 Gold Crowns
            1 Dagger
            1 Sword
            1 Potion of Alether (Increases your COMBAT SKILL by 2 points for the duration of one fight.)
            You may also take the Blowpipe and the remaining Sleep Dart. If you decide to take them, mark them on your Action Chart as Backpack Items.

            In the robe of the dead blowpipe warrior, you find a small piece of parchment upon which is written today’s date and the number 67. A smile creeps across your face as you realize that this is the number that will open the bronze door.

            You hold your breath and twist the dial!",


        events : [
            {
                eventType : "ACQUIRE_ITEM_EVENT",
                ranking : 1,
                item : {
                    name : "Dagger",
                    itemType : "WEAPON",
                    description : "knife which can also be used for combat",
                    weight : "SMALL",
                    imageUrl : "images/flight/items/dagger.png"
                }
            },{
                eventType : "ACQUIRE_ITEM_EVENT",
                ranking : 2,
                item : {
                    name : "Sword",
                    itemType : "WEAPON",
                    description : "Great Weapon to stab, slash or cleave your enemies. Makes great wall deco",
                    weight : "MEDIUM",
                    imageUrl : "images/flight/items/sword.png"
                }
            },{
                eventType : "ACQUIRE_ITEM_EVENT",
                ranking : 3,
                item : {
                    name : "Potion of Alether",
                    itemType : "POTION",
                    description : "Increases your COMBAT SKILL by 2 points for the duration of one fight.",
                    weight : "MEDIUM",
                    imageUrl : "images/flight/items/sword.png"
                }
            },{
                eventType : "ACQUIRE_ITEM_EVENT",
                ranking : 4,
                item : {
                    name : "Blowpipe",
                    itemType : "WEAPON",
                    description : "Weapon used for shooting small projectiles by fource of breath",
                    weight : "MEDIUM",
                    imageUrl : "images/flight/items/blowpipe.png"
                }
            },{
                eventType : "ACQUIRE_ITEM_EVENT",
                ranking : 3,
                item : {
                    name : "Sleep Dart",
                    itemType : "WEAPON",
                    description : "projectile which causes victim to fall asleep",
                    weight : "SMALL",
                    imageUrl : "images/flight/items/sleepdart.png"
                }
            }],
        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 67,
                content : "Turn to"
            }
         ]
    },{
        /*
         * -- --------------------------------------------------------
         * --  Storysection 4
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 4,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Habour of Barrakeesh",
            regionType: "HARBOUR",
            description:
                "The harbour of Barrakeesh is deserted save for a handful of citizens clad in black, and the only sound that greets you is the toll of a funeral bell, echoing through the harbour on this day of mourning.",
            imageUrl: "images/shadow/regions/barrakeesh_harbour.png",
         },
         content : "You stoop to grasp the sword, but as your fingers close around the hilt, the second guard attacks.

            Palace Gaoler: COMBAT SKILL 14   ENDURANCE 21

            Ignore all ENDURANCE points lost by the enemy in the first round of combat, for you can only attempt to parry his blow.",


        events : [],
        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 165,
                content : "If you win and the fight lasts for 4 rounds of combat or less, turn to"
            },{
                outcomeType : "DEFAULT",
                targetNr : 180,
                content : "If you win and the fight lasts longer than 4 rounds of combat, turn to"
            }

         ]
    },{
        /*
         * -- --------------------------------------------------------
         * --  Storysection 5
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 5,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Habour of Barrakeesh",
            regionType: "HARBOUR",
            description:
                "The harbour of Barrakeesh is deserted save for a handful of citizens clad in black, and the only sound that greets you is the toll of a funeral bell, echoing through the harbour on this day of mourning.",
            imageUrl: "images/shadow/regions/barrakeesh_harbour.png",
         },
         content : "You are halfway round the tower when a section of the sandstone ledge suddenly gives way beneath your feet. Desperately you claw at the masonry, but the stone is old and disintegrates in your hands. You topple backwards and fall to your doom in the palace gardens below.",
         outcomes:[
            {
                outcomeType : "MISSION_FAILED",
                targetNr: -1,
                content : "Your escape and your life end here."
            }
         ]
    },{
        /*
         * -- --------------------------------------------------------
         * --  Storysection 6
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 6,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Habour of Barrakeesh",
            regionType: "HARBOUR",
            description:
                "The harbour of Barrakeesh is deserted save for a handful of citizens clad in black, and the only sound that greets you is the toll of a funeral bell, echoing through the harbour on this day of mourning.",
            imageUrl: "images/shadow/regions/barrakeesh_harbour.png",
         },
         content : "The oil is made from the fruit of the larnuma tree. It has a soothing and relaxing effect when rubbed into the skin.",
        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 103,
                content : "If you choose to rub the larnuma oil into your skin, turn to"
            },{
                outcomeType : "DEFAULT",
                targetNr : 71,
                content : "If you decide not to use the oil, turn to"
            }

         ]
    },{
        /*
         * -- --------------------------------------------------------
         * --  Storysection 7
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 7,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Habour of Barrakeesh",
            regionType: "HARBOUR",
            description:
                "The harbour of Barrakeesh is deserted save for a handful of citizens clad in black, and the only sound that greets you is the toll of a funeral bell, echoing through the harbour on this day of mourning.",
            imageUrl: "images/shadow/regions/barrakeesh_harbour.png",
         },
         content : "You release the bowstring, and the arrow arcs through the air towards your target. However, you have misjudged the range, and it falls short and shatters on the cobblestones of the harbour square, alerting Maouk’s men to your whereabouts. You prepare to take flight, but the small boat is quickly surrounded, and you are forced to surrender. As the black-clad Sharnazim drag you along the harbour wall, you fear that your life is about to come to a sudden end.",


        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 176,
                content : "Turn to"
            }
         ]
    }
,{
        /*
         * -- --------------------------------------------------------
         * --  Storysection 8
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 8,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Habour of Barrakeesh",
            regionType: "HARBOUR",
            description:
                "The harbour of Barrakeesh is deserted save for a handful of citizens clad in black, and the only sound that greets you is the toll of a funeral bell, echoing through the harbour on this day of mourning.",
            imageUrl: "images/shadow/regions/barrakeesh_harbour.png",
         },
         content : "You channel all your Kai skill into detecting the number that will open the door; it is a strenuous task, and one that demands great concentration. Gradually, the image of two numbers—six and seven—begin to form in your mind. The image is hazy, and you’re not sure if the number is sixty-seven or seventy-six. You are exhausted by your efforts, and they have cost you 2 ENDURANCE points. Deduct these from your current ENDURANCE points total before choosing between the two possibilities.",


        events : [
        {
            eventType : "CHANGE_ENDURANCE_EVENT",
            ranking : 1,
            amount : -2
        }],
        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 67,
                content : "If you decide to choose sixty-seven, turn to"
            },{
                outcomeType : "DEFAULT",
                targetNr :  ,
                content : "If you decide to choose seventy-six, turn to"
            }

         ]
    },{
        /*
         * -- --------------------------------------------------------
         * --  Storysection 9
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 9,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Habour of Barrakeesh",
            regionType: "HARBOUR",
            description:
                "The harbour of Barrakeesh is deserted save for a handful of citizens clad in black, and the only sound that greets you is the toll of a funeral bell, echoing through the harbour on this day of mourning.",
            imageUrl: "images/shadow/regions/barrakeesh_harbour.png",
         },
         content : "The guard begins to cough. He pleads with you to slacken your grip or he will choke to death. You ask him one more question: does he know where your confiscated equipment is? He says he does not know. Then, suddenly, he elbows you in the chest and breaks free. You are winded, but you are determined to stop him from escaping.",
        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 78,
                content : "Turn to"
            }
         ]
    },{
        /*
         * -- --------------------------------------------------------
         * --  Storysection 10
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 10,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Habour of Barrakeesh",
            regionType: "HARBOUR",
            description:
                "The harbour of Barrakeesh is deserted save for a handful of citizens clad in black, and the only sound that greets you is the toll of a funeral bell, echoing through the harbour on this day of mourning.",
            imageUrl: "images/shadow/regions/barrakeesh_harbour.png",
         },
         content : "The Sharnazim surround you and drag you to your feet. They take your Backpack, your Weapons, your Gold Crowns, and all your Special Items. (Make all the necessary adjustments to your Action Chart, but note your lost possessions elsewhere in case you find them again later.) Your hands are tied with wire, and you are frogmarched back to the plaza. A carriage is waiting. As you are thrown in head-first, Maouk climbs aboard and, gloating with triumph, gives the command: ‘Back to the Grand Palace. The Zakhan awaits his prize.’ You struggle to free yourself from the wire that cuts into your wrists, but Maouk is quick to see the danger. He grabs your arm and forces a dart into your skin. As sleep numbs all your senses, the last sound you hear is Maouk’s wicked laughter.",


        events : [
        {
                eventType : "DROP_ALL_WEAPONS_EVENT",
                ranking : 1
            }, {
                eventType : "DROP_BACKPACK_EVENT",
                ranking : 2
            }, {
                eventType : "DROP_ALL_ITEMS_EVENT",
                ranking : 3
            }],
        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 67,
                content : "If you decide to choose sixty-seven, turn to"
            },{
                outcomeType : "DEFAULT",
                targetNr : 76,
                content : "If you decide to choose seventy-six, turn to"
            }

         ]
    },{
        /*
         * -- --------------------------------------------------------
         * --  Storysection 11
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 11,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Habour of Barrakeesh",
            regionType: "HARBOUR",
            description:
                "The harbour of Barrakeesh is deserted save for a handful of citizens clad in black, and the only sound that greets you is the toll of a funeral bell, echoing through the harbour on this day of mourning.",
            imageUrl: "images/shadow/regions/barrakeesh_harbour.png",
         },
         content : "To reach the north door without being seen, you must work your way carefully around the chamber, dodging from one pillar to the next.

        Pick a number from the Random Number Table. If you possess the Kai Discipline of Camouflage or Hunting, deduct 2 from the number you have picked.",

        outcomes:[
            {
                outcomeType : "RANDOM",
                targetNr : 167,
                intervall : {
                    min : -2,
                    max : 2
                },
                content : "If your total is now −2–2, turn to"
            },{
                outcomeType : "RANDOM",
                targetNr :  190,
                intervall : {
                    min : 3,
                    max : 9
                }
                content : "If your total is now 3–9, turn to"
            }

         ]
    },{
        /*
         * -- --------------------------------------------------------
         * --  Storysection 12
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 12,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Habour of Barrakeesh",
            regionType: "HARBOUR",
            description:
                "The harbour of Barrakeesh is deserted save for a handful of citizens clad in black, and the only sound that greets you is the toll of a funeral bell, echoing through the harbour on this day of mourning.",
            imageUrl: "images/shadow/regions/barrakeesh_harbour.png",
         },
         content : "You are in underwater combat with a deadly salt water scavenger.

            Bloodlug: COMBAT SKILL 17   ENDURANCE 11

            Deduct 2 points from your COMBAT SKILL due to the speed of its attack. This creature is immune to Mindblast.

            [Illustration I]",


        events : [
            {
                eventType : "COMBAT",
                ranking : 1,
                creature : {
                    name : "Salt water scavenger",
                    combatSkill : 17,
                    endurance : 11,
                    imageUrl : "images/flight/creatures/swscavenger.png"
                }
            }
         ],
        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 95,
                content : "If you win the fight, turn to "
            }

         ]
    },{
        /*
         * -- --------------------------------------------------------
         * --  Storysection 13
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 13,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Habour of Barrakeesh",
            regionType: "HARBOUR",
            description:
                "The harbour of Barrakeesh is deserted save for a handful of citizens clad in black, and the only sound that greets you is the toll of a funeral bell, echoing through the harbour on this day of mourning.",
            imageUrl: "images/shadow/regions/barrakeesh_harbour.png",
         },
         content : "You force yourself along the canal, which is thick with green and black scum, clotted with a hideous variety of filth and debris. Huge cockroaches crawl in and out of the cracked ceiling. The vile water is waist deep, and as the surface scum breaks, a cloud of putrid gas wafts up and engulfs you. The stench is appalling; choking, you cover your mouth and nose with the edge of your Kai cloak. A sudden splash warns you that Maouk’s men are not far behind so you quicken your step.

        You have waded only a few yards when you hear a soft rustling noise. You freeze. It is the unmistakable sound of scaled skin slithering softly over stone. Fear turns to blind terror as you catch your first glimpse of the creature now advancing towards you.",

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 187,
                ability : {
                    abilityType : "ANIMAL_KINMANSHIP",
                    description : "This skill enables a Kai Lord to communicate with some animals and to be able to guess the intentions of others."
                },
                content : "If you have the Kai Discipline of Animal Kinship, turn to "
            },{
                outcomeType : "DEFAULT",
                targetNr :  110,
                content : "If you do not possess this skill, turn to "
            }

         ]
    },{
        /*
         * -- --------------------------------------------------------
         * --  Storysection 14
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 14,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Habour of Barrakeesh",
            regionType: "HARBOUR",
            description:
                "The harbour of Barrakeesh is deserted save for a handful of citizens clad in black, and the only sound that greets you is the toll of a funeral bell, echoing through the harbour on this day of mourning.",
            imageUrl: "images/shadow/regions/barrakeesh_harbour.png",
         },
         content : "You step into a perfect hemisphere. The walls of the chamber curve smoothly into the ceiling, where a small window casts a splash of light across the floor. There is a large circular dais in the centre of the room laden with incense burners, decanters, quilts, scrolls, cloaks, urns, and all kinds of fruit and sweetmeats. A drawer catches your eye, protruding from beneath the lip of the dais; you recognize the contents. You have found your confiscated equipment. Restore to your Action Chart all the Backpack Items, Special Items, Weapons, and Gold Crowns you lost when you were imprisoned.

        Elated by your discovery, you resolve to escape from the Grand Palace as quickly as possible. There is only one other door, apart from the one by which you entered the chamber, which is set into the north wall.",

/////////////////////////////////////////Schneider fragen was zu tun is//////////////////////////////////////////////////////////////////////////////////////

        events : [
        {
                eventType : "DROP_ALL_WEAPONS_EVENT",
                ranking : 1
            }, {
                eventType : "DROP_BACKPACK_EVENT",
                ranking : 2
            }, {
                eventType : "DROP_ALL_ITEMS_EVENT",
                ranking : 3
            }],
        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 58,
                content : "If you wish to leave the chamber, turn to"
            },{
                outcomeType : "DEFAULT",
                targetNr :  131,
                content : "If you wish to search the chamber for useful items, turn to "
            }

         ]
    },{
        /*
         * -- --------------------------------------------------------
         * --  Storysection 15
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 15,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Habour of Barrakeesh",
            regionType: "HARBOUR",
            description:
                "The harbour of Barrakeesh is deserted save for a handful of citizens clad in black, and the only sound that greets you is the toll of a funeral bell, echoing through the harbour on this day of mourning.",
            imageUrl: "images/shadow/regions/barrakeesh_harbour.png",
         },
         content : "The tunnel is dark and shadowy. Much of it is in a poor state of repair, and many cracks and fissures scar the walls. You must search for one large enough in which to hide. Pick a number from the Random Number Table. If you have reached the Kai rank of Guardian or higher, deduct 1 from the number you have picked.",

        outcomes:[
            {
                outcomeType : "RANDOM",
                targetNr : 151,
                intervall : {
                    min : -1,
                    max : 7
                },
                content : "If your total is now −1–7, turn to"
            },{
                outcomeType : "RANDOM",
                targetNr :  175,
                intervall : {
                    min : 8,
                    max : 9
                },
                content : "If your total is now 8–9, turn to"
            }

         ]
    },{
        /*
         * -- --------------------------------------------------------
         * --  Storysection 16
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 16,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Habour of Barrakeesh",
            regionType: "HARBOUR",
            description:
                "The harbour of Barrakeesh is deserted save for a handful of citizens clad in black, and the only sound that greets you is the toll of a funeral bell, echoing through the harbour on this day of mourning.",
            imageUrl: "images/shadow/regions/barrakeesh_harbour.png",
         },
         content : "You rush into the cellar and bolt the door. Pressing your ear to the gnarled timber, you listen intently to the noise of Maouk’s angry soldiers. They have entered the building and it will only be a matter of time before they notice the cellar door. You cast your eyes around the room. It is empty except for a Coil of Rope and a Tinderbox. Then you notice that there is another way out of the small stone room—an iron grille in the centre of the floor. However, the horrible stench rising from it turns your stomach.",

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 51,
                content : "If you wish to leave the cellar by the grille, turn to"
            },{
                outcomeType : "DEFAULT",
                targetNr :  123,
                content : "If you decide to stay in the cellar, prepare for combat and turn to"
            }

         ]
    },{
        /*
         * -- --------------------------------------------------------
         * --  Storysection 17
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 17,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Habour of Barrakeesh",
            regionType: "HARBOUR",
            description:
                "The harbour of Barrakeesh is deserted save for a handful of citizens clad in black, and the only sound that greets you is the toll of a funeral bell, echoing through the harbour on this day of mourning.",
            imageUrl: "images/shadow/regions/barrakeesh_harbour.png",
         },
         content : "It takes a long time for the fear and nausea to subside, but you push on through the slimy water, almost oblivious to your dreadful surroundings. Eventually you reach a junction where a wider tunnel crosses your path.",

        outcomes:[
            {
                outcomeType : "ABILITY",
                targetNr : 47,
                 ability : {
                    abilityType : "SIXTH_SENSE",
                    description : "This skill may warn a Kai Lord of imminent danger. It may also reveal the true purpose of a stranger or strange object encountered in your adventure."
                },
                content : "If you possess the Kai Discipline of Sixth Sense, turn to"
            },{
                outcomeType : "DEFAULT",
                targetNr :  73,
                content : "If you wish to continue along the west channel, turn to"
            },{
                outcomeType : "DEFAULT",
                targetNr :  112,
                content : "If you wish to turn north into the new tunnel, turn to"
            },{
                outcomeType : "DEFAULT",
                targetNr :  128,
                content : "If you wish to go south along the new tunnel, turn to"
            }

         ]
    },{
        /*
         * -- --------------------------------------------------------
         * --  Storysection 18
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 18,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Habour of Barrakeesh",
            regionType: "HARBOUR",
            description:
                "The harbour of Barrakeesh is deserted save for a handful of citizens clad in black, and the only sound that greets you is the toll of a funeral bell, echoing through the harbour on this day of mourning.",
            imageUrl: "images/shadow/regions/barrakeesh_harbour.png",
         },
         content : "The cell door does not open again until the sun has dipped below the peaks of the Dahir Mountains. You prepare yourself to meet the Zakhan, to demand your immediate release and safe passage back to Sommerlund, but it is not only the Zakhan who awaits you in the Grand Hall. He has a guest who has travelled many miles for this special meeting. His name is Haakon. He is a Darklord of Helgedad.

        Unarmed and helpless, you are forced to kneel before the Darklord. With wicked relish, Haakon squeezes the life from your body with his own hands.",

        outcomes:[
                {
                outcomeType : "MISSION_FAILED",
                targetNr: -1,
                content : "Your life and all hopes for your country end here."
            }      

         ]
    },{
        /*
         * -- --------------------------------------------------------
         * --  Storysection 19
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 19,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Habour of Barrakeesh",
            regionType: "HARBOUR",
            description:
                "The harbour of Barrakeesh is deserted save for a handful of citizens clad in black, and the only sound that greets you is the toll of a funeral bell, echoing through the harbour on this day of mourning.",
            imageUrl: "images/shadow/regions/barrakeesh_harbour.png",
         },
         content : "You raise the hood of your Kai cloak in order to keep your face in shadow as you approach the guards. They eye you suspiciously but are obviously reassured by your mastery of their language. You pretend to be a merchant whose goods have been confiscated and ask to be allowed to plead your case to the Judicar of Barrakeesh. The guards chuckle to themselves, and then demand two items from your Backpack before they allow you into the Grand Palace. They wink at each other, for they know that the Judicar never returns confiscated cargoes. They think you will be thrown in the palace cells for your insolence, like every other aggrieved merchant who has tried to plead for justice.",

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 137,
                 ability : {
                    abilityType : "SIXTH_SENSE",
                    description : "This skill may warn a Kai Lord of imminent danger. It may also reveal the true purpose of a stranger or strange object encountered in your adventure."
                },
                content : "If you wish to give the guards what they demand, erase any two Backpack Items (except Meals) from your Action Chart. You may now pass through the gate and enter the palace gardens. Turn to "
            },{
                outcomeType : "DEFAULT",
                targetNr :  49,
                content : "If you do not or cannot give the guards two Backpack Items, you must leave the gate and search for some other means of entering the palace. Turn to "
            }

         ]
    },{
        /*
         * -- --------------------------------------------------------
         * --  Storysection 20
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 20,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Habour of Barrakeesh",
            regionType: "HARBOUR",
            description:
                "The harbour of Barrakeesh is deserted save for a handful of citizens clad in black, and the only sound that greets you is the toll of a funeral bell, echoing through the harbour on this day of mourning.",
            imageUrl: "images/shadow/regions/barrakeesh_harbour.png",
         },
         content : "Frantically the warrior pulls on the reins and tries to trample you beneath the hooves of his startled horse.1

        Horseman: COMBAT SKILL 21   ENDURANCE 28

        [Illustration II]",

        events:[{
            eventType : "COMBAT",
                ranking : 1,
                creature : {
                    name : "Horseman",
                    combatSkill : 21,
                    endurance : 28,
                    imageUrl : "images/flight/creatures/Horseman.png"
                }
        }
        ]

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 142,
                content : "If you wish to evade combat at any time by jumping into the sea, turn to"
            },{
                outcomeType : "DEFAULT",
                targetNr :  176,
                content : "If you wish to evade combat by surrendering, turn to"
            },{
                outcomeType : "DEFAULT",
                targetNr :  125,
                content : "If you win the combat in three rounds or less, turn to"
            },{
                outcomeType : "DEFAULT",
                targetNr :  82,
                content : "If the fight lasts longer than three rounds, do not continue the combat but turn immediately to"
            },{
                outcomeType : "DEFAULT",
                targetNr :  161,
                content : "If you lose the combat, turn to"
            }

         ]
    },{
        /*
         * -- --------------------------------------------------------
         * --  Storysection 21
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 21,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Habour of Barrakeesh",
            regionType: "HARBOUR",
            description:
                "The harbour of Barrakeesh is deserted save for a handful of citizens clad in black, and the only sound that greets you is the toll of a funeral bell, echoing through the harbour on this day of mourning.",
            imageUrl: "images/shadow/regions/barrakeesh_harbour.png",
         },
         content : "Your lightning-fast reactions have saved you from being hit. You dive forward and roll, so that the needle pierces your cloak but not your skin. However, the trident-armed guards close in, confident that the needle has found its mark, and you are tranquillized. The instant they lower their weapons you attack.",

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 168,
                content : "Turn to"
            }

         ]
    },{
        /*
         * -- --------------------------------------------------------
         * --  Storysection 22
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 22,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Habour of Barrakeesh",
            regionType: "HARBOUR",
            description:
                "The harbour of Barrakeesh is deserted save for a handful of citizens clad in black, and the only sound that greets you is the toll of a funeral bell, echoing through the harbour on this day of mourning.",
            imageUrl: "images/shadow/regions/barrakeesh_harbour.png",
         },
         content : "You have sustained a deep chest wound that has penetrated your right lung. Lose 8 ENDURANCE points.",

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 107,
                ability : {
                    abilityType : "HEALING",
                    description : "This Discipline can be used to restore ENDURANCE points lost in combat. If you possess this skill you may restore 1 ENDURANCE point to your total for every numbered section of the book you pass through in which you are involved in combat. (This is only to be used after your ENDURANCE has fallen below its original level.) Remember that your ENDURANCE cannot rise above its original level."
                },
                content : "If you are still alive and possess the Kai Discipline of Healing, turn to"
            },{
                outcomeType : "DEFAULT",
                targetNr :  63,
                content : "If you do not possess this skill, turn to "
            }

         ]
    },{
        /*
         * -- --------------------------------------------------------
         * --  Storysection 23
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 23,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Habour of Barrakeesh",
            regionType: "HARBOUR",
            description:
                "The harbour of Barrakeesh is deserted save for a handful of citizens clad in black, and the only sound that greets you is the toll of a funeral bell, echoing through the harbour on this day of mourning.",
            imageUrl: "images/shadow/regions/barrakeesh_harbour.png",
         },
         content : "The climb would be easy if it were not for the scalding steam. It stings your face and hands, making the skin puffed and sore. Lose 1 ENDURANCE point.

        Pick a number from the Random Number Table. If you have lost the use of one arm, deduct 3 points from the number you have picked. If you possess the Kai Discipline of Hunting, add 2 points to your total.",

        outcomes:[
            {
                outcomeType : "RANDOM",
                targetNr : 77,
                intervall : {
                    min : -3,
                    max : -1
                },
                content : "If your total is now −3–−1, turn to "
            },{
                outcomeType : "RANDOM",
                targetNr :  192,
                intervall : {
                    min : 0,
                    max : 6
                },
                content : "If your total is now 0–6, turn to "
            },{
                outcomeType : "RANDOM",
                targetNr :  114,
                intervall : {
                    min : 7,
                    max : 11
                },
                content : "If your total is now 7–11, turn to "
            }

         ]
    },{
        /*
         * -- --------------------------------------------------------
         * --  Storysection 24
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 24,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Habour of Barrakeesh",
            regionType: "HARBOUR",
            description:
                "The harbour of Barrakeesh is deserted save for a handful of citizens clad in black, and the only sound that greets you is the toll of a funeral bell, echoing through the harbour on this day of mourning.",
            imageUrl: "images/shadow/regions/barrakeesh_harbour.png",
         },
         content : "The man slams the gate and draws the bolt. Seconds later you hear the footfalls of the Sharnazim as they rush into the courtyard. ‘Go inside,’ whispers the man, pointing to the darkened interior of his house. ‘I shall get rid of the soldiers.’

        You enter the house and climb a staircase to a large airy room, which looks out over a marketplace. Long, black flags hang from the windows of a hall opposite, and the sounds of mourning can be heard through its open doors.",

        outcomes:[
            {
                outcomeType : "ABILITY",
                targetNr : 147,
                ability : {
                    abilityType : "SIXTH_SENSE",
                    description : "This skill may warn a Kai Lord of imminent danger. It may also reveal the true purpose of a stranger or strange object encountered in your adventure."
                },
                content : "If you have the Kai Discipline of Sixth Sense, turn to "
            },{
                outcomeType : "DEFAULT",
                targetNr :  196,
                content : "If you do not possess this skill, turn to "
            }
         ]
    },{
        /*
         * -- --------------------------------------------------------
         * --  Storysection 25
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 25,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Habour of Barrakeesh",
            regionType: "HARBOUR",
            description:
                "The harbour of Barrakeesh is deserted save for a handful of citizens clad in black, and the only sound that greets you is the toll of a funeral bell, echoing through the harbour on this day of mourning.",
            imageUrl: "images/shadow/regions/barrakeesh_harbour.png",
         },
         content : "The dart sinks into your chest. You pull it free, but a wave of nausea makes you fall to your knees. The tip of the missile is drugged and you cannot fight the darkness that now engulfs your vision.",

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 69,
                content : "Turn to "
            }
         ]
    },{
        /*
         * -- --------------------------------------------------------
         * --  Storysection 26
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 26,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Habour of Barrakeesh",
            regionType: "HARBOUR",
            description:
                "The harbour of Barrakeesh is deserted save for a handful of citizens clad in black, and the only sound that greets you is the toll of a funeral bell, echoing through the harbour on this day of mourning.",
            imageUrl: "images/shadow/regions/barrakeesh_harbour.png",
         },
         content : "Peering through the keyhole, you can see that the lock is unusual; a small metal plate blocks the mechanism, so that it is impossible to pick the lock.",

        outcomes:[
            {
                outcomeType : "ABILITY",
                targetNr : 48,
                ability : {
                    abilityType : "MIND_OVER_MATTER",
                    description : "Mastery of this Discipline enables a Kai Lord to move small objects with his powers of concentration."
                },
                content : "If you have the Kai Discipline of Mind Over Matter, turn to "
            },{
                outcomeType : "DEFAULT",
                targetNr :  127,
                content : "If you wish to try to break down the door, turn to "
            },{
                outcomeType : "DEFAULT",
                targetNr :  93,
                content : "If you decide to leave the door and head off along the other passage towards the stairs, turn to "
            }

         ]
    },{
        /*
         * -- --------------------------------------------------------
         * --  Storysection 27
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 27,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Habour of Barrakeesh",
            regionType: "HARBOUR",
            description:
                "The harbour of Barrakeesh is deserted save for a handful of citizens clad in black, and the only sound that greets you is the toll of a funeral bell, echoing through the harbour on this day of mourning.",
            imageUrl: "images/shadow/regions/barrakeesh_harbour.png",
         },
         content : "Each of the three bottles bears a label, handwritten in green ink.

            Larnuma Oil (restores 2 ENDURANCE points per dose)—3 Gold Crowns
            Laumspur (restores 4 ENDURANCE points per dose)—5 Gold Crowns
            Rendalim’s Elixir (restores 6 ENDURANCE points per dose)—7 Gold Crowns
            You may purchase any of the above. (The prices are per dose. All the potions are Backpack Items.) The herb-mistress then escorts you to a side door. ‘I sense your despair, Northlander. I pray you find your cure.’

            As you leave, she offers a word of advice. ‘The guards at the north gate of the Grand Palace can be bribed.’ You thank her and enter the alley running along the side of her shop.",

        events :  [
            {
                eventType : "ACQUIRE_ITEM_EVENT",
                ranking : 1,
                item : {
                    name : "Larnuma Oil,
                    itemType : "POTION",
                    description : "restores 2 ENDURANCE per dose",
                    weight : "SMALL",
                    imageUrl : "images/flight/items/larnumaoil.png"
                }
            },{
                eventType : "ACQUIRE_ITEM_EVENT",
                ranking : 2,
                item : {
                    name : "Laumspur",
                    itemType : "HERB",
                    description : "restores 4 ENDURANCE Points",
                    weight : "SMALL",
                    imageUrl : "images/flight/items/Laumspur.png"
                }
            },{
                eventType : "ACQUIRE_ITEM_EVENT",
                ranking : 3,
                item : {
                    name : "Rendalim's Elixir",
                    itemType : "POTION",
                    description : "restores 6 ENDURANCE points per dose",
                    weight : "SMALL",
                    imageUrl : "images/flight/items/RendalimsEX.png"
                }
            },{
                eventType : "CHANGE_GOLD_AMOUNT_EVENT",
                ranking : 1,
                amount : 3
            },{
                eventType : "CHANGE_GOLD_AMOUNT_EVENT",
                ranking : 2,
                amount : 5
            },{
                eventType : "CHANGE_GOLD_AMOUNT_EVENT",
                ranking : 3,
                amount : 7
            }
         ],
        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 160,
                content : "Turn to "
            }
         ]
    },{
        /*
         * -- --------------------------------------------------------
         * --  Storysection 28
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 28,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Habour of Barrakeesh",
            regionType: "HARBOUR",
            description:
                "The harbour of Barrakeesh is deserted save for a handful of citizens clad in black, and the only sound that greets you is the toll of a funeral bell, echoing through the harbour on this day of mourning.",
            imageUrl: "images/shadow/regions/barrakeesh_harbour.png",
         },
         content : "The plan works—your arrow cuts the air and finds its mark. The smash of glass echoes around the square, drawing everyone’s attention to the merchant’s shop.",

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 153,
                content : "Turn to "
            }
         ]
    },{
        /*
         * -- --------------------------------------------------------
         * --  Storysection 29
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 29,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Habour of Barrakeesh",
            regionType: "HARBOUR",
            description:
                "The harbour of Barrakeesh is deserted save for a handful of citizens clad in black, and the only sound that greets you is the toll of a funeral bell, echoing through the harbour on this day of mourning.",
            imageUrl: "images/shadow/regions/barrakeesh_harbour.png",
         },
         content : "After tying a large knot in one end of the rope, you gather the coils and hurl the knotted end towards your target. After three failures, your fourth attempt is successful; the knot jams in a V-shaped joint, and you are able to pull yourself out of the water and swing across the vault to jump safely into the opposite tunnel. However, you cross this obstacle at the cost of your rope; it still hangs from the metal bar, and there is no way you can rescue it. (Remember to strike this item from your Action Chart.)

        The passage ahead winds and curves like a giant snake, and the foul air wafting towards you is hot and humid. Although you seem to have shaken off your pursuers, you have yet to escape from the Baga-darooz.",
        events:[{
            eventType : "DROP_ITEM_EVENT",
                ranking : 1,
                item : {
                    name : "Rope,
                    itemType : "POTION",
                    description : "restores 2 ENDURANCE per dose",
                    weight : "SMALL",
                    imageUrl : "images/flight/items/larnumaoil.png"
                }
        }]
        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 55,
                content : "Turn to "
            }

         ]
    },{
        /*
         * -- --------------------------------------------------------
         * --  Storysection 30
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 30,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Habour of Barrakeesh",
            regionType: "HARBOUR",
            description:
                "The harbour of Barrakeesh is deserted save for a handful of citizens clad in black, and the only sound that greets you is the toll of a funeral bell, echoing through the harbour on this day of mourning.",
            imageUrl: "images/shadow/regions/barrakeesh_harbour.png",
         },
         content : "You pass several high-arched portals overlooking the east city wall and continue easily and safely until you hear noises drifting along the passage. The voices of hungry guards and the distinctive clatter of plates and mugs warn you that a crowded mess hall lies ahead.

        You are trying to decide on the best course of action when a patrol of guards suddenly appears behind you in the corridor. Quickly, you jump onto a window ledge and take cover behind the arch of a portal. However, the arch is narrow, and you are sure to be seen when the guards march past.",

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 62,
                content : "If you have reached the Kai rank of Guardian or higher, turn to 62."
            },{
                outcomeType : "DEFAULT",
                targetNr :  152,
                content : "If you wish to hide outside on the narrow ledge that runs round the palace wall, turn to 152."
            },{
                outcomeType : "DEFAULT",
                targetNr :  124,
                content : "If you wish to attack the guards as they march past, turn to 124."
            }

         ]
    },{
        /*
         * -- --------------------------------------------------------
         * --  Storysection 31
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 31,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Habour of Barrakeesh",
            regionType: "HARBOUR",
            description:
                "The harbour of Barrakeesh is deserted save for a handful of citizens clad in black, and the only sound that greets you is the toll of a funeral bell, echoing through the harbour on this day of mourning.",
            imageUrl: "images/shadow/regions/barrakeesh_harbour.png",
         },
         content : "As you start to climb, two Sharnazim warriors suddenly emerge from the insect-choked tunnel. They lunge at you, their hands outstretched, their fingers hooked to claw at your legs and drag you down. You kick out and strike one of the cruel-faced men beneath the jaw. He clutches at his throat and gives a gurgling cry as he falls backwards into the slimy water.

        You reach the stone trapdoor, but the other warrior has unsheathed his scimitar and has begun to climb the ladder; he no longer intends to capture you alive. Pressing your shoulder to the cobwebbed trapdoor, you push up the heavy stone and scramble out to find yourself in a noisy alley, crowded with people and market stalls. The sewer hole itself is close to a wicker table stacked high with bundles of torches.",

        outcomes:[
            {
                outcomeType : "ITEM",
                targetNr : 143,
                item : {
                    code : "KALTE FIRESPHERE",
                    name : "Kalte Firesphere",
                    description : "Kalte Firesphere",
                    imageUrl : "images/flight/items/kaltefiresphere.png"
                },
                content : "If you possess a Kalte Firesphere or a Tinderbox, turn to 143."
            },{
                outcomeType : "ITEM",
                targetNr : 143,
                item : {
                    code : "TINDERBOX",
                    name : "Tinderbox",
                    description : "Tinderbox",
                    imageUrl : "images/flight/items/tinderbox.png"
                },
                content : "If you possess a Kalte Firesphere or a Tinderbox, turn to 143."
            },{
                outcomeType : "DEFAULT",
                targetNr :  183,
                content : "If you do not have either of these items, turn to 183."
            }

         ]
    },{
        /*
         * -- --------------------------------------------------------
         * --  Storysection 32
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 32,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Habour of Barrakeesh",
            regionType: "HARBOUR",
            description:
                "The harbour of Barrakeesh is deserted save for a handful of citizens clad in black, and the only sound that greets you is the toll of a funeral bell, echoing through the harbour on this day of mourning.",
            imageUrl: "images/shadow/regions/barrakeesh_harbour.png",
         },
         content : "You raise the hood of your cloak and hurry through the open doors into the dark, cool hall. The people are kneeling in front of a pulpit where a holy man, dressed in flowing robes of black and gold, reads aloud from a gem-encrusted book. Behind him, the face of the late Zakhan, immortalized in a tapestry suspended from the roof by huge silken cords, looks down on the mourners.

        The congregation is rapt in prayer, and nobody sees you enter. The ceremony soon comes to an end, and you are able to slip past Maouk’s men as the mourners flood into the streets.",

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 169,
                content : "ITurn to "
            }

         ]
    },{
        /*
         * -- --------------------------------------------------------
         * --  Storysection 33
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 33,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Habour of Barrakeesh",
            regionType: "HARBOUR",
            description:
                "The harbour of Barrakeesh is deserted save for a handful of citizens clad in black, and the only sound that greets you is the toll of a funeral bell, echoing through the harbour on this day of mourning.",
            imageUrl: "images/shadow/regions/barrakeesh_harbour.png",
         },
         content : "You hack the dirt-encrusted floor and uncover a large metal ring, which proves to be part of an old trapdoor. The metal ring is badly corroded, but you manage to prise the trapdoor open. It covers a deep shaft; from the inky darkness below comes the stench of the sewer.

        The Sharnazim are climbing up the stone steps. Their pounding footsteps match your racing heartbeat.",

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 94,
                content : "If you wish to jump down the shaft, turn to "
            },{
                outcomeType : "DEFAULT",
                targetNr :  185,
                content : "If you wish to stand and fight the Sharnazim, turn to "
            }

         ]
    },{
        /*
         * -- --------------------------------------------------------
         * --  Storysection 34
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 34,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Habour of Barrakeesh",
            regionType: "HARBOUR",
            description:
                "The harbour of Barrakeesh is deserted save for a handful of citizens clad in black, and the only sound that greets you is the toll of a funeral bell, echoing through the harbour on this day of mourning.",
            imageUrl: "images/shadow/regions/barrakeesh_harbour.png",
         },
         content : "No matter how hard you try to picture the mechanism in your mind’s eye, the image will not appear. Deduct 1 ENDURANCE point due to the strain of your mental exertion.",

        events:[{
            eventType : "CHANGE_ENDURANCE_EVENT",
                ranking : 1,
                amount : -1
        }],

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 127,
                content : "If you want to try to break down the door, turn to "
            },{
                outcomeType : "DEFAULT",
                targetNr :  93,
                content : "If you decide to leave the door and head off along the other passage towards the stairs, turn to "
            }

         ]
    },{
        /*
         * -- --------------------------------------------------------
         * --  Storysection 34
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 34,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Habour of Barrakeesh",
            regionType: "HARBOUR",
            description:
                "The harbour of Barrakeesh is deserted save for a handful of citizens clad in black, and the only sound that greets you is the toll of a funeral bell, echoing through the harbour on this day of mourning.",
            imageUrl: "images/shadow/regions/barrakeesh_harbour.png",
         },
         content : "The great snake shudders and convulses in the throes of death. The smell of its thick brown blood is disgusting, and you have to hold your breath and grit your teeth as you lift the dead Yas away from the chest and peer inside.

        You discover six silver-handled maces, each beautifully carved and encrusted with rubies, emeralds, and pearls. In the Northlands these weapons would fetch thousands of Crowns. At the bottom of the chest, you also discover a small Copper Key. If you wish to take either a Jewelled Mace or the Copper Key, or both, mark them on your Action Chart as Special Items. You carry the Copper Key in the pocket of your tunic and the Jewelled Mace tucked into your belt.

        The acidic smell of the snake blood is beginning to make you retch. Quickly, you climb the stone steps and leave the armoury by the north door.",

        events:[{
            eventType : "ACQUIRE_ITEM_EVENT",
                ranking : 1,
                item : {
                    name : "Copper Key",
                    itemType : "KEY",
                    description : "Copper Key",
                    weight : "SMALL",
                    imageUrl : "images/flight/items/copperkey.png"
                }
        }],

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 14,
                content : "Turn to "
            }

         ]
    },{
        /*
         * -- --------------------------------------------------------
         * --  Storysection 36
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 36,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Habour of Barrakeesh",
            regionType: "HARBOUR",
            description:
                "The harbour of Barrakeesh is deserted save for a handful of citizens clad in black, and the only sound that greets you is the toll of a funeral bell, echoing through the harbour on this day of mourning.",
            imageUrl: "images/shadow/regions/barrakeesh_harbour.png",
         },
         content : "The grim-faced Sharnazim encircle you, their razor-sharp scimitars glinting in the afternoon sun. ‘Take him!’ shouts Maouk. ‘But take him alive!’

        Reluctantly, the warriors sheathe their swords and wait for a chance to rush you. Six lie dead at your feet before you are eventually overpowered. ‘You are brave, Kai Lord,’ says Maouk, in a mocking tone, ‘but you will need more than bravery to save you now.’",

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 176,
                content : "Turn to "
            }

         ]
    },{
        /*
         * -- --------------------------------------------------------
         * --  Storysection 37
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 37,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Habour of Barrakeesh",
            regionType: "HARBOUR",
            description:
                "The harbour of Barrakeesh is deserted save for a handful of citizens clad in black, and the only sound that greets you is the toll of a funeral bell, echoing through the harbour on this day of mourning.",
            imageUrl: "images/shadow/regions/barrakeesh_harbour.png",
         },
         content : "The Imperial Apothecary can only be reached from the palace gardens by entering the Vizu-diar. The kitchens are part of the slaves’ quarters, under constant supervision of the cruel slave-masters and guards. You wait until the path and lawns are deserted before you run across to the door of the Vizu-diar.",

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 149,
                content : "Turn to "
            }

         ]
    },{
        /*
         * -- --------------------------------------------------------
         * --  Storysection 38
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 38,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Habour of Barrakeesh",
            regionType: "HARBOUR",
            description:
                "The harbour of Barrakeesh is deserted save for a handful of citizens clad in black, and the only sound that greets you is the toll of a funeral bell, echoing through the harbour on this day of mourning.",
            imageUrl: "images/shadow/regions/barrakeesh_harbour.png",
         },
         content : "Halfway round the small tower, a section of the sandstone ledge begins to crumble beneath your feet. Instinctively, you leap sideways and stretch out your hands in time to grasp the firm ledge beyond. The drop below is terrifying, but your terror gives you the impetus and strength you need to claw your way back onto the ledge. Your fingers are bleeding and bruised, but you are still alive. You lose 1 ENDURANCE point.",

        events:[{
            eventType : "CHANGE_ENDURANCE_EVENT",
                ranking : 1,
                amount : -1
        }],

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 87,
                content : "Turn to"
            }

         ]
    },{
        /*
         * -- --------------------------------------------------------
         * --  Storysection 39
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 39,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Habour of Barrakeesh",
            regionType: "HARBOUR",
            description:
                "The harbour of Barrakeesh is deserted save for a handful of citizens clad in black, and the only sound that greets you is the toll of a funeral bell, echoing through the harbour on this day of mourning.",
            imageUrl: "images/shadow/regions/barrakeesh_harbour.png",
         },
         content : "The man is lying. He knows that other guards are sure to turn up at any moment. As soon as you loosen your grip, he will attempt to overpower you and raise the alarm.",

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 9,
                content : "If you wish to continue questioning him, turn to "
            },{
                outcomeType : "DEFAULT",
                targetNr :  78,
                content : "If you decide to kill him, turn to "
            }

         ]
    },{
        /*
         * -- --------------------------------------------------------
         * --  Storysection 40
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 40,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Habour of Barrakeesh",
            regionType: "HARBOUR",
            description:
                "The harbour of Barrakeesh is deserted save for a handful of citizens clad in black, and the only sound that greets you is the toll of a funeral bell, echoing through the harbour on this day of mourning.",
            imageUrl: "images/shadow/regions/barrakeesh_harbour.png",
         },
         content : "The Kwaraz drops from the ceiling and plunges into the water, creating an enormous wave of foul slime which completely submerges you. Wracked with nausea, you cough and retch and try to scoop the muck from your eyes and mouth. The Kwaraz’s carcass blocks the tunnel, and you can only get past by climbing over it. Still in a state of shock, you lose 1 Backpack Item, your pouch of Gold Crowns and 2 ENDURANCE points. Make the necessary adjustments to your Action Chart.",

///////////////////////////////////////////////////SCHNEIDER FRAGEN /////////////////////////////////////////////


        events:[{
                eventType : "CHANGE_ENDURANCE_EVENT",
                ranking : 1,
                amount : -2
        },{
            
                eventType : "CHANGE_GOLD_AMOUNT_EVENT",
                ranking : 2,
                amount : 
            
        },{
                eventType : "DROP_ITEM_EVENT",
                ranking : 3,
                item : {
                    name : "Rope,
                    itemType : "UTILITY",
                    description : "it is a rope",
                    weight : "SMALL",
                    imageUrl : "images/flight/items/rope.png"
                }
        }],

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 17,
                content : "If you are still alive, turn to "
            }

         ]
    },{
        /*
         * -- --------------------------------------------------------
         * --  Storysection 41
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 41,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Habour of Barrakeesh",
            regionType: "HARBOUR",
            description:
                "The harbour of Barrakeesh is deserted save for a handful of citizens clad in black, and the only sound that greets you is the toll of a funeral bell, echoing through the harbour on this day of mourning.",
            imageUrl: "images/shadow/regions/barrakeesh_harbour.png",
         },
         content : "You fill your mouth with oil but cannot bring yourself to swallow it—the foul tasting liquid makes you feel sick. You spit it out, and gulp mouthfuls of water to rid yourself of the disgusting taste.",

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 103,
                content : "If you now decide to rub some of the oil into your skin, turn to "
            },{
                outcomeType : "DEFAULT",
                targetNr :  71,
                content : "If you decide to forget the vile-tasting oil completely, turn to  "
            }

         ]
    },{
        /*
         * -- --------------------------------------------------------
         * --  Storysection 42
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 42,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Habour of Barrakeesh",
            regionType: "HARBOUR",
            description:
                "The harbour of Barrakeesh is deserted save for a handful of citizens clad in black, and the only sound that greets you is the toll of a funeral bell, echoing through the harbour on this day of mourning.",
            imageUrl: "images/shadow/regions/barrakeesh_harbour.png",
         },
         content : "Your Kai sense warns you that the alley is a dead end. If you take that exit from the square, you will certainly be trapped. Only two other choices remain: the high, nail-studded gate to your left, or the path directly ahead.",
        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 75,
                content : "If you decide to go through the gate, turn to "
            },{
                outcomeType : "DEFAULT",
                targetNr :  169,
                content : "If you decide to take the path, turn to "
            }

         ]
    },{
        /*
         * -- --------------------------------------------------------
         * --  Storysection 43
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 43,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Habour of Barrakeesh",
            regionType: "HARBOUR",
            description:
                "The harbour of Barrakeesh is deserted save for a handful of citizens clad in black, and the only sound that greets you is the toll of a funeral bell, echoing through the harbour on this day of mourning.",
            imageUrl: "images/shadow/regions/barrakeesh_harbour.png",
         },
         content : "You reach a small chamber set above the tunnel. Here, at least, it is dry, although the foul sewer gas permeates everything. You hurry along a narrow passage, which turns first to the west and then to the south, but your heart sinks as you see a dead end looming out of the inky blackness.",

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 33,
                content : "If you wish to search for a hidden exit, turn to "
            },{
                outcomeType : "DEFAULT",
                targetNr :  185,
                content : "If you wish to prepare yourself for combat, turn to "
            }

         ]
    },{
        /*
         * -- --------------------------------------------------------
         * --  Storysection 44
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 44,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Habour of Barrakeesh",
            regionType: "HARBOUR",
            description:
                "The harbour of Barrakeesh is deserted save for a handful of citizens clad in black, and the only sound that greets you is the toll of a funeral bell, echoing through the harbour on this day of mourning.",
            imageUrl: "images/shadow/regions/barrakeesh_harbour.png",
         },
         content : "You hurry through the west door and into the welcoming cool of the corridor beyond. A large drawbar on the inside of the door catches your eye; you lock it to delay any would-be pursuers.

        At the end of the corridor lies a hall full of weapons. Racks of spears and swords line the chamber walls, and a massive workbench covers the floor. It is the palace armoury. In the midst of the tools which litter the workbench, there is a large, black, leather-bound book.",

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 83,
                content : "If you wish to examine the book, turn to "
            },{
                outcomeType : "DEFAULT",
                targetNr :  181,
                content : "If you wish to ignore the book and search for your confiscated equipment instead, turn to "
            }

         ]
    },{
        /*
         * -- --------------------------------------------------------
         * --  Storysection 45
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 45,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Habour of Barrakeesh",
            regionType: "HARBOUR",
            description:
                "The harbour of Barrakeesh is deserted save for a handful of citizens clad in black, and the only sound that greets you is the toll of a funeral bell, echoing through the harbour on this day of mourning.",
            imageUrl: "images/shadow/regions/barrakeesh_harbour.png",
         },
         content : "You concentrate your Mindblast on the guard’s hand. He screams and his fingers spring open as his hand is robbed of all feeling and control. He is now unarmed.",

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 78,
                content : "If you wish to attack the guard, turn to "
            },{
                outcomeType : "DEFAULT",
                targetNr :  199,
                content : "If you wish simply to overpower him and capture him alive, turn to "
            }

         ]
    },{
        /*
         * -- --------------------------------------------------------
         * --  Storysection 46
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 46,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Habour of Barrakeesh",
            regionType: "HARBOUR",
            description:
                "The harbour of Barrakeesh is deserted save for a handful of citizens clad in black, and the only sound that greets you is the toll of a funeral bell, echoing through the harbour on this day of mourning.",
            imageUrl: "images/shadow/regions/barrakeesh_harbour.png",
         },
         content : "As your adversary falls to the ground, the other guard stabs at you with his Trident. You cannot evade combat and must fight him to the death.

         Vestibule Guard 2: COMBAT SKILL 14   ENDURANCE 24",

         events : [
            {
                eventType : "COMBAT",
                ranking : 1,
                creature : {
                    name : "Vestibule Guard 2",
                    combatSkill : 14,
                    endurance : 24,
                    imageUrl : "images/flight/creatures/vestguard2.png"
                }
            }
         ],

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 3,
                content : "If you win the combat, turn to "
            }

         ]
    },{
        /*
         * -- --------------------------------------------------------
         * --  Storysection 47
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 47,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Habour of Barrakeesh",
            regionType: "HARBOUR",
            description:
                "The harbour of Barrakeesh is deserted save for a handful of citizens clad in black, and the only sound that greets you is the toll of a funeral bell, echoing through the harbour on this day of mourning.",
            imageUrl: "images/shadow/regions/barrakeesh_harbour.png",
         },
         content : "You have a strong feeling that more Kwaraz occupy the north tunnel. You sense a lair. It would be almost suicide to go that way, so you must take one of the remaining routes.",

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 73,
                content : "If you wish to continue along the west tunnel, turn to "
            },{
                outcomeType : "DEFAULT",
                targetNr :  128,
                content : "If you wish to go south along the new tunnel, turn to"
            }

         ]
    },{
        /*
         * -- --------------------------------------------------------
         * --  Storysection 48
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 48,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Habour of Barrakeesh",
            regionType: "HARBOUR",
            description:
                "The harbour of Barrakeesh is deserted save for a handful of citizens clad in black, and the only sound that greets you is the toll of a funeral bell, echoing through the harbour on this day of mourning.",
            imageUrl: "images/shadow/regions/barrakeesh_harbour.png",
         },
         content : "You focus on the lock and concentrate all of your Kai skill on opening it. Sweat begins to trickle down your face. Pick a number from the Random Number Table. If you have reached the Kai rank of Guardian or higher, add 3 to the number you have picked.",

        outcomes:[
            {
                outcomeType : "RANDOM",
                targetNr : 34,
                intervall : {
                    min : 0,
                    max : 4
                },
                content : "If your total is now 0–4, turn to "
            },{
                outcomeType : "RANDOM",
                targetNr :  80,
                intervall : {
                    min : 5
                },
                content : "If your total is now 5 or higher, turn to "
            }

         ]
    },{
        /*
         * -- --------------------------------------------------------
         * --  Storysection 49
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 49,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Habour of Barrakeesh",
            regionType: "HARBOUR",
            description:
                "The harbour of Barrakeesh is deserted save for a handful of citizens clad in black, and the only sound that greets you is the toll of a funeral bell, echoing through the harbour on this day of mourning.",
            imageUrl: "images/shadow/regions/barrakeesh_harbour.png",
         },
         content : "The outer wall of the Grand Palace is far too high to climb, and even if you had a rope long enough, your green Kai cloak would be seen for miles, set against the white, sun-bleached marble wall.

You crouch in the shadow of a doorway while you concentrate on working out a plan. There is a constant traffic of mounted scouts and couriers from the north gate. Those arriving hand a scroll of parchment to two of the guards before they enter. Slowly, a bold plan begins to take shape in your mind. If you could overpower one of the couriers before he reaches the palace gate, you could disguise yourself in his clothes and use his scroll to gain entrance.

Many of the couriers approach the Grand Palace from the harbour, and although it is infested with troops, you discover the ideal place to ambush a rider. There is a broad avenue where a bridge of gnarled old wood and metal curves over the street, and here, beneath the wooden arch, you lie in wait for your prey.

Your chance soon arrives; a black-robed rider enters the avenue and spurs his horse along the street. He will have to pass beneath the arch. You prepare to pounce.

Pick a number from the Random Number Table. If you have the Kai Discipline of Hunting, add 1 to the number you have picked. If you have reached the Kai rank of Savant, add 3 to the number you have picked.",

        outcomes:[
            {
                outcomeType : "RANDOM",
                targetNr : 106,
                intervall : {
                    min : 0,
                    max : 5
                },
                content : "If your total is now 0–5, turn to "
            },{
                outcomeType : "RANDOM",
                targetNr :  189,
                intervall : {
                    min : 6,
                    max : 13
                },
                content : "If your total is now 6–13, turn to "
            }

         ]
    },{
        /*
         * -- --------------------------------------------------------
         * --  Storysection 50
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 50,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Habour of Barrakeesh",
            regionType: "HARBOUR",
            description:
                "The harbour of Barrakeesh is deserted save for a handful of citizens clad in black, and the only sound that greets you is the toll of a funeral bell, echoing through the harbour on this day of mourning.",
            imageUrl: "images/shadow/regions/barrakeesh_harbour.png",
         },
         content : "The smooth leather soles of your boots do not grip on the wet wood. You slip, and as you fall you gash your head on the row of oars. You lose 2 ENDURANCE points.

        You are fished from the water by the Sharnazim; they drag you by your cloak across the sun-bleached flagstones of the harbour square and deposit you at Maouk’s feet. He looks at you mockingly. ‘You are brave, Kai Lord. But you will need more than bravery to save you now.’",

        events :  [
            {
                eventType : "CHANGE_ENDURANCE_EVENT",
                ranking : 1,
                amount : -2
            }
         ],

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 176,
                content : "Turn to "
            }
         ]
    },{
        /*
         * -- --------------------------------------------------------
         * --  Storysection 51
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 51,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Habour of Barrakeesh",
            regionType: "HARBOUR",
            description:
                "The harbour of Barrakeesh is deserted save for a handful of citizens clad in black, and the only sound that greets you is the toll of a funeral bell, echoing through the harbour on this day of mourning.",
            imageUrl: "images/shadow/regions/barrakeesh_harbour.png",
         },
         content : "A slippery ladder disappears into the dark, stench-filled shaft. You gulp a lungful of air and climb down, locking the trapdoor behind you. When you finally reach the bottom of the shaft, your worst fears are confirmed.

        You have entered the Baga-darooz, the main drainage sewer of Barrakeesh. You recall one of the crewmen aboard the galley, an old man nicknamed ‘The Stink’ because he smelled so much, having been sentenced to one year’s imprisonment in the Baga-darooz for a crime he did not commit. Peering along the gloomy tunnels, you wonder how he survived for so long in this dank, filthy sewer.

        Suddenly your thoughts are disturbed by the sound of splintering wood. Chunks of shattered timber rain down upon you as the Sharnazim force open the trapdoor. The heavy iron grille glances off your shoulder as it falls; you stifle a cry of pain, but you lose 1 ENDURANCE point due to the wound.

        This section of the Baga-darooz is a junction where three channels meet. You must quickly decide which channel to take, for Maouk’s men are now descending the ladder.",

        events :  [
            {
                eventType : "CHANGE_ENDURANCE_EVENT",
                ranking : 1,
                amount : -2
            }
         ],

        outcomes:[
            {
                outcomeType : "ABILITY",
                targetNr : 173,
                ability : {
                    abilityType : "TRACKING",
                    description : "This skill enables a Kai Lord to make the correct choice of a path in the wild, to discover the location of a person or object in a town or city and to read the secrets of footprints or tracks."
                },
                content : "If you have the Kai Discipline of Tracking, turn to "
            },{
                outcomeType : "DEFAULT",
                targetNr :  96,
                content : "If you wish to enter the left channel, turn to "
            },{
                outcomeType : "DEFAULT",
                targetNr :  145,
                content : "If you wish to enter the right channel, turn to "
            },{
                outcomeType : "DEFAULT",
                targetNr :  13,
                content : "If you wish to enter the channel straight ahead, turn to "
            }

         ]
    },{
        /*
         * -- --------------------------------------------------------
         * --  Storysection 52
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 51,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Habour of Barrakeesh",
            regionType: "HARBOUR",
            description:
                "The harbour of Barrakeesh is deserted save for a handful of citizens clad in black, and the only sound that greets you is the toll of a funeral bell, echoing through the harbour on this day of mourning.",
            imageUrl: "images/shadow/regions/barrakeesh_harbour.png",
         },
         content : "You turn the body over with the toe of your boot and search the robes, discovering the following items:

            4 Gold Crowns
            Gaoler’s Keys (Special Item)
            Dagger
            Sword
            If you wish to keep any of these items, remember to mark them on your Action Chart. (The Gaoler’s Keys should be worn on your belt.)",

        events :  [{
            eventType : "ACQUIRE_ITEM_EVENT",
                ranking : 1,
                item : {
                    name : "Gaoler's Keys",
                    itemType : "KEY",
                    description : "Gaoler's Keys",
                    weight : "Small",
                    imageUrl : "images/flight/items/gaolerskey.png"
                }
            },{
                eventType : "ACQUIRE_ITEM_EVENT",
                ranking : 2,
                item : {
                    name : "Dagger",
                    itemType : "WEAPON",
                    description : "Dagger",
                    weight : "SMALL",
                    imageUrl : "images/flight/items/dagger.png"
                }
            },{
                eventType : "ACQUIRE_ITEM_EVENT",
                ranking : 3,
                item : {
                    name : "Sword",
                    itemType : "WEAPON",
                    description : "Sword",
                    weight : "MEDIUM",
                    imageUrl : "images/flight/items/sword.png"
                }
            },{
                eventType : "CHANGE_GOLD_EVENT",
                ranking : 4,
                amount:4
            }
         ],

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr :  140,
                content : "Turn to "
            }

         ]
    },{
        /*
         * -- --------------------------------------------------------
         * --  Storysection 53
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 53,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Habour of Barrakeesh",
            regionType: "HARBOUR",
            description:
                "The harbour of Barrakeesh is deserted save for a handful of citizens clad in black, and the only sound that greets you is the toll of a funeral bell, echoing through the harbour on this day of mourning.",
            imageUrl: "images/shadow/regions/barrakeesh_harbour.png",
         },
         content : "You recognize the sign of the fish. It is the symbol of an order of monks known as ‘The Redeemers’, a silent order who are devoted to a lifetime of prayer, pilgrimage, and the study of the healing arts.",


        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 157,
                content : "If you wish to enter the dwelling, turn to "
            },{
                outcomeType : "DEFAULT",
                targetNr :  188,
                content : "If you decide to enter the tavern instead, turn to "
            }

         ]
    }
