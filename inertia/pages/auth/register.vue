<script setup lang="ts">
defineProps({
  csrfToken: String,
})
</script>

<template>
  <form id="login" class="form-container mt-80" method="POST" action="/auth/register">
    <div class="input-container">
      <label for="name">Full name</label>
      <input type="text" name="fullName" placeholder="full name" id="name" />
    </div>
    <div class="input-container">
      <label for="email">Email</label>
      <input type="email" name="email" placeholder="Email" id="email" />
    </div>
    <div class="input-container">
      <label for="password">Password</label>
      <input type="password" name="password" placeholder="password" id="password" />
    </div>
    <button type="submit">Sign Up</button>
  </form>
</template>
