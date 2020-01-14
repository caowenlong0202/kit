<template>
	<div class="music">
		<van-nav-bar title="音乐" left-text="返回" @click-left="onClickLeft" />
		<van-search v-model="search" placeholder="请输入歌手或歌名" show-action shape="round" @search="onSearch">
			<div slot="action" @click="onSearch">搜索</div>
		</van-search>
		<van-cell-group>
			<van-cell v-for="(song,index) in songlist" :key="index" :title="song.albumname" :value="song.singer[0].name" @click="songplay($event)" :id="song.songmid"/>
		</van-cell-group>
		<div class="nodata" v-if="nodata">
			<van-icon name="description" />
			<p>暂无数据</p>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	import { Cell, CellGroup } from 'vant';
	export default {
		name: 'music',
		data() {
			return {
				search:"",
				apiurl:"https://c.y.qq.com/",
				songlist:[],
				nodata:true
			}
		},
		methods: {
			onClickLeft() {
				this.$router.go(-1)
			},
			onSearch(){
				axios.get(this.apiurl + 'soso/fcgi-bin/client_search_cp?p=1&n=10&w=' + this.search + '&format=json')
				.then((res)=>{
					console.log(res)
					this.songlist = res.data.data.song.list
					if(res.status == 200){
						this.nodata = false
					}
				})
			},
			songplay(e){
				this.songmid = e.currentTarget.id
				sessionStorage.setItem("songmid",this.songmid)
				this.$router.push("./songplay")
			}
		}
	}
</script>

<style>
	.nodata{
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
	}
	.van-icon-description{
		font-size: 64px !important;
		color: #898989;
	}
</style>