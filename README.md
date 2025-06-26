# Uzunyolcu Site

Bu proje, kapsamlı ve modüler bir bilgi platformu oluşturmak amacıyla tasarlanmıştır. Her ana başlık kendi klasöründe, ortak kaynaklar ise `common` klasöründe toplanır. Proje büyüdükçe kolayca yeni başlık, içerik ve özellik eklenebilir.

## Ana Klasörler ve İşlevleri

- **common/**  
  Site genelinde kullanılan ortak stil, script, ikon, font, görsel, veri dosyaları ve şablonlar burada bulunur.
- **digital/**  
  Dijital dünyaya dair alt başlıklar ve içerikler.
- **ingilizce/**  
  İngilizce öğrenimi ve ilgili alt başlıklar.
- **islam/**  
  İslami konular ve alt başlıklar.
- **saglik/**  
  Sağlıkla ilgili alt başlıklar ve içerikler.
- **build/**  
  Derlenmiş veya dağıtıma hazır dosyalar (genellikle otomatik oluşturulur).
- **deploy/**  
  Yayına alma/deploy ile ilgili script ve ayarlar.
- **docs/**  
  Proje dokümantasyonu ve geliştirici notları.
- **tests/**  
  Otomasyon, birim veya entegrasyon testleri.

## Ana Dosyalar

- **index.html**  
  Sitenin ana sayfası, tüm ana başlıklara giriş sağlar.
- **alt-basliklar.html**  
  Genel alt başlıklar menüsü. Her ana başlık klasöründe ayrıca özelleştirilmiş `alt-basliklar.html` dosyası bulunur.
- **README.md**  
  Proje hakkında genel bilgi ve rehber dosyası.

## common/ Klasörü İçeriği

- **fonts/**, **icons/**, **images/**, **audio/**, **videos/**  
  Ortak kullanılan medya ve varlıklar.
- **components/**  
  Tekrar kullanılabilir HTML veya JS bileşenleri.
- **data/**  
  Ortak veri dosyaları (JSON, CSV, vb).
- **meta/**  
  SEO ve paylaşım için meta dosyaları.
- **templates/**  
  Ortak HTML şablonları.
- **404.html**, **robots.txt**, **sitemap.xml**  
  SEO ve kullanıcı deneyimi için temel dosyalar.
- **reset.css**, **dark-theme.css**, **animations.css**, **side-menu.css**  
  Ortak stiller.
- **global.js**, **common_translate.js**, **constants.js**, **service-worker.js**  
  Ortak JavaScript ve servis dosyaları.
- **manifest.json**  
  PWA ve web uygulaması ayarları.
- **env.example**  
  Ortak ortam değişkenleri için örnek dosya.

## Katkı ve Geliştirme

1. Kendi başlığınız veya içeriğiniz için uygun klasöre ekleme yapabilirsiniz.
2. Ortak kaynaklar ekleyecekseniz mutlaka `common/` klasörünün ilgili alt klasörünü kullanın.
3. Kod ve klasör isimlerinde Türkçe karakter ve boşluk kullanmayın.
4. Herhangi bir konuda katkı yapmak, soru sormak veya hata bildirmek için [Issues](https://github.com/kuzeyuzun/uzunyolcu-site/issues) bölümünü kullanabilirsiniz.

## Lisans

Bu proje [MIT](LICENSE) lisansı ile lisanslanmıştır.

---

Her türlü geri bildiriminiz ve katkınız için teşekkürler!
