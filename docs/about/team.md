<script setup>

import { VPTeamMembers } from 'vitepress/theme';

const members = [
	{
		avatar: '/blog/avatar.png',
		name: '杨洪',
		title: '创建者',
		links: [
			{ icon: 'github', link: 'https://github.com/keyboarder-yang' }
		]
	}
]
</script>

# 欢迎加入
<VPTeamMembers size="small" :members="members" />