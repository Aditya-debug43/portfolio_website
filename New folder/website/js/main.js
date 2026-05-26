/**
 * Aditya Graphics - Main Script
 * Handles translations, overlay modals, the admin control panel, and main rendering initialization.
 */

// ── TRANSLATIONS DICTIONARY ──────────────────────────────────────────
const T = {
  en: {
    nav_home:'Home', nav_services:'Services', nav_portfolio:'Portfolio',
    nav_pricing:'Pricing', nav_about:'About', nav_contact:'Contact',
    nav_wa:'💬 WhatsApp',
    hero_badge:'✦ Surat, Gujarat · Est. 2009',
    hero_h1:'Professional Jacquard Design for Sarees, Dupattas & Furnishings',
    hero_sub:'Jacquard textile designs recreated from photos and samples — trusted by master weavers across Gujarat.',
    hero_cta_wa:'💬 Contact on WhatsApp', hero_cta_port:'View Portfolio →',
    bullet1:'Design from photo or sample reference',
    bullet2:'Fast previews shared via WhatsApp',
    bullet3:'Revision support through approval',
    hcard_title:'Design Categories', hcard_sub:'Specialized across all major textile types',
    stat1:'Years Exp.', stat2:'Design Types', stat3:'Weavers & Mills', stat4:'Based',
    sec_services:'Services', svc_title:'Jacquard Design Services',
    svc_sub:'Complete design support from first reference to final approval — pure design expertise.',
    svc1_h:'Jacquard Design Creation', svc1_p:'Motifs, borders, and all-over repeats crafted for precise weaving specifications across all textile categories.',
    svc2_h:'Design Re-creation from Photo', svc2_p:'Send any reference photo or sample — we recreate the design with accurate color matching and repeat structure.',
    svc3_h:'Border & Daman Design', svc3_p:'Precise border and daman element design with correct repeat logic and proportionate scale for any fabric width.',
    svc4_h:'Buti & All-Over Patterns', svc4_p:'Small-repeat designs for body fill and all-over buti layouts — evenly spaced, balanced, ready for review.',
    svc5_h:'Revision & Execution Support', svc5_p:'Design tweaks, color adjustments, and advice during the weaving process. We stand by the design through approval.',
    sec_portfolio:'Portfolio', port_title:'Design Gallery',
    port_sub:'Browse our jacquard design work across all categories. Click any design to view details.',
    cat_all:'All',
    sec_pricing:'Pricing', price_title:'Design Charges',
    price_sub:'Transparent per-design pricing. Click a row to view that category in the portfolio.',
    price_th1:'Design Type', price_th2:'Price (INR)',
    note_label:'Note:', price_note:'Prices depend on design complexity, repeat size, and loom specifications. Final quotation is shared after reviewing the reference design.',
    price_cta_text:'Send your reference on WhatsApp for an exact quote.',
    price_cta_btn:'💬 Get a Quote on WhatsApp',
    sec_process:'How It Works', proc_title:'Simple 3-Step Process',
    proc_sub:'From reference photo to approved design — fast, direct, on WhatsApp.',
    step1_h:'Send Reference', step1_p:'Send a photo, sample or screenshot on WhatsApp.',
    step2_h:'Design & Preview', step2_p:'We create the jacquard design and share a preview with you for review and approval.',
    step3_h:'Revisions & Approval', step3_p:'We make requested revisions and finalize the design on approval.',
    sec_about:'About', about_title:'About Aditya Graphics',
    about_p1:"Aditya Graphics is a specialized jacquard design studio based in Surat, Gujarat — India's premier textile manufacturing hub. With over 15 years of experience, we work exclusively with loom owners, weaving mills, and textile traders.",
    about_p2:"Our work spans the full range of woven textile categories: sarees, dupattas, sherwanis, brocade, lace, furnishing fabrics, and more. Every design is created from the client's own reference and refined through preview and revision until fully approved.",
    about_p3:'All project coordination happens on WhatsApp — fast, personal, direct.',
    about_wa:'💬 Connect on WhatsApp',
    ab_loc_l:'Location', ab_loc_v:'Surat, Gujarat, India',
    ab_exp_l:'Experience', ab_exp_v:'15+ years in jacquard textile design',
    ab_spec_l:'Specialization', ab_spec_v:'Jacquard design for handloom & powerloom',
    ab_cli_l:'Clients', ab_cli_v:'Loom owners, mills, textile traders',
    ab_hrs_l:'Hours', ab_hrs_v:'Mon–Sat, 9:00 AM – 6:00 PM IST',
    ab_email_l:'Email',
    sec_contact:'Contact', con_title:'Get In Touch',
    con_wa_h:'Start on WhatsApp', con_wa_p:'Fastest way to share a reference, get a quote, and begin. Most requests answered within hours.',
    con_wa_btn:'💬 Open WhatsApp Chat',
    con_loc:'Surat, Gujarat, India', con_hrs:'Mon–Sat, 9:00 AM – 6:00 PM IST',
    con_email_note:'Use email for large file attachments only',
    form_title:'Send a Message', form_name:'Your Name', form_name_ph:'Full name',
    form_co:'Company / Business', form_co_ph:'Company or business name',
    form_phone:'WhatsApp Number', form_msg:'Message', form_msg_ph:'Describe your design requirement...',
    form_submit:'Send via WhatsApp →', form_note:'This opens WhatsApp with your message pre-filled',
    ft_desc:'Professional jacquard textile design studio serving weavers, mills and traders across India. Based in Surat, Gujarat.',
    ft_nav_h:'Navigation', ft_legal_h:'Legal',
    privacy_link:'Privacy Policy', terms_link:'Terms of Use',
    ft_copy:'© 2025 Aditya Graphics. All rights reserved.',
    float_wa:'💬 WhatsApp Us', admin_btn:'⚙ Admin',
    login_title:'Admin Login', login_sub:'Enter your admin password to manage site content.',
    login_pwd_l:'Password', login_err:'Incorrect password. Please try again.',
    login_btn:'Login →', cancel:'Cancel',
    lb_request:'💬 Request This Design on WhatsApp', lb_close:'Close',
    port_empty:'No designs in this category yet.',
    port_empty2:'Add items via Admin Panel.',
    sec_testimonials:'Testimonials', test_title:'Client Reviews',
    test_sub:'Read what weavers and textile manufacturers say about our design services.'
  },
  hi: {
    nav_home:'होम', nav_services:'सेवाएं', nav_portfolio:'पोर्टफोलियो',
    nav_pricing:'मूल्य सूची', nav_about:'हमारे बारे में', nav_contact:'संपर्क',
    nav_wa:'💬 व्हाट्सऐप',
    hero_badge:'✦ सूरत, गुजरात · स्थापना 2009',
    hero_h1:'साड़ियों, दुपट्टों और फ़र्निशिंग के लिए प्रोफ़ेशनल जैकार्ड डिज़ाइन',
    hero_sub:'फोटो और नमूनों से जैकार्ड टेक्सटाइल डिज़ाइन — गुजरात भर के बुनकरों का विश्वास।',
    hero_cta_wa:'💬 व्हाट्सऐप पर संपर्क करें', hero_cta_port:'पोर्टफोलियो देखें →',
    bullet1:'फोटो या नमूने से डिज़ाइन',
    bullet2:'व्हाट्सऐप पर तुरंत प्रीव्यू',
    bullet3:'अनुमोदन तक संशोधन सहायता',
    hcard_title:'डिज़ाइन श्रेणियां', hcard_sub:'सभी प्रमुख कपड़ा प्रकारों में विशेषज्ञता',
    stat1:'वर्षों का अनुभव', stat2:'डिज़ाइन प्रकार', stat3:'बुनकर और मिलें', stat4:'स्थान',
    sec_services:'सेवाएं', svc_title:'जैकार्ड डिज़ाइन सेवाएं',
    svc_sub:'पहले संदर्भ से अंतिम अनुमोदन तक पूर्ण डिज़ाइन सहायता।',
    svc1_h:'जैकार्ड डिज़ाइन निर्माण', svc1_p:'सभी कपड़ा श्रेणियों में सटीक बुनाई विशिष्टताओं के लिए मोटिफ, बॉर्डर और ऑल-ओवर रिपीट।',
    svc2_h:'फोटो से डिज़ाइन पुनर्निर्माण', svc2_p:'कोई भी संदर्भ फोटो या नमूना भेजें — हम सटीक रंग मिलान के साथ डिज़ाइन फिर से बनाते हैं।',
    svc3_h:'बॉर्डर और दामन डिज़ाइन', svc3_p:'किसी भी कपड़े की चौड़ाई के लिए सही रिपीट लॉजिक के साथ सटीक बॉर्डर और दामन डिज़ाइन।',
    svc4_h:'बूटी और ऑल-ओवर पैटर्न', svc4_p:'बॉडी फिल के लिए छोटे-रिपीट डिज़ाइन और ऑल-ओवर बूटी लेआउट।',
    svc5_h:'संशोधन और सहायता', svc5_p:'बुनाई प्रक्रिया के दौरान डिज़ाइन में बदलाव, रंग समायोजन और सलाह।',
    sec_portfolio:'पोर्टफोलियो', port_title:'डिज़ाइन गैलरी',
    port_sub:'सभी श्रेणियों में हमारे जैकार्ड डिज़ाइन कार्य देखें। विवरण के लिए किसी भी डिज़ाइन पर क्लिक करें।',
    cat_all:'सभी',
    sec_pricing:'मूल्य सूची', price_title:'डिज़ाइन शुल्क',
    price_sub:'पारदर्शी प्रति-डिज़ाइन मूल्य निर्धारण। पोर्टफोलियो फ़िल्टर करने के लिए किसी पंक्ति पर क्लिक करें।',
    price_th1:'डिज़ाइन प्रकार', price_th2:'मूल्य (INR)',
    note_label:'नोट:', price_note:'मूल्य डिज़ाइन जटिलता, रिपीट आकार और करघे की विशिष्टताओं पर निर्भर करते हैं। संदर्भ समीक्षा के बाद अंतिम उद्धरण साझा किया जाता है।',
    price_cta_text:'सटीक उद्धरण के लिए व्हाट्सऐप पर अपना संदर्भ भेजें।',
    price_cta_btn:'💬 व्हाट्सऐप पर कोटेशन लें',
    sec_process:'यह कैसे काम करता है', proc_title:'सरल 3-चरण प्रक्रिया',
    proc_sub:'संदर्भ फोटो से अनुमोदित डिज़ाइन तक — तेज़, सीधा, व्हाट्सऐप पर।',
    step1_h:'संदर्भ भेजें', step1_p:'व्हाट्सऐप पर एक फोटो, नमूना या स्क्रीनशॉट भेजें।',
    step2_h:'डिज़ाइन और प्रीव्यू', step2_p:'हम जैकार्ड डिज़ाइन बनाते हैं और समीक्षा और अनुमोदन के लिए आपके साथ प्रीव्यू साझा करते हैं।',
    step3_h:'संशोधन और अनुमोदन', step3_p:'हम अनुरोधित संशोधन करते हैं और अनुमोदन पर डिज़ाइन को अंतिम रूप देते हैं।',
    sec_about:'हमारे बारे में', about_title:'आदित्य ग्राफिक्स के बारे में',
    about_p1:'आदित्य ग्राफिक्स सूरत, गुजरात में स्थित एक विशेष जैकार्ड डिज़ाइन स्टूडियो है — भारत का प्रमुख कपड़ा विनिर्माण केंद्र। 15 से अधिक वर्षों के अनुभव के साथ, हम विशेष रूप से करघा मालिकों, बुनाई मिलों और कपड़ा व्यापारियों के साथ काम करते हैं।',
    about_p2:'हमारा काम बुने हुए कपड़े की पूरी श्रृंखला में फैला है: साड़ियां, दुपट्टे, शेरवानी, ब्रोकेड, लेस, फ़र्निशिंग फेब्रिक्स और बहुत कुछ।',
    about_p3:'सभी प्रोजेक्ट समन्वय व्हाट्सऐप पर होता है — तेज़, व्यक्तिगत, सीधा।',
    about_wa:'💬 व्हाट्सऐप पर जुड़ें',
    ab_loc_l:'स्थान', ab_loc_v:'सूरत, गुजरात, भारत',
    ab_exp_l:'अनुभव', ab_exp_v:'जैकार्ड टेक्सटाइल डिज़ाइन में 15+ वर्ष',
    ab_spec_l:'विशेषज्ञता', ab_spec_v:'हथकरघा और पावरलूम के लिए जैकार्ड डिज़ाइन',
    ab_cli_l:'ग्राहक', ab_cli_v:'करघा मालिक, मिलें, कपड़ा व्यापारी',
    ab_hrs_l:'समय', ab_hrs_v:'सोम–शनि, सुबह 9:00 – शाम 6:00 IST',
    ab_email_l:'ईमेल',
    sec_contact:'संपर्क', con_title:'संपर्क करें',
    con_wa_h:'व्हाट्सऐप पर शुरू करें', con_wa_p:'संदर्भ साझा करने, कोटेशन प्राप्त करने और शुरुआत करने का सबसे तेज़ तरीका।',
    con_wa_btn:'💬 व्हाट्सऐप चैट खोलें',
    con_loc:'सूरत, गुजरात, भारत', con_hrs:'सोम–शनि, सुबह 9:00 – शाम 6:00 IST',
    con_email_note:'बड़ी फ़ाइल संलग्नक के लिए केवल ईमेल का उपयोग करें',
    form_title:'संदेश भेजें', form_name:'आपका नाम', form_name_ph:'पूरा नाम',
    form_co:'कंपनी / व्यवसाय', form_co_ph:'कंपनी या व्यवसाय का नाम',
    form_phone:'व्हाट्सऐप नंबर', form_msg:'संदेश', form_msg_ph:'अपनी डिज़ाइन आवश्यकता बताएं...',
    form_submit:'व्हाट्सऐप पर भेजें →', form_note:'यह आपके संदेश के साथ व्हाट्सऐप खोलेगा',
    ft_desc:'सूरत, गुजरात में स्थित प्रोफ़ेशनल जैकार्ड टेक्सटाइल डिज़ाइन स्टूडियो।',
    ft_nav_h:'नेविगेशन', ft_legal_h:'कानूनी',
    privacy_link:'गोपनीयता नीति', terms_link:'उपयोग की शर्तें',
    ft_copy:'© 2025 आदित्य ग्राफिक्स। सर्वाधिकार सुरक्षित।',
    float_wa:'💬 व्हाट्सऐप करें', admin_btn:'⚙ एडमिन',
    login_title:'एडमिन लॉगिन', login_sub:'साइट सामग्री प्रबंधित करने के लिए अपना पासवर्ड दर्ज करें।',
    login_pwd_l:'पासवर्ड', login_err:'गलत पासवर्ड। कृपया पुनः प्रयास करें।',
    login_btn:'लॉगिन करें →', cancel:'रद्द करें',
    lb_request:'💬 व्हाट्सऐप पर यह डिज़ाइन मांगें', lb_close:'बंद करें',
    port_empty:'इस श्रेणी में अभी कोई डिज़ाइन नहीं है।',
    port_empty2:'एडमिन पैनल से आइटम जोड़ें।',
    sec_testimonials:'प्रशंसापत्र', test_title:'ग्राहकों के विचार',
    test_sub:'जानिए हमारे काम के बारे में बुनकरों और कपड़ा निर्माताओं की राय।'
  },
  gu: {
    nav_home:'હોમ', nav_services:'સેવાઓ', nav_portfolio:'પોર્ટફોલિયો',
    nav_pricing:'ભાવ સૂચિ', nav_about:'અમારા વિશે', nav_contact:'સંપર્ક',
    nav_wa:'💬 વ્હોટ્સઍપ',
    hero_badge:'✦ સુરત, ગુજરાત · સ્થાપના 2009',
    hero_h1:'સાડીઓ, દુપટ્ટાઓ અને ફર્નિશિંગ માટે વ્યાવસાયિક જૅકાર્ડ ડિઝાઇન',
    hero_sub:'ફોટો અને નમૂનાઓ પરથી જૅકાર્ડ ટેક્સટાઇલ ડિઝાઇન — ગુજરાતભરના કારીગરોનો વિશ્વાસ.',
    hero_cta_wa:'💬 વ્હોટ્સઍપ પર સંપર્ક કરો', hero_cta_port:'પોર્ટફોલિયો જુઓ →',
    bullet1:'ફોટો અથવા નમૂના પરથી ડિઝાઇન',
    bullet2:'વ્હોટ્સઍપ પર ઝડપી પ્રિવ્યૂ',
    bullet3:'મંજૂરી સુધી સુધારા સહાય',
    hcard_title:'ડિઝાઇન શ્રેણીઓ', hcard_sub:'તમામ મુખ્ય કાપડ પ્રકારોમાં નિષ્ણાત',
    stat1:'વર્ષોનો અનુભવ', stat2:'ડિઝાઇન પ્રકાર', stat3:'વણકર અને મિલો', stat4:'સ્થાપિત',
    sec_services:'સેવાઓ', svc_title:'જૅકાર્ડ ડિઝાઇન સેવાઓ',
    svc_sub:'પ્રથમ સંદર્ભથી અંતિમ મંજૂરી સુધી સંપૂર્ણ ડિઝાઇન સહાય.',
    svc1_h:'જૅકાર્ડ ડિઝાઇન નિર્માણ', svc1_p:'તમામ કાપડ શ્રેણીઓ માટે ચોક્કસ વણાટ સ્પષ્ટીકરણ સાથે મોટિફ, બોર્ડર અને ઓલ-ઓવર રિપીટ.',
    svc2_h:'ફોટોથી ડિઝાઇન પુનઃનિર્માણ', svc2_p:'કોઈપણ સંદર્ભ ફોટો અથવા નમૂનો મોકલો — અમે સચોટ રંગ મેળવણી અને રિપીટ બંધારણ સાથે ડિઝાઇન ફરી બનાવીએ છીએ.',
    svc3_h:'બોર્ડર અને દામન ડિઝાઇન', svc3_p:'કોઈપણ કાપડની પહોળાઈ માટે યોગ્ય રિપીટ લોજિક સાથે ચોક્કસ બોર્ડર અને દામન ડિઝાઇન.',
    svc4_h:'બૂટી અને ઓલ-ઓવર પેટર્ન', svc4_p:'બોડી ફિલ અને ઓલ-ઓવર બૂટી લેઆઉટ માટે નાના-રિપીટ ડિઝાઇન — સમતોલ અને સમાન અંતર સાથે.',
    svc5_h:'સુધારા અને કાર્યાન્વયન સહાય', svc5_p:'વણાટ પ્રક્રિયા દરમિયાન ડિઝાઇન ફેરફાર, રંગ ગોઠવણી અને માર્ગદર્શન. અંતિમ મંજૂરી સુધી અમે સાથે રહીએ છીએ.',
    sec_portfolio:'પોર્ટફોલિયો', port_title:'ડિઝાઇન ગેલેરી',
    port_sub:'તમામ શ્રેણીઓમાં અમારા જૅકાર્ડ ડિઝાઇન કામ જુઓ. વિગતો જોવા માટે કોઈપણ ડિઝાઇન પર ક્લિક કરો.',
    cat_all:'બધા',
    sec_pricing:'ભાવ સૂચિ', price_title:'ડિઝાઇન ચાર્જ',
    price_sub:'પારદર્શક પ્રતિ-ડિઝાઇન ભાવ. પોર્ટફોલિયો ફિલ્ટર કરવા માટે કોઈપણ પંક્તિ પર ક્લિક કરો.',
    price_th1:'ડિઝાઇન પ્રકાર', price_th2:'ભાવ (INR)',
    note_label:'નોંધ:', price_note:'ભાવ ડિઝાઇનની જટિલતા, રિપીટ સાઇઝ અને લૂમની વિશિષ્ટતાઓ પર આધારિત છે. સંદર્ભ ડિઝાઇનની સમીક્ષા પછી અંતિમ કોટેશન આપવામાં આવે છે.',
    price_cta_text:'ચોક્કસ કોટેશન માટે તમારો સંદર્ભ WhatsApp પર મોકલો.',
    price_cta_btn:'💬 WhatsApp પર કોટેશન મેળવો',
    sec_process:'કેવી રીતે કામ કરે છે', proc_title:'સરળ 3-પગલાની પ્રક્રિયા',
    proc_sub:'સંદર્ભ ફોટાથી મંજૂર ડિઝાઇન સુધી — ઝડપી, સીધી, WhatsApp પર.',
    step1_h:'સંદર્ભ મોકલો', step1_p:'WhatsApp પર ફોટો, નમૂનો અથવા સ્ક્રીનશોટ મોકલો.',
    step2_h:'ડિઝાઇન અને પ્રિવ્યૂ', step2_p:'અમે જૅકાર્ડ ડિઝાઇન બનાવીએ છીએ અને સમીક્ષા તથા મંજૂરી માટે પ્રિવ્યૂ મોકલીએ છીએ.',
    step3_h:'સુધારા અને મંજૂરી', step3_p:'અમે માંગેલા ફેરફારો કરીએ છીએ અને મંજૂરી પછી ડિઝાઇન અંતિમ કરીએ છીએ.',
    sec_about:'વિશે', about_title:'આદિત્ય ગ્રાફિક્સ વિશે',
    about_p1:'આદિત્ય ગ્રાફિક્સ સુરત, ગુજરાતમાં સ્થિત એક વિશિષ્ટ જૅકાર્ડ ડિઝાઇન સ્ટુડિયો છે — ભારતનું પ્રમુખ ટેક્સટાઇલ ઉત્પાદન કેન્દ્ર. 15 વર્ષથી વધુના અનુભવ સાથે, અમે માત્ર લૂમ માલિકો, વણાટ મિલો અને ટેક્સટાઇલ વેપારીઓ સાથે કામ કરીએ છીએ.',
    about_p2:'અમારું કામ વણાયેલા કાપડની સંપૂર્ણ શ્રેણી આવરી લે છે: સાડીઓ, દુપટ્ટા, શેરવાની, બ્રોકેડ, લેસ, ફર્નિશિંગ ફેબ્રિક્સ અને વધુ. દરેક ડિઝાઇન ક્લાયન્ટના પોતાના સંદર્ભ પરથી બનાવવામાં આવે છે અને પ્રિવ્યૂ તથા સુધારા દ્વારા સંપૂર્ણ મંજૂરી સુધી સુધારવામાં આવે છે.',
    about_p3:'બધો પ્રોજેક્ટ સમન્વય WhatsApp પર થાય છે — ઝડપી, વ્યક્તિગત, સીધો.',
    about_wa:'💬 WhatsApp પર જોડાઓ',
    ab_loc_l:'સ્થાન', ab_loc_v:'સુરત, ગુજરાત, ભારત',
    ab_exp_l:'અનુભવ', ab_exp_v:'જૅકાર્ડ ટેક્સટાઇલ ડિઝાઇનમાં 15+ વર્ષ',
    ab_spec_l:'વિશેષતા', ab_spec_v:'હેન્ડલૂમ અને પાવરલૂમ માટે જૅકાર્ડ ડિઝાઇન',
    ab_cli_l:'ગ્રાહકો', ab_cli_v:'લૂમ માલિકો, મિલો, ટેક્સટાઇલ વેપારીઓ',
    ab_hrs_l:'સમય', ab_hrs_v:'સોમ–શનિ, સવારે 9:00 – સાંજે 6:00 IST',
    ab_email_l:'ઈમેલ',
    sec_contact:'સંપર્ક', con_title:'સંપર્કમાં આવો',
    con_wa_h:'WhatsApp પર શરૂ કરો', con_wa_p:'સંદર્ભ શેર કરવા, કોટેશન મેળવવા અને શરૂ કરવા માટેનો સૌથી ઝડપી રસ્તો. મોટાભાગના સંદેશો થોડા કલાકોમાં જવાબ મળે છે.',
    con_wa_btn:'💬 WhatsApp ચેટ ખોલો',
    con_loc:'સુરત, ગુજરાત, ભારત', con_hrs:'સોમ–શનિ, સવારે 9:00 – સાંજે 6:00 IST',
    con_email_note:'મોટી ફાઇલ જોડાણ માટે માત્ર ઈમેલનો ઉપયોગ કરો',
    form_title:'સંદેશ મોકલો', form_name:'તમારું નામ', form_name_ph:'પૂર્ણ નામ',
    form_co:'કંપની / વ્યવસાય', form_co_ph:'કંપની અથવા વ્યવસાયનું નામ',
    form_phone:'WhatsApp નંબર', form_msg:'સંદેશ', form_msg_ph:'તમારી ડિઝાઇનની જરૂરિયાત જણાવો...',
    form_submit:'WhatsApp દ્વારા મોકલો →', form_note:'આ તમારો સંદેશ પૂર્વભરેલ સાથે WhatsApp ખોલશે',
    ft_desc:'સુરત, ગુજરાત સ્થિત વ્યાવસાયિક જૅકાર્ડ ટેક્સટાઇલ ડિઝાઇન સ્ટુડિયો, જે ભારતભરના વણકરો, મિલો અને વેપારીઓને સેવા આપે છે.',
    ft_nav_h:'નેવિગેશન', ft_legal_h:'કાનૂની',
    privacy_link:'ગોપનીયતા નીતિ', terms_link:'ઉપયોગની શરતો',
    ft_copy:'© 2025 આદિત્ય ગ્રાફિક્સ. સર્વ અધિકાર સુરક્ષિત.',
    float_wa:'💬 WhatsApp કરો', admin_btn:'⚙ એડમિન',
    login_title:'એડમિન લૉગિન', login_sub:'સાઇટની સામગ્રી સંભાળવા માટે તમારો એડમિન પાસવર્ડ દાખલ કરો.',
    login_pwd_l:'પાસવર્ડ', login_err:'ખોટો પાસવર્ડ. ફરી પ્રયાસ કરો.',
    login_btn:'લૉગિન →', cancel:'રદ કરો',
    lb_request:'💬 આ ડિઝાઇન માટે WhatsApp પર વિનંતી કરો', lb_close:'બંધ કરો',
    port_empty:'આ શ્રેણીમાં હજી કોઈ ડિઝાઇન નથી.',
    port_empty2:'એડમિન પેનલ દ્વારા આઇટમ ઉમેરો.',
    sec_testimonials:'અભિપ્રાયો', test_title:'ગ્રાહકોના રિવ્યૂ',
    test_sub:'જાણો અમારા કામ વિશે વણકરો અને કાપડ ઉત્પાદકોના પ્રતિભાવો.'
  }
};

