import request from '@/utils/request'
export default {
  //分页讲师查询的方法
  getCourseList(page,size,courseVo) {
    return request({
      url: `/eduservice/coursefromt/getFrontCourseList/${page}/${size}`,
      method: 'post',
      data:courseVo
    })
  },
  //查询所有分类的方法
  getAllSubject(){
    return request({
      url: `/eduservice/subject/getSubject`,
      method: 'get'
    })
  },
  getCourseInfo(courseId){
    return request({
      url: `/eduservice/coursefromt/getCourseFrontInfo/${courseId}`,
      method: 'get'
    })
  }


}
