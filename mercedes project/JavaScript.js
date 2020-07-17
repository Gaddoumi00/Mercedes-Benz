var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function CompanyFunction() {
    window.location.href = "https://www.mercedes-benz.com/en/company/";

}

function VehiclesFunction() {
    window.location.href = "HtmlPage2.html";

}

function DesignFunction() {
    window.location.href = "https://www.mercedes-benz.com/en/design/";

}

function InnovationFunction() {
    window.location.href = "https://www.mercedes-benz.com/en/next/";

}

function MuseumHistoryFunction() {
    window.location.href = "https://www.mercedes-benz.com/en/classic/";

}

function SportsFunction() {
    window.location.href = "https://www.mercedes-benz.com/en/sports/";

}

function EventsFunction() {
    window.location.href = "https://www.mercedes-benz.com/en/events/";

}

function LifestyleFunction() {
    window.location.href = "https://www.mercedes-benz.com/en/lifestyle/";

}

function CFunction(x) {
    x.src = "https://cdn.carbuzz.com/gallery-images/2020-mercedes-benz-c-class-coupe-rear-view-carbuzz-589839.jpg";
}

function cClassFunction(z) {
    z.src = "https://cdn.carbuzz.com/gallery-images/2020-mercedes-benz-c-class-coupe-front-view-carbuzz-589838.jpg";
}

function EFunction(b) {
    b.src = "https://media.karousell.com/media/photos/products/2019/04/17/mercedes_benz_w213_amg_e63_bodykit_pp_taiwan_1555513703_066a8626_progressive.jpg";
}

function eClassFunction(v) {
    v.src = "https://carimages.com.au/dDgdu-VFz98fhlRTiX1_G_Bed9I=/fit-in/800x600/filters:stretch(FFFFFF)/vehicles/redbook/S00031KJ.jpg";
}

function SFunction(n) {
    n.src = "https://gtspiritmedia.com/gtspirit/uploads/2014/12/1625157643957294884.jpg ";
}

function sClassFunction(m) {
    m.src = "https://gtspirit.com/wp-content/uploads/2014/12/16042416591495965571.jpg";
}

function glcFunction(a) {
    a.src = "https://www.diplomaticsales.mercedes-benz.com/passengercars/mercedes-benz-cars/models/glc/coupe-c253/design/designpackages/amgopticspackage/_jcr_content/par/productinfotextimage/media2/slides/videoimageslide/image.MQ6.12.20191114145637.jpeg ";
}

function GlCFunction(s) {
    s.src = "https://www.la.mercedes-benz.com/en/passengercars/mercedes-benz-cars/models/glc/coupe-c253/design/lines/_jcr_content/swipeableteaserbox/par/swipeableteaser/asset.MQ6.12.20190619154733.jpeg";
}

function gleFunction(d) {
    d.src = "https://squir.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/m/e/mercedes-benz_gle_coupe_amg_2020_0004.jpg ";
}

function GLEFunction(f) {
    f.src = "https://www.ccarprice.com/products/Mercedes-GLE-350-4MATIC-SUV-2020.jpg";
}

function aFunction(g) {
    g.src = "https://aws-images.carshop.co.uk/NX/17/NX17LXB/NX17LXB-used-MERCEDES-BENZ-A-CLASS-DIESEL-HATCHBACK-A200d-AMG-Line-Premium-5dr-Auto-diesel-RED-2017-DC5-HH-M-05.jpg";
}

function AClassFunction(h) {
    h.src = "https://aws-images.carshop.co.uk/NX/17/NX17LXB/NX17LXB-used-MERCEDES-BENZ-A-CLASS-DIESEL-HATCHBACK-A200d-AMG-Line-Premium-5dr-Auto-diesel-RED-2017-DC1-HH-M-01.jpg";
}

function xTwoFunction(j) {
    j.src = "https://redbook.pxcrush.net/redbook/car/spec/S0005UE9.jpg?height=292&padcolor=ffffff&aspect=FitWithin&width=440 ";
}

