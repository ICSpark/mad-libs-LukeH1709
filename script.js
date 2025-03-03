// ---- Write code below ---- \\
function dinner() {
    let food = prompt("food");
    let strange = prompt("something strange");
    let adjective = prompt("adjective");
    let animal = prompt("animal");
    let verb = prompt("verb");
    let object = prompt("object");
    let quote = prompt("quote");
    let anotherQuote = prompt("another quote");
    
    document.getElementById("output").innerHTML = `
    <p>The dinner party started with a dish of ${food} that smelled like ${strange}. 
    Suddenly, a ${adjective} ${animal} appeared and started ${verb}ing on the table! 
    The host grabbed a ${object} and yelled "${quote}!" 
    We all laughed and said "${anotherQuote}." It was unforgettable!</p>
    `;
}

function mystery()
{
  const adj = prompt("Adjective");
  const place = prompt("Place");
  const sound = prompt("Sound");
  const silName = prompt("A Silly Name");
  const obj = prompt("An Object");
  const noun = prompt("A Noun");
  const name = prompt("A Name");
  const jobTitle = prompt("A Job Title");
  const verb = prompt("Verb");
  const sub = prompt("A Substance");
  const food = prompt("Food");

  document.getElementById("output").innerHTML = `
  <p>On a(n) ${adj} night in the grand ${place}, a loud ${sound} revealed Lord ${silName} lying beside a ${obj}, muttering, "It was the ${noun}!"
  Detective ${name}, questioned the ${jobTitle}, who was caught ${verb}ing near the scene. But the truth was stranger than fiction.
  It turns out Lord ${silName} had slipped on ${sub} while trying to steal a plate of ${food}.
  Everyone laughed, and the detective vowed to investigate only serious cases from now on.</p>
  `;
}

function travel()
{
  //it does not have to be the same variable name nor prompt
  const histFig = prompt("A Historical Figure");
  const place = prompt("A Place in Time");
  const obj = prompt("A Object");
  const pluNoun = prompt("A Plural Noun");
  const adj1 = prompt("Adjective");
  const verb = prompt("Verb");
  const histPlace = prompt("A Historical Place");
  const silName = prompt("A Silly Name");
  const adj2 = prompt("Adjective");

  document.getElementById("output").innerHTML = `
    <p>Your time machine malfunctions, and a ${histFig} steals your homework escaping to ${place}!
    Armed with a ${obj}, you chase them through time, dodging ${pluNoun} and a ${adj1} dinosaur trying to ${verb} you.
    You finally catch the thief at the ${histPlace} and grab your homework just time.
    Back in class, your teacher, ${silName}, says, "That's the most ${adj2} excuse ever!" But hey, you got an A!</p>
    `;
}