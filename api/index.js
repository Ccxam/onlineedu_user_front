import request from '@/utils/request'
export default {
  getListCourseTeacher() {
    return request({
      url: `/eduservice/indexFront/indexCourse`,
      method: 'get'
    })
  }
}
