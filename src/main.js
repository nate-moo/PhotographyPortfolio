import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		pixel: ['PXL_20211204_181259123.jpg', 'PXL_20211215_121036709.jpg', 'PXL_20211217_034742701.jpg', 'PXL_20211217_120646650.jpg'],
		RebelT6: ['20210202201426_IMG_0018.JPG', '20211125172804_IMG_0065.JPG', 'IMG_0033_2.jpg', 'IMG_0200.JPG'],
		NA: [],
	}
});

export default app;