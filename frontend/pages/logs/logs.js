//logs.js
// const util = require('../../utils/util.js')

Page({
  data: {
    // logs: []
  },
  // onLoad: function () {
  //   // this.setData({
  //   //   logs: (wx.getStorageSync('logs') || []).map(log => {
  //   //     return util.formatTime(new Date(log))
  //   //   })
  //   // })
  // },
  // onGetUserInfo(e){
  //   console.log(e.detail)
  // }
  sum(){
    wx.cloud.callFunction({
      name:'sum',
      data:{
        a:1,
        b:2
      },
      success(res){
        console.log(res.result.sum)
      },
      fail:console.error
    })
  }
})
