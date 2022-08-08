/* شروع عملیات در صورت کلیک خوردن دکمه قلب */
document.getElementById('like-btn-heart').onclick = function() {
    // تبدیل آیکن قلب توخالی به قلب توپر + افزودن انیمیشن به آیکن
    document.getElementById('like-btn-heart').setAttribute('class', 'fas fa-heart animate__animated animate__rubberBand animate__slow');
    // تغییر رنگ آیکن قلب
    document.getElementById('like-btn-heart').style.color = '#007eff';
    // تغییر رنگ شمارنده تعداد لایک
    document.getElementById('hearts-count').style.color = '#fff';
    // حذف امکان کلیک مجدد روی دکمه لایک
    document.getElementById('like-btn-heart').style.pointerEvents = 'none';
    // دریافت عدد تعداد لایک فعلی
    let current_likes_count = parseInt(document.getElementById('hearts-count').textContent);
    // عدد تعداد لایک + 1
    let current_likes_count_plus_one = current_likes_count + 1;
    // جایگزین کردن عدد تعداد لایک جدید بر روی عدد قبلی
    document.getElementById('hearts-count').innerHTML = current_likes_count_plus_one;
  };
  