let currentLang = 'en';

window.setLang = function(lang) {
  if (!T[lang]) return;
  currentLang = lang;
  document.documentElement.lang = lang;
  document.body.classList.remove('lang-en', 'lang-hi', 'lang-gu');
  document.body.classList.add('lang-' + lang);

  // Update translatable text elements
  document.querySelectorAll('[data-t]').forEach(el => {
    const key = el.getAttribute('data-t');
    if (T[lang][key] !== undefined) el.textContent = T[lang][key];
  });

  // Update placeholders
  document.querySelectorAll('[data-placeholder-t]').forEach(el => {
    const key = el.getAttribute('data-placeholder-t');
    if (T[lang][key] !== undefined) el.setAttribute('placeholder', T[lang][key]);
  });

  // Update active state on desktop language switcher buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('onclick') === "setLang('" + lang + "')");
  });

  // Update active state on mobile menu language buttons
  ['en', 'hi', 'gu'].forEach(l => {
    const el = document.getElementById('mobLang' + l.charAt(0).toUpperCase() + l.slice(1));
    if (el) el.classList.toggle('active', l === lang);
  });

  // Re-render dynamic elements to apply language adjustments
  renderPortfolio();
  renderPricing();
  renderHeroPills();
  renderTestimonials();
};

// ── BRAND LOGIC ──────────────────────────────────────────────────────
window.applyBrand = async function() {
  const b = await loadBrand();
  const name = b.name || 'Aditya Graphics';
  const tag  = b.tag  || 'Jacquard Design Studio';
  const logo = b.logo || '';
  const wa   = b.wa   || '919999999999';
  const email= b.email|| 'adityagraphics886@gmail.com';
  const waUrl= 'https://wa.me/' + wa.replace(/[^0-9]/g, '');

  const nameEl = document.getElementById('navName');
  if (nameEl) nameEl.textContent = name;
  
  const tagEl = document.getElementById('navTag');
  if (tagEl) tagEl.textContent = tag;
  
  const ftNameEl = document.getElementById('ftName');
  if (ftNameEl) ftNameEl.textContent = name;

  const logoEl = document.getElementById('navLogo');
  if (logoEl) {
    if (logo) {
      logoEl.innerHTML = '<img src="' + logo + '" alt="logo">';
    } else {
      logoEl.textContent = name.slice(0, 2).toUpperCase();
    }
  }

  // Bind WhatsApp link buttons
  ['heroWaBtn', 'navWaBtn', 'mobWaBtn', 'priceWaBtn', 'aboutWaBtn', 'conWaBtn', 'floatWaBtn', 'ftWaBtn'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.href = waUrl;
  });

  // Bind email display fields
  ['aboutEmail', 'contactEmail'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = email;
  });
};

