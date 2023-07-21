let menuDatas={
  "msg": "操作成功",
  "code": 200,
  "data": [
      {
          "name": "Demo",
          "path": "/demo1",
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
          ]
      },
  ]
}

export default menuDatas
