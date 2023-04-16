<script lang="ts">
    /**
     * Summary shown at the top
     */
    export let summary: string;
</script>

<div>
    <details>
        <summary>{summary}</summary>
        <div class="content">
            <slot></slot>
        </div>
    </details>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800;900;1000&display=swap');

    * {
        font-family: 'Nunito', sans-serif;
        font-weight: lighter;
    }

    details {
        border: 1px solid rgb(165 180 252);
        border-radius: 0.25rem;
        padding: 1em;
    }

    summary {
        font-size: 1em;
        font-weight: bold;
        color: rgb(49 46 129);
        cursor: pointer;
    }

    details[open] .content {
    -webkit-animation: animateDown 0.2s linear forwards;
            animation: animateDown 0.2s linear forwards;
    }

    details:not([open]) .content {
    -webkit-animation: animateUp 0.2s linear forwards;
            animation: animateUp 0.2s linear forwards;
    }

    @-webkit-keyframes animateDown {
    0% {
        opacity: 0;
        transform: translatey(-15px);
    }
    100% {
        opacity: 1;
        transform: translatey(0);
    }
    }

    @keyframes animateDown {
    0% {
        opacity: 0;
        transform: translatey(-15px);
    }
    100% {
        opacity: 1;
        transform: translatey(0);
    }
    }

    @-webkit-keyframes animateUp {
        0% {
            opacity: 1;
            transform: translatey(0);
        }
        100% {
            opacity: 0;
            transform: translatey(-15px);
        }
    }

    @keyframes animateUp {
        0% {
            opacity: 1;
            transform: translatey(0);
        }
        100% {
            opacity: 0;
            transform: translatey(-15px);
        }
    }


</style>