/* ============================================
   BlockStore — Main JavaScript
   ============================================ */

const translations = {
    en: {
        nav_ranks: "Ranks",
        nav_features: "Features",
        nav_faq: "FAQ",
        cart: "Cart (0)",

        hero_badge: "⚡ New Season Live",
        hero_title: 'Level Up Your <span class="accent">Gaming</span> Experience',
        hero_desc: "Premium ranks, custom perks, and instant delivery. Join thousands of players dominating the server.",
        hero_btn1: "Browse Ranks",
        hero_btn2: "Learn More",

        shop_badge: "💰 Shop",
        shop_title: "Choose Your Rank",
        shop_desc: "Instant delivery. Lifetime access. No hidden fees.",

        rank1_name: "Starter",
        rank1_p1: "✓ Colored chat",
        rank1_p2: "✓ /fly in lobby",
        rank1_p3: "✓ 2 homes",

        rank2_name: "Elite",
        rank2_p1: "✓ Everything in Starter",
        rank2_p2: "✓ /fly everywhere",
        rank2_p3: "✓ 5 homes",
        rank2_p4: "✓ Custom prefix",

        rank3_name: "Legend",
        rank3_p1: "✓ Everything in Elite",
        rank3_p2: "✓ /nick command",
        rank3_p3: "✓ 10 homes",
        rank3_p4: "✓ Exclusive cosmetics",
        rank3_p5: "✓ Priority support",

        buy: "Buy Now",
        popular: "Popular",

        why_badge: "✨ Why Us",
        why_title: "Why Choose BlockStore",
        why_desc: "Built for players who want the best.",

        feat1_title: "Instant Delivery",
        feat1_desc: "Your rank activates the moment you pay. No waiting, no tickets.",
        feat2_title: "Secure Payments",
        feat2_desc: "Powered by Stripe. Your data is encrypted and safe.",
        feat3_title: "24/7 Support",
        feat3_desc: "Real humans ready to help on Discord anytime.",

        faq_badge: "❓ FAQ",
        faq_title: "Frequently Asked Questions",
        faq_desc: "Everything you need to know before buying.",

        faq1_q: "How fast is the delivery?",
        faq1_a: "Instantly. As soon as your payment is confirmed, the rank is applied to your account automatically.",
        faq2_q: "Can I upgrade my rank later?",
        faq2_a: "Yes. You only pay the difference between ranks. Your perks carry over.",
        faq3_q: "What payment methods do you accept?",
        faq3_a: "Credit card, PayPal, Fawry, and mobile wallets (Vodafone/Etisalat/Orange Cash). All payments are encrypted.",
        faq4_q: "Do ranks expire?",
        faq4_a: "Never. All ranks are lifetime and never expire, even if you leave the server.",

        footer_tagline: "Premium gaming ranks for serious players.",
        footer_shop: "Shop",
        footer_support: "Support",
        footer_discord: "Discord",
        footer_contact: "Contact",
        footer_refunds: "Refunds",
        footer_legal: "Legal",
        footer_terms: "Terms",
        footer_privacy: "Privacy",
        footer_license: "License",
        footer_copy: "© 2025 BlockStore. All rights reserved. Not affiliated with any game publisher.",

        pay_title: "Complete Your Payment",
        pay_desc: "Choose your preferred payment method",
        pay_card: "Credit / Debit Card",
        pay_paypal: "PayPal",
        pay_fawry: "Fawry",
        pay_wallet: "Mobile Wallet",
        pay_apple: "Apple Pay",
        pay_secure: "🔒 All payments are secure and encrypted."
    },

    ar: {
        nav_ranks: "الرتب",
        nav_features: "المميزات",
        nav_faq: "الأسئلة الشائعة",
        cart: "السلة (0)",

        hero_badge: "⚡ موسم جديد متاح",
        hero_title: 'ارفع مستواك في <span class="accent">عالم الجيمنج</span>',
        hero_desc: "رتب حصرية، مميزات مخصصة، وتسليم فوري. انضم لآلاف اللاعبين المتفوقين على السيرفر.",
        hero_btn1: "تصفح الرتب",
        hero_btn2: "اعرف المزيد",

        shop_badge: "💰 المتجر",
        shop_title: "اختر رتبتك",
        shop_desc: "تسليم فوري. وصول مدى الحياة. بدون رسوم خفية.",

        rank1_name: "المبتدئ",
        rank1_p1: "✓ شات ملون",
        rank1_p2: "✓ طيران في اللوبي",
        rank1_p3: "✓ بيتين",

        rank2_name: "النخبة",
        rank2_p1: "✓ كل مميزات المبتدئ",
        rank2_p2: "✓ طيران في كل مكان",
        rank2_p3: "✓ 5 بيوت",
        rank2_p4: "✓ لقب مخصص",

        rank3_name: "الأسطورة",
        rank3_p1: "✓ كل مميزات النخبة",
        rank3_p2: "✓ أمر /nick",
        rank3_p3: "✓ 10 بيوت",
        rank3_p4: "✓ إكسسوارات حصرية",
        rank3_p5: "✓ دعم بأولوية",

        buy: "اشتري الآن",
        popular: "الأكثر شعبية",

        why_badge: "✨ ليه احنا",
        why_title: "ليه تختار BlockStore",
        why_desc: "مبني للاعبين اللي عايزين الأفضل.",

        feat1_title: "تسليم فوري",
        feat1_desc: "رتبتك تفعل لحظة الدفع. مفيش انتظار، مفيش تذاكر دعم.",
        feat2_title: "دفع آمن",
        feat2_desc: "مدعوم بـ Stripe. بياناتك مشفرة وآمنة.",
        feat3_title: "دعم 24/7",
        feat3_desc: "ناس حقيقية جاهزة تساعدك على ديسكورد في أي وقت.",

        faq_badge: "❓ الأسئلة",
        faq_title: "الأسئلة الشائعة",
        faq_desc: "كل اللي محتاج تعرفه قبل ما تشتري.",

        faq1_q: "التسليم بياخد قد إيه؟",
        faq1_a: "فوري. بمجرد تأكيد الدفع، الرتبة بتتفعل على حسابك تلقائياً.",
        faq2_q: "أقدر أطور رتبتي بعدين؟",
        faq2_a: "أيوة. بتدفع الفرق بس بين الرتبتين. ومميزاتك القديمة بتفضل معاك.",
        faq3_q: "بتقبلوا إيه طرق دفع؟",
        faq3_a: "بطاقات ائتمان، PayPal، فوري، ومحافظ إلكترونية (فودافون كاش، اتصالات كاش، أورنج كاش). كل المدفوعات مشفرة.",
        faq4_q: "الرتب بتنتهي؟",
        faq4_a: "أبداً. كل الرتب مدى الحياة ومش بتنتهي، حتى لو سبت السيرفر.",

        footer_tagline: "رتب جيمنج حصرية للاعبين الجادين.",
        footer_shop: "المتجر",
        footer_support: "الدعم",
        footer_discord: "ديسكورد",
        footer_contact: "اتصل بنا",
        footer_refunds: "الاسترجاع",
        footer_legal: "قانوني",
        footer_terms: "الشروط",
        footer_privacy: "الخصوصية",
        footer_license: "الترخيص",
        footer_copy: "© 2025 BlockStore. جميع الحقوق محفوظة. غير مرتبط بأي ناشر ألعاب.",

        pay_title: "أكمل الدفع",
        pay_desc: "اختار طريقة الدفع المفضلة",
        pay_card: "بطاقة ائتمان / خصم",
        pay_paypal: "PayPal",
        pay_fawry: "فوري",
        pay_wallet: "محفظة إلكترونية",
        pay_apple: "Apple Pay",
        pay_secure: "🔒 كل المدفوعات آمنة ومشفرة."
    }
};

