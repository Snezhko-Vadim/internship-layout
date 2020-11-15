<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="assets/styles/normalize.css" rel="stylesheet">
    <link href="assets/styles/all.css" rel="stylesheet">
    <link href="assets/styles/home.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Roboto:ital@0;1&display=swap" rel="stylesheet">
    <title>Home</title>
    <script defer src="assets/scripts/home.js"></script>
</head>
<body>
    <header class="header header_margin">
        <div class="top-bar">
            <div class="wrapper wrapper_display_flex">
                <div class="currency">
                    <p class="currency__text">
                        Currency:
                        <select class="currency__menu">
                            <option class="currency__item">GBP</option>
                            <option class="currency__item">RUB</option>
                        </select>
                    </p>
                </div>
                <div class="authentication">
                    <a class="authentication__item" href="sign-up.html">Register</a>
                    <a class="authentication__item" href="sign-up.html">Sign-In</a>
                </div>
                <div class="shopping-basket">
                    <a class="shopping-basket__text" href=""><i class="fas fa-shopping-cart shopping-basket__icon"></i>empty</a>
                </div>
            </div>
        </div>
            <div class="header-content header-content_height_home">
                <div class="nav-bar header-content__nav-bar">
                    <div class="wrapper wrapper_display_flex">
                        <div class="logo">
                            <a href=""><img class="logo__image" src="assets/images/home/logo.png"></a>
                        </div>
                        <nav class="nav header-content__nav">
                            <div class="nav__item nav__item_arrow">
                                <a class="nav__btn" href="#">mens</a>
                                <div class="sub-nav">
                                    <div class="sub-nav__container">
                                     <div class="sub-nav__menu menu">
                                         <div class="menu__column">
                                             <h5 class="menu__title">casuals</h5>
                                             <a href="" class="menu__item">Jackets</a>
                                             <a href="" class="menu__item">Hoodies & Sweatshirts</a>
                                             <a href="" class="menu__item">Polo Shirts</a>
                                             <a href="" class="menu__item">Sportswear</a>
                                             <a href="" class="menu__item">Trousers & Chinos</a>
                                             <a href="" class="menu__item">T-Shirts</a>
                                         </div>
                                         <div class="menu__column">
                                             <h5 class="menu__title">formal</h5>
                                             <a href="" class="menu__item">Jackets</a>
                                             <a href="" class="menu__item">Shirts</a>
                                             <a href="" class="menu__item">Suits</a>
                                             <a href="" class="menu__item">Trousers</a>
                                         </div>
                                     </div>
                                     <div class="banner sub-nav__banner">
                                         <a class="banner__text" href="#"><span class="banner__bold-text">Autumn sale!<br>up to 50% off</span></a>
                                     </div>
                                    </div>
                                 </div>
                            </div>
                            <div class="nav__item nav__item_arrow">
                                <a class="nav__btn" href="#">womens</a>
                            </div>
                            <div class="nav__item">
                                <a class="nav__btn" href="the-brand.html">the brand</a>
                            </div>
                            <div class="nav__item">
                                <a class="nav__btn" href="local-stores.html">local stores</a>
                            </div>
                            <div class="nav__item nav__item_arrow">
                                <a class="nav__btn" href="#">look book</a>
                                <div class="sub-nav">
                                    <div class="sub-nav__container">
                                     <div class="sub-nav__menu menu">
                                         <div class="menu__column">
                                             <h5 class="menu__title">Our Lookbooks</h5>
                                             <a href="lookbook.html" class="menu__item">Latest Posts (mixed)</a>
                                             <a href="" class="menu__item">Men’s Lookbook</a>
                                             <a href="" class="menu__item">Women’s Lookbook</a>
                                         </div>
                                         <div class="menu__column">
                                             <h5 class="menu__title">Your Lookbooks</h5>
                                             <a href="" class="menu__item">View and Edit</a>
                                             <a href="" class="menu__item">Share</a>
                                             <a href="" class="menu__item">Delete</a>
                                         </div>
                                     </div>
                                     <div class="banner sub-nav__banner">
                                         <a class="banner__text" href="#"><span class="banner__bold-text">Autumn sale!<br>up to 50% off</span></a>
                                     </div>
                                    </div>
                                 </div>
                            </div>
                        </nav>
                        <div class="search">
                            <input type="text" class="search__field" placeholder="Search...">
                            <a href="#" class="search__btn">
                                <i class="search__icon fas fa-search"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="header-slider">
                    <div class="header-slider__wrapper">
                        <p class="header-slider__text">a v e</p>
                        <a href="#" class="header-slider__btn btn">shop men’s collection</a>
                    </div>
                </div>
            </div>
    </header>
    <main class="main">
        <div class="wrapper">
            <div class="items items_border">
                <div class="nav-bar main__nav-bar">
                    <nav class="nav main__nav">
                        <div class="nav__item">
                            <a class="nav__btn" href="#">popular</a>
                        </div>
                        <div class="nav__item">
                            <a class="nav__btn" href="#">new arrivals</a>
                        </div>
                        <div class="nav__item">
                            <a class="nav__btn" href="#">best sellers</a>
                        </div>
                        <div class="nav__item">
                            <a class="nav__btn" href="#">special offers</a>
                        </div>
                        <div class="nav__item">
                            <a class="nav__btn" href="#">coming soon</a>
                        </div>
                    </nav>
                </div>
                <div class="products-container">
                    <div class="products-container__column">
                        <div class="products-container__row">
                            <div class="products-item">
                                <img src="assets/images/home/products-item-1.png" alt="products-item-1" class="products-item__image">
                                <p class="products-item__price">
                                    <span class="products-item__currency">&pound;</span>
                                    <span class="products-item__old-price"></span>
                                    89.99
                                </p>
                                <div class="products-item__more-information">
                                    <div class="products-item__thumbs">
                                        <div class="products-item__thumbs-item">
                                            <img src="assets/images/home/products-item-5-thumb-front.png" alt="thumb-front" class="products-item__thumb-images">
                                        </div>
                                        <div class="products-item__thumbs-item">
                                            <img src="assets/images/home/products-item-5-thumb-back.png" alt="thumb-back" class="products-item__thumb-images">
                                        </div>
                                    </div>
                                    <a href="" class="products-item__details-link">
                                        <i class="fas fa-info-circle"></i>
                                    </a>
                                    <div class="products-item__info">
                                        <p class="products-item__title">Womens burnt orange casual tee  <span class="products-item__currency">&pound;</span>29.95</p>
                                        <p class="products-item__description">Classic casual t-shirt for women on the move. 
                                            100% cotton.</p>
                                        <div class="products-item__btns">
                                            <a href="" class="products-item__btns-item"><i class="fas fa-shopping-cart products-item__btns-icon"></i></a>
                                            <a href="" class="products-item__btns-item"><i class="far fa-heart products-item__btns-icon"></i></a>
                                            <a href="" class="products-item__btns-item"><i class="fas fa-compress-alt products-item__btns-icon"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="products-item">
                                <img src="assets/images/home/products-item-2.png" alt="products-item-2" class="products-item__image">
                                <p class="products-item__price">
                                    <span class="products-item__currency">&pound;</span>
                                    <span class="products-item__old-price"></span>
                                    89.99
                                </p>
                                <div class="products-item__more-information">
                                    <div class="products-item__thumbs">
                                        <div class="products-item__thumbs-item">
                                            <img src="assets/images/home/products-item-5-thumb-front.png" alt="thumb-front" class="products-item__thumb-images">
                                        </div>
                                        <div class="products-item__thumbs-item">
                                            <img src="assets/images/home/products-item-5-thumb-back.png" alt="thumb-back" class="products-item__thumb-images">
                                        </div>
                                    </div>
                                    <a href="" class="products-item__details-link">
                                        <i class="fas fa-info-circle"></i>
                                    </a>
                                    <div class="products-item__info">
                                        <p class="products-item__title">Womens burnt orange casual tee  <span class="products-item__currency">&pound;</span>29.95</p>
                                        <p class="products-item__description">Classic casual t-shirt for women on the move. 
                                            100% cotton.</p>
                                        <div class="products-item__btns">
                                            <a href="" class="products-item__btns-item"><i class="fas fa-shopping-cart products-item__btns-icon"></i></a>
                                            <a href="" class="products-item__btns-item"><i class="far fa-heart products-item__btns-icon"></i></a>
                                            <a href="" class="products-item__btns-item"><i class="fas fa-compress-alt products-item__btns-icon"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="products-container__row">
                            <div class="products-item">
                                <img src="assets/images/home/products-item-3.png" alt="products-item-3" class="products-item__image">
                                <p class="products-item__price">
                                    <span class="products-item__currency">&pound;</span>
                                    <span class="products-item__old-price"></span>
                                    89.99
                                </p>
                                <div class="products-item__more-information">
                                    <div class="products-item__thumbs">
                                        <div class="products-item__thumbs-item">
                                            <img src="assets/images/home/products-item-5-thumb-front.png" alt="thumb-front" class="products-item__thumb-images">
                                        </div>
                                        <div class="products-item__thumbs-item">
                                            <img src="assets/images/home/products-item-5-thumb-back.png" alt="thumb-back" class="products-item__thumb-images">
                                        </div>
                                    </div>
                                    <a href="" class="products-item__details-link">
                                        <i class="fas fa-info-circle"></i>
                                    </a>
                                    <div class="products-item__info">
                                        <p class="products-item__title">Womens burnt orange casual tee  <span class="products-item__currency">&pound;</span>29.95</p>
                                        <p class="products-item__description">Classic casual t-shirt for women on the move. 
                                            100% cotton.</p>
                                        <div class="products-item__btns">
                                            <a href="" class="products-item__btns-item"><i class="fas fa-shopping-cart products-item__btns-icon"></i></a>
                                            <a href="" class="products-item__btns-item"><i class="far fa-heart products-item__btns-icon"></i></a>
                                            <a href="" class="products-item__btns-item"><i class="fas fa-compress-alt products-item__btns-icon"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="products-container__column">
                        <div class="products-container__row">
                            <div class="products-item">
                                <img src="assets/images/home/products-item-4.png" alt="products-item-4" class="products-item__image">
                                <p class="products-item__price">
                                    <span class="products-item__currency">&pound;</span>
                                    <span class="products-item__old-price"></span>
                                    89.99
                                </p>
                                <div class="products-item__more-information">
                                    <div class="products-item__thumbs">
                                        <div class="products-item__thumbs-item">
                                            <img src="assets/images/home/products-item-5-thumb-front.png" alt="thumb-front" class="products-item__thumb-images">
                                        </div>
                                        <div class="products-item__thumbs-item">
                                            <img src="assets/images/home/products-item-5-thumb-back.png" alt="thumb-back" class="products-item__thumb-images">
                                        </div>
                                    </div>
                                    <a href="" class="products-item__details-link">
                                        <i class="fas fa-info-circle"></i>
                                    </a>
                                    <div class="products-item__info">
                                        <p class="products-item__title">Womens burnt orange casual tee  <span class="products-item__currency">&pound;</span>29.95</p>
                                        <p class="products-item__description">Classic casual t-shirt for women on the move. 
                                            100% cotton.</p>
                                        <div class="products-item__btns">
                                            <a href="" class="products-item__btns-item"><i class="fas fa-shopping-cart products-item__btns-icon"></i></a>
                                            <a href="" class="products-item__btns-item"><i class="far fa-heart products-item__btns-icon"></i></a>
                                            <a href="" class="products-item__btns-item"><i class="fas fa-compress-alt products-item__btns-icon"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="products-container__row">
                            <div class="products-item">
                                <img src="assets/images/home/products-item-5.png" alt="products-item-5" class="products-item__image">
                                <p class="products-item__price">
                                    <span class="products-item__currency">&pound;</span>
                                    <span class="products-item__old-price"></span>
                                    89.99
                                </p>
                                <div class="products-item__more-information">
                                    <div class="products-item__thumbs">
                                        <div class="products-item__thumbs-item">
                                            <img src="assets/images/home/products-item-5-thumb-front.png" alt="thumb-front" class="products-item__thumb-images">
                                        </div>
                                        <div class="products-item__thumbs-item">
                                            <img src="assets/images/home/products-item-5-thumb-back.png" alt="thumb-back" class="products-item__thumb-images">
                                        </div>
                                    </div>
                                    <a href="" class="products-item__details-link">
                                        <i class="fas fa-info-circle"></i>
                                    </a>
                                    <div class="products-item__info">
                                        <p class="products-item__title">Womens burnt orange casual tee  <span class="products-item__currency">&pound;</span>29.95</p>
                                        <p class="products-item__description">Classic casual t-shirt for women on the move. 
                                            100% cotton.</p>
                                        <div class="products-item__btns">
                                            <a href="" class="products-item__btns-item"><i class="fas fa-shopping-cart products-item__btns-icon"></i></a>
                                            <a href="" class="products-item__btns-item"><i class="far fa-heart products-item__btns-icon"></i></a>
                                            <a href="" class="products-item__btns-item"><i class="fas fa-compress-alt products-item__btns-icon"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="products-item">
                                <img src="assets/images/home/products-item-6.png" alt="products-item-6" class="products-item__image">
                                <p class="products-item__price">
                                    <span class="products-item__currency">&pound;</span>
                                    <span class="products-item__old-price"></span>
                                    89.99
                                </p>
                                <div class="products-item__more-information">
                                    <div class="products-item__thumbs">
                                        <div class="products-item__thumbs-item">
                                            <img src="assets/images/home/products-item-5-thumb-front.png" alt="thumb-front" class="products-item__thumb-images">
                                        </div>
                                        <div class="products-item__thumbs-item">
                                            <img src="assets/images/home/products-item-5-thumb-back.png" alt="thumb-back" class="products-item__thumb-images">
                                        </div>
                                    </div>
                                    <a href="" class="products-item__details-link">
                                        <i class="fas fa-info-circle"></i>
                                    </a>
                                    <div class="products-item__info">
                                        <p class="products-item__title">Womens burnt orange casual tee  <span class="products-item__currency">&pound;</span>29.95</p>
                                        <p class="products-item__description">Classic casual t-shirt for women on the move. 
                                            100% cotton.</p>
                                        <div class="products-item__btns">
                                            <a href="" class="products-item__btns-item"><i class="fas fa-shopping-cart products-item__btns-icon"></i></a>
                                            <a href="" class="products-item__btns-item"><i class="far fa-heart products-item__btns-icon"></i></a>
                                            <a href="" class="products-item__btns-item"><i class="fas fa-compress-alt products-item__btns-icon"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="lookbook">
            <div class="wrapper wrapper_padding_0 wrapper_display_flex wrapper_justify-content_space-between">
                <div class="lookbook-item">
                    <div class="lookbook-item__image-container">
                        <img src="assets/images/home/lookbook-img-1.png" alt="lookbook-img-1" class="lookbook-item__image">
                    </div>
                    <div class="lookbook-item__information">
                        <h4 class="lookbook-item__title"><span class="lookbook-item__title-bold">men’s</span> lookbook</h4>
                        <p class="lookbook-item__description">Lorem ipsum dolor sit amet eras facilisis
                            consectetur adipiscing elit lor, integer lorem consecteur dignissim laciniqui.
                            Elementum metus facilisis ut phasellu.
                            </p>
                        <a href="" class="lookbook-item__btn btn">view now</a>
                    </div>
                </div>
                <div class="lookbook-item">
                    <div class="lookbook-item__image-container">
                        <img src="assets/images/home/lookbook-img-2.png" alt="lookbook-img-2" class="lookbook-item__image">
                    </div>
                    <div class="lookbook-item__information">
                        <h4 class="lookbook-item__title"><span class="lookbook-item__title-bold">women’s</span> lookbook</h4>
                        <p class="lookbook-item__description">Pellentesque habitant morbi tristique senectus et netus et malesuada fames .
                            Pellentesque laoreet quis enim et mattis. Quisque interdum felis tellus.
                            </p>
                        <a href="" class="lookbook-item__btn btn">view now</a>
                    </div>
                </div>
                <div class="lookbook-item">
                    <div class="lookbook-item__image-container">
                        <img src="assets/images/home/lookbook-img-3.png" alt="lookbook-img-3" class="lookbook-item__image">
                    </div>
                    <div class="lookbook-item__information">
                        <h4 class="lookbook-item__title"><span class="lookbook-item__title-bold">your</span> lookbook</h4>
                        <p class="lookbook-item__description">See an item you like and click the button to add it to your lookbook where you can create your own perfect look.
                            It’s like your own boutique!
                            </p>
                        <a href="" class="lookbook-item__btn btn">view now</a>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <footer class="footer">
        <div class="wrapper wrapper_padding_440">
            <div class="footer__menu menu">
                <div class="menu__column">
                    <h5 class="menu__title">Information</h5>
                    <a href="the-brand.html" class="menu__item">The brand</a>
                    <a href="local-stores.html" class="menu__item">Local stores</a>
                    <a href="" class="menu__item">Customer service</a>
                    <a href="" class="menu__item">Privacy & cookies</a>
                    <a href="" class="menu__item">Site map</a>
                </div>
                <div class="menu__column">
                    <h5 class="menu__title">Why buy from us</h5>
                    <a href="" class="menu__item">Shipping & returns</a>
                    <a href="" class="menu__item">Secure shopping</a>
                    <a href="" class="menu__item">Testimonials</a>
                    <a href="" class="menu__item">Award winning</a>
                    <a href="" class="menu__item">Ethical trading</a>
                </div>
                <div class="menu__column">
                    <h5 class="menu__title">Your account</h5>
                    <a href="sign-up.html" class="menu__item">Sign in</a>
                    <a href="sign-up.html" class="menu__item">Register</a>
                    <a href="" class="menu__item">View cart</a>
                    <a href="" class="menu__item">View your lookbook</a>
                    <a href="" class="menu__item"> Track an order</a>
                    <a href="" class="menu__item">Update information</a>
                </div>
                <div class="menu__column">
                    <h5 class="menu__title">Lookbook</h5>
                    <a href="lookbook.html" class="menu__item">Latest posts</a>
                    <a href="" class="menu__item">Men’s lookbook</a>
                    <a href="" class="menu__item">Women’s lookbook</a>
                    <a href="" class="menu__item">Lookbooks RSS feed</a>
                    <a href="" class="menu__item">View your lookbook</a>
                    <a href="" class="menu__item">Delete your lookbook</a>
                </div>
                <div class="menu__column">
                    <h5 class="menu__title">contact details</h5>
                    <p href="" class="menu__item menu__item_not-clickable">Head Office: Avenue Fashion, 
                        180-182 Regent Street, London.</p>
                    <p href="" class="menu__item menu__item_not-clickable">Telephone: 0123-456-789</p>
                    <p href="" class="menu__item menu__item_not-clickable">Email: support@yourwebsite.com</p>
                </div>
            </div>
            <div class="footer__banners">
                <div class="footer__banner-item banner">
                    <a class="banner__text" href="#"><span class="banner__bold-text">award winner</span><br>fashion awards 2016</a>
                </div>
                <div class="footer__banner-item banner">
                    <div class="banner__socials">
                        <i class="fab fa-facebook-f banner__icon"></i>
                        <i class="fab fa-twitter banner__icon"></i>
                        <i class="fab fa-instagram banner__icon"></i>
                        <i class="fab fa-pinterest banner__icon"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer__bottom-bar bottom-bar">
            <div class="bottom-bar__column">
                <p class="bottom-bar__column-item">&copy;2016 Avenue Fashion&trade;</p>
            </div>
            <div class="bottom-bar__column">
                <p class="bottom-bar__column-item">Design by <a href="#" class="bottom-bar__authors-link">RobbyDesigns.com</a></p>
                <p class="bottom-bar__column-item">Dev by <a href="" class="bottom-bar__authors-link">Loremipsum.com</a></p>
            </div>
        </div>
    </footer>
</body>
</html>