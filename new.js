var dataReload = document.querySelectorAll("[data-reload]");
var language = {
  eng: {
    hamburger:
      "INGREDIENTS:\n\nBURGER PATIE - LETTUCE - TOMATO\n\n100g...37TL    150g...42TL",
    cheeseburger:
      "INGREDIENTS: \n\n BURGER PATIE - CHEESE - LETTUCE - TOMATO \n\n 100g...38TL    150g...43TL",
    crispychicken:
      "INGREDIENTS: CHICKEN FILLET - CHEESE-LETTUCE - SPECIAL SAUCE",
    mexican:
      "INGREDIENTS: BURGER PATIE - GRILLED MIX PEPPER - GRILLED ONION - SPECIAL HOT SAUCE",
  },
  tr: {
    hamburger:
      "<h4 style='font-family: Roboto Slab Bold;position: relative;bottom: -10px;'> İÇİNDEKİLER: </h4><p style='text-align: center;position: relative;bottom: -12px;'>Burger Köftesi - Marul - Domates</p><br><section style='background-color: #795226;;''><br><p style='text-align: center;position: relative;top: -10px;''>100g + Chips...160TL&emsp;&emsp;150g + Chips...185TL&emsp;&emsp;200g + Chips...210TL</p></section>",
    cheeseburger:
      "<h4 style='font-family: Roboto Slab Bold;position: relative;bottom: -10px;'> İÇİNDEKİLER: </h4><p style='text-align: center;position: relative;bottom: -12px;'>Burger Köftesi - Peynir - Marul - Domates</p><br><section style='background-color: #795226;;''><br><p style='text-align: center;position: relative;top: -10px;''>100g + Chips...165TL&emsp;&emsp;150g + Chips...190TL&emsp;&emsp;200g + Chips...215TL</p></section>",
    crispychicken:
      "<h4 style='font-family: Roboto Slab Bold;position: relative;bottom: -10px;'> İÇİNDEKİLER: </h4><p style='text-align: center;position: relative;bottom: -12px;'>Tavuk Fileto - Peynir - Marul - Özel Sos</p><br><section style='background-color: #795226;;''><br><p style='text-align: center;position: relative;top: -10px;''>200g + Chips...180TL</p></section>",
    mexican:
      "<h4 style='font-family: Roboto Slab Bold;position: relative;bottom: -10px;'> İÇİNDEKİLER: </h4><p style='text-align: center;position: relative;bottom: -12px;'>Burger Köftesi - Izgara Karışık Biber - Izgara Soğan - Özel Sos</p><br><section style='background-color: #795226;;''><br><p style='text-align: center;position: relative;top: -10px;''>100g + Chips...170TL&emsp;&emsp;150g + Chips...195TL&emsp;&emsp;200g + Chips...220TL</p></section>",
    swiss:
      "<h4 style='font-family: Roboto Slab Bold;position: relative;bottom: -10px;'> İÇİNDEKİLER: </h4><p style='text-align: center;position: relative;bottom: -12px;'>Burger Köftesi - Izgara Mantar - Izgara Soğan - Swiss Peynir - Turşu - Marul - Domates</p><br><section style='background-color: #795226;;''><br><p style='text-align: center;position: relative;top: -10px;''>100g + Chips...185TL&emsp;&emsp;150g + Chips...210TL&emsp;&emsp;200g + Chips...235TL</p></section>",
    american:
      "<h4 style='font-family: Roboto Slab Bold;position: relative;bottom: -10px;'> İÇİNDEKİLER: </h4><p style='text-align: center;position: relative;bottom: -12px;'>Burger Köftesi - Soğan Halkası - Peynir - Turşu - Marul - Domates</p><br><section style='background-color: #795226;;''><br><p style='text-align: center;position: relative;top: -10px;''>100g + Chips...185TL&emsp;&emsp;150g + Chips...210TL&emsp;&emsp;200g + Chips...235TL</p></section>",
    stuffed:
      "<h4 style='font-family: Roboto Slab Bold;position: relative;bottom: -10px;'> İÇİNDEKİLER: </h4><p style='text-align: center;position: relative;bottom: -12px;'>Burger Köftesi - Izgara Mantar - Gouda Peyniri - Labne Rendelenmiş Peynir - Izgara Soğan - Çıtır Soğan</p><br><section style='background-color: #795226;;''><br><p style='text-align: center;position: relative;top: -10px;''>100g + Chips...185TL&emsp;&emsp;150g + Chips...210TL&emsp;&emsp;200g + Chips...235TL</p></section>",
    sweetdalton:
      "<h4 style='font-family: Roboto Slab Bold;position: relative;bottom: -10px;'> İÇİNDEKİLER: </h4><p style='text-align: center;position: relative;bottom: -12px;'>Burger Köftesi - Kıtır Karışım - Özel Peynir Sosu - Marul - Domates</p><br><section style='background-color: #795226;;''><br><p style='text-align: center;position: relative;top: -10px;''>100g + Chips...190TL&emsp;&emsp;150g + Chips...215TL&emsp;&emsp;200g + Chips...240TL</p></section>",
    discofrisco:
      "<h4 style='font-family: Roboto Slab Bold;position: relative;bottom: -10px;'> İÇİNDEKİLER: </h4><p style='text-align: center;position: relative;bottom: -12px;'>Burger Köftesi - Mozarella Peynir - Kızarmış Mozarella - Frisco Sos - Mor Soğan - Salatalık Turşusu - Marul - Domates</p><br><section style='background-color: #795226;;''><br><p style='text-align: center;position: relative;top: -10px;''>100g + Chips...190TL&emsp;&emsp;150g + Chips...215TL&emsp;&emsp;200g + Chips...245TL</p></section>",
    vertigo:
      "<h4 style='font-family: Roboto Slab Bold;position: relative;bottom: -10px;'> İÇİNDEKİLER: </h4><p style='text-align: center;position: relative;bottom: -12px;'>Burger Köftesi - Izgara Hellim - Mozarella Peynir - Kırmızı Cheddar Peynir - Taze Fesleğen - Kıtır Soğan - Karamelize Soğan - Domates</p><br><section style='background-color: #795226;;''><br><p style='text-align: center;position: relative;top: -10px;''>100g + Chips...185TL&emsp;&emsp;150g + Chips...210TL&emsp;&emsp;200g + Chips...235TL</p></section>",
    butchers:
      "<h4 style='font-family: Roboto Slab Bold;position: relative;bottom: -10px;'> İÇİNDEKİLER: </h4><p style='text-align: center;position: relative;bottom: -12px;'>Burger Köftesi - Kırmızı Cheddar Peynir - Soğan Dizeleri - Kornişon Turşusu - Yeşillik - Domates</p><br><section style='background-color: #795226;;''><br><p style='text-align: center;position: relative;top: -10px;''>100g + Chips...185TL&emsp;&emsp;150g + Chips...210TL&emsp;&emsp;200g + Chips...235TL</p></section>",
    vintagetorque:
      "<h4 style='font-family: Roboto Slab Bold;position: relative;bottom: -10px;'> İÇİNDEKİLER: </h4><p style='text-align: center;position: relative;bottom: -12px;'>Burger Köftesi - Füme Beef - Eski Cheddar Peynir - Mozarella Peynir - Çıtır Soğan - Salatalık Turşusu - Hardal</p><br><section style='background-color: #795226;;''><br><p style='text-align: center;position: relative;top: -10px;''>100g + Chips...205TL&emsp;&emsp;150g + Chips...230TL&emsp;&emsp;200g + Chips...255TL</p></section>",
    alpha:
      "<h4 style='font-family: Roboto Slab Bold;position: relative;bottom: -10px;'> İÇİNDEKİLER: </h4><p style='text-align: center;position: relative;bottom: -12px;'>Burger Köftesi - Kırmızı Cheddar Peynir - Özel Soğan Sos - Krem Peynir - Kıtır Bacon(Dana Bacon/Bacon) - Kıtır Soğan</p><br><section style='background-color: #795226;;''><br><p style='text-align: center;position: relative;top: -10px;''>100g + Chips...200TL&emsp;&emsp;150g + Chips...225TL&emsp;&emsp;200g + Chips...250TL</p></section>",
    cojack:
      "<h4 style='font-family: Roboto Slab Bold;position: relative;bottom: -10px;'> İÇİNDEKİLER: </h4><p style='text-align: center;position: relative;bottom: -12px;'>Burger Köftesi - Kırmızı Cheddar Peynir - Özel Jack Sosu - Çıtır Jalapeno - Koslov - Mor Soğan</p><br><section style='background-color: #795226;;''><br><p style='text-align: center;position: relative;top: -10px;''>100g + Chips...185TL&emsp;&emsp;150g + Chips...210TL&emsp;&emsp;200g + Chips...235TL</p></section>",
    suzieque:
      "<h4 style='font-family: Roboto Slab Bold;position: relative;bottom: -10px;'> İÇİNDEKİLER: </h4><p style='text-align: center;position: relative;bottom: -12px;'>Burger Köftesi - Kırmızı Cheddar Peynir - Dana Antrikot Füme - Kızarmış Mozarella - Meksikan Krem Peynir - Glaze BBQ</p><br><section style='background-color: #795226;;''><br><p style='text-align: center;position: relative;top: -10px;''>100g + Chips...205TL&emsp;&emsp;150g + Chips...230TL&emsp;&emsp;200g + Chips...255TL</p></section>",
    rumble59:
      "<h4 style='font-family: Roboto Slab Bold;position: relative;bottom: -10px;'> İÇİNDEKİLER: </h4><p style='text-align: center;position: relative;bottom: -12px;'>Burger Köftesi - Kırmızı Cheddar Peynir - Ribeye Steak - Cajun Cips - Karışık Rende Peynir</p><br><section style='background-color: #795226;;''><br><p style='text-align: center;position: relative;top: -10px;''>100g + Chips...190TL&emsp;&emsp;150g + Chips...215TL&emsp;&emsp;200g + Chips...240TL</p></section>",
    greenfeast:
      "<h4 style='font-family: Roboto Slab Bold;position: relative;bottom: -10px;'> İÇİNDEKİLER: </h4><p style='text-align: center;position: relative;bottom: -12px;'>Burger Köftesi - Kırmızı Cheddar Peynir - Ezilmiş Taze Avokado - Çıtır Sebze - Özel Sos</p><br><section style='background-color: #795226;;''><br><p style='text-align: center;position: relative;top: -10px;''>100g + Chips...195TL&emsp;&emsp;150g + Chips...220TL&emsp;&emsp;200g + Chips...245TL</p></section>",
    hotshotpepper:
      "<h4 style='font-family: Roboto Slab Bold;position: relative;bottom: -10px;'> İÇİNDEKİLER: </h4><p style='text-align: center;position: relative;bottom: -12px;'>Burger Köftesi - Mozarella Peynir - Salsa Sos - Jalapeno Turşu - Peynir Omlet - Yeşillik</p><br><section style='background-color: #795226;;''><br><p style='text-align: center;position: relative;top: -10px;''>100g + Chips...69TL&emsp;&emsp;150g + Chips...77TL&emsp;&emsp;200g + Chips...84TL</p></section>",
    bacon:
      "<h4 style='font-family: Roboto Slab Bold;position: relative;bottom: -10px;'> İÇİNDEKİLER: </h4><p style='text-align: center;position: relative;bottom: -12px;'>Burger Köftesi - Bacon - Kırmızı Cheddar Peynir - Karamelize Mor Soğan - Özel Sos - Marul - Domates</p><br><section style='background-color: #795226;;''><br><p style='text-align: center;position: relative;top: -10px;''>100g + Chips...200TL&emsp;&emsp;150g + Chips...225TL&emsp;&emsp;200g + Chips...250TL</p></section>",
    theoakwood:
      "<h4 style='font-family: Roboto Slab Bold;position: relative;bottom: -10px;'> İÇİNDEKİLER: </h4><p style='text-align: center;position: relative;bottom: -12px;'>Burger Köftesi - Mozarella Peynir - Kıtır Parmesan - Burger Jam - Amerikan Sarımsak Sos</p><br><section style='background-color: #795226;;''><br><p style='text-align: center;position: relative;top: -10px;''>100g + Chips...180TL&emsp;&emsp;150g + Chips...205TL&emsp;&emsp;200g + Chips...230TL</p></section>",
    montreal:
      "<h4 style='font-family: Roboto Slab Bold;position: relative;bottom: -10px;'> İÇİNDEKİLER: </h4><p style='text-align: center;position: relative;bottom: -12px;'>Burger Köftesi - Bacon Jam - Kırmızı Cheddar Peynir - Marul - Özel Sos</p><br><section style='background-color: #795226;;''><br><p style='text-align: center;position: relative;top: -10px;''>100g + Chips...195TL&emsp;&emsp;150g + Chips...220TL&emsp;&emsp;200g + Chips...245TL</p></section>",
    nineoneone:
      "<h4 style='font-family: Roboto Slab Bold;position: relative;bottom: -10px;'> İÇİNDEKİLER: </h4><p style='text-align: center;position: relative;bottom: -12px;'>300g Çifte Burger Köfteleri - 80g Füme Dana Bacon - 3x Cheddar Peynir - Balsamik Mor Soğan - Jumbo Soğan Halkası - Yeşillik - Domates</p><br><section style='background-color: #795226;;''><br><p style='text-align: center;position: relative;top: -10px;''>380g + Chips...310TL</p></section>",
    doublebrisket:
      "<h4 style='font-family: Roboto Slab Bold;position: relative;bottom: -10px;'> İÇİNDEKİLER: </h4><p style='text-align: center;position: relative;bottom: -12px;'>200g Burger Köftesi - 140g Çekilmiş Brisket - Soğan Dizeleri - Mozarella Peynir - Marul</p><br><section style='background-color: #795226;;''><br><p style='text-align: center;position: relative;top: -10px;''>340g + Chips...355TL</p></section>",
    pittboss:
      "<h4 style='font-family: Roboto Slab Bold;position: relative;bottom: -10px;'> İÇİNDEKİLER: </h4><p style='text-align: center;position: relative;bottom: -12px;'>200g Burger Köftesi - 140g Yavaş Pişmiş Biftek - 100g Çekilmiş Dana Brisket - 3x Kırmızı Cheddar - Kornişon - Marul - Domates</p><br><section style='background-color: #795226;;''><br><p style='text-align: center;position: relative;top: -10px;''>420g + Chips...385TL</p></section>",
    roadhouse:
      "<h4 style='font-family: Roboto Slab Bold;position: relative;bottom: -10px;'> İÇİNDEKİLER: </h4><p style='text-align: center;position: relative;bottom: -12px;'>Burger Köftesi - Maple Bacon(Dana Bacon/Bacon) - Çıtır Tavuk Bonfile - Soğan Dizeleri - Kırmızı Cheddar Peyniri</p><br><section style='background-color: #795226;;''><br><p style='text-align: center;position: relative;top: -10px;''>150g Burger + 150g Tavuk + Chips...310TL</p></section>",

    bbq: "<h4 style='font-family: Roboto Slab Bold;position: relative;bottom: -10px;'> İÇİNDEKİLER: </h4><p style='text-align: center;position: relative;bottom: -12px;'>Burger Köftesi - Burger Peyniri - Jalapeno -  Marul - Domates - Soğan - Özel Sos</p><br><section style='background-color: #795226;;''><br><p style='text-align: center;position: relative;top: -10px;''>100g + Chips...185TL&emsp;&emsp;150g + Chips...210TL&emsp;&emsp;200g + Chips...235TL</p></section>",
    whiskyOnion:
      "<h4 style='font-family: Roboto Slab Bold;position: relative;bottom: -10px;'> İÇİNDEKİLER: </h4><p style='text-align: center;position: relative;bottom: -12px;'>Burger Köftesi - Kırmızı Cheddar Peynir - Karamelize Soğan - Dana Jambon - Kızarmış Peynir - Özel Whisky Sos</p><br><section style='background-color: #795226;;''><br><p style='text-align: center;position: relative;top: -10px;''>100g + Chips...205TL&emsp;&emsp;150g + Chips...230TL&emsp;&emsp;200g + Chips...255TL</p></section>",

    blueCheeseBacon:
      "<h4 style='font-family: Roboto Slab Bold;position: relative;bottom: -10px;'> İÇİNDEKİLER: </h4><p style='text-align: center;position: relative;bottom: -12px;'>Burger Köftesi - Bacon - Rokfor Peyniri - Soğan - Marul - Domates</p><br><section style='background-color: #795226;;''><br><p style='text-align: center;position: relative;top: -10px;''>100g + Chips...205TL&emsp;&emsp;150g + Chips...230TL&emsp;&emsp;200g + Chips...255TL</p></section>",

    ziggyPop:
      "<h4 style='font-family: Roboto Slab Bold;position: relative;bottom: -10px;'> İÇİNDEKİLER: </h4><p style='text-align: center;position: relative;bottom: -12px;'>Burger Köftesi - Bacon - Mozarella Peyniri - Salatalık Turşusu - Soğan Dizeleri - Marul - Domates</p><br><section style='background-color: #795226;;''><br><p style='text-align: center;position: relative;top: -10px;''>100g + Chips...205TL&emsp;&emsp;150g + Chips...230TL&emsp;&emsp;200g + Chips...255TL</p></section>",

    beyondMushroom:
      "<h4 style='font-family: Roboto Slab Bold;position: relative;bottom: -10px;'> İÇİNDEKİLER: </h4><p style='text-align: center;position: relative;bottom: -12px;'>Burger Köftesi - Bacon - Izgara Mantar - Salatalık Turşusu - Soğan Dizeleri - Marul - Domates - Özel Sos</p><br><section style='background-color: #795226;;''><br><p style='text-align: center;position: relative;top: -10px;''>100g + Chips...205TL&emsp;&emsp;150g + Chips...230TL&emsp;&emsp;200g + Chips...255TL</p></section>",

    entree:
      "<h4 style='font-family: Roboto Slab Bold;position: relative;bottom: -10px;'> İÇİNDEKİLER: </h4><p style='text-align: center;position: relative;bottom: -12px;'>Burger Köftesi - Cheddar Peyniri - Izgara Hellim - Dana Jambon - Özel Sos</p><br><section style='background-color: #795226;;''><br><p style='text-align: center;position: relative;top: -10px;''>100g + Chips...185TL&emsp;&emsp;150g + Chips...210TL&emsp;&emsp;200g + Chips...235TL</p></section>",

    oxxo: "<h4 style='font-family: Roboto Slab Bold;position: relative;bottom: -10px;'> İÇİNDEKİLER: </h4><p style='text-align: center;position: relative;bottom: -12px;'>Burger Köftesi - Mozarella Peyniri - Jalapeno - Kızarmış Peynir - Füme Bacon - Marul - Özel Sos - Chips</p><br><section style='background-color: #795226;;''><br><p style='text-align: center;position: relative;top: -10px;''>100g + Chips...205TL&emsp;&emsp;150g + Chips...230TL&emsp;&emsp;200g + Chips...255TL</p></section>",

    masterKing:
      "<h4 style='font-family: Roboto Slab Bold;position: relative;bottom: -10px;'> İÇİNDEKİLER: </h4><p style='text-align: center;position: relative;bottom: -12px;'>Burger Köftesi - Dilim Biftek - 2x Cheddar Peyniri - Kızarmış Hellim - Marul - Domates - Özel Mısır Sos - Chips</p><br><section style='background-color: #795226;;''><br><p style='text-align: center;position: relative;top: -10px;''>100g + Chips...205TL&emsp;&emsp;150g + Chips...230TL&emsp;&emsp;200g + Chips...255TL</p></section>",

    texan:
      "<h4 style='font-family: Roboto Slab Bold;position: relative;bottom: -10px;'> İÇİNDEKİLER: </h4><p style='text-align: center;position: relative;bottom: -12px;'>Burger Köftesi - Soğan Halkası - Kirmizi Cheddar Peyniri - Soğan BBQ - Ozel Sos</p><br><section style='background-color: #795226;;''><br><p style='text-align: center;position: relative;top: -10px;''>100g + Chips...185TL&emsp;&emsp;150g + Chips...210TL&emsp;&emsp;200g + Chips...235TL</p></section>",

    nachoFiesta:
      "<h4 style='font-family: Roboto Slab Bold;position: relative;bottom: -10px;'> İÇİNDEKİLER: </h4><p style='text-align: center;position: relative;bottom: -12px;'>Burger Köftesi - Chili Beef - Dilimlenmis Kirmizi Biber - Nacho - Kasar Peyniri - Marul - Ozel Sos</p><br><section style='background-color: #795226;;''><br><p style='text-align: center;position: relative;top: -10px;''>100g + Chips...205TL&emsp;&emsp;150g + Chips...230TL&emsp;&emsp;200g + Chips...255TL</p></section>",

    fullRange:
      "<h4 style='font-family: Roboto Slab Bold;position: relative;bottom: -10px;'> İÇİNDEKİLER: </h4><p style='text-align: center;position: relative;bottom: -12px;'>Burger Köftesi - Bacon (Dana veya Domuz) - Ezilmiş Taze Avocado - Dilim Keci Peyniri - Mor Soğan - Marul - Domates - Ozel Sos</p><br><section style='background-color: #795226;;''><br><p style='text-align: center;position: relative;top: -10px;''>100g + Chips...205TL&emsp;&emsp;150g + Chips...230TL&emsp;&emsp;200g + Chips...255TL</p></section>",

    moreCheese:
      "<h4 style='font-family: Roboto Slab Bold;position: relative;bottom: -10px;'> İÇİNDEKİLER: </h4><p style='text-align: center;position: relative;bottom: -12px;'>Burger Köftesi - Kirmizi Cheddar Peyniri - Krem Peynir - Mozzarella Peyniri - Havarti Peyniri - Ozel Sos</p><br><section style='background-color: #795226;;''><br><p style='text-align: center;position: relative;top: -10px;''>100g + Chips...190TL&emsp;&emsp;150g + Chips...215TL&emsp;&emsp;200g + Chips...240TL</p></section>",

    security:
      "<h4 style='font-family: Roboto Slab Bold;position: relative;bottom: -10px;'> İÇİNDEKİLER: </h4><p style='text-align: center;position: relative;bottom: -12px;'>2x 150g Burger Köftesi - 150g Kızarmış Göğüs Filet - 150g Dilim Ribeye Biftek - 4x Cheddar Peynir - Marul - Özel Sos</p><br><section style='background-color: #795226;;''><br><p style='text-align: center;position: relative;top: -10px;''>600g + Chips...410TL</p></section>",

    brisketwrap:
      "<h4 style='font-family: Roboto Slab Bold;position: relative;bottom: -10px;''> İÇİNDEKİLER: </h4><p style='text-align: center;position: relative;bottom: -12px;''>Çekilmiş Brisket - Marul - Domates - Soğan Dizeleri</p><br><section style='background-color: #795226;;'><br><p style='text-align: center;position: relative;top: -10px;'>230TL + Chips</p></section>",

    pestochickenwrap:
      "<h4 style='font-family: Roboto Slab Bold;position: relative;bottom: -10px;''> İÇİNDEKİLER: </h4><p style='text-align: center;position: relative;bottom: -12px;''>Pesto Soslu Çıtır Tavuk - Mozarella Peyniri - Domates - Marul</p><br><section style='background-color: #795226;;'><br><p style='text-align: center;position: relative;top: -10px;'>160TL + Chips</p></section>",

    chickenwrap:
      "<h4 style='font-family: Roboto Slab Bold;position: relative;bottom: -10px;''> İÇİNDEKİLER: </h4><p style='text-align: center;position: relative;bottom: -12px;''>Çıtır Tavuk Fileto - Marul - Domates</p><br><section style='background-color: #795226;;'><br><p style='text-align: center;position: relative;top: -10px;'>150TL + Chips</p></section>",
    hmchickenwrap:
      "<h4 style='font-family: Roboto Slab Bold;position: relative;bottom: -10px;''> İÇİNDEKİLER: </h4><p style='text-align: center;position: relative;bottom: -12px;''>Ballı Hardallı Izgara Tavuk - Izgara Soğan - Izgara Hellim - Marul - Domates</p><br><section style='background-color: #795226;;'><br><p style='text-align: center;position: relative;top: -10px;'>160TL + Chips</p></section>",
    bbqchickenwrap:
      "<h4 style='font-family: Roboto Slab Bold;position: relative;bottom: -10px;''> İÇİNDEKİLER: </h4><p style='text-align: center;position: relative;bottom: -12px;''>BBQ Soslu Çıtır Tavuk - Soğan Dizeleri- Kıtır Tortilla</p><br><section style='background-color: #795226;;'><br><p style='text-align: center;position: relative;top: -10px;'>160TL + Chips</p></section>",
    cheeseburgerwrap:
      "<h4 style='font-family: Roboto Slab Bold;position: relative;bottom: -10px;''> İÇİNDEKİLER: </h4><p style='text-align: center;position: relative;bottom: -12px;''>Burger Köftesi - Cheddar - Mor Soğan - Turşu - Karışık Yeşillik - Domates</p><br><section style='background-color: #795226;;'><br><p style='text-align: center;position: relative;top: -10px;'>170TL + Chips</p></section>",
    no39: "<h4 style='font-family: Roboto Slab Bold;position: relative;bottom: -10px;''> İÇİNDEKİLER: </h4><p style='text-align: center;position: relative;bottom: -12px;''>Fırında Pişirilmiş Köfteler - Izgara Hellim - Domates - Marul - Maydanoz</p><br><section style='background-color: #795226;;'><br><p style='text-align: center;position: relative;top: -10px;'>200TL + Chips</p></section>",
    kidsmeal:
      "KIDS 1:<br><br>70g Cheeseburger + Cips + Meyve Suyu<br><br>150TL<br><hr>KIDS 2:<br><br>90g Tavuk Burger + Cips + Meyve Suyu<br><br>150TL<br><hr>KIDS 3<br><br>6 Parça Tavuk Nuggets + Cips + Meyve Suyu<br><br>150TL",
    grilledmeals1:
      "<h4 style='font-family: Roboto Slab Bold;position: relative;bottom: -10px;'> DIET CHICKEN FILLET: </h4><p style='text-align: center;position: relative;bottom: -12px;'>200g Tavuk Fileto + Sebze + Salata + Yoğurt</p><br><section style='background-color: #795226;;'><br><p style='text-align: center;position: relative;top: -10px;''>200TL</p></section>",
    grilledmeals2:
      "<h4 style='font-family: Roboto Slab Bold;position: relative;bottom: -10px;'> MOCHACHINO MEATBALL: </h4><p style='text-align: center;position: relative;bottom: -12px;'>5 Parça(250g) Fırında Pişirilmiş Köfte + Fırında Pişirilmiş Cips + Salata + Yoğurt</p><br><section style='background-color: #795226;;'><br><p style='text-align: center;position: relative;top: -10px;''>240TL</p></section>",
    deals: "FIRSATLAR",
    classics: "KLASIKLER",
    newburgers: "YENİ BURGERLER",
    xxlburgers: "XXL BURGERLER",
    wraps: "WRAPLAR",
    grilled: "IZGARA MENÜLER",
    salads: "SALATALAR",
    kidss: "ÇOCUK MENÜSÜ",
    starters: "BAŞLANGIÇLAR",
    drinks: "İÇECEKLER",
  },
};

