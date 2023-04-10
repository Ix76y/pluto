<svelte:options tag="pl-button" />

<script>
    export let label = 'Click Me';
</script>

<button class="button rounded border border-indigo-300 bg-indigo-50 px-4 py-2 text-indigo-900 hover:border-indigo-400 hover:bg-indigo-100 active:bg-indigo-200">
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
  border-color: rgb(165 180 252);
}

.bg-indigo-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(238 242 255);
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
  color: rgb(49 46 129);
}

.hover\:border-indigo-400:hover {
  border-color: rgb(129 140 248);
}

.hover\:bg-indigo-100:hover {
  background-color: rgb(224 231 255);
}

.active\:bg-indigo-200:active {
  background-color: rgb(199 210 254);
}


</style>