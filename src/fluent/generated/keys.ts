import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    '01ce9bc5c37f3210a245d60d05013125': {
                        table: 'sys_ws_definition'
                        id: '01ce9bc5c37f3210a245d60d05013125'
                    }
                    '11a4f9d5c3ff7210a245d60d050131d4': {
                        table: 'sys_scope_privilege'
                        id: '11a4f9d5c3ff7210a245d60d050131d4'
                    }
                    '32443595c3ff7210a245d60d05013198': {
                        table: 'sys_scope_privilege'
                        id: '32443595c3ff7210a245d60d05013198'
                    }
                    '437b9b01c37f3210a245d60d05013162': {
                        table: 'sys_properties'
                        id: '437b9b01c37f3210a245d60d05013162'
                    }
                    '7274b1d5c3ff7210a245d60d05013144': {
                        table: 'sys_scope_privilege'
                        id: '7274b1d5c3ff7210a245d60d05013144'
                    }
                    '749439d5c3ff7210a245d60d050131ab': {
                        table: 'sys_scope_privilege'
                        id: '749439d5c3ff7210a245d60d050131ab'
                    }
                    '74b47dd5c3ff7210a245d60d050131e8': {
                        table: 'sys_scope_privilege'
                        id: '74b47dd5c3ff7210a245d60d050131e8'
                    }
                    '78fbfd19c333b210a245d60d05013158': {
                        table: 'sys_app_application'
                        id: '78fbfd19c333b210a245d60d05013158'
                    }
                    a57f1349c37f3210a245d60d050131b7: {
                        table: 'sys_ws_operation'
                        id: 'a57f1349c37f3210a245d60d050131b7'
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
                composite: [
                    {
                        table: 'sys_security_acl_role'
                        id: '270155aac3333210a245d60d050131b3'
                        key: {
                            sys_security_acl: '6b0155aac3333210a245d60d050131aa'
                            sys_user_role: {
                                id: 'af0155aac3333210a245d60d0501319c'
                                key: {
                                    name: 'x_1463223_sadx.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4601d1aac3333210a245d60d0501318d'
                        key: {
                            name: 'x_1463223_sadx_report'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '630195aac3333210a245d60d05013109'
                        key: {
                            sys_security_acl: '630195aac3333210a245d60d05013104'
                            sys_user_role: {
                                id: 'af0155aac3333210a245d60d0501319c'
                                key: {
                                    name: 'x_1463223_sadx.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'ab53b123d3744d9ab6d3157b928cd585'
                        key: {
                            name: 'x_1463223_sadx_report'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'af0155aac3333210a245d60d0501319c'
                        key: {
                            name: 'x_1463223_sadx.admin'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'dd01a463edff4a6ebcca302a2de95eb0'
                        key: {
                            name: 'x_1463223_sadx_report'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'e70155aac3333210a245d60d050131c1'
                        key: {
                            sys_security_acl: 'e70155aac3333210a245d60d050131bc'
                            sys_user_role: {
                                id: 'af0155aac3333210a245d60d0501319c'
                                key: {
                                    name: 'x_1463223_sadx.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'eb0155aac3333210a245d60d050131f1'
                        key: {
                            sys_security_acl: 'eb0155aac3333210a245d60d050131ec'
                            sys_user_role: {
                                id: 'af0155aac3333210a245d60d0501319c'
                                key: {
                                    name: 'x_1463223_sadx.admin'
                                }
                            }
                        }
                    },
                ]
            }
        }
    }
}