// ── HERO SPECIALTY PILLS ─────────────────────────────────────────────
const PILL_LABELS = ['Saree', 'Dupatta', 'Brocade', 'Sherwani', 'Curtain', 'Lace', 'Buti', 'Blouse', 'Daman / Border', 'Kali'];

const LABEL_MAP = {
  hi: {
    Saree: 'साड़ी', Dupatta: 'दुपट्टा', Brocade: 'ब्रोकेड', Sherwani: 'शेरवानी',
    Curtain: 'पर्दा', Lace: 'लेस', Buti: 'बूटी', Blouse: 'ब्लाउज़',
    'Daman / Border': 'दामन / बॉर्डर', Kali: 'कली'
  },
  gu: {
    Saree: 'સાડી', Dupatta: 'દુપટ્ટા', Brocade: 'બ્રોકેડ', Sherwani: 'શેરવાની',
    Curtain: 'પર્દા', Lace: 'લેસ', Buti: 'બૂટી', Blouse: 'બ્લાઉઝ',
    'Daman / Border': 'દામન / બોર્ડર', Kali: 'કાલી'
  }
};

const PRICE_TYPE_MAP = {
  hi: {
    'Saree Full Design': 'साड़ी फुल डिज़ाइन',
    'Dupatta Design': 'दुपट्टा डिज़ाइन',
    'Sherwani / Brocade': 'शेरवानी / ब्रोकेड',
    'Curtain / Furnishing': 'पर्दा / फ़र्निशिंग',
    'Buti / All-Over Pattern': 'बूटी / ऑल-ओवर पैटर्न',
    'Border / Daman Only': 'बॉर्डर / दामन केवल',
    'Lace Design': 'लेस डिज़ाइन',
    'Blouse / Kali Design': 'ब्लाउज़ / कली डिज़ाइन'
  },
  gu: {
    'Saree Full Design': 'સાડી ફુલ ડિઝાઇન',
    'Dupatta Design': 'દુપટ્ટા ડિઝાઇન',
    'Sherwani / Brocade': 'શેરવાની / બ્રોકેડ',
    'Curtain / Furnishing': 'પર્દો / ફર્નિશિંગ',
    'Buti / All-Over Pattern': 'બૂટી / ઓલ-ઓવર પેટર્ન',
    'Border / Daman Only': 'બોર્ડર / દામન માત્ર',
    'Lace Design': 'લેસ ડિઝાઇન',
    'Blouse / Kali Design': 'બ્લાઉઝ / કળી ડિઝાઇન'
  }
};

