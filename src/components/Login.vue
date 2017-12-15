<template>
<div class="all-wrap">
    <div class="login-wrap">
        <img src="../assets/logo_login.png"><br>
        <input type="text" v-model="username" placeholder="username" @keyup.enter="submit"><br>
        <input type="password" v-model="password" placeholder="password" @keyup.enter="submit"><br>

		<p class="error">{{ error }}</p>
    </div>
</div>
</template>

<script>
export default {
	data () {
		return {
			username: '',
			password: '',
			error: ''
		}
	},
	methods: {
		submit () {
			if (this.username.length === 0) {
				this.error = 'Username is empty'
			} else if (this.password.length === 0) {
				this.error = 'Password is empty'
			} else {
				this.$router.push('Connect')
			}
		}
	}
}
</script>

<style scoped>
.all-wrap {
    height: 100%;
	text-align: center;
	display: table;
	position: absolute;
	height: 100%;
	width: 100%;
}

.login-wrap {
	display: table-cell;
	vertical-align: middle;
}

.login-wrap input {
	margin-top: 20px;
	border: 0;
	border-bottom: 1px solid rgba(0,0,0,0.25);
	text-align: center;
	font-family: sans-serif;
	
}

.login-wrap input:focus {
	outline: none;
	border-bottom: 1px solid rgba(0,0,0,0.75);
}

.error {
	color: red;
	margin-top: 20px;
}
</style>