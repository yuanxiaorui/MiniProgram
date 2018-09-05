//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    message: 'hello foo',
    todos: [
      {id:1, title: '吃饭'},
      {id: 2, title: '睡觉' },
      {id: 3, title: '打豆豆' },
    ],
    numberArray: [1,2,3,4],
    seen: true,
    count:0
  },

  increaseCount() {
    // 在事件处理函数中获取data数据的方式
    // console.log(this.data.count)

    // 小程序不是这么玩的
    //this.data.count++

    // setData方法用来修改数据更新视图
    // 参数是一个对象，对象中配置你要修改的data中的数据成员
    const count = this.data.count
    this.setData({
      count: count+1
    })
  },
  handleTap(e) {
    console.log(e)
    const {title} = e.currentTarget.dataset
    wx.showToast({
      title
    })
  },

  handleTap2() {
    console.log('handleTap2')
  },
  handleTap3(){
    console.log('handleTap3')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  }
})