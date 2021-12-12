import { API } from '@/utils/config'
import HTTP from '@/utils/http'

export default class ListModel extends HTTP {
  public getCourseFields(): Promise<any> {
    return new Promise((resolve) => {
      this.ajax({
        url: API.getCourseFields,
        type: 'GET',
        dataType: 'JSONP',
        jsonpCallback: 'callback',

        success(data: any) {
          resolve(data)
        },
      })
    })
  }

  public getCourses(field: string): Promise<any> {
    return new Promise((resolve) => {
      this.ajax({
        url: API.getCourse + field,
        type: 'GET',
        dataType: 'JSONP',
        jsonpCallback: 'callback',

        success(data: any) {
          resolve(data)
        },
      })
    })
  }
}
