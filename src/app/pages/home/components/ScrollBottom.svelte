<script lang="ts">
	import { lenis } from "$lib/index.js";

    export let id: string;

    const instance = lenis.instance(id);

    function toBottom() {
        $instance.scrollTo($instance.limit)
    }

</script>

<button on:click={toBottom}>
    To Bottom ↓
</button>

<style>
    button {
        padding: 1rem 2rem;
        border: 2px solid black;
        border-radius: 1rem;
        background-color: #f4abab;
        font-weight: bold;
    }
    button:hover, button:focus {
        background-color: lightcoral;
        cursor: pointer;
    }
</style>

