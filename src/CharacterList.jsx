
    const ryu = {
        name: "Ryu",
        sLP: {
          name: "Standing Light Punch",
          startup: 4,
          onblock: -1,
          image: "/src/assets/ryu/sLP.png",
        },
        sMP: {
          name: "Standing Medium Punch",
          startup: 6,
          onblock: -1,
          image: "/src/assets/ryu/sMP.png",
        },
        sHP: {
          name: "Standing Heavy Punch",
          startup: 10,
          onblock: -2,
          image: "/src/assets/ryu/sHP.png",
        },
        sLK: {
          name: "Standing Light Kick",
          startup: 5,
          onblock: -4,
          image: "/src/assets/ryu/sLK.png",
        },
        sMK: {
          name: "Standing Medium Kick",
          startup: 9,
          onblock: -4,
          image: "/src/assets/ryu/sMK.png",
        },
        sHK: {
          name: "Standing Heavy Kick",
          startup: 12,
          onblock: 1,
          image: "/src/assets/ryu/sHK.png",
        },
        crLP: {
          name: "Crouching Light Punch",
          startup: 4,
          onblock: -1,
          image: "/src/assets/ryu/crLP.png",
        },
        crMP: {
          name: "Crouching Medium Punch",
          startup: 6,
          onblock: 0,
          image: "/src/assets/ryu/crMP.png",
        },
        crHP: {
          name: "Crouching Heavy Punch",
          startup: 9,
          onblock: -7,
          image: "/src/assets/ryu/crHP.png",
        },
        crLK: {
          name: "Crouching Light Kick",
          startup: 5,
          onblock: -3,
          image: "/src/assets/ryu/crLK.png",
        },
        crMK: {
          name: "Crouching Medium Kick",
          startup: 8,
          onblock: -6,
          image: "/src/assets/ryu/crMK.png",
        },
        crHK: {
          name: "Crouching Heavy Kick",
          startup: 9,
          onblock: -12,
          image: "/src/assets/ryu/crHK.png",
        },
        targets: {
          "sHP>HK": {
            name: "High Double Strike",
            startup: 19,
            onblock: -8,
            image: "/src/assets/ryu/sHPHK.png"
          },
          "sMP>LK": {
            name: "Fuwa Double Strike",
            startup: 11,
            onblock: -7,
            image: "/src/assets/ryu/sMPLK.png"
          },
          "sMP>LK>HK": {
            name: "Fuwa Triple Strike",
            startup: 27,
            onblock: -8,
            image: "/src/assets/ryu/sMPLKHK.png"
          }
        },
        commands: {
          fMP: {
          name: "Collarbone Breaker",
          startup: 20,
          onblock: -3,
          image: "/src/assets/ryu/fMP.png",
        },
         fHP: {
          name: "Solar Plexus Strike",
          startup: 20,
          onblock: 1,
          image: "src/assets/ryu/fHP.png",
        },
         bHP: {
          name: "Short Uppercut",
          startup: 7,
          onblock: -13,
          image: "src/assets/ryu/bHP.png",
        },
         fHK: {
          name: "Whirlwind Kick",
          startup: 16,
          onblock: -4,
          image: "src/assets/ryu/fHK.png",
        },
         bHK: {
          name: "Axe Kick",
          startup: 10,
          onblock: -4,
          image: "src/assets/ryu/bHK.png",
        }
      },
        profile: "src/assets/ryu/profile.png"
      };
    
      const ken = {
        name: "Ken",
        sLP: {
          name: "Standing Light Punch",
          startup: 4,
          onblock: -1,
          image: "/src/assets/ken/sLP.png",
        },
        sMP: {
          name: "Standing Medium Punch",
          startup: 5,
          onblock: -2,
          image: "/src/assets/ken/sMP.png",
        },
        sHP: {
          name: "Standing Heavy Punch",
          startup: 10,
          onblock: -2,
          image: "/src/assets/ken/sHP.png",
        },
        sLK: {
          name: "Standing Light Kick",
          startup: 5,
          onblock: -2,
          image: "/src/assets/ken/sLK.png",
        },
        sMK: {
          name: "Standing Medium Kick",
          startup: 8,
          onblock: -5,
          image: "/src/assets/ken/sMK.png",
        },
        sHK: {
          name: "Standing Heavy Kick",
          startup: 12,
          onblock: -5,
          image: "/src/assets/ken/sHK.png",
        },
        crLP: {
          name: "Crouching Light Punch",
          startup: 4,
          onblock: -1,
          image: "/src/assets/ken/crLP.png",
        },
        crMP: {
          name: "Crouching Medium Punch",
          startup: 6,
          onblock: 0,
          image: "/src/assets/ken/crMP.png",
        },
        crHP: {
          name: "Crouching Heavy Punch",
          startup: 8,
          onblock: -10,
          image: "/src/assets/ken/crHP.png",
        },
        crLK: {
          name: "Crouching Light Kick",
          startup: 5,
          onblock: -3,
          image: "/src/assets/ken/crLK.png",
        },
        crMK: {
          name: "Crouching Medium Kick",
          startup: 7,
          onblock: -6,
          image: "/src/assets/ken/crMK.png",
        },
        crHK: {
          name: "Crouching Heavy Kick",
          startup: 8,
          onblock: -10,
          image: "/src/assets/ken/crHK.png",
        },
        profile: "/src/assets/ken/profile.png",
        targets: {
          "sMP>HP": {
            name: "Chin Buster",
            startup: 16,
            onblock: -14,
            image: "/src/assets/ken/sMPHP.png"
          },
          "sMK>MK": {
            name: "Triple Flash Kicks 1",
            startup: 19,
            onblock: -12,
            image: "/src/assets/ken/sMKMK.png"
          },
          "sMK>MK>HK": {
            name: "Triple Flash Kicks 2",
            startup: 32,
            onblock: -11,
            image: "/src/assets/ken/sMKMKHK.png"
          }
        }
      };
    
      const  chunli= {
        name: "Chun-Li",
        sLP: {
          name: "Standing Light Punch",
          startup: 4,
          onblock: -3,
          image: "/src/assets/chunli/sLP.png",
        },
        sMP: {
          name: "Standing Medium Punch",
          startup: 5,
          onblock: 1,
          image: "/src/assets/chunli/sMP.png",
        },
        sHP: {
          name: "Standing Heavy Punch",
          startup: 13,
          onblock: -4,
          image: "/src/assets/chunli/sHP.png",
        },
        sLK: {
          name: "Standing Light Kick",
          startup: 5,
          onblock: -2,
          image: "/src/assets/chunli/sLK.png",
        },
        sMK: {
          name: "Standing Medium Kick",
          startup: 7,
          onblock: -2,
          image: "/src/assets/chunli/sMK.png",
        },
        sHK: {
          name: "Standing Heavy Kick",
          startup: 14,
          onblock: 0,
          image: "/src/assets/chunli/sHK.png",
        },
        crLP: {
          name: "Crouching Light Punch",
          startup: 4,
          onblock: -2,
          image: "/src/assets/chunli/crLP.png",
        },
        crMP: {
          name: "Crouching Medium Punch",
          startup: 6,
          onblock: -2,
          image: "/src/assets/chunli/crMP.png",
        },
        crHP: {
          name: "Crouching Heavy Punch",
          startup: 11,
          onblock: -3,
          image: "/src/assets/chunli/crHP.png",
        },
        crLK: {
          name: "Crouching Light Kick",
          startup: 4,
          onblock: -2,
          image: "/src/assets/chunli/crLK.png",
        },
        crMK: {
          name: "Crouching Medium Kick",
          startup: 7,
          onblock: -6,
          image: "/src/assets/chunli/crMK.png",
        },
        crHK: {
          name: "Crouching Heavy Kick",
          startup: 9,
          onblock: -7,
          image: "/src/assets/chunli/crHK.png",
        },
    
        commands: {
        "bMP or fMP": {
            name: "Swift Thrust",
            startup: 7,
            onblock: -3,
            image: "src/assets/chunli/bMPorfMP.png",
        },
        "bHP": {
            name: "Hakkei",
            startup: 8,
            onblock: -1,
            image: "src/assets/chunli/bHP.png",
        },
        "dfHP": {
            name: "Water Lotus Fist",
            startup: 21,
            onblock: -2,
            image: "src/assets/chunli/dfHP.png",
        },
        "fHK": {
            name: "Yokusen Kick",
            startup: 16,
            onblock: -4,
            image: "src/assets/chunli/fHK.png",
        },
        "dfHK": {
            name: "Falling Crane",
            startup: 37,
            onblock: 5,
            image: "src/assets/chunli/dfHK.png",
        }
        },
        profile: "src/assets/chunli/profile.png"
      }
    
      const blanka = {
        name: "Blanka",
        sLP: {
          name: "Standing Light Punch",
          startup: 5,
          onblock: -3,
          image: "/src/assets/blanka/sLP.png",
        },
        sMP: {
          name: "Standing Medium Punch",
          startup: 10,
          onblock: -4,
          image: "/src/assets/blanka/sMP.png",
        },
        sHP: {
          name: "Standing Heavy Punch",
          startup: 10,
          onblock: -3,
          image: "/src/assets/blanka/sHP.png",
        },
        sLK: {
          name: "Standing Light Kick",
          startup: 4,
          onblock: -2,
          image: "/src/assets/blanka/sLK.png",
        },
        sMK: {
          name: "Standing Medium Kick",
          startup: 8,
          onblock: -2,
          image: "/src/assets/blanka/sMK.png",
        },
        sHK: {
          name: "Standing Heavy Kick",
          startup: 7,
          onblock: -4,
          image: "/src/assets/blanka/sHK.png",
        },
        crLP: {
          name: "Crouching Light Punch",
          startup: 6,
          onblock: -2,
          image: "/src/assets/blanka/crLP.png",
        },
        crMP: {
          name: "Crouching Medium Punch",
          startup: 9,
          onblock: -5,
          image: "/src/assets/blanka/crMP.png",
        },
        crHP: {
          name: "Crouching Heavy Punch",
          startup: 15,
          onblock: -5,
          image: "/src/assets/blanka/crHP.png",
        },
        crLK: {
          name: "Crouching Light Kick",
          startup: 5,
          onblock: -3,
          image: "/src/assets/blanka/crLK.png",
        },
        crMK: {
          name: "Crouching Medium Kick",
          startup: 8,
          onblock: -5,
          image: "/src/assets/blanka/crMK.png",
        },
        crHK: {
          name: "Crouching Heavy Kick",
          startup: 11,
          onblock: -12,
          image: "/src/assets/blanka/crHK.png",
        },
        commands: {
        fMP: {
        name: "Rock Crusher",
        startup: 20,
        onblock: -2,
        image: "/src/assets/blanka/fMP.png",
        },
        fMK: {
        name: "Double Knee Bombs",
        startup: 9,
        onblock: -1,
        image: "/src/assets/blanka/fMK.png",
        },
        bMK: {
        name: "Wild Edge",
        startup: 9,
        onblock: 2,
        image: "/src/assets/blanka/bMK.png",
        },
        fHP: {
        name: "Wild Nail",
        startup: 18,
        onblock: -15,
        image: "/src/assets/blanka/fHP.png",
        },
        "dfHP (sp)": {
        name: "Amazon River Run (spaced)",
        startup: 99,
        onblock: -9,
        image: "/src/assets/blanka/dfHP.png"
        },
        "dfHP (cl)": {
        name: "Amazon River Run (close)",
        startup: 14,
        onblock: -18,
        image: "/src/assets/blanka/dfHP.png"
        }
    },
      profile: "src/assets/blanka/profile.png"
        }
     
      const cammy = {
          name: "Cammy",
          sLP: {
            name: "Standing Light Punch",
            startup: 4,
            onblock: -2,
            image: "/src/assets/cammy/sLP.png",
          },
          sMP: {
            name: "Standing Medium Punch",
            startup: 6,
            onblock: -1,
            image: "/src/assets/cammy/sMP.png",
          },
          sHP: {
            name: "Standing Heavy Punch",
            startup: 8,
            onblock: -3,
            image: "/src/assets/cammy/sHP.png",
          },
          sLK: {
            name: "Standing Light Kick",
            startup: 5,
            onblock: -3,
            image: "/src/assets/cammy/sLK.png",
          },
          sMK: {
            name: "Standing Medium Kick",
            startup: 8,
            onblock: -4,
            image: "/src/assets/cammy/sMK.png",
          },
          sHK: {
            name: "Standing Heavy Kick",
            startup: 11,
            onblock: -4,
            image: "/src/assets/cammy/sHK.png",
          },
          crLP: {
            name: "Crouching Light Punch",
            startup: 4,
            onblock: -2,
            image: "/src/assets/cammy/crLP.png",
          },
          crMP: {
            name: "Crouching Medium Punch",
            startup: 7,
            onblock: -2,
            image: "/src/assets/cammy/crMP.png",
          },
          crHP: {
            name: "Crouching Heavy Punch",
            startup: 10,
            onblock: 1,
            image: "/src/assets/cammy/crHP.png",
          },
          crLK: {
            name: "Crouching Light Kick",
            startup: 5,
            onblock: -2,
            image: "/src/assets/cammy/crLK.png",
          },
          crMK: {
            name: "Crouching Medium Kick",
            startup: 8,
            onblock: -5,
            image: "/src/assets/cammy/crMK.png",
          },
          crHK: {
            name: "Crouching Heavy Kick",
            startup: 9,
            onblock: -10,
            image: "/src/assets/cammy/crHK.png",
          },
          targets: {
        "bMP>HK": {
        name: "Lift Combination",
        startup: 14,
        onblock: -12,
        image: "/src/assets/cammy/bMPHK.png"
        },
        "sHP>HK": {
        name: "Swing Combination",
        startup: 13,
        onblock: -12,
        image: "/src/assets/cammy/sHPHK.png"
        }
            },
          commands: {
        bMP: {
        name: "Lift Uppercut",
        startup: 5,
        onblock: -1,
        image: "/src/assets/cammy/bMP.png"
        },
        bHK: {
        name: "Assault Blade",
        startup: 9,
        onblock: -7,
        image: "/src/assets/cammy/bHK.png"
        },
        fHK: {
        name: "Delayed Ripper",
        startup: 18,
        onblock: -12,
        image: "/src/assets/cammy/fHK.png"
        }
          },
           profile: "src/assets/cammy/profile.png"
        }
    
        const deejay = {
          name: "Dee Jay",
          sLP: {
            name: "Standing Light Punch",
            startup: 4,
            onblock: -1,
            image: "/src/assets/deejay/sLP.png",
          },
          sMP: {
            name: "Standing Medium Punch",
            startup: 7,
            onblock: 2,
            image: "/src/assets/deejay/sMP.png",
          },
          sHP: {
            name: "Standing Heavy Punch",
            startup: 9,
            onblock: -4,
            image: "/src/assets/deejay/sHP.png",
          },
          sLK: {
            name: "Standing Light Kick",
            startup: 5,
            onblock: -2,
            image: "/src/assets/deejay/sLK.png",
          },
          sMK: {
            name: "Standing Medium Kick",
            startup: 9,
            onblock: -1,
            image: "/src/assets/deejay/sMK.png",
          },
          sHK: {
            name: "Standing Heavy Kick",
            startup: 12,
            onblock: -5,
            image: "/src/assets/deejay/sHK.png",
          },
          crLP: {
            name: "Crouching Light Punch",
            startup: 5,
            onblock: -1,
            image: "/src/assets/deejay/crLP.png",
          },
          crMP: {
            name: "Crouching Medium Punch",
            startup: 6,
            onblock: -1,
            image: "/src/assets/deejay/crMP.png",
          },
          crHP: {
            name: "Crouching Heavy Punch",
            startup: 8,
            onblock: -2,
            image: "/src/assets/deejay/crHP.png",
          },
          crLK: {
            name: "Crouching Light Kick",
            startup: 5,
            onblock: -2,
            image: "/src/assets/deejay/crLK.png",
          },
          crMK: {
            name: "Crouching Medium Kick",
            startup: 8,
            onblock: -6,
            image: "/src/assets/deejay/crMK.png",
          },
          crHK: {
            name: "Crouching Heavy Kick",
            startup: 14,
            onblock: -11,
            image: "/src/assets/deejay/crHK.png",
          },
          targets: {
        "sLP>MK": {
        name: "Threebeat Combo 1",
        startup: 13,
        onblock: -3,
        image: "/src/assets/deejay/sLPMK.png"
        },
        "sLP>MK>MK": {
        name: "Threebeat Combo 2",
        startup: 27,
        onblock: -8,
        image: "/src/assets/deejay/sLPMKMK.png"
        },
        "sMP>HP": {
        name: "Dee Jay Special 1",
        startup: 18,
        onblock: -11,
        image: "/src/assets/deejay/sHP.png"
        },
        "sMP>HP>HK": {
        name: "Dee Jay Special 2",
        startup: 31,
        onblock: -13,
        image: "/src/assets/deejay/sHK.png"
        },
        "sMP>MP": {
        name: "Funky Dance 1",
        startup: 19,
        onblock: -2,
        image: "/src/assets/deejay/sMPMP.png"
        },
        "sMP>MP>HP": {
        name: "Funky Dance 2",
        startup: 39,
        onblock: -8,
        image: "/src/assets/deejay/sMPMPHP.png"
        },
      },
          commands: {
        fMK: {
        name: "Sunrise Heel",
        startup: 19,
        onblock: 1,
        image: "/src/assets/deejay/fMK.png"
        },
        bHK: {
        name: "Face Breaker",
        startup: 7,
        onblock: -5,
        image: "/src/assets/deejay/bHK.png"
        },
          },
          profile: "src/assets/deejay/profile.png"
        }
    
        const dhalsim = {
          name: "Dhalsim",
          sLP: {
            name: "Standing Light Punch",
            startup: 4,
            onblock: -1,
            image: "/src/assets/dhalsim/sLP.png",
          },
          sMP: {
            name: "Standing Medium Punch",
            startup: 14,
            onblock: -5,
            image: "/src/assets/dhalsim/sMP.png",
          },
          sHP: {
            name: "Standing Heavy Punch",
            startup: 16,
            onblock: -11,
            image: "/src/assets/dhalsim/sHP.png",
          },
          sLK: {
            name: "Standing Light Kick",
            startup: 9,
            onblock: -6,
            image: "/src/assets/dhalsim/sLK.png",
          },
          sMK: {
            name: "Standing Medium Kick",
            startup: 12,
            onblock: -6,
            image: "/src/assets/dhalsim/sMK.png",
          },
          sHK: {
            name: "Standing Heavy Kick",
            startup: 17,
            onblock: -6,
            image: "/src/assets/dhalsim/sHK.png",
          },
          crLP: {
            name: "Crouching Light Punch",
            startup: 5,
            onblock: -1,
            image: "/src/assets/dhalsim/crLP.png",
          },
          crMP: {
            name: "Crouching Medium Punch",
            startup: 12,
            onblock: -4,
            image: "/src/assets/dhalsim/crMP.png",
          },
          crHP: {
            name: "Crouching Heavy Punch",
            startup: 19,
            onblock: -12,
            image: "/src/assets/dhalsim/crHP.png",
          },
          crLK: {
            name: "Crouching Light Kick",
            startup: 4,
            onblock: -10,
            image: "/src/assets/dhalsim/crLK.png",
          },
          crMK: {
            name: "Crouching Medium Kick",
            startup: 10,
            onblock: -10,
            image: "/src/assets/dhalsim/crMK.png",
          },
          crHK: {
            name: "Crouching Heavy Kick",
            startup: 12,
            onblock: -16,
            image: "/src/assets/dhalsim/crHK.png",
          },
      
          commands: {
        bMP: {
        name: "Yoga Uppercut",
        startup: 8,
        onblock: -3,
        image: "/src/assets/dhalsim/bMP.png",
        },
        bHP: {
        name: "Yoga Lance",
        startup: 14,
        onblock: -16,
        image: "/src/assets/dhalsim/bHP.png",
        },
        bMK: {
        name: "Divine Kick",
        startup: 7,
        onblock: 0,
        image: "/src/assets/dhalsim/bMK.png",
        },
        bHK: {
        name: "Yoga Mountain",
        startup: 14,
        onblock: -9,
        image: "/src/assets/dhalsim/bHK.png"
        },
        dbHP: {
        name: "Nirvana Punch",
        startup: 10,
        onblock: -3,
        image: "/src/assets/dhalsim/dbHP.png"
        },
        dbLK: {
        name: "Agile Kick",
        startup: 5,
        onblock: -5,
        image: "/src/assets/dhalsim/dbLK.png"
        },
        dbMK: {
        name: "Thrust Kick",
        startup: 8,
        onblock: -7,
        image: "/src/assets/dhalsim/dbMK.png"
        },
        dbHK: {
        name: "Karma Kick",
        startup: 9,
        onblock: -7,
        image: "/src/assets/dhalsim/dbHK.png"
        },
          },
          profile: "src/assets/dhalsim/profile.png"
        }
    
        const ehonda = {
          name: "E. Honda",
          sLP: {
            name: "Standing Light Punch",
            startup: 5,
            onblock: -1,
            image: "/src/assets/ehonda/sLP.png",
          },
          sMP: {
            name: "Standing Medium Punch",
            startup: 10,
            onblock: 1,
            image: "/src/assets/ehonda/sMP.png",
          },
          sHP: {
            name: "Standing Heavy Punch",
            startup: 8,
            onblock: -6,
            image: "/src/assets/ehonda/sHP.png",
          },
          sLK: {
            name: "Standing Light Kick",
            startup: 4,
            onblock: -1,
            image: "/src/assets/ehonda/sLK.png",
          },
          sMK: {
            name: "Standing Medium Kick",
            startup: 10,
            onblock: -3,
            image: "/src/assets/ehonda/sMK.png",
          },
          sHK: {
            name: "Standing Heavy Kick",
            startup: 8,
            onblock: -5,
            image: "/src/assets/ehonda/sHK.png",
          },
          crLP: {
            name: "Crouching Light Punch",
            startup: 4,
            onblock: -1,
            image: "/src/assets/ehonda/crLP.png",
          },
          crMP: {
            name: "Crouching Medium Punch",
            startup: 8,
            onblock: -3,
            image: "/src/assets/ehonda/crMP.png",
          },
          crHP: {
            name: "Crouching Heavy Punch",
            startup: 11,
            onblock: -3,
            image: "/src/assets/ehonda/crHP.png",
          },
          crLK: {
            name: "Crouching Light Kick",
            startup: 5,
            onblock: -3,
            image: "/src/assets/ehonda/crLK.png",
          },
          crMK: {
            name: "Crouching Medium Kick",
            startup: 9,
            onblock: -2,
            image: "/src/assets/ehonda/crMK.png",
          },
          crHK: {
            name: "Crouching Heavy Kick",
            startup: 11,
            onblock: -10,
            image: "/src/assets/ehonda/crHK.png",
          },
          targets: {
        "sLP>MP": {
        name: "Double Slaps",
        startup: 9,
        onblock: -10,
        image: "src/assets/ehonda/sMP.png",
        },
        "sMP>dfHK": {
        name: "Toko Shizume",
        startup: 32,
        onblock: -3,
        image: "src/assets/ehonda/dfHK.png"
        },
            },
      
          commands: {
        fHK: {
        name: "Harai Kick",
        startup: 14,
        onblock: -5,
        image: "src/assets/ehonda/fHK.png",
        },
        dfHK: {
        name: "Power Stomp",
        startup: 22,
        onblock: -3,
        image: "src/assets/ehonda/dfHK.png",
        },
          },
        
          profile: "src/assets/ehonda/profile.png"
        }
    
        const guile = {
          name: "Guile",
          sLP: {
            name: "Standing Light Punch",
            startup: 5,
            onblock: -2,
            image: "/src/assets/guile/sLP.png",
          },
          sMP: {
            name: "Standing Medium Punch",
            startup: 7,
            onblock: 0,
            image: "/src/assets/guile/sMP.png",
          },
          sHP: {
            name: "Standing Heavy Punch",
            startup: 7,
            onblock: -6,
            image: "/src/assets/guile/sHP.png",
          },
          sLK: {
            name: "Standing Light Kick",
            startup: 5,
            onblock: -1,
            image: "/src/assets/guile/sLK.png",
          },
          sMK: {
            name: "Standing Medium Kick",
            startup: 7,
            onblock: -4,
            image: "/src/assets/guile/sMK.png",
          },
          sHK: {
            name: "Standing Heavy Kick",
            startup: 13,
            onblock: -4,
            image: "/src/assets/guile/sHK.png",
          },
          crLP: {
            name: "Crouching Light Punch",
            startup: 4,
            onblock: -2,
            image: "/src/assets/guile/crLP.png",
          },
          crMP: {
            name: "Crouching Medium Punch",
            startup: 6,
            onblock: -2,
            image: "/src/assets/guile/crMP.png",
          },
          crHP: {
            name: "Crouching Heavy Punch",
            startup: 9,
            onblock: -9,
            image: "/src/assets/guile/crHP.png",
          },
          crLK: {
            name: "Crouching Light Kick",
            startup: 5,
            onblock: -5,
            image: "/src/assets/guile/crLK.png",
          },
          crMK: {
            name: "Crouching Medium Kick",
            startup: 5,
            onblock: -5,
            image: "/src/assets/guile/crMK.png",
          },
          crHK: {
            name: "Crouching Heavy Kick",
            startup: 9,
            onblock: -12,
            image: "/src/assets/guile/crHK.png",
          },
          targets: {
        "sMP>bHP": {
        name: "Recoil Cannon",
        startup: 23,
        onblock: -9,
        image: "/src/assets/guile/sMPbHP.png",
        },
        "crMP>crMP": {
        name: "Double Shot",
        startup: 18,
        onblock: -6,
        image: "/src/assets/guile/crMPcrMP.png",
        },
        "crMK>fMP": {
        name: "Drake Fang",
        startup: 28,
        onblock: -5,
        image: "/src/assets/guile/fMP.png",
        },
        "crHK>dfHK": {
        name: "Phantom Cutter",
        startup: 19,
        onblock: -12,
        image: "/src/assets/guile/dfHK.png",
        },
            },
      
          commands: {
        fMP: {
        name: "Full Bullet Magnum",
        startup: 19,
        onblock: -3,
        image: "/src/assets/guile/fMP.png",
        },
        fHP: {
        name: "Spinning Back Knuckle",
        startup: 16,
        onblock: 3,
        image: "/src/assets/guile/fHP.png",
        },
        bHP: {
        name: "Burning Straight",
        startup: 9,
        onblock: -4,
        image: "/src/assets/guile/bHP.png",
        },
        bLK: {
        name: "Knee Bazooka",
        startup: 8,
        onblock: -4,
        image: "/src/assets/guile/bLK.png",
        },
        "bMK or fMK": {
        name: "Rolling Sobat",
        startup: 11,
        onblock: -6,
        image: "/src/assets/guile/bMKorfMK.png",
        },
        fHK: {
        name: "Reverse Spin Kick",
        startup: 17,
        onblock: -8,
        image: "/src/assets/guile/fHK.png",
        },
        dfHK: {
        name: "Guile High Kick",
        startup: 10,
        onblock: -9,
        image: "/src/assets/guile/dfHK.png",
        },
          },
        
          profile: "src/assets/guile/profile.png"
        }
    
        const jamie = {
          name: "Jamie",
          sLP: {
            name: "Standing Light Punch (Drink Level 0)",
            startup: 5,
            onblock: 0,
            image: "/src/assets/jamie/sLP.png",
          },
          sMP: {
            name: "Standing Medium Punch",
            startup: 8,
            onblock: 1,
            image: "/src/assets/jamie/sMP.png",
          },
          sHP: {
            name: "Standing Heavy Punch",
            startup: 5,
            onblock: -3,
            image: "/src/assets/jamie/sHP.png",
          },
          sLK: {
            name: "Standing Light Kick",
            startup: 5,
            onblock: -1,
            image: "/src/assets/jamie/sLK.png",
          },
          sMK: {
            name: "Standing Medium Kick",
            startup: 10,
            onblock: -3,
            image: "/src/assets/jamie/sMK.png",
          },
          sHK: {
            name: "Standing Heavy Kick",
            startup: 15,
            onblock: -5,
            image: "/src/assets/jamie/sHK.png",
          },
          crLP: {
            name: "Crouching Light Punch",
            startup: 4,
            onblock: -1,
            image: "/src/assets/jamie/crLP.png",
          },
          crMP: {
            name: "Crouching Medium Punch",
            startup: 6,
            onblock: 0,
            image: "/src/assets/jamie/crMP.png",
          },
          crHP: {
            name: "Crouching Heavy Punch",
            startup: 9,
            onblock: -8,
            image: "/src/assets/jamie/crHP.png",
          },
          crLK: {
            name: "Crouching Light Kick",
            startup: 5,
            onblock: -3,
            image: "/src/assets/jamie/crLK.png",
          },
          crMK: {
            name: "Crouching Medium Kick",
            startup: 7,
            onblock: -6,
            image: "/src/assets/jamie/crMK.png",
          },
          crHK: {
            name: "Crouching Heavy Kick",
            startup: 9,
            onblock: -10,
            image: "/src/assets/jamie/crHK.png",
          },
          targets: {
        "crHK>HK": {
        name: "Phantom Sway",
        startup: 12,
        onblock: -28,
        image: "src/assets/jamie/crHKHK.png",
        },
        "sLP>LK": {
        name: "Bitter Strikes 1",
        startup: 11,
        onblock: -8,
        image: "src/assets/jamie/sLPLK.png",
        },
        "sLP>LK>MP": {
        name: "Bitter Strikes 2",
        startup: 19,
        onblock: -10,
        image: "src/assets/jamie/sLPLKMP.png",
        },
        "fMK>MK": {
        name: "Full Moon Kick",
        startup: 15,
        onblock: -14,
        image: "src/assets/jamie/fMKMK.png",
        },
        "bHP>HP": {
        name: "Intoxicated Assault 1",
        startup: 39,
        onblock: -9,
        image: "src/assets/jamie/bHPHP.png"
        },
        "bHP>HP>HK": {
        name: "Intoxicated Assault 2",
        startup: 60,
        onblock: -20,
        image: "src/assets/jamie/bHPHPHK.png"
        },
        "fHK>bHK>P (close)": {
        name: "Ransui Haze Headbutt",
        startup: 42,
        onblock: -12,
        image: "src/assets/jamie/fHKbHKPclose.png"
        },
        "fHK>bHK>P (mid)": {
        name: "Ransui Haze Triple Fist",
        startup: 55,
        onblock: -9,
        image: "src/assets/jamie/fHKbHKPmid.png"
        },
            },
      
          commands: {
        crKK: {
        name: "Tensei Kick",
        startup: 9,
        onblock: -8,
        image: "src/assets/jamie/crKK.png",
        },
        fMK: {
        name: "Falling Star Kick",
        startup: 22,
        onblock: -3,
        image: "src/assets/jamie/fMK.png",
        },
        bHP: {
        name: "Hermit's Elbow",
        startup: 18,
        onblock: -3,
        image: "src/assets/jamie/bHP.png",
        },
        fHK: {
        name: "Senei Kick",
        startup: 16,
        onblock: -3,
        image: "src/assets/jamie/fHK.png",
        },
        "sLP (DL1+)": {
        name: "Standing Light Punch (Drink Level 1+)",
        startup: 5,
        onblock: -3,
        image: "src/assets/jamie/sLPDL1.png"
        },
          },
          profile: "src/assets/jamie/profile.png"
        }
    
        const jp = {
          name: "JP",
          sLP: {
            name: "Standing Light Punch",
            startup: 6,
            onblock: -2,
            image: "/src/assets/jp/sLP.png",
          },
          sMP: {
            name: "Standing Medium Punch",
            startup: 12,
            onblock: -6,
            image: "/src/assets/jp/sMP.png",
          },
          sHP: {
            name: "Standing Heavy Punch",
            startup: 12,
            onblock: -3,
            image: "/src/assets/jp/sHP.png",
          },
          sLK: {
            name: "Standing Light Kick",
            startup: 5,
            onblock: -2,
            image: "/src/assets/jp/sLK.png",
          },
          sMK: {
            name: "Standing Medium Kick",
            startup: 8,
            onblock: -3,
            image: "/src/assets/jp/sMK.png",
          },
          sHK: {
            name: "Standing Heavy Kick",
            startup: 12,
            onblock: 2,
            image: "/src/assets/jp/sHK.png",
          },
          crLP: {
            name: "Crouching Light Punch",
            startup: 4,
            onblock: -1,
            image: "/src/assets/jp/crLP.png",
          },
          crMP: {
            name: "Crouching Medium Punch",
            startup: 7,
            onblock: -2,
            image: "/src/assets/jp/crMP.png",
          },
          crHP: {
            name: "Crouching Heavy Punch",
            startup: 9,
            onblock: -6,
            image: "/src/assets/jp/crHP.png",
          },
          crLK: {
            name: "Crouching Light Kick",
            startup: 6,
            onblock: -2,
            image: "/src/assets/jp/crLK.png",
          },
          crMK: {
            name: "Crouching Medium Kick",
            startup: 9,
            onblock: -3,
            image: "/src/assets/jp/crMK.png",
          },
          crHK: {
            name: "Crouching Heavy Kick",
            startup: 10,
            onblock: -6,
            image: "/src/assets/jp/crHK.png",
          },
          targets: {
        "bMP>MP": {
        name: "Grom Strelka",
        startup: 18,
        onblock: -6,
        image: "src/assets/jp/bMPMP.png",
        },
        "sHK>HP": {
        name: "Zilant",
        startup: 32,
        onblock: -3,
        image: "src/assets/jp/sHKHP.png",
        },
        "sHK>HP>HP": {
        name: "Zilant High",
        startup: 53,
        onblock: -4,
        image: "src/assets/jp/sHKHPHP.png",
        },
        "sHK>HP>HK": {
        name: "Zilant Low",
        startup: 53,
        onblock: -4,
        image: "src/assets/jp/sHKHPHK.png",
        },
            },
      
          commands: {
        bMP: {
        name: "Grom Strelka",
        startup: 8,
        onblock: -1,
        image: "src/assets/jp/bmP.png",
        },
        fMK: {
        name: "Guillotinna",
        startup: 22,
        onblock: -3,
        image: "src/assets/jp/fMK.png",
        },
        dfHP: {
        name: "Malice",
        startup: 16,
        onblock: -14,
        image: "src/assets/jp/dfHP.png",
        },
        fHK: {
        name: "Bylina",
        startup: 11,
        onblock: -5,
        image: "src/assets/jp/fHK.png",
        },
          },
        
          profile: "src/assets/jp/profile.png"
        }
    
        const juri = {
          name: "Juri",
          sLP: {
            name: "Standing Light Punch",
            startup: 4,
            onblock: -2,
            image: "/src/assets/juri/sLP.png",
          },
          sMP: {
            name: "Standing Medium Punch",
            startup: 6,
            onblock: 2,
            image: "/src/assets/juri/sMP.png",
          },
          sHP: {
            name: "Standing Heavy Punch",
            startup: 10,
            onblock: -5,
            image: "/src/assets/juri/sHP.png",
          },
          sLK: {
            name: "Standing Light Kick",
            startup: 5,
            onblock: -5,
            image: "/src/assets/juri/sLK.png",
          },
          sMK: {
            name: "Standing Medium Kick",
            startup: 5,
            onblock: -4,
            image: "/src/assets/juri/sMK.png",
          },
          sHK: {
            name: "Standing Heavy Kick",
            startup: 17,
            onblock: -3,
            image: "/src/assets/juri/sHK.png",
          },
          crLP: {
            name: "Crouching Light Punch",
            startup: 4,
            onblock: -1,
            image: "/src/assets/juri/crLP.png",
          },
          crMP: {
            name: "Crouching Medium Punch",
            startup: 6,
            onblock: -2,
            image: "/src/assets/juri/crMP.png",
          },
          crHP: {
            name: "Crouching Heavy Punch",
            startup: 8,
            onblock: -11,
            image: "/src/assets/juri/crHP.png",
          },
          crLK: {
            name: "Crouching Light Kick",
            startup: 5,
            onblock: -1,
            image: "/src/assets/juri/crLK.png",
          },
          crMK: {
            name: "Crouching Medium Kick",
            startup: 8,
            onblock: -6,
            image: "/src/assets/juri/crMK.png",
          },
          crHK: {
            name: "Crouching Heavy Kick",
            startup: 10,
            onblock: -11,
            image: "/src/assets/juri/crHK.png",
          },
          targets: {
        "sMP>bHP": {
        name: "Death Crest 1",
        startup: 18,
        onblock: -3,
        image: "/src/assets/juri/sMPbHP.png",
        },
        "sMP>bHP>HP": {
        name: "Death Crest 2",
        startup: 30,
        onblock: -16,
        image: "/src/assets/juri/sMPbHPHP.png",
        },
            },
      
          commands: {
        fMP: {
        name: "Kyosesho",
        startup: 8,
        onblock: -3,
        image: "/src/assets/juri/fMP.png",
        },
        fMK: {
        name: "Senkai Kick",
        startup: 21,
        onblock: -2,
        image: "/src/assets/juri/fMK.png",
        },
        fHP: {
        name: "Renko Kicks",
        startup: 15,
        onblock: -4,
        image: "/src/assets/juri/fHP.png",
        },
        bHK: {
        name: "Korenzan",
        startup: 10,
        onblock: -6,
        image: "/src/assets/juri/bHK.png",
        },
          },
        
          profile: "src/assets/juri/profile.png"
        }
    
        const kimberly = {
          name: "Kimberly",
          sLP: {
            name: "Standing Light Punch",
            startup: 5,
            onblock: -2,
            image: "/src/assets/kimberly/sLP.png",
          },
          sMP: {
            name: "Standing Medium Punch",
            startup: 6,
            onblock: -2,
            image: "/src/assets/kimberly/sMP.png",
          },
          sHP: {
            name: "Standing Heavy Punch",
            startup: 9,
            onblock: -4,
            image: "/src/assets/kimberly/sHP.png",
          },
          sLK: {
            name: "Standing Light Kick",
            startup: 5,
            onblock: -3,
            image: "/src/assets/kimberly/sLK.png",
          },
          sMK: {
            name: "Standing Medium Kick",
            startup: 8,
            onblock: -4,
            image: "/src/assets/kimberly/sMK.png",
          },
          sHK: {
            name: "Standing Heavy Kick",
            startup: 12,
            onblock: 2,
            image: "/src/assets/kimberly/sHK.png",
          },
          crLP: {
            name: "Crouching Light Punch",
            startup: 4,
            onblock: -2,
            image: "/src/assets/kimberly/crLP.png",
          },
          crMP: {
            name: "Crouching Medium Punch",
            startup: 6,
            onblock: -1,
            image: "/src/assets/kimberly/crMP.png",
          },
          crHP: {
            name: "Crouching Heavy Punch",
            startup: 8,
            onblock: -2,
            image: "/src/assets/kimberly/crHP.png",
          },
          crLK: {
            name: "Crouching Light Kick",
            startup: 5,
            onblock: -2,
            image: "/src/assets/kimberly/crLK.png",
          },
          crMK: {
            name: "Crouching Medium Kick",
            startup: 7,
            onblock: 1,
            image: "/src/assets/kimberly/crMK.png",
          },
          crHK: {
            name: "Crouching Heavy Kick",
            startup: 8,
            onblock: -10,
            image: "/src/assets/kimberly/crHK.png",
          },
          targets: {
        "sLP>MP": {
        name: "Bushin Prism Strikes 1",
        startup: 99,
        onblock: -6,
        image: "/src/assets/kimberly/sMP.png",
        },
        "sLP>MP>HP": {
        name: "Bushin Prism Strikes 2",
        startup: 99,
        onblock: -10,
        image: "/src/assets/kimberly/sLPMPHP.png",
        },
        "sLP>MP>HP>HK": {
        name: "Bushin Prism Strikes 3",
        startup: 99,
        onblock: -12,
        image: "/src/assets/kimberly/sLPMPHPHK.png",
        },
        "sLP>MP>crHP": {
        name: "Bushin Hellchain 1",
        startup: 99,
        onblock: -10,
        image: "/src/assets/kimberly/sLPMPcrHP.png",
        },
        "sLP>MP>crHP>HK": {
        name: "Bushin Hellchain 2",
        startup: 99,
        onblock: -12,
        image: "/src/assets/kimberly/sLPMPcrHPHK.png",
        },
        "sLP>MP>crHP>crHK": {
        name: "Bushin Hellchain Throw",
        startup: 99,
        onblock: -12,
        image: "/src/assets/kimberly/sLPMPcrHPcrHK.png",
        },
        "sMP>HP": {
        name: "Bushin Tiger Fangs",
        startup: 99,
        onblock: -12,
        image: "/src/assets/kimberly/sLPMPHP.png",
        },
            },
      
          commands: {
        "dfMK (sp)": {
        name: "Water Slicer Slide (spaced)",
        startup: 99,
        onblock: 0,
        image: "/src/assets/kimberly/dfMK.png",
        },
        "dfMK (cl)": {
        name: "Water Slicer Slide (close)",
        startup: 11,
        onblock: -9,
        image: "/src/assets/kimberly/dfMK.png",
        },
        bHK: {
        name: "Windmill Kick",
        startup: 22,
        onblock: -3,
        image: "/src/assets/kimberly/bHK.png",
        },
        fHK: {
        name: "Hisen Kick",
        startup: 27,
        onblock: -3,
        image: "/src/assets/kimberly/fHK.png",
        },
          },
        
          profile: "src/assets/kimberly/profile.png"
        }
    
        const lily = {
          name: "Lily",
          sLP: {
            name: "Standing Light Punch",
            startup: 6,
            onblock: -1,
            image: "/src/assets/lily/sLP.png",
          },
          sMP: {
            name: "Standing Medium Punch",
            startup: 9,
            onblock: -4,
            image: "/src/assets/lily/sMP.png",
          },
          sHP: {
            name: "Standing Heavy Punch",
            startup: 11,
            onblock: -5,
            image: "/src/assets/lily/sHP.png",
          },
          sLK: {
            name: "Standing Light Kick",
            startup: 4,
            onblock: -4,
            image: "/src/assets/lily/sLK.png",
          },
          sMK: {
            name: "Standing Medium Kick",
            startup: 7,
            onblock: -1,
            image: "/src/assets/lily/sMK.png",
          },
          sHK: {
            name: "Standing Heavy Kick",
            startup: 14,
            onblock: -5,
            image: "/src/assets/lily/sHK.png",
          },
          crLP: {
            name: "Crouching Light Punch",
            startup: 6,
            onblock: -1,
            image: "/src/assets/lily/crLP.png",
          },
          crMP: {
            name: "Crouching Medium Punch",
            startup: 8,
            onblock: -3,
            image: "/src/assets/lily/crMP.png",
          },
          crHP: {
            name: "Crouching Heavy Punch",
            startup: 10,
            onblock: -2,
            image: "/src/assets/lily/crHP.png",
          },
          crLK: {
            name: "Crouching Light Kick",
            startup: 5,
            onblock: -2,
            image: "/src/assets/lily/crLK.png",
          },
          crMK: {
            name: "Crouching Medium Kick",
            startup: 10,
            onblock: -5,
            image: "/src/assets/lily/crMK.png",
          },
          crHK: {
            name: "Crouching Heavy Kick",
            startup: 11,
            onblock: -12,
            image: "/src/assets/lily/crHK.png",
          },
          targets: {
        "fHP>HP": {
        name: "Desert Storm 1",
        startup: 99,
        onblock: -9,
        image: "/src/assets/lily/fHPHP.png",
        },
        "fHP>HP>HP": {
        name: "Desert Storm 2",
        startup: 99,
        onblock: -26,
        image: "/src/assets/lily/fHPHPHP.png",
        },
            },
      
          commands: {
        fHP: {
        name: "Desert Storm",
        startup: 18,
        onblock: -5,
        image: "/src/assets/lily/fHP.png",
        },
        dfHP: {
        name: "Ridge Thrust",
        startup: 25,
        onblock: -3,
        image: "/src/assets/lily/dfHP.png",
        },
        bHP: {
        name: "Horn Breaker",
        startup: 14,
        onblock: -2,
        image: "/src/assets/lily/bHP.png",
        },
          },
        
          profile: "src/assets/lily/profile.png"
        }
    
        const luke = {
          name: "Luke",
          sLP: {
            name: "Standing Light Punch",
            startup: 7,
            onblock: -3,
            image: "/src/assets/luke/sLP.png",
          },
          sMP: {
            name: "Standing Medium Punch",
            startup: 9,
            onblock: -3,
            image: "/src/assets/luke/sMP.png",
          },
          sHP: {
            name: "Standing Heavy Punch",
            startup: 10,
            onblock: -6,
            image: "/src/assets/luke/sHP.png",
          },
          sLK: {
            name: "Standing Light Kick",
            startup: 5,
            onblock: -2,
            image: "/src/assets/luke/sLK.png",
          },
          sMK: {
            name: "Standing Medium Kick",
            startup: 7,
            onblock: -3,
            image: "/src/assets/luke/sMK.png",
          },
          sHK: {
            name: "Standing Heavy Kick",
            startup: 10,
            onblock: -5,
            image: "/src/assets/luke/sHK.png",
          },
          crLP: {
            name: "Crouching Light Punch",
            startup: 4,
            onblock: -2,
            image: "/src/assets/luke/crLP.png",
          },
          crMP: {
            name: "Crouching Medium Punch",
            startup: 6,
            onblock: 1,
            image: "/src/assets/luke/crMP.png",
          },
          crHP: {
            name: "Crouching Heavy Punch",
            startup: 7,
            onblock: -13,
            image: "/src/assets/luke/crHP.png",
          },
          crLK: {
            name: "Crouching Light Kick",
            startup: 5,
            onblock: -5,
            image: "/src/assets/luke/crLK.png",
          },
          crMK: {
            name: "Crouching Medium Kick",
            startup: 8,
            onblock: -6,
            image: "/src/assets/luke/crMK.png",
          },
          crHK: {
            name: "Crouching Heavy Kick",
            startup: 10,
            onblock: -9,
            image: "/src/assets/luke/crHK.png",
          },
          targets: {
        "sLP>MP": {
        name: "Triple Impact",
        startup: 99,
        onblock: -9,
        image: "/src/assets/luke/sMP.png",
        },
        "sLP>MP>HP": {
        name: "Triple Impact 2",
        startup: 99,
        onblock: -14,
        image: "/src/assets/luke/sHP.png",
        },
        "sMP>MP": {
        name: "Snapback Combo",
        startup: 99,
        onblock: -8,
        image: "/src/assets/luke/sMPMP.png",
        },
        "sMP>MP>MP": {
        name: "Snapback Combo 2",
        startup: 99,
        onblock: -14,
        image: "/src/assets/luke/sMPMPMP.png",
        },
        "sMP>MP>MP>MP": {
        name: "Snapback Combo 3",
        startup: 99,
        onblock: -12,
        image: "/src/assets/luke/sMPMPMPMP.png",
        },
        "fHP>fHP": {
        name: "Double Impact",
        startup: 99,
        onblock: -19,
        image: "/src/assets/luke/fHPfHP.png",
        },
        "crMK>crHP": {
        name: "Nose Breaker",
        startup: 99,
        onblock: -8,
        image: "/src/assets/luke/crMKcrHP.png",
        },
      },
          commands: {
        fMP: {
        name: "Rawhide",
        startup: 21,
        onblock: -3,
        image: "/src/assets/luke/fMP.png",
        },
        bHP: {
        name: "Suppressor",
        startup: 16,
        onblock: -3,
        image: "/src/assets/luke/bHP.png",
        },
        bHK: {
        name: "Outlaw Kick",
        startup: 12,
        onblock: -5,
        image: "/src/assets/luke/bHK.png",
        },
        fHP: {
        name: "Brutal Spike",
        startup: 16,
        onblock: -3,
        image: "/src/assets/luke/fHP.png",
        },
          },
        
          profile: "src/assets/luke/profile.png"
        }
    
        const manon = {
          name: "Manon",
          sLP: {
            name: "Standing Light Punch",
            startup: 4,
            onblock: -1,
            image: "/src/assets/manon/sLP.png",
          },
          sMP: {
            name: "Standing Medium Punch",
            startup: 7,
            onblock: -1,
            image: "/src/assets/manon/sMP.png",
          },
          sHP: {
            name: "Standing Heavy Punch",
            startup: 10,
            onblock: -3,
            image: "/src/assets/manon/sHP.png",
          },
          sLK: {
            name: "Standing Light Kick",
            startup: 5,
            onblock: -2,
            image: "/src/assets/manon/sLK.png",
          },
          sMK: {
            name: "Standing Medium Kick",
            startup: 10,
            onblock: -5,
            image: "/src/assets/manon/sMK.png",
          },
          sHK: {
            name: "Standing Heavy Kick",
            startup: 15,
            onblock: -6,
            image: "/src/assets/manon/sHK.png",
          },
          crLP: {
            name: "Crouching Light Punch",
            startup: 4,
            onblock: -2,
            image: "/src/assets/manon/crLP.png",
          },
          crMP: {
            name: "Crouching Medium Punch",
            startup: 7,
            onblock: -1,
            image: "/src/assets/manon/crMP.png",
          },
          crHP: {
            name: "Crouching Heavy Punch",
            startup: 10,
            onblock: -8,
            image: "/src/assets/manon/crHP.png",
          },
          crLK: {
            name: "Crouching Light Kick",
            startup: 5,
            onblock: -5,
            image: "/src/assets/manon/crLK.png",
          },
          crMK: {
            name: "Crouching Medium Kick",
            startup: 8,
            onblock: -2,
            image: "/src/assets/manon/crMK.png",
          },
          crHK: {
            name: "Crouching Heavy Kick",
            startup: 11,
            onblock: -12,
            image: "/src/assets/manon/crHK.png",
          },
          targets: {
        "sMP>MK": {
        name: "À Terre",
        startup: 99,
        onblock: -5,
        image: "/src/assets/manon/sMPMK.png",
        },
        "bMK>MK": {
        name: "En Haut",
        startup: 99,
        onblock: -11,
        image: "/src/assets/manon/bMKMK.png",
        },
        "sHP>HP": {
        name: "Temps Lié",
        startup: 99,
        onblock: -8,
        image: "/src/assets/manon/sHPHP.png",
        },
        "crHP>HP": {
        name: "Allongé",
        startup: 99,
        onblock: -10,
        image: "/src/assets/manon/crHPHP.png",
        },
            },
      
          commands: {
        bMK: {
        name: "En Haut",
        startup: 10,
        onblock: -3,
        image: "/src/assets/manon/bMK.png",
        },
        bHP: {
        name: "Révérence",
        startup: 8,
        onblock: -3,
        image: "/src/assets/manon/bHP.png",
        },
        dfHK: {
        name: "Tomoe Derriére",
        startup: 11,
        onblock: -23,
        image: "/src/assets/manon/dfHK.png",
        },
          },
        
          profile: "src/assets/manon/profile.png"
        }
    
        const marisa = {
          name: "Marisa",
          sLP: {
            name: "Standing Light Punch",
            startup: 6,
            onblock: -2,
            image: "/src/assets/marisa/sLP.png",
          },
          sMP: {
            name: "Standing Medium Punch",
            startup: 7,
            onblock: -1,
            image: "/src/assets/marisa/sMP.png",
          },
          sHP: {
            name: "Standing Heavy Punch",
            startup: 12,
            onblock: -3,
            image: "/src/assets/marisa/sHP.png",
          },
          sLK: {
            name: "Standing Light Kick",
            startup: 6,
            onblock: -2,
            image: "/src/assets/marisa/sLK.png",
          },
          sMK: {
            name: "Standing Medium Kick",
            startup: 11,
            onblock: -2,
            image: "/src/assets/marisa/sMK.png",
          },
          sHK: {
            name: "Standing Heavy Kick",
            startup: 17,
            onblock: -3,
            image: "/src/assets/marisa/sHK.png",
          },
          crLP: {
            name: "Crouching Light Punch",
            startup: 4,
            onblock: -3,
            image: "/src/assets/marisa/crLP.png",
          },
          crMP: {
            name: "Crouching Medium Punch",
            startup: 8,
            onblock: -2,
            image: "/src/assets/marisa/crMP.png",
          },
          crHP: {
            name: "Crouching Heavy Punch",
            startup: 8,
            onblock: -6,
            image: "/src/assets/marisa/crHP.png",
          },
          crLK: {
            name: "Crouching Light Kick",
            startup: 5,
            onblock: -3,
            image: "/src/assets/marisa/crLK.png",
          },
          crMK: {
            name: "Crouching Medium Kick",
            startup: 9,
            onblock: -2,
            image: "/src/assets/marisa/crMK.png",
          },
          crHK: {
            name: "Crouching Heavy Kick",
            startup: 12,
            onblock: -11,
            image: "/src/assets/marisa/crHK.png",
          },
          targets: {
        "sLP>LP": {
        name: "Light Two Hitter",
        startup: 99,
        onblock: -6,
        image: "/src/assets/marisa/sLPLP.png",
        },
        "sMP>MP": {
        name: "Medium Two Hitter",
        startup: 99,
        onblock: -8,
        image: "/src/assets/marisa/sMPMP.png",
        },
        "sHP>HP": {
        name: "Heavy Two Hitter",
        startup: 99,
        onblock: 2,
        image: "/src/assets/marisa/sHPHP.png",
        },
        "fMP>HP": {
        name: "Novacule Swipe",
        startup: 99,
        onblock: -12,
        image: "/src/assets/marisa/fMPHP.png",
        },
        "fMP>HK": {
        name: "Novacule Thrust",
        startup: 99,
        onblock: -10,
        image: "/src/assets/marisa/fMPHK.png",
        },
        "dfHP>dfHP": {
        name: "Malleus Breaker",
        startup: 99,
        onblock: -12,
        image: "/src/assets/marisa/dfHPdfHP.png",
        },
        "fHK>fHK": {
        name: "Falx Crusher",
        startup: 99,
        onblock: -12,
        image: "/src/assets/marisa/fHKfHK.png",
        },
            },
      
          commands: {
        "s[HP]": {
        name: "Standing Heavy Punch (Hold)",
        startup: 16,
        onblock: 3,
        image: "/src/assets/marisa/sHPhold.png",
        },
        "s[HK]": {
        name: "Standing Heavy Kick (Hold)",
        startup: 27,
        onblock: 1,
        image: "/src/assets/marisa/sHKhold.png",
        },
        "cr[HP]": {
        name: "Crouching Heavy Punch (Hold)",
        startup: 21,
        onblock: -5,
        image: "/src/assets/marisa/crHPhold.png",
        },
        "cr[HK]": {
        name: "Crouching Heavy Kick (Hold)",
        startup: 23,
        onblock: -6,
        image: "/src/assets/marisa/crHKhold.png",
        },
        fMP: {
        name: "Novacula",
        startup: 10,
        onblock: -3,
        image: "/src/assets/marisa/fMP.png",
        },
        bHP: {
        name: "Magna Bunker",
        startup: 8,
        onblock: -1,
        image: "/src/assets/marisa/bHP.png",
        },
        "b[HP]": {
        name: "Magna Bunker (Hold)",
        startup: 20,
        onblock: 4,
        image: "/src/assets/marisa/bHPhold.png",
        },
        dfHP: {
        name: "Malleus",
        startup: 21,
        onblock: -3,
        image: "/src/assets/marisa/dfHP.png",
        },
        "df[HP]": {
        name: "Malleus (Hold)",
        startup: 31,
        onblock: 2,
        image: "/src/assets/marisa/dfHPhold.png",
        },
        fHK: {
        name: "Knee",
        startup: 14,
        onblock: -3,
        image: "/src/assets/marisa/fHK.png",
        },
        "f[HK]": {
        name: "Knee (Hold)",
        startup: 27,
        onblock: 3,
        image: "/src/assets/marisa/fHKhold.png",
        },
          },
        
          profile: "src/assets/marisa/profile.png"
        }
    
        const zangief = {
          name: "Zangief",
          sLP: {
            name: "Standing Light Punch",
            startup: 7,
            onblock: 2,
            image: "/src/assets/zangief/sLP.png",
          },
          sMP: {
            name: "Standing Medium Punch",
            startup: 9,
            onblock: -2,
            image: "/src/assets/zangief/sMP.png",
          },
          sHP: {
            name: "Standing Heavy Punch",
            startup: 16,
            onblock: -3,
            image: "/src/assets/zangief/sHP.png",
          },
          sLK: {
            name: "Standing Light Kick",
            startup: 7,
            onblock: -4,
            image: "/src/assets/zangief/sLK.png",
          },
          sMK: {
            name: "Standing Medium Kick",
            startup: 10,
            onblock: -4,
            image: "/src/assets/zangief/sMK.png",
          },
          sHK: {
            name: "Standing Heavy Kick",
            startup: 13,
            onblock: 1,
            image: "/src/assets/zangief/sHK.png",
          },
          crLP: {
            name: "Crouching Light Punch",
            startup: 6,
            onblock: 1,
            image: "/src/assets/zangief/crLP.png",
          },
          crMP: {
            name: "Crouching Medium Punch",
            startup: 8,
            onblock: -1,
            image: "/src/assets/zangief/crMP.png",
          },
          crHP: {
            name: "Crouching Heavy Punch",
            startup: 12,
            onblock: -19,
            image: "/src/assets/zangief/crHP.png",
          },
          crLK: {
            name: "Crouching Light Kick",
            startup: 4,
            onblock: -3,
            image: "/src/assets/zangief/crLK.png",
          },
          crMK: {
            name: "Crouching Medium Kick",
            startup: 9,
            onblock: -2,
            image: "/src/assets/zangief/crMK.png",
          },
          crHK: {
            name: "Crouching Heavy Kick",
            startup: 12,
            onblock: -13,
            image: "/src/assets/zangief/crHK.png",
          },
          targets: {
        "sMP>MP": {
        name: "Machine Gun Chops 1",
        startup: 99,
        onblock: -6,
        image: "/src/assets/zangief/sMPMP.png",
        },
        "sMP>MP>MP": {
        name: "Machine Gun Chops 2",
        startup: 99,
        onblock: -17,
        image: "/src/assets/zangief/sMPMPMP.png",
        },
        "ddMK>MK": {
        name: "Power Stomps 2",
        startup: 99,
        onblock: -4,
        image: "/src/assets/zangief/ddMKMK.png",
        },
        "ddMK>MK>MK": {
        name: "Power Stomps 3",
        startup: 99,
        onblock: -10,
        image: "/src/assets/zangief/ddMKMKMK.png",
        },
            },
      
          commands: {
        "s[HP]": {
        name: "Standing Heavy Punch (Hold)",
        startup: 32,
        onblock: 3,
        image: "/src/assets/zangief/sHP.png",
        },
        dfMP: {
        name: "Hellstab",
        startup: 7,
        onblock: -3,
        image: "/src/assets/zangief/dfMP.png",
        },
        "fMK (sp)": {
        name: "Knee Hammer (Spaced)",
        startup: 99,
        onblock: 2,
        image: "/src/assets/zangief/fMK.png",
        },
        "fMK (cl)": {
        name: "Knee Hammer (Close)",
        startup: 14,
        onblock: -4,
        image: "/src/assets/zangief/fMK.png",
        },
        fHP: {
        name: "Headbutt",
        startup: 14,
        onblock: 4,
        image: "/src/assets/zangief/fHP.png",
        },
        fHK: {
        name: "Cyclone Wheel Kick",
        startup: 22,
        onblock: -12,
        image: "/src/assets/zangief/fHK.png",
        },
        dfHK: {
        name: "Smetana Dropkick",
        startup: 16,
        onblock: -18,
        image: "/src/assets/zangief/dfHK.png",
        },
        ddMK: {
        name: "Power Stomp",
        startup: 9,
        onblock: -3,
        image: "/src/assets/zangief/ddMK.png",
        },
          },
        
          profile: "src/assets/zangief/profile.png"
        }

export const characterList = [blanka, cammy, chunli, deejay, dhalsim, ehonda, guile, jamie, jp, juri, ken, kimberly, lily, luke, manon, marisa, ryu, zangief]