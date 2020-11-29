'use strict'

jQuery(document).ready(function () {
  initSlider();
  initDropdown();
  initModal();
  passwordView();
  initBurger();
  filterSlider();
  initProfileMenu();
  initForm();
  imageDownload();
  initChatInv();
  initTab();
  initAccordeon();
  initTag();
  initMask();
  initCredits();
  initScroll();
  initLike();
  initMessagesMenu();
  propCheckbox();
  initMessageOpen();
  lettersImgUpload();
  autosize();
  chatArea();
  chatCam();
  chatContactsBtn();
  initChat();
  emotionStatus();

  if ($(window).width() >= 1024 && $('.chat__body').length) {
    chatHeight()
  }

  var hiddenBox = $('.letters__item-photo');
  hiddenBox.slice(0, 4).show(300);

  $('body').on('click', '.load-more__btn', function (e) {
    e.preventDefault();
    $(this).closest('.load-more').hide()
    hiddenBox.show(300);
  })

  $('body').on('click', '.hide-btn', function (e) {
    e.preventDefault();
    hiddenBox.slice(4).hide(300);
    $('.load-more').show()
  })

  $('body').on('click', '.letters__notify-close', function (e) {
    e.preventDefault();
    $(this).closest('.letters__notify').hide(300).remove()
    
  })
});

function initSlider() {
  var swiper = new Swiper('.hero__slider', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  });

  let options = {};

  if ($(".profile__slider .swiper-slide").length >= 3 ) {
    options = {
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 4
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 16
        }
      }
    }
  } else {
    options = {
      loop: false,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 4
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 16
        }
      }
    }
  }
  
  var swiper2 = new Swiper('.profile__slider', options);

  let options2 = {};

  if ($(".account__slider .swiper-slide").length >= 3) {
    options2 = {
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 4
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 16
        }
      }
    }
  } else {
    options2 = {
      loop: false,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 4
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 16
        }
      }
    }
  }

  var swiper3 = new Swiper('.account__slider', options2)
  if ($(window).width() >= 1024 && $('.account__slider').length) {
    swiper3.destroy(true, true);
  }

  let options3 = {};

  var swiper4 = new Swiper('.chat__slider', {
    spaceBetween: 0,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      1024: {
        slidesPerColumn: 2,
      }
    }
  })
}

function initDropdown() {
  $("body").delegate(".drop__btn", "click", function (e) {
    e.preventDefault();
    var allDropBoxes = $('.drop__box');
    var currentDropBox = $(this).closest('.drop__box');
    var dropMenu = currentDropBox.find('.drop__menu')

    if (currentDropBox.hasClass('active')) {
      currentDropBox.removeClass('active');
    } else {
      allDropBoxes.removeClass('active');
      currentDropBox.addClass('active');
    }
  });

  $('body').on('click', '.hidden', function () {
    if ($(this).is(':checked')) {
      var value = $(this).siblings('.radio-text').html();
      $(this).closest('.drop__value').find('.result-value').html(value);
    }

    $(this).closest('.drop__box').removeClass('active')
  });

  jQuery(document).mouseup(function (e) {
    var block = jQuery('.drop__box');
    if (!block.is(e.target)
      && block.has(e.target).length === 0) {
      block.removeClass('active');
    }
  });
}

function initModal() {
  var body = $('body');

  $('body').on('click', '.modal--opener', function (e) {
    
    if ($(this).data('type') == 'modal-preview') {
      if ($(window).width() > 1024) {
        e.preventDefault();
        body.removeClass();
        body.addClass('modal--active');
        body.addClass('modal-preview');
      }
    } else {
      e.preventDefault();
      body.removeClass();
      var modalType = $(this).data('type');

      body.addClass(modalType);
      body.addClass('modal--active');
    }
    
  });

  $('body').on('click', '.modal--close', function (e) {
    e.preventDefault();
    body.removeClass();
  });

  $('body').on('click', '.modal--overlay', function (e) {
    if ($(e.target).closest('.modal--container,.preview__card').length == 0) {
      body.removeClass();
    }
  });
}

