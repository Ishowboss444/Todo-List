<script setup lang="ts">
import { Check, Monitor, Moon, Palette, Sun } from 'lucide-vue-next';
import { ref } from 'vue';

const accents1:Object = ref(['black','purple','blue','green','orange','red'])
const accents = ref([
    {
        backgroundColor :'black',
        active:true,
    },
    {
        backgroundColor :'purple',
        active:false,
    },
    {
        backgroundColor :'blue',
        active:false,
    },
    {
        backgroundColor :'green',
        active:false,
    },
    {
        backgroundColor :'orange',
        active:false,
    },
    {
        backgroundColor :'red',
        active:false,
    }
])
</script>

<template>
    <div class="appearance-card setting-card">
        <div class="appearance-introduction">
            <div class="a-p-i-logo">
                <span class="svg-span">
                    <Palette/>
                </span>
            </div>
            <div class="a-p-i-text">
                <h1>Appearance</h1>
                <p>Customize the look and feel of the application</p>
            </div>
        </div>

        <div class="appearance-theme">
            <p>Theme</p>
            <div class="a-th-themes">
                <div>
                    <Check class="a-th-themes-active"/>
                    <Sun/>
                    light
                </div>
                <div>
                    <Check class="a-th-themes-active"/>
                    <Moon/>
                    Dark
                </div>
                <div>
                    <Check class="a-th-themes-active"/>
                    <Monitor/>
                    Sysytem
                </div>
            </div>
        </div>

        <div class="appearance-accent">
            <p>Accent Color</p>
            <div class="a-a-accents">
                <button v-for="accent in accents" :style="{'background': `${accent.backgroundColor}`}">
                    <Check v-if="accent.active"/>
                </button>
            </div>
        </div>
    </div>
</template>
<style>
.appearance-card{
    margin-top: 15px;
    display:flex;
    gap: 30px;
    >div{
        flex: 1;
    }
    >div:nth-child(2){
        flex: 1;
    }
    .appearance-introduction{
        .a-p-i-logo{
            display: flex;
            .svg-span{
                svg{
                    background-color: var(--bg-color);
                    width: 65px;
                    height: 65px;
                    color: var(--text);
                    padding: 18px;
                    border-radius: 50%;
                }
            }
        }
        .a-p-i-text{
            width: 80%;
            p{
                color: var(--second-text);
                font-weight: 450;
                width: 80%;
                overflow-wrap: break-word;
            }
        }
        display: flex;
        gap: 20px;
    }
    .appearance-theme{
        display: flex;
        flex-direction: column;
        gap: 10px;
        font-weight: 500;
        position: relative;
        padding-right: 40px;
        .a-th-themes{
            display: flex;
            gap: 10px;
            >div{
                position: relative;
                flex: 1;
                height: 100px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 5px;
                border-radius: 5px;
                background-color: var(--bg-color);
                cursor: pointer;
                .a-th-themes-active{
                    position: absolute;
                    top: -5px;
                    right: -5px;
                    width: 25px;
                    height: 25px;
                    border: 1px solid gray;
                    border-radius: 50%;
                    padding: 3px;
                    background-color: var(--bg-aside);
                }
            }
            >div:nth-child(1){
                background-color: var(--accent);
                color: white;
                .a-th-themes-active{
                    color: black;
                }
            }
            
        }
    }
    .appearance-theme::after{
        content: '';
        position: absolute;
        background-color:rgba(0, 0, 0, 0.189);
        width: 1px;
        height: 100%;
        right: 0;

    }
    .appearance-accent{
        display: flex;
        flex-direction: column;
        padding-left: 20px;
        justify-content: center;
        gap: 15px;
        font-size: 1rem;
        font-weight: 500;
        .a-a-accents{
            display: flex;
            gap: 20px;
            button{
                border-radius: 50%;
                width:35px;
                height: 35px;
                color: white;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }
}
</style>