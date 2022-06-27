```javascript
import { db } from "../../firebase";

//순서대로 원하는db선택하기(콜렉션),수정할 document가져오기, 하나 가져오기, 여러개 가져오기, 추가하기, 수정하기  firebase
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { async } from "@firebase/util";
import { memo } from "react";

// 초기 기본 값
const initialState = {
  memo: [],
  loading: false,
  error: null,
};

// action type
const ADD_MEMO = "memos/ADD_MEMO";
const CHANGE_MEMO = "memos/CHANGE_MEMO";
const DELETE_MEMO = "memos/DELETE_MEMO";
const UPDATE_MEMO = "memos/UPDATE_MEMO";

const UPDATE_CHECK = "memos/UPDATE_CHECK";

// 서버에서 요청
const GET_MEMOS_REQUEST = "memos/GET_MEMOS_REQUEST";
const GET_MEMOS_SUCCESS = "memos/GET_MEMOS_SUCCESS";
const GET_MEMOS_ERROR = "memos/GET_MEMOS_ERROR";

// clean up
// const CLEAN_MEMOS = "memos/CLEAN_MEMOS";

// action creator 액션
export const addMemo = (payload) => {
  return { type: ADD_MEMO, payload };
};
export const deleteMemo = (payload) => {
  return { type: DELETE_MEMO, payload };
};
export const updateMemo = (payload) => {
  return { type: UPDATE_MEMO, payload };
};
export const updateCheck = (payload) => {
  return { type: UPDATE_CHECK, payload };
};
// // action creator clean
// export const cleanMemo = () => {
//   return { type: CLEAN_MEMOS };
// };
// action creator 서버
const getMemoRequest = (payload) => {
  return { type: GET_MEMOS_REQUEST, payload };
};

const getMemosSuccess = (payload) => {
  return { type: GET_MEMOS_SUCCESS, payload };
};

const getMemoError = (payload) => {
  return { type: GET_MEMOS_ERROR, payload };
};

// thunk 함수 / 미들 웨어

export const __getMemos = () => {
  return async function (dispatch) {
    // 요청 시작과 함께 loading true로 변경
    dispatch(getMemoRequest(true));
    try {
      // 성공시 데이터 store 저장 액션
      const memo_data = await getDocs(collection(db, "memo"));
      const memo_list = [];
      memo_data.forEach((doc) => {
        memo_list.push({ id: doc.id, ...doc.data() });
      });
      dispatch(getMemosSuccess(memo_list));
    } catch (error) {
      // 에러코드 저장 액션
      dispatch(getMemoError(error));
    } finally {
      // 끝나고 load false로 변경
      dispatch(getMemoRequest(false));
    }
  };
};
// 메모 추가하기
export const __addMemos = (payload) => async (dispatch) => {
  dispatch(getMemoRequest(true));
  try {
    // 성공시 데이터 db에 추가 후 액션 호출
    const add_memo_data = await addDoc(collection(db, "memo"), payload);
    dispatch(addMemo({ id: add_memo_data.id, ...payload }));
  } catch (error) {
    // 에러코드 저장 액션
    dispatch(getMemoError(error));
  } finally {
    // 끝나고 load false로 변경
    dispatch(getMemoRequest(false));
  }
};
// 메모 수정하기
export const __updateMemo = (payload, index) => async (dispatch, getState) => {
  const docRef = doc(db, "memo", payload.id);
  await updateDoc(docRef, {
    comment: payload.comment,
    word: payload.word,
    ex: payload.ex,
  });
  dispatch(updateMemo({ payload, index }));
};
//메모 완료상태 변경
export const __changeCheck = (payload) => async (dispatch, getState) => {
  const docRef = doc(db, "memo", payload.index_id);
  // db값 변경
  if (payload.check) {
    await updateDoc(docRef, { check: false });
  } else {
    await updateDoc(docRef, { check: true });
  }
  const memo_index = getState().memos.memo.findIndex((v) => {
    return v.id === payload.index_id;
  });
  // 해당 데이터 인덱스 값 전달
  dispatch(updateCheck(memo_index));
};

// 메모 삭제하기
export const __deleteMemo = (payload) => async (dispatch, getState) => {
  const docRef = doc(db, "memo", payload);
  await deleteDoc(docRef);
  const memo_index = getState().memos.memo.findIndex((v) => {
    return v.id === payload;
  });
  dispatch(deleteMemo(memo_index));
};

//reducer
const memos = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_MEMOS_REQUEST:
      return { ...state, loading: action.payload };

    case GET_MEMOS_SUCCESS:
      return { ...state, memo: [...action.payload] };

    case ADD_MEMO:
      return { ...state, memo: [...state.memo, action.payload] };
    case UPDATE_MEMO:
      const newChangeMemo = state.memo.map((v, l) => {
        return l === Number(action.payload.index) ? action.payload.payload : v;
      });
      return { ...state, memo: newChangeMemo };

    case UPDATE_CHECK:
      const newCheckMemo = state.memo.map((v, l) => {
        if (l === action.payload) {
          v.check ? (v.check = false) : (v.check = true);
          return v;
        } else {
          return v;
        }
      });
      return { ...state, memo: newCheckMemo };

    case DELETE_MEMO:
      const newDeletedMemo = state.memo.filter((v, l) => {
        return l === action.payload ? false : true;
      });
      return { ...state, memo: [...newDeletedMemo] };
    default:
      return state;
  }
};
export default memos;
```
