// Problem 1:
// Given an amount in dollars and a tax percentage. Return an array with the tax amount in cents.

const getTax = function (price, tax_rate) {
    // Null check price & tax_rate
    // Check price for negative
    const tax_dollars = price * tax_rate;
    const tax_cents   = Number.parseFloat(tax_dollars * 100).toPrecision(2);
    return [tax_cents];
}


// Problem 2:
// Given the deck ['A',1,2,3,4,5,6,7,8,9,10,'J','K','Q'], write a function that shuffles the deck using the randint function. 
// The random module includes a basic function randint(a, b) that returns a uniformly random integer from a to b (including both endpoints). 

const shuffleDeck = function(deck) {
    for (let i = 0; i < deck.length; i++) {
        const rand = randInt(0,deck.length);
        const tmp  = deck[rand];
        deck[rand] = deck[i];
        deck[i]    = tmp;
    }
}

// Example: 
// Input deck = ['A',1,2,3,4,5,6,7,8,9,10,'J','K','Q'].
// Output = ['Q',K,2,3,4,5,6,7,8,9,10,'1','A','J'] or can be in any shuffled order

// Problem 3:
// Given a string s, return the sum of the vowels in the string if each vowel's weight increases by 1 according to the vowels order. 

// Question: Indonesia has 2 I's if you count uppercase I as a vowel so result could be 25
const sumVowels = function(s) {
    let sum = 0;
    const vowels = " aeiou"
    for (const c of s) {
        // Remove this line if you want result = 22;
        // const cLower = c.toLowerCase();
        const index  = vowels.search(cLower);
        if (index !== -1) {
            sum += index;
        } 
    }
    return sum;
}
// Example:  
// Input=  s: "Welcome to Indonesia", Vowels weight: a = 1, e = 2, i = 3, o = 4, u = 5  
// Output = 22 (1 a's = 1*1 = 1 +  3 e's = 3*2 = 6 +  1 i's = 1*3 = 3 + 3 o's = 3*4 = 12)


// Problem 4:
// Write a recursive version of the previous function (or an iterative version if you already did a recursive version).
const sumVowelsRecurse = function(s) {
    if (s.length === 0) {
        return 0;
    }
    const vowels = " aeiou"
    const cLower = s[0].toLowerCase();
    const index  = vowels.search(cLower);
    if (index !== -1) {
        return index + sumVowelsRecurse(s.substring(1));
    } 
    return sumVowelsRecurse(s.substring(1));
}

console.log(sumVowelsRecurse("Welcome to Indonesia"));

// Problem 5:
// Write a regular expression to find any word between 4 and 9 letters long and containing either “odoo”, “code” or “work”?
//I can use \b\w{4,9}\b to match words of length 4-9
//I can use \odoo|code|work\ to find the words 
//I'm stuck on how to combine them

const findWord = function(s) {

}



// Problem 6:
// https://gist.github.com/sna-odoo/70229f8bc4c3a232324b3c70ca9d2e6b
// Create a 3*3 box using flex property, For each box it should display zero as the count in the center

<div class="box-container">
    <div class = "col">
        <div class = "row" onclick="increment()">0</div>
        <div class = "row" onclick="increment()">0</div>
        <div class = "row" onclick="increment()">0</div>
    </div>
    <div class = "col">
        <div class = "row" onclick="increment()">0</div>
        <div class = "row" onclick="increment()">0</div>
        <div class = "row" onclick="increment()">0</div>
   </div>
    <div class = "col">
        <div class = "row" onclick="increment()">0</div>
        <div class = "row" onclick="increment()">0</div>
        <div class = "row" onclick="increment()">0</div>
   </div>
</div>

<script type="text/javascript">
    const increment = function(event) {
        let caller = event.target;
        let value  = caller.innerHTML;
        caller.innerHTML = Number.parseInt(value) + 1 ;
    }
</script>



// Problem 7:
// Extend the above feature by implementing the counter feature, the count has to be incremented only for the clicked box .

// Problem 8:
// Extend the above feature by creating a "click here" button and upon clicking the button the count of all the boxes has to increment by 1 with 1 second gap for each increment.

// Problem 9:
// Find count of 'odoo.sh' word in all sections of https://www.odoo.sh/faq webpage including collapsible divs using jquery.


// CREATE TABLE USERS (
//     first_name VARCHAR (50),
//     last_name VARCHAR (50),
//     address     VARCHAR (50),
//     city_id.       INT 
//     FOREIGN KEY (city_id)
//     REFERENCES City (city_id)
// )

// SELECT city_id, name, num_users in descending order
