import { observable, action, computed } from 'mobx';
import { toJS } from 'mobx';
class UserStore {
  @observable
  currentUser = '';
  @observable
  listUsers = [
    {
      user_id: 1,
      name: 'user A',
      has_images: ['2n4ft6_', 'AIwRU5_', 'D3Fv3P_']
    },
    {
      user_id: 2,
      name: 'user B',
      has_images: ['eS9i6o_', 'GEuJvB_']
    },
    {
      user_id: 3,
      name: 'user C',
      has_images: ['H6mgIF_', 'IOclH4_', 'iqvqpP_', 'LA4zoV_', 'LVTV4b_']
    },
    {
      user_id: 4,
      name: 'user D',
      has_images: ['QNkwjF_']
    },
    {
      user_id: 5,
      name: 'user E',
      has_images: ['T3ijbq_', 'XGFGq4_']
    }
  ];

  getPhotoByUserId(id) {
    return this.listUsers.filter(x => {
      return x.user_id == id;
    })[0];
  }
}

export default new UserStore();
