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
                  "name": "User",
                  "path": "user",
                  "hidden": false,
                  "component": "demo1/index",
                  "meta": {
                      "title": "测试demo1",
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
