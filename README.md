# GBDK-2020 Gallery

https://gbdk-2020.github.io/gbdk-2020-gallery

A lightweight Javascript / JSON gallery for showcasing Demos, Games, Music and Programs made with [GBDK-2020](https://github.com/gbdk-2020/gbdk-2020).

Also see the [Made with ZGB](https://github.com/Zal0/ZGB/wiki/Made-with-ZGB) collection of games. [ZGB](https://github.com/Zal0/ZGB/) is a small game engine built on GBDK-2020.

# Adding Entries
To submit a game or program, either open an issue with the following information or edit the JSON data and open a Pull Request.

### Required information:
- authorName: Quoted, Name(s) of Author(s)
- itemTitle: Quoted, Game Title
- shortDescription: Quoted, A short 4-10 word description. Try to avoid saying: "for the Game Boy"/etc.
- imagePreviewURL: Quoted, A 320 x 288 PNG format screenshot
- linksArray:
  - url: Quoted, "https://url_to_main_website"
  - url: Quoted, "https://url_to_store"                (OPTIONAL, if there is a Physical Release)
  - url: Quoted, "https://url_to_source_code_OPTIONAL" (OPTIONAL, if source code is available)
- categoryTags: Quoted, Comma-space separated list of tags: Camera, Demoscene, Engine, Game, Music, Simulation, Techdemo, Tool
- gametypeTags: Quoted, Comma-space separated list of tags: Action, Adventure, Art, Card Game, Demoscene, Engine, Fighting, GameBoy Camera, GameBoy Printer, Idle, Microgames, Music, Platformer, Programming, Puzzle, Racing, Rhythm, Role Playing, Shooter, Simulation, Sports, Strategy, Survival, Testing, Tool, VirtualPet, Visual Novel
- platformTags: Quoted, Comma-space separated list of tags: GameBoy, GameBoyColor, SuperGameBoy, MegaDuck, AnaloguePocket, GameGear, SMS, NES
- featuredPriority: 0
- isMultiPlatform: true/false: Does it have a build for more than one of each group: (gb/gbc/ap/duck), (sms/gg), (nes)
- isOpenSource: true/false,
- licenseType: Quoted, License type, examples are: "MIT", "GPL", "Unlicense", etc.
- isFreeDownload: true/false,
- hasPhysicalRelease: true/false,
- isClassicGBDK: true/false,
- supportsLinkPlay: true/false,
- yearFirstReleased: Quoted, Example: "2021"


