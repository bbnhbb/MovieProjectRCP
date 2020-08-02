import * as app from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";

const config = {
  apiKey: "AIzaSyDRk0PKstKF2IQlp-946-JH1O6E5riLb3w",
  authDomain: "movie-proj.firebaseapp.com",
  databaseURL: "https://movie-proj.firebaseio.com",
  projectId: "movie-proj",
  storageBucket: "movie-proj.appspot.com",
  messagingSenderId: "585745501262",
  appId: "1:585745501262:web:ef39343d1eab4bded0871f",
  measurementId: "G-GQEX4EN6WK",
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.firestore();
  }

  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.auth.signOut();
  }

  async register(name, email, password) {
    await this.auth.createUserWithEmailAndPassword(email, password);
    return this.auth.currentUser.updateProfile({
      displayName: name,
    });
  }

  getCurrentUsername() {
    return this.auth.currentUser && this.auth.currentUser.displayName;
  }
}

export default new Firebase();