const FILTER_MAP = {
  'Saree Full Design': 'Saree',
  'Dupatta Design': 'Dupatta',
  'Sherwani / Brocade': 'Brocade',
  'Curtain / Furnishing': 'Curtain',
  'Buti / All-Over Pattern': 'Buti (All-Over)',
  'Border / Daman Only': 'Daman / Border',
  'Lace Design': 'Lace',
  'Blouse / Kali Design': 'Blouse'
};

function translateLabel(label) {
  const map = LABEL_MAP[currentLang] || {};
  return map[label] || label;
}

function translatePriceType(label) {
  const map = PRICE_TYPE_MAP[currentLang] || {};
  return map[label] || label;
}

function getFilterCategory(type) {
  return FILTER_MAP[type] || type.split(' ')[0];
}

window.renderHeroPills = function() {
  const wrap = document.getElementById('heroPills');
  if (!wrap) return;
  wrap.innerHTML = PILL_LABELS.map(l => '<span class="pill">' + translateLabel(l) + '</span>').join('');
};

// ── PORTFOLIO DISPLAY ────────────────────────────────────────────────
let activeFilter = 'all';

window.renderPortfolio = async function() {
  const items = await loadPortfolio();
  const wrap = document.getElementById('filterWrap');
  const grid = document.getElementById('pgrid');
  if (!wrap || !grid) return;
  
  const cats = ['all', ...new Set(items.map(i => i.cat))];
  wrap.innerHTML = cats.map(c => {
    const label = c === 'all' ? (T[currentLang].cat_all || 'All') : translateLabel(c);
    return '<button class="ftab' + (activeFilter === c ? ' on' : '') + '" onclick="filterBy(\'' + c + '\')">' + label + '</button>';
  }).join('');
  
  const filtered = activeFilter === 'all' ? items : items.filter(i => i.cat === activeFilter);
  if (filtered.length === 0) {
    grid.innerHTML = '<div class="empty"><p>' + (T[currentLang].port_empty || 'No designs yet.') + '</p><p style="font-size:14px;margin-top:6px">' + (T[currentLang].port_empty2 || 'Add via Admin.') + '</p></div>';
    return;
  }
  
  grid.innerHTML = filtered.map(it => {
    const thumb = it.img
      ? '<img class="pthumb" src="' + it.img + '" alt="' + it.title + '" loading="lazy">'
      : '<div class="pplaceholder"><div class="wm"><span>ADITYA GRAPHICS</span></div></div>';
    return '<div class="pitem" onclick="openLb(' + it.id + ')">' + thumb + '<div class="pinfo"><h4>' + it.title + '</h4><span>' + translateLabel(it.cat) + '</span></div></div>';
  }).join('');
};

