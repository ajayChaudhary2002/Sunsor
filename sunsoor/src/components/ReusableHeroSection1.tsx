import React from 'react'
import style from '../styles/ReusableHeroSection1.module.css';
import rotatedArrow from '../assetss/XMLID_1_.png'
import puri from '../assetss/puriImage.png'
import samose from '../assetss/samoseImage.png'
import chaat from '../assetss/chaatImage.png'
import check from '../assetss/Vector (1).png'
import heroProduct2 from '../assetss/image 16.png'
import bgImg from '../assetss/bgImgReusableComponent.png'
import lady from '../assetss/girlChef.png'
const ReusableHeroSection1 = () => {
  return (
    <div className={style.section4Container}>
        {/* FOOD PART */}
        <div className={style.section4Container_foodContainerDiv}>
            <div className={style.section4Container_leftContainer}>
                <p className={style.section4Container_leftContainer_para}>Recipes</p>
                <div className={style.section4Container_leftContainer_imageDiv}>
                <img src={rotatedArrow}/>
                </div>
                <div className={style.section4Container_leftContainer_foodDiv}>
                    <img src={samose} alt=''/>
                    <p  className={style.section4Container_leftContainer_foodDiv_para1}>Recipes  |  Stories  |  Video</p>
                    <p  className={style.section4Container_leftContainer_foodDiv_para2}>Samosa Made from Sunsor 
                    Atta</p>
                    <p  className={style.section4Container_leftContainer_foodDiv_para3}>view more →</p>
                </div>

            </div>


            <div className={style.section4Container_rightContainer}>
                <div className={style.section4Container_rightContainer_leftPart}>
                    <div className={style.section1Container_rightContainer_topDiv}>
                        <p className={style.section1Container_rightContainer_topDiv_para}>Recipes  |  Stories </p>
                        <p className={style.section1Container_rightContainer_topDiv_para2}>Delicious Dal Puri from Sunsor atta
                        and Oil</p>
                        <p className={style.section1Container_rightContainer_topDiv_para3}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        <p className={style.section1Container_rightContainer_topDiv_para4}>View More →</p>
                    </div>

                    <div className={style.section1Container_rightContainer_bottomDiv}>
                    <img src={chaat} alt=''/>
                    <p className={style.section4Container_leftContainer_foodDiv_para1}>Recipes  |  Stories  |  Video</p>
                    <p className={style.section4Container_leftContainer_foodDiv_para2}>Super Delicious Kachori from 
                    Sunsor atta and Oil</p>
                    <p className={style.section4Container_leftContainer_foodDiv_para3}>view more →</p>
                    </div>
                </div>
                <div className={style.section4Container_rightContainer_rightPart}>
                    <img src={puri} alt=''/>
                    <p className={style.section4Container_rightContainer_rightPart_text}>View All →</p>
                </div>
            </div>
        </div>
        {/* GIRL PART */}
        <div>
        <div className={style.heroSectionRedPartFooterDiv}>
        <div className={style.heroSectionRedPartFooter}>
        <p className={style.heroSectionRedPartFooter_heading}>What makes us No.1?</p>
        <div className={style.heroSectionRedPartFooter_paragraphs}>

        <div className={style.heroSectionRedPartFooter_para1}>
          <div  className={style.heroSectionRedPartFooter_para1_icons}>
            <img src={check} alt=''/>
          </div>
          <p>Our superior-quality,</p>
        </div>
        <div className={style.heroSectionRedPartFooter_para1}>
          <div  className={style.heroSectionRedPartFooter_para1_icons}> <img src={check} alt=''/></div>
          <p>
contact-less packaging, </p>
        </div>
        <div className={style.heroSectionRedPartFooter_para1}>
          <div  className={style.heroSectionRedPartFooter_para1_icons}> <img src={check} alt=''/></div>
          <p>
the trust of millions of mothers.</p>
        </div>
        </div>

        <img src={lady} alt='' className={style.heroSectionRedPartFooter_oilImage}/>
      </div>
      </div>
        </div>
    </div>
  )
}

export default ReusableHeroSection1;