// اللغة الافتراضية عربي
let currentLang = localStorage.getItem("blockstore-lang") || "ar";

function applyLanguage(lang) {
    const dict = translations[lang];
    if (!dict) return;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (dict[key] !== undefined) {
            el.innerHTML = dict[key];
        }
    });

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    const langBtn = document.getElementById("langBtn");
    if (langBtn) {
        langBtn.textContent = lang === "ar" ? "English" : "العربية";
    }

    localStorage.setItem("blockstore-lang", lang);
    currentLang = lang;
}

document.addEventListener("DOMContentLoaded", () => {
    applyLanguage(currentLang);

    const langBtn = document.getElementById("langBtn");
    if (langBtn) {
        langBtn.addEventListener("click", () => {
            const newLang = currentLang === "ar" ? "en" : "ar";
            applyLanguage(newLang);
        });
    }

    /* ===== Modal الدفع ===== */
    const modal = document.getElementById("paymentModal");
    const modalClose = document.getElementById("modalClose");

    // بنستخدم Event Delegation عشان يشتغل مع الأزرار الجديدة
    document.body.addEventListener("click", (e) => {
        if (e.target.classList.contains("btn") && e.target.closest(".rank-card")) {
            e.preventDefault();
            modal.classList.add("active");
        }
    });

    if (modalClose) {
        modalClose.addEventListener("click", () => {
            modal.classList.remove("active");
        });
    }

    if (modal) {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.classList.remove("active");
            }
        });
    }

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal && modal.classList.contains("active")) {
            modal.classList.remove("active");
        }
    });

    /* ===== تحميل البيانات من الأدمن (لو موجودة) ===== */
    const savedData = localStorage.getItem("blockstore-data");
    if (savedData) {
        try {
            const ranks = JSON.parse(savedData);
            const grid = document.querySelector(".ranks-grid");
            if (!grid) return;

            grid.innerHTML = "";

            ranks.forEach((rank, index) => {
                const card = document.createElement("div");
                card.className = "rank-card";
                if (index === 1) card.classList.add("featured");

                const priceParts = rank.price.split(".");
                const priceHtml = priceParts.length === 2
                    ? `<span>${priceParts[0]}</span>.${priceParts[1]}`
                    : rank.price;

                card.innerHTML = `
                    ${index === 1 ? '<span class="ribbon" data-i18n="popular">الأكثر شعبية</span>' : ''}
                    <div class="rank-icon ${index === 0 ? 'icon-green' : index === 1 ? 'icon-gold' : 'icon-purple'}"></div>
                    <h3>${rank.name}</h3>
                    <div class="rank-price">${priceHtml}</div>
                    <ul class="rank-perks">
                        ${rank.perks.map((p) => `<li>✓ ${p}</li>`).join("")}
                    </ul>
                    <a href="#" class="btn ${index === 1 ? 'btn-primary' : 'btn-ghost'}" data-i18n="buy">اشتري الآن</a>
                `;

                grid.appendChild(card);
            });

            // إعادة تطبيق الترجمة عشان الأزرار الجديدة
            applyLanguage(currentLang);

        } catch (e) {
            console.error("Error loading admin data:", e);
        }
    }
});