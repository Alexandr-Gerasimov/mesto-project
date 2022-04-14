export default class UserInfo {
    constructor(profileName, profileStatus, avatarElement) {
        this._profileName = profileName;
        this._profileStatus = profileStatus;
        this._avatarElement = avatarElement;
    }

    getUserInfo() {
        return {
            userName: this._profileName.textContent,
            userDescription: this._profileStatus.textContent,
            userAvatar: this._avatarElement.src
        }   
    }

    setUserInfo({ name, about, avatar, _id }) {
        this._profileName.textContent = name;
        this._profileStatus.textContent = about;
        this._avatarElement.src = avatar;
        this._data = profile
    }

}

