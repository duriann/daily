const arr = [
  {
    // 路由全小写
    title: '保险工厂',
    key: '/define',
    childrens: [
      {
        title: '产品定义',
        url: '/define',
        childrens: [
          {
            title: '保险产品列表',
            url: '/definelist',
          },
          {
            title: '创建保险产品',
            url: '/definecreate',
          },
          {
            title: '主附险配置',
            url: '/defineconfig',
          },
          {
            title: '公共责任',
            url: '/defineduty',
          },
        ],
      },
      {
        title: '产品组合',
        url: '/concat',
        childrens: [
          {
            title: '产品组合列表',
            url: '/concatlist',
          },
          {
            title: '创建产品组合',
            url: '/concatcreate',
          },
        ],
      },
      {
        title: '商品中心',
        url: '/goods',
        childrens: [
          {
            title: '商品列表 ',
            url: '/goodslist',
          },
          {
            title: '创建商品',
            url: '/creategoods',
          },
        ],
      },
    ],
  },
  {
    title: '订单中心',
    key: '/grouporder',
    childrens: [
      {
        title: '团险订单',
        url: '/grouporder',
      },
      {
        title: '创建投保计划',
        url: '/insure',
      },
    ],
  },
  {
    title: '销售端管理',
    key: '/account/sales/manage',
    childrens: [
      {
        title: '销售账户管理',
        url: '/account/sales/manage',
      },
    ],
  },
  {
    title: '客户管理',
    key: '/personal',
    childrens: [
      {
        title: '个人客户',
        url: '/personal',
      },
      {
        title: '企业客户',
        url: '/company/list',
      },
    ],
  },
  {
    title: '系统设置',
    key: '/manage',
    childrens: [
      {
        title: '管理员账号',
        url: '/manage',
      },
    ],
  },
];
function find(treeArr, key) {
  const rootIndex = treeArr.findIndex((t) => t.key === key || t.url === key);
  if (rootIndex === -1) {
    for (let i = 0; i < treeArr.length; i++) {
      const root = treeArr[i];
      if (root.childrens) {
        const a = find(root.childrens, key);
        if (a) {
          return root;
        }
      }
    }
  }
  return treeArr[rootIndex];
}

console.log(find(arr, '/company/list'));
