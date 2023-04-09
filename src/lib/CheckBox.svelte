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
     * set if the checkbox should be disabled
     */
    //export let disabled: boolean = false;

</script>

<div class="pluto">
    <input type="checkbox" id={id} name={id} value={value}>
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

input[type="checkbox"] {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
    font: inherit;
    color: rgb(67 56 202);
    width: 18px;
    height: 18px;
    border: 1px solid rgb(67 56 202);
    background-color: rgb(238 242 255);
    border-radius: 2px;
    transform: translateY(-1px);
    display: grid;
    place-content: center;
}

input[type="checkbox"]::before {
    content: "";
    width: 10px;
    height: 10px;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    transform: scale(0);
    transform-origin: bottom left;
    transition: 120ms transform ease-in-out;
    box-shadow: inset 16px 16px rgb(67 56 202);
}

input[type="checkbox"]:checked::before {
    transform: scale(1);
}

input[type="checkbox"]:disabled {
    color: #959495;
    cursor: not-allowed;
}

label {
    margin-left: 5px;
}



</style>