import "./level.scss";
import { LevelItem } from "./level-item";

const LEVEL_WIDTH = 13;
const LEVEL_HEIGHT = 13;

export class Level {
  #columns = [];
  #levelElement = document.createElement("div");
  #rootElement = document.getElementById("root");

  render() {
    const createLevelItem = () => {
      return new LevelItem();
    };
    const createCellGroup = (column) => {
      return new Array(LEVEL_HEIGHT).fill(null).map(createLevelItem);
    };
    this.#columns = new Array(LEVEL_WIDTH).fill(null).map(createCellGroup);

    this.#levelElement.classList.add("level");

    this.#rootElement.appendChild(this.#levelElement);
  }

  armBomb() {}

  canMove() {}

  destroy() {}
}
