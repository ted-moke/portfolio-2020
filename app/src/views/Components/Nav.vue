<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Nav</h2>
    <p>
      <router-link to="/">Home</router-link>
      <router-link to="/work">work</router-link>
      <router-link to="/demos">demos</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  props: {
    msg: String
  }
}
</script>
