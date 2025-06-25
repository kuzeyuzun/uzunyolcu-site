function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'tr',
    includedLanguages: 'en,ar,ru,fr,de,es,it,fa,zh',
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE
  }, 'google_translate_element');
}
(function(){
  var gt=document.createElement('script');
  gt.src='//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  document.body.appendChild(gt);
})();