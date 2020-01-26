<template>
  <div class="welcome container">
    <div class="card">
      <div class="card-content center-align">
        <h2 class="blue-text">Welcome To Just Chat</h2>
        <img class="chat" src="@/assets/chat1.jpg" />

        <form @submit.prevent="enterChat">
          <label for="name">Enter your name:</label>
          <input type="text" name="name" v-model="name" />
          <p v-if="feedback" class="red-text">
            {{ feedback }}
          </p>
          <button class="btn blue">Enter Chat</button>
        </form>
      </div>
    </div>
    <Love />
  </div>
</template>

<script>
import Love from "@/components/Love";
export default {
  name: "Welcome",
  components: {
    Love
  },
  data() {
    return {
      name: null,
      feedback: null
    };
  },
  methods: {
    enterChat() {
      if (this.name) {
        this.$router.push({ name: "Chat", params: { name: this.name } });
      } else {
        this.feedback = "You must enter a name to join";
      }
    }
  }
};
</script>

<style>
.welcome {
  max-width: 400px;
  margin-top: 100px;
}
.welcome h2 {
  font-size: 3em;
}
.welcome button {
  margin: 30px auto;
}
.love {
  align-content: center;
  margin: 30px auto;

  font-weight: bold;
  font-size: 20px;
  font-family: "Bangers", cursive;
}

img {
  width: 200px;
  height: 150px;
}
</style>
