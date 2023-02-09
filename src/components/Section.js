export default class Section {
  constructor({ renderer }, cardListSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(cardListSelector);
  }

  renderItem(items) {
    items.forEach((item) => this._renderer(item));
  }

  addItem(element) {
    this._container.prepend(element);
  }
}