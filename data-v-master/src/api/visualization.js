import request from '@/utils/request.js';
const getVisualization = () => {
  return request({
    url: '/visualization'
  })
}

const getData = (reqUrl) => {
  return request({
    url: reqUrl
  })
}
export { getVisualization, getData }