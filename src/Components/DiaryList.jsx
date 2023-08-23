export const DiaryList = ({ diaryList }) => {
  return (
    <>
      <div>
        {diaryList.map((item) => (
          <div key={item.id}>{item.content}</div>
        ))}
      </div>
    </>
  );
};
