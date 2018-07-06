const commandLines = [
  /* 1 */
  {
    id: 0,
    title: 'sh',
    description: 'shell命令解释器',
    href: 'http://man.linuxde.net/sh',
    modifyOn: '2018-06-20T03:24:19.322Z'
  },

  /* 2 */
  {
    id: 1,
    title: 'inotifywait',
    description: '异步文件系统监控机制',
    href: 'http://man.linuxde.net/inotifywait',
    modifyOn: '2018-06-20T03:24:19.322Z'
  },

  /* 3 */
  {
    id: 2,
    title: 'losetup',
    description: '设定与控制循环（loop）设备',
    href: 'http://man.linuxde.net/losetup',
    modifyOn: '2018-06-20T03:24:19.322Z'
  },

  /* 4 */
  {
    id: 3,
    title: 'lsb_release',
    description: '显示发行版本信息',
    href: 'http://man.linuxde.net/lsb_release',
    modifyOn: '2018-06-20T03:24:19.322Z'
  },

  /* 5 */
  {
    id: 4,
    title: 'nethogs',
    description: '终端下的网络流量监控工具',
    href: 'http://man.linuxde.net/nethogs',
    modifyOn: '2018-06-20T03:24:19.322Z'
  },

  /* 6 */
  {
    id: 5,
    title: 'trap',
    description: '指定在接收到信号后将要采取的动作',
    href: 'http://man.linuxde.net/trap',
    modifyOn: '2018-06-20T03:24:19.322Z'
  },

  /* 7 */
  {
    id: 6,
    title: 'let',
    description: '简单的计算器',
    href: 'http://man.linuxde.net/let',
    modifyOn: '2018-06-20T03:24:19.322Z'
  },

  /* 8 */
  {
    id: 7,
    title: 'ifstat',
    description: '统计网络接口流量状态',
    href: 'http://man.linuxde.net/ifstat',
    modifyOn: '2018-06-20T03:24:19.323Z'
  },

  /* 9 */
  {
    id: 8,
    title: 'blkid',
    description: '查看块设备的文件系统类型、LABEL、UUID等信息',
    href: 'http://man.linuxde.net/blkid',
    modifyOn: '2018-06-20T03:24:19.323Z'
  },

  /* 10 */
  {
    id: 9,
    title: 'dstat',
    description: '通用的系统资源统计工具',
    href: 'http://man.linuxde.net/dstat',
    modifyOn: '2018-06-20T03:24:19.323Z'
  },

  /* 11 */
  {
    id: 10,
    title: 'du',
    description: '显示每个文件和目录的磁盘使用空间',
    href: 'http://man.linuxde.net/du',
    modifyOn: '2018-06-20T03:24:19.323Z'
  },

  /* 12 */
  {
    id: 11,
    title: 'ltrace',
    description: '用来跟踪进程调用库函数的情况',
    href: 'http://man.linuxde.net/ltrace',
    modifyOn: '2018-06-20T03:24:19.323Z'
  },

  /* 13 */
  {
    id: 12,
    title: 'seq',
    description: '以指定增量从首数开始打印数字到尾数',
    href: 'http://man.linuxde.net/seq',
    modifyOn: '2018-06-20T03:24:19.323Z'
  },

  /* 14 */
  {
    id: 13,
    title: 'dmidecode',
    description: '在Linux系统下获取有关硬件方面的信息',
    href: 'http://man.linuxde.net/dmidecode',
    modifyOn: '2018-06-20T03:24:19.323Z'
  },

  /* 15 */
  {
    id: 14,
    title: 'iotop',
    description: '用来监视磁盘I/O使用状况的工具',
    href: 'http://man.linuxde.net/iotop',
    modifyOn: '2018-06-20T03:24:19.323Z'
  },

  /* 16 */
  {
    id: 15,
    title: 'lsblk',
    description: '列出块设备信息',
    href: 'http://man.linuxde.net/lsblk',
    modifyOn: '2018-06-20T03:24:19.323Z'
  },

  /* 17 */
  {
    id: 16,
    title: 'tput',
    description: '通过terminfo数据库对终端会话进行初始化和操作',
    href: 'http://man.linuxde.net/tput',
    modifyOn: '2018-06-20T03:24:19.323Z'
  },

  /* 18 */
  {
    id: 17,
    title: 'strace',
    description: '跟踪系统调用和信号',
    href: 'http://man.linuxde.net/strace',
    modifyOn: '2018-06-20T03:24:19.324Z'
  },

  /* 19 */
  {
    id: 18,
    title: 'apropos',
    description: '在 whatis 数据库中查找字符串',
    href: 'http://man.linuxde.net/apropos',
    modifyOn: '2018-06-20T03:24:19.324Z'
  },

  /* 20 */
  {
    id: 19,
    title: 'set',
    description: '显示或设置shell特性及shell变量',
    href: 'http://man.linuxde.net/set',
    modifyOn: '2018-06-20T03:24:19.324Z'
  },

  /* 21 */
  {
    id: 20,
    title: 'vgremove',
    description: '用于用户删除LVM卷组',
    href: 'http://man.linuxde.net/vgremove',
    modifyOn: '2018-06-20T03:24:19.324Z'
  },

  /* 22 */
  {
    id: 21,
    title: 'sysctl',
    description: '时动态地修改内核的运行参数',
    href: 'http://man.linuxde.net/sysctl',
    modifyOn: '2018-06-20T03:24:19.324Z'
  },

  /* 23 */
  {
    id: 22,
    title: 'fuser',
    description: '使用文件或文件结构识别进程',
    href: 'http://man.linuxde.net/fuser',
    modifyOn: '2018-06-20T03:24:19.324Z'
  },

  /* 24 */
  {
    id: 23,
    title: 'lsof',
    description: '显示Linux系统当前已打开的所有文件列表',
    href: 'http://man.linuxde.net/lsof',
    modifyOn: '2018-06-20T03:24:19.324Z'
  },

  /* 25 */
  {
    id: 24,
    title: 'tload',
    description: '显示系统负载状况',
    href: 'http://man.linuxde.net/tload',
    modifyOn: '2018-06-20T03:24:19.324Z'
  },

  /* 26 */
  {
    id: 25,
    title: 'time',
    description: '统计给定命令所花费的总时间',
    href: 'http://man.linuxde.net/time',
    modifyOn: '2018-06-20T03:24:19.324Z'
  },

  /* 27 */
  {
    id: 26,
    title: 'vmstat',
    description: '显示虚拟内存状态',
    href: 'http://man.linuxde.net/vmstat',
    modifyOn: '2018-06-20T03:24:19.325Z'
  },

  /* 28 */
  {
    id: 27,
    title: 'sar',
    description: '系统运行状态统计工具',
    href: 'http://man.linuxde.net/sar',
    modifyOn: '2018-06-20T03:24:19.325Z'
  },

  /* 29 */
  {
    id: 28,
    title: 'mpstat',
    description: '显示各个可用CPU的状态',
    href: 'http://man.linuxde.net/mpstat',
    modifyOn: '2018-06-20T03:24:19.325Z'
  },

  /* 30 */
  {
    id: 29,
    title: 'iostat',
    description: '监视系统输入输出设备和CPU的使用情况',
    href: 'http://man.linuxde.net/iostat',
    modifyOn: '2018-06-20T03:24:19.325Z'
  },

  /* 31 */
  {
    id: 30,
    title: 'free',
    description: '显示内存的使用情况',
    href: 'http://man.linuxde.net/free',
    modifyOn: '2018-06-20T03:24:19.325Z'
  },

  /* 32 */
  {
    id: 31,
    title: 'uptime',
    description: '查看Linux系统负载信息',
    href: 'http://man.linuxde.net/uptime',
    modifyOn: '2018-06-20T03:24:19.325Z'
  },

  /* 33 */
  {
    id: 32,
    title: 'top',
    description: '显示或管理执行中的程序',
    href: 'http://man.linuxde.net/top',
    modifyOn: '2018-06-20T03:24:19.325Z'
  },

  /* 34 */
  {
    id: 33,
    title: 'lvresize',
    description: '调整逻辑卷空间大小',
    href: 'http://man.linuxde.net/lvresize',
    modifyOn: '2018-06-20T03:24:19.325Z'
  },

  /* 35 */
  {
    id: 34,
    title: 'lvremove',
    description: '删除指定LVM逻辑卷',
    href: 'http://man.linuxde.net/lvremove',
    modifyOn: '2018-06-20T03:24:19.325Z'
  },

  /* 36 */
  {
    id: 35,
    title: 'lvreduce',
    description: '收缩逻辑卷空间',
    href: 'http://man.linuxde.net/lvreduce',
    modifyOn: '2018-06-20T03:24:19.325Z'
  },

  /* 37 */
  {
    id: 36,
    title: 'slabtop',
    description: '实时显示内核slab内存缓存信息',
    href: 'http://man.linuxde.net/slabtop',
    modifyOn: '2018-06-20T03:24:19.326Z'
  },

  /* 38 */
  {
    id: 37,
    title: 'pvs',
    description: '输出物理卷信息报表',
    href: 'http://man.linuxde.net/pvs',
    modifyOn: '2018-06-20T03:24:19.326Z'
  },

  /* 39 */
  {
    id: 38,
    title: 'pvchange',
    description: '修改物理卷属性',
    href: 'http://man.linuxde.net/pvchange',
    modifyOn: '2018-06-20T03:24:19.326Z'
  },

  /* 40 */
  {
    id: 39,
    title: 'kernelversion',
    description: '打印当前内核的主版本号',
    href: 'http://man.linuxde.net/kernelversion',
    modifyOn: '2018-06-20T03:24:19.326Z'
  },

  /* 41 */
  {
    id: 40,
    title: 'pvck',
    description: '检测物理卷的LVM元数据的一致性',
    href: 'http://man.linuxde.net/pvck',
    modifyOn: '2018-06-20T03:24:19.326Z'
  },

  /* 42 */
  {
    id: 41,
    title: 'pvremove',
    description: '删除一个存在的物理卷',
    href: 'http://man.linuxde.net/pvremove',
    modifyOn: '2018-06-20T03:24:19.326Z'
  },

  /* 43 */
  {
    id: 42,
    title: 'lvextend',
    description: '扩展逻辑卷空间',
    href: 'http://man.linuxde.net/lvextend',
    modifyOn: '2018-06-20T03:24:19.326Z'
  },

  /* 44 */
  {
    id: 43,
    title: 'pvdisplay',
    description: '显示物理卷的属性',
    href: 'http://man.linuxde.net/pvdisplay',
    modifyOn: '2018-06-20T03:24:19.326Z'
  },

  /* 45 */
  {
    id: 44,
    title: 'get_module',
    description: '获取Linux内核模块的详细信息',
    href: 'http://man.linuxde.net/get_module',
    modifyOn: '2018-06-20T03:24:19.326Z'
  },

  /* 46 */
  {
    id: 45,
    title: 'lvdisplay',
    description: '显示逻辑卷属性',
    href: 'http://man.linuxde.net/lvdisplay',
    modifyOn: '2018-06-20T03:24:19.327Z'
  },

  /* 47 */
  {
    id: 46,
    title: 'command',
    description: '调用并执行指定的命令',
    href: 'http://man.linuxde.net/command',
    modifyOn: '2018-06-20T03:24:19.327Z'
  },

  /* 48 */
  {
    id: 47,
    title: 'kexec',
    description: '从当前正在运行的内核引导到一个新内核',
    href: 'http://man.linuxde.net/kexec',
    modifyOn: '2018-06-20T03:24:19.327Z'
  },

  /* 49 */
  {
    id: 48,
    title: 'pvscan',
    description: '扫描系统中所有硬盘的物理卷列表',
    href: 'http://man.linuxde.net/pvscan',
    modifyOn: '2018-06-20T03:24:19.327Z'
  },

  /* 50 */
  {
    id: 49,
    title: 'lvscan',
    description: '扫描逻辑卷',
    href: 'http://man.linuxde.net/lvscan',
    modifyOn: '2018-06-20T03:24:19.328Z'
  }
];

module.exports = commandLines;
