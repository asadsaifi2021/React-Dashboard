import { lazy } from 'react'
import { APP_PREFIX_PATH } from '@/constants/route.constant'
import { ADMIN, USER } from '@/constants/roles.constant'
import type { Routes } from '@/@types/routes'

const appsRoute: Routes = [
    {
        key: 'appsProject.dashboard',
        path: `${APP_PREFIX_PATH}/project/dashboard`,
        component: lazy(() => import('@/views/project/ProjectDashboard')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsProject.projectList',
        path: `${APP_PREFIX_PATH}/project/project-list`,
        component: lazy(() => import('@/views/project/ProjectList')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsProject.scrumBoard',
        path: `${APP_PREFIX_PATH}/project/scrum-board`,
        component: lazy(() => import('@/views/project/ScrumBoard')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'gutterless',
        },
    },
    {
        key: 'appsProject.issue',
        path: `${APP_PREFIX_PATH}/project/issue`,
        component: lazy(() => import('@/views/project/Issue')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsCrm.dashboard',
        path: `${APP_PREFIX_PATH}/crm/dashboard`,
        component: lazy(() => import('@/views/crm/CrmDashboard')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsCrm.calendar',
        path: `${APP_PREFIX_PATH}/crm/calendar`,
        component: lazy(() => import('@/views/crm/Calendar')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsCrm.customers',
        path: `${APP_PREFIX_PATH}/crm/workers`,
        component: lazy(() => import('@/views/crm/Workers')),
        authority: [ADMIN, USER],
        meta: {
            header: 'Workers',
        },
    },
    {
        key: 'appsCrm.clients',
        path: `${APP_PREFIX_PATH}/crm/clients`,
        component: lazy(() => import('@/views/crm/Clients')),
        authority: [ADMIN, USER],
        meta: {
            header: 'Clients',
        },
    },
    {
        key: 'appsCrm.contracts',
        path: `${APP_PREFIX_PATH}/crm/contracts`,
        component: lazy(() => import('@/views/crm/Contracts')),
        authority: [ADMIN, USER],
        meta: {
            header: 'Contracts',
        },
    },
    {
        key: 'appsCrm.agencies',
        path: `${APP_PREFIX_PATH}/crm/agencies`,
        component: lazy(() => import('@/views/crm/Agencies')),
        authority: [ADMIN, USER],
        meta: {
            header: 'Agencies',
        },
    },
    {
        key: 'appsCrm.camps',
        path: `${APP_PREFIX_PATH}/crm/camps`,
        component: lazy(() => import('@/views/crm/Camps')),
        authority: [ADMIN, USER],
        meta: {
            header: 'Camps',
        },
    },
    {
        key: 'appsCrm.religions',
        path: `${APP_PREFIX_PATH}/crm/religions`,
        component: lazy(() => import('@/views/crm/Religions')),
        authority: [ADMIN, USER],
        meta: {
            header: 'Religions',
        },
    },
    {
        key: 'appsCrm.countries',
        path: `${APP_PREFIX_PATH}/crm/countries`,
        component: lazy(() => import('@/views/crm/Countries')),
        authority: [ADMIN, USER],
        meta: {
            header: 'Countries',
        },
    },
    {
        key: 'appsCrm.steps',
        path: `${APP_PREFIX_PATH}/crm/steps`,
        component: lazy(() => import('@/views/crm/Steps')),
        authority: [ADMIN, USER],
        meta: {
            header: 'Steps',
        },
    },
    {
        key: 'appsCrm.attachments',
        path: `${APP_PREFIX_PATH}/crm/attachments`,
        component: lazy(() => import('@/views/crm/Attachments')),
        authority: [ADMIN, USER],
        meta: {
            header: 'Attachments',
        },
    },
    {
        key: 'appsAccount.kycForm',
        path: `${APP_PREFIX_PATH}/account/kyc-form`,
        component: lazy(() => import('@/views/account/KycForm')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsForms.WorkerAddForm',
        path: `${APP_PREFIX_PATH}/forms/WorkerAddForm`,
        component: lazy(() => import('@/views/forms/WorkerAddForm')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsForms.ClientAddForm',
        path: `${APP_PREFIX_PATH}/forms/ClientAddForm`,
        component: lazy(() => import('@/views/forms/ClientAddForm')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsForms.ContractAddForm',
        path: `${APP_PREFIX_PATH}/forms/ContractAddForm`,
        component: lazy(() => import('@/views/forms/ContractAddForm')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsForms.AgencyAddForm',
        path: `${APP_PREFIX_PATH}/forms/AgencyAddForm`,
        component: lazy(() => import('@/views/forms/AgencyAddForm')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsForms.CampAddForm',
        path: `${APP_PREFIX_PATH}/forms/CampAddForm`,
        component: lazy(() => import('@/views/forms/CampAddForm')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsCrm.customerDetails',
        path: `${APP_PREFIX_PATH}/crm/customer-details`,
        component: lazy(() => import('@/views/crm/CustomerDetail')),
        authority: [ADMIN, USER],
        meta: {
            header: 'Worker Details',
            headerContainer: true,
        },
    },
    {
        key: 'appsSales.dashboard',
        path: `${APP_PREFIX_PATH}/sales/dashboard`,
        component: lazy(() => import('@/views/sales/SalesDashboard')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsSales.productList',
        path: `${APP_PREFIX_PATH}/sales/product-list`,
        component: lazy(() => import('@/views/sales/ProductList')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsSales.productEdit',
        path: `${APP_PREFIX_PATH}/sales/product-edit/:productId`,
        component: lazy(() => import('@/views/sales/ProductEdit')),
        authority: [ADMIN, USER],
        meta: {
            header: 'Edit Product',
        },
    },
    {
        key: 'appsSales.productNew',
        path: `${APP_PREFIX_PATH}/sales/product-new`,
        component: lazy(() => import('@/views/sales/ProductNew')),
        authority: [ADMIN, USER],
        meta: {
            header: 'Add New Product',
        },
    },
    {
        key: 'appsSales.orderList',
        path: `${APP_PREFIX_PATH}/sales/order-list`,
        component: lazy(() => import('@/views/sales/OrderList')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsSales.orderDetails',
        path: `${APP_PREFIX_PATH}/sales/order-details/:orderId`,
        component: lazy(() => import('@/views/sales/OrderDetails')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsCrypto.dashboard',
        path: `${APP_PREFIX_PATH}/crypto/dashboard`,
        component: lazy(() => import('@/views/crypto/CryptoDashboard')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsCrypto.portfolio',
        path: `${APP_PREFIX_PATH}/crypto/portfolio`,
        component: lazy(() => import('@/views/crypto/Portfolio')),
        authority: [ADMIN, USER],
        meta: {
            header: 'Portfolio',
        },
    },
    {
        key: 'appsCrypto.market',
        path: `${APP_PREFIX_PATH}/crypto/market`,
        component: lazy(() => import('@/views/crypto/Market')),
        authority: [ADMIN, USER],
        meta: {
            header: 'Market',
        },
    },
    {
        key: 'appsCrypto.wallets',
        path: `${APP_PREFIX_PATH}/crypto/wallets`,
        component: lazy(() => import('@/views/crypto/Wallets')),
        authority: [ADMIN, USER],
        meta: {
            header: 'Wallets',
        },
    },
    {
        key: 'appsknowledgeBase.helpCenter',
        path: `${APP_PREFIX_PATH}/knowledge-base/help-center`,
        component: lazy(() => import('@/views/knowledge-base/HelpCenter')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'gutterless',
        },
    },
    {
        key: 'appsknowledgeBase.article',
        path: `${APP_PREFIX_PATH}/knowledge-base/article`,
        component: lazy(() => import('@/views/knowledge-base/Article')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsknowledgeBase.manageArticles',
        path: `${APP_PREFIX_PATH}/knowledge-base/manage-articles`,
        component: lazy(() => import('@/views/knowledge-base/ManageArticles')),
        authority: [ADMIN, USER],
        meta: {
            header: 'Manage Articles',
            extraHeader: lazy(
                () =>
                    import(
                        '@/views/knowledge-base/ManageArticles/components/PanelHeader'
                    )
            ),
            headerContainer: true,
        },
    },
    {
        key: 'appsknowledgeBase.editArticle',
        path: `${APP_PREFIX_PATH}/knowledge-base/edit-article`,
        component: lazy(() => import('@/views/knowledge-base/EditArticle')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsAccount.settings',
        path: `${APP_PREFIX_PATH}/account/settings/:tab`,
        component: lazy(() => import('@/views/account/Settings')),
        authority: [ADMIN, USER],
        meta: {
            header: 'Settings',
            headerContainer: true,
        },
    },
    {
        key: 'appsAccount.invoice',
        path: `${APP_PREFIX_PATH}/account/invoice/:id`,
        component: lazy(() => import('@/views/account/Invoice')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsAccount.activityLog',
        path: `${APP_PREFIX_PATH}/account/activity-log`,
        component: lazy(() => import('@/views/account/ActivityLog')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsAccount.kycForm',
        path: `${APP_PREFIX_PATH}/account/kyc-form`,
        component: lazy(() => import('@/views/account/KycForm')),
        authority: [ADMIN, USER],
    },
]

export default appsRoute
