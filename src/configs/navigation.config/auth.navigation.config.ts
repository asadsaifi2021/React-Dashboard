import { AUTH_PREFIX_PATH } from '@/constants/route.constant'
import {
    NAV_ITEM_TYPE_TITLE,
    NAV_ITEM_TYPE_COLLAPSE,
    NAV_ITEM_TYPE_ITEM,
} from '@/constants/navigation.constant'
import { ADMIN, USER } from '@/constants/roles.constant'
import type { NavigationTree } from '@/@types/navigation'

const authNavigationConfig: NavigationTree[] = [
    {
        key: 'authentication',
        path: '',
        title: 'AUTHENTICATION',
        translateKey: 'nav.authentication.authentication',
        icon: 'authentication',
        type: NAV_ITEM_TYPE_TITLE,
        authority: [ADMIN, USER],
        subMenu: [
            
        ],
    },
]

export default authNavigationConfig