function passwordView() {
  $('body').on('click', '.view-pas', function (e) {
    e.preventDefault();
    var password = $(this).closest('.password-box').find('.form__input')
    if (password.attr('type') == 'password') {
      $(this).addClass('view');
      password.attr('type', 'text');
    } else {
      $(this).removeClass('view');
      password.attr('type', 'password');
    }
    return false;
  });
}

function initBurger() {
  var menuBtn = $('.burger-btn');
  var menu = $('body');

  menuBtn.on('click', function (e) {
    e.preventDefault();
    menu.toggleClass('nav-active')
  });
}

function filterSlider() {
  $(".filter__slider").each(function () {
    var minValue = Number($(this).attr('data-min'));
    var maxValue = Number($(this).attr('data-max'));
    var minRange = Number($(this).attr('data-min_range'));
    var maxRange = Number($(this).attr('data-max_range'));
    var step = Number($(this).attr('data-step'));
    $(this).slider({
      range: true,
      min: minValue,
      max: maxValue,
      step: step,
      values: [minRange, maxRange],
      slide: function (event, ui) {
        $(this).find('.ui-slider-handle:eq(0) .slider-range-min').html(ui.values[0]);
        $(this).find('.ui-slider-handle:eq(1) .slider-range-max').html(ui.values[1]);
        $(this).siblings('.filter__slider-text').text(ui.values[0] + " - " + ui.values[1]);

        $(this).siblings('.hidden-min').val(ui.values[0])
        $(this).siblings('.hidden-max').val(ui.values[1])

      }
    });
    $(this).find('.ui-slider-handle:eq(0)').append('<span class="slider-range-min value">' + $(this).slider('values', 0) + '</span>');
    $(this).find('.ui-slider-handle:eq(1)').append('<span class="slider-range-max value">' + $(this).slider('values', 1) + '</span>');
  })
}

function initProfileMenu() {
  var menuBtn = $('.profile__menu-btn');
  var menu = $('body');

  menuBtn.on('click', function (e) {
    e.preventDefault();
    menu.toggleClass('profile__menu-active')
  });

  jQuery(document).mouseup(function (e) {
    var block = jQuery('.profile__menu-drop');
    if (!block.is(e.target)
      && block.has(e.target).length === 0) {
      $('body').removeClass('profile__menu-active');
    }
  });

  var accountBtn = $('.account__settings-btn');
  var account = $('body');

  accountBtn.on('click', function (e) {
    e.preventDefault();
    account.toggleClass('account__settings-active')
  });

  jQuery(document).mouseup(function (e) {
    var block = jQuery('.account__settings-drop');
    if (!block.is(e.target)
      && block.has(e.target).length === 0) {
      $('body').removeClass('account__settings-active');
    }
  });

  $('.profile__menu-item').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('active')
  })

  var chatBtn = $('.chat__nav-opener');
  var chat = $('body');

  chatBtn.on('click', function (e) {
    e.preventDefault();
    chat.toggleClass('chat__nav-active')
  });

  $('.chat__nav-close').on('click', function (e) {
    e.preventDefault();
    account.toggleClass('chat__nav-active')
  });

  jQuery(document).mouseup(function (e) {
    var block = jQuery('.chat__nav');
    if (!block.is(e.target)
      && block.has(e.target).length === 0) {
      $('body').removeClass('chat__nav-active');
    }
  });
}

function initForm() {
  var current_fs, next_fs, previous_fs;

  $(".next").click(function (e) {
    e.preventDefault();
    current_fs = $(this).parents('.form__step');
    next_fs = $(this).parents('.form__step').next();

    $("#progressbar li").eq($(".form__step").index(next_fs)).addClass("active");
    $("#progressbar li").eq($(".form__step").index(next_fs)).addClass("current").siblings().removeClass('current');

    next_fs.addClass("active");
    current_fs.removeClass("active");
  });

  $(".previous").click(function (e) {
    e.preventDefault();
    current_fs = $(this).parents('.form__step');
    previous_fs = $(this).parents('.form__step').prev();

    $("#progressbar li").eq($(".form__step").index(current_fs)).removeClass("active");
    $("#progressbar li").eq($(".form__step").index(previous_fs)).addClass("current").siblings().removeClass('current');
    previous_fs.addClass("active");
    current_fs.removeClass("active");
  });
}

