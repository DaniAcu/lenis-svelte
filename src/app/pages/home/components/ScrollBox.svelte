<script lang="ts">
	import { onMount } from "svelte";
    import { getId } from 'app/utils/utils.js'
	import { lenis } from "$lib/index.js";

    const id = getId();
    const instance = lenis.instance(id);

    onMount(() => {
        $instance?.on('scroll', () => console.log(`[Lenis #${id}] scrolling...`))
    });

</script>

<div class="main" use:lenis={{ id }}>
    <div class="container">
        <h1 class="title">Svelte Lenis</h1>
        <p>Scroll here...</p>
    </div>
</div>

<style>
    .title {
        margin: 0;
        padding: 1rem 0;
    }

    .main {
        --viewport: 30vh;
        margin: 1rem;
        padding: 1rem;
        border: 1px solid black;
        background-color: pink;
        overflow: auto;
        height: 30vh;
    }

    .container {
        margin: .5rem;
        padding: .5rem;
        background-color: palevioletred;
        height: calc(2 * var(--viewport));
    }
</style>

