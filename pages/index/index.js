//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    allData: {},
    questionid: 0,
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var allData = [
      {
        question: "“大煮干丝”是哪个菜系的代表菜之一( )。",
        answer: [
          "四川菜系",
          "山东菜系",
          "广东菜系",
          "淮扬菜系",
          "不知道菜系"
        ]
      },
      {
        question: "红茶属于( )茶。",
        answer: [
          "半发酵",
          "发酵",
          "不发酵",
          "微发酵"
        ]
      },
      {
        question: "满汉全席起兴于（ ）。",
        answer: [
          "清代",
          "唐代",
          "宋代",
          "两汉"
        ]
      },
    ] 
    console.log(allData)

    this.setData({
      allData: allData
    })
  },

  pre: function() {
    var that = this
    var id = that.data.questionid - 1
    that.setData({
      questionid: id,
    })
  },

  next: function () {
    var that = this
    var id = that.data.questionid + 1
    that.setData({
        questionid: id,
      })
    }
  
})