function imageDownload() {
  $(".inputfile").change(function () {
    readURL(this);
  });

  $('.upload__img-delete').on('click', function (e) {
    e.preventDefault()
    $('.upload__img-row').find('input:checked').closest('.upload__img-col').remove()
    

    if ($('.filled').length <= 0) {
      $('.upload__img-wrapp').removeClass('fill')
    }
  })
}

function readURL(input) {
  var imgBox = $('<div class="upload__img-col current active"></div>')
  imgBox.append('<div class="upload__img img-bg"></div>')
  imgBox.append('<label class="radio"><input type="radio" class="hidden" name="1"><span class="radio-btn"></span></label>')

  if ($('.upload__img-wrapp').hasClass('upload__img-edit')) {
    $('.upload__img-row').append(imgBox)
  } else if ($('.upload__img-col').last().hasClass('current')) {
    setTimeout(function () {
      // var newBlock = $('.upload__img-col').first().clone().removeClass('filled').addClass('current');
      imgBox.find('.upload__img').removeAttr('style')
      imgBox.find('input').val('')
      $('.upload__img-row').append(imgBox)
    }, 300);
  }

  if (input.files && input.files[0]) {
    var targetParent = $(input).closest('.upload__img-wrapp').find('.upload__img-col.current');
    var target = targetParent.find('.upload__img');
    var reader = new FileReader();
    reader.onload = function (e) {
      $(target).css('background-image', 'url(' + e.target.result + ')');
      $(target).hide();
      $(target).fadeIn(650);
    }
    $('.upload__img-wrapp').addClass('fill')
    targetParent.removeClass('current').addClass('filled').next().addClass('current active')
    reader.readAsDataURL(input.files[0]);
  }
}

function initProggres(time) {
  var start = 100;
  var time = Math.round(time*1000/100);
  var progressEl = $('.chat__offer-progress:not(.in-prog)');
  var intervalId= setInterval(function () {
    if (start < 0) {
      clearInterval(intervalId)
      // progressEndCalback(progressEl)

    } else {
      progressEl.addClass('in-prog')
      progressEl.css("width", start + '%')
      progressEl.attr('data-val', start)
    }
    start--
  }, time)
}

function progressEndCalback(progressEl) {
  progressEl.removeClass('in-prog')
  progressEl.closest('.chat__offer-card').remove()

  var dataNum = progressEl.closest('.chat__offer-card').data('card');
  
  $('.chat__offer-togler').attr('data-num', dataNum).parent().remove()

  if ($('.chat__offer-box').find('.chat__offer-card').length == 0) {
    $('.chat__offer').removeClass('active');
    $('body').removeClass('chat__offer-active');
  }

  if ($('.chat__offer-card.visible').length == 0) {
    $('body').removeClass('chat__offer-active')
  }
}

function initChatInv() {
  $('body').on('click', '.chat__offer-togler', function (e) {
    e.preventDefault();
    var dataNum = $(this).data('num');

    $(this).closest('.chat__offer').find('.chat__offer-card[data-card="' + dataNum +'"]').slideToggle(200);
    $(this).toggleClass('active');
  })

  $('body').on('click', '.chat__offer-collapse', function (e) {
    e.preventDefault();

    var dataCard = $(this).closest('.chat__offer-card').data('card');

    $(this).closest('.chat__offer-card').removeClass('visible').slideUp();
    $(this).closest('.chat__offer').find('.chat__offer-togler[data-num="' + dataCard +'"]').removeClass('active')

    if ($('.chat__offer-card.visible').length == 0) {
      $('body').removeClass('chat__offer-active')
    }
  })

  $('body').on('click', '.chat__offer-close', function (e) {
    e.preventDefault();
    var dataCard = $(this).closest('.chat__offer-card').data('card');

    $(this).closest('.chat__offer').find('.chat__offer-togler[data-num="' + dataCard + '"]').parent().remove()
    $(this).closest('.chat__offer-card').remove();

    if ($('.chat__offer-box').find('.chat__offer-card').length == 0) {
      $('.chat__offer').removeClass('active');
      $('body').removeClass('chat__offer-active');
    }

    if ($('.chat__offer-card.visible').length == 0) {
      $('body').removeClass('chat__offer-active')
    }
  })

  $('body').on('click', '.card-min', function (e) {
    e.preventDefault();
    $('.chat__offer-card').slideUp();
  })

  $('body').on('click', '.card-max', function (e) {
    e.preventDefault();
    $('.chat__offer-card').slideDown();
  })

  if ($(window).width() < 1024) {
    $('body').on('click', '.chat__offer-label', function (e) {
      e.preventDefault();
      $('body').toggleClass('chat__offer-active')
      
      if ($('body').hasClass('chat__offer-active')) {
        $('.chat__offer-card').addClass('visible').slideDown()
      } else {
        $('.chat__offer-card').removeClass('visible').slideUp()
      }
    })
  } 
}

