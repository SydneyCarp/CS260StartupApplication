async function loadIdeas() {
  let ideas = [];
  try {
    // Get the latest high scores from the service
    const response = await fetch('/api/ideas');
    ideas = await response.json();

    // Save the scores in case we go offline in the future
    localStorage.setItem('ideas', JSON.stringify(ideas));
  } catch {
    // If there was an error then just use the last saved ideas
    const ideasText = localStorage.getItem('ideas');
    if (ideasText) {
      ideas = JSON.parse(ideasText);
    }
  }

  displayIdeas(ideas);
}


function displayIdeas(ideas) {
  const tableBodyEl = document.querySelector('#ideas');

  if (ideas.length) {
    // Update the DOM with the scores
    for (const [i, idea] of ideas.entries()) {
      const ideaTdEl = document.createElement('td');

      ideaTdEl.textContent = score.score;

      const rowEl = document.createElement('tr');
      rowEl.appendChild(ideaTdEl);

      tableBodyEl.appendChild(rowEl);
    }
  } else {
    tableBodyEl.innerHTML = '<tr><td colSpan=4>Ideas</td></tr>';
  }
}

loadIdeas();


let stack = [];
let tempIdea = [];
async function generate() {
  const idea = createIdea();
  
  try {
    await makeIdea(idea);
    giveIdea(idea);
  } catch (idea) {
    badIdea(idea);
  }
}

function createIdea() {
  const id = Math.floor(Math.random() * 10000);
  const ideaElement = document.createElement("li");
  const idea = { element: ideaElement, id: id };

  ideaElement.innerHTML = `<span>[${idea.id}]</span>`;
  const ideas = document.getElementById("ideas");
  ideas.appendChild(ideaElement);

  return idea;
}

function makeIdea(idea) {
  const adjective1 = ["blue", "red", "pink", "green", "yellow", "purple", "lazy", "active", "confident", "sad", "happy"];
 const adjective2 = ["flying", "running", "walking", "sleeping", "painting", "thinking", "awake", "swimming"];
  const noun = ["dog", "cat", "hamster", "hedgehog", "frog", "toad", "tiger", "lion", "cheetah", "platypus", "chameleon", "horse", "donkey", "meerkat", "goat", "squirrel", "monkey", "axolotl", "human", "deer"];
  var random1 = Math.floor(Math.random() * adjective1.length);
  var random2 = Math.floor(Math.random() * adjective2.length);
  var random3 = Math.floor(Math.random() * noun.length);
  var stringIdea = adjective1[random1] + " " + adjective2[random2] + " " + noun[random3];
  const push = (idea) => tempIdea.push(idea.id);
  return new Promise((resolve, reject) => {
    doWork(idea, 1000, 3000, resolve, reject, stringIdea);
  });
}

function doWork(idea, min, max, resolve, reject, Msg) {
  let workTime = Math.random() * (max - min) + min;
  setTimeout(() => {
    workTime = Math.round(workTime);
    idea.msg = Msg
    if(workTime < max * 0.85) {
      resolve(idea);
    } else {
      reject(idea);
    }
  }, workTime);
}

function giveIdea(idea) {
  idea.element.innerHTML = `<span>[${idea.id}] ${idea.msg}</span>`;
  localStorage.setItem(idea.id, idea.msg);
}

function badIdea(idea) {
  idea.element.innerHTML = `<span>[${idea.id}] ${idea.msg}</span>`;
  localStorage.setItem(idea.id, idea.msg);
}

function saveIdeas() {
  let ideas = [];
  let pop = () => tempIdea.pop();
  let push = (idea) => stack.push(idea.id);
  const ideasText = localStorage.getItem(pop);
  if (ideasText) {
    ideas = JSON.parse(ideasText);
  }

  localStorage.setItem('ideas', JSON.stringify(ideas));
}


// function loadIdeas() {
//   let ideas = document.getElementById("ideas");
//   const ideasText = localStorage.getItem('ideas');
//   if (ideasText) {
//     ideas = JSON.parse(ideasText);
//   }
//   const id = ideas.id
//   const ideaElement = document.createElement("li");
//   const idea = { element: ideaElement, id: id };

//   ideaElement.innerHTML = `<span>[${idea.id}]</span>`;
//   const ideaList = document.getElementById("ideaList");
//   ideaList.appendChild(ideaElement);

//   return ideaList;
// }

function remove() {
  let pop = () => tempIdea.pop();
  localStorage.removeItem(pop);
}

