const icons = {
	esab__plus: (
		<svg version="1.2" viewBox="0 0 24 24" width="24" height="24">
			<path d="m11.3 3.6h1.4q0.2 0 0.2 0.1v16.6q0 0.1-0.2 0.1h-1.4q-0.2 0-0.2-0.2v-16.5q0-0.1 0.2-0.1z" />
			<path d="m4.1 11.1h15.8q0.2 0 0.2 0.2v1.4q0 0.2-0.2 0.2h-15.8q-0.2 0-0.2-0.2v-1.4q0-0.2 0.2-0.2z" />
		</svg>
	),
	esab__minus: (
		<svg version="1.2" viewBox="0 0 24 24" width="24" height="24">
			<path d="m3.4 11.1h17.2v1.8h-17.2z" />
		</svg>
	),
	esab__circle_plus: (
		<svg version="1.2" viewBox="0 0 24 24" width="24" height="24">
			<path
				fillRule="evenodd"
				d="m3.5 20.5c-4.7-4.7-4.7-12.3 0-17 4.7-4.7 12.3-4.7 17 0 4.6 4.7 4.6 12.3 0 17-4.7 4.6-12.3 4.6-17 0zm0.9-0.9c4.2 4.2 11 4.2 15.2 0 4.2-4.2 4.2-11 0-15.2-4.2-4.3-11-4.3-15.2 0-4.3 4.2-4.3 11 0 15.2z"
			/>
			<path d="m11.4 15.9v-3.3h-3.3c-0.3 0-0.6-0.3-0.6-0.6 0-0.4 0.3-0.6 0.6-0.6h3.3v-3.3c0-0.3 0.3-0.6 0.6-0.6 0.3 0 0.6 0.3 0.6 0.6v3.3h3.3c0.3 0 0.6 0.2 0.6 0.6q0 0.2-0.2 0.4-0.2 0.2-0.4 0.2h-3.3v3.3q0 0.2-0.2 0.4-0.2 0.2-0.4 0.2c-0.4 0-0.6-0.3-0.6-0.6z" />
		</svg>
	),
	esab__circle_minus: (
		<svg version="1.2" viewBox="0 0 24 24" width="24" height="24">
			<path
				fillRule="evenodd"
				d="m12 24c-6.6 0-12-5.4-12-12 0-6.6 5.4-12 12-12 6.6 0 12 5.4 12 12 0 6.6-5.4 12-12 12zm10.6-12c0-5.9-4.7-10.6-10.6-10.6-5.9 0-10.6 4.7-10.6 10.6 0 5.9 4.7 10.6 10.6 10.6 5.9 0 10.6-4.7 10.6-10.6z"
			/>
			<path d="m5.6 11.3h12.8v1.4h-12.8z" />
		</svg>
	),
	esab__filled_circle_plus: (
		<svg version="1.2" viewBox="0 0 24 24" width="24" height="24">
			<path
				fillRule="evenodd"
				d="m12 24c-6.6 0-12-5.4-12-12 0-6.6 5.4-12 12-12 6.6 0 12 5.4 12 12 0 6.6-5.4 12-12 12zm6.7-12c0-0.5-0.4-0.9-0.9-0.9h-4.9v-4.6c0-0.5-0.4-1-0.9-1-0.5 0-0.9 0.5-0.9 1v4.6h-4.9c-0.5 0-0.9 0.4-0.9 0.9 0 0.5 0.4 0.9 0.9 0.9h4.9v5.1c0 0.5 0.4 0.9 0.9 0.9 0.5 0 0.9-0.4 0.9-0.9v-5.1h4.9c0.5 0 0.9-0.4 0.9-0.9z"
			/>
		</svg>
	),
	esab__filled_circle_minus: (
		<svg version="1.2" viewBox="0 0 24 24" width="24" height="24">
			<path
				fillRule="evenodd"
				d="m12 24c-6.6 0-12-5.4-12-12 0-6.6 5.4-12 12-12 6.6 0 12 5.4 12 12 0 6.6-5.4 12-12 12zm6.7-12c0-0.5-0.4-0.9-0.9-0.9h-11.6c-0.5 0-0.9 0.4-0.9 0.9 0 0.5 0.4 0.9 0.9 0.9h11.6c0.5 0 0.9-0.4 0.9-0.9z"
			/>
		</svg>
	),
	esab__times: (
		<svg width="24px" height="24px" viewBox="0 0 24 24">
			<path d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z" />
		</svg>
	),
	esab__circle_times: (
		<svg version="1.2" viewBox="0 0 24 24" width="24" height="24">
			<path
				fillRule="evenodd"
				d="m12 24c-6.6 0-12-5.4-12-12 0-6.6 5.4-12 12-12 6.6 0 12 5.4 12 12 0 6.6-5.4 12-12 12zm10.2-12c0-5.6-4.6-10.2-10.2-10.2-5.6 0-10.2 4.6-10.2 10.2 0 5.6 4.6 10.2 10.2 10.2 5.6 0 10.2-4.6 10.2-10.2zm-10.2-1.3l3.5-3.5 1.3 1.3-3.5 3.5 3.5 3.5-1.3 1.3-3.5-3.5-3.5 3.5-1.3-1.3 3.5-3.5-3.5-3.5 1.3-1.3z"
			/>
		</svg>
	),
	esab__arrow_up: (
		<svg
			version="1.1"
			id="Capa_1"
			x="0px"
			y="0px"
			viewBox="0 0 47.255 47.255"
		>
			<path
				d="M46.255,35.941c-0.256,0-0.512-0.098-0.707-0.293l-21.921-21.92l-21.92,21.92c-0.391,0.391-1.023,0.391-1.414,0
		c-0.391-0.391-0.391-1.023,0-1.414L22.92,11.607c0.391-0.391,1.023-0.391,1.414,0l22.627,22.627c0.391,0.391,0.391,1.023,0,1.414
		C46.767,35.844,46.511,35.941,46.255,35.941z"
			/>
		</svg>
	),
	esab__arrow_down: (
		<svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512">
			<path
				d="M505.752,123.582c-8.331-8.331-21.839-8.331-30.17,0L256,343.163L36.418,123.582c-8.331-8.331-21.839-8.331-30.17,0
			s-8.331,21.839,0,30.17l234.667,234.667c8.331,8.331,21.839,8.331,30.17,0l234.667-234.667
			C514.083,145.42,514.083,131.913,505.752,123.582z"
			/>
		</svg>
	),
};

export default icons;
