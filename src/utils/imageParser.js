export function gameImageParser(game) {
  switch (game) {
    case 'CS:GO':
      return '/games/csgo.jpeg';
    case 'Fortnite':
      return '/games/fortnite.jpeg';
    case 'FIFA 22':
      return '/games/fifa22.jpeg';
    case 'Dota 2':
      return '/games/dota2.jpeg';
    case 'League of Legends':
      return '/games/lol.jpeg';
    case 'World of Warcraft':
      return '/games/wow.jpeg';
    case 'Valorant':
      return '/games/valorant.jpeg';
    case 'Rocket League':
      return '/games/rocketleague.jpeg';
    case 'Minecraft':
      return '/games/minecraft.jpeg';
    case 'GTA V':
      return '/games/gtav.jpeg';
    default:
      return '';
  }
}

export function platformImageParser(platform) {
  switch (platform) {
    case 'Blizzard':
      return '/platforms/blizzard.jpg';
    case 'Origin':
      return '/platforms/origin.png';
    case 'PS':
    case 'Playstation':
      return '/platforms/playstation.jpeg';
    case 'Riot':
      return '/platforms/riot.png';
    case 'Steam':
      return '/platforms/steam.jpg';
    case 'Switch':
      return '/platforms/switch.png';
    case 'Xbox':
      return '/platforms/xbox.jpeg';
    default:
      return '';
  }
}
