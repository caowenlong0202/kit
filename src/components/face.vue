<template>
	<div class="index">
		<van-nav-bar title="人脸检测" left-text="返回" @click-left="onClickLeft" />
		<div class="main">
			<van-uploader v-model="fileList" multiple :max-count="1" />
			<van-button type="primary" class="updata" @click="detection()">开始检测</van-button>
			<van-action-sheet v-model="show" title="检测结果">
			  	<van-cell title="年龄" :value="this.result.age" size="large" />
			  	<van-cell title="性别" :value="this.genders" size="large" />
			  	<van-cell title="脸型" :value="this.shape" size="large" />
			  	<van-cell title="情绪" :value="this.emotion" size="large" />
			  	<van-cell title="人种" :value="this.race" size="large" />
			  	<van-cell title="颜值得分" :value="this.beauty" size="large" />
			  	<van-cell title="有无佩戴眼镜" :value="this.glasses" size="large" />
			</van-action-sheet>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	import { Toast } from 'vant';
	import { Uploader } from 'vant';

	export default {
		name: 'face',
		data() {
			return {
				fileList: [],
				apiurl: "https://aip.baidubce.com/",
				access_token: "",
				show:false,
				result:[],
				genders:"",
				shape:"",
				emotion:"",
				beauty:"",
				glasses:"",
				race:"",
			}
		},
		created() {
			this.getAccessToken()
		},
		methods: {
			onClickLeft() {
			    this.$router.go(-1)
			},
			//获取AccessToken
			getAccessToken() {
				axios.post(this.apiurl + 'oauth/2.0/token?grant_type=client_credentials&client_id=yGKFR6TCSlx2xFLnkTyA85ou&client_secret=LTxNvR605S0kgMrcX4mw28qoLTFhG5D3')
					.then((res) => {
						this.access_token = res.data.access_token
					})
					.catch((error) => {
						console.log(error);
					});
			},
			detection() {

				if(this.fileList == "") {
					Toast({
						message: '请上传图片',
						icon: 'photo-o'
					});
				} else {
					let params = {
						image: this.fileList[0].content.substr(this.fileList[0].content.indexOf(',') + 1),
						image_type: "BASE64",
						face_field: "age,beauty,expression,face_shape,gender,glasses,landmark,landmark150,race,quality,eye_status,emotion,face_type"
					}
					axios.post(this.apiurl + 'rest/2.0/face/v3/detect?access_token=' + this.access_token, params, {
							headers: {
								'Content-Type': 'application/json'
							},
						})
						.then((res) => {
							if(res.data.error_code == 0){
								this.show = true
								this.result = res.data.result.face_list[0]
								this.genders = this.result.gender.type
								this.shape = this.result.face_shape.type
								this.emotion = this.result.emotion.type
								this.glasses = this.result.glasses.type
								this.beauty = this.result.beauty
								this.race = this.result.race.type
								
								//性别
								if(this.genders == "female"){
									this.genders = "女"
								}else if(this.genders == "male"){
									this.genders = "男"
								}
								//脸型
								if(this.shape == "square"){
									this.shape = "正方形"
								}else if(this.shape == "triangle"){
									this.shape = "三角形"
								}else if(this.shape == "oval"){
									this.shape = "椭圆"
								}else if(this.shape == "heart"){
									this.shape = "心形"
								}else if(this.shape == "round"){
									this.shape = "圆形"
								}
								//情绪
								if(this.emotion == "angry"){
									this.emotion = "愤怒"
								}else if(this.emotion == "disgust"){
									this.emotion = "厌恶"
								}else if(this.emotion == "fear"){
									this.emotion = "恐惧 "
								}else if(this.emotion == "happy"){
									this.emotion = "高兴"
								}else if(this.emotion == "sad"){
									this.emotion = "伤心 "
								}else if(this.emotion == "surprise"){
									this.emotion = "惊讶"
								}else if(this.emotion == "neutral"){
									this.emotion = "无表情 "
								}else if(this.emotion == "pouty"){
									this.emotion = "撅嘴"
								}else if(this.emotion == "grimace"){
									this.emotion = "鬼脸"
								}
								//有无佩戴眼镜
								if(this.glasses == "none"){
									this.glasses = "无眼镜"
								}else if(this.glasses == "common"){
									this.glasses = "普通眼镜"
								}else if(this.glasses == "sun"){
									this.glasses = "墨镜 "
								}
								//人种
								if(this.race == "yellow"){
									this.race = "黄种人"
								}else if(this.race == "white"){
									this.race = "白种人"
								}else if(this.race == "black"){
									this.race = "黑种人"
								}else if(this.race == "arabs"){
									this.race = "阿拉伯人"
								}
							}
							if(res.data.error_code == 222202){
								Toast({
									message: 'pic not has face',
									icon: 'smile-o'
								});
							}
						})
						.catch((error) => {
							console.log(error);
						})
				}
			},

		}
	}
</script>

<style scoped>
	.main {
		width: 88%;
		margin: 10px auto 0;
	}
	
	.updata {
		width: 100%;
		display: block;
	}
</style>