# Otopark Otomasyonu

## Gereksinimler

-         Tüm işlemler REST servisleri üzerinden ilerleyecek.

-         Servis kullanımlarına güvenlik kontrolleri yapılacaktır.

-         Park yeri bilgileri yönetimi olmayacaktır. Otoparkın kapasitesi 50 birimlik  araç alabilecek büyüklükte olacaktır.

-         Araç kategorileri A, B ve C olmak üzere 3 çeşit olacaktır.

                - A kategorisinde: Motosiklet, sedan, hatcback araçları olacaktır.

                - B kategorisinde: Jeep, SUV araçları olacaktır.

                - C kategorisinde: Minibüs, kamyonet araçları olacaktır.

-         A tipinden 1 kat, B tipinden 1.2 kat, C tipinden 2 kat ücret alınacaktır.

-         Baz ücret sistem tarafından yönetilebilir olacaktır.

-         Araçların park süreleri için 5 gün sonrası için bir alt kademeye düşürülecektir.

-         Araçların park etmesi gereken yeri sistem otomatik hesaplayacaktır. Park edecekleri alan hesaplaması, ücret katsayısına göre yapılacaktır. (Örn1)

-         Üyeler için %20 indirim uygulanacaktır.

-         Ödeme işlemi yazılmayacak. Kodlama sırasında “bu kısımda ödeme işlemi yapılmaktadır” şeklinde açıklama girilmesi yeterlidir.

-         Araç yerleştirmesi en optimum şekilde yapılacaktır

## Projeyi Çalıştırma

### `npm install`

### `npm start`

[http://localhost:3000](http://localhost:3000) 
ile önyüz e erişim sağlanmaktadır

Proje aynı zamanda Dockerize edilmiştir.

### `docker build --no-cache -t otopark .`

Bu Komut ile docker image oluşturulabilir

### `docker run -d --name otopark  -p 3001:3000 otopark`

Bu Komut ile proje docker container içerisinde çalışacaktır

[http://localhost:3001](http://localhost:3001)
ile önyüz e erişim sağlanabilir

## Yapılanlar

-       Güvenlik Jwt Token ile gerçekleştirilmiştir. Token Local Storage da tutulmuştur.

-       Giriş Bilgileri:    Kullanıcı adı: username, Şifre: password 

-       Uygulama Tek sayfadan oluşmaktadır. Sayfa Geçişleri Yerine Panel Mantığı Kullanılmıştır.

-       Projede Database Kullanılmamıştır. Veriler proje ayağa kalkarken oluşturulmuştur. Buna rağmen projedeki domain yapısı ve kullanım
        database varmış gibi standartlara uygun gerçekleştirilmiştir.

-       Park Alanı Paneli: Park Alanı Düz 50 birim uzunlukta olduğu varsayılmıştır. Burada Sıralı olarak park edilen araçlar görünmektedir.
        Eğer bir araba çıkış yaparsa oralarda boşluklar oluşabilir. Yeni gelen araç için araç uzunluğu ve sonraki ihtimaller 
        recursive bir algoritma ile hesaplanarak en minimum kayıp olacak şekilde yerleştirilmektedir.

-       Araç Giriş Paneli: Aracın plakası ve tipi girilerek araç uygun yere yerleştirilmesi sağlanmıştır.

-       Araç Çıkış Paneli: Aracın plakası girilerek araç çıkış işlemi başlatılmaktadır. Önce Ödeme Modal ı gelmektedir. Ödeme Gerçekleştiğinde
        Çıkış işlemi de farklı bir servis aracılığı ile yapılmakdır.

-       Üyelik Paneli: Temel Seviyede plakalara üyelik sistemi yapılmıştır. Eğer çıkış yapan araç üye olarak kayıtlı ise hesaplama yaparken %20
        indirim otomatik olarak dahil edilmektedir.

-       Birim Fiyat Güncelle Modal: Baz Fiyatın güncelleme işlemi buradan yapılmaktadır.