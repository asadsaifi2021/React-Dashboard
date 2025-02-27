import { APP_PREFIX_PATH } from '@/constants/route.constant'
import {
    NAV_ITEM_TYPE_TITLE,
    NAV_ITEM_TYPE_COLLAPSE,
    NAV_ITEM_TYPE_ITEM,
} from '@/constants/navigation.constant'
import { ADMIN, USER } from '@/constants/roles.constant'
import type { NavigationTree } from '@/@types/navigation'

const appsNavigationConfig: NavigationTree[] = [
    {
        key: 'appsProject.dashboard',
        path: `${APP_PREFIX_PATH}/project/dashboard`,
        title: 'Dashboard',
        translateKey: 'Dashboard',
        icon: 'dataDisplay',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [ADMIN, USER],
        subMenu: [],
    },
    {
        key: 'appsCrm.workers',
        path: `${APP_PREFIX_PATH}/crm/workers`,
        title: 'Workers',
        translateKey: 'Workers',
        icon: 'workers',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [ADMIN, USER],
        subMenu: [],
    },
    {
        key: 'appsAccount.clients',
        path: `${APP_PREFIX_PATH}/crm/clients`,
        title: 'Clients',
        translateKey: 'Clients',
        icon: 'clients',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [ADMIN, USER],
        subMenu: [],
    },
    {
        key: 'appsAccount.contracts',
        path: `${APP_PREFIX_PATH}/crm/contracts`,
        title: 'Contracts',
        translateKey: 'Contracts',
        icon: 'contracts',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [ADMIN, USER],
        subMenu: [],
    },
    {
        key: 'appsAccount.agencies',
        path: `${APP_PREFIX_PATH}/crm/agencies`,
        title: 'Agencies',
        translateKey: 'Agencies',
        icon: 'agencies',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [ADMIN, USER],
        subMenu: [],
    },
    {
        key: 'appsAccount.camps',
        path: `${APP_PREFIX_PATH}/crm/camps`,
        title: 'Camps',
        translateKey: 'Camps',
        icon: 'camps',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [ADMIN, USER],
        subMenu: [],
    },
    {
        key: 'appsCrm.religions',
        path: `${APP_PREFIX_PATH}/crm/religions`,
        title: 'Religions',
        translateKey: 'Religions',
        icon: 'religions',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [ADMIN, USER],
        subMenu: [],
    },
    {
        key: 'appsAccount.countries',
        path: `${APP_PREFIX_PATH}/crm/countries`,
        title: 'Countries',
        translateKey: 'Countries',
        icon: 'countries',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [ADMIN, USER],
        subMenu: [],
    },
    {
        key: 'appsAccount.steps',
        path: `${APP_PREFIX_PATH}/crm/steps`,
        title: 'Steps',
        translateKey: 'Steps',
        icon: 'steps',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [ADMIN, USER],
        subMenu: [],
    },
    {
        key: 'appsAccount.attachments',
        path: `${APP_PREFIX_PATH}/crm/attachments`,
        title: 'Attachments',
        translateKey: 'Attachments',
        icon: 'attachments',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [ADMIN, USER],
        subMenu: [],
    },
]

export default appsNavigationConfig
