import IconPaper from "./assets/icon-paper.svg";
import IconRock from "./assets/icon-rock.svg";
import IconScissors from "./assets/icon-scissors.svg";

export const GAME_STATUS = {
  EQUALS:'EQUALS',
  WINNER:'WINNER',
  LOOSER:'LOOSER',
}


export const GAME_BUTTONS_KEYS = {
  ROCK: 'ROCK',
  PAPER: 'PAPER',
  SCISSORS: 'SCISSORS',
}
export const STEPS = {
  YOUR_TURN: 1,
  COMPUTER_TURN: 2,
};

export const GAME_BUTTONS = {
  ROCK: {
    key: GAME_BUTTONS_KEYS.ROCK,
    name: 'rock',
    power: 2,
    icon: IconRock,
    beats: [
      GAME_BUTTONS_KEYS.SCISSORS,
    ]
  },
  PAPER: {
    key: GAME_BUTTONS_KEYS.PAPER, name: 'paper', power: 3, icon: IconPaper, beats: [
      GAME_BUTTONS_KEYS.ROCK,
    ]
  },
  SCISSOR: {
    key: GAME_BUTTONS_KEYS.SCISSORS, name: 'scissors', power: 4, icon: IconScissors, beats: [
      GAME_BUTTONS_KEYS.PAPER,
    ]
  },
};

