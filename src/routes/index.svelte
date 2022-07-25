<script lang="ts">
	import { validateOrReject } from 'class-validator';
	import { onMount } from 'svelte';

	import { TestModel } from './models/test.model';

	let test = false;

	const r = new TestModel();

	onMount(async () => {
		try {
			await validateOrReject(r);
			test = true;
		} catch (e) {
			test = false;
		}
	});
</script>

<article>
	<section class="p-9 text-center">THIS IS SPARTA!!!</section>
	<section>{test}</section>
</article>
