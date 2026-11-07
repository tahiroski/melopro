# 🌟 MeloPro — Kişisel Ev Ekonomisi ve Ödeme Takip Sistemi

MeloPro; bilgisayarınızda ve telefonunuzda kesintisiz, hızlı ve güvenli çalışan modern bir kişisel bütçe ve borç takip uygulamasıdır.

---

## 📱 Özellikler

1. **%100 Veri İzolasyonu & Gizlilik:**
   - Sunucu veritabanı tutmaz; her cihaz kendi `localStorage` hafızasında çalışır.
   - Siz kendi telefonunuzdan, arkadaşınız kendi telefonundan aynı linke girse bile **verileriniz asla birbirine karışmaz**.
2. **Çoklu Profil Desteği:**
   - Tek bir cihazda dahi ("Benim Bütçem", "Arkadaşım", "Ev Bütçesi") şeklinde ayrı profiller açıp tek tıkla aralarında geçiş yapabilirsiniz.
3. **PWA (Telefona Mobil Uygulama Olarak Yükleme):**
   - **iPhone (Safari):** Paylaş butonuna basıp **"Ana Ekrana Ekle"** diyerek uygulama gibi kullanabilirsiniz.
   - **Android (Chrome):** Menüden **"Ana Ekrana Ekle"** veya **"Uygulamayı Yükle"** seçeneğiyle tam ekran mobil uygulama olarak yükleyebilirsiniz.
   - İnternetiniz olmasa dahi çevrimdışı (offline) çalışır.
4. **Akıllı Ödeme Radarı:**
   - Vadesi geçen borçları (🚨 kırmızı), bugün son günü olanları (⚠️ turuncu) ve yaklaşanları otomatik listeler.
5. **Gelişmiş Taksit Motoru:**
   - 2 ila 36 ay arası taksitleri otomatik olarak gelecek aylara böler.
6. **Yedekleme ve PC/Telefon Aktarımı:**
   - JSON dosyası veya doğrudan metin kopyala-yapıştır ile verilerinizi telefonunuza aktarabilirsiniz.

---

## 🚀 GitHub Pages ile Yayına Alma (2 Dakika)

1. GitHub'da **`melopro`** adında yeni bir repository (depo) oluşturun.
2. Terminalde şu komutları çalıştırın:
   ```bash
   git init
   git add .
   git commit -m "MeloPro v5: PWA & Multi-Profile Release"
   git branch -M main
   git remote add origin https://github.com/KULLANICI_ADINIZ/melopro.git
   git push -u origin main
   ```
3. GitHub deponuzun **Settings** > **Pages** menüsüne gidin:
   - Branch olarak **`main`** seçin ve **Save** butonuna tıklayın.
4. 1-2 dakika içinde siteniz `https://KULLANICI_ADINIZ.github.io/melopro/` adresinde canlıya çıkacaktır!
   - Bu linki hem kendiniz telefonunuzda açabilir hem de arkadaşınızla paylaşabilirsiniz. Herkesin verisi kendi telefonunda güvende kalır.
