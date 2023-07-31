let menuDatas={
  "msg": "操作成功",
  "code": 200,
  "data": [
      {
          "name": "Demo",
          "path": "/demo",
          "hidden": false,
          "redirect": "noRedirect",
          "component": "Layout",
          "alwaysShow": true,
          "meta": {
              "title": "测试demo",
              "icon": "system",
              "noCache": false,
              "link": null
          },
          "children": [
              {
                  "name": "demo1",
                  "path": "demo1",
                  "hidden": false,
                  "component": "demo1/index",
                  "meta": {
                      "title": "测试demo1",
                      "icon": "user",
                      "noCache": false,
                      "link": null
                  }
              },
              {
                "name": "demo2",
                "path": "demo2",
                "hidden": false,
                "component": "demo2/index",
                "meta": {
                    "title": "测试demo2",
                    "icon": "user",
                    "noCache": false,
                    "link": null
                }
            },
            {
              "name": "demo3",
              "path": "demo3",
              "hidden": false,
              "component": "demo3/index",
              "meta": {
                  "title": "测试demo3",
                  "icon": "user",
                  "noCache": false,
                  "link": null
              }
            },
            {
              "name": "demo4",
              "path": "demo4",
              "hidden": false,
              "component": "demo4/index",
              "meta": {
                  "title": "测试demo4",
                  "icon": "user",
                  "noCache": false,
                  "link": null
              }
            },
            {
              "name": "demo5",
              "path": "demo5",
              "hidden": false,
              "component": "demo5/index",
              "meta": {
                  "title": "测试demo5",
                  "icon": "user",
                  "noCache": false,
                  "link": null
              }
            },
            {
              "name": "demo6",
              "path": "demo6",
              "hidden": false,
              "component": "demo6/index",
              "meta": {
                  "title": "测试demo6",
                  "icon": "user",
                  "noCache": false,
                  "link": null
              }
            },
          ]
      },
  ]
}

export default menuDatas
