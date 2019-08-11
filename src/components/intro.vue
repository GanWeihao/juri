<template>
    <div id="intro" v-if="url==title">
        <div>
            <h1>项目简介</h1>
        </div>
    </div>
</template>

<script>
    export default {
        name: "intro",
        props: {
            url: String,
        },
        data(){
            return{
                title:"/intro"
            }
        },
      created:{

      },
      methods(){

      }
    }
</script>

<style>
    #intro{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-left: 10px;
    }
</style>
