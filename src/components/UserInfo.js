import { api } from './Api.js';

export default class UserInfo {
    constructor(nameElement, infoElement) {
        this.nameElement = nameElement;
        this.infoElement = infoElement;
    }

    getUserInfo() {
        api.getAppInfo()
        .then(([user, cards]) => {
            this.nameElement.textContent = user.name;
            this.infoElement.textContent = user.about;
        })
            
    }

    setUserInfo() {
        api.profileUpdate(this.nameElement.textContent, this.infoElement.textContent)
    }

}

