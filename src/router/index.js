import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import index from '@/components/index'
import face from '@/components/face'
import music from '@/components/music'
import songplay from '@/components/songplay'
import map from '@/components/map'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'login',
			component: login
		},
		{
			path: '/index',
			name: 'index',
			component: index
		},
		{
			path: '/face',
			name: 'face',
			component: face
		},
		{
			path: '/music',
			name: 'music',
			component: music
		},
		{
			path: '/songplay',
			name: 'songplay',
			component: songplay
		},{
			path: '/map',
			name: 'map',
			component: map
		},

	]
})