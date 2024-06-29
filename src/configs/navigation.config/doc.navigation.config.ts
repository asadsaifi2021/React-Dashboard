import { DOCS_PREFIX_PATH } from '@/constants/route.constant'
import {
    NAV_ITEM_TYPE_TITLE,
    NAV_ITEM_TYPE_ITEM,
} from '@/constants/navigation.constant'
import { ADMIN, USER } from '@/constants/roles.constant'
import type { NavigationTree } from '@/@types/navigation'

const docNavigationConfig: NavigationTree[] = [
    {
        key: 'guide',
        path: '',
        title: 'Guide',
        translateKey: 'nav.docs.guide',
        icon: 'guide',
        type: NAV_ITEM_TYPE_TITLE,
        authority: [ADMIN, USER],
        subMenu: [
        ],
    },
]

export default docNavigationConfig
