import React from 'react';
import { toJS } from 'mobx';
import { inject, observer } from 'mobx-react';

const urlImageSelect = nomeImagemCompleta => {
  document.slide.src = `http://10.17.2.15:3002/getFoto/` + nomeImagemCompleta;
};

@inject('imagensStore', 'userStore')
@observer
class Container extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props.imagensStore.listImg);
    this.getId = this.getId.bind(this);
    this.changeImg = this.changeImg.bind(this);
  }

  componentDidMount() {
    this.props.imagensStore.getAllImages();
  }

  getId() {
    const { imagensStore, userStore } = this.props;
    let id = document.querySelector('#idUser').value;
    let user = userStore.getPhotoByUserId(id);
    if (user != undefined) {
      imagensStore.getImagesById(user);
      let nomeImagem = imagensStore.imgUser.userImages[imagensStore.index];
      urlImageSelect(nomeImagem);
    } else {
      imagensStore.imgUser.currentUser = '';
      imagensStore.imgUser.userImages = '';
      document.slide.src = '';
      console.log('NAO TEM IMAGEM');
    }
  }

  changeImg() {
    const { imagensStore } = this.props;
    if (imagensStore.index < imagensStore.imgUser.userImages.length - 1) {
      imagensStore.index = imagensStore.index + 1;
    } else {
      imagensStore.index = 0;
    }
    let nomeImagem = imagensStore.imgUser.userImages[imagensStore.index];
    urlImageSelect(nomeImagem);
  }

  render() {
    let renderImg = this.props.imagensStore.imgUser.userImages[
      this.props.imagensStore.index
    ];
    return (
      <div style={{ border: '5px solid aqua' }}>
        <h2>Slide show galerinha</h2>
        <div>
          <input type="text" id="idUser" />
          <button onClick={this.getId}>Ok</button>
        </div>
        <div>{`Current User: ${
          this.props.imagensStore.imgUser.currentUser
        }`}</div>
        <div>{`Current image: ${renderImg != undefined ? renderImg : ''}`}</div>
        <div>
          <h1>Slide</h1>
          <div>
            <img name="slide" height="400" alt="" />
            <p id="legenda" />
          </div>
          <button onClick={this.changeImg}>Next</button>
        </div>
      </div>
    );
  }
}

export default Container;
