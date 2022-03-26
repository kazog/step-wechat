/**
 * 
 */
export function proview(urls, i=0) {
  wx.previewImage({
    current: i,
    urls,
  })
}