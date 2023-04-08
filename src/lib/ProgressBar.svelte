<script>
    /**
     * Percentage between zero and 1 for 0% and 100%
     */
    export let percentage = 0.0;

    $: percentageText = clamp(Math.round(percentage * 100), 0, 100);

    /**
     * @param {number} number
     * @param {number} min
     * @param {number} max
     */
    function clamp(number, min, max) {
        return Math.max(min, Math.min(number, max));
    }
</script>

<div>
    <p class="mx-auto w-full text-center text-slate-600">{percentageText}%</p>
    <div class="h-2 w-full rounded-full bg-indigo-100">
      <div class="z-4 h-2 rounded-full bg-indigo-300" style="width: {percentageText}%;" />
    </div>
  </div>


<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800;900;1000&display=swap');

p {
  font-family: 'Nunito', sans-serif;
  font-size: 1em;
  font-weight: lighter;
}
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.h-2 {
  height: 0.5rem;
}

.w-full {
  width: 100%;
}

.rounded-full {
  border-radius: 9999px;
}

.bg-indigo-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(224 231 255 / var(--tw-bg-opacity));
}

.bg-indigo-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(165 180 252 / var(--tw-bg-opacity));
}

.text-center {
  text-align: center;
}

.text-slate-600 {
  --tw-text-opacity: 1;
  color: rgb(71 85 105 / var(--tw-text-opacity));
}


</style>