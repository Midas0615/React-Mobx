import Loadable from 'react-loadable'

import PageLoading from '@components/PageLoading'

const loadComponent = (loader: () => Promise<any>) =>
    Loadable({
        loader,
        loading: PageLoading
    })

export const asynchronousComponents = {
    Config: loadComponent(() => import(/* webpackChunkName: "Config" */ '@views/Config')),
    Logs: loadComponent(() => import(/* webpackChunkName: "Logs" */ '@views/Log')),
    Users: loadComponent(() => import(/* webpackChunkName: "Users" */ '@views/Users')),
    Role: loadComponent(() => import(/* webpackChunkName: "Role" */ '@views/Role')),
    Permission: loadComponent(() => import(/* webpackChunkName: "Permission" */ '@views/Permission')),
    Template: loadComponent(() => import(/* webpackChunkName: "Template" */ '@views/Template')),
    Custom: loadComponent(() => import(/* webpackChunkName: "Custom" */ '@views/Custom')),
    ConfigModel: loadComponent(() => import(/* webpackChunkName: "Config" */ '@views/Config/ConfigModal')),
    UserModal: loadComponent(() => import(/* webpackChunkName: "UserModal" */ '@views/Users/UserModal')),
    RoleModal: loadComponent(() => import(/* webpackChunkName: "RoleModal" */ '@views/Role/RoleModal')),
    PermissionModal: loadComponent(() => import(/* webpackChunkName: "PermissionModal" */ '@views/Permission/PermissionModal')),
}

// 所有路由的key
export type AsynchronousComponentKeys = keyof typeof asynchronousComponents

export interface IMenu {
    title: string
    id: number
    pid?: number
    path?: string
    icon?: string
    component?: AsynchronousComponentKeys
    exact?: boolean
}

export interface IMenuInTree extends IMenu {
    children?: IMenuInTree[]
}

export interface IRouter extends IMenu {
    isMenu?: boolean
}
export const templateId = 2
export const logId = 412
export const menu: IMenu[] = [
    {
        id: 1,
        title: 'Config Manage',
        icon: 'iconconfigpeizhi',
    },
    {
        pid: 1,
        id: 11,
        title: 'Config Manage',
        path: '/config',
        component: 'Config',
        exact: true
    },
    {
        pid: 1,
        id: templateId,
        title: 'Template Manage',
        // icon: 'iconmobanguanli',
    },
    {
        id: 20,
        pid: 2,
        component: 'Custom',
        title: 'Custom Templates',
        path: '/custom'
    },
    // {
    //     id: 21,
    //     pid: 2,
    //     title: 'Player',
    //     path: '/player',
    //     component: 'Config',
    // },
    // {
    //     id: 22,
    //     pid: 2,
    //     title: 'Playicon Template',
    // },
    // {
    //     id: 23,
    //     pid: 2,
    //     title: 'Appwall Coins',
    // },
    // {
    //     id: 24,
    //     pid: 2,
    //     title: 'Privacy',
    // },

    {
        id: 3,
        title: 'Authorization',
        icon: 'iconjiaoseshezhi',
    },
    {
        id: 31,
        pid: 3,
        path: '/users',
        title: 'User Manage',
        component: 'Users',
        exact: true
    },
    {
        id: 32,
        pid: 3,
        path: '/role',
        title: 'Roles Manage',
        component: 'Role',
        exact: true
    },
    {
        id: 33,
        pid: 3,
        path: '/permission',
        title: 'Permission Manage',
        component: 'Permission',
        exact: true
    },
    {
        id: 4,
        title: 'Log',
        icon: 'iconlog',
        exact: true
    },
    {
        id: 41,
        pid: 4,
        title: 'Config Manage',
        // path: '/log-config',
        // component: 'Logs',
    },
    {
        id: 42,
        pid: 4,
        title: 'Authorization',
        // path: '/log-auth',
        // component: 'Logs',
    }
]
export const logMenu: IMenu[] = [{
    id: 411,
    pid: 41,
    path: '/log/config',
    title: 'Config Manage',
    component: 'Logs',
},
{
    id: logId,
    pid: 41,
    title: 'Template Manage',
    component: 'Logs',
},
{
    id: 413,
    pid: logId,
    path: '/log/template',
    title: 'Custom Templates',
    component: 'Logs',
},
{
    id: 421,
    pid: 42,
    path: '/log/user',
    title: 'User Manage',
    component: 'Logs',
},
{
    id: 422,
    pid: 42,
    path: '/log/role',
    title: 'Roles Manage',
    component: 'Logs',
}]

const menuMap: IRouter[] = [...menu].map(ele => {
    return {
        ...ele,
        isMenu: true
    }
})


const addRouter: IRouter[] = [
    {
        id: 10000,
        path: '/config/edit/:id',
        title: 'Edit Config',
        component: 'ConfigModel',
        isMenu: false
    },
    {
        id: 10000,
        path: '/config/add',
        title: 'Edit Config',
        component: 'ConfigModel',
        isMenu: false
    },
    {
        id: 3101,
        path: '/users/add',
        title: 'Add User',
        component: 'UserModal',
        isMenu: false
    },
    {
        id: 3102,
        path: '/users/edit/:id',
        title: 'Edit User',
        component: 'UserModal',
        isMenu: false
    },
    {
        id: 3201,
        path: '/role/add',
        title: 'Add Role',
        component: 'RoleModal',
        isMenu: false
    },
    {
        id: 3202,
        path: '/role/edit/:id',
        title: 'Edit Role',
        component: 'RoleModal',
        isMenu: false
    },
    {
        id: 3301,
        path: '/permission/add',
        title: 'Add Permission',
        component: 'PermissionModal',
        isMenu: false
    },
    {
        id: 3302,
        path: '/permission/edit/:id',
        title: 'Edit Permission',
        component: 'PermissionModal',
        isMenu: false
    },
    {
        id: 3302,
        path: '/template/:id',
        title: '',
        component: 'Template',
        isMenu: false
    },
    {
        id: 4002,
        path: '/log/:id',
        title: '',
        component: 'Logs',
        isMenu: false
    },
]

export const router: IRouter[] = [...menuMap, ...addRouter]
export default menu