function XTWOFunction(k) {
    k.src = "https://redbook.pxcrush.net/redbook/car/spec/S00069WU.jpg?height=292&padcolor=ffffff&aspect=FitWithin&width=440";
}

function gClassunction(l) {
    l.src = "https://i.pinimg.com/originals/d5/08/e3/d508e30613bf86d272e9c368845bf1d1.jpg";
}

function GClassFunction(q) {
    q.src = "https://i.pinimg.com/564x/af/f9/8e/aff98eacab9db5ff81d858f411041852.jpg";
}

function truckFunction(w) {
    w.src = "https://www.cdn-docs-ck.com/ck_img/zoom_ck/326102/autoart_1_18_mercedes_benz_g63_amg_6x6_year_2013_r.jpg";
}

function TruckClassFunction(e) {
    e.src = "https://www.mdiecast.com/mpictures/autoart/76304_1.jpg";
}

function gtsFunction(r) {
   
    r.src = "https://www.chicagomotorcars.com/imagetag/5441/25/l/Used-2018-Mercedes-Benz-AMG-GT-C-Roadster.jpg";
}

function GTSFunction(t) {
    t.src = "https://www.chicagomotorcars.com/imagetag/5441/29/l/Used-2018-Mercedes-Benz-AMG-GT-C-Roadster.jpg";
}

function slrFunction(y) {
    y.src = "https://mercedesblog.com/wp-content/uploads/2016/11/mclaren-slr-999-14.jpg";
}

function SLRFunction(u) {
    u.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTpjoKg395E0N9I0kuQnTzHPHCsu9ENb4YgATvxkBIwEA-mcRC5&usqp=CAU";
}

function slsFunction(i) {
    i.src = "https://media.ed.edmunds-media.com/mercedes-benz/sls-amg-gt-final-edition/2015/oem/2015_mercedes-benz_sls-amg-gt-final-edition_coupe_base_s_oem_1_500.jpg";
}

function SLSClassFunction(o) {
    o.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSuj3vfu-1J7QTfKPYSWENFsnPQiHsmN4CnYoiWPMNAdazBNst-&usqp=CAU";
}

function CPropFunction() {
    window.location.href = "https://www.mercedes-benz.com/en/vehicles/passenger-cars/c-class/";

}

function EPropFunction() {
    window.location.href = "https://www.mercedes-benz.com/en/vehicles/passenger-cars/e-class/";

}


function SPropFunction() {
    window.location.href = "https://www.mercedes-benz.com/en/vehicles/passenger-cars/s-class/";

}


function GLCPropFunction() {
    window.location.href = "https://www.mercedes-benz.com/en/vehicles/passenger-cars/glc/";

}


function GLEPropFunction() {
    window.location.href = "https://www.mercedes-benz.com/en/vehicles/passenger-cars/gle/";

}


function APropFunction() {
    window.location.href = "https://www.mercedes-benz.com/en/vehicles/passenger-cars/a-class/";

}


function XPropFunction() {
    window.location.href = "https://www.mercedes-benz.co.uk/vans/en/x-class";

}


function GPropFunction() {
    window.location.href = "https://www.mercedes-benz.com/en/vehicles/passenger-cars/g-class/";

}


function TruckPropFunction() {
    window.location.href = "https://www.mercedes-benz.com/en/innovation/vehicle-development/the-automotive-declaration-of-independence/";

}


function GTSPropFunction() {
    window.location.href = "https://www.mercedes-benz.com/en/vehicles/passenger-cars/amg-gt/";

}


function SLRPropFunction() {
    window.location.href = "https://blog.dupontregistry.com/specs/mercedes-benz-slr-mclaren-price-specs-photos-and-review/";

}


function SLSPropFunction() {
    window.location.href = "https://www.mercedes-benz.com/en/vehicles/passenger-cars/sl/";

}









