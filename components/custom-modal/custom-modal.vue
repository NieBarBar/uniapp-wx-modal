<template>
	<view class="modal" :style="{'visibility':visible ? 'visible':'hidden'}">
		<view class="modal-content">
			<view class="modal-content-top">
				自定义
			</view>
			<view class="modal-content-bottom">
				<button size="mini" @click="handleClick('cancel')">取消</button>
				<button type="primary" size="mini" @click="handleClick('confirm')">确定</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "custom-modal",
		data() {
			return {};
		},
		computed: {
			visible() {
				return this.$store.getters.visible
			}
		},
		methods: {
			handleClick(type) {
				if (type === 'confirm') {
					this.$store.dispatch('HideModal')
					this.$store.dispatch('Success', type)
				} else {
					this.$store.dispatch('HideModal')
					this.$store.dispatch('Success', type)
				}
			}
		},
		beforeDestroy() {
			this.$store.dispatch('HideModal')
		}
	}
</script>

<style lang="less" scoped>
	.modal {
		background-color: rgba(0, 0, 0, 0.6);
		position: fixed;
		top: -20%;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1001;

		.modal-content {
			z-index: 1000;
			width: 50%;
			height: 200px;
			background-color: #fff;
			border-radius: 7px;

			.modal-content-top {
				height: 70%;
				text-align: center;
			}

			.modal-content-bottom {
				display: flex;
				justify-content: space-around;
			}
		}
	}
</style>