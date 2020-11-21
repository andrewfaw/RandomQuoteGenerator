/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
	{
		quote: 'Character is much better kept than recovered.',
		source: 'Thomas Paine'	
	},
	{
		quote: 'I am an old man and have known a great many troubles, but most of them never happened.',
		source: 'Mark Twain'
	},
	{
		quote: 'Pipe down kid, Daddy\'s hung!',
		source: 'Patrick',
		citation: 'The Women'
	},
	{
		quote: 'I do not like work, even if another person does it.',
		source: 'Mark Twain'
	},
	{
		quote: 'I found the key to happiness. Stay away from idiots.',
		source: 'Morgan Freeman'
	},
	{
		quote: 'Ever tried? Ever failed? No matter. Try again. Fail again. Fail better.',
		source: 'Samuel Beckett'
	},
	{
		quote: 'Never, never, never give up.',
		source: 'Winston Churchill',
		year: '1941'
	},
	{
		quote: 'Believe you can and you\'re halfway there.',
		source: 'Theodore Roosevelt'		
	}
];


/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
	let quoteCount = Object.keys(quotes).length;
	let randomNumber = Math.floor( Math.random() * quoteCount );
	return randomNumber;
}
console.log(Object.keys(quotes).length);
console.log( getRandomQuote() );

/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);