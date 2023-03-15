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
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
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
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "Breathless from the exertion of combat, you step back as the Elix finally collapses and dies. Slowly, its glass-green eyes mist over and become opaque like hard, cold jadin. Around the creature’s blood-spattered throat hangs a Gold Key on a chain. You quickly discover that the Gold Key opens the steel door of a strongroom at the far end of apothecary.        High upon a shelf, just inside the door, you find a small box that contains what you seek—the Oede herb. Within seconds of pressing the beautiful golden leaves to your wounded shoulder, a tingling sensation engulfs your whole arm. The numbness soon fades, and both your arm and shoulder are free of the horrific Limbdeath microbes.       Sufficient Oede herb remains in the box for one further application. It is a powerful substance that can be used against many deadly diseases or alternatively can be used to restore 10 ENDURANCE points if swallowed after combat. If you wish to keep the Oede herb, mark it on your Action Chart as a Backpack Item. You should also restore the COMBAT SKILL points that were temporarily lost due to Limbdeath.        After dragging the dead Elix into the strongroom, you lock the steel door from the inside. You notice that there are in fact two doors to the strongroom: the one by which you entered and a smaller door set into the opposite wall. The Gold Key opens the lock of the new door, which leads to a narrow staircase beyond, dimly lit by flaring torches in wall brackets.      The climb is steep and arduous. You suspect that these steps are part of a secret route to the strongroom, and your suspicions are only confirmed when you arrive at what appears to be a dead end. A closer examination reveals a narrow bronze door set flush to the wall, plain in appearance except for a tiny key hole close to the floor. As you insert and twist the Gold Key, you are quietly confident that the bronze door will open.",


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
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "You search the bodies of the three vestibule guards and uncover the following items:4 Gold Crowns 1 Dagger 1 Sword 1 Potion of Alether (Increases your COMBAT SKILL by 2 points for the duration of one fight.)You may also take the Blowpipe and the remaining Sleep Dart. If you decide to take them, mark them on your Action Chart as Backpack Items.In the robe of the dead blowpipe warrior, you find a small piece of parchment upon which is written today’s date and the number 67. A smile creeps across your face as you realize that this is the number that will open the bronze door.You hold your breath and twist the dial!",


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
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "You stoop to grasp the sword, but as your fingers close around the hilt, the second guard attacks.Palace Gaoler: COMBAT SKILL 14   ENDURANCE 21 Ignore all ENDURANCE points lost by the enemy in the first round of combat, for you can only attempt to parry his blow.",


        events : [{
            eventType : "COMBAT",
                ranking : 1,
                creature : {
                    name : "Palace Gaoler",
                    combatSkill : 14,
                    endurance : 21,
                    imageUrl : "images/flight/creatures/palacegaoler.png"
                }
        }],
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
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
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
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
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
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
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
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
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
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
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
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
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
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "To reach the north door without being seen, you must work your way carefully around the chamber, dodging from one pillar to the next.Pick a number from the Random Number Table. If you possess the Kai Discipline of Camouflage or Hunting, deduct 2 from the number you have picked.",

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
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "You are in underwater combat with a deadly salt water scavenger.Bloodlug: COMBAT SKILL 17   ENDURANCE 11Deduct 2 points from your COMBAT SKILL due to the speed of its attack. This creature is immune to Mindblast.[Illustration I]",


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
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
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
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
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
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
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
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
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
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
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
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "The cell door does not open again until the sun has dipped below the peaks of the Dahir Mountains. You prepare yourself to meet the Zakhan, to demand your immediate release and safe passage back to Sommerlund, but it is not only the Zakhan who awaits you in the Grand Hall. He has a guest who has travelled many miles for this special meeting. His name is Haakon. He is a Darklord of Helgedad.Unarmed and helpless, you are forced to kneel before the Darklord. With wicked relish, Haakon squeezes the life from your body with his own hands.",

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
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
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
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "Frantically the warrior pulls on the reins and tries to trample you beneath the hooves of his startled horse.1Horseman: COMBAT SKILL 21   ENDURANCE 28[Illustration II]",

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
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
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
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
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
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
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
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
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
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
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
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
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
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "Each of the three bottles bears a label, handwritten in green ink.Larnuma Oil (restores 2 ENDURANCE points per dose)—3 Gold Crowns Laumspur (restores 4 ENDURANCE points per dose)—5 Gold CrownsRendalim’s Elixir (restores 6 ENDURANCE points per dose)—7 Gold Crowns You may purchase any of the above. (The prices are per dose. All the potions are Backpack Items.) The herb-mistress then escorts you to a side door. ‘I sense your despair, Northlander. I pray you find your cure.’As you leave, she offers a word of advice. ‘The guards at the north gate of the Grand Palace can be bribed.’ You thank her and enter the alley running along the side of her shop.",

        events :  [
            {
                eventType : "ACQUIRE_ITEM_EVENT",
                ranking : 1,
                item : {
                    name : "Larnuma Oil",
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
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
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
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "After tying a large knot in one end of the rope, you gather the coils and hurl the knotted end towards your target. After three failures, your fourth attempt is successful; the knot jams in a V-shaped joint, and you are able to pull yourself out of the water and swing across the vault to jump safely into the opposite tunnel. However, you cross this obstacle at the cost of your rope; it still hangs from the metal bar, and there is no way you can rescue it. (Remember to strike this item from your Action Chart.)

        The passage ahead winds and curves like a giant snake, and the foul air wafting towards you is hot and humid. Although you seem to have shaken off your pursuers, you have yet to escape from the Baga-darooz.",
        events:[{
            eventType : "DROP_ITEM_EVENT",
                ranking : 1,
                item : {
                    name : "Rope",
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
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
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
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
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
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
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
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "You hack the dirt-encrusted floor and uncover a large metal ring, which proves to be part of an old trapdoor. The metal ring is badly corroded, but you manage to prise the trapdoor open. It covers a deep shaft; from the inky darkness below comes the stench of the sewer.The Sharnazim are climbing up the stone steps. Their pounding footsteps match your racing heartbeat.",

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
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
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
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "The great snake shudders and convulses in the throes of death. The smell of its thick brown blood is disgusting, and you have to hold your breath and grit your teeth as you lift the dead Yas away from the chest and peer inside.You discover six silver-handled maces, each beautifully carved and encrusted with rubies, emeralds, and pearls. In the Northlands these weapons would fetch thousands of Crowns. At the bottom of the chest, you also discover a small Copper Key. If you wish to take either a Jewelled Mace or the Copper Key, or both, mark them on your Action Chart as Special Items. You carry the Copper Key in the pocket of your tunic and the Jewelled Mace tucked into your belt.The acidic smell of the snake blood is beginning to make you retch. Quickly, you climb the stone steps and leave the armoury by the north door.",

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
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
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
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
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
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
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
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
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
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
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
                    name : "Rope",
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
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
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
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
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
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
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
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
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
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
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
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "As your adversary falls to the ground, the other guard stabs at you with his Trident. You cannot evade combat and must fight him to the death. Vestibule Guard 2: COMBAT SKILL 14   ENDURANCE 24",

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
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
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
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
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
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
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
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
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
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
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
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "You turn the body over with the toe of your boot and search the robes, discovering the following items:4 Gold CrownsGaoler’s Keys (Special Item)DaggerSwordIf you wish to keep any of these items, remember to mark them on your Action Chart. (The Gaoler’s Keys should be worn on your belt.)",
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
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
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
    },{
        /*
         * -- --------------------------------------------------------
         * --  Storysection 54
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 54,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "Hurrying down the steps and away from the Bath Hall, you enter the ‘Saadi-tas-Ouda’: the Square of the Dead. Jet-black flagstones cover the square, each with a long iron spike set deep into its centre. From the Bath Hall steps, the square resembles the back of a massive iron porcupine, but when you reach the base of the steps, you realize that the Saadi-tas-Ouda is in fact far more sinister. Stuck on top of each spike is a human skull—all that remains of pirates, murderers, traitors, and thieves who have been sentenced to death. The grisly display serves as a warning to others never to defy the law of the Zakhan.As you reach the far side of the square, you brush against a spike. Fresh blood is smeared across the arm of your tunic, staining it dark red. You raise your eyes, cursing at your misfortune, but you are shocked into silence by the sight before you.[Illustration III]Impaled upon the sharp iron pole is the head of the Vassagonian envoy. To either side are the heads of all the galley crew. On each of their foreheads is freshly branded one word—TRAITOR. Fear wells up inside you; turning your face away from the sightless eyes, you run into the crowded streets of the Mikarum, the district where the spice and herb merchants live.At the end of a narrow, winding street, you reach a junction. Opposite is a shop with a bright red sign above the door:Bir Dar Masoun—HERB-MISTRESS",


        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 68,
                content : "If you need the Oede herb, turn to"
            },{
                outcomeType : "DEFAULT",
                targetNr :  154,
                content : "If you do not need this herb, but still decide to enter the shop, turn to"
            },{
                outcomeType : "DEFAULT",
                targetNr :  179,
                content : "If you wish to continue along in a new alleyway that heads off towards the Grand Palace, turn to "
            }

         ]
    },{
        /*
         * -- --------------------------------------------------------
         * --  Storysection 55
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 55,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "The temperature rises steadily until you are bathed in sweat. Ahead, you see a chamber filled with steam that rises from its bubbling floor. You are about to enter the chamber when you catch a glimpse of the danger awaiting you; the stone walkway ends abruptly, only a few yards into the chamber. Ten feet below, lying before you like the surface of a huge bubbling cauldron, is a tar-sorkh: a mud geyser.These geysers are common in Vassagonia. Much of the desert empire is unstable, but although it is subject to constant earth tremors, it rarely results in great destruction. The Vassagonians call these tremors: ‘Tasa-Dophiem’, which means ‘The Wrestling Gods’.This particular mud geyser has been put to practical use. It provides a constant source of heat for the dwellings built over the chamber. The steam from the tar-sorkh rises into a pair of huge, circular chimneys in the domed ceiling, which in turn feed heat to the buildings above. Your only way out of this chamber is by climbing one of these chimneys. Although there are no ladders, the rock-hewn chamber wall offers many footholds.",


        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 162,
                content : "If you wish to climb the left chimney, turn to "
            },{
                outcomeType : "DEFAULT",
                targetNr :  23,
                content : "If you wish to climb the right chimney, turn to"
            }

         ]
    },{
        /*
         * -- --------------------------------------------------------
         * --  Storysection 56
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 56,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "A search of the baskets crowding the little boat uncovers a beautifully hand-tooled leather case. You flick open the brass catch and discover that the case contains a Jakan—a hunting bow used by the coastal fishermen of Vassagonia. (You may record the Jakan Bow as a Weapon on your Action Chart. You must possess an Arrow in order to use this Weapon.) You are elated by your find but disappointed to discover that the case contains only one Arrow.Across the harbour square, close to Maouk’s carriage, you notice a small, white-walled shop where a row of green glass flagons line a balcony on the first floor. You draw the bowstring to your lips and take careful aim; it is a difficult shot, and you have only one chance.Pick a number from the Random Number Table. If you possess the Kai Discipline of Weaponskill (any weapon), add 2 to the number you have picked.",
        outcomes:[
            {
                outcomeType : "RANDOM",
                targetNr : 7,
                intervall : {
                    min : 0,
                    max : 3
                },
                content : "If your total is now 0–3, turn to "
            },{
                outcomeType : "RANDOM",
                targetNr :  28,
                intervall : {
                    min : 4,
                    max : 11
                },
                content : "If your total is now 4–11, turn to "
            }

         ]
    },{
        /*
         * -- --------------------------------------------------------
         * --  Storysection 57
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 57,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "The door is unlocked, and for a moment your heart sinks; if this room is the Imperial Apothecary where the Oede herb is kept, why is the door not locked and guarded? Anxiously you slip inside and survey the interior.It seems to be an apothecary. Glass retorts bubble and steam over jets of blue flame, and strange fluids pass back and forth through a crazy maze of tubes and tunnels. Hundreds of herb jars line the far wall, and ten large copper urns, each full of rainbow-coloured powder, hang suspended from the soot-blackened ceiling. You begin searching through the herb jars, and suddenly you discover why the door was left unlocked. Creeping slowly towards you is the cat-like creature that guards the apothecary. Its eyes glow with a vivid green luminescence as it prepares to strike. Elix: COMBAT SKILL 17   ENDURANCE 32 If you have ever fought an Elix before, add 2 to your COMBAT SKILL for the duration of this fight. You cannot evade combat and must fight it to the death.",

         events:[{
                eventType : "COMBAT",
                ranking : 1,
                creature : {
                    name : "Elix",
                    combatSkill : 17,
                    endurance : 32,
                    imageUrl : "images/flight/creatures/elix.png"
                }

         }]

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 2,
                content : "If you win the combat, turn to "
            }

         ]
    },{
        /*
         * -- --------------------------------------------------------
         * --  Storysection 58
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 58,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "You follow a straight passage of pale, rose-coloured stone, which soon ends at an empty vestibule. In its north wall is set a great wooden door, covered with engraved bronze plaques and studded with bronze nails. There is a curious lock set into the middle of this door, encircled by a beautiful carving of a long-tailed scorpion. A closer look at the lock reveals a series of Vassagonian numerals, numbered 1 to 200, engraved in the lock. You recognize the design: it is a Cloeasian combination lock. ",


        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 67,
                content : "If you know the correct number that will open the bronze door, turn to that section number."
            },{
                outcomeType : "DEFAULT",
                targetNr :  98,
                content : "If you choose the wrong combination, you do not get a second guess. Turn immediately to "
            },{
                outcomeType : "DEFAULT",
                targetNr :  156,
                content : "If you do not know the number and do not attempt to open the door, turn to "
            }

         ]
    },{
        /*
         * -- --------------------------------------------------------
         * --  Storysection 59
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 55,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "You spring forward and slam your fist into the guard’s face; he grunts and falls, clutching a bleeding nose. His sword drops to the ground close by your feet.",


        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 4,
                content : "If you wish to pick up the sword, turn to "
            },{
                outcomeType : "DEFAULT",
                targetNr :  91,
                content : "If you wish to ignore the sword and attack the second guard with your bare hands, turn to "
            }

         ]
    },{
        /*
         * -- --------------------------------------------------------
         * --  Storysection 60
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 60,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "The temperature rises steadily until you are bathed in sweat. Ahead, you see a chamber filled with steam that rises from its bubbling floor. You are about to enter the chamber when you catch a glimpse of the danger awaiting you; the stone walkway ends abruptly, only a few yards into the chamber. Ten feet below, lying before you like the surface of a huge bubbling cauldron, is a tar-sorkh: a mud geyser.These geysers are common in Vassagonia. Much of the desert empire is unstable, but although it is subject to constant earth tremors, it rarely results in great destruction. The Vassagonians call these tremors: ‘Tasa-Dophiem’, which means ‘The Wrestling Gods’.This particular mud geyser has been put to practical use. It provides a constant source of heat for the dwellings built over the chamber. The steam from the tar-sorkh rises into a pair of huge, circular chimneys in the domed ceiling, which in turn feed heat to the buildings above. Your only way out of this chamber is by climbing one of these chimneys. Although there are no ladders, the rock-hewn chamber wall offers many footholds.",


        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 25,
                content : "Turn to "
            }
         ]
    },{
        /*
         * -- --------------------------------------------------------
         * --  Storysection 61
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 61,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "Suddenly, the door bursts open, and in rush the Sharnazim. You make a dash for the open window but are grabbed from behind and pulled to the ground. Lashing out with your feet and fists you free yourself, only to be overpowered by more of the dark-skinned warriors. As they drag you out into the courtyard, you catch a glimpse of the man who opened the gate; he smiles at you as he slips a pouch of silver into his pocket.",


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
         * --  Storysection 62
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 62,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "Instinct and experience warn you that it would be rash to attack the guards so close to a crowded mess hall; any noise of combat would immediately be heard by the soldiers inside. There’s now only one course of action for you to take—you must hide outside on the ledge running around a palace wall.",


        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 152,
                content : "Turn to "
            }
         ]
    },{
        /*
         * -- --------------------------------------------------------
         * --  Storysection 63
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 63,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "You tear strips of cloth from your Kai cloak and bandage the wound as best you can. You manage to staunch the flow, but you have lost a lot of blood and fear the wound is infected. Deduct 4 ENDURANCE points from your total, except you have a potion of Laumspur in your inventory.",

        events : [
        {
            eventType : "CHANGE_ENDURANCE_EVENT",
            ranking : 1,
            amount : -4
        },{
            eventType: "DROP_ITEM_EVENT",
            ranking:2,
            item : {
                    name : "Laumspur",
                    itemType : "HERB",
                    description : "restores 4 ENDURANCE Points",
                    weight : "SMALL",
                    imageUrl : "images/flight/items/Laumspur.png"
            }
        }],

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 25,
                content : "Turn to "
            }
         ]
    },{
        /*
         * -- --------------------------------------------------------
         * --  Storysection 64
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 64,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "You have barely taken a dozen steps along the walkway when you hear a low, inhuman growl. Then, the noise suddenly changes to an abominable and high-pitched sputter, as the huge bulk of a Kwaraz emerges from out of the dark. It is upon you before you can take any evasive action. Kwaraz: COMBAT SKILL 20   ENDURANCE 30 The giant reptile is very susceptible to psychic power. If you have the Kai Discipline of Mindblast, add 4 (instead of the normal 2) to your COMBAT SKILL for the duration of the combat. [Illustration IV]",

         events:[{
            eventType : "COMBAT",
                ranking : 1,
                creature : {
                    name : "Kwaraz",
                    combatSkill : 20,
                    endurance : 30,
                    imageUrl : "images/flight/creatures/kwaraz.png"
                }
         }]

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 117,
                content : "If you win the combat, turn to "
            }
         ]
    },{
        /*
         * -- --------------------------------------------------------
         * --  Storysection 65
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 65,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "The guard slumps to the ground, his neck broken by the blow from the edge of your hand, but as you turn you see that the other man has recovered from your punch and is crawling across the floor, his hand stretched out to retrieve his sword.",


        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 78,
                content : "If you wish to attack the guard, turn to "
            },{
                outcomeType : "DEFAULT",
                targetNr : 199,
                content : "If you wish simply to overpower him and capture him alive, turn to "
            }
         ]
    },{
        /*
         * -- --------------------------------------------------------
         * --  Storysection 66
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 66,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "A sour-faced guard with a whip stands at the great doors to the kitchen. He delights in bullying the slaves that pass to and fro, lashing them with his whip and cursing them foully. You decide it is far too risky to confront the guard and instead focus your attention on the kitchen windows. The guard is too engrossed in beating an unfortunate slave who has dropped a basket of fruit to notice you sprint across the gardens and leap into the shadow of a tall, arched kitchen window. Then, to your horror, you notice that two guards are seated inside the kitchen, just below the window ledge on which you now stand. If they should so much as turn their heads, you will be seen.",


        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 149,
                content : "If you wish to jump back into the palace gardens and try to enter the palace through the Zakhan’s trophy room, turn to "
            },{
                outcomeType : "DEFAULT",
                targetNr : 124,
                content : "If you wish to launch a surprise attack on the seated guards, before they notice you are there, turn to "
            }
         ]
    },{    /*
         * -- --------------------------------------------------------
         * --  Storysection 67
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 67,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "You hear a faint click followed by a soft whirring sound; the bronze door slides open. As you hurry through, the door clicks shut behind your back, as softly as it had opened. Instinct tells you that you have entered the chambers of the upper palace, the sumptuous private enclave of the Zakhan. You walk upon glistening tiles of opal and platinum, past sculptures and statues of pure gold. The door of solid amethyst ahead seems plain in comparison to the breathtaking splendour of this private world. Beyond the door lies another unique and startlingly beautiful world: the arboretum. A circular, cathedral-like arena spreads out below you, the green velvet canopy alive with the sound of bird song. Trees of every colour, shape, and size flourish in the deep, dark soil of the floor. The Zakhan’s arboretum houses a specimen of every tree that grows in Magnamund, and many species that are now extinct elsewhere. As you walk the wrought iron balcony which encircles the arboretum, you recognize the leaves of a Sommlending oak. You feel a sudden wave of homesickness, but it does not make you despair; rather it renews your determination to escape from this hostile, sun-bleached land. At one of the exits from the arboretum, you discover a Quarterstaff propped against the wall. (If you wish to take this, remember to mark it on your Action Chart.) The desire to escape urges you on as you leave the arboretum and hurry through a network of lavish corridors and empty, deserted vestibules. You reach a landing where a broad staircase descends to a massive room that occupies most of the lower palace. From the top of the staircase, hidden by the shadow of a pilaster, you stare down on a sight that freezes your blood with terror.",

         events:[{
                eventType: "ACQUIRE_ITEM_EVENT",
                ranking: 1,
                item : {
                    name : "Quarterstaff",
                    itemType : "WEAPON",
                    description : "Quarterstaff",
                    weight : "SMALL",
                    imageUrl : "images/flight/items/quarterstaff.png"
                }
         }]

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 200,
                content : "Turn to "
            }
         ]
    },{    /*
         * -- --------------------------------------------------------
         * --  Storysection 68
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 68,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "You part the curtain of beads hanging in the doorway and enter the cool interior. The lifeless arm that hangs limply by your side has taken on a bluish hue. Fear returns; you must find the Oede herb to cure the disease, or you will lose the whole limb and possibly your life. A woman appears from the shadows of the counter. She has piercing green eyes and her red hair is raised, bound round with rings of jadin. ‘Welcome, Northlander,’ she says, in a voice both soft and clear. ‘How may I serve you?’ You hesitate before replying, ‘Oede.’ She narrows her eyes and casts a glance at your injured arm. ‘I cannot help you,’ she says sorrowfully. ‘Oede is now a very rare and precious herb. I would have to sell my shop and all my possessions in order to buy just one small pouch of Oede. There is only one man in Barrakeesh rich enough to possess this herb—the Zakhan.’ Sweat breaks out upon your brow as your fear grows. ‘What little Oede there is,’ she continues, ‘is kept in the Grand Palace under lock and key.’ You ask if there is any other herb that can cure your arm. She shakes her head from side to side. ‘Only Oede will cure Limbdeath—and you can only find that in the strongroom of the Imperial Apothecary.’ She reaches behind the counter and brings forward three glass bottles, each containing a coloured liquid. ‘They will not cure you, but they will dull the pain in the last few hours.’ ",

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 27,
                content : "If you wish to examine the potions, turn to"
            },{
                outcomeType : "DEFAULT",
                targetNr : 160,
                content : "If you decide to ignore them, leave the shop and continue along the alley, turn to"
            }
         ]
    },{    /*
         * -- --------------------------------------------------------
         * --  Storysection 69
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 69,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "You wake up in great discomfort; every muscle of your body feels knotted and bruised. You force open eyelids clogged with dried sweat, and look with dread at your wretched surroundings. You are lying on the hard stone floor of a prison cell. Over by the far wall, beneath a window criss-crossed with iron bars, is a low wooden bunk covered in filthy rags. Cockroaches, some the size of field mice, scuttle along a foul-smelling gutter that disappears into a grating in the floor. (Erase from your Action Chart all Weapons, Special Items, Gold Crowns, and your Backpack and all its contents, but note them down elsewhere in case you should find them again later.) You discover that your hands are free and slowly pull yourself upright into a sitting position, resting your back against the cell door. A faint draught from the corridor outside provides the only relief from the stifling heat and bad air of the cell. In the distance you can hear footsteps approaching. Then there is a jangle of keys and the creak of hinges. A door closes with a dull thud. More footsteps; they are getting louder. They come to halt outside the cell door and a loud voice bellows out: ‘Sleeping on duty, Sefrou? You’ll wake up on the other side of this door if the captain catches you!’ The chair scrapes along the ground, and a startled voice, full of indignation, replies: ‘Curse you, Hadj! The Zakhan doesn’t want the Northlander taken to the Grand Hall until sunset. You’ve cheated me of two hours sleep.’ ‘Shut up, Sefrou,’ snarls the first voice, ‘and listen hard. I’ve just come from the armoury. Some interesting trinkets were found on the Northlander, worth a great deal of gold I’d say. Seems a pity to let them go to waste, eh?’ The two guards chuckle greedily and discuss at length the good time they will be able to have in the city, once they have sold your equipment. ‘I’ll take a peek at our friend,’ says one of the guards. ‘I wonder if he’s enjoying our hospitality.’ A spy-hole slides open above your head and you hear a gasp of shock. ‘He’s gone! He’s gone! By the Majhan, we’ll lose our heads!’ You suddenly realize that you cannot be seen so close to the door. ‘Let me see,’ hisses the other guard, eager to see for himself. You hear the click of a key in the lock; this could be your chance to escape.",

         events :  [
            {
                eventType : "DROP_ALL_WEAPONS_EVENT",
                ranking : 1
            }, {
                eventType : "DROP_BACKPACK_EVENT",
                ranking : 2
            }
         ],

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 138,
                content : "If you wish to attack the guards as soon as the door opens, turn to "
            },{
                outcomeType : "DEFAULT",
                targetNr : 85,
                content : "If you wish to move away from the door and stand in the middle of the cell, turn to "
            }
         ]
    },{    /*
         * -- --------------------------------------------------------
         * --  Storysection 70
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 70,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "You press on for about a mile until you can go no further: a huge iron grating blocks the tunnel. The decomposing carcass of a giant lizard has been washed up against the bars. Bones are clearly visible where the dead flesh has rotted or been eaten away. The bars are firmly fixed; it will be impossible to continue in this direction. Close to the dead lizard, a narrow stone platform juts out from the wall. Beyond a platform, you notice a low arch leading to some stairs, ascending out of the sewer. The sound of Maouk’s voice drifts along the tunnel. He is urging his Sharnazim in your direction.",

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 43,
                content : "If you wish to climb the steps, turn to "
            },{
                outcomeType : "DEFAULT",
                targetNr : 60,
                content : "If you wish to wait here and fight your pursuers, turn to "
            }
         ]
    },{    /*
         * -- --------------------------------------------------------
         * --  Storysection 71
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 71,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "Having washed off the worst of the dirt, you clamber out of the bath and enter a small antechamber; the room is hot and arid and your clothes are soon as dry as bone. Beyond the antechamber is another hall, this time crowded with people, some seated, others standing, and everyone busy in conversation. These are the free baths of Barrakeesh and the citizens of the capital are justly proud of them. They are the envy of the other desert cities where water is scarce and precious. The citizens treat the baths as a forum, a place for meeting and talking with friends. Much of the conversation you overhear is about the new Zakhan; few speak well of him. You wrap yourself in the large Towel and make your way through the crowd towards the main entrance. If you wish to keep the Towel once you are outside, you must mark it on your Action Chart as 2 Backpack Items, due to its size.",

         events:[{
                eventType: "ACQUIRE_ITEM_EVENT",
                ranking: 1,
                item : {
                    name : "Towel",
                    itemType : "UTILITY",
                    description : "Towel needs 2 Backpack spots",
                    weight : "MEDIUM",
                    imageUrl : "images/flight/items/towel.png"
                }
         }]

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 43,
                content : "If you wish to climb the steps, turn to "
            },{
                outcomeType : "DEFAULT",
                targetNr : 60,
                content : "If you wish to wait here and fight your pursuers, turn to "
            }
         ]
    },{    /*
         * -- --------------------------------------------------------
         * --  Storysection 72
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 72,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "‘Go away!’ shouts the plump landlady of this tavern. ‘We’ve no hospitality for those who show no respect to our dead Zakhan.’ Two burly man, wearing wide arm-bands of black silk, roughly push you out of the tavern door. You slip and fall on the dusty cobblestones, grazing your hip and elbows. Lose 1 ENDURANCE point. As you get to your feet, Maouk and his warriors rush into the plaza and surround you.",

         events:[{
                eventType : "CHANGE_ENDURANCE_EVENT",
                ranking : 1,
                amount : -1
            }]

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 36,
                content : "If you wish to fight them, turn to "
            },{
                outcomeType : "DEFAULT",
                targetNr : 176,
                content : "If you wish to surrender, turn to "
            }
         ]
    },{    /*
         * -- --------------------------------------------------------
         * --  Storysection 73
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 73,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "The stench of the sewer begins to fade and the water becomes less polluted the further you explore in this direction. The sound of Maouk’s men has faded and now only the constant gurgle and rush of the fetid water fills your ears. Suddenly your foot is caught by something, and you are thrown off balance. Half-buried in the sludge of the tunnel floor is a rusty suit of armour.",

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 94,
                content : "Turn to "
            }
         ]
    },{    /*
         * -- --------------------------------------------------------
         * --  Storysection 74
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 74,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "You detect that the west door leads to the palace armoury.",

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 44,
                content : "If you wish to go through the west door, turn to "
            },{
                outcomeType : "DEFAULT",
                targetNr : 167,
                content : "If you wish to avoid the armoury, leave the chamber by the north door and turn to "
            }
         ]
    },{    /*
         * -- --------------------------------------------------------
         * --  Storysection 75
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 75,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "You twist the handle but the gate is locked. You are about to turn and run when suddenly the gate flies open: a man stands in the doorway. ‘Quickly, Northlander. I will hide you!’ The man steps back to allow you to enter.",

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 24,
                content : "If you wish to enter, turn to "
            },{
                outcomeType : "DEFAULT",
                targetNr : 169,
                content : "If you wish to refuse and climb the path towards the archway, turn to "
            },{
                outcomeType : "DEFAULT",
                targetNr : 117,
                content : "If you wish to climb the steps, turn to If you wish to enter the alley, turn to "
         ]
    },{    /*
         * -- --------------------------------------------------------
         * --  Storysection 76
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 76,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "You flick the dial to 76 and press your shoulder against the great bronze plaques, expecting to hear at any moment the creak of hinges. You detect a sound, but it is not the noise of a door opening—you have chosen the wrong number.",

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 98,
                content : "Turn to "
            }
         ]
    },{    /*
         * -- --------------------------------------------------------
         * --  Storysection 77
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 77,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "Your numb arm makes the climb impossible. Valiantly you struggle to escape up the chimney, but when a spur of rock breaks away in your hand, you cannot prevent yourself from tumbling backwards into the bubbling mud.",

        outcomes:[
            {
                outcomeType : "MISSION_FAILED",
                targetNr : -1,
                content : "Your life comes to a swift end as you are boiled to death in the tar-sorkh of Barrakeesh."
            }
         ]
    },{    /*
         * -- --------------------------------------------------------
         * --  Storysection 78
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 78,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "Your attack is swift and deadly. Before the guard can scream for help, you have silenced him for good with an open-handed chop to the neck.",

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 150,
                content : "If you wish to leave the bodies and escape along the corridor, turn to "
            },{
                outcomeType : "DEFAULT",
                targetNr : 102,
                content : "If you wish to search them, turn to "
            }
         ]
    },{    /*
         * -- --------------------------------------------------------
         * --  Storysection 79
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 79,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "A line of toa trees casts a shadow that hides your stealthy approach. The iron portcullis is down, and only a couple of soldiers stand guard inside where there would normally be ten times that number. Suddenly, there is the grate of metal as the portcullis slowly rises. The guards stand back to allow a troop of cavalry to leave the palace. As they gallop past, the horses kick up a huge cloud of dust, covering the luckless guards from head to toe. They cough and sneeze and run to a horse-trough to slake their dust-choked throats. The portcullis is still open, the archway unguarded.",

        outcomes:[
            {
                outcomeType : "ABILITY",
                targetNr : 170,
                ability : {
                    abilityType : "CAMOUFLAGE",
                    description : "This Discipline enables a Kai Lord to blend in with his surroundings. In the countryside, he can hide undetected among trees and rocks and pass close to an enemy without being seen. In a town or city, it enables him to look and sound like a native of that area, and can help him to find shelter or a safe hiding place."
                },
                content : "If you possess the Kai Disciplines of both Camouflage and Hunting, turn to "
            },{
                outcomeType : "ABILITY",
                targetNr : 170,
                ability : {
                    abilityType : "HUNTING",
                    description : "This skill ensures that a Kai Lord will never starve in the wild. He will always be able to hunt for food for himself except in areas of wasteland and desert. The skill also enables a Kai Lord to be able to move stealthily when stalking his prey."
                },
                content : "If you possess the Kai Disciplines of both Camouflage and Hunting, turn to "
            },{
                outcomeType : "DEFAULT",
                targetNr : 86,
                content : "If you decide to attempt to sneak past the drinking guards, turn to 86."
            },{
                outcomeType : "DEFAULT",
                targetNr : 119,
                content : "If you decide to attack them while their backs are turned, turn to "
            }
         ]
    },{    /*
         * -- --------------------------------------------------------
         * --  Storysection 80
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 80,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "Within seconds, the image of the lock appears in your mind. You use your power to make the lock open and a loud click confirms your success.",

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 136,
                content : "Turn to "
            }
         ]
    },{    /*
         * -- --------------------------------------------------------
         * --  Storysection 81
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 81,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "You recognize the symptoms of Limbdeath. The wound has become infected by thousands of Limbdeath microbes, one of many strains of deadly bacteria to be found in the Baga-darooz. None of your Kai skills can prevent the eventual loss of your arm. There is only one cure for the disease—the infected wound must be treated with the herb Oede within twenty-four hours. Unless you find some Oede by mid-afternoon tomorrow, your arm will become gangrenous. You will then have to choose between losing your arm or losing your life. This dreadful realization renews your determination to escape from this terrible place, for you can be sure of one thing: you will find no Oede in the Baga-darooz.",

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 166,
                content : "Turn to "
            }
         ]
    },{    /*
         * -- --------------------------------------------------------
         * --  Storysection 82
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 82,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "You fight with great skill and courage, but you are heavily outnumbered. The black-clad warriors close in and overpower you, dragging you back to a jubilant Maouk. ‘You are brave, Kai Lord. But you’ll need more than bravery to save you now!’",

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 176,
                content : "Turn to "
            }
         ]
    },{    /*
         * -- --------------------------------------------------------
         * --  Storysection 83
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 83,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "It is an armoury log. The pages contain handwritten lists of all the work carried out here. Spears and swords made for the garrison of Kara Kala, ore shipments from the Vakar Mountains, weapons due for repair and all manner of daily routines are carefully recorded. You are about to discard the log when you notice a folded piece of parchment tucked into the spine. It is a list of dates and numbers with a heading in bold print: ‘The Bronze Door’. You scan the page and locate today’s date. The number listed next to it is ‘67’. Make a note of this number in the margin of your Action Chart—it could be of use at a later stage of your adventure. You throw the book back onto the cluttered bench and begin to search for your missing equipment.",

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 181,
                content : "Turn to "
            }
         ]
    },{    /*
         * -- --------------------------------------------------------
         * --  Storysection 84
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 84,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "You dive into the putrid water, stealing yourself for the ghastly swim you have decided to make. The oily scum fills your nose and mouth and chokes in your throat. You claw your way across the vault to the opposite tunnel and struggle onto a narrow walkway. You are trembling, but it is not the shock of the swim that has made you shiver. Your arm will not function. Your shoulder, wounded when the trapdoor grille fell, stings painfully, and the whole arm below it is numb and useless. Horror engulfs you as you realize what is wrong.",

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 81,
                content : "Turn to "
            }
         ]
    },{    /*
         * -- --------------------------------------------------------
         * --  Storysection 85
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 85,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "The guards pull open the door and rush into the cell, their weapons held in readiness to attack. They are brutish men with cruel, war-scarred faces. Their surprise at your sudden appearance soon turns to anger and they shove you back against the far wall. ‘Seems we have a trickster, Sefrou,’ hisses the taller guard. ‘A northland illusionist who’s lost his way,’ croons the other. They snigger at their joke, their eyes full of malevolence and spite. ‘Let’s teach our guest a lesson,’ says the first guard, raising his blade to your throat. ‘Go fetch the thumbscrews.’",

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 59,
                content : "If you wish to attack the guard who holds the sword, turn to "
            },{
                outcomeType : "DEFAULT",
                targetNr : 163,
                content : "If you do not wish to attack, turn to "
            }
         ]
    },{    /*
         * -- --------------------------------------------------------
         * --  Storysection 86
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 86,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "You sprint through the archway, keeping a watchful eye on the two drinking guards. The dust is settling, and should they turn around, you will certainly be seen. In your hurry, you fail to see a stone statue close to the wall and catch it with your knee. Stifling a yelp of pain, you hobble into the palace gardens and take cover beneath a leafy kasl bush. You lose 1 ENDURANCE point due to your injury, but at least you have entered the Grand Palace unseen.",

         events:[{
            eventType: "CHANGE_ENDURANCE_EVENT",
            ranking:1,
            amount:-1
         }]

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 137,
                content : "Turn to "
            }
         ]
    },{    /*
         * -- --------------------------------------------------------
         * --  Storysection 87
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 87,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "On the far side of the small tower, the ledge passes directly beneath a line of windows set high in the north wall. The sandstone blocks have been severely eroded by the strong ocean winds, creating many cracks and hollows which make climbing easy. To your delight, you also discover that the iron window grilles have yet to be locked on this side of the palace. You drop to the floor of a corridor that heads off to the west. A wide staircase leads to a network of passages set with alcoves. Each alcove contains a bust or tapestry depicting past Zakhans and Vassagonian victories in long-forgotten wars.",

        outcomes:[
            {
                outcomeType : "ABILITY",
                targetNr : 105,
                ability : {
                    abilityType : "SIXTH_SENSE",
                    description : "This skill may warn a Kai Lord of imminent danger. It may also reveal the true purpose of a stranger or strange object encountered in your adventure."
                },
                content : "If you have the Kai Discipline of Sixth Sense, turn to "
            },{
                outcomeType : "DEFAULT",
                targetNr : 158,
                content : "If you do not possess this skill, turn to "
            }
         ]
    },{    /*
         * -- --------------------------------------------------------
         * --  Storysection 88
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 88,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "The poster is written from right to left in Vassagonian script. The time you spent learning the language aboard the galley was well spent, for you have little difficulty in translating the proclamation: His most illustrious majesty, Zakhan Moudalla the Exalted, has passed into the realm of the Majhan. May his spirit never die! By the grace of the Council of Kadi, the Funtal of Kara Kala, and the Judicar of Barrakeesh, it is decreed that Kimah, Emir of Ferufezan, Protector of the Dry Main, shall by right claim the throne of Vassagonia. Through the unity of the Seven Cities, he will lead his people to greatness. Long may he reign! A scuffle breaks out at the end of the passage as a handful of Sharnazim try to push their way through the crowd. In the confusion a fruit stall is overturned, and its owner curses the clumsy soldiers at the top of his voice. Then there is a sudden silence—the luckless man has been beheaded for his insolence. You turn and run, splashing through the shallow drainage channel running the length of the foul passage.",

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 113,
                content : "Turn to "
            }
         ]
    },{    /*
         * -- --------------------------------------------------------
         * --  Storysection 89
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 89,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "A sharp pain stabs through your jaw as the needle finds its mark. In an instant, the room becomes a spinning vortex of darkness, beyond the reach of pain. You awake to find yourself back in the cockroach-infested prison cell from which you originally escaped. You have been disarmed and stripped of all your equipment and can do little now except await the arrival of the Zakhan.",

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 18,
                content : "Turn to "
            }
         ]
    },{    /*
         * -- --------------------------------------------------------
         * --  Storysection 90
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 90,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "You enter a large vestibule constructed from blocks of pink and white marble. A man in a white robe sits near a door in the far wall; he is reading a scroll held close to his face. He has not seen you enter the baths, but he is quick to sense your presence. [Illustration V] ‘By the Majhan!’ he cries. ‘You smell worse than a Baknar!’ He hurls a towel at you and points to the door. ‘Take my advice,’ he whines, his fingers pinching shut his nostrils. ‘Don’t get undressed—your clothes need the bath as much as you.’ You grit your teeth in anticipation of the moment when he sees that you are not Vassagonian, but he simply returns to his scroll, holding the parchment close to his short-sighted eyes. You smile as you realize that the man cannot see you clearly enough to know you are a foreigner. Beyond the door there is a long hall, leading at regular intervals into smaller open chambers, each with a sunken bath. Perfumed water constantly splashes into the baths and drains away directly into the Baga-darooz. You decide to take the bath attendant’s advice and jump straight into the cool water, keeping all your clothes on. You notice a large earthenware jar stands beside the bath, full to the brim with translucent purple oil.",

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 6,
                content : "If you have the Kai Discipline of Healing, turn to"
            },{
                outcomeType : "DEFAULT",
                targetNr : 41,
                content : "If you wish to swallow some of the purple oil, turn to"
            },{
                outcomeType : "DEFAULT",
                targetNr : 103,
                content : "If you wish to rub some into your skin, turn to "
            },{
                outcomeType : "DEFAULT",
                targetNr : 71,
                content : "If you decide to ignore the oil, turn to "
            }
         ]
    },{    /*
         * -- --------------------------------------------------------
         * --  Storysection 91
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 91,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "The guard lashes out at your head with his warhammer. Instinctively, you duck, rolling to one side as the weapon strikes sparks from the wall. Palace Gaoler: COMBAT SKILL 14   ENDURANCE 21 You must deduct 4 points from your COMBAT SKILL for the duration of this combat, as you are without a weapon.",

        events : [
            {
                eventType : "COMBAT",
                ranking : 1,
                creature : {
                    name : "Palace Gaoler",
                    combatSkill : 14,
                    endurance : 21,
                    imageUrl : "images/flight/creatures/palacegaoler.png"
                }
            },{
                eventType : "TEMPORARY_CHANGE_COMBAT_SKILL_EVENT",
                ranking : 1,
                amount : -4
            }
         ],

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 65,
                content : "If you win and the fight lasts 4 rounds of combat or less, turn to "
            },{
                outcomeType : "DEFAULT",
                targetNr : 180,
                content : "If you win and the fight lasts longer than 4 rounds of combat, turn to "
            }
         ]
    },{    /*
         * -- --------------------------------------------------------
         * --  Storysection 92
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 92,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "You sprint along the cobblestones but are soon forced to stop. Cavalry appear at the end of the street; they shout and charge at you, three abreast. Maouk hisses a curse. You are shocked by how close his voice sounds, as if he were but a step behind you. You wheel round to confront him, only to see he still stands where he first appeared. A dart is held high in his hand; he hisses another curse and flings the missile into the air.",

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 25,
                content : "Turn to "
            }
         ]
    },{    /*
         * -- --------------------------------------------------------
         * --  Storysection 93
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 93,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "You descend the stairs and follow the corridor eastwards, taking care to tread lightly. The bars on windows high in the wall to your right cast latticed shadows across the smooth marble floor ahead. Beneath one of these windows stands a table on which rests a pitcher of water. Your throat is parched, and you stop to take a long drink. Restore 1 ENDURANCE point.",

         events:[{
            eventType: "CHANGE_ENDURANCE_EVENT",
            ranking:1,
            amount:1
         }]

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 155,
                content : "If you wish to climb onto the table and look through the window, turn to "
            },{
                outcomeType : "DEFAULT",
                targetNr : 182,
                content : "If you wish to press on along the corridor, turn to "
            }
         ]
    },{    /*
         * -- --------------------------------------------------------
         * --  Storysection 94
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 94,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "You fall face first into putrid water. The oily slime fills your ears and nose and chokes in your throat. You surface and struggle onto a narrow walkway, only to find that your arm no longer functions. Your wounded shoulder, injured by the falling trapdoor grille, still stings painfully, but now the whole arm below it is numb and useless. Horror overcomes you as you realize what is wrong.",

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 81,
                content : "Turn to "
            }
         ]
    },{    /*
         * -- --------------------------------------------------------
         * --  Storysection 95
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 95,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "You surface beside a covered skiff. Anxious to avoid the scavengers in the waters of Barrakeesh harbour, you haul yourself aboard and hide beneath the boat’s canopy of woven rushes. You are breathless from your swim, but you dare not make a sound; Maouk’s men are everywhere, racing along the harbour walls, their eyes searching the water for any sign of you. If you are to escape, you must think of something to divert their attention.",

        outcomes:[
            {
                outcomeType : "ABILITY",
                targetNr : 184,
                ability : {
                    abilityType : "MIND_OVER_MATTER",
                    description : "Mastery of this Discipline enables a Kai Lord to move small objects with his powers of concentration."
                },
                content : "If you have the Kai Discipline of Mind Over Matter, turn to "
            },{
                outcomeType : "DEFAULT",
                targetNr : 56,
                content : "If you do not possess this skill, turn to "
            }
         ]
    },{    /*
         * -- --------------------------------------------------------
         * --  Storysection 96
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 96,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "The water is clotted with a revolting variety of green and black muck and scum. It reaches up to your waist, and, as you force your way through the glutinous mire, the surface film breaks, releasing a vile gas. You have to cover your nose and mouth with your Kai cloak, for the stench is appalling. A sudden splash warns that Maouk’s men are not far behind. Your foot catches in something buried in the silt of the tunnel floor, and for one brief second, you are seized by total panic. You struggle to kick free but are held fast. Blindly, you stab your weapon beneath the filthy water until your foot is finally freed. As you withdraw your weapon, you half-expect to find some hideous sewer creature impaled upon it. Instead, you discover a human rib cage. You shudder and flick the bones back into the stinking mire. The channel soon divides: the new tunnel heads west and the other continues southwards. The splashing has grown steadily louder—Maouk’s men are gaining on you.",

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 135,
                content : "If you wish to head west, turn to "
            },{
                outcomeType : "DEFAULT",
                targetNr : 164,
                content : "If you wish to continue south, turn to "
            }
         ]
    },{    /*
         * -- --------------------------------------------------------
         * --  Storysection 97
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 97,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "The chest is plain except for a small square of red metal bolted to the top. There is no lock, but, instinctively, you avoid opening the lid with your hands in case it is booby-trapped. Nearby, you notice a wooden bucket and a ladle. Using the ladle, you lever open the chest and push back the lid. The chest itself is not booby-trapped, but your caution was well placed; coiled on a bed of jewel-encrusted maces lies a Yas, a non-poisonous but very large Vassagonian snake. A red forked tongue flicks out of its yellow head as it prepares to defend its valuable bed.",

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 194,
                content : "If you wish to attack the Yas, turn to "
            },{
                outcomeType : "DEFAULT",
                targetNr : 14,
                content : "If you wish to flick shut the lid and leave the armoury by the north door, turn to "
            }
         ]
    },{    /*
         * -- --------------------------------------------------------
         * --  Storysection 98
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 98,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "The soft shuffle of stealthy feet warns that you are no longer alone. You whirl around and crouch in readiness for combat; it is this automatic reaction to danger that saves you from a drugged needle fired from a blowpipe. As the tiny missile clips the hood of your cloak, you see the firer reach into his belt pouch for another. Behind him are two warriors armed with sharp, barbed tridents. The three block your passage from the vestibule.",

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 168,
                content : "If you wish to attack them before the firer can reload his blowpipe, turn to"
            },{
                outcomeType : "DEFAULT",
                targetNr : 118,
                content : "If you do not want to attack them and decide to try to dodge the second blowpipe dart, turn to "
            }
         ]
    },{    /*
         * -- --------------------------------------------------------
         * --  Storysection 99
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 99,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "As you step into the sunlight, a voice rings out above the noise of the crowd. ‘There he is!’ It is Maouk. He points at you and a dozen Sharnazim draw their scimitars. ‘Surrender, Lone Wolf,’ he snarls. ‘You cannot escape.’",

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 36,
                content : "If you wish to fight, turn to "
            },{
                outcomeType : "DEFAULT",
                targetNr : 176,
                content : "If you decide to surrender, turn to "
            }
         ]
    },{    /*
         * -- --------------------------------------------------------
         * --  Storysection 100
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 100,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "The marble door opens into semi-darkness, and the musty smell of old parchment wafts through the air. Row upon row of neatly stacked, leather-bound books stand upon marble shelves, each one of which is beautifully decorated with intricate arabesques in fine gold leaf. Judging by the dates and inscriptions, you deduce that these books form a catalogue of all the treasures in the Grand Palace, many dating back hundreds of years. Every shelf of the small library is filled with books, every shelf, that is, save one where, on a purple silk cloth, lie a Copper Key and a Prism. If you wish to take either, or both, of these items, mark the Prism as a Backpack Item and the Copper Key as a Special Item (which you carry in your pocket) on your Action Chart. There is no exit from the library other than the marble door by which you entered. After satisfying yourself that nothing useful has been overlooked, you close the door and walk back along the corridor. When you reach the junction, you see a patrol of palace guards ascending the stairs. Without a moment’s hesitation, you run towards the east door to avoid being seen.",

         events:[{
            eventType : "ACQUIRE_ITEM_EVENT",
                ranking : 1,
                item : {
                    name: "Copper Key",
                    itemType: "Key",
                    description: "Copper Key",
                    weight: "SMALL",
                    imageUrl: "images/shadow/items/copperkey.png"
                }
         },{
            eventType : "ACQUIRE_ITEM_EVENT",
                ranking : 2,
                item : {
                    name: "Prism",
                    itemType: "UTILITY",
                    description: "glass prism",
                    weight: "SMALL",
                    imageUrl: "images/shadow/items/prism.png"
                }
         }]

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 57,
                content : "Turn to "
            }
         ]
    },{    /*
         * -- --------------------------------------------------------
         * --  Storysection 101
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 101,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "The man screams and keels over, writhing on the floor for a few moments before exhaling his last breath. Meanwhile, his partner has scrambled to his feet, forgetting his weapon in his hurry to escape along the passage. You give chase, pausing only to snatch up the discarded trident; you know you must stop him before he warns other guards. You draw back the trident and throw. It strikes him squarely in the back, pitching him forward as it makes impact. He is dead before he hits the floor. A search of the dead bodies uncovers the following items: 4 Gold Crowns 1 Dagger 1 Sword 1 Potion of Alether (Increases COMBAT SKILL by 2 points for the duration of one fight.) You may also take the Blowpipe and the remaining Sleep Dart. If you decide to keep them, mark them on your Action Chart as Backpack Items. In the robe of the dead blowpipe firer you find a small piece of parchment, on which is written today’s date and the number 67. A smile creeps across your face as you realize that this is the number that will open the bronze door. You hold your breath and twist the dial!",

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
            }]

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 67,
                content : "Turn to "
            }
         ]
    },{    /*
         * -- --------------------------------------------------------
         * --  Storysection 102
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 102,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "A thorough search of both bodies uncovers the following items: 1 Sword 1 Dagger 1 Warhammer 6 Gold Crowns Gaoler’s Keys (Special Item) You may take any of the above items. Remember to mark them on your Action Chart. The Gaoler’s Keys should be worn attached to your belt. You remember to lock the cell door before you hurry off along the corridor.",

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
                    name: "Warhammer",
                    itemType: "WEAPON",
                    description: "Warhammer",
                    weight: "HEAVY",
                    imageUrl: "images/shadow/items/warhammer.png",
                }
            },{
                eventType: "CHANGE_GOLD_AMOUNT_EVENT",
                ranking: 1,
                amount: 6,
            },{
                eventType : "ACQUIRE_ITEM_EVENT",
                ranking : 3,
                item : {
                    name : "Gaoler's Keys",
                    itemType: "KEY",
                    description : "Gaoler's Keys",
                    weight: "SMALL",
                    imageUrl : "images/flight/items/gaolerskeys.png"
                }
            }]

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 67,
                content : "Turn to "
            }
         ]
    },{    /*
         * -- --------------------------------------------------------
         * --  Storysection 103
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 103,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "You feel your muscles start to relax. The oil soothes the cuts and bruises which cover your body and restores 2 ENDURANCE points. Make the necessary adjustments to your Action Chart.",

         events:[{
            eventType: "CHANGE_ENDURANCE_EVENT",
            ranking:1,
            amount:2
         }]

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 71,
                content : "Turn to "
            }
         ]
    },{    /*
         * -- --------------------------------------------------------
         * --  Storysection 104
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 104,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "‘Take him!’ shouts Maouk. ‘But take him alive!’ You sprint towards the distant galley. The crew are still unaware of the desperate situation. They have not witnessed the murder of the envoy and are still oblivious to your peril. Before you can shout for help, a horseman cuts across your path, blocking your access to the ship.",

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 20,
                content : "If you wish to attack the horseman, turn to "
            },{
                outcomeType : "DEFAULT",
                targetNr : 142,
                content : "If you wish to evade combat by diving into the sea, turn to "
            },{
                outcomeType : "DEFAULT",
                targetNr : 176,
                content : "If you decide to surrender, turn to "
            }
         ]
    },{    /*
         * -- --------------------------------------------------------
         * --  Storysection 105
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 105,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "Your attention is drawn to a marble bust standing in an alcove, one of many standing along the south wall. A closer inspection of the bust reveals a hinge at the base of the neck. The head tilts backwards to reveal a tiny lever.",

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 171,
                content : "If you wish to pull the lever, turn to "
            },{
                outcomeType : "DEFAULT",
                targetNr : 158,
                content : "If you wish to close the head and continue along the corridor, turn to "
            }
         ]
    },{    /*
         * -- --------------------------------------------------------
         * --  Storysection 106
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 106,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "You crash onto the rider and pull him from the saddle, but you land badly and lose your grip. The courier is first to stagger to his feet; he unsheathes his sword and attacks before you have a chance to stand up. Courier: COMBAT SKILL 16   ENDURANCE 23 Deduct 2 from your COMBAT SKILL for the first 3 rounds of combat, as you are still lying on the ground. You cannot evade combat and must fight the courier to the death. [Illustration VI]",

         events:[
         {
            eventType: "TEMPORARY_CHANGE_COMBAT_SKILL_EVENT",
            ranking:1,
            amount:-2
         },{
            eventType: "COMBAT",
                ranking: 2,
                creature: {
                    name: "Courier",
                    combatSkill: 16,
                    endurance: 23,
                    imageUrl: "images/shadow/creatures/courier.png",
                }
         }]

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 36,
                content : "If you wish to fight, turn to "
            },{
                outcomeType : "DEFAULT",
                targetNr : 176,
                content : "If you decide to surrender, turn to "
            }
         ]
    },{    /*
         * -- --------------------------------------------------------
         * --  Storysection 107
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 107,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "You concentrate all your healing skill on repairing your damaged lung. Gradually, the pain in your chest subsides and a warm glow spreads from the centre of your body, radiating out to your arms and legs. Your Kai skill heals the wound, but you are still greatly weakened by the loss of blood. ",

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 102,
                content : "If you wish to search the guards’ bodies, turn to "
            },{
                outcomeType : "DEFAULT",
                targetNr : 150,
                content : "If you wish to ignore the bodies and escape along the corridor, turn to "
            }
         ]
    },{    /*
         * -- --------------------------------------------------------
         * --  Storysection 108
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 108,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "Several yards along the new tunnel are more chutes, each covered by an iron grating. Streams of green water pour into the main course, giving off a choking and acrid vapour which attacks your throat and lungs. You wade past the chutes, but you lose 2 ENDURANCE points due to the effects of the corrosive gas. Make the necessary adjustments to your Action Chart.",

         events:[{
            eventType: "CHANGE_ENDURANCE_EVENT",
            ranking:1,
            amount:-2
         }]

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 112,
                content : "Turn to "
            }
         ]
    },{    /*
         * -- --------------------------------------------------------
         * --  Storysection 109
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 109,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "You drop to the street below and run across the marketplace towards the hall. The building is full of people kneeling in prayer. You notice an avenue leading off to the right, which ends at an archway too narrow for more than one horse to pass. To your left, another alley leads down to the harbour.",

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 32,
                content : "If you wish to enter the hall, turn to "
            },{
                outcomeType : "DEFAULT",
                targetNr : 169,
                content : "If you wish to turn right and head for the archway, turn to "
            },{
                outcomeType : "DEFAULT",
                targetNr : 129,
                content : "If you decide to double back to the harbour, turn to "
            }
         ]
    },{    /*
         * -- --------------------------------------------------------
         * --  Storysection 110
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 110,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "A gigantic creeping reptile hangs from the ceiling, gripping the stone with its long, curved claws. Its huge oval eyes flicker hungrily as it picks up the scent of live human flesh—your flesh! It is poised to strike, and you cannot evade its attack. Kwaraz: COMBAT SKILL 19   ENDURANCE 30 The giant reptile is very susceptible to psychic power, so if you have the Kai Discipline of Mindblast, add 4 instead of the normal 2 to your basic COMBAT SKILL for the duration of the fight.",

         events:[
         {
            eventType:"TEMPORARY_CHANGE_COMBAT_SKILL_EVENT",
            ranking:1,
            amount:4
         },{
            eventType:"COMBAT",
            ranking : 2,
                creature : {
                    name : "Kwaraz",
                    combatSkill : 19,
                    endurance : 30,
                    imageUrl : "images/flight/creatures/kwaraz.png"
                }
         }
            ],

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 36,
                content : "If you wish to fight, turn to "
            },{
                outcomeType : "DEFAULT",
                targetNr : 176,
                content : "If you decide to surrender, turn to "
            }
         ]
    },{    /*
         * -- --------------------------------------------------------
         * --  Storysection 111
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 111,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "You are feeling weakened by the heat and by the fatigue of combat, but your spirits are high after having beaten such a formidable enemy. You search the armourer’s body and discover 3 Gold Crowns and a Copper Key. If you wish to keep the key, put it in your pocket and mark it on your Action Chart as a Special Item.",

         events:[
         {
            eventType:"CHANGE_GOLD_AMOUNT_EVENT",
            ranking:1,
            amount:3
         },{
            eventType:"ACQUIRE_ITEM_EVENT",
            ranking:2,
            item:{
                name: "Copper Key",
                itemType: "Key",
                description: "Copper Key",
                weight: "SMALL",
                imageUrl: "images/shadow/items/copperkey.png"
            }
         }
            ],

        outcomes:[
            {
                outcomeType : "ABILITY",
                targetNr : 74,
                ability : {
                    abilityType : "TRACKING",
                    description : "This skill enables a Kai Lord to make the correct choice of a path in the wild, to discover the location of a person or object in a town or city and to read the secrets of footprints or tracks."
                },
                content : "If you have the Kai Discipline of Tracking, turn to "
            },{
                outcomeType : "DEFAULT",
                targetNr : 167,
                content : "If you wish to leave the forge room by the north door, turn to "
            },{
                outcomeType : "DEFAULT",
                targetNr : 44,
                content : "If you wish to leave by the west door, turn to "
            }
         ]
    },{    /*
         * -- --------------------------------------------------------
         * --  Storysection 112
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 112,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "You soon reach a section of tunnel where the ceiling is much higher. A stone walkway lines the left wall, with steps at regular intervals. You pull yourself onto the walkway and begin to scrape away the worst of the slime that encrusts your legs.",

        outcomes:[
            {
                outcomeType : "ABILITY",
                targetNr : 133,
                ability : {
                    abilityType : "ANIMAL_KINMANSHIP",
                    description : "This skill enables a Kai Lord to communicate with some animals and to be able to guess the intentions of others."
                },
                content : "If you have the Kai Discipline of Animal Kinship, turn to "
            },{
                outcomeType : "DEFAULT",
                targetNr : 64,
                content : "If you wish to continue along the walkway, turn to "
            },{
                outcomeType : "DEFAULT",
                targetNr : 116,
                content : "If you wish to climb a narrow stair in the left wall, turn to "
            }
         ]
    },{    /*
         * -- --------------------------------------------------------
         * --  Storysection 113
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 113,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "The passage ends at a tree-lined plaza. You must find somewhere to hide; your fair skin and your Kai cloak and tunic make you stand out in the city crowd. To your left is a small dwelling with a curious wooden sign hanging above the door, carved in the shape of a fish. To your right is a tavern. The sign above the tavern door seems oddly appropriate: THE HUNTED LORD",

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 53,
                content : "If you possess the Kai Discipline of Healing, turn to "
            },{
                outcomeType : "DEFAULT",
                targetNr : 157,
                content : "If you decide to enter the dwelling, turn to "
            },{
                outcomeType : "DEFAULT",
                targetNr : 188,
                content : "If you decide to enter the tavern, turn to "
            }
         ]
    },{    /*
         * -- --------------------------------------------------------
         * --  Storysection 114
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 114,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "You reach a point where the chimney is no longer a vertical shaft, but curves into a horizontal tunnel leading south. Although the heat is oppressive, the steam has cleared. Every nerve and tissue in your body seems agonizingly sensitive, and you progress along the narrow shaft with difficulty. All hope of signing a peace treaty with the new Zakhan has vanished; your only concern now is to escape from this hellish sewer and somehow get back to Sommerlund as quickly as possible. You notice a square vent cover in the ceiling less than ten feet ahead. It is badly corroded, and you have to lie on your back and kick with both feet to force it open. The effort drains your last reserves of stamina, but you are rewarded with success. By pure chance you have gained access to the one place in Barrakeesh you most needed to visit—the public baths. ",

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 90,
                content : "Turn to "
            }
         ]
    },{    /*
         * -- --------------------------------------------------------
         * --  Storysection 115
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 115,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "Placing your ear close to the keyhole, you hear faint but horrible sounds. Screams of agony mingled with hysterical laughter and heart-rending sobs. The crack of a whip and the creaking of a rack confirm your suspicions that a torture chamber lies beyond this door. The terrible sounds make you shudder, and you waste no time in hurrying away from the chamber by the north door.",

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 132,
                content : "Turn to "
            }
         ]
    },{    /*
         * -- --------------------------------------------------------
         * --  Storysection 116
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 116,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "You climb the stone steps to a small chamber above the tunnel. Here, at least, it is dry, even though the foul sewer gas permeates everything. You follow a narrow passage, first to the west, and then to the south as it makes an abrupt left turn. Your heart sinks as you see a dead end loom ahead.",

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 33,
                content : "If you wish to search for a hidden exit, turn to "
            },{
                outcomeType : "DEFAULT",
                targetNr : 64,
                content : "If you decide to turn around and go back to the walkway, turn to "
            }
         ]
    },{    /*
         * -- --------------------------------------------------------
         * --  Storysection 117
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 117,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "The twisting alley comes to an end in a small garden square flanked on three sides by tall, domed houses, all with first-floor balconies. Wrought-iron grilles reinforce every window and door. You are near the top of a heavy wooden trellis that hangs below a balcony, when Maouk’s men burst into the square. Many are armed with heavy bronze crossbows. ‘Surrender, Lone Wolf!’ shouts Maouk. ‘Or my men will pin you to the wall!’ The situation is hopeless; at such short range, the Sharnazim cannot fail to hit you. Cursing your misfortune, you leap to the ground, landing at the feet of Maouk. ‘You are brave, Kai Lord,’ he snarls. ‘But you will need more than bravery to save you now!’",

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 176,
                content : "Turn to "
            }
         ]
    },{    /*
         * -- --------------------------------------------------------
         * --  Storysection 118
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 118,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "The guard raises the blowpipe to his lips. His cheeks swell, and then there is a sharp hiss warning you that another tainted needle speeds towards your head. Pick a number from the Random Number Table. If you have the Kai Discipline of Hunting, add 2 to the number you have picked. If you have reached the Kai rank of Warmarn or higher, add 1 to the number.",

        outcomes:[
            {
                outcomeType : "RANDOM",
                targetNr : 89,
                intervall : {
                    min : 0,
                    max : 3
                },
                content : "If your total score is now 0–3, turn to "
            },{
                outcomeType : "RANDOM",
                targetNr : 21,
                intervall : {
                    min : 4,
                    max : 12
                },
                content : "If your total is now 4–12, turn to "
            }
         ]
    },{    /*
         * -- --------------------------------------------------------
         * --  Storysection 119
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 119,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "You catch both guards totally by surprise. Add 4 COMBATSKILL to your score in the first 3 rounds of combat, due to the surprise and ferocity of your attack. You must fight both guards as one enemy. Palace Gate Guardians: COMBAT SKILL 16   ENDURANCE 30 If you win the combat, you quickly hide the bodies before passing through the entrance into the palace gardens beyond.",

         events:[
            {
                eventType:"TEMPORARY_CHANGE_COMBAT_SKILL_EVENT",
                ranking:1,
                amount:4
            },
         {
            eventType:"COMBAT",
            ranking:2,
            creature : {
                    name : "Palace Gate Guardians",
                    combatSkill : 16,
                    endurance : 30,
                    imageUrl : "images/flight/creatures/gateguardians.png"
                }
         }]

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 137,
                content : "Turn to "
            }
         ]
    },{    /*
         * -- --------------------------------------------------------
         * --  Storysection 120
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 120,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "The dagger hisses through the air and thuds into your chest. You gasp at the sudden pain, clawing at the hilt of the dagger with trembling hands in your panic to draw out the deadly blade. As you stagger backwards, the guard rushes forward, a smile of triumph spreading across his ugly face. You wrench the blade free and turn it on the guard as he dives towards you. He sees the danger but far too late—the blade has already pierced his heart.",

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 22,
                content : "Turn to "
            }
         ]
    },{    /*
         * -- --------------------------------------------------------
         * --  Storysection 121
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 121,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "From out of the gloom, three Sharnazim warriors suddenly appear. The razor-sharp edges of their swords glint in the darkness; thirsty blades gasping for your blood.",

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 60,
                content : "If you wish to attack the warriors, turn to "
            },{
                outcomeType : "DEFAULT",
                targetNr : 84,
                content : "If you wish to evade them, you must turn back and swim across the sewer vault. Turn to "
            }
         ]
    },{    /*
         * -- --------------------------------------------------------
         * --  Storysection 122
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 122,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "The heavy wooden door is reinforced with bands of black iron, held in place by huge bronze studs. You turn the handle, only to find the door is locked.",

        outcomes:[
            {
                outcomeType : "ITEM",
                targetNr : 136,
                item:{
                    code : "GAOLERS_KEYS",
                    name : "Gaoler's Keys",
                    description : "Gaoler's Keys",
                    imageUrl : "images/flight/items/gaolerskeys.png"
                },
                content : "If you possess the Gaoler’s Keys, turn to "
            },{
                outcomeType : "DEFAULT",
                targetNr : 26,
                content : "If you do not have this Special Item, turn to "
            }
         ]
    },{    /*
         * -- --------------------------------------------------------
         * --  Storysection 123
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 123,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "The noise grows louder. Suddenly the door latch rattles and a gruff voice growls out above the din: ‘Break it down!’ Shards of wood and twisted iron are scattered throughout the cellar as the sharp blade of a two-handed axe explodes through the door. The hinges burst from the wall and in run your pursuers, stumbling on the tangle of shattered timbers. You spring forward, striking left and right, and bringing two men down before they even see you. The officer, a bull-necked warrior with a flat nose, elbows the others aside and attacks. You strike first, jarring the scimitar from his grasp with a well-aimed blow to his wrist. He bellows like an ox but attacks again, a long-bladed dagger clenched in his uninjured hand. Sharnazim Underlord: COMBAT SKILL 18   ENDURANCE 28 [Illustration VII] ",

         events:[{
            eventType:"COMBAT",
            ranking:1,
            creature:{
                name : "Sharnazim Underlord",
                    combatSkill : 18,
                    endurance : 28,
                    imageUrl : "images/flight/creatures/sharnazimunderlord.png"
            }
         }],

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 51,
                content : "You can evade the combat at any stage by escaping through the trapdoor. Turn to "
            },{
                outcomeType : "DEFAULT",
                targetNr : 198,
                content : "If you win the combat, turn to "
            }
         ]
    },{    /*
         * -- --------------------------------------------------------
         * --  Storysection 124
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 124,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "You leap from the window ledge and crash feet-first into the guards, bowling them over with the surprise your attack. You fight with speed and skill, killing three soldiers before they can regain their balance. However, the noise of combat alerts the mess hall, and a dozen more of the Zakhan’s soldiers join the battle. You are quickly overwhelmed by the sheer weight of numbers, and it is only their respect for your bravery and combat prowess that prevents them killing you on the spot. You are disarmed and frog-marched to a prison cell, where you are left to await the Zakhan.",

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 18,
                content : "Turn to "
            }
         ]
    },{    /*
         * -- --------------------------------------------------------
         * --  Storysection 125
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 125,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "The horse and its dead rider topple from the quayside and splash into the sea. The crew have drawn up the gangplank, forcing you to leap the gap. You fall short and land on the row of oars bristling from the galley’s side. The wood is wet and slippery, and you have to fight to keep your balance. Pick a number from the Random Number Table. If you have the Kai Discipline of Hunting, add 2 to the number you have picked.",

        outcomes:[
            {
                outcomeType : "RANDOM",
                targetNr : 50,
                intervall : {
                    min : 0,
                    max : 3
                },
                content : "If your total is now 0–3, turn to "
            },{
                outcomeType : "RANDOM",
                targetNr : 191,
                intervall : {
                    min : 4,
                    max : 12
                },
                content : "If your total is now 4 or more, turn to "
            }
         ]
    },{    /*
         * -- --------------------------------------------------------
         * --  Storysection 126
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 126,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "Keeping in the shadow cast by the tomb, you advance on the north gate. Only two soldiers stand guard were there would normally be twenty. Suddenly, the gate opens to admit a rider. He hands a scroll to the guards before galloping through the open gate. The guards read the scroll, seemingly unaware that the gate is still open.",

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 170,
                content : "If you possess the Kai Disciplines of both Camouflage and Hunting, turn to "
            },{
                outcomeType : "DEFAULT",
                targetNr : 19,
                content : "If you decide to attempt to bribe the guards, turn to "
            },{
                outcomeType : "DEFAULT",
                targetNr : 119,
                content : "If you decide to attack them, turn to "
            }
         ]
    },{    /*
         * -- --------------------------------------------------------
         * --  Storysection 127
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 127,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "You walk back along the corridor to the junction in order to get a long run at the door—you know that if you barge the door in exactly the right place, you will tear loose the lock from the wall. Pick a number from the Random Number Table and add 10.",

         events:[{
            eventType:"CHANGE_ENDURANCE_EVENT",
            ranking:1,
            amount:-1
         }],
/////////////////////////////////////////////////Schneider was mach i da /////////////////////////////////////////
        outcomes:[
            {
                outcomeType : "RANDOM",
                targetNr : 159,
                intervall : {
                    min : 0,
                    max : COMBATSKILL
                },
                content : "If your total is equal to or less than your COMBAT SKILL, the wall cracks and lock bursts open. Turn to "
            },{
                outcomeType : "RANDOM",
                targetNr : 93,
                intervall : {
                    min : COMBATSKILL,
                    max : 100
                },
                content : "If your total is greater than your COMBAT SKILL, the door remains locked. You sustain a badly bruised shoulder and lose 1 ENDURANCE point. You must head off dejectedly along the other passage towards the stairs. Turn to "
            }
         ]
    },{    /*
         * -- --------------------------------------------------------
         * --  Storysection 128
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 128,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "Your reach a domed sewer-vault where the tunnel widens. A chute descends from the centre of the chamber, ending just a few feet above the oily surface of the water; a mass of food scraps and offal floats beneath the chute, and the stink of rotting meat is overpowering. You are about to step into the vault when you detect that the tunnel floor drops away. You freeze just in time to prevent yourself from stepping straight into deep water. The tunnel continues beyond the vault, but over twenty feet of putrid sewage lies between you and the other side. The echo of a distant splash reminds you that the Sharnazim are still following. If you possess a Rope, you can try to catch it upon a long metal bar that protrudes from the side of the chute to pull yourself out of the water and swing across to the opposite tunnel.",

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 29,
                content : "If you have a Rope and decide to use it in the manner described above, turn to "
            },{
                outcomeType : "DEFAULT",
                targetNr : 84,
                content : "If you decide to try to swim across the vault to the tunnel, turn to "
            },{
                outcomeType : "DEFAULT",
                targetNr : 121,
                content : "If you would rather turn around and make your way back to the junction, turn to "
            }
         ]
    },{    /*
         * -- --------------------------------------------------------
         * --  Storysection 129
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 129,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "From the shadow of a doorway, you peer out across the harbour. The square is alive with Maouk’s soldiers. It will be far too dangerous to enter the harbour; you must find somewhere else to hide until it is safer. Groups of soldiers are searching the houses that border the square, and you are forced to leave the doorway and run back along the alley. As you re-enter the marketplace, you run straight into a dozen Sharnazim led by Maouk himself.",

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 36,
                content : "If you wish to stand and fight, turn to "
            },{
                outcomeType : "DEFAULT",
                targetNr : 176,
                content : "If you wish to surrender, turn to "
            }
         ]
    },{    /*
         * -- --------------------------------------------------------
         * --  Storysection 130
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 130,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "You snatch the Herb Pad from the dead warrior’s face (mark this as a Special Item on your Action Chart) and cover your own mouth with this sweet-smelling pouch. The herbs inside neutralize the foul air, making it easier to breathe. Restore 1 ENDURANCE point. The dead body sinks from view, and you hear the sound of more Sharnazim wading along the tunnel. You cannot outdistance them—you must hide.",

         events:[
            {
                eventType:"ACQUIRE_ITEM_EVENT",
                ranking:1,
                item : {
                    name : "Herb Pad",
                    itemType: "UTILITY",
                    description : "Pouch with herbs to breath through",
                    weight: "SMALL",
                    imageUrl : "images/flight/items/herbpad.png"
                }
            }],

        outcomes:[
            {
                outcomeType : "ABILITY",
                targetNr : 151,
                ability : {
                    abilityType : "CAMOUFLAGE",
                    description : "This Discipline enables a Kai Lord to blend in with his surroundings. In the countryside, he can hide undetected among trees and rocks and pass close to an enemy without being seen. In a town or city, it enables him to look and sound like a native of that area, and can help him to find shelter or a safe hiding place."
                },
                content : "If you possess the Kai Discipline of Camouflage, turn to "
            },{
                outcomeType : "DEFAULT",
                targetNr : 15,
                content : "If you do not have this skill, turn to "
            }
         ]
    },{    /*
         * -- --------------------------------------------------------
         * --  Storysection 131
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 131,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "You sift through the vast number of items that litter the dais, separating the following articles, which may or may not be of use: Silver Comb Hourglass Dagger Healing Potion of Laumspur (restores 4 ENDURANCE points if swallowed after combat) Prism Enough food for 3 Meals (each Meal counts as 1 Backpack Item)",

         events:[
            {
                eventType: "ACQUIRE_ITEM_EVENT",
                ranking:1,
                item : {
                    name : "Silver Comb",
                    itemType: "BACK_PACK",
                    description : "Silver Comb",
                    weight: "SMALL",
                    imageUrl : "images/flight/items/silvercomb.png"
                }
            },{
                eventType: "ACQUIRE_ITEM_EVENT",
                ranking:2,
                item : {
                    name : "Hourglass",
                    itemType: "BACK_PACK",
                    description : "Hourglass",
                    weight: "SMALL",
                    imageUrl : "images/flight/items/hourglass.png"
                }
            },{
                eventType: "ACQUIRE_ITEM_EVENT",
                ranking:3,
                item : {
                    name : "Dagger",
                    itemType : "WEAPON",
                    description : "Dagger",
                    weight : "SMALL",
                    imageUrl : "images/flight/items/dagger.png"
                }
            },{
                eventType: "ACQUIRE_ITEM_EVENT",
                ranking:4,
                item : {
                    name : "Potion of Laumspur",
                    itemType : "POTION",
                    description : "restores 4 ENDURANCE Points",
                    weight : "SMALL",
                    imageUrl : "images/flight/items/Laumspurpotion.png"
                }
            },{
                eventType: "ACQUIRE_ITEM_EVENT",
                ranking:5,
                item : {
                    name: "Prism",
                    itemType: "UTILITY",
                    description: "glass prism",
                    weight: "SMALL",
                    imageUrl: "images/shadow/items/prism.png"
                }
            },{
                eventType: "ACQUIRE_ITEM_EVENT",
                ranking:6,
                item : {
                    name : "3 Meals",
                    itemType: "BACK_PACK",
                    description : "3 Meal Portions",
                    weight: "Medium",
                    imageUrl : "images/flight/items/meals.png"
                }
            }],

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 58,
                content : "Turn to "
            }
         ]
    },{    /*
         * -- --------------------------------------------------------
         * --  Storysection 132
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 132,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "You move quickly and quietly along the north corridor and soon arrive at another arched passage that heads off to the west. A fierce glow can be seen in the distance, and you hear the hiss of red-hot steel as it is thrust into water and the clang of hammer on anvil—the unmistakable sounds of a blacksmithy.",

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 195,
                content : "If you wish to go west, towards the noise, turn to "
            },{
                outcomeType : "DEFAULT",
                targetNr : 30,
                content : "If you wish to keep moving north, turn to "
            }
         ]
    },{    /*
         * -- --------------------------------------------------------
         * --  Storysection 133
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 133,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "You recognize the tracks of a Kwaraz in the slimy mud of the walkway. Kwaraz are giant carnivorous reptiles. The number and varying size of the prints suggest that a whole colony of these loathsome creatures inhabit the tunnel. You decide it is far too dangerous to continue in this direction, and instead climb a narrow stairway that leads to a chamber above the tunnel. Here at least it is dry, although the foul sewer gas permeates everything. You follow a narrow passage, first to the west and then south, but your heart sinks as you see a dead end looming ahead.",

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 33,
                content : "If you wish to search for a hidden exit, turn to "
            },{
                outcomeType : "DEFAULT",
                targetNr : 64,
                content : "If you decide to turn around and return to the walkway, turn to "
            }
         ]
    }{    /*
         * -- --------------------------------------------------------
         * --  Storysection 134
         * -- --------------------------------------------------------
         */
         sectionType : "STORY_SECTION",
         sectionNr : 134,
         book : {
            name: "Shadow on the Sand",
            imageUrl: "images/shadow/title.jpg",
            author: "Joe Dever",
            illustrator: "Gary Chalk"
         },
         region : {
            name: "Vassagonia",
            regionType: "CONTINENT",
            description:
                "Vassagonia is a vast and unforgiving desert empire located in the southern reaches of Magnamund. The empire is ruled by the Zakhan of Vassagonia, who now seeks peace between Sommerlund and Vassagonia.",
            imageUrl: "images/shadow/regions/vassagonia.png"
         },
         content : "You use your Kai Discipline to force the creature away. The Bloodlug changes direction and jets towards a squid that has taken refuge in a large copper urn. You continue swimming but keep a watchful eye on the Bloodlug as it engulfs and devours the helpless squid.",

        outcomes:[
            {
                outcomeType : "DEFAULT",
                targetNr : 95,
                content : "Turn to "
            }
         ]
    }