import { initialize, localSet } from "@/utils/localStorage";
import { defineStore } from "pinia";
import { ref } from "vue";
export const useSettingsStore = defineStore('settings' , () => {
    const username = ref(false)
    const email = ref(false)
    const password = ref(false)
    const name = ref(initialize('userInfo' , 'Unknown'))
    const bio = ref(initialize('bio' , 'No bio'))
    const profile = ref(initialize('profile' , 'https://avatars.githubusercontent.com/u/284268356?v=4'))
    function newUser(userArg , emailArg , newPassword){
        username.value = userArg
        email.value = emailArg
        password.value = newPassword
    }
    function changeUser (newUser){
        username.value = newUser
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
        console.log(profile.value);
        
    }



    return {newUser ,username,name,email,password,bio,profile,changeUser,changeEmail,changeProfile,changePassword}

})