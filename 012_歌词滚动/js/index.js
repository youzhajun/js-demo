;(function () {
  const doms = {
    lyricContent: document.querySelector('.lyric-content'),
    audio: document.querySelector('audio')
  }
  let lyrData = []
  const size = {
    pLineHeight: 35,
    containerHeight: 350
  }
  // 1.页面初始化
  function init() {
    lyrData = lyrStr
      .split('\n')
      .filter((x) => x)
      .map((str) => {
        const timeArr = str.split(']')[0].replace('[', '').split(':')
        return {
          time: +timeArr[0] * 60 + +timeArr[1],
          content: str.split(']')[1]
        }
      })
    // 页面赋值
    doms.lyricContent.innerHTML = lyrData
      .map((x) => `<p>${x.content}</p>`)
      .join('')
  }

  //   数据
  const lyrStr = `[00:00.81]一路向北 - 周杰伦
[00:02.28]词：方文山
[00:03.1]曲：周杰伦
[00:04.02]编曲：蔡科俊
[00:37.4]后视镜里的世界
[00:44.55]越来越远的道别
[00:48.91]你转身向背 侧脸还是很美
[00:55.34]我用眼光去追 竟听见你的泪
[01:05.97]在车窗外面徘徊 是我错失的机会
[01:17.270004]你站的方位 跟我中间隔着泪
[01:23.55]街景一直在后退
[01:27.25]你的崩溃在窗外零碎
[01:31.49]我一路向北 离开有你的季节
[01:38.82]你说你好累 已无法再爱上谁
[01:45.94]风在山路吹
[01:48.3]过往的画面全都是我不对
[01:53.94]细数惭愧 我伤你几回
[02:21.23]后视镜里的世界 越来越远的道别
[02:33.03]你转身向背 侧脸还是很美
[02:39.22]我用眼光去追 竟听见你的泪
[02:49.78]在车窗外面徘徊 是我错失的机会
[03:01.85]你站的方位 跟我中间隔着泪
[03:07.36]街景一直在后退
[03:10.96]你的崩溃在窗外零碎
[03:15.33]我一路向北 离开有你的季节
[03:22.52]你说你好累 已无法再爱上谁
[03:29.75]风在山路吹
[03:32.13]过往的画面全都是我不对
[03:37.52]细数惭愧 我伤你几回
[03:44.64]我一路向北 离开有你的季节
[03:51.19]方向盘周围 回转着我的后悔
[03:59.17]我加速超越
[04:01.11]却甩不掉紧紧跟随的伤悲
[04:06.25]细数惭愧我 伤你几回
[04:13.96]停止狼狈就 让错纯粹`

  init()

  // 2.交互事件
  doms.audio.addEventListener('timeupdate', function (e) {
    // 消除之前的激活p
    const selected = document.querySelector('.lyric-content p.selected')
    selected && selected.classList.remove('selected')
    const index = lyrData.findIndex((x) => x.time > this.currentTime) - 1
    if (index < 0) {
      return
    }
    // 歌词高亮
    doms.lyricContent.children[index].classList.add('selected')
    // 偏移
    let top =
      size.pLineHeight * index + size.pLineHeight / 2 - size.containerHeight / 2
    top = -top
    if (top > 0) {
      top = 0
    }
    doms.lyricContent.style.transform = `translateY(${top}px)`
  })
})()
