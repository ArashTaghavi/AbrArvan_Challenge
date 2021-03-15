<section class="form">
    <div class="form__container">
        <div class="form__header">
            <h3 class="form__title">
                فرم ثبت نام شبکه ابریارهای آروان
            </h3>
            <p class="form__description">
                در صورتی که مایل باشید می‌توانید از برای ما رزومه بفرستید، لطفا فرم زیر را پر کنید. </p>
            <div id="success_message" class="d-none">اطلاعات با موفقیت ذخیره شد.
                <span class="close" onclick="close_message('success_message')">x</span>
            </div>
            <div id="error_message" class="d-none">
                لطفا فیلد های قرمز را پر کنید.
                <span class="close" onclick="close_message('error_message')">x</span>
            </div>
        </div>
        <div class="form__body">
            <div class="form__box">
                <div class="form__box-info form__box--styles">
                    <div class="line"></div>
                    <h3 class="form__box-title">
                        اطلاعات فردی
                    </h3>
                    <div class="form__input-wrapper">
                        <div class="form__input">
                            <label for="full_name" class="required">نام</label>
                            <input type="text"
                                   name="full_name"
                                   id="full_name"
                                   placeholder="نام و نام خانوادگی"
                                   onkeyup="inputHandler(event)">
                        </div>
                        <div class="form__input">
                            <label for="mobile" class="required">تلفن</label>
                            <input type="number"
                                   name="mobile"
                                   id="mobile"
                                   placeholder="09190130120"
                                   onkeyup="inputHandler(event)">
                        </div>
                        <div class="form__input">
                            <label for="email" class="required">ایمیل</label>
                            <input type="email"
                                   name="email"
                                   id="email"
                                   placeholder="example@email.com"
                                   onkeyup="inputHandler(event)">
                        </div>
                        <div class="form__input">
                            <label for="company">شرکت</label>
                            <input type="text"
                                   name="company"
                                   id="company"
                                   placeholder="نام شرکت"
                                   onkeyup="inputHandler(event)">
                        </div>
                    </div>

                </div>
                <div class="form__box-skill form__box--styles">
                    <div class="line"></div>
                    <h3 class="form__box-title">
                        سوابق و تجربیات
                    </h3>
                    <div class="form__input-wrapper">
                        <div class="form__input">
                            <label for="resume" class="required">رزومه</label>
                            <input type="file"
                                   id="resume"
                                   class="d-none"
                                   onchange="inputHandler()">
                            <div class="form__input-instead" id="resume-input-instead">
                                <span id="resume-file-name"></span>

                                <button id="resume-button">انتخاب فایل pdf</button>
                            </div>
                            <p class="form__input-warning" id="resume-warning">حداکثر حجم مجاز فایل 1 مگابایت
                                باشد</p>
                        </div>
                        <div class="form__input">
                            <label for="portfolio">پورتفولیو</label>
                            <div class="form__input-instead" id="portfolio-input-instead">
                                <span id="portfolio-file-name"></span>
                                <button id="portfolio-button">انتخاب فایل pdf</button>
                            </div>
                            <input type="file"
                                   id="portfolio"
                                   class="d-none"
                                   onchange="inputHandler()">
                            <p class=" form__input-warning" id="portfolio-warning">حداکثر حجم مجاز فایل 1 مگابایت
                                باشد</p>
                        </div>
                    </div>

                </div>
                <div class="form__box-detail form__box--styles">
                    <div class="line"></div>
                    <h3 class="form__box-title">
                        توضیحات تکمیلی
                    </h3>
                    <div class="form__input-wrapper">
                        <div class="form__input">
                            <label for="abryar_type">نوع ابریار</label>
                            <div class="form__input-instead" id="abryar_type-input-instead"
                                 onclick="selectTagHandler(event,'abryar_type')">
                                <img src="/assets/images/arrow-down-2.png" alt="arrow-down-2">
                                <span id="abryar_type-value"></span>
                                <div id="abryar_type-content" class="d-none">
                                    <p onclick="selectValueHandler(event,'abryar_type')">ابریار کوچ ابری</p>
                                    <p onclick="selectValueHandler(event,'abryar_type')">ابریار فنی</p>
                                    <p onclick="selectValueHandler(event,'abryar_type')">ابریار بازارچه</p>
                                    <p onclick="selectValueHandler(event,'abryar_type')">ابریار آموزش</p>
                                    <p onclick="selectValueHandler(event,'abryar_type')">ابریار فروش</p>
                                </div>

                            </div>
                        </div>
                        <div class="form__input">
                            <label for="abryar_level">سطح ابریار</label>

                            <div class="form__input-instead" id="abryar_level-input-instead"
                                 onclick="selectTagHandler(event,'abryar_level')">
                                <img src="/assets/images/arrow-down-2.png" alt="arrow-down-2">
                                <span id="abryar_level-value"></span>
                                <div id="abryar_level-content" class="d-none">
                                    <p onclick="selectValueHandler(event,'abryar_level')">سطح ۱</p>
                                    <p onclick="selectValueHandler(event,'abryar_level')">سطح ۲</p>
                                    <p onclick="selectValueHandler(event,'abryar_level')">سطح ۳</p>
                                    <p onclick="selectValueHandler(event,'abryar_level')">سطح ۴</p>
                                </div>

                            </div>

                        </div>
                        <div class="form__input form__input--full_size">
                            <label for="description">توضیحات</label>
                            <textarea name=""
                                      rows="10"
                                      id="description"
                                      placeholder="در صورتی نیاز به توضیحات تکمیلی لطفا در این باکس برای ما یادداشت بگذارید"></textarea>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="form__footer">
            <p class="form__footer-description">
                <span class="start"></span>
                پر کردن فیلدهایی که با ستاره مشخص شده ضروری است</p>
            <button class="form__footer-submit" id="form__footer-submit" onclick="submit()">ثبت نام</button>
        </div>
    </div>
</section>