function initTab() {
  $('.tabs__content-item').hide();
  $('.tabs__content-item.active').show();

  $('body').on('click', '.tabs__nav-btn--js', function (e) {
    e.preventDefault();
    var id = $(this).attr('data-tab')
    var content = $(this).closest('.tabs').find('.tabs__content-item[data-tab="' + id + '"]');
    $(this).closest('.tabs__nav-js').find('.tabs__nav-btn--js.active').removeClass('active');
    $(this).addClass('active');
    $($('.tabs__content-item[data-tab="' + id + '"]')[0]).fadeIn(400).addClass('active').siblings('.active').hide().removeClass('active');
  });
}

function initAccordeon() {
  var dropBtn = jQuery('.accordeon__btn');

  dropBtn.on('click', function (e) {
    e.preventDefault();
    var link = $(this);
    var closestUl = link.closest('ul');
    var parallelActiveLinks = closestUl.find('.active')
    var closestLi = link.closest('li');
    var linkStatus = closestLi.hasClass('active');
    var count = 0;

    closestUl.find('.accordeon__drop').slideUp(function () {
      if (++count == closestUl.find('.accordeon__drop').length)
        parallelActiveLinks.removeClass('active');
    });

    if (!linkStatus) {
      closestLi.children('.accordeon__drop').slideDown();
      closestLi.addClass('active');
    }
  });
}

function initTag() {
  $('body').on('click', '.gift-tag', function () {
    var $this = $(this);
    var $dataId = $(this).data('id')
    var $parent = $this.closest(".profile__gift-item");
    var $text = $parent.find('.profile__gift-text').clone();
    var tagLi = $('<li>');
    var tagItem = ('<div class="gift__tag"><button class="gift__tag-close"></button></div>');
    tagLi.attr('data-tag', $dataId).addClass('gift__tag-item').append(tagItem);
    tagLi.find('.gift__tag').prepend($text);

    if ($this.is('input[type="checkbox"]:checked')) {
      $(".gift__tag-list").append(tagLi);
    } else {
      $(".gift__tag-list").find('.gift__tag-item[data-tag="' + $dataId + '"]').remove();
    }
  });

  $('body').on('click', '.gift__tag-close', function (e) {
    e.preventDefault();

    var $parent = $(this).closest('.gift__tag-item');
    var tagData = $parent.data('tag');
    $('.profile__gift-item').find('.gift-tag[data-id="' + tagData + '"]').prop("checked", false);
    $parent.remove()
  });
}

function initMask() {
  $('.card-mask').mask('9999-9999-9999-9999');
  $('.card-date').mask('99          /          99');
  $('.card-cvv').mask('999')
}

function initCredits() {
  $('body').on('click', '.credits-js', function () {
    var $this = $(this);
    var val = $this.closest('.radio').find('.credits-val').text();
    var cost = $this.closest('.radio').find('.credits-cost').text();
    var wrapp = $this.closest('.radio').find('.radio-wrapp').clone();

    wrapp.find('.radio-btn').remove()
    $('.credits-section').addClass('active')
    $('.credits__pay-info').html(wrapp)
    $('.credits__btn').find('.credits-val').text(val)
    $('.credits__btn').find('.credits-cost').text(cost)
  })

  $('body').on('click', '.credits-back', function (e) {
    e.preventDefault();

    $('.credits-section').removeClass('active')
  })
}

function initScroll() {
  if ($(".drop__menu").length) {
    $(".drop__menu").mCustomScrollbar({
      alwaysShowScrollbar: 0,
      scrollbarPosition: 'outside',
      scrollInertia: 300
    });
  }
  
  if ($(window).width() >= 1024 && $(".custom-scroll").length) {
    $(".custom-scroll").mCustomScrollbar({
      alwaysShowScrollbar: 0,
      scrollbarPosition: 'outside',
      scrollInertia: 300,
      advanced: { updateOnContentResize: true }
    });
  }
}

