<template>
    <div class="setting-card">
      <div>
        <SCardHero
          :component="'User'"
          :first-text="'Profile Information'"
          :second-text="'Update your personal information.'"
        />
        <div class="user-change-info-form">
          <div class="change-info-form-item">
            <lable>Full name</lable>
            <input
              v-model="newConfiguration.fullName"
              type="text"
            >
          </div>

          <div class="change-info-form-item email-field">
            <lable>Email Adress</lable>
            <div>
              <input
                type="email"
                :value="settingStore.email"
                readonly
              >
              <Lock />
            </div>
          </div>

          <div class="change-info-form-item">
            <lable>Username</lable>
            <input
              v-model="newConfiguration.username"
              type="text"
            >
          </div>

          <div class="change-info-form-item">
            <lable>Bio (optional)</lable>
            <input
              v-model="newConfiguration.bio"
              type="text"
            >
          </div>
        </div>
      </div>

      <div class="profile-information-right-div">
        <div class="profile-information-photo">
          <img
            :src="currentProfile"
            alt="yes"
          >
        </div>
        <div class="profile-information-file-reader">
          <button>
            <Upload />
            Change Photo
            <input
              ref="pathPic"
              class="file-reader-input"
              type="file"
              @change="picLoc"
            >
          </button>
          <p>JPG,PNG or GIF,Max size 2MB</p>
        </div>
        <div class="profile-information-save">
          <button @click="save">
            Save Changes
          </button>
        </div>
      </div>
    </div>
</template>
<script setup lang="js">
import { useSettingsStore } from "@/stores/settings";
import SCardHero from "@/components/setting/SCardHero.vue";
import { Lock, Upload } from "lucide-vue-next";
import { ref } from "vue";
import { toast } from "vue-sonner";

const settingStore = useSettingsStore();
const currentProfile = ref(JSON.parse(localStorage.getItem("profile")));
const newConfiguration = ref({
  fullName: settingStore.name,
  username: settingStore.username,
  bio: settingStore.bio,
});
function save() {
  settingStore.changeUser(newConfiguration.value.username);
  settingStore.changeBio(newConfiguration.value.bio);
  settingStore.changeName(newConfiguration.value.fullName);
  settingStore.changeProfile(currentProfile.value);
  toast.success("successfully saved");
}
function picLoc(event) {
  const file = event.target.files[0];
  if (!file) return;

  if (file.size > 2 * 1024 * 1024) {
    alert("your file is more than 2MB");
    return;
  }
  const reader = new FileReader();
  reader.onload = (e) => {
    currentProfile.value = e.target.result;
  };
  reader.readAsDataURL(file);
}
</script>