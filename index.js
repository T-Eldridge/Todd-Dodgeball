/* eslint-disable max-classes-per-file */
const assert = require("assert")
// Once you understand the challenge, whiteboard the logic.
// Create a list of steps your app needs to do (code plan).
// Translate to pseudo code.
// Translate to JavaScript on paper.

// Make a repo, clone, open and copy/paste the starter code into two new files: index.html and main.js

// Start by working through the existing code to understand it and write comments explaining what each line does.

// Put your code plan in the README.md file or your repo
// Work through the follow challenges:
// Use the class keyword to create a template of a dodgeBallPlayer that requires canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience.
// Push these new dodge ball Player objects into a new array and then display them in the DOM as available players to pick.
// Add a button to each new player that will allow each one to be selected for either Blue Team or Red Team and now has mascot and teamColor
// Use the this keyword to assign each player to a team with an onclick. Assign them to either Blue Team or Red Team.
// Display the two teams in a new list in the DOM with appropriate titles.
// Create 3 tests for your application.

// Creates an array of objects representing players and their attributes.
const arrOfPeople = [
  {
    id: 2,
    name: "Charles Young",
    age: 55,
    skillSet: "welding",
    placeBorn: "Omaha, Nebraska",
  },
  {
    id: 3,
    name: "Judy Twilight",
    age: 35,
    skillSet: "fishing",
    placeBorn: "Louisville, Kentucky",
  },
  {
    id: 4,
    name: "Cynthia Doolittle",
    age: 20,
    skillSet: "tic tac toe",
    placeBorn: "Pawnee, Texas",
  },
  {
    id: 5,
    name: "John Willouby",
    age: 28,
    skillSet: "pipe fitting",
    placeBorn: "New York, New York",
  },
  {
    id: 6,
    name: "Stan Honest",
    age: 20,
    skillSet: "boomerang throwing",
    placeBorn: "Perth, Australia",
  },
  {
    id: 7,
    name: "Mia Watu",
    age: 17,
    skillSet: "acrobatics",
    placeBorn: "Los Angeles, California",
  },
  {
    id: 8,
    name: "Walter Cole",
    age: 32,
    skillSet: "jump rope",
    placeBorn: "New Orleans, Louisiana",
  },
]

// creates empty arrays for list of players and teams
const listOfPlayers = []
const globoGym = []
const averageJoes = []

// object constructors for players and teams

class DodgeBallPlayer {
  constructor(
    player,
    canThrowBall,
    canDodgeBall,
    hasPaid,
    isHealthy,
    yearsExperience
  ) {
    this.player = player
    this.canThrowBall = canThrowBall
    this.canDodgeBall = canDodgeBall
    this.hasPaid = hasPaid
    this.isHealthy = isHealthy
    this.yearsExperience = yearsExperience
  }
}
class GloboGymTeammate {
  constructor(
    player,
    canThrowBall,
    canDodgeBall,
    hasPaid,
    isHealthy,
    yearsExperience
  ) {
    this.player = player
    this.canThrowBall = canThrowBall
    this.canDodgeBall = canDodgeBall
    this.hasPaid = hasPaid
    this.isHealthy = isHealthy
    this.yearsExperience = yearsExperience
  }
}
class AverageJoesTeammate {
  constructor(player) {
    this.player = player

    this.canThrowBall = canThrowBall
    this.canDodgeBall = canDodgeBall
    this.hasPaid = hasPaid
    this.isHealthy = isHealthy
    this.yearsExperience = yearsExperience
  }
}
// function that populates HTML players
const listPeopleChoices = () => {
  const listElement = document.getElementById("people")
  arrOfPeople.map((person) => {
    const li = document.createElement("li")
    const button = document.createElement("button")
    button.innerHTML = "Make Player"
    button.addEventListener("click", function () {
      makePlayer(person.id)
    })
    li.appendChild(button)
    li.appendChild(
      document.createTextNode(person.name + " - " + person.skillSet)
    )
    listElement.append(li)
  })
}

listPeopleChoices(arrOfPeople)
// to select a player from the players array to add to a team array
const makePlayer = (id) => {
  console.log(`li ${id} was clicked!`)
}
if (typeof describe === "function") {
  describe("DodgeBallPlayer", () => {
    it("Should add person to listOfPlayers", () => {
      const player1 = new DodgeBallPlayer("Rick Astley")
      assert.equal(player1.player, "Rick Astley")
    })
  })
}
