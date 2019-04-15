
let battleCars = [
    {
      battleCarName: 'Backfire',
      carClass: 'Octane',
      favDecal: 'Stars',
      age: 3,
      unlocked: true
    },
    {
      battleCarName: 'Delorean Time Machine',
      carClass: 'Octane',
      favDecal: 'unavailable',
      dlc: 'Back to the Future',
      age: 3,
      unlocked: false
    },
    {
      battleCarName: 'Gizmo',
      carClass: 'Octane',
      favDecal: 'Mean Streak',
      age: 3,
      unlocked: true
    },
    {
      battleCarName: 'Grog',
      carClass: 'Octane',
      favDecal: 'Lepus',
      dlc: 'Chaos Run',
      age: 2,
      unlocked: false,
      attributes: 'premium',
      ugly: true
    },
    {
      battleCarName: 'Marauder',
      carClass: 'Octane',
      favDecal: 'Big Buck',
      age: 2,
      wheels: 'Marauder',
      unlocked: true,
      attributes: 'premium'
    },
    {
      battleCarName: 'Merc',
      carClass: 'Octane',
      favDecal: 'Warlock',
      age: 3
    },
    {
      battleCarName: 'Octane',
      carClass: 'Octane',
      favDecal: 'Distortion',
      age: 3,
      unlocked: true
    },
    {
      battleCarName: 'Proteus',
      carClass: 'Octane',
      dlc: 'Proteus',
      wheels: 'Proteus',
      ugly: true
    },
    {
      battleCarName: 'Road Hog',
      carClass: 'Octane',
      age: 3,
      unlocked: true,
    },
    {
      battleCarName: '',
      carClass: 'Octane',
      dlc: 'Revenge of the Battle-Cars',
      age: 3,
      ugly: true
    },
    {
      battleCarName: 'Takumi',
      carClass: 'Octane',
      dlc: 'Supersonic Fury',
      favDecal: 'Distortion',
      age: 3,
      attributes: 'premium',
      unlocked: false
    },
    {
      battleCarName: 'Triton',
      carClass: 'Octane',
      age: 2,
      ugly: true,
      attributes: 'premium'
    },
    {
      battleCarName: '70 Dodge Charger R/T',
      carClass: 'Dominus',
      age: 1,
      attributes: 'premium',
      favDecal: 'Rally',
      ugly: false
    },
    {
      battleCarName: 'Aftershock',
      carClass: 'Dominus',
      age: 2,
      favDecal: 'Tiger Tiger'
    },
    {
      battleCarName: 'Dominus',
      carClass: 'Dominus',
      dlc: 'Supersonic Fury',
      favDecal: 'Dot Matrix',
      age: 3,
      attributes: 'premium'
    },
    {
      battleCarName: 'Hotshot',
      carClass: 'Dominus',
      attributes: 'common',
      unlocked: true,
      favDecal: 'Hi-tech'
    },
    {
      battleCarName: 'Masamune',
      carClass: 'Dominus',
      age: 2,
      unlocked: false
    },
    {
      battleCarName: 'Ripper',
      carClass: 'Dominus',
      dlc: 'Chaos Run',
      attributes: 'premium',
      age: 3,
      favDecal: 'Bomber'
    },
    {
      battleCarName: 'Centio V17',
      carClass: 'Plank',
      unlocked: false, 
      age: 1,
      favDecal: 'Machina'
    },
    {
      battleCarName: 'Mantis',
      carClass: 'Plank',
      favDecal: 'Roasted',
      ugly: true
    },
    {
      battleCarName: 'Paladin',
      carClass: 'Plank',
      favDecal: 'Stars'
    },
    {
      battleCarName: 'Twin Mill III',
      carClass: 'Plank',
      age: 2,
      attributes: 'premium',
      wheels: 'OH5'
    },
    {
      battleCarName: 'Animus GP',
      carClass: 'Breakout',
      favDecal: 'Odd Fish',
      age: 1,
      unlocked: false
    },
    {
      battleCarName: 'Breakout',
      carClass: 'Breakout',
      age: 3,
      attributes: 'common',
      favDecal: 'Distortion'
    },
    {
      battleCarName: '99 Nissan Skyline GT-R',
      carClass: 'Hybrid',
      attributes: 'premium',
      age: 1
    },
    {
      battleCarName: 'Endo',
      carClass: 'Hybrid',
      age: 2,
      ugly: false,
      favDecal: 'Mummified',
      variants: true
    },
    {
      battleCarName: 'Esper',
      carClass: 'Hybrid',
      age: 2,
      ugly: true,
    },
    {
      battleCarName: 'Jäger 619 RS',
      carClass: 'Hybrid',
      unlocked: false,
      ugly: false,
      age: 1,
    },
    {
      battleCarName: 'Venom',
      carClass: 'Hybrid',
      unlocked: true,
      age: 3,
      favDecal: 'Wings',
    },
    {
      battleCarName: 'X-Devil',
      carClass: 'Hybrid',
      favDecal: 'Tech',
      unlocked: true,
    },
  ]
  
  let realCars = 
  [
    {
      realCarName: '1999 Nissan Skyline GT-R R34',
      battleCarName: '99 Nissan Skyline GT-R'
    },
    {
      realCarName: 'Red Bull Formula One',
      battleCarName: 'Animus Gp'
    },
    {
      realCarName: 'Hot Wheels Twin Mill III',
      battleCarName: 'Twin Mill III'
    },
    {
      realCarName: 'Audi R18 Quattro', 
      battleCarName: 'Centio V17'
    },
    {
      
      realCarName: '1965 Pontiac GTO',
      battleCarName: 'Dominnus'
    },
    {
      realCarName:  '1970 Dodge Charger R/T',
      battleCarName: '70 Dodge Charger R/T'
    },
    {
      realCarName: 'Sixth Generation Chevrolet Camaro',
      battleCarName: 'Takumi'
    },
    {
      realCarName: 'DeLorean',
      battleCarName: 'DeLorean Time Machine'
    },
    {
      realCarName: 'Ford Rat Rod',
      battleCarName: 'Backfire'
    },
    {
      realCarName: 'McLaren MP4-12C',
      battleCarName: 'Endo'
    },
    {
      realCarName: 'Porsche 718 Cayman',
      battleCarName: 'Jäger 619 RS'
    }
  ]
  
module.exports = {
    battleCars,
    realCars
}