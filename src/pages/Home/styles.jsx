import styled from "styled-components";
export const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  .ant-menu-horizontal{
  justify-content: space-between;
}
 @media (min-width: 576px) {
    max-width: 576px;
  }

  @media (min-width: 768px) {
    max-width: 768px;
  }

  @media (min-width: 992px) {
    max-width: 992px;
  }

  @media (min-width: 1200px) {
    max-width: 1200px;
  }
`
export const Button = styled.div`
  background-color: #2C72F1;
  padding: 15px;
  color:white;

 
`
export const Banner = styled.div`
position: relative !important;
display: block;
color: #002873;
max-height: 721px;
    overflow: hidden;
 .bannerBgContainer{
     position: absolute;
    width: 100%;
    height: 100%;
    background: #002873;
    z-index: 3;
    -webkit-clip-path: polygon(0 0, 60% 0, 37% 100%, 0% 100%);
    clip-path: polygon(0 0, 48% 0, 37% 100%, 0% 100%);
  }
  .bannerContainer{
        display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding-left: 10%;
  }
  .detail-box {
    width: 45%;
    z-index: 4;
    color: #ffffff;
}
.img-box {
    width: 73%;
    margin-left: -17%;
    position: relative;
    z-index: 2;
    text-align: right;
    background-color: #1f7300;
}
  @media (min-width: 320px) {
     .bannerContainer{
  padding-left: 2%;
}
  }

   @media (min-width: 360px) {
    .bannerContainer{
  padding-left: 2%;
}
 .detail-box {
    width: 35%;
}
.img-box {
    width: 65%;
    margin-left: 0;
}
  }
@media (min-width: 576px) {
    .detail-box {
    width: 45%;
}
.img-box {
    width: 73%;
    margin-left: -17%;
}
.bannerContainer{
  padding-left: 2%;
}

  }

  @media (min-width: 768px) {
        .detail-box {
    width: 35%;
}
.img-box {
  width: 70%;
    margin-left: 0;
}
  }

  @media (min-width: 992px) {
        .detail-box {
    width: 35%;
}
.img-box {
    width: 80%;
    margin-left: 0;
}
     .bannerContainer{
  padding-left: 10%;
}
  }

  @media (min-width: 1200px) {
        .detail-box {
    width: 30%;
}
.img-box {
    width: 73%;
    margin-left: 0%;
}
     .bannerContainer{
  padding-left: 10%;
}
  }
`
export const TitleBanner = styled.div`
 font-size: 45px;
  @media (min-width: 320px) {
     font-size: 18px;
  }

   @media (min-width: 360px) {
     font-size: 20px;
  }

 @media (min-width: 576px) {
     font-size: 28px;
  }

  @media (min-width: 768px) {
     font-size: 35px;
  }

  @media (min-width: 992px) {
     font-size: 45px;
  }

  @media (min-width: 1200px) {
     font-size: 45px;
  }
 
`