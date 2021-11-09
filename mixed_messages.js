const arrays = {
    
    firstNames: [
        'Ol',
        'Spicy',
        'Lil',
        'Ghost',
        'Glizzy',
        'Childish',
        'Replicant',
        'Yung',
        'Grand',
        'Twisted'
    ],
    middleNames: [
        'Chip',
        'Master',
        'Tortilla',
        'Noodle',
        'Samurai',
        'Dirty',
        'Aerial',
        'Hyperion',
        'Belta',
        'Prince'
    ],
    lastNames: [
        'Bastard',
        'Inspector',
        'Navigator',
        'Chef',
        'Genius',
        'Abbott',
        'Operator',
        'Exterminator',
        'Assassin',
        'Intern',
    ]
};

const rapName = () => {
    let firstRand = Math.floor(Math.random() * arrays.firstNames.length)
    let middleRand = Math.floor(Math.random() * arrays.middleNames.length)
    let lastRand = Math.floor(Math.random()* arrays.lastNames.length)

    return `Your rap name is ${arrays.firstNames[firstRand]} ${arrays.middleNames[middleRand]} ${arrays.lastNames[lastRand]}.`
};

console.log(rapName())