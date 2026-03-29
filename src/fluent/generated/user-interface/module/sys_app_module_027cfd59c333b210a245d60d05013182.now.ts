import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['027cfd59c333b210a245d60d05013182'],
    table: 'sys_app_module',
    data: {
        active: true,
        application: '78fbfd19c333b210a245d60d05013158',
        filter: 'name=^EQ',
        link_type: 'SCRIPT',
        mobile_title: 'Custom applications',
        mobile_view_name: 'Mobile',
        name: 'sys_scope',
        override_menu_roles: false,
        query: `var companyCode = gs.getProperty('glide.appcreator.company.code');&#13;
answer = 'scopeSTARTSWITH' + 'x_' + companyCode;`,
        require_confirmation: true,
        sys_domain: 'global',
        sys_domain_path: '/',
        title: 'Custom applications',
        uncancelable: false,
    },
})
