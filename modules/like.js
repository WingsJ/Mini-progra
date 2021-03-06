import { HTTP } from '../utils/http.js'
class LikeModel extends HTTP {
  //点赞
  like(behavior, artID, category) {
    let url = behavior == 'like' ? 'like' : 'like/cancel';
    this.request({
      url: url,
      method: 'POST',
      data: {
        art_id: artID,
        type: category
      }
    })
  }
  //单独获取点赞
  geiClassicLikeStatus(artID, category,sCallback){
    this.request({
      url:`classic/${category}/${artID}/favor`,
      success:sCallback
    })
  }
}
export { LikeModel}