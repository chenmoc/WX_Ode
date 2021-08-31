Page({
  data: {
    cardCur: 0,
    swiperList: [{
      id: 0,
      type: 'image',
      url: 'https://chenmoc.com/imgs/index.png'
    }, {
      id: 1,
        type: 'image',
        url: 'https://chenmoc.com/imgs/index.png',
    }, {
      id: 2,
      type: 'image',
      url: 'https://chenmoc.com/imgs/index.png'
    }, {
      id: 3,
      type: 'image',
      url: 'https://chenmoc.com/imgs/index.png'
    }, {
      id: 4,
      type: 'image',
      url: 'https://chenmoc.com/imgs/index.png'
    }, {
      id: 5,
      type: 'image',
      url: 'https://chenmoc.com/imgs/index.png'
    }, {
      id: 6,
      type: 'image',
      url: 'https://chenmoc.com/imgs/index.png'
    }],
  },

  leap:function(){
    var n = Math.round(Math.random()*10);
    console.log(n);
    switch (n) 
{ 
  case 1:
    wx.redirectTo({
      url: '../intro/intro',
    })
  break; 
  case 2:
    wx.redirectTo({
      url: '../intro1/intro1',
    })
  break; 
  case 3:
    wx.redirectTo({
      url: '../intro2/intro2',
    })
  break; 
  case 4:
    wx.redirectTo({
      url: '../intro3/intro3',
    })
  break; 
  case 5:
    wx.redirectTo({
      url: '../intro4/intro4',
    })
  break; 
  case 6:
    wx.redirectTo({
      url: '../intro5/intro5',
    })
  break; 
  case 7:
    wx.redirectTo({
      url: '../intro6/intro6',
    })
  break; 
  case 8:
    wx.redirectTo({
      url: '../intro7/intro7',
    })
  break; 
  case 9:
    wx.redirectTo({
      url: '../intro8/intro8',
    })
  break; 
  default: 
    wx.redirectTo({
      url: '../intro/intro',
    })
}
   
  },

  onLoad() {
    
    this.towerSwiper('swiperList');
    // 初始化towerSwiper 传已有的数组名即可
  },
  DotStyle(e) {
    this.setData({
      DotStyle: e.detail.value
    })
  },
  // cardSwiper
  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
  },
  // towerSwiper
  // 初始化towerSwiper
  towerSwiper(name) {
    let list = this.data[name];
    for (let i = 0; i < list.length; i++) {
      list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
      list[i].mLeft = i - parseInt(list.length / 2)
    }
    this.setData({
      swiperList: list
    })
  },
  // towerSwiper触摸开始
  towerStart(e) {
    this.setData({
      towerStart: e.touches[0].pageX
    })
  },
  // towerSwiper计算方向
  towerMove(e) {
    this.setData({
      direction: e.touches[0].pageX - this.data.towerStart > 0 ? 'right' : 'left'
    })
  },
  // towerSwiper计算滚动
  towerEnd(e) {
    let direction = this.data.direction;
    let list = this.data.swiperList;
    if (direction == 'right') {
      let mLeft = list[0].mLeft;
      let zIndex = list[0].zIndex;
      for (let i = 1; i < list.length; i++) {
        list[i - 1].mLeft = list[i].mLeft
        list[i - 1].zIndex = list[i].zIndex
      }
      list[list.length - 1].mLeft = mLeft;
      list[list.length - 1].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    } else {
      let mLeft = list[list.length - 1].mLeft;
      let zIndex = list[list.length - 1].zIndex;
      for (let i = list.length - 1; i > 0; i--) {
        list[i].mLeft = list[i - 1].mLeft
        list[i].zIndex = list[i - 1].zIndex
      }
      list[0].mLeft = mLeft;
      list[0].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    }
  }
})