function initLike() {
  $('body').on('click', '.lb-like', function (e) {
    e.preventDefault();

    $(this).toggleClass('is-liked')
  })
}

function initMessagesMenu() {
  var menuBtn = $('.messages__menu-burger');
  var menu = $('body');

  menuBtn.on('click', function (e) {
    e.preventDefault();
    menu.toggleClass('messages__menu-active')
  });
}

function propCheckbox() {
  $('body').on('click', '.select-all', function () {
    $('.messages__item-checkbox .hidden').prop('checked', this.checked);
  });

  $('body').on('click', '.messages__sort-menu input[type="radio"]', function () {
    var val = $(this).data('sort')

    $('.messages__item-checkbox .hidden').prop('checked', false);
    $('.messages__sort-menu .select-all').prop('checked', this.checked);

    if (val == 'all') {
      $('.messages__item-checkbox .hidden').prop('checked', this.checked);
    } else {
      $('.' + val).find('.messages__item-checkbox .hidden').prop('checked', this.checked);
    }
  });
}

function initMessageOpen() {
  $('body').on('click', '.letters__answer-opener', function () {
    $('.letters__answer-text').find('.form__input').removeAttr('disabled');
    $('.letters__answer-btns').addClass('active');
    $(this).remove();
  });
}

function lettersImgUpload() {
  var imgWrap = "";
  var imgArray = [];

  $('.letters__upload-inputfile').each(function () {
    $(this).on('change', function (e) {
      imgWrap = $(this).closest('.letters__answer-box').find('.upload__img-wrap');
      var maxLength = $(this).attr('data-max_length');

      var files = e.target.files;
      var filesArr = Array.prototype.slice.call(files);
      var iterator = 0;
      filesArr.forEach(function (f, index) {

        if (!f.type.match('image.*')) {
          return;
        }

        if (imgArray.length > maxLength) {
          return false
        } else {
          var len = 0;
          for (var i = 0; i < imgArray.length; i++) {
            if (imgArray[i] !== undefined) {
              len++;
            }
          }
          if (len > maxLength) {
            return false;
          } else {
            imgArray.push(f);

            var reader = new FileReader();
            reader.onload = function (e) {
              var html = "<div class='upload__img-box'><div style='background-image: url(" + e.target.result + ")' data-number='" + $(".upload__img-close").length + "' data-file='" + f.name + "' class='img-bg'><div class='upload__img-close'></div></div></div>";
              imgWrap.append(html);
              iterator++;
            }
            reader.readAsDataURL(f);
          }
        }
      });
      setTimeout(function () {
        if ($(window).width() >= 1024) {
          chatHeight()
        }
      }, 300);
    });
  });

  $('body').on('click', ".upload__img-close", function (e) {
    var file = $(this).parent().data("file");
    for (var i = 0; i < imgArray.length; i++) {
      if (imgArray[i].name === file) {
        imgArray.splice(i, 1);
        break;
      }
    }
    $(this).parent().parent().remove();
    if ($(window).width() >= 1024) {
      chatHeight()
    }
  });
}

function autosize() {
  var text = $('.autosize');

  text.each(function () {
    $(this).attr('rows', 1);
    resize($(this));
  });

  text.on('input', function () {
    resize($(this));
  });

  function resize($text) {
    $text.css('height', 'auto');
    $text.css('height', $text[0].scrollHeight + 'px');
  }

}

function letterCounter($text) {
  var cntMaxLength = $text.attr('maxlength');
  var $length = $text.html().length
  if ($length >= '20') {
    $('.chat__length').text($length + '/' + cntMaxLength);
    $('.chat__length').addClass('is-visible')
  } else if ($length < '20') {
    $('.chat__length').removeClass('is-visible')
  }

  if ($length >= cntMaxLength) {
    $('.chat__length').addClass('error')
  } else if ($length < cntMaxLength) {
    $('.chat__length').removeClass('error')
  }
}

