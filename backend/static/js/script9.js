window.initMap = function() {
    $(window).trigger("gMapsLoaded")
}
,
$.fn.serializeObject = function() {
    var t = {}
      , e = this.serializeArray();
    return $.each(e, function() {
        void 0 !== t[this.name] ? (t[this.name].push || (t[this.name] = [t[this.name]]),
        t[this.name].push(this.value || "")) : t[this.name] = this.value || ""
    }),
    t
}
,
$(document).ready(function() {
    $(".lightgallery").lightGallery();
    var t = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 298 298"><path d="M193 2.75a8.72 8.72 0 0 1 12.11 0 8.53 8.53 0 0 1 2.5 6.07 8.62 8.62 0 0 1-2.5 6.07L111 149l94.09 134.09a8.59 8.59 0 0 1 0 12.11 8.58 8.58 0 0 1-12.14 0L92.89 155a8.53 8.53 0 0 1-2.52-6 8.36 8.36 0 0 1 2.52-6z"/></svg>';
    function e() {
        var t, e, _;
        (body = document.getElementById("body")).classList.add("no-scroll"),
        body._scrollTop = window.pageYOffset,
        modalScrollTop = window.pageYOffset,
        body.style.position = "fixed",
        document.body.scrollHeight > document.body.clientHeight ? body.style.width = "calc(100% - " + ((t = document.createElement("div")).style.visibility = "hidden",
        t.style.width = "100px",
        t.style.msOverflowStyle = "scrollbar",
        document.body.appendChild(t),
        e = t.offsetWidth,
        t.style.overflow = "scroll",
        (_ = document.createElement("div")).style.width = "100%",
        t.appendChild(_),
        _ = _.offsetWidth,
        t.parentNode.removeChild(t),
        e - _) + "px)" : body.style.width = "100%",
        body.style.top = -body._scrollTop + "px"
    }
    function _() {
        (body = document.getElementById("body")).classList.remove("no-scroll"),
        body.style.position = "",
        body.style.width = "",
        body.style.top = "",
        window.scroll(0, modalScrollTop)
    }
    $("body").on("click", ".js-modal-open", function() {
        e(),
        $($(this).data("modal")).fadeIn(200),
        $(this).hasClass("js-service") && $("#service").val($(this).data("service")),
        $(this).hasClass("js-pricelist-service") && $("#service-pricelist").val($(this).data("service"))
    }),
    $(".js-modal-close").click(function() {
        _(),
        $(".modal").fadeOut(200)
    }),
    $(".main-nav ul li > span").click(function() {
        $(this).next().slideToggle(200)
    }),
    $(".showroom__slider-wrapper").owlCarousel({
        nav: !0,
        items: 1,
        margin: 30,
        navText: [t, t]
    }),
    $(".product__slider-wrapper").owlCarousel({
        nav: !1,
        items: 1,
        margin: 30,
        URLhashListener: !0,
        startPosition: "URLHash",
        onTranslated: function() {
            var t = $(".product__slider .owl-item")
              , e = $(".product__slider-thumb");
            for (i = 0; i < t.length; i++)
                $(t[i]).hasClass("active") && ($(e).removeClass("active"),
                $(e[i]).addClass("active"),
                $(".js-color").text($(e[i]).find("img").attr("alt")))
        }
    }),
    $(".product__slider-thumb").click(function() {
        $(".js-color").text($(this).find("img").attr("alt"))
    }),
    $(".portfolio-item__slider-wrapper").owlCarousel({
        nav: !0,
        items: 1,
        margin: 30,
        navText: [t, t]
    }),
    window.innerWidth < 768 && $(".portfolio__slider").owlCarousel({
        nav: !0,
        items: 1,
        margin: 30,
        navText: [t, t]
    }),
    $(".articles__slider-wrapper").owlCarousel({
        nav: !0,
        margin: 10,
        navText: [t, t],
        responsive: {
            0: {
                items: 1,
                margin: 10
            },
            550: {
                items: 2,
                margin: 10
            },
            700: {
                items: 3,
                margin: 10
            },
            900: {
                items: 4,
                margin: 10
            }
        }
    });
    var a = !1;
    function s() {
        var t, e;
        $("div").is(".map") && (t = $(".map"),
        window.pageYOffset >= $(t[0]).offset().top - document.documentElement.clientHeight && (a || ($("div").is("#map") && $(window).bind("gMapsLoaded", function() {
            ymaps.ready(function() {
                var t = new ymaps.Map("map",{
                    center: [59.932781, 30.225236],
                    zoom: 16
                },{
                    searchControlProvider: "yandex#search"
                })
                  , e = new ymaps.Placemark(t.getCenter(),{
                    hintContent: ""
                },{
                    iconLayout: "default#image",
                    iconImageHref: "/i/pin.png",
                    iconImageSize: [50, 63],
                    iconImageOffset: [-25, -31]
                });
                t.geoObjects.add(e);
                var _ = new ymaps.Map("delMap",{
                    center: [59.96176942258253, 30.36190561024989],
                    zoom: 8
                },{
                    searchControlProvider: "yandex#search"
                })
                  , a = new ymaps.Polygon([[[60.19594904692666, 29.57005190747668], [60.25526277216894, 29.565867739771875], [60.295522423516246, 29.830231985514956], [60.2095225012865, 29.963176854119524], [60.19115605486275, 30.12751819285336], [60.32264047467926, 30.26994965789629], [60.33401107871623, 30.393537201195045], [60.34980358867174, 30.49533087867121], [60.314491302887056, 30.627406745731605], [60.27259922067787, 30.586046672116936], [60.19120829711949, 30.63252107665687], [60.18306030354859, 30.818476315459975], [60.164321499334044, 30.989259010578166], [60.176309782260056, 31.048049889929416], [60.12032799325056, 31.088374061000195], [60.06727672026108, 31.072048092936143], [60.0392432725761, 31.127120474379126], [59.98316387949324, 31.090254546852975], [59.95923914626787, 31.047112410069303], [59.93668896881334, 31.07267838315397], [59.87981388739474, 31.118864560208976], [59.79466891494679, 31.11662874594981], [59.75012536590395, 31.09439086722068], [59.72771346097459, 31.063971369725436], [59.66099469107816, 30.871305272431186], [59.60762273424918, 30.779076885062295], [59.56972780735973, 30.692953400390707], [59.54574571832187, 30.604234699066865], [59.53531252668405, 30.525805096450313], [59.5060391736189, 30.415951829178766], [59.503027909676064, 30.259742124990908], [59.51650590067683, 30.06479282340797], [59.521874899900155, 29.95403004592299], [59.542617488334805, 29.906714036473886], [59.563312540932884, 29.782411684315093], [59.60143553224588, 29.67191666667202], [59.68950331131151, 29.640721555511277], [59.75239802054245, 29.57427182876603], [59.86645342477375, 29.53501369478795], [59.95525361732309, 29.46218778248044], [59.95697841909774, 29.525514969372693], [59.94883513049107, 29.592293344701034], [59.932385402101325, 29.661202013662546], [59.998447978551006, 29.695832605368707], [60.0330907706964, 29.64747748572927], [60.029236958181755, 29.783352708968778], [60.04369329164827, 29.946119593147614], [60.098624785033266, 29.92797156655888], [60.13999373975847, 29.920466968360415], [60.15714097697659, 29.87810413662146], [60.18414335855165, 29.72687395700632], ], ],{
                    hintContent: ""
                },{
                    fillColor: "#FF0000",
                    strokeWidth: 1,
                    strokeColor: "#FF0000",
                    opacity: .2
                })
                  , s = new ymaps.Polygon([[[59.955606614652204, 30.201532603583473], [59.96487129174433, 30.191013144741362], [59.99141565412721, 30.184862104496233], [60.00697686466423, 30.193115146381956], [60.05739691860171, 30.14508605231913], [60.06184823454581, 30.159503061666328], [60.06494583123747, 30.166012851253413], [60.07897752053658, 30.186930777221733], [60.08240035175391, 30.199985367549857], [60.085487507025704, 30.227457017884376], [60.09301732978589, 30.247567881662462], [60.0984960026861, 30.265902119592624], [60.099188287546596, 30.28650852622485], [60.09611606022422, 30.314651262905613], [60.09490947795922, 30.33901826344163], [60.094392167212796, 30.364097012868115], [60.08686011413864, 30.37646120655404], [60.07692842270171, 30.379206887450778], [60.058425572635706, 30.390874124087873], [60.054996928958076, 30.39775180388824], [60.043349111977555, 30.435488663661317], [60.02070696948319, 30.454024674977063], [60.013158985216656, 30.469189365170337], [60.00491856818669, 30.478087973195215], [59.99564934381348, 30.477404606359983], [59.98981194289935, 30.483245096659402], [59.98637171398212, 30.491813696487952], [59.97779536284693, 30.529921646883395], [59.97400900656353, 30.541760144034697], [59.96851273048075, 30.552241143693436], [59.957515535658594, 30.55431283295843], [59.946674358647506, 30.5402548624445], [59.93068731018437, 30.53712981040246], [59.91932998702261, 30.52477386541989], [59.909002875528195, 30.52582972820312], [59.89867772190569, 30.52476719498543], [59.88662814505056, 30.525472138506643], [59.87284204639507, 30.532340109847155], [59.86637752327403, 30.529402010016156], [59.85457240883881, 30.504890591742424], [59.85353213025477, 30.487372170261324], [59.849114614688425, 30.487366470455754], [59.84501867808147, 30.49199087564557], [59.84298329264244, 30.50418336039843], [59.83961490218349, 30.51346391894731], [59.83323422663545, 30.521405535124018], [59.82555087949622, 30.51655436030444], [59.84606970821693, 30.45973786081288], [59.843184422431875, 30.455444708425148], [59.835082471344684, 30.447721491493553], [59.82834449378894, 30.438961353741092], [59.8241987817725, 30.42798216136555], [59.817984980786925, 30.398462135162276], [59.81540357769589, 30.367011794722544], [59.815566112687065, 30.35484220783212], [59.81039475989281, 30.335271917970772], [59.81134642604901, 30.323751370852506], [59.814538545878925, 30.31328003635383], [59.833527244984076, 30.281710857753524], [59.83628540717314, 30.278947333895644], [59.83525203538507, 30.27380183667583], [59.83490455653233, 30.26727559121241], [59.83085689082993, 30.254579153027294], [59.828174553542894, 30.24120012483661], [59.82075306039995, 30.216470844172818], [59.815231513990426, 30.20856625619308], [59.80953019055384, 30.18250769148551], [59.801762924111834, 30.169800744747363], [59.80029365871654, 30.164794119194767], [59.8006417941562, 30.150368435830387], [59.816258973683574, 30.102146262595625], [59.827658249847524, 30.121349214093016], [59.861835736582215, 30.12387375150422], [59.86357501930669, 30.145920127407635], [59.86607543750663, 30.14695999853143], [59.87384077308286, 30.159336066566084], [59.88632393973048, 30.170133655992004], [59.89362961987282, 30.19947695036433], [59.895633654515656, 30.198872889254517], [59.901689472138884, 30.21313368308256], [59.90357791145086, 30.21418821552163], [59.90426977401406, 30.21616285747473], [59.90753931476942, 30.208791114234828], [59.932024742598294, 30.209428916833986], [59.93255855635911, 30.201514404017303], [59.93025413630435, 30.19947232626896], [59.93026525656788, 30.196194376430753], [59.930944464885606, 30.193802847179768], [59.93464722175472, 30.196757968926477], [59.93962535019513, 30.193452568301154], [59.94385845611452, 30.177563627485597], [59.94524097457022, 30.178183560643447], [59.94380405262441, 30.19007714893337], [59.9503364403028, 30.193925601208093], [59.952600280954435, 30.18226728110426], [59.95466507567746, 30.184352186810656], [59.95134489166877, 30.20210595743515], ]],{
                    hintContent: ""
                },{
                    fillColor: "#fb5e00",
                    strokeWidth: 1,
                    strokeColor: "#fb5e00",
                    opacity: .3
                });
                _.geoObjects.add(a).add(s)
            })
        }),
        (e = document.createElement("script")).setAttribute("type", "text/javascript"),
        e.setAttribute("src", "https://api-maps.yandex.ru/2.1/?apikey=98054054-d1c7-484e-881c-59d01af42483&lang=ru_RU&onload=initMap"),
        (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(e),
        a = !0)))
    }
    s();
    var o = $(".banner").outerHeight()
      , n = o / 2;
    function l() {
        window.pageYOffset >= o ? ($(".header").addClass("header_scrolled"),
        $(".header").removeClass("header_scrolled-hide"),
        1030 < window.innerWidth && ($(".main-nav").css("display", "none"),
        $(".nav-button").removeClass("active"))) : window.pageYOffset > n && window.pageYOffset < o ? ($(".header").addClass("header_scrolled-hide"),
        $(".main-nav").css("display", "none"),
        $(".nav-button").removeClass("active")) : ($(".header").removeClass("header_scrolled"),
        $(".header").removeClass("header_scrolled-hide"),
        1030 < window.innerWidth && ($(".main-nav").css("display", "block"),
        $(".main-nav ul li ul").css("display", "none")))
    }
    l();
    var r = !1;
    function c() {
        1030 < window.innerWidth && $("div").is(".pricelist__img.relative") && (window.pageYOffset >= $(".pricelist__img.relative").offset().top - $("header").outerHeight() ? window.pageYOffset >= $(".pricelist__img.relative").offset().top + $(".pricelist__img.relative").outerHeight() - $(".js-pricelist-fixed-img").outerHeight() - $("header").outerHeight() ? $(".js-pricelist-fixed-img").css({
            top: $(".pricelist__img.relative").outerHeight() - $(".js-pricelist-fixed-img").outerHeight(),
            position: "absolute"
        }) : $(".js-pricelist-fixed-img").css({
            position: "fixed",
            top: $("header").outerHeight(),
            width: $(".pricelist__content").outerWidth() - $(".pricelist__table").outerWidth()
        }) : $(".js-pricelist-fixed-img").css({
            position: "static",
            top: 0
        })),
        $("div").is(".pricelist__img.relative") && (window.pageYOffset >= $(".pricelist__content").offset().top - $("header").outerHeight() ? (r || ($(".pricelist__table").append('<div class="pricelist__scrolled-header"><table><thead><tr><th>Вид услуги и мебели</th><th>Метраж, пог. м </th><th>Цена, ₽ </th></tr></thead></table></div>'),
        r = !0),
        window.pageYOffset >= $(".pricelist__content").offset().top + $(".pricelist__content").outerHeight() - $(".pricelist__scrolled-header").outerHeight() - $("header").outerHeight() ? $(".pricelist__scrolled-header").css({
            bottom: 0,
            top: "auto",
            position: "absolute",
            left: 0
        }) : $(".pricelist__scrolled-header").css({
            position: "fixed",
            bottom: "auto",
            top: $("header").outerHeight(),
            width: $(".pricelist__table").outerWidth(),
            left: $(".pricelist__table").offset().left
        })) : $(".pricelist__scrolled-header").css({
            position: "absolute",
            bottom: "auto",
            top: -60,
            left: 0
        }))
    }
    function d() {
        for (var t = $(".validate-form"), e = t.length - 1; 0 <= e; e--)
            $(t[e]).validate({
                submitHandler: function(t) {
                    var e = $(t).find("button[type='submit']")
                      , _ = e.text()
                      , a = $(t).find("input");
                    $(t).ajaxSubmit({
                        clearForm: !0,
                        dataType: "json",
                        beforeSubmit: function() {
                            e.text("Отправка").css("opacity", ".5"),
                            a.css("opacity", ".5")
                        },
                        success: function(t) {
                            console.log(t),
                            a.css("opacity", "1"),
                            e.css("opacity", "1").text(_),
                            $(".modal").fadeOut(200),
                            $("#thx").fadeIn(200)
                        }
                    })
                }
            })
    }
    function p() {
        parseInt($(".js-pagination").data("limit")) < parseInt($(".js-pagination").data("total")) && $(".js-pagination").html('<button class="btn btn_center js-load-button" data-form=".js-filter" data-content=".js-cards">Показать еще</button>')
    }
    function h(t, e, _, a) {
        setTimeout(function() {
            $(e).css("opacity", ".5"),
            $(".js-page").val(1),
            $(a).length,
            $.ajax({
                dataType: "json",
                type: "GET",
                url: $(t).attr("action"),
                data: $(t).serializeObject(),
                success: function(t) {
                    console.log(t),
                    $(e).html(t.cotnent).css("opacity", "1"),
                    $(".js-page").val(parseInt($(".js-page").val()) + 1);
                    var s = $(a).length;
                    _.data("total", t.total),
                    t = parseInt(_.data("total")),
                    window.ll = new LazyLoad,
                    t <= s ? _.css("display", "none") : _.css("display", "block"),
                    p()
                }
            })
        }, 100)
    }
    c(),
    $(window).scroll(function() {
        c(),
        l(),
        s()
    }),
    $(".nav-button").click(function() {
        $(".main-nav").slideToggle(200),
        $(".nav-button").toggleClass("active")
    }),
    $(".js-tabs__button").click(function() {
        var t = $(this).parent().parent().find(".js-tabs__button")
          , e = $(this).parent().parent().find(".js-tabs__content");
        if (!$(this).hasClass("active"))
            for (t.removeClass("active"),
            e.removeClass("active"),
            $(this).addClass("active"),
            i = 0; i < t.length; i++)
                $(t[i]).hasClass("active") && $(e[i]).addClass("active")
    }),
    $(".pricelist tr.js-load, .pricelist__table-img").click(function() {
        var t = $(this)
          , _ = $(".pricelist__table-img")
          , a = $(".pricelist tr.js-load");
        if ($(this).hasClass("active"))
            window.innerWidth < 1031 && ($(".pricelist__img").fadeIn(300),
            e());
        else {
            for (a.removeClass("active"),
            _.removeClass("active"),
            i = 0; i < a.length; i++)
                t.data("row") === $(a[i]).data("row") && ($(a[i]).addClass("active"),
                $(_[i]).addClass("active"));
            let vvq = 0;
            $(".pricelist[data-l]").length && (vvq = $(".pricelist[data-l]").attr('data-l'));
            $.ajax({
                type: "POST",
                url: "/zagruzka-foto-v-prajsliste.html",
                data: {
                    cat: vvq,
                    id: t.data("id"),
                    title: t.find('td').eq(0).text(),
                    row: t.data("row")
                },
                success: function(t) {
                    $(".js-img-load").html(t),
                    $('input[type="tel"]').mask("+7 (999) 999-99-99"),
                    d(),
                    window.innerWidth < 1030 && ($(".pricelist__img").fadeIn(300),
                    e())
                }
            })
        }
    }),
    $("body").on("click", ".pricelist__img-close-button", function() {
        $(".pricelist__img").fadeOut(300),
        _()
    }),
    $("body").on("click", ".modal-open", function(t) {
        $(".modal").fadeOut(300),
        $($(this).data("modal")).fadeIn(300)
    }),
    $(".modal__slider").owlCarousel({
        nav: !0,
        items: 1,
        URLhashListener: 1,
        margin: 30,
        navText: [t, t]
    }),
    $(".banner__scroll-button").click(function() {
        $("html, body").stop().animate({
            scrollTop: $(".banner").outerHeight()
        }, 500, "swing")
    }),
    $('input[type="tel"]').mask("+7 (999) 999-99-99"),
    d(),
    $(".js-number__minus").click(function() {
        var t = $(this).parent().find(".js-number__input")
          , e = t.attr("min")
          , _ = parseInt(t.val());
        e < _ ? (t.val(_ - 1),
        t.removeClass("error")) : t.val(e)
    }),
    $(".js-number__plus").click(function() {
        var t = $(this).parent().find(".js-number__input")
          , e = t.attr("max")
          , _ = parseInt(t.val());
        _ < e ? t.val(_ + 1) : t.val(e),
        t.removeClass("error")
    }),
    $(".product__form-close").click(function() {
        $(".product__form").fadeOut(200),
        $("html, body").css("overflow", "auto")
    }),
    $(".catalog__filter-button").click(function() {
        $(".catalog__filter-content").slideToggle(200)
    }),
    $(".catalog__filter-section-button").click(function() {
        $(this).next().slideToggle(200)
    }),
    p(),
    $("body").on("click", ".js-load-button", function() {
        var t, e, _, a;
        t = $(this).data("form"),
        e = $(this).data("content"),
        _ = $(".js-pagination"),
        a = $(".js-pagination").data("cards"),
        $(e).css("opacity", ".5"),
        $(a).length < parseInt(_.data("total")) && $.ajax({
            type: "GET",
            dataType: "json",
            url: $(t).attr("action"),
            data: $(t).serializeObject(),
            success: function(t) {
                console.log(t),
                $(e).append(t.cotnent).css("opacity", "1"),
                $(".js-page").val(parseInt($(".js-page").val()) + 1);
                var s = $(a).length;
                _.data("total", t.total),
                t = parseInt(_.data("total")),
                window.ll = new LazyLoad,
                t <= s && _.css("display", "none"),
                p()
            }
        })
    }),
    $("body").on("change", ".blog__filter-checkbox-input", function() {
        h($(this).data("form"), $(this).data("content"), $(".js-pagination"), $(".js-pagination").data("cards"))
    }),
    $("body").on("change", ".catalog__filter-section-check-input", function() {
        var t, e;
        h($(this).data("form"), $(this).data("content"), $(".js-pagination"), $(".js-pagination").data("cards")),
        t = $(this).data("form"),
        e = $(t).serializeObject(),
        console.log($.param(e)),
        t = new URL(window.location),
        delete e.page,
        e = $.param(e),
        history.pushState({}, null, t.origin + t.pathname + "?" + e)
    }),
    $("body").on("click", ".catalog__filter-clear", function() {
        h($(this).data("form"), $(this).data("content"), $(".js-pagination"), $(".js-pagination").data("cards"))
    }),
    $("body").on("click", ".js-print", function() {
        window.print()
    })
});
$(document).on("click", ".show_more", (function() {
    $(".services__btn-block").remove(),
    $(".service__item.hidden").each((function() {
        $(this).removeClass("hidden")
    }
    ))
}
));
document.addEventListener("DOMContentLoaded", function() {
    document.getElementsByClassName("calc__price_category")[0].classList.add("price_active"),
    document.getElementsByClassName("calc__price_subcategory")[0].classList.add("subcategory_open"),
    $(document).on("click", ".calc__price_category", function(e) {
        var s = $(".calc__price_category")
          , a = $(".calc__price_subcategory");
        $(this).hasClass("price_active") || (s.removeClass("price_active"),
        s.parent().find(".img-svg").removeClass("active_svg"),
        a.slideUp(),
        $(this).addClass("price_active"),
        $(this).siblings("ul").slideDown(),
        $(this).parent().find(".img-svg").addClass("active_svg"),
        a.removeClass("subcategory_open"))
    }),
    $(document).on("click", ".price-button", function(e) {
        activeCategory = $(".calc__price_category"),
        activeSubCategory = $(".calc__price_subcategory"),
        activeCategory.removeClass("price_active"),
        activeCategory.parent().find(".img-svg").removeClass("active_svg"),
        activeSubCategory.slideUp();
        var s = $(this).attr("href").substring(1)
          , a = $("#" + s);
        a.addClass("price_active"),
        a.siblings("ul").slideDown(),
        a.parent().find(".img-svg").addClass("active_svg"),
        activeSubCategory.removeClass("subcategory_open")
    })
});

$('#doposle1').imagesCompare();
$('#doposle2').imagesCompare();
$('#doposle3').imagesCompare();
$('#doposle4').imagesCompare();
$('#doposle5').imagesCompare();
$('#doposle6').imagesCompare();

$(document).ready(function() {

    bloks_div = ".article";
    bloks_setheight = 134;
    $(function() {
        bloks_total = $('body').find(bloks_div);
        if (bloks_total.length) {
            for (i = 0; i < bloks_total.length; i++) {
                blok_height = Number($(bloks_total[i]).find('div').css('height').replace('px', ''));
                if (blok_height > bloks_setheight - 24) {
                    $(bloks_total[i]).find('div').css('max-height', bloks_setheight + 'px');
                    tb = $(bloks_div).parent().find('.read-next');
                    tb.attr('data-h', 'Читать далее').attr('data-v', 'Свернуть').html(tb.attr('data-h')).show();
                }
            }
        }
    });

    $(bloks_div + ' .read-next').on('click', function() {
        blok = $(this).parent().parent().find(bloks_div).find('div');
        if (blok.css('max-height') != 'none') {
            blok.css('max-height', '');
            $(this).html($(this).attr('data-v'));
        } else {
            blok.css('max-height', bloks_setheight + 'px');
            $(this).html($(this).attr('data-h'));
        }
        return false;
    });

});
