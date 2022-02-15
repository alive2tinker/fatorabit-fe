import { Storage } from '@capacitor/storage';
import Request from './Request.js';
const AuthModule = {
    namespaced: true,
    state: () => ({
        user: ''
    }),
    actions: {
        updateUser({commit}, newDetails) {
            return new Promise((resolve, reject) => {
                const userUpdated = async () => {
                    await Storage.set({
                        key:'user',
                        value: JSON.stringify(newDetails)
                    });
                };
                
                userUpdated().then(() => {
                    commit('SET_USER', newDetails);
                    resolve();
                }).catch(() => {
                    reject();
                })
            })
        },
        markCustomerBoarded(state,value) {
            return new Promise((resolve, reject) => {
                const userUpdated = async () => {
                    await Storage.set({
                        key:'customerBoarded',
                        value: JSON.stringify(value)
                    });
                };
                
                userUpdated().then(() => {
                    resolve();
                }).catch(() => {
                    reject();
                })
            })
        },
        register({dispatch}, payload){
            return new Promise((resolve, reject) => {
                Request().post('register', payload).then((response) => {
                    dispatch('storeUser', response.data);
                    resolve();
                }).catch((error) => {
                    reject(error);
                });
            })
        },
        login({dispatch}, payload) {
            return new Promise((resolve, reject) => {
                Request().post('login', payload).then((response) => {
                    alert(JSON.stringify(response.data));
                    dispatch('storeUser', response.data);
                    resolve();
                }).catch((error) => {
                    reject(error);
                })
            })
        },
        logout({commit}){
            return new Promise((resolve, reject) => {
                const userRemoved = async () => {
                    await Storage.remove({key: 'user'})
                };
    
                userRemoved().then(() => {
                    commit('REMOVE_USER');
                    resolve()
                }).catch(() => {
                    reject();
                });
            })
        },
        storeUser({commit}, user) {
            alert('the next alert is user inside storeUser')
            alert(JSON.stringify(user));
            let userObject = {
                name: user.user.name,
                id: user.user.id,
                email: user.user.email,
                phone: user.user.phone,
                vatRegistration: user.user.vatRegistration,
                token: user.token.split('|')[1]
            }
            const setName = async () => {
                await Storage.set({
                  key: 'user',
                  value: JSON.stringify(userObject),
                });
              };
            setName().then(() => {
                commit('SET_USER', userObject);
            })
        }
    },
    mutations: {
        SET_USER(state, user){
            state.user = user
        },
        REMOVE_USER(state) {
            state.user = ''
        }
    },
    getters: {
        user(state){
            return state.user;
        }
    }
}

export default AuthModule;