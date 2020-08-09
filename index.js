/* eslint-disable max-classes-per-file */
const assert = require("assert")
const { doc } = require("prettier")
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
    name: "Kate Veatch",
    age: 31,
    skillSet: "Can Throw A Ball",
    placeBorn: "Louisville, Kentucky",
    canThrowBall: true,
    canDodgeBall: true,
    hasPaid: true,
    isHealthy: true,
    yearsExperience: 3,
  },
  {
    id: 3,
    name: "Judy Twilight",
    age: 35,
    skillSet: "fishing",
    placeBorn: "Louisville, Kentucky",
    canThrowBall: true,
    canDodgeBall: true,
    hasPaid: true,
    isHealthy: true,
    yearsExperience: 3,
  },
  {
    id: 4,
    name: "Cynthia Doolittle",
    age: 20,
    skillSet: "tic tac toe",
    placeBorn: "Pawnee, Texas",
    canThrowBall: true,
    canDodgeBall: true,
    hasPaid: true,
    isHealthy: true,
    yearsExperience: 3,
  },
  {
    id: 5,
    name: "John Willouby",
    age: 28,
    skillSet: "CAN DODGE A WRENCH",
    placeBorn: "New York, New York",
    canThrowBall: true,
    canDodgeBall: true,
    hasPaid: true,
    isHealthy: true,
    yearsExperience: 3,
  },
  {
    id: 6,
    name: "Stan Honest",
    age: 20,
    skillSet: "boomerang throwing",
    placeBorn: "Perth, Australia",
    canThrowBall: true,
    canDodgeBall: true,
    hasPaid: true,
    isHealthy: true,
    yearsExperience: 3,
  },
  {
    id: 7,
    name: "Mia Watu",
    age: 17,
    skillSet: "acrobatics",
    placeBorn: "Los Angeles, California",
    canThrowBall: true,
    canDodgeBall: true,
    hasPaid: true,
    isHealthy: true,
    yearsExperience: 3,
  },
  {
    id: 8,
    name: "Walter Cole",
    age: 32,
    skillSet: "jump rope",
    placeBorn: "New Orleans, Louisiana",
    canThrowBall: true,
    canDodgeBall: true,
    hasPaid: true,
    isHealthy: true,
    yearsExperience: 3,
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
class GloboGymTeammate extends DodgeBallPlayer {
  constructor(
    player,
    canThrowBall,
    canDodgeBall,
    hasPaid,
    isHealthy,
    yearsExperience
  ) {
    super(
      player,
      canThrowBall,
      canDodgeBall,
      hasPaid,
      isHealthy,
      yearsExperience
    )
    this.player = player
    this.canThrowBall = canThrowBall
    this.canDodgeBall = canDodgeBall
    this.hasPaid = hasPaid
    this.isHealthy = isHealthy
    this.yearsExperience = yearsExperience
  }
}
class AverageJoesTeammate extends DodgeBallPlayer {
  constructor(
    player,
    canThrowBall,
    canDodgeBall,
    hasPaid,
    isHealthy,
    yearsExperience
  ) {
    super(
      player,
      canThrowBall,
      canDodgeBall,
      hasPaid,
      isHealthy,
      yearsExperience
    )
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
  const bodyElement = document.getElementById("body")
  const listButton = document.getElementById("list-people-button")
  bodyElement.removeChild(listButton)
  const listElement = document.getElementById("people")
  listElement.className = "people-list"
  const ineligiblePlayer = document.createElement("LI")
  arrOfPeople.map((person) => {
    const li = document.createElement("li")
    const button = document.createElement("button")
    button.innerHTML = "Make Player"
    li.appendChild(button)
    li.appendChild(
      document.createTextNode(
        `${person.name}  -  Special Skill: ${person.skillSet}  -  Years of Experience: ${person.yearsExperience}`
      )
    )
    if (
      person.canThrowBall == true &&
      person.canDodgeBall == true &&
      person.hasPaid == true &&
      person.isHealthy == true &&
      person.yearsExperience > 0
    ) {
      listElement.append(li)
    } else {
      listElement.append(ineligiblePlayer)
      ineligiblePlayer.appendChild(button)
      ineligiblePlayer.appendChild(
        document.createTextNode(
          `${person.name}  -  Special Skill: ${person.skillSet}  -  Years of Experience: ${person.yearsExperience}`
        )
      )
      ineligiblePlayer.style.color = "red"
    }

    button.addEventListener("click", function () {
      if (
        person.canThrowBall == true &&
        person.canDodgeBall == true &&
        person.hasPaid == true &&
        person.isHealthy == true &&
        person.yearsExperience > 0
      ) {
        makePlayer(person)
        li.removeChild(this)
      } else {
        ineligiblePlayer.style.textDecoration = "line-through"
        alert(`${person.name} did not meet all pre-game criteria`)
        ineligiblePlayer.removeChild(this)
      }
    })
  })
}
//END OF LIST PEOPLE BUTTON //
listPeopleChoices(arrOfPeople)
// to select a player from the players array to add to a team array
// MAKE PLAYER BUTTON //
const makePlayer = (id) => {
  const eligibleList = document.getElementById("players")
  eligibleList.className = "eligible-list"
  const eligibleLI = document.createElement("LI")
  const globoList = document.getElementById("globo")
  const joesList = document.getElementById("joes")
  const globoLI = document.createElement("LI")
  const joesLI = document.createElement("LI")
  globoLI.className = "globo-team-list"
  joesLI.className = "joes-team-list"
  const globoButton = document.createElement("BUTTON")
  const avgJoeButton = document.createElement("BUTTON")
  globoButton.className = "globo-button"
  avgJoeButton.className = "joe-button"
  eligibleLI.append(avgJoeButton)
  eligibleLI.append(globoButton)
  eligibleLI.appendChild(document.createTextNode(`${id.name}`))
  globoButton.innerHTML = "Team Globo Gym"
  avgJoeButton.innerHTML = "Team Average Joes"
  eligibleList.append(eligibleLI)
  globoButton.addEventListener("click", function () {
    if (
      globoGym.length < 3 &&
      id.canThrowBall == true &&
      id.canDodgeBall == true &&
      id.hasPaid == true &&
      id.isHealthy == true &&
      id.yearsExperience > 0
    ) {
      globoGym.push(
        new GloboGymTeammate(
          id.name,
          id.canThrowBall,
          id.canDodgeBall,
          id.hasPaid,
          id.isHealthy,
          id.yearsExp,
          "Globo Gym",
          "Red",
          "Purple Cobras"
        )
      )
      globoList.append(globoLI)
      globoLI.appendChild(document.createTextNode(`${id.name}`))
      eligibleLI.removeChild(this)
      eligibleLI.removeChild(avgJoeButton)
    } else if (
      id.canThrowBall !== true ||
      id.canDodgeBall !== true ||
      id.hasPaid !== true ||
      id.isHealthy !== true ||
      id.yearsExperience <= 0
    ) {
      alert("Not Eligible")
    } else {
      alert("Globo Gym Team Full")
      eligibleLI.removeChild(globoButton)
    }
  })
  avgJoeButton.addEventListener("click", function () {
    if (
      averageJoes.length < 3 &&
      id.canThrowBall == true &&
      id.canDodgeBall == true &&
      id.hasPaid == true &&
      id.isHealthy == true &&
      id.yearsExperience > 0
    ) {
      averageJoes.push(
        new AverageJoesTeammate(
          id.name,
          id.canThrowBall,
          id.canDodgeBall,
          id.hasPaid,
          id.isHealthy,
          id.yearsExp,
          "Average Joes",
          "Blue",
          "Joes"
        )
      )

      /3 tests//
// 1.
// 2.
// 3.
// 1. Should create new instance of DodgeBallPlayer
// 2. Should be able to create instance of AverageJoesTeammate
// 3. Teammate Objects should have color and mascot keys

if (typeof describe === "function") {
  describe("DodgeBallPlayer", () => {
    it("Should create new instance of DodgeBallPlayer", () => {
      // assert.equal(listOfPlayers.length, 0)
      const vinceVaughn = new DodgeBallPlayer(
        "Vince Vaughn",
        true,
        true,
        true,
        true,
        16
      )
      assert.equal(vinceVaughn.player, "Vince Vaughn")
    })
    it("Should prove person becomes a player", () => {
      assert.equal(globoGym.length, 0)
      // const vinceVaughn = new DodgeBallPlayer(
      //   "Vince Vaughn",
      //   true,
      //   true,
      //   true,
      //   true,
      //   16
      // )
      makePlayer(arrOfPeople[0])
      // assert.equal()
      assert.equal(globoGym.length, [1])
  })
  describe("GloboGymTeammate", () => {
    it("Should be able to create instance of AverageJoesTeammate", () => {
      const vinceVaughnAvgJoe = new AverageJoesTeammate(
        "Vince Vaughn",
        true,
        true,
        true,
        true,
        16,
        "Blue",
        "Average Joes"
      )
      assert.equal(vinceVaughnAvgJoe.mascot, "Average Joes")
    })
    it("Teammate Objects should have color and mascot keys", () => {
      const vinceVaughnAvgJoe = new AverageJoesTeammate(
        "Vince Vaughn",
        true,
        true,
        true,
        true,
        16,
        "Average Joes",
        "Joes"
        "Blue",
        "Average Joes"
      )
      assert.equal(vinceVaughn.teamName, "Average Joes")
      assert.equal(vinceVaughnAvgJoe.color, "Blue")
      assert.equal(vinceVaughnAvgJoe.mascot, "Average Joes")
    })
    // it("Should add person to listOfPlayers", () => {
    //   const player1 = new DodgeBallPlayer("Rick Astley")
    // })
  })
}
 ProTip! Use n and p 