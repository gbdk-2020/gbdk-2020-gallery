# GBDK Showcase

https://gbdk-2020.github.io/gbdk-2020-gallery

A lightweight Javascript / JSON gallery for showcasing Demos, Games, Music and Programs made with [GBDK-2020](https://github.com/gbdk-2020/gbdk-2020).


# Adding Entries
To submit a game or program, either :
- **Recommended:** Open an [Issue](https://github.com/gbdk-2020/gbdk-2020-gallery/issues)
- Or edit the JSON data and open a Pull Request

### Required information for Pull Reuests which modify the JSON data directly:
- authorName: Quoted, Name(s) of Author(s)
- itemTitle: Quoted, Game Title
- shortDescription: Quoted, A short 4-10 word description. Try to avoid saying: "for the Game Boy"/etc.
- imagePreviewURL: Quoted, A 320 x 288 PNG format screenshot. Relative path and image should be in a suitable "pix/" sub-folder. 
- linksArray: JSON array of link entries, with each entry having one of the following: 
  - type: Quoted, Examples: "primary", "store", "source", "info"
  - url: Quoted, Example: "https://url_to_main_website"
  - displayText: Quoted, Examples: "Info" (for primary), "Cart" (for store), "Source" (for source), "Info v2" (for secondary links)
- categoryTags: Quoted, Comma-space separated list of tags: Camera, Demoscene, Engine, Game, Music, Simulation, Techdemo, Tool
- gametypeTags: Quoted, Comma-space separated list of tags: Action, Adventure, Art, Card Game, Demoscene, Engine, Fighting, GameBoy Camera, GameBoy Printer, Idle, Microgames, Music, Platformer, Programming, Puzzle, Racing, Rhythm, Role Playing, Shmup, Shooting, Simulation, Sports, Strategy, Survival, Testing, Tool, VirtualPet, Visual Novel
- platformTags: Quoted, Comma-space separated list of tags: GameBoy, GameBoyColor, SuperGameBoy, MegaDuck, AnaloguePocket, GameGear, SMS, NES
- featuredPriority: 0
- isMultiPlatform: true/false: Does it have a build for more than one of each group: (gb/gbc/ap/duck), (sms/gg), (nes)
- isOpenSource: true/false,
- licenseType: Quoted, License type, examples are: "MIT", "GPL", "Unlicense", "" (blank) etc. 
- isFreeDownload: true/false,
- hasPhysicalRelease: true/false,
- isClassicGBDK: true/false,
- usesEngine: Quoted, Engine Name, examples are: "None", "ZGB", "CrossZGB"
- linkOrMultiPlayer: true/false,
- hardwareFeatureTags: Quoted, Comma-space separated list of tags: GameBoy Camera, GameBoy Printer, Link Port, MBC5 Rumble, MBC3 RTC, MBC7 Accelerometer, IR Sensor, MegaDuck Keyboard
- yearFirstReleased: Quoted, Example: "2021"
- "dateAdded": Quoted, Example: "2024-08-01"


