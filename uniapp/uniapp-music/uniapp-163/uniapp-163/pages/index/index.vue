<template>
	<view class="banner">
		<swiper class="swiper" :autoplay="true"
		:indicator-dots="true"
		indicator-active-color="#ff372b"
		:indicator-color="rgba(255,255,255,.5)"
		:duration="500"
		circular="true"
		>
			<swiper-item v-for="(item, index) in swiper" :key="index">
				<view class="item">
					<image src="item.imageUrl" class="img"></image>
					<view class="tag">{{item.typeTitle}}</view>
				</view>			
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swiper: []
			}
		},
		onLoad() {
			
		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
