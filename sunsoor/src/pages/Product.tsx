import React from "react";
import style from "../styles/Product.module.css";
import HeaderForProduct from "../components/HeaderForProduct";
import { FaAngleLeft } from "react-icons/fa6";
import { useState } from "react";
import star from "../assetss/star2.png";
import listView from "../assetss/List View.png";
import gridView from "../assetss/Grid View.png";
import heroProduct1 from "../assetss/image 15.png";
import heroProduct4 from "../assetss/image 18.png";
import heroProduct5 from "../assetss/image 19.png";
import heroProduct6 from "../assetss/image 20.png";
import heroProduct7 from "../assetss/image 16.png";
import like from "../assetss/heart.png";
import star2 from "../assetss/star2.png";
import style2 from "../styles/HomePageHeroSection.module.css";
import RelatedPages from "../components/RelatedPages";
import Footer from "../components/Footer";
import selectedList from "../assetss/RedListView.png";
import notSelectedGrid from "../assetss/WhiteGrid.png";
import downKeyPopularity from "../assetss/downKeyPopularity.png";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Login from "../components/PopUps/Login";
import CreateAccount from "../components/PopUps/CreateAccount";
import { FaBars } from 'react-icons/fa';
import style3 from '../styles/OurProduct.module.css'
const Product = () => {
  const [value, setValue] = useState<number>(100);
  const [currentView, setCurrentView] = useState<string>("gridView");
  const toggleTextColor = (e: any) => {
    const paraColor = e.target.nextElementSibling;
    if (e.target.checked) {
      paraColor.style.color = "#CE2225"; // Change text color when checked
    } else {
      paraColor.style.color = ""; // Reset text color when unchecked
    }
  };

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };

  const [loginPopup, setLoginPopup] = useState(false);
  const [createPopup, setCreatePopup] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const sectionObject1 = [
    {
      imageContent: heroProduct1,
      off: "30% off",
      productName: "Sunsor Chakki Atta",
      price: "₹248.00",
      oldPrice: "₹430.00",
    },
    {
      imageContent: heroProduct4,
      off: "50% off",
      productName: "Natural Original Maida",
      price: "₹342.00",
      oldPrice: "₹602.00",
    },
    {
      imageContent: heroProduct5,
      off: "25% off",
      productName: "Natural Original  Suji",
      price: "₹418.00",
      oldPrice: "₹602.00",
    },
    {
      imageContent: heroProduct6,
      off: "10% off",
      productName: "Natural Original  Wheat Bran ",
      price: "₹228.00",
      oldPrice: "₹430.00",
    },
    {
      imageContent: heroProduct7,
      off: "30% off",
      productName: "Sunsor Original Oil",
      price: "₹124.00",
      oldPrice: "₹220.00",
    },
    {
      imageContent: heroProduct1,
      off: "30% off",
      productName: "Sunsor Chakki Atta",
      price: "₹248.00",
      oldPrice: "₹430.00",
    },
    {
      imageContent: heroProduct5,
      off: "25% off",
      productName: "Natural Original  Suji",
      price: "₹418.00",
      oldPrice: "₹602.00",
    },
    {
      imageContent: heroProduct6,
      off: "10% off",
      productName: "Natural Original  Wheat Bran ",
      price: "₹228.00",
      oldPrice: "₹430.00",
    },
  ];
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const location = useLocation();
  const [viewportWidth, setViewportWidth] = useState<number>(window.innerWidth);

  const TABLET_WIDTH = 768;
  // Function to handle resize events and update the state
  const handleResize = () => {
    setViewportWidth(window.innerWidth);
  };

  // Set up the event listener for window resize
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const [isMobileView, setIsMobileView] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState("All");
  
    // Check screen width when the component mounts and on resize
    useEffect(() => {
      const checkScreenWidth = () => {
        setIsMobileView(window.innerWidth <= 425); // Mobile view logic
      };
  
      checkScreenWidth(); // Check initial screen width
      window.addEventListener("resize", checkScreenWidth); // Re-check on resize
      return () => {
        window.removeEventListener("resize", checkScreenWidth); // Cleanup on unmount
      };
    }, []);
  const isTablet = viewportWidth <= TABLET_WIDTH;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div style={{ overflow: "hidden" }}>
      {loginPopup && (
        <Login
          setLoginPopup={setLoginPopup}
          setCreatePopup={setCreatePopup}
          setShowProfile={setShowProfile}
        />
      )}
      {createPopup && (
        <CreateAccount
          setCreatePopup={setCreatePopup}
          setLoginPopup={setLoginPopup}
          setShowProfile={setShowProfile}
        />
      )}
      <HeaderForProduct
        setLoginPopup={setLoginPopup}
        setCreatePopup={setCreatePopup}
        showProfile={showProfile}
      />

      {!isMobileView ? <div className={style.ourProduct_container_ourProductSection_allItems}>
        <p
          className={style.ourProduct_container_ourProductSection_allItems_item}
        >
          All
        </p>
        <p
          className={style.ourProduct_container_ourProductSection_allItems_item}
          style={{ backgroundColor: "#CE2225", color: "white" }}
        >
          Atta <FaAngleLeft style={{ transform: "rotate(270deg)" }} />
        </p>
        <p
          className={style.ourProduct_container_ourProductSection_allItems_item}
        >
          Maida <FaAngleLeft style={{ transform: "rotate(270deg)" }} />
        </p>
        <p
          className={style.ourProduct_container_ourProductSection_allItems_item}
        >
          Mustard Oil <FaAngleLeft style={{ transform: "rotate(270deg)" }} />
        </p>
        <p
          className={style.ourProduct_container_ourProductSection_allItems_item}
        >
          Suji <FaAngleLeft style={{ transform: "rotate(270deg)" }} />
        </p>
        <p
          className={style.ourProduct_container_ourProductSection_allItems_item}
        >
          Rice <FaAngleLeft style={{ transform: "rotate(270deg)" }} />
        </p>
        <p
          className={style.ourProduct_container_ourProductSection_allItems_item}
        >
          Wheat Bran <FaAngleLeft style={{ transform: "rotate(270deg)" }} />
        </p>
      </div>: 
      (
        <div className={style3.ourProduct_mobileView_allItems}>
          <p
            className={style3.ourProduct_container_ourProductSection_allItems_item}
            style={{backgroundColor:"#ce2225",color:"#fafafa"}}
            onClick={() => {
              setIsDropdownOpen((prev) => !prev);
            }}
          >
            {selectedItem} <FaAngleLeft style={{ transform: isDropdownOpen ? "rotate(90deg)" : "rotate(270deg)", transition: "all 300ms" }} />
          </p>
      
          {isDropdownOpen && (
            <div className={style3.ourProduct_mobileView_allItems_dropDown}>
              <p
                className={`${style3.ourProduct_mobileView_allItems_dropDown_item} ${style3.ourProduct_mobileView_allItems_dropDown_item1}`}
                onClick={() => { setSelectedItem('All'); setIsDropdownOpen(false); }}
              >
                All
              </p>
              <p
                className={style3.ourProduct_mobileView_allItems_dropDown_item}
                onClick={() => { setSelectedItem('Atta'); setIsDropdownOpen(false); }}
              >
                Atta
              </p>
              <p
                className={style3.ourProduct_mobileView_allItems_dropDown_item}
                onClick={() => { setSelectedItem('Maida'); setIsDropdownOpen(false); }}
              >
                Maida
              </p>
              <p
                className={style3.ourProduct_mobileView_allItems_dropDown_item}
                onClick={() => { setSelectedItem('Mustard Oil'); setIsDropdownOpen(false); }}
              >
                Mustard Oil
              </p>
              <p
                className={style3.ourProduct_mobileView_allItems_dropDown_item}
                onClick={() => { setSelectedItem('Suji'); setIsDropdownOpen(false); }}
              >
                Suji
              </p>
              <p
                className={style3.ourProduct_mobileView_allItems_dropDown_item}
                onClick={() => { setSelectedItem('Rice'); setIsDropdownOpen(false); }}
              >
                Rice
              </p>
              <p
                className={`${style3.ourProduct_mobileView_allItems_dropDown_item} ${style3.ourProduct_mobileView_allItems_dropDown_itemLast}`}
                onClick={() => { setSelectedItem('Wheat Bran'); setIsDropdownOpen(false); }}
              >
                Wheat Bran
              </p>
            </div>
          )}
        </div>
      )
      
      }

      {/* MAIN CONTENT PART */}
      <div className={style.ProductPageMainDiv}>
        {/* LEFT PART */}
        <div className={style.ProductPageMainDiv_leftPart}>
          {/* DIV1 */}
          <div className={style.ProductPageMainDiv_leftPart_div1}>
            <p className={style.ProductPageMainDiv_leftPart_div1_para1}>
              Our Product
            </p>
            <div className={style.ProductPageMainDiv_leftPart_div1_content}>
              <p className={style.ProductPageMainDiv_leftPart_div1_para}>
                Aata <span>{"(25)"}</span>
              </p>
              <p className={style.ProductPageMainDiv_leftPart_div1_para}>
                Mustered Oil
                <span>{" (125)"}</span>
              </p>
              <p className={style.ProductPageMainDiv_leftPart_div1_para}>
                Rice <span>{"(150)"}</span>
              </p>
              <p className={style.ProductPageMainDiv_leftPart_div1_para}>
                Maida <span>{"(75)"}</span>
              </p>
              <p className={style.ProductPageMainDiv_leftPart_div1_para}>
                Suji <span>{"(75)"}</span>
              </p>
              <p className={style.ProductPageMainDiv_leftPart_div1_para}>
                Wheat Bran <span>{"(45)"}</span>
              </p>
            </div>
          </div>

          {/* FOR LINE */}
          <div className={style.ProductPageMainDiv_leftPart_line}></div>
          {/* DIV 2 */}
          <div className={style.ProductPageMainDiv_leftPart_Div2}>
            <div
              className={style.ProductPageMainDiv_leftPart_Div2_filterTextDiv}
            >
              <p
                className={
                  style.ProductPageMainDiv_leftPart_Div2_filterTextDiv_para
                }
              >
                Filter by Price
              </p>
              <FaAngleLeft style={{ transform: "rotate(270deg)" }} />
            </div>
            <div className={style.ProductPageMainDiv_leftPart_Div2_filter}>
              <input
                type="range"
                min={0}
                max={2999}
                step={1}
                value={value | 100}
                onChange={handleSliderChange}
                style={{ width: "100%" }}
                className={style.ProductPageMainDiv_leftPart_Div2_filter_input}
              />
            </div>
            <p className={style.ProductPageMainDiv_leftPart_Div2_filter_text}>
              <span
                className={
                  style.ProductPageMainDiv_leftPart_Div2_filter_textPrice
                }
              >
                Price:
              </span>{" "}
              Rs. {value} - Rs. 2999
            </p>
          </div>

          <div className={style.ProductPageMainDiv_leftPart_line}></div>

          {/* DIV 3 */}
          <div className={style.ProductPageMainDiv_leftPart_Div3}>
            <div
              className={style.ProductPageMainDiv_leftPart_Div2_filterTextDiv}
            >
              <p
                className={
                  style.ProductPageMainDiv_leftPart_Div2_filterTextDiv_para
                }
              >
                Filter by Location
              </p>
              <FaAngleLeft style={{ transform: "rotate(270deg)" }} />
            </div>
            <div
              className={
                style.ProductPageMainDiv_leftPart_Div3_filterTextDiv_content
              }
            >
              <div
                className={
                  style.ProductPageMainDiv_leftPart_Div3_filterTextDiv_content_div
                }
              >
                <input type="checkbox" onChange={(e) => toggleTextColor(e)} />
                <p>Jakarta</p>
              </div>
              <div
                className={
                  style.ProductPageMainDiv_leftPart_Div3_filterTextDiv_content_div
                }
              >
                <input type="checkbox" onChange={(e) => toggleTextColor(e)} />
                <p>Yogyakarta</p>
              </div>
              <div
                className={
                  style.ProductPageMainDiv_leftPart_Div3_filterTextDiv_content_div
                }
              >
                <input type="checkbox" onChange={(e) => toggleTextColor(e)} />
                <p>Bandung</p>
              </div>
              <div
                className={
                  style.ProductPageMainDiv_leftPart_Div3_filterTextDiv_content_div
                }
              >
                <input type="checkbox" onChange={(e) => toggleTextColor(e)} />
                <p>Semarang</p>
              </div>
              <div
                className={
                  style.ProductPageMainDiv_leftPart_Div3_filterTextDiv_content_div
                }
              >
                <input type="checkbox" onChange={(e) => toggleTextColor(e)} />
                <p>Surabaya</p>
              </div>
            </div>
          </div>

          <div className={style.ProductPageMainDiv_leftPart_line}></div>

          {/* DIV 4 */}
          <div className={style.ProductPageMainDiv_leftPart_Div4}>
            <div
              className={style.ProductPageMainDiv_leftPart_Div2_filterTextDiv}
            >
              <p
                className={
                  style.ProductPageMainDiv_leftPart_Div2_filterTextDiv_para
                }
              >
                Filter by Rating
              </p>
              <FaAngleLeft style={{ transform: "rotate(270deg)" }} />
            </div>
            <div
              className={
                style.ProductPageMainDiv_leftPart_Div4_filterTextDiv_content
              }
            >
              <div
                className={
                  style.ProductPageMainDiv_leftPart_Div3_filterTextDiv_content_div
                }
              >
                <input type="checkbox" />
                <img src={star} alt="star" />
              </div>
              <div
                className={
                  style.ProductPageMainDiv_leftPart_Div3_filterTextDiv_content_div
                }
              >
                <input type="checkbox" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
              </div>
              <div
                className={
                  style.ProductPageMainDiv_leftPart_Div3_filterTextDiv_content_div
                }
              >
                <input type="checkbox" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
              </div>
              <div
                className={
                  style.ProductPageMainDiv_leftPart_Div3_filterTextDiv_content_div
                }
              >
                <input type="checkbox" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
              </div>
              <div
                className={
                  style.ProductPageMainDiv_leftPart_Div3_filterTextDiv_content_div
                }
              >
                <input type="checkbox" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
              </div>
            </div>
          </div>

          <div className={style.ProductPageMainDiv_leftPart_line}></div>

          {/* LAST DIV */}
          <div className={style.ProductPageMainDiv_leftPart_Div5}>
            <div className={style.ProductPageMainDiv_leftPart_div5Btn}>
              Filter
            </div>
            <p className={style.ProductPageMainDiv_leftPart_Div5Text}>
              Reset Filter
            </p>
          </div>
        </div>

        {/* RIGHT PART */}
        <div className={style.ProductPageMainDiv_RightPart}>
          {/* HEADER */}
          <div className={style.ProductPageMainDiv_RightPart_Header}>
            <div className={style.ProductPageMainDiv_RightPart_Header_left}>
              <p
                className={style.ProductPageMainDiv_RightPart_Header_left_text}
              >
                Sort by
              </p>
              <div
                className={
                  style.ProductPageMainDiv_RightPart_Header_left_dropDown
                }
              >
                Popularity <img src={downKeyPopularity} alt="" />
              </div>
            </div>
            <div className={style.ProductPageMainDiv_RightPart_Header_right}>
              <p
                className={style.ProductPageMainDiv_RightPart_Header_right_text}
              >
                Showing 1 - 16 of 98 results
              </p>
              <div
                className={
                  style.ProductPageMainDiv_RightPart_Header_right_views
                }
              >
                <img
                  src={currentView === "listView" ? selectedList : listView}
                  alt=""
                  onClick={() => setCurrentView("listView")}
                />
                <img
                  src={currentView === "gridView" ? gridView : notSelectedGrid}
                  alt=""
                  onClick={() => setCurrentView("gridView")}
                />
              </div>
            </div>
          </div>

          {currentView === "gridView" ? (
            <div className={style.ProductPageMainDiv_RightPart_ITEMS}>
              {sectionObject1.map((obj, index) => {
                return (
                  <div
                    key={index}
                    className={style2.heroSectionBestSeller_contentBox}
                    onMouseEnter={() => setIsHovered(index)}
                    onMouseLeave={() => setIsHovered(null)}
                  >
                    <div
                      className={style2.heroSectionBestSeller_mainContent}
                      style={{
                        backgroundColor: isHovered === index ? "#F8EAE4" : "",
                        maxHeight: "325px",
                      }}
                    >
                      <div
                        className={
                          style2.heroSectionBestSeller_mainContent_header
                        }
                      >
                        <div
                          className={
                            style2.heroSectionBestSeller_mainContent_header_stock
                          }
                          style={{ backgroundColor: "white" }}
                        >
                          In Stock
                        </div>
                        <div
                          className={
                            style2.heroSectionBestSeller_mainContent_header_Like
                          }
                          style={{ backgroundColor: "white" }}
                        >
                          <img src={like} alt="" />
                        </div>
                      </div>

                      <img src={obj.imageContent} alt={obj.productName} />

                      <div
                        className={
                          style2.heroSectionBestSeller_mainContent_footer
                        }
                      >
                        <p
                          className={
                            style2.heroSectionBestSeller_mainContent_footer_para
                          }
                        >
                          {obj.off}
                        </p>
                        {isHovered === index && (
                          <div
                            className={
                              style2.heroSectionBestSeller_mainContent_AddToCart
                            }
                          >
                            Add to Cart
                          </div>
                        )}
                      </div>
                    </div>

                    <div className={style2.heroSectionBestSeller_restContent}>
                      <p
                        className={
                          style2.heroSectionBestSeller_restContent_productName
                        }
                      >
                        {obj.productName}
                      </p>
                      <p
                        className={
                          style2.heroSectionBestSeller_restContent_inStock
                        }
                      >
                        IN STOCK
                      </p>

                      <div
                        className={
                          style2.heroSectionBestSeller_restContent_AmountDetails
                        }
                      >
                        <div
                          className={
                            style2.heroSectionBestSeller_restContent_AmountDiv
                          }
                        >
                          <p
                            className={
                              style2.heroSectionBestSeller_restContent_currentAmount
                            }
                          >
                            {obj.price}
                          </p>
                          <p
                            className={
                              style2.heroSectionBestSeller_restContent_oldAmount
                            }
                          >
                            {obj.oldPrice}
                          </p>
                        </div>

                        <div
                          className={
                            style2.heroSectionBestSeller_restContent_ratingsDiv
                          }
                        >
                          <img src={star2} alt="star" />
                          <p
                            className={
                              style2.heroSectionBestSeller_restContent_ratings
                            }
                          >
                            4.5 (23 reviews)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className={style.ProductPageMainDiv_RightPart_ITEMS_LIST}>
              {sectionObject1.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={
                      style.ProductPageMainDiv_RightPart_ITEMS_listView
                    }
                    onMouseEnter={() => setIsHovered(index)}
                    onMouseLeave={() => setIsHovered(null)}
                    style={{
                      backgroundColor: isHovered === index ? "#F8EAE4" : "",
                    }}
                  >
                    <div
                      className={
                        style.ProductPageMainDiv_RightPart_ITEMS_listView_leftPart
                      }
                    >
                      <div
                        className={
                          style.ProductPageMainDiv_RightPart_ITEMS_listView_leftPart_instock
                        }
                      >
                        In Stock{" "}
                      </div>
                      <img
                        src={item.imageContent}
                        alt=""
                        style={{ alignSelf: "center" }}
                      />
                      <p
                        className={
                          style.ProductPageMainDiv_RightPart_ITEMS_listView_leftPart_Off
                        }
                      >
                        {item.off}
                      </p>
                    </div>
                    <div
                      className={
                        style.ProductPageMainDiv_RightPart_ITEMS_listView_rightPart
                      }
                    >
                      <div
                        className={
                          style.ProductPageMainDiv_RightPart_ITEMS_listView_rightPart_breaker
                        }
                      >
                        {" "}
                      </div>
                      <div
                        className={
                          style.ProductPageMainDiv_RightPart_ITEMS_listView_rightPart_Content
                        }
                      >
                        <div
                          className={
                            style.ProductPageMainDiv_RightPart_ITEMS_listView_rightPart_Content_header
                          }
                        >
                          <p
                            className={
                              style.ProductPageMainDiv_RightPart_ITEMS_listView_rightPart_Content_name
                            }
                          >
                            {item.productName}
                          </p>
                          <div
                            className={
                              style.ProductPageMainDiv_RightPart_ITEMS_listView_rightPart_Content_like
                            }
                          >
                            <img src={like} alt="" />
                          </div>{" "}
                        </div>
                        <p
                          className={
                            style.ProductPageMainDiv_RightPart_ITEMS_listView_rightPart_Content_stock
                          }
                        >
                          IN STOCK
                        </p>
                        <div
                          className={
                            style.ProductPageMainDiv_RightPart_ITEMS_listView_rightPart_Content_container
                          }
                        >
                          <div
                            className={
                              style2.heroSectionBestSeller_restContent_AmountDetails
                            }
                          >
                            <div
                              className={
                                style2.heroSectionBestSeller_restContent_AmountDiv
                              }
                            >
                              <p
                                className={
                                  style2.heroSectionBestSeller_restContent_currentAmount
                                }
                              >
                                {item.price}
                              </p>
                              <p
                                className={
                                  style2.heroSectionBestSeller_restContent_oldAmount
                                }
                              >
                                {item.oldPrice}
                              </p>
                            </div>

                            <div
                              className={
                                style2.heroSectionBestSeller_restContent_ratingsDiv
                              }
                            >
                              <img src={star2} alt="star" />
                              <p
                                className={
                                  style2.heroSectionBestSeller_restContent_ratings
                                }
                              >
                                4.5 (23 reviews)
                              </p>
                            </div>
                          </div>
                        </div>
                        <p
                          className={
                            style.ProductPageMainDiv_RightPart_ITEMS_listView_rightPart_Content_randomText
                          }
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </p>

                        {isHovered === index && (
                          <div
                            className={
                              style.ProductPageMainDiv_RightPart_ITEMS_listView_rightPart_Content_addToCart
                            }
                          >
                            {" "}
                            Add to Cart
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* PAGINATION */}
      <div className={style.productPaginationDiv}>
        <div className={style.productPaginationDiv_container}>
          <FaAngleLeft />
          <div
            className={style.productPaginationDiv_container_number}
            style={{
              backgroundColor: "#CE2225",
              color: "#FAFAFA",
              border: "none",
            }}
          >
            1
          </div>
          <div className={style.productPaginationDiv_container_number}>2</div>
          <div className={style.productPaginationDiv_container_number}>3</div>
          <FaAngleLeft style={{ transform: "rotate(180deg)" }} />
        </div>
      </div>
      <RelatedPages />
      <Footer />
    </div>
  );
};

export default Product;
