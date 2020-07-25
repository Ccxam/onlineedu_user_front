import request from '@/utils/request'
export default {
  //查询凭证
  getPlayAuthById(videoId) {
    return request({
      url: `/eduvod/video/getPlayAuth/${videoId}`,
      method: 'get'
    })
  },

}
