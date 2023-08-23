import { useState, useContext, useEffect } from 'react';
import { Header } from '../Components/Header';
import { Button } from '../Components/Button';
import { DiarystateContext } from '../routes/AppRouter';
import { DiaryList } from '../Components/DiaryList';

export const Home = () => {
  const diaryList = useContext(DiarystateContext);

  const [data, setData] = useState([]);
  const [curDate, setCurDate] = useState(new Date());
  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월 `;

  useEffect(() => {
    const firstDay = new Date(
      curDate.getFullYear(),
      curDate.getMonth(),
      1,
    ).getTime();

    const lastDay = new Date(
      curDate.getFullYear(),
      curDate.getMonth() + 1,
      0,
    ).getTime();

    setData(
      diaryList.filter((item) => firstDay <= item.date && item.date <= lastDay),
    );
  }, [diaryList, curDate]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const increaseMonth = () => {
    setCurDate(
      new Date(
        curDate.getFullYear(),
        curDate.getMonth() + 1,
        curDate.getDate(),
      ),
    );
  };
  const decreseMonth = () => {
    setCurDate(
      new Date(
        curDate.getFullYear(),
        curDate.getMonth() - 1,
        curDate.getDate(),
      ),
    );
  };

  return (
    <>
      <Header
        headText={headText}
        leftChild={<Button text={'<'} onClick={decreseMonth} />}
        rightChild={<Button text={'>'} onClick={increaseMonth} />}
      />
      <DiaryList diaryList={data} />
    </>
  );
};
