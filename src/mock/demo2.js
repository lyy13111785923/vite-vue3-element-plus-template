let res=[
  {
      "id": "1",
      "label": "测试1",
      "js": "function boxClick() { alert('1') }",
      "children": [
          {
              "id": "1-1",
              "label": "测试1-1",
              "js": "function boxClick() { alert('1-1') }"
          }
      ]
  },
  {
      "id": "2",
      "label": "测试2",
      "js": "function boxClick() { alert('2') }",
      "children": [
          {
              "id": "2-1",
              "label": "测试2-1",
              "js": "function boxClick() { alert('2-1') }",
              "children": [
                  {
                      "id": "2-1-1",
                      "label": "2-1-1",
                      "js": "function boxClick() { alert('2-1-1') }"
                  }
              ]
          },
          {
              "id": "2-2",
              "label": "测试2-2",
              "js": "function boxClick() { alert('2-2') }",
              "children": [
                  {
                      "id": "2-2-1",
                      "label": "2-2-1",
                      "js": "function boxClick() { alert('2-2-1') }"
                  }
              ]
          }
      ]
  }
]
export default res
