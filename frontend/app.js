//app.js


App({
  onLaunch(){
    wx.cloud.init()
    
  }
})




function swap (arr,i,j){
  // 交换数组第i和第j个的值
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp  
}