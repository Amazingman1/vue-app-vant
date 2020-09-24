/*
 * @Author: wangxuan
 * @Date: 2020-09-11 14:39:15
 * @LastEditors: wangxuan
 * @LastEditTime: 2020-09-23 17:11:38
 * @FilePath: /vue-vant-base/src/utils/appFn.js
 */

import Bridge from './bridge'
/**
 * @method 调用的方法
 * @callback ios/Android 返回的数据回调
 * @sendToApp 给app发送消息成功后回调
 * @sendContent String 发送内容
 */
function APP(obj) {
  const { order, sendContent } = obj
  console.log(order)
  console.log('=============')
  const appObe = {
    // 打开摄像头
    open_camera: 'open_camera',
    // 拍照
    take_picture: 'take_picture',
    // 关闭摄像头
    close_camera: 'close_camera',
    // 调用读卡器
    read_card: 'read_card',
    // 关闭读卡器
    close_card: 'close_card',
    // 调用语音
    speeck: 'speeck',
    // 获取uuid
    machine_uuid: 'machine_uuid'
  }
  return new Promise(resolve => {
    // ios返回数据
    Bridge.registerhandler('AndroidToH5', data => {
      const respose = JSON.parse(data)
      resolve(respose)
    })
    // 给ios传数据
    Bridge.callhandler(
      'H5ToAndoird',
      JSON.stringify({ type: appObe[order], data: sendContent || '' })
    )
  })
}

export default APP
