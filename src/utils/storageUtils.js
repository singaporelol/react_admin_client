const USER_KEY="USER_KEY"
export const storageUtils={
  saveUser(user){
    localStorage.setItem(USER_KEY,JSON.stringify(user))
  },
  getUser(){
    return JSON.parse(localStorage.getItem(USER_KEY))
  }
}