if (window.location.hash) {
  if (window.location.hash === "#tr") {
    hamburger.innerHTML = language.tr.hamburger;
    cheeseburger.innerHTML = language.tr.cheeseburger;
    crispychicken.innerHTML = language.tr.crispychicken;
    mexican.innerHTML = language.tr.mexican;
    swiss.innerHTML = language.tr.swiss;
    american.innerHTML = language.tr.american;
    stuffed.innerHTML = language.tr.stuffed;
    sweetdalton.innerHTML = language.tr.sweetdalton;
    discofrisco.innerHTML = language.tr.discofrisco;
    vertigo.innerHTML = language.tr.vertigo;
    butchers.innerHTML = language.tr.butchers;
    vintagetorque.innerHTML = language.tr.vintagetorque;
    alpha.innerHTML = language.tr.alpha;
    cojack.innerHTML = language.tr.cojack;
    suzieque.innerHTML = language.tr.suzieque;
    rumble59.innerHTML = language.tr.rumble59;
    greenfeast.innerHTML = language.tr.greenfeast;
    hotshotpepper.innerHTML = language.tr.hotshotpepper;
    bacon.innerHTML = language.tr.bacon;
    theoakwood.innerHTML = language.tr.theoakwood;
    montreal.innerHTML = language.tr.montreal;
    nineoneone.innerHTML = language.tr.nineoneone;
    doublebrisket.innerHTML = language.tr.doublebrisket;
    pittboss.innerHTML = language.tr.pittboss;
    roadhouse.innerHTML = language.tr.roadhouse;
    bbq.innerHTML = language.tr.bbq;
    whiskyOnion.innerHTML = language.tr.whiskyOnion;
    pestochickenwrap.innerHTML = language.tr.pestochickenwrap;

    blueCheeseBacon.innerHTML = language.tr.blueCheeseBacon;
    ziggyPop.innerHTML = language.tr.ziggyPop;
    beyondMushroom.innerHTML = language.tr.beyondMushroom;
    entree.innerHTML = language.tr.entree;
    security.innerHTML = language.tr.security;
    oxxo.innerHTML = language.tr.oxxo;
    masterKing.innerHTML = language.tr.masterKing;
    brisketwrap.innerHTML = language.tr.brisketwrap;

    chickenwrap.innerHTML = language.tr.chickenwrap;
    hmchickenwrap.innerHTML = language.tr.hmchickenwrap;
    bbqchickenwrap.innerHTML = language.tr.bbqchickenwrap;
    cheeseburgerwrap.innerHTML = language.tr.cheeseburgerwrap;
    no39.innerHTML = language.tr.no39;
    kidsmeal.innerHTML = language.tr.kidsmeal;
    grilledmeals1.innerHTML = language.tr.grilledmeals1;
    grilledmeals2.innerHTML = language.tr.grilledmeals2;
    deals.innerHTML = language.tr.deals;
    classics.innerHTML = language.tr.classics;
    newburgers.innerHTML = language.tr.newburgers;
    xxlburgers.innerHTML = language.tr.xxlburgers;
    wraps.innerHTML = language.tr.wraps;
    grilled.innerHTML = language.tr.grilled;
    salads.innerHTML = language.tr.salads;
    kidss.innerHTML = language.tr.kidss;
    starters.innerHTML = language.tr.starters;
    drinks.innerHTML = language.tr.drinks;
  }
}

function timeFunction() {
  setTimeout(function () {
    history.go(0);
  }, 200);
}
