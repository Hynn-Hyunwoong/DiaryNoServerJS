import React, { useReducer, useRef } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Edit, Diary, Home, New } from '../pages';

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case 'INIT': {
      return action.data;
    }
    case 'CREATE': {
      newState = [...state, ...action.data];
      break;
    }
    case 'REMOVE': {
      newState = state.filter((item) => item.id !== action.targetId);
      break;
    }
    case 'EDIT': {
      newState = state.map((item) =>
        item.id === action.data.id ? { ...action.data } : item,
      );
    }
    default:
      return state;
  }
};

export const DiarystateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();
const bundleDate = [
  {
    id: 1,
    emotion: 1,
    content: '오늘은 행복했다.1',
    date: 1692768682073,
  },
  {
    id: 2,
    emotion: 2,
    content: '오늘은 행복했다.2',
    date: 1692768682075,
  },
  {
    id: 3,
    emotion: 3,
    content: '오늘은 행복했다.3',
    date: 1692768682076,
  },
  {
    id: 4,
    emotion: 4,
    content: '오늘은 행복했다.4',
    date: 1692768682078,
  },
  {
    id: 5,
    emotion: 5,
    content: '오늘은 행복했다.5',
    date: 1692768682079,
  },
  {
    id: 6,
    emotion: 5,
    content: '오늘은 행복했다.5',
    date: 1892768682079,
  },
];

const AppRouter = () => {
  const [data, dispatch] = useReducer(reducer, [bundleDate]);
  // Dispatch
  const dataId = useRef(0);
  const onCreate = (date, content, emotion) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: dataId.current,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
    dataId.current += 1;
  };
  // Remove
  const onRemove = (targetId) => {
    dispatch({ type: 'REMOVE', targetId });
  };

  //EDIT
  const onEdit = (targetId, date, content, emotion) => {
    dispatch({
      type: 'EDIT',
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
  };

  return (
    <>
      <DiarystateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onRemove, onEdit }}>
          <BrowserRouter>
            <div className="App">
              <Routes>
                <Route
                  path="/"
                  element={<div className="App">Hello</div>}
                ></Route>
                <Route path="/new" element={<New />}></Route>
                <Route path="/diary/:id" element={<Diary />}></Route>
                <Route path="/diary" element={<Diary />}></Route>
                <Route path="/edit" element={<Edit />}></Route>
                <Route path="/home" element={<Home />}></Route>
              </Routes>
            </div>
          </BrowserRouter>
        </DiaryDispatchContext.Provider>
      </DiarystateContext.Provider>
    </>
  );
};

export default AppRouter;
