{
        "tag": [
            {
                "accountId": "{{AccountID}}",
                "containerId": "{{ContainerID}}",
                "tagId": "7",
                "name": "GA - All Pages",
                "type": "ua",
                "parameter": [
                    {
                        "type": "BOOLEAN",
                        "key": "overrideGaSettings",
                        "value": "false"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "trackType",
                        "value": "TRACK_PAGEVIEW"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "gaSettings",
                        "value": "{{GAS - Default}}"
                    }
                ],
                "fingerprint": "1597925758656",
                "firingTriggerId": [
                    "2147479553"
                ],
                "blockingTriggerId": [
                    "33"
                ],
                "tagFiringOption": "ONCE_PER_LOAD",
                "monitoringMetadata": {
                    "type": "MAP"
                }
            },
            {
                "accountId": "{{AccountID}}",
                "containerId": "{{ContainerID}}",
                "tagId": "10",
                "name": "GA - Performance - Scroll Depth",
                "type": "ua",
                "parameter": [
                    {
                        "type": "BOOLEAN",
                        "key": "overrideGaSettings",
                        "value": "false"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "trackType",
                        "value": "TRACK_TIMING"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "timingLabel",
                        "value": "percent"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "gaSettings",
                        "value": "{{GAS - Compact}}"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "timingCategory",
                        "value": "window"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "timingVar",
                        "value": "scroll depth"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "timingValue",
                        "value": "{{Scroll Depth Threshold / Seconds}}"
                    }
                ],
                "fingerprint": "1597925871724",
                "firingTriggerId": [
                    "12"
                ],
                "blockingTriggerId": [
                    "33"
                ],
                "tagFiringOption": "ONCE_PER_EVENT",
                "monitoringMetadata": {
                    "type": "MAP"
                }
            },
            {
                "accountId": "{{AccountID}}",
                "containerId": "{{ContainerID}}",
                "tagId": "11",
                "name": "JS - All Pages",
                "type": "html",
                "priority": {
                    "type": "INTEGER",
                    "value": "1"
                },
                "parameter": [
                    {
                        "type": "TEMPLATE",
                        "key": "html",
                        "value": "{{JS - All Pages.js}}"
                    },
                    {
                        "type": "BOOLEAN",
                        "key": "supportDocumentWrite",
                        "value": "false"
                    }
                ],
                "fingerprint": "1597925900469",
                "firingTriggerId": [
                    "2147479553"
                ],
                "blockingTriggerId": [
                    "33"
                ],
                "tagFiringOption": "ONCE_PER_LOAD",
                "monitoringMetadata": {
                    "type": "MAP"
                }
            },
            {
                "accountId": "{{AccountID}}",
                "containerId": "{{ContainerID}}",
                "tagId": "14",
                "name": "GA - Performance - Window Loaded",
                "type": "ua",
                "parameter": [
                    {
                        "type": "BOOLEAN",
                        "key": "overrideGaSettings",
                        "value": "false"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "trackType",
                        "value": "TRACK_TIMING"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "gaSettings",
                        "value": "{{GAS - Compact}}"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "timingCategory",
                        "value": "window"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "timingVar",
                        "value": "onload"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "timingValue",
                        "value": "{{Page Time}}"
                    }
                ],
                "fingerprint": "1597925888237",
                "firingTriggerId": [
                    "17"
                ],
                "blockingTriggerId": [
                    "33"
                ],
                "tagFiringOption": "ONCE_PER_EVENT",
                "monitoringMetadata": {
                    "type": "MAP"
                }
            },
            {
                "accountId": "{{AccountID}}",
                "containerId": "{{ContainerID}}",
                "tagId": "19",
                "name": "GA - Event - Navigation Type",
                "type": "ua",
                "parameter": [
                    {
                        "type": "BOOLEAN",
                        "key": "nonInteraction",
                        "value": "true"
                    },
                    {
                        "type": "BOOLEAN",
                        "key": "overrideGaSettings",
                        "value": "false"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "eventValue",
                        "value": "{{Page Time}}"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "eventCategory",
                        "value": "Telemetry"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "trackType",
                        "value": "TRACK_EVENT"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "gaSettings",
                        "value": "{{GAS - Default}}"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "eventAction",
                        "value": "Navigation Type"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "eventLabel",
                        "value": "{{Page Navigation}}"
                    }
                ],
                "fingerprint": "1597925817782",
                "firingTriggerId": [
                    "17"
                ],
                "blockingTriggerId": [
                    "33"
                ],
                "tagFiringOption": "ONCE_PER_EVENT",
                "monitoringMetadata": {
                    "type": "MAP"
                }
            },
            {
                "accountId": "{{AccountID}}",
                "containerId": "{{ContainerID}}",
                "tagId": "20",
                "name": "JS - Performance - Window Loaded",
                "type": "html",
                "parameter": [
                    {
                        "type": "TEMPLATE",
                        "key": "html",
                        "value": "{{JS - Performance - Window Loaded.js}}"
                    },
                    {
                        "type": "BOOLEAN",
                        "key": "supportDocumentWrite",
                        "value": "false"
                    }
                ],
                "fingerprint": "1597925914283",
                "firingTriggerId": [
                    "17"
                ],
                "blockingTriggerId": [
                    "33"
                ],
                "tagFiringOption": "ONCE_PER_LOAD",
                "monitoringMetadata": {
                    "type": "MAP"
                }
            },
            {
                "accountId": "{{AccountID}}",
                "containerId": "{{ContainerID}}",
                "tagId": "21",
                "name": "GA - Performance - BeforeUnload",
                "type": "ua",
                "parameter": [
                    {
                        "type": "BOOLEAN",
                        "key": "overrideGaSettings",
                        "value": "false"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "trackType",
                        "value": "TRACK_TIMING"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "gaSettings",
                        "value": "{{GAS - Default}}"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "timingCategory",
                        "value": "window"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "timingVar",
                        "value": "beforeunload"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "timingValue",
                        "value": "{{Page Time}}"
                    }
                ],
                "fingerprint": "1597925842529",
                "firingTriggerId": [
                    "12"
                ],
                "blockingTriggerId": [
                    "33"
                ],
                "tagFiringOption": "ONCE_PER_EVENT",
                "monitoringMetadata": {
                    "type": "MAP"
                }
            },
            {
                "accountId": "{{AccountID}}",
                "containerId": "{{ContainerID}}",
                "tagId": "27",
                "name": "GA - Performance",
                "type": "ua",
                "parameter": [
                    {
                        "type": "BOOLEAN",
                        "key": "overrideGaSettings",
                        "value": "false"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "trackType",
                        "value": "TRACK_TIMING"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "timingLabel",
                        "value": "{{DL - EventLabel}}"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "gaSettings",
                        "value": "{{GAS - Compact}}"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "timingCategory",
                        "value": "{{DL - EventCategory}}"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "timingVar",
                        "value": "{{DL - EventVar}}"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "timingValue",
                        "value": "{{DL - EventValue}}"
                    }
                ],
                "fingerprint": "1597925831050",
                "firingTriggerId": [
                    "22"
                ],
                "blockingTriggerId": [
                    "33"
                ],
                "tagFiringOption": "UNLIMITED",
                "monitoringMetadata": {
                    "type": "MAP"
                }
            },
            {
                "accountId": "{{AccountID}}",
                "containerId": "{{ContainerID}}",
                "tagId": "30",
                "name": "GA - Event",
                "type": "ua",
                "parameter": [
                    {
                        "type": "BOOLEAN",
                        "key": "nonInteraction",
                        "value": "true"
                    },
                    {
                        "type": "BOOLEAN",
                        "key": "overrideGaSettings",
                        "value": "false"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "eventValue",
                        "value": "{{DL - EventValue}}"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "eventCategory",
                        "value": "{{DL - EventCategory}}"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "trackType",
                        "value": "TRACK_EVENT"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "gaSettings",
                        "value": "{{GAS - Compact}}"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "eventAction",
                        "value": "{{DL - EventAction}}"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "eventLabel",
                        "value": "{{DL - EventLabel}}"
                    }
                ],
                "fingerprint": "1594936173599",
                "tagFiringOption": "UNLIMITED",
                "monitoringMetadata": {
                    "type": "MAP"
                }
            },
            {
                "accountId": "{{AccountID}}",
                "containerId": "{{ContainerID}}",
                "tagId": "31",
                "name": "GA - Performance - Engagement",
                "type": "ua",
                "parameter": [
                    {
                        "type": "BOOLEAN",
                        "key": "overrideGaSettings",
                        "value": "false"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "trackType",
                        "value": "TRACK_TIMING"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "timingLabel",
                        "value": "{{Scroll Depth Threshold}}"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "gaSettings",
                        "value": "{{GAS - Compact}}"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "timingCategory",
                        "value": "window"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "timingVar",
                        "value": "engagement"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "timingValue",
                        "value": "{{Page Time}}"
                    }
                ],
                "fingerprint": "1597925856239",
                "firingTriggerId": [
                    "13"
                ],
                "blockingTriggerId": [
                    "33"
                ],
                "tagFiringOption": "UNLIMITED",
                "monitoringMetadata": {
                    "type": "MAP"
                }
            }
        ],
        "trigger": [
            {
                "accountId": "{{AccountID}}",
                "containerId": "{{ContainerID}}",
                "triggerId": "12",
                "name": "CE - BeforeUnload",
                "type": "CUSTOM_EVENT",
                "customEventFilter": [
                    {
                        "type": "EQUALS",
                        "parameter": [
                            {
                                "type": "TEMPLATE",
                                "key": "arg0",
                                "value": "{{_event}}"
                            },
                            {
                                "type": "TEMPLATE",
                                "key": "arg1",
                                "value": "beforeunload"
                            }
                        ]
                    }
                ],
                "fingerprint": "1594818898675"
            },
            {
                "accountId": "{{AccountID}}",
                "containerId": "{{ContainerID}}",
                "triggerId": "13",
                "name": "All Pages - Scroll Depth",
                "type": "SCROLL_DEPTH",
                "fingerprint": "1594850015147",
                "parameter": [
                    {
                        "type": "TEMPLATE",
                        "key": "verticalThresholdUnits",
                        "value": "PERCENT"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "verticalThresholdsPercent",
                        "value": "10,20,30,40,50,60,70,80,90,100"
                    },
                    {
                        "type": "BOOLEAN",
                        "key": "verticalThresholdOn",
                        "value": "true"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "triggerStartOption",
                        "value": "WINDOW_LOAD"
                    },
                    {
                        "type": "BOOLEAN",
                        "key": "horizontalThresholdOn",
                        "value": "false"
                    }
                ]
            },
            {
                "accountId": "{{AccountID}}",
                "containerId": "{{ContainerID}}",
                "triggerId": "16",
                "name": "All Pages - DOM Ready",
                "type": "DOM_READY",
                "fingerprint": "1594766569508"
            },
            {
                "accountId": "{{AccountID}}",
                "containerId": "{{ContainerID}}",
                "triggerId": "17",
                "name": "All Pages - Window Loaded",
                "type": "WINDOW_LOADED",
                "fingerprint": "1594766611567"
            },
            {
                "accountId": "{{AccountID}}",
                "containerId": "{{ContainerID}}",
                "triggerId": "22",
                "name": "CE - Timing",
                "type": "CUSTOM_EVENT",
                "customEventFilter": [
                    {
                        "type": "EQUALS",
                        "parameter": [
                            {
                                "type": "TEMPLATE",
                                "key": "arg0",
                                "value": "{{_event}}"
                            },
                            {
                                "type": "TEMPLATE",
                                "key": "arg1",
                                "value": "timing"
                            }
                        ]
                    }
                ],
                "fingerprint": "1594818935393"
            },
            {
                "accountId": "{{AccountID}}",
                "containerId": "{{ContainerID}}",
                "triggerId": "33",
                "name": "All Pages - Web Crawlers",
                "type": "PAGEVIEW",
                "filter": [
                    {
                        "type": "MATCH_REGEX",
                        "parameter": [
                            {
                                "type": "TEMPLATE",
                                "key": "arg0",
                                "value": "{{GA - User Agent}}"
                            },
                            {
                                "type": "TEMPLATE",
                                "key": "arg1",
                                "value": "googlebot|adsbot-google|mediapartners-google|bingbot|baiduspider|duckduckbot|teoma|yandexbot|slurp|lighthouse"
                            },
                            {
                                "type": "BOOLEAN",
                                "key": "ignore_case",
                                "value": "true"
                            }
                        ]
                    }
                ],
                "fingerprint": "1598221596160"
            }
        ]
}
