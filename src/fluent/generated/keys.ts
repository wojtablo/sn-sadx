import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    '437b9b01c37f3210a245d60d05013162': {
                        table: 'sys_properties'
                        id: '437b9b01c37f3210a245d60d05013162'
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: '9985b9ae263041eda823c6d60093def5'
                    }
                    br0: {
                        table: 'sys_script'
                        id: '9aa197dd694b473fadc1d2237a34c800'
                    }
                    cs0: {
                        table: 'sys_script_client'
                        id: 'a3d6bfe849e44cf5988d9b834e417569'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'aa86a0fd230a42f0aa07901e8270840e'
                    }
                    src_server_script_ts: {
                        table: 'sys_module'
                        id: 'a77ea02e53e74d129377350709015195'
                    }
                }
            }
        }
    }
}
