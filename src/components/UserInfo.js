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

    setUserInfo(profile) {
        this._profileName.textContent = profile.name;
        this._profileStatus.textContent = profile.about;
        this._avatarElement.src = profile.avatar;
        this._data = profile
    }

}

