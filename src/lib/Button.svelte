<script>
    export let label = 'Click Me';
</script>

<button class="button rounded border border-indigo-300 bg-indigo-50 px-4 py-2 text-indigo-900 hover:border-indigo-400 hover:bg-indigo-100 active:bg-indigo-200 dark:border-indigo-900 dark:bg-indigo-950 dark:text-white dark:hover:border-indigo-800 dark:hover:bg-indigo-900 dark:active:bg-indigo-800">
  {label} 
</button>
<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800;900;1000&display=swap');

.button {
  font-family: 'Nunito', sans-serif;
  font-size: 1em;
  font-weight: lighter;
}
.rounded {
  border-radius: 0.25rem;
}

.border {
  border-width: 1px;
}

.border-indigo-300 {
  --tw-border-opacity: 1;
  border-color: rgb(165 180 252 / var(--tw-border-opacity));
}

.bg-indigo-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(238 242 255 / var(--tw-bg-opacity));
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.text-indigo-900 {
  --tw-text-opacity: 1;
  color: rgb(49 46 129 / var(--tw-text-opacity));
}

.hover\:border-indigo-400:hover {
  --tw-border-opacity: 1;
  border-color: rgb(129 140 248 / var(--tw-border-opacity));
}

.hover\:bg-indigo-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(224 231 255 / var(--tw-bg-opacity));
}

.active\:bg-indigo-200:active {
  --tw-bg-opacity: 1;
  background-color: rgb(199 210 254 / var(--tw-bg-opacity));
}

@media (prefers-color-scheme: dark) {
  .dark\:border-indigo-900 {
    --tw-border-opacity: 1;
    border-color: rgb(49 46 129 / var(--tw-border-opacity));
  }

  .dark\:bg-indigo-950 {
    --tw-bg-opacity: 1;
    background-color: rgb(30 27 75 / var(--tw-bg-opacity));
  }

  .dark\:text-white {
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }

  .dark\:hover\:border-indigo-800:hover {
    --tw-border-opacity: 1;
    border-color: rgb(55 48 163 / var(--tw-border-opacity));
  }

  .dark\:hover\:bg-indigo-900:hover {
    --tw-bg-opacity: 1;
    background-color: rgb(49 46 129 / var(--tw-bg-opacity));
  }

  .dark\:active\:bg-indigo-800:active {
    --tw-bg-opacity: 1;
    background-color: rgb(55 48 163 / var(--tw-bg-opacity));
  }
}


</style>