window.filterBy = function(cat) {
  activeFilter = cat;
  renderPortfolio();
};

// ── PRICING TABLE ────────────────────────────────────────────────────
window.renderPricing = async function() {
  const rows = await loadPricing();
  const tbody = document.getElementById('ptbody');
  if (!tbody) return;
  
  tbody.innerHTML = rows.map(r => '<tr data-type="' + r.type + '"><td><span class="plink">' + translatePriceType(r.type) + '</span></td><td>' + r.price + '</td></tr>').join('');
  tbody.querySelectorAll('tr').forEach((tr) => {
    tr.addEventListener('click', () => {
      filterBy(getFilterCategory(tr.getAttribute('data-type') || ''));
      const portSection = document.getElementById('portfolio');
      if (portSection) {
        portSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = 'index.html#portfolio';
      }
    });
  });
};

// ── TESTIMONIALS DISPLAY ─────────────────────────────────────────────
window.renderTestimonials = async function() {
  const testimonials = await loadTestimonials();
  const grid = document.getElementById('testimonials-grid');
  if (!grid) return;
  
  grid.innerHTML = testimonials.map(t => {
    let stars = '★'.repeat(t.rating) + '☆'.repeat(5 - t.rating);
    return `
      <div class="svc-card testimonial-card">
        <div style="color:var(--gold);font-size:18px;margin-bottom:8px">${stars}</div>
        <p style="font-size:13.5px;color:var(--mid);font-style:italic;margin-bottom:12px">"${t.text}"</p>
        <div style="font-weight:600;font-size:13px;color:var(--charcoal)">${t.name}</div>
        <div style="font-size:11px;color:var(--light)">${t.role}</div>
      </div>
    `;
  }).join('');
};

