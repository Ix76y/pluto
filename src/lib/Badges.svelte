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
</script>

<div class="inline-block drop-shadow-sm rounded bg-{variant}-500 px-2 py-1 text-{variant}-50">
    <slot></slot>
</div>
  


<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800;900;1000&display=swap');

*, ::before, ::after {
  font-family: 'Nunito', sans-serif;
  font-size: 0.8em;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
}

.inline-block {
  display: inline-block;
}

.rounded {
  border-radius: 0.25rem;
}

.bg-warning-500 {
  background-color: rgb(245 158 11);
}

.bg-success-500 {
  background-color: rgb(16 185 129);
}

.bg-primary-500 {
  background-color: rgb(99 102 241);
}

.bg-danger-500 {
  background-color: rgb(244 63 94);
}

.bg-neutral-500 {
  background-color: rgb(100 116 139);
}

.px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.py-1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}

.text-warning-50 {
  color: rgb(255 251 235);
}

.text-success-50 {
  color: rgb(236 253 245);
}

.text-primary-50 {
  color: rgb(238 242 255);
}

.text-danger-50 {
  color: rgb(255 241 242);
}

.text-neutral-50 {
  color: rgb(248 250 252);
}

.drop-shadow-sm {
  --tw-drop-shadow: drop-shadow(0 1px 1px rgb(0 0 0 / 0.05));
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}



 
</style>