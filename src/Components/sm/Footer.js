import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <p className={classes.footerText}>
        본 블로그는 <span className={classes.customBold}>Wix Blog</span>로
        제작되었습니다.
      </p>
      <div className={classes.listBox}>
        <ul className={classes.list}>
          <div className={classes.listTitle}>제품</div>
          <li>웹사이트 템플릿</li>
          <li>웹사이트 만들기</li>
          <li>웹사이트 디자인</li>
          <li>wix 기능</li>
          <li>앱 마켓</li>
          <li>웹 호스팅</li>
          <li>맞춤형 도메인</li>
          <li>웹사이트 접근성</li>
          <li>모바일 앱 빌더</li>
        </ul>
        <ul className={classes.list}>
          <div className={classes.listTitle}>솔루션</div>
          <li>온라인 쇼핑몰 웹사이트</li>
          <li>온라인 예약</li>
          <li>레스토랑 웹사이트</li>
          <li>블로그 웹사이트</li>
          <li>포트폴리오 웹사이트</li>
          <li>Wix Studio</li>
          <li>비즈니스 이메일</li>
          <li>로고 메이커</li>
        </ul>
        <ul className={classes.list}>
          <div className={classes.listTitle}>리소스</div>
          <li>Wix 블로그</li>
          <li>개인 정보 및 보안 허브</li>
        </ul>
        <ul className={classes.list}>
          <div className={classes.listTitle}>지원</div>
          <li>도움말 센터</li>
          <li>전문가 고용하기</li>
          <li>오용 신고</li>
          <li>시스템 상태</li>
        </ul>
        <ul className={classes.list}>
          <div className={classes.listTitle}>기업</div>
          <li>언론 보도 소개</li>
          <li>투자 정보</li>
          <li>Wix 캐피탈</li>
          <li>접근성 표시 정보</li>
          <li>특허 공고</li>
          <li>사이트맵</li>
          <li>채용 정보</li>
        </ul>
        <ul className={classes.wixBox}>
          <img src="/icon/wix.svg" alt="wix" />
          <p>
            Wix 웹사이트 제작 도구는 기업 수준의 인프라와 비즈니스 기능에서부터
            고급 SEO 및 마케팅 도구까지 갖추고 있어 누구나 웹사이트를 제작하여
            온라인에서 성장할 수 있게 해주는 완전한 솔루션을 제공합니다.
          </p>
          <div>
            <div>소개</div>
            <div>문의하기</div>
          </div>
        </ul>
      </div>
      <div className={classes.mobail}>
        <ul className={classes.wixBox2}>
          <img src="/icon/wix.svg" alt="wix" />
          <p>
            Wix 웹사이트 제작 도구는 기업 수준의 인프라와 비즈니스 기능에서부터
            고급 SEO 및 마케팅 도구까지 갖추고 있어 누구나 웹사이트를 제작하여
            온라인에서 성장할 수 있게 해주는 완전한 솔루션을 제공합니다.
          </p>
          <div>
            <div>소개</div>
            <div>문의하기</div>
          </div>
          <div className={classes.iconBox}>
            <div>
              <img src="/icon/facebook.svg" alt="wix" />
            </div>
            <div>
              <img src="/icon/youtube.svg" alt="wix" />
            </div>
            <div>
              <img src="/icon/instagram.svg" alt="wix" />
            </div>
            <div>
              <img src="/icon/tiktok.svg" alt="wix" />
            </div>
            <div>
              <img src="/icon/pinterest.svg" alt="wix" />
            </div>
            <div>
              <img src="/icon/twitter.svg" alt="wix" />
            </div>
            <div>
              <img src="/icon/linkedin.svg" alt="wix" />
            </div>
          </div>
        </ul>
        <div className={classes.listBox2}>
          <ul className={classes.list2}>
            <div className={classes.listTitle2}>제품</div>
            <li>웹사이트 템플릿</li>
            <li>웹사이트 만들기</li>
            <li>웹사이트 디자인</li>
            <li>wix 기능</li>
            <li>앱 마켓</li>
            <li>웹 호스팅</li>
            <li>맞춤형 도메인</li>
            <li>웹사이트 접근성</li>
            <li>모바일 앱 빌더</li>
          </ul>
          <ul className={classes.list2}>
            <div className={classes.listTitle2}>솔루션</div>
            <li>온라인 쇼핑몰 웹사이트</li>
            <li>온라인 예약</li>
            <li>레스토랑 웹사이트</li>
            <li>블로그 웹사이트</li>
            <li>포트폴리오 웹사이트</li>
            <li>Wix Studio</li>
            <li>비즈니스 이메일</li>
            <li>로고 메이커</li>
          </ul>
          <ul className={classes.list2}>
            <div className={classes.listTitle2}>리소스</div>
            <li>Wix 블로그</li>
            <li>개인 정보 및 보안 허브</li>
          </ul>
          <ul className={classes.list2}>
            <div className={classes.listTitle2}>지원</div>
            <li>도움말 센터</li>
            <li>전문가 고용하기</li>
            <li>오용 신고</li>
            <li>시스템 상태</li>
          </ul>
          <ul className={classes.list2}>
            <div className={classes.listTitle2}>기업</div>
            <li>언론 보도 소개</li>
            <li>투자 정보</li>
            <li>Wix 캐피탈</li>
            <li>접근성 표시 정보</li>
            <li>특허 공고</li>
            <li>사이트맵</li>
            <li>채용 정보</li>
          </ul>
        </div>
      </div>
      <div className={classes.footerBottum}>
        <div>
          <div>
            <img src="/icon/facebook.svg" alt="wix" />
          </div>
          <div>
            <img src="/icon/youtube.svg" alt="wix" />
          </div>
          <div>
            <img src="/icon/instagram.svg" alt="wix" />
          </div>
          <div>
            <img src="/icon/tiktok.svg" alt="wix" />
          </div>
          <div>
            <img src="/icon/pinterest.svg" alt="wix" />
          </div>
          <div>
            <img src="/icon/twitter.svg" alt="wix" />
          </div>
          <div>
            <img src="/icon/linkedin.svg" alt="wix" />
          </div>
        </div>

        <div>
          <span>이용약관</span>
          <span>개인정보 처리방침</span>
          <span>© 2006-2024 Wix.com, Inc</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
