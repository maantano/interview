//Interface

abstract class ICommand {
  abstract execute(args): void;
}

//Recevier
class State {
  private _state: number;
  constructor(state) {
    this._state = state;
  }
  getState() {
    return this._state;
  }
  setState(value) {
    this._state = value;
  }
}

//Invoker
class BankManager {
  private _state;
  private _commands = {};
  constructor(state) {
    this._state = state;
  }
  registerCommands(...args) {
    for (const cmd of args) {
      this._commands[cmd.constructor.name] = cmd;
    }
  }
  executeCmd(cmdName, param) {
    this._commands[cmdName].execute(this._state, param);
  }
}

//Command
class Deposit implements ICommand {
  execute(...params): void {
    const [state, amount] = params;
    const prevState = state.getState();
    state.setState(prevState + amount);
  }
}

class Withdrawal implements ICommand {
  execute(...params): void {
    const [state, amount] = params;
    const prevState = state.getState();
    state.setState(prevState - amount);
  }
}

// 1. Command 생성
const deposit = new Deposit();
const withdrawal = new Withdrawal();

// 2. recevier 생성
const state = new State(0);

// 3. invoker 인스턴스 & receiver 등록
const bankManager = new BankManager(state);

// 4. command 등록
bankManager.registerCommands(deposit, withdrawal);

// 5.command 지시

bankManager.executeCmd("Deposit", 100);
bankManager.executeCmd("Deposit", 1000);
console.log(state.getState());

bankManager.executeCmd("Withdrawal", 1000);

console.log(state.getState());
