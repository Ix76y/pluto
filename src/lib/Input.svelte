<script lang="ts">
    /**
     * Optional Label for input field
     */
    export let label: string = "Label";

    /**
     * ID for input field
     */
    export let inputID: string = "";

    /**
     * Input type, can be:
     * - text
     * - email
     * - password
     */
    export let inputType: string = "text";

    /**
     * Label position, can be either: left or top, default is top
    */
    export let labelPosition: "left" | "top" = "top";

    /**
     * Prefix text; before input field
    */
    export let prefix: string = "";

    /**
     * Suffix text; after input field
    */
   export let suffix: string = "";

   /**
    * placeholder text
   */
  export let placeholder: string = "";

  /**
   * TODO: clearable labels, password types
  */

</script>

<div class="pluto pluto-{labelPosition}">
    {#if label}
        <label for={inputID}>{label}</label>
    {/if}
    <!--<input type={inputType}
        id={inputID}
    />-->
    <div class="form-group">
        {#if prefix}
            <span class="rounded-left">{prefix}</span>
            <input class="form-field rounded-right" type={inputType} id={inputID} placeholder={placeholder}>
        {:else if suffix}
            <input class="form-field rounded-left" type={inputType} id={inputID} placeholder={placeholder}>
            <span class="rounded-right">{suffix}</span>
        {:else}
            <input class="form-field form-field-none" type={inputType} id={inputID} placeholder={placeholder}>
        {/if}
    </div>
</div>


<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800;900;1000&display=swap');

:root {
  --input-color: rgb(49 46 129); /*#99A3BA;*/
  --input-border: rgb(67 56 202);
  --input-background: #fff;
  --input-placeholder: #99A3BA; /*;#CBD1DC*/
  --input-border-focus: rgb(49 46 129);
  --group-color: var(--input-color);
  --group-border: var(--input-border);
  --group-background: rgb(238 242 255);
  --group-color-focus: #fff;
  --group-border-focus: var(--input-border-focus);
  --group-background-focus: rgb(129 140 248);
}

.form-field {
  display: block;
  width: 100%;
  padding: 8px 16px;
  line-height: 25px;
  font-size: 14px;
  border-radius: 6px;
  -webkit-appearance: none;
  color: var(--input-color);
  border: 1px solid var(--input-border);
  background: var(--input-background);
  transition: border 0.3s ease;
}
.form-field::-moz-placeholder {
  color: var(--input-placeholder);
}
.form-field:-ms-input-placeholder {
  color: var(--input-placeholder);
}
.form-field::placeholder {
  color: var(--input-placeholder);
}
.form-field:focus {
  outline: none;
  border-color: var(--input-border-focus);
}

.form-group {
  position: relative;
  display: flex;
  width: 100%;
}
.form-group > span,
.form-group .form-field {
  white-space: nowrap;
  display: block;
}
.rounded-right {
    border-radius: 0 6px 6px 0;
}

.rounded-left {
    border-radius: 6px 0 0 6px;
}

.form-field-none {
    border-radius: 6px;
}

.form-group > span:not(:first-child),
.form-group .form-field:not(:first-child) {
  margin-left: -1px;
}
.form-group .form-field {
  position: relative;
  z-index: 1;
  flex: 1 1 auto;
  width: 1%;
  margin-top: 0;
  margin-bottom: 0;
}
.form-group > span {
  text-align: center;
  padding: 8px 12px;
  font-size: 14px;
  line-height: 25px;
  color: var(--group-color);
  background: var(--group-background);
  border: 1px solid var(--group-border);
  transition: background 0.3s ease, border 0.3s ease, color 0.3s ease;
}
.form-group:focus-within > span {
  color: var(--group-color-focus);
  background: var(--group-background-focus);
  border-color: var(--group-border-focus);
}


.pluto {
    font-family: 'Nunito', sans-serif;
    font-size: 1em;
    font-weight: normal;
    padding-top:8px;
}

.pluto-left { 
    display: flex; 
    flex-direction: row;
}

label { 
    display: flex; 
    align-self: center; 
    padding: 4px 8px 4px 0px;
}


</style>