// ── IMAGE LIGHTBOX ───────────────────────────────────────────────────
window.openLb = async function(id) {
  const items = await loadPortfolio();
  const it = items.find(i => i.id === id);
  if (!it) return;
  
  const lb = document.getElementById('lb');
  if (!lb) return;
  
  const b = await loadBrand();
  const wa = b.wa || '919999999999';
  const waUrl = 'https://wa.me/' + wa.replace(/[^0-9]/g, '') + '?text=' + encodeURIComponent('Hi, I would like to enquire about the design: ' + it.title + ' (' + it.cat + ')');
  
  const lbInner = document.getElementById('lbInner');
  if (lbInner) {
    lbInner.innerHTML =
      (it.img ? '<img class="lb-img" src="' + it.img + '" alt="' + it.title + '">'
              : '<div class="lb-ph">' + it.title + '</div>') +
      '<div class="lb-info"><div><h3>' + it.title + '</h3><div class="lb-badge">' + translateLabel(it.cat) + '</div><p class="lb-desc">' + (it.desc || '') + '</p></div>' +
      '<div class="lb-actions"><button class="lb-wa" id="lbWaBtn">' + (T[currentLang].lb_request || '💬 Request on WhatsApp') + '</button>' +
      '<button id="lbCloseBtn" style="background:none;border:1px solid var(--border);padding:9px;border-radius:50px;cursor:pointer;font-family:inherit;font-size:12px;color:var(--mid)">' + (T[currentLang].lb_close || 'Close') + '</button></div></div>';
      
    document.getElementById('lbWaBtn').addEventListener('click', () => window.open(waUrl, '_blank'));
    document.getElementById('lbCloseBtn').addEventListener('click', closeLb);
  }
  lb.classList.add('open');
};

