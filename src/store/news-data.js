import { configureStore, createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import sessionStorage from "redux-persist/es/storage/session";

// 초기값
const initialState = {
  // news api의 값을 여러개 가져오기 때문에 빈배열로 설정
  newsState: [],
};

// state 생성
const newsSlice = createSlice({
  // state의 이름
  name: "news",
  // 초기값
  initialState,
  // 데이터 변경 함수
  reducers: {
    // 값을 변경하고 싶을때 setNews() 함수 호출
    setNews: (state, action) => {
      // action : 액션 타입
      // payload : 액션과 함께 전달되는 데이터
      state.newsState = action.payload;
    },
  },
});

// 액션을 내보냄
// 각 컴포넌트에서 바로 dispatch해서 쓸수있음
export const { setNews } = newsSlice.actions;

// persist 설정
const persistConfig = {
  key: "root",
  storage: sessionStorage,
};

// persist reducer 생성
const persistedReducer = persistReducer(persistConfig, newsSlice.reducer);

const store = configureStore({
  // reducer : 데이터를 바꿔주는 함수
  // -> 이전 state값을 받아서 새로운 state를 보내줌
  reducer: {
    // news라는 이름의 state를 바꿔주겠다
    news: persistedReducer,
  },
});

// persistor 생성
const persistor = persistStore(store);

export { store, persistor };
