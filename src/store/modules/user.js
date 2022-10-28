import { signInWithEmailAndPassword, getAuth, sendEmailVerification,createUserWithEmailAndPassword, onAuthStateChanged,signOut } from "firebase/auth";
import { doc, setDoc, getDoc,updateDoc } from "firebase/firestore";
import { getStorage,ref,uploadBytes,getDownloadURL } from 'firebase/storage'
import { db } from "../../db";

export default {
  namespaced: true,
  state() {
    return {
      data: null,
      auth: {
        isProcessing: false,
        error: ""
      }
    }
  },
  getters:{
    isAuthenticated(state){
      return !!state.data
    }
  },
  actions: {
    async uploadImage(_, { bytes, name, onSuccess}) {
      const storage = getStorage();
      const storageRef = ref(storage, name);

      const uploadResult = await uploadBytes(storageRef, bytes)
      const downloadUrl = await getDownloadURL(uploadResult.ref);
      onSuccess(downloadUrl);
    },
    onAuthChange({dispatch,commit}, callback) {

      commit("setAuthIsProcessing",true)
      onAuthStateChanged(getAuth(), async (user) => {
        if (user) {
          await dispatch('getUserProfile', user);
          commit("setAuthIsProcessing",false)
          callback(user)
        } else {
          console.log("Logged out");
          commit("setAuthIsProcessing",false)
          callback(null)
        }
      })
    },
    async updateProfile({commit,dispatch},{data}){
      const userRef =  doc(db, "users", data.id);
       await updateDoc(userRef,data)
       commit("updateProfile",data)
       dispatch("toast/success","Պրոֆիլը թարմացվել է!",{root:true})

    },
    async getUserProfile({commit}, user) {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      const userProfile = docSnap.data();
      const useWithProfile = {
        id: user.uid,
        email: user.email,
        ...userProfile
      }

      commit("setUser", useWithProfile);
    },
    async register({commit, dispatch}, {email, password, username}) {
      commit("setAuthIsProcessing", true);
      commit("setAuthError", "");

      try {
        const { user } = await createUserWithEmailAndPassword(getAuth(), email, password);
        await dispatch("createUserProfile", {
          id: user.uid,
          username,
          email,
          password,
          avatar: "https://bit.ly/3CvvXtJ",
          biolink: '',
          contacts: '',
          verified:false
        })
      } catch(e) {
        commit("setAuthError", e.message);
        dispatch("toast/error", 'Էլ հասցեն արդեն գրանցված է', {root: true});
      } finally {
        commit("setAuthIsProcessing", false);
      }
    },
    async login({commit,dispatch},{email,password}){
      commit("setAuthIsProcessing", true);
      commit("setAuthError", "");

      try{
        await signInWithEmailAndPassword(getAuth(),email,password)
      } catch(e){
        commit("setAuthError", e.message);
        dispatch("toast/error", 'Սխալ Էլ հասցե կամ գաղտնաբառ', {root: true});
      } finally{
        commit("setAuthIsProcessing",false)
      }
    },
    async logout({commit}){
      try{
        await signOut(getAuth())
        commit("setUser", null )
      }catch(e){
         console.error("cannot logout!")
      }
    },
    async createUserProfile(_, {id, ...profile}) {
      await setDoc(doc(db, "users", id), profile);
    }
  },
  mutations: {
    setAuthIsProcessing(state, isProcessing) {
      state.auth.isProcessing = isProcessing;
    },
    setAuthError(state, error) {
      state.auth.error = error;
    },
    setUser(state, user) {
      state.data = user;
    },
    updateProfile(state,profile){
      state.data = {...state.data,...profile}
    }
  }
}