import { observable, action } from 'mobx';
import { toJS } from 'mobx';
import superagent from 'superagent';
class ImagensStore {
  @observable
  listImg = [];
  @observable
  index = 0;
  @observable
  imgUser = { currentUser: '', userImages: [] };

  @action
  getAllImages() {
    superagent.get('http://10.17.2.15:3002/listFoto').end((err, res) => {
      if (err) {
        console.log(err);
      } else {
        // console.log(res.body);
        this.listImg = res.body;
        // console.log(this.listImg);
      }
    });
  }

  urlInArray = (id, urlImgs) => {
    return urlImgs.filter(item => item.includes(id))[0];
  };
  url = (urlIds, urlImgs) => {
    console.log(toJS(urlIds));
    return urlIds.map(urlId => this.urlInArray(urlId, urlImgs));
  };

  @action
  getImagesById(id) {
    console.log('IMAGEN STORE');

    this.imgUser.userImages = this.url(id.has_images, this.listImg);
    this.imgUser.currentUser = '';
    if (this.imgUser.currentUser === '') {
      this.imgUser.currentUser = id.name;
    }
    // console.log(toJS(this.imgUser));
  }
}

export default new ImagensStore();

// let x = [];
// for (let i = 0; i < this.listImg.length; i++) {
//   for (let a = 0; a < id.has_images.length; a++) {
//     // console.log('*****');
//     // console.log(this.listImg[i].substring(0, 7));
//     // console.log('*****');

//     // console.log('#####');
//     // console.log(id.has_images[a]);
//     // console.log('#####');
//     if (this.listImg[i].substring(0, 7) === id.has_images[a]) {
//       // console.log(toJS(this.listImg[i]));
//       // console.log(this.listImg[i]);
//       this.imgUser.userImages.push(this.listImg[i]);
//       // x.push(id.has_images[a]);
//       // console.log(toJS(id.has_images[a]));
//       // this.imgUser.userImages = id.has_images[i];
//     }
//   }
// }

// console.log(x);
// console.log(this.imgUser.currentUser);
// console.log(toJS(this.imgUser.userImages));
