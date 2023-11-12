/* 
Create a fortune teller object that has the following properties and methods:
    - Properties
        * Fortunes: an array that contains all the possible fortunes as strings (10 fortunes)
        * Luck score description: an array that contains all of the luck score descriptions
    - Methods:
        * tellFortune: randomises the luck rating and achieve goals boolean, and selects a random fortune from the fortune array. Fortune should have the following structure: "Today your luck score is: [luck score]. [luck score description]. You [will/will not] achieve your goals today. [random fortune]." Method should log the fortune straight to the console.
*/

const fortuneTeller = {
    // List of possible fortunes stored as strings in an array
    _fortunes: [
        'beware of low-flying pigs—they might just be aiming for your lunch!',
        'your socks will forever conspire to disappear in the laundry. Invest in more sock-friendly appliances.',
        'you will soon develop a superpower: the ability to find the TV remote in less than 30 seconds. Use it wisely.',
        'an alien will mistake your dance moves for advanced communication. Prepare for intergalactic fame.',
        'your talent for parallel parking will astonish friends and annoy enemies. Embrace your curbside charisma.',
        "beware of plants—they're plotting to take over the world. Water them at your own risk.",
        "you will gain the extraordinary ability to perfectly mimic a cat's meow. Use it wisely to confuse your pets.",
        'in the near future, you will master the art of speaking in movie quotes. Your life will become a blockbuster.',
        'you will discover the secret to time travel, but only when looking for lost keys. Prioritize your mysteries wisely.',
        'beware of talking to your plants—they might start revealing your deepest secrets to the neighborhood squirrels.'
    ],
    // List of possible luck descriptions stored as strings in an array, to accompany the luck rating
    _luckDescriptions: [
        'Your luck is like a one-ply tissue—thin and unreliable, ready to tear at the slightest challenge.',
        'Your luck resembles a semi-deflated balloon—occasionally buoyant, but not soaring to great heights, offering a mix of ups and downs.',
        'Your luck is comparable to a coin flip—50/50, embracing uncertainty with surprises, both good and not-so-good.',
        'Your luck is akin to finding money in your pocket just when you need it, enjoying unexpected windfalls and counting your blessings.',
        'Your luck is a four-leaf clover in a field of three-leaf ones, with fortune favoring you abundantly on a charmed and delightful journey ahead.'
    ],
    // Function to generate a random fortune and print to the console
    tellFortune () {
        // Quick function to get a random number between two numbers, which I will use to get the indices to access the string arrays and also to get the luck score.
        const getRandBetween = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
        let fortuneIndex = getRandBetween(0, this._fortunes.length - 1);
        let luckRating = getRandBetween(0, this._luckDescriptions.length - 1);

        // Conditional statement that creates a 50% chance of the user achieving their goals
        let achieveGoals = getRandBetween(0,1) === 1 ? 'will' : 'will not';

        // Accessing the specific fortune/luck description and storing it in an array
        let fortune = this._fortunes[fortuneIndex];
        let luckDescription = this._luckDescriptions[luckRating];

        // Logging the final message to the console.
        console.log(`Today your luck score is: ${luckRating}, which means ${luckDescription.toLowerCase()} You ${achieveGoals} achieve your goals today, and ${fortune}`);
    }
};

fortuneTeller.tellFortune();