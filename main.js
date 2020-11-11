/*<div id="app">
	<nav>
		<transition name='fade' mode='out-in'>
			<i class="material-icons menu" v-if='!show' @click='show = !show' key='menu'>menu</i>
			<i class="material-icons clear" v-else @click='show = !show' key='clear'>clear</i>
		</transition>
		<transition name='fade'>
			<ul v-if='show'>
				<li v-for='item in items'>{{item}}</li>
			</ul>
		</transition>
	</nav>
</div>*/

/*new Vue({
	el: '#app',
	data:{
		items: [
			'Home',
			'About'
		],
		show: false,
	},
});*/

new Vue({
	el: '#app',
	data: {
		show: true
	}
})