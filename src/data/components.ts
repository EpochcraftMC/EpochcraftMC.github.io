/** 组件形态：网易版组件中心的各条产品线。 */
export type ComponentKind = 'map' | 'skin' | 'addon' | 'resource' | 'lobby';

/**
 * 上架状态。
 * `listed` — 已上架
 * `listed-dual` — 已上架，手机端与电脑端同步
 * `reviewing` — 提交后仍在审核中
 */
export type ComponentStatus = 'listed' | 'listed-dual' | 'reviewing';

export interface Component {
  /** 组件名 */
  name: string;
  /** 网易版组件 ID */
  id: string;
  /** 封面图，可选 */
  cover?: string;
  /** 作者，可选 */
  author?: string;
  kind: ComponentKind;
  /** 提交审核时间 */
  submittedAt: string;
  /** 最近一次上架 / 更新时间 */
  updatedAt: string;
  status: ComponentStatus;
}

export interface ComponentKindMeta {
  id: ComponentKind;
  title: string;
  kicker: string;
  description: string;
}

export const componentKinds: ComponentKindMeta[] = [
  {
    id: 'map',
    title: '地图',
    kicker: 'Maps',
    description: '玩法地图与建筑地图：随机空岛生存系列、红石机械与校园建筑复原。',
  },
  {
    id: 'skin',
    title: '皮肤',
    kicker: 'Skins',
    description: '原创角色皮肤。以中式意象与星夜主题为主。',
  },
  {
    id: 'addon',
    title: '组件包',
    kicker: 'Add-ons',
    description: '在原版玩法之上加装新机制的组件包，分完整版与体验版发行。',
  },
  {
    id: 'resource',
    title: '材质光影',
    kicker: 'Resource Packs',
    description: '材质与光影包，改变世界的外观与光照表现。',
  },
  {
    id: 'lobby',
    title: '联机大厅',
    kicker: 'Lobby',
    description: '联机大厅玩法，把一套小游戏收进同一个入口。',
  },
];

export const statusLabels: Record<ComponentStatus, string> = {
  listed: '已上架',
  'listed-dual': '已上架（双端同步）',
  reviewing: '审核中',
};

/** 状态点配色：双端同步用品牌橙，审核中用进行中的蓝。 */
export const statusTone: Record<ComponentStatus, string> = {
  listed: 'is-live',
  'listed-dual': 'is-mark',
  reviewing: 'is-dev',
};

/** 按提交时间倒序，最新在前。 */
export const components: Component[] = [
  {
    name: 'The Sift · 筛域',
    id: '4691419385701692467',
    kind: 'addon',
    submittedAt: '2026-10-25 20:14:25',
    updatedAt: '2026-10-26 06:30:03',
    status: 'reviewing',
  },
  {
    name: '[方块纪元] 更好的NPC - 完整版',
    id: '4690160274322172949',
    kind: 'addon',
    submittedAt: '2026-08-29 22:01:02',
    updatedAt: '2026-08-30 11:50:07',
    status: 'listed',
  },
  {
    name: '[方块纪元] 更好的NPC - 体验版',
    id: '4690159379140060986',
    kind: 'addon',
    submittedAt: '2026-08-29 21:02:45',
    updatedAt: '2026-08-29 21:07:54',
    status: 'listed',
  },
  {
    name: 'title修正',
    id: '4687409426721624592',
    kind: 'resource',
    submittedAt: '2026-04-27 13:09:23',
    updatedAt: '2026-04-29 19:18:18',
    status: 'listed',
  },
  {
    name: '[方块纪元]幸运之柱 - 联机版',
    id: '4687019047438504284',
    kind: 'lobby',
    submittedAt: '2026-04-09 21:34:04',
    updatedAt: '2026-05-24 17:00:00',
    status: 'listed',
  },
  {
    name: '[抽象]豆包的天空',
    id: '4686797067435874713',
    kind: 'resource',
    submittedAt: '2026-03-30 20:42:15',
    updatedAt: '2026-03-30 22:30:45',
    status: 'listed',
  },
  {
    name: '红石神经网络',
    id: '4681394715812087053',
    kind: 'map',
    submittedAt: '2025-07-29 14:46:39',
    updatedAt: '2025-09-07 12:00:56',
    status: 'listed',
  },
  {
    name: '棱·黄风',
    id: '4678721026236070306',
    kind: 'skin',
    submittedAt: '2025-03-30 17:38:19',
    updatedAt: '2025-07-10 12:46:12',
    status: 'listed-dual',
  },
  {
    name: '港•蔓蔓青萝',
    id: '4678676709129206372',
    cover: '/imgs/cover-qingluo.png',
    kind: 'skin',
    submittedAt: '2025-03-28 17:33:05',
    updatedAt: '2025-03-28 17:33:09',
    status: 'listed',
  },
  {
    name: '9选1·随机空岛生存',
    id: '4678540210249825146',
    cover: '/imgs/cover-9in1.jpg',
    author: 'player233lol',
    kind: 'map',
    submittedAt: '2025-03-22 13:26:26',
    updatedAt: '2025-09-09 20:19:46',
    status: 'listed',
  },
  {
    name: '梦·雨巷深深',
    id: '4678523544926179644',
    kind: 'skin',
    submittedAt: '2025-03-21 19:21:27',
    updatedAt: '2025-07-16 08:54:14',
    status: 'listed',
  },
  {
    name: '梵·星夜漫游',
    id: '4678522627298421965',
    kind: 'skin',
    submittedAt: '2025-03-21 18:21:43',
    updatedAt: '2025-10-10 19:34:44',
    status: 'listed',
  },
  {
    name: '阿荣旗亚东中学·世纪穹顶',
    id: '4678386210993622336',
    kind: 'map',
    submittedAt: '2025-03-15 14:20:27',
    updatedAt: '2025-03-15 14:29:23',
    status: 'listed',
  },
  {
    name: '[方块纪元]随机空岛生存-周年庆',
    id: '4678254432006189754',
    cover: '/imgs/cover-random-island.jpg',
    author: 'player233lol',
    kind: 'map',
    submittedAt: '2025-03-09 15:21:05',
    updatedAt: '2026-06-14 22:29:40',
    status: 'listed-dual',
  },
  {
    name: '空·黎夕旧梦',
    id: '4677702116558524812',
    kind: 'skin',
    submittedAt: '2025-02-12 16:03:03',
    updatedAt: '2025-03-21 19:27:03',
    status: 'listed',
  },
];

/** 汇总口径，供组件页与首页共用。 */
export const componentCounts = {
  total: components.length,
  /** 已上架含双端同步，不含审核中 */
  listed: components.filter((item) => item.status !== 'reviewing').length,
  reviewing: components.filter((item) => item.status === 'reviewing').length,
  dual: components.filter((item) => item.status === 'listed-dual').length,
  byKind: componentKinds.map((kind) => ({
    ...kind,
    count: components.filter((item) => item.kind === kind.id).length,
  })),
};
