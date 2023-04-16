<script lang="ts">
    /**
     * id for the input field and label
     */
    export let id: string = '';

    /**
     * value for the input field
     */
    export let value: string = '';

    /**
     * name for the radio group, should be the same as the other radio buttons in the same group
    */
    export let name: string;

</script>

<div class="pluto">
    <input type="radio" id={id} name={name} value={value}>
    <label for={id}><slot></slot></label><br>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800;900;1000&display=swap');

.pluto {
    display: flex;
    align-items: center;
    font-family: 'Nunito', sans-serif;
    font-size: 1em;
    font-weight: lighter;
}


input[type=radio] {
  position: absolute;
  opacity: 0;
}

input[type=radio] + label:before {
  content: "";
  background: #f4f4f4;
  border-radius: 100%;
  border: 1px solid #b4b4b4;
  display: inline-block;
  width: 1.4em;
  height: 1.4em;
  position: relative;
  top: -0.2em;
  margin-right: 1em;
  vertical-align: top;
  cursor: pointer;
  text-align: center;
  transition: all 250ms ease;
}
input[type=radio]:checked + label:before {
  background-color: #3197EE;
  box-shadow: inset 0 0 0 4px #f4f4f4;
}
input[type=radio]:focus + label:before {
  outline: none;
  border-color: #3197EE;
}
input[type=radio]:disabled + label:before {
  box-shadow: inset 0 0 0 4px #f4f4f4;
  border-color: #b4b4b4;
  background: #b4b4b4;
}

input[type=radio] + label:empty:before {
  margin-right: 0;
}

/*
input[type="radio"] {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
    font: inherit;
    color: rgb(67 56 202);
    width: 18px;
    height: 18px;
    border: 1px solid rgb(67 56 202);
    background-color: rgb(238 242 255);
    border-radius: 100%;
    transform: translateY(-1px);
    display: grid;
    place-content: center;
}

input[type="radio"]:checked {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 100%;
    transition: 120ms transform ease-in-out;
    box-shadow: inset 16px 16px rgb(67 56 202);
}

input[type="radio"]:checked::before {
    transform: scale(1);
}

input[type="checkbox"]:disabled {
    color: #959495;
    cursor: not-allowed;
}

label {
    margin-left: 5px;
}

*/

</style>