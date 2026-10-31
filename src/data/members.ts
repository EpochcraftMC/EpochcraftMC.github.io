export interface Person {
  name: string;
  aliases?: string[];
  role: string;
  description: string;
  links?: { label: string; url: string }[];
  badge?: string;
}

export interface PeopleSection {
  title: string;
  description: string;
  members: Person[];
  variant: 'core' | 'retired';
}

export const people: PeopleSection[] = [
  {
    title: '方块纪元工作室',
    description: '方块纪元工作室（EpochCraft）的核心组织。工作室在中国版组件中心上架地图、皮肤、组件包、材质光影与联机大厅下。',
    variant: 'core',
    members: [
      {
        name: 'ALingqing',
        aliases: ['阿清'],
        role: '方块纪元工作室创始者 / 组件作者',
        description: '《我的世界》网易版组件作者。',
        links: [
          { label: 'GitHub', url: 'https://github.com/ALingqing' },
          { label: 'Modrinth', url: 'https://modrinth.com/user/ZeroQing_' },
        ],
      },
      {
        name: 'player233lol',
        role: '组件作者 / 随机空岛系列',
        description: '《随机空岛生存》等系列地图作者。',
      },
    ],
  },
];
