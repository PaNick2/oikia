<template>
  <form id="login" class="form-container mt-80" method="POST" action="/auth/login">
    <div class="input-container">
      <label for="email">Email</label>
      <input type="email" name="email" placeholder="Email" id="email" />
    </div>

    <div class="input-container">
      <label for="password">Password</label>
      <input type="password" name="password" placeholder="password" id="password" />
    </div>
    <button type="submit">Sign in</button>
  </form>
</template>
