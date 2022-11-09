/**
 * 날짜 형식 변경 함수
 * ex) Sun Oct 23 2022 15:46:22 GMT+0900 (한국 표준시) => 2022-10-23
 * @param {*} dateValue
 * @returns yyyy-MM-dd
 */
export function getDateTime(dateValue) {
  //----------------------------------------날짜 데이터 가공---------------------------------------
  const dateTime = `${dateValue.getFullYear()}-${(
    "0" +
    (dateValue.getMonth() + 1)
  ).slice(-2)}-${("0" + dateValue.getDate()).slice(-2)}`;
  //----------------------------------------------------------------------------------------------
  return dateTime;
}
