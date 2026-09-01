import { initialize, localSet } from "@/utils/localStorage";
import { defineStore } from "pinia";
import { ref } from "vue";
export const useSettingsStore = defineStore('settings' , () => {
    const username = ref(initialize('username' , 'user1'))
    const email = ref("example@gmail.com")
    const password = ref(false)
    const name = ref(initialize('name' , 'Unknown'))
    const bio = ref(initialize('bio' , 'No bio'))
    const profile = ref(initialize('profile' , 'https://avatars.githubusercontent.com/u/284268356?v=4'))
    function newUser(userArg , emailArg , newPassword){
        username.value = userArg
        email.value = emailArg
        password.value = newPassword
    }
    function changeName(newName){
        name.value = newName 
        localSet('name' , newName)
    }
    function changeBio(newBio){
        bio.value = newBio
        localSet('bio' , newBio)
    }
    function changeUser (newUser){
        username.value = newUser
        localSet('username' , newUser)
    }
    function changePassword (newPassword){
        password.value = newPassword
    }
    function changeEmail (newEmail){
        email.value = newEmail
    }
    function changeProfile (newPic){
        profile.value = newPic
        localSet('profile', newPic)
    }



    return {newUser ,username,name,email,password,bio,profile,changeUser,changeBio,changeName,changeEmail,changeProfile,changePassword}

})