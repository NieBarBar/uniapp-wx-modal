<template>
	<view class="content">
		<custom-modal></custom-modal>
		<button type="primary" size="mini" @click="showModal">showModal</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods: {
			showModal() {
				this.$showModal({
					success: res => {
						if (res.confirm) {
							uni.showToast({
								title: '用户点击了确定',
								icon: 'none'
							})
						} else if (res.cancel) {
							uni.showToast({
								title: '用户点击了取消',
								icon: 'none'
							})
						}
					}
				})
			}
		}
	}
</script>

<style lang="less">
	.content {
		text-align: center;
	}
</style>