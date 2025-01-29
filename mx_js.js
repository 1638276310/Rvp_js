export class example extends plugin {
	constructor() {
		super({
			name: '小姐姐视频',
			dsc: '发送随机小姐姐视频',
			event: 'message',
			priority: 5000,
			rule: [{
					reg: '^#随机视频1$',
					fnc: 'video1'
				},
				{
					reg: '^#随机视频2$',
					fnc: 'video2'
				},
				{
					reg: '^#随机视频3$',
					fnc: 'video3'
				},
				{
					reg: '^#随机视频4$',
					fnc: 'video4'
				},
				{
					reg: '^#随机视频5$',
					fnc: 'video5'
				},
				{
					reg: '^#清凉图1$',
					fnc: 'QL1'
				},
				{
					reg: '^#清凉图2$',
					fnc: 'QL2'
				},
				{
					reg: '^#清凉图3$',
					fnc: 'QL3'
				},
				{
					reg: '^#清凉图4$',
					fnc: 'QL4'
				},
				{
					reg: '^#清凉图5$',
					fnc: 'QL5'
				},
				{
					reg: '^#清凉图6$',
					fnc: 'QL6'
				},
				{
					reg: '^#清凉图7$',
					fnc: 'QL7'
				},
				{
					reg: '^#领绿钻$',
					fnc: 'green'
				}
			]
		})
	}


	async QL1(e) {
		try {
			await e.reply(segment.image('https://api.r10086.com/樱道随机图片api接口.php?图片系列=少女写真1'));
			return true;
		} catch (error) {
			e.reply("错误");
			return true;
		}

	}

	async QL2(e) {
		try {
			await e.reply(segment.image('http://api.yujn.cn/api/r18.php'));
			return true;
		} catch (error) {
			e.reply("错误");
			return true;
		}

	}
	
	async QL3(e) {
		try {
			await e.reply(segment.image('https://imgapi.cn/cos.php'));
			return true;
		} catch (error) {
			e.reply("错误");
			return true;
		}
	}
	
	async QL4(e) {
		try {
			await e.reply(segment.image('https://api.r10086.com/樱道随机图片api接口.php?图片系列=萝莉'));
			return true;
		} catch (error) {
			e.reply("错误");
			return true;
		}
	}
	
	async QL5(e) {
		try {
			await e.reply(segment.image('https://api.yujn.cn/api/gzl_ACG.php?type=image&form=pc'));
			return true;
		} catch (error) {
			e.reply("错误");
			return true;
		}
	}
	
	async QL6(e) {
		try {
			await e.reply(segment.image('http://api.yujn.cn/api/yht.php'));
			return true;
		} catch (error) {
			e.reply("错误");
			return true;
		}
	}
	
	async QL7(e) {
		try {
			await e.reply(segment.image('http://api.yujn.cn/api/sese.php'));
			return true;
		} catch (error) {
			e.reply("错误");
			return true;
		}
	}
	
	async green(e) {
		try {
			await e.reply(segment.image('https://www.x6g.com/uploads/allimg/240812/1723427720811070.png'));
			return true;
		} catch (error) {
			e.reply("错误");
			return true;
		}
	}
	async video1(e) {
		try {
			await e.reply(segment.video('http://api.yujn.cn/api/zzxjj.php'));
			return true;
		} catch (error) {
			e.reply("错误");
			return true;
		}
	}

	async video2(e) {
		try {
			await e.reply(segment.video('http://api.yujn.cn/api/xjj.php'));
			return true;
		} catch (error) {
			e.reply("错误");
			return true;
		}
	}
}
