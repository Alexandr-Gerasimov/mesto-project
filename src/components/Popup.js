export default class Popup {
    constructor(popupSelector) {
        this.popupSelector = popupSelector
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
          const openedPopup = document.querySelector('.popup_opened')
          this.close(openedPopup);
        }
    }
    
    open() {
        this.popupSelector.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose.bind(this));
        document.addEventListener('click', this._closeByClick.bind(this));
    }
      
    close() {
        this.popupSelector.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose.bind(this));
        document.removeEventListener('click', this._closeByClick.bind(this));
    }
    
    _closeByClick(evt) {
        if (evt.target.classList.contains('popup_opened')) {
            console.log(this)
            this.close();
        }
    }

    setEventListeners() {
    
    }
} 