import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": null,
                "name": "heise online"
            },
            "author": "Frank Schräer",
            "title": "Donnerstag: Google kauft Virtualisierungsspezialisten, Oppo setzt auf KI-Handys",
            "description": "Cameyo-Übernahme für ChromeOS + Oppo-Handys mit KI-Funktionen + Kanada mit Streaming-Steuer + Panasonic-Kamera für Videos + KI für welche iPhones + #heiseshow",
            "url": "https://www.heise.de/news/Donnerstag-Google-kauft-Virtualisierungsspezialisten-Oppo-setzt-auf-KI-Handys-9749633.html",
            "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/6/0/6/7/3/0/thursday-bc746546144b510d.webp",
            "publishedAt": "2024-06-06T04:30:00Z",
            "content": "Windows-Programme virtuell auf Linux, Android und ChromeOS ausführen darauf ist Cameyo spezialisiert. Nun gehört die Firma zu Google. Zuvor waren beide Unternehmen partnerschaftlich verbunden, jetzt … [+7295 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "9to5Mac"
            },
            "author": "Chance Miller",
            "title": "iPhone and Apple Watch single hairline display cracks no longer covered under standard warranty",
            "description": "Apple has made a notable change to its repair and standard warranty policies for iPhone and Apple Watch this month. According to multiple sources, Apple is no longer covering “single hairline cracks” under the standard warranty for the iPhone and Apple Watch.…",
            "url": "https://9to5mac.com/2024/06/05/iphone-screen-repair-warranty/",
            "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/09/iPhone-15-Pro-Max-after-force-restart.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2024-06-06T00:01:11Z",
            "content": "Apple has made a notable change to its repair and standard warranty policies for iPhone and Apple Watch this month. According to multiple sources, Apple is no longer covering single hairline cracks u… [+1508 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "9to5Mac"
            },
            "author": "Filipe Espósito",
            "title": "iPadOS 18 feature request: Clamshell mode, better Stage Manager, more",
            "description": "We’re just a few days away from WWDC 2024, when Apple will finally unveil the next versions of its operating systems – including iPadOS 18. Although I consider myself a Mac person, I also have an and I like to use it for specific tasks. However, there’s a lot…",
            "url": "https://9to5mac.com/2024/06/05/ipados-18-feature-request/",
            "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/06/stage-manager-beta-ipad.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2024-06-06T00:21:56Z",
            "content": "We’re just a few days away from WWDC 2024, when Apple will finally unveil the next versions of its operating systems including iPadOS 18. Although I consider myself a Mac person, I also have an iPad … [+3417 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "AppleInsider"
            },
            "author": "news@appleinsider.com (Charles Martin)",
            "title": "How to optimize your MacBook battery life",
            "description": "Features in your MacBook Pro and MacBook Air, along with good user practices, can help optimize your battery's lifespan and health - whether you leave it plugged in all the time or not.The Mac has a wealth of tools to help optimize your battery's lifespanBoth…",
            "url": "https://appleinsider.com/inside/macbook-pro/tips/how-to-optimize-your-macbook-battery-life",
            "urlToImage": "https://photos5.appleinsider.com/gallery/59796-122273-46770-91168-000-lead-Battery-xl-xl.jpg",
            "publishedAt": "2024-06-06T02:49:48Z",
            "content": "The Mac has a wealth of tools to help optimize your battery's lifespan\r\nFeatures in your MacBook Pro and MacBook Air, along with good user practices, can help optimize your battery's lifespan and hea… [+6992 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "AppleInsider"
            },
            "author": "news@appleinsider.com (Wesley Hilliard)",
            "title": "Heybike Hero review: sparing almost no expense in a carbon fiber e-bike",
            "description": "The Heybike Hero has a carbon fiber frame that weighs just six pounds, so it can be stuffed to the brim with features like a 1,000W motor and full suspension without exceeding 100 pounds.Heybike Hero review: heavy duty carbon fiberI've reviewed a few Heybike …",
            "url": "https://appleinsider.com/articles/24/06/06/heybike-hero-review-sparing-almost-no-expense-in-a-carbon-fiber-e-bike",
            "urlToImage": "https://photos5.appleinsider.com/gallery/59774-122774-Hero3-xl.jpg",
            "publishedAt": "2024-06-06T01:22:17Z",
            "content": "Heybike Hero review: heavy duty carbon fiber\r\nThe Heybike Hero has a carbon fiber frame that weighs just six pounds, so it can be stuffed to the brim with features like a 1,000W motor and full suspen… [+10445 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Phandroid - News for Android"
            },
            "author": "Tyler Lee",
            "title": "Apple is no longer the king of smartphone software updates",
            "description": "Apple used to be the king when it came to software updates for the iPhone, but it appears that is no longer the case.\nThe post Apple is no longer the king of smartphone software updates appeared first on Phandroid.",
            "url": "https://phandroid.com/2024/06/06/apple-is-no-longer-the-king-of-smartphone-software-updates/",
            "urlToImage": "https://phandroid.com/wp-content/uploads/2023/10/ghostek-iphone-15-1.jpg",
            "publishedAt": "2024-06-06T04:01:00Z",
            "content": "One of the main advantages of buying an iPhone last time was the software updates. Unlike Android manufacturers who typically offer 2-3 years of major updates, Apple offers software updates that span… [+1507 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Android Authority"
            },
            "author": "Edgar Cervantes",
            "title": "Download these sci-fi wallpapers for your phone",
            "description": "These sci-fi wallpapers will give your smartphone a futuristic look that's out of this world. Come pick your favorite one!",
            "url": "https://www.androidauthority.com/sci-fi-wallpapers-3448945/",
            "urlToImage": "https://www.androidauthority.com/wp-content/uploads/2024/06/Sci-fi-wallpaper-on-smartphone.jpg",
            "publishedAt": "2024-06-06T01:34:02Z",
            "content": "The easiest way to spruce up your phones looks is to change the wallpaper. It takes very little effort, but finding the right background image can be a time-consuming task. The science fiction fans a… [+3298 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Ifanr.com"
            },
            "author": "何晓涵",
            "title": "早报|英伟达市值超越苹果，市值突破 3 万亿美元/暴雪国服战网重新开放登录，数据仍被保留/苹果客服回应 iPhone 灵动岛截图诈骗",
            "description": "· 部分城市高考房预订量同比涨 5 倍\n· 比亚迪子公司拿下特斯拉储能电池订单\n· 胖东来创始人称大多数企业家不懂得生命意义#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。\n爱范儿 |\n原文链接 ·\n查看评论 ·\n新浪微博",
            "url": "https://www.ifanr.com/1588367",
            "urlToImage": "https://s3.ifanr.com/images/ep/cover-images/lan_tian_yu_hu_cover.jpg",
            "publishedAt": "2024-06-06T00:33:09Z",
            "content": "3 12 1222.99 30053 \r\n 5.16% 1224.4 / 3.01 3 \r\n 1000 16 1000 \r\n4 10 \r\n 6 6 10 \r\n iPhone \r\n5 iPhone \r\n Apple ID\r\n Apple ID \r\n Apple ID \r\nOpenAI Google DeepMind \r\nOpenAI Google DeepMind \r\n 5 \r\n3 3 \r\n 10… [+1320 chars]"
        },
        {
            "source": {
                "id": "al-jazeera-english",
                "name": "Al Jazeera English"
            },
            "author": "Al Jazeera",
            "title": "Nvidia overtakes Apple to become world’s second-most valuable company",
            "description": "Chipmaker's market capitalisation passes $3 trillion after latest rally in stock price.",
            "url": "https://www.aljazeera.com/economy/2024/6/6/nvidia-overtakes-apple-to-become-worlds-second-most-valuable-company",
            "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/06/AP24157697457284-1717635124.jpg?resize=1920%2C1440",
            "publishedAt": "2024-06-06T01:29:23Z",
            "content": "Nvidia has overtaken Apple to become the worlds second-most valuable company, with furious demand for the chipmakers shares taking its valuation to over $3 trillion.\r\nShares of Nvidia gained 5.2 perc… [+1329 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "GSMArena.com"
            },
            "author": "Vlad",
            "title": "Apple promises five years of software support for the iPhone 15, two less than Google and Samsung",
            "description": "Apple has been known for long software support windows for its iPhones, but the company has never officially promised a specific number of years. That is very different in the Android world, where practically all device makers have some kind of software suppo…",
            "url": "https://www.gsmarena.com/apple_promises_five_years_of_software_support_for_the_iphone_15_two_less_than_google_and_samsung-news-63159.php",
            "urlToImage": "https://fdn.gsmarena.com/imgroot/news/24/06/apple-five-years-of-support/-952x498w6/gsmarena_000.jpg",
            "publishedAt": "2024-06-06T02:43:01Z",
            "content": "Apple has been known for long software support windows for its iPhones, but the company has never officially promised a specific number of years. That is very different in the Android world, where pr… [+1097 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Touch Arcade"
            },
            "author": "Jared Nelson",
            "title": "Out Now: ‘Assassin’s Creed Mirage’, ‘Skul: The Hero Slayer’, ‘Star Wars: Hunters’, ‘Folium’, ‘MAZAICA’, ‘Quetzal – Card Battle TCG’ and More",
            "description": "Each and every day new mobile games are hitting the App Store, and so each week we put together a big old list of all the best new releases of the past seven days. Back in the day the App Store would showcase the same games for a week, and then refresh those …",
            "url": "https://toucharcade.com/2024/06/05/best-new-iphone-games-june-6th-2/",
            "urlToImage": null,
            "publishedAt": "2024-06-06T03:35:00Z",
            "content": "Each and every day new mobile games are hitting the App Store, and so each week we put together a big old list of all the best new releases of the past seven days. Back in the day the App Store would… [+5936 chars]"
        },
        {
            "source": {
                "id": "el-mundo",
                "name": "El Mundo"
            },
            "author": "Javier Attard",
            "title": "Así cambió la historia el desembarco de Normandía: \"Aceleró el final de la guerra y frenó a Stalin\"",
            "description": "Se cumplen 80 años de la mayor operación militar anfibia. Decenas de miles de soldados aliados, en una primera oleada, entraron a liberar Europa a través de cinco playas de Francia Leer",
            "url": "https://www.elmundo.es/podcasts/el-mundo-al-dia/2024/06/06/66606e2be4d4d8bc238b4589.html",
            "urlToImage": "https://e00-elmundo.uecdn.es/assets/v25/img/destacadas/elmundo__logo-generica.jpg",
            "publishedAt": "2024-06-06T00:41:16Z",
            "content": "¿Qué ocurrió en Normandía? ¿Por qué fue ahí el desembarco? ¿Por qué en junio del 44? ¿Qué papel jugó Churchill? ¿Aceleró esta operación el final de la Segunda Guerra Mundial? 80 años después del Día … [+460 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Idownloadblog.com"
            },
            "author": "Anthony Bouchard",
            "title": "PolarPro Defender Pro for camera bodies & lenses sport hidden AirTag slot to track your gear",
            "description": "The PolarPro Defender Pro covers for camera bodies and lenses offer protection and hidden storage compartments for AirTags & storage cards.",
            "url": "https://www.idownloadblog.com/2024/06/05/polarpro-defender-pro-airtag-storage-camera/",
            "urlToImage": "https://media.idownloadblog.com/wp-content/uploads/2024/06/PolarPro-Defender-Pro-Camera-Body-Cap-AirTag-Slot-1200x900.jpg",
            "publishedAt": "2024-06-06T00:04:58Z",
            "content": "Photographers and videographers alike share similar anxieties when it comes to traveling with their high-dollar camera equipment in the wild.\r\nPolarPro’s Defender Pro camera body lens cap holds an Ai… [+6830 chars]"
        },
        {
            "source": {
                "id": "marca",
                "name": "Marca"
            },
            "author": "JOSÉ RODRÍGUEZ",
            "title": "La compañera de clase que formó la pareja olímpica de vóley playa: \"De no ser por ella, no estaría aquí\"",
            "description": "Tania Moreno (Madrid, 2002) y Daniela Álvarez (Gijón, 2001) lograron hace escasamente unos días conseguir uno de sus grandes sueños. Formarán pareja en sus primeros Juegos Olímpico",
            "url": "https://www.marca.com/podcast/2024/06/06/66610410e2704e47a28b463e.html",
            "urlToImage": "https://phantom-marca.unidadeditorial.es/8e96a5cb6e345b1eb5612ebd15669654/crop/0x88/2039x1444/resize/1200/f/webp/assets/multimedia/imagenes/2024/06/06/17176344374303.jpg",
            "publishedAt": "2024-06-06T04:14:32Z",
            "content": "Tania Moreno (Madrid, 2002) y Daniela Álvarez (Gijón, 2001) lograron hace escasamente unos días conseguir uno de sus grandes sueños. Formarán pareja en sus primeros Juegos Olímpicos y lo harán en un … [+2457 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "DIE WELT"
            },
            "author": "Juliane Nora Schneider",
            "title": "„Aus amerikanischer Sicht ist Macron kein einfacher Partner“",
            "description": "Nach den Feierlichkeiten zum 80. D-Day-Jubiläum stattet US-Präsident Joe Biden Frankreich seinen ersten Staatsbesuch ab. Auslandsredakteurin Diana Pieper erklärt, welche Bedeutung das Treffen für die Präsidenten der beiden Länder hat und was das mit der Ukrai…",
            "url": "https://www.welt.de/podcasts/article251877478/Biden-auf-Staatsbesuch-in-Frankreich-Aus-amerikanischer-Sicht-ist-Macron-kein-einfacher-Partner.html",
            "urlToImage": "https://img.welt.de/img/podcasts/mobile249731462/0401352707-ci16x9-w1200/DWO-Podcast-Teaser-Das-bringt-der-Tag-Juliane-Schneider.jpg",
            "publishedAt": "2024-06-06T02:58:30Z",
            "content": "Hier können Sie die aktuelle Folge von Das bringt der Tag direkt hören:\r\nAbonnieren Sie den Podcast unter anderem bei Spotify, Apple Podcasts oder Amazon Music.\r\nDas bringt der Tag jeden Morgen ab 5 … [+805 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "DIE WELT"
            },
            "author": "Robin Alexander, Dagmar Rosenfeld",
            "title": "Europawahl-Spezial — mit Katharina, der Gerechten und Ursula, der Flexiblen",
            "description": "Die grüne Außenministerin Baerbock gibt die Klementine der Demokratie und die SPD hat die Matroschka aus der Wahlkampfkiste hervorgeholt. Porentiefe Widersprüche und weichgespülten Grundsätze, darüber diskutieren Dagmar Rosenfeld und Robin Alexander.",
            "url": "https://www.welt.de/podcasts/machtwechsel/article251873630/Dagmar-Rosenfeld-Robin-Alexander-Europawahl-Spezial-mit-Katharina-der-Gerechten-und-Ursula-der-Flexiblen.html",
            "urlToImage": "https://img.welt.de/img/podcasts/machtwechsel/mobile244549614/1391350287-ci16x9-w1200/DWO-Podcast-Teaser-mit-2zu3.jpg",
            "publishedAt": "2024-06-06T02:55:05Z",
            "content": "Außerdem geht es in Machtwechsel um das EU-Spitzenkandidatenprinzip, die SPD und ihre (Nicht-) Kenntnisse von der russischen Geschichte und einen Fernsehauftritt, über den sich Armin Laschet und Robi… [+1162 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Techbang.com"
            },
            "author": "August",
            "title": "Panasonic正式發表LUMIX GH7，專為影片拍攝而生！建議售價和上市日期看這邊",
            "description": "Panasonic一如預期於日前正式發表LUMIX GH7，同樣延續GH系列的產品定位，專為影片拍攝而生，但卻擁有更進化的錄影性能。GH7預計7月下旬正式發售，建議售價約NT$71,000。Panasonic一如預期於日前正式發表LUMIX GH7，同樣延續GH系列的產品定位，專為影片拍攝而生，但卻擁有更進化的錄影性能。GH7預計7月下旬正式發售，建議售價約NT$71,000。\n\r\n\n搭載與GH6、G9 II相同的影像核心\nLUMIX GH7搭載4/3片幅2,520萬畫素Live MOS與新一代維納斯引擎，其影像…",
            "url": "https://www.techbang.com/posts/115924-panasonic-announces-lumix-gh7-specially-designed-for",
            "urlToImage": "https://cdn1.techbang.com/system/excerpt_images/115924/original/ed43a060b779608aced50aec6794d4e3.jpg?1717642958",
            "publishedAt": "2024-06-06T03:17:00Z",
            "content": "PanasonicLUMIX GH7GHGH77NT$71,000\r\nGH6G9 II\r\nLUMIX GH74/32,520Live MOSGH6G9 IIGH7V-Log 13 GH77.5IS7.5IS 2OIS\r\nLUMIX GH7779 (PDAF)\r\nApple ProResProRes RAW\r\nLUMIX GH7C4K 60P 4:2:2 10bit 5.7K 60P 4:2:0 … [+575 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Inside.com.tw"
            },
            "author": "INSIDE 硬塞的網路趨勢觀察",
            "title": "傳蘋果將把 ChatGPT 放進 iPhone 裡！但奧特曼不會在 WWDC 登場",
            "description": "OpenAI 執行長 Sam Altman 雖是協議方之一，但似乎並不會親臨現場。",
            "url": "https://www.inside.com.tw/article/35243-openai-chatgpt-iphone-apple",
            "urlToImage": "https://bucket-image.inkmaginecms.com/version/social/1/image/2024/06/6eeb48bd-214e-4800-8a8a-336307447473.jpg",
            "publishedAt": "2024-06-06T02:28:00Z",
            "content": "ViewSonic TeamJoin\r\n/Photo Credits ViewSonic\r\nViewSonic TeamJoin Teams Rooms PC\r\nViewSonicTeamJoin 219 Microsoft Teams Rooms /Photo Credits ViewSonic\r\nTeamJoin \r\nTeamJoin TeamJoin HDMI \r\nTeamJoin /Ph… [+149 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Zak Doffman, Contributor, \n Zak Doffman, Contributor\n https://www.forbes.com/sites/zakdoffman/",
            "title": "Samsung Issues Critical Update For Millions Of Galaxy Users",
            "description": "Beware—this update is not all it might seem…",
            "url": "https://www.forbes.com/sites/zakdoffman/2024/06/06/samsung-s24-s23-s22-free-update-warning-for-galaxy-android-users/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/665f1316eb56abe36576d67d/0x0.jpg?format=jpg&crop=1389,844,x278,y867,safe&height=900&width=1600&fit=bounds",
            "publishedAt": "2024-06-06T04:35:09Z",
            "content": "Samsungs latest security update is herebut theres a serious catch\r\nFuture Publishing via Getty Images\r\nUpdated on June 6 with new reports on Samsung Vs Apple support.\r\nSamsung has just issued details… [+4621 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Zak Doffman, Contributor, \n Zak Doffman, Contributor\n https://www.forbes.com/sites/zakdoffman/",
            "title": "Forget iOS 18—Millions Of iPhone Users Now Have RCS Messaging",
            "description": "But beware this major security risk…",
            "url": "https://www.forbes.com/sites/zakdoffman/2024/06/06/apples-imessage-rcs-update-surprise-for-iphone-15-iphone-16/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/65744e9437fe0bbac67751bf/0x0.jpg?format=jpg&crop=2203,1329,x325,y444,safe&height=900&width=1600&fit=bounds",
            "publishedAt": "2024-06-06T04:00:00Z",
            "content": "It turns out RCS on iPhone is not as new as it seems\r\nNurPhoto via Getty Images\r\nIn amongst all the excitement about what Apple will or wont announce on AI at WWDC, the other major iOS 18 change will… [+2941 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Kris Holt, Contributor, \n Kris Holt, Contributor\n https://www.forbes.com/sites/krisholt/",
            "title": "Today’s NYT ‘Connections’ Hints And Answers For Thursday, June 6",
            "description": "Looking for some help with Thursday's NYT Connections words? Some hints and the answers are right here.",
            "url": "https://www.forbes.com/sites/krisholt/2024/06/05/todays-nyt-connections-hints-and-answers-for-thursday-june-6/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/64de654d82fd643c3ad8ae1f/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
            "publishedAt": "2024-06-06T00:33:39Z",
            "content": "Find the links between the words to win today's game of Connections\r\ngetty\r\nLooking for Wednesdays Connections hints and answers? You can find them here:\r\nForbesToday's NYT 'Connections' Hints And An… [+4248 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Olhardigital.com.br"
            },
            "author": "Kelvin Leão Nunes da Costa",
            "title": "5 filmes “diferentões” que usam rotoscopia",
            "description": "A rotoscopia tem a capacidade de criar movimentos mais fluidos e realistas nas animações. Confira filmes que utilizam essa técnica.\nO post 5 filmes “diferentões” que usam rotoscopia apareceu primeiro em Olhar Digital.",
            "url": "https://olhardigital.com.br/2024/06/05/cinema-e-streaming/5-filmes-diferentoes-que-usam-rotoscopia/",
            "urlToImage": "https://img.odcdn.com.br/wp-content/uploads/2024/06/Van-Gogh-scaled.jpg",
            "publishedAt": "2024-06-06T00:20:00Z",
            "content": "Se você já assistiu a filmes de animação onde os movimentos e a ação pareciam realistas, provavelmente os animadores fizeram uso da técnica de rotoscopia.\r\nPara quem não sabe, a rotoscopia é uma técn… [+3269 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "decrypt.co",
            "title": "This iPhone Challenger Could Transform Smartphones by Trading Apps for AI",
            "description": "London-based electronics maker Nothing wants to revolutionize smartphones, ditching conventional apps in favor of a fully AI-managed interface. \"The way we use our smartphones needs to be redefined,” Nothing CEO Carl Pei declared on Twitter. “The current user…",
            "url": "https://biztoc.com/x/849f5a2307d43d04",
            "urlToImage": "https://c.biztoc.com/p/849f5a2307d43d04/s.webp",
            "publishedAt": "2024-06-06T00:54:05Z",
            "content": "London-based electronics maker Nothing wants to revolutionize smartphones, ditching conventional apps in favor of a fully AI-managed interface.\"The way we use our smartphones needs to be redefined, N… [+282 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "3dnews.ru"
            },
            "author": null,
            "title": "Капитализация Nvidia обогнала Apple и достигла $3 трлн на фоне бума ИИ",
            "description": "Акции Nvidia подскочили на 5 % до 1224,40 доллара за акцию по итогам вчерашних торгов. Таким образом, рыночная капитализация компании впервые в истории превысила отметку в 3 триллиона долларов. Рост курсовой стоимости акций произошел на фоне ажиотажного спрос…",
            "url": "https://3dnews.ru/1106040/nvidia-obognala-apple-po-kapitalizatsii-i-dostigla-3-trln-na-fone-buma-ii",
            "urlToImage": "https://3dnews.ru/assets/external/illustrations/2024/06/06/1106040/Nvidia_Copilot.jpg",
            "publishedAt": "2024-06-06T01:28:00Z",
            "content": "Nvidia 5 % 1224,40 . , 3 . , , .\r\n: Copilot\r\n, Apple, Nvidia , Microsoft. Nvidia . 3224 %. 10 1.\r\n , 3 , Apple. 2022 . 2024 Microsoft. Nvidia, 1993 , 2 . , , CNBC.\r\n, (GPU). Nvidia 26 , . , - . 28 .\r… [+91 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Tinhte.vn"
            },
            "author": "no-reply@tinhte.vn (Didu), Didu",
            "title": "Trải nghiệm Xiaomi 14 Ultra",
            "description": "Xiaomi 14 Ultra năm nay đặc biệt hơn chút vì được bán ra chính hãng, tức là những ai muốn một chiếc điện thoại chụp hình siêu chất thì có thể mua mà không lo những vấn đề của máy xách tay như bảo hành, chậm thông báo…",
            "url": "https://tinhte.vn/thread/trai-nghiem-xiaomi-14-ultra.3794437/",
            "urlToImage": "https://storage-tinhte.vncdn.vn/data/attachment-files/vnetwork/2024/06/8355085_d7d5b5b14f733764cb1cb0c386d1c873.jpg",
            "publishedAt": "2024-06-06T03:05:28Z",
            "content": "Mt trc ca máy là màn hình phng, không còn cong na mà ch các vin kính xung quanh cong mà thôi. Màn hình ca máy có sáng rt tt, mình ánh giá v cht lng, sc nét và tái to màu sc thì màn hình ca Xiaomi 14 … [+1755 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Sspai.com"
            },
            "author": "少数派编辑部",
            "title": "派早报：Netflix 将停止支持旧款 Apple TV、三星 Z 系列新品通过 FCC 认证等",
            "description": "工信部公布首批 L3 级汽车试点名单、树莓派与 Hailo 合作推出 AI 扩展套件等。查看全文",
            "url": "https://sspai.com/post/89400",
            "urlToImage": "https://cdnfile.sspai.com/06/06/2024/article/380f66f7-a916-bd0f-2471-afcfd0a96b6c.jpeg",
            "publishedAt": "2024-06-06T00:32:42Z",
            "content": "Netflix Apple TV\r\n6 4 Netlifx 2024 7 31 Apple TV Netflix 7 31 Apple TV Roku Netflix Netflix \r\n Galaxy Z FCC \r\n FCC Galaxy Z Fold 6Galaxy Z Flip 6 Galaxy RingGalaxy Z Fold 6 SM-F956U 5G Wi-Fi USC-C Fo… [+476 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Tinhte.vn"
            },
            "author": "no-reply@tinhte.vn (Anh Tú.), Anh Tú.",
            "title": "Tổng hợp thông tin trước WWDC24: Apple sẽ mang đến cho chúng ta điều gì?",
            "description": "Vậy là còn vài ngày nữa thì sự kiện WWDC24 chính thức diễn ra, thông tin mới nhất hiện tại từ Bloomberg chính là Apple sẽ không giới thiệu bất kỳ 1 thiết bị phần cứng nào trong sự kiện lần này. Vì vậy, những điểm nổi bật nhất có thể sẽ đến từ phần…",
            "url": "https://tinhte.vn/thread/tong-hop-thong-tin-truoc-wwdc24-apple-se-mang-den-cho-chung-ta-dieu-gi.3793643/",
            "urlToImage": "https://storage-tinhte.vncdn.vn/data/attachment-files/vnetwork/2024/06/8354856_99e572b841311c337d728076afb6ed1a.jpg",
            "publishedAt": "2024-06-06T02:36:00Z",
            "content": "Cng ging vi iOS 18, gn nh chc chn iPadOS 18 cng s xut hin trong s kin WWDC sp ti cùng vi nhiu phn mm khác. V kh nng tng thích, iPadOS 18 kh nng cao s h tr các mu iPad mini 5, iPad 6, iPad Air 3 tr lê… [+3732 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Tinhte.vn"
            },
            "author": "no-reply@tinhte.vn (Nhà Của Cáo), Nhà Của Cáo",
            "title": "Panasonic ra mắt Lumix GH7: 25MP, quay RAW, ARRI LogC3...",
            "description": "Panasonic vừa chính thức giới thiệu Lumix GH7, cảm biến M43 BSI CMOS mới với 25.2MP và công nghệ lấy nét theo pha mới.\n \n\n \nĐiều ấn tượng nhất GH7 mang đến là khả năng quay Apple ProRes RAW internal (quay trong máy…",
            "url": "https://tinhte.vn/thread/panasonic-ra-mat-lumix-gh7-25mp-quay-raw-arri-logc3.3794691/",
            "urlToImage": "https://storage-tinhte.vncdn.vn/data/attachment-files/vnetwork/2024/06/8355738_6c6c6ee8813156ce264aa0faec11275a.jpg",
            "publishedAt": "2024-06-06T03:33:54Z",
            "content": "Máy vn s có công ngh ly nét PDAF tha k t GH6, th mà ã ci thin rt nhiu kh nng ly nét ca máy.Cha ht, GH7 còn c trang b AI cho vic ly nét, tng cng kh nng nhn din mt, mt ngi, d oán chuyn ng, ng vt, xe c"
        },
        {
            "source": {
                "id": null,
                "name": "Tinhte.vn"
            },
            "author": "no-reply@tinhte.vn (Ngon Bổ Xẻ), Ngon Bổ Xẻ",
            "title": "Đánh giá bộ tứ Ugreen RoboGaN 30W và 65W, ngoài đẹp ra liệu có gì ngon?",
            "description": "Những mẫu sạc nhỏ gọn, công suất cao, mà lại còn cute cưng xỉu, đó chính là RoboGan đến từ Ugreen. Mình đã có trong tay nguyên bộ sưu tập, 4 chiếc đen, hồng, 30w và 65w, để review đến anh em trong bài viết này.",
            "url": "https://tinhte.vn/thread/danh-gia-bo-tu-ugreen-robogan-30w-va-65w-ngoai-dep-ra-lieu-co-gi-ngon.3794223/",
            "urlToImage": "https://storage-tinhte.vncdn.vn/data/attachment-files/vnetwork/2024/06/8354229_e11e75ecbf119b04738ac041f33ffddc.jpg",
            "publishedAt": "2024-06-06T02:36:34Z",
            "content": "Thm chí mình cng có cm th sc này cho Macbook Pro 2017 cng vn nhn và có sc c luôn, ng nhiên là vi 30W thì tc sc cho Macbook s chm hn mc sc tiêu chun 60W ca MBP2017 nhng cng có th hoàn toàn s dng trong… [+6977 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Tinhte.vn"
            },
            "author": "no-reply@tinhte.vn (P.W), P.W",
            "title": "Giám đốc Huawei: Phải đảm bảo tỷ lệ chip 7nm đạt chuẩn trước, rồi mới tính đến tiến trình 5nm",
            "description": "Những quy định cấm vận thiết bị, công nghệ và máy móc gia công bán dẫn từ phía Mỹ đồng nghĩa với việc Huawei không thể nhờ cậy sức mạnh của TSMC được nữa, thay vào đó là phải dựa vào đơn vị gia công bán dẫn Trung Quốc SMIC…",
            "url": "https://tinhte.vn/thread/giam-doc-huawei-phai-dam-bao-ty-le-chip-7nm-dat-chuan-truoc-roi-moi-tinh-den-tien-trinh-5nm.3794467/",
            "urlToImage": "https://storage-tinhte.vncdn.vn/data/attachment-files/vnetwork/2024/06/8355113_661f2b7db7f24d69aaabac0a64ba0633.jpg",
            "publishedAt": "2024-06-06T01:34:49Z",
            "content": "Theo trang tin Huawei Central, lý tng nht là Huawei hoàn thin kh nng ca nhng SoC trang b cho smartphone h sn xut, ch không phi tp trung hoàn toàn cho tin trình gia công bán dn.\r\nNu kin trúc chip Kiri… [+1377 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "PhoneArena"
            },
            "author": "Alan Friedman",
            "title": "Apple Watch can now show you near real-time blood glucose readings although there is a huge catch",
            "description": "Using the Dexcom G7 sensor and the Dexcom G7 app, you can monitor your blood sugar via the Apple Watch.",
            "url": "https://www.phonearena.com/news/apple-watch-can-now-deliver-blood-glucose-readings_id159106",
            "urlToImage": "https://m-cdn.phonearena.com/images/article/159106-wide-two_1200/Apple-Watch-can-now-show-you-near-real-time-blood-glucose-readings-although-there-is-a-huge-catch.jpg",
            "publishedAt": "2024-06-06T00:50:34Z",
            "content": "Enjoy the hottest mobile tech storylines, delivered straight to your inbox."
        },
        {
            "source": {
                "id": null,
                "name": "Designtaxi.com"
            },
            "author": "Trendingger",
            "title": "Nvidia Is Now Worth Than Apple—as Market Value Surges Past $3 Trillion",
            "description": "The AI chipmaker's market capitalization has skyrocketed to a staggering $3.014 trillion, surpassing Apple’s valuation of $3.00 trillion. This surge in value is largely attributed to the ongoing AI boom, which has seen mega-cap tech companies scramble to secu…",
            "url": "https://community.designtaxi.com/topic/3670-nvidia-is-now-worth-than-apple-as-market-value-surges-past-3-trillion/",
            "urlToImage": "https://content.invisioncic.com/y329496/monthly_2024_06/nvidiaapple.jpg.2eb0cf370e2a8f5c7e1ad37e1c12b5ac.jpg",
            "publishedAt": "2024-06-06T00:54:56Z",
            "content": "Nvidia has eclipsed Apple to become the worlds second most valuable company. \r\nThe AI chipmaker's market capitalization has skyrocketed to a staggering $3.014 trillion, surpassing Apples valuation of… [+1319 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hwupgrade.it"
            },
            "author": null,
            "title": "Via il velo dalla Opel Frontera elettrica e ibrida, caratteristiche e prezzo",
            "description": "Opel ha mostrato a stampa e dealer la nuova Frontera, proposta come elettrica o ibrida, fino a 7 posti e con listino super semplificato",
            "url": "https://greenmove.hwupgrade.it/news/auto-elettriche/via-il-velo-dalla-opel-frontera-elettrica-e-ibrida-caratteristiche-e-prezzo_127774.html",
            "urlToImage": "https://www.hwupgrade.it/i/n/FronteraGSmain.jpg",
            "publishedAt": "2024-06-06T04:52:42Z",
            "content": "Opel continua la sua progressiva elettrificazione, ed aggiunge a Corsa, Mokka, Astra e Grandland, la nuova Frontera, che idealmente va a sostituire la Crossland. Con 4,38 metri di lunghezza si piazza… [+2001 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Macotakara.jp"
            },
            "author": "danbo",
            "title": "セブン‐イレブン、Apple Accountにチャージ金額の5％分の交通系電子マネーが貰え、友達紹介で最大15%になるキャンペーンを実施（2024/6/30まで）",
            "description": "Apple Account チャージ 交通系電子マネーキャンペーン\r\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- テキスト -->\n\n[セブン‐イレブン](https://www.sej.co.jp/)が、3,000円以上レジでApple Accountにチャージ＆レシート登録でチャージ金額の5％分の交通系電子マネーが貰え、さらに、登録時に届く「紹介用リンク（URL）」を友達にシェアして、その友達もレジでApple Accountにチャージ、及び「紹…",
            "url": "https://www.macotakara.jp/news/entry-46856.html",
            "urlToImage": "https://www.macotakara.jp/archives/001/202406/3baee318d551c8bf.png",
            "publishedAt": "2024-06-06T00:35:13Z",
            "content": "3,000Apple Account5URLApple AccountURL15%(7,500)UPApple Account \r\niOS 17Apple Account3000Apple Account\r\n5%(2,500)SuicaPASMOICOCA\r\n202463() 0:002024630() 23:59"
        },
        {
            "source": {
                "id": null,
                "name": "Macotakara.jp"
            },
            "author": "danbo",
            "title": "TFIのアナリストMing-Chi Kuo氏、Apple、6月中旬までにアメリカ以外でApple Vision Proを販売開始か？",
            "description": "TF International Securities\r\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- テキスト -->\n\n[TF International Securities Group Limited](http://www.tfisec.com/)のアナリストMing-Chi Kuo氏は、AppleがApple Vision Proの販売に関して、2024年6月中旬までに、イギリス、フランス、ドイツ、中国、日本、シンガポールで開始される予定（…",
            "url": "https://www.macotakara.jp/rumor/entry-46855.html",
            "urlToImage": "https://www.macotakara.jp/archives/001/201806/9205555aee9abdb82f2768437563a61612e7c061d09f049ea57e43bf05bdb477.png",
            "publishedAt": "2024-06-06T00:23:42Z",
            "content": "Vision Pro(WWDC 2024)202440-45\r\n--Vision Pro shipment survey update:Shipments to non-U.S. markets, mainly the U.K., https://t.co/0tZdSlj7js\r\n— (Ming-Chi Kuo) (@mingchikuo) June 5, 2024"
        },
        {
            "source": {
                "id": null,
                "name": "Thenewslens.com"
            },
            "author": "張瑞邦 Tucker Chang",
            "title": "俄軍以「性暴力」作為戰爭武器，烏克蘭男性戰俘淪為主要受害者",
            "description": "不過烏克蘭檢察官索松斯卡也示警，戰爭期間發生的這些性暴力事件可能永遠不會被披露，最終也只會有一小部分受害者願意挺身而出，對男性而言更是如此，其中更有諸多男性受害者沒有意識到，發生在他們身上的其實就是性暴力犯罪。",
            "url": "https://www.thenewslens.com/article/203590",
            "urlToImage": "https://image1.thenewslens.com/2024/6/lyu3isyyompgoba5vdmria62chccyw.jpg?fm=jpg&format=crop&h=630&q=70&w=1200",
            "publishedAt": "2024-06-06T02:43:58Z",
            "content": "942023Great Place to Work2023Sabrina\r\nXYZ00\r\nPhoto Credit: TNL Brand Studio\r\n50Sabrina20HOW to doWHY to do\r\nSabrina278456\r\nSabrinaI welcome you back\r\nSabrinaAbraham Harold MaslowHierarchy of Needs Th… [+381 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Thenewslens.com"
            },
            "author": "中央通訊社",
            "title": "花東三法藍營有雜音，黨內立委：不要硬急在7/16通過，鍾東錦：假議題，這做了花蓮會被害死",
            "description": "國民黨立委傅崐萁提出「環島高速鐵路建設特別條例草案」、「花東快速公路建設特別條例草案」、「國道六號東延花蓮建設特別條例草案」等案，並預告在7月16日前一定通過，遭民進黨批評是錢坑法案，現在傳出國民黨立法院黨團內部也有不同的聲音。",
            "url": "https://www.thenewslens.com/article/203634",
            "urlToImage": "https://image1.thenewslens.com/2024/6/4pmovqt53a6srlx15c2tktnafosys9.jpg?fm=jpg&format=crop&h=630&q=70&w=1200",
            "publishedAt": "2024-06-06T01:52:51Z",
            "content": "942023Great Place to Work2023Sabrina\r\nXYZ00\r\nPhoto Credit: TNL Brand Studio\r\n50Sabrina20HOW to doWHY to do\r\nSabrina278456\r\nSabrinaI welcome you back\r\nSabrinaAbraham Harold MaslowHierarchy of Needs Th… [+381 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Livedoor.jp"
            },
            "author": "itsoku",
            "title": "NVIDIA、時価総額3兆ドル超え。Appleを抜き世界2位に",
            "description": "1:名無しさん＠涙目です。(茸) [CN] 2024/06/06(木) 08:12:42.83 ID:Eun2erY50● BE:896590257-PLT(21003)\n米エヌビディアの株式時価総額が５日、初めて３兆ドル（約468兆円）を超えた。すでに世界で最も価値のある半導体企業だったが、ここにきてコンピューター・チップ企...",
            "url": "http://blog.livedoor.jp/itsoku/archives/61555053.html",
            "urlToImage": "https://livedoor.blogimg.jp/itsoku/imgs/5/7/579a40a2-s.png",
            "publishedAt": "2024-06-06T01:10:31Z",
            "content": "1:() [CN] 2024/06/06() 08:12:42.83 ID:Eun2erY50 BE:896590257-PLT(21003)\r\n468 \r\n14780005.21224.40\r\nhttps://www.bloomberg.co.jp/news/articles/2024-06-05/SEMFXCDWLU6800\r\n3:() [] 2024/06/06() 08:14:57.97… [+1917 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Www.nzz.ch"
            },
            "author": "David Vogel (dv), Nadine Landert (nla)",
            "title": "PODCAST - Der Plan für einen Waffenstillstand in Gaza steht. Doch Israels Premierminister Netanyahu sträubt und windet sich",
            "description": "US-Präsident Bidens Plan für eine Waffenruhe setzt Netanyahu massiv unter Druck. Scheitert das Friedensangebot?",
            "url": "https://www.nzz.ch/podcast/gaza-netanyahu-schweigt-zum-waffenstillstandsplan-nzz-akzent-ld.1833654",
            "urlToImage": "https://img.nzz.ch/2024/06/02/3f84912e-4647-4a5a-ac6d-7d329ebaef4a.jpeg?crop=5100,2869,x0,y266&quality=75&auto=webp?width=1200&height=675&fit=bound&quality=75&auto=webp&wmark=nzz",
            "publishedAt": "2024-06-06T03:30:00Z",
            "content": "Hören und abonnieren Sie den Podcast «NZZ Akzent» auch auf Spotify,Apple Podcasts oder Castbox.\r\nHaben Sie ein Feedback zum Podcast? Sagen Sie uns Ihre Meinung.\r\nIn dieser Podcast-Episode:\r\nUS-Präsid… [+1154 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Natalie.mu"
            },
            "author": "音楽ナタリー",
            "title": "ガチャピン・ムックが「TIF」出演",
            "description": "8月2～4日に東京・お台場の青海周辺エリアで開催されるアイドルフェス「TOKYO IDOL FESTIVAL 2024」の出演者第10弾が発表された。",
            "url": "https://natalie.mu/music/news/576492",
            "urlToImage": "https://ogre.natalie.mu/media/news/music/2024/0606/gachapinmook_art202406.jpg?impolicy=twitter_card_face_crop",
            "publishedAt": "2024-06-06T03:32:00Z",
            "content": "202482 202483 202484 \r\n1\r\niLiFE! / Appare! / AMEFURASSHI / / INUWASI / ukka / C;ON / Jams Collection / / DIALOGUE+ / / TIF de Debut2024 supported by Denonbu / Devil ANTHEM. / .inc / / NEO JAPONISM / … [+870 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gihyo.jp"
            },
            "author": "傍島康雄（そばじまやすお）",
            "title": "AppleがAndroidユーザ取り込みにご執心の様子",
            "description": "今回はアメリカでの報道をもとに、AppleによるAndroidユーザ取り込みの展開について考察してみます。",
            "url": "https://gihyo.jp/article/2024/06/android-weekly-topics-240606",
            "urlToImage": "https://gihyo.jp/assets/images/ICON/2022/1908_AndroidWeeklyTopics.png",
            "publishedAt": "2024-06-06T00:00:00Z",
            "content": "Google I/\r\nOPixel 9GooglePixel 9\r\nPixel 9\r\nPixel 9\r\nAndroid Authority\r\nLatest Pixel 9 leak gives us a look at the Tensor G4 specs and benchmarks\r\nLatest Pixel 9 leak gives us a look at the Tensor G4 … [+507 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "[Removed]"
            },
            "author": null,
            "title": "[Removed]",
            "description": "[Removed]",
            "url": "https://removed.com",
            "urlToImage": null,
            "publishedAt": "1970-01-01T00:00:00Z",
            "content": "[Removed]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": null,
            "title": "Nvidia surpasses Apple to become the 2nd-most-valuable company in the world",
            "description": null,
            "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_d1a99f23-7620-4b9d-b880-e4e06fc52ad6",
            "urlToImage": null,
            "publishedAt": "2024-06-06T04:29:42Z",
            "content": "If you click 'Accept all', we and our partners, including 238 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Reuters",
            "title": "Morning Bid: It's time for E-C-B",
            "description": "After the Bank of Canada became the first G7 country to cut interest rates, the stage is set for the European Central Bank to lower rates too.  While ECB...",
            "url": "https://finance.yahoo.com/news/morning-bid-time-e-c-043139683.html",
            "urlToImage": "https://media.zenfs.com/en/reuters-finance.com/ae120a72d480a9af974a1d41f69f637b",
            "publishedAt": "2024-06-06T04:31:39Z",
            "content": "A look at the day ahead in European and global markets from Ankur Banerjee\r\nAfter the Bank of Canada became the first G7 country to cut interest rates, the stage is set for the European Central Bank … [+1983 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Ankur Banerjee",
            "title": "Asia stocks rally as rate cut bets gather momentum; ECB in focus",
            "description": "Asian shares gained on Thursday on rising expectations the U.S. Federal Reserve will likely cut interest rates in September, while the euro advanced ahead of...",
            "url": "https://www.yahoo.com/news/asia-stocks-rally-rate-cut-023146628.html",
            "urlToImage": "https://media.zenfs.com/en/reuters.com/581c951c6f7a8f331d5ca33053a8bb59",
            "publishedAt": "2024-06-06T02:31:46Z",
            "content": "By Ankur Banerjee\r\nSINGAPORE (Reuters) - Asian shares gained on Thursday on rising expectations the U.S. Federal Reserve will likely cut interest rates in September, while the euro advanced ahead of … [+3934 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "AOL"
            },
            "author": "Greg Wehner",
            "title": "Popular organic kids' snacks found to contain high levels of lead: Consumer Reports",
            "description": "Consumer Reports conducted a study on kids' snacks like Serenity Kids and LesserEvil puffs and discovered the presence of elevated levels of lead.",
            "url": "https://www.aol.com/finance/popular-organic-kids-snacks-found-020111215.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/EKvv5IsI8b08jUcbwloi6Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://media.zenfs.com/en/aol_fox_business_239/fa4b1ce3488a9e2226c36719aad66c91",
            "publishedAt": "2024-06-06T02:01:11Z",
            "content": "A study conducted by Consumer Reports discovered that two popular brands of kids' snacks contain elevated levels of lead, though federal standards have not been set on heavy metal levels in many baby… [+5895 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Dealcatcher.com"
            },
            "author": null,
            "title": "Wayfair - Cuisinart 5 Speed Hand Mixer $33.83",
            "description": "Wayfair has this Cuisinart 5 Speed Hand Mixer on sale for 54% off. Get it today for $33.83.",
            "url": "https://www.dealcatcher.com/kitchen-appliances?offer=998244040",
            "urlToImage": "https://app.dealcatcher.com/bigly/998244040-121.png",
            "publishedAt": "2024-06-06T00:49:55Z",
            "content": "Ember Travel Mug 2+, 12 oz, Temperature Control Smart Travel Mug w/ Apple Find My"
        },
        {
            "source": {
                "id": null,
                "name": "Paul Tan's Automotive News"
            },
            "author": "Mick Chan",
            "title": "2024 Porsche Panamera in Malaysia – 2.9L biturbo V6, 353 PS/500 Nm, PASM air suspension; fr RM1.3 million",
            "description": "Having made its debut in November 2023, the order books for the third-generation Porsche Panamera opened in Malaysia last month, with the four-door grand tourer arriving in the market starting from RM1.3 million. Here, we can now bring live images of a local …",
            "url": "https://paultan.org/2024/06/06/2024-porsche-panamera-in-malaysia-2-9l-biturbo-v6-353-ps-500-nm-pasm-air-suspension-fr-rm1-3-million/",
            "urlToImage": "https://paultan.org/image/2024/06/2024-Porsche-Panamera_Ext-1-1200x800.jpg",
            "publishedAt": "2024-06-06T04:34:56Z",
            "content": "Having made its debut in November 2023, the order books for the third-generation Porsche Panamera opened in Malaysia last month, with the four-door grand tourer arriving in the market starting from R… [+2506 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Technews.tw"
            },
            "author": "MoneyDJ",
            "title": "標普 500 高度集中科技股、史上頭一遭，三巨頭權重 20%",
            "description": "標準普爾 500 指數權重高度集中科技股，引發市場人士擔憂。 即將於6月7日盤後執行1拆10股票分割計畫的輝達（Nvidia Corp.），5日終場勁揚5.16%、收1,224.40美元，連續第3個交易日創歷史收盤新高。Yahoo Finance統計顯示，輝達5日收盤市值來到3.012兆美元，首度加...",
            "url": "https://finance.technews.tw/2024/06/06/microsoft-apple-and-nvidia-make-up-20-percent-of-the-sp-500/",
            "urlToImage": "https://img.technews.tw/wp-content/uploads/2019/12/24082725/shutterstock_413551816-e1577414068818.jpg",
            "publishedAt": "2024-06-06T01:30:36Z",
            "content": "500 \r\n67110Nvidia Corp.55.16%1,224.403Yahoo Finance53.0123\r\nCreative PlanningCharlie Bilello 5X50019.7%1980\r\nThe Top 3 companies in the S&amp;P 500 (Microsoft, Nvidia, &amp; Apple) now make up 19.7% … [+372 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Technews.tw"
            },
            "author": "姚 惠茹",
            "title": "輝達市值破 ３ 兆美元超越蘋果！黃仁勳快變「3.5 兆男」躍全球 13 大富豪",
            "description": "輝達（NVIDIA）股價狂飄 5.16%，終場報 1224.40 美元，市值突破 3 兆美元大關，改寫歷史新高紀錄，全球市值排行首度超過蘋果（Apple），成為僅次於微軟（Microsoft）的第二大企業，帶動執行長黃仁勳資產淨值來到 1,070 億美元（約 3.45 兆台幣），躍居全球第 13 大...",
            "url": "https://finance.technews.tw/2024/06/06/3-5-trillion-men/",
            "urlToImage": "https://img.technews.tw/wp-content/uploads/2024/05/23085004/voyager-exterior-sign-2.jpg",
            "publishedAt": "2024-06-06T01:57:57Z",
            "content": "NVIDIA 5.16% 1224.40 3 AppleMicrosoft 1,070 3.45 13 \r\n H100 AI 2023 5 1 2024 2 2 AmazonGoogle Alphabet\r\n 5 148.8 7 6 7 1 10 1000 5 1224.40 3 \r\nAI 70~95% AI Blackwell B200 GPU 1,500 \r\n COMPUTEX 2024 1… [+34 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Yahoo Sports Videos",
            "title": "Tatum & Brown vs Luka & Kyrie, which duo gets it done in the NBA Finals? | Good Word with Goodwill",
            "description": "Yahoo Sports senior NBA reporter Vincent Goodwill and NBA contributor Tom Haberstroh discuss which NBA Finals duo will have the edge, Jayson Tatum & Jaylen Brown for the Boston Celtics? Or Luka Doncic & Kyrie Irving for the Dallas Mavericks? Hear the full con…",
            "url": "https://sports.yahoo.com/tatum-brown-vs-luka-kyrie-015022297.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/WE29hKaZl7PPyqPGvDoIjQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://s.yimg.com/os/creatr-uploaded-images/2024-06/1733dc40-23a7-11ef-bb77-802a5c6d9183",
            "publishedAt": "2024-06-06T01:50:22Z",
            "content": "Yahoo Sports senior NBA reporter Vincent Goodwill and NBA contributor Tom Haberstroh discuss which NBA Finals duo will have the edge, Jayson Tatum &amp; Jaylen Brown for the Boston Celtics? Or Luka D… [+2967 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Ixbt.com"
            },
            "author": "jin@ixbt.com (Jin)",
            "title": "Полный провал: Li Auto почти вдвое уменьшает план по продажам машин на 2024, уже второй раз с начала года, из-за неудачи Li Mega",
            "description": "Li Auto уже второй раз снижает годовой план продаж на 2024 год, о чем сообщает китайское издание LatePost . Первоначально автопроизводитель намеревался продать 800 000 единиц за 12 месяцев этого года. После неудачного запуска Li Mega план продаж был снижен до…",
            "url": "https://www.ixbt.com/news/2024/06/06/li-auto-2024-li-mega.html",
            "urlToImage": "https://www.ixbt.com/img/n1/news/2024/5/4/Li_mega_fail_large.jpg",
            "publishedAt": "2024-06-06T03:34:00Z",
            "content": "Li Auto 2024 , LatePost .\r\n 800 000 12 . Li Mega 560 000–640 000 . 480 000 , , .\r\n, Li Mega — , Li Auto . EREV: L7, L8 L9. , Apple iPhone, .\r\n . , Li Auto, , .\r\n Mega 2024 77 350 . Li Auto , 8000 Meg… [+14 chars]"
        },
        {
            "source": {
                "id": "rt",
                "name": "RT"
            },
            "author": "RT en Español\n , RT en Español",
            "title": "Apple pierde el lugar de segunda empresa más valiosa del mundo",
            "description": "Este fabricante de chips ha experimentado un aumento de la demanda de sus semiconductores, que se utilizan para aplicaciones de IA.",
            "url": "https://actualidad.rt.com/actualidad/511997-apple-pierde-segundo-puesto-valiosa",
            "urlToImage": "https://mf.b37mrtl.ru/actualidad/public_images/2024.06/article/6660fe22e9ff71617b6a2887.jpg",
            "publishedAt": "2024-06-06T00:52:28Z",
            "content": "El fabricante de chips estadounidense Nvidia superó el miércoles por primera vez en su historia la capitalización bursátil de Apple, convirtiéndose en la segunda empresa más valiosa del mundo tras un… [+666 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Smzdm.com"
            },
            "author": null,
            "title": "百亿补贴：Apple 苹果 Watch Series 9 智能手表 41mmGPS款 粉色 2149元",
            "description": "百亿补贴:Apple 苹果 Watch Series 9 智能手表 41mmGPS款 粉色 2149元,什么值得买甄选出拼多多优惠促销商品,包括Apple/苹果报价、多少钱等信息,认真生活,好好花钱就上什么值得买。",
            "url": "https://www.smzdm.com/p/115145638/",
            "urlToImage": "https://y.zdmimg.com/202309/13/6500bbefc734d2300.png_d250.jpg",
            "publishedAt": "2024-06-06T02:36:57Z",
            "content": "Apple Watch Series 9 Apple S9 56Series 8 60%GPU30%siriAppleiPhone\r\nApple Watch Series 9200013256G\r\nApple Watch Series 9 3618"
        },
        {
            "source": {
                "id": null,
                "name": "Smzdm.com"
            },
            "author": null,
            "title": "官旗好价：Apple 苹果 iPhone 15 5G手机 128GB 4599元",
            "description": "玩家之道升级灵动岛设计，主摄升级4800万像素，A16芯片加持~天猫AppleStore旗舰店活动售价5999元，下单参与立减1100元优惠活动，再叠加3580-300的苹果惊喜券，实付低至4599元，近期好价。",
            "url": "https://www.smzdm.com/p/115100148/",
            "urlToImage": "https://y.zdmimg.com/202312/27/658ba0f01fe919059.png_d250.jpg",
            "publishedAt": "2024-06-06T00:40:26Z",
            "content": "iPhone 15 IP68 171g7.8mm\r\niPhone 156.1 OLED XDR 2556×1179460ppi2000100%DCI-P360HziPhone 15\r\n A16 6 CPU5GPU 16 iPhone 14203050%LightningUSB-C\r\niPhone 154800f1.62400120021200f2.4 HDR 5\r\nSOSUSB 2"
        },
        {
            "source": {
                "id": null,
                "name": "Smzdm.com"
            },
            "author": null,
            "title": "Apple 苹果 iPhone 15 Plus 5G手机 128GB 5326元",
            "description": "玩家之道升级灵动岛设计，主摄升级4800万像素，A16芯片加持~淘宝精选此款目前活动售价5790元，百亿补贴低至5326元，近期好价，感兴趣的值友可以入手。",
            "url": "https://www.smzdm.com/p/115170150/",
            "urlToImage": "https://y.zdmimg.com/202309/13/6500b39daa7d76266.png_d250.jpg",
            "publishedAt": "2024-06-06T02:56:32Z",
            "content": "iPhone 15 Plus IP68 201g7.8mm\r\niPhone 15 Plus 6.7 OLED XDR 2796×1290460ppi2000100%DCI-P360HziPhone 15Plus A16 6 CPU5GPU 16 iPhone 14 Plus 263550%LightningUSB-C\r\niPhone 15 Plus 4800f1.62400120021200f2… [+17 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Acquiremag.com"
            },
            "author": "Staff",
            "title": "Keychron keeps it slim and affordable with their B1 and B6 Pro keyboards",
            "description": "The new line starts at just $39.",
            "url": "https://www.acquiremag.com/tech/keychron-b-pro-ultra-slim-wireless-keyboards",
            "urlToImage": "https://www.acquiremag.com/.image/t_share/MjA2OTUwNzI2ODUxNjM0MjI3/keychron-b6-pro.jpg",
            "publishedAt": "2024-06-06T01:27:34Z",
            "content": "Keychron is taking on Logitech and Apple with two new keyboard options that pack quite a lot of performance at a very affordable price point. The B1 Pro is the most compact (75% size) of the two with… [+469 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Ozbargain.com.au"
            },
            "author": "frkino",
            "title": "Aqara Smart Door Lock U100 (Silver) with E1 Hub Kit $387.00 Delivered @Amazon AU",
            "description": "This is one has the E1 Hub kit\nAn all-time-low according to Camel^3: https://au.camelcamelcamel.com/product/B0C8N271D3 or $8 higher than last year's Black Friday 2023 deal (https://www.ozbargain.com.au/node/808066)\nwith Apple HomeKey support so you can unlock…",
            "url": "https://www.ozbargain.com.au/node/849742",
            "urlToImage": "https://files.ozbargain.com.au/n/42/849742l.jpg?h=ca967e2b",
            "publishedAt": "2024-06-06T02:33:47Z",
            "content": "This post contains affiliate links. OzBargain might earn commissions when you click through and make purchases. Please see this page for more information.\r\nThis is one has the E1 Hub kitAn all-time-l… [+3875 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Ozbargain.com.au"
            },
            "author": "MaxMari2",
            "title": "Denon 7.2 Channel 8K AV Receiver 90W Atmos eARC Aiplay 2 AVR-S970H $899 Delivered @ Masimo Corp eBay",
            "description": "Denon AVR-S970H 7.2 Channel 8K AV Receiver delivers a fully immersive 3D audio experience, amazing picture quality and lag-free gaming experience thanks to Dolby Atmos, DTS:X, and the latest HDMI technology featuring HDR10+, Dolby Vision™, 8K/60 and 4K/120 pa…",
            "url": "https://www.ozbargain.com.au/node/849740",
            "urlToImage": "https://files.ozbargain.com.au/n/40/849740x.jpg?h=440f3159",
            "publishedAt": "2024-06-06T02:23:25Z",
            "content": "Denon AVR-S970H 7.2 Channel 8K AV Receiver delivers a fully immersive 3D audio experience, amazing picture quality and lag-free gaming experience thanks to Dolby Atmos, DTS:X, and the latest HDMI tec… [+2438 chars]"
        },
        {
            "source": {
                "id": "la-nacion",
                "name": "La Nacion"
            },
            "author": "LA NACION",
            "title": "El listado de los iPhone que quedaron obsoletos, según comunicó Apple",
            "description": "Ya son varios los dispositivos que, por el avance tecnológico, quedaron viejos e incapacitados de realizar actualizaciones; el listado completo de los modelos que ya no funcionan más",
            "url": "https://www.lanacion.com.ar/tecnologia/el-listado-de-los-iphone-que-quedaron-obsoletos-segun-comunico-apple-nid05062024/",
            "urlToImage": "https://resizer.glanacion.com/resizer/v2/el-modelo-que-se-suma-a-la-lista-de-los-ZZEPVTZRL5ELRL763BBNYWYRZM.jpg?auth=8e932b3f7f3789bb9c3e838dd61c35246395535248212e5b0b15cf37f1bcb322&width=768&quality=70&smart=false",
            "publishedAt": "2024-06-06T00:06:40Z",
            "content": "Una gran cantidad de personas considera al celular como la herramienta más indispensable de su vida diaria. Estos dispositivos electrónicos no solo facilitan la comunicación, sino que también resuelv… [+2628 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MMA Fighting"
            },
            "author": "Jed Meshew",
            "title": "No Bets Barred: Can Jared Cannonier still make a title run or will Nassourdine Imavov end the dream at UFC Louisville?",
            "description": "UFC Louisville takes place this Saturday headlined by a middleweight matchup between Jared Cannonier and Nassourdine Imavov, and the No Bets Barred boys are here with a full breakdown of the card.",
            "url": "https://www.mmafighting.com/2024/6/5/24172128/no-bets-barred-can-jared-cannonier-make-title-run-nassourdine-imavov-end-the-dream-ufc-louisville",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/8zMv9zT-HvIjb0c_mtdDM_P1Zc0=/0x425:5226x3161/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25478750/1499360450.jpg",
            "publishedAt": "2024-06-06T01:00:00Z",
            "content": "Jared Cannonier | Photo by Chris Unger/Zuffa LLC via Getty Images\r\n\n \n\n UFC 302 is in the books which means it’s on to UFC Louisville. \nHeadlined by a middleweight matchup between Jared Cannonier and… [+997 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "mobiFlip.de"
            },
            "author": "Oliver Schwuchow",
            "title": "Apple plant AirPods mit Kameras und KI-Funktionen",
            "description": "Apple hat laut Mark Gurman einen Deal mit OpenAI geschlossen und wird mit iOS 18 die Technik nutzen, die wir bereits von ChatGPT kennen. Das Unternehmen soll am Montag in […]",
            "url": "https://www.mobiflip.de/shortnews/apple-airpods-kameras-ki-funktionen/",
            "urlToImage": "https://www.mobiflip.de/wp-content/uploads/2022/09/apple-airpods-header.jpg",
            "publishedAt": "2024-06-06T03:16:27Z",
            "content": "Apple hat laut Mark Gurman einen Deal mit OpenAI geschlossen und wird mit iOS 18 die Technik nutzen, die wir bereits von ChatGPT kennen. Das Unternehmen soll am Montag in das große KI-Wettrennen eins… [+1048 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "mobiFlip.de"
            },
            "author": "Oliver Schwuchow",
            "title": "Apple iOS 18 kommt: Wir sehen wohl ein neues Control Center",
            "description": "Am Montag wird uns Apple mit iOS 18 eine neue Software für die iPhones zeigen und ich bin auf das Update gespannt, denn die ganzen KI-Neuerungen sind nett, aber es sieht so aus, als ob da noch deutlich mehr für diesen Herbst ...",
            "url": "https://www.mobiflip.de/shortnews/apple-ios-18-kommt-wir-sehen-wohl-ein-neues-control-center/",
            "urlToImage": "https://www.mobiflip.de/wp-content/uploads/2023/09/apple-ios-17-homescreen-header.jpg",
            "publishedAt": "2024-06-06T04:12:47Z",
            "content": "Am Montag wird uns Apple mit iOS 18 eine neue Software für die iPhones zeigen und ich bin auf das Update gespannt, denn die ganzen KI-Neuerungen sind nett, aber es sieht so aus, als ob da noch deutli… [+1030 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Applech2.com"
            },
            "author": "applech2",
            "title": "Xcode不要のTouch Barシミュレータ「Touch Bar Simulator」が開発を終了。",
            "description": "Xcode不要のTouch Barシミュレータ「Touch Bar Simulator」が開発を終了しています。詳細は以下から。 　Appleは2021年10月に発売した「MacBook Pro (14/16インチ, […]\nThe post Xcode不要のTouch Barシミュレータ「Touch Bar Simulator」が開発を終了。 first appeared on AAPL Ch..",
            "url": "https://applech2.com/archives/20240606-rip-touch-bar-simulator.html",
            "urlToImage": "https://applech2.com/wp-content/uploads/2024/06/Touch-Bar-Simulator-goodby-Hero.jpg",
            "publishedAt": "2024-06-06T04:15:27Z",
            "content": "XcodeTouch BarTouch Bar Simulator\r\nApple202110MacBook Pro (14/16, 2021)2016MacBook ProOLEDTouch Bar\r\nMacBook Pro 2021Touch Bar\r\nTouch BarXcodeTouch Bar Simulator\r\nThis app is discontinued as it no lo… [+225 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "3dnews.ru"
            },
            "author": null,
            "title": "Apple признала многолетний дефект в приложении родительского контроля Screen Time",
            "description": "Компания Apple признала наличие многолетней ошибки в своей системе родительского контроля Screen Time, которая позволяла детям обходить установленные родителями ограничения на просмотр нежелательного контента в интернете. Однако исправив ошибку, она оставила …",
            "url": "https://3dnews.ru/1106039/apple-priznala-mnogoletnyu-oshibky-v-prilogenii-roditelskogo-kontrolya-screen-time",
            "urlToImage": "https://3dnews.ru/assets/external/illustrations/2024/06/06/1106039/Apple-logo_2144.jpg",
            "publishedAt": "2024-06-06T01:23:00Z",
            "content": "Apple Screen Time, . , Screen Time .\r\n: Copilot\r\n. 2021 (Andreas Jägersberger) (Ro Achterberg) Apple , , Safari. , , TheVerge.\r\n , The Wall Street Journal Apple, , iOS 17.1. , , Apple .\r\n, iOS . , Ap… [+101 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Applech2.com"
            },
            "author": "applech2",
            "title": "Ubisoft、Apple Silicon Macに対応した「アサシン クリード シャドウズ」の予約注文を日本でも開始。",
            "description": "UbisoftがApple Silicon Macに対応した「アサシン クリード シャドウズ」の予約注文を日本でも開始しています。詳細は以下から。 　フランスUbisoftは2024年05月15日、Assassin’s […]\nThe post Ubisoft、Apple Silicon Macに対応した「アサシン クリード シャドウズ」の予約注文を日本でも開始。 first appeared on AAPL Ch..",
            "url": "https://applech2.com/archives/20240606-assassins-creed-shadows-for-mac-pre-order.html",
            "urlToImage": "https://applech2.com/wp-content/uploads/2024/06/Assassins-creed-shadows-for-Mac-pre-oreder-in-mac-app-store.jpg",
            "publishedAt": "2024-06-06T03:01:37Z",
            "content": "UbisoftApple Silicon Mac \r\nUbisoft20240515Assassins Creed (Assassins Creed Shadows)1112PS5Xbox Series X|SApple Silicon Mac MacMac App Store\r\n– Mac App Store\r\n0515iPhoneiPad\r\n179,790macOS 14.4 SonomaA… [+18 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "International Business Times"
            },
            "author": "AFP News",
            "title": "Asian Markets Track Wall St Record As US Jobs Fuel Rate Cut Hopes",
            "description": "Asian markets extended a surge on Wall Street Thursday as another round of soft US jobs data ramped up bets on the Federal Reserve cutting interest rates this year.",
            "url": "https://www.ibtimes.com/asian-markets-track-wall-st-record-us-jobs-fuel-rate-cut-hopes-3733734",
            "urlToImage": "https://d.ibtimes.com/en/full/4529296/traders-are-bullish-mood-signs-softening-us-jobs-market-boost-hopes-interest-rate-cut.jpg",
            "publishedAt": "2024-06-06T03:18:06Z",
            "content": "Asian markets extended a surge on Wall Street Thursday as another round of soft US jobs data ramped up bets on the Federal Reserve cutting interest rates this year.\r\nWorries about the world's top eco… [+3282 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Www.abc.es"
            },
            "author": "(abc)",
            "title": "La empresa de Begoña Gómez, la derecha radical en Europa, y el pueblo migrante griego",
            "description": "Código Desktop Imagen para móvil, amp y app Código móvil Código AMP Código APP La mujer de Pedro Sánchez, Begoña Gómez, constituyó su empresa Transforma TSC como una Sociedad Limitada el pasado mes de noviembre. Tal y como escribe Juan Fernández-Miranda , la …",
            "url": "https://www.abc.es/voz/noticias-del-dia/empresa-begona-gomez-derecha-radical-europa-pueblo-20240606212247-nt.html",
            "urlToImage": "https://s2.abcstatics.com/abc/www/multimedia/voz/2024/06/06/boletin_758x531-U86320788068BVp-1024x512@diario_abc.jpg",
            "publishedAt": "2024-06-06T04:00:22Z",
            "content": "La mujer de Pedro Sánchez, Begoña Gómez, constituyó su empresa Transforma TSC como una Sociedad Limitada el pasado mes de noviembre. Tal y como escribe Juan Fernández-Miranda, la empresa de Begoña Gó… [+962 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Techpowerup.com"
            },
            "author": "Nomad76",
            "title": "TSMC Thinking to Raise Prices, NVIDIA's Jensen Fully Support the Idea",
            "description": "NVIDIA's CEO Jensen Huang said on June 5th that TSMC's stock price is too low, and he agrees with new TSMC chairman C. C. Wei's idea about TSMC's value. Jensen promised to support TSMC in charging more for their wafers and a type of packaging called CoWoS. An…",
            "url": "https://www.techpowerup.com/323297/tsmc-thinking-to-raise-prices-nvidias-jensen-fully-support-the-idea",
            "urlToImage": "https://www.techpowerup.com/img/LIFUcgIbocJNsvR4.jpg",
            "publishedAt": "2024-06-06T04:26:12Z",
            "content": "NVIDIA's CEO Jensen Huang said on June 5th that TSMC's stock price is too low, and he agrees with new TSMC chairman C. C. Wei's idea about TSMC's value. Jensen promised to support TSMC in charging mo… [+1000 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Mobilelaby.com"
            },
            "author": "Yusuke Sakakura",
            "title": "Apple、iPhoneのアップデート提供期間を最低5年と初公表。7年保証のPixelとGalaxyが上回る",
            "description": "スマートフォンメーカーのなかで最も長い期間アップデートを提供するメーカーと言えばAppleでしたが、7年間のアップデート提供を保証したGoogleによって打ち破られることになりました。\n\nAppleはアップデートの提供を期間を保証しておらず、善意によって長期間提供しているだけなので、伸ばすことも短くすることもできますが、PSTI法によって初めてiPhoneのアップデート提供期間を公表したことが明らかになりました。\n\n続きを読む",
            "url": "https://mobilelaby.com/blog-entry-iphone-software-support-commitment-5year.html",
            "urlToImage": "https://mobilelaby.com/wp/wp-content/uploads/black-titanium-4.jpg",
            "publishedAt": "2024-06-06T02:55:36Z",
            "content": "Apple7Google\r\nApplePSTIiPhone\r\nAndroid Authority429PSTIiPhoneApple\r\nAppleiPhone 15 Pro Max20239225\r\n2028922\r\nGoogle7OSSamsung7OS7Apple\r\nApple55\r\n2018iPhone XS96WWDC24iOS 187\r\n57\r\n523557"
        },
        {
            "source": {
                "id": null,
                "name": "Newsshooter"
            },
            "author": "Matthew Allard ACS",
            "title": "Panasonic Lumix GH7– Internal ProRes RAW recording, 32-Bit float audio recording, & ARRI LOGC3",
            "description": "Panasonic has announced the GH7, its latest Micro Four Thirds camera. The Lumix GH7 features internal ProRes RAW recording, 32-Bit float audio recording with the optional DMW-XLR2 audio interface, phase hybrid autofocus, active internal stabilization, and the…",
            "url": "https://www.newsshooter.com/2024/06/05/panasonic-lumix-gh7-internal-prores-raw-recording-32-bit-float-audio-recording-arri-logc3/",
            "urlToImage": "https://www.newsshooter.com/wp-content/uploads/2024/06/IMG_6353.jpeg",
            "publishedAt": "2024-06-06T01:30:17Z",
            "content": "Panasonic has announced the GH7, its latest Micro Four Thirds camera. The Lumix GH7 features internal ProRes RAW recording, 32-Bit float audio recording with the optional DMW-XLR2 audio interface, ph… [+13221 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Computerwoche.de Live"
            },
            "author": "Mike Elgan",
            "title": "KI wird Smartphones auslöschen",
            "description": "Dank künstlicher Intelligenz wird das Smartphone bald Geschichte sein.",
            "url": "https://www.computerwoche.de/a/ki-wird-smartphones-ausloeschen,3698794?utm_source=Nach-Artikeltyp_1,30,119,124,125&utm_medium=RSS&utm_campaign=RSS-Feeds",
            "urlToImage": "https://images.computerwoche.de/bdb/3392863/640x360.png",
            "publishedAt": "2024-06-06T03:23:00Z",
            "content": "Der Todesstoß für das Smartphone wird noch ein paar Jahre auf sich warten lassen, ist aber unausweichlich.Foto: Oleksii Lee | shutterstock.com\r\nApple wird auf der kommenden WWDC wohl tun, was zahlrei… [+4035 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Helentech.jp"
            },
            "author": null,
            "title": "Apple が iPhone のサポート期間を発表。Google や Samsung よりも短いことが確認 | HelenTech",
            "description": "Google は昨年の Pixel 8 および Pixel 8 Pro において7年間のソフトウェアップデートを提供することを発表しましたが、今回は Apple が同じようにサポート期間を発表していますが、これにより Google や Samsung よりも短いことが確認されました。 いままで Apple は iPhone がソフトウェアアップデートを受ける期間や...",
            "url": "https://helentech.jp/news-45135/",
            "urlToImage": "https://helentech.jp/wp-content/uploads/2024/05/google-pixel-8-pro-and-bellroy-case.webp",
            "publishedAt": "2024-06-06T01:52:34Z",
            "content": "Google Pixel 8 Pixel 8 Pro 7 Apple Google Samsung \r\n Apple iPhone Google Samsung Android Google Samsung \r\nAndroid Authority 2024429Apple iPhone 15 Pro Max 52023922 iPhone 15 \r\nApple iPhone 15 5202892… [+36 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Overclockers.ru"
            },
            "author": "ddr22",
            "title": "Выпуск складного iPhone откладывается до 2027 года",
            "description": "Складка на дисплее продолжает быть главной проблемой для компании Apple в разработке и выпуске складного iPhone.",
            "url": "https://overclockers.ru/blog/ddr77/show/161903/Vypusk-skladnogo-iPhone-otkladyvaetsya-do-2027-goda",
            "urlToImage": "https://overclockers.ru/st/legacy/blog/145016/523948_O.png",
            "publishedAt": "2024-06-06T01:45:18Z",
            "content": "Apple iPhone 2027 . .\r\nApple . . . , . Apple, , iPhone.\r\n, TrendForce, iPhone 2026 2027 . . Apple ."
        },
        {
            "source": {
                "id": null,
                "name": "Bloguismo.com"
            },
            "author": "Anairas",
            "title": "Finest Online casino Incentives and you will Indication",
            "description": "Blogs Have to Gamble Now? The following is The #1 Choice of No-deposit Gambling enterprise Choose Their Game Will they be Readily available for Cellular Play? You can use other normal banking actions if the online casinos wear’t accept so it percentage means.…",
            "url": "https://www.bloguismo.com/finest-online-casino-incentives-and-you-will-indication/",
            "urlToImage": "https://g.twimg.com/Twitter_logo_blue.png",
            "publishedAt": "2024-06-06T01:08:47Z",
            "content": "You can use other normal banking actions if the online casinos weart accept so it percentage means. Although not, if you would like have fun with the game and now have a go during the profitable, bro… [+5722 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gadget2ch.com"
            },
            "author": "Gadget 2ch",
            "title": "【悲報】Apple、ついに没落しはじめる！",
            "description": "マジ！？ 1: それでも動く名無し 2024/06/06(木) 10:27:59.70 ID:Ui6zZCPjr0606   3: それでも動く名無し 2024/06/06(木) 10:29:24.59 ID:...",
            "url": "http://www.gadget2ch.com/archives/post-232898.html",
            "urlToImage": "https://i0.wp.com/www.gadget2ch.com/wp-content/uploads/2024/06/Apple-Logo.jpg-1.webp?fit=300%2C300",
            "publishedAt": "2024-06-06T04:30:03Z",
            "content": "1: 2024/06/06() 10:27:59.70 ID:Ui6zZCPjr0606\r\n3: 2024/06/06() 10:29:24.59 ID:Ui6zZCPjr0606\r\n4: 2024/06/06() 10:30:46.38 ID:WWXWNHzTM0606\r\n6: 2024/06/06() 10:33:18.79 ID:m7AOS1FX00606\r\n95: 2024/06/06(… [+1875 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Finofilipino.org"
            },
            "author": "Fino",
            "title": "Dos chicas españolas cuentan la mala y traumática experiencia de acoso, que han sufrido en su viaje de turismo por la ciudad de Burdeos (Francia)",
            "description": "????????| Dos españolas narran la mala experiencia que han sufrido en su viaje a Burdeos: pic.twitter.com/1kog6oY7eX — ʜᴇʀQʟᴇs (@herqles_es) June 5, 2024 [Ver vídeo en X]\nVer post completo: Dos chicas españolas cuentan la mala y traumática experiencia de acos…",
            "url": "https://finofilipino.org/dos-chicas-espanolas-cuentan-la-mala-y-traumatica-experiencia-de-acoso-que-han-sufrido-en-su-viaje-de-turismo-por-la-ciudad-de-burdeos-francia/",
            "urlToImage": "https://finofilipino.org/wp-content/uploads/2024/06/sergfeawvrtyjrtyuj.jpg",
            "publishedAt": "2024-06-06T04:50:32Z",
            "content": "Puedes ahorrar +170 con cupones. Con GRANDES descuentos en productos Cecotec, Lego, Apple, Xiaomi, Samsung y otras.\r\nTodos los cupones de descuento en el ÁREA DE CUPONES.\r\nTodas las ofertas de Pasión… [+1366 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Livedoor.jp"
            },
            "author": "rbkyn844",
            "title": "【悲報】Apple、ついに没落しはじめる！",
            "description": "【悲報】Apple、ついに没落しはじめる！\n\nvar microadCompass = microadCompass || {};\nmicroadCompass.queue = microadCompass.queue || [];\n\n\n\n\nmicroadCompass.queue.push({\n\"spot\": \"11cf97bbd364c255a1c676272a5f1000\"\n});",
            "url": "http://blog.livedoor.jp/rbkyn844/archives/10652593.html",
            "urlToImage": "https://livedoor.blogimg.jp/rbkyn844/imgs/8/6/8643c60d.jpg",
            "publishedAt": "2024-06-06T03:12:04Z",
            "content": ": https://nova.5ch.net/test/read.cgi/livegalileo/1717637279/ \r\n3: [Lv.6][] 2024/06/06() 10:29:24.59 ID:Ui6zZCPjr0606\r\nNVIDIAApple23https://t.co/Agp8qR40M0pic.twitter.com/73kRRG72ip\r\n (@nikkei) June 5… [+3522 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Svethardware.cz"
            },
            "author": "Milan Šurkala",
            "title": "Asus ProArt P16 přichází se 70W Ryzenem AI a 4K displejem, útočí na MacBook Pro",
            "description": "Asus by svými novými notebooky ProArt P16 mohl zaútočit na oblíbené profesionální notebooky Apple MacBook Pro 16. Jeho 16\" novinka má totiž procesor Ryzen AI, GeForce RTX 4070 a 16\" 4K displej.",
            "url": "https://www.svethardware.cz/asus-proart-p16-prichazi-se-70w-ryzenem-ai-a-4k-displejem-utoci-na-macbook-pro/60762",
            "urlToImage": "https://www.svethardware.cz/asus-proart-p16-prichazi-se-70w-ryzenem-ai-a-4k-displejem-utoci-na-macbook-pro/60762/img/asus-proart-p16-800.webp",
            "publishedAt": "2024-06-06T03:52:36Z",
            "content": ""
        },
        {
            "source": {
                "id": null,
                "name": "Mysku.club"
            },
            "author": "ZeRNoVoz",
            "title": "Зарядное устройство 65Вт Ugreen CD361. I'm a Robot GaN",
            "description": "Цена: 25.76$-26.53$Перейти в магазинЗарядное устройство из новой серии Robot GaN. Максимальная мощность 65Вт (20В 3.25А).Проверим характеристики, нагрев. Сравним с другими зарядками на 65Вт.Лёгкое чтиво.Кто о чём, а Зерновоз о GaN зарядках © Читать далее",
            "url": "https://mysku.club/blog/aliexpress/99777.html",
            "urlToImage": "https://ext.mysku-st.net/250s/art.mysku-st.net/uploads/arts/07/64/49/2024/06/05/5f247e.jpg",
            "publishedAt": "2024-06-06T03:32:57Z",
            "content": "Robot GaN. 65 (20 3.25).\r\n , . 65.\r\n .\r\n , GaN ©\r\n:. . \r\n \r\n: UGREEN CD361Robot GaN 65W Charger\r\n 160 46.8 42.8 87.5 ( 50 )\r\n  PD3.0/QC4.0, QC3.0/2.0, PPS, FCP, SCP, AFC, Apple 2.4, DCP SAM 2A\r\n : US… [+1193 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Elconfidencial.com"
            },
            "author": "Albert Sanchis. Taipéi (Taiwán)",
            "title": "Por qué la feria tecnológica más gris del planeta ahora te va a interesar más que nunca",
            "description": "Computex, el evento tech más grande de Asia celebrado en Taipéi (Taiwán), acapara todas las miradas por la guerra comercial que se lleva a cabo entre fabricantes de chips de todo el mundo. ¿Misión? Ganar la carrera de la IA",
            "url": "https://www.elconfidencial.com/tecnologia/2024-06-06/computex-taiwan-chips-inteligencia-artificial-amd-intel-nvidia-qualcomm_3896715/",
            "urlToImage": "https://images.ecestaticos.com/9IIw_Es9Hv2_4fJPVPVPTuPC5Lo=/0x0:2272x1515/600x315/filters:fill(white):format(jpg):quality(99):watermark(f.elconfidencial.com/file/bae/eea/fde/baeeeafde1b3229287b0c008f7602058.png,0,275,1)/f.elconfidencial.com/original/9af/7e7/393/9af7e73934f5055d8669488162b399be.jpg",
            "publishedAt": "2024-06-06T03:00:00Z",
            "content": "Mientras los escépticos sostenían hace un año que la IA todavía era un sueño lejano, en 2024 es una realidad palpable en casi todas las facetas de la vida. Lo hemos visto con ChatGPT, de OpenAI o con… [+9179 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Shiftdelete.net"
            },
            "author": "Ahmet Safa",
            "title": "Apple artık dünyanın en değerli ikinci şirketi değil!",
            "description": "Bu içerik ilk olarak Apple artık dünyanın en değerli ikinci şirketi değil! adresinde yayınlandı Teknoloji Haberleri - ShiftDelete.Net.",
            "url": "https://shiftdelete.net/nvidia-artik-dunyanin-en-degerli-ikinci-sirketi",
            "urlToImage": "https://ares.shiftdelete.net/2024/06/nvidia-artik-dunyanin-en-degerli-ikinci-sirketi-4-e1717631012750.jpg",
            "publishedAt": "2024-06-06T04:00:00Z",
            "content": "NVIDIA, çip üretimindeki baarsyla tam anlamyla devleti ve piyasa deerini 3,01 trilyon dolara çkararak Apple’ geride brakt. Evet, NVIDIA artk dünyann en deerli ikinci irketi oldu. Peki, NVIDIA bulara … [+1976 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Tabletowo.pl"
            },
            "author": "Grzegorz Dąbek",
            "title": "Apple tu rządzi, ale jest druga strona tego medalu",
            "description": "Apple ma dużą i silną konkurencję. W tym przypadku nie zdołała ona jednak pokonać giganta z Cupertino. Mimo to trudno uznać ten sukces za spektakularny.Przeczytaj pełny artykuł tutaj: Apple tu rządzi, ale jest druga strona tego medalu",
            "url": "https://www.tabletowo.pl/apple-tu-rzadzi-ale-jest-druga-strona-tego-medalu/",
            "urlToImage": "https://www.tabletowo.pl/wp-content/uploads/2018/09/szachy-król-fot.-Pexels.jpeg",
            "publishedAt": "2024-06-06T05:00:00Z",
            "content": "Apple ma du i siln konkurencj. W tym przypadku nie zdoaa ona jednak pokona giganta z Cupertino. Mimo to trudno uzna ten sukces za spektakularny – mona powiedzie, e firmie si sfarcio.\r\nProdukty firmy … [+2820 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Cnbeta.com.tw"
            },
            "author": "ytzong",
            "title": "Throwboy推出以苹果App图标为模型的枕头",
            "description": "Throwboy 以生产外形酷似经典 Mac 的抱枕而闻名，但该公司又推出了一系列以苹果App图标为原型的新抱枕。这些枕头设计成\"信息\"、\"邮件\"、\"Apple Music\"、\"Finder\"和\"Notes\"图标的样子，由柔软的长毛绒材料制成。\r\n\nThrowboy 称这种材料具有舒适触感，枕头内部厚厚的聚脂填充物给人一种\"可爱、弹跳的感觉\"，每个枕头上的设计都是刺绣而成，经久耐用：获取包含全部五个应用程序主题抱枕的必备套装 - 无论您是信息、音乐、笔记、邮件还是图标的粉丝，这一系列都能满足您的需求。每个抱枕都精…",
            "url": "https://www.cnbeta.com.tw/articles/tech/1433761.htm",
            "urlToImage": "https://static.cnbetacdn.com/article/2024/0606/61d03eeff9d8bbc.jpg",
            "publishedAt": "2024-06-06T02:05:34Z",
            "content": "Throwboy Mac App\"\"\"\"\"Apple Music\"\"Finder\"\"Notes\""
        },
        {
            "source": {
                "id": null,
                "name": "Cnbeta.com.tw"
            },
            "author": "ytzong",
            "title": "苹果Vision Pro开发者应用包含WWDC视频的沉浸式环境",
            "description": "苹果开发者应用的 Vision Pro 版本包含一个特殊的沉浸式环境，可用作下周 WWDC\n开始时观看会议视频的背景。该应用的环境以黑色为背景，配以霓虹灯动画，颜色与苹果今年使用的 WWDC 图样一致。\r\n\n对于那些想闭目观看 WWDC\n内容的用户来说，它既是一个视觉上有趣的背景，又不会太分散注意力。与苹果公司为普通用户创建的环境类似，如优胜美地、胡德山和月球，使用 Apple Developer 应用程序时可以访问该环境，并可通过 Digital Crown 调整沉浸感。WWDC 将于下周一开始，太平洋时间上午…",
            "url": "https://www.cnbeta.com.tw/articles/tech/1433763.htm",
            "urlToImage": "https://static.cnbetacdn.com/article/2024/0606/6c57561cd87e783.jpeg",
            "publishedAt": "2024-06-06T02:05:59Z",
            "content": "WWDC\r\nApple Developer Digital Crown \r\nWWDC 10:00 YouTubeApple TVWWDC \r\nVision Pro Developer visionOS App Store"
        },
        {
            "source": {
                "id": null,
                "name": "Kai-you.net"
            },
            "author": "KAI-YOU編集部",
            "title": "ラテンアメリカ文学の傑作『百年の孤独』文庫版の装幀が解禁　筒井康隆が解説を寄稿",
            "description": "ラテンアメリカ文学の巨匠 ガブリエル・ガルシア＝マルケスさんの代表作『百年の孤独』文庫版（新潮文庫刊）に、筒井康隆さんによる書き下ろし解説が収録されることが決定した。装幀と造本の詳細も解禁。装画はAppleやGucci、TOYOTAなどに作品を提供してきたイラストレーター・三宅瑠人さんが担当する。なお、初回出荷分限定で、新潮文庫では通常こげ茶色のスピン（紐しおり）が、本作だけの特別仕様として煌びやかな金色になる。6月26日（水）に新潮社から刊行。定価は1375円（税込）。『百年の孤独』文庫版をA...",
            "url": "https://kai-you.net/article/89780",
            "urlToImage": "https://api.kai-you.net/storage/images/upload_images/2024/06/15cf5dd3-325b-44ad-b577-2aab3ca1de3c/main.webp",
            "publishedAt": "2024-06-06T04:30:00Z",
            "content": "VTuber ANYCOLORBrave group"
        },
        {
            "source": {
                "id": null,
                "name": "Ithome.com"
            },
            "author": null,
            "title": "苹果 iPhone / Apple Watch 被曝本月起不再将“单根发丝状裂纹”纳入标准保修",
            "description": "IT之家 6 月 6 日消息，科技媒体 9to5Mac 今天发布博文，表示从多条消息源处获悉，苹果公司计划本月调整 iPhone 和 Apple Watch 的维修和标准保修政策，不再将“单根发丝状裂纹”纳入标准保修范围。IT之家注：iPhone 和 Apple Watch 用户当前在标准保修期内，设备上没有明显的其它损坏，或者没有明显的撞击点导致裂纹，那么屏幕出现“单根发丝状裂纹”（single hairline cracks），苹果官方会提供相应的保修。消息称苹果公司本周分发给苹果专卖店和苹果授权服务提供商的…",
            "url": "https://www.ithome.com/0/773/435.htm",
            "urlToImage": null,
            "publishedAt": "2024-06-06T00:26:16Z",
            "content": "IT 6 6 9to5Mac iPhone Apple Watch \r\nITiPhone Apple Watch single hairline cracks\r\n iPhone Apple WatchiPad Mac \r\nIT"
        },
        {
            "source": {
                "id": null,
                "name": "Ithome.com"
            },
            "author": null,
            "title": "慎用 macOS 破解版应用：黑客用于分发恶意软件，窃取你的隐私信息",
            "description": "IT之家 6 月 6 日消息，网络安全公司 MacPaw 旗下 Moonlock Lab 于 6 月 4 日发布博文，表示近期有黑客通过 macOS 破解版 CleanMyMac 或 Photoshop 等主流应用，分发新型 Mac 恶意软件。Mac 设备一旦感染该恶意软件，该恶意软件就会使用 AppleScript 诱骗用户泄露密码，从 Chrome 和 Safari 等浏览器中窃取 cookies，如果恶意软件检测到在虚拟机上运行就会自毁。脚本首先会从系统中获取当前用户名以及其他重要的系统路径，以供日后使用。…",
            "url": "https://www.ithome.com/0/773/439.htm",
            "urlToImage": null,
            "publishedAt": "2024-06-06T00:39:03Z",
            "content": "IT 6 6 MacPaw Moonlock Lab 6 4 macOS CleanMyMac Photoshop Mac \r\nMac AppleScript Chrome Safari cookies\r\n Chrome Safari cookie IT\r\nlogin.keychain-db macOS NoteStore.sqlite Apple Notes \r\nIT"
        },
        {
            "source": {
                "id": null,
                "name": "Ithome.com"
            },
            "author": null,
            "title": "自研才是王道：Siri 联合创始人称苹果与 OpenAI 合作只是权宜之计",
            "description": "IT之家 6 月 6 日消息，据报道，苹果公司正与 OpenAI 合作，将生成式人工智能功能引入 Siri。然而，Siri 的联合创始人 Dag Kittlaus 预测，这可能仅仅是权宜之计，苹果正在研发并改进自家的聊天机器人技术。IT之家注意到，彭博社本月初报道了苹果与 OpenAI 的合作。该报道称，苹果正在与 OpenAI 达成协议，将在今年将其部分技术引入 iPhone。通过此项协议，苹果将能够在 iOS 18 的人工智能功能中提供由 ChatGPT 支持的“流行聊天机器人”。据信，苹果签署这项协议是为了…",
            "url": "https://www.ithome.com/0/773/437.htm",
            "urlToImage": null,
            "publishedAt": "2024-06-06T00:31:42Z",
            "content": "IT 6 6 OpenAI SiriSiri Dag Kittlaus \r\nIT OpenAI OpenAI iPhone iOS 18 ChatGPT \r\n iOS 18 Siri WWDC24 OpenAI CEO (Sam Altman) \r\n 9to5mac Apple GPT\r\nChatGPT OpenAI \r\n Kittlaus \r\n Siri Kittlaus Siri Siri … [+47 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Ithome.com"
            },
            "author": null,
            "title": "旗下最强电动汽车，大众 ID.7 GTX 强势登场：百公里加速 5.4 秒",
            "description": "IT之家 6 月 6 日消息，大众 ID.7 GTX 已经发布，这是大众有史以来最强大的电动汽车。大众同时还开启了 ID.7 Pro S 的预订，其 WLTP 续航里程可达 709 公里。去年大众推出了 ID.7，这是其 ID 系列的第六款车型。目前，大众 ID 家族还包括 ID.3、ID.4、ID.5、ID.6 和 ID.Buzz。去年 8 月在欧洲开启预订后，大众表示 ID.7 提供 Pro 和 Pro S 两种配置，起价 56995 欧元（IT之家备注：当前约 44.9 万元人民币）。配备 77kWh 电池…",
            "url": "https://www.ithome.com/0/773/449.htm",
            "urlToImage": null,
            "publishedAt": "2024-06-06T01:29:39Z",
            "content": "IT 6 6 ID.7 GTX ID.7 Pro S WLTP 709 \r\nID.7 ID ID ID.3ID.4ID.5ID.6 ID.Buzz\r\n 8 ID.7 Pro Pro S 56995 IT 44.9 77kWh Pro WLTP 621 \r\nPro S GTX \r\n ID.7 GTX 335 250 5.4 0 100 / \r\nID.7 GTX 6 6 63155 49.8 ID.… [+274 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Arigato-ipod.com"
            },
            "author": "Ygn",
            "title": "Apple丸の内でToday at Apple「スポットライト：木本奏太に学ぶ、自分らしく生きるための表現方法」6月20日開催",
            "description": "Apple丸の内でToday at Appleセッション「スポットライト：木本奏太に学ぶ、自分らしく生きるための表現方法」が、6月20日（木）に開催されます。 Final Cut Proを使用する映像クリエイターで、トラ...\nThe post Apple丸の内でToday at Apple「スポットライト：木本奏太に学ぶ、自分らしく生きるための表現方法」6月20日開催 first appeared on アイアリ.",
            "url": "https://arigato-ipod.com/2024/06/today-at-apple-marunouchi-spotlight-kanata-kimoto.html",
            "urlToImage": "https://arigato-ipod.com/wp/wp-content/uploads/2024/06/240606todayatapplespotlightkanatakimoto.jpg",
            "publishedAt": "2024-06-06T02:48:58Z",
            "content": "Apple丸の内でToday at Appleセッション「スポットライト：木本奏太に学ぶ、自分らしく生きるための表現方法」が、6月20日（木）に開催されます。\n\nFinal Cut Proを使用する映像クリエイターで、トランスジェンダーの木本奏太氏によるトークイベントです。\n6月のプライド月間に合わせて実施されるものです。\n\n「世界プライド月間」に、自分らしさをクリエイティブに表現する方法を探っ… [+472 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Prtimes.jp"
            },
            "author": null,
            "title": "マツイシングルモルトウイスキー「倉吉」がイギリスで開催された「IWSC2024」においてゴールドを受賞！",
            "description": "[松井酒造合名会社]\n[画像1: https://prtimes.jp/i/45998/47/resize/d45998-47-644abf609c4d7646cb05-3.jpg ]\n\n松井酒造合名会社(所在地：鳥取県倉吉市)のマツイシングルモルトウイスキー「倉吉」が、イギリスで開催された世界3大酒...",
            "url": "https://prtimes.jp/main/html/rd/p/000000047.000045998.html",
            "urlToImage": "https://prcdn.freetls.fastly.net/release_image/45998/47/45998-47-94711d3d6db8e49294d205ce8fee28d9-1920x1080.jpg?format=jpeg&auto=webp&fit=bounds&width=2400&height=1260",
            "publishedAt": "2024-06-06T01:40:02Z",
            "content": "()3International Wine and Spirit Competition 2024(IWSC\r\nIWSC\r\nNotes of green apple, orchard fruit, and spun sugar greet the senses, while hints of caramel and apples offer a well-balanced sweetness. … [+797 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Droidsans.com"
            },
            "author": "popiko",
            "title": "Apple ประกาศชัด iPhone 15 จะได้รับอัปเดตแพทช์ความปลอดภัยอย่างน้อย 5 ปี",
            "description": "ก่อนหน้า Apple ไม่เคยออกมาประกาศนโยบายแบบชัดเจนเลยว่าอุปกรณ์ที่วางขายจะได้รับการอัปเดตแพทช์ความปลอดภัยนานแค่ไหน แต่หลังจากที่สหราชอาณาจักรออกกฎ Product Security and Telecommunications Infrastructure ออกมา Apple ก็ได้ดำเนินการประกาศว่า iPhone 15 จะได้รับอัปเดต…",
            "url": "https://droidsans.com/apple-5-years-minimum-guarantee-for-software-support/",
            "urlToImage": "https://images.droidsans.com/wp-content/uploads/2024/06/Apple-3.png",
            "publishedAt": "2024-06-06T04:52:05Z",
            "content": "Apple Product Security and Telecommunications Infrastructure Apple iPhone 15 Series 5 \r\n Product Security and Telecommunications Infrastructure (PSTI) , 29 2024 Apple \r\nApple PSTI A3106 (iPhone 15 Pr… [+127 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Newmobilelife.com"
            },
            "author": "Andy",
            "title": "摩根大通：Apple AI 功能將吸引大批用戶升級 iPhone 16",
            "description": "<!-- wp:paragraph {\"canvasClassName\":\"cnvs-block-core-paragraph-1717632538343\"} -->\n投資銀行 JP Morgan （摩根大通）表示，Apple 結合 AI 與隱私功能，預計將促使大批用戶在 2025 年升級至 iPhone 16，這應能讓對公司未來感到擔憂的投資者安心。\n<!-- /wp:paragraph -->\n\n<!-- wp:image {\"id\":497491,\"sizeSlug\":\"large\",\"linkDestin…",
            "url": "https://www.newmobilelife.com/2024/06/06/jpmorgan-apple-ai-push-iphone16-sales/",
            "urlToImage": "https://static.newmobilelife.com/wp-content/uploads/2024/01/iphone16.webp",
            "publishedAt": "2024-06-06T00:12:51Z",
            "content": "<!-- wp:paragraph {\"canvasClassName\":\"cnvs-block-core-paragraph-1717632538343\"} -->\n投資銀行 JP Morgan （摩根大通）表示，Apple 結合 AI 與隱私功能，預計將促使大批用戶在 2025 年升級至 iPhone 16，這應能讓對公司未來感到擔憂的投資者安心。\n<!-- /wp:paragraph --… [+2536 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Ferra.ru"
            },
            "author": "Булат Кармак",
            "title": "Apple представит visionOS 2 уже на WWDC 24",
            "description": "Apple готовится представить visionOS 2 на WWDC 24, который состоится 10 июня.",
            "url": "https://www.ferra.ru/news/techlife/apple-predstavit-visionos-2-uzhe-na-wwdc-24-05-06-2024.htm",
            "urlToImage": "https://www.ferra.ru/imgs/2024/06/05/19/6492779/f1c71b6b84e8c39b347627ff3eeca4dfcb67f05f.jpeg",
            "publishedAt": "2024-06-06T04:40:46Z",
            "content": ", - , Vision Pro , , , , .\r\n, , , , .\r\nvisionOS 2 Vision Pro. Bloomberg, Apple, Vision Pro, .\r\n , Apple Pencil Pro."
        },
        {
            "source": {
                "id": null,
                "name": "Ferra.ru"
            },
            "author": "Булат Кармак",
            "title": "Apple исправит старинный баг, позволявший детям обходить «родительский контроль»",
            "description": "Apple наконец-то решит одну из самых назойливых проблем своего родительского контроля Screen Time, которая позволяла детям обходить ограничения.",
            "url": "https://www.ferra.ru/news/techlife/apple-ispravit-starinnyi-bag-pozvolyavshii-detyam-obkhodit-roditelskii-kontrol-05-06-2024.htm",
            "urlToImage": "https://www.ferra.ru/imgs/2024/06/05/19/6492775/df1da9a3facb7845bf7a9b97bcb4e59f267074c9.webp",
            "publishedAt": "2024-06-06T04:32:46Z",
            "content": ", , iOS.\r\n : Safari . Apple, .\r\n, , Apple .\r\n , , . .\r\n , , , - , Apple ."
        },
        {
            "source": {
                "id": null,
                "name": "Letemsvetemapplem.eu"
            },
            "author": "Jiří Filip",
            "title": "Applu unikly první novinky z visionOS 2.0!",
            "description": "Úvodní Apple Keynote, naplánovaná na příští pondělí se nebude točit jen kolem novinek z iOS 18. Svou premiéru si zde totiž samozřejmě odbudou i další nové operační systémy z dílny Applu v čele s macOS 15, watchOS 11 a samozřejmě i visionOS 2.0. Právě ten přit…",
            "url": "https://www.letemsvetemapplem.eu/2024/06/06/applu-unikly-prvni-novinky-z-visionos-2-0/",
            "urlToImage": "https://www.letemsvetemapplem.eu/wp-content/uploads/2024/03/recenze-apple-vision-pro.jpg",
            "publishedAt": "2024-06-06T04:00:24Z",
            "content": "Úvodní Apple Keynote, naplánovaná na pítí pondlí se nebude toit jen kolem novinek z iOS 18. Svou premiéru si zde toti samozejm odbudou i dalí nové operaní systémy z dílny Applu v ele s macOS 15, watc… [+979 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Softantenna.com"
            },
            "author": "saadmin",
            "title": "「Bartender」のオーナー変更問題でユーザーの不満が爆発。代替アプリはこちら",
            "description": "Macのメニューバーアイコンを管理することができる人気アプリ「Bartender」の所有者がいつの間にか変更され、署名が変更された新バージョン(5.0.52)が公開された問題に対し、Redditでは多くのユーザーが不満を訴えています。 現在",
            "url": "https://softantenna.com/blog/bartender-alternatives/",
            "urlToImage": "https://softantenna.com/blog/wp-content/uploads/2024/06/s_20240606_094339-1.jpg",
            "publishedAt": "2024-06-06T01:02:41Z",
            "content": "It's Ben Surtees, the original developer of Bartender. Twelve years ago, I embarked on a journey to create Bartender, a macOS app designed to help you manage your menu bar items. Over the years, it h… [+1580 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Famitsu.com"
            },
            "author": "famitsu_app",
            "title": "【事前登録】シリーズ最新作『アビスリウム・ザ・クラシック』6月18日にリリース決定！",
            "description": "世界的人気を誇るシリーズ作『アビスリウム』に新作が登場する。",
            "url": "https://app.famitsu.com/gametitle/20562/",
            "urlToImage": "https://app.famitsu.com/wp-content/uploads/2024/06/screenshot01-506x285.jpg",
            "publishedAt": "2024-06-06T02:50:22Z",
            "content": "WEMADE CONNECT618\r\n6500\r\nWEMADE CONNECT618\r\n2016 6500\r\nBGMWEMADE CONNECT \r\nApple AppstoreGoogle PlayX\r\nWEMADE CONNECT\r\n618XFacebookInstagramSNS"
        },
        {
            "source": {
                "id": null,
                "name": "SoyaCincau.com"
            },
            "author": "Alexander Wong",
            "title": "Boost Bank by Axiata and RHB: Multi-tiered interest rate, open for unbanked users",
            "description": "Boost Bank has finally launched and it’s Malaysia’s third digital bank licensed and regulated by Bank Negara Malaysia. Formed by a consortium of Axiata’s Boost and RHB, Boost Bank claims to be the first home-grown digital bank in Malaysia. Registrations for t…",
            "url": "https://soyacincau.com/2024/06/06/boostbank-axiata-rhb-digital-bank-launch-savings-interest-rate-unbanked-users/",
            "urlToImage": "https://soyacincau.com/wp-content/uploads/2024/06/240606-boost-bank-05-hero.jpg",
            "publishedAt": "2024-06-06T04:36:14Z",
            "content": "Boost Bank has finally launched and it’s Malaysia’s third digital bank licensed and regulated by Bank Negara Malaysia. Formed by a consortium of Axiata’s Boost and RHB, Boost Bank claims to be the fi… [+2739 chars]"
        }
    ]
    constructor() {
        super();
        this.state = {
            articles: this.articles
        }
    }
    render() {
        return (
            <div className='container my-3'>
                <h2>NewsBaba - Top Headlines...</h2>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div key={element.source.id} className="col-md-4">
                            <NewsItem title={element.title} discription={element.description} imgurl={element.urlToImage} url={element.url}/>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

export default News
