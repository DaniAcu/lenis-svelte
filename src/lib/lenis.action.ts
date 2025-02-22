
import Lenis from 'lenis';
import type { Action } from 'svelte/action';
import type { LenisConfig } from '$lib/config/config.js';
import LenisInstanceManager from '$lib/instance-manager/intance-manager.js'
import { derived, type Readable } from 'svelte/store';

interface WithInstanceGet {
    instance(id: string): Readable<Lenis>;
    root(): Readable<Lenis>;
}

export const lenis: Action<HTMLElement, LenisConfig | undefined> & WithInstanceGet= (el, config = {}) => {
    const id = config.id || 'root';
    const isGlobal = id === 'root'

    const lenis = new Lenis({
        ...config.options,
        ...(
            !isGlobal && {
                wrapper: el,
                content: el.firstChild as HTMLElement,
            }
        )
    });

    LenisInstanceManager.register(id, lenis)

    let rafId: number;

    const autoRaf = config.autoRaf || true;
    if (autoRaf) {
        const raf = (time: number) => {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf)
        }
        rafId = requestAnimationFrame(raf);
    }

    return {
        destroy () {
            if (!rafId) return;
            LenisInstanceManager.unregister(id);
            cancelAnimationFrame(rafId);
        }
    };
};

lenis.instance = (id: string) => {
    if (!id) throw new Error(`lenis.instance(<id>) should be called with a <id>. Your <id> is ${id}`)
    return derived(LenisInstanceManager.intances, instances => instances[id])
};
lenis.root = () => lenis.instance('root');