window.closeLb = function() {
  const lb = document.getElementById('lb');
  if (lb) lb.classList.remove('open');
};

window.lbBg = function(e) {
  if (e.target === document.getElementById('lb')) closeLb();
};

// ── OVERLAYS AND MODALS ──────────────────────────────────────────────
window.openOverlay = function(id) {
  const ov = document.getElementById(id);
  if (ov) ov.classList.add('open');
};

window.closeOverlay = function(id) {
  const ov = document.getElementById(id);
  if (ov) ov.classList.remove('open');
};

window.bgClose = function(id, e) {
  if (e.target === document.getElementById(id)) closeOverlay(id);
};

window.openLoginOrAdmin = async function() {
  if (sessionStorage.getItem('ag_auth')) {
    openOverlay('adminOverlay');
    loadAdminPanel();
  } else {
    openOverlay('loginOverlay');
  }
};

window.tryLogin = async function() {
  const pwd = document.getElementById('loginPwd').value;
  const btn = document.querySelector('.btn-login-submit');
  const err = document.getElementById('loginErr');
  if (btn) { btn.disabled = true; btn.textContent = 'Checking…'; }
  try {
    const res  = await fetch('/api/admin', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({ action: 'verify', password: pwd }),
    });
    const json = await res.json();
    if (json.success) {
      sessionStorage.setItem('ag_auth', pwd);
      if (err) err.style.display = 'none';
      document.getElementById('loginPwd').value = '';
      closeOverlay('loginOverlay');
      openOverlay('adminOverlay');
      loadAdminPanel();
    } else {
      if (err) { err.textContent = json.error || 'Incorrect password. Please try again.'; err.style.display = 'block'; }
    }
  } catch (e) {
    if (err) { err.textContent = 'Network error. Check your connection.'; err.style.display = 'block'; }
  } finally {
    if (btn) { btn.disabled = false; btn.textContent = T[currentLang]?.login_btn || 'Login →'; }
  }
};

// ── ADMIN PANEL TABS & SETUP ─────────────────────────────────────────
window.switchTab = function(name, el) {
  document.querySelectorAll('.mtab').forEach(t => t.classList.remove('on'));
  document.querySelectorAll('.msec').forEach(s => s.classList.remove('on'));
  el.classList.add('on');
  const targetSection = document.getElementById('msec-' + name);
  if (targetSection) targetSection.classList.add('on');
};

window.loadAdminPanel = async function() {
  const b = await loadBrand();
  const aName = document.getElementById('aName');
  if (aName) aName.value = b.name || 'Aditya Graphics';
  
  const aTag = document.getElementById('aTag');
  if (aTag) aTag.value = b.tag || 'Jacquard Design Studio';
  
  const aLogo = document.getElementById('aLogo');
  if (aLogo) aLogo.value = b.logo || '';
  
  const aWa = document.getElementById('aWa');
  if (aWa) aWa.value = b.wa || '';
  
  const aEmail = document.getElementById('aEmail');
  if (aEmail) aEmail.value = b.email || 'adityagraphics886@gmail.com';
  
  prevLogo();
  renderAdminPortfolio();
  renderAdminPricing();
};

window.prevLogo = function() {
  const logoInput = document.getElementById('aLogo');
  if (!logoInput) return;
  const url = logoInput.value.trim();
  const box = document.getElementById('logoPreview');
  if (box) {
    box.innerHTML = url ? '<img src="' + url + '" style="width:100%;height:100%;object-fit:contain">' : '<span style="font-size:10px;color:var(--light)">No logo</span>';
  }
};

window.saveBrand = async function() {
  const b = await loadBrand();
  const newPwdInput = document.getElementById('aNewPwd');
  const newPwd = newPwdInput ? newPwdInput.value.trim() : '';
  const data = {
    name:  document.getElementById('aName').value.trim()  || 'Aditya Graphics',
    tag:   document.getElementById('aTag').value.trim()   || 'Jacquard Design Studio',
    logo:  document.getElementById('aLogo').value.trim(),
    wa:    document.getElementById('aWa').value.trim(),
    email: document.getElementById('aEmail').value.trim() || 'adityagraphics886@gmail.com',
  };

  const saveBtn = document.querySelector('#msec-brand .abtn-save');
  if (saveBtn) { saveBtn.disabled = true; saveBtn.textContent = 'Saving…'; }

  try {
    await saveToCloud('brand', data);

    // Handle password change
    if (newPwd) {
      const pwdRes = await fetch('/api/admin', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({
          action:      'changePassword',
          password:    sessionStorage.getItem('ag_auth'),
          newPassword: newPwd,
        }),
      });
      const pwdJson = await pwdRes.json();
      if (pwdJson.success) {
        sessionStorage.setItem('ag_auth', newPwd);
        if (newPwdInput) newPwdInput.value = '';
      } else {
        alert('Password change failed: ' + (pwdJson.error || 'Unknown error'));
      }
    }

    applyBrand();
    const banner = document.getElementById('bBrand');
    if (banner) { banner.style.display = 'block'; setTimeout(() => banner.style.display = 'none', 2500); }
  } catch (e) {
    alert('Error saving brand settings: ' + e.message);
  } finally {
    if (saveBtn) { saveBtn.disabled = false; saveBtn.textContent = 'Save Brand Settings'; }
  }
};

