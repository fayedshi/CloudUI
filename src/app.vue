<template>
  <h1>Cloud UI</h1>
  <p>
    <strong>Current route path:</strong> {{ $route.fullPath }}
  </p>
  <main>
    <RouterView />
  </main>
  <nav>
      <RouterLink to="/">Home</RouterLink>
    </nav>
</template>
