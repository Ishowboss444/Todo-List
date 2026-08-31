<template>
    <div class="test">
      <SProfileInformation/>
      <SCard class="setting-card">
      
        <div>
            <SCardHero 
            :component="'User'" 
            :first-text="'Profile Information'"
            :second-text="'Update your personal information.'"
            />
            <div class="user-change-info-form">

                <div class="change-info-form-item">
                    <lable>Full name</lable>
                    <input type="text" :value="settingStore.name">
                </div>

                <div class="change-info-form-item email-field">
                    <lable>Email Adress</lable>
                    <div class="bg-gray-100">
                        <input  
                        type="email"
                        :value="settingStore.email"
                        readonly>
                        <Lock/>
                    </div>
                </div>

                <div class="change-info-form-item">
                    <lable>Username</lable>
                    <input type="text" :value="settingStore.username">
                </div>

                <div class="change-info-form-item">
                    <lable>Bio (optional)</lable>
                    <input type="text" :value="settingStore.bio">
                </div>

            </div>
        </div>

        <div class="profile-information-right-div">
            <div class="profile-information-photo">
                <img :src="settingStore.profile" alt="yes">
            </div>
            <div class="profile-information-file-reader">
                <button>
                    <Upload/>
                    Change Photo
                    <input class="file-reader-input" type="file" @change="picLoc" ref="pathPic">
                </button>
                <p>JPG,PNG or GIF,Max size 2MB</p>
            </div>
            <div class="profile-information-save">
                <button>
                    Save Changes
                </button>
            </div>
        </div>

      </SCard>
    </div>
</template>
<script setup lang="js">
import SCard from '@/components/setting/SCard.vue';
import SProfileInformation from '@/components/setting/SProfileInformation.vue';
import { useSettingsStore } from '@/stores/settings';
import SCardHero from '@/components/setting/SCardHero.vue';
import { ref } from 'vue';
import { Download, Lock, Upload } from 'lucide-vue-next';

const settingStore = useSettingsStore()
settingStore.newUser('Ishowboss444','abolboss1388@gmail.com','abolfazlqwert')
console.log(settingStore.username);
// settingStore.changeProfile('https://avatars.githubusercontent.com/u/284268356?s=400&u=c03afd32ac9f1c53976c2aec4cfe71b08c93fd47&v=4')
const pathPic = ref(null)
function picLoc(event){
    const file = event.target.files[0]
    if (!file) return;

    if(file.size > 2 * 1024 * 1024){
        alert('your file is more than 2MB')
        return
    }
    const reader = new FileReader()
    reader.onload = (e)=>{
        console.log(e.target.result);
        settingStore.changeProfile(e.target.result)
    }
    reader.readAsDataURL(file)
}
</script>
<style scoped>

.test{
    padding: 0.5rem 1rem ;
}
</style>