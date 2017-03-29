import '../../components/navigation/navigation';
import '../../components/tariffs/tariffs';
import '../../components/reviews/slick.min';
$(() => {
    $('.slick').slick({
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 5000
    });
});