// ── ADMIN PORTFOLIO TAB ──────────────────────────────────────────────
window.renderAdminPortfolio = async function() {
  const items = await loadPortfolio();
  const list = document.getElementById('adminPlist');
  if (!list) return;
  
  list.innerHTML = items.map(it => '<div class="pli">' + (it.img ? '<img src="' + it.img + '">' : '<div class="pli-ph">No img</div>') +
    '<div class="pli-info"><strong>' + it.title + '</strong><span>' + it.cat + '</span></div>' +
    '<button class="abtn abtn-del" onclick="delItem(' + it.id + ')">Delete</button></div>').join('');
};

window.addItem = async function() {
  const title = document.getElementById('nTitle').value.trim();
  const cat   = document.getElementById('nCat').value;
  if (!title) { alert('Please enter a title.'); return; }

  const addBtn = document.querySelector('#msec-port .abtn-add');
  if (addBtn) { addBtn.disabled = true; addBtn.textContent = 'Saving…'; }

  try {
    const items = await loadPortfolio();
    const newId = items.reduce((m, i) => Math.max(m, i.id), 0) + 1;
    items.push({
      id: newId, title, cat,
      img:  document.getElementById('nImg').value.trim(),
      desc: document.getElementById('nDesc').value.trim(),
      year: document.getElementById('nYear').value.trim(),
    });

    await saveToCloud('portfolio', { items });

    document.getElementById('nTitle').value = '';
    document.getElementById('nImg').value   = '';
    document.getElementById('nDesc').value  = '';
    document.getElementById('nYear').value  = '';

    renderPortfolio();
    renderAdminPortfolio();
    const banner = document.getElementById('bPort');
    if (banner) { banner.style.display = 'block'; setTimeout(() => banner.style.display = 'none', 2000); }
  } catch (e) {
    alert('Error adding item: ' + e.message);
  } finally {
    if (addBtn) { addBtn.disabled = false; addBtn.textContent = '+ Add to Portfolio'; }
  }
};

window.delItem = async function(id) {
  if (!confirm('Delete this item?')) return;
  const items    = await loadPortfolio();
  const filtered = items.filter(i => i.id !== id);
  try {
    await saveToCloud('portfolio', { items: filtered });
    renderPortfolio();
    renderAdminPortfolio();
  } catch (e) {
    alert('Error deleting item: ' + e.message);
  }
};

// ── ADMIN PRICING TAB ────────────────────────────────────────────────
window.renderAdminPricing = async function() {
  const rows = await loadPricing();
  const wrap = document.getElementById('priceRows');
  if (!wrap) return;
  wrap.innerHTML = rows.map((r, i) => '<div class="perow"><input type="text" value="' + r.type + '" id="pt' + i + '"><input type="text" value="' + r.price + '" id="pp' + i + '" style="max-width:140px"><button class="abtn abtn-del" onclick="delPriceRow(' + i + ')">✕</button></div>').join('');
};

window.delPriceRow = async function(i) {
  const rows = await loadPricing();
  rows.splice(i, 1);
  try {
    await saveToCloud('pricing', { rows });
    renderPricing();
    renderAdminPricing();
  } catch (e) {
    alert('Error deleting row: ' + e.message);
  }
};

window.savePricing = async function() {
  const rows  = await loadPricing();
  const saved = rows.map((_, i) => ({
    type:  document.getElementById('pt' + i).value.trim(),
    price: document.getElementById('pp' + i).value.trim(),
  })).filter(r => r.type);

  const saveBtn = document.querySelector('#msec-price .abtn-save');
  if (saveBtn) { saveBtn.disabled = true; saveBtn.textContent = 'Saving…'; }

  try {
    await saveToCloud('pricing', { rows: saved });
    renderPricing();
    renderAdminPricing();
    const banner = document.getElementById('bPrice');
    if (banner) { banner.style.display = 'block'; setTimeout(() => banner.style.display = 'none', 2000); }
  } catch (e) {
    alert('Error saving pricing: ' + e.message);
  } finally {
    if (saveBtn) { saveBtn.disabled = false; saveBtn.textContent = 'Save Pricing'; }
  }
};

// ── CONTACT FORM PRE-FILL ────────────────────────────────────────────
window.submitForm = async function() {
  const b = await loadBrand();
  const wa = b.wa || '919999999999';
  const name = document.getElementById('cName').value.trim();
  const co = document.getElementById('cCo').value.trim();
  const phone = document.getElementById('cPhone').value.trim();
  const msg = document.getElementById('cMsg').value.trim();
  
  let text = 'Hi Aditya Graphics,\n';
  if (name) text += 'Name: ' + name + '\n';
  if (co)   text += 'Company: ' + co + '\n';
  if (phone)text += 'Phone: ' + phone + '\n';
  if (msg)  text += '\n' + msg;
  
  window.open('https://wa.me/' + wa.replace(/[^0-9]/g, '') + '?text=' + encodeURIComponent(text), '_blank');
};

// ── PRIVACY AND TERMS MODALS ─────────────────────────────────────────
window.showPolicy = function(type) {
  const titles = { privacy: 'Privacy Policy', terms: 'Terms of Use' };
  const bodies = {
    privacy: '<p>We collect only information you voluntarily share (name, contact details) to provide design services. Your data is never sold to third parties. WhatsApp conversations are subject to WhatsApp\u2019s own privacy policy.</p>',
    terms: '<p>All designs created by Aditya Graphics are for the client\u2019s exclusive use upon full payment. Designs remain the intellectual property of Aditya Graphics until payment is received. We reserve the right to display completed work as portfolio samples.</p>'
  };
  
  const titleEl = document.getElementById('policyTitle');
  if (titleEl) titleEl.textContent = titles[type] || 'Policy';
  
  const bodyEl = document.getElementById('policyBody');
  if (bodyEl) bodyEl.innerHTML = bodies[type] || '';
  
  openOverlay('policyOverlay');
};

// ── ORCHESTRATE LIFECYCLE ON EVENT ───────────────────────────────────
document.addEventListener('componentsLoaded', async () => {
  // Apply brand details
  await applyBrand();
  
  // Render layout segments
  renderHeroPills();
  await renderPortfolio();
  await renderPricing();
  await renderTestimonials();
  
  // Apply initial language switcher UI selections
  setLang(currentLang);
  
  // Initialize responsive navigation and observer animations
  if (typeof initNavigation === 'function') initNavigation();
  if (typeof initAnimations === 'function') initAnimations();
});

// Download helpers removed — admin changes now sync automatically via Firebase.
