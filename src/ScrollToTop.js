import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  // useLocation() : 현재 라우트의 위치 객체 반환
  const { pathname } = useLocation();

  // pathname이 변경될때마다 실행
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //     left: 0,
  //     behavior: "smooth",
  //   });
  // }, [pathname]);

  // 단순히 부수 효과를 수행하기때문에
  // jsx를 반환하지 않음
  return null;
};

export default ScrollToTop;
