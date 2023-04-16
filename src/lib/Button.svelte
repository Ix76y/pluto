<svelte:options tag="pl-button" />

<script lang="ts">
    /**
     * Set the variant to one of the following: 
     * - primary
     * - success
     * - neutral
     * - warning
     * - danger
    */
   export let variant: 'primary' | 'success' | 'neutral' | 'warning' | 'danger' = 'primary';


   export let _class = '';
</script>

<button class="{_class} button rounded border border-{variant}-300 bg-{variant}-50 px-4 py-2 text-{variant}-900 hover:border-{variant}-400 hover:bg-{variant}-100 active:bg-{variant}-200">
  <slot></slot>
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

.border-primary-300 {
  border-color: rgb(165 180 252);
}

.bg-primary-50 {
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

.text-primary-900 {
  color: rgb(49 46 129);
}

.hover\:border-primary-400:hover {
  border-color: rgb(129 140 248);
}

.hover\:bg-primary-100:hover {
  background-color: rgb(224 231 255);
}

.active\:bg-primary-200:active {
  background-color: rgb(199 210 254);
}

.border-warning-300 {
  border-color: rgb(252 211 77);
}

.bg-warning-50 {
  background-color: rgb(255 251 235);
}

.text-warning-900 {
  color: rgb(120 53 15);
}

.hover\:border-warning-400:hover {
  border-color: rgb(251 191 36);
}

.hover\:bg-warning-100:hover {
  background-color: rgb(254 243 199);
}

.active\:bg-warning-200:active {
  background-color: rgb(253 230 138);
}

.border-success-300 {
  border-color: rgb(110 231 183);
}

.bg-success-50 {
  background-color: rgb(236 253 245);
}

.text-success-900 {
  color: rgb(6 78 59);
}

.hover\:border-success-400:hover {
  border-color: rgb(52 211 153);
}

.hover\:bg-success-100:hover {
  background-color: rgb(209 250 229);
}

.active\:bg-success-200:active {
  background-color: rgb(167 243 208);
}

.border-danger-300 {
  border-color: rgb(253 164 175);
}

.bg-danger-50 {
  background-color: rgb(255 241 242);
}

.text-danger-900 {
  color: rgb(136 19 55);
}

.hover\:border-danger-400:hover {
  border-color: rgb(251 113 133);
}

.hover\:bg-danger-100:hover {
  background-color: rgb(255 228 230);
}

.active\:bg-danger-200:active {
  background-color: rgb(254 205 211);
}

.border-neutral-300 {
  border-color: rgb(209 213 219);
}

.bg-neutral-50 {
  background-color: rgb(249 250 251);
}

.text-neutral-900 {
  color: rgb(17 24 39);
}

.hover\:border-neutral-400:hover {
  border-color: rgb(156 163 175);
}

.hover\:bg-neutral-100:hover {
  background-color: rgb(243 244 246);
}

.active\:bg-neutral-200:active {
  background-color: rgb(229 231 235);
}



</style>