/**
 * Astrovgyan — i18n Translation Engine
 * Supports: English (en), Hindi (hi), Odia (od)
 * Language persists across all pages via localStorage
 */

(function () {
    // ─── Translation Dictionaries ─────────────────────────────────────────────
    const dict = {
        en: {
            // ── Shared Nav ──
            nav_home:       'HOME',
            nav_contact:    'CONTACT',
            nav_book:       'BOOK',
            nav_consult_lnk: 'Consultation',
            nav_puja:       'Puja / Chadhawa',
            nav_consult:    'CONSULT NOW',

            // ── Shared Footer ──
            footer_brand_p: 'Accessing the infinite wisdom of the stars to light your path on earth. Our consultations combine tradition with precision.',
            footer_wa:      'WHATSAPP US',
            footer_nav_h:   'NAVIGATION',
            footer_nav_home:'Home',
            footer_nav_cu:  'Contact Us',
            footer_nav_bc:  'Book Consultation',
            footer_nav_bp:  'Book Puja/Chadhawa',
            footer_sup_h:   'SUPPORT',
            footer_privacy: 'Privacy Policy',

            footer_refund:  'Refund Policy',
            footer_touch_h: 'GET IN TOUCH',
            footer_bottom:  '© 2026 ASTROVGYAN. Accessing the infinite.',
            footer_made_by: 'Crafted with ❤️ by',

            // ── index.html ──
            subtitle:       'THE ANCIENT ARTS REIMAGINED',
            hero_h1:        'Astrovgyan: Expert Vedic Astrology, Numerology & Vastu Consultation Services',
            hero_p:         'We follow Vedic Astrology, K.P. Astrology, BNN, LalKitab for accurate prediction. Discover your destiny through the wisdom of the cosmos.',
            cta_journey:    'Begin Your Journey',
            cta_explore:    'Explore Methodologies',
            about_founder_h: 'Ssmruti Rn Choudhury',
            about_founder_p1: 'One of the best Astrologers in Odisha, founder of ASTROVGYAN, a place for astrological services.',
            about_founder_p2: 'He is a teacher, astrologer and also a social activist.',
            about_founder_p3: 'He is an expert in solving problems regarding Education of students, Business, profession related issues, marriage related issues, family disputes, etc...',
            about_founder_p4: 'Also He helps in naming a new baby name, a new business name, for students choosing the right profession aligned with D.O.B.',
            about_founder_p5: 'He is a practitioner of VEDIC ASTROLOGY, KP ASTROLOGY, LAL KITAB, BNN ASTROLOGY, NUMEROLOGY AND VASTU.',
            about_founder_p6: 'Till date about Thousands of clients have consulted through both online/ offline, and each & everyone is satisfied with the consultation.',
            insights_h2:    'Celestial Insights',
            insights_p:     'Our expertise spans across multiple disciplines of mystical and astronomical sciences to provide a holistic view of your life path.',
            explore_h2:     'Explore Your Sign',

            // ── Insight Cards ──
            insight_1_h: '1. Marriage',  insight_1_p: 'Gain deep insights into your marital prospects, compatibility, and timing. Discover planetary influences shaping your relationships and future partnership.',
            insight_2_h: '2. Business',  insight_2_p: 'Unlock the right timing and direction for your business ventures. Analyze planetary strengths to ensure growth, stability, and financial success.',
            insight_3_h: '3. Property Dispute', insight_3_p: 'Resolve property-related conflicts with astrological guidance. Identify favorable outcomes and timelines to achieve clarity and resolution.',
            insight_4_h: '4. Vastu Shastra', insight_4_p: 'Align your home or workplace with cosmic energies using Vastu principles. Enhance positivity, prosperity, and overall well-being.',
            insight_5_h: '5. Kundli Dosh', insight_5_p: 'Identify and understand doshas in your birth chart. Get precise remedies to minimize their effects and restore balance in life.',
            insight_6_h: '6. Education', insight_6_p: 'Discover your academic strengths and ideal career paths. Get guidance on success in studies and higher education.',
            insight_7_h: '7. Palmistry', insight_7_p: 'Decode the secrets hidden in your palm lines. Understand your personality, life path, and future opportunities.',
            insight_8_h: '8. Remedy Suggestions', insight_8_p: 'Receive personalized and effective remedies based on your planetary positions. Improve life situations with practical spiritual solutions.',
            insight_9_h: '9. Numerology', insight_9_p: 'Explore the power of numbers in shaping your destiny. Align your name and birth date with universal vibrations for success.',
            insight_10_h: '10. Divorce Problems', insight_10_p: 'Get clarity and guidance during challenging relationship phases. Understand outcomes and find the right path forward.',
            insight_11_h: '11. Career and Job', insight_11_p: 'Analyze your career growth, job changes, and opportunities. Identify the right time for success and professional stability.',
            insight_12_h: '12. Profession', insight_12_p: 'Choose the most suitable profession based on your horoscope. Align your skills and planetary strengths for long-term success.',
            insight_13_h: '13. Business Name', insight_13_p: 'Find a powerful and lucky name for your business. Ensure alignment with numerology and astrology for growth and recognition.',
            insight_14_h: '14. New Baby Name', insight_14_p: 'Get meaningful and auspicious names for your newborn. Ensure harmony with birth chart and positive life vibrations.',
            insight_15_h: '15. Mobile Number Analysis', insight_15_p: 'Check the impact of your mobile number on your life energy. Align it with numerology for better luck and communication flow.',
            insight_16_h: '16. Name Correction', insight_16_p: 'Refine your name to match favorable numerological vibrations. Enhance success, confidence, and life opportunities.',

            // ── Zodiac Cards ──
            zodiac_1_h: 'ARIES', zodiac_1_d: 'MAR 21 - APR 19',
            zodiac_2_h: 'TAURUS', zodiac_2_d: 'APR 20 - MAY 20',
            zodiac_3_h: 'GEMINI', zodiac_3_d: 'MAY 21 - JUN 20',
            zodiac_4_h: 'CANCER', zodiac_4_d: 'JUN 21 - JUL 22',
            zodiac_5_h: 'LEO', zodiac_5_d: 'JUL 23 - AUG 22',
            zodiac_6_h: 'VIRGO', zodiac_6_d: 'AUG 23 - SEP 22',
            zodiac_7_h: 'LIBRA', zodiac_7_d: 'SEP 23 - OCT 22',
            zodiac_8_h: 'SCORPIO', zodiac_8_d: 'OCT 23 - NOV 21',
            zodiac_9_h: 'SAGITTARIUS', zodiac_9_d: 'NOV 22 - DEC 21',
            zodiac_10_h: 'CAPRICORN', zodiac_10_d: 'DEC 22 - JAN 19',
            zodiac_11_h: 'AQUARIUS', zodiac_11_d: 'JAN 20 - FEB 18',
            zodiac_12_h: 'PISCES', zodiac_12_d: 'FEB 19 - MAR 20',

            // ── contact-us.html ──
            contact_h1:     'Connect with the Cosmos',
            contact_sub:    'Whether seeking guidance through the stars or inquiring about our sacred rituals, our curators are ready to bridge the gap.',
            contact_email_lbl:   'Email us',
            contact_phone_lbl:   'Phone Number',
            contact_addr_lbl:    'Address',
            feat_live_h:    'Live Guidance',
            feat_live_p:    'Instant chat with our celestial associates for urgent bookings.',
            feat_kb_h:      'Knowledge Base',
            feat_kb_p:      'Explore our archived wisdom on zodiac movements and rituals.',
            feat_sec_h:     'Secure Consultation',
            feat_sec_p:     'All spiritual sessions are conducted under strict cosmic privacy.',
            testi_sub:      'THE SEEKERS\' CHRONICLE',
            testi_h2:       'Echoes from the Seekers',
            testi_verify:   'VERIFIED CLIENT',
            testi_1_p:      '"It was worth consulting to him. I asked about my career and he guided me politely."',
            testi_1_name:   'Srabanee Panda', testi_1_av: 'SP',
            testi_2_p:      '"He guided me regarding my education and career, such a nice person."',
            testi_2_name:   'Praveen Das', testi_2_av: 'PD',
            testi_3_p:      '"There were so many issues in my marital life and I consulted with him , he guided me to solve the issues."',
            testi_3_name:   'Lipsa Sahu', testi_3_av: 'LS',
            testi_4_p:      '"I spoke to him about my marriage and he predicted it perfectly—I am getting married next month! He also correctly predicted the World Cup finals on his channel."',
            testi_4_name:   'Ritesh Prasad', testi_4_av: 'RP',
            testi_5_p:      '"I’m truly grateful for the amazing guidance. The astrological insights were incredibly accurate and practical. After following his suggestions, I have noticed profound positive changes in my life. Highly recommended!"',
            testi_5_name:   'Binaya Biswal', testi_5_av: 'BB',
            testi_quote:    '"In the silent resonance of the cosmos, every soul finds its frequency. These are the narratives of those who looked toward the stars and found their way back home."',

            // ── book-consultation.html ──
            bc_h1:          'Divine Guidance & Sacred Rituals',
            bc_sub:         'Seek clarity - Invite blessings - Walk your dharmic path',
            bc_choose_h:    'CHOOSE YOUR READING',
            bc_choose_p:    'An energy exchange for cosmic clarity — select the session that resonates with you',
            bc_badge:       '✨ BOOK CONSULTATION',
            bc_premium_ribbon: 'PREMIUM',
            bc_basic_h:     'BASIC',
            bc_basic_time:  '15 - 20 minutes',
            bc_prem_h:      'PREMIUM',
            bc_prem_time:   '30 - 45 minutes',
            bc_price_label: 'Energy Exchange',
            bc_basic_price: '2,100',
            bc_prem_price:  '5,100',
            bc_details_h:   'DETAILS REQUIRED',
            bc_detail_1:    'Name',
            bc_detail_2:    'Date of Birth',
            bc_detail_3:    'Time of Birth',
            bc_detail_4:    'Place of Birth',
            bc_areas_h:     'CONSULTATION AREAS',
            area_career:    'Career',
            area_prof:      'Profession',
            area_biz:       'Business',
            area_marriage:  'Marriage',
            area_marital:   'Marital Life',
            area_children:  'Children',
            bc_btn:         'Message Us Now',

            // ── book-puja.html ──
            bp_badge:       '✨ BOOK PUJA',
            bp_h1:          'SACRED PUJA & CHADHAWA',
            bp_sub:         'Provide your Name & Gotra · Choose your Puja or Chadhawa · Receive divine blessings',
            bp_item_1_h:    'LORD MAHADEV',
            bp_item_1_p:    'Offer Milk & Belpata',
            bp_item_2_h:    'HANUMAN JI',
            bp_item_2_p:    'Offer Sindoor',
            bp_item_3_h:    'MATA LAXMI',
            bp_item_3_p:    'Offer Ghee, Banana & Lotus',
            bp_item_4_h:    'GANAPATI',
            bp_item_4_p:    'Offer Ladoo',
            bp_item_5_h:    'SHRI JAGANNATH',
            bp_item_5_p:    'Offer Tulsi & Coconut',
            bp_call_label:  'FOR PUJA / CHADHAWA BOOKINGS — CALL DIRECTLY',
            // ── Shlokas ──
            shloka_1_v: 'ॐ सर्वे भवन्तु सुखिनः। सर्वे सन्तु निरामयाः। सर्वे भद्राणि पश्यन्तु। मा कश्चिद् दुःखभाग्भवेत्॥', 
            shloka_1_m: 'May all be happy, may all be free from illness, may all see auspiciousness, and may no one suffer.',
            shloka_2_v: 'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥', 
            shloka_2_m: 'You have the right to perform your duty, but not to the fruits of your actions.',
            shloka_3_v: 'गुरुर्ब्रह्मा गुरुर्विष्णुः गुरुर्देवो महेश्वरः। गुरुः साक्षात् परं ब्रह्म तस्मै श्रीगुरवे नमः॥', 
            shloka_3_m: 'The Guru is Brahma, Vishnu, and Shiva; I bow to that divine Guru.',
            shloka_4_v: 'ॐ भूर्भुवः स्वः। तत्सवितुर्वरेण्यं। भर्गो देवस्य धीमहि। धियो यो नः प्रचोदयात्॥', 
            shloka_4_m: 'We meditate upon the divine light that inspires and guides our intellect.',
            shloka_5_v: 'ॐ असतो मा सद्गमय। तमसो मा ज्योतिर्गमय। मृत्योर्मा अमृतं गमय॥', 
            shloka_5_m: 'Lead me from untruth to truth, from darkness to light, from death to immortality.',
        },

        hi: {
            // ── Shared Nav ──
            nav_home:       'होम',
            nav_contact:    'संपर्क',
            nav_book:       'बुक करें',
            nav_consult_lnk: 'परामर्श',
            nav_puja:       'पूजा / चढ़ावा',
            nav_consult:    'अभी परामर्श करें',

            // ── Shared Footer ──
            footer_brand_p: 'पृथ्वी पर आपके पथ को आलोकित करने के लिए सितारों के अनंत ज्ञान का उपयोग करना।',
            footer_wa:      'व्हाट्सएप करें',
            footer_nav_h:   'नेविगेशन',
            footer_nav_home:'होम',
            footer_nav_cu:  'संपर्क करें',
            footer_nav_bc:  'परामर्श बुक करें',
            footer_nav_bp:  'पूजा/चढ़ावा बुक करें',
            footer_sup_h:   'सहायता',
            footer_privacy: 'गोपनीयता नीति',

            footer_refund:  'वापसी नीति',
            footer_touch_h: 'संपर्क में रहें',
            footer_bottom:  '© 2026 एस्ट्रोवज्ञान।',
            footer_made_by: '❤️ के साथ निर्मित',

            // ── index.html ──
            subtitle:       'प्राचीन कलाओं की नई कल्पना',
            hero_h1:        'एस्ट्रोवज्ञान: विशेषज्ञ वैदिक ज्योतिष, अंकज्योतिष और वास्तु परामर्श सेवाएं',
            hero_p:         'हम सटीक भविष्यवाणी के लिए वैदिक ज्योतिष, के.पी. ज्योतिष, बीएनएन, लालकिताब का उपयोग करते हैं।',
            cta_journey:    'अपनी यात्रा शुरू करें',
            cta_explore:    'प्रक्रियाएं जानें',
            about_founder_h: 'स्मृति रंजन चौधरी',
            about_founder_p1: 'ओडिशा के सर्वश्रेष्ठ ज्योतिषियों में से एक, एस्ट्रोवान (ASTROVGYAN) के संस्थापक।',
            about_founder_p2: 'वह एक शिक्षक, ज्योतिषी और एक सामाजिक कार्यकर्ता भी हैं।',
            about_founder_p3: 'वह छात्रों की शिक्षा, व्यवसाय, पेशे से संबंधित मुद्दों, विवाह संबंधी मुद्दों, पारिवारिक विवादों आदि समस्याओं को सुलझाने में विशेषज्ञ हैं।',
            about_founder_p4: 'इसके अलावा वह नए बच्चे का नाम रखने, नया व्यवसाय का नाम रखने और छात्रों के लिए उनकी जन्मतिथि के अनुसार सही पेशे का चुनाव करने में मदद करते हैं।',
            about_founder_p5: 'वह वैदिक ज्योतिष, के.पी. ज्योतिष, लाल किताब, बीएनएन ज्योतिष, अंकशास्त्र और वास्तु के अभ्यासी हैं।',
            about_founder_p6: 'आज तक हजारों ग्राहकों ने ऑनलाइन/ऑफलाइन परामर्श लिया है और हर कोई परामर्श से संतुष्ट है।',
            insights_h2:    'खगोलीय अंतर्दृष्टि',
            insights_p:     'हमारी विशेषज्ञता आपके जीवन के समग्र दृष्टिकोण प्रदान करने के लिए कई विधाओं में फैली हुई है।',
            explore_h2:     'अपनी राशि जानें',

            // ── Insight Cards ──
            insight_1_h: '1. विवाह',  insight_1_p: 'अपनी वैवाहिक संभावनाओं, संगतता और समय के बारे में गहरी जानकारी प्राप्त करें। अपने रिश्तों और भविष्य की साझेदारी को आकार देने वाले ग्रहों के प्रभावों की खोज करें।',
            insight_2_h: '2. व्यापार',  insight_2_p: 'अपने व्यावसायिक उपक्रमों के लिए सही समय और दिशा जानें। विकास, स्थिरता और वित्तीय सफलता सुनिश्चित करने के लिए ग्रहों की शक्तियों का विश्लेषण करें।',
            insight_3_h: '3. संपत्ति विवाद', insight_3_p: 'ज्योतिषीय मार्गदर्शन के साथ संपत्ति से संबंधित संघर्षों को हल करें। स्पष्टता और समाधान प्राप्त करने के लिए अनुकूल परिणामों और समयसीमा की पहचान करें।',
            insight_4_h: '4. वास्तु शास्त्र', insight_4_p: 'वास्तु सिद्धांतों का उपयोग करके अपने घर या कार्यस्थल को ब्रह्मांडीय ऊर्जाओं के साथ संरेखित करें। सकारात्मकता, समृद्धि और समग्र कल्याण को बढ़ाएं।',
            insight_5_h: '5. कुंडली दोष', insight_5_p: 'अपनी जन्म कुंडली में दोषों को पहचानें और समझें। उनके प्रभावों को कम करने और जीवन में संतुलन बहाल करने के लिए सटीक उपाय प्राप्त करें।',
            insight_6_h: '6. शिक्षा', insight_6_p: 'अपनी शैक्षणिक शक्तियों और आदर्श करियर पथों की खोज करें। पढ़ाई और उच्च शिक्षा में सफलता पर मार्गदर्शन प्राप्त करें।',
            insight_7_h: '7. हस्तरेखा', insight_7_p: 'अपनी हथेली की रेखाओं में छिपे रहस्यों को डिकोड करें। अपने व्यक्तित्व, जीवन पथ और भविष्य के अवसरों को समझें।',
            insight_8_h: '8. उपाय सुझाव', insight_8_p: 'अपनी ग्रहों की स्थिति के आधार पर व्यक्तिगत और प्रभावी उपाय प्राप्त करें। व्यावहारिक आध्यात्मिक समाधानों के साथ जीवन की स्थितियों में सुधार करें।',
            insight_9_h: '9. अंकज्योतिष', insight_9_p: 'अपने भाग्य को आकार देने में संख्याओं की शक्ति का अन्वेषण करें। सफलता के लिए अपने नाम और जन्म तिथि को सार्वभौमिक स्पंदनों के साथ संरेखित करें।',
            insight_10_h: '10. तलाक की समस्या', insight_10_p: 'चुनौतीपूर्ण संबंध चरणों के दौरान स्पष्टता और मार्गदर्शन प्राप्त करें। परिणामों को समझें और आगे बढ़ने का सही रास्ता खोजें।',
            insight_11_h: '11. करियर और नौकरी', insight_11_p: 'अपने करियर के विकास, नौकरी में बदलाव और अवसरों का विश्लेषण करें। सफलता और व्यावसायिक स्थिरता के लिए सही समय की पहचान करें।',
            insight_12_h: '12. व्यवसाय', insight_12_p: 'अपनी कुंडली के आधार पर सबसे उपयुक्त पेशे का चयन करें। दीर्घकालिक सफलता के लिए अपने कौशल और ग्रहों की शक्तियों को संरेखित करें।',
            insight_13_h: '13. व्यापार का नाम', insight_13_p: 'अपने व्यवसाय के लिए एक शक्तिशाली और भाग्यशाली नाम खोजें। विकास और मान्यता के लिए अंकज्योतिष और ज्योतिष के साथ संरेखण सुनिश्चित करें।',
            insight_14_h: '14. बच्चे का नाम', insight_14_p: 'अपने नवजात शिशु के लिए अर्थपूर्ण और शुभ नाम प्राप्त करें। जन्म कुंडली और सकारात्मक जीवन स्पंदनों के साथ सामंजस्य सुनिश्चित करें।',
            insight_15_h: '15. मोबाइल नंबर', insight_15_p: 'अपनी जीवन ऊर्जा पर अपने मोबाइल नंबर के प्रभाव की जांच करें। बेहतर भाग्य और संचार प्रवाह के लिए इसे अंकज्योतिष के साथ संरेखित करें।',
            insight_16_h: '16. नाम सुधार', insight_16_p: 'अनुकूल अंक ज्योतिषीय स्पंदनों से मेल खाने के लिए अपने नाम को परिष्कृत करें। सफलता, आत्मविश्वास और जीवन के अवसरों को बढ़ाएं।',

            // ── Zodiac Cards ──
            zodiac_1_h: 'मेष', zodiac_1_d: 'मार्च 21 - अप्रैल 19',
            zodiac_2_h: 'वृषभ', zodiac_2_d: 'अप्रैल 20 - मई 20',
            zodiac_3_h: 'मिथुन', zodiac_3_d: 'मई 21 - जून 20',
            zodiac_4_h: 'कर्क', zodiac_4_d: 'जून 21 - जुलाई 22',
            zodiac_5_h: 'सिंह', zodiac_5_d: 'जुलाई 23 - अगस्त 22',
            zodiac_6_h: 'कन्या', zodiac_6_d: 'अगस्त 23 - सितंबर 22',
            zodiac_7_h: 'तुला', zodiac_7_d: 'सितंबर 23 - अक्टूबर 22',
            zodiac_8_h: 'वृश्चिक', zodiac_8_d: 'अक्टूबर 23 - नवंबर 21',
            zodiac_9_h: 'धनु', zodiac_9_d: 'नवंबर 22 - दिसंबर 21',
            zodiac_10_h: 'मकर', zodiac_10_d: 'दिसंबर 22 - जनवरी 19',
            zodiac_11_h: 'कुंभ', zodiac_11_d: 'जनवरी 20 - फरवरी 18',
            zodiac_12_h: 'मीन', zodiac_12_d: 'फरवरी 19 - मार्च 20',

            // ── contact-us.html ──
            contact_h1:     'ब्रह्मांड से जुड़ें',
            contact_sub:    'मार्गदर्शन या अनुष्ठानों के बारे में जानकारी लेने के लिए तैयार रहें।',
            contact_email_lbl:   'हमें ईमेल करें',
            contact_phone_lbl:   'फोन नंबर',
            contact_addr_lbl:    'पता',
            feat_live_h:    'लाइव मार्गदर्शन',
            feat_live_p:    'बुकिंग के लिए हमारे विशेषज्ञों से बात करें।',
            feat_kb_h:      'ज्ञान भंडार',
            feat_kb_p:      'राशि चक्र और अनुष्ठानों पर हमारे ज्ञान को देखें।',
            feat_sec_h:     'सुरक्षित परामर्श',
            feat_sec_p:     'सभी सत्र कड़ी गोपनीयता के साथ आयोजित किए जाते हैं।',
            testi_sub:      'साधकों का वृत्तांत',
            testi_h2:       'साधकों की आवाज़',
            testi_verify:   'सत्यापित ग्राहक',
            testi_1_p:      '"उनसे परामर्श करना सार्थक रहा। मैंने अपने करियर के बारे में पूछा और उन्होंने मुझे बहुत विनम्रता से निर्देशित किया।"',
            testi_1_name:   'श्रबनी पांडा', testi_1_av: 'SP',
            testi_2_p:      '"उन्होंने मेरी शिक्षा और करियर के संबंध में मेरा मार्गदर्शन किया, वे बहुत अच्छे व्यक्ति हैं।"',
            testi_2_name:   'प्रवीण दास', testi_2_av: 'PD',
            testi_3_p:      '"मेरे वैवाहिक जीवन में बहुत सी समस्याएं थीं और मैंने उनसे परामर्श किया, उन्होंने मुझे समस्याओं को हल करने के लिए निर्देशित किया।"',
            testi_3_name:   'लिपसा साहू', testi_3_av: 'LS',
            testi_4_p:      '"मैंने उनसे अपनी शादी के बारे में बात की और उन्होंने इसकी सटीक भविष्यवाणी की—मेरी अगले महीने शादी हो रही है! उन्होंने अपने चैनल पर विश्व कप फाइनल की भी सही भविष्यवाणी की थी।"',
            testi_4_name:   'रितेश प्रसाद', testi_4_av: 'RP',
            testi_5_p:      '"मैं इस अद्भुत मार्गदर्शन के लिए वास्तव में आभारी हूं। ज्योतिषीय अंतर्दृष्टि अविश्वसनीय रूप से सटीक और व्यावहारिक थी। उनके सुझावों का पालन करने के बाद, मैंने अपने जीवन में गहरा सकारात्मक बदलाव देखा है। अत्यधिक अनुशंसित!"',
            testi_5_name:   'बिनय बिस्वाल', testi_5_av: 'BB',
            testi_quote:    '"ब्रह्मांड की मौन प्रतिध्वनि में, प्रत्येक आत्मा अपनी आवृत्ति पाती है। ये उनकी कथाएं हैं जिन्होंने सितारों की ओर देखा और अपने घर वापसी का मार्ग पाया।"',

            // ── book-consultation.html ──
            bc_h1:          'दैवीय मार्गदर्शन एवं पवित्र अनुष्ठान',
            bc_sub:         'स्पष्टता खोजें - आशीर्वाद आमंत्रित करें - अपने धर्म पथ पर चलें',
            bc_choose_h:    'अपना रीडिंग चुनें',
            bc_choose_p:    'ब्रह्मांडीय स्पष्टता के लिए एक ऊर्जा विनिमय — वह सत्र चुनें जो आपके साथ प्रतिध्वनित हो',
            bc_badge:       '✨ परामर्श बुक करें',
            bc_premium_ribbon: 'प्रीमियम',
            bc_basic_h:     'बुनियादी (BASIC)',
            bc_basic_time:  '15 - 20 मिनट',
            bc_prem_h:      'प्रीमियम (PREMIUM)',
            bc_prem_time:   '30 - 45 मिनट',
            bc_price_label: 'ऊर्जा विनिमय',
            bc_basic_price: '2,100',
            bc_prem_price:  '5,100',
            bc_details_h:   'आवश्यक विवरण',
            bc_detail_1:    'नाम',
            bc_detail_2:    'जन्म तिथि',
            bc_detail_3:    'जन्म का समय',
            bc_detail_4:    'जन्म का स्थान',
            bc_areas_h:     'परामर्श क्षेत्र',
            area_career:    'करियर',
            area_prof:      'पेशा',
            area_biz:       'व्यवसाय',
            area_marriage:  'विवाह',
            area_marital:   'वैवाहिक जीवन',
            area_children:  'बच्चे',
            bc_btn:         'हमें अभी संदेश भेजें',

            // ── book-puja.html ──
            bp_badge:       '✨ पूजा बुक करें',
            bp_h1:          'पवित्र पूजा और चढ़ावा',
            bp_sub:         'अपना नाम और गोत्र प्रदान करें · अपनी पूजा या चढ़ावा चुनें · दैवीय आशीर्वाद प्राप्त करें',
            bp_item_1_h:    'भगवान महादेव',
            bp_item_1_p:    'दूध और बेलपत्र अर्पित करें',
            bp_item_2_h:    'हनुमान जी',
            bp_item_2_p:    'सिंदूर अर्पित करें',
            bp_item_3_h:    'माता लक्ष्मी',
            bp_item_3_p:    'घी, केला और कमल अर्पित करें',
            bp_item_4_h:    'गणपति',
            bp_item_4_p:    'लड्डू अर्पित करें',
            bp_item_5_h:    'श्री जगन्नाथ',
            bp_item_5_p:    'तुलसी और नारियल अर्पित करें',
            bp_call_label:  'पूजा / चढ़ावा बुकिंग के लिए — सीधे कॉल करें',
            // ── Shlokas ──
            shloka_1_v: 'ॐ सर्वे भवन्तु सुखिनः। सर्वे सन्तु निरामयाः। सर्वे भद्राणि पश्यन्तु। मा कश्चिद् दुःखभाग्भवेत्॥', 
            shloka_1_m: 'सभी सुखी हों, सभी निरोग रहें, सभी शुभ देखें और कोई भी दुखी न हो।',
            shloka_2_v: 'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥', 
            shloka_2_m: 'तुझे केवल कर्म करने का अधिकार है, फल पर नहीं।',
            shloka_3_v: 'गुरुर्ब्रह्मा गुरुर्विष्णुः गुरुर्देवो महेश्वरः। गुरुः साक्षात् परं ब्रह्म तस्मै श्रीगुरवे नमः॥', 
            shloka_3_m: 'गुरु ही ब्रह्मा, विष्णु और महेश हैं; उन्हें नमन है।',
            shloka_4_v: 'ॐ भूर्भुवः स्वः। तत्सवितुर्वरेण्यं। भर्गो देवस्य धीमहि। धियो यो नः प्रचोदयात्॥', 
            shloka_4_m: 'हम उस परम प्रकाशमान ईश्वर का ध्यान करते हैं, जो हमारी बुद्धि को प्रेरित करे।',
            shloka_5_v: 'ॐ असतो मा सद्गमय। तमसो मा ज्योतिर्गमय। मृत्योर्मा अमृतं गमय॥', 
            shloka_5_m: 'असत्य से सत्य की ओर, अंधकार से प्रकाश की ओर, मृत्यु से अमरता की ओर ले चल।',
        },

        od: {
            // ── Shared Nav ──
            nav_home:       'ହୋମ',
            nav_contact:    'ଯୋଗାଯୋଗ',
            nav_book:       'ବୁକ୍ କରନ୍ତୁ',
            nav_consult_lnk: 'ପରାମର୍ଶ',
            nav_puja:       'ପୂଜା / ଚଢ଼ାଵ',
            nav_consult:    'ପରାମର୍ଶ ନିଅନ୍ତୁ',

            // ── Shared Footer ──
            footer_brand_p: 'ପୃଥିବୀରେ ଆପଣଙ୍କ ପଥକୁ ଆଲୋକିତ କରିବା ପାଇଁ ତାରାମାନଙ୍କ ଅସୀମ ଜ୍ଞାନର ଉପଯୋଗ।',
            footer_wa:      'ହ୍ୱାଟ୍ସଆପ କରନ୍ତୁ',
            footer_nav_h:   'ଉନ୍ନୟନ',
            footer_nav_home:'ହୋମ',
            footer_nav_cu:  'ଯୋଗାଯୋଗ',
            footer_nav_bc:  'ପରାମର୍ଶ ବୁକ',
            footer_nav_bp:  'ପୂଜା/ଚଢ଼ାଵ ବୁକ',
            footer_sup_h:   'ସହାୟତା',
            footer_privacy: 'ଗୋପନୀୟତା ନୀତି',

            footer_refund:  'ଫେରସ୍ତ ନୀତି',
            footer_touch_h: 'ସମ୍ପର୍କରେ ରୁହନ୍ତୁ',
            footer_bottom:  '© 2026 ଏଷ୍ଟ୍ରୋଭଜ୍ଞାନ।',
            footer_made_by: '❤️ ସହିତ ନିର୍ମିତ',

            // ── index.html ──
            subtitle:       'ପ୍ରାଚୀନ କଳାର ଅଭିନବ ରୂପ',
            hero_h1:        'ଏଷ୍ଟ୍ରୋଭଜ୍ଞାନ: ବିଶେଷଜ୍ଞ ବୈଦିକ ଜ୍ୟୋତିଷ, ଅଙ୍କ ଜ୍ୟୋତିଷ ଓ ବାସ୍ତୁ ପରାମର୍ଶ ସେବା',
            hero_p:         'ଆମେ ସଠିକ ଭବିଷ୍ୟବାଣୀ ପାଇଁ ବୈଦିକ ଜ୍ୟୋତିଷ, କେ.ପି. ଜ୍ୟୋତିଷ, ବି.ଏନ.ଏନ, ଲାଲକିତାବ ବ୍ୟବହାର କରୁ।',
            cta_journey:    'ଯାତ୍ରା ଆରମ୍ଭ କରନ୍ତୁ',
            cta_explore:    'ପ୍ରକ୍ରିୟା ଜାଣନ୍ତୁ',
            about_founder_h: 'ସ୍ମୃତି ରଞ୍ଜନ ଚୌଧୁରୀ',
            about_founder_p1: 'ଓଡ଼ିଶାର ଜଣେ ପ୍ରତିଷ୍ଠିତ ଜ୍ୟୋତିଷ, ASTROVGYAN ର ପ୍ରତିଷ୍ଠାତା।',
            about_founder_p2: 'ସେ ଜଣେ ଶିକ୍ଷକ, ଜ୍ୟୋତିଷ ଏବଂ ଜଣେ ସମାଜସେବୀ ମଧ୍ୟ।',
            about_founder_p3: 'ସେ ଛାତ୍ରମାନଙ୍କ ଶିକ୍ଷା, ବ୍ୟବସାୟ, ବୃତ୍ତିଗତ ସମସ୍ୟା, ବିବାହ ସମ୍ବନ୍ଧୀୟ ସମସ୍ୟା, ପାରିବାରିକ ବିବାଦ ଇତ୍ୟାଦି ସମାଧାନ କରିବାରେ ଜଣେ ବିଶେଷଜ୍ଞ।',
            about_founder_p4: 'ଏହା ସହିତ ସେ ନୂତନ ଶିଶୁର ନାମକରଣ, ନୂତନ ବ୍ୟବସାୟର ନାମକରଣ ଏବଂ ଛାତ୍ରମାନଙ୍କ ପାଇଁ ସେମାନଙ୍କ ଜନ୍ମ ତାରିଖ ଅନୁଯାୟୀ ସଠିକ ବୃତ୍ତି ଚୟନ କରିବାରେ ସାହାଯ୍ୟ କରନ୍ତି।',
            about_founder_p5: 'ସେ ବୈଦିକ ଜ୍ୟୋତିଷ, କେ.ପି. ଜ୍ୟୋତିଷ, ଲାଲ କିତାବ, ବି.ଏନ.ଏନ ଜ୍ୟୋତିଷ, ସଂଖ୍ୟା ଜ୍ୟୋତିଷ ଏବଂ ବାସ୍ତୁର ଜଣେ ଅଭ୍ୟାସକାରୀ।',
            about_founder_p6: 'ଆଜି ପର୍ଯ୍ୟନ୍ତ ହଜାର ହଜାର ଗ୍ରାହକ ଅନଲାଇନ୍/ଅଫଲାଇନ୍ ମାଧ୍ୟମରେ ପରାମର୍ଶ କରିଛନ୍ତି ଏବଂ ପ୍ରତ୍ୟେକ ବ୍ୟକ୍ତି ପରାମର୍ଶରେ ସନ୍ତୁଷ୍ଟ ଅଛନ୍ତି।',
            insights_h2:    'ଖଗୋଳ ପରାମର୍ଶ',
            insights_p:     'ଆମର ବିଶେଷଜ୍ଞତା ଆପଣଙ୍କ ଜୀବନର ସମଗ୍ର ଦୃଷ୍ଟିଭଙ୍ଗୀ ପାଇଁ ଅନେକ ବିଭାଗରେ ରହିଛି।',
            explore_h2:     'ନିଜ ରାଶି ଜାଣନ୍ତୁ',

            // ── Insight Cards ──
            insight_1_h: '1. ବିବାହ',  insight_1_p: 'ଆପଣଙ୍କ ବିବାହ ସମ୍ଭାବନା, ସୁସମ୍ପର୍କ ଏବଂ ସମୟ ବିଷୟରେ ଗଭୀର ଜ୍ଞାନ ପ୍ରାପ୍ତ କରନ୍ତୁ। ଆପଣଙ୍କ ସମ୍ପର୍କ ଏବଂ ଭବିଷ୍ୟତର ଭାଗିଦାରୀକୁ ପ୍ରଭାବିତ କରୁଥିବା ଗ୍ରହମାନଙ୍କ ବିଷୟରେ ଜାଣନ୍ତୁ।',
            insight_2_h: '2. ବ୍ୟବସାୟ',  insight_2_p: 'ଆପଣଙ୍କ ବ୍ୟବସାୟିକ ପ୍ରୟାସ ପାଇଁ ସଠିକ ସମୟ ଏବଂ ଦିଗ ଜାଣନ୍ତୁ। ଅଭିବୃଦ୍ଧି, ସ୍ଥିରତା ଏବଂ ଆର୍ଥିକ ସଫଳତା ନିଶ୍ଚିତ କରିବାକୁ ଗ୍ରହମାନଙ୍କ ଶକ୍ତି ବିଶ୍ଳେଷଣ କରନ୍ତୁ।',
            insight_3_h: '3. ସମ୍ପତ୍ତି ବିବାଦ', insight_3_p: 'ଜ୍ୟୋତିଷ ଶାସ୍ତ୍ର ମାର୍ଗଦର୍ଶନ ସହିତ ସମ୍ପତ୍ତି ସମ୍ବନ୍ଧୀୟ ବିବାଦର ସମାଧାନ କରନ୍ତୁ। ସ୍ପଷ୍ଟତା ଏବଂ ସମାଧାନ ପାଇଁ ଅନୁକୂଳ ଫଳାଫଳ ଏବଂ ସମୟସୀମା ଚିହ୍ନଟ କରନ୍ତୁ।',
            insight_4_h: '4. ବାସ୍ତୁ ଶାସ୍ତ୍ର', insight_4_p: 'ବାସ୍ତୁ ନୀତି ପ୍ରୟୋଗ କରି ନିଜ ଘର କିମ୍ବା କାର୍ଯ୍ୟକ୍ଷେତ୍ରକୁ ବ୍ରହ୍ମାଣ୍ଡ ଶକ୍ତି ସହିତ ସଂଯୋଗ କରନ୍ତୁ। ସକାରାତ୍ମକତା, ସମୃଦ୍ଧି ଏବଂ ସାମଗ୍ରିକ କଲ୍ୟାଣ ବୃଦ୍ଧି କରନ୍ତୁ।',
            insight_5_h: '5. କୁଣ୍ଡଳୀ ଦୋଷ', insight_5_p: 'ଆପଣଙ୍କ ଜନ୍ମ କୁଣ୍ଡଳୀରେ ଥିବା ଦୋଷଗୁଡ଼ିକୁ ଚିହ୍ନଟ କରନ୍ତୁ ଏବଂ ବୁଝନ୍ତୁ। ସେଗୁଡ଼ିକର ପ୍ରଭାବ ହ୍ରାସ କରିବା ଏବଂ ଜୀବନରେ ସନ୍ତୁଳନ ଫେରାଇ ଆଣିବା ପାଇଁ ସଠିକ ପ୍ରତିକାର ପାଆନ୍ତୁ।',
            insight_6_h: '6. ଶିକ୍ଷା', insight_6_p: 'ଆପଣଙ୍କ ଏକାଡେମିକ ଶକ୍ତି ଏବଂ ଆଦର୍ଶ କ୍ୟାରିୟର ପଥ ଆବିଷ୍କାର କରନ୍ତୁ। ପାଠପଢ଼ା ଏବଂ ଉଚ୍ଚଶିକ୍ଷାରେ ସଫଳତା ପାଇଁ ମାର୍ଗଦର୍ଶନ ପାଆନ୍ତୁ।',
            insight_7_h: '7. ହସ୍ତରେଖା', insight_7_p: 'ଆପଣଙ୍କ ହାତ ପାପୁଲିର ରେଖାରେ ଲୁଚି ରହିଥିବା ରହସ୍ୟକୁ ଜାଣନ୍ତୁ। ଆପଣଙ୍କ ବ୍ୟକ୍ତିତ୍ୱ, ଜୀବନ ପଥ ଏବଂ ଭବିଷ୍ୟତର ସୁଯୋଗ ବୁଝନ୍ତୁ।',
            insight_8_h: '8. ପ୍ରତିକାର ପରାମର୍ଶ', insight_8_p: 'ଆପଣଙ୍କ ଗ୍ରହ ସ୍ଥିତି ଉପରେ ଆଧାର କରି ବ୍ୟକ୍ତିଗତ ଏବଂ ପ୍ରଭାବଶାଳୀ ପ୍ରତିକାର ଗ୍ରହଣ କରନ୍ତୁ। ବ୍ୟାବହାରିକ ଆଧ୍ୟାତ୍ମିକ ସମାଧାନ ସହିତ ଜୀବନର ପରିସ୍ଥିତିରେ ଉନ୍ନତି ଆଣନ୍ତୁ।',
            insight_9_h: '9. ସଂଖ୍ୟାତତ୍ତ୍ୱ', insight_9_p: 'ନିଜ ଭାଗ୍ୟ ଗଠନରେ ସଂଖ୍ୟାର ଶକ୍ତିକୁ ଅନୁସନ୍ଧାନ କରନ୍ତୁ। ସଫଳତା ପାଇଁ ନିଜ ନାମ ଏବଂ ଜନ୍ମ ତାରିଖକୁ ବ୍ରହ୍ମାଣ୍ଡ ସ୍ପନ୍ଦନ ସହିତ ସଂଯୋଗ କରନ୍ତୁ।',
            insight_10_h: '10. ଛାଡ଼ପତ୍ର ସମସ୍ୟା', insight_10_p: 'ଚ୍ୟାଲେଞ୍ଜିଂ ସମ୍ପର୍କ ସମୟରେ ସ୍ପଷ୍ଟତା ଏବଂ ମାର୍ଗଦର୍ଶନ ପାଆନ୍ତୁ। ଫଳାଫଳ ବୁଝନ୍ତୁ ଏବଂ ଆଗକୁ ବଢ଼ିବା ପାଇଁ ସଠିକ ବାଟ ଖୋଜନ୍ତୁ।',
            insight_11_h: '11. କ୍ୟାରିୟର ଓ ଚାକିରି', insight_11_p: 'ଆପଣଙ୍କ କ୍ୟାରିୟର ଅଭିବୃଦ୍ଧି, ଚାକିରି ପରିବର୍ତ୍ତନ ଏବଂ ସୁଯୋଗଗୁଡ଼ିକର ବିଶ୍ଳେଷଣ କରନ୍ତୁ। ସଫଳତା ଏବଂ ବୃତ୍ତିଗତ ସ୍ଥିରତା ପାଇଁ ସଠିକ ସମୟ ଚିହ୍ନଟ କରନ୍ତୁ।',
            insight_12_h: '12. ବୃତ୍ତି', insight_12_p: 'ନିଜ ଜାତକ ଉପରେ ଆଧାର କରି ସବୁଠାରୁ ଉପଯୁକ୍ତ ବୃତ୍ତି ବାଛନ୍ତୁ। ଦୀର୍ଘକାଳୀନ ସଫଳତା ପାଇଁ ନିଜ ଦକ୍ଷତା ଏବଂ ଗ୍ରହମାନଙ୍କ ଶକ୍ତିକୁ ସଂଯୋଗ କରନ୍ତୁ।',
            insight_13_h: '13. ବ୍ୟବସାୟର ନାମ', insight_13_p: 'ଆପଣଙ୍କ ବ୍ୟବସାୟ ପାଇଁ ଏକ ଶକ୍ତିଶାଳୀ ଏବଂ ଭାଗ୍ୟଶାଳୀ ନାମ ଖୋଜନ୍ତୁ। ଅଭିବୃଦ୍ଧି ଏବଂ ସ୍ୱୀକୃତି ପାଇଁ ସଂଖ୍ୟାତତ୍ତ୍ୱ ଏବଂ ଜ୍ୟୋତିଷ ଶାସ୍ତ୍ର ସହିତ ସମନ୍ୱୟ ନିଶ୍ଚିତ କରନ୍ତୁ।',
            insight_14_h: '14. ନବଜାତ ଶିଶୁର ନାମ', insight_14_p: 'ନିଜ ନବଜାତ ଶିଶୁ ପାଇଁ ଅର୍ଥପୂର୍ଣ୍ଣ ଏବଂ ଶୁଭ ନାମ ପାଆନ୍ତୁ। ଜନ୍ମ କୁଣ୍ଡଳୀ ଏବଂ ସକାରାତ୍ମକ ଜୀବନ ସ୍ପନ୍ଦନ ସହିତ ସମନ୍ୱୟ ନିଶ୍ଚିତ କରନ୍ତୁ।',
            insight_15_h: '15. ମୋବାଇଲ୍ ନମ୍ବର ବିଶ୍ଳେଷଣ', insight_15_p: 'ନିଜ ଜୀବନ ଶକ୍ତି ଉପରେ ମୋବାଇଲ୍ ନମ୍ବରର ପ୍ରଭାବ ଯାଞ୍ଚ କରନ୍ତୁ। ଉନ୍ନତ ଭାଗ୍ୟ ଏବଂ ଯୋଗାଯୋଗ ପ୍ରବାହ ପାଇଁ ଏହାକୁ ସଂଖ୍ୟାତତ୍ତ୍ୱ ସହିତ ସଂଯୋଗ କରନ୍ତୁ।',
            insight_16_h: '16. ନାମ ସଂଶୋଧନ', insight_16_p: 'ଅନୁକୂଳ ସଂଖ୍ୟାତତ୍ତ୍ୱ ସ୍ପନ୍ଦନ ସହିତ ମେଳ ଖାଇବା ପାଇଁ ନିଜ ନାମକୁ ସଂଶୋଧନ କରନ୍ତୁ। ସଫଳତା, ଆତ୍ମବିଶ୍ୱାସ ଏବଂ ଜୀବନର ସୁଯୋଗ ବୃଦ୍ଧି କରନ୍ତୁ।',
            zodiac_1_h: 'ମେଷ', zodiac_1_d: 'ମାର୍ଚ୍ଚ 21 - ଏପ୍ରିଲ୍ 19',
            zodiac_2_h: 'ବୃଷ', zodiac_2_d: 'ଏପ୍ରିଲ୍ 20 - ମଇ 20',
            zodiac_3_h: 'ମିଥୁନ', zodiac_3_d: 'ମଇ 21 - ଜୁନ୍ 20',
            zodiac_4_h: 'କର୍କଟ', zodiac_4_d: 'ଜୁନ୍ 21 - ଜୁଲାଇ 22',
            zodiac_5_h: 'ସିଂହ', zodiac_5_d: 'ଜୁଲାଇ 23 - ଅଗଷ୍ଟ 22',
            zodiac_6_h: 'କନ୍ୟା', zodiac_6_d: 'ଅଗଷ୍ଟ 23 - ସେପ୍ଟେମ୍ବର 22',
            zodiac_7_h: 'ତୁଳା', zodiac_7_d: 'ସେପ୍ଟେମ୍ବର 23 - ଅକ୍ଟୋବର 22',
            zodiac_8_h: 'ବିଛା', zodiac_8_d: 'ଅକ୍ଟୋବର 23 - ନଭେମ୍ବର 21',
            zodiac_9_h: 'ଧନୁ', zodiac_9_d: 'ନଭେମ୍ବର 22 - ଡିସେମ୍ବର 21',
            zodiac_10_h: 'ମକର', zodiac_10_d: 'ଡିସେମ୍ବର 22 - ଜାନୁଆରୀ 19',
            zodiac_11_h: 'କୁମ୍ଭ', zodiac_11_d: 'ଜାନୁଆରୀ 20 - ଫେବୃଆରୀ 18',
            zodiac_12_h: 'ମୀନ', zodiac_12_d: 'ଫେବୃଆରୀ 19 - ମାର୍ଚ୍ଚ 20',
            // ── contact-us.html ──
            contact_h1:     'ବ୍ରହ୍ମାଣ୍ଡ ସହିତ ଯୋଡି ହୁଅନ୍ତୁ',
            contact_sub:    'ମାର୍ଗଦର୍ଶନ କିମ୍ବା ରୀତିନୀତି ବିଷୟରେ ଜାଣିବା ପାଇଁ ପ୍ରସ୍ତୁତ ରୁହନ୍ତୁ।',
            contact_email_lbl:   'ଇମେଲ କରନ୍ତୁ',
            contact_phone_lbl:   'ଫୋନ୍ ନମ୍ବର',
            contact_addr_lbl:    'ଠିକଣା',
            feat_live_h:    'ଲାଇଭ ମାର୍ଗଦର୍ଶନ',
            feat_live_p:    'ଜରୁରୀକାଳୀନ ବୁକିଂ ପାଇଁ ଆମର ବିଶେଷଜ୍ଞମାନଙ୍କ ସହିତ କଥା ହୁଅନ୍ତୁ।',
            feat_kb_h:      'ଜ୍ଞାନ ଭଣ୍ଡାର',
            feat_kb_p:      'ରାଶିଚକ୍ର ଏବଂ ରୀତିନୀତି ଉପରେ ଆମର ଜ୍ଞାନ ଦେଖନ୍ତୁ।',
            feat_sec_h:     'ସୁରକ୍ଷିତ ପରାମର୍ଶ',
            feat_sec_p:     'ସମସ୍ତ ପରାମର୍ଶ ଅତ୍ୟନ୍ତ ଗୋପନୀୟତା ସହିତ କରାଯାଏ।',
            testi_sub:      'ସାଧକଙ୍କ ବୃତ୍ତାନ୍ତ',
            testi_h2:       'ସାଧକଙ୍କ କଥା',
            testi_verify:   'ସତ୍ୟାପିତ ଗ୍ରାହକ',
            testi_1_p:      '"ତାଙ୍କ ସହିତ ପରାମର୍ଶ କରିବା ବହୁତ ଭଲ ଥିଲା। ମୁଁ ମୋର କ୍ୟାରିୟର ବିଷୟରେ ପଚାରିଥିଲି ଏବଂ ସେ ମୋତେ ବହୁତ ଭଲ ଭାବରେ ମାର୍ଗଦର୍ଶନ କରିଥିଲେ।"',
            testi_1_name:   'ଶ୍ରବଣୀ ପଣ୍ଡା', testi_1_av: 'SP',
            testi_2_p:      '"ସେ ମୋତେ ଶିକ୍ଷା ଏବଂ କ୍ୟାରିୟର ବିଷୟରେ ବହୁତ ଭଲ ମାର୍ଗଦର୍ଶନ ଦେଇଥିଲେ। ସେ ବହୁତ ଭଲ ବ୍ୟକ୍ତି। "',
            testi_2_name:   'ପ୍ରବୀଣ ଦାସ', testi_2_av: 'PD',
            testi_3_p:      '"ମୋର ବୈବାହିକ ଜୀବନରେ ବହୁତ ସମସ୍ୟା ଥିଲା ଏବଂ ମୁଁ ତାଙ୍କ ସହିତ ପରାମର୍ଶ କରିଥିଲି, ସେ ମୋତେ ସେହି ସବୁ ସମସ୍ୟାର ସମାଧାନ କରିବା ପାଇଁ ବାଟ ଦେଖାଇଲେ।"',
            testi_3_name:   'ଲିପ୍ସା ସାହୁ', testi_3_av: 'LS',
            testi_4_p:      '"ମୁଁ ତାଙ୍କ ସହିତ ମୋର ବିବାହ ବିଷୟରେ କଥା ହୋଇଥିଲି ଏବଂ ସେ ସମ୍ପୂର୍ଣ୍ଣ ସଠିକ ଭବିଷ୍ୟବାଣୀ କରିଥିଲେ—ଆସନ୍ତା ମାସରେ ମୋର ବିବାହ ହେଉଛି! ସେ ନିଜ ଚ୍ୟାନେଲରେ ବିଶ୍ୱକପ୍ ଫାଇନାଲ୍ ବିଷୟରେ ମଧ୍ୟ ସଠିକ ଭବିଷ୍ୟବାଣୀ କରିଥିଲେ।"',
            testi_4_name:   'ରିତେଶ ପ୍ରସାଦ', testi_4_av: 'RP',
            testi_5_p:      '"ମୁଁ ଏହି ଅଦ୍ଭୁତ ମାର୍ଗଦର୍ଶନ ପାଇଁ ବହୁତ କୃତଜ୍ଞ। ଜ୍ୟୋତିଷ ଶାସ୍ତ୍ରର ଏହି ତଥ୍ୟ ସମ୍ପୂର୍ଣ୍ଣ ସଠିକ ଏବଂ ପ୍ରାୟୋଗିକ ଥିଲା। ତାଙ୍କର ପରାମର୍ଶ ମାନିବା ପରେ ମୋ ଜୀବନରେ ବହୁତ ଭଲ ପରିବର୍ତ୍ତନ ଆସିଛି। ମୁଁ ନିଶ୍ଚିତ ଭାବରେ ତାଙ୍କ ପାଖକୁ ଯିବାକୁ ପରାମର୍ଶ ଦେବି!"',
            testi_5_name:   'ବିନୟ ବିଶ୍ୱାଳ', testi_5_av: 'BB',
            testi_quote:    '"ବ୍ରହ୍ମାଣ୍ଡର ମୌନ ପ୍ରତିଧ୍ୱନିରେ, ପ୍ରତ୍ୟେକ ଆତ୍ମା ନିଜର ସ୍ୱର ପାଇଥାଏ। ଏହା ସେମାନଙ୍କର କାହାଣୀ ଯେଉଁମାନେ ତାରାମାନଙ୍କୁ ଚାହିଁଥିଲେ ଏବଂ ନିଜ ଘରକୁ ଫେରିବାର ବାଟ ପାଇଥିଲେ।"',

            // ── book-consultation.html ──
            bc_h1:          'ଦୈବୀ ମାର୍ଗଦର୍ଶନ ଏବଂ ପବିତ୍ର ଅନୁଷ୍ଠାନ',
            bc_sub:         'ସ୍ପଷ୍ଟତା ଖୋଜନ୍ତୁ - ଆଶୀର୍ବାଦ ଆମନ୍ତ୍ରଣ କରନ୍ତୁ - ନିଜ ଧର୍ମ ପଥରେ ଚାଲନ୍ତୁ',
            bc_choose_h:    'ଆପଣଙ୍କର ରୀଡିଂ ବାଛନ୍ତୁ',
            bc_choose_p:    'ବ୍ରହ୍ମାଣ୍ଡ ସ୍ପଷ୍ଟତା ପାଇଁ ଏକ ଶକ୍ତି ବିନିମୟ - ସେହି ସତ୍ର ବାଛନ୍ତୁ ଯାହା ଆପଣଙ୍କ ସହିତ ସମନ୍ୱିତ ହୁଏ',
            bc_badge:       '✨ ପରାମର୍ଶ ବୁକ କରନ୍ତୁ',
            bc_premium_ribbon: 'ପ୍ରିମିୟମ୍',
            bc_basic_h:     'ବେସିକ୍ (BASIC)',
            bc_basic_time:  '15 - 20 ମିନିଟ୍',
            bc_prem_h:      'ପ୍ରିମିୟମ୍ (PREMIUM)',
            bc_prem_time:   '30 - 45 ମିନିଟ୍',
            bc_price_label: 'ଶକ୍ତି ବିନିମୟ',
            bc_basic_price: '2,100',
            bc_prem_price:  '5,100',
            bc_details_h:   'ଆବଶ୍ୟକୀୟ ବିବରଣୀ',
            bc_detail_1:    'ନାମ',
            bc_detail_2:    'ଜନ୍ମ ତାରିଖ',
            bc_detail_3:    'ଜନ୍ମ ସମୟ',
            bc_detail_4:    'ଜନ୍ମ ସ୍ଥାନ',
            bc_areas_h:     'ପରାମର୍ଶ କ୍ଷେତ୍ର',
            area_career:    'କ୍ୟାରିୟର',
            area_prof:      'ବୃତ୍ତି',
            area_biz:       'ବ୍ୟବସାୟ',
            area_marriage:  'ବିବାହ',
            area_marital:   'ବୈବାହିକ ଜୀବନ',
            area_children:  'ପିଲାମାନେ',
            bc_btn:         'ଆମକୁ ବାର୍ତ୍ତା ପଠାନ୍ତୁ',

            // ── book-puja.html ──
            bp_badge:       '✨ ପୂଜା ବୁକ୍ କରନ୍ତୁ',
            bp_h1:          'ପବିତ୍ର ପୂଜା ଏବଂ ଚଢ଼ାଵ',
            bp_sub:         'ଆପଣଙ୍କ ନାମ ଏବଂ ଗୋତ୍ର ପ୍ରଦାନ କରନ୍ତୁ · ଆପଣଙ୍କ ପୂଜା କିମ୍ବା ଚଢ଼ାଵ ବାଛନ୍ତୁ · ଦୈବୀ ଆଶୀର୍ବାଦ ପ୍ରାପ୍ତ କରନ୍ତୁ',
            bp_item_1_h:    'ଭଗବାନ ମହାଦେବ',
            bp_item_1_p:    'କ୍ଷୀର ଏବଂ ବେଲପତ୍ର ଅର୍ପଣ କରନ୍ତୁ',
            bp_item_2_h:    'ହନୁମାନ ଜୀ',
            bp_item_2_p:    'ସିନ୍ଦୂର ଅର୍ପଣ କରନ୍ତୁ',
            bp_item_3_h:    'ମାତା ଲକ୍ଷ୍ମୀ',
            bp_item_3_p:    'ଘିଅ, କଦଳୀ ଏବଂ ପଦ୍ମ ଅର୍ପଣ କରନ୍ତୁ',
            bp_item_4_h:    'ଗଣପତି',
            bp_item_4_p:    'ଲଡୁ ଅର୍ପଣ କରନ୍ତୁ',
            bp_item_5_h:    'ଶ୍ରୀ ଜଗନ୍ନାଥ',
            bp_item_5_p:    'ତୁଳସୀ ଏବଂ ନଡ଼ିଆ ଅର୍ପଣ କରନ୍ତୁ',
            bp_call_label:  'ପୂଜା / ଚଢ଼ାଵ ବୁକିଂ ପାଇଁ — ସିଧାସଳଖ କଲ୍ କରନ୍ତୁ',
            // ── Shlokas ──
            shloka_1_v: 'ॐ सर्वे भवन्तु सुखिनः। सर्वे सन्तु निरामयाः। सर्वे भद्राणि पश्यन्तु। मा कश्चिद् दुःखभाग्भवेत्॥', 
            shloka_1_m: 'ସମସ୍ତେ ସୁଖୀ ହେଉନ୍ତୁ, ସମସ୍ତେ ରୋଗମୁକ୍ତ ହେଉନ୍ତୁ, ସମସ୍ତେ ଶୁଭ ଦେଖନ୍ତୁ, କେହି ଦୁଃଖୀ ନ ହେଉନ୍ତୁ।',
            shloka_2_v: 'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥', 
            shloka_2_m: 'ତୁମର କର୍ମ କରିବାରେ ଅଧିକାର ଅଛି, କିନ୍ତୁ ତାହାର ଫଳରେ ନୁହେଁ।',
            shloka_3_v: 'गुरुर्ब्रह्मा गुरुर्विष्णुः गुरुर्देवो महेश्वरः। गुरुः साक्षात् परं ब्रह्म तस्मै श्रीगुरवे नमः॥', 
            shloka_3_m: 'ଗୁରୁ ହେଉଛନ୍ତି ବ୍ରହ୍ମା, ବିଷ୍ଣୁ ଓ ମହେଶ୍ୱର; ସେହି ଗୁରୁଙ୍କୁ ନମସ୍କାର।',
            shloka_4_v: 'ॐ भूर्भुवः स्वः। तत्सवितुर्वरेण्यं। भर्गो देवस्य धीमहि। धियो यो नः प्रचोदयात्॥', 
            shloka_4_m: 'ଆମେ ସେହି ଦିବ୍ୟ ଆଲୋକରେ ଧ୍ୟାନ କରୁଛୁ, ଯାହା ଆମର ବୁଦ୍ଧିକୁ ପ୍ରେରଣା ଦେଉଛି।',
            shloka_5_v: 'ॐ असतो मा सद्गमय। तमसो मा ज्योतिर्गमय। मृत्योर्मा अमृतं गमय॥', 
            shloka_5_m: 'ମୋତେ ଅସତ୍ୟରୁ ସତ୍ୟକୁ, ଅନ୍ଧକାରରୁ ଆଲୋକକୁ, ମୃତ୍ୟୁରୁ ଅମରତାକୁ ନେଇଯାଅ।',
        },
    };

    // ─── Labels shown on the toggle button ───────────────────────────────────
    const langMeta = {
        en: { label: 'EN', flag: '🇬🇧', name: 'English' },
        hi: { label: 'हि', flag: '🇮🇳', name: 'हिंदी' },
        od: { label: 'ଓ',  flag: '🏳️', name: 'ଓଡ଼ିଆ' },
    };

    // ─── Apply translations to [data-i18n] elements ───────────────────────────
    function applyLang(lang) {
        const d = dict[lang] || dict.en;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (d[key] !== undefined) el.textContent = d[key];
        });

        // Update picker button label
        const label = document.getElementById('i18n-label');
        const flag  = document.getElementById('i18n-flag');
        if (label) label.textContent = langMeta[lang].label;
        if (flag)  flag.textContent  = langMeta[lang].flag;

        // Mark active option
        document.querySelectorAll('.i18n-option').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        // html lang attribute
        const htmlLang = lang === 'hi' ? 'hi' : lang === 'od' ? 'or' : 'en';
        document.documentElement.setAttribute('lang', htmlLang);
    }

    // ─── Init picker ─────────────────────────────────────────────────────────
    function initPicker() {
        const wrapper  = document.getElementById('i18n-picker');
        const btn      = document.getElementById('i18n-btn');
        const dropdown = document.getElementById('i18n-dropdown');
        if (!wrapper || !btn) return;

        // Restore saved preference
        const saved = localStorage.getItem('astro_lang') || 'en';
        applyLang(saved);

        // Toggle dropdown open/close
        btn.addEventListener('click', e => {
            e.stopPropagation();
            const open = wrapper.classList.toggle('open');
            btn.setAttribute('aria-expanded', open);
        });

        // Option selection
        document.querySelectorAll('.i18n-option').forEach(opt => {
            opt.addEventListener('click', () => {
                const lang = opt.dataset.lang;
                localStorage.setItem('astro_lang', lang);
                applyLang(lang);
                wrapper.classList.remove('open');
                btn.setAttribute('aria-expanded', 'false');
            });
        });

        // Close on outside click
        document.addEventListener('click', e => {
            if (!wrapper.contains(e.target)) {
                wrapper.classList.remove('open');
                btn.setAttribute('aria-expanded', 'false');
            }
        });

        // Close on Escape
        document.addEventListener('keydown', e => {
            if (e.key === 'Escape') {
                wrapper.classList.remove('open');
                btn.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // Run after DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initPicker);
    } else {
        initPicker();
    }
})();
