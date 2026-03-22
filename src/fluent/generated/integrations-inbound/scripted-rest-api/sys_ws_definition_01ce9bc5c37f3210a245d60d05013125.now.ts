import { RestApi } from '@servicenow/sdk/core'

RestApi({
    $id: Now.ID['01ce9bc5c37f3210a245d60d05013125'],
    name: 'Audit',
    enforceAcl: ['f9f0f168c7522010408bc8d6f2c2602f'],
    serviceId: 'audit',
    policy: 'protected',
    routes: [
        {
            $id: Now.ID['a57f1349c37f3210a245d60d050131b7'],
            name: 'Load',
            consumes: 'application/json,application/xml,text/xml',
            script: Now.include('./sys_ws_operation_a57f1349c37f3210a245d60d050131b7.js'),
            produces: 'application/json,application/xml,text/xml',
            path: '/load',
            enforceAcl: [],
            authentication: false,
        },
    ],
})
