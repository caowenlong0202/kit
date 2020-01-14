<template>
	<div id="login">
		<div class="logo">
			<img src="../assets/tangerine.png"/>
		</div>
		<van-cell-group>
			<van-field v-model="username" required clearable label="用户名" placeholder="请输入用户名" />

			<van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required />
		</van-cell-group>
		<van-button type="primary" @click="login()" class="login">登录</van-button>
	</div>
</template>

<script>
	import { Toast } from 'vant';
	export default {
		name: 'login',
		data() {
			return {
				username:"",
				password:""
			}
		},
		methods: {
			login(){
				if(this.username == "" || this.password == ""){
					Toast({
					  	message: '用户名或密码错误',
					  	icon: 'clear'
					});
				}else if(this.username == "juban" || this.password == "20200202"){
					Toast({
					  	message: '登录成功',
					  	icon: 'checked'
					});
					setTimeout(() => {
						this.$router.push('./index')
					},3000)
				}
			}
		}
	}
</script>

<style scoped>
	#login{
		width: 88%;
		margin: auto;
	}
	.login{
		width: 100%;
		margin-top: 10px;
	}
	.logo{
		text-align: center;
	}
</style>