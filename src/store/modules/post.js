import { db } from "../../db";
import { getDocs, getDoc, query,doc, where, addDoc,collection,Timestamp,orderBy,limit} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import slugify from "slugify";

export default {
    namespaced: true,
    state(){
        return {
        items:[],
        item:{},
        useritems:[],
        queryPosts:[]
        }
    },
    actions:{

       async getUserPosts({commit},uID){
            const userPostQuery = query(collection(db,"posts"),
            where("creator", "==", uID))
            const snapshotUSER = await getDocs(userPostQuery)
            const userposts = snapshotUSER.docs.map(doc =>({id: doc.id, ...doc.data()}))
            commit('setUserPosts',userposts)
        },
        async getPostBySlug({commit}, slug) {
            commit("setPost", {});
            const docQuery = query(
              collection(db, "posts"),
              where("slug", "==", slug)
            );
            const querySnap = await getDocs(docQuery);
      
            const post = querySnap.docs[0].data();

            const userSnap = await getDoc(post.user)
            post.user = userSnap.data()
            commit("setPost", post);
          },

          async  getQuery({commit},val){
            const serachPosts = query(collection(db,"posts"),
            where("type", "==", val)
            )
            const snapshotQuery = await getDocs(serachPosts)

            const queryPosts = snapshotQuery.docs.map(doc =>({id: doc.id, ...doc.data()}))

            commit('setQueryPosts',queryPosts)
        },
        async getPosts({commit},lim){
            
            const postQuery = query(collection(db,"posts"),orderBy('timestamp' , 'desc'),limit(lim))
            const snapshot = await getDocs(postQuery)

            const posts = snapshot.docs.map(doc =>({id: doc.id, ...doc.data()}))
          
            //  latestDoc = snapshot.docs[snapshot.docs.length - 1]
            commit('setPosts',posts)
        },
        async createPost({rootState,dispatch},{data,onSuccess}){
            const auth = getAuth(); 
            const currentuser = auth.currentUser;
            const userRef = doc(db,"users",rootState.user.data.id)
            data.user = userRef
            data.slug = slugify(`${data.title} ${Date.now()}`,{
                lower:true,
                strict:true
            })
             data.createdAt = new Date().toDateString()
             data.timestamp = Timestamp.fromDate(new Date())
             data.creator = currentuser.email
            await addDoc(collection(db,'posts'),data)

            dispatch("toast/success","Գրառումը հաջողությամբ ուղարկվել է ստուգման",{root:true})
            onSuccess()
        }
    },
    mutations:{
        setPosts(state,posts){
            state.items = posts
        },
        setPost(state, post) {
            state.item = post;
          },
          setUserPosts(state,userposts){
            state.useritems = userposts
        },
        setQueryPosts(state,queryPosts){
            state.queryPosts = queryPosts
        },
    }
}