<template>
<div>
    <header>
        <div class="all_wrap">
            <div class="logo_wrap">
                <img src="../assets/logo_main.png">
            </div>
            <div class="menu_wrap">
                <img src="../assets/menu.png">
            </div>
        </div>	
    </header>
    <section class="disks_wrap">
        <ul>
            <p class="disks_title">Choose destination device</p>
            <li v-for="(device, index) in devices" :key="index">
				<a @click="$router.push('Files')">
					{{ device.name }}
					<img :src="device.image">
				</a>
			</li>
        </ul>
    </section>
    <footer>
        <div class="refreshing_all_wrap">
            <div class="refreshing_text_wrap">
                <p>Refreshing</p>
            </div>
            <div class="gif_icon_wrap">
                <div class="gif_wrap"></div>
            </div>
        </div>
    </footer>
</div>
</template>

<script>
import LanDiskImage from '../assets/lan_disk.png'
import ExternalDiskImage from '../assets/ext_disk.png'

export default {
	data () {
		return {
			devices: [
				{ name: 'Home disk', image: LanDiskImage },
				{ name: 'My USB key', image: ExternalDiskImage }
			]
		}
	},
	created () {
		this.names = ['David', 'Jaka', 'Janez', 'Damjan', 'Mojca', 'Miha', 'Jure', 'Borut', 'Anja']
		this.deviceTypes = [
			{ name: 'USB key', image: ExternalDiskImage },
			{ name: 'SD card', image: ExternalDiskImage },
			{ name: 'network disk', image: LanDiskImage },
			{ name: 'external disk', image: ExternalDiskImage }
		]
	},
	mounted () {
		this.intervalId = setInterval(() => {
			let random = Math.random()
			if (random < 0.3) {
				let name = this.names[Math.floor(Math.random() * this.names.length)]
				let type = this.deviceTypes[Math.floor(Math.random() * this.deviceTypes.length)]

				this.devices.push({
					name: `${name}'s ${type.name}`,
					image: type.image
				})
			} else if (random < 0.6) {
				if (this.devices.length > 0) {
					this.devices.splice(Math.floor(Math.random() * this.devices.length), 1)
				}
			}
		}, 1000)
	},
	beforeDestroy () {
		if (this.intervalId) {
			clearInterval(this.intervalId)
		}
	}
}
</script>

<style scoped>
* {
	margin: 0;
	padding: 0;
}

html, body {
	height: 100%;
	font-family: sans-serif;
}

header {
	height: 50px;
	border-bottom: 1px solid rgba(0,0,0,0.5);
	background: linear-gradient(rgba(0,0,0,0.01), rgba(0,0,0,0.2));
	box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
}

/*Start of header*/

.all_wrap {
	display: table;
	width: 100%;
	height: 100%;
}

.logo_wrap, .menu_wrap {
	display: table-cell;
	vertical-align: middle;
}

.logo_wrap {
	padding-left: 15px;
}

.menu_wrap {
	padding-right: 15px;
}

.menu_wrap img {
	display: block;
	float: right;
	height: 4%;
}

.logo_wrap img {
	display: block;
}

/*Start of list of destination devices*/

.disks_wrap {
	padding: 20px;
	opacity: 0.75;
}

.disks_wrap ul {
	list-style: none;
}

.disks_wrap ul li {
	margin-bottom: 10px;
}

.disks_wrap img {
	margin-left: 10px;
}

.disks_title {
	font-size: 14pt;
	margin-bottom: 12px;
}

/*Start of refreshing icon*/

.refreshing_all_wrap {
	opacity: 0.75;
	padding: 20px;
}

.gif_wrap {
	height: 20px;
	width: 20px;
	background-size: 200%;
	background-repeat: no-repeat;
	background-position: center center;
	background-image: url(../assets/loading.gif);
}

.refreshing_text_wrap, .gif_icon_wrap {
	vertical-align: middle;
	display: inline-block;
}

footer {
	position: absolute;
	bottom: 0;
	right: 0;
}

a {
	cursor: pointer;
}
</style>