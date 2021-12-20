<script>
import imageElement from "./imageElement.svelte";
let ImageElement = imageElement;
export let pixel = [];
export let RebelT6 = [];
export let NA = [];
</script>

<main>
    <div id="Index">	
		<details open>
			<summary>
				<h2 class="text-xl text-white text-center">
					Pixel 6 Pictures
				</h2>
			</summary>

			<div class="flex flex-auto flex-wrap justify-center">
					{#each pixel as image}
						<ImageElement src="Pixel/{image}" style="width:20%; padding: 2px;" />
					{/each}
			</div>
		</details>

			
		<br>
		<details open>
			<summary>
				<h2 class="text-xl text-white text-center ">
					Canon Rebel T6 pictures
				</h2>
			</summary>
			<div class="flex flex-auto flex-wrap justify-center">

				{#each RebelT6 as image}
					<ImageElement src="Canon/{image}" style="width:20%; padding: 2px;" />
				{/each}
			</div>
		</details>
		<br>
		<details open>
			<summary>
				<h2 class="text-xl text-white text-center">
					Other Camera Pictures
				</h2>
			</summary>
			<div class="flex flex-auto flex-wrap justify-center">

				{#each NA as image}
					<ImageElement src="Other/{image}" style="width:20%; padding: 2px;" />
				{/each}
			</div>
		</details>
	</div>
</main>