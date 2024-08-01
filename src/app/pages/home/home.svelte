<script lang="ts">
    import 'app/pages/home/home.css';
    import ScrollBox from 'app/pages/home/components/ScrollBox.svelte';

    import { onMount } from "svelte";
	import { lenis } from "$lib/index.js";

    const root = lenis.instance('root');

    onMount(() => {
        $root?.on('scroll', () => console.log(`[Lenis root] scrolling...`))
    });


</script>

<main class="main" use:lenis>
    <div>
        <ScrollBox />
        <ScrollBox />
        <ScrollBox />
        <ScrollBox />
        <ScrollBox />
    </div>
</main>