function chatHeight() {
  let chatBox = $('.chat__messages')
  let chatHeight = $('.chat__body').outerHeight(true)
  let messageHeight = $('.chat__messages-area').outerHeight(true)
  let imgHeight = $('.upload__img-wrap').outerHeight(true)
  let videoHeight

  if ($('.chat__video-box').hasClass('active')) {
    videoHeight = 248
  } else {
    videoHeight = 0
  }

  chatBox.css('height', chatHeight - messageHeight - imgHeight - videoHeight - '44')

  $('.custom-scroll').mCustomScrollbar("update");
}

function chatArea() {
  $('.chat__textarea').off('paste').on('paste', function (e) {
    e.preventDefault();
    var text = e.originalEvent.clipboardData ? e.originalEvent.clipboardData.getData('text/plain') : window.clipboardData.getData('Text');
    insertText(text);
  });
  
  $('.chat__textarea').on('keyup paste', function (e) {
    e.preventDefault();
  
    if ($(window).width() >= 1024) {
      chatHeight()
    }
    letterCounter($(this))
  });

  $('.chat__messages-emoticon').on('click', function (e) {
    e.preventDefault()
    $('.chat__emoticon').toggleClass('active')
  })
}

function insertText(text) {
  if (document.queryCommandSupported('insertText')) {
    document.execCommand('insertText', false, text);
  }
  
  else {
    var range = document.getSelection().getRangeAt(0);
    range.deleteContents();
    var textNode = document.createTextNode(text);
    range.insertNode(textNode);
    range.selectNodeContents(textNode);
    range.collapse(false);

    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  }
};

function chatCam() {
  $('.chat__cam-girl').on('click', function (e) {
    e.preventDefault()
  
    if ($(this).hasClass('active')) {
      $(this).removeClass('active')
      $('.chat__video-box').removeClass('active');
      $('.chat__head').removeClass('active');
  
      if ($(window).width() < 1023) {
        $('.chat__cam-man').removeClass('active')
        $('.chat__col-3').removeClass('camera-active');
        $('.chat__video-box').removeClass('camera-man-active');
      }
    } else {
      $(this).addClass('active')
      $('.chat__video-box').addClass('active');
      $('.chat__head').addClass('active');
    }
  
    if ($(window).width() >= 1024) {
      chatHeight()
    }
  })
  
  $('.chat__cam-man').on('click', function (e) {
    e.preventDefault()
    $(this).toggleClass('active');
    $('.chat__col-3').toggleClass('camera-active');
    $('.chat__video-box').toggleClass('camera-man-active');
    $('.custom-scroll').mCustomScrollbar("update");
  })
}

function chatContactsBtn() {
  $('.search-btn').on('click', function (e) {
    e.preventDefault()
    $('.chat__contacts-search').addClass('active')
  })
  
  $('.search-close').on('click', function (e) {
    e.preventDefault()
    $('.chat__contacts-search').removeClass('active')
  })
  
  $('.chat__contacts-toggle').on('click', function (e) {
    e.preventDefault()
  
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $('.chat__contacts-list--item').not('.is-favorite').show()
    } else {
      $(this).addClass('active')
      $('.chat__contacts-list--item').not('.is-favorite').hide()
    }
  })
}

function initChat() {
  $('.chat-opener').on('click', function (e) {
    e.preventDefault()
    $('.chat-section').addClass('chat-active')
    if ($(window).width() >= 1024) {
      chatHeight()
    }
  })
  
  $('.chat-close').on('click', function (e) {
    e.preventDefault()
    $('.chat-section').removeClass('chat-active')
  })
}

function emotionStatus() {
  $('.emotion__opener').on('click', function (e) {
    e.preventDefault()
    $(this).closest('.emotion__drop-box').toggleClass('active')
  })

  jQuery(document).mouseup(function (e) {
    var block = jQuery('.emotion__drop-box');
    if (!block.is(e.target)
      && block.has(e.target).length === 0) {
      block.removeClass('active');
    }
  });
  $('.emotion__btn').on('click', function (e) {
    e.preventDefault()
    $('.emotion__drop-box').removeClass('active')

    var icon = $(this).find('i').clone()
    var text = $(this).find('strong').clone()

    $(this).closest('.emotion__drop-box').find('.emotion__opener').empty().append(text, icon)
  })
}





//# sourceMappingURL=my.js.map
