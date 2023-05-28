// firebase 공식 문서에서 복붙
import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider,
  onAuthStateChanged, 
  signOut 
} from "firebase/auth";
import { getDatabase, ref, child, get } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,

};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const database = getDatabase(app);

// 로그인시 팝업 띄우기
provider.setCustomParameters({prompt: 'select_account'});

export function login(){
  signInWithPopup(auth, provider)
  .catch(console.error);
}

export function logout(){
  signOut(auth)
  .catch(console.error);
}


export function onUserStateChange(callback){
  onAuthStateChanged(auth, async (user) => {
    // 1. 사용자가 있는 경우에 (로그인한경우)
    const updatedUser = user ? await adminUser(user) : null;
    callback(updatedUser);
  });
}

async function adminUser(user){
  // 2. 사용자가 어드민 권한을 가지고 있는지 확인
  // 3. {...user, isAdimin: true/false}
  return get(ref(database, 'admins'))
    .then((snapshot) => {
      if(snapshot.exists()){
        const admins = snapshot.val();
        const isAdmin = admins.includes(user.uid);
        return {...user, isAdmin};
      }
      return user;
    });
}

// 오류 발생시
// yarn add @firebase